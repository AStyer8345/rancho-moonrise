# Rancho Moonrise — Project Context

**Last updated:** 2026-05-15 (rancho-site-daily — ItemList JSON-LD enrichment on `/blog/things-to-do-near-austin-with-kids/`; 5 family destinations now in schema (Rancho Moonrise at position 1 with apex URL; McKinney Falls, Bastrop, Hamilton Pool, Blue Hole name+description only). **ItemList rollout complete (3/3):** weekend-getaways 5/12, manor-tx 5/13, kids 5/15. Every roundup-format blog post in the cluster now carries item-level schema.)

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

- **🆕 NEEDS ADAM (GSC submit — PROMOTED TO PRIORITY 1, 4th consecutive week):** with DNS live 13 days and `/corporate-retreats/` live 12 days, the bottleneck has moved from "DNS blocking everything" to "Google has not yet crawled the apex." Submit `https://ranchomoonrise.com/sitemap.xml` to Google Search Console and request indexing on `/corporate-retreats/`, `/safari-tents-near-austin/`, and the apex. This is the rancho-seo-s6 task — was blocked on cutover, now the highest-leverage SEO action available. Every day of indexing delay is a day where The Yurtopian's corporate retreats page out-ages Rancho Moonrise's.
- **🆕 NEEDS ADAM (ResortPass — extended window, not closed):** April 27 framing of "decide within 48 hours" was wrong — Lucky Arrow has not reactivated day passes 3 days past their projected May 1 resumption. Window is still open. Either submit Rancho Moonrise to ResortPass this week (still no Austin glamping property on the platform) or formally kill the idea on TODO.
- **NEEDS ADAM (analytics):** provide a GA4 measurement ID (`G-XXXX`) or a GTM container ID (`GTM-XXXX`). The site emits conversion events through `window.rmTrack`; `window.RANCHO_ANALYTICS_CONFIG` is now the single documented placeholder for future GA4/GTM insertion. Without an ID, events still log to `console.debug` for QA but are not reported anywhere.
- **NEEDS ADAM (Calendly virtual):** create or share a dedicated URL for a real virtual wedding walkthrough booking flow. Until then, virtual CTAs are worded as "Ask about a virtual walkthrough/tour" and fall through to `/contact/?intent=wedding`; add the URL to `CALENDLY_URLS.virtual` in `site/js/main.js` when ready.
- **Next SEO run (May 16+):** ItemList rollout complete across the 3 roundup-format blog posts. Customer-facing nav + blog clusters now at functional schema saturation — schema 17/17 page coverage, HowTo on the planning-guide post (5/11), ItemList on weekend-getaways (5/12) / manor-tx (5/13) / kids (today 5/15), meta descriptions 18 pages, title tags 10 pages, image alt-text clean across 27 pages, AEO answer-first blocks on every landing page, FAQPage JSON-LD parity 18/18, every blog post at ≥4 inbound non-index links. Remaining autonomous priorities: (1) **Hipcamp curation-gap audit** flagged in 5/11 competitive-weekly — Rancho's active Hipcamp listing is NOT in Hipcamp's "20 Best Glamping Sites 2026 Near Austin" editorial landing page; audit listing photos / description / amenities vs. surfacing properties to identify what's missing; autonomous-doable as a research output (no HTML edits required); (2) **`wordCount` enrichment** on BlogPosting JSON-LD across the 18-post blog cluster — supported by all major engines, useful for AEO "how long is this article" intent, autonomous + repeatable; (3) AEO baseline measurement (rancho-seo-s7) — query AI engines for the 10 target keywords once apex is indexed; still deferred — low signal before GSC submit; (4) author Person schema for BlogPosting JSON-LD — BLOCKED on `NEEDS ADAM` author-byline decision; (5) promote `/corporate-retreats/` into main nav (currently footer only) — needs Adam confirm. Adam-side: GSC sitemap submit is still the highest-leverage external action (DNS live 15 days, `/corporate-retreats/` live 14 days, no apex crawl yet); ResortPass decision (Lucky Arrow has now walked back the May 1 promise — pick a side); Glamping Hub listing; Hotels.com listing copy fix (~15 min, voice violation). Blog pipeline remains PAUSED per Ashley 2026-04-23. Audit Review/AggregateRating numeric anchor stays 125 until Adam confirms the authoritative count or supplies a Places API key.
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

