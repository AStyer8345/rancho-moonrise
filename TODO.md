# Rancho Moonrise — TODO
Last updated: 2026-05-01 (corporate-retreats landing page shipped — closes competitive gap vs. Yurtopian/Lucky Arrow)

## ✅ DONE 2026-04-30 — Adversarial site repair: canonical, crawlability, conversion tracking prep

1. **Canonical host resolved.** Vercel project domain settings now make `https://ranchomoonrise.com` primary and permanently redirect `https://www.ranchomoonrise.com` → apex with 308. Project firewall config checked via Vercel API; no active/draft challenge rules were present.
2. **Sitemap rewrite gaps closed.** Added clean public rewrites for the five sitemap blog URLs that previously had no `vercel.json` route: bachelorette ranch vs bar crawl, corporate retreat ranch vs hotel, Mother's Day, birthday party venue, and yoga retreat.
3. **Clean-route internal links.** Customer-facing internal links now use public routes instead of `/pages/*.html` wherever a rewrite exists.
4. **Broken assets and stale claims fixed.** Corrected Lone Star Party image names, removed the missing 1024w safari-tent bright reference, scrubbed specific 50-overnight/Hill Country/$3K/breakfast-taco claims, kept review count at 125, and renamed virtual-tour CTAs so they do not promise a real booking URL yet.
5. **Analytics placeholder centralized.** `window.RANCHO_ANALYTICS_CONFIG` documents the future GA4/GTM slot without fake IDs; `window.rmTrack` remains the event abstraction.
6. **Static validation added.** `npm run validate:site` now checks JSON-LD parsing, local asset references, sitemap URL rewrite coverage, apex host consistency, stale/risky claim patterns, and clean-route link hygiene.

**NEEDS ADAM follow-ups:**
- [ ] **Submit apex sitemap in GSC:** `https://ranchomoonrise.com/sitemap.xml`.
- [ ] **Provide GA4 measurement ID or GTM container ID.** Site-side placeholder is ready; no fake analytics ID was installed.
- [ ] **Provide a dedicated virtual walkthrough booking URL** if that should become a real scheduling CTA.
- [ ] **Defer static partials/templates refactor** to a later branch. This repair stayed framework-free by design.

## ✅ DONE 2026-04-30 — DNS cutover live + AggregateRating utility-page closure

1. **🚀 DNS cutover verified live.** `curl -I https://ranchomoonrise.com/` returns `server: Vercel` + 307 → `https://www.ranchomoonrise.com/` (HTTP 200, `x-vercel-cache: HIT`). The #1 SEO blocker since the new site shipped is RESOLVED. Auto-resolved `rancho-p2-11-website-launch-dns` in `rancho-done-log.md`.
2. **AggregateRating extended to the 2 remaining utility pages.** `contact.html` got it nested into the existing `LocalBusiness` under `mainEntity` of the `ContactPage` block (cleanest schema — no new top-level block). `faqs.html` got a stand-alone `LocalBusiness` JSON-LD (FAQPage has no `publisher` slot to nest into). Both use the site's standard 4.9 / 125 / bestRating 5 anchor. Coverage now 16 of 17 customer-facing pages.
3. **Sitemap freshness**: `/contact/` lastmod 04-07 → 04-30; `/faqs/` lastmod 04-08 → 04-30. All 7 JSON-LD blocks across both pages validate.

**NEW NEEDS ADAM (post-cutover):**
- [x] **Canonical strategy decision (apex vs www).** Resolved 2026-04-30: apex is canonical and Vercel primary domain; `www` redirects to apex.
- [ ] **GSC sitemap submit (rancho-seo-s6).** Submit `https://ranchomoonrise.com/sitemap.xml` to Search Console. This was blocked on cutover; now actionable.


## ✅ DONE 2026-04-28 — Scroll effects (5 patterns from grandladyaustin.com)

Added `site/js/scroll-effects.js` (vanilla JS, no libs) + ~150 lines of CSS at the end of `site/css/styles.css`. CSS bumped to `?v=15` on `index.html`.

