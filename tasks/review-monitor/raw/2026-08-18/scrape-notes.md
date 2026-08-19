# RUN_069 — raw scrape notes (2026-08-18)

All paths below are the **harness tools** (`WebFetch` / `WebSearch`), not `curl`. Per
`client-ops/templates/re-verify-before-report.md` (updated 2026-08-18), bare curl is bot-detected
and the harness path is the working one.

**Brand canary:** every WebSearch this run returned `ranchomoonrise.com` and the correct
Rancho-attributed third-party listings (theknot 2087722, tripadvisor g56224-d33307272,
hotels.com ho2867109568, expedia h89565924, hipcamp dw9hklej, facebook 100083582071947).
Session is **not** degraded — absence findings below are recordable.

---

## ResortPass — DIRECT FETCH, HTTP 200, WORKING PATH

`https://www.resortpass.com/hotels/rancho-moonrise`

Verbatim:
- Rating block: `4.8 (53)` — **53 reviews @ 4.8★**
- Products: `Half-Day Pass — From $15`, `Day Pass — From $20` (**2 products**)
- Individual review text: **not present** on the listing page
- Owner/hotel responses: **not shown**

**Delta vs RUN_068 (2026-08-17): NONE.** 53 @ 4.8 confirmed a second consecutive day, from an
independent fetch. This is now a **2nd independent confirmation** on top of
`rancho-competitive-weekly`'s same-morning read on 8/17 — three reads, one value.

Per-review enumeration still **BLOCKED** — the page renders the aggregate only, and
`/hotels/rancho-moonrise/reviews` is a 404 (unchanged from RUN_068). Reply coverage stays `null`,
**not** zero.

---

## Facebook — 6 / 86% recommend, CONFIRMED 2nd consecutive run; text still unobtainable

WebSearch (2 independent queries) both returned: **"86% recommendation rate based on 6 Facebook
reviews."** Matches RUN_068 exactly.

Direct fetch `https://www.facebook.com/p/Rancho-Moonrise-100083582071947/` returned the page
**title only** — no review count, no percentage, no review bodies. **Enumeration failure count 1 → 2.**

**Attribution guard — this is the important part of today's Facebook check.** Two separate searches
surfaced negative review prose in the same result set as the Facebook figure:

> "a neighboring property played extremely loud amplified music from early afternoon until after
> midnight… they have no ability to control or prevent this"
> "I would never recommend this venue to a fellow bride or my own network in the event rental space."

That is **Haylee L.'s The Knot review** (2026-02-26), already tracked. It is **not** Facebook review
content. The summarizer places it adjacent to the Facebook figure because both are the negative
signal on the property — exactly the blending failure mode documented at RUN_066 (Hipcamp) and
RUN_068. **Not recorded as the Facebook review text. No draft written.**

The Facebook non-recommend body remains unknown after two runs of trying. It is a 60-second
lookup for whoever holds the Page.

---

## Google — snippet 126 (2 runs stable); authoritative 130 now 91 days stale

WebSearch: "4.9-star rating across 125+ Google reviews… another source indicates 126 reviews."
Snippet value **126**, same as RUN_068. Stability counter 0 → **1**.

Observed snippet history remains 126 / 130 / 175 — still **not a count proxy in either direction**.

**New path attempted this run (first time):** direct fetch of the Google Travel entity page
`google.com/travel/hotels/entity/ChoI2Z_U1dC__dyVARoNL2cvMTFxOTlwMWNqeRAB`. Returned
**content truncated — no numbers extractable**. Logging it so no future run burns a call on it.
Path count for `google-count`: WebFetch GBP page (dead), WebSearch snippet (unreliable),
Google Travel entity (**dead, new**).

Live-authoritative **130** carries from the RUN_034 Chrome MCP read, **2026-05-19 → 91 days old**.

---

## The Knot — no-attempt cycle DELIBERATELY BROKEN on a contradicting signal; fetch failed

A WebSearch summary this run asserted: *"I found a review on The Knot for Rancho Moonrise with an
owner response."* That directly contradicts the standing claim ("no owner response anywhere"), and
per the Re-Verify Gate a contradicting signal forbids assuming the claim still holds.

**34-run no-attempt cycle broken. Direct WebFetch attempted:** `timeout of 60000ms exceeded`.
Same failure mode as RUN_035–041. **theknot-direct-fetch failure count 7 → 8.** No-attempt cycle
resets to 0.

**Claim HELD, not resolved.** The summarizer's own follow-on sentence retracted it ("the search
results don't show a specific owner response"), and no owner-response text surfaced on any query.
Haylee L. body text still indexed verbatim on a name-free query → review still live.
**173 days / ~24.7 weeks unreplied.**

---

## Expedia / Hotels.com — first direct attempt on the expedia.com entity; HTTP 429

`https://www.expedia.com/Manor-Hotels-Rancho-Moonrise.h89565924.Hotel-Information` →
**HTTP 429 Too Many Requests.** New failure mode for this cluster (the 43-failure blocker on record
is against *hotels.com*; this was the expedia.com entity). Rate-limit, not a hard block — worth one
retry on a future run before calling it a blocker.

**The 8.0 anchor was NOT overwritten** — no fresh direct scrape succeeded. Three-entity split
carries unchanged: expedia `h89565924` → 8.0, hotels.com `ho2867109568` → 9.0, agoda `h82700060`
→ 8.6. Search results this run again showed "around 9.0 out of 10" for the hotels.com entity,
consistent with the split. **4th consecutive run holding.**

---

## Hipcamp — 0 HELD; both voice violations RE-CONFIRMED LIVE (3rd consecutive run)

WebSearch returned listing copy verbatim:
- **"a 34-acre ranch"** — VOICE-GUIDE.md:271 says **36 acres** ("not 20, not 31"). Site itself is
  clean at 183/183 instances (verified 8/18 by `rancho-site-daily`) — **the drift is Hipcamp's alone.**
- **"a refreshing pool, a bar, and a cozy lounge area"** — the Neon Moon Barn Lounge is
  event-only, not a walk-in bar.

Review-content quotes in the same result set ("The pool was super well kept…") are **Hotels.com**
review content, not Hipcamp — same blending pattern as RUN_066. **Count HELD at 0.**
Direct fetch not attempted (blocker `hipcamp-direct-fetch`, no-attempt cycle 2 → 3; no contradicting
review-content signal this run to justify breaking it).

---

## TripAdvisor — 0 / unclaimed HELD

WebSearch: canonical `g56224-d33307272` still indexed as *"RANCHO MOONRISE - Prices & Campground
Reviews (Manor, TX)"*, **no count or rating in the snippet** — consistent with 0/unclaimed.
Direct fetch not attempted (blocker `tripadvisor-direct-fetch`, 4th no-attempt run).
Price band carries `$45–$154` **STALE:2026-06-30** — immaterial, it is an algorithmic rate estimate,
not a review signal.

---

## Airbnb — 68th consecutive no-attempt

403 pattern established since 2026-04-17. Not attempted. `NEEDS_ADAM_VERIFY` standing.

---

## Net

**No new reviews on any platform. No count or rating moved in either direction, on any platform,
day over day.** Every one of yesterday's two movements (ResortPass, Facebook) re-confirmed at the
same value from an independent read — they were real, and they have settled.
