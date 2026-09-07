# Rancho Moonrise — Competitive Intelligence Report
**Prepared for:** Rancho Moonrise Operations
**Subject Property:** Rancho Moonrise · 20117 Lockwood Rd, 78653 (20 min from downtown Austin)
**Research Date:** September 7, 2026
**Previous Report:** August 31, 2026

---

## Executive Summary

**The single most actionable number in this report is unfrozen.** ResortPass returned HTTP 403/Cloudflare to the last two reports in a row (this task on 8/31, `rancho-review-monitor` on 8/30) and both Rancho's and Lucky Arrow's day-pass values sat held, unverifiable, since August 25. This run, the block is gone: both listings render cleanly again. **Rancho is unchanged — $20 day pass, $15 half-day, 4.8★ / 53 reviews, identical to the held value.** Lucky Arrow held its price and rating ($35, 4.6★) but its review count moved **201 → 209**, eight new reviews landing during the blackout. The day-pass underpricing finding — Rancho at $20 against a comparable operator at $35 — is re-verified live, not carried on faith.

**The broad-glamping regression from last week is confirmed, not escalated and not reversed.** On 8/31 this report recorded the broad "glamping weekend getaway" query dropping from three owned URLs to one. This week, the identical query — re-run rather than a nearby variant — again returns exactly one: `/blog/weekend-getaways-near-austin/`. Two reads, same reduced level, six days apart. That is now a settled floor, not a one-off dip, and the caveat that kept it from reading as a collapse still holds: the engine's own synthesized answer opens its "close options" list by naming Rancho Moonrise first, by name, described accurately.

**A second platform now appears to carry the same banned copy as The Knot.** For four months this report has tracked one confirmed carrier (The Knot) and one suspected carrier (Hotels.com, never reproduced) of the sentence *"Rancho Moonrise contains 20 luxury cabins and safari tents for up to 50 guests."* Two independent search reads this week returned that same sentence attached to Rancho's WeddingWire listing. Direct fetch of the WeddingWire page still doesn't render — it silently falls back to a category listing rather than 403ing outright — so this is snippet-level evidence, not a confirmed page fetch, and it is logged at that confidence level. But it means the syndicated-copy problem, previously scoped to one platform, may already be on two.

**⚡ Top 3 Actionable Findings (Week of September 7):**

1. **The day-pass pricing recommendation is live again.** Rancho $20 vs. Lucky Arrow $35 — verified today, not held from two weeks ago. Nothing else needs to happen for this number to be usable in a pricing conversation.
2. **Do not re-propose published buyout pricing.** Serana's withdrawal (8/31) stands unchanged; this week's corporate-retreat search still shows no published number for Serana anywhere.
3. **The Knot and WeddingWire quick-wins are still unclaimed, still unfixed, and now cover two platforms instead of one.** Neither requires anything more sophisticated than a human logging into a vendor dashboard.

---

## Re-Verify Gate — Claims Checked Live (September 7)

Brand canary run first: a bare `Rancho Moonrise Manor Texas` query returned `ranchomoonrise.com` in the result set. Measurement session valid.

