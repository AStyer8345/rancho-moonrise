# The Knot — Live Verification — 2026-05-21T17:50Z

**Direct fetch URL:** https://www.theknot.com/marketplace/rancho-moonrise-manor-tx-2087722

**Direct fetch result:** TIMEOUT (60s) — 2nd consecutive timeout (RUN_035 was 1st). Not yet a 3-consecutive blocker.

**Fallback method:** WebSearch (two queries).

## Query 1: `"Rancho Moonrise" "Haylee" The Knot review wedding`
- Listing surfaced as 1st result.
- Review text surfaced: "during their site visit, a neighboring property played extremely loud amplified music, and the venue has no ability to control or prevent this and cannot guarantee it wouldn't happen during a wedding weekend." — matches Haylee L. 2026-02-26 1★ review identified in RUN_034.
- "Haylee" name attribution NOT in today's snippet — search surfaced the review text without the reviewer name. RUN_035 successfully surfaced the name; today did not. Review IS still live (text quoted).
- No Rancho Moonrise-attributed owner response indexed (the "Haylee" name in the search results refers to The Old Rancho Carlsbad — a different venue — same false-positive pattern as RUN_035).

## Query 2: `"Rancho Moonrise" The Knot reviews 2026 Manor TX`
- Listing surfaced as 1st result.
- "loud amplified music / no ability to control" review STILL SURFACES — review remains live.
- Voice violation in The Knot listing copy persists: "It contains 20 luxury cabins and safari tents for up to 50 guests." (VOICE-GUIDE: no "luxury", no specific unit count.)
- No 2026 owner-response strings surfaced.

## Verification outcome
- **Haylee L. 1★ review state:** review-text-surfaced, no-reply-indexed — still presumed unreplied. ~13 weeks since 2026-02-26 post date.
- **theknot-direct-fetch failure counter:** 2 consecutive (need 3 to log to BLOCKERS.md).
