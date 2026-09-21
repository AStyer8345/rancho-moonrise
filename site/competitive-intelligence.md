# Rancho Moonrise — Competitive Intelligence Report
**Prepared for:** Rancho Moonrise Operations
**Subject Property:** Rancho Moonrise · 20117 Lockwood Rd, 78653 (20 min from downtown Austin)
**Research Date:** September 21, 2026
**Previous Report:** September 7, 2026 (no September 14 report was produced — this run covers a 14-day gap)

---

## Executive Summary

**The banned copy is back in the brand answer, and this time the evidence is clean.** On September 7 the brand-query answer had been free of *"20 luxury cabins and safari tents for up to 50 guests"* for two reads in a row, and that report flagged it as a pattern forming, not a claim. It did not hold. This week's brand query — `Rancho Moonrise Manor Texas`, which does **not** contain the phrase — returned an answer stating *"The ranch contains 20 luxury cabins and safari tents for up to 50 guests,"* with The Knot listing in the result set. That read is uncontaminated: nothing in the query could have supplied the sentence. The Knot listing itself again returned #1 on an exact-phrase query (5th read). One new fact: a **direct fetch of The Knot returned HTTP 403** this run — the first time that path has failed — so this week's Knot confirmation is search-level, not page-level.

**The WeddingWire hypothesis from September 7 did not reproduce.** 0 of 3 attempts this week surfaced the phrase on WeddingWire: a `site:weddingwire.com` exact-phrase query returned The Knot, Yodel, and Rancho's own pages but no WeddingWire URL; a WeddingWire-restricted query returned only the listing's title (*"Rancho Moonrise - Barn & Farm Weddings - Manor, TX"*) with no description; and direct fetch again fell back to a Barn & Farm category page. There is also a methodological reason to discount the 9/7 read: an exact-phrase query puts the phrase in the query, and this week the search engine's synthesized answer repeated the sentence back **even when no returned page matched it** ("The search didn't return results from WeddingWire.com… Rancho Moonrise contains 20 luxury cabins…"). Synthesized answer text is not independent evidence when the phrase is in the query; only the returned URL set is. **WeddingWire is downgraded from "suspected, 2 reads" to "unconfirmed."** It stays on the human-check list because it is unreadable, not because it is cleared.

**A different third surface is now the better lead: Yodel.** `events.yodel.today/manor-tx/profile/Rancho-Moonrise/113759` was returned by both exact-phrase queries, and a Yodel-restricted query (phrase **not** in the query) produced an answer describing *"luxury cabins and safari tents that can host up to 50 guests."* Page fetch returned 403. Snippet-level, one uncontaminated read. Yodel is a scraped events directory, so it is most likely inheriting the sentence from The Knot rather than being a separate defect — which would mean fixing The Knot is the upstream fix.

**ResortPass changed its rating display and both properties gained reviews.** Rancho now shows **9.4 "Exceptional" from 57 reviews** (was 4.8★ / 53); Lucky Arrow shows **9.2 from 217** (was 4.6★ / 209). The platform now presents a 10-point scale. Lucky Arrow's 9.2 is exactly its old 4.6★ doubled; Rancho's 9.4 is 4.7★ doubled against a prior 4.8★ — either a real 0.1★ dip after four new reviews or a rounding artifact of the scale change. This report cannot tell which, so it is recorded as a **watch**, not a decline. **Prices are unchanged: Rancho $20 day / $15 half-day, Lucky Arrow $35.** The 43% day-pass gap is re-verified live for the second consecutive report.

**Lucky Arrow's published pricing is fuller than this report had recorded.** A direct fetch of its private-events page shows **$545–$650 per person per night** *and* **private buyout "beginning at $19,500 per night,"** capacity 41 guests in private accommodations (54 double occupancy), event spaces to 200, 31 rooms + 10 yurts. Prior reports carried only the per-person range. Whether the buyout figure is new or was previously unrecorded cannot be determined from history. It is a verified fact from a direct fetch — recorded as a fact, **not** a recommendation to publish Rancho pricing (that recommendation stays withdrawn; see Serana below).