| Claim | Live Verification (September 7) | Result |
|---|---|---|
| Serana publishes no price; repositioned to 21+ wellness retreat; off corporate head term | Direct fetch of `seranatx.com/austin-corporate-retreats/` still reads: *"Pricing is offered as a flat package rate based on the size of your group and the length of your stay."* No nightly/per-person number found anywhere. **Caveat:** Serana's name resurfaced in this week's `corporate retreat near austin texas` search synthesis, described by amenities (private cabins, coworking lodge, Starlink, sauna, cold plunge, gym) with no price and no URL placement — mentioned, not ranked. Does not reverse the 8/31 finding. | ✅ **STILL TRUE — 2nd read** (with a caveat noted, not acted on) |
| Rancho ResortPass: $20 day pass / $15 half-day, 4.8★ / 53 reviews, held since 8/25 | **Live again.** Direct fetch renders cleanly: Half-Day Pass "From $15," Day Pass "From $20," 4.8★ / 53 reviews. **Identical to the held value** — no drift occurred during the two-report blackout. | ✅ **RESOLVED — blocker cleared, value confirmed unchanged** |
| Lucky Arrow ResortPass: $35 day passes, 4.6★ / 201 reviews, held since 8/25 | **Live again.** Adult Day Pass "From $35," Family Pool Day Pass "From $35," new Family Pass bundle "From $75" (4 guests). Rating held at 4.6★. **Review count moved 201 → 209** (+8) during the blackout. | ⚠️ **RESOLVED — blocker cleared, value CHANGED** (+8 reviews) |
| The Knot carries *"20 luxury cabins and safari tents for up to 50 guests"* | Reproduced verbatim on an exact-phrase query, The Knot listing returned #1. | ✅ **CONFIRMED — 4th read** |
| WeddingWire carries the same banned phrase as The Knot (new hypothesis this run) | Two independent search reads — a general domain query and a `site:weddingwire.com` exact-phrase query — both returned the identical sentence *"Rancho Moonrise contains 20 luxury cabins and safari tents...for up to 50 guests"* attributed to the WeddingWire listing. Direct fetch of the listing URL did not render the actual page (silently returned a Barn & Farm category listing instead of a 403), so this is **snippet-level, not page-level, confirmation**. | ⚠️ **NEW — snippet-confirmed, page unread (2 reads)** |
| Broad glamping variant — regressed from 3 owned URLs to 1 on 8/31 (one read) | Re-ran the **identical tracked query** (`glamping weekend getaway from Austin`), not a nearby variant. Result: exactly **1 owned URL** again — `/blog/weekend-getaways-near-austin/`. Same reduced level as 8/31, not worse, not recovered. The engine's synthesized answer still opens its "close options" section by naming Rancho Moonrise first, accurately described. | ✅ **CONFIRMED — 2nd read at the same reduced level** |
| Hipcamp curated "20 Best" — Lucky Arrow #8, Ranch 3232 #16, Rancho absent | Full 20-item list read directly. Lucky Arrow holds **#8** exactly. Ranch 3232 holds **#16** exactly. "Rancho Moonrise" does not appear anywhere on the page. | ✅ **STILL TRUE — 11th consecutive read, positions unchanged** |
| Glamping Hub — Rancho absent (~20 wk) | No `glampinghub.com` property page for Rancho on a domain-restricted query. Now ~**21 weeks**. | ✅ STILL TRUE (drifted +1wk) |
| Rancho wedding cluster — blog ~#3, `/weddings/` ~#4, home ~#6 | `/blog/wedding-venues-near-austin/` still surfaces on the tracked overnight-lodging wedding query alongside `/weddings/`. Home page position not independently confirmed this run (result set truncated before reaching it) — **not recorded as absent**, just not re-verified to the same depth as the other two URLs. | ✅ STILL TRUE (blog + `/weddings/` confirmed; home not independently re-checked) |
| Corporate ranch variant — blog ~#3, landing ~#6 | Reproduced: both `/blog/corporate-retreat-near-austin/` and `/corporate-retreats/` present in the same search. | ✅ STILL TRUE |
| Corporate head term — ~#4 | `/blog/corporate-retreat-near-austin/` present; Sage Hill and Lucky Arrow again the named property competitors. | ✅ STILL TRUE |
| The Knot brand snippet clean (first noted 8/31, one read) | This week's brand-query synthesis again did not surface the banned copy — 36 acres, pool, cabins and safari tents, no "luxury"/"20 cabins"/"50 guests." | ⚠️ **2ND CONSECUTIVE CLEAN READ** — still not enough to claim resolved; the Knot listing itself (verified separately, same run) still carries the violation |
| `/safari-tents-near-austin/` not indexed | Not independently re-measured this run — `rancho-site-daily` re-confirmed ~131 days uncrawled on 2026-09-05, two days before this report. Carried at that value rather than re-run, since this task's remit is competitor/SERP state and site-daily already owns the indexing diagnosis end-to-end. | ✅ CARRIED (site-daily's number, not re-tested here) |

