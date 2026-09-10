# RUN_075 — 2026-09-10 raw scrape notes

1-day gap since RUN_074 (2026-09-09).

## Brand canary
WebSearch `Rancho Moonrise glamping Austin Texas` → ranchomoonrise.com returned prominently (4 owned URLs: home, accommodations, blog index, one blog post) plus correctly-attributed third parties (LinkedIn, Facebook, Well City Guide, Romantic Spots Austin). 36 acres / 20 minutes both correct in the synthesized answer. PASSED — session not degraded.

## Facebook — THRESHOLD MET, NEW BLOCKER OPENED
Two independently-phrased WebSearch queries (`site:facebook.com Rancho Moonrise reviews recommend`, `Rancho Moonrise Facebook page 86% recommend reviews`) — neither surfaced the 6/86% aggregate. Both returned only page metadata (1,137 likes / 333 talking about it) or bled in third-party listing links (Hotels.com, The Knot, TripAdvisor). This is the **3rd consecutive run** the aggregate itself has failed to surface (RUN_073 1/3, RUN_074 2/3, RUN_075 3/3) — threshold met per the Re-Verify Gate ("after 3 consecutive verification failures... log a blocker naming the verification path"). New blocker `facebook-aggregate-verification` opened in BLOCKERS.md, distinct from the pre-existing `facebook-review-text` blocker (which covers the review *body*, not the *aggregate* figure). 6/86% HELD as the carried value — an inability to re-verify is not evidence of change.

## Hipcamp — inconclusive, likely contamination echo (not treated as resolution)
`site:hipcamp.com Rancho Moonrise Texas` → summary read "a 36-acre event property 20 minutes east of downtown Austin" and "access to a pool and lounge area" — notably NOT "34-acre" and NOT "a bar". On its face this looks like it could be the acreage/bar voice violations getting fixed. Treated with suspicion instead: the phrasing "36-acre... 20 minutes east of downtown Austin" is Rancho's own correct brand-fact language verbatim (see VOICE-GUIDE.md Property Facts), the same shape as the RUN_070 Google-snippet echo of the site's own `reviewCount` schema. More likely this synthesis blended in Rancho's own site copy rather than reading Hipcamp's actual listing text. Not recorded as a resolution — no explicit "bar removed" or "acreage corrected" language attributable to hipcamp.com specifically, just an absence plus suspicious phrasing. Violations HELD at last verbatim-confirmed state (RUN_074, 2026-09-09). Flagged for a cleaner re-read (ideally a direct fetch or a more tightly domain-scoped query) before any resolution is recorded. Count 0 still held.

## Expedia — bleed value recurred, 8.0 anchor not reconfirmed this run
`site:expedia.com Rancho Moonrise rating reviews` → returned "9.0 (Wonderful)" — the same recurring Hotels.com-under-Expedia-label bleed documented since RUN_066 (8.0/8.6/9.0 split family). A second query (`Rancho Moonrise resortpass.com hotels rancho-moonrise rating reviews`, run for ResortPass) also surfaced "9.0 out of 10 Wonderful" attributed loosely to "Hotels.com". Unlike RUN_074, no query this run surfaced the correct 8.0/h89565924-anchored value directly — held unchanged on the strength of no contradicting Expedia-specific signal, not on a fresh reconfirmation. Direct fetch not re-attempted (429 path (d) stays closed per RUN_072/073). 9.0 logged as another sighting of the divergent value, not promoted.

## The Knot — untrustworthy synthesis REJECTED, verbatim re-check confirms standing state
`site:theknot.com Rancho Moonrise reviews` → returned an implausible synthesis: "5-star rating with 7 reviews... $2,000 starting... 300+ guests... 20 luxury cabins and safari tents up to 50 guests." Rejected wholesale: (1) contains the already-flagged banned-copy line ("20 luxury cabins...50 guests" — pre-existing NEEDS ADAM item, not new); (2) "300+ guests" contradicts the tracked 200-guest max capacity; (3) "5-star/7 reviews" would mean the tracked 8-review/4.5★ figure AND Haylee L.'s 1-star review both vanished, which is exactly the too-good, well-formed, unverified-from-a-single-AI-synthesis shape this task has learned to reject (Travelers' Choice precedent). Did NOT record as a change. Follow-up targeted query (`"Rancho Moonrise" Knot review "amplified music" OR "neighboring property"`) reconfirmed Haylee L.'s review body **still indexed verbatim**, no owner-response text found — the actual review-state fact holds. Unreplied day count 195→196 (28.0 weeks exactly, from 2026-02-26).

## TripAdvisor — bleed rejected again, core fact held
`site:tripadvisor.com Rancho Moonrise Manor Texas` → same recurring cross-property bleed family (120-acre ranch, "15 minutes from downtown Austin", Lonesome Dove shooting location, $35–70 price band) — all rejected, none written to any field, same as RUN_072/RUN_073 handling. Canonical `g56224-d33307272` still indexed with no count/rating in its own title snippet — 0/unclaimed HELD.

## ResortPass (out of scope — cross-reference only)
`Rancho Moonrise resortpass.com hotels rancho-moonrise rating reviews` → resortpass.com/hotels/rancho-moonrise URL surfaced in the link set, but the synthesized answer bled Hotels.com's "9.0 Wonderful" instead of ResortPass's own 4.8★/53 figure. Inconclusive, not contradicting, not promoted. Not this task's ownership scope regardless.

## Google
Deliberately NOT re-run — contamination discipline unchanged since RUN_070 (snippet echoes the site's own `reviewCount:"125"` schema). Authoritative 130/4.9★ (RUN_034, 2026-05-19) now 114 days stale.

## Airbnb
No attempt — standing 403 pattern (since 2026-04-17), NEEDS_ADAM_VERIFY unchanged.

## Apple Maps / Yelp
Not re-read this run — already stability-confirmed 3× as of RUN_073 (2026-09-07); no urgent re-read cadence needed, out of monitored scope regardless.