- 2026-05-15 (SEO daily): **`ItemList` JSON-LD enrichment on `/blog/things-to-do-near-austin-with-kids/`.** Completes the 3-post ItemList rollout pre-scoped by 5/12 weekend-getaways and 5/13 manor-tx runs. Page body has 5 destination H2s in sequence (Rancho Moonrise, McKinney Falls, Bastrop, Hamilton Pool, Blue Hole Wimberley) at lines 237/261/273/285/297 — unnumbered but a clear curated list. Added parallel `ItemList` JSON-LD block between the existing BlogPosting and BreadcrumbList blocks with 5 `ListItem` items. **URL assignments**: position 1 (Rancho Moonrise) → `https://ranchomoonrise.com/` (body-natural — the page already orders Rancho first in destination sequence); positions 2–5 → name+description only — no fake URLs claimed for state parks, public preserves, or city-managed parks. **`itemListOrder` intentionally omitted** (same rationale as 5/12 and 5/13 runs): editorial host's ordering, not a competitive ranking. **Item descriptions distilled, not mirrored** (199–222 chars each): each is a 1–2 sentence summary of its H2 section, so the schema stands on its own when an engine extracts one item. **Voice compliance**: no banned terms — "36 acres" is property size not unit count; "Lost Pines" and "Wimberley" are destinations not Rancho location descriptors; no "luxury", "Hill Country", "Manor" (as location descriptor for Rancho), "General Store", or specific unit counts. **Metadata refresh**: `BlogPosting.dateModified` 2026-04-29 → 2026-05-15. Sitemap `/blog/things-to-do-near-austin-with-kids/` lastmod 2026-05-09 → 2026-05-15. **Validation**: `npm run validate:site` passes. All 5 JSON-LD blocks parse via `python3 json.loads`: BlogPosting (dateModified=2026-05-15), ItemList (numberOfItems=5 / itemListElement.length=5 internal consistency check passes), BreadcrumbList (3 crumbs), WebPage (Speakable), FAQPage (4 Q&A). **Diff**: 2 files, 46 insertions, 2 deletions — surgical. Pre-existing uncommitted prior-session changes in styles.css, main.js, weddings.html, contact.html, api/inquiry.js, brand/review-aggregate.json, site/admin/dashboard-state.json intentionally NOT staged (5/7–5/13 convention). **Re-Verify Gate (live)**: apex 200 + `server: Vercel` + `x-vercel-cache: HIT`; www 308 → apex; sitemap 200; target `/blog/things-to-do-near-austin-with-kids/` 200; prior target `/blog/things-to-do-manor-tx/` 200; `/corporate-retreats/` 200; `/safari-tents-near-austin/` 200. All 8 verified claims still_true; 0 stale claims auto-resolved. **Why this run over Hipcamp curation-gap audit**: ItemList close-out finishes the 3-post workstream named by name in 5/12/5/13 run-logs as the clean next slot; Hipcamp audit is the unambiguous next-best autonomous slot and is fresh-scoped above. **Improvement plan progress**: rancho-seo-s4-schema-breadcrumb-speakable held at PROGRESS 90% — every roundup-format blog post in the cluster now carries item-level schema; remaining schema upside is `wordCount` enrichment + Person schema (BLOCKED on author byline). **Pre-scoping for next slot**: Hipcamp curation-gap audit (research-output, no HTML edits) is the cleanest next autonomous run.

- 2026-05-11 → 2026-05-13 (SEO daily, condensed): **3-post schema-enrichment workstream completed.** 5/11 `HowTo` JSON-LD on `/blog/corporate-retreat-planning-guide-texas/` — 5 `HowToStep` items mirroring body Step 1-5 structure, `totalTime: P12W`. 5/12 `ItemList` JSON-LD on `/blog/weekend-getaways-near-austin/` — 5 `ListItem` items, position 1 Rancho with apex URL. 5/13 `ItemList` JSON-LD on `/blog/things-to-do-manor-tx/` — 6 `ListItem` items, position 1 Rancho with apex URL + position 3 (Live Events) with /events/ URL. Same surgical pattern across all three: distilled item descriptions, `itemListOrder` omitted, voice-compliant, BlogPosting.dateModified + sitemap lastmod bumped, `npm run validate:site` passes, prior-session uncommitted changes intentionally not staged.

