# Web search snippets — 2026-05-26 RUN_040

## Google reviews count/rating

**Queries tried:**
1. `"Rancho Moonrise" Google reviews rating count Manor Texas 2026`
2. `"Rancho Moonrise" Google Maps reviews stars Manor Austin`

**Snippet result:** NO COUNT SURFACED THIS RUN. Neither query returned an inline "X reviews on Google" number.

**STATE CHANGE vs RUN_039:** RUN_039 surfaced "175 reviews" (which itself was a STATE CHANGE breaking the 12-consecutive-run stable baseline of 126). RUN_040 surfaces neither 126 nor 175 nor any explicit number — a third distinct snippet state in 3 consecutive runs.

**Conclusion:** WebSearch snippet is unreliable as authoritative count source. The snippet baseline of 126 (12 runs) has been broken in both successor runs (RUN_039=175, RUN_040=null). Live count of 130 from RUN_034 Chrome read remains the most recent authoritative value (now 7 days old).

## Expedia / Hotels.com rating

**Query:** `"Rancho Moonrise" Hotels.com rating "8.0" Manor`

**Snippet result:** "solid guest review rating of 8.0" — CONFIRMED INLINE 10th consecutive run.
- 17 of last 18 runs have surfaced the 8.0 value inline (only RUN_029 was a one-run dip)
- Hotels.com listing URL ho2867109568 still active in results
- Single review quote also surfaced: "The pool was super well kept and pretty chill, with just us there for a part of it which we loved" (Dec 2025)
- Hotels.com direct fetch not attempted this run (BLOCKER ongoing — 38 prior consecutive timeouts; this would be 39th if attempted)

## Facebook

**Query:** `"Rancho Moonrise" Manor Texas Expedia Hotels.com Facebook reviews 2026`

**Snippet result:** "Facebook shows 100% recommend with 5 reviews" — CONFIRMED INLINE 21st consecutive run.

## The Knot — Haylee L. review

**Query:** `"Rancho Moonrise" "Haylee" review "The Knot"`

**Snippet result:** Reviewer name "Haylee L." surfaced in Rancho-attributed snippet today. Full review body text indexed. Post date 2/26/2026 confirmed. No owner-response indexed. STATE: still_true (day ~96 unreplied).

**Diff vs RUN_039:** Reviewer name "Haylee L." surfaced TODAY in direct Rancho-attributed snippet, whereas RUN_039 only surfaced body text via Facebook-query side channel. Visibility of the bad review across search continues to widen (not narrow).
