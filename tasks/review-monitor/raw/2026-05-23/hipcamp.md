# Hipcamp live snapshot — 2026-05-23 (RUN_037)

URL: https://www.hipcamp.com/en-US/land/texas-rancho-moonrise-dw9hklej
Method: WebFetch
Status: **FAILED — "Loading..." placeholder returned (JS-rendered page; SSR shell only)**

## Outcome
- Direct fetch returned only the "Loading..." spinner — no review data, no overview text, no host info
- This is the same RUN_029 pattern (1-run dip after a streak of clean scrapes)
- **6 consecutive prior clean runs broken** (RUN_028 + RUN_030-035 = 7 clean) — now 1-run dip
- Not yet a BLOCKER (threshold is 3 consecutive failures)

## Search-fallback signal (WebSearch)
- Search snippet still surfaces Hipcamp-attributed text: "Rancho Moonrise is a 34-acre ranch just outside of vibrant Austin"
- Snippet text confirms voice violations still present in listing copy: "34-acre" (VOICE-GUIDE = 36) and "unwind with a drink at the bar" (VOICE-GUIDE = bar is event-only)
- No review count or rating surfaces in snippet — Hipcamp 0 reviews / 0 rating assumed unchanged from RUN_036 (carry-forward)

## Carry-forward state (treated as unchanged from RUN_036)
- Reviews: 0
- Booked: 1 time (singular, Cosmic Cabin)
- Host: "Rancho M.", joined March 2024
