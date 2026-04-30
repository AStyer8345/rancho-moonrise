# Rancho Moonrise — Project Context

**Last updated:** 2026-04-30 (site-daily — 🚀 **DNS CUTOVER LIVE on Vercel** + AggregateRating closed utility-page gap)

**Latest audit:** 2026-04-23 — `site/audits/2026-04-23-business-audit.html`. Next audit: 2026-05-07.

---

## What This Is

Advisory engagement for Rancho Moonrise — glamping, events, and retreat ranch on 36 acres, 20 minutes from downtown Austin (street address 20117 Lockwood Rd, 78653 — operational only; never use "Manor" as a location descriptor in copy). Adam runs deal structuring (buyout + new partner) and builds digital/operational systems. Ashley runs day-to-day operations.

**Brand facts (authoritative):** See `VOICE-GUIDE.md` → "Property Facts" section. Never use "luxury", "Hill Country", "Manor", "General Store", or cite a specific unit count. The Neon Moon Barn Lounge is event-only, not a walk-in bar.

**Repo:** `AStyer8345/rancho-moonrise`, branch `main`, deploys to Vercel **Live site:** [ranchomoonrise.com](http://ranchomoonrise.com) (BofillTech hosting — OLD, not editable by Claude) **New site:** rancho-moonrise.vercel.app (Vercel — all dev work happens here) **Improvement plan dashboard:** <https://rancho-moonrise.vercel.app/improvement-plan.html>

---

## Active Blockers

- **Paul/Donna step-away in flight (2026-04-23)** — Paul and Donna emailed that they want to step away; Ben and Robert countered "hand over the books and financials, we're taking control." Donna hasn't replied and is still acting unilaterally (renewing insurance, micromanaging Ashley). Governance conflict in the open until Nancy weighs in. See `meetings/2026-04-23-ashley-onsite.md` in the Cowork workspace for the full record.
- **Beth (bookkeeper) cannot be a QuickBooks channel** — she's a Donna loyalist, reports everything back to the Hirschmans. Even Beth thinks Donna is unreasonable. Need an alternate path to books/financials.
- **Bar manager role unfilled** — effectively full-time (25 distributors, minimums, tracking). Currently on Ashley on top of events/laundry/design/inquiries/two babies. Biggest single operational risk.
- **Inquiry handling is 100% manual** — funnel is \~100 inquiries → 10 replies → 2 tours → 1 booking/day. No CRM, Gmail reminders and copy-paste templates only. Inquiry auto-responder is promoted to the next major build.
- **8 low-res source JPGs cap image quality** — see "Low-res source JPGs" section below. Responsive pipeline can't generate variants bigger than the source; 4 venue photos cap at 1024w and 4 accommodation photos cap at 480w (actually 340×340 thumbnails). Needs re-upload from Ashley's originals.
- ~~DNS cutover not done~~ ✅ **RESOLVED 2026-04-30** — `curl -I ranchomoonrise.com` returns `server: Vercel`, 307 → `www.ranchomoonrise.com` (HTTP 200, `x-vercel-cache: HIT`). The #1 SEO blocker is unblocked. Next: GSC submit + canonical strategy (see "What's Next").
- **Exhibit A missing** — Cannot model buyout without ownership percentages. Cannot go through Beth; need an alternate path.
- **GITHUB_TOKEN on Vercel is broad-scoped** — using `gh auth token` bootstrap. TODO: swap for fine-grained PAT scoped only to `AStyer8345/rancho-moonrise` contents:write.
- ~~GBP access~~ ✅ **UNBLOCKED 2026-04-10** — Adam has Manager access. Tasks #1, #2, #3, #7, #15, #27 now owned by Adam, not Ashley.

## What's Next

- **🆕 NEEDS ADAM (post-cutover canonical strategy):** all 17 page canonicals + all 27 sitemap URLs point to **apex** (`https://ranchomoonrise.com/...`), but the live apex now 307s to `www.ranchomoonrise.com`. The canonical-vs-served-host mismatch is suboptimal for link-equity transfer (307 is temporary, not permanent). Two clean paths: **(A)** set apex as primary domain in Vercel — no code changes; redirects flip to www → apex, matching existing canonicals (recommended, fastest). **(B)** rewrite all canonicals + sitemap URLs to www. Either resolves it. Until then, indexing works but the signal isn't crisp.
- **🆕 NEEDS ADAM (GSC submit):** with DNS live, submit `https://www.ranchomoonrise.com/sitemap.xml` (or apex sitemap, depending on canonical-strategy decision above) to Google Search Console. This is the rancho-seo-s6 task — was blocked on cutover, now actionable.
- **NEEDS ADAM (analytics):** provide a GA4 measurement ID (`G-XXXX`) or a GTM container ID (`GTM-XXXX`). The site already emits all conversion events through `window.rmTrack` — wiring GA4/GTM is a single `<script>` tag in the page head. Without it, events still log to `console.debug` for QA but aren't reported anywhere.
- **NEEDS ADAM (Calendly virtual):** create or share a Calendly URL for the 30-min virtual wedding walkthrough. Currently `data-calendly="virtual"` placeholders fall through to `/pages/contact.html?intent=wedding`. Two link instances to update once the URL exists (`weddings.html:450`, `contact.html:216`) — actually zero HTML changes needed; just add the URL to `CALENDLY_URLS.virtual` in `site/js/main.js`.
- **Next SEO run (May 1+):** Today closed the AggregateRating coverage gap on the 2 utility pages (faqs.html stand-alone LocalBusiness, contact.html nested LocalBusiness extended in place). Coverage now **16 of 17** customer-facing pages. Next priorities post-cutover: (1) GSC sitemap submission once Adam decides apex-vs-www, (2) `/pages/corporate-retreats.html` build (per competitive intel, Yurtopian/Lucky Arrow/7744 Ranch all have one), (3) AEO baseline measurement (rancho-seo-s7) — query AI engines for the 10 target keywords, baseline the citation rate now that pages are crawlable. May 29 Free Friday is the next event to age out — rotate when it passes (next Free Friday already in Supabase `rancho_events`). Blog pipeline remains PAUSED per Ashley 2026-04-23. Audit Review/AggregateRating numeric anchor (currently 125; review-monitor RUN_014 snippet flipped back to 126 — wait for authoritative count from Adam or Places API key before bumping).
- Adam: Re-upload the 8 low-res source JPGs at 2560px+ width (especially `feature-wedding.jpg` — bride-critical) so the responsive ladder can generate 1920/2560/3840 variants. See "Low-res source JPGs" below.
- The `/api/inquiry` handler POSTs to the CRM webhook directly (`RANCHO_CRM_WEBHOOK_URL` + `RANCHO_API_KEY` already set in Vercel). The CRM-side n8n draft-reply workflow now sends the events@ notification email as a side branch, so Ashley's inbox keeps looking like today's WordPress-form pattern. No Resend setup needed.
- Adam: Curate real-wedding photo set to replace weddings.html gallery placeholder (6 tiles, aria-hidden, "photos coming soon" note live now)
- Adam: Remaining GBP tasks — #3 (answer pending Q&A + seed 10 FAQs), #15 (enable Chat), #27 (upload photos). #1 reviews RESOLVED 2026-04-14; #2 RESOLVED 2026-04-15.
- ~~Adam: DNS cutover from BofillTech to Vercel~~ ✅ **DONE 2026-04-30** — verified live (Vercel server header, 200 on www host, sitemap + landing pages serving from Vercel)
- Adam: Rotate GITHUB_TOKEN on Vercel to a fine-grained PAT (5 min)
- Claude (auto): SEO/AEO prep work on Vercel site — Mon/Wed/Fri at 5 AM
- Claude (auto): Weekly GBP posts — drafts saved to `brand/gbp-posts/` for Adam to review

## Low-res source JPGs (data blocker, not code blocker)

The responsive image pipeline is live and working. But `scripts/generate-responsive-images.sh` refuses to upscale (correctly — cwebp q88 of upscaled pixels just bakes in blur), so the ladder caps at the source dimensions. These 8 files need higher-resolution originals:

FileCurrent sourceLadder generatedWhere it lands`feature-wedding.jpg`1060×651480w, 1024w**weddings.html feature section — bride-critical**`venue-event-barn.jpg`1067×1600 (portrait)480w, 1024whost-your-event.html hero + index split section`about-ranch-aerial.jpg`1600×1067480w, 1024windex.html about split section`feature-safari-tent.jpg`1706×1017480w, 1024windex.html feature split section`accommodation-cabin.jpg`336×338480w only (upscaled)accommodations.html card`accommodation-double-safari.jpg`350×349480w onlyaccommodations.html card`accommodation-family-safari.jpg`339×339480w onlyaccommodations.html card`accommodation-premium-safari.jpg`342×340480w onlyaccommodations.html card

The 4 accommodation files are literally 340×340 thumbnails masquerading as content photos — re-upload priority is HIGH. Re-upload at 1600×1600+ minimum. Once re-uploaded: rerun `./scripts/generate-responsive-images.sh` and commit — no HTML changes needed.

## Last Worked On

- 2026-04-30 (SEO daily): **🚀 DNS CUTOVER VERIFIED LIVE + AggregateRating closed on the 2 utility pages.** (1) **DNS**: `curl -I https://ranchomoonrise.com/` returns `server: Vercel` + 307 → `https://www.ranchomoonrise.com/` (HTTP 200, `x-vercel-cache: HIT`). Yesterday's run confirmed `x-fw-server: Flywheel/5.1.0`; flipped sometime between 2026-04-29 evening and 2026-04-30 08:52 local. The #1 SEO blocker is unblocked — every workstream gating on this can proceed. Auto-resolved `rancho-p2-11-website-launch-dns` in `rancho-done-log.md`. (2) **AggregateRating closure**: `contact.html` extended its existing nested `LocalBusiness` (under `mainEntity` of the `ContactPage` block) with `aggregateRating` 4.9 / 125 / bestRating 5 — no new top-level block, just one nested addition. `faqs.html` got a stand-alone `LocalBusiness` JSON-LD with the same rating shape + full address + phone (FAQPage has no `publisher` slot to nest into). Coverage now **16 of 17** customer-facing pages (up from 14). (3) **Validation**: all 7 JSON-LD blocks across the 2 pages parse via `python3 json.loads`. (4) **Sitemap freshness**: `/contact/` 04-07 → 04-30, `/faqs/` 04-08 → 04-30. (5) **NEW NEEDS ADAM**: canonical/redirect mismatch — all canonicals + sitemap URLs use apex but apex 307s to www. Logged in "What's Next" at the top: Adam picks (A) flip Vercel primary to apex (no code change) or (B) rewrite all canonicals to www. (6) **Re-Verify Gate**: DNS state flipped (this is the resolution event itself, not a still-true claim). All S4 (BreadcrumbList + SpeakableSpec) and S2 (AEO) claims still_true.

- 2026-04-29 (SEO daily): **AggregateRating extended to remaining 4 BlogPosting landing pages.** Closes the BlogPosting half of yesterday's 6-page schema gap. Pages: `glamping-near-austin-texas.html`, `things-to-do-manor-tx.html`, `glamping-vs-camping.html`, `things-to-do-near-austin-with-kids.html`. (1) **Pattern**: same publisher.Organization placement as 2026-04-28 — 4.9 / 125 / bestRating 5 — so the rating attaches to the venue entity, not the article. (2) **Validation**: all 16 JSON-LD blocks (4 per page × 4 pages) parse via `python3 json.loads`. dateModified bumped to 2026-04-29 on each. (3) **Sitemap freshness**: 4 lastmod entries bumped to **2026-04-29** (`/blog/glamping-near-austin-texas/` 04-17→04-29, `/blog/things-to-do-manor-tx/` 04-17→04-29, `/blog/glamping-vs-camping/` 04-14→04-29, `/blog/things-to-do-near-austin-with-kids/` 04-15→04-29). (4) **Coverage now**: 14 of 17 customer-facing pages carry AggregateRating (up from 10 yesterday). **Remaining 2:** faqs.html + contact.html — utility pages, no Organization schema today; next-run decision is whether to add a stand-alone Organization JSON-LD block with aggregateRating or skip (low rich-result upside on utility pages). (5) **Re-Verify Gate**: DNS still on Flywheel/5.1.0 (BofillTech) — `curl -I` confirmed `x-fw-server: Flywheel/5.1.0`; Vercel sitemap returns 200; all S2/S3/S4 SEO claims still_true. Did NOT bump count beyond 125 — review-count claims belong to `rancho-review-monitor`.

- 2026-04-28 (SEO daily): **AggregateRating extended to 5 high-commercial-intent BlogPosting landing pages.** Closes 5 of the 10 remaining schema gaps flagged in yesterday's run. Pages: `wedding-venues-near-austin.html`, `corporate-retreat-near-austin.html`, `ranch-wedding-texas.html`, `bachelorette-party-austin-texas.html`, `pool-day-pass-austin.html`. (1) **Schema decision**: BlogPosting articles should NOT carry AggregateRating directly — Google can interpret it as an article rating rather than a venue rating. Instead, embedded `aggregateRating` inside the existing `publisher.Organization` block (4.9 / 125 / bestRating 5, mirroring weddings.html anchor). This signals "Rancho Moonrise (the publisher) has a 4.9★ rating from 125 reviews" — the rating attaches to the venue entity, which is what we want surfaced in SERPs. (2) **Validation**: all 20 JSON-LD blocks (4 per page × 5 pages) parse via `python3 json.loads`. No type errors. (3) **Sitemap freshness**: 5 lastmod entries bumped to **2026-04-28** (`/blog/wedding-venues-near-austin/` 04-17→04-28, `/blog/corporate-retreat-near-austin/` 04-17→04-28, `/blog/bachelorette-party-austin-texas/` 04-16→04-28, `/blog/ranch-wedding-texas/` 04-17→04-28, `/blog/pool-day-pass-austin/` 04-12→04-28). (4) **Coverage now**: 10 of 17 customer-facing pages carry AggregateRating (index, accommodations, safari-tents, weddings, host-your-event, wedding-venues-near-austin, corporate-retreat-near-austin, ranch-wedding-texas, bachelorette-party-austin-texas, pool-day-pass-austin) — up from 5 yesterday. **6 still missing** queued for future runs. (5) **Re-Verify Gate**: DNS still on Flywheel/5.1.0 (BofillTech) — `curl -I` confirmed `x-fw-server: Flywheel/5.1.0`; Vercel sitemap returns 200; all S2/S3/S4 SEO claims still_true. Did NOT bump count beyond 125 even though review-monitor RUN_012 confirmed WebSearch snippet stable at 175 across 2 runs — review-count claims belong to `rancho-review-monitor`; will revisit when Adam confirms authoritative GBP count or supplies Places API key.

- 2026-04-27 (SEO daily): **April rotation + AggregateRating expansion + sitemap freshness sweep.** (1) **Events rotation**: removed past April 26 Yoga & Mimosas card from `events.html`. April section replaced with full **July 2026** section (4th of July Music Festival, Lone Star Party 7-18, Yoga & Mimosas 7-26 — all already on the GBP via Publer per 04-21 backlog). Event JSON-LD: Apr 26 entry replaced with July 4 4th of July Music Festival. EVENTS JS array: removed Apr 26, added 3 July entries. (2) **AggregateRating extended to weddings.html and host-your-event.html** — both EventVenue schemas now carry `aggregateRating` 4.9 / 125 / bestRating 5, mirroring homepage anchor. Coverage now: index, accommodations, safari-tents, weddings, host-your-event (5 of 17 landing pages). 10 still missing — queued for next run. Did NOT bump count beyond 125 even though review-monitor RUN_011 flagged a WebSearch snippet of 175; that's unverified (snippet precision insufficient) and review-count claims belong to `rancho-review-monitor`. (3) **Sitemap freshness**: bumped 9 lastmod entries — `/events/` and `/weddings/` and `/host-your-event/` to **04-27** (today's edits); 6 blog/landing pages with AEO blocks added 04-16/17 had stale lastmods (04-07 to 04-10) bumped to **04-16/04-17**. (4) **Validation**: all 11 JSON-LD blocks across 3 edited pages parse via `json.loads`. (5) **Re-Verify Gate**: DNS still on Flywheel/5.1.0, Vercel sitemap returns 200.

