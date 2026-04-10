# Rancho Moonrise Website Update — Claude Code Prompt

**Last updated:** 2026-04-10 (rewritten after official brand pack import + Ashley brand-facts call)

Copy everything below the line into a fresh Claude Code session. The repo is at `/Users/adamstyer/Documents/rancho-moonrise/` and deploys to Vercel on `git push`.

---

## Task: Sweep the Rancho Moonrise website against the new brand truth

On 2026-04-10 two things happened that the live site has not yet caught up to:

1. **Ashley (operations lead) gave a call with the authoritative brand facts.** A lot of existing site copy is now factually wrong or explicitly banned. The corrected voice guides are the source of truth — the HTML pages are the problem.
2. **The official brand pack was delivered and imported.** Real logos, fonts, symbols, and the canonical 2022 brand guidelines PDF are now available. The existing `site/images/logo.png` pre-dates all of this.

Your job: read the canonical docs, then sweep `site/` end-to-end to make it match.

---

## Step 1 — Read the canonical docs FIRST (in this order)

**Do not skip this step. Do not rely on your general brand knowledge or on older files in `brand/`.** The files listed below are authoritative and were updated on 2026-04-10. Anything that contradicts them is wrong.

1. **`/Users/adamstyer/Documents/rancho-moonrise/VOICE-GUIDE.md`** — Root voice guide. Tone, writing patterns, Instagram voice, personas, and — critically — the **"Things We Never Say" table** with the permanent ban list, and the **"Property Facts (authoritative)"** section near the bottom. The Property Facts section is the single source of truth for acreage, check-in times, parking, drinks, unit count, spaces, etc.

2. **`/Users/adamstyer/Documents/rancho-moonrise/brand/voice-guide.md`** — Sister file with Ashley's direction in her own words ("organic and handmade", "lean into the animal element", "just show up", "real beds"). Keeps the two voice guides in sync. Read it for vibe; use VOICE-GUIDE.md for the hard rules.

3. **`/Users/adamstyer/Documents/rancho-moonrise/brand/BRAND-ASSETS.md`** — Index of the official brand pack. Tells you where every logo, monogram, symbol, and font lives inside the repo, what each color-name suffix maps to, and how to reference them from HTML/CSS. **Read this before swapping any images.**

4. **`/Users/adamstyer/Documents/rancho-moonrise/TODO.md`** — The `NEEDS ADAM — Brand-facts site sweep` section near the top lists every banned term, every hotspot file (with match counts), and every new feature Ashley asked for. Use it as a checklist.

5. **`/Users/adamstyer/Documents/rancho-moonrise/CHANGELOG.md`** — Read the two most recent entries (both dated 2026-04-10): "Official Brand Pack Imported" and "Ashley Brand-Facts Call: Voice Guide Corrections". They describe what changed and why.

6. **`/Users/adamstyer/Documents/rancho-moonrise/CONTEXT.md`** — Project state, blockers, next actions. Keeps your session oriented.

**Files you should NOT use as source of truth (they are historical artifacts and contain banned language):**
- `brand/2022-brand-guidelines.txt` — the original text extract. Use only for print specs / color hex codes. Do not quote voice language from it.
- `brand/2023-11-weddings-deck.txt`, `brand/2023-11-events-deck.txt`, `brand/2024-01-retreats-deck.txt`, `brand/2024-01-pr-deck.txt`, `brand/2025-05-rancho-moonrise-events-sponsorship.txt` — historical decks with "luxury", "Hill Country", "20 acres", etc. Do not copy language from them.
- `brand/HoneyBook-Wedding-Flow-Content.md`, `brand/HoneyBook-Bar-Packages-Content.md` — scraped snapshots of the HoneyBook flow. The HoneyBook flow itself still contains banned language and needs its own sweep, but that's a separate task.
- `brand/2026-04-08-pinterest-design-analysis.txt`, `brand/2026-04-08-ashley-conversation-intel.txt` — intel files that informed the 2026-04-10 voice guide update. The voice guide is downstream and supersedes them. Do not re-derive from the intel.

---

## Step 2 — The Ban List (memorize this before editing any page)

