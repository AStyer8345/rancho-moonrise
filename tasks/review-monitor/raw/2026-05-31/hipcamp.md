# Hipcamp — 2026-05-31 RUN_043

**URL:** https://www.hipcamp.com/en-US/land/texas-rancho-moonrise-dw9hklej
**Method:** WebFetch (1 attempt)
**Status:** FAIL — fetcher returned the Texas state-level landing page content (`/en-US/texas`-style aggregation: "30.2K reviews", "Dos Rios over 19.3 acres", "Texas Safari Camp 31 acre", etc.) instead of the specific Rancho Moonrise listing payload. No Rancho-attributed review count, booking count, acreage figure, bar-text, or overview copy returned for this fetch.

## Failure mode

Either the fetcher hit a CDN-cached state-level page, or Hipcamp's anti-bot routing served the regional canonical instead of the requested listing slug. Listing slug `texas-rancho-moonrise-dw9hklej` should resolve directly per RUN_039/RUN_040/RUN_041; today's response is structurally inconsistent with a listing-page payload.

## Failure counter

- RUN_038: failed (counter 1)
- RUN_039: success (counter 0)
- RUN_040: success (counter 0)
- RUN_041: success (counter 0)
- RUN_042: failed (counter 0 → 1)
- **RUN_043: failed (counter 1 → 2)**

**One more consecutive failure (RUN_044) escalates to BLOCKER `hipcamp-live-scrape` per Re-Verify Gate rule (3 consecutive failures).**

## Claims that cannot be re-verified today

Per the Re-Verify Gate (rule on verification failure): do NOT assume claims are still true and do NOT assume they are resolved. Carry the following as **STALE:2026-05-26** (last successful verification = RUN_041 5/27, 4 days old):

- **0 reviews / no rating** (last live-confirmed RUN_041)
- **1 total booking** (last live-confirmed RUN_041)
- **Acreage drift — "34-acre ranch" (welcome) + "37 acres" (header)** vs VOICE-GUIDE 36 (live-confirmed 3 consecutive runs RUN_039–RUN_041)
- **Voice violation — "unwind with a drink at our bar"** vs VOICE-GUIDE (bar is event-only) (live-confirmed 3 consecutive runs RUN_039–RUN_041)

Treat these as still presumed-true (3-run prior plateau, now 2 failed re-verifications), but staleness widening from 1-day (RUN_042) to 4-day (today) on the same claim set.
