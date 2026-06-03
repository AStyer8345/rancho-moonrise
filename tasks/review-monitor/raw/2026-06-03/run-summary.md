# RUN_043 — 2026-06-03 raw scrape cache

Wall clock: 2026-06-03 ~06:30 CT (scheduled task fire).
Days since last run (RUN_042, 2026-06-02): 1.

GOALS.md context: Rancho is in cruise control per week-of-5/18 pause (active outreach paused; review-monitor not explicitly listed in Pause List, runs to detect drift only).

## Live verification attempts

| Platform | Path | Result |
|---|---|---|
| TripAdvisor | WebFetch listing URL | OK — 0 reviews, unclaimed ("Claim your listing for free"), price range **$63 - $181**. Identical to RUN_041/RUN_042 — no drift, **3 consecutive runs stable**. Travelers' Choice text continues NOT property-attributed (20th consecutive run — explanatory boilerplate only). |
| Hipcamp | WebFetch direct listing URL | **FAILED 3rd consecutive run** — model returned "Loading..." indicating the JS-rendered listing page never finished rendering for the fetcher. Different failure mode than RUN_041/042 (which returned a Texas glamping guide page); same net result: zero Rancho-attributed content extractable. **Failure counter 2 → 3 — crosses BLOCKER threshold; new BLOCKER `hipcamp-direct-fetch` logged.** |
| Google | WebSearch | Snippet returned **NO inline review count or rating** for the Google-targeted query. Snippet null this run. 5-run snippet history now 126→175→null→126→126→null (4 distinct states across 6 runs). Snippet baseline confirmed unreliable as authoritative source. Live=130/4.9★ from RUN_034 Chrome read now 15 days old. |
| Facebook | WebSearch | "100% recommend rating with 5 reviews" surfaced inline — **24th consecutive run** stable. |
| Expedia | WebSearch | "solid guest review rating of 8.0" inline — **13th consecutive run** inline after RUN_029's one-run absence. Same Dec 2025 pool quote surfaces (no new reviews indexed). |
| The Knot | WebFetch (direct) | not attempted — BLOCKER `theknot-direct-fetch` (7 consecutive timeouts RUN_035-041); 9th run no-attempt. |
| The Knot | WebSearch fallback | Haylee L. review body STILL LIVE (loud-music body text surfaces in Rancho-attributed snippet); **reviewer name "Haylee L." DOES surface in today's snippet** — name returns after one-run absence in RUN_042. Visibility re-widened vs RUN_042. No Rancho Moonrise-attributed owner response indexed in any query. |
| Hotels.com | not attempted | BLOCKER ongoing — 42nd run no-attempt. |
| Airbnb | not attempted | 403 BLOCKER — 42nd run no-attempt. |

## Key state changes vs. RUN_042

1. **Hipcamp scrape FAILED 3rd consecutive run — `hipcamp-direct-fetch` BLOCKER OPENED.** Failure counter 2 → 3, crossing the documented BLOCKER threshold. Today's failure mode ("Loading..." returned) differs from RUN_041/042's (Texas glamping guide page returned), but the gate's "consecutive failures" rule counts both as failed live verification of the listing. Per `BLOCKERS.md` rules, new entry logged. Hipcamp count/rating/voice-violations now formally STALE; will need Apify, headless render, or Adam manual check to recover.
2. **The Knot Haylee L. reviewer name RETURNS to snippet** — name surfaces in Rancho-attributed snippet today after dropping in RUN_042 (1-run absence). Body + name both indexed again; visibility re-widens vs RUN_042's narrowing. 4-of-5-run pattern with name (RUN_039/040/041/043) vs 1-of-5 without (RUN_042).
3. **Google WebSearch snippet returns null** — no inline count today. 6-run snippet history now 126→175→null→126→126→null. Snippet baseline NOT reforming after all — confirmed unreliable. Authoritative source still RUN_034 Chrome read (130/4.9★, 15 days old).
4. **TripAdvisor price range STABLE at $63-$181 — 3rd consecutive run** at same range; RUN_041's drift back to baseline now plateau. 28-run net: floor -$14 / ceiling 0.

## Carry-forward URGENT (drafted RUN_034, still unposted)

1. **Cassie Butterfield Google 5★** (corporate retreat) — day **16** unposted in monitor (since 2026-05-19). Draft: `brand/review-reports/2026-05-19-review-report.md`. Done-log grep confirms no review-related entry since 2026-04-15 — presumed still unreplied.
2. **Haylee L. The Knot 1★** (2026-02-26) — now **~97 days unreplied** (recalc 2026-02-26 → 2026-06-03 = 97 days). Day 16 drafted unposted in monitor. Direct verification BLOCKER (7 consec timeouts); WebSearch fallback confirms body + name both live in today's snippet (visibility re-widened vs RUN_042).

## No new reviews on any monitored platform

**10th consecutive quiet sweep.** No new Google reviews (snippet null today; no authoritative new count), no new Hipcamp (scrape failed 3rd consec; carry from RUN_040), no new TripAdvisor (0 unclaimed), no new Expedia (Dec 2025 quote unchanged), no new Facebook (5 stable), no new The Knot reviews surfaced via WebSearch beyond known 8.

## Re-Verify Gate

10 prior live claims re-verified live:
- TripAdvisor 0 reviews unclaimed — STILL_TRUE
- TripAdvisor price range $63-$181 — STILL_TRUE (3rd consecutive run no drift)
- Hipcamp 0 reviews — STALE (carry; today's scrape failed 3rd consec — BLOCKER)
- Expedia 8.0 — STILL_TRUE
- Facebook 5 reviews / 100% recommend — STILL_TRUE
- Google WebSearch snippet — STATE CHANGE (null this run, baseline confirmed unreliable)
- Cassie Butterfield Google 5★ unreplied — STILL_TRUE (done-log grep clean)
- Haylee L. The Knot 1★ unreplied — STILL_TRUE (body + name both indexed today)
- Hotels.com listing active — STILL_TRUE (BLOCKER on direct fetch)
- The Knot listing active — STILL_TRUE (BLOCKER on direct fetch, WebSearch fallback OK)

0 partially resolved. 0 fully resolved → no done-log writes this run.

## Failure counters at end of RUN_043

- `google-reviews-count` live scrape: 42 consecutive (BLOCKER since 2026-04-17)
- `hotels-com-direct-fetch`: 42 consecutive no-attempt (BLOCKER since 2026-04-17; not re-attempted)
- `airbnb-listing-existence`: 42 consecutive (BLOCKER since 2026-04-17)
- `theknot-direct-fetch`: 7 consecutive timeouts (BLOCKER ongoing since 2026-05-23 RUN_037; 9-run no-attempt cycle)
- `hipcamp-direct-fetch`: **3 consecutive failures — NEW BLOCKER OPENED 2026-06-03 RUN_043** (RUN_041 1st failure, RUN_042 2nd, RUN_043 3rd)