These terms must be **removed entirely** from `site/**/*.html`. No exceptions. Ashley called every one of these out directly.

| Remove | Why | Replace with |
|--------|-----|--------------|
| `luxury` | Not the brand — organic/handmade, not aspirational-hotel | Describe the actual thing: "hand-crafted cabins", "real beds", "A/C + heat" |
| `Texas Hill Country` / `Hill Country` | Factually wrong — Rancho Moonrise is NOT in the Hill Country. Locals will call it out. | "20 minutes from downtown Austin" or "Central Texas" |
| `Manor, TX` / `Manor` / `Mainer` as a location descriptor | Ashley's rule — always anchor to Austin | "20 minutes from downtown Austin" |
| `General Store` | Renamed | `The Lodge` |
| `Neon Moon Barn Lounge` framed as a walk-in bar / "full-service bar open" | It's EVENT-ONLY, not open to walk-in guests. Creates guest confusion. | Remove, or clarify "event-only" |
| `yoga under the oaks` / `oak-shaded` / any mention of oak trees | No oak trees on the property | "yoga al fresco" or "poolside yoga" |
| `4 ceremony sites` | Misleading — guests can get married anywhere | "unlimited options for your own unique layout" |
| `20 acres` / `31 acres` | Both wrong | **`36 acres`** |
| Any specific unit/room count ("20 units", "sleeps 50", etc.) | Inventory fluctuates (15 / 18 / 19) | "safari tents and cabins" or "overnight accommodations" |
| `private fire pit at every cabin/tent` | Not every unit has one | "fire pits throughout the property" |
| `View Wedding Packages` (CTA) | Wedding packages not listed online — tour required | `Learn More` → wedding page |
| `Our Venues` | Section rename | `Our Spaces` |
| `Events` (section title) | Renamed | `RM Events` or `Rancho Moonrise Events` |

**Hotspots** (from a grep run on 2026-04-10 — 109 total occurrences of banned terms across 22 files):

| File | Matches | Priority |
|------|---------|----------|
| `site/index.html` | 16 | HIGHEST — homepage |
| `site/pages/weddings.html` | 11 | HIGH — also needs "bar and barn" framing removed, and the "View Wedding Packages" CTA → "Learn More" |
| `site/pages/accommodations.html` | 10 | HIGH — has unit-count, fire-pit, and luxury problems |
| `site/pages/glamping-near-austin-texas.html` | 7 | MEDIUM |
| `site/pages/things-to-do-manor-tx.html` | 7 | MEDIUM — SEO page. URL slug can stay for SEO, but in-page copy should lead with Austin. Use judgment. |
| `site/pages/faqs.html` | 5 | MEDIUM |
| `site/pages/host-your-event.html` | 5 | MEDIUM |
| `site/pages/contact.html` | 3 | LOW |
| `site/pages/policies.html` | 3 | LOW |
| `site/pages/ranch-wedding-texas.html` | 3 | LOW — new blog post, was written before the call |
| `site/pages/wedding-venues-near-austin.html` | 3 | LOW |
| `site/pages/events.html` | 1 | LOW — but needs rename + view change (see Step 4) |
| `site/pages/blog.html` | 2 | LOW |
| Plus 9 lower-priority files (bachelorette, corporate-retreat, etc.) | 1–2 each | LOW |
| `site/competitive-intelligence.html` | 14 | SKIP — internal, not customer-facing |

Re-grep after editing: `rg -l 'Hill Country|General Store|luxury|20 acres|31 acres|Our Venues|yoga under the oaks|4 ceremony sites|Neon Moon Barn Lounge' site/` should return 0 results when you're done (except for `competitive-intelligence.html` which is internal).

---

## Step 3 — Logo and asset swap

The official brand pack was imported on 2026-04-10 and is sitting in `site/images/brand/`. Before this, the site used a single `site/images/logo.png` that pre-dates the pack.

**Read `brand/BRAND-ASSETS.md` first.** It documents:
- Where every logo variant lives (`textured/` vs `untextured/` × `primary/secondary/tertiary`)
- The color-naming convention (Clay / Amber / Coral / Pine / Agave / WhiteDenim / Charcoal, mapping 1:1 to the brand hex tokens)
- When to use SVG vs @2x PNG
- Why the textured SVGs were NOT imported (2 MB each from embedded base64 rasters — use textured @2x PNGs instead)

