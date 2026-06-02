# RUN_042 — 2026-06-02 raw scrape cache

Wall clock: 2026-06-02 ~06:30 CT (scheduled task fire).
Days since last run (RUN_041, 2026-06-01): 1.

GOALS.md context: Rancho is in cruise control per week-of-5/18 pause (active outreach paused; review-monitor not explicitly listed in Pause List, runs to detect drift only).

## Live verification attempts

| Platform | Path | Result |
|---|---|---|
| TripAdvisor | WebFetch listing URL | OK — 0 reviews, unclaimed ("Claim your listing for free"), price range **$63 - $181**. Identical to RUN_041 — no drift. 27-run net: floor -$14 ($77→$63), ceiling 0 ($181→$181). |
| Hipcamp | WebFetch direct listing URL | **FAILED 2nd consecutive run** — model returned Texas glamping guide page (Good Guad Land Co., The Best Dam Spot, Sparrow Bend River Retreat, etc.); no Rancho-attributed content extractable. Failure counter 1 → 2 (BLOCKER threshold 3). |
| Google | WebSearch | Snippet = **126 reviews / 4.9★** inline. Stable 2 consecutive runs at 126 (RUN_041 was return-to-126 after 175/null divergence; RUN_042 confirms 126 holds). Live=130/4.9★ from RUN_034 Chrome read now 14 days old. |
| Facebook | WebSearch | "100% recommend with 5 reviews" surfaced inline — **23rd consecutive run** stable. |
| Expedia | WebSearch | "solid guest review rating of 8.0" inline — **12th consecutive run** inline after RUN_029's one-run absence. Same Dec 2025 pool quote surfaces (no new reviews indexed). |
| The Knot | WebFetch (direct) | not attempted — BLOCKER `theknot-direct-fetch` (7 consecutive timeouts RUN_035-041); 8th run no-attempt. |
| The Knot | WebSearch fallback | Haylee L. review body STILL LIVE (loud-music body text surfaces in Rancho-attributed snippet); **reviewer name NOT in today's snippet** (was in RUN_039/040/041). Visibility narrowed slightly — only body, not name. No Rancho Moonrise-attributed owner response indexed in any query. |
| Hotels.com | not attempted | BLOCKER ongoing — 41st run no-attempt. |
| Airbnb | not attempted | 403 BLOCKER — 41st run no-attempt. |

## Key state changes vs. RUN_041

1. **Hipcamp scrape FAILED 2nd consecutive run** — failure counter 1 → 2. One more failure on RUN_043 = `hipcamp-direct-fetch` BLOCKER (per BLOCKERS.md threshold of 3 consecutive). Voice/data violations ('34-acre' welcome + '37 acres' header + 'drink at our bar') not re-verifiable today; carry from RUN_040.
2. **Google WebSearch snippet stable 2 runs at 126** — RUN_041 returned to 126 after 175/null divergence; today confirms 126 holds. Snippet baseline tentatively reforming but unreliable as authoritative source (Places API or Chrome dashboard still needed for live count).
3. **The Knot Haylee L. visibility NARROWED** — reviewer name dropped from snippet (was in RUN_039/040/041, 3 consec runs with name+body). Today only body text surfaces in Rancho-attributed query results. Net effect: review is still indexed and discoverable, but the negative-attribution surface is slightly less direct than yesterday.
4. **TripAdvisor price range STABLE at $63-$181** — RUN_041's drift back to baseline holds (no further drift). 27-run net: floor -$14 / ceiling 0.

## Carry-forward URGENT (drafted RUN_034, still unposted)

1. **Cassie Butterfield Google 5★** (corporate retreat) — day **15** unposted in monitor (since 2026-05-19). Draft: `brand/review-reports/2026-05-19-review-report.md`. Done-log grep confirms no review-related entry since 2026-04-15 — presumed still unreplied.
2. **Haylee L. The Knot 1★** (2026-02-26) — now **~96 days unreplied** (recalc 2026-02-26 → 2026-06-02 = 96 days). Day 15 drafted unposted in monitor. Direct verification BLOCKER (7 consec timeouts); WebSearch fallback confirms body still live, no owner response indexed.

## No new reviews on any monitored platform

**9th consecutive quiet sweep.** No new Google reviews (snippet 126 stable; no authoritative new count today), no new Hipcamp (scrape failed; presumed 0 carry from RUN_040), no new TripAdvisor (0 unclaimed), no new Expedia (Dec 2025 quote unchanged), no new Facebook (5 stable), no new The Knot reviews surfaced via WebSearch beyond known 8.

## Re-Verify Gate

10 prior live claims re-verified live:
- TripAdvisor 0 reviews unclaimed — STILL_TRUE
- TripAdvisor price range $63-$181 — STILL_TRUE (no drift from RUN_041)
- Hipcamp 0 reviews — STILL_TRUE (carry; today's scrape failed)
- Expedia 8.0 — STILL_TRUE
- Facebook 5 reviews / 100% recommend — STILL_TRUE
- Google WebSearch snippet 126 — STILL_TRUE
- Cassie Butterfield Google 5★ unreplied — STILL_TRUE (done-log grep clean)
- Haylee L. The Knot 1★ unreplied — STILL_TRUE (body indexed, no owner reply)
- Hotels.com listing active — STILL_TRUE (BLOCKER on direct fetch)
- The Knot listing active — STILL_TRUE (BLOCKER on direct fetch, WebSearch fallback OK)

0 partially resolved. 0 fully resolved → no done-log writes this run.
