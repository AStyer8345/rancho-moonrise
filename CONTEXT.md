# Rancho Moonrise — Project Context

**Last updated:** 2026-04-25 (SEO daily: rotated past April 24 Free Friday → May 29 across schema + static card + EVENTS array)

**Latest audit:** 2026-04-23 — `site/audits/2026-04-23-business-audit.html`. Next audit: 2026-05-07.

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

- **Paul/Donna step-away in flight (2026-04-23)** — Paul and Donna emailed that they want to step away; Ben and Robert countered "hand over the books and financials, we're taking control." Donna hasn't replied and is still acting unilaterally (renewing insurance, micromanaging Ashley). Governance conflict in the open until Nancy weighs in. See `meetings/2026-04-23-ashley-onsite.md` in the Cowork workspace for the full record.
- **Beth (bookkeeper) cannot be a QuickBooks channel** — she's a Donna loyalist, reports everything back to the Hirschmans. Even Beth thinks Donna is unreasonable. Need an alternate path to books/financials.
- **Bar manager role unfilled** — effectively full-time (25 distributors, minimums, tracking). Currently on Ashley on top of events/laundry/design/inquiries/two babies. Biggest single operational risk.
- **Inquiry handling is 100% manual** — funnel is ~100 inquiries → 10 replies → 2 tours → 1 booking/day. No CRM, Gmail reminders and copy-paste templates only. Inquiry auto-responder is promoted to the next major build.
- **8 low-res source JPGs cap image quality** — see "Low-res source JPGs" section below. Responsive pipeline can't generate variants bigger than the source; 4 venue photos cap at 1024w and 4 accommodation photos cap at 480w (actually 340×340 thumbnails). Needs re-upload from Ashley's originals.
- **DNS cutover not done** — New Vercel site not live on main domain. ALL SEO/AEO impact blocked until this happens. This is the #1 unlock.
- **Exhibit A missing** — Cannot model buyout without ownership percentages. Cannot go through Beth; need an alternate path.
- **GITHUB_TOKEN on Vercel is broad-scoped** — using `gh auth token` bootstrap. TODO: swap for fine-grained PAT scoped only to `AStyer8345/rancho-moonrise` contents:write.
- ~~GBP access~~ ✅ **UNBLOCKED 2026-04-10** — Adam has Manager access. Tasks #1, #2, #3, #7, #15, #27 now owned by Adam, not Ashley.

## What's Next

