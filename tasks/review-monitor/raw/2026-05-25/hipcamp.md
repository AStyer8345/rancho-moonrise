# Hipcamp — RUN_039 raw snapshot — 2026-05-25

**URL:** https://www.hipcamp.com/en-US/land/texas-rancho-moonrise-dw9hklej
**Method:** WebFetch
**Status:** SUCCESS (failure counter resets from 2 → 0)

## Extracted fields

- Total review count: 0
- Star rating: none
- "Be the first to review": YES
- Booking count: "Cosmic Cabin Booked 1 time" (overall property booking count not specified)
- Acreage in copy: **"34-acre ranch"** in welcome text, **"22 sites · Tent, Lodging · 37 acres"** in header — drift persists (VOICE-GUIDE = 36)
- Bar/alcohol mention: **"unwind with a drink at our bar"** — voice violation persists (VOICE-GUIDE = bar is event-only)
- Host name: "Rancho M." (joined March 2024)

## State changes vs RUN_038

- **Scrape SUCCEEDED** — recovers from 2 consecutive "Loading..." shell failures in RUN_037 + RUN_038. Failure counter resets 2 → 0. No BLOCKER opened (threshold was 3).
- 0 reviews / Cosmic Cabin 1 booking — no change.
- Voice violation ("drink at our bar") still present in live listing.
- Acreage drift (34/37/36) still present in live listing.

## Pattern: clean scrape returns after consecutive failures
- RUN_028 + RUN_030-036 = 7 prior consecutive clean scrapes
- RUN_037 + RUN_038 = 2 consecutive "Loading..." failures
- RUN_039 = clean scrape — pattern was a transient JS-render flake, not a structural BLOCKER
