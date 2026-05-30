# Web search snippets — 2026-05-30 RUN_042

## Google reviews count/rating

**Query:** `Rancho Moonrise Manor Texas Google reviews rating 2026`

**Snippet result:** NO inline count surfaced. Search summary noted "search results did not include specific Google Reviews rating information for 2026." No "126 reviews" / "175 reviews" / any explicit number returned today.

**5-run distinct-state history:** 126 (RUN_037, stable 12 runs through RUN_038) → 175 (RUN_039) → null (RUN_040) → 126 (RUN_041) → **null (RUN_042)**. Snippet now confirmed as oscillating between 3 distinct states across 5 consecutive runs; demonstrably unreliable as authoritative count source.

**Authoritative count remains:** RUN_034 Chrome read of 130 / 4.9★ (now 11 days old). No fresher authoritative live read available without Places API key or another Chrome MCP pull.

## Expedia / Hotels.com rating

**Query:** `Rancho Moonrise Manor Hotels.com Expedia rating reviews`

**Snippet result:** "solid guest review rating of 8.0" — CONFIRMED INLINE 12th consecutive run. 19 of last 20 runs surface 8.0 inline (only RUN_029 was a one-run dip).
- Hotels.com listing URL ho2867109568 still active in results.
- Hotels.com direct fetch NOT attempted (BLOCKER `hotels-com-direct-fetch` ongoing — would be 40th consecutive timeout if attempted).

## Facebook recommend snippet

**Query:** `Rancho Moonrise Facebook recommend reviews Manor TX`

**Snippet result:** "100% recommend rating with 5 reviews" — CONFIRMED INLINE 23rd consecutive run. Stable since RUN_018 one-run dip.

## The Knot — Haylee L. review (side-channel surface)

Surfaced in the Facebook-query result set today as a cautionary review snippet: "a neighboring property played extremely loud amplified music, making it impossible to sleep, and the venue has no ability to control or prevent this, with the risk never disclosed before booking."

- Body text remains LIVE-indexed.
- Reviewer name "Haylee L." NOT direct-attributed in any query today (RUN_041 pattern repeats; RUN_040 had it direct, before/after do not).
- Owner-response state: no Rancho Moonrise-attributed response indexed in any query — presumed still unreplied. Day ~100 from 2026-02-26 post date.