**Resolution summary:** 8 still_true, 2 blockers RESOLVED (one unchanged, one changed +8 reviews), 1 confirmed-4th-read, 1 new snippet-level finding, 1 carried without re-test.

---

## Section 1 — SERP Rankings Summary (September 7, 2026)

> Methodology note: SERP ordering below is from a US logged-out, non-geolocated web-search proxy — directional, not pixel-exact. Competitor presence/absence is reliable; exact ranks are approximate. Brand canary passed before any absence was recorded.

| Keyword | Top SERP Sites (approx. order) | Named Competitors | Rancho Moonrise Position | Δ vs 8/31 |
|---|---|---|---|---|
| corporate retreat near austin texas | Teamout listicle, Sage Hill, Lucky Arrow, Peaceful Waters, **Rancho Moonrise (blog)**, Element Ranch, Wilder, Serana (mentioned, no rank), Miraval (mentioned) | Sage Hill holds the top property slot. Lucky Arrow named with $545–650 pp/night. Serana resurfaced in the answer text with amenities, no price, no URL. | ✅ **~#4–5 (blog)** | = held |
| corporate retreat venue near austin ranch | Milk and Honey, Artemis Ranch, **Rancho Moonrise (blog)**, Element Ranch, 7744 Ranch, **Rancho Moonrise (landing)** | Milk and Honey #1, Artemis ~#2, 7744 Ranch present. Set essentially unchanged from 8/31. | ✅ **~#3 (blog) and ~#6 (landing)** | = held exactly |
| ranch wedding venue + overnight lodging, 200 guests | WeddingWire (Ranch Austin), wedsociety, The Knot (Ranch Austin), **Rancho Moonrise (blog)**, **Rancho Moonrise (/weddings/)**, Hudson Bend, Camp Hideaway, Zola | Ranch Austin on multiple surfaces again. | ✅ **~#3 (blog), ~#4 (`/weddings/`)** — home position not independently confirmed this run | = held on confirmed URLs |
| best weekend getaways near austin texas 2026 | Vrbo, solotripsandtips, atasteofkoko, **NEW: laketravisyachtrentals**, **Rancho Moonrise (blog)**, hotelthemedrooms | **NEW: laketravisyachtrentals.com** entered. Still the only property domain in the set. | ✅ **~#5** | = held (minor shuffle) |
| weekend getaway near austin glamping | Hipcamp, Glamping Hub, onechelofanadventure, atasteofkoko, Retreat on the Hill, bluerivercamp, safariforthesoulglamping, Expedia | Set churned slightly (bluerivercamp new to this read) but aggregator-led as always. | ❌ Absent | = 3rd consecutive absence |
| glamping weekend getaway from Austin (broad variant, exact tracked phrasing) | Glamping Hub, Hipcamp, onechelofanadventure, atasteofkoko, Retreat on the Hill, **Rancho Moonrise (blog)**, udoscaperesorts, cameronranchglamping | Set close to 8/31's. | ⚠️ **~#6 (blog only)** — held at reduced level | = **confirmed, not worse** |
| glamping near austin tx | Glamping Hub, Hipcamp, Talula Mesa, Walden, Green Acres ATX, Expedia | Aggregators #1–2, unchanged. | Not ranking | = |
| safari tent austin texas | Hipcamp, Glamping Hub, Vrbo (Burnet County), Safari for the Soul (×2 domains), Wahwahtaysee, Spoon Mountain, Living Waters, Expedia, Travelocity | Set essentially unchanged from 8/31 — Vrbo still present, Living Waters still present. | Not ranking. `/safari-tents-near-austin/` still not surfacing (carried, ~131d per site-daily 9/5) | = |
| romantic weekend getaways near austin | HomeToGo, Sage Hill, Spoon Mountain, Visit Austin | Not independently re-run this week — no reason to expect movement; carried unchanged from 8/31. | Not ranking | (carried) |
| pool day pass Austin TX | Swimply, ResortPass, Austin Motel, Tribeza, Dayuse, do512, East Austin Hotel, 365 Things Austin, TimeOut | Hyatt $30, Van Zandt $35/$15, Fairmont $55/$35 named in body. Set stable. | Not ranking — ResortPass reaches this SERP as a Rancho *listing host*, not Rancho's own page | = |
| wedding venue Austin TX ranch (narrow) | WeddingWire (Ranch Austin), wedsociety, The Knot (Ranch Austin), Zola | Ranch Austin still owns multiple surfaces. Not independently re-run in full this week; no reason to expect movement. | Not ranking — query-specific, as established | (carried) |
| Rancho Moonrise (brand) | Apple Maps, Facebook, Hotels.com, LinkedIn, Hipcamp, The Knot, do512, Yelp, ranchomoonrise.com (blog + home) | Canary passed. **2nd consecutive clean brand snippet** — no banned copy in this run's aggregated answer. | Ranking, low in the set (~#9–10 of 10 links returned) | ⚠️ still WATCH |

