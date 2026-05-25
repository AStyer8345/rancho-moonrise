# The Knot — RUN_039 raw snapshot — 2026-05-25

**URL:** https://www.theknot.com/marketplace/rancho-moonrise-manor-tx-2087722
**Method:** WebFetch (primary), WebSearch (fallback)
**Status:** PRIMARY=TIMEOUT (60s); FALLBACK=PARTIAL via WebSearch

## Primary verification path

- WebFetch returned timeout after 60 seconds — **5th consecutive timeout** (RUN_035 = 1st, RUN_036 = 2nd, RUN_037 = 3rd opened BLOCKER, RUN_038 = 4th, RUN_039 = 5th).
- BLOCKER `theknot-direct-fetch` (opened 2026-05-23 RUN_037) remains active.

## Fallback verification (WebSearch)

Today's Facebook-query WebSearch surfaced the Haylee L. review body text again:
- "One guest experienced loud amplified music from a neighboring property"
- "the venue has no ability to control or prevent this and cannot guarantee it won't happen during events"

This continues to confirm the Haylee L. review remains LIVE on the indexed listing. Today's snippet did NOT include the reviewer name "Haylee" in any Rancho-attributed result (consistent with RUN_036 onward).

## Inferences

- Haylee L. 1★ review (posted 2026-02-26) → presumed STILL unreplied at day ~95 (from 2026-02-26).
- No Rancho-attributed owner response surfaces in any search query.
- Aggregate listing rating, total review count, and any new reviews since RUN_034 cannot be re-verified via this path.

## Resolution path (unchanged)

(a) Apify or other rendering scraper as periodic pull;
(b) Adam manually opens listing every ~2 weeks for spot-check;
(c) Treat The Knot like Hotels.com — accept search-snippet confirmation as "likely unchanged" and downgrade to quarterly manual check.