- 2026-05-11 (competitive-weekly): **Quiet competitive week on SERPs, two material competitor state changes.** 10 prior-report claims re-verified live (9 still_true). **1 RESOLVED via auto-resolution**: Lucky Arrow's "full food and bar menu will resume starting May 1, 2026" copy has been REMOVED from their ResortPass listing page — today's WebFetch returned no mention of any reactivation date. Listing is still dormant ("no active products at the moment"), but Lucky Arrow no longer publicly commits to any reactivation date. The April 27 "decide within 48 hours" and May 4 "extended window" framings are both dead — the right framing this week is "the door has been open since April 6, pick a side." **Spoon Mountain shipped `/travel-to-wimberley/romantic-weekend-getaways-near-austin/`** — "Ultimate 2026 Guide" with 5 destinations + 3-day Wimberley itinerary, surfacing in "weekend getaway near austin glamping" top 10. First tracked competitor investing in destination-guide research content. Rancho's blog pipeline paused since 2026-04-23 (Ashley) — Spoon Mountain's move is a leading indicator that the pause has a cost. **Other new findings**: Loving Heart Retreats (25 ac, 12 min from Marble Falls, TLS cert mismatch — not fetchable) new SERP entrant for safari tent austin; Hipcamp curation gap — Rancho's active Hipcamp listing is NOT in Hipcamp's "20 Best Glamping Sites 2026 Near Austin" landing page (top 5 are urban/airstream/East Austin properties); Hotels.com listing ho2867109568 surfaces "20 luxury cabins... 50 guests" — banned per VOICE-GUIDE, Vercel site doesn't have this copy, source is third-party listing. **SERP state unchanged on all primary queries** (glamping/safari tent/corporate retreat/weekend getaway/wedding venue Manor — 0 of 5 top-10 placements). `/corporate-retreats/` (live 5/1) still uncrawled 10 days post-launch — GSC submit remains the highest-leverage external action. Output: `site/competitive-intelligence.md` rewritten; Intel tab card dual-written to sovereign + client-ops mirror.