**Recommended swaps:**
- **Header logo:** Replace `site/images/logo.png` references with `site/images/brand/logos/untextured/secondary/RanchoMoonrise_Logo_RGB_Secondary_Clay.svg` (secondary = with tagline, untextured = clean vector, Clay = terracotta primary brand color). Secondary is better than Primary for header because Primary includes "Austin, Texas" as location text that's redundant with the header nav.
- **Hero logo (if used on homepage):** Use the textured @2x PNG for the aspirational organic look Ashley asked for — `site/images/brand/logos/textured/primary/RanchoMoonrise_Logo_RGB_Primary_Texture_Fullcolor@2x.png`.
- **Favicon + social avatar:** Use an ATX monogram from `site/images/brand/monograms/` — `RanchoMoonrise_Logo_RGB_Monogram_ATX_Clay.svg` is the default.
- **Decorative accents** (section dividers, hero overlays, pattern elements, button icons): Pull from `site/images/brand/symbols/` — Sun, Agave, Prickly Pear, Cresent [sic — folder name preserved from source pack], Waves. Each has ~20 color variants. Pick semantically (e.g., Sun in Amber for sunset copy, Agave in Pine for grounded outdoor copy).

**Do not use** `site/images/logo.png` / `logo.webp` after the swap — they can be deleted once all references are updated.

**Do not copy files out of** `/Users/adamstyer/Documents/rancho-moonrise-assets/brand-pack-2026-04-10/` into the repo without thinking. That folder holds the full 1 GB pack (print-ready CMYK EPS at 16 MB each, texture-embedded SVGs at 2 MB each). The curated web subset in `site/images/brand/` is already the right set.

**Font note:** `brand/fonts/Americane-Black.otf` and `Americane-Bold.otf` are in the repo but the Monotype EULA may restrict `@font-face` web embedding. **Read `brand/fonts/Monotype Font Software End User License Agreement.html` before adding Americane as a web font.** If the EULA doesn't permit web use, stick with the existing stack (Playfair Display for headings, Overpass for body, Lora for accent) and keep Americane available for print/graphics only.

---

## Step 4 — Structural changes Ashley asked for

These aren't copy edits — they're page/UX changes. Each needs a code change beyond find-and-replace.

1. **Wedding inquiry form — add required budget dropdown.** Options (in this exact order):
   - $5K–$20K
   - $20K–$40K
   - $40K–$60K
   - $60K+
   - (Required field — form should not submit without a selection.)
   Likely lives in `site/pages/weddings.html` or `site/pages/contact.html` depending on form structure. Grep for the current inquiry form to find it.

2. **Events page restructure** (`site/pages/events.html`):
   - Rename section title from `Events` to `RM Events` or `Rancho Moonrise Events`
   - Default view: chronological list, one event per row (NOT grid)
   - Calendar view available as a toggle, but list is the default

3. **Homepage Instagram integration:**
   - Remove the existing "Best Glamping Near Austin" SEO block (whatever it currently says)
   - Replace with an Instagram feed integration (grid or carousel of recent @rancho_moonrise posts). Instagram handle: `@rancho_moonrise`

4. **Site header — add social buttons:**
   - Instagram (priority — biggest channel at ~13K followers)
   - Facebook, TikTok, LinkedIn secondary
   - See `site/improvement-plan.html` Links tab for current URLs

