# RUN_053 raw scrape cache — 2026-06-16

## TripAdvisor (DIRECT WebFetch — succeeded, not a blocker path)
URL: https://www.tripadvisor.com/Hotel_Review-g56224-d33307272-Reviews-Rancho_Moonrise-Manor_Texas.html
- Reviews: "No reviews for this property yet."
- Status: "Claim Your Listing" → unclaimed
- Price range: "$66 - $179 (Based on Average Rates for a Standard Room)"
- Delta vs RUN_052 ($66–$179): IDENTICAL — no drift this run (floor held $66, ceiling held $179).

## Google (WebSearch snippet — non-authoritative)
Query: "Rancho Moonrise Manor Texas Google reviews rating"
- Inline: 4.9 / 5 (Excellent) based on **126 reviews**.
- Delta vs RUN_052 (126): UNCHANGED — 4th consecutive run at 126.
- Live-authoritative = 130/4.9★ (RUN_034 Chrome read, now 28 days STALE). 126 ≠ 130 → snippet remains non-authoritative.

## Expedia / Hotels.com (WebSearch snippet)
- General query ("...Expedia guest review rating 8.0"): surfaced **9.0 "Wonderful"** (artifact — 4th consecutive run a 9.0 reading appears on a general query).
- Targeted 8.0-anchor query ("...8.0 Hotels.com guest review score Very Good"): CONFIRMS "Hotels.com guest review score of **8.0** out of 10, Very Good".
- 8.0 anchor HOLDS (23rd consecutive inline run). 9.0 treated as snippet/listing-variant artifact. NO rating change asserted per Re-Verify Gate (reliability downgraded since RUN_050).

## Facebook (WebSearch snippet)
- "100% recommendation rating with 5 reviews" — 34th consecutive inline. Unchanged.

## The Knot (WebSearch name-free query — direct fetch under BLOCKER)
Query: "Rancho Moonrise The Knot reviews loud amplified music neighboring property"
- Haylee L. review body STILL indexed verbatim (loud amplified music from neighboring property; couple could not sleep/enjoy site; venue cannot control it; risk not disclosed).
- Query name-free; reviewer name NOT surfaced → name-surfacing not asserted. No owner-response indexed.
- 110 days unreplied (posted 2026-02-26). Listing count/rating not surfaced this run → 8 reviews / 4.5★ carried (no contradicting signal).

## No-attempt BLOCKER paths (cruise-control, not re-attempted)
- Hipcamp direct fetch — `hipcamp-direct-fetch` BLOCKER, 10th no-attempt-cycle run. WebSearch confirms listing still indexed at texas-rancho-moonrise-dw9hklej. 0 reviews presumed; voice/data violations STALE:2026-05-26.
- Airbnb — 403 `airbnb-listing-existence` BLOCKER, 52nd no-attempt run. FLAG_FOR_ADAM standing.
- Hotels.com direct fetch — `hotels-com-direct-fetch` BLOCKER, counter holds 42 (8.0 cross-confirmed via Expedia targeted query above).
- Google live count — `google-reviews-count` BLOCKER (JS-rendered, no Places API key). Snippet used as non-authoritative proxy.

## Net: 20th consecutive quiet sweep. 0 new reviews, 0 rating drops, 0 count drops, 0 new ≤3★, 0 drafts. Re-Verify Gate 8/8 still_true, 0 resolved.
