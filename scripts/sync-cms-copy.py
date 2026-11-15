#!/usr/bin/env python3
"""Bake live CMS copy (Supabase `site_content`) into the static HTML fallback.

The admin saves copy to Supabase and `cms.js` swaps it in at runtime. Crawlers
that do not run JS, and the JSON-LD in <head>, keep the old hardcoded text.
This script rewrites the fallback so the static page matches what visitors see.

    python3 scripts/sync-cms-copy.py            # report drift, change nothing
    python3 scripts/sync-cms-copy.py --write    # rewrite site/**/*.html

Mirrors applyCopyBlock() in site/js/cms.js: text tags get escaped text,
data-copy-html gets raw HTML, other containers get blank-line paragraphs.
Blocks driven by data-copy-attr are skipped. If a block's old text also appears
verbatim inside a JSON-LD string in the same file, that string is updated too.
"""
import glob
import html
import json
import re
import sys
import urllib.request

ROOT = "site"
TEXT_TAGS = {"h1", "h2", "h3", "h4", "p", "span", "a", "li"}
LD = re.compile(r'<script type="application/ld\+json">.*?</script>', re.S)


def cms_rows():
    js = open(f"{ROOT}/js/cms.js", encoding="utf-8").read()
    url = re.search(r"SUPABASE_URL = '([^']+)'", js).group(1)
    key = re.search(r"SUPABASE_ANON_KEY = '([^']+)'", js).group(1)
    req = urllib.request.Request(
        f"{url}/rest/v1/site_content?select=block_key,body&limit=1000",
        headers={"apikey": key, "Authorization": f"Bearer {key}"},
    )
    return json.load(urllib.request.urlopen(req, timeout=30))


def norm(s):
    return re.sub(r"\s+", " ", html.unescape(re.sub(r"<[^>]+>", "", s))).strip()


def render(tag, attrs, body):
    if 'data-copy-html="true"' in attrs:
        return body
    if tag.lower() in TEXT_TAGS:
        return html.escape(body, quote=False)
    return "".join(f"<p>{html.escape(p.strip(), quote=False)}</p>" for p in re.split(r"\n\n+", body))


def main():
    write = "--write" in sys.argv
    rows = {r["block_key"]: r["body"] for r in cms_rows() if r["body"]}
    drift = 0
    for path in sorted(glob.glob(f"{ROOT}/**/*.html", recursive=True)):
        src = open(path, encoding="utf-8").read()
        out = src
        for key, body in rows.items():
            pat = re.compile(r'(<(\w+)([^>]*data-copy-key="%s"[^>]*)>)(.*?)(</\2>)' % re.escape(key), re.S)
            for m in pat.finditer(src):
                if "data-copy-attr" in m.group(3) or norm(m.group(4)) == norm(body):
                    continue
                drift += 1
                old = norm(m.group(4))
                print(f"DRIFT {path} {key}\n  static: {old[:160]}\n  cms   : {norm(body)[:160]}")
                out = out.replace(m.group(0), m.group(1) + render(m.group(2), m.group(3), body) + m.group(5))
                old_json, new_json = json.dumps(old)[1:-1], json.dumps(norm(body))[1:-1]
                if len(old) >= 40:  # short labels are not unique enough to match safely
                    synced = LD.sub(lambda s: s.group(0).replace(old_json, new_json), out)
                    if synced != out:
                        out = synced
                        print("  + JSON-LD string updated")
        if write and out != src:
            open(path, "w", encoding="utf-8").write(out)
    print(f"{drift} drifted block(s){' rewritten' if write else ''}")


if __name__ == "__main__":
    main()
