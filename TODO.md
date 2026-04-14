# Rancho Moonrise — TODO
Last updated: 2026-04-11 (Color revert — restored orange header + cream backgrounds after Codex audit commit)

## ✅ DONE 2026-04-11 — Color revert on Codex audit commit

Adam rejected the visual half of commit `4ca2778` ("fix(site): improve audit findings and mobile UX"). Codex had swapped the nav from terracotta orange to near-black, repainted `.section--dark` and every `.page-header` from cream `--color-bg-alt` to a dark brown gradient, turned the mobile menu dark, wrapped the hero copy in a glass card, and restyled event cards / events toggle / mobile CTA with gradients and heavy shadows. All color/visual changes were surgically reverted inside `site/css/styles.css` — NO `git revert` — so the real bug fixes underneath stay in place.

**Restored to pre-4ca2778 state:** `--color-bg #F2E9DB`, `--color-bg-alt #ebe3d5`, `--color-bg-card #faf7f2`, `--color-heading #2a2520`, `--color-footer-bg #1e1b16`, body background to noise SVG only, `.section--dark` to `background: var(--color-bg-alt)`, `.nav` to `rgba(182, 96, 63, 0.78)` terracotta, `.nav--scrolled` to `rgba(182, 96, 63, 0.92)`, `.nav__logo-img` to solid white plate, nav "Book Now" button to white with terracotta text, mobile menu to white, hero `align-items: center` with no glass card panel, hero overlay back to stock `rgba(0,0,0,0.10/0.20/0.50)`, `.page-header` to `background: var(--color-bg-alt)`, `.page-header--hero::before` opacity `0.26 → 0.15` (dropped the extra `::after` darkener), events view toggle to cream, event cards to `--color-bg-card`, events calendar grid + cells + events to original flat styling, event popup to white, mobile CTA to flat terracotta, footer dropped the inset shadow.

**Preserved from Codex's commit** (real bug fixes, not visual):
- Mobile hero sizing clamps in `@media (max-width: 480px)` — `.hero__title { font-size: clamp(1.45rem, 6.2vw, 2.05rem); max-width: 11ch }`, `.hero__content { width: calc(100vw - 24px); margin: 0 12px 84px; padding: 22px 16px 24px }` — this was a genuine mobile-layout bug fix.
- `text-wrap: balance` on `.hero__title`, `max-width: 34rem` on `.hero__subtitle`.
- `.form-status` utility class.
- `topicOverride()` fix in `site/js/main.js` — concierge no longer misroutes wedding/event pricing questions.
- Inquiry/contact form `mailto:events@ranchomoonrise.com` fallback (replaces dead `action="#"`).
- `site/pages/accessibility.html` (new page — fixes broken footer link).
- Favicon and OG image reference fixes across pages.

**Verified locally** via preview at `http://localhost:8080`:
- Homepage: orange terracotta nav strip, white logo plate, hero has no glass card overlay, cream body background.
- Events page: cream page header with dark text, cream event cards with subtle borders, cream events view toggle with flat-orange active state.

**Still NEEDS ADAM on inquiry forms** — the mailto fallback is a safety net, not a backend. A real handler (Formspree / Netlify Forms / Vercel serverless → email + Salesforce `create_lead`) is still the right answer and should land on the DNS cutover checklist. Same item already tracked under "Wedding inquiry form backend" below.

## ✅ DONE 2026-04-10 — Responsive image pipeline (Option C)

Fixed Adam's "photos on Vercel look shitty" complaint. Root cause: CSS `background-image` has no srcset support, so a phone and a 4K desktop were fetching the same single-size WebP, sized wrong for both. Fix was three pieces:
1. `scripts/generate-responsive-images.sh` — idempotent WebP ladder (480/1024/1920/2560/3840 for full tier, 400/800/1200 for medium tier), cwebp `-q 88`, never upscales.
2. `scripts/apply-srcset.py` — idempotent HTML sweep that rewrites bare `<img src>` into srcset-aware tags. Rewrote 42 tags across 7 files.
3. Hero slideshows + CTA banners refactored from `div[style=background-image]` to real `<img class="hero__img">` with `object-fit: cover` + `object-position` replacing `background-position`. Manual `data-srcset` promotion in `loadSlide()` because stacked absolute slides defeat native `loading="lazy"`. Preload hints upgraded to `imagesrcset`/`imagesizes`/`fetchpriority="high"`.

Commit `547abfa`, Vercel deploy `dpl_948R6gNKCNUeDSuosKZjvczyJ8oz` READY. See CHANGELOG 2026-04-10 "Responsive Image Pipeline" for full details.

