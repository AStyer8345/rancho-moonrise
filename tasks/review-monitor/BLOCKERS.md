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