**⚡ Top 3 Actionable Findings (Week of September 21):**

1. **Fix The Knot description first — it is now the upstream fix for at least two surfaces.** Five confirmed reads, and the brand-level answer re-acquired the banned sentence. Yodel very likely inherits from it. A human with a Knot vendor login is the only path.
2. **The day-pass gap ($20 vs $35, 43%) stands, and Lucky Arrow now shows pool cabanas at $175 (4 guests) and a $90 private-yurt day room** alongside its passes. Whether those extras were on the 9/7 listing is unknown (that read recorded only three products) — treat as "newly recorded," not "newly launched."
3. **Rancho's tracked-keyword footprint is 3/10 against the 8/18 baseline of 4/10.** The only loss is `wedding venue Austin TX ranch`, which sat at the very tail of its result set (9 of 9) on 8/18. Three keywords hold; nothing moved into the top 3 anywhere.

---

## Re-Verify Gate — Claims Checked Live (September 21)

Brand canary run first: `Rancho Moonrise Manor Texas` returned `ranchomoonrise.com` (home + blog) in the result set. Measurement session valid — absences below are real.

| Claim | Live Verification (September 21) | Result |
|---|---|---|
| Brand snippet clean — 2nd consecutive read (9/7) | Brand-query answer (phrase not in query) again states *"20 luxury cabins and safari tents for up to 50 guests."* | ❌ **NO LONGER TRUE** — streak broken; brand snippet is dirty again |
| The Knot carries *"20 luxury cabins and safari tents for up to 50 guests"* | Exact-phrase query returns The Knot listing #1. **Direct fetch: HTTP 403** (first failure of this path). | ✅ **CONFIRMED — 5th read** (search-level only this run) |
| WeddingWire carries the same banned phrase (snippet-level, 2 reads, 9/7) | 0 of 3 attempts reproduced it (see Executive Summary). Direct fetch again returns a category page, not the listing. | ⚠️ **NOT REPRODUCED — downgraded to unconfirmed** |
| Rancho ResortPass: $20 / $15, 4.8★ / 53 reviews | $20 day / $15 half-day unchanged. Rating now **9.4 (10-pt scale), 57 reviews**. Same value on two fetches with different prompts. | ⚠️ **PARTIAL — price held; rating display changed; reviews +4; possible 0.1★ dip, unresolvable** |
| Lucky Arrow ResortPass: $35, 4.6★ / 209, $75 family bundle | $35 adult and family-pool passes, $75 family pass (4 guests) unchanged. Rating **9.2 (= 4.6★ doubled)**, reviews **217 (+8)**. Also listed: Family/Adult Pool Cabana $175 (4 guests), Day Room (Private Yurt) $90 (2 guests). | ⚠️ **PARTIAL — prices held; +8 reviews; cabana/yurt products newly recorded** |
| Day-pass underpricing: Rancho $20 vs Lucky Arrow $35 | Both re-fetched this run. | ✅ **STILL TRUE — 2nd consecutive live read** |
| Serana publishes no price | Direct fetch of `seranatx.com/austin-corporate-retreats/`: still *"Pricing is offered as a flat package rate based on the size of your group and the length of your stay."* No number. Page describes groups of **5–9 (max 9)**. | ✅ **STILL TRUE — 3rd read** |
| Serana is 21+ wellness retreat (8/31, other domain) | This page states no age restriction; the 21+ claim rested on `seranaretreats.com`, **not re-fetched this run**. | ⚠️ **CARRIED — not re-tested** |
| Broad-glamping regression (3 owned URLs → 1) | Identical tracked query `glamping weekend getaway from Austin`: exactly 1 owned URL (`/blog/weekend-getaways-near-austin/`, ~#5). | ✅ **CONFIRMED — 3rd read at the same reduced level** |
| Hipcamp curated "20 Best" — Lucky Arrow #8, Ranch 3232 #16, Rancho absent | Full 20-item list read directly. Lucky Arrow #8, Ranch 3232 #16, Rancho not on page. | ✅ **STILL TRUE — 12th consecutive read** |
| Glamping Hub — Rancho absent (~21 wk) | Domain-restricted search returns only region pages; direct page fetch does not render individual property names (JS), so the check rests on the search. | ✅ STILL TRUE — **~22 weeks** (drifted +1) |
| `/safari-tents-near-austin/` not indexed | `site:ranchomoonrise.com safari tents` returns 9 owned URLs (accommodations, faqs, corporate-retreats, corporate-retreat blog, host-your-event, weddings, home, things-to-do-manor-tx, glamping-vs-camping) — `/safari-tents-near-austin/` absent. ~147 days by the established count (site-daily re-confirmed the same figure 9/21). | ✅ **STILL TRUE — independently re-tested here** |
| 7744 Ranch — 20 min from downtown, 100 guests / 10 overnight | Direct fetch: unchanged. Five mobile estates, cowboy pool, hot tub, sauna, cold plunge. No published pricing. | ✅ STILL TRUE |
| `laketravisyachtrentals.com` — new listicle entrant (flagged 9/7, unassessed) | Fetched. Eight generic destinations (Lake Travis, Zilker, Pedernales, Enchanted Rock, San Antonio, etc.). Mentions neither Rancho nor any glamping/ranch venue. | ✅ **CLOSED — irrelevant, not a competitor** |
| Hotels.com does not carry banned copy (5 clean reads) | Two direct fetches timed out. Hotels.com appears in the brand result set but its text was not read. | ⚠️ **NOT RE-VERIFIED (timeout ×2)** — carried at 5 reads |
| Competitor GBP posts/reviews/photos | Not readable through the harness search or fetch path (only third-party review sites surface). | **UNVERIFIED** — no live path |

**Resolution summary:** 6 still_true / confirmed, 1 claim no longer true (brand snippet), 1 not reproduced (WeddingWire), 2 partial (ResortPass, both properties), 1 closed (laketravisyachtrentals), 3 carried or unverifiable (Serana 21+, Hotels.com, competitor GBP).

---

## Section 1 — SERP Rankings Summary (September 21, 2026)

> Methodology note: SERP ordering is from the harness `WebSearch` tool — a US logged-out, non-geolocated web-search proxy — directional, not pixel-exact. Presence/absence is reliable; exact ranks are approximate. Brand canary passed before any absence was recorded.

### A. The 10 tracked baseline keywords (phrasing per `scripts/serp-baseline.py`) vs the 8/18 baseline

| # | Keyword | 8/18 baseline | 9/21 | Δ |
|---|---|---|---|---|
| 1 | glamping near Austin TX | absent | absent (aggregators #1–2) | = |
| 2 | wedding venue Austin TX ranch | ✅ `/weddings/` 9 of 9 | ❌ absent (0 of 10) | **⬇ lost tail position** |
| 3 | unique wedding venues near Austin | absent | absent | = |
| 4 | corporate retreat venue Austin TX | ✅ blog 8 of 8 | ✅ **blog #4 + landing #8** (of 9) | **⬆ improved; second URL now present** |
| 5 | pool day pass Austin TX | absent | absent | = |
| 6 | things to do Manor TX | absent | absent (Eventbrite/TripAdvisor/Yelp) | = |
| 7 | bachelorette party Austin ranch | ✅ blog 5 of 9 | ✅ blog #6 of 9 | ≈ (−1) |
| 8 | events venue Austin TX | absent | absent | = |
| 9 | glamping with pool Texas | absent | absent | = |
| 10 | overnight event venue Austin | ✅ blog 4 of 8 | ✅ blog #6 of 9 | ⬇ (−2) |

**Result: 3 / 10 ranking (was 4 / 10).** The single loss is a tail-of-set position on a keyword this task's own 9/7 report already carried as "not ranking," so it reads as flicker at the edge of the result set rather than a lost ranking. Note: `CONTEXT.md`'s Key Metrics table still describes the 4/10 as "corporate retreat #3 + #4, glamping w/ pool #6, bachelorette #6" (the 8/17 framing); the 8/18 baseline file lists a different four. That table is `rancho-metrics-weekly`'s to reconcile — flagged, not edited here.

### B. Additional tracked queries (this report's own set)

| Keyword | Top SERP Sites (approx. order) | Rancho Position | Δ vs 9/7 |
|---|---|---|---|
| corporate retreat near austin texas | Teamout, **Camp Lucy (new)**, Sage Hill, Lucky Arrow, Wilder, Element Ranch, **Rancho (blog)**, Peaceful Waters, Lucky Arrow | ✅ **~#7 (blog)** | ⬇ was ~#4–5 |
| corporate retreat venue near austin ranch | Milk and Honey (×3), Rancho blog, Element Ranch, Rancho landing, Artemis, 7744, Wrenwood | ✅ **~#4 blog, ~#6 landing** | ≈ was ~#3 / ~#6 |
| ranch wedding venue + overnight lodging, 200 guests | WeddingWire (Ranch Austin), Knot (Ranch Austin), wedsociety, **Rancho `/weddings/`**, **Rancho blog**, ranchaustin.com, **Rancho home**, Hudson Bend, Zola | ✅ **~#4 `/weddings/`, ~#5 blog, ~#7 home** — all three owned URLs present | ⬇ blog was ~#3, home was ~#6 (home now confirmed, not just carried) |
| best weekend getaways near austin texas 2026 | GetYourGuide, solotripsandtips, Royal Caribbean, Tribeza, atasteofkoko, Texas Travel Talk, laketravisyachtrentals, **Rancho blog**, hotelthemedrooms | ✅ **~#8 (blog)** | ⬇ was ~#5; set churned (Vrbo out; GetYourGuide, Royal Caribbean, Tribeza, Texas Travel Talk in) |
| glamping weekend getaway from Austin (broad, exact phrasing) | Glamping Hub, Hipcamp, atasteofkoko, onechelofanadventure, **Rancho blog**, Cameron Ranch, Retreat on the Hill, Udoscape, Travelocity | ⚠️ **~#5 (blog only)** | = (3rd read at 1 owned URL; engine's answer still names Rancho first, accurately) |
| glamping near austin tx | Glamping Hub, Hipcamp, Yelp, Talula Mesa, Walden, Udoscape, Green Acres, Retreat on the Hill, Expedia | ❌ Absent | = |
| glamping with pool near Austin | Outdoorsy, Glamping Hub, Hipcamp, atasteofkoko, Talula Mesa, Udoscape, Spoon Mountain | ❌ Absent | (new phrasing) |
| safari tent austin texas | Glamping Hub, Vrbo, Hipcamp, Safari for the Soul (×2), Wahwahtaysee, Spoon Mountain, Expedia (×2) | ❌ Absent; `/safari-tents-near-austin/` not surfacing | = |
| romantic weekend getaways near austin | So Much Life, HomeToGo, Yelp, Sage Hill, Spoon Mountain, Romantic Spots Austin, Visit Austin | ❌ Absent (re-run this week, not carried) | = |
| pool day pass Austin TX | do512, ResortPass, Austin Motel, Dayuse, Tribeza, Fairmont, East Austin Hotel, 365 Things | ❌ Absent (ResortPass is Rancho's *listing host*, not Rancho's page) | = |
| wedding venue Austin TX ranch | wedsociety, WeddingWire (Ranch Austin), Knot (Ranch Austin), herecomestheguide, ranchaustin.com, Pecan Springs, Star Hill, Rambling Rose, Twisted Ranch | ❌ Absent | = (narrow-query absence as established) |
| Rancho Moonrise Manor Texas (brand canary) | Hipcamp, The Knot, Apple Maps, Facebook, LinkedIn, Hotels.com, Do512, Yelp, ranchomoonrise.com (blog + home) | ✅ Ranking, #9–10 of 10 links | ⚠️ **brand answer carries banned copy again** |

`weekend getaway near austin glamping` (a 9/7 row) was **not re-run this week** — carried, no reason to expect movement.

**Read:** corporate-retreat and wedding-cluster presence is intact; the mild slide on two head-term queries (corporate ~#4–5 → ~#7, weekend getaways ~#5 → ~#8) coincides with new listicle entrants (Camp Lucy, GetYourGuide, Royal Caribbean, Tribeza, Texas Travel Talk), not with any owned-page change. Both are single reads at the directional-proxy level; neither is actioned.

---

## Section 2 — Competitor Highlights

### Lucky Arrow Retreat — [luckyarrowretreat.com](https://luckyarrowretreat.com)
Direct fetch of `/private-events`: **$545–$650 per person per night** (includes lodging, catering, meeting space, AV, planning, taxes, fees, gratuities) and **private buyout beginning at $19,500 per night**. Capacity 41 in private accommodations (54 double occupancy), event spaces to 200. Lodging: 31 standard rooms + 10 luxury yurts. ResortPass: 9.2 / **217 reviews (+8)**; adult day pass $35, family pool pass $35, family pass $75 (4 guests), **pool cabanas $175 (4 guests), private-yurt day room $90 (2 guests)**. Hipcamp curated position #8, unchanged. Yelp shows 66 reviews (incidental — no baseline to compare). Corporate SERP presence unchanged.

### Serana — [seranatx.com](https://www.seranatx.com/austin-corporate-retreats/)
Still no published price (3rd read, direct fetch). New detail on this read: the page addresses groups of **5–9, maximum 9** — not a large-group competitor for Rancho's 20–200 corporate positioning. Did not appear in this week's `corporate retreat near austin texas` answer at all (it had a price-free mention on 9/7). The "publish flat buyout pricing" recommendation stays withdrawn.

### 7744 Ranch — [7744ranch.com/corporate-rentals](https://www.7744ranch.com/corporate-rentals)
Re-fetched: 100 guests for events, 10 overnight in five mobile estates, ~20 minutes from downtown, cowboy pool + hot tub + sauna + cold plunge. No published pricing, no new lodging. Unchanged. Its Expedia listing (added 8/31) was not re-checked.

### New surfaces noted this run
- **Camp Lucy** entered the `corporate retreat near austin texas` set at ~#2 (Hill Country, "corporate packages" page). Not previously tracked; not assessed beyond presence — a future-read item.
- **Artemis Ranch** slid from ~#2 to ~#6 on the ranch-corporate query; **Wrenwood Ranch** entered. Single read.
- **Yodel** (`events.yodel.today`) surfaced as a likely Knot-copy carrier (see Executive Summary).

---

## Section 3 — Content Gap Analysis (Updated September 21)

| Content Type | Who Has It | Rancho Moonrise Status | Δ vs. September 7 |
|---|---|---|---|
| Published flat buyout pricing | Lucky Arrow ($19,500/night from; $545–650 pp/night) | Custom-quoted | Lucky Arrow buyout figure newly recorded; Serana still withdrawn — no change to the "do not re-propose" stance |
| Day-pass pricing vs. market | Lucky Arrow $35 (9.2 / 217) + $175 cabanas + $90 day room | $20 / $15 (9.4 / 57) | Gap confirmed 2nd live read; Lucky Arrow adds upsell tiers to the record |
| Third-party listing copy hygiene | n/a | Knot: **5th read**, brand answer **dirty again**. WeddingWire: **unconfirmed**. Yodel: **new lead**. Hotels.com: not re-read. | Brand streak broken; WeddingWire downgraded |
| Broad-glamping SERP presence | Aggregators + one blog URL | 1 owned URL, 3rd read | Floor holds |
| Hipcamp curated "20 Best Glamping" | Lucky Arrow (#8), Ranch 3232 (#16) | Absent, 12th read | Gap holds |
| Glamping Hub listing | Talula Mesa, others | Still absent | ~22 weeks (was ~21) |
| `/safari-tents-near-austin/` indexing | — | Not surfacing, ~147 days | Independently re-tested |

---

## Section 4 — Quick Wins This Week

1. **Fix the venue description on The Knot (Ashley or Adam, ~15 min).** Five confirmed reads and the brand-level answer has re-acquired the banned sentence. Highest-leverage half hour on this property — it is now upstream of at least Yodel and possibly WeddingWire.
2. **Open the WeddingWire listing as a logged-in owner (~15 min).** This report cannot render the page. Check the description directly; do not assume the 9/7 read was right.
3. **After the Knot fix, re-check Yodel.** If Yodel updates on its own, that confirms the inheritance and closes it without a separate edit.
4. **Glamping Hub submission — ~22 weeks absent, free, ~15 min** at `glampinghub.com/list-your-property`.
5. **Hipcamp curation question for Ashley — 12th read.** *"Is the Hipcamp listing intentionally private — SEO presence only — or do we want bookings from it?"*
6. **Day-pass pricing: gap re-verified twice live.** Whether to test a higher price or add a cabana-style upsell is an operations call for Adam and Ashley; this report only supplies the comparison.

---

## Section 5 — Recommendations for This Week

**Priority 1 — The Knot description.** It is the one fix with a demonstrated downstream footprint. Everything else in the "copy hygiene" bucket is contingent on it.

**Priority 2 — Do not act on WeddingWire as a confirmed carrier.** The 9/7 read is discounted (query contamination) and this week's three attempts found nothing. It needs a human eye, not another automated fetch.

**Priority 3 — Do not treat the two-point SERP slides as a trend.** Corporate ~#7 and weekend-getaways ~#8 are single reads at directional-proxy precision with new listicle entrants explaining the shift. Re-read next week before saying anything more.

**Priority 4 — Do not re-open Serana pricing.** Third direct read, still no number, and its stated group size (5–9) puts it outside Rancho's corporate lane anyway.

**Priority 5 — Watch the ResortPass rating.** A 9.4 vs a doubled-4.8 (9.6) could be a real dip or a scale-change artifact. If next week's read shows 9.4 again with more reviews, treat the 4.7★ equivalent as the new baseline.

---

## Appendix: Rancho Moonrise Competitive Positioning (September 21, 2026)

| Attribute | Current State | Change Since September 7 |
|---|---|---|
| Tracked-keyword ranking (10-keyword baseline) | 3 / 10 (blog #4 + landing #8 on corporate retreat, bachelorette #6, overnight event #6) | ⬇ 4/10 → 3/10 vs 8/18; loss is a tail position |
| Organic ranking — wedding cluster | `/weddings/` ~#4, blog ~#5, home ~#7 (all three present) | Blog ⬇ ~#3 → ~#5 |
| Organic ranking — corporate retreat | Head term ~#7 (blog); ranch variant blog ~#4 + landing ~#6 | Head term ⬇ |
| Organic ranking — broad glamping | 1 owned URL, 3rd read | Floor holds |
| Rancho day-pass value | $20 / $15, 9.4 / 57 reviews | Price held; rating display changed; reviews +4 |
| Lucky Arrow day-pass value | $35, 9.2 / 217; cabanas $175; day room $90 | Reviews +8; cabana/yurt newly recorded |
| Lucky Arrow buyout | From $19,500/night; $545–650 pp/night | Buyout figure newly recorded |
| Serana pricing | Still no published price; group size 5–9 | Unchanged |
| The Knot listing copy | Confirmed, 5th read (search-level; page 403) | Unchanged |
| WeddingWire listing copy | Unconfirmed | ⬇ Downgraded from "suspected" |
| Yodel listing copy | Snippet-level lead, 1 uncontaminated read | ⚠️ New |
| Brand snippet copy | **Dirty** — banned copy returned | ❌ Streak broken |
| Hipcamp curated list | Absent, 12th read; Lucky Arrow #8, Ranch 3232 #16 | Unchanged |
| Glamping Hub | Absent | ~22 weeks |
| `/safari-tents-near-austin/` | Not surfacing | ~147 days; independently re-tested |
