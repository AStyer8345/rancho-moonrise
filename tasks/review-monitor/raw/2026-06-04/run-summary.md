# RUN_044 raw cache summary — 2026-06-04 06:30 CT (14:23 UTC)

## Live scrapes attempted
- **Apex / www / sitemap** — apex 200 + server:Vercel + cache HIT (age:406), www 308 → apex, sitemap 200
- **TripAdvisor** — WebFetch success. 0 reviews, unclaimed ("Is this your business?"), price range "$63 - $181 (Based on Average Rates for a Standard Room)"
- **Hotels.com / Expedia (direct)** — WebFetch TIMEOUT (60s). 42nd consecutive timeout. BLOCKER ongoing.
- **Hotels.com / Expedia (search snippet)** — 8.0 explicit inline ("solid guest review rating of 8.0"). Banned VOICE-GUIDE strings persist: "20 luxury cabins and safari tents for up to 50 guests" + "Austin's first glamping and events ranch". Same Dec 2025 pool quote pattern.
- **Facebook (direct)** — WebFetch returned truncated content (header only). No rating extractable.
- **Facebook (search snippet)** — "100% recommendation rating based on 5 reviews" — inline confirmed. 25th consecutive run inline.
- **Google (search snippet)** — WebSearch returned NO inline count for Google-targeted query — null. 7-run snippet history now 126→175→null→126→126→null→null (5 distinct states / 4 unique values; 2 consecutive null first time).
- **The Knot (direct)** — WebFetch NOT ATTEMPTED. BLOCKER `theknot-direct-fetch` ongoing (7 prior consecutive timeouts; 10th run no-attempt cycle).
- **The Knot (search snippet)** — Haylee L. review body still indexed verbatim ("neighboring property played extremely loud amplified music from early afternoon until after midnight, making it impossible to sleep on site or enjoy time there"). Reviewer name "Haylee" was IN the WebSearch query this run → name-presence ambiguous (cannot assert independent surfacing). Owner-response state: NOT indexed in any query result.
- **Hipcamp (direct)** — WebFetch NOT ATTEMPTED. BLOCKER `hipcamp-direct-fetch` opened 2026-06-03 (3 consec failures RUN_041-043). 1st no-attempt cycle run.
- **Hipcamp (search snippet)** — Listing still indexed at `hipcamp.com/en-US/land/texas-rancho-moonrise-dw9hklej`. Voice violations carry forward: "34-acre", "weddings up to 200 guests", "The Lodge on-site has beer, wine, and snacks". STALE:2026-05-26 (count/rating/voice-violations).
- **Agoda (direct)** — WebFetch x2 (en-ie + .com root variants). Both returned header-only. JS-rendered, no data. Listing remains `in_scope: false` per existing aggregate (discovered 2026-04-19); today's re-sighting is confirming, not a state change.
- **Airbnb** — Listing snippet still surfaces (`/rooms/1284193976615696223`, "Glamping Safari Tent 25 mins from downtown Austin - Yurts for Rent in Manor, Texas"). 403 BLOCKER ongoing — 43rd consec no-attempt.

## Done-log check
`grep -i "review\|cassie\|haylee\|butterfield" rancho-done-log.md` returned no review-related RESOLVED entry since `[2026-04-15 22:12] [rancho] rancho-review-replies`. Both RUN_034 carry-forward drafts presumed still unposted.

## State summary
- **11th consecutive quiet sweep** — no new reviews on any monitorable platform
- **TripAdvisor 4th consecutive run** at $63-$181 (stable since RUN_041 returned to RUN_001 baseline)
- **Google snippet null 2nd consecutive run** — 7-run history confirms unreliable baseline
- **Carry-forwards day 17 / ~day 19 (Cassie) and day 17 / ~day 98 (Haylee)** — both drafts unposted in monitor since RUN_034
- **No drafts produced this run** — no new reviews to draft against