- 2026-05-10 (SEO daily): **Internal-linking close-out — 3 lightly-linked blog posts brought to 4-inbound baseline.** Continuation of yesterday's orphan pass. Yesterday's audit flagged 3 blog posts with only 2 inbound topical links each (the blog index doesn't count as topical PageRank): `austin-bachelorette-ranch-vs-bar-crawl`, `glamping-vs-camping`, `summer-glamping-near-austin`. Each previously linked from blog index + exactly one cluster page (the parent topical hub). Today's goal: 2 more topical inbounds each. **6 surgical `<li>` inserts across 5 host pages**: (a) `weekend-getaways-near-austin.html` Related Reading ← bachelorette-vs-bar + glamping-vs-camping (decision-aid + sibling weekend content); (b) `glamping-near-austin-texas.html` Related Reading ← bachelorette-vs-bar (bachelorette glamping is a real SERP query and the page already links to the bachelorette parent); (c) `safari-tents-near-austin.html` Related Reading ← glamping-vs-camping (the question lands at the conversion-decision moment); (d) `events.html` Related Reading ← summer-glamping (peak event season); (e) `weddings.html` Related Reading ← summer-glamping (peak wedding season). Each new item placed before the trailing "More from the Rancho Moonrise Blog" sentinel where present, preserving the final-CTA convention. **Sitemap freshness**: 5 lastmod entries bumped to 2026-05-10 (`/weddings/` was 5/6, `/events/` was 5/9, `/blog/glamping-near-austin-texas/` was 5/4, `/blog/weekend-getaways-near-austin/` was 5/9, `/safari-tents-near-austin/` was 4/26 — caught a 2-week-stale entry). **Validation**: `npm run validate:site` passes. **Diff**: 6 files, 11 insertions, 5 deletions (sitemap date replacements) — surgical. Pre-existing prior-session changes in styles.css/main.js (and the accommodations-section delete in weddings.html) intentionally NOT staged; weddings.html staged via focused patch on the 1-line Related Reading insert (5/7, 5/8, 5/9 convention). **Re-Verify Gate (live)**: apex 200 + `server: Vercel` + `x-vercel-cache: HIT`; www 308 → apex; sitemap 200; all 9 critical landing pages 200; all 3 target blog posts 200; `/blog/corporate-retreat-planning-guide-texas/` 200 (next slot's target). All DNS/canonical/sitemap claims still_true; 0 stale claims auto-resolved. **Why this run over Article/HowTo schema enrichment**: internal-linking close-out (a) finishes a multi-day workstream within one slot rather than half-shipping two; (b) brings the entire blog cluster to a clean 4-inbound floor before the next non-linking lever; (c) leaves Article/HowTo schema as a clean, well-scoped next slot. **Audit aftermath**: post-edit `grep` count confirms each of the 3 posts now has 4 inbound links — matches the `wedding-venues-near-austin` baseline. Cluster has zero blog posts below 4 inbound.

- 2026-05-07 → 2026-05-09 (condensed): 5/7 AEO answer-first blocks added on `/faqs/` + `/accommodations/` (speakable selectors extended); 5/8 FAQPage parity closure on `/faqs/` (17 → 18 Q&A — auto-resolved yesterday's TODO false-positive that claimed FAQPage was absent; it existed with 17 items, accordion had 18); 5/9 internal-linking pass — 4 critically-orphaned blog posts (`birthday-party-venue-near-austin`, `mothers-day-near-austin`, `things-to-do-near-austin-with-kids`, `yoga-retreat-near-austin`) brought 1 → 4 inbound topical links via 12 surgical `<li>` inserts across 7 host pages.

- 2026-05-01 → 2026-05-06 (condensed): /corporate-retreats/ landing page shipped (5/1, EventVenue + BreadcrumbList + FAQPage + Speakable, 4 JSON-LD); 7-inbound internal-linking pass into corporate cluster (5/2); AggregateRating closure on /events/ → coverage 17/17 (5/3); meta-description CTR sweep on 18 pages within Google's 160-char cutoff (5/4); title-tag CTR sweep on 10 pages within ~60-char cutoff (5/5); image alt-text audit + 9 Instagram-grid alts populated + 3 long alts trimmed (5/6); 5/4 competitive-weekly logged Lucky Arrow ResortPass window extended past projected 5/1 reactivation, Green Acres ATX as new SERP entrant, Walden Retreats unit-count tightening.

- 2026-04-30 (DNS cutover + adversarial site repair + AggregateRating utility-page closure, condensed): Canonical apex + 308 redirect + sitemap rewrite gaps closed; analytics placeholder + `npm run validate:site` shipped; DNS verified live (Vercel server header, x-fw-server gone); AggregateRating closed on contact + faqs (16/17). All outputs baked into current site state.

- 2026-04-27 (competitive-weekly): **April 27 intel run.** 8 prior claims re-verified live (6 still true, 1 state change, 1 narrowed). One new SERP entrant — The Retreat on the Hill (11 multi-format units, \~1 hr from Austin, safari tents + belle tents + tipis + star-gazing domes + mirror house + container suite + cliff house). One material competitor product launch — Spoon Mountain Glamping unveiled private pools per tent (heating $60/day). One content-gap widening — The Yurtopian shipped `/corporate-retreats-in-texas-hill-country/` (1–20+ guests, 10 yurts, indoor lodge, spa yurt, 45 min from Austin). Lucky Arrow ResortPass window narrowed from 10 → 4 days (May 1 reactivation imminent). DNS still on Flywheel (`x-fw-server: Flywheel/5.1.0` verified live). Full report at `site/competitive-intelligence.md`. Intel tab card dual-written to both `site/improvement-plan.html` (sovereign) and `client-ops/clients/rancho-moonrise/improvement-plan.html` (mirror). TODO "Competitive intel quick wins" block refreshed to 2026-04-27 — ResortPass decision now 48 hours, corporate retreats landing page added as Claude-draftable item.

- 2026-05-13 (review-monitor RUN_027): **Google count snippet HELD at 126 @ 4.9★ — 11th confirmation since RUN_016, second consecutive post-dip after RUN_026 recovered from the RUN_025 one-run ABSENT.** First WebSearch query this run surfaced explicit "4.9 rating on Google with 126 reviews" inline. Pattern across 27 runs is now 126→175→126→175→126→126→126→126→126→126→126→126→126→ABSENT→126→126 — effectively 11-of-12 stable with one mid-stretch dip. Snippet still lower-confidence given three prior 126↔175 flips. **True count remains unknown** (live scrape still BLOCKER, 27th). TripAdvisor live: 0 reviews, unclaimed; **price DRIFT RESUMED — $66-$178 → $65-$175** (floor -$1, ceiling -$3 — RUN_026's no-drift streak ended at one run). 16-run net drift floor $77→$65 / ceiling $181→$175 (biggest cumulative ceiling drop since drift tracking began). Travelers' Choice text continues NOT attributed to Rancho Moonrise (FIFTH consecutive run). Hipcamp live: 0 reviews, 1 booking, joined March 2024 (identical to RUN_023/024/025/026). **Expedia 8.0 rating value INLINE for SIXTH consecutive run** ('solid guest review rating of 8.0' — verbatim same phrasing as RUN_022/023/024/025/026) — Hotels.com listing ho2867109568 still active and #1 search result. **Facebook 5/100% recommend snippet stable** for NINTH consecutive run after RUN_018 dip. The Knot in result list but no count detail re-surfaced. Unreplied=0 holds (no review-related done-log entries since RUN_011). 3 BLOCKERS at 27 runs (Google count, Hotels.com timeout, Airbnb 403). NEEDS ADAM unchanged: GBP dashboard count (60s) or Places API key — snippet pattern remains lower-confidence stable, but a one-time dashboard check would convert it to ground truth.

- 2026-04-21 → 2026-04-30 (condensed): AggregateRating 5 → 16/17 over 5 runs; FAQPage on safari-tents (4/26); events rotated to July (4/27); blogs #15–18; ReservePage on pool-day-pass-austin; admin/galleries CRUD + Publer 12-event backlog cleared (4/21); Ashley onsite 4/23 (Paul/Donna step-away, alcohol mandatory through venue, blog pipeline PAUSED, voice guide pricing frame added).

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
