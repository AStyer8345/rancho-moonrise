# The Knot — 2026-05-30 RUN_042

**URL:** https://www.theknot.com/marketplace/rancho-moonrise-manor-tx-2087722
**Method:** Direct WebFetch NOT attempted this run
**Status:** BLOCKER `theknot-direct-fetch` remains open (opened RUN_037, 3 consecutive timeouts; ran RUN_035–RUN_041 = 7 consecutive timeouts including untracked attempts)

## Decision

Skipped direct fetch attempt today — pattern (60s timeout) has held for 7 consecutive prior runs. Continuing to attempt against a known-broken path during a quiet maintenance sweep would burn 60s and produce zero new signal. Per Re-Verify Gate "when live verification fails": tag findings STALE:<last-verified-date> rather than assume.

## WebSearch fallback (side-channel)

Haylee L. body text surfaced via Facebook-query side channel today (see `web-search-snippets.md`). Reviewer name NOT direct-attributed in any query. Owner-response state remains presumed unreplied (no Rancho Moonrise-attributed response indexed in any query).

## State

- **Haylee L. 1★ review (2026-02-26):** STALE:2026-05-27 (RUN_041 confirmed body text live + presumed-unreplied). Body text remains live-indexed in side-channel queries today; reviewer name visibility oscillates. Day ~100 since post date.
- **New reviews since RUN_034:** cannot enumerate via WebSearch — would require direct fetch or Apify pull. NEEDS ADAM action carries forward unchanged.
- **Owner-response state:** presumed still unreplied. Last confirmed RUN_034 (live), now 11 days stale.

## Resolution path unchanged

Per BLOCKERS.md `theknot-direct-fetch`: (a) Apify or rendering scraper periodic pull, OR (b) Adam manual browser spot-check every ~2 weeks, OR (c) downgrade to quarterly manual check matching Hotels.com pattern. All three remain Adam-owned decisions.