1. **Parallax hero** — `.parallax-hero` on hero bg div(s) of `index.html` (5 slideshow slides), `weddings.html`, `host-your-event.html`, `accommodations.html`. JS does `translate3d(0, scrollY * 0.4, 0)` via rAF. Skipped on touch + reduced-motion.
2. **Stagger reveals** — `.reveal-stagger` on the venue-duo quad and events-grid on `index.html`; children fade-up with 0.15s stagger. Coexists with main.js's `.reveal` handler (no double-binding).
3. **Nav `.scrolled` state at 80px** — independent of main.js's `.nav--scrolled` (60px). Past 80px nav background swaps to `var(--color-footer-bg)` at 95% with `backdrop-filter: blur(10px)`.
4. **Sticky text + scrolling images** — new "Entirely Yours" section on `index.html`. Pure CSS sticky on `min-width: 900px`; stacks on mobile.
5. **Horizontal drag gallery** — new "From Our Guests" section on `index.html` using 20 photos from `site/visitor-photos/visitor-photo-01.jpg` through `-20.jpg` (copied from repo-root `visitor-photos/`). Mouse + touch drag, scrollbar hidden, 420px desktop / 280px mobile.

**Verified in preview (port 8080):** zero console errors. Parallax transform fires (`translate3d(0, 160px, 0)` at scrollY 400 on weddings.html). `.nav.scrolled` resolves to `rgba(30, 27, 22, 0.95)` + blur. Drag gallery overflows correctly (scrollWidth 7315 vs clientWidth 1265). Sticky H2 renders Americane 40px on cream. Existing main.js `.fade-in` / `.reveal` / `.nav--scrolled` / FAQ accordion all still firing.

## ✅ DONE 2026-04-25 (evening) — Routing + Calendly cleanup

1. **`api/inquiry.js` event_type mapping rewritten** — no more CRM-invalid `general` / `event_other`. Always maps to one of `wedding | private_event | glamping | pool_day_pass | corporate | other`. 17/17 unit cases pass.
2. **Calendly placeholder URLs hard-wired in HTML** across `weddings.html` (4), `contact.html` (5), `host-your-event.html` (2). `tour` → `calendly.com/rancho_moonrise/connect`, `call` → `calendly.com/monet-b30w/30min`, both with `target="_blank" rel="noopener"`. `virtual` still falls back to `/pages/contact.html?intent=wedding` until Adam supplies a Calendly URL. Crawlers and no-JS users now get correct destinations without depending on `main.js`.

## ✅ DONE 2026-04-25 — Pre-launch CRO/QA pass

Launch-blocker sweep across the Vercel site ahead of DNS cutover. Full breakdown in CHANGELOG.md.

1. **Calendly placeholders wired to real URLs** — `tour`→`calendly.com/rancho_moonrise/connect`, `call`→`calendly.com/monet-b30w/30min`. `virtual` (30-min walkthrough) has no URL yet — falls back to `/pages/contact.html?intent=wedding` (form + phone fallback intact).
2. **Page-specific mobile sticky CTAs** — homepage "Plan an Event", weddings "Send a Wedding Inquiry", host-your-event "Send an Event Inquiry", accommodations + safari-tents "Check Availability", contact "Call 737-291-1260", pool already correct.
3. **Form hardening** — phone required on wedding/event forms with auto-attached asterisk; `page_path` / `source_url` / `submitted_at` / `referrer` hidden fields stamped at submit; `host-your-event.html` form's missing `inquiry_type=event` hidden input added.
4. **Risky claims softened** across contact, weddings, host-your-event — pricing-frame language replaces "we respond immediately" / "we'll send package details right away" / "within 2 hours" / hard bar pricing tiers ($7-$15/pp/hr).
5. **Analytics scaffold** — `window.rmTrack` + click auto-binder for `cloudbeds_click` / `resortpass_click` / `calendly_click` / `phone_click` / `email_click` / `form_submit_success` / `form_submit_error` / `wedding_inquiry_submit` / `event_inquiry_submit` / `general_inquiry_submit`. Auto-tags by URL pattern so nav/footer Book Now links emit conversions site-wide. **NEEDS ADAM:** GA4 measurement ID or GTM container ID.
6. **Voice scrub** on primary pages — all "50 overnight guests" / "Multiple Ceremony Sites" / "$3K bar package" specifics removed; replaced with "your wedding party" / "Unlimited Ceremony Layouts" / venue-mandatory bar policy from VOICE-GUIDE.
7. **Stale event QA** — `index.html` static event grid Apr 24 Free Friday → May 29 (live Supabase hydrator unaffected, this is the no-JS / SEO fallback).
8. **Phase 2 CRO improvements:**
   - Homepage trust bar near top + hero CTAs reordered to lead "Plan an Event"
   - Wedding page "What Drives Wedding Pricing" + bar-policy section
   - Private events page "What Drives Event Pricing" + bar-policy section + dual hero CTAs
   - Accommodations "Good to Know — Before You Book" objection-answers block (bathrooms, A/C, pool, parking, pets, check-in/out, alcohol, quiet hours)