**Open data gap (NEEDS ADAM):**
- [ ] **Re-upload 8 low-res source JPGs at 2560px+.** The pipeline is live and working, but the ladder caps at source dimensions (the script refuses to upscale — correctly). See CONTEXT.md "Low-res source JPGs" table. Priority order:
  - **HIGH — `feature-wedding.jpg`** (currently 1060×651, caps at 1024w) — bride-critical, on the weddings page feature section
  - **HIGH — 4 accommodation cards** (`accommodation-cabin.jpg`, `accommodation-double-safari.jpg`, `accommodation-family-safari.jpg`, `accommodation-premium-safari.jpg`) — currently 336-350 px thumbnails being upscaled on room-type cards, re-upload at 1600×1600+ minimum
  - **MEDIUM — `venue-event-barn.jpg`** (1067×1600 portrait) — host-your-event hero
  - **MEDIUM — `about-ranch-aerial.jpg`** (1600×1067) — index about section
  - **MEDIUM — `feature-safari-tent.jpg`** (1706×1017) — index feature section
  - After re-upload: rerun `./scripts/generate-responsive-images.sh` and commit. No HTML changes needed — the `<img srcset>` tags already reference the full ladder filenames.

## ✅ DONE 2026-04-10 — Phase 3 UI refinements

Logo size bump site-wide (`.nav__logo-img` 72→112 px desktop, 44→68 px scrolled, 32→48 px tablet, 30→44 px narrow mobile), weddings.html `#wedding-inquiry` replaced with exact contact.html wedding form and repositioned directly under the Schedule a Venue Tour section, and the 5 weddings FAQs converted from plain h3+p to `.faq-item` accordion markup so they collapse/expand on click (existing main.js handler picks them up automatically). CSS cache-bust `v=9 → v=10` across all 15 pages. Commit `e9fb9e3`, live on `https://rancho-moonrise.vercel.app/`. See CHANGELOG 2026-04-10 "Phase 3 UI Refinements".

## ✅ DONE 2026-04-10 — Phase 2 UI fixes

Button visibility fix (root cause: `.btn--primary` was transparent + white text on cream), nav logo swap (Secondary lockup → Tertiary wordmark, 88×88), nav social icons moved right of Pool Passes across 15 pages, weddings FAQ renamed + shortened + FAQPage schema, new `#wedding-inquiry` form on weddings.html, and **pre-existing `.reveal` bug fixed** (section labels were permanently invisible site-wide — `main.js` IntersectionObserver only watched `.fade-in`). Commits `ddf556e` + `36fb00d`, live on `https://rancho-moonrise.vercel.app/`. See CHANGELOG 2026-04-10 "Phase 2 UI Fixes".

**Open follow-up (carried forward from Phase 2):**
- [ ] **Wedding inquiry form backend** — `weddings.html#wedding-inquiry` and `contact.html` wedding section both use `action="#"` placeholder. Now that Phase 3 made the two forms identical (same field schema), one backend wire-up covers both. Needs Formspree / Netlify Forms / Vercel serverless → email + Salesforce create_lead. Current UX: form submits and does nothing. Flag on the DNS cutover checklist.

## ✅ DONE 2026-04-10 — Brand-facts site sweep

All 17 customer-facing HTML pages + `js/main.js` swept clean of banned terms. Live on `https://rancho-moonrise.vercel.app/`. Commits `59beb4b` + `5bbf84d`. See CHANGELOG 2026-04-10 "Brand-Facts Site Sweep Shipped" for the full breakdown.

**Open asset gap (follow-up):**
- [ ] **Wedding gallery photos** — weddings.html has a 6-tile placeholder grid with "photos coming soon" note. Needs curated real-wedding photo set from Ashley. When photos arrive, replace the empty `.wedding-gallery__tile` divs with `<img>` tags, remove `aria-hidden="true"` from the grid, and delete the placeholder note.

**Google Business (from same call):**
- [ ] Set Monday = closed, Tuesday = closed (or minimal hours)
- [ ] Voicemail greeting: note Mon/Tue closed, responses resume Wednesday

