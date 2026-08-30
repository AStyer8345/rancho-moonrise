# Review Monitor — Blockers

Append-only. If a live verification path fails 3 consecutive runs for the same claim, log it here with the claim-id, path, and failure summary.

---

## BLOCKER: google-reviews-count — live scrape failed 3 consecutive runs

- **Claim:** Google review count and rating (currently 127 @ 4.9★, last verified 2026-04-09)
- **Verification path attempted:** WebFetch of public Google Maps/GBP listing page
- **Failure mode:** JS-rendered page — content not present in fetched HTML; would need a headless browser or Places API key to read live data
- **Consecutive failures:** 3 (RUN_001 2026-04-15, RUN_002 2026-04-16, RUN_003 2026-04-17)
- **Status:** Claim remains STALE. Unreplied count remains verifiable via done-log (currently 0, RESOLVED by Adam 2026-04-15).
- **Resolution path:** Either (a) Adam provides a Google Places API key so the agent can call `places.googleapis.com/v1/places/{placeId}?fields=reviews,rating,userRatingCount`, or (b) accept the done-log signal for unreplied=0 and mark the count/rating as "stale, trusted until GBP monthly email arrives." Surfacing here for Adam's decision.
- **Logged:** 2026-04-17
- **Update 2026-08-30 (RUN_072) — the Googlebot-UA lead is TRIED and CLOSED.** `rancho-site-daily` established on 2026-08-25 that Google Maps serves a JS shell to `WebFetch` *and* to a default `curl` UA, and that **only a Googlebot UA renders the page title** — it used that to derive and confirm the canonical GBP entity from the `fid` in `memory/reference_rancho_gbp.md`. This task had **never tried that UA**, so it was a genuinely untried path on the oldest blocker here, not a retry of a known-dead one. Tried today: `curl -A "…Googlebot/2.1…" "https://www.google.com/maps?cid=10788924849497903065"` → **HTTP 200, 4,160 bytes**. The title renders (`<title>Rancho Moonrise - Google Maps</title>`) and so does `content="View details about Rancho Moonrise on Google Maps"`. **Zero** `rating`/`review`/`aggregateRating`/`reviewCount` tokens appear anywhere in the document; there is no `/maps/place/` canonical in the body and `url_effective` does not redirect. **Conclusion: the Googlebot UA unlocks entity identity only, never review data.** Recorded as a **closed lead** so no future run spends a fetch on it expecting a count. It remains the correct path for confirming *which* GBP entity is ours. Authoritative 130 @ 4.9★ is now **103 days stale**; the search-snippet path stays retired (RUN_070 proved it echoes the site's own `reviewCount:"125"`) and was deliberately not re-run for the 2nd consecutive run. Resolution paths (a) and (b) are unchanged and are still the only two.

---

## BLOCKER: hotels-com-direct-fetch — timeout 3 consecutive runs

- **Claim:** Expedia/Hotels.com current rating for Rancho Moonrise (currently 8.0, last confirmed 2026-04-09)
- **Verification path attempted:** WebFetch of `https://ca.hotels.com/ho2867109568/` (and previously `https://www.hotels.com/ho2068001/rancho-moonrise-manor-united-states-of-america/`)
- **Failure mode:** 60s fetch timeout — site appears to block or rate-limit automated HTTP requests
- **Consecutive failures:** 3 (RUN_001 2026-04-15, RUN_002 2026-04-16, RUN_003 2026-04-17)
- **Status:** Claim STALE:2026-04-09. Rating likely still ~8.0 but unverifiable by this agent.
- **Resolution path:** WebSearch confirms the listing is still active; accept search-snippet confirmation as "likely unchanged" and downgrade Hotels.com to a quarterly manual check. No action needed by Adam unless rating matters imminently.
- **Logged:** 2026-04-17

---

## BLOCKER: airbnb-listing-existence — unverifiable 3 consecutive runs

- **Claim:** Whether `airbnb.com/rooms/1284193976615696223` is a Rancho Moonrise listing (April 9 baseline said no Airbnb listing)
- **Verification path attempted:** WebFetch of the Airbnb listing URL
- **Failure mode:** 403 Forbidden on every attempt — Airbnb blocks unauthenticated bot fetches
- **Consecutive failures:** 3 (RUN_001 2026-04-15, RUN_002 2026-04-16, RUN_003 2026-04-17)
- **Status:** Cannot confirm or deny. Listing title from search snippet: "Glamping Safari Tent 25 mins from downtown Austin — Yurts for Rent in Manor, Texas" (consistent with Rancho Moonrise).
- **Resolution path:** Adam needs to open the Airbnb URL directly in a browser to confirm. If it IS a Rancho Moonrise listing, add Airbnb to review coverage scope. **This is the same FLAG_FOR_ADAM item surfaced in RUN_001 — 3rd run, escalating to BLOCKERS.**
- **Logged:** 2026-04-17

---

## BLOCKER: hipcamp-direct-fetch — listing fetch failed 3 consecutive runs

- **Claim:** Hipcamp listing state for Rancho Moonrise (currently 0 reviews, 1 booking, voice violations: "34-acre" welcome + "37 acres" header + "drink at our bar" — last live-verified RUN_040 2026-05-26)
- **Verification path attempted:** WebFetch of `https://www.hipcamp.com/en-US/land/texas-rancho-moonrise-dw9hklej`
- **Failure mode:** mixed across the 3 consecutive failures —
  - RUN_041 2026-06-01: WebFetch resolved to a Texas glamping guide list page (Good Guad Land Co., The Best Dam Spot, Sparrow Bend River Retreat, etc.) instead of the Rancho-specific listing
  - RUN_042 2026-06-02: same Texas glamping guide list page returned again — 2nd consecutive
  - RUN_043 2026-06-03: WebFetch returned "Loading..." — page never finished rendering for the fetcher (different failure mode but still zero Rancho-attributed content extractable)
- **Consecutive failures:** 3 (RUN_041 2026-06-01, RUN_042 2026-06-02, RUN_043 2026-06-03)
- **Status:** Hipcamp count/rating/voice-violations now STALE:2026-05-26 (last successful scrape). 0 reviews presumed (carry from RUN_040). Voice violations cannot be re-confirmed.
- **Resolution path:** Either (a) Apify or another headless-render scraper to defeat the JS-render dependency, (b) Adam manually opens the listing every ~2 weeks to spot-check, or (c) treat Hipcamp the same as Hotels.com — accept search-snippet confirmation as "likely unchanged" and downgrade to quarterly manual check. WebSearch fallback is partial: confirms listing exists in `hipcamp.com/en-US/land/texas-rancho-moonrise-dw9hklej` index but cannot enumerate reviews or quote on-page copy.
- **Logged:** 2026-06-03

---

## BLOCKER: theknot-direct-fetch — timeout 3 consecutive runs

- **Claim:** The Knot listing copy + Haylee L. 1★ review (2026-02-26) owner-response state and any new reviews on `https://www.theknot.com/marketplace/rancho-moonrise-manor-tx-2087722`
- **Verification path attempted:** WebFetch of the live listing URL
- **Failure mode:** 60-second WebFetch timeout — page is heavy and/or rate-limiting unauthenticated bot fetches. RUN_034 (2026-05-19) succeeded; failures began RUN_035.
- **Consecutive failures:** 3 (RUN_035 2026-05-20, RUN_036 2026-05-21, RUN_037 2026-05-23)
- **Status:** Listing remains in monitored scope. Haylee L. review confirmed STILL LIVE via WebSearch fallback (review body text "neighboring property played extremely loud amplified music…" still indexed). Owner-response state cannot be confirmed today; presumed still unreplied (no Rancho Moonrise-attributed response surfaces in any search query).
- **Working fallback:** WebSearch is the documented working alternative — it surfaces review body text and listing context reliably, and confirms whether Haylee's review remains live. **Limitation:** it cannot enumerate new reviews posted since RUN_034, and it cannot verify owner-response state directly. Net effect: drift detection on The Knot is now best-effort via search snippet rather than direct.
- **Resolution path:** Either (a) Apify or another rendering scraper as a periodic pull for The Knot, (b) Adam manually opens the listing in a browser every ~2 weeks to spot-check for new reviews + owner-reply state, or (c) treat The Knot the same as Hotels.com — accept search-snippet confirmation as "likely unchanged" and downgrade to a quarterly manual check.
- **Logged:** 2026-05-23

---

## BLOCKER: tripadvisor-direct-fetch — direct fetch failed 3 consecutive runs

- **Claim:** TripAdvisor claimed/unclaimed status, review count/rating, and price band for the canonical Rancho Moonrise listing `g56224-d33307272` (`https://www.tripadvisor.com/Hotel_Review-g56224-d33307272-Reviews-Rancho_Moonrise-Manor_Texas.html`). Baseline: 0 reviews / unclaimed; price band `$45–$154` (last successful direct scrape RUN_062, 2026-06-30).
- **Verification path attempted:** WebFetch of the canonical listing URL. This was the one previously-reliable direct path — RUN_060/061/062 (6/28–6/30) all succeeded and read the price band directly.
- **Failure mode:** mixed across the 3 consecutive failures, same net effect (no on-page content extractable):
  - RUN_063 2026-07-04: HTTP 403 (1st failure of the previously-reliable path)
  - RUN_064 2026-07-16: HTTP 403 (2nd consecutive)
  - RUN_065 2026-07-18: WebFetch returned "Unable to verify if domain www.tripadvisor.com is safe to fetch" (domain-safety/network block) — 3rd consecutive; different mechanism, identical result (zero Rancho-attributed on-page content)
- **Consecutive failures:** 3 (RUN_063 2026-07-04, RUN_064 2026-07-16, RUN_065 2026-07-18)
- **Status:** 0/unclaimed HELD via WebSearch corroboration — canonical `g56224-d33307272` still indexed as "RANCHO MOONRISE - Prices & Campground Reviews (Manor, TX)" with no count/rating in snippet (consistent with 0/unclaimed). Price band NOT re-confirmable — carries `$45–$154` **STALE:2026-06-30**. Immaterial regardless: the price band is an algorithmic standard-room rate estimate, not a review signal; 0/unclaimed is the review-relevant fact and it still holds.
- **Working fallback:** WebSearch reliably surfaces the canonical listing's existence + title (confirms 0/unclaimed by absence of any count/rating snippet). **Limitation:** cannot enumerate the price band and cannot detect a hypothetical claim/first-review event as fast as the direct path could. **Canonical-URL guard:** only `g56224-d33307272` is Rancho's listing; the non-canonical `g55819-d27521234` resolves to an unrelated Kyiv hostel — never fetch it.
- **Resolution path:** Either (a) Apify or another rendering/residential-proxy scraper as a periodic TripAdvisor pull, (b) Adam manually opens the listing every ~2 weeks to spot-check claim status + first review, or (c) accept the WebSearch "still indexed, 0/unclaimed" signal and downgrade TripAdvisor direct-fetch to a quarterly manual check (same pattern as Hotels.com / The Knot / Hipcamp). No Adam action required unless a claim/first-review event is suspected — 0/unclaimed has held across every read since the listing was first tracked.
- **Logged:** 2026-07-18

---

## BLOCKER: facebook-review-text — review enumeration failed 3 consecutive runs

- **Claim:** The identity and verbatim text of the non-recommend review(s) behind Facebook's move from 5 reviews / 100% recommend to **6 reviews / 86% recommend** (first movement in 48 runs, recorded RUN_068 2026-08-17)
- **Verification path attempted:** WebFetch of `https://www.facebook.com/p/Rancho-Moonrise-100083582071947/`
- **Failure mode:** JS-gated page — the fetch returns the page **title only** ("Rancho Moonrise | Manor TX"). No review count, no recommendation percentage, no review bodies. Identical result all three runs.
- **Consecutive failures:** 3 (RUN_068 2026-08-17, RUN_069 2026-08-18, RUN_070 2026-08-19)
- **Status:** The **aggregate** figure is NOT stale — 6 / 86% has been confirmed by WebSearch on three consecutive runs and has settled. What is blocked is strictly the **review text**, and therefore the response draft. `unreplied: 1` on Facebook is held on the arithmetic alone (100% → 86% means ≥1 non-recommend exists where there were zero), not on having read anything.
- **Why no draft has been written, three runs running:** drafting a response in Ashley's voice to a review whose content is unknown would be fabrication. An empty draft slot is the honest state. This is a deliberate outcome, not a gap in the run.
- **Attribution guard (do not skip on a future run):** WebSearch surfaces negative prose adjacent to the Facebook figure that is **not** Facebook content — specifically Haylee L.'s The Knot review ("a neighboring property played extremely loud amplified music…", "I would never recommend this venue…"). RUN_069 caught and rejected exactly this. The summarizer places the two together because both are the negative signal on the property. **Never record Knot text as the Facebook review body.**
- **Resolution path:** 60 seconds by whoever holds the Page — open the Reviews tab, copy the non-recommend text into this repo, and a real draft follows on the next run. Alternatives if that never happens: (a) a rendering scraper (Apify) against the Page, or (b) accept that Facebook review *bodies* are permanently unreadable by this agent and monitor the aggregate only, treating any further recommend-rate drop as a same-day Adam ping rather than a draftable event.
- **Logged:** 2026-08-19
- **Update 2026-08-21 (RUN_071):** aggregate 6 / 86% re-confirmed a **4th** consecutive time, and for the first time on a `facebook.com` **domain-restricted** query — the cleanest attribution the figure has had. Review body still not surfaced; direct fetch not re-attempted (no contradicting signal). **4th run with no draft, still deliberate.** Blocker unchanged and still a 60-second fix.

---

## BLOCKER: expedia-direct-fetch — HTTP 429 three consecutive runs

- **Claim:** Expedia review count and rating for the canonical Rancho Moonrise entity `h89565924` (`https://www.expedia.com/Manor-Hotels-Rancho-Moonrise.h89565924.Hotel-Information`). Baseline anchor 8.0/10 last confirmed by direct scrape **2026-04-09**; count `null` in the aggregate since that same date.
- **Verification path attempted:** WebFetch of the canonical Expedia entity URL.
- **Failure mode:** **HTTP 429 Too Many Requests**, response body not retrieved. Identical all three runs. This is a rate-limit, not a hard block or a bot-detection challenge — the request is being throttled rather than refused on identity.
- **Consecutive failures:** 3 (RUN_069 2026-08-18, RUN_070 2026-08-19, RUN_071 2026-08-21)
- **Distinct from `hotels-com-direct-fetch`:** different entity (`h89565924` vs `ho2867109568`), different failure mode (429 rate-limit vs 60-second timeout). Tracked separately so a fix to one is not mistaken for a fix to the other.
- **Status:** Rating 8.0 is **not** stale in substance — it was re-confirmed live by search on 2026-08-19 (×2) and again 2026-08-21, always bound to `h89565924`. What is blocked is strictly the **direct** path, and therefore the ability to promote anything into an authoritative field.
- **The consequence that makes this blocker matter more than its siblings:** `master-agent.md` hard-rules that `brand/review-aggregate.json` is never written without a **fresh direct scrape**. Expedia's count has now been confirmed at **6** by three independent, differently-phrased, domain-restricted searches (RUN_070 ×2, RUN_071 ×1) — which was the exact precondition RUN_070 set for promoting it. With the direct path blocked, *"pending a direct scrape"* now means *"pending forever"*: the evidence bar has been cleared and the rule still forbids the write. **This is a rule question, not a data question, and it is deliberately not resolved unilaterally.**
- **Why the count matters at all:** six public reviews exist on a surface whose **reply coverage has never been checked once**. It was invisible for four months precisely because the count field read `null`. Same shape as the ResortPass discovery in RUN_068.
- **Resolution path — any one of:**
  - (a) **30 seconds in the Expedia extranet** — settles the count, the rating, *and* the reply coverage at once, and simultaneously resolves the two-entity 8.0/9.0/8.6 split question that has stood since RUN_066. Highest value per second of Adam's time of anything this task currently carries.
  - (b) **Authorise search-confirmed promotion** when a value has ≥3 independent same-day domain-restricted confirmations *and* the direct path is a logged blocker. Would also unblock the Hipcamp, Knot and TripAdvisor counts under the same logic. This is a change to `master-agent.md`'s hard rules and needs Adam's sign-off.
  - (c) Rendering/residential-proxy scraper (Apify) — same answer already proposed for Hipcamp, The Knot and TripAdvisor. At four blocked platforms this is starting to look like one purchase rather than four workarounds.
  - (d) Retry with backoff on a later cadence — 429 is transient by nature, so this may self-heal; worth one attempt per run before declaring it permanent.
- **Logged:** 2026-08-21
- **Update 2026-08-30 (RUN_072):** HTTP 429 a **4th consecutive time**. **Resolution path (d) is now disconfirmed once, and on the most generous terms it will get:** the retry came after a **9-day gap** (the task did not fire 8/22–8/29), so this was not a tight-cadence throttle being re-tripped by our own traffic — it is a 429 that survives nine days of zero requests from this client. That is not what a transient rate-limit looks like. Path (d) should not be counted as a live option after one more failure. **No Expedia search query was issued this run, deliberately:** the count-6 promotion question is a **rule** question (the hard rule demands a direct scrape; the direct scrape is a formal blocker), it was escalated to Adam in RUN_071, and a 4th snippet confirmation cannot move a rule. Rating 8.0 and count 6 both carry unchanged, neither re-confirmed, neither recorded as changed.

---

## WATCH (NOT YET A BLOCKER — 1 of 3): resortpass-direct-fetch — Cloudflare 403

> Logged below threshold **on purpose**. The runbook opens a blocker at 3 consecutive failures and this is failure **1**. It is recorded here anyway because of what it was: the only working direct path this task had.

- **Claim:** ResortPass review count and rating for `https://www.resortpass.com/hotels/rancho-moonrise` (held at **53 @ 4.8★**, four independent reads: this task 8/17, `rancho-competitive-weekly` 8/17, this task 8/18, this task 8/21).
- **Verification path attempted:** WebFetch of the listing page, then `curl` with a desktop Chrome UA as a cross-check.
- **Failure mode:** **HTTP 403 on both clients.** Body is a **Cloudflare "Attention Required!" captcha challenge** (4,549 bytes, saved to `raw/2026-08-30/resortpass.html`). Because two independent clients get the same result, this is **site-level bot detection, not a WebFetch-layer quirk** — worth distinguishing, since the two prior ResortPass failures were neither.
- **Third distinct failure mode on this one platform:**
  - RUN_070 (8/19): HTTP 200, products + star class rendered, **rating block absent** → *extraction* failure. Held rather than recorded as a decline — **vindicated** by RUN_071.
  - RUN_071 (8/21): HTTP 200, everything rendered cleanly → path declared working.
  - RUN_072 (8/30): HTTP 403 Cloudflare → *access* failure.
- **Status:** **53 @ 4.8★ HELD, entirely unchanged.** An access failure is not a data change. This is the same discipline that stopped RUN_070 from manufacturing a second consecutive decline on the one platform carrying this year's only real one.
- **Why this is logged early — the systemic fact:** checked against `brand/review-aggregate.json` rather than asserted, every other monitored platform was already blocked on direct fetch — google / airbnb / hotels-com (2026-04-17), theknot (05-23), hipcamp (06-03), tripadvisor (07-18), facebook (08-19), expedia (08-21). **ResortPass was the sole survivor. As of today the number of working direct-scrape paths across all monitored platforms is zero, and every held value on this property rests on search snippets.** The standing "8 blockers, 4 of them naming the same remedy" flag has stopped being a question of coverage breadth: direct verification is simply gone.
- **Resolution path:** unchanged from the family, and now materially stronger — a **rendering/residential-proxy scraper (Apify)** is the single remedy that reopens Google-adjacent, Hipcamp, The Knot, TripAdvisor, Expedia *and* ResortPass. That is now **one purchase against six platforms**, not four. Alternatively, if it stays 403 for two more runs, ResortPass joins the quarterly-manual-check pattern with the rest.
- **Do not escalate on a single 403** — retry once per run. If RUN_073 and RUN_074 also return 403, open the blocker.
- **Logged:** 2026-08-30
