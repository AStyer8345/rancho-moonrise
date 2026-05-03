# Rancho Moonrise — Project Context

**Last updated:** 2026-05-03 (rancho-site-daily — `/events/` AggregateRating closure; coverage now **17 / 17** customer-facing landing pages)

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
- ~~DNS cutover not done~~ ✅ **RESOLVED 2026-04-30** — `curl -I ranchomoonrise.com` returns `server: Vercel`. 2026-04-30 repair pass flipped Vercel primary domain to apex, so `www.ranchomoonrise.com` now permanently redirects to `https://ranchomoonrise.com/`. The #1 SEO blocker is unblocked. Next: submit apex sitemap in GSC.
- **Exhibit A missing** — Cannot model buyout without ownership percentages. Cannot go through Beth; need an alternate path.
- **GITHUB_TOKEN on Vercel is broad-scoped** — using `gh auth token` bootstrap. TODO: swap for fine-grained PAT scoped only to `AStyer8345/rancho-moonrise` contents:write.
- ~~GBP access~~ ✅ **UNBLOCKED 2026-04-10** — Adam has Manager access. Tasks #1, #2, #3, #7, #15, #27 now owned by Adam, not Ashley.

## What's Next

- **🆕 NEEDS ADAM (GSC submit):** with DNS live and apex canonical settled, submit `https://ranchomoonrise.com/sitemap.xml` to Google Search Console. This is the rancho-seo-s6 task — was blocked on cutover, now actionable. **The new `/corporate-retreats/` URL is in the sitemap and ready to be picked up on the resubmit.**
- **NEEDS ADAM (analytics):** provide a GA4 measurement ID (`G-XXXX`) or a GTM container ID (`GTM-XXXX`). The site emits conversion events through `window.rmTrack`; `window.RANCHO_ANALYTICS_CONFIG` is now the single documented placeholder for future GA4/GTM insertion. Without an ID, events still log to `console.debug` for QA but are not reported anywhere.
- **NEEDS ADAM (Calendly virtual):** create or share a dedicated URL for a real virtual wedding walkthrough booking flow. Until then, virtual CTAs are worded as "Ask about a virtual walkthrough/tour" and fall through to `/contact/?intent=wedding`; add the URL to `CALENDLY_URLS.virtual` in `site/js/main.js` when ready.
- **Next SEO run (May 4+):** AggregateRating coverage closed today on the last customer-facing landing page (`/events/`) — coverage now 17 / 17. Internal-linking pass to `/corporate-retreats/` shipped 2026-05-02 (7 inbound links across 6 source pages). Remaining priorities: (1) AEO baseline measurement (rancho-seo-s7) — query AI engines for the 10 target keywords now that the topical cluster is wired; (2) consider promoting `/corporate-retreats/` into the main nav once Adam confirms (currently in footer only); (3) submit Glamping Hub listing per competitive intel; (4) ResortPass decision (window now well past). May 29 Free Friday is the next event to age out — rotate when it passes. Blog pipeline remains PAUSED per Ashley 2026-04-23. Audit Review/AggregateRating numeric anchor stays 125 until Adam confirms the authoritative count or supplies a Places API key.
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

- 2026-05-03 (SEO daily): **AggregateRating closure on `/events/` — coverage now 17 / 17 customer-facing landing pages.** Final remaining navigation/landing page without `aggregateRating` was `/events/`. Pattern used: extended the existing `WebPage` JSON-LD block (the SpeakableSpecification block) with `publisher.Organization` carrying `aggregateRating` 4.9 / 125 / bestRating 5 — same `publisher.Organization` shape adopted 2026-04-29 for the 4 BlogPosting landing pages. Keeps the rating on the venue Organization entity, off the WebPage entity. No new top-level JSON-LD block. (1) **Validation**: all 3 JSON-LD blocks on `/events/` parse via `python3 json.loads` (Event[4], WebPage with publisher.aggregateRating + speakable, BreadcrumbList). `npm run validate:site` passes. (2) **Sitemap freshness**: `/events/` lastmod 2026-04-27 → 2026-05-03. (3) **Re-Verify Gate**: pre-edit live curl confirmed apex 200 + `server: Vercel` + `x-vercel-cache: HIT`; www 308 → apex; `/sitemap.xml`, `/corporate-retreats/`, `/weddings/`, `/host-your-event/`, `/faqs/`, `/contact/` all 200. All S2/S3/S4 SEO claims still_true; no stale claims to auto-resolve.