**Rancho non-brand placement: essentially unchanged from 8/31** — the same 4–5 owned URLs across the same handful of tracked queries, with the broad-glamping floor confirmed rather than re-litigated.

---

## Section 2 — Competitor Highlights

### ResortPass Is Back — And It Held One Number, Moved Another

Two consecutive reports (this task 8/31, `rancho-review-monitor` 8/30) recorded ResortPass behind a Cloudflare 403 and explicitly refused to treat that as a data change. This week the block is gone on both tracked listings, which makes it possible to say something this report couldn't say for two weeks: **what actually happened while it was down.**

| | Rancho Moonrise | Lucky Arrow Retreat |
|---|---|---|
| Adult day pass | **$20** *(unchanged)* | **$35** *(unchanged)* |
| Half-day / family pass | $15 half-day *(unchanged)* | $35 family pool pass; **new: $75 family bundle (4 guests)** |
| Rating | **4.8★** *(unchanged)* | 4.6★ *(unchanged)* |
| Review count | 53 *(unchanged)* | **209** *(was 201 — +8 during the blackout)* |

Nothing moved on Rancho's listing. Lucky Arrow picked up eight reviews and added a bundled family-pass product it didn't have on 8/25. The day-pass underpricing finding — Rancho $20 against a comparable operator at $35, a 43% gap — is now a **live, re-verified number**, not a value carried on faith through two blocked reports. This is the cleanest example yet of the discipline this report has repeated for months: an access failure held a value instead of manufacturing a decline, and when access came back, the value was right.

### A Second Platform May Carry The Knot's Banned Copy

The Knot's violation is old news at this point — four defects, confirmed a fourth time this week, verbatim:

> *"Rancho Moonrise contains 20 luxury cabins and safari tents for up to 50 guests, making it suitable for destination weddings where guests can stay overnight."*

What's new: the identical sentence turned up twice this week attached to Rancho's **WeddingWire** listing — once in a general domain-mention search, once in a `site:weddingwire.com` exact-phrase search. Both returned the same wording, both attributed it to the Rancho Moonrise WeddingWire page specifically.

This is worth exactly the confidence level it deserves and no more. A direct fetch of `weddingwire.com/biz/rancho-moonrise/f38c5e35e5491216.html` did not render the actual listing — it silently returned a Barn & Farm category page instead, the same non-403 failure mode that's made this listing unreadable by direct fetch since 8/25. So this is **search-snippet evidence from two independent reads, not a confirmed page fetch.** But two independent reads returning the identical unusual sentence is not nothing, and it changes the shape of the problem: this may not be a Knot-specific defect at all. It may be a shared vendor-data feed (a common pattern among wedding marketplaces) publishing the same wrong copy to both platforms, with Hotels.com — which has never reproduced the phrase across five reads — sitting outside that feed entirely.

**Practical read:** fixing The Knot's listing alone may not fix WeddingWire's. Whoever claims and edits these listings should check both, not assume one fix propagates.

### The Broad-Glamping Floor Held — Confirmed, Not Escalated

