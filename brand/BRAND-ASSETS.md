# Rancho Moonrise — Brand Assets Index

**Last updated:** 2026-04-10
**Source:** Official brand pack delivered 2026-04-10 (`Rancho Moonrise Brand Pack-20260410T164422Z-3-001.zip`)

This file is the **index** to where brand assets live. Read this before referencing logos, fonts, symbols, or colors in code.

---

## Where the Full Pack Lives

**Canonical full pack (not in repo — too large at ~1 GB):**
`/Users/adamstyer/Documents/rancho-moonrise-assets/brand-pack-2026-04-10/`

Contents (do NOT copy any of this into the repo without curating first):
- `01_Brand Guidelines/RanchoMoonrise_BrandGuidelines_2022.pdf` — 30 MB canonical PDF
- `02_Logos/01_With Texture/` — 623 MB of print-ready CMYK EPS + texture-embedded SVGs + RGB PNGs
- `02_Logos/02_Without Texture/` — 161 MB of flat CMYK EPS + clean vector SVGs + RGB PNGs
- `03_Monograms/` — print + digital
- `04_Symbols/{Sun, Agave, Cresent, Prickly Pear, Waves}/` — print + digital
- `Fonts/Americane-Black.otf`, `Americane-Bold.otf` (+ Monotype EULA)

Note: the `.txt` extract `brand/2022-brand-guidelines.txt` in this repo is the text version of the PDF — grep that when you need to quote the guidelines.

**Original zip:** Still sitting in `~/Downloads/Rancho Moonrise Brand Pack-20260410T164422Z-3-001.zip` (715 MB). Safe to delete when you're confident the extracted version is fine.

---

## What's In the Repo (Web-Ready Subset)

Total repo footprint for brand assets: **~7.7 MB** (352 image files + 3 font files). Safe for Vercel deploys.

### Fonts — `brand/fonts/`

| File | Weight | Use |
|------|--------|-----|
| `Americane-Black.otf` | Black | Display headlines only (tight spaces, hero) |
| `Americane-Bold.otf` | Bold | Primary display, section headings |
| `Monotype Font Software End User License Agreement.html` | — | EULA — keep bundled with the OTFs |

Web fonts for body/UI stay as currently used by `site/css/`: **Playfair Display** (web headings), **Overpass** (body), **Lora** (accent). Americane is Adobe-only licensing for print — verify the Monotype EULA before embedding as `@font-face` on the public site.

### Logos — `site/images/brand/logos/`

Organized by **texture** × **level**. Each leaf folder contains all available color variants.

```
logos/
├── textured/        ← the aspirational "organic/handmade" look (Ashley's direction)
│   ├── primary/     ← Rancho Moonrise + "Austin, Texas" + tagline
│   ├── secondary/   ← Rancho Moonrise + tagline
│   └── tertiary/    ← Rancho Moonrise only, no text
└── untextured/      ← flat vector, scales perfectly, use when textured is too busy
    ├── primary/
    ├── secondary/
    └── tertiary/
```

**Textured folders contain only @2x PNGs** (not SVGs). The textured SVGs are 2 MB each because they embed the paper/canvas texture as a base64 raster — not web-friendly. Use PNGs for textured display, use SVGs only for the untextured variants.

**Untextured folders contain both SVGs and @2x PNGs.** Prefer SVG for any size-flexible use (header, favicon, hero overlay). Fall back to the @2x PNG only when the consumer doesn't support SVG.

### Monograms — `site/images/brand/monograms/`

Flat folder (no subdirs). The "ATX" monogram is the small circular lockup — use for social avatars, favicons, footer accents. Both SVG and @2x PNG available in every color.

### Symbols — `site/images/brand/symbols/`

```
symbols/
├── agave/          ← Agave plant silhouette
├── cresent/        ← Crescent moon (note: folder is misspelled in the source pack — preserved as-is to match official file names)
├── prickly-pear/   ← Prickly pear cactus
├── sun/            ← Sun / rays
└── waves/          ← Waves / water
```

Each folder contains all color variants as SVG + @2x PNG. These are decorative accent elements — good for section dividers, hero overlays, button icons, pattern repeats.

---

## Color Naming Convention (IMPORTANT)

**Every logo/monogram/symbol file is named with its color as a suffix.** The color names map 1:1 to the brand palette in `brand/voice-guide.md`. This means you can pick an asset deterministically by semantic intent:

| Color name in filename | Hex | When to use |
|------------------------|-----|-------------|
| `Fullcolor` / `FullColor` | multi | Default — use when the background can support a full-color mark |
| `WhiteDenim` | `#F2E9DB` | Cream/off-white — for dark backgrounds that need warmth |
| `Clay` | `#B6603F` | Terracotta — on cream or pine backgrounds, warm primary |
| `Amber` | `#C9842B` | Warm accent — golden hour CTAs |
| `Coral` | `#DE8556` | Softer warm — hero overlays |
| `Pine` | `#31735A` | Deep green — grounded, outdoor copy |
| `Agave` | `#4A6741` | Sage/olive — subtler alternative to Pine |
| `Charcoal` | near-black | High-contrast dark on cream |
| `White` | `#FFFFFF` | Pure white — for photographic overlays |
| `Black` | `#000000` | Pure black — print-only, avoid on web |
| `Sunrise` | orange gradient | Full sunrise gradient — special occasions only |

Logos/monograms come in most of these colors. Symbols come in a broader set (~20 colors each) because they're used as decorative accents — the extras (`Daisy`, `Canary`, `Glow`, `Hibiscus`, `Poppy`, `Rose`, `Cerulean`, `Sage`, `Stone`, etc.) are mood colors for seasonal or event-specific treatments.

**Rule of thumb:** if you're picking a primary brand asset, start with `Fullcolor` or `Clay`. Only reach for the mood colors when you have a specific reason (e.g., a "Summer Pool Day" campaign might use `Cerulean` + `Canary`).

---

## How to Reference Assets in Code

**HTML example (header logo, SVG preferred):**
```html
<img src="/images/brand/logos/untextured/secondary/RanchoMoonrise_Logo_RGB_Secondary_Clay.svg"
     alt="Rancho Moonrise" width="240" height="80">
```

**HTML example (hero, textured PNG for the organic look):**
```html
<img src="/images/brand/logos/textured/primary/RanchoMoonrise_Logo_RGB_Primary_Texture_Fullcolor@2x.png"
     alt="Rancho Moonrise — Austin, Texas" width="480" height="240">
```

**CSS example (monogram favicon source):**
```css
.favicon { background-image: url("/images/brand/monograms/RanchoMoonrise_Logo_RGB_Monogram_ATX_Clay.svg"); }
```

---

## Existing Site Logo — Needs Replacement

`site/images/logo.png` and `site/images/logo.webp` are the current single-variant logo on the live site. They pre-date this brand pack and should be replaced with the appropriate variant from `site/images/brand/logos/` during the next site sweep. Flag in TODO.md.

---

## What This Index Does NOT Cover

- **Print specs, CMYK color profiles, bleed, margins** — consult the PDF in the canonical full pack
- **Clear-space rules, minimum sizes, do-not-do examples** — same, consult the PDF
- **Typography pairings beyond "Americane + Playfair + Overpass + Lora"** — see brand guidelines PDF, section on type

When in doubt, the **2022 Brand Guidelines PDF** is the authoritative source and lives in the outside-repo asset folder. Do not paraphrase it into the voice guide without reading it first.
