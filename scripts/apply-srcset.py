#!/usr/bin/env python3
"""
apply-srcset.py — sweep site HTML and rewrite <img> tags referencing the old
unsuffixed /images/{basename}.webp format into srcset-aware tags that point at
the generated -{width}.webp ladder produced by generate-responsive-images.sh.

What it touches:
  Only <img> tags whose src is a bare /images/{basename}.webp (no suffix).
  Tags already in -{width}.webp form are left alone (idempotent).

Classification (basename → available ladder) is discovered by scanning
site/images/ for files matching {basename}-{W}.webp. If a basename has no
suffix variants at all, the tag is left untouched (so we never break a
reference to a one-off file we didn't regenerate — logos, favicons, etc.).

Sizes heuristic (chosen per img based on width attribute & wrapper context):
  - No width attr, or wrapper class contains "hero"           → 100vw
  - width attr >= 1200                                        → 100vw
  - width attr 600-1199                                       → "(min-width: 900px) 50vw, 100vw"
  - width attr 400-599                                        → "(min-width: 900px) 33vw, (min-width: 600px) 50vw, 100vw"
  - width attr <= 399                                         → "(min-width: 900px) 25vw, 50vw"

The src attribute is set to the MIDDLE variant (fallback for browsers that
don't support srcset — effectively none in 2026 but still correct).

Usage:
  ./scripts/apply-srcset.py                 # dry run, shows proposed changes
  ./scripts/apply-srcset.py --write         # apply changes in place
  ./scripts/apply-srcset.py --write path    # only rewrite that one file
"""

import os
import re
import sys
from collections import defaultdict

SITE_DIR = os.path.join(os.path.dirname(__file__), "..", "site")
SITE_DIR = os.path.abspath(SITE_DIR)
IMG_DIR = os.path.join(SITE_DIR, "images")

# --- Build the basename → sorted-widths registry ----------------------------

def build_registry():
    """Scan site/images and group `basename-WIDTH.webp` files by basename."""
    registry = defaultdict(list)
    pat = re.compile(r"^(.+)-(\d+)\.webp$")
    for fname in os.listdir(IMG_DIR):
        m = pat.match(fname)
        if not m:
            continue
        basename, width = m.group(1), int(m.group(2))
        registry[basename].append(width)
    for b in registry:
        registry[b].sort()
    return dict(registry)

# --- Pick a sizes attribute --------------------------------------------------

def pick_sizes(width_attr, context_class):
    if context_class and "hero" in context_class:
        return "100vw"
    if not width_attr:
        return "100vw"
    try:
        w = int(width_attr)
    except ValueError:
        return "100vw"
    if w >= 1200:
        return "100vw"
    if w >= 600:
        return "(min-width: 900px) 50vw, 100vw"
    if w >= 400:
        return "(min-width: 900px) 33vw, (min-width: 600px) 50vw, 100vw"
    return "(min-width: 900px) 25vw, 50vw"

# --- Build srcset + pick fallback src ---------------------------------------

def build_srcset(basename, widths, path_prefix):
    """Return (srcset_string, fallback_src). fallback is the middle variant."""
    parts = [f"{path_prefix}{basename}-{w}.webp {w}w" for w in widths]
    srcset = ", ".join(parts)
    # Pick middle as fallback
    fallback_w = widths[len(widths) // 2]
    fallback = f"{path_prefix}{basename}-{fallback_w}.webp"
    return srcset, fallback

# --- Rewrite one <img> tag ---------------------------------------------------

# Match img tags with a bare src="{prefix}images/{basename}.webp" where prefix
# is "/", "", "./", or "../" — i.e. whatever relative path the page uses.
# Only matches basenames with NO -WIDTH suffix (we skip already-rewritten tags).
IMG_RE = re.compile(
    r'<img(?P<before>[^>]*?)\s+src="(?P<prefix>(?:\.\./|\./|/)?images/)(?P<basename>[a-zA-Z][a-zA-Z0-9_-]*?)\.webp"(?P<after>[^>]*?)>',
    re.DOTALL,
)

ATTR_WIDTH = re.compile(r'\swidth="(\d+)"')
ATTR_CLASS = re.compile(r'\sclass="([^"]+)"')
ATTR_SRCSET = re.compile(r'\ssrcset="[^"]*"')
ATTR_SIZES = re.compile(r'\ssizes="[^"]*"')
ATTR_LOADING = re.compile(r'\sloading="[^"]*"')
ATTR_DECODING = re.compile(r'\sdecoding="[^"]*"')

def rewrite_tag(match, registry):
    before = match.group("before")
    after = match.group("after")
    prefix = match.group("prefix")
    basename = match.group("basename")

    # If basename has no suffix variants in the registry, leave it alone.
    widths = registry.get(basename)
    if not widths:
        return match.group(0)

    # If the tag already has a srcset (e.g. was edited by hand), don't touch.
    combined = before + after
    if ATTR_SRCSET.search(combined):
        return match.group(0)

    # Pick sizes based on width attr + class
    wm = ATTR_WIDTH.search(combined)
    cm = ATTR_CLASS.search(combined)
    width_attr = wm.group(1) if wm else None
    context_class = cm.group(1) if cm else None
    sizes_value = pick_sizes(width_attr, context_class)

    # Build the new src + srcset
    srcset_value, fallback_src = build_srcset(basename, widths, prefix)

    # Build the new tag: preserve the before/after body, swap src, inject srcset + sizes,
    # ensure loading=lazy and decoding=async are present (don't clobber if they are).
    # Clean out any existing sizes (unlikely but safe).
    after = ATTR_SIZES.sub("", after)

    new_attrs = f' src="{fallback_src}" srcset="{srcset_value}" sizes="{sizes_value}"'
    tag = f"<img{before}{new_attrs}{after}"

    # Ensure loading + decoding attributes exist
    if not ATTR_LOADING.search(tag):
        tag += ' loading="lazy"'
    if not ATTR_DECODING.search(tag):
        tag += ' decoding="async"'
    tag += ">"

    # Collapse any double spaces that may have resulted
    tag = re.sub(r"  +", " ", tag)
    return tag

# --- File-level driver ------------------------------------------------------

def process_file(path, registry, write=False):
    with open(path, "r", encoding="utf-8") as f:
        original = f.read()
    new_text, n = IMG_RE.subn(lambda m: rewrite_tag(m, registry), original)
    if n == 0 or new_text == original:
        return 0
    if write:
        with open(path, "w", encoding="utf-8") as f:
            f.write(new_text)
    return n

def walk_html(start):
    for root, _dirs, files in os.walk(start):
        for f in files:
            if f.endswith(".html"):
                yield os.path.join(root, f)

def main():
    args = sys.argv[1:]
    write = "--write" in args
    args = [a for a in args if a != "--write"]
    targets = args if args else list(walk_html(SITE_DIR))

    registry = build_registry()
    print(f"Registry: {len(registry)} basenames with responsive ladders")

    total = 0
    for path in targets:
        n = process_file(path, registry, write=write)
        if n:
            rel = os.path.relpath(path, SITE_DIR)
            marker = "WROTE" if write else "would rewrite"
            print(f"  {marker:>14}  {n:>3} tags  {rel}")
            total += n
    verb = "rewrote" if write else "would rewrite"
    print(f"\nTotal: {verb} {total} img tags.")
    if not write and total:
        print("Re-run with --write to apply.")

if __name__ == "__main__":
    main()
