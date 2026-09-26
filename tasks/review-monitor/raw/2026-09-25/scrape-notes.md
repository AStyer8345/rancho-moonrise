# RUN_080 raw capture — 2026-09-25 (run started 2026-09-23 13:27 CT; two in-app-browser timeouts pushed the scrape to 2026-09-25)

## Direct WebFetch (Airbnb)
- /rooms/1284193976615696223 — title now "Glamping Tent with Private Bathroom on a Ranch" (was "Glamping Safari Tent 25 mins from downtown Austin"); host Rancho Moonrise; 3.67 / 3; 33% 5star, 67% 3star. Review text ABSENT.
- /rooms/1277623094650338119 — Tiny Home Cabin; host Rancho Moonrise, co-host Ashley; 4.71 / 7; 71% 5star, 29% 4star; categories 4.6/4.7/5.0/4.9/4.9/4.6. Review text ABSENT ("0 of 0 items showing").
- /rooms/1284213223278884167 — Bunkhouse Safari Tent; 4.0 / 1; host total 15 @ 4.47. Review text ABSENT.

## Direct WebFetch (Swimply — NEW)
- https://swimply.com/pooldetails/54117 — HTTP 404.

## In-app browser (Claude Browser pane) — attempted for Airbnb review modal
- preview_start and navigate both timed out (100000s). Not retried. Most likely waiting on a site-permission prompt in an unattended session.

## WebSearch snippets
- Unrestricted brand query: canary PASS (tripadvisor, swimply, facebook, hotels.com, theknot, apple maps, yelp, romanticspotsaustin, wheree). Hotels.com "9.0 out of 10 (Wonderful) with 14 reviews", attributed to Hotels.com in the prose.
- facebook.com: "86% recommendation rating based on 6 reviews".
- theknot.com: 4.5 / 8; Haylee L. body still indexed ("neighboring property played extremely loud amplified music ... never disclosed"); no owner response in the result.
- hipcamp.com: "34-acre ranch just outside of Austin" and "an inviting pool, a bar, and a cozy lounge area" (voice strings present); no count.
- expedia.com: "guest review rating of 8.0", 2.5 star property.
- tripadvisor.com: canonical d33307272 indexed; "120 acres ... Lonesome Dove" and "$35-$70" bleed recurred (rejected, as in prior runs).
- swimply.com: "Rancho Moonrise Pool - Private Pool in Manor", 40'x60' pool, tanning ledge, spa, 35-acre ranch; "rated highly", no numeric rating or count.