5. **Wedding page gallery (ASSET GAP — flag, don't fabricate):**
   - Ashley said the wedding page needs a gallery and there currently isn't one
   - **Do not use stock photos or randomly grab existing site images.** Build the gallery component, leave it populated with placeholders, and add a note in TODO.md that Ashley needs to provide wedding photos. This is a real-asset-needed blocker, not a code blocker.

6. **Homepage CTAs / copy:**
   - Lean into "Just show up — real beds, no gear required" as a stay CTA. This is the differentiator Ashley called out explicitly.
   - Mention donkeys / ranch animals somewhere on the homepage. People love them and it's on-brand.
   - "Fire pits throughout the property" (NOT "every unit has a fire pit")

---

## Step 5 — Deploy and verify

1. Commit changes in logical chunks (one commit per concern, not one giant commit):
   - e.g., `fix(copy): remove banned terms from homepage and weddings page`
   - `feat(brand): swap header logo to official brand pack variant`
   - `feat(weddings): add budget dropdown to inquiry form`
   - `refactor(events): chronological list view as default`
2. `git push` — Vercel auto-deploys on push.
3. Use the Vercel MCP to verify the deployment succeeded: `list_deployments` → check the latest READY build.
4. Spot-check the live preview URL with a browser MCP (chrome-devtools-mcp or playwright) — load the homepage, the weddings page, and the events page. Verify:
   - No banned terms visible
   - New logo showing in the header
   - Wedding inquiry form has the budget dropdown and won't submit without it
   - Events page shows chronological list view by default
5. Re-run the grep from Step 2 — should return 0 customer-facing matches.

**Important:** This site is on the Vercel preview domain `rancho-moonrise.vercel.app`. The live domain `ranchomoonrise.com` is still pointed at the old BofillTech host until DNS cutover (see `CONTEXT.md` Active Blockers). Your changes will be live on Vercel immediately but the public domain won't see them until Adam flips DNS. That's OK — keep shipping, the sweep is prep work for the cutover.

---

## Step 6 — Report back

Output a summary that includes:

1. **Banned-term sweep results** — files touched, total term count before / after (should be 0 after, excluding internal files)
2. **Logo swap** — which variant you used for header, hero, favicon, and which files were updated
3. **Structural changes** — which of the 6 items in Step 4 you completed, which you flagged for later
4. **Asset gaps** — anything Ashley needs to provide (wedding gallery photos, anything else you noticed)
5. **Remaining conflicts with older docs** — if you hit any file that contradicted the voice guide and you didn't know how to resolve it, flag it in `TODO.md` under `NEEDS ADAM` instead of guessing
6. **Vercel deployment URL** — the READY deployment link so Adam can click through
7. **Updated `CHANGELOG.md`** — append a dated entry describing what you shipped (CHANGELOG is append-only per `CLAUDE.md`)
8. **Updated `TODO.md`** — check off items you completed under the `NEEDS ADAM — Brand-facts site sweep` section, add new items for anything discovered

---

## Important notes and guardrails

- **"Organic and handmade" is the north star.** Not "slick and corporate", not "luxury hotel". Ashley is explicit about this — every design and copy choice should move toward warm / textured / personal and away from modern-minimalist.
- **Ashley is not technical.** Don't introduce a new CMS, build system, or framework. This is a static HTML/CSS/JS site on Vercel. Keep it that way.
- **Do not do a full redesign.** This is a targeted sweep — banned language out, official brand assets in, the 6 structural changes from Step 4. Nothing more. Resist scope creep.
- **Do not break anything that currently works.** The Mark Done system (`api/complete.js`), the SEO schema (JSON-LD blocks on every page), the improvement-plan dashboard at `/improvement-plan.html`, the scheduled task integrations — all of these must keep working. Do not delete JSON-LD, do not refactor the CSS architecture, do not touch `site/improvement-plan.html` during this sweep (it's internal tooling).
- **Do not quote language from the old `brand/*.txt` files, the Pinterest analysis, or the Ashley conversation intel.** Those files are historical inputs. `VOICE-GUIDE.md` is the downstream source of truth and supersedes them. If the voice guide disagrees with an older file, the voice guide wins.
- **When in doubt, re-read `VOICE-GUIDE.md` → "Property Facts (authoritative)"**. That section is the fact checklist.
- **Per `CLAUDE.md`, read `GOALS.md` before starting.** This sweep is current-priority work under the Rancho Moonrise ACTIVE CLIENT section. If anything in this prompt conflicts with `GOALS.md`, flag it under `NEEDS ADAM` in `TODO.md` and stop.
- **Use MCP connectors directly** (Vercel MCP for deployment status, browser MCPs for verification). Per `CLAUDE.md` self-service rule: never ask Adam to do something manually if you can do it yourself.