- 2026-05-02 (SEO daily): **Internal-linking pass to `/corporate-retreats/` — 7 inbound links across 6 high-value pages.** New page launched yesterday with zero internal inbound links; today's pass wires it into the topical cluster. (1) **Edits**: (a) `index.html` About Split — inline `<a>` on "corporate retreat" in the destination/retreat/escape sentence; (b) `host-your-event.html` Corporate Retreats feature card — href flipped from `/blog/corporate-retreat-near-austin/` to `/corporate-retreats/` (better conversion-intent match — feature-card click → venue page, not a blog post); (c) `weddings.html` Related Reading — added "Corporate Retreats at Rancho Moonrise" item; (d) `pages/corporate-retreat-near-austin.html` — added 2 inbound links: top of Related Reading + the "Plan Your Event" feature card (was duplicate `/host-your-event/` link, now points to canonical venue page); also added cross-link to `/blog/corporate-retreat-ranch-vs-hotel/` for cluster strengthening; (e) `pages/corporate-retreat-planning-guide-texas.html` Related Reading — added top-of-list link + ranch-vs-hotel cross-link; (f) `pages/corporate-retreat-ranch-vs-hotel.html` "More on Corporate Retreats" — added top-of-list link. (2) **Sitemap freshness**: 7 lastmod entries bumped to 2026-05-02 (`/`, `/weddings/`, `/host-your-event/`, `/corporate-retreats/`, and the 3 corp-retreat blog posts). (3) **Validation**: `npm run validate:site` passes. Final inbound count `grep '"/corporate-retreats/"'`: index 1, host-your-event 1, weddings 1, corporate-retreat-near-austin 2, corporate-retreat-planning-guide-texas 1, corporate-retreat-ranch-vs-hotel 1 — total **7 links from 6 sources**. (4) **Re-Verify Gate**: live curl confirms `https://ranchomoonrise.com/` → 200 + `server: Vercel` + `x-vercel-cache: HIT`; `/corporate-retreats/` returns 200; sitemap returns 200; www host 308-redirects to apex. All DNS/canonical claims still_true.

- 2026-05-01 (SEO daily): **`/corporate-retreats/` landing page shipped — closes competitive gap.** New `site/pages/corporate-retreats.html` + clean route `/corporate-retreats/` (rewrite added to `vercel.json`) + sitemap entry at priority 0.9. Closes the gap surfaced by 2026-04-27 competitive-weekly run: Yurtopian, Lucky Arrow, 7744 Ranch, Element Ranch, and Sage Hill all already have a dedicated corporate retreats page; Rancho Moonrise had only blog posts. (1) **Schema**: 4 JSON-LD blocks — EventVenue (with maximumAttendeeCapacity 200, full amenities list, AggregateRating 4.9 / 125), BreadcrumbList (Home → Private Events → Corporate Retreats), FAQPage (6 Q&A: location, group size, pricing, lodging, bar/catering, package contents), SpeakableSpecification. All parse via `python3 json.loads`. (2) **Voice/policy**: pricing frame is "tour required" — no hard $ figures; bar service called out as venue-mandatory + per-person per-hour, no outside alcohol (Ashley 2026-04-23 rule); group sizes 20–200; "Manor, TX" only in schema/alt text per Ashley's directive. No banned terms (no "luxury", no "Hill Country", no specific overnight count claims). (3) **CTAs**: dual hero `/contact/?intent=corporate` + `/host-your-event/`; mobile sticky → corporate inquiry. Footer "Celebrate" group adds Corporate Retreats link. (4) **Validation**: `npm run validate:site` passes (JSON-LD parse, local asset references, sitemap rewrite coverage, apex canonical, stale-claim patterns, clean-route hygiene). Local preview at `/pages/corporate-retreats.html` verified — H1 + hero render, 6 FAQ items, 9 sections, 0 broken images, 0 console errors. (5) **Re-Verify Gate**: DNS still on Vercel (`server: Vercel`); sitemap apex 200, www 308 (redirects per yesterday's apex-primary fix). All S2/S3/S4 SEO claims still_true.

- 2026-04-30 (adversarial site repair): **Canonical/crawlability repair batch shipped.** (1) **Vercel domain settings**: apex `ranchomoonrise.com` is now primary; `www.ranchomoonrise.com` redirects to apex with permanent 308. Project firewall config checked via Vercel API and returned no active/draft challenge rules. (2) **SEO/AEO routing**: apex stays canonical everywhere; added missing clean-route rewrites for the five sitemap blog URLs and converted internal `/pages/*.html` links to clean public routes. (3) **Assets + claims**: fixed broken `event-lone-star-*` and safari-tent bright image refs; scrubbed customer-facing `50 overnight`, "Hill Country", hard `$3K`, breakfast taco, and risky virtual-tour/Calendly claims. Review count remains 125. (4) **Conversion/analytics**: preserved event-first CTA hierarchy; added `window.RANCHO_ANALYTICS_CONFIG` placeholder without fake IDs and kept `window.rmTrack` as the abstraction. (5) **Validation**: added `npm run validate:site` for JSON-LD parsing, local assets, sitemap rewrite coverage, canonical host consistency, stale-claim patterns, and clean-route links.

