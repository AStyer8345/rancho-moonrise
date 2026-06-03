# Review Monitor — Blockers

Append-only. If a live verification path fails 3 consecutive runs for the same claim, log it here with the claim-id, path, and failure summary.

---

## BLOCKER: google-reviews-count — live scrape failed 3 consecutive runs

- **Claim:** Google review count and rating (currently 127 @ 4.9★, last verified 2026-04-09)
- **Verification path attempted:** WebFetch of public Google Maps/GBP listing page
- **Failure mode:** JS-rendered page — content not present in fetched HTML; would need a headless browser or Places API key to read live data
- **Consecutive failures:** 3 (RUN_001 2026-04-15, RUN_002 2026-04-16, RUN_003 2026-04-17)
- **Status:** Claim remains STALE. Unreplied count remains verifiable via done-log (currently 0, RESOLVED by Adam 2026-04-15).
- **Resolution path:** Either (a) Adam provides a Google Places API key so the agent can call `places.googleapis.com/v1/places/{placeId}?fields=reviews,rating,userRatingCount`, or (b) accept the done-log signal for unreplied=0 and mark the count/rating as "stale, trusted until GBP monthly email arrives." Surfacing here for Adam's decision.
- **Logged:** 2026-04-17

---

## BLOCKER: hotels-com-direct-fetch — timeout 3 consecutive runs

- **Claim:** Expedia/Hotels.com current rating for Rancho Moonrise (currently 8.0, last confirmed 2026-04-09)
- **Verification path attempted:** WebFetch of `https://ca.hotels.com/ho2867109568/` (and previously `https://www.hotels.com/ho2068001/rancho-moonrise-manor-united-states-of-america/`)
- **Failure mode:** 60s fetch timeout — site appears to block or rate-limit automated HTTP requests
- **Consecutive failures:** 3 (RUN_001 2026-04-15, RUN_002 2026-04-16, RUN_003 2026-04-17)
- **Status:** Claim STALE:2026-04-09. Rating likely still ~8.0 but unverifiable by this agent.
- **Resolution path:** WebSearch confirms the listing is still active; accept search-snippet confirmation as "likely unchanged" and downgrade Hotels.com to a quarterly manual check. No action needed by Adam unless rating matters imminently.
- **Logged:** 2026-04-17

---

## BLOCKER: airbnb-listing-existence — unverifiable 3 consecutive runs

- **Claim:** Whether `airbnb.com/rooms/1284193976615696223` is a Rancho Moonrise listing (April 9 baseline said no Airbnb listing)
- **Verification path attempted:** WebFetch of the Airbnb listing URL
- **Failure mode:** 403 Forbidden on every attempt — Airbnb blocks unauthenticated bot fetches
- **Consecutive failures:** 3 (RUN_001 2026-04-15, RUN_002 2026-04-16, RUN_003 2026-04-17)
- **Status:** Cannot confirm or deny. Listing title from search snippet: "Glamping Safari Tent 25 mins from downtown Austin — Yurts for Rent in Manor, Texas" (consistent with Rancho Moonrise).
- **Resolution path:** Adam needs to open the Airbnb URL directly in a browser to confirm. If it IS a Rancho Moonrise listing, add Airbnb to review coverage scope. **This is the same FLAG_FOR_ADAM item surfaced in RUN_001 — 3rd run, escalating to BLOCKERS.**
- **Logged:** 2026-04-17

---

## BLOCKER: hipcamp-direct-fetch — listing fetch failed 3 consecutive runs

- **Claim:** Hipcamp listing state for Rancho Moonrise (currently 0 reviews, 1 booking, voice violations: "34-acre" welcome + "37 acres" header + "drink at our bar" — last live-verified RUN_040 2026-05-26)
- **Verification path attempted:** WebFetch of `https://www.hipcamp.com/en-US/land/texas-rancho-moonrise-dw9hklej`
- **Failure mode:** mixed across the 3 consecutive failures —
  - RUN_041 2026-06-01: WebFetch resolved to a Texas glamping guide list page (Good Guad Land Co., The Best Dam Spot, Sparrow Bend River Retreat, etc.) instead of the Rancho-specific listing
  - RUN_042 2026-06-02: same Texas glamping guide list page returned again — 2nd consecutive
  - RUN_043 2026-06-03: WebFetch returned "Loading..." — page never finished rendering for the fetcher (different failure mode but still zero Rancho-attributed content extractable)
- **Consecutive failures:** 3 (RUN_041 2026-06-01, RUN_042 2026-06-02, RUN_043 2026-06-03)
- **Status:** Hipcamp count/rating/voice-violations now STALE:2026-05-26 (last successful scrape). 0 reviews presumed (carry from RUN_040). Voice violations cannot be re-confirmed.
- **Resolution path:** Either (a) Apify or another headless-render scraper to defeat the JS-render dependency, (b) Adam manually opens the listing every ~2 weeks to spot-check, or (c) treat Hipcamp the same as Hotels.com — accept search-snippet confirmation as "likely unchanged" and downgrade to quarterly manual check. WebSearch fallback is partial: confirms listing exists in `hipcamp.com/en-US/land/texas-rancho-moonrise-dw9hklej` index but cannot enumerate reviews or quote on-page copy.
- **Logged:** 2026-06-03

---

## BLOCKER: theknot-direct-fetch — timeout 3 consecutive runs

- **Claim:** The Knot listing copy + Haylee L. 1★ review (2026-02-26) owner-response state and any new reviews on `https://www.theknot.com/marketplace/rancho-moonrise-manor-tx-2087722`
- **Verification path attempted:** WebFetch of the live listing URL
- **Failure mode:** 60-second WebFetch timeout — page is heavy and/or rate-limiting unauthenticated bot fetches. RUN_034 (2026-05-19) succeeded; failures began RUN_035.
- **Consecutive failures:** 3 (RUN_035 2026-05-20, RUN_036 2026-05-21, RUN_037 2026-05-23)
- **Status:** Listing remains in monitored scope. Haylee L. review confirmed STILL LIVE via WebSearch fallback (review body text "neighboring property played extremely loud amplified music…" still indexed). Owner-response state cannot be confirmed today; presumed still unreplied (no Rancho Moonrise-attributed response surfaces in any search query).
- **Working fallback:** WebSearch is the documented working alternative — it surfaces review body text and listing context reliably, and confirms whether Haylee's review remains live. **Limitation:** it cannot enumerate new reviews posted since RUN_034, and it cannot verify owner-response state directly. Net effect: drift detection on The Knot is now best-effort via search snippet rather than direct.
- **Resolution path:** Either (a) Apify or another rendering scraper as a periodic pull for The Knot, (b) Adam manually opens the listing in a browser every ~2 weeks to spot-check for new reviews + owner-reply state, or (c) treat The Knot the same as Hotels.com — accept search-snippet confirmation as "likely unchanged" and downgrade to a quarterly manual check.
- **Logged:** 2026-05-23
