#!/usr/bin/env bash
# ============================================================================
# generate-responsive-images.sh
#
# Regenerate the WebP responsive ladder for site/images/.
#
# For each source JPG, emits multiple width variants as WebP at q88 so the
# browser can pick the right one via <img srcset>. Idempotent — re-run after
# adding new photos and it will skip anything already built.
#
# Three classifications determine the ladder:
#   FULL   (hero-tier)  → 480 / 1024 / 1920 / 2560 / 3840 widths
#   MEDIUM (card-tier)  → 400 / 800  / 1200 widths
#   SKIP   (as-is)      → no regeneration (badges, logos, shapes, favicons)
#
# A variant is only generated if its target width is <= the source width
# (never upscales). Output filenames: {basename}-{width}.webp.
#
# Usage:
#   ./scripts/generate-responsive-images.sh           # run all
#   ./scripts/generate-responsive-images.sh hero-ranch-sunset   # one basename
#
# Requires: cwebp (brew install webp), sips (macOS built-in).
# ============================================================================

set -euo pipefail

IMG_DIR="$(cd "$(dirname "$0")/../site/images" && pwd)"
QUALITY=88

# --- Classification ----------------------------------------------------------
# Basenames in each tier. Anything listed here gets regenerated; anything
# not listed at all is treated as SKIP (safer default than auto-including).

FULL_LADDER=(
  hero-ranch-sunset
  wedding-hero
  events-hero-barn
  contact-hero
  faqs-hero
  about-ranch-aerial
  accom-cabin-exterior
  accom-campfire-evening
  accom-group-aerial
  accom-safari-tent
  cta-campfire-night
  cta-music-night
  cta-tent-morning
  cta-wedding-reception
  wedding-ceremony-corral
  wedding-cta-sunset
  wedding-event-barn
  wedding-poolside
  venue-event-barn
  venue-neon-moon
  venue-poolside
  feature-event-barn
  feature-music
  feature-pool
  feature-safari-tent
  feature-wedding
)
FULL_WIDTHS=(480 1024 1920 2560 3840)

MEDIUM_LADDER=(
  blog-corporate-retreat
  blog-glamping-packing
  blog-glamping-vs-camping
  blog-manor-things-to-do
  blog-ranch-wedding-tips
  blog-wedding-venues
  event-bridal-sip-see
  event-free-friday-pool
  event-lone-star-party
  event-mothers-day
  event-paella-dinner
  event-rancho-rodeo
  event-yoga-mimosas
)
MEDIUM_WIDTHS=(400 800 1200)

# --- Helpers -----------------------------------------------------------------

source_width() {
  # Prints the pixelWidth of the given file, or empty string if unreadable.
  sips -g pixelWidth "$1" 2>/dev/null | awk '/pixelWidth/ {print $2}'
}

find_source() {
  # Prefer .jpg, fall back to .png. Returns the path or empty.
  local base="$1"
  if [[ -f "$IMG_DIR/$base.jpg" ]]; then echo "$IMG_DIR/$base.jpg"
  elif [[ -f "$IMG_DIR/$base.png" ]]; then echo "$IMG_DIR/$base.png"
  else echo ""
  fi
}

generate_variant() {
  # $1 = source path, $2 = target width, $3 = output path
  local src="$1" w="$2" out="$3"
  if [[ -f "$out" ]]; then
    echo "  skip   $(basename "$out") (exists)"
    return 0
  fi
  cwebp -q "$QUALITY" -resize "$w" 0 -quiet "$src" -o "$out"
  local size
  size=$(ls -lh "$out" | awk '{print $5}')
  echo "  build  $(basename "$out")  ($size)"
}

process_basename() {
  local base="$1"
  local src; src="$(find_source "$base")"
  if [[ -z "$src" ]]; then
    echo "WARN: no source for $base — skipping"
    return 0
  fi

  local sw; sw="$(source_width "$src")"
  if [[ -z "$sw" ]]; then
    echo "WARN: could not read width for $src — skipping"
    return 0
  fi

  local widths=()
  if printf '%s\n' "${FULL_LADDER[@]}" | grep -qx "$base"; then
    widths=("${FULL_WIDTHS[@]}")
  elif printf '%s\n' "${MEDIUM_LADDER[@]}" | grep -qx "$base"; then
    widths=("${MEDIUM_WIDTHS[@]}")
  else
    echo "  skip   $base (not in any ladder)"
    return 0
  fi

  echo "$base  (source: ${sw}px wide)"
  for w in "${widths[@]}"; do
    if (( w > sw )); then
      echo "  skip   ${base}-${w}.webp (would upscale from ${sw}px)"
      continue
    fi
    generate_variant "$src" "$w" "$IMG_DIR/${base}-${w}.webp"
  done
}

# --- Main --------------------------------------------------------------------

if ! command -v cwebp >/dev/null 2>&1; then
  echo "ERROR: cwebp not found. Install with: brew install webp"
  exit 1
fi

if [[ $# -gt 0 ]]; then
  for base in "$@"; do process_basename "$base"; done
else
  for base in "${FULL_LADDER[@]}" "${MEDIUM_LADDER[@]}"; do
    process_basename "$base"
  done
fi

echo ""
echo "Done. Regenerated WebP variants live next to the source JPGs in $IMG_DIR."
