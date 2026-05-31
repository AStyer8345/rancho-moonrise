# Web search snippets — 2026-05-31 RUN_043

## Consolidated query

**Query:** `Rancho Moonrise Manor Texas Google reviews rating Hotels.com Facebook 2026`

## Google reviews count/rating

**Snippet result:** NO specific Google count surfaced — search summary stated "The search results don't provide a specific Google reviews rating for Rancho Moonrise, though Google reviews likely exist for this property."

**6-run distinct-state history:** 126 (RUN_037, stable 12 runs through RUN_038) → 175 (RUN_039) → null (RUN_040) → 126 (RUN_041) → null (RUN_042) → **null (RUN_043)**. Snippet now NULL in 3 of last 4 runs; oscillation confirmed across 3 distinct states; snippet baseline remains dead.

**Authoritative count remains:** RUN_034 Chrome read of 130 / 4.9★ (now 12 days old). No fresher authoritative live read available without Places API key or Chrome MCP pull.

## Expedia / Hotels.com rating

**Snippet result:** "guest review rating of 8.0" — CONFIRMED INLINE 13th consecutive run. Hotels.com listing URL `ho2867109568` still active in result set.

- Hotels.com direct fetch NOT attempted (BLOCKER `hotels-com-direct-fetch` ongoing — 41st consecutive no-attempt if attempted).

## Facebook recommend snippet

**Snippet result:** "100% recommend rating with 5 reviews" — CONFIRMED INLINE 24th consecutive run. Stable since RUN_018 one-run dip.

## The Knot — Haylee L. review (side-channel surface)

**Snippet result:** Today's consolidated query did NOT surface the Haylee L. body-text snippet (no "neighboring property...amplified music" excerpt in the top-10 result set; The Knot URL was present in the link list but no expanded snippet returned).

- Body text live-indexed status: cannot confirm/deny today; absence in this consolidated query is not evidence of removal (it was a non-targeted query — RUN_044 should run a Knot-specific query to re-check before any state-change claim).
- Reviewer name "Haylee L." NOT in snippet today (consistent with RUN_041/RUN_042 pattern; RUN_040 was the outlier with direct attribution).
- Owner-response state: no Rancho Moonrise-attributed response indexed in any query — presumed still unreplied. Day ~105 from 2026-02-26 post date.

## Other URLs surfaced (no state change)

- Agoda listing `h82700060` — surfaces in result set, no scrape attempted (out of monitored scope; no prior state to compare)
- Yelp listing — surfaces, no scrape attempted (no prior tracked claim)
- ranchomoonrise.com apex — surfaces, hero copy "Glamping & Events Ranch Near Austin TX" consistent with VOICE-GUIDE
- romanticspotsaustin.com aggregator — surfaces, not a Rancho-controlled surface
