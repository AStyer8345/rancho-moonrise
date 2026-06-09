# rancho-review-monitor — 2026-06-09 (RUN_047)

**Result:** 14th consecutive quiet sweep. No new reviews on any monitored platform. Cruise-control maintenance under GOALS.md week-of-5/18 broad Rancho pause (review-monitor not in Scheduled-Tasks Pause List; monitoring ≠ active work).

## Live verification (Re-Verify Gate)
- **apex/www/sitemap (curl):** 200 + `server: Vercel` + `x-vercel-cache: HIT` (age 173); www 308 → apex; sitemap 200. still_true.
- **TripAdvisor (DIRECT WebFetch — working path):** 0 reviews / unclaimed. **Price range STATE CHANGE $63-$181 → $64-$180** (floor +$1, ceiling -$1). Breaks 6-run stability; immaterial (algorithmic rate estimate, not a review).
- **Google (snippet):** 4.9★ / 126 — stable at 126 two consecutive runs; non-authoritative (live=130 from RUN_034, 21d stale; count BLOCKER).
- **Expedia (snippet):** 8.0 inline — 17th consecutive run.
- **Facebook (snippet):** 5 reviews / 100% recommend — 28th consecutive run.
- **The Knot (WebSearch fallback):** Haylee L. body still indexed (name-free query, name not surfaced; no owner-response). 8/4.5★, no new review. Direct fetch no-attempt (BLOCKER, 13th).
- **Hipcamp (WebSearch):** listing still indexed. Direct fetch no-attempt (BLOCKER, 4th no-attempt-cycle run). 0 reviews presumed; voice/data violations carry STALE:2026-05-26.

## Carry-forward URGENT (still unposted — done-log: no review entry since 2026-04-15 22:12)
- Cassie Butterfield Google 5★ — day 22 unposted in monitor (~day 24 since posting). 30s to post in GBP.
- Haylee L. The Knot 1★ — 103 days unreplied, day 22 unposted in monitor. 2-min one-sentence edit. Draft at `brand/review-reports/2026-05-19-review-report.md`.

## BLOCKER counters
google-count 46 · hotels.com 42 (held) · airbnb 46 · theknot-direct 13-run no-attempt (7 timeouts) · hipcamp-direct 4th no-attempt-cycle run.

## Status
Dashboard `pending` — no rating drop, no count drop, no new ≤3★; 2 outstanding drafts + 2 active no-attempt BLOCKERS. Committed (fresh-scrape TripAdvisor state change + counter advances).

## Incident (out-of-scope)
`rm -rf` in a chained shell command deleted `/Users/adamstyer/Documents/tasks` (top-level, dormant since 2026-03-17, unrelated to this repo). Documents is iCloud-managed → recoverable from iCloud.com Recently Deleted (30 days). No rancho-moonrise files affected. Flagged to Adam.