**Verified locally** at desktop + mobile (375×812) on homepage, weddings, host-your-event, accommodations, contact, events. No console errors. Calendly resolution confirmed via DOM eval. Phone-required + asterisk attachment confirmed. Local `/api/inquiry` returns 404 because `server.js` doesn't proxy serverless functions (production webhook only runs on Vercel) — intentional, no fake leads submitted.

**NEEDS ADAM follow-ups (logged in CONTEXT.md "What's Next"):**
- [ ] **Provide GA4 measurement ID or GTM container ID** — site already emits all conversion events through `window.rmTrack`. Wiring GA4/GTM is a single `<script>` in the page head.
- [ ] **Provide Calendly URL for 30-min virtual wedding walkthrough** — once you have it, add the URL to `CALENDLY_URLS.virtual` in `site/js/main.js`. Two link instances will pick it up automatically (`weddings.html:450`, `contact.html:216`). No HTML edits required.

## ✅ DONE 2026-04-21 — Admin Galleries Build + 4-Page Photo Hydration

Shipped the capstone of the admin panel refactor: Ashley can now CRUD photos directly from `/admin` without touching code.

1. **Events admin auto-sorted by closest date first** — `site/admin/index.html` events list now ascending by `event_date` (upcoming on top, past at bottom).
2. **New Galleries admin tab** — picker for 5 sections (`events_barn`, `weddings`, `pool`, `lodge`, `ranch_tour`), full CRUD: upload to `rancho-moonrise/galleries/` Supabase Storage bucket, edit alt_text/title/sort_order, toggle `is_active`, delete. Single Tab UI alongside existing Events and Photos (hero slideshow) tabs.
3. **Expanded `rancho_photos.section` CHECK constraint to 9 values** — was 4, now includes the 5 new gallery sections.
4. **Seeded 64 rows into `rancho_photos`** from the hardcoded HTML across the 4 public pages (legacy pattern: `storage_path='legacy/...'`, `public_url='/images/...'`).
5. **Hydrated 4 public pages from Supabase:**
   - `events.html` — `events_barn` (12 photos)
   - `weddings.html` — `weddings` (17 photos) — lightbox preserved via event delegation + `gallery:hydrated` CustomEvent (tiles rebuilt as `<button>` with regenerated `data-lb-index`, lightbox re-runs `collectPhotos()` on event)
   - `pool-day-pass-austin.html` — `pool` (6 photos)
   - `accommodations.html` — `lodge` (9) + `ranch_tour` (20), single hydrator handles both via `querySelectorAll('[data-gallery]')`
6. **All hydrators non-blocking** — hardcoded HTML stays as SEO fallback if fetch fails. Responsive srcset derived from `-1024.webp` / `-1920.webp` naming pattern.

Commit `96f6f96`, pushed to origin. Vercel deploy `dpl_7XsYa1pg1u7XweUDZfYVG7v4Rg5H` state **READY** (build time ~19s, region iad1). Live on `rancho-moonrise.vercel.app`.

## ✅ DONE 2026-04-21 — Pre-DNS-cutover event sweep

Triple workstream the day before the DNS cutover. All blocking items closed.

