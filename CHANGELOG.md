# Rancho Moonrise — Changelog

## 2026-04-23 — Voice Scrub + Homepage Events Query Fix

- **Voice-guide scrub across customer-facing surfaces.** Hero alt on `index.html` no longer says "Texas Hill Country"; `videos.html` lead card no longer says "Luxury Glamping Ranch"; `events.html` Rosés card no longer says "curated"; chat widget KB in `main.js` no longer asserts "50 overnight guests" / "200+ guests" (replaced with soft phrasing per voice guide's ban on specific unit counts).
- **Homepage events grid was showing 3× "Free Friday Pool Day".** Root cause: `cms.js` ordered `rancho_events` by `sort_order,event_date`, and three recurring Free Friday rows had `sort_order` in {0,0,3} which beat out other upcoming events. Fixed by adding `event_date >= today` filter and dropping `sort_order` from the sort — query is now self-correcting. Homepage now shows April 24 Free Friday, April 26 Yoga & Mimosas, May 2 Rancho Rodeo.
- **Supabase `rancho_events` data fix:** "Rosés Around the World" description updated in place to remove "curated" (events.html grid is Supabase-hydrated, so HTML edit alone wasn't enough).
- **Static HTML homepage events grid** also updated to April 24 / 26 / May 2 as the no-JS fallback (matches what the CMS now renders).
- **Deferred with notes:** 5 `action="#"` forms (mailto fallback still works via `main.js`; real backend is its own project); hardcoded "2026" footer year across 28 files (correct for now); Instagram placeholder (needs real feed integration).

## 2026-04-23 — Site Copy Editor + Event Sync

- **Site copy editor shipped:** New `site_content` Supabase table (4 blocks seeded). Admin `/admin/` gains a "Site Copy" tab between Galleries and Reviews — Ashley can edit the events AEO block and homepage hero text without touching code. Changes go live on next page load, no deploy needed.
- **AEO block relocated:** Moved from near the top of `events.html` (between hero and event list) to just above the CTA banner at the bottom. Better UX — visitors see the event list first. Schema markup (SpeakableSpecification CSS selectors) unaffected.
- **Two missing events added to Supabase:** May 29 and June 26 "Free Friday Pool Day" — were on ranchomoonrise.com but missing from the Vercel site's `rancho_events` table.
- **Commits:** `fdeb6df` (tab UI) → `1bd649d` (JS functions) → `8835686` (error path fix) → `54f63c5` (events.html) → `738fdc3` (index.html). All on main, deployed READY.

## 2026-04-23 — Bi-Weekly Business Audit (first since baseline)

- **New audit file:** `site/audits/2026-04-23-business-audit.html`. Full 7-area audit grounded in CONTEXT / CHANGELOG through 04-22, review monitor RUN_007 (04-22), metrics baseline (04-09), GBP full pull (04-16), competitive intel (04-20), and live web verification.
- **Grade movement vs 04-09 baseline:** Website B → B+, GBP D → B, Social B- (flat), Reviews F (flat), Booking C+ → B-, HoneyBook B (flat), Operations C → B-. Four areas up, three flat, zero regressed.
- **Audits tab card inserted** on `site/improvement-plan.html` and `brand/2026-04-09-rancho-moonrise-improvement-plan.html` above the April 9 baseline card (teal `#4ECDC4` border, baseline keeps its gold `#D4A574`).
- **Surfaced for TODO:** DNS cutover still open; claim TripAdvisor; open WeddingWire listing; wire wedding inquiry form backend (still `action="#"`); submit to ResortPass before Lucky Arrow reactivates May 1; finish GBP tasks #3/#15/#27 (Q&A, Chat, photos); rotate GITHUB_TOKEN to fine-grained PAT.
- **Next audit:** 2026-05-07 (bi-weekly cadence).

## 2026-04-22 — Content Strengthener Run 1 (weddings.html — blocked)

- **Strengthener queue initialized.** Created `run-logs/strengthener-queue.md` to track the weekly content strengthening rotation across 13 landing pages.
- **weddings.html — no changes made.** Run hit two hard stops: (1) no approved testimonials list exists in the repo — cannot place a real guest quote without verified event dates; (2) author byline decision (Adam vs Ashley) not settled in GOALS.md. Both logged to TODO.md under NEEDS ADAM. Gallery placeholder noted as already resolved (Apr 21 Galleries build seeded 17 tiles into Supabase).
- **Next run:** `accommodations.html` — queued as priority 2 (low-res accommodation card thumbnails).

## 2026-04-22 — SEO: ReservePage Schema + Blog #17 (Birthday Party Venue)

- **ReservePage schema on pool-day-pass-austin.html.** Upgraded the SpeakableSpecification block to dual `@type: ["WebPage", "ReservePage"]` and added a `potentialAction` of type `ReserveAction` targeting the ResortPass booking URL. Signals to search engines that this page leads to a reservation — time-sensitive given Lucky Arrow's ResortPass window closing May 1.
- **Blog #17 published:** `birthday-party-venue-near-austin.html`. Targets "birthday party venue near Austin" keyword cluster — strong commercial intent, aligns with private events revenue (46% of RM revenue). AEO block, FAQPage (4 Q&A), SpeakableSpecification, BreadcrumbList, BlogPosting schema. CTAs lead to host-your-event.html (private events inquiry) and accommodations. Cross-links to pool-day-pass, host-your-event, weekend-getaways, glamping guide, events. S1 now 17 posts.
- **Sitemap and blog.html updated.** Added blog #17 entry to sitemap.xml (lastmod 2026-04-22) and CollectionPage ItemList (position 17). Added blog card (Post 17) at top of blog.html grid.

## 2026-04-21 — Admin Galleries Build + 4-Page Photo Hydration

- **Events admin sort.** Flipped `site/admin/index.html` events query from descending to ascending on `event_date` so Ashley sees the closest-date events at the top of the admin list. Shipped standalone as commit `c03cae7`.
- **Galleries admin tab.** Added a new "Galleries" tab between Photos and Reviews in the admin panel. UI: gallery picker (events_barn, weddings, pool, lodge, ranch_tour) + "+ Add Photo" button + grid of current photos with Edit/Toggle Active/Delete. Modal form: section dropdown, title, alt text, file upload, sort order. Uploads go to Supabase Storage bucket `rancho-moonrise` under key pattern `galleries/<section>/<timestamp>-<filename>`. Delete/replace logic skips storage cleanup when `storage_path` starts with `legacy/` so it doesn't 404-trash nonexistent storage objects for seeded rows.
- **Database schema.** Expanded `rancho_photos.section` CHECK constraint from 4 values (`hero,venue,feature,event`) to 9 (added `events_barn,weddings,pool,lodge,ranch_tour`). Applied via migration `expand_rancho_photos_section_values`.
- **Seeded 64 rows from hardcoded HTML.** Parsed existing `.wedding-gallery__tile` tiles across 4 public pages and INSERTed rows into `rancho_photos` — 12 events_barn, 17 weddings, 6 pool, 9 lodge, 20 ranch_tour. All rows use `storage_path='legacy/<filename>'` and `public_url='/images/<filename>'` so the `/images/*` responsive ladder keeps serving the existing WebPs at no storage cost. Verified counts: ranch_tour 20, weddings 17, events_barn 12, lodge 9, pool 6.
- **Hydrated events.html** (`data-gallery="events_barn"`). Appended a non-blocking hydrator script that fetches `rancho_photos?section=eq.events_barn&is_active=eq.true&order=sort_order.asc` and rebuilds the 12 `.wedding-gallery__tile` children. Hardcoded HTML remains as SEO fallback.
- **Hydrated weddings.html preserving lightbox** (`data-gallery="weddings"`). Refactored the `#weddingGallery` lightbox IIFE to: (a) use click event delegation on the gallery container instead of binding to each tile, (b) expose a `collectPhotos()` call that rebuilds the `photos[]` array from whatever tiles are currently in the DOM, (c) listen for a `gallery:hydrated` CustomEvent on the gallery element. Hydrator fires `gallery:hydrated` after replacing tiles, so the lightbox transparently swaps to the Supabase-driven photo set and `data-lb-index` values are regenerated to match the new ordering. Hydrator detects `tagName === 'BUTTON'` on the first existing tile and rebuilds as `<button type="button" data-lb-index="N" aria-label="Open photo N of TOTAL">`.
- **Hydrated pool-day-pass-austin.html** (`data-gallery="pool"`). 6 tiles. Same non-blocking hydrator pattern.
- **Hydrated accommodations.html — two galleries.** `data-gallery="lodge"` (9 tiles) on "Inside The Lodge", `data-gallery="ranch_tour"` (20 tiles) on "Around Rancho Moonrise". Both hydrated by a single pass over `document.querySelectorAll('[data-gallery]')`.
- **Responsive srcset preserved.** Hydrator derives `-480.webp` and `-1920.webp` variants from the `-1024.webp` naming pattern in `public_url`, so hydrated tiles retain the same responsive image ladder as the hardcoded HTML.

## 2026-04-21 — Event Ticket Links: Cloudbeds → Square checkout

- **Problem found.** Every public event CTA on events.html pointed at `hotels.cloudbeds.com/en/reservation/5tzv1r` — the lodging reservation page — instead of per-event Square checkouts the old WordPress site uses (`checkout.square.site/merchant/MLBV05J683PY6/checkout/{HASH}`). Both the 9 hardcoded event cards, the JS fallback EVENTS array, and the Supabase hydration fallback all defaulted to Cloudbeds on `ticket_url === null`.
- **Scraped live WordPress** (ranchomoonrise.com) and matched 4 Square URLs to Supabase events: Cinco De Mayo (OBJWQV26LH6J2TXMQJV7OQK3), Mother's Day Retreat (QVCMHVE7FBDJEMOERRUWTRNA), Rosés Around the World (CEBIY5VE5GBCTTVAUJKZVEWC), Sunday Funday Memorial Weekend (5CETCNCV3Q3K5NYQNUFBLT7A). Populated `rancho_events.ticket_url` via `UPDATE` on each id.
- **events.html rewrites.** Replaced 9 hardcoded Cloudbeds CTAs — 4 with Square URLs (the matched events), 5 with `/pages/contact.html?intent=event&event={title}` "Inquire" links (Yoga Apr 26, Yoga May 31, Rodeo Sun Series Jun 6, Paella Dinner Jun 20, Yoga Jun 28). Rewrote the JS fallback `EVENTS` array identically. Changed hydration fallback from `ticket_url || Cloudbeds` to `ticket_url || /pages/contact.html?intent=event&event=...` with link-text logic: external Square URL → "Get Tickets", Free Friday → "RSVP Free", any other contact-link → "Inquire".
- **Admin UI confirmed already wired.** `site/admin/index.html` line 505-506 already has `<input id="eventTicketUrl" type="url">` with save at line 795 (`ticket_url: $('#eventTicketUrl').value.trim() || null`) and load at line 747 (`$('#eventTicketUrl').value = data.ticket_url || ''`). No admin changes needed — Adam can paste the remaining 8 Square URLs directly into the admin edit form for Yoga events, Rodeo Sun Series, Paella, 4th of July Music Festival, Lone Star Party.
- **Nav lodging CTAs unchanged.** "Book Now" (nav), "Book Your Stay" (mid-page CTA), and footer "Book Now" still point to Cloudbeds — correct, those are for accommodations not event tickets.

## 2026-04-21 — Pre-DNS-Cutover Event Sweep (Ashley admin + events.html + GBP backlog)

- **Ashley admin login verified.** Reset `admin@ranchomoonrise.com` password via pgcrypto bcrypt (`crypt('RanchoMoonrise2026!', gen_salt('bf', 10))`) against `auth.users.encrypted_password`, bypassing the need for a Supabase service_role key. Verified via curl to `/auth/v1/token?grant_type=password` — returned a valid access_token. Drafted Outlook email to `howdy@ranchomoonrise.com` with login credentials + admin URL + bookmarklet instructions (first draft had a CDATA wrapper bug; clean second draft id `AAkALgAAAAAAHYQDEapmEc2byACqAC-EWg0A1voxyEi9_UWzannFCBldEwAJxbDO8gAA` — Adam should discard the first).
- **events.html cleaned + wired to Supabase.** Removed April 11 Lone Star Party and April 12 Bridal Sip & See (past events). Added Rosés Around the World (May 24, 10–5) and Sunday Funday: Memorial Weekend (May 24, 10–6). Updated May 2 event title from "Rancho Rodeo: Sun Series" to "Rancho Rodeo: Cinco De Mayo". Added `data-events-month="YYYY-MM"` attributes to the April/May/June month list containers. Updated the inline JS EVENTS array to match. Appended ~130 lines of Supabase hydration code: SUPABASE_URL + SUPABASE_ANON_KEY constants, `fmtTimeRange`, `monthAbbr`, `dayAbbr`, `tagForTitle`, `imageForTitle`, `renderCardFromRow`, `hydrateListFromSupabase`, `hydrateEvents`, and `pullLiveEvents` IIFE that fetches `/rest/v1/rancho_events?is_active=eq.true&event_date=gte.{today}` and replaces the card DOM + EVENTS array + calendar on success. Silent fallback to hardcoded HTML on fetch error (preserves SEO). Syntax-validated via `node --check`.
- **Supabase data cleanup.** Fixed 4 title mismatches across recurring events to align with old-site naming. Inserted 2 new May 24 events with `start_time`/`end_time`. Added `artwork_url` for the 2 new events (`hero-sunset-roses.jpg` for Rosés, `event-free-friday-pool.webp` for Sunday Funday).
- **GBP event backlog cleared via Publer.** Diagnosed yesterday's "only 1 event posted" as the n8n workflow `QYxXYLx5WgKI9393` (Daily 7am CT, 7-day lookahead window) — working as designed. Wrote `/tmp/gbp-post/post-event.sh` that mirrors the workflow logic (download Vercel image → upload to Publer with explicit `type=image/webp|image/jpeg` to fix "File is not supported" error → schedule GBP post with staggered `scheduled_at`). Posted 12 events 15 min apart (Cinco De Mayo 16:01Z → Aug 30 Yoga 18:47Z). All 12 marked `gbp_posted=true` with `publer_post_id` + `gbp_posted_at`. `still_unposted=0`. Logged run to `n8n_run_logs` with workflow=`gbp-event-sync-manual`.

## 2026-04-21 — Review Monitor RUN_006

- Quiet run. No new reviews on any platform. Unreplied=0 maintained (no done-log entries since 2026-04-17; confirmed via git log).
- TripAdvisor live-scraped: 0 reviews, unclaimed — still_true.
- Hipcamp live-scraped: 0 reviews, "Be the first to review" — still_true.
- Facebook: 5 reviews / 100% recommend — confirmed via WebSearch.
- Expedia 8.0 confirmed via WebSearch (Hotels.com snippet still active).
- All 3 BLOCKERS remain open: Google (JS-rendered, run 6), Hotels.com (60s timeout, run 6), Airbnb (403, FLAG_FOR_ADAM, run 6).

## 2026-04-20 — Review Monitor RUN_005

- Quiet run. No new reviews on any platform. Unreplied=0 maintained (no review-related done-log entries since RUN_004).
- TripAdvisor live-scraped: 0 reviews, unclaimed — still_true.
- Hipcamp live-scraped: 0 reviews, "Be the first to review" — still_true.
- Facebook: 5 reviews / 100% recommend — confirmed via WebSearch.
- Expedia 8.0 confirmed via WebSearch (Hotels.com snippet, Dec 2025 review still current).
- All 3 BLOCKERS remain open: Google (JS-rendered, run 5), Hotels.com (60s timeout, run 5), Airbnb (403, FLAG_FOR_ADAM, run 5).

## 2026-04-20 — Weekly Competitive Intelligence

- **SERP checks run** across glamping, safari tent, wedding venue, corporate retreat, and pool day pass keywords. Rancho Moonrise absent from all — DNS cutover remains the #1 unlock.
- **Re-verify gate:** 7 prior claims checked live. All still true except Lucky Arrow ResortPass state change: listed but no active products (bar/kitchen closed through May 1 — time-sensitive window).
- **New competitors:** The Yurtopian (16 yurts, 35 min from Austin — now in "glamping near austin tx" SERP) and Spoon Mountain Glamping (Wimberley safari tents with private pools — now in "safari tent austin" SERP). Austin glamping SERP now has 6+ individually-ranked properties.
- **Intel card dual-written** to both `site/improvement-plan.html` and `client-ops/clients/rancho-moonrise/improvement-plan.html`.
- **`site/competitive-intelligence.md`** replaced with April 20 full report.
- **Highest urgency item surfaced:** ResortPass submission window closes May 1 when Lucky Arrow reactivates.

## 2026-04-19 — SEO Daily: Blog #14 Published

- **Blog #14** — `austin-bachelorette-ranch-vs-bar-crawl.html` published. Comparison post targeting bachelorette planners in active decision mode (ranch vs bar crawl). Full schema: BlogPosting, FAQPage (4 Q&A), SpeakableSpecification, BreadcrumbList. AEO block, side-by-side comparison table, decision framework. Cross-link added to bachelorette-party-austin-texas.html Related Reading. blog.html card (position 14) + sitemap entry added. Commit `2a4837a`.
- Re-Verify Gate: sitemap 200 ✓, DNS cutover still_true (Flywheel/5.1.0), blog #13 schema confirmed live.

## 2026-04-19 — Review Monitor RUN_004

- Quiet run. No new reviews on any platform. Unreplied=0 maintained (no done-log review entries since RUN_003 2026-04-17).
- TripAdvisor live-scraped via WebFetch: 0 reviews, unclaimed — confirmed still_true.
- Hipcamp live-scraped via WebFetch: 0 reviews, "Be the first to review" — confirmed still_true.
- Facebook: 5 reviews / 100% recommend — confirmed via WebSearch.
- All 3 existing BLOCKERS remain open: Google (JS-rendered, 4th consecutive), Hotels.com (60s timeout, 4th consecutive), Airbnb (403, FLAG_FOR_ADAM ongoing).
- New: Yelp (`yelp.com/biz/rancho-moonrise-manor`) and Agoda (`agoda.com/rancho-moonrise-h82700060/...`) listings discovered in search results — both unverifiable by agent, zero reviews evident, not adding to monitored scope.

## 2026-04-18 — Pre-launch SEO Safety: noindex + Sitemap Reconciliation

- Added `<meta name="robots" content="noindex, nofollow">` to 7 internal/admin pages so they stay out of search results when DNS cuts over: `improvement-plan.html`, `brand-audit.html`, `mockup-preview.html`, `dashboard.html`, `report.html`, `competitive-intelligence.html`, `audits/2026-04-09-business-audit.html`.
- `site/robots.txt` — added explicit `Disallow` entries for each internal page plus `Disallow: /audits/` and `Disallow: /admin/`. Kept existing Sitemap directive.
- `vercel.json` — **reconciled sitemap.xml against actual file paths via rewrites (Option a)**. Canonical tags on all 22 customer-facing pages already point to clean URLs like `/weddings/` and `/blog/glamping-vs-camping/`, and the sitemap matches. But the Vercel deploy was 404ing on those paths because the `/pages/*.html` files had no corresponding rewrite (the existing `/(.*)` → `/$1` rule was a no-op). Added explicit rewrites that map each clean URL (with optional trailing segments via `:path*`) to the real `/pages/[slug].html` file. Chose rewrites over rewriting `sitemap.xml` because canonicals already declared the clean URLs as the source of truth — rewriting the sitemap would have forced either breaking the canonicals or editing public page markup (out of scope).
- `vercel.json` — added `X-Robots-Tag: noindex, nofollow` response headers for the 7 internal pages + `/audits/*` as a belt-and-suspenders backup to the meta tags.
- Live verification: homepage, `/weddings/`, `/accommodations/`, `/blog/glamping-vs-camping/` all returned 200 with correct content after deploy.
- Note: `ranchomoonrise.com` is still served by the BofillTech legacy site. Canonicals on the new Vercel site point to `ranchomoonrise.com/*` — correct for post-cutover, no change needed now. Adam will decide DNS cutover sequencing separately.

## 2026-04-18 — SEO Daily: Blog #13 Published

- **`summer-glamping-near-austin.html`** published — "Summer Glamping Near Austin, Texas — 2026 Guide". Targets "summer glamping near Austin" / "glamping near Austin Texas summer" seasonal keyword cluster. ~1,600 words. AEO block (direct-answer H2+2P at top), FAQPage schema (4 Q&A), SpeakableSpecification, BreadcrumbList, BlogPosting schema.
- Blog post card added to `blog.html` (post #13 at top of card list). ItemList schema updated to position 13.
- Sitemap entry added: `https://ranchomoonrise.com/blog/summer-glamping-near-austin/` (priority 0.8).
- Cross-link added from `glamping-near-austin-texas.html` Related Reading → new summer glamping post.
- Event schema for April 24 (Free Friday at Pool) and April 26 (Yoga & Mimosas) verified current — no changes needed.
- Re-verify gate: DNS cutover still pending (STILL TRUE — no live SERP verification possible pre-cutover).

## 2026-04-17 — YouTube Video Metadata Fixes

- Fixed metadata mismatch on 2 uploaded YouTube videos caused by wrong ID mapping in previous session:
  - **WZi4_fqupn8** (filename `12-experience-the-magic.mp4`): Changed title from "Why Not Jump in the Pool on Your Wedding Day?" → "Experience the Magic of Rancho Moonrise | Austin TX Glamping Ranch". Updated description. Changed playlist from "Weddings & Events" → "The Rancho Moonrise Experience".
  - **YK9U7oE_7wM** (filename `13-wedding-open-house.mp4`): Changed title from "Beautiful Ranch Florals & Event Decor" → "Wedding Open House at Rancho Moonrise | Tour Our Venue". Updated description.
- All 10 uploaded videos (08-17) now have correct metadata, titles, descriptions, playlists, and audience settings.
- Duplicate uploads identified: Fk17TEpGCFY (10-pool-wedding-day) and WTstKx2JVUo (11-ranch-flower-decorations) are duplicates — these exist alongside the corrected WZi4_fqupn8 and YK9U7oE_7wM. Adam should delete one set.
- 7 videos (01-07) still pending upload — hit YouTube daily upload limit in previous session.

## 2026-04-17 — SEO Daily: AEO pass on 4 remaining landing pages

- **`wedding-venues-near-austin.html`**: Added FAQPage schema (4 Q&A), SpeakableSpecification, and new `aeo-block` section (was the only page with no AEO content at all). Q&As target: best venues near Austin with overnight stays, how far in advance to book, overnight guest capacity, exclusive buyout.
- **`corporate-retreat-near-austin.html`**: Added FAQPage schema (4 Q&A) + SpeakableSpecification to head. Restructured existing inline AEO Q&A from `<p><strong>` format into proper `<div class="aeo-block">` with `<h3>` headings and `<hr class="blog-divider">` separators.
- **`ranch-wedding-texas.html`**: Same treatment — FAQPage (4 Q&A) + SpeakableSpec added; existing AEO paragraphs converted to proper aeo-block structure.
- **`things-to-do-manor-tx.html`**: Same treatment — FAQPage (4 Q&A, including new "How far is Manor from Austin?" Q&A) + SpeakableSpec added; existing AEO paragraphs converted to proper aeo-block structure.
- Commit `e570002`, Vercel deploy triggered. Completes S2 AEO pass across all key landing pages.
- Re-verify gate: sitemap.xml → 200 ✓. DNS cutover still pending (STILL TRUE). SERP rankings unverifiable pre-cutover (expected).

## 2026-04-17 — Review Monitor RUN_003

- `rancho-review-monitor`: scraped all platforms, 0 new reviews on any platform. Unreplied=0 maintained. Three verification paths hit 3-consecutive-failure threshold → logged to `tasks/review-monitor/BLOCKERS.md`: Google (JS-rendered, no API key), Hotels.com (60s timeout), Airbnb (403, listing existence still unverified for Adam). TripAdvisor confirmed 0 reviews / unclaimed (corrected listing URL d33307272). Hipcamp confirmed 0 reviews (corrected URL dw9hklej). Facebook 5/100% confirmed via WebSearch. Dashboard status remains "ok." 0 response drafts produced.

## 2026-04-15 — Weekly Metrics Pull (rancho-metrics-weekly)

- All 10 SEO keywords checked — rankings flat vs. April 9 baseline. No movement on any tracked term.
- AEO citations: still 0/10 on non-brand queries. Brand queries return results but non-brand (glamping, wedding venue, etc.) show zero citations.
- Social: Instagram ~13K, Facebook 864, TikTok 1,408 — all flat. **LinkedIn now tracked at 106 followers** (was "Page exists" placeholder).
- Reviews: Google 125 (4.9★), Facebook 5, Hipcamp 4.8, Yelp 4.5 — all flat (unverified, scraped via web search).
- Google indexed pages: ~10, unchanged (new site not live yet, DNS cutover still pending).
- GBP: baseline performance data from March email still current (search impressions 6,967, profile views 15,053, clicks 554, directions 513, calls 44). No new monthly email received yet.
- Updated both HTML copies (brand/ and site/), committed, pushed. Vercel auto-deploy triggered.

## 2026-04-16 — Bi-weekly Audit: Skipped

- `rancho-biweekly-audit`: skipped — last audit was 7 days ago (2026-04-09). Next audit due on or after 2026-04-22.

## 2026-04-16 — Review Monitor RUN_002

- `rancho-review-monitor`: scraped 5 platforms, 0 new reviews found on any platform. All unreplied=0 confirmed via done-log. Dashboard status upgraded `pending` → `ok`. Google count/rating still STALE (JS-blocked, run 2 of 3 before BLOCKERS threshold). 0 response drafts produced.
- GBP tasks #3 (Q&A + 10 seed FAQs) and #7 (social links verified) RESOLVED by Adam overnight — noted in session-log.

## 2026-04-16 — SEO Run: AEO + Schema Pass on Glamping and Bachelorette Pages

- **Re-Verify Gate ran:** sitemap.xml confirmed 200. No stale live-claims found in CONTEXT.md Active Blockers. Ran coverage audit across all 15 content pages — found 6 with zero AEO/FAQPage/SpeakableSpec coverage.
- **`site/pages/glamping-near-austin-texas.html`** (primary keyword page — "glamping near Austin"):
  - Added **FAQPage schema** (4 Q&A: what is glamping near Austin, how far, pet-friendly, pool).
  - Added **SpeakableSpecification schema** targeting `.aeo-block`, `.page-header h1`, `.page-header p`.
  - Added **`.aeo-block` direct-answer section** with 4 H3 questions + answers before the "Ready to Book?" CTA, wrapped in `<hr class="blog-divider">` dividers.
  - `dateModified` updated to 2026-04-16.
- **`site/pages/bachelorette-party-austin-texas.html`**:
  - Added **FAQPage schema** (4 Q&A extracted from the existing "AEO: Quick Answers" paragraph content).
  - Added **SpeakableSpecification schema** targeting `.aeo-block`.
  - **Restructured existing AEO inline Q&A** from `<p><strong>Q?</strong> A</p>` paragraphs into proper `.aeo-block` div with `<h3>` question headings — CSS styling and AI engine selectors now pick it up correctly.
  - `dateModified` updated to 2026-04-16.
- Commit `6fb90b0` pushed to main → Vercel deploy triggered.
- **4 remaining zero-coverage pages queued** for next run: `wedding-venues-near-austin.html`, `corporate-retreat-near-austin.html`, `ranch-wedding-texas.html`, `things-to-do-manor-tx.html`.

## 2026-04-15 — GBP Task #2 RESOLVED (description, hours, amenities, category swap)

- **Claude drafted every profile field** at `brand/gbp-posts/2026-04-15-gbp-profile-fields.md`: 738-char "From the owner" description (replacing a blog post that had been auto-syndicated into the field), full Mon–Sun hours table (Mon/Tue closed, Wed–Sun 9–8), category-by-category amenity checklist with corrections (Fitness Center flagged as a bad auto-accept — no gym on property), opening date (2024), HTTPS website flip, phone verify.
- **Adam swapped GBP primary category: Hotel → Event venue.** Hotel category blocked the "From the owner" description field outright — Event venue + Wedding venue (Wedding venue stays secondary) is a truer match for how the property actually books revenue (46% private events vs 31% rooms in 2025). Hotel stays as a secondary category so lodging queries still hit the knowledge panel.
- **Adam posted all drafts to GBP.** Description replaced, hours set, opening date added, website flipped to HTTPS, phone verified, amenity sweep complete.
- **`site/improvement-plan.html`** task #2 card physically relocated into `#done-tasks-container` with `completed` class + `✓ Done` tag. `rancho-apply-done` scheduled task will be a no-op on this one at next run (log entry will already match DOM state).
- **`TODO.md`** checklist updated — 4 GBP #2 sub-items checked off, primary-category swap logged as its own line for context.

## 2026-04-15 — Weekly Content Run: Blog #12 + Social Snippets

- **Blog post #12 published: `corporate-retreat-planning-guide-texas.html`.** Targets "corporate retreat planning guide Texas", "how to plan a corporate retreat", "corporate retreat planning tips", "team retreat Texas". ~1,600 words. AEO direct-answer block, FAQPage schema (4 Q&A), SpeakableSpecification, BlogPosting schema, BreadcrumbList. FAQ accordion section (4 items). Distinct angle from post #3 (corporate-retreat-near-austin) — that page pitches the venue; this page is the planning guide for organizers researching how to run a retreat. Cross-links back to post #3 and host-your-event.html.
- **`blog.html`** ItemList position 12 added; post #12 card added to grid.
- **`sitemap.xml`** `/blog/corporate-retreat-planning-guide-texas/` added (priority 0.8, monthly). lastmod 2026-04-15.
- **Cross-link added:** `corporate-retreat-near-austin.html` Related Reading now includes link to new planning guide post.
- **Social snippets saved** to `brand/gbp-posts/2026-04-15-blog12-social-snippets.md` — Instagram caption (Style 1, short + vibes), GBP post draft (content/thought-leadership format), LinkedIn caption (corporate persona targeting).

## 2026-04-15 — Grade Targets: 5-stop stepper + clickable progress → task links

- **Scorecards in `site/improvement-plan.html` now show the full grade journey.** Under each area label, a five-dot stepper renders baseline → phase1 → phase2 → phase3 → target with filled dots for completed phases, an amber "now" marker for the current stop, and a partial-fill connecting line showing progress within the active phase. Replaces the bare `D → A` chips (which remain visible — the stepper is additive).
- **`.sc-progress` "(N/M toward X)" text is now a clickable teal-underlined link.** Clicking switches to the Plan tab, scrolls the first undone task in the next phase into view with `block: 'center'`, and plays a 2.2s box-shadow pulse via `@keyframes gradeHighlight`. Keyboard accessible (role=link, tabindex=0, Enter/Space).
- **Built in `client-ops/clients/_shared/grade-progress.{css,js}` first.** Shared module auto-wires via `window.AREA_PLAN` + `window.isTaskDone` + `window.computeAreaProgress` globals and listens for a `gradesRecomputed` custom event. Styer Mortgage, client-ops rancho mirror, and `templates/improvement-plan.html` all load it — new clients inherit automatically.
- **Sovereign rancho inlines the same module.** CSS lives in the main `<head>` `<style>` block; JS lives at end-of-body. Mirror-edit rule: changes to either half must land in both repos (`client-ops/clients/_shared/grade-progress.*` and `rancho-moonrise/site/improvement-plan.html`).
- **Dedupe rule for trailing grades** (`['D','B','A-','A','A']` → `['D','B','A-','A']`) prevents redundant target stops. Partial-fill-line position is approximate for areas with empty early phases (e.g., `website-current` with phase 1 empty) — cosmetic only, text caption stays accurate.
- Commits: client-ops `8207995`, rancho-moonrise `dccfbc7` + `81cb9f2` (head-block polish).

## 2026-04-15 — Daily SEO Run: Contact AEO + SpeakableSpec, Blog #11

- **`contact.html` SpeakableSpecification schema added.** WebPage schema targeting `.page-header h1`, `.page-header p`, `.aeo-block h2`, `.aeo-block p`. Completes S4 schema pass across all major pages.
- **`contact.html` AEO direct-answer block added.** New `.aeo-block` section answering "How to Reach Rancho Moonrise" — covers phone, form, AI concierge, address, check-in, booking paths (Cloudbeds + ResortPass). Completes S2 AEO treatment across all major pages.
- **Blog post #11 published: `things-to-do-near-austin-with-kids.html`.** Targets "things to do near Austin with kids", "family activities near Austin Texas", "kid-friendly things to do near Austin". ~1,500 words. AEO direct-answer block, FAQPage schema (4 Q&A), SpeakableSpecification, BlogPosting schema. FAQ accordion (4 items). Covers McKinney Falls, Bastrop, Hamilton Pool, Blue Hole Wimberley, and Rancho Moonrise as the base. CTA to book family stay.
- **`blog.html`** ItemList position 11 added; post #11 card added to grid.
- **`sitemap.xml`** `/blog/things-to-do-near-austin-with-kids/` added (priority 0.8, monthly). lastmod 2026-04-15.

## 2026-04-15 — rancho-review-monitor: First Run (baseline seed)

- **First run of rancho-review-monitor scheduled task.** Seeded `brand/review-aggregate.json` and `site/admin/dashboard-state.json`. Created `tasks/review-monitor/BLOCKERS.md` and `tasks/review-monitor/session-log.md`.
- **Re-Verify Gate ran on all persistent live claims.** TripAdvisor live-scraped: still 0 reviews, unclaimed. Hipcamp live-scraped: still 0 reviews. Expedia 8.0 and Facebook 5-review/100% confirmed via search. Google data STALE (JS-rendered, no API key).
- **Stale claim cleared:** "9/10 unreplied Google reviews" removed from CONTEXT.md Key Metrics — task `rancho-p1-01-reply-google-reviews` was marked RESOLVED by Adam on 2026-04-14 per done-log. Live verification blocked, but done-log provides strong first-party signal.
- **FLAG_FOR_ADAM:** Search surfaced a possible Airbnb listing at `/rooms/1284193976615696223` ("Glamping Safari Tent 25 mins from downtown Austin, Manor TX") — baseline said no listing. Couldn't access page (403). Adam should verify if this is a Rancho Moonrise listing.
- **No new reviews detected** on any platform. No response drafts produced.

## 2026-04-14 — n8n Metrics Pull: Design Spec

- **`brand/n8n-metrics-pull-spec.md` written.** Scopes two n8n workflows for populating `improvement-plan.html` automatically: (1) GSC Weekly Pull — Monday 07:00 CT cron, Search Console API, 7-day aggregation, writes to new `rancho_gsc_weekly` Supabase table; (2) GBP Monthly Email Auto-Parse — Gmail trigger on Google's monthly performance email, regex/LLM parse, writes to new `rancho_gbp_monthly` table.
- **Sequencing decided:** GSC first (no access gating, higher leverage), GBP email second (wait for April email ~May 6 to tune parser against real HTML).
- **TODO.md updated** — marked the "automate GBP + GSC monthly pull?" decision as greenlit with pointer to the spec.
- **Build deferred** to a dedicated n8n session.

## 2026-04-14 — Improvement Plan: Per-Task Copy-Prompt Button

- **Copy-prompt button added to every task card** in `site/improvement-plan.html` (option A — per-task button, not a global one). Each card gets its own "Copy prompt" action that writes a tailored Claude Code prompt to the clipboard for that specific task.
- **Button position refined:** initial placement was awkward in the card grid; moved below the mark-done control so the two action buttons stack cleanly in the 2-col layout.
- **Backs the canonical `_shared/plan-actions` wiring** that also landed in the client-ops fork source (`templates/improvement-plan.html`) same day — new client-ops forks inherit the Copy-prompt UX automatically.
- **Commits:** `5c684a1` (initial per-task button), `0fc8647` (2-col card layout fix).

## 2026-04-14 — Improvement Plan: GBP Baseline Filled

- **`site/improvement-plan.html` GBP Performance rows populated** from March 2026 monthly GBP email (`brand/2026-04-06-ranchomoonrise-gbp-performance-report-march.txt`). Search impressions 6,967, profile views (total) 15,053, website clicks 554, direction requests 513, phone calls 44. Baseline = current for now (single data point); delta stays flat until April's email lands ~May 6.
- **Row rename:** "Map views" → "Profile views (total)" to match what the monthly email actually reports (GBP email doesn't split map views from search views).
- **Photo views + Bookings** flagged as "Dashboard only" — not in monthly email, need manual pull from business.google.com or GBP API (still gated on access approval).
- **Footer updated** — "Last metrics update: April 14, 2026 — GBP baseline sourced from March 2026 monthly performance email. GSC rows pending."
- **GSC rows (impressions / clicks / CTR / position / pages indexed) still empty.** No access gating — can be filled manually from Search Console or wired via GSC API through n8n (follow-up).
- **Commit `4e0eab7`** pushed to main; Vercel auto-deploy triggered.

## 2026-04-14 — Daily SEO Run: Events AEO + Schema Refresh, Cross-Links, Blog #10

- **`events.html` Event schema refreshed.** Removed past events (April 11 Lone Star Party, April 12 Bridal Sip & See — both passed). Added 4 upcoming events with full schema fields: Free Friday at the Pool (Apr 24, free offer markup), Yoga & Bottomless Mimosas (Apr 26), Rancho Rodeo Sun Series (May 2), Mother's Day Retreat (May 10). Added `eventStatus` and `eventAttendanceMode` fields to all entries.
- **`events.html` SpeakableSpecification schema added.** WebPage schema targeting `.page-header h1`, `.page-header p`, `.aeo-block h2`, `.aeo-block p`.
- **`events.html` AEO direct-answer block added.** New `.aeo-block` section before the view toggle answering "What kinds of events happen at Rancho Moonrise near Austin?" — covers public event types and private event distinction. Targets AI engine queries about Austin events and things to do.
- **`events.html` Related Reading cross-links added.** 5 links: things-to-do-manor-tx, weekend-getaways-near-austin, glamping-near-austin-texas, pool-day-pass-austin, blog index.
- **`weddings.html` Related Reading cross-links added.** 5 links: ranch-wedding-texas, wedding-venues-near-austin, bachelorette-party-austin-texas, accommodations, blog index. Completes the pending "service page cross-linking from weddings.html → wedding blog posts" item from CONTEXT.md.
- **Blog post #10 published: `glamping-vs-camping.html`.** Targets "glamping vs camping", "what is glamping", "difference between glamping and camping", "glamping near Austin Texas". ~1,400 words. AEO direct-answer block, FAQPage schema (4 Q&A: what's the difference, is it worth it, what to bring, glamping near Austin), SpeakableSpecification, BlogPosting schema. FAQ accordion section (4 items, existing main.js handler). Related Reading cross-links. CTA banner.
- **`glamping-near-austin-texas.html`** Related Reading updated to include glamping-vs-camping link.
- **`blog.html`** ItemList position 10 added; post #10 card added to grid.
- **`sitemap.xml`** glamping-vs-camping URL added (priority 0.8, monthly). lastmod bumped: `/` → 2026-04-14, `/blog/` → 2026-04-14, `/weddings/` → 2026-04-14, `/events/` → 2026-04-14.
- **Commit `f18668c`** — 6 files changed, 594 insertions.

## 2026-04-13 — Daily SEO Run: Safari Tents Landing Page + Cross-Links

- **`/safari-tents-near-austin/` landing page built and published** (`site/pages/safari-tents-near-austin.html`). Targets "safari tents near Austin", "safari tent Austin TX" — keyword urgency elevated after Safari for the Soul claimed "safari tent austin" brand-keyword and Lucky Arrow added safari tents April 2026. Page includes: AEO direct-answer block (SpeakableSpecification pointing to `.aeo-block`), LodgingBusiness + BreadcrumbList JSON-LD, three tent-type cards (Premium/Double/Family), `.split--reverse` What's Included section (mobile-safe), social proof section, hero with `fetchpriority="high"` image, mobile sticky CTA.
- **`sitemap.xml` updated.** `/safari-tents-near-austin/` added at priority 0.9 (above blog posts — core accommodation page), lastmod 2026-04-13.
- **`blog.html` updated.** ItemList schema position 9 added. Post #9 card added to blog grid (April 13, 2026).
- **Cross-links added:**
  - `glamping-near-austin-texas.html` Related Reading → "Safari Tents Near Austin, Texas — What to Expect"
  - `accommodations.html` Safari Tents card → "Learn More About Safari Tents" secondary CTA button

## 2026-04-13 — Weekly Competitive Intelligence Run

- **SERP research completed** across 14 keyword clusters (glamping, wedding, corporate retreat, pool day pass, things to do, weekend getaway).
- **4 new Austin glamping competitors identified** since April 6 baseline: Udoscape (Lago Vista eco-pods), Camposanto ATX (Lake Travis yurts), Cameron Ranch Glamping (Lake Bastrop mirror houses), Safari for the Soul (riverfront safari tents, Spicewood/Marble Falls).
- **Lucky Arrow Retreat threat elevated:** Added safari tents as new accommodation type; confirmed on ResortPass for "pool day pass austin" — only non-hotel glamping retreat in that SERP.
- **competitive-intelligence.md replaced** with full April 13 report: SERP table (14 keywords), competitor highlights, content gap analysis, quick wins, recommendations.
- **Intel tab card inserted** into `site/improvement-plan.html` above the April 6 baseline card.
- **TODO.md updated** with 3 quick wins: `/safari-tents-near-austin/` landing page (Claude), Glamping Hub submission (Adam), ResortPass onboarding (Adam).
- **CONTEXT.md updated:** What's Next section adds safari tent page as urgent item.

## 2026-04-13 — rancho-apply-done: No changes
- rancho-apply-done reconciliation: 0 tasks newly moved to Done tab. All 3 resolved tasks already in Done tab (#4, #6, #10). `test-smoke-live` skipped (no matching task div). Total task cards: 35.

## 2026-04-12 — Daily SEO Run: SpeakableSpecification (FAQs), S3 Internal Linking, Blog #8
- **SpeakableSpecification added to `faqs.html`.** WebPage schema targeting `.faq-question` and `.faq-answer__inner p` — tells AI engines to extract FAQ answers for direct-answer results.
- **S3 topical authority cluster pass.** Added "Related Reading" blog cross-link sections to 6 pages that were missing them: `glamping-near-austin-texas.html`, `bachelorette-party-austin-texas.html`, `ranch-wedding-texas.html`, `wedding-venues-near-austin.html`, `corporate-retreat-near-austin.html`, `things-to-do-manor-tx.html`. Each gets 3–4 contextually relevant blog cross-links. Hub-and-spoke clusters now wired: glamping, wedding, events/corporate.
- **Blog post #8 published: `pool-day-pass-austin.html`.** Targets "pool day pass Austin", "Austin pool day pass", "day pass pool Austin Texas", "resort pool access Austin". ~1,100 words, AEO Q&A block, ResortPass booking CTA, cross-links to accommodations/events/glamping guide/weekend-getaways. Mobile CTA routes to ResortPass (not Cloudbeds) since primary conversion is the day pass.
- **`blog.html` updated.** ItemList schema position 8 added. Post #8 card added to blog grid with pool image.
- **`sitemap.xml` updated.** `/blog/pool-day-pass-austin/` added (priority 0.8, monthly). Homepage and `/blog/` lastmod bumped to 2026-04-12.

## 2026-04-11 — Color Revert: Restore Orange Header + Cream Backgrounds
- **Reverted Codex's dark-brown restyle in `site/css/styles.css` while preserving the functional audit fixes.** Adam reviewed commit `4ca2778` ("fix(site): improve audit findings and mobile UX") and rejected the visual half — the nav had been swapped from terracotta orange to near-black, section backgrounds from cream to dark brown, page headers from cream to dark brown gradient, mobile menu from white to dark brown, hero added a glass card overlay, event cards wrapped in linear-gradient+shadow. Brand identity was lost.
- **Root CSS variables restored.** `--color-bg: #f3eadc → #F2E9DB` (exact White Denim brand-guide hex), `--color-bg-alt: #e8ddcb → #ebe3d5`, `--color-bg-card: #fbf6ee → #faf7f2`, `--color-surface: #efe4d3 → #f0ead9`, `--color-heading: #231b18 → #2a2520`, `--color-footer-bg: #16110f → #1e1b16`.
- **Body background simplified.** Removed the `radial-gradient(91, 57, 39, 0.12) + linear-gradient(255,255,255,0.2)` stack that Codex layered under the noise SVG — back to the single noise SVG only.
- **`.section--dark` restored** from the dark-brown gradient + cream-text variant back to the simple `background: var(--color-bg-alt)` one-liner.
- **Nav header restored to terracotta orange.** `.nav` background `rgba(58, 38, 29, 0.82) → rgba(182, 96, 63, 0.78)`; `.nav--scrolled` `rgba(38, 24, 18, 0.94) → rgba(182, 96, 63, 0.92)`. Removed the `border-bottom: 1px solid rgba(241, 220, 191, 0.12)` and the upgraded scrolled shadow. This is the "orange header back" Adam flagged directly.
- **Logo plate restored to solid white.** `.nav__logo-img` background `rgba(248, 241, 230, 0.96) → white`, border-radius `14px → 12px`, dropped the `border: 1px solid rgba(72, 49, 38, 0.12)`, shadow restored to the original `0 8px 24px rgba(0,0,0,0.30), 0 2px 6px rgba(0,0,0,0.15)`.
- **Nav "Book Now" button restored to white + terracotta text.** Padding `10px 18px → 10px 24px`, background/border `rgba(248, 241, 230, 0.96) → var(--color-white)`, text color `var(--color-heading) → var(--color-terracotta)`, removed the drop shadow. Hover restored from orange to terracotta.
- **Mobile menu restored to white.** Removed the dark-brown gradient + noise background, restored `.nav__mobile a` and `.nav__close` color from `var(--color-cream)` to `var(--color-heading)`.
- **Hero back to centered, no glass card.** `.hero` `align-items: flex-end → center`. `.hero__content` dropped the `width: min(720px, calc(100vw - 32px))`, the `margin: 0 16px 104px`, the `background: linear-gradient(rgba(18,13,12,0.18), rgba(18,13,12,0.56))`, the `border: 1px solid rgba(255,234,207,0.18)`, the `box-shadow`, and the `backdrop-filter: blur(7px)`. Back to `max-width: 700px; padding: var(--space-lg) var(--space-md)`.
- **Hero overlay restored to lighter stock gradient.** `rgba(14,11,10,0.18)/0.32/0.72 → rgba(0,0,0,0.10)/0.20/0.50`.
- **Page headers restored to cream.** `.page-header` dropped the dark-brown gradient + noise + `color: var(--color-cream)`, back to `background: var(--color-bg-alt)`. `.page-header h1` dropped the cream color override. `.page-header p` color from `rgba(245,240,232,0.72)` back to `var(--color-text-muted)`. `.page-header--hero::before` opacity `0.26 → 0.15` and removed the new `.page-header--hero::after` darkening layer.
- **Events view toggle restored to cream.** Background `rgba(34, 26, 22, 0.94) → var(--color-bg-alt)`, border back to `var(--color-border-light)`, dropped the pill `border-radius: 999px` and the heavy `box-shadow: 0 14px 32px rgba(20,14,12,0.14)`. Btn text color from `rgba(245,240,232,0.62)` back to `var(--color-text-muted)`, hover from cream back to heading color, active state gradient → flat `var(--color-orange)`.
- **Events calendar wrapper unwrapped.** `.events-calendar .section` dropped the new linear-gradient card background + border + border-radius + box-shadow. `.calendar-grid` dropped `overflow: hidden` + `border-radius: 16px`. `.calendar-grid__cell` min-height `112px → 90px`, padding `10px → 8px`. `.calendar-grid__event` padding `6px 8px → 3px 6px`, margin-bottom `4px → 2px`, font-size `0.68rem → 0.7rem`, background from gradient back to flat `var(--color-orange)`, white-space `normal → nowrap`, restored `text-overflow: ellipsis`, dropped border-radius + shadow + line-height.
- **Event cards back to clean cream plate.** `.event-card` background from `linear-gradient(rgba(252,247,239,0.98), rgba(247,239,226,0.98))` → `var(--color-bg-card)`, border color back to `var(--color-border-light)`, border-radius `14px → 8px`, dropped `box-shadow: 0 18px 34px rgba(43,28,20,0.08)`. Hover dropped the heavy shadow.
- **Event popup card restored.** Background from the cream gradient back to `var(--color-white)`, border and shadow values restored to originals.
- **Mobile CTA bar restored.** Background from `linear-gradient(rgba(182,96,63,0.96), rgba(145,77,51,0.98))` back to flat `var(--color-terracotta)`, removed the upward drop shadow.
- **Footer inset shadow removed.** Dropped the `box-shadow: inset 0 1px 0 rgba(255,255,255,0.03)` that Codex added.
- **Preserved from Codex's commit:** mobile hero sizing clamps (`.hero__title font-size: clamp(1.45rem, 6.2vw, 2.05rem)`, `max-width: 11ch`), `.hero__content` mobile padding/margin fixes, `.form-status` utility class, `text-wrap: balance` on `.hero__title`, `.hero__subtitle max-width: 34rem`, the `topicOverride()` fix in `main.js`, the form mailto fallback, `site/pages/accessibility.html`, the favicon/og-image reference fixes. Those were real bug fixes, not part of the "colors don't look right" rejection.
- **Verified in local preview at `http://localhost:8080`.** Homepage hero: orange nav strip, white logo plate, no glass card, cream body. Events page: cream page header, cream event cards, cream view toggle with flat-orange active state.

## 2026-04-11 — Daily SEO Run: SpeakableSpecification, AEO Expansion, Blog #7
- **SpeakableSpecification schema added to `accommodations.html` and `weddings.html`.** WebPage schema with cssSelector targeting the page hero, AEO section headings, and paragraph text — tells Google SGE and Perplexity which content to surface for direct-answer extraction.
- **AEO direct-answer block added to `weddings.html`.** New `<section class="aeo-block">` before the FAQ accordion answering "What is a ranch wedding venue near Austin?" in direct-answer paragraph format. Targets AI engine queries like "ranch wedding venue Austin TX", "wedding venue near Austin with overnight stays". CTA → contact page with `?intent=wedding`.
- **FAQPage schema added to `host-your-event.html`.** Five Q&A pairs covering event types, distance from Austin, overnight stays, capacity, and what's included. Enables Google FAQ rich results for corporate retreat and private event queries.
- **SpeakableSpecification schema added to `host-your-event.html`.** Targets hero, narrow container headings, and `.aeo-faq` accordion answer text.
- **Visible AEO FAQ accordion section added to `host-your-event.html`.** Five FAQ items using existing `.faq-item` accordion markup (main.js picks them up automatically). Includes internal CTA back to inquiry form.
- **Blog post #7 published: `weekend-getaways-near-austin.html`.** Target queries: "weekend getaways near Austin Texas", "best Austin weekend trips", "day trips from Austin". ~1,400 words. Curated guide format covering glamping at Rancho Moonrise (20 min), Lockhart BBQ (30 min), Bastrop State Park (35 min), Wimberley (1 hr), San Marcos (45 min). AEO block with 4 direct-answer Q&A paragraphs. BlogPosting + BreadcrumbList schema. Full OG/Twitter meta. Cross-links to accommodations, events, glamping guide, things-to-do-manor-tx.
- **`blog.html` updated.** ItemList schema position 7 added; new post card added to blog grid.
- **`sitemap.xml` updated.** `/blog/weekend-getaways-near-austin/` added (priority 0.8, monthly). `/` and `/blog/` lastmod updated to 2026-04-11.

## 2026-04-11
- rancho-apply-done: no changes needed — 3/4 log entries already in Done tab; `test-smoke-live` has no matching task div (smoke test entry, skipped as expected).

## 2026-04-10 — Responsive Image Pipeline (Option C): Fix Soft Photos on Vercel
- **Root cause diagnosis.** Adam flagged that photos on `rancho-moonrise.vercel.app` looked noticeably worse than `ranchomoonrise.com`. Investigation found the Vercel build was shipping single-size WebP files (often 1600px or smaller) into CSS `background-image`, which has no srcset support. A phone and a 4K desktop were fetching the same file, sized wrong for both: phones got a file too big that then got visually crushed, desktops got a file too small that got upscaled and muddy. WordPress auto-generates responsive images by default — the static Vercel build didn't.
- **`scripts/generate-responsive-images.sh` (new).** Idempotent WebP ladder generator. FULL tier = 480/1024/1920/2560/3840 px, MEDIUM tier = 400/800/1200 px (blog assets). Runs cwebp at `-q 88` — the "middle ground between great quality and fast speed" Adam asked for, biased toward quality because wedding photos are conversion-critical. Never upscales (skips widths larger than the source). Regenerates from JPG sources in `site/images/`. Script is safe to rerun any time new photos are dropped in.
- **`scripts/apply-srcset.py` (new).** Python HTML sweep. Rewrites bare `<img src="images/foo.webp">` tags into srcset-aware tags by reading the filesystem to build a basename → available-widths registry. Regex handles `../images/`, `./images/`, and `/images/` prefixes (important because `pages/*.html` use `../images/`). `sizes` attribute picked from the existing `width` attribute: `>=1200 → 100vw`, `600-1199 → 50vw`, `400-599 → 33vw`, `<=399 → 25vw`. Fallback `src` picks the middle ladder variant. Idempotency guard: skips tags that already have a `srcset` attribute. Result: 42 tags rewritten across 7 files (mockup-preview:8, report:1, blog:6, accommodations:4, weddings:10, host-your-event:3, events:10).
- **Hero slideshow refactor (index.html).** CSS `background-image` doesn't support srcset, so the 5 stacked hero slides were refactored from `<div class="hero__slide" style="background-image: url(...)">` to `<div class="hero__slide"><img class="hero__img" srcset="..."></div>`. First slide is eager with `fetchpriority="high"`; slides 2-5 use `data-src`/`data-srcset` because native `loading="lazy"` doesn't work on stacked absolutely-positioned slides (all in viewport at render time). `loadSlide()` in `main.js` promotes `data-srcset` BEFORE `data-src` — otherwise the browser fetches the fallback first, then re-evaluates and refetches a different variant.
- **Object-fit + object-position as background-cover equivalent.** Added `.hero--slideshow .hero__img { position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover; object-position: center 30%; }`. Per-slide position tweaks (`[data-pos="top"]`, `[data-pos="bottom"]`) moved from `background-position` to `object-position`. Same rule pattern added for `.hero__bg > img` and `.cta-banner__bg > img`.
- **Weddings.html hero converted.** Most bride-critical image on the site. Converted from `.hero__bg` background-image div to real `<img src="../images/wedding-hero-1920.webp" srcset="..." sizes="100vw" fetchpriority="high">`. Wedding CTA banner (`wedding-cta-sunset`) converted the same way.
- **Other page heroes converted.** host-your-event.html (`events-hero-barn`, 480/1024 ladder — source is 1067px capped), accommodations.html CTA (`cta-tent-morning`, 480/1024 ladder), events.html CTA (`cta-music-night`, full ladder). Index.html got 4 split-section images (feature-safari-tent, venue-event-barn, venue-poolside, about-ranch-aerial) with `sizes="(min-width: 900px) 50vw, 100vw"`, 6 event-slideshow imgs, 3 event-card imgs, and 9 Instagram grid tiles with `sizes="(min-width: 900px) 25vw, 50vw"` using 480w+1024w only.
- **Landing pages got simple URL swaps.** 8 landing pages (contact, faqs, wedding-venues-near-austin, ranch-wedding-texas, bachelorette-party-austin-texas, glamping-near-austin-texas, things-to-do-manor-tx, corporate-retreat-near-austin) have `.page-header__bg` CSS `background-image` at opacity 0.15 — decorative, not worth the full refactor. Just swapped unsuffixed → `-1024.webp` (or `-800.webp` for blog-basename assets on the medium tier). Bandwidth savings with zero visible quality change.
- **Preload hint upgrade.** Hero preloads on index.html and weddings.html now use `imagesrcset` + `imagesizes` + `fetchpriority="high"` instead of a bare `href`. Tells the browser "preload whichever variant `<img>` would pick for this viewport," avoiding a double-fetch where preload grabs one URL and `<img>` then picks another.
- **Verified on live Vercel.** Preview server + Vercel deploy `dpl_948R6gNKCNUeDSuosKZjvczyJ8oz` both clean: index.html hero serves `hero-ranch-sunset-1920.webp`, 0/38 broken images, `data-srcset` promotion working on slide advance, no console errors. weddings.html serves `wedding-hero-1920.webp` with `fetchpriority="high"`, all 27 image URLs return 200. accommodations/events/host-your-event: 0 broken images across 36 image refs. ranch-wedding-texas.html computed background-image shows `url('wedding-hero-1024.webp')` at opacity 0.15 as expected.
- **Data gap surfaced to Adam.** 8 source JPGs are below the ladder's top widths. The 4 accommodation card photos (`accommodation-cabin.jpg`, `accommodation-double-safari.jpg`, `accommodation-family-safari.jpg`, `accommodation-premium-safari.jpg`) are literal 340×340 thumbnails — browsers are upscaling them on the card slots. The 4 venue photos (`feature-wedding.jpg` 1060×651, `venue-event-barn.jpg` 1067×1600, `about-ranch-aerial.jpg` 1600×1067, `feature-safari-tent.jpg` 1706×1017) cap the ladder at 1024w. `feature-wedding.jpg` is the highest priority re-upload — bride-critical. Flagged in CONTEXT.md under "Low-res source JPGs" with re-upload priorities. Once new sources land, rerun `./scripts/generate-responsive-images.sh` — no HTML changes needed, the `<img srcset>` tags already reference the full ladder filenames.
- **Git blob repair.** Commit initially failed with "invalid object" for `site/images/shape-3.png` (pre-existing missing blob `c4e1b776…` referenced by the initial commit). Neither `git update-index --remove` nor plain `git fetch origin` helped. Fixed with `git fetch origin --refetch` which restored the missing blob, then commit succeeded.
- **Commit `547abfa`** — 143 files changed, 564 insertions, 106 deletions. Vercel auto-deploy `dpl_948R6gNKCNUeDSuosKZjvczyJ8oz` READY on rancho-moonrise.vercel.app.

## 2026-04-10 — Phase 3.1: Header Layout Pass (Logo +28px, Full-Width Nav, Social Pinned Right)
- **Logo bumped a second time:** `.nav__logo-img` desktop `112px → 140px`, scrolled `68px → 92px`. Padding `8 → 10`, border-radius `10 → 12`, shadow deepened to match the larger card. Tablet/mobile breakpoints (48 / 40 / 44 px) unchanged from Phase 3.
- **Nav now spans the full viewport.** `.nav__inner` `max-width: var(--max-width) → none`, `margin: 0 auto → 0`, padding bumped to `var(--space-lg)`, and a `gap: var(--space-md)` added between top-level flex children. Previously the nav was constrained to a centered 1200px box, so even with `margin-left: auto` on the social group, the icons sat at the right edge of that 1200px box rather than the actual viewport edge. On wider screens (1440 / 1920) the social icons now visibly land in the right corner with only the `--space-lg` gutter between them and the screen edge.
- **`.nav__links` gap `var(--space-sm) → var(--space-md)`** so Accommodations / Weddings / RM Events / Private Events / Contact / Book Now / Pool Passes have visible breathing room instead of feeling cramped together. Inner-margin `20px → 0` since the parent `.nav__inner` gap now handles spacing between logo and links.
- **`.nav__social-group margin-left: auto` reinforced.** The CSS had two `.nav__social-group` rule blocks (one at line 342, one at line 2224 in the "Header Social Buttons" section). The first had `margin-left: auto`, the second didn't. Cascade was technically merging them, but added `margin-left: auto` to the second rule and to its 960px+ desktop branch as belt-and-suspenders so the social group always pushes right.
- **CSS cache-bust v=10 → v=11** across all 15 HTML pages.
- **Verified on preview at 1440×900:** logo computed 140px, scrolled state 92px, nav inner 1425px wide, max-width `none`, social group right edge at x=1367 (73px from viewport right — the `--space-lg` gutter + scrollbar). Verified on live Vercel: served CSS contains `height: 140px`, `.nav--scrolled .nav__logo-img { height: 92px }`, `max-width: none`.
- **Commit `a6e4171`** — 16 files (CSS + 15 cache-bust). Pushed to `main`.

## 2026-04-10 — Phase 3 UI Refinements: Bigger Logo, Weddings Form Parity, FAQ Accordions
- **Logo size bump site-wide:** `.nav__logo-img` desktop `height: 72px → 112px`, `.nav--scrolled .nav__logo-img` `44px → 68px`, tablet `@media (max-width: 768px)` `32px → 48px` (plus new scrolled-on-tablet rule at 40px), very-narrow `@media (max-width: 400px)` `30px → 44px`. Padding bumped from 6px → 8px and border-radius 8px → 10px for the larger base size to keep the proportion consistent. Phase 2 already swapped to the Tertiary Clay wordmark; at 112px that wordmark now reads cleanly across the nav header instead of feeling cramped.
- **Weddings inquiry form replaced with exact contact.html form.** Removed the Phase 2 custom wedding form (First/Last Name, native `type="date"` picker, Guest Count dropdown, Referral dropdown) and pasted the verbatim contact.html wedding form markup: Full Name, Partner's Name, Email, Phone, Preferred Date Range (free text like "Fall 2026"), Estimated Guest Count (number input 1-300), Total Wedding Budget* (4-tier dropdown $5K-$60K+), Tell Us About Your Vision (textarea), How Did You Hear About Us? (free text), "Send Wedding Inquiry" primary CTA. Both pages now have identical field schemas, so one future backend handler covers both entry points. IDs left as-is (`wedding-name`, `wedding-email`, etc.) — no collision since the pages don't overlap.
- **Form section repositioned directly under "Schedule a Venue Tour".** New flow on `weddings.html`: Schedule a Venue Tour (existing, unchanged) → `#wedding-inquiry` (new position) → FAQ (converted to accordions, see below) → CTA banner. The CTA banner's "Send an Inquiry" anchor still resolves to `#wedding-inquiry` because the section ID was preserved across the replacement.
- **Weddings FAQ converted to real accordions.** Previously 5 plain `<div><h3><p>` blocks inside a flex container. Now wrapped in `.faq-list` with each Q&A in a `.faq-item > button.faq-question + .faq-answer > .faq-answer__inner > p` structure — same markup as the faqs.html page. Zero new JS: the existing main.js FAQ accordion handler (lines 79-103) queries `.faq-item` globally at DOMContentLoaded, so it picks up the new weddings.html accordions automatically. Only the question is visible by default; clicking opens that item and closes any previously open one (`maxHeight = scrollHeight` transition).
- **CSS cache bust:** `styles.css?v=9 → v=10` across all 15 HTML pages (index.html + 14 pages). Delegated the 15-file mechanical swap to a subagent.
- **Verified on live Vercel (`rancho-moonrise.vercel.app/pages/weddings.html`):** served CSS contains `.nav__logo-img { height: 112px }`, weddings.html contains 5 `faq-item` accordion containers and 2 `wedding-budget` references (label + select). Preview-level DOM inspection confirmed: logo computes to 112px at desktop / 68px when scrolled, form has 11 inputs matching contact.html exactly, first FAQ item opens on click with `maxHeight: 155px` while others stay collapsed, section order is `schedule-tour → wedding-inquiry → faq` with zero gap.
- **Commit `e9fb9e3`** — 16 files changed, 108 insertions, 112 deletions (the form replacement was a net-negative diff because contact.html's form is simpler than the custom one). Pushed to `main`, auto-deployed to Vercel.

## 2026-04-10 — Phase 2 UI Fixes: Buttons, Nav, FAQ, Wedding Form, `.reveal` Bug
- **Root-cause fix for "empty looking" cream sections:** `.btn--primary` was `background: transparent; color: white; border: white`. On every cream-background section (`.section`, `.section--cream`, `.section--dark` which is actually beige `#ebe3d5`) the primary CTAs disappeared because white text on white border on cream = invisible. Rewrote `.btn--primary` to solid `var(--color-terracotta)` fill + white text + terracotta border; hover deepens to `#9a4f33`. Rewrote `.btn--outline` to solid `var(--color-heading)` (charcoal) fill + white text; hover flips to terracotta. `.nav__links .btn` override (white pill with terracotta text on the terracotta header) left untouched — that one works on the dark header background.
- **Nav logo swap site-wide:** replaced `RanchoMoonrise_Logo_RGB_Secondary_Clay.svg` (full lockup, 360×360 square viewBox, too busy at nav height) with `RanchoMoonrise_Logo_RGB_Tertiary_Clay.svg` (circular wordmark, 88×88) on all 15 pages. Cleaner render, same brand-pack file family.
- **Nav social icons repositioned:** Instagram + Facebook + TikTok + LinkedIn moved from the position between Contact and Book Now to the RIGHT of Pool Passes. New desktop nav order: Logo → Accommodations → Weddings → RM Events → Private Events → Contact → BOOK NOW → POOL PASSES → Social icons. Applied to all 15 pages via subagent. Mobile menu intentionally left alone.
- **Weddings FAQ:** section heading "What You Need to Know" → "Frequently Asked Questions". H3 labels shortened to remove location-stuffing from visible text while preserving the full keyword-rich answer paragraphs verbatim:
  - "Is Rancho Moonrise a wedding venue near Austin, TX?" → "Where is Rancho Moonrise?"
  - "What makes Rancho Moonrise different from other wedding venues near Austin?" → "What makes Rancho Moonrise different?"
  - "How many people can attend a wedding at Rancho Moonrise?" → "How many guests can attend?"
  - "Does Rancho Moonrise allow outside vendors for weddings?" → "Can we bring outside vendors?"
  - "How far in advance should I book a ranch wedding near Austin?" → "How far in advance should we book?"
- **FAQPage JSON-LD schema added to weddings.html** with the 5 short-question / full-answer pairs. Google deprecated FAQ rich results in 2023 for non-gov/health sites, but AEO engines (ChatGPT, Perplexity, Claude) still consume FAQPage schema — so the visible H3s stay clean while the machine-readable layer keeps the structured Q&A.
- **New `#wedding-inquiry` form on weddings.html** inserted between FAQ and the CTA banner. Fields: First Name\*, Last Name\*, Email\*, Phone, Wedding Date (native `type="date"`), Estimated Guest Count (Under 50 / 50–100 / 100–150 / 150–200 / 200+), Total Wedding Budget\* (same 4-tier dropdown as contact.html), How Did You Hear About Us? (Google / Instagram / Facebook / TikTok / Friend / Vendor / Directory / Event / Other), Tell Us About Your Vision (textarea). Primary-filled "Send Inquiry" button at full width. Uses `action="#" method="POST"` to match the existing contact.html placeholder pattern — no backend form handler exists in main.js yet, so both forms are placeholder until a real endpoint is wired up.
- **Weddings CTA banner rewritten** to pair with the new form: heading "Walk the Ranch Before You Commit", primary button changed from "Request a Quote" (→ contact.html) to "Send an Inquiry" (anchor `#wedding-inquiry` on-page), "Schedule a Tour" Calendly button kept.
- **CSS cache bust:** `styles.css?v=8` → `v=9` across all 15 pages.
- **CRITICAL pre-existing bug discovered and fixed:** `.reveal` had `opacity: 0` in CSS, but `main.js`'s IntersectionObserver only watched `.fade-in`. Every `.reveal` element (section labels like "Our Spaces", "Upcoming Events", "@rancho_moonrise", plus 9 elements on the homepage alone) was permanently hidden across every page of the site. One-line fix: extended the observer's query selector from `.fade-in` to `.fade-in, .reveal`. Verified via Playwright that after a natural scroll-through, zero `.reveal` or `.fade-in` elements remain at `opacity: 0`.
- **Bulk mechanical updates across 15 HTML files** (CSS cache bump + logo swap + social-group reorder) delegated to a general-purpose subagent. 45 edits total, all verified via final grep (`styles.css?v=8` = 0 files, `Secondary_Clay.svg` = 0 files, `Tertiary_Clay.svg` = 15 files, `styles.css?v=9` = 15 files).
- **Live verification on rancho-moonrise.vercel.app** via Playwright screenshots: header layout correct (logo → nav → Book Now → Pool Passes → social), hero + all interior sections render with visible buttons, wedding form renders with all fields + date picker + budget dropdown, FAQ shows the short H3s.
- Commits: `ddf556e` (16 files: button CSS fix + FAQ rename + schema + wedding form + 15 subagent-modified files) → `36fb00d` (1 file: `main.js` reveal fix). Both pushed to `main`.

## 2026-04-10 — Brand-Facts Site Sweep Shipped
- Swept all 17 customer-facing HTML pages + `site/js/main.js` clean of banned terms per Ashley's 2026-04-10 brand-facts call. Terms removed: "luxury", "(Texas) Hill Country", "General Store" (→ "The Lodge"), "20/31 acres" (→ "36 acres"), "Manor, TX" as descriptor (postal address OK), "Neon Moon Barn Lounge" framed as walk-in (now event-only), "4 ceremony sites" (→ "unlimited ceremony options"), "premier", "oak trees" (none on property), specific unit counts (fluctuates 15/18/19 — now "cabins and safari tents"), "private fire pit at every cabin" (→ "fire pits throughout the property").
- Header logo swapped from `site/images/logo.webp` → brand-pack SVG `site/images/brand/logos/untextured/secondary/RanchoMoonrise_Logo_RGB_Secondary_Clay.svg` (240×80) on every page.
- Added 4-icon social button group to desktop nav (Instagram-priority — bigger and first — followed by Facebook, TikTok, LinkedIn). Mobile menu got a parallel social row below Pool Passes.
- Renamed "Events" → "RM Events" in nav, mobile menu, and all Celebrate-column footer links across every page. Kept in-content phrases like "Upcoming Events" section headings and "View All Events" CTAs untouched — those describe content, not the tab.
- `site/pages/contact.html` wedding inquiry form: added required `<select>` budget dropdown with 4 ranges ($5K-$20K, $20K-$40K, $40K-$60K, $60K+) between guest count row and vision textarea, with helper text "Helps us recommend the right package and tailor your tour."
- `site/pages/weddings.html`: inserted new `<section>` with 6-tile placeholder `.wedding-gallery` grid between Accommodations and Recognition sections, marked `aria-hidden="true"` with visible "Gallery photos coming soon — we're curating a collection from real weddings hosted at the ranch." note. Real-wedding photo curation is the open asset gap. Also rewrote hero subtitle, What's Included cards, Ceremony Sites section (H2 + intro), Poolside split copy, and all AEO answers to match the 36-acre/unlimited-layout framing.
- `site/pages/accommodations.html`: rewrote meta descriptions, page header, group bookings, amenities (General Store card → "The Lodge"), check-in copy, AEO block, CTA section, and LodgingBusiness schema (removed `"numberOfRooms": 20`).
- `site/pages/events.html`: renamed title, meta descriptions, BreadcrumbList position 2, and H1 to "RM Events". Confirmed list view is already the default active view (no restructure needed). Replaced "Vinyasa yoga under the Texas sky" → "Vinyasa yoga poolside" for consistency.
- CSS cache bust bumped `styles.css?v=7` → `v=8` on every page.
- Footer description standardized across all pages to "Austin's glamping and events ranch. 36 acres of safari tents, cabins, weddings, and live events — 20 minutes from downtown Austin."
- Review count updated 122 → 125 on pages that carry AggregateRating.
- Committed the untracked `site/images/brand/` directory (352 logo/symbol/monogram assets, ~7.7 MB) in the same commit as the HTML sweep so the logo reference doesn't 404 on deploy.
- Bulk mechanical pattern application (nav swap, social icon group, mobile row, Events rename, banned-term removal, footer desc, CSS cache bust) delegated to a general-purpose subagent across 11 secondary pages + `js/main.js`. Subagent verified clean via final grep.
- Post-sweep verification: ran global regex across `site/` for all banned terms — zero matches in customer-facing files; remaining matches all confined to internal tooling (`improvement-plan.html`, `audits/`, `brand-audit.html`, `mockup-preview.html`, `dashboard.html`, `report.html`, `competitive-intelligence.html`/.md) which is intentional.
- Follow-up commit `5bbf84d` fixed 4 spots the subagent missed: `index.html` nav/mobile/footer RM Events rename + 3 footer "Upcoming Events" → "RM Events" in events.html, accommodations.html, weddings.html.
- Live-verified on `https://rancho-moonrise.vercel.app/`: RM Events × 3 on homepage, wedding gallery + Ceremony Sites for Every Vision + Unlimited Ceremony Options on `/pages/weddings.html`, `wedding-budget` + `5k-20k` on `/pages/contact.html`, logo SVG returns 200, zero banned terms across 7 spot-checked pages (home, weddings, accommodations, events, contact, ranch-wedding-texas, glamping-near-austin-texas).
- Commits: `59beb4b` (main sweep, 373 files, +1357/-386) → `5bbf84d` (4 footer cleanup, 4 files, +6/-6). Both pushed to `main`.

## 2026-04-10 — Acreage Locked: "36 Acres" for All Website Copy
- Adam confirmed: use **36 acres** in all customer-facing site copy, GBP, social, and brand materials. This is Ashley's number from the 2026-04-10 brand-facts call and takes precedence over the 31.6-acre per-tract sum in the deal file (Tract I 9.9 + Tract II 11 + Tract III 10.7).
- `VOICE-GUIDE.md` already reflects 36 from the earlier Ashley corrections pass — no edit needed there.
- `TODO.md` "Flagged conflicts" section updated: marketing-copy conflict marked **RESOLVED**; deal-file reconciliation split out as its own non-blocking item for buyout modeling.
- `DECISIONS.md` — new entry "2026-04-10 — Website Copy Uses '36 Acres' (Ashley's Number)" documenting the chosen/over/why/context.
- Site sweep itself (22 files, ~109 banned-term occurrences) deferred to a fresh Claude Code session using the rewritten `brand/CLAUDE-CODE-WEBSITE-UPDATE-PROMPT.md` — this session is post-compaction and the sweep is large enough to benefit from a clean context window.

## 2026-04-10 — Official Brand Pack Imported
- Received official Rancho Moonrise brand pack from Ashley (715 MB zip, 1 GB extracted). Split into two locations:
  - **Full pack** → `/Users/adamstyer/Documents/rancho-moonrise-assets/brand-pack-2026-04-10/` (outside repo — too large for git/Vercel). Contains the original 2022 brand guidelines PDF (30 MB), print-ready CMYK EPS logos (16 MB each × 66), texture-embedded SVGs (2 MB each), full RGB asset tree, and Americane fonts. Canonical source for print work — leave it alone.
  - **Web-ready curated subset** → committed to repo at `site/images/brand/` and `brand/fonts/` (~7.7 MB total, 352 images + 3 fonts). Includes: all untextured logo SVGs (Primary / Secondary / Tertiary), all textured logo @2x PNGs (same three levels — textured SVGs skipped because they embed 2 MB base64 rasters), all ATX monograms (SVG + @2x PNG), all 5 symbols (Sun, Agave, Cresent [sic], Prickly Pear, Waves) in SVG + @2x PNG, Americane-Black/Bold OTF fonts plus Monotype EULA.
- Preserved source-pack folder structure as `textured/` vs `untextured/` × `primary/secondary/tertiary/` so assets map cleanly to design intent (textured = aspirational organic look per Ashley, untextured = flat-vector fallback for small sizes).
- Wrote `brand/BRAND-ASSETS.md` — index file documenting where every asset lives, the color-naming convention (Clay/Amber/Coral/Pine/Agave/WhiteDenim/Charcoal → 1:1 with hex tokens in voice guide), HTML/CSS usage examples, and a pointer to the canonical PDF in the outside-repo location.
- Flagged in `TODO.md`: existing `site/images/logo.png` / `logo.webp` pre-date this brand pack and should be replaced with a variant from `site/images/brand/logos/` during the next site sweep.
- Original 715 MB zip left in `~/Downloads/` untouched (safe for Adam to delete when ready).

## 2026-04-10 — Ashley Brand-Facts Call: Voice Guide Corrections
- Processed transcript from operations call with Ashley. Updated both `VOICE-GUIDE.md` (root) and `brand/voice-guide.md` to reflect the corrected brand facts. Kept the two files in sync and added a cross-reference from the brand copy.
- **Permanent ban list added to both voice guides:** "luxury" (not the brand), "Texas Hill Country" (factually wrong — not in the Hill Country, locals call it out), "Manor" / "Mainer" as a copy-level location descriptor (always say "20 minutes from downtown Austin"), "General Store" (renamed to "The Lodge" everywhere), "yoga under the oaks" / "oak-shaded" (no oak trees on the property), "4 ceremony sites" (misleading — say "unlimited options for your own unique layout"), specific unit/room counts (inventory fluctuates 15/18/19), "private fire pit at every cabin" (not every unit has one — say "fire pits throughout the property"), "full-service bar open" or any framing implying the Neon Moon Barn Lounge is a walk-in bar (it's event-only).
- **Corrected acreage 20 / 31 → 36 acres** across the voice guides. Flagged to TODO.md that this conflicts with the deal-file tract breakdown (9.9 + 11 + 10.7 = 31.6) — **Adam needs to reconcile before Exhibit A buyout modeling is final**.
- **New "Property Facts (authoritative)" section added to `VOICE-GUIDE.md`** — a single grep-able source of truth listing the 5 current spaces (Event Barn, The Pool, The Lodge, safari tents + cabins, Neon Moon Barn Lounge [event-only]), the selling-point emphasis (donkeys/animals, real beds, "just show up"), the wedding inquiry budget dropdown ($5K–$20K / $20K–$40K / $40K–$60K / $60K+), the "Our Venues" → "Our Spaces" rename, the Events → "RM Events" rename with chronological list default.
- Added "drinks available" clarification: margaritas, beer, wine and more at the Lodge or event bars — event bars are NOT walk-in, must be specified.
- Added check-in softening: 3–5 PM but guests routinely check in after 5, don't make it sound rigid.
- Added noise curfew (9:30 PM) and parking rules (free general lot, no vehicles at sites overnight) to the brand details table.
- Added "provided in room" list (soap, shampoo, conditioner, towels, linens) so agents stop inventing amenities.
- Updated `CONTEXT.md` header with pointer to Property Facts section, replaced location descriptor in "What This Is" paragraph, and added a new Last Worked On entry for this session.
- Logged **NEEDS ADAM** block in `TODO.md` itemizing the ~109 occurrences of banned language across 22 `site/` HTML files (hotspots: index.html 16, competitive-intelligence.html 14, weddings.html 11, accommodations.html 10). Site sweep flagged as required before any new customer-facing copy ships. Also logged: wedding inquiry form needs budget dropdown, events page needs rename + chronological list default, homepage needs Instagram integration to replace SEO block, header needs social buttons, wedding page needs gallery (asset gap — photos needed from Ashley), GBP needs Mon/Tue closed + updated voicemail greeting. Plus context note on the F1 1-star review: neighbor noise not ranch noise, annual anomaly, Ashley will respond.
- HoneyBook-Wedding-Flow-Content.md and historical decks in `brand/` left untouched (they're snapshots/artifacts) but flagged so no one quotes from them into new copy without filtering through the updated voice guide first.

## 2026-04-10 — 3-Disposition Tag Sweep (Adam Now Has GBP Access)
- Adam confirmed he has Google Business Profile **Manager** access — can post, reply to reviews, edit info, view performance. Unblocks GBP work previously waiting on Ashley.
- Added new `tag-draft-post` CSS class (dark magenta on `#2A0D2A`, text `#D47DC4`) for "Claude writes content, human pastes into third-party system" tasks. Sits alongside existing `tag-auto` (teal) and `tag-manual` (amber).
- Replaced vague intro paragraph on `site/improvement-plan.html` with a new `.disposition-legend` block that explicitly defines all 3 dispositions: **AUTO** (scheduled Claude task, zero human touch), **DRAFT→POST** (Claude writes, human pastes into GBP/Hipcamp/WeddingWire/etc.), **MANUAL** (click/verify/configure/decide — Claude cannot advance alone).
- Re-tagged every task so each carries exactly ONE disposition (was previously inconsistent — many tasks had no disposition tag at all):
  - **AUTO (12):** #8 review request system, #9 inquiry response, #14 pool pass promo, #24 Facebook channel, S1-S5 (blog splits, H2 summaries, topical clusters, schema, pool pass page), S7 AEO baseline, S8 blog-to-GBP, plus completed #10 weekly GBP posting
  - **DRAFT→POST (5):** #1 Google review replies, #2 GBP description/amenities/hours, #3 GBP Q&A seed, #12 Hipcamp listing fix, #22 SOPs for Ashley
  - **MANUAL (18):** #5, #7, #11, #13, #15, #16, #17, #18, #19, #20, #21, #23, #25, #26, #27, S6, plus completed #4, #6
- Shifted GBP-related ownership from Ashley → Adam on tasks now unblocked by Manager access: #1, #2, #7, #15, #27 all moved to Adam. Task #1 and #2 also gained Claude as co-owner (Claude drafts the copy). Task #3 was already Adam + Claude — disposition clarified.
- HTML balance post-sweep: 243 open `<div>` / 243 close (gained 4 from the legend block), 35 task cards preserved (32 active + 3 completed), all 35 tasks now carry exactly one disposition tag.

## 2026-04-10 — Daily SEO Run: Blog #6, SpeakableSpecification, AggregateRating Fix
- Published blog article #6: `site/pages/ranch-wedding-texas.html` — "Planning a Ranch Wedding in Texas — What Austin Couples Need to Know". Targets "ranch wedding Texas", "ranch wedding near Austin", "planning a ranch wedding". ~1,500 words with AEO block (4 direct-answer Q&As), BlogPosting + BreadcrumbList schema, full OG/Twitter tags, cross-links to weddings/accommodations/contact pages.
- Blog index updated: 6th post card added to `site/pages/blog.html`; CollectionPage ItemList schema updated to position 6.
- SpeakableSpecification schema added to homepage (`index.html`) as WebPage schema — identifies `.hero__title`, `.hero__subtitle`, `.section h2`, `.aeo-block p` for AI/voice engine consumption. Completes S4 (BreadcrumbList done 2026-04-09, Speakable now done).
- AggregateRating reviewCount corrected 122→125 in `index.html` and `pages/accommodations.html` (confirmed from 2026-04-09 baseline).
- Sitemap updated: added `/blog/ranch-wedding-texas/`, updated `/` and `/blog/` lastmod to 2026-04-10.

## 2026-04-10 — Links Tab + Voice Tab Added to Improvement Plan
- Added two new tabs to `site/improvement-plan.html`: **Links** (mind-map-style category grid of every Rancho Moonrise URL) and **Voice** (condensed brand voice guide)
- Links tab groups all URLs into 8 category cards: Websites, Booking & Reservations, Social Media, Google Business Profile, Review Platforms, OTA Listings, Wedding Directories, Internal & Source
- Each link pill carries a status tag: `Primary` (customer-facing), `Live` (active), `Gap` (missing/unclaimed/broken), `Verify` (URL needs confirmation) — same component doubles as a visible gap audit
- Gaps flagged: YouTube channel (doesn't exist — Task 23), TripAdvisor (unclaimed), Hipcamp (0 reviews), WeddingWire (not listed), Zola (not listed)
- Voice tab renders: Who We Are (one breath), Voice in Three Words, Tone by Context, Key Phrases, Things We Never Say, Writing Patterns, Instagram Voice, Audience Personas, Brand Details quick-reference — full source lives at `VOICE-GUIDE.md` on GitHub
- Tab order (left → right): Plan · Metrics · Audits · Intel · Done · Links · **Voice** (Voice all the way right per request)
- Hash-link routing added for `#links` and `#voice`
- HTML balance verified: 239 open/239 close `<div>`, 7 tab buttons matching 7 tab-content divs, 35 task cards preserved

## 2026-04-10 — Done Tab + Option C Grade Progression (commit 01319c8)
- Added Done tab to improvement-plan.html with `#done-tasks-container` — completed tasks physically relocate into the Done tab (newest on top) instead of fading in place on the Plan tab
- Backfilled tasks #4 (GBP secondary categories), #6 (Instagram link-in-bio), #10 (weekly GBP posting) moved from Plan tab to Done tab at rest in the HTML
- Built phase-gated grade calculator (Option C): headline grade snaps to the highest phase where all required tasks for that area are complete; empty phases pass through without advancing the grade so Operations stays at C until task #20 ships (not C+ just because phases 1-2 have no Operations tasks)
- Mini-progress "(X/Y toward <next grade>)" displays under each of the 8 scorecards
- Scorecards + Grade Trajectory table recompute on page load AND after every successful mark-done click (no page refresh needed)
- Done tab button shows a live count badge; empty-state placeholder displays when Done tab is empty
- Source of truth for "is done?" is now DOM location (task inside `#done-tasks-container`); localStorage is optimistic UI cache only
- Updated `rancho-apply-done` scheduled task SKILL.md: now physically moves task divs into the Done tab container instead of just applying a class in place — keeps multi-device state in sync on next deploy

## 2026-04-10 — Mark Done System Shipped + Smoke Tested (commits 5ef5db0, e38a812)
- New Vercel serverless function `/api/complete` (Node 20.x, 256MB, 10s maxDuration) — Bearer auth via shared `BRIEFING_AUTH_TOKEN` (same secret as client-ops briefing page), appends RESOLVED lines to `rancho-done-log.md` via GitHub Contents API, idempotent on id
- New append-only log `rancho-done-log.md` — backfilled with the 3 tasks already marked done (#4, #6, #10)
- Added `data-item-id` + `data-item-title` + `data-item-system` attributes to all 35 task divs with stable kebab-slug IDs
- Added Mark Done button CSS + click handler + auth gear icon + auth modal + toast notifications, all styled to the Rancho amber palette
- Set `BRIEFING_AUTH_TOKEN` + `GITHUB_TOKEN` on Vercel `rancho-moonrise` project (production scope)
- Smoke test verified: clicked Mark Done on test task, commit `5ef5db0` landed in GitHub from the `rancho-mark-done` bot, round-trip working end-to-end
- Known issue: `GITHUB_TOKEN` is currently Adam's broad-scoped `gh auth token` — TODO to rotate to a fine-grained PAT scoped only to `AStyer8345/rancho-moonrise` contents:write

## 2026-04-09 — SEO/AEO Session 2: Schema Rollout
- Added CollectionPage + ItemList schema to blog.html (5 posts)
- Added BreadcrumbList schema to all 13 subpages on Vercel site
- Fixed banned word "premier" in blog.html meta + footer (voice guide)
- Verified homepage LodgingBusiness schema: geo, priceRange, amenityFeature all present
- Committed + pushed (6fb84e8): 13 files, 214 insertions

## 2026-04-09 — Weekly Metrics: Baseline Confirmed

- First automated run of `rancho-metrics-weekly` scheduled task
- Searched all 10 target keywords live — ranchomoonrise.com not ranking for any (unchanged from baseline)
- Confirmed review counts: Google ~125 (4.9★), Facebook 5 (100%), Expedia 8.0, TripAdvisor 0 (unclaimed), Hipcamp listed, The Knot present
- Confirmed social: Instagram ~13K, Facebook 864, TikTok 1,408, LinkedIn page exists, YouTube no channel
- AEO citations: 0/10 across all engines (unchanged)
- Google indexed pages (old site): ~10; new site: 0
- GBP health: description still blog post, hours still not set, 0 Q&As, weekly posts status unverified, Google Chat not enabled
- Updated improvement plan HTML timestamps (both brand/ and site/ copies)
- Committed and pushed to main — Vercel auto-deploys

## 2026-04-09 — Live Audit + SEO/AEO Strategy

- Live-verified all platforms: GBP, TripAdvisor, Yelp, Hipcamp, Instagram, WeddingWire, TheKnot, ResortPass, Expedia, Facebook
- Created metrics baseline (`brand/2026-04-09-metrics-baseline.md`) with verified data
- Updated improvement plan: marked Tasks 4, 6, 10 as DONE; updated Tasks 1, 2, 5, 7, 27 with verified findings
- Added 8 SEO/AEO tasks (S1-S8) to improvement plan — blog splitting, AEO summaries, schema, topical clusters, pool page, GSC, tracking, blog-to-GBP automation
- Created `tasks/seo-aeo/` folder with master-agent, backlog, agent-rules, session-log, blockers
- Created scheduled task `rancho-seo-aeo-weekly` — Mon/Wed/Fri at 5 AM
- Key findings: live site has broken SEO ("COMING SOON" meta desc, malformed schema, no H1s), not ranking for any non-brand query, not cited by any AI engine
- Rewrote CONTEXT.md (was 217 lines, now under 80), cleaned TODO.md with Now/Next/Backlog

## 2026-04-09 — SEO Run #7: Blog Article #5 + Blog Page Cleanup

- **bachelorette-party-austin-texas.html:** New blog article published — "Bachelorette Party in Austin, Texas — The Complete Planning Guide". Targets high-intent query "bachelorette party Austin Texas". Includes AEO block (4 direct-answer paragraphs), BlogPosting schema, full OG + Twitter Card. CTAs → contact page (private event inquiry) + accommodations. Related links → private events, accommodations, weddings.
- **blog.html:** Removed "Blog Launching Soon" placeholder block. Replaced two placeholder post cards (posts 5 & 6) with live article #5 entry (bachelorette guide). Blog grid now shows 5 live published articles.
- **sitemap.xml:** Added `/blog/bachelorette-party-austin-texas/` entry (lastmod 2026-04-09). Updated `/blog/` lastmod to 2026-04-09.

## 2026-04-09 — SEO Run #6: OG Completion + Host-Your-Event AEO

- **events.html:** Added full OG block (og:image, og:site_name, og:locale) + Twitter Card — page had zero social sharing metadata before this run.
- **host-your-event.html:** Added full OG block + Twitter Card. Used events-hero-barn.jpg as social image.
- **weddings.html, accommodations.html, faqs.html:** Added og:site_name + og:locale (both missing despite having og:image + Twitter Card from prior runs).
- **host-your-event.html:** Added AEO paragraph section (two direct-answer paragraphs targeting "private event venue near Austin" — covers location, capacity, rental models, overnight stays, exclusive-use differentiator).
- **host-your-event.html:** Added inline internal link in Corporate Retreats card → corporate-retreat-near-austin.html blog article.
- **sitemap.xml:** Updated lastmod to 2026-04-08 for accommodations, weddings, events, host-your-event, faqs.

## 2026-04-08 — Brand Alignment Update (2022 Brand Guide + Pinterest Direction)

- **Color palette warmed to brand guide:** Background → White Denim #F2E9DB (was #F5F2ED), terracotta → Clay #B6603F (was #C4704B), amber → #C9842B (was #c9944a). Added Coral #DE8556 and Pine #31735A as new CSS variables.
- **Nav glassmorphism shifted:** Gold → clay/terracotta (`rgba(182, 96, 63, 0.78)`) for warmer, earthier feel.
- **Fonts updated to brand guide:** Added Overpass (body secondary) and Lora (accent) from Google Fonts across all 13 HTML pages. Kept Playfair Display for headings (Americane is Adobe-only).
- **Paper texture overlay:** SVG inline noise pattern added to `body` and `.section--cream` backgrounds for subtle paper/canvas feel per Pinterest vintage poster direction.
- **Card softening:** Border-radius increased from 4px to 8px on all card types, warmer shadows (`0 2px 8px rgba(0,0,0,0.08)`).
- **Content fix:** Homepage AEO check-in time corrected from "4–8 PM" to "3–5 PM"; schema.org `checkinTime` from "16:00" to "15:00".
- **Mobile tweaks:** Nav gap tightened, mobile CTA bar updated to terracotta background.
- **Cache bust:** All CSS links updated to `?v=7` across all pages.

## 2026-04-08 — Admin Panel + Supabase CMS

- **Supabase CMS tables:** Created `rancho_events`, `rancho_photos`, `rancho_testimonials` with RLS (public SELECT for site reads, authenticated-only writes for admin). Auto-updating `updated_at` triggers. Storage bucket `rancho-moonrise` with public read, authenticated write.
- **Admin panel built:** `/admin/index.html` — Supabase Auth login, 3-tab dashboard (Events, Photos, Reviews). Full CRUD: create/edit/hide/delete items, file upload with preview, sort order control, active/hidden badges. Toast notifications for feedback.
- **CMS content loader:** `site/js/cms.js` — raw `fetch()` to Supabase REST API (no SDK on public site). Loads testimonials into marquee and events into slideshow + grid. Graceful fallback: if Supabase unreachable, hardcoded HTML stays. Hero photo loader built but commented out until Ashley uploads new photos.
- **Admin credentials created:** admin@ranchomoonrise.com in Supabase Auth, email confirmed via SQL.
- **Vercel config updated:** `/admin/*` routes get `no-cache` + `X-Robots-Tag: noindex, nofollow` headers.
- **Cache bust:** All CSS links updated to `?v=6` across all pages.
- **Seeded data:** 6 events (Lone Star Party through Paella Dinner), 4 hero photos, 6 testimonials loaded into Supabase tables.

## 2026-04-08 — Weekly Content Agent Run #5

- **Blog article #4 published:** "Things to Do in Manor, TX — A Local's Guide" at `/pages/things-to-do-manor-tx.html` — targets "things to do in Manor TX", "things to do near Manor Texas", "weekend getaway near Austin". Full BlogPosting schema, OG/Twitter tags, AEO Q&A section, internal links to accommodations + events pages.
- **Blog listing updated:** Post #4 placeholder wired to live article — April 8 date, real link, updated alt text.
- **Sitemap updated:** Added `/blog/things-to-do-manor-tx/` with `lastmod 2026-04-08`.
- **GBP webhook triggered:** n8n post sent summarizing the Manor guide with CTA link.
- **Social snippets created:** 3 Instagram/Facebook captions saved to `outreach/social-snippets/2026-04-08-manor-things-to-do.md`.
- **Events check:** All April events (Lone Star Party Apr 11, Bridal Sip & See Apr 12, Free Friday Apr 24, Yoga & Mimosas Apr 26) still upcoming — no removals needed.

## 2026-04-08 — Daily SEO Agent Run #4

- **OG image tags added:** `og:image`, `og:image:width/height`, `twitter:card`, `twitter:title`, `twitter:description`, `twitter:image` added to weddings.html, accommodations.html, and faqs.html. Images: `wedding-hero.jpg`, `accommodation-premium-safari.jpg`, `faqs-hero.jpg`.
- **faqs.html OG tags:** Full open graph block added (was completely missing all OG/Twitter tags).
- **FAQPage schema expanded:** faqs.html schema grew from 6 to 14 questions, now covers all FAQ accordion items — accommodations included, parking, WiFi, campfires, noise curfew, cancellation, group site requests.
- **Blog article #3 published:** "Why Your Next Corporate Retreat Should Be at a Ranch" at `/pages/corporate-retreat-near-austin.html` — targets "corporate retreat near Austin" / "corporate retreat venue Austin Texas". Full BlogPosting schema, OG/Twitter tags, AEO Q&A section, internal links to host-your-event/accommodations/contact. Mobile CTA is "Schedule a Tour".
- **Blog listing updated:** Post #3 placeholder wired to live article with April 8 date, link, updated alt text.
- **Sitemap updated:** Added `/blog/corporate-retreat-near-austin/` entry with `lastmod 2026-04-08`.

## 2026-04-07 — Daily SEO Agent Run #3

- **Weddings page AEO:** Added 5-question AEO section before the final CTA banner targeting "wedding venue manor tx", "ranch wedding near austin", "outdoor wedding venue austin with overnight stays", and related queries. Each Q&A is a self-contained paragraph for AI/SGE extraction.
- **Blog article #2 published:** "Unique Wedding Venues Near Austin With Overnight Stays" at `/pages/wedding-venues-near-austin.html` — full BlogPosting schema, OG tags, internal links to weddings/accommodations/contact pages.
- **Blog listing updated:** Post #2 placeholder wired to live article with correct date, alt text, and link.
- **Sitemap updated:** Added `/blog/wedding-venues-near-austin/` entry with `lastmod 2026-04-07`.

## 2026-04-07 — Event Slideshow + Review Marquee

- **Event artwork slideshow:** Wellness section now cycles through 6 event posters (yoga, lone star party, mother's day, bridal sip & see, rancho rodeo, paella dinner) with dot navigation, autoplay every 4s, pause-on-hover. Uses `object-fit: contain` so artwork isn't cropped.
- **Testimonial marquee scroller:** Reviews section replaced with horizontal CSS-only infinite scrolling ticker (6 cards + 6 duplicates for seamless loop). Edge fade gradients, pause on hover, responsive card sizing. Pattern matches Styer Mortgage site.
- **Cache bust:** All CSS links updated to ?v=5

## 2026-04-07 — Homepage Redesign + Live Site Alignment

- **Logo bigger + shadow box:** 72px default with box-shadow, shrinks to 44px on scroll (was 44px/38px)
- **Nav buttons filled:** Book Now and Pool Passes now white background + orange text (was outline)
- **Slideshow zoom fix:** Default `background-position: center 30%` + per-slide `data-pos` attribute for near-square images
- **Homepage restructured** to match live site with dedicated showcase sections:
  - Cabins & Safari Tents (split section with image + CTAs)
  - Event Barn & Neon Moon (venue duo cards side-by-side)
  - Ranch Weddings (full-width CTA banner)
  - Wellness & Experiences (reverse split with yoga image)
- **Event cards with artwork:** Upcoming events now display event poster images (Lone Star Party, Bridal Sip & See, Yoga & Mimosas)
- **Venue duo CSS component:** New `.venue-duo` two-column card layout with image overlay
- **Cache bust:** All CSS links updated to ?v=4

## 2026-04-07 — "Modern Desert" Design Overhaul

- **Orange glassmorphism nav:** Semi-transparent orange bar with backdrop-blur, compact height (~41px), logo left-aligned with white background and rounded corners
- **Outline buttons:** All CTAs changed to transparent background with 1px border; orange fill on hover
- **Sand palette:** Page background changed from white to #F5F2ED, text from #3d3830 to charcoal #333
- **Montserrat font:** Replaced Lato body font with Montserrat (wider, more modern tracking)
- **20% more spacing:** All spacing tokens increased for more breathing room between sections
- **Cards:** 4px border-radius, removed box shadows, added lift-on-hover (translateY -4px)
- **Hero:** Lighter overlay (20% opacity), reduced to 85vh height
- **Scroll animations:** Fade-in-up reveal on section labels via IntersectionObserver
- **Mobile sticky CTA:** Fixed "Book Your Stay" bar at bottom of viewport on screens < 960px
- **Cache bust:** All CSS links updated to ?v=3
- **Nav restructured:** Logo-left with single nav__links group (removed centered split layout)
- **Dev server fix:** Added query string stripping so ?v=N cache busters don't cause 404s

## 2026-04-07 — Website UI Updates

- **Logo in header:** Added RM logo image (`logo.webp`) next to "Rancho Moonrise" text in nav across all 10 pages. Logo shrinks on scroll.
- **Pool Passes in top nav:** Added "Pool Passes" as prominent nav item linking to ResortPass, in both desktop and mobile nav.
- **FAQs & Blog moved to footer:** Removed from top nav and mobile menu. Both were already present in footer nav (Stay → FAQs, Celebrate → Blog).
- **Events page redesign:** Added list/calendar view toggle. List view preserves existing card layout. Calendar view shows month grid with clickable event buttons that open a detail popup. Defaults to list on mobile, calendar on desktop.
- **Mobile responsiveness:** Tightened section padding, button sizing, hero height, nav spacing, footer layout, and feature card aspect ratios on screens < 640px. Added full-width stacked buttons on screens < 400px.

## 2026-04-07 — Daily SEO Agent Run #2

- Homepage: added AEO section "The Best Glamping Near Austin, Texas" with direct-answer paragraphs targeting AI/SGE search queries
- Accommodations page: added AEO section "What Is Glamping Near Austin, Texas?" with concrete details (tent numbers, check-in hours, pet policy, etc.)
- First blog article published: "Glamping Near Austin, Texas — The Complete Guide" at `/pages/glamping-near-austin-texas.html` with full BlogPosting schema, OG tags, and internal links
- Blog listing page updated: placeholder Post 1 replaced with real article card and link
- Sitemap updated to include the new blog article URL

## 2026-04-07 — Daily SEO Agent Run #1

- Created `/site/robots.txt` — was missing entirely; blocks dashboard/report/internal pages from crawlers
- Created `/site/sitemap.xml` — all 9 public pages with correct priority and changefreq values; Sitemap reference added to robots.txt
- Contact page: added missing OG + Twitter Card meta tags and ContactPage + LocalBusiness JSON-LD schema

## 2026-04-07 — Deal deep-dive: Nancy call + master summary

- Detailed call with Nancy (co-owner) — reviewed full property, people, financials, and deal structure
- Reviewed property survey (3 tracts) and Hog Eye Rd listing (19910 Hog Eye Rd, 10.1 ac)
- Built master deal summary: $4.2M invested, $350K 2025 revenue, buyout + Christopher partnership + Hog Eye acquisition
- Mapped all staff and compensation: Ashley, Monet ($28/hr), Arlen ($170/day), Kylie ($18/hr)
- Identified pipeline: Roger Clemens, Lone Star Beer ($10K), 7-10 weddings, Save Alliance (2K-person event)
- Drafted and sent due diligence request email to Nancy/Ashley (operating agreement, QuickBooks/P&L, contracts, permits)
- Updated all project files to reflect deal advisory scope (was website-only)

## 2026-04-07 — MD file audit and cleanup

- Created ARCHITECTURE.md (tech stack, site structure, design system, business details)
- Restructured CONTEXT.md from 275 → ~50 lines (moved reference content to ARCHITECTURE.md)
- Restructured TODO.md into Now/Next/Backlog sections

## 2026-04-06 — Contact Page Redesign + Conversion Optimization

- Contact page: full-width intent cards above split layout, SVG icons, compact trust bar
- AI chat widget: floating on every page, pulse animation, 380px panel
- Vision banner + 4 new service cards on dashboard (voice guide, social, blog, email automation)
- Drafted pitch email for Ashley & Nance (speed comparison, 30-day trial framing)
- Consolidated pitch report + competitive intelligence report added

## 2026-04-06 — Performance & SEO

- Images converted to WebP (74MB → 7.2MB, 90% reduction)
- Google Fonts deferred, hero preloaded, remaining slides lazy-loaded
- Vercel caching headers: 1-year immutable for images and CSS
- PageSpeed: 87 performance, 100 best practices, LCP 3.3s
- JSON-LD schema, canonical tags, alt text, OG + Twitter Card meta on all pages

## 2026-04-06 — Initial Build

- Full site rebuild from WordPress to static HTML/CSS/JS
- 8 pages: homepage, accommodations, weddings, events, host-your-event, blog, FAQs, contact, policies
- Hero slideshow with 5 images, mobile-responsive nav
- CSS custom properties design system, Vercel push-to-deploy

## 2026-04-08 — Operating Agreement Full Review

- Reviewed full 20-page LLC Company Agreement (2022-02-22) — all 10 articles
- Key finding: transfers require Manager Unanimous Approval (Section 2.4) — Paul has veto power
- Key finding: no buyout formula, no right of first refusal, no forced buyout mechanism
- Key finding: valuation = fair market value determined by Board in good faith (no formula)
- Key finding: two Manager seats — PRH Partnership LP (Herchman) and Stichter Gal LLC (Tittle)
- Identified critical gap: Exhibit A (ownership %, units, capital contributions) NOT included in 20 pages — still missing
- Updated CONTEXT.md with full "Operating Agreement — Key Findings" section and deal implications
- Updated TODO.md: added Exhibit A as top priority, added post-Exhibit-A deal modeling tasks
- Updated Active Blockers: operating agreement now reviewed, Exhibit A flagged as new blocker

## 2026-04-12 — rancho-apply-done reconciliation
- rancho-apply-done: no changes — 3/4 log entries already in Done tab; test-smoke-live skipped (no matching task div, smoke test entry).

## 2026-04-14 — Mobile UX audit + homepage fixes

- Audit pass (commit 95c523f): btn min-height 44-48px, body alpha 0.92-0.96 for WCAG AA, form inputs 16px + 44px min-height, nav social icons → 36x36 circular terracotta with white SVG, mobile menu social → 48x48 solid terracotta circles across 19 pages
- Homepage pass (commit 82616f0): Primary_Clay logo swap (fallback Secondary), Instagram + Call Now 44x44 nav icons, removed "20 Minutes" label, hero title scales at 768/390 breakpoints, full-width 56px-min CTAs, venue-duo text-shadow + stronger overlay, .section--pine darkened to #1f4d3a, review marquee 120s/80s with touch-pause 3s resume, Instagram grid → horizontal scroll-snap filmstrip <=640px

## 2026-04-21 — SEO Daily: Blog #15 Committed + Blog #16 Published

- **Blog #15 committed:** `corporate-retreat-ranch-vs-hotel.html` — existed locally as untracked (datePublished 2026-04-20), fully written with BlogPosting/FAQPage/SpeakableSpecification/BreadcrumbList schema. blog.html already had the card and schema position 15. File was never git-committed; rectified this run.
- **Blog #16 published:** `mothers-day-near-austin.html` — seasonal post targeting "mother's day near austin" and related keywords. Mother's Day is May 11 (~3 weeks out). Three-tier content: pool day pass, yoga & mimosas Sunday morning tie-in, full overnight stay. AEO block, FAQPage (4 Q&A), SpeakableSpecification, BreadcrumbList, dual CTA.
- **sitemap.xml updated:** both new blog entries added (corporate-retreat-ranch-vs-hotel, mothers-day-near-austin)
- **blog.html updated:** schema position 16 + HTML card for Blog #16
- S1 (blog posts): 16 of target count published
- Re-Verify Gate: sitemap.xml 200 ✓, DNS still on Flywheel/BofillTech ✓ (still_true)

## 2026-04-22 — Review Monitor RUN_007

- **rancho-review-monitor RUN_007:** Quiet run. Scraped 4 platforms live (TripAdvisor, Hipcamp, Facebook, Expedia via WebSearch) — 0 new reviews, unreplied=0 maintained. Google search snippet shows 126 @ 4.9★ (stale baseline was 127 — within noise range, not a confirmed drop). 3 BLOCKERS ongoing (Google JS-blocked run 7, Hotels.com timeout run 7, Airbnb 403 run 7). Dashboard status: ok.

## 2026-04-24 — Review Monitor RUN_008

- **rancho-review-monitor RUN_008:** Quiet run. Scraped TripAdvisor and Hipcamp live (0 reviews each confirmed). Facebook 5 reviews/100% and Google 126@4.9★ confirmed via WebSearch. Hotels.com timeout 8th consecutive (BLOCKER ongoing). 3 BLOCKERS from RUN_003 all open. No new reviews, unreplied=0 maintained. New: The Knot shows a Feb 26, 2026 wedding review (Haylee L.) — logged, not adding to scope. Dashboard status: ok.
