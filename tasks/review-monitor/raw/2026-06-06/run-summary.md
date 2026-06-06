# RUN_046 raw cache — 2026-06-06 06:35 CT

Thirteenth consecutive quiet sweep. No new reviews on any monitored platform. Cruise-control maintenance run (GOALS.md week-of-5/18 broad Rancho pause; review-monitor not in the Scheduled-Tasks Pause List — monitoring ≠ active work).

## Live paths swept this run

- **apex/www/sitemap (curl):** apex `HTTP/2 200` + `server: Vercel` + `x-vercel-cache: HIT` (age 8319s ≈ 2.3 hr); www `HTTP/2 308 → https://ranchomoonrise.com/`; sitemap `HTTP/2 200`.
- **Google (WebSearch snippet):** 126 reviews @ 4.9★. Snippet swung 175 (RUN_045) → 126. 9-run history: 126→175→null→126→126→null→null→175→126. 126 ≠ live authoritative 130 (RUN_034 Chrome read, now 18d old) → snippet remains non-authoritative. Direct GBP scrape NOT attempted (BLOCKER `google-reviews-count`, 45th no-attempt).
- **TripAdvisor (WebFetch listing — direct, succeeded):** "No reviews for this property yet"; **Unclaimed** ("Is this your business? Claim your listing for free"); price range **"$63 - $181 (Based on Average Rates for a Standard Room)"** — confirmed live, 6th consecutive run stable. (Manor hotels list-page snippet showed "$77" floor — different surface, not the listing's own range; no drift asserted.)
- **Expedia (WebSearch snippet):** "solid guest review rating of 8.0" inline — 16th consecutive run. Hotels.com direct fetch NOT attempted (BLOCKER `hotels-com-direct-fetch`, counter holds 42). Banned VOICE-GUIDE strings persist in Hotels.com listing copy ("20 luxury cabins and safari tents for up to 50 guests"; "Austin's first glamping and events ranch") — third-party listing, not Rancho's site.
- **Facebook (WebSearch snippet):** "100% recommendation rating with 5 reviews" inline — 27th consecutive run.
- **The Knot (WebSearch, name-free query):** Haylee L. review body still indexed verbatim ("neighboring property played extremely loud amplified music from early afternoon until after midnight"). Query was NAME-FREE; result did not name Haylee → name-surfacing NOT asserted. No owner-response indexed in any query. Listing holds 8 reviews / 4.5★ — no new review since RUN_034. Direct fetch NOT attempted (BLOCKER `theknot-direct-fetch`, 12th no-attempt; 7 prior timeouts).
- **Hipcamp (WebSearch):** listing still indexed at known URL `texas-rancho-moonrise-dw9hklej`. Snippet re-surfaced voice/data violations — "34-acre ranch" (VOICE-GUIDE = 36) + "a bar" amenity reference. Direct fetch NOT attempted (BLOCKER `hipcamp-direct-fetch`, 3rd no-attempt-cycle run); voice violations carry STALE:2026-05-26 (cannot confirm on-page copy under BLOCKER).
- **Airbnb:** 403 BLOCKER `airbnb-listing-existence`, 45th no-attempt. FLAG_FOR_ADAM standing.

## Carry-forward drafts (no new drafts this run)

- **Cassie Butterfield** — Google 5★ corporate-retreat review (~posted 2026-05-16). Draft at `brand/review-reports/2026-05-19-review-report.md`. ~day 21 since posting; day 19 unposted in monitor. Done-log grep: no review-related entry since 2026-04-15 22:12.
- **Haylee L.** — The Knot 1★ (2026-02-26). Draft at `brand/review-reports/2026-05-19-review-report.md`. ~100 days unreplied; day 19 unposted in monitor.

## No-op assessment

No new reviews, no rating drop, no count drop, no new ≤3★. Re-Verify Gate: all live claims still_true, 0 resolved. Dashboard status holds `pending` (2 outstanding carry-forward drafts + 4 active BLOCKERs no-attempt cycle).