**Reviews (context for Task #1 review replies):**
- The 1-star F1 weekend review is **neighbor noise, not ranch noise**. Ashley is planning to respond herself. Response strategy: acknowledge F1 weekend is an annual anomaly (neighbors run amplified music activations), outside ranch control, extend goodwill. F1 is the one anomaly — not a recurring noise issue.

## Flagged conflicts with existing documentation
- `ARCHITECTURE.md` and `CONTEXT.md` historical entries may still reference "20 acres" or "Manor, TX". Left as-is for now since they're internal ops docs, but flag for cleanup if they get quoted into customer-facing content.
- `brand/2022-brand-guidelines.txt` and other historical decks (`2023-11-weddings-deck.txt`, `2024-01-retreats-deck.txt`, etc.) likely contain the banned language — these are historical artifacts, do NOT edit, but do NOT quote from them into new copy without filtering through the updated voice guide first.
- `brand/HoneyBook-Wedding-Flow-Content.md` is scraped from the live HoneyBook flow — likely contains banned terms. Not editing (it's a snapshot), but flag that the HoneyBook flow itself needs the same sweep the site does.
- Per-tract acreage in `CONTEXT.md` ("Tract I 9.9 ac + Tract II 11 ac + Tract III 10.7 ac = 31.6 ac") does not match the "36 acres" figure Ashley gave. **RESOLVED for website (2026-04-10):** Adam confirmed — use **36 acres** in all customer-facing copy. Deal-file reconciliation remains open for buyout modeling (see below).
- [ ] **Deal file acreage reconciliation** (separate from website copy) — before buyout modeling is final, confirm whether 36 acres is the total operational footprint (rounded up from 31.6), includes land outside the three tracts, or is a different measurement basis. Not blocking website work.


## Now (this week — April 9-15)

### CLAUDE (next task to build) — Re-verify gate for Rancho
- [ ] **Create `rancho-review-monitor` scheduled task** — mirror `acr-review-monitor` pattern, own Rancho GBP review-reply state as a live claim. Use the shared gate at `/Users/adamstyer/Documents/client-ops/templates/re-verify-before-report.md`. Verification path: public GBP page scrape or Places API `place.reviews[].reply` presence. First-run responsibility: re-verify every live-claim finding currently in CONTEXT.md Active Blockers + improvement-plan.html Plan-tab task cards, auto-resolve stale ones into `rancho-done-log.md`. Expected ~30 min fork of acr SKILL.md.
- [ ] **Add Re-Verify Gate to `rancho-site-daily` SKILL** — same runbook, for SERP/indexing claims it currently surfaces without re-checking.
- [ ] **Add Re-Verify Gate to `rancho-competitive-weekly` SKILL** — same runbook, for competitor-state claims.


### NEEDS ADAM — GBP work (newly unblocked, he has Manager access)
- [ ] Reply to all 9 unreplied Google reviews — Claude drafts, Adam pastes (Task 1 — DRAFT→POST)
- [ ] Replace blog post in GBP "From the owner" with real business description — Claude drafts, Adam pastes (Task 2 — CRITICAL — DRAFT→POST)
- [ ] Set business hours on GBP (Task 2 — MANUAL)
- [ ] Answer remaining hotel amenity categories on GBP (Task 2 — MANUAL)
- [ ] Answer the unanswered pool day pass Q&A + seed 10 FAQ Q&As on GBP — Claude drafts, Adam pastes (Task 3 — DRAFT→POST)
- [ ] Verify social profile links on GBP (Task 7 — MANUAL)
- [ ] Enable Google Chat on GBP (Task 15 — MANUAL)
- [ ] Upload 10+ owner photos to GBP across all categories (Task 27 — MANUAL)

### NEEDS ADAM — Infrastructure
- [ ] DNS cutover from BofillTech to Vercel — THE #1 unlock for all SEO/AEO
- [ ] Rotate `GITHUB_TOKEN` on Vercel → fine-grained PAT scoped only to `AStyer8345/rancho-moonrise` contents:write (currently broad `gh auth token`, 5 min fix)
- [ ] Get Exhibit A from Nancy/Ashley (ownership %, capital contributions)
- [ ] Get QuickBooks access or P&L + Balance Sheet

### NEEDS ASHLEY
- [ ] Claim TripAdvisor + optimize WeddingWire listings (Task 5 — MANUAL)
- [ ] Fix broken Cloudbeds URL in Cloudbeds admin (Task 13 — MANUAL)

### CLAUDE (autonomous — scheduled task handles these)
- [x] Split blog posts into individual pages with URLs (S1) — already done previously
- [x] Add answer-first H2 summaries / AEO blocks to key pages (S2) — accommodations DONE (prior run), weddings DONE 2026-04-11, host-your-event DONE 2026-04-11, events DONE 2026-04-14
- [x] Build topical authority clusters with internal linking (S3) — blog cross-links on 6 landing pages DONE 2026-04-12; weddings → wedding blog posts DONE 2026-04-14; events → related content DONE 2026-04-14; glamping guide updated 2026-04-14
- [x] Add BreadcrumbList + SpeakableSpecification schema (S4) — BreadcrumbList DONE 2026-04-09, SpeakableSpecification: homepage DONE 2026-04-10, accommodations + weddings + host-your-event DONE 2026-04-11, faqs DONE 2026-04-12, events DONE 2026-04-14
- [x] Add Review/AggregateRating schema to homepage (done, count corrected to 125 on 2026-04-10)
- [x] Blog post #7 — "Best Weekend Getaways Near Austin Texas" — DONE 2026-04-11
- [x] faqs.html SpeakableSpecification schema — DONE 2026-04-12
- [x] S3 topical authority cluster pass — blog cross-links added to 6 landing pages — DONE 2026-04-12
- [x] Blog post #8 — "Austin Pool Day Pass Guide" — DONE 2026-04-12
- [x] Build `/safari-tents-near-austin/` landing page — DONE 2026-04-13
- [x] Blog post #10 — "Glamping vs Camping: What's the Difference?" — DONE 2026-04-14. AEO block, FAQPage schema (4 Q&A), SpeakableSpecification, BlogPosting schema, FAQ accordion.
- [ ] Blog post #11 candidates: "What to Do Near Austin With Kids", "Corporate Retreat Planning Guide Texas"

### NEEDS ADAM — Competitive intel quick wins (from 2026-04-13 intel run)
- [ ] Submit Glamping Hub listing — free, 15 min at glampinghub.com/list-your-property. Three new competitors gained discovery this week while Rancho Moonrise stays absent.
- [ ] Get on ResortPass — Lucky Arrow is the only glamping retreat in Austin on ResortPass; Rancho Moonrise pool is a stronger day-use story than most downtown hotels. Contact resortpass.com/list-property.

## Next (after DNS cutover)
- [ ] Google Search Console setup + sitemap submission (S6)
- [ ] Monitor indexing — all pages indexed within 14 days (S6)
- [ ] Redirect map from old BofillTech URLs to new structure (S6)
- [ ] AEO baseline — query AI engines for all 10 target keywords (S7)
- [ ] Claim TripAdvisor listing (Task 5 — Ashley)
- [ ] Optimize WeddingWire listing (Task 5)
- [ ] Fix Hipcamp "no showers" listing (Task 12)
- [ ] Build post-stay review request automation (Task 8)
- [ ] Build inquiry response email sequence (Task 9)
- [ ] Create "Pool Day Pass Austin" page (S5)
- [ ] Blog-to-GBP automation (S8)

## Backlog
- [ ] Corporate retreat landing page + HoneyBook flow (Task 16)
- [ ] HoneyBook flows for private events, intimate events, retreats (Task 17)
- [ ] "Build Your Experience" add-on booking flow (Task 18)
- [ ] Breakfast taco upsell for all stay types (Task 19)
- [ ] Conversion tracking + UTM parameters (Task 20)
- [ ] CRM implementation (Task 21)
- [ ] SOPs for Ashley's processes (Task 22)
- [ ] YouTube channel with walkthrough videos (Task 23)
- [ ] Facebook as a real channel (Task 24)
- [ ] Address neighbor noise issue (Task 25)
- [ ] Weekday utilization program (Task 26)
- [ ] Upload more owner photos to GBP (Task 27)

## Done

### April 10, 2026
- [x] Mark Done system shipped — `/api/complete` serverless fn + GitHub Contents API log append + Bearer auth via shared `BRIEFING_AUTH_TOKEN`
- [x] Done tab added to improvement-plan.html — completed tasks physically relocate into `#done-tasks-container` (newest on top), not just faded in place
- [x] Option C grade progression calculator — headline grade = highest phase where all required tasks complete; empty phases pass through without advancing grade; mini-progress "(X/Y toward <next grade>)" under each scorecard
- [x] Rewrote `rancho-apply-done` scheduled task SKILL.md — physically move task divs into Done tab instead of applying class in place
- [x] Backfilled tasks 4, 6, 10 into Done tab (moved at rest in source HTML)
- [x] Smoke tested Mark Done end-to-end on live Vercel deploy — commit 01319c8 READY

### April 9, 2026
- [x] Secondary GBP categories already set — Hotel, Campground, Event venue, Resort hotel, Wedding venue (Task 4)
- [x] Instagram link-in-bio — Linktree live with 5 links (Task 6)
- [x] Weekly GBP posting — scheduled task confirmed working (Task 10)
- [x] Live-verified all platforms and created metrics baseline
- [x] Built SEO/AEO strategy and scheduled task (Mon/Wed/Fri 5 AM)
- [x] BreadcrumbList schema on all 13 subpages
- [x] CollectionPage + ItemList schema on blog.html
- [x] Verified homepage LodgingBusiness schema complete (geo, price, amenities)
