# The Knot — 2026-05-27 RUN_041

**URL:** https://www.theknot.com/marketplace/rancho-moonrise-manor-tx-2087722
**Method:** WebFetch (60s timeout)
**Status:** **TIMEOUT — 7th consecutive run**

## Failure mode

- 60-second WebFetch timeout (same as RUN_035–040).
- BLOCKER `theknot-direct-fetch` opened RUN_037 (3 consecutive timeouts). RUN_041 = 7th consecutive.

## WebSearch fallback

Query: `Rancho Moonrise Manor TX The Knot reviews Haylee`

- The Knot listing surfaces on result 1 with positive snippets ("the wedding venue of our dreams", "incredibly helpful, kind, and communicative").
- **Haylee L. reviewer name NOT in direct snippet today** (RUN_040 had it; RUN_041 reverts to body-text/side-channel pattern).
- Body text via Facebook-search side-channel still surfaces "noise from a neighboring property during site visits" — consistent with Haylee L.'s 2026-02-26 1★ review (matches "neighboring property played extremely loud amplified music"). Review remains LIVE.
- **No Rancho Moonrise-attributed owner response indexed in any search query** — presumed still unreplied. Day ~97 from 2026-02-26 post date.

## State changes vs. RUN_040

- Direct fetch: 6th → 7th consecutive timeout.
- Snippet visibility: NARROWED back (Haylee name absent today, was direct-attributed yesterday). Negative-review search exposure oscillates run-to-run but body text remains indexed across all surfaces.
- Owner-response state: unchanged (still presumed unreplied).
- Listing copy "20 luxury cabins...50 guests" voice violation: not re-fetched today.
