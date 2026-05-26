# The Knot direct fetch — 2026-05-26 RUN_040

URL: https://www.theknot.com/marketplace/rancho-moonrise-manor-tx-2087722
Method: WebFetch
Status: TIMEOUT (60s exceeded) — **6th consecutive failure**

## BLOCKER context

- BLOCKER `theknot-direct-fetch` opened RUN_037 (2026-05-23) when failure count hit 3 consecutive
- RUN_035 = 1st timeout, RUN_036 = 2nd, RUN_037 = 3rd (BLOCKER opened), RUN_038 = 4th, RUN_039 = 5th, **RUN_040 = 6th**
- RUN_034 (2026-05-19) was last successful direct fetch
- Working fallback: WebSearch surfaces review body text reliably

## WebSearch fallback this run

Query: `"Rancho Moonrise" "Haylee" review "The Knot"`

Result: Haylee L. review **CONFIRMED STILL LIVE** with full body surfaced including:
- Reviewer name "Haylee L." surfaced today in Rancho-attributed snippet (NOT in RUN_039 which only had body text via Facebook-query side channel)
- Post date: 2/26/2026
- Body: "neighboring property played extremely loud amplified music from early afternoon until after midnight, making it impossible to sleep on site or enjoy their time there. She learned that the venue has no ability to control or prevent this noise and cannot guarantee it wouldn't happen during a wedding weekend, and this risk was never disclosed to her before booking. Haylee stated she would never recommend this venue to a fellow bride or her own network in the event rental space."
- Owner response: NOT indexed in any search query → presumed still unreplied (day ~96 from 2/26 post date)

## Net effect

Drift detection on The Knot remains best-effort via WebSearch snippet. New-review enumeration NOT possible without direct fetch or Apify pull. Owner-reply state cannot be verified directly.
