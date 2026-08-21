# RUN_071 — raw scrape notes — 2026-08-21

Cached per master-agent.md step 1. Verbatim reads only; interpretation lives in the run-log.

## Brand canary (mandatory guard, run FIRST)

Query: `Rancho Moonrise` (unrestricted)
Result: **PASSED** — `ranchomoonrise.com` returned, plus correctly-attributed third-party
listings (yelp.com, do512.com, hotels.com/ho2867109568, linkedin.com,
theknot.com/…-2087722, facebook.com/p/…100083582071947, expedia.com/…h89565924,
romanticspotsaustin.com).
Session NOT degraded → absences recorded this run are real.

Blended-summary warning (NOT recorded anywhere): the canary's synthesized answer again
mixed the syndicated Knot/Hotels.com copy *"20 luxury cabins and safari tents for up to 50
guests"* with the site's own *"36 acres"*. Same blend `rancho-site-daily` confirmed on The
Knot 2026-08-19. Used for canary purposes only.

## ResortPass — DIRECT FETCH, HTTP 200 — RATING BLOCK RENDERED

URL: https://www.resortpass.com/hotels/rancho-moonrise
- Overall rating: **4.8**
- Total reviews: **53**
- Products: Half-Day Pass from **$15**; Day Pass from **$20** (2 products)
- Individual review text: *"No individual reviews with reviewer names and dates are present"*
- Owner/host responses: *"No owner or host responses to reviews appear on this page"*

→ Identical to the values held since 2026-08-17. The RUN_070 non-render was an
extraction failure, exactly as classified. Nothing changed.

## Facebook — WebSearch, domain-restricted to facebook.com

Query: `Rancho Moonrise Manor Texas Facebook reviews recommend`
Verbatim: *"an 86% recommendation rate based on 6 Facebook reviews"*
Also returned: address 20117 Lockwood Rd, phone (737) 291-1260, ranchomoonrise.com.
→ 6 / 86% — **4th consecutive confirmation**, first one on a domain-restricted query.
→ Review BODY still not surfaced. No draft possible. Direct fetch not attempted
   (blocker `facebook-review-text` open since 2026-08-19; no contradicting signal).

## Expedia — DIRECT FETCH FAILED

URL: https://www.expedia.com/Manor-Hotels-Rancho-Moonrise.h89565924.Hotel-Information
Result: **HTTP 429 Too Many Requests**, response body not retrieved.
→ 3rd consecutive 429 (RUN_069, RUN_070, RUN_071). Threshold met → BLOCKER OPENED.

## Expedia — WebSearch, domain-restricted to expedia.com (THIRD phrasing)

Query: `"Rancho Moonrise" Manor how many verified guest reviews total rating out of 10`
Verbatim: *"Rancho Moonrise has a rating of 8.0 out of 10 with 6 verified guest reviews."*
→ count **6** confirmed a 3rd time, 3rd distinct phrasing, bound to entity h89565924.
→ 8.0 anchor re-confirmed.
→ The RUN_070 promotion precondition ("a third differently-phrased confirmation") is MET.
   Promotion still WITHHELD — see run-log; hard rule requires a direct scrape and the
   direct path is now a blocker.

## The Knot — WebSearch, domain-restricted to theknot.com

Query: `Rancho Moonrise Manor TX wedding venue reviews owner response Haylee`
Negative review body still indexed, verbatim: *"during their site visit, a neighboring
property played extremely loud amplified music from early afternoon until after midnight,
and the venue has no ability to control or prevent this and cannot guarantee it wouldn't
happen during a wedding weekend."*
Owner response: **none found** — result explicitly could not locate any owner response.
Positive review content ALSO surfaced (consistent with 8 @ 4.5★, not a new-review signal):
*"wedding venue of our dreams"*, *"breathtaking setting"*, staff *"went above and beyond"*.
Count/rating did NOT surface inline → 8 @ 4.5★ HELD, not re-read.
Direct fetch not attempted (blocker, failure count 8; no contradicting signal).

## TripAdvisor — WebSearch, domain-restricted to tripadvisor.com

Query: `Rancho Moonrise Manor Texas campground reviews rating`
Canonical listing g56224-d33307272 still indexed as
*"RANCHO MOONRISE - Prices & Campground Reviews (Manor, TX)"*.
**NO count and NO rating in snippet** → consistent with 0 / unclaimed. HELD.

REJECTED — *"Travelers' Choice award … ranked within the top 10% of properties"*.
This is the **RUN_061 artifact recurring — 2nd sighting**. A 0-review unclaimed listing
cannot hold an award defined by consistently great reviews; it is a page-template /
cross-listing string. RUN_062 already confirmed it transient. NOT recorded.

REJECTED — *"about 15 minutes from downtown Austin"*. Rancho is 20 minutes. Same
cross-property bleed documented RUN_070 (Moon River Ranch, Moonrise Resort FL,
Moonrise Camp Wadi Rum, Manor RV Park CO all in this result set again).

## Hipcamp — WebSearch, domain-restricted to hipcamp.com

Query: `Rancho Moonrise Texas ranch listing description reviews`
Voice violation 1, verbatim: *"Rancho Moonrise is a **34-acre ranch** just outside of
vibrant Austin, Texas"* — VOICE-GUIDE.md:271 says 36 acres. Site verified clean 183/183
by `rancho-site-daily` 2026-08-18, so the drift is Hipcamp's alone.
Voice violation 2, verbatim: *"an inviting pool, **a bar**, and a cozy lounge area"* —
Neon Moon Barn Lounge is event-only, not a walk-in bar.
→ Both **re-confirmed 5th consecutive run**, domain-restricted.
No review count on any Hipcamp-attributed result → **0 HELD**.
Direct fetch not attempted (blocker `hipcamp-direct-fetch`; no contradicting signal).
Note: "Stargazing @ Moonrise Ranch" (Mountain Center, CALIFORNIA) again in the result set
— the known bleed source. Description content above is unambiguously Rancho-attributed.

## Hotels.com / Agoda — WebSearch, domain-restricted

Query: `Rancho Moonrise Manor guest reviews rating Wonderful pool`
Both listings still active: hotels.com/ho2867109568, agoda h82700060 (+ en-ie, en-gb variants).
Re-surfaced the known 2026-07-11 review: *"The pool was super well kept and pretty chill,
with just us there for a part of it which we loved."* — already recorded RUN_068, positive,
no draft required. NOT a new review.
**Neither 9.0 nor 8.6 surfaced inline this run** → split NOT re-confirmed; both carried
unchanged. Confirmation counter NOT incremented.

## Google — path deliberately NOT re-run

RUN_070 established the WebSearch snippet path is partly an ECHO of the site's own
`reviewCount: "125"` at `site/index.html:90`. Re-running the query that produced the
contamination would re-inject a self-referential number. Not attempted, by design.
Authoritative 130 / 4.9★ (RUN_034 Chrome MCP, 2026-05-19) is now **94 days stale**.

## Root done-log — reply-state signal

`grep` of `rancho-done-log.md`: last review-reply resolution remains
`[2026-04-15 22:12] [rancho] rancho-review-replies — RESOLVED | Post 9 Google review replies`.
No Cassie entry. No Haylee entry. → google unreplied=1, the_knot unreplied=1 HELD.

## Airbnb — no attempt

403 pattern established 2026-04-17; 71st consecutive no-attempt run. NEEDS_ADAM_VERIFY stands.
