# The Knot — 2026-05-31 RUN_043 (skipped)

**URL:** https://www.theknot.com/marketplace/rancho-moonrise-manor-tx-2087722
**Method:** SKIPPED — BLOCKER `theknot-direct-fetch` (opened RUN_037 2026-05-23, 7 consecutive prior timeouts through RUN_042).

Per BLOCKER resolution path (option c — "treat The Knot the same as Hotels.com; downgrade to a quarterly manual check"), this run does not re-attempt the direct WebFetch. Side-channel WebSearch is the documented fallback; see `web-search-snippets.md` for today's side-channel result (Haylee L. snippet did not surface in today's consolidated query — see that file for context).

**BLOCKER counter:** if re-attempted next run and timeout, would be 8 consecutive. Not re-attempted today.

**Note:** today's web-search side-channel did NOT surface the Haylee L. body text in the top-10 consolidated query. This is the first time since BLOCKER was opened that the side-channel did not surface the review excerpt in some form. A targeted Knot-specific WebSearch query (e.g., `"Rancho Moonrise" Knot Haylee review`) is the cheapest next-run check before drawing any "review removed?" inference — explicit no-attempt today.
