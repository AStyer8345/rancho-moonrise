# Hipcamp — 2026-05-30 RUN_042

**URL:** https://www.hipcamp.com/en-US/land/texas-rancho-moonrise-dw9hklej
**Method:** WebFetch (2 attempts)
**Status:** Both fetches returned only "Loading..." — page content not rendered for the fetcher today

## Failure mode

Both today's fetches returned a single-frame "Loading..." HTML state with no listing content extractable (review count, host info, overview copy, acreage references all unavailable). RUN_039 / RUN_040 / RUN_041 succeeded against the same URL; today the page either failed to JS-render or rate-limited the bot fetch.

## Failure counter

- RUN_038: failed (counter 1)
- RUN_039: success (counter 0)
- RUN_040: success (counter 0)
- RUN_041: success (counter 0)
- **RUN_042: failed (counter → 1)**

Not a 3-failure BLOCKER yet. If RUN_043 and RUN_044 also fail, escalate to BLOCKERS.md.

## Claims that cannot be re-verified today

Per the Re-Verify Gate (rule on verification failure): do NOT assume claims are still true and do NOT assume they are resolved. Carry the following as **STALE:2026-05-27** (last successful verification = RUN_041):

- **0 reviews / no rating** (last live-confirmed RUN_041)
- **1 total booking** (last live-confirmed RUN_041)
- **Acreage drift — "34-acre ranch" (welcome) + "37 acres" (header)** vs VOICE-GUIDE 36 (live-confirmed 3 consecutive runs RUN_039–RUN_041)
- **Voice violation — "unwind with a drink at our bar"** vs VOICE-GUIDE (bar is event-only) (live-confirmed 3 consecutive runs RUN_039–RUN_041)

Treat these as still presumed-true (3-run prior plateau), but tagged stale until next successful Hipcamp scrape.

## Note

The acreage + bar violations carry forward to TODO.md / NEEDS ADAM unchanged — no action needed from this run since both were already surfaced after RUN_039–RUN_041 and remain NEEDS ASHLEY (Hipcamp dashboard).