The 8/31 report flagged a regression (3 owned URLs → 1) as "one read, don't act on it yet." This week's job was to confirm or drop it, using the exact same query rather than a nearby phrasing. The result: **exactly one owned URL again**, same page, same approximate position. Two reads six days apart landing on the same reduced number is the definition of a settled floor rather than noise — this is now safe to treat as real, without treating it as worsening, because it hasn't moved since the first read.

The mitigating detail from 8/31 still holds too: on this same query, the engine's own synthesized answer opens with a "close options" section that names Rancho Moonrise first, by name, with accurate details (36 acres, cabins, safari tents, pool, fire pits, live music). The URL-level placement dropped; the entity-level recognition did not.

### Re-Confirmed Competitor State

#### Serana — [seranatx.com](https://www.seranatx.com/austin-corporate-retreats/) · [seranaretreats.com](https://www.seranaretreats.com/)
Re-verified by direct fetch: still no published nightly or per-person price, still reads as a flat package rate quoted per group size and length of stay. **One nuance this week:** Serana's name resurfaced in the synthesized answer for `corporate retreat near austin texas`, described with amenities (private cabins, coworking lodge, Starlink WiFi, sauna, cold plunge, gym) but with no price and no explicit URL/ranking placement in the result set. This does not reopen the "published pricing" question — there's still no number — but it's a reminder that "dropped off the head term" was a URL-level finding, not a claim that Serana vanished from the topic entirely.

#### Lucky Arrow Retreat — [luckyarrowretreat.com](https://luckyarrowretreat.com)
ResortPass values now live-verified rather than held: $35 day passes, 4.6★, **209 reviews** (+8 since 8/25), plus a new $75 four-guest family bundle. Hipcamp curated position unchanged at #8. Corporate SERP presence unchanged.

#### 7744 Ranch — [7744ranch.com/corporate-rentals](https://www.7744ranch.com/corporate-rentals)
Not independently re-fetched this week; no reason to expect the "20 minutes from downtown" positioning or the Expedia listing (added 8/31) to have changed. Carried unchanged.

### New Surface Noted This Run

**laketravisyachtrentals.com** — a new listicle entrant on the "best weekend getaways near austin texas 2026" head term, not previously tracked. Content and Rancho-relevance not yet assessed; flagged for a future read rather than characterized here.

---

## Section 3 — Content Gap Analysis (Updated September 7)

