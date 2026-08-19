# RUN_066 raw cache — 2026-07-21

Method: WebSearch only. All direct-fetch paths are under active BLOCKERs (google-count,
hotels-com-direct-fetch, airbnb-listing-existence, theknot-direct-fetch, hipcamp-direct-fetch,
tripadvisor-direct-fetch) — no direct fetch attempted this run.

## Queries run

1. `Rancho Moonrise Manor Texas Google reviews rating`
   → link set only; **NO count/rating surfaced inline**. Canonical surfaces present:
   Google Hotels entity, Yelp, Agoda, Facebook, Hotels.com ho2867109568,
   TripAdvisor g56224-d33307272, ranchomoonrise.com.

2. `Rancho Moonrise Expedia guest review rating Manor Texas`
   → link set only; **8.0 anchor did NOT surface inline** this run.
   Both Expedia entities still active: `expedia.com/Manor-Hotels-Rancho-Moonrise.h89565924`
   and Hotels.com-shared `ho2867109568`. Also surfaced: trip.com entity 106407411.

3. `"Rancho Moonrise" Facebook reviews recommendation rate`
   → **INLINE: "100% recommendation rate with 5 reviews"** (47th consecutive inline confirm).

4. `Rancho Moonrise The Knot Manor TX reviews neighboring property loud amplified music`
   → **Haylee L. review body STILL LIVE, indexed verbatim** in Rancho-attributed snippet:
   "a neighboring property played extremely loud amplified music from early afternoon until
   after midnight", venue "has no ability to control or prevent this", risk "never disclosed
   to us before booking", "would have easily ruined the entire event".
   **No owner-response indexed in any query.** Listing count/rating did NOT surface inline.

5. `tripadvisor Rancho Moonrise Manor Texas campground reviews claim listing`
   → canonical `g56224-d33307272` still indexed as "RANCHO MOONRISE - Prices & Campground
   Reviews (Manor, TX)". **"Is this your business?" claim language surfaced** → consistent
   with unclaimed. **No count/rating in snippet** → consistent with 0 reviews.

6. `"Rancho Moonrise" glamping Austin reviews "based on" rating excellent`
   → no numeric Google count. Two verbatims surfaced — **both traced to existing repo
   content, NOT new reviews** (see New-review check below).

7. `Rancho Moonrise Hipcamp Manor Texas reviews acres`
   → canonical listing `hipcamp.com/en-US/land/texas-rancho-moonrise-dw9hklej` still indexed.
   Snippet says "36 acres" but is sourced from ranchomoonrise.com, not the Hipcamp listing —
   **cannot be used to clear the STALE:2026-05-26 "34-acre"/"37 acres" voice violations.**

## New-review check — 0 new reviews

Two verbatims surfaced this run that were not in recent run-logs. Both checked against the
repo before being treated as signal:

| Verbatim | grep result | Verdict |
|---|---|---|
| "lots of mosquitoes and no coffee pot" | `brand/review-reports/2026-04-09-review-report.md` + `brand/approved-testimonials.md` | **Pre-existing** — in the 2026-04-09 baseline. Not new. |
| "The most magical place we've ever stayed" | `site/index.html` | **Own site testimonial copy**, not a platform review. Not new. |

No count delta on any platform. No rating drop. No count drop. No new <=3-star.