- **DNS cutover (Adam, Apr 22):** events.html now hydrates from Supabase client-side while keeping the hardcoded cards as SEO fallback. Ashley's admin login at `/admin` is verified working (password `RanchoMoonrise2026!` for `admin@ranchomoonrise.com`, reset recovery email queued to `howdy@ranchomoonrise.com`). 12 upcoming events now live on GBP via Publer staggered posts (Cinco De Mayo → Aug 30 Yoga).
- **Next SEO run (Apr 27+):** April 26 Yoga & Mimosas passes Sunday — rotate that one too (next Yoga is May 31, already in static HTML). Consider adding May 29 Free Friday to Supabase `rancho_events` if not yet inserted. Blog #19 candidate: "Austin Wellness Weekend" or "glamping bachelorette vs bar crawl" follow-on, or seasonal summer content. S1 now at 18 posts.
- Adam: Re-upload the 8 low-res source JPGs at 2560px+ width (especially `feature-wedding.jpg` — bride-critical) so the responsive ladder can generate 1920/2560/3840 variants. See "Low-res source JPGs" below.
- Adam: Wire `RESEND_API_KEY` in Vercel for the marketing site project + verify `ranchomoonrise.com` in Resend (SPF/DKIM TXT records). The `/api/inquiry` handler is rewritten and waiting (sends to events@ via Resend; Gmail Poller ingests). Until env is set, function returns 502. Both `contact.html` and `weddings.html` forms still need to be wired to actually POST to `/api/inquiry` (they're currently `action="#"` per the WordPress legacy).
- Adam: Curate real-wedding photo set to replace weddings.html gallery placeholder (6 tiles, aria-hidden, "photos coming soon" note live now)
- Adam: Remaining GBP tasks — #3 (answer pending Q&A + seed 10 FAQs), #15 (enable Chat), #27 (upload photos). #1 reviews RESOLVED 2026-04-14; #2 RESOLVED 2026-04-15.
- Adam: DNS cutover from BofillTech to Vercel (#1 overall unlock — Vercel site is brand-correct, cutover is low-risk)
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

The 4 accommodation files are literally 340×340 thumbnails masquerading as content photos — re-upload priority is HIGH. Re-upload at 1600×1600+ minimum. Once re-uploaded: rerun `./scripts/generate-responsive-images.sh` and commit — no HTML changes needed.

## Last Worked On

- 2026-04-25 (`/api/inquiry` pivot): **Rewrote inquiry relay to email `events@` instead of POST CRM.** New shape: webform → Resend email (FROM=`wordpress@ranchomoonrise.com` so it matches the n8n Gmail Poller's filter unchanged) → Gmail Poller picks it up within ~5 min → CRM webhook → draft-reply workflow → Gmail draft for Ashley. Body format mirrors WordPress form-relay byte-for-byte so the existing parser works without changes. Zero new npm deps (uses built-in `fetch`). Smoke-tested locally: missing-key path returns 500, invalid-email returns 400, happy-path produces correct subject/from/to/reply-to/body. `.env.example` created. **Adam pre-cutover:** verify `ranchomoonrise.com` in Resend + add `RESEND_API_KEY` to Vercel marketing project.

- 2026-04-25 (SEO daily): **Rotated past April 24 Free Friday → May 29.** Event schema startDate/endDate on `events.html` updated from 2026-04-24 to 2026-05-29. April section static-HTML card removed; new May 29 card inserted in May section between Sunday Funday Memorial Weekend (May 24) and May 31 Yoga & Mimosas. EVENTS JS array entry replaced (now 10 entries). `sitemap.xml` lastmod for `/events/` bumped to 2026-04-25. Re-Verify Gate: DNS still on Flywheel (BofillTech, x-fw-server header confirmed); all S2 AEO claims still_true (events/weddings/host-your-event use `aeo-block`/`aeo-faq`, accommodations uses h2-answer pattern, faqs uses FAQPage + Speakable on `.faq-question`).
- 2026-04-23 (Ashley onsite meeting, 79 min): **Strategic update across ownership, operations, and marketing.** (1) **Ownership** — Paul/Donna sent a step-away email; Ben/Robert countered "hand over the books"; Donna silent but still acting in control. Beth (bookkeeper) is a Donna loyalist and cannot be used as a channel. Ashley floated a lowball buyout so remaining members could own outright. Christopher still hasn't said no — business plan with realistic projections is the next move. (2) **Operations** — bar manager role unfilled; alcohol ordering (25 distributors) is a full-time job currently on Ashley. Inquiry funnel is ~100→10→2→1 daily, 100% manual. (3) **Financials** — 2026 Q1 confirmed at $61K; target $500–650K; Ashley's "safe" number is $1M/year. Most profitable event profile = private party 100+ people, open bar, overnight stays. (4) **Alcohol shift** — mandatory through venue, open bar per-person per-hour, never BYOB. (5) **Voice guide updated** — new "Inquiry Responses — Pricing Frames" section: small daytime = barn rental ~$75/hr, packages never without a tour, no $3K quotes for small daytime events. (6) **Hot tub confirmed working** (fixed same day in commit `0bec5cf`). Sauna being added. (7) **Marketing wins** — Ashley graded website D→B+, GBP D→B. Loved competitive intel + GBP auto-posting. (8) **Ashley-requested website batch** — nav reorder, remove floating text blocks, fix wrong section photos, color/logo update (green → sage or stone), mobile audit, add "Manor, TX" to tags/schema only. (9) **Next major build: inquiry auto-responder** — shared inbox Ashley+Monet, AI handles steps 1–3, human takeover at tour/booking, pricing-frame rules enforced at draft-send. (10) **Killed/paused:** blog pipeline (Ashley no bandwidth), breakfast taco upsell (no on-site food), Knot paid placement (zero ROI after $1K/mo × 8–10 months). Full meeting record: `/Users/adamstyer/Documents/Claude/Projects/Rancho Moonrise/meetings/2026-04-23-ashley-onsite.md`.
- 2026-04-23 (voice scrub + homepage events fix): **Customer-facing voice-guide violations scrubbed + homepage events query rewritten.** (1) `index.html:199` hero alt: "Texas Hill Country" → "outside Austin, Texas". (2) `videos.html:355` video title: "Austin's Luxury Glamping Ranch" → "A Glamping Ranch Outside Austin". (3) `events.html:325` Rosés card desc: removed "curated". (4) `main.js` chat KB (lines 416/418/422): removed "50 overnight guests" / "200+ guests" fabricated unit counts from three wedding answers — now uses "on-site accommodations for your wedding party" / "large guest counts". (5) **`cms.js` homepage events query fixed** — was ordered by `sort_order,event_date` which crowded out upcoming events with recurring Free Friday entries (three identical cards showing). Now filters `event_date >= today` and orders by `event_date` only → self-correcting, shows next 3 upcoming. (6) **Rosés row in `rancho_events` Supabase** updated to remove "curated selection" (was still rendering through events.html hydrator). (7) Static HTML homepage events grid also updated with April 24 / 26 / May 2 events as no-JS fallback. Verified in preview: homepage + events clean of `Hill Country` / `luxury` / `curated` / `50 overnight` in body text (2 "Hill Country" remain in a Google Review quote — left as verbatim customer testimonial, flag for Adam if that row is a placeholder). Forms (5 files still `action="#"`), hardcoded footer year (2026 across 28 files — correct for this year), and Instagram placeholder deferred as separate projects.
- 2026-04-23 (site copy editor): **Admin Site Copy tab + AEO block relocation shipped.** New `site_content` Supabase table with 4 blocks (events AEO heading, events AEO body, homepage hero headline, homepage hero subtitle). Admin `/admin/` has new "Site Copy" tab between Galleries and Reviews — `loadSiteCopy()` + `saveCopyBlock()` backed by Supabase anon read / authenticated write. events.html AEO block moved from near-top to just above CTA banner (better UX, schema selectors unaffected). Non-blocking hydrators on events.html and index.html — hardcoded text stays as SEO fallback. Two missing Free Friday Pool Day events (May 29, June 26) inserted into `rancho_events`. Deployed READY (`738fdc3`).
- 2026-04-21 (admin Galleries build): **Galleries now editable from /admin.** (1) Fixed events admin list to sort by closest date first (`.order('event_date', { ascending: true })`). (2) Added new "Galleries" admin tab with a gallery picker (events_barn, weddings, pool, lodge, ranch_tour) and full CRUD modal — upload to Supabase Storage under `galleries/<section>/<timestamp>-<filename>`, edit/toggle/delete with legacy storage-path skip for seeded rows. (3) Expanded `rancho_photos.section` CHECK constraint from 4 → 9 values via migration. (4) Seeded 64 rows from existing hardcoded HTML (12 events_barn + 17 weddings + 6 pool + 9 lodge + 20 ranch_tour), all `storage_path='legacy/...'` and `public_url='/images/...'`. (5) Hydrated all 4 public gallery pages — events.html (12 tiles), weddings.html (17 tiles, lightbox preserved via event delegation + gallery:hydrated custom event so tiles rebind), pool-day-pass-austin.html (6 tiles), accommodations.html (9 lodge + 20 ranch_tour). All hydrators are non-blocking with hardcoded HTML as SEO fallback. Ticket URL admin fix shipped separately earlier as commit c03cae7.
- 2026-04-21 (pre-cutover event sweep): **Events + GBP backlog cleared ahead of DNS cutover.** (1) Ashley admin login verified — pgcrypto bcrypt password reset against `auth.users.encrypted_password` (no service_role key needed), login test via `/auth/v1/token` grant_type=password returned valid access_token; password recovery email drafted in Outlook to `howdy@ranchomoonrise.com`. (2) events.html cleaned — removed past April 11 Lone Star + April 12 Bridal Sip & See cards, added Rosés Around the World (May 24) + Sunday Funday: Memorial Weekend (May 24), fixed May 2 title to "Rancho Rodeo: Cinco De Mayo", added `data-events-month="YYYY-MM"` attributes to list divs, updated JS EVENTS array, added 130-line Supabase hydration block (fetches `rancho_events` WHERE is_active=true AND event_date >= today, replaces hardcoded cards while preserving them as SEO fallback). (3) Supabase data cleanup — 4 title mismatches fixed, 2 new events inserted with start_time/end_time. (4) GBP backlog — 12 unposted events pushed to Publer queue for GBP account 69d83e6e, staggered 15 min apart from 16:01Z to 18:47Z (UTC). Marked gbp_posted=true in Supabase for all 12; `still_unposted=0`. Logged run to n8n_run_logs table. Previous automation only caught 1 event because of the 7-day lookahead window — working as designed, just needed manual backlog clear.
- 2026-04-21 → 2026-04-24 (SEO daily, condensed): Blogs #15–18 published (corporate-retreat-ranch-vs-hotel, mothers-day-near-austin, birthday-party-venue-near-austin, yoga-retreat-near-austin) with full schema. ReservePage + ReserveAction added to pool-day-pass-austin.html. S1 at 18 posts. Re-Verify Gate: DNS still on Flywheel (BofillTech).
- 2026-04-25 (review-monitor): **RUN_009.** No new reviews on any platform. Unreplied=0 maintained. TripAdvisor and Hipcamp live-verified at 0 reviews. Facebook 5/100% confirmed via WebSearch. Google snippet stable at 126 @ 4.9★ — three consecutive runs (RUN_007 + RUN_008 + RUN_009). Expedia 8.0 confirmed via WebSearch (Dec 2025 review still active). 3 BLOCKERS ongoing: Google JS-blocked (run 9), Hotels.com timeout (run 9), Airbnb 403 (FLAG_FOR_ADAM, run 9). Dashboard status: ok.
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

## Key Metrics (updated April 15, 2026 — week 1 vs. baseline)

| Metric | Value | Delta vs. Apr 9 |
|--------|-------|-----------------|
| Google reviews | 125 (4.9★) (unverified) | Flat |
| GBP views | 50,500 (stale — March email) | Awaiting April email |
| GBP search impressions | 6,967 | Baseline filled Apr 14 |
| GBP profile views | 15,053 | Baseline filled Apr 14 |
| GBP clicks | 554 | Baseline filled Apr 14 |
| GBP directions | 513 | Baseline filled Apr 14 |
| GBP calls | 44 | Baseline filled Apr 14 |
| Instagram | ~13K followers | Flat |
| Facebook | 864 followers, 5 reviews | Flat |
| TikTok | 1,408 followers | Flat |
| LinkedIn | **106 followers** | NEW — was "Page exists" |
| TripAdvisor | 0 reviews, NOT claimed | Flat |
| Expedia | 8.0 rating | Flat |
| Google ranking (non-brand) | NOT ranking (0/10 keywords) | Flat |
| AI engine citations | NOT cited (0/10) | Flat |
| Google indexed pages (old site) | ~10 | Flat — new site not live |
| Next metrics update | April 22, 2026 | |
| Improvement tasks done | 3/35 (#4, #6, #10) | Flat |

---

## Property & Deal Summary

- **3 tracts** in same LLC, free and clear (~$4.2M invested)
- Tract I (9.9 ac) — improved, all operations
- Tract II (11 ac) + III (10.7 ac) — vacant, landlocked
- **Revenue:** 2025 = $350K, 2026 target $500–650K, **Q1 2026 = $61K (on pace)**. Ashley's "safe" mental model is $1M/year.
- Private events 46%, rooms 31%, POS/bar 22%
- **Target event profile:** private party 100+ people, open bar, overnight stays (most profitable configuration per Ashley 2026-04-23)
- **Alcohol:** mandatory through venue (open bar per-person per-hour) as of 2026. Never BYOB. Ordering is a full-time operation (25 distributors).
- **Buyout:** Paul & Donna sent a step-away email 2026-04-23; Ben & Robert countered demanding books/financials; Donna silent but acting unilaterally. Blocked on Exhibit A. Ashley floated a lowball option so remaining members own outright.
- **Christopher:** potential incoming partner, Adam running point. Per Ashley, business plan with realistic projections is the next move to close him.

## People

| Who | Role |
|-----|------|
| Nancy | Co-owner. Deal decision-maker. Needs the Paul/Donna-exit summary. |
| Ashley | Runs everything — GBP access, operations. Stretched thin. Target for inquiry-responder voice training. |
| Monet | Staff ($28/hr). Target co-owner of shared inquiry inbox. |
| Arlen | Maintenance ($170/day) |
| Kylie | Part-time social ($18/hr) |
| Britney Jo | Good fit for tours/inquiries per Ashley; has not committed |
| Beth | Bookkeeper (hired via Brian/Paul). **Donna loyalist — do not use as a channel for books/financials.** Even Beth thinks Donna is unreasonable. |
| Paul & Donna (Herchman) | Sent step-away email 2026-04-23. Donna still acting unilaterally. |
| Ben & Robert | Countered Paul/Donna exit with demand for books. Willing to add capital if needed. |
| Christopher | Adam's potential equity partner. Not yet in; needs business-plan pitch. |

## Key Files

- `api/complete.js` — Mark Done serverless function (Vercel, Node 20.x)
- `rancho-done-log.md` — append-only log, source of truth for done state
- `site/improvement-plan.html` — 35 task cards + Plan/Metrics/Audits/Intel/Done tabs
- `brand/2026-04-09-metrics-baseline.md` — live-verified platform data
- `tasks/seo-aeo/` — autonomous SEO/AEO agent workspace
- `site/` — Vercel site (new build, not yet live on main domain)