| Content Type | Who Has It | Rancho Moonrise Status | Δ vs. August 31 |
|---|---|---|---|
| **Published flat pricing for buyouts** | Lucky Arrow ($545–650 pp/night) | Custom-quoted | Unchanged — Serana still withdrawn, do not re-propose |
| Day-pass pricing vs. market | Lucky Arrow ($35, 4.6★/209 — **live, was held**) | **$20 / $15, 4.8★/53 — live, unchanged during blackout** | ✅ **Blocker cleared, both sides re-verified** |
| WeddingWire listing | Ranch Austin, Honeysuckle Ranch | Listing exists (3rd read). **Now suspected of carrying the same banned copy as The Knot** (snippet-level, 2 reads) | ⚠️ **Escalated — new defect hypothesis** |
| Third-party listing copy hygiene | n/a | The Knot: confirmed 4th read. WeddingWire: newly suspected. Brand snippet: clean 2nd consecutive read. Hotels.com: still not reproducing, 5th read. | Widened scope, one platform to watch-clean |
| Broad-glamping SERP presence | Aggregators + one blog URL (Rancho) | Held at 1 owned URL, confirmed 2nd read | Confirmed floor, not worsened |
| Hipcamp curated "20 Best Glamping" | Lucky Arrow (#8), Ranch 3232 (#16) | Absent, 11th consecutive read | Gap holds |
| Glamping Hub listing | Talula Mesa, others | Still absent | ~21 weeks (was ~20) |
| `/safari-tents-near-austin/` indexing | — | Not surfacing (site-daily's number: ~131 days as of 9/5) | Carried, not re-tested here |

---

## Section 4 — Quick Wins This Week

1. **Claim + optimize the WeddingWire listing (Ashley or Adam, ~15 min).** Confirmed to exist for a third time. New reason to prioritize this one: it may be carrying the same banned-copy defect as The Knot. A human who can actually log in should check the description text directly — this report cannot render the page.
2. **Fix the venue description on The Knot (Ashley or Adam, ~15 min).** Four defects, confirmed a fourth time. Unchanged from every prior week — still not declined, still not done.
3. **Check whether fixing one listing's copy actually fixes the other.** If both platforms pull from a shared vendor-data feed, correcting only The Knot may leave WeddingWire wrong. Worth confirming with whichever platform's dashboard is edited first.
4. **Glamping Hub submission — ~21 weeks absent, free, ~15 min** at `glampinghub.com/list-your-property`. Still the highest-leverage aggregator gap on the property.
5. **Hipcamp curation question for Ashley — 11th read.** *"Is the Hipcamp listing intentionally private — SEO presence only — or do we want bookings from it?"*
6. **The day-pass pricing gap can now be acted on with current data.** $20 vs. $35 is verified today, not carried from two weeks ago.

---

## Section 5 — Recommendations for This Week

**Priority 1 — Nothing changes about the day-pass pricing conversation except that it's now backed by fresh data.** The number didn't move; the excuse to wait for fresh verification is gone.

**Priority 2 — Treat the WeddingWire banned-copy hypothesis as real enough to check, not yet real enough to act on unilaterally.** It's snippet-level evidence from two independent reads, not a confirmed page fetch. The right next step is a human opening the actual listing, not another automated attempt at the same blocked fetch.

**Priority 3 — The two vendor-dashboard jobs (Knot description, WeddingWire claim) remain the highest-value half hour on this property.** Both are now weeks old, both are entirely off-domain, and now WeddingWire may need the same fix as The Knot rather than a different one.

**Priority 4 — Do not re-open the Serana pricing question.** One ambiguous mention in a synthesized answer, with no price and no ranking evidence, does not reopen a finding built on a direct page fetch plus an independent repositioning search.

**Priority 5 — Watch the brand-snippet cleanliness for a third read before saying anything about it.** Two consecutive clean reads is a pattern worth naming; it is not yet a claim that the banned copy has stopped propagating into brand-level answers.

---

## Appendix: Rancho Moonrise Competitive Positioning (September 7, 2026)

| Attribute | Current State | Change Since August 31 |
|---|---|---|
| **ResortPass access** | **Live again on both tracked listings** | ✅ **Blocker cleared** |
| Rancho day-pass value | $20 / $15, 4.8★ / 53 | Unchanged — re-verified, not held |
| Lucky Arrow day-pass value | $35, 4.6★ / **209** | Review count +8 |
| Day-pass underpricing finding | Rancho $20 vs. Lucky Arrow $35 | ✅ Re-verified live, actionable now |
| **Serana pricing** | Still no published price; repositioned, off head term | Unchanged (one ambiguous mention noted, not acted on) |
| Organic ranking — wedding | Blog ~#3, `/weddings/` ~#4 confirmed; home not re-checked | Held on confirmed URLs |
| Organic ranking — corporate retreat | Held exactly, both variants | Unchanged |
| Organic ranking — broad glamping | 1 owned URL, confirmed 2nd read | ✅ **Confirmed floor, not worsened** |
| The Knot listing copy | Confirmed 4th read | Unchanged |
| **WeddingWire listing copy** | **Suspected of the same defect as The Knot** | ⚠️ **New hypothesis, snippet-level** |
| Brand snippet copy | Clean 2nd consecutive read | Pattern forming, not claimed |
| Hipcamp curated list | Absent, 11th read; Lucky Arrow #8, Ranch 3232 #16 | Unchanged |
| Glamping Hub | Absent | ~21 weeks (was ~20) |
| `/safari-tents-near-austin/` | Not surfacing | Carried at site-daily's 9/5 figure (~131 days), not independently re-tested |