- 2026-04-27 (competitive-weekly): **April 27 intel run.** 8 prior claims re-verified live (6 still true, 1 state change, 1 narrowed). One new SERP entrant — The Retreat on the Hill (11 multi-format units, \~1 hr from Austin, safari tents + belle tents + tipis + star-gazing domes + mirror house + container suite + cliff house). One material competitor product launch — Spoon Mountain Glamping unveiled private pools per tent (heating $60/day). One content-gap widening — The Yurtopian shipped `/corporate-retreats-in-texas-hill-country/` (1–20+ guests, 10 yurts, indoor lodge, spa yurt, 45 min from Austin). Lucky Arrow ResortPass window narrowed from 10 → 4 days (May 1 reactivation imminent). DNS still on Flywheel (`x-fw-server: Flywheel/5.1.0` verified live). Full report at `site/competitive-intelligence.md`. Intel tab card dual-written to both `site/improvement-plan.html` (sovereign) and `client-ops/clients/rancho-moonrise/improvement-plan.html` (mirror). TODO "Competitive intel quick wins" block refreshed to 2026-04-27 — ResortPass decision now 48 hours, corporate retreats landing page added as Claude-draftable item.

- 2026-04-26 (SEO daily): **FAQPage schema + visible FAQ added to** `safari-tents-near-austin.html`**.** Audit revealed it was the only landing page in the cluster missing FAQPage (others — things-to-do-manor-tx, glamping-vs-camping, pool-day-pass-austin, things-to-do-near-austin-with-kids — all have it). Added 4 Q&A: `What is a safari tent?`, `How is it different from a camping tent?`, `Are safari tents heated and A/C?`, `Where can I find a safari tent near Austin?`. Visible FAQ section uses standard `.faq-item` / `.faq-question` / `.faq-answer` markup; `main.js` already binds the accordion toggle. Speakable cssSelector expanded to include `.faq-question`. Sitemap lastmod bumped to 2026-04-26. All 4 JSON-LD blocks parse clean. Re-Verify Gate: DNS still on Flywheel/5.1.0 (BofillTech) — `curl -I` confirmed. Apr 26 Yoga & Mimosas left as-is (today's event, still upcoming this morning); rotate on next run after it passes.

- 2026-04-25 (pre-launch CRO/QA + routing fixes, condensed): Conversion blockers cleaned across Vercel site ahead of DNS cutover. Real Calendly URLs wired (`tour`→`calendly.com/rancho_moonrise/connect`, `call`→`calendly.com/monet-b30w/30min`); page-specific mobile sticky CTAs; forms hardened (phone required, page_path/referrer stamps); risky "we respond immediately" claims softened. `window.rmTrack` analytics scaffold live (NEEDS ADAM: GA4/GTM ID). Voice-scrubbed "50 overnight guests" off 7 pages. Wedding + private-events got "What Drives Pricing" sections. Accommodations got "Good to Know" objection block. **Routing fix**: `api/inquiry.js` event_type mapping rewritten so relay never sends CRM-invalid values (17/17 unit cases pass). Calendly placeholders hard-wired in static HTML across 11 spots. Free Friday rotated April 24 → May 29 in events.html schema + EVENTS JS array.

- 2026-04-23 (Ashley onsite meeting, 79 min): **Strategic update across ownership, operations, and marketing.** (1) **Ownership** — Paul/Donna sent a step-away email; Ben/Robert countered "hand over the books"; Donna silent but still acting in control. Beth (bookkeeper) is a Donna loyalist and cannot be used as a channel. Ashley floated a lowball buyout so remaining members could own outright. Christopher still hasn't said no — business plan with realistic projections is the next move. (2) **Operations** — bar manager role unfilled; alcohol ordering (25 distributors) is a full-time job currently on Ashley. Inquiry funnel is \~100→10→2→1 daily, 100% manual. (3) **Financials** — 2026 Q1 confirmed at $61K; target $500–650K; Ashley's "safe" number is $1M/year. Most profitable event profile = private party 100+ people, open bar, overnight stays. (4) **Alcohol shift** — mandatory through venue, open bar per-person per-hour, never BYOB. (5) **Voice guide updated** — new "Inquiry Responses — Pricing Frames" section: small daytime = barn rental \~$75/hr, packages never without a tour, no $3K quotes for small daytime events. (6) **Hot tub confirmed working** (fixed same day in commit `0bec5cf`). Sauna being added. (7) **Marketing wins** — Ashley graded website D→B+, GBP D→B. Loved competitive intel + GBP auto-posting. (8) **Ashley-requested website batch** — nav reorder, remove floating text blocks, fix wrong section photos, color/logo update (green → sage or stone), mobile audit, add "Manor, TX" to tags/schema only. (9) **Next major build: inquiry auto-responder** — shared inbox Ashley+Monet, AI handles steps 1–3, human takeover at tour/booking, pricing-frame rules enforced at draft-send. (10) **Killed/paused:** blog pipeline (Ashley no bandwidth), breakfast taco upsell (no on-site food), Knot paid placement (zero ROI after $1K/mo × 8–10 months). Full meeting record: `/Users/adamstyer/Documents/Claude/Projects/Rancho Moonrise/meetings/2026-04-23-ashley-onsite.md`.

- 2026-04-23 (voice scrub + homepage events fix): Customer-facing voice-guide violations scrubbed (Hill Country, luxury, curated, 50-overnight count claims) across index.html hero alt, videos.html title, events.html cards, and main.js chat KB. `cms.js` homepage events query rewritten to filter `event_date >= today` and order by event_date only — fixes Free Friday duplicate-card crowding. Rosés row in `rancho_events` updated. Static HTML grid as no-JS fallback. 2 Hill Country mentions remain in Google Review verbatim quotes (left intentionally).

- 2026-04-23 (site copy editor): **Admin Site Copy tab + AEO block relocation shipped.** New `site_content` Supabase table with 4 blocks (events AEO heading, events AEO body, homepage hero headline, homepage hero subtitle). Admin `/admin/` has new "Site Copy" tab between Galleries and Reviews — `loadSiteCopy()` + `saveCopyBlock()` backed by Supabase anon read / authenticated write. events.html AEO block moved from near-top to just above CTA banner (better UX, schema selectors unaffected). Non-blocking hydrators on events.html and index.html — hardcoded text stays as SEO fallback. Two missing Free Friday Pool Day events (May 29, June 26) inserted into `rancho_events`. Deployed READY (`738fdc3`).

- 2026-04-21 (admin Galleries build): **Galleries now editable from /admin.** (1) Fixed events admin list to sort by closest date first (`.order('event_date', { ascending: true })`). (2) Added new "Galleries" admin tab with a gallery picker (events_barn, weddings, pool, lodge, ranch_tour) and full CRUD modal — upload to Supabase Storage under `galleries/<section>/<timestamp>-<filename>`, edit/toggle/delete with legacy storage-path skip for seeded rows. (3) Expanded `rancho_photos.section` CHECK constraint from 4 → 9 values via migration. (4) Seeded 64 rows from existing hardcoded HTML (12 events_barn + 17 weddings + 6 pool + 9 lodge + 20 ranch_tour), all `storage_path='legacy/...'` and `public_url='/images/...'`. (5) Hydrated all 4 public gallery pages — events.html (12 tiles), weddings.html (17 tiles, lightbox preserved via event delegation + gallery:hydrated custom event so tiles rebind), pool-day-pass-austin.html (6 tiles), accommodations.html (9 lodge + 20 ranch_tour). All hydrators are non-blocking with hardcoded HTML as SEO fallback. Ticket URL admin fix shipped separately earlier as commit c03cae7.

- 2026-04-21 (pre-cutover event sweep): **Events + GBP backlog cleared ahead of DNS cutover.** (1) Ashley admin login verified — pgcrypto bcrypt password reset against `auth.users.encrypted_password` (no service_role key needed), login test via `/auth/v1/token` grant_type=password returned valid access_token; password recovery email drafted in Outlook to `howdy@ranchomoonrise.com`. (2) events.html cleaned — removed past April 11 Lone Star + April 12 Bridal Sip & See cards, added Rosés Around the World (May 24) + Sunday Funday: Memorial Weekend (May 24), fixed May 2 title to "Rancho Rodeo: Cinco De Mayo", added `data-events-month="YYYY-MM"` attributes to list divs, updated JS EVENTS array, added 130-line Supabase hydration block (fetches `rancho_events` WHERE is_active=true AND event_date &gt;= today, replaces hardcoded cards while preserving them as SEO fallback). (3) Supabase data cleanup — 4 title mismatches fixed, 2 new events inserted with start_time/end_time. (4) GBP backlog — 12 unposted events pushed to Publer queue for GBP account 69d83e6e, staggered 15 min apart from 16:01Z to 18:47Z (UTC). Marked gbp_posted=true in Supabase for all 12; `still_unposted=0`. Logged run to n8n_run_logs table. Previous automation only caught 1 event because of the 7-day lookahead window — working as designed, just needed manual backlog clear.

- 2026-04-21 → 2026-04-24 (SEO daily, condensed): Blogs #15–18 published (corporate-retreat-ranch-vs-hotel, mothers-day-near-austin, birthday-party-venue-near-austin, yoga-retreat-near-austin) with full schema. ReservePage + ReserveAction added to pool-day-pass-austin.html. S1 at 18 posts. Re-Verify Gate: DNS still on Flywheel (BofillTech).

- 2026-04-30 (review-monitor RUN_014): Google WebSearch snippet flipped 175 → 126 @ 4.9★ (was 3-run stable at 175 in RUN_011/012/013). Snippet history now 126→175→126 across 14 runs. FLAG_FOR_ADAM deescalated — variance argues 175 was a search-cache or 3rd-party-aggregator artifact. TripAdvisor 0/unclaimed (price floor +$1 drift). Hipcamp 0 reviews. Facebook 5/100% (Feb 2026 noise-from-neighbors review re-surfaced, known pattern). Hotels.com 8.0 stable. 3 BLOCKERS ongoing (Google count, Hotels.com timeout, Airbnb 403) — all 14 runs. NEEDS ADAM: confirm GBP count via dashboard (60s) or supply Places API key (durable fix).

- 2026-04-20 (competitive-weekly): **April 20 intel run.** 7 prior claims re-verified live. Lucky Arrow ResortPass has no active products through May 1 — time-sensitive window. Two new SERP entrants: The Yurtopian (16 yurts, Dripping Springs/Wimberley) and Spoon Mountain Glamping (Wimberley safari tents). Intel card dual-written. DNS cutover urgency elevated.

- 2026-04-15 → 2026-04-19 (condensed): S2 RESOLVED (AEO pass on 4 final landing pages); Blogs #12, #13, #14 published; GBP Task #2 RESOLVED (category Hotel → Event venue).

---

## Mark Done System — How It Works

1. Adam clicks "Mark done" on a task at `/improvement-plan.html`
2. Client POSTs to `/api/complete` with Bearer auth token (stored in localStorage, same secret as client-ops briefing)
3. Serverless function appends a RESOLVED line to `rancho-done-log.md` via GitHub Contents API, commits as `rancho-mark-done` bot
4. Client optimistically moves the task div into `#done-tasks-container` and recomputes grades
5. `rancho-apply-done` scheduled task (daily 5:33 AM local) reconciles log → HTML, physically moving any task divs that are still on the Plan tab into the Done tab container, then commits + pushes
6. Vercel redeploys on push → all devices converge on the same state

---

## Key Metrics (updated April 30, 2026 — week 3 vs. baseline)

| Metric | Value | Delta vs. Apr 9 |
|---|---|---|
| Google reviews | 125 (4.9★) (unverified; snippet variance) | Flat |
| GBP search impressions | 6,967 (April 14 backfill) | Awaiting next dashboard export |
| GBP profile views | 15,053 (April 14 backfill) | Awaiting next dashboard export |
| GBP clicks | 554 | Flat |
| GBP directions | 513 | Flat |
| GBP calls | 44 | Flat |
| GBP weekly posts | **Yes (Publer auto)** | NEW — 12-event backlog cleared 4/21 |
| Instagram | ~13K followers | Flat |
| Facebook | 864 followers, 5 reviews | Flat |
| TikTok | 1,408 followers | Flat |
| LinkedIn | 106 followers | Flat |
| TripAdvisor | 0 reviews, NOT claimed | Flat |
| Hipcamp | Listed, 0 reviews | Flat |
| Expedia | 8.0 rating | Flat |
| Google ranking (non-brand) | NOT ranking (0/10 keywords) | Flat |
| AI engine citations | NOT cited (0/10) | Flat |
| Google indexed pages (old site) | ~10 | Flat |
| **DNS cutover** | **✅ Live (4/30)** | NEW — Vercel is now production origin |
| Schema coverage (new site) | **16 / 17 pages** | +4 vs. Apr 9 (12/14) |
| Blog individual URLs | **18 posts** | +18 vs. Apr 9 (was 0) |
| Next metrics update | May 7, 2026 | — |
| Improvement tasks done | 3/35 (#4, #6, #10) | Flat |

---

## Property & Deal Summary

- **3 tracts** in same LLC, free and clear (\~$4.2M invested)
- Tract I (9.9 ac) — improved, all operations
- Tract II (11 ac) + III (10.7 ac) — vacant, landlocked
- **Revenue:** 2025 = $350K, 2026 target $500–650K, **Q1 2026 = $61K (on pace)**. Ashley's "safe" mental model is $1M/year.
- Private events 46%, rooms 31%, POS/bar 22%
- **Target event profile:** private party 100+ people, open bar, overnight stays (most profitable configuration per Ashley 2026-04-23)
- **Alcohol:** mandatory through venue (open bar per-person per-hour) as of 2026. Never BYOB. Ordering is a full-time operation (25 distributors).
- **Buyout:** Paul & Donna sent a step-away email 2026-04-23; Ben & Robert countered demanding books/financials; Donna silent but acting unilaterally. Blocked on Exhibit A. Ashley floated a lowball option so remaining members own outright.
- **Christopher:** potential incoming partner, Adam running point. Per Ashley, business plan with realistic projections is the next move to close him.

## People

WhoRoleNancyCo-owner. Deal decision-maker. Needs the Paul/Donna-exit summary.AshleyRuns everything — GBP access, operations. Stretched thin. Target for inquiry-responder voice training.MonetStaff ($28/hr). Target co-owner of shared inquiry inbox.ArlenMaintenance ($170/day)KyliePart-time social ($18/hr)Britney JoGood fit for tours/inquiries per Ashley; has not committedBethBookkeeper (hired via Brian/Paul). **Donna loyalist — do not use as a channel for books/financials.** Even Beth thinks Donna is unreasonable.Paul & Donna (Herchman)Sent step-away email 2026-04-23. Donna still acting unilaterally.Ben & RobertCountered Paul/Donna exit with demand for books. Willing to add capital if needed.ChristopherAdam's potential equity partner. Not yet in; needs business-plan pitch.

## Key Files

- `api/complete.js` — Mark Done serverless function (Vercel, Node 20.x)
- `rancho-done-log.md` — append-only log, source of truth for done state
- `site/improvement-plan.html` — 35 task cards + Plan/Metrics/Audits/Intel/Done tabs
- `brand/2026-04-09-metrics-baseline.md` — live-verified platform data
- `tasks/seo-aeo/` — autonomous SEO/AEO agent workspace
- `site/` — Vercel site (new build, not yet live on main domain)