- 2026-04-30 (SEO daily): **🚀 DNS CUTOVER VERIFIED LIVE + AggregateRating closed on the 2 utility pages.** (1) **DNS**: `curl -I https://ranchomoonrise.com/` returns `server: Vercel` + 307 → `https://www.ranchomoonrise.com/` (HTTP 200, `x-vercel-cache: HIT`). Yesterday's run confirmed `x-fw-server: Flywheel/5.1.0`; flipped sometime between 2026-04-29 evening and 2026-04-30 08:52 local. The #1 SEO blocker is unblocked — every workstream gating on this can proceed. Auto-resolved `rancho-p2-11-website-launch-dns` in `rancho-done-log.md`. (2) **AggregateRating closure**: `contact.html` extended its existing nested `LocalBusiness` (under `mainEntity` of the `ContactPage` block) with `aggregateRating` 4.9 / 125 / bestRating 5 — no new top-level block, just one nested addition. `faqs.html` got a stand-alone `LocalBusiness` JSON-LD with the same rating shape + full address + phone (FAQPage has no `publisher` slot to nest into). Coverage now **16 of 17** customer-facing pages (up from 14). (3) **Validation**: all 7 JSON-LD blocks across the 2 pages parse via `python3 json.loads`. (4) **Sitemap freshness**: `/contact/` 04-07 → 04-30, `/faqs/` 04-08 → 04-30. (5) **NEW NEEDS ADAM**: canonical/redirect mismatch — all canonicals + sitemap URLs use apex but apex 307s to www. Logged in "What's Next" at the top: Adam picks (A) flip Vercel primary to apex (no code change) or (B) rewrite all canonicals to www. (6) **Re-Verify Gate**: DNS state flipped (this is the resolution event itself, not a still-true claim). All S4 (BreadcrumbList + SpeakableSpec) and S2 (AEO) claims still_true.

- 2026-04-27 (competitive-weekly): **April 27 intel run.** 8 prior claims re-verified live (6 still true, 1 state change, 1 narrowed). One new SERP entrant — The Retreat on the Hill (11 multi-format units, \~1 hr from Austin, safari tents + belle tents + tipis + star-gazing domes + mirror house + container suite + cliff house). One material competitor product launch — Spoon Mountain Glamping unveiled private pools per tent (heating $60/day). One content-gap widening — The Yurtopian shipped `/corporate-retreats-in-texas-hill-country/` (1–20+ guests, 10 yurts, indoor lodge, spa yurt, 45 min from Austin). Lucky Arrow ResortPass window narrowed from 10 → 4 days (May 1 reactivation imminent). DNS still on Flywheel (`x-fw-server: Flywheel/5.1.0` verified live). Full report at `site/competitive-intelligence.md`. Intel tab card dual-written to both `site/improvement-plan.html` (sovereign) and `client-ops/clients/rancho-moonrise/improvement-plan.html` (mirror). TODO "Competitive intel quick wins" block refreshed to 2026-04-27 — ResortPass decision now 48 hours, corporate retreats landing page added as Claude-draftable item.

- 2026-05-03 (review-monitor RUN_017): Google WebSearch snippet held at 126 @ 4.9★ today (matches RUN_016) — first repeat since the ping-pong started at RUN_011. History 126→175→126→175→126→126 over 17 runs. Repeat doesn't establish stability given three documented flips on alternating runs (RUN_013→014→015→016); snippet still definitively unreliable. TripAdvisor + Hipcamp + Facebook + Expedia all still_true; TripAdvisor price drifted $75-$178 → $74-$175 (-$1 floor, -$3 ceiling — largest single-run ceiling drop yet); 0 reviews/unclaimed unchanged. Unreplied=0 holds (no review-related done-log entries since RUN_011; today's git activity is notebooklm sync commits only). 3 BLOCKERS at 17 runs (Google count, Hotels.com timeout, Airbnb 403). NEEDS ADAM unchanged: GBP dashboard count (60s) or Places API key.

- 2026-04-21 → 2026-04-30 (SEO daily, condensed): AggregateRating expanded from 5 → 16 of 17 customer-facing pages across 5 runs (4/27 weddings + host-your-event; 4/28 5 BlogPostings via publisher.Organization; 4/29 4 BlogPostings; 4/30 utility pages contact + faqs). FAQPage added to safari-tents-near-austin (4/26). Events rotated April → July (4/27). Blogs #15–18 published. ReservePage + ReserveAction on pool-day-pass-austin.

- 2026-04-23 (Ashley onsite, 79 min): Strategic update — ownership (Paul/Donna step-away vs. Ben/Robert counter; Beth is Donna loyalist), ops (bar manager unfilled; inquiry funnel ~100→10→2→1 daily, 100% manual), financials (Q1 $61K, target $500-650K), alcohol mandatory through venue per-person per-hour, voice guide pricing-frame section added, hot tub fixed, blog pipeline PAUSED, breakfast taco killed, Knot paid placement killed.

- 2026-04-21 (admin + GBP sweep): Galleries CRUD admin shipped + 4 public pages hydrated. events.html Supabase hydrator added. 12-event GBP backlog cleared via Publer (workflow's 7-day lookahead window left back-stock).

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
| Schema coverage (new site) | **17 / 17 pages** (+`/corporate-retreats/` = 18/18 incl. new landing) | +5 vs. Apr 9 (12/14) |
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
