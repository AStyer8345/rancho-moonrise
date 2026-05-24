# The Knot live snapshot — 2026-05-23 (RUN_037)

URL: https://www.theknot.com/marketplace/rancho-moonrise-manor-tx-2087722
Method: WebFetch
Status: **TIMEOUT (60s) — 3rd consecutive direct-fetch failure**

## BLOCKER triggered
- RUN_035 (2026-05-20) = 1st timeout
- RUN_036 (2026-05-21) = 2nd timeout
- RUN_037 (2026-05-23) = **3rd consecutive timeout → triggers BLOCKER entry**
- Logging to `tasks/review-monitor/BLOCKERS.md` as `theknot-direct-fetch`

## WebSearch fallback signal
- Query 1: `"Rancho Moonrise" "Haylee" OR "neighboring property" "amplified music" knot review`
  - Surfaces The Knot listing as #1 result
  - Review body text still indexed: "neighboring property played extremely loud amplified music from early afternoon until after midnight"
  - "If the level of neighboring sound occurred during their wedding weekend, it would have easily ruined the entire event"
  - Reviewer name "Haylee" appears in unrelated result (Haylee Pham — TikTok book reviewer); within the Rancho Moonrise context the snippet uses third-person ("The reviewer recommends...") — name not directly attributed in body of result for this query
- **Owner response state:** no Rancho Moonrise-attributed response indexed in any of today's queries — Haylee L. presumed STILL unreplied (day ~93 of the project's running count from 2026-02-26)

## Carry-forward listing copy violation (not re-fetched today)
- "20 luxury cabins and safari tents for up to 50 guests" — VOICE-GUIDE violations: "luxury" banned, specific unit count banned, capacity claim