1. **Ashley admin login verified** — Reset `aludkows@gmail.com` password directly via Supabase `auth.users` using `pgcrypto` (`crypt('...', gen_salt('bf', 10))`) — no service_role key needed. Verified login via `/auth/v1/token?grant_type=password` against the anon key — returned a valid access_token. Password reset email then sent to **howdy@ranchomoonrise.com** (not `aludkows@gmail.com` — per Adam's directive since Ashley has mailbox access to howdy@). First Outlook draft had a CDATA encoding bug — discarded and regenerated clean; Adam to send the second draft.
2. **events.html cleaned + wired to Supabase** — Cross-referenced old WordPress `ranchomoonrise.com/events/list/` and verified no events missing. Added 130-line client-side hydration block in `events.html` (lines 797-925): JS fetches from Supabase REST `rancho_events` table with anon key, pulls `status=eq.published` and `event_date>=now()`, replaces hardcoded May/June/July/August grid while preserving hardcoded HTML as SEO fallback. Verified syntax with `node --check`. Data-events-month attributes confirmed at lines 231 (April), 280 (May), 389 (June).
3. **Supabase data cleanup** — Fixed 4 title mismatches (WordPress canon vs. Supabase), inserted 2 missing events (Rancho Rodeo: Cinco De Mayo, Lone Star Party), assigned artwork_url to 2 NULL rows (Rosés Around the World → `hero-sunset-roses.jpg`, Sunday Funday → `event-free-friday-pool.webp`). Column name fix: `ticket_url` (singular), not `tickets_url`.
4. **GBP event backlog cleared via Publer** — Root cause of "only 1 event posted yesterday": n8n workflow `QYxXYLx5WgKI9393` uses a 7-day lookahead, so on 2026-04-20 only Apr 26 Yoga was caught (Apr 24 Free Friday was already `gbp_posted=true`). Working as designed. Solution: bypass n8n, manually push backlog via bash + curl mirroring workflow logic. Built `/tmp/gbp-post/post-event.sh` — downloads image from Vercel, uploads to Publer with explicit `Content-Type: image/webp|jpeg|png` (Publer rejects `.bin` / missing MIME), schedules GBP post via `/api/v1/posts/schedule` with 15-min stagger starting at now+10min. Posted 12 events (May 02 through Aug 30) at 16:01Z–18:47Z UTC = 11:01 AM–1:47 PM CDT. All 12 rows marked `gbp_posted=true` in single SQL tx. `still_unposted=0` verified post-run. Inserted audit row into `n8n_run_logs` with `workflow='gbp-event-sync-manual'`.

**Publer job_ids captured** (all @ 2026-04-21):
- Cinco De Mayo 05-02 → `69e79cfddf0b0c07bbc36963` @ 16:01Z
- Mother's Day Retreat 05-10 → `69e79d1078f5d69b2b037c66` @ 16:16Z
- Sunday Funday 05-24 → `69e79d12a758d2afe1dce9dc` @ 16:31Z
- Rosés Around the World 05-24 → `69e79d1ddf0b0c07bbc369c8` @ 16:46Z
- Yoga & Mimosas 05-31 → `69e79d1f4691a4d56f9437ab` @ 17:01Z
- Rancho Rodeo: Sun Series 06-06 → `69e79d20a758d2afe1dce9f7` @ 17:16Z
- Paella Dinner Party 06-20 → `69e79d2a1e6e96dad0ebec8b` @ 17:32Z
- Yoga & Mimosas 06-28 → `69e79d2c1e6e96dad0ebec91` @ 17:47Z
- 4th of July Music Festival 07-04 → `69e79d2ddf0b0c07bbc36a13` @ 18:02Z
- Lone Star Party 07-18 → `69e79d378dca9d3a132c7012` @ 18:17Z
- Yoga & Mimosas 07-26 → `69e79d3878f5d69b2b037d02` @ 18:32Z
- Yoga & Mimosas 08-30 → `69e79d398dca9d3a132c701f` @ 18:47Z

**NEEDS ADAM follow-ups:**
- [ ] Send clean Outlook draft #2 (password reset) to howdy@ranchomoonrise.com — discard the first one (CDATA bug)
- [ ] Confirm Ashley can log in after she receives it
- [ ] DNS cutover tomorrow — once live, re-test Supabase hydration + events.html loads from the final hostname

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


## Now (this week — April 20-26)

### ✅ DNS CUTOVER LIVE (verified 2026-04-30)
- [x] DNS cutover from BofillTech → Vercel — verified live 2026-04-30 (`server: Vercel`, www host serves HTTP 200)
- [ ] **Post-cutover smoke test (NEEDS ADAM or next interactive run):** load `/pages/events.html` on `www.ranchomoonrise.com`, verify Supabase hydration populates the month grids, verify no mixed-content / CORS errors, verify all 12 GBP posts scheduled 04-21 render correctly on the GBP listing over the next few days.
- [ ] **Ashley:** confirm admin login (howdy@ranchomoonrise.com Outlook draft #2)

### CLAUDE (next task to build) — Re-verify gate for Rancho
- [ ] **Create `rancho-review-monitor` scheduled task** — mirror `acr-review-monitor` pattern, own Rancho GBP review-reply state as a live claim. Use the shared gate at `/Users/adamstyer/Documents/client-ops/templates/re-verify-before-report.md`. Verification path: public GBP page scrape or Places API `place.reviews[].reply` presence. First-run responsibility: re-verify every live-claim finding currently in CONTEXT.md Active Blockers + improvement-plan.html Plan-tab task cards, auto-resolve stale ones into `rancho-done-log.md`. Expected ~30 min fork of acr SKILL.md.
- [ ] **Add Re-Verify Gate to `rancho-site-daily` SKILL** — same runbook, for SERP/indexing claims it currently surfaces without re-checking.
- [ ] **Add Re-Verify Gate to `rancho-competitive-weekly` SKILL** — same runbook, for competitor-state claims.


### NEEDS ADAM — Weekly Strengthener Blockers (added 2026-04-22, **2nd consecutive blocked run 2026-04-29**)
**Status:** rancho-content-weekly produced zero website edits for two weeks running because both prerequisites are unowned. Two paths forward: (1) settle both decisions this week, or (2) pause `rancho-content-weekly` in `GOALS.md` → "Paused Workstreams" until prereqs land.
- [ ] **Create approved testimonials list for website use.** `rancho-content-weekly` strengthener task needs real guest quotes tied to verified event dates to place on landing pages (weddings, accommodations, events, etc.). The review report has some snippets but none are verified or on an approved list. Curate 10–15 real quotes from Google/Knot reviews, note the event date, and save as `brand/approved-testimonials.md`. Required before the weekly strengthener can add social proof to any page.
- [ ] **Decide: Adam or Ashley as named content author on website pages?** The weekly strengthener adds an author byline block to landing pages. It can't proceed without knowing who to attribute. Options: (a) Ashley as "your host" (authentic — she runs day-to-day), (b) Adam as "advisor/strategist" (if Adam writes the copy), (c) "The Rancho Moonrise Team" as a generic byline (no named person required). Save decision in GOALS.md under "Settled Decisions."

### NEEDS ADAM — GBP work (newly unblocked, he has Manager access)
- [x] Reply to all 9 unreplied Google reviews — DONE 2026-04-14 per done-log (RESOLVED by Adam)
- [x] Replace blog post in GBP "From the owner" with real business description — DONE 2026-04-15 (Task 2)
- [x] Set business hours on GBP — DONE 2026-04-15 (Mon/Tue closed, Wed–Sun 9–8)
- [x] Answer remaining amenity categories on GBP — DONE 2026-04-15
- [x] Add opening date + HTTPS website + phone verify — DONE 2026-04-15
- [x] **GBP primary category swap Hotel → Event venue** — Adam 2026-04-15. Hotel category blocked the "From the owner" description field entirely; Event venue + Wedding venue is a truer match for how the property actually books revenue (46% private events, 31% rooms). Hotel stays on as a secondary category so lodging queries still hit.
- [x] Answer the unanswered pool day pass Q&A on GBP — DONE 2026-04-15 (Adam answered directly). 10 seed FAQs added to faqs.html instead (GBP Q&A seeding UI unavailable). Task 3 RESOLVED.
- [x] Verify social profile links on GBP (Task 7 — MANUAL) — DONE 2026-04-16 per done-log
- [ ] Enable Google Chat on GBP (Task 15 — MANUAL)
- [ ] Upload 10+ owner photos to GBP across all categories (Task 27 — MANUAL)

### NEEDS ADAM — Improvement plan data sources
- [ ] **Fill GSC rows on improvement-plan.html** (impressions / clicks / CTR / avg position / pages indexed) — grab from [search.google.com/search-console](https://search.google.com/search-console) last-28-days view, paste numbers to Claude, or greenlight the n8n workflow option below. GSC has no access gating, unlike GBP.
- [x] **Decide: automate GBP + GSC monthly pull?** ✅ 2026-04-14 — greenlit. Design spec landed at `brand/n8n-metrics-pull-spec.md`. Build in next n8n session: GSC weekly workflow first (no gating, ~1.5 hr), GBP email parser second (after the April email lands ~May 6, ~45 min).
- [ ] **Pull Photo views + Bookings from GBP dashboard** — not in the monthly email; need a one-time manual grab from business.google.com until GBP API access lands.

### NEEDS ADAM — From 2026-04-23 Ashley Onsite Meeting
- [ ] **Respond to Cynthia on Yelp** (grad party, 20 people daytime) — barn rental at ~$75/hr + venue alcohol framing. **Do NOT quote $3K package.** Pricing rule codified in `brand/voice-guide.md` → "Inquiry Responses — Pricing Frames".
- [x] ~~Fix hot tub listing on GBP~~ — DONE 2026-04-24 (commit `0bec5cf`). Chatbot KB + GBP profile fields doc updated.
- [ ] **Re-report Scott Morgan 1★ review on Google Maps** — Ashley thought it was gone; it's still live. Try "low quality information" or "off topic" classification.
- [ ] **Update Ashley's Gmail profile photo** — she called it out at the meeting.
- [ ] **Document Paul/Donna step-away email + Ben/Robert counter** → send summary to Nancy. Material deal development. Donna still unilaterally renewing insurance.
- [ ] **Business plan + projections for Christopher** — Ashley's call: realistic projections are the next move to close. Needed anyway for buyout modeling.
- [ ] **Alternate path to QuickBooks access** — Beth (bookkeeper) is a Donna loyalist, cannot be used as a resource. Even Beth thinks Donna is unreasonable. Need a different path.

### Ashley-requested website batch (small, safe to ship together)
- [ ] Nav order: Happenings → Accommodations → Weddings → Private Events → Contact
- [ ] Remove small floating text blocks at top of RM Events and Private Events pages
- [ ] Replace wrong section photos — birthday section currently shows Lone Star (wrong); day retreats currently shows yoga mimosas (wrong)
- [ ] Color/logo update: swap green to sage or stone; square logo → stone color
- [ ] Mobile audit — some blocks still render wonky on phone
- [ ] Add "Manor, TX" to location tags / schema / alt text (NOT body copy — Ashley refuses)

### Major next project — Inquiry auto-responder
- [ ] Set up shared inquiry inbox (`inquiries@ranchomoonrise.com` or similar) for Ashley + Monet
- [ ] Build auto-responder: read inquiry → send customized response → start drip if no reply → hand off to human at tour/booking stage
- [ ] Enforce pricing-frame rules from voice guide at draft-send time (hold for human review on violation)
- [ ] Consider SMS follow-up in the drip
- [ ] Feedback loop: Ashley corrects bad drafts, corrections refine the prompt
- [ ] Current funnel math: ~100 inquiries → 10 replies → 2 tours → 1 booking. Target: raise reply rate with auto-response, raise tour rate with better qualifying questions.

### Operational gap — Bar manager
- [ ] Flag to Nancy: bar manager is effectively a full-time role with no one filling it. Alcohol ordering (25 distributors, minimums, tracking) is currently on Ashley on top of everything else. Biggest single operational risk.

### Deprioritize / kill (per Ashley)
- [x] ~~Blog pipeline (ongoing)~~ — PAUSED per Ashley 2026-04-23. Do not push new drafts until she has bandwidth to review. Does not apply to scheduled SEO daily runs that have already shipped.
- [x] ~~WeddingWire paid placement~~ — Ashley skeptical after The Knot $1K/mo × 8–10 months = zero bookings. Open the free listing (already tracked) but don't spend.
- [x] ~~Breakfast taco upsell~~ — killed (not sustainable without on-site food).

### NEEDS ADAM — From 2026-04-23 Bi-Weekly Audit
- [ ] **Claim TripAdvisor listing** — 20 minutes, free. Still 0 reviews / unclaimed at audit time. Biggest multi-platform discoverability gap on the books.
- [ ] **Open WeddingWire listing** — 30 minutes, free. No listing exists.
- [ ] **Wire wedding inquiry form backend** — contact.html and weddings.html both still `action="#"`. Formspree or Vercel serverless → email + Salesforce create_lead. One-day job, unblocks all downstream nurture automation.
- [ ] **Submit to ResortPass before May 1** — Lucky Arrow's ResortPass has no active products through May 1 (per 04-20 competitive intel). 10-day competitive window to be the only non-hotel glamping pool pass in Austin. resortpass.com/list-property.
- [ ] **Re-upload 8 low-res source JPGs at 2560px+** — especially `feature-wedding.jpg` (bride-critical). Responsive pipeline can't upscale past source dimensions; 4 accommodation cards are currently 340×340 thumbnails.
- [ ] **Seed stay-type-routed post-event review request** — glamping → Hipcamp, wedding → The Knot/WeddingWire, event → Google. Even a manual template routed by Ashley beats the current ad-hoc state.
- [ ] **Rewrite Hipcamp listing first paragraph + OTA listings (Expedia, Hotels.com, Agoda)** — lead with "glamping + shared-bath cabin option, private-bath safari tent option" so amenities surface honestly. Addresses Alison's 4★ feedback from 04-16.

### NEEDS ADAM — Infrastructure
- [x] **DNS cutover from BofillTech to Vercel** — DONE, verified live 2026-04-30 (Vercel server header, www host serves HTTP 200). #1 SEO unlock complete. Next: GSC submit + canonical strategy (apex vs www).
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
- [x] Blog post #11 — "Things to Do Near Austin With Kids" — DONE 2026-04-15
- [x] Blog post #12 — "Corporate Retreat Planning Guide Texas" — DONE 2026-04-15
- [x] AEO block + FAQPage + SpeakableSpec on `glamping-near-austin-texas.html` — DONE 2026-04-16
- [x] AEO block + FAQPage + SpeakableSpec on `bachelorette-party-austin-texas.html` — DONE 2026-04-16
- [x] AEO + schema pass on 4 remaining zero-coverage landing pages: `wedding-venues-near-austin.html`, `corporate-retreat-near-austin.html`, `ranch-wedding-texas.html`, `things-to-do-manor-tx.html` — DONE 2026-04-17. FAQPage + SpeakableSpecification + aeo-block on all 4. Commit `e570002`.
- [x] Blog post #13 — "Summer Glamping Near Austin Texas" — DONE 2026-04-18. AEO block, FAQPage schema (4 Q&A), SpeakableSpecification, BlogPosting schema. Seasonal timing target: 6 weeks before peak summer demand.
- [x] Blog post #14 — "Austin Bachelorette Weekend: Ranch vs. Bar Crawl" — DONE 2026-04-19. Comparison/decision format. AEO block, comparison table, decision framework, FAQPage (4 Q&A), SpeakableSpecification, BlogPosting, BreadcrumbList. Cross-link from bachelorette guide. Commit `2a4837a`.
- [x] Blog post #15 — "Corporate Retreat: Ranch vs. Hotel Conference Room" — COMMITTED 2026-04-21. File existed locally as untracked (created 2026-04-20, full schema). Committed and pushed this run.
- [x] Blog post #16 — "Mother's Day Near Austin Texas" — DONE 2026-04-21. Seasonal target (Mother's Day May 11). AEO block, FAQPage (4 Q&A), SpeakableSpecification, BreadcrumbList. Three-tier content: pool day pass / Yoga & Mimosas / overnight stay.
- [x] Blog post #17 — "Birthday Party Venue Near Austin Texas" — DONE 2026-04-22. High commercial intent (private events = 46% revenue). AEO block, FAQPage (4 Q&A), SpeakableSpec, BreadcrumbList. CTAs to host-your-event + accommodations.
- [x] Blog post #18 — "Yoga Retreat Near Austin Texas" — DONE 2026-04-24. Targets yoga/wellness keyword cluster using Yoga & Mimosas event series (May 31, Jun 28, Jul 26, Aug 30). AEO block, FAQPage (4 Q&A), SpeakableSpec, BreadcrumbList. CTAs to events + host-your-event. S1 now 18 posts.
- [x] ReservePage schema on pool-day-pass-austin.html — DONE 2026-04-22. Dual type `["WebPage","ReservePage"]` + `ReserveAction` potentialAction → ResortPass URL. Time-sensitive (Lucky Arrow window closes May 1).
- [x] Rotate past Free Friday Apr 24 → May 29 — DONE 2026-04-25. events.html Event schema, static card, and EVENTS JS array all updated. sitemap lastmod bumped. Apr 26 Yoga & Mimosas left as-is (still upcoming).
- [x] Add FAQPage schema + visible FAQ to safari-tents-near-austin.html — DONE 2026-04-26. Closes the only gap in the SEO cluster (other landing pages already had FAQPage). 4 questions, BlogPosting-style answers. Speakable cssSelector expanded. Sitemap lastmod bumped to 2026-04-26.
- [x] Rotate past Apr 26 Yoga & Mimosas → July section + AggregateRating on weddings.html / host-your-event.html + sitemap freshness sweep — DONE 2026-04-27. April section replaced with July (4 events). Event JSON-LD updated. EVENTS JS array updated. EventVenue schemas on weddings + host-your-event now carry AggregateRating (4.9 / 125). 9 sitemap lastmod entries bumped (3 to 04-27, 6 to 04-16/17 to match actual AEO-block edit dates). All 11 JSON-LD blocks validate.
- [x] Extend AggregateRating to wedding-venues, corporate-retreat, ranch-wedding, bachelorette, pool-day-pass — DONE 2026-04-28. Embedded in `publisher.Organization` (BlogPosting pages — keeps rating off the article and on the venue entity). Sitemap lastmod bumped on all 5. All 20 JSON-LD blocks validate.
- [x] Extend AggregateRating to remaining 4 BlogPosting landing pages — `glamping-near-austin-texas`, `things-to-do-manor-tx`, `glamping-vs-camping`, `things-to-do-near-austin-with-kids` — DONE 2026-04-29. Same `publisher.Organization` pattern (4.9 / 125 / bestRating 5). dateModified + sitemap lastmod bumped to 2026-04-29 on all 4. All 16 JSON-LD blocks validate. Coverage now 14 of 17 customer-facing pages.
- [x] AggregateRating treatment for the 2 remaining utility pages (`faqs.html` + `contact.html`) — DONE 2026-04-30. `contact.html` extended its existing nested `LocalBusiness` (under `mainEntity` of `ContactPage`) with `aggregateRating`. `faqs.html` got a stand-alone `LocalBusiness` JSON-LD with the rating + full address + phone. Coverage now 16/17 customer-facing pages.

### NEEDS ADAM — Review monitor flags (from 2026-04-15 rancho-review-monitor run)
- [ ] **Verify possible Airbnb listing** — search surfaced `/rooms/1284193976615696223` ("Glamping Safari Tent 25 mins from downtown Austin, Manor TX"). April 9 baseline said no Airbnb listing. Confirm if this is a Rancho Moonrise listing — if yes, add to review coverage scope. (Page returned 403 when fetched by agent.)

### NEEDS ADAM — YouTube channel
- [ ] **Upload remaining 7 videos (01-07)** — hit YouTube daily upload limit. Try again tomorrow. Files are in `youtube-uploads/` folder with manifest spreadsheet.
- [ ] **Delete duplicate videos** — Fk17TEpGCFY (10-pool-wedding-day) and WTstKx2JVUo (11-ranch-flower-decorations) are duplicates of the content that was correctly uploaded under different IDs. Pick which set to keep and delete the other.

### NEEDS ADAM — Competitive intel quick wins (updated 2026-04-27)
- [ ] **⚡ ResortPass — decide within 48 hours, window now 4 days.** Lucky Arrow's listing still shows "no active products at the moment" (verified live 2026-04-27); their site copy says full menu/bar resume **May 1, 2026**. Either submit this week (resortpass.com/list-property or supply team email) and beat the reactivation, or remove from this list. Waiting past Wednesday is effectively a "no."
- [x] **Build a corporate retreats landing page** — DONE 2026-05-01. `/pages/corporate-retreats.html` shipped with EventVenue + BreadcrumbList + FAQPage (6 Q&A) + SpeakableSpecification schema. Clean route `/corporate-retreats/` wired in `vercel.json`. Sitemap entry added with priority 0.9. Voice-guide-clean (no banned terms; pricing-frame language matches Ashley's tour-required + venue-mandatory bar policy). Closes the competitive gap vs. Yurtopian / Lucky Arrow / 7744 Ranch / Element Ranch / Sage Hill. 4 JSON-LD blocks parse, `npm run validate:site` passes, local preview verified clean (6 FAQ items, 9 sections, 0 broken images, 0 console errors).
- [ ] Submit Glamping Hub listing — free, 15 min at glampinghub.com/list-your-property. The Yurtopian, Udoscape, Talula Mesa, Spoon Mountain (likely) all appear there while Rancho Moonrise stays absent.
- [x] **DNS cutover** — DONE, verified live 2026-04-30 (Vercel server header). 18+ blog posts + safari tent page + full AEO suite are now crawlable at the production hostname.

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
- [x] YouTube channel with walkthrough videos (Task 23) — PARTIALLY DONE 2026-04-17. 10 of 17 videos uploaded (08-17) with full metadata. 7 remaining (01-07) blocked by daily upload limit.
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
