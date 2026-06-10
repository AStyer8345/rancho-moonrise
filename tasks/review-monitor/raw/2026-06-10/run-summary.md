# RUN_048 raw scrape cache — 2026-06-10 06:38 CT

Fifteenth consecutive quiet sweep. Cheap working paths only; established BLOCKERS left as no-attempt.

## curl liveness
- apex `https://ranchomoonrise.com/` → HTTP 200, `server: Vercel`, `x-vercel-cache: HIT`, `age: 2846` (~47 min)
- www `https://www.ranchomoonrise.com/` → `location: https://ranchomoonrise.com/` (308 → apex)
- sitemap `https://ranchomoonrise.com/sitemap.xml` → HTTP 200

## TripAdvisor — DIRECT WebFetch (succeeded; its non-blocked path)
- URL: `https://www.tripadvisor.com/Hotel_Review-g56224-d33307272-Reviews-Rancho_Moonrise-Manor_Texas.html`
- "No reviews for this property yet" → **0 reviews**
- "Is this your business? Claim Your Listing" → **unclaimed**
- "$64 - $180 (Based on Average Rates for a Standard Room)" → **price range $64–$180**
- vs RUN_047 ($64–$180): IDENTICAL. The RUN_047 drift ($63–$181 → $64–$180) now HELD a 2nd consecutive run.

## Google — WebSearch snippet (count direct = BLOCKER, no attempt)
- Snippet: "4.9 stars with 126 reviews, labeled Excellent"
- 126 = same as RUN_046 + RUN_047 → **stable 3 consecutive runs**
- 126 ≠ live authoritative 130 (RUN_034 Chrome read, now 22 days old) → snippet remains non-authoritative

## Expedia — WebSearch snippet (Hotels.com direct = BLOCKER, no attempt)
- Snippet: "guest review rating of 8.0 on Expedia" → **8.0, 18th consecutive inline**

## Facebook — WebSearch snippet
- Snippet: "100% recommend rating on Facebook with 5 reviews" → **5/100%, 29th consecutive inline**

## The Knot — WebSearch name-free query (direct fetch = BLOCKER, no attempt)
- Query: "Rancho Moonrise The Knot reviews loud amplified music neighboring property"
- Haylee L. review body STILL indexed verbatim ("neighboring property played extremely loud amplified music from early afternoon until after midnight… venue has no ability to control or prevent this… risk was never disclosed")
- Reviewer name NOT in query and NOT surfaced in result → name-surfacing NOT asserted this run
- No owner-response indexed in any query
- Listing count/rating (8 / 4.5★) not surfaced in snippet this run; no contradicting signal → carried
- ~day 104 unreplied (post date 2026-02-26)

## Hipcamp — WebSearch existence (direct fetch = BLOCKER, no attempt)
- Listing still indexed at `https://www.hipcamp.com/en-US/land/texas-rancho-moonrise-dw9hklej`
- Snippet surfaced "34-acre ranch" + "a bar" references — consistent with the known voice/data violations, but search-cached, NOT a fresh on-page scrape → violations carry STALE:2026-05-26
- 0 reviews presumed (carry)

## Out-of-scope listings re-sighted (no change)
- Airbnb `/rooms/1284193976615696223` ("Glamping Safari Tent 25 mins from downtown Austin — Yurts for Rent in Manor, Texas") — 403 BLOCKER, FLAG_FOR_ADAM standing
- Yelp `/biz/rancho-moonrise-manor` — "Updated June 2026, 36 Photos", 1 review 5.0, not in scope
- Agoda `h82700060` (en-ie variant seen) — JS-rendered, not in scope, FLAG_FOR_ADAM-verify standing
