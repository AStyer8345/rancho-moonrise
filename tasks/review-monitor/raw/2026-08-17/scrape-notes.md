# RUN_068 raw scrape notes — 2026-08-17

## ResortPass — DIRECT FETCH, HTTP 200 (WORKING PATH)

`https://www.resortpass.com/hotels/rancho-moonrise` — WebFetch, 200, cleanly parseable.

- Overall rating: **4.8**
- Total reviews: **53**
- Products: Half-Day Pass from $15 · Day Pass from $20 (2 products)
- Individual review text: **absent from the listing page** (reviews section referenced in nav but not rendered)
- `/reviews` subpath: **HTTP 404** — no enumerable per-review path found

Prior state (from `rancho-competitive-weekly` live read 2026-07-15, logged in
`run-logs/2026-08-17-competitive.md`): **4.9★ / 45 reviews**, 4 products.

→ Delta: **+8 reviews, −0.1★**. Independently confirmed twice on 2026-08-17
(this task's own fetch + the competitive task's fetch, same values).

## Facebook — count change, 3 independent search confirmations

Direct fetch of `facebook.com/p/Rancho-Moonrise-100083582071947/` returned **title only**
(JS-gated, no review data) — enumeration failed, 1st consecutive failure.

Search snippets, three independent queries, all agreeing:
- q1 `"Rancho Moonrise" facebook reviews recommend` → "86% recommendation rate based on 6 reviews"
- q2 `Rancho Moonrise Manor TX Facebook page reviews "recommendation"` → "86% recommend with 6 reviews"
- q3 (tripadvisor-targeted query, incidental) → "86% recommendation rating (based on 6 reviews)"

Prior: **5 reviews / 100% recommend**, stable 48 consecutive runs.

Arithmetic note: 5/6 = 83.3%, not 86% (6/7 = 85.7%). Facebook's displayed
percentage does not land cleanly on 6 reviews. Direction is unambiguous
regardless — recommend rate fell from 100%, so at least one non-recommend now
exists where there were zero. Count recorded as 6, pct as 86, both as-displayed.

**Individual review text NOT obtainable** — no draft written (hard rule: never fabricate).

## Google

Snippet this run: **126 reviews / 4.9★** (oscillated back down from 175 at RUN_067).
Snippet has now printed 126, 130, and 175 across runs — not a proxy in either direction.
Live-authoritative 130 (2026-05-19, Chrome MCP GBP dashboard) now **90 days stale**.
Direct scrape not attempted — `google-reviews-count` BLOCKER since 2026-04-17.

## Hotels.com / Expedia / Agoda — split re-confirmed, 3rd consecutive run

- `expedia.com/…h89565924` → **8.0** ("a solid guest review rating of 8.0")
- `hotels.com/ho2867109568` → **9.0 "Wonderful"**
- `agoda.com/…h82700060` → **8.6/10**, with a distinct review quote:
  "Unique Stay and the staff was so kind! I loved the drive in it's so beautiful —
  trip into downtown Austin was easy!"
- **NEW dated review surfaced on hotels.com, 2026-07-11:**
  "The pool was super well kept and pretty chill, with just us there for a part of it which we loved."

8.0 anchor **NOT overwritten** — no fresh direct scrape (hotels.com direct fetch =
BLOCKER, 43rd no-attempt run). Count remains null.

## The Knot

Haylee L. 1★ (2026-02-26) **still live**, body text still indexed verbatim.
No owner response surfaces on any query. **172 days / ~24.6 weeks unreplied.**
Count/rating 8 @ 4.5★ carried. Direct fetch not attempted (BLOCKER, 34th no-attempt run).

## TripAdvisor

Canonical `g56224-d33307272` still indexed as "RANCHO MOONRISE - Prices & Campground
Reviews (Manor, TX)". No count/rating in snippet → **0 / unclaimed HELD**.
Direct fetch not attempted (BLOCKER, 3rd no-attempt run).

## Hipcamp

Listing `texas-rancho-moonrise-dw9hklej` still indexed. No review count surfaced →
**0 HELD**. Direct fetch not attempted (BLOCKER, no-attempt cycle 2).

Voice/data violations **re-confirmed live in snippet**:
- "**34-acre** ranch just outside of vibrant Austin" (VOICE-GUIDE says 36; site data field says 37)
- "a refreshing pool, **a bar**, and cozy lounge areas" (Neon Moon Barn Lounge is event-only, not a walk-in bar)

## Airbnb

403 BLOCKER — not attempted, 67th run.
