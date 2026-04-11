# Rancho Moonrise — Project Context

**Last updated:** 2026-04-11 (Daily SEO run — SpeakableSpecification on 3 pages, AEO blocks on weddings + host-your-event, Blog #7 published)

---

## What This Is

Advisory engagement for Rancho Moonrise — glamping, events, and retreat ranch on 36 acres, 20 minutes from downtown Austin (street address 20117 Lockwood Rd, 78653 — operational only; never use "Manor" as a location descriptor in copy). Adam runs deal structuring (buyout + new partner) and builds digital/operational systems. Ashley runs day-to-day operations.

**Brand facts (authoritative):** See `VOICE-GUIDE.md` → "Property Facts" section. Never use "luxury", "Hill Country", "Manor", "General Store", or cite a specific unit count. The Neon Moon Barn Lounge is event-only, not a walk-in bar.

**Repo:** `AStyer8345/rancho-moonrise`, branch `main`, deploys to Vercel
**Live site:** ranchomoonrise.com (BofillTech hosting — OLD, not editable by Claude)
**New site:** rancho-moonrise.vercel.app (Vercel — all dev work happens here)
**Improvement plan dashboard:** https://rancho-moonrise.vercel.app/improvement-plan.html

---

## Active Blockers

- **8 low-res source JPGs cap image quality** — see "Low-res source JPGs" section below. Responsive pipeline can't generate variants bigger than the source; 4 venue photos cap at 1024w and 4 accommodation photos cap at 480w (actually 340×340 thumbnails). Needs re-upload from Ashley's originals.
- **DNS cutover not done** — New Vercel site not live on main domain. ALL SEO/AEO impact blocked until this happens. This is the #1 unlock.
- **Exhibit A missing** — Cannot model buyout without ownership percentages from Nancy/Ashley.
- **GITHUB_TOKEN on Vercel is broad-scoped** — using `gh auth token` bootstrap. TODO: swap for fine-grained PAT scoped only to `AStyer8345/rancho-moonrise` contents:write.
- ~~GBP access~~ ✅ **UNBLOCKED 2026-04-10** — Adam has Manager access. Tasks #1, #2, #3, #7, #15, #27 now owned by Adam, not Ashley.

## What's Next

- Adam: Re-upload the 8 low-res source JPGs at 2560px+ width (especially `feature-wedding.jpg` — bride-critical) so the responsive ladder can generate 1920/2560/3840 variants. See "Low-res source JPGs" below.
- Adam: Wire up a backend handler for the wedding inquiry forms on both contact.html and weddings.html (Formspree / Netlify Forms / Vercel serverless → email + Salesforce create_lead). Both currently `action="#"`. Flag on the DNS cutover checklist.
- Adam: Curate real-wedding photo set to replace weddings.html gallery placeholder (6 tiles, aria-hidden, "photos coming soon" note live now)
- Adam: Execute the 5 DRAFT→POST GBP tasks now that he has access — #1 (reply to 9 reviews, Claude drafts), #2 (replace blog-post description + amenities + hours, Claude drafts), #3 (answer pending Q&A + seed 10 FAQs, Claude drafts), plus pure-manual #7 (verify social links) and #15 (enable Chat) and #27 (upload photos)
- Adam: DNS cutover from BofillTech to Vercel (#1 overall unlock — NOW the Vercel site is brand-correct so cutover is low-risk)
- Adam: Rotate GITHUB_TOKEN on Vercel to a fine-grained PAT (5 min)
- Claude (auto): SEO/AEO prep work on Vercel site — Mon/Wed/Fri at 5 AM
- Claude (auto): Weekly GBP posts — drafts saved to `brand/gbp-posts/` for Adam to review

## Low-res source JPGs (data blocker, not code blocker)

The responsive image pipeline is live and working. But `scripts/generate-responsive-images.sh` refuses to upscale (correctly — cwebp q88 of upscaled pixels just bakes in blur), so the ladder caps at the source dimensions. These 8 files need higher-resolution originals:

| File | Current source | Ladder generated | Where it lands |
|------|---------------|------------------|----------------|
| `feature-wedding.jpg` | 1060×651 | 480w, 1024w | **weddings.html feature section — bride-critical** |
| `venue-event-barn.jpg` | 1067×1600 (portrait) | 480w, 1024w | host-your-event.html hero + index split section |
| `about-ranch-aerial.jpg` | 1600×1067 | 480w, 1024w | index.html about split section |
| `feature-safari-tent.jpg` | 1706×1017 | 480w, 1024w | index.html feature split section |
| `accommodation-cabin.jpg` | 336×338 | 480w only (upscaled) | accommodations.html card |
| `accommodation-double-safari.jpg` | 350×349 | 480w only | accommodations.html card |
| `accommodation-family-safari.jpg` | 339×339 | 480w only | accommodations.html card |
| `accommodation-premium-safari.jpg` | 342×340 | 480w only | accommodations.html card |

The 4 accommodation files are literally 340×340 thumbnails masquerading as content photos — re-upload priority is HIGH because these are the room-type cards a wedding shopper sees when comparing stay options. Re-upload at 1600×1600+ minimum.

The 4 venue photos have acceptable-for-now 1024w variants; re-upload priority is MEDIUM except `feature-wedding.jpg` which is HIGH (weddings page conversion-critical).

Once re-uploaded: rerun `./scripts/generate-responsive-images.sh` and commit — no HTML changes needed, the `<img srcset>` tags already reference the full ladder filenames.

## Last Worked On

- 2026-04-11 (SEO run): **SpeakableSpecification schema** added to accommodations.html, weddings.html, host-your-event.html. **AEO direct-answer block** added to weddings.html (`aeo-block` section). **FAQPage schema + visible FAQ accordion** added to host-your-event.html (5 Q&A, targets corporate retreat queries). **Blog #7 published** — `weekend-getaways-near-austin.html`, targets "weekend getaways near Austin Texas" (~1,400 words, curated guide format, AEO block). Blog index + sitemap updated.
- 2026-04-11: **rancho-apply-done reconciliation.** No changes — 3/4 log entries already in Done tab; `test-smoke-live` skipped (no matching task div, smoke test entry).
- 2026-04-10: **Responsive image pipeline (Option C) shipped.** Fixes Adam's complaint that "photos on Vercel look shitty vs ranchomoonrise.com." Root cause was single-size WebPs (often 1600px or smaller) dropped into CSS `background-image`, which has no srcset support — a phone and a 4K desktop were fetching the same file, sized wrong for both. Fix was three pieces: (1) `scripts/generate-responsive-images.sh` — idempotent WebP ladder generator, FULL tier 480/1024/1920/2560/3840, MEDIUM tier 400/800/1200, cwebp `-q 88`, never upscales, regenerates from JPG sources. (2) `scripts/apply-srcset.py` — HTML sweep that rewrites bare `<img src="images/foo.webp">` into srcset-aware tags with a `sizes` attribute picked from the existing `width` attribute. Idempotent (skips tags that already have srcset), handles `../images/`, `./images/`, `/images/` prefixes. Result: 42 tags rewritten across 7 files. (3) Hero slideshow on index.html + CTA banners refactored from `div[style=background-image]` to real `<img class="hero__img">` inside each slide — CSS `background-image` doesn't support srcset, so the switch was mandatory. Added `.hero__img` object-fit:cover + object-position rules mirroring the old `background-position` behavior. Manual `data-src`/`data-srcset` promotion in `loadSlide()` in `main.js` because native `loading="lazy"` doesn't work on stacked absolutely-positioned slides (all "in viewport"). Preload hint updated to use `imagesrcset` + `imagesizes` + `fetchpriority="high"` so browser picks the same variant `<img>` would, avoiding double-fetch. Weddings.html hero converted to real `<img>` because bride audience is the most quality-sensitive. 8 landing pages got a simple URL swap on `.page-header__bg` CSS (`unsuffixed → -1024.webp` or `-800.webp`) since they're decorative at opacity 0.15. Commit `547abfa` — 143 files changed, 564 insertions, 106 deletions. Vercel deploy `dpl_948R6gNKCNUeDSuosKZjvczyJ8oz` READY. Live-verified: 0/38 broken images on index, weddings.html serves `wedding-hero-1920.webp` with `fetchpriority="high"`, all 27 image URLs return 200, ranch-wedding-texas landing page computed background shows `url('wedding-hero-1024.webp')` at opacity 0.15. Data blocker surfaced: 8 source JPGs are too small to fill the full ladder (see "Low-res source JPGs" section above).
- 2026-04-10: **Phase 3.1 header layout pass.** Logo 112→140 px desktop, 68→92 px scrolled. Dropped `.nav__inner max-width: 1200px → none` so nav spans full viewport. Bumped `.nav__links` gap `space-sm → space-md`. Reinforced `margin-left: auto` on the second `.nav__social-group` rule. CSS cache-bust v=10→v=11 across 15 pages. Commit `a6e4171`.
- 2026-04-10: **Phase 3 UI refinements shipped.** Logo bumped `.nav__logo-img` 72→112 px desktop; weddings.html `#wedding-inquiry` replaced with exact contact.html wedding form markup and repositioned under Schedule a Venue Tour; 5 weddings FAQs converted to `.faq-item` accordion markup (existing main.js handler picks them up). CSS cache-bust v=9→v=10. Commit `e9fb9e3`.
- 2026-04-10: **Phase 2 UI fixes shipped.** Solid-fill `.btn--primary` + `.btn--outline` (fixed invisible-button bug on cream sections); nav logo → Tertiary Clay wordmark; social icons moved right of Pool Passes; weddings FAQ renamed + FAQPage schema; new `#wedding-inquiry` placeholder form; fixed pre-existing `.reveal` opacity-0 bug (IntersectionObserver only watched `.fade-in`). Commits `ddf556e` + `36fb00d`.
- 2026-04-10: **Brand-facts site sweep shipped.** All 17 customer-facing HTML pages + `js/main.js` swept clean of banned terms. Header logo → brand-pack Clay SVG. 4-icon social group. Events → "RM Events" rename. Wedding budget dropdown. Commits `59beb4b` + `5bbf84d`.
- 2026-04-10: **Ashley brand-facts call processed + acreage locked at 36.** `VOICE-GUIDE.md` updated with banned terms and Property Facts section. Official brand pack imported to `site/images/brand/`.
- 2026-04-10: **3-disposition tag sweep + GBP access unblock.** Adam has GBP Manager access. 35 tasks re-tagged (12 AUTO / 5 DRAFT→POST / 18 MANUAL). GBP tasks shifted Ashley → Adam.
- 2026-04-10 (SEO run): Published blog #6 (`ranch-wedding-texas.html`). Added SpeakableSpecification schema. Fixed AggregateRating 122→125.
- 2026-04-10: Added Links tab + Voice tab to improvement-plan.html.
- 2026-04-10: Added Done tab (tasks physically relocate into `#done-tasks-container`). Backfilled tasks 4, 6, 10.
- 2026-04-10: Option C grade progression calculator + mini-progress indicators.
- 2026-04-09: Mark Done system shipped — `/api/complete` serverless function writes to `rancho-done-log.md` via GitHub Contents API.

---

## Mark Done System — How It Works

1. Adam clicks "Mark done" on a task at `/improvement-plan.html`
2. Client POSTs to `/api/complete` with Bearer auth token (stored in localStorage, same secret as client-ops briefing)
3. Serverless function appends a RESOLVED line to `rancho-done-log.md` via GitHub Contents API, commits as `rancho-mark-done` bot
4. Client optimistically moves the task div into `#done-tasks-container` and recomputes grades
5. `rancho-apply-done` scheduled task (daily 5:33 AM local) reconciles log → HTML, physically moving any task divs that are still on the Plan tab into the Done tab container, then commits + pushes
6. Vercel redeploys on push → all devices converge on the same state

---

## Key Metrics (confirmed April 9, 2026 — baseline week)

| Metric | Value |
|--------|-------|
| Google reviews | ~125 (4.9★) — 9/10 unreplied |
| GBP views | 50,500 |
| Instagram | ~13K followers, 279 posts |
| Facebook | 864 followers, 5 reviews (100%) |
| TikTok | 1,408 followers |
| TripAdvisor | 0 reviews, NOT claimed |
| Expedia | 8.0 rating |
| Google ranking (non-brand) | NOT ranking (0/10 keywords) |
| AI engine citations | NOT cited (0/10) |
| Google indexed pages (old site) | ~10 |
| Next metrics update | April 16, 2026 |
| Improvement tasks done | 3/35 (#4, #6, #10 — backfilled) |

---

## Property & Deal Summary

- **3 tracts** in same LLC, free and clear (~$4.2M invested)
- Tract I (9.9 ac) — improved, all operations
- Tract II (11 ac) + III (10.7 ac) — vacant, landlocked
- **Revenue:** 2025 = $350K, 2026 target $500-650K
- Private events 46%, rooms 31%, POS/bar 22%
- **Buyout:** Paul & Donna want out (~$2M invested). Blocked on Exhibit A.
- **Christopher:** potential incoming partner, Adam running point

## People

| Who | Role |
|-----|------|
| Nancy | Co-owner |
| Ashley | Runs everything — GBP access, operations |
| Monet | Staff ($28/hr) |
| Arlen | Maintenance ($170/day) |
| Kylie | Part-time social ($18/hr) |

## Key Files

- `api/complete.js` — Mark Done serverless function (Vercel, Node 20.x)
- `rancho-done-log.md` — append-only log, source of truth for done state
- `site/improvement-plan.html` — 35 task cards + Plan/Metrics/Audits/Intel/Done tabs
- `brand/2026-04-09-metrics-baseline.md` — live-verified platform data
- `tasks/seo-aeo/` — autonomous SEO/AEO agent workspace
- `site/` — Vercel site (new build, not yet live on main domain)
