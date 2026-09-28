# Rancho Moonrise — Competitive Intelligence Report
**Prepared for:** Rancho Moonrise Operations
**Subject Property:** Rancho Moonrise · 20117 Lockwood Rd, 78653 (20 min from downtown Austin)
**Research Date:** September 28, 2026
**Previous Report:** September 21, 2026

---

## Executive Summary

**Rancho picked up a glamping keyword it has never held in this report.** `weekend getaway near austin glamping` was absent on three straight reads through September 7 (it was not re-run on 9/21). This week it returns `/blog/weekend-getaways-near-austin/` at ~#5 of 9, and the engine's synthesized answer opens its property list with Rancho: *"The closest overnight getaway to Austin is Rancho Moonrise."* One read, so it is recorded as a gain to confirm, not a trend. It is the same blog URL that holds the broad `glamping weekend getaway from Austin` query (4th read at ~#5). That one page is now carrying Rancho's entire glamping-intent presence.

**The rest of the ranking picture held.** The 10-keyword baseline is **3/10 again, the same three keywords as 9/21**: corporate retreat venue (blog #4 + landing #8), bachelorette (blog #7), overnight event venue (blog #7). The 9/21 slide on the corporate head term (~#4–5 → ~#7) reproduced at ~#7. That makes two reads at the lower level, so it is now a settled position rather than noise. Camp Lucy held ~#2 on that term for a second read. On the 200-guest wedding-with-lodging query, `/weddings/` (~#4) and the wedding blog (~#5) held. The engine's answer called Rancho *"the best fit"* for that query and listed it first.

**The banned copy is still in the brand answer (2nd consecutive dirty read), and The Knot moved to #1 in the brand result set.** `Rancho Moonrise Manor Texas` (phrase not in the query) returned *"Rancho Moonrise contains 20 luxury cabins and safari tents for up to 50 guests."* The Knot listing was the first link returned (on 9/21 it sat second, behind Hipcamp). The exact-phrase query again returned The Knot #1 (**6th read**). **Yodel reproduced on a second uncontaminated read**: a Yodel-restricted query with no phrase in it described *"luxury cabins and safari tents that can host up to 50 guests."* **Hotels.com read clean** on a domain-restricted query (6th clean read). The Knot fix is still the upstream fix.

**ResortPass is blocked again. Both day-pass values are held, not re-verified.** Both listings returned HTTP 403 through WebFetch *and* through a browser-header curl, and the search path returns no price or rating. This is the 8/25–8/31 blackout pattern. The last live values (9/21) are carried as **`STALE:2026-09-21`**: Rancho $20 / $15, 9.4 / 57; Lucky Arrow $35, 9.2 / 217. **This is not a price or rating change.** The day-pass gap ($20 vs $35) was not re-verified this week.

**⚡ Top 3 Actionable Findings (Week of September 28):**

1. **Fix The Knot description.** It is the one fix with a demonstrated downstream footprint: the brand answer (dirty 2 reads running) and Yodel (2 uncontaminated reads). The Knot is now the #1 link on the brand query, so the defect sits in the most visible slot in Rancho's own brand result.
2. **Protect `/blog/weekend-getaways-near-austin/`.** It is now Rancho's only URL on two glamping-intent queries, one of them newly gained. Any edit that changes its title, H1 or the "20 minutes east of downtown" framing risks the only glamping foothold the site has. Coordinate with `rancho-site-daily` before touching it.
3. **The corporate head-term position is now ~#7 on two reads.** New listicle and resort entrants (Camp Lucy ~#2 twice) explain it. The owned page didn't regress. No action proposed; stop describing it as ~#4–5.

---

## Re-Verify Gate — Claims Checked Live (September 28)

Brand canary run first: `Rancho Moonrise Manor Texas` returned `ranchomoonrise.com` (home + `/blog/things-to-do-manor-tx/`) in the result set. Measurement session valid. Absences below are real.

| Claim | Live Verification (September 28) | Result |
|---|---|---|
| Brand answer carries banned copy (dirty, 1 read, 9/21) | Brand query (phrase not in query) again states *"Rancho Moonrise contains 20 luxury cabins and safari tents for up to 50 guests."* The Knot is now **link #1** in the brand set (was #2 behind Hipcamp). | ❌ **STILL DIRTY — 2nd consecutive read** |
| The Knot carries the banned sentence | Exact-phrase query returns The Knot #1. Direct fetch **403** (WebFetch and curl), 2nd consecutive page-level failure. | ✅ **CONFIRMED — 6th read** (search-level) |
| Yodel carries a Knot-derived version (1 uncontaminated read, 9/21) | Yodel-restricted query, phrase **not** in query → *"luxury cabins and safari tents that can host up to 50 guests."* Page fetch 403 (WebFetch + curl). Yodel did **not** appear in this week's exact-phrase result set. | ✅ **CONFIRMED — 2nd uncontaminated read** (snippet-level) |
| WeddingWire carries the banned phrase (unconfirmed since 9/21) | Exact-phrase query returned The Knot, Tribeza, Rancho's own pages and Wheree, with **no WeddingWire URL**. | ⚠️ **STILL NOT REPRODUCED** — stays unconfirmed; human check only |
| Hotels.com clean (5 reads; not re-read 9/21) | Hotels.com-restricted query, phrase not in query: *"WiFi and parking are free… outdoor pool… climate control."* No unit count, no "luxury." | ✅ **STILL TRUE — 6th clean read** |
| Rancho ResortPass: $20 / $15, 9.4 / 57 (9/21) | WebFetch **403**; browser-header curl **403**; domain-restricted search returns the listing but no price, rating or count. | ⚠️ **STALE:2026-09-21** — held, not re-verified (1st failure after the 9/7 recovery) |
| Lucky Arrow ResortPass: $35, 9.2 / 217, $75 family, $175 cabanas, $90 day room | Same 403 on both paths; search returns amenity text only (cabanas confirmed present, no prices). | ⚠️ **STALE:2026-09-21** — held |
| Day-pass underpricing: Rancho $20 vs Lucky Arrow $35 | Neither side readable. | ⚠️ **STALE:2026-09-21** — carried, not re-verified |
| Lucky Arrow: $545–650 pp/night; buyout from $19,500/night; 41 private / 54 double; events to 200 | Direct fetch `/private-events`: all four figures unchanged. Page now says *"Just 35 Minutes from Austin"* and *"40+ Corporate Retreats Annually."* | ✅ **STILL TRUE — 2nd read** |
| Serana publishes no price; groups 5–9 | Direct fetch: still *"flat package rate based on the size of your group and the length of your stay."* Up to 9 overnight. | ✅ **STILL TRUE — 4th read** |
| 7744 Ranch — 20 min, 100 events / 10 overnight, 5 mobile estates, no pricing | Direct fetch: unchanged. The same page also says it can *"comfortably sleep up to 18 guests"*, an internal inconsistency on their side. | ✅ STILL TRUE |
| Camp Lucy entered corporate head term ~#2 (1 read, 9/21, unassessed) | Re-appeared ~#2. Direct fetch of `/meetings-events/corporate-packages/`: 282 acres, six venues, 50,000+ sq ft event space, up to 300 attendees, **no published pricing**, overnight count not stated. | ✅ **CONFIRMED — 2nd read; now assessed** |
| Corporate head-term slide (~#4–5 → ~#7, 1 read) | `corporate retreat near austin texas`: Rancho blog ~#7 of 9 again. | ✅ **CONFIRMED — 2nd read at ~#7** |
| Broad-glamping floor — 1 owned URL (3 reads) | `glamping weekend getaway from Austin`: exactly 1 owned URL (weekend-getaways blog, ~#5); engine names Rancho first in its answer. | ✅ **CONFIRMED — 4th read** |
| `weekend getaway near austin glamping` — Rancho absent (3 reads through 9/7; not run 9/21) | Rancho's weekend-getaways blog returned ~#5 of 9; engine answer: *"The closest overnight getaway to Austin is Rancho Moonrise."* | ❌ **NO LONGER TRUE — Rancho now present** (1 read) |
| Hipcamp "20 Best" — Lucky Arrow #8, Ranch 3232 #16, Rancho absent | Full list read directly. **Lucky Arrow #9, Ranch 3232 #17** (a new entry landed above both). Rancho not on page. | ⚠️ **PARTIAL** — Rancho absence holds (**13th read**); competitor positions each moved −1 (1st list change in 12 reads) |
| Glamping Hub — Rancho absent (~22 wk) | Domain-restricted search for Rancho returns only unrelated California region pages. | ✅ STILL TRUE — **~23 weeks** |
| `/safari-tents-near-austin/` not indexed | Not re-run here. `rancho-site-daily` re-confirmed absent from `site:` on 9/27, one day before this report. | ✅ CARRIED (site-daily's 9/27 read) |
| Serana 21+ positioning (other domain) | Not re-fetched. | ⚠️ CARRIED — not re-tested |
| Competitor GBP posts/reviews/photos | No live read path through harness search or fetch. | **UNVERIFIED** — no live path |

**Resolution summary:** 10 still_true / confirmed, 1 still dirty, 1 no longer true (a Rancho gain), 1 partial (Hipcamp positions), 3 stale (ResortPass), 1 still not reproduced (WeddingWire), 3 carried or unverifiable. Two prior claims auto-resolved to the done-log.

---

## Section 1 — SERP Rankings Summary (September 28, 2026)

> Methodology note: SERP ordering is from the harness `WebSearch` tool (a US logged-out, non-geolocated web-search proxy). It's directional, not pixel-exact. Presence/absence is reliable; exact ranks are approximate. The brand canary passed before any absence was recorded.

### A. The 10 tracked baseline keywords (phrasing per `scripts/serp-baseline.py`)

| # | Keyword | 8/18 baseline | 9/21 | 9/28 | Δ vs 9/21 |
|---|---|---|---|---|---|
| 1 | glamping near Austin TX | absent | absent | absent (Glamping Hub, Hipcamp, atasteofkoko, Talula Mesa, Walden, Safari for the Soul, Camposanto, Udoscape, Green Acres) | = |
| 2 | wedding venue Austin TX ranch | `/weddings/` 9 of 9 | absent | absent (Ranch Austin on 5 of 10 surfaces) | = |
| 3 | unique wedding venues near Austin | absent | absent | absent (Camp Lucy named in answer) | = |
| 4 | corporate retreat venue Austin TX | blog 8 of 8 | blog #4 + landing #8 | ✅ **blog #4 + landing #8** (of 9) | = exact |
| 5 | pool day pass Austin TX | absent | absent | absent | = |
| 6 | things to do Manor TX | absent | absent | absent (Eventbrite ×3, TripAdvisor, Yelp ×2) | = |
| 7 | bachelorette party Austin ranch | blog 5 of 9 | blog #6 | ✅ blog #7 of 9 | ≈ (−1) |
| 8 | events venue Austin TX | absent | absent | absent | = |
| 9 | glamping with pool Texas | absent | absent | absent (Spoon Mountain ×2, Talula Mesa; Lucky Arrow named) | = |
| 10 | overnight event venue Austin | blog 4 of 8 | blog #6 | ✅ blog #7 of 9 (wedding-venues blog) | ≈ (−1) |

**Result: 3 / 10 ranking, the same three keywords as 9/21.** The two −1 moves are within the proxy's precision. On both queries the engine's answer still names Rancho with accurate copy (36 acres, cabins and safari tents, Event Barn, 20 minutes east of downtown).

### B. Additional tracked queries (this report's own set)

| Keyword | Top SERP Sites (approx. order) | Rancho Position | Δ vs 9/21 |
|---|---|---|---|
| corporate retreat near austin texas | Teamout, Camp Lucy, Sage Hill, Lucky Arrow, Wilder, Element Ranch, **Rancho blog**, Peaceful Waters, Lucky Arrow (2nd URL) | ✅ ~#7 (blog) | = (**2nd read at ~#7**, slide confirmed) |
| corporate retreat venue near austin ranch | Milk and Honey ×3, **Rancho blog**, Element Ranch, Artemis, **Rancho landing**, 7744, Peaceful Waters | ✅ ~#4 blog, ~#7 landing | ≈ (landing −1) |
| ranch wedding venue + overnight lodging, 200 guests | WeddingWire (Ranch Austin), Knot (Ranch Austin), wedsociety, **Rancho `/weddings/`**, **Rancho blog**, ranchaustin.com/lodging, Hudson Bend, ranchaustin.com, Zola | ✅ ~#4 `/weddings/`, ~#5 blog. Home not in this read's set (was ~#7). Engine answer lists Rancho **first** and calls it *"the best fit"* | ≈ (home dropped out; one read, not actioned) |
| best weekend getaways near austin texas 2026 | **Vrbo (back)**, Royal Caribbean, GetYourGuide, solotripsandtips, Tribeza, atasteofkoko, laketravisyachtrentals, **Rancho blog**, hotelthemedrooms | ✅ ~#8 (blog) | = |
| glamping weekend getaway from Austin (broad, exact phrasing) | Hipcamp, Glamping Hub, atasteofkoko, onechelofanadventure, **Rancho blog**, Cameron Ranch, Retreat on the Hill, Udoscape, Travelocity | ⚠️ ~#5 (blog only); engine answer names Rancho first | = (4th read at 1 owned URL) |
| **weekend getaway near austin glamping** | Hipcamp, Glamping Hub, onechelofanadventure, texplorevibe (new), **Rancho blog**, Udoscape, Cameron Ranch, Walden, Expedia | ✅ **~#5 (blog)**; engine answer: *"The closest overnight getaway to Austin is Rancho Moonrise"* | ⬆ **NEW (was absent 3 reads through 9/7)** |
| glamping near austin tx | (see baseline #1) | ❌ Absent | = |
| safari tent austin texas | Glamping Hub, Vrbo, Hipcamp, Safari for the Soul ×2, Wahwahtaysee, Spoon Mountain, Expedia ×2 | ❌ Absent; `/safari-tents-near-austin/` not surfacing | = |
| romantic weekend getaways near austin | Austin Monthly (new), HomeToGo, Yelp, Spoon Mountain, hotels-austin, Romantic Spots Austin, Visit Austin, vacationidea, Expedia | ❌ Absent | = |
| pool day pass Austin TX | Swimply, ResortPass ×2, Austin Motel, Tribeza, Dayuse, 365 Things, Visit Austin, TimeOut | ❌ Absent (ResortPass hosts Rancho's listing, not Rancho's page) | = |
| Rancho Moonrise Manor Texas (brand canary) | **The Knot**, Hipcamp, Apple Maps, Facebook, LinkedIn, Hotels.com, Do512, Yelp, ranchomoonrise.com (blog + home) | ✅ Ranking, #9–10 of 10 | ⚠️ Knot now #1; banned copy in answer (2nd read) |

**Read:** the owned footprint is stable to slightly better. One glamping keyword was gained, and the corporate head-term position settled at ~#7. Every glamping-intent placement Rancho holds runs through a single URL, `/blog/weekend-getaways-near-austin/`. The dedicated glamping pages (`/accommodations/`, `/safari-tents-near-austin/`) rank for none of them.

---

## Section 2 — Competitor Highlights

### Camp Lucy — [camplucy.com/meetings-events/corporate-packages](https://www.camplucy.com/meetings-events/corporate-packages/)
Now confirmed at ~#2 on `corporate retreat near austin texas` for a second read, and named in the answer for `unique wedding venues near Austin`. Assessed this week: **282 acres, six venues, 50,000+ sq ft of event space, up to 300 attendees**, Hill Country (Dripping Springs). No published pricing; overnight capacity not stated on the corporate page. Camp Lucy is a scale competitor, not a like-for-like one: bigger and farther out than Rancho. Its presence explains the head-term slide. It doesn't signal anything about Rancho's page.

### Lucky Arrow Retreat — [luckyarrowretreat.com](https://luckyarrowretreat.com/private-events)
Corporate pricing unchanged on a 2nd direct read: **$545–$650 pp/night; private buyout from $19,500/night**; 41 guests private / 54 double; events to 200; 31 rooms + 10 yurts. The page now says *"Just 35 Minutes from Austin"* and *"40+ Corporate Retreats Annually."* ResortPass values are held at 9/21 (blocked this run). Hipcamp curated position slipped #8 → #9 because a new entry landed above it, not because of anything Lucky Arrow did.

### Serana — [seranatx.com](https://www.seranatx.com/austin-corporate-retreats/)
4th direct read: no published price, groups up to 9. Not in this week's corporate result set. Outside Rancho's 20–200 lane; nothing to do.

### 7744 Ranch — [7744ranch.com/corporate-rentals](https://www.7744ranch.com/corporate-rentals)
Unchanged: 100 for events, 5 mobile estates, ~20 minutes from downtown, no pricing. One detail: the page states both "10 overnight guests" and "comfortably sleep up to 18." That's their inconsistency, noted only because 7744 is the closest like-for-like competitor on distance.

### Third-party copy carriers — state of the map

| Surface | Carries banned sentence? | Evidence level | Reads |
|---|---|---|---|
| The Knot | Yes | Search #1 on exact phrase; page 403 | 6 |
| Brand-query answer | Yes | Uncontaminated brand query | 2 consecutive |
| Yodel | Yes (paraphrase: "luxury cabins and safari tents… up to 50 guests") | Uncontaminated domain query; page 403 | 2 |
| WeddingWire | Unconfirmed | Not in exact-phrase set | 0 of 4 since 9/21 |
| Hotels.com | No | Uncontaminated domain query | 6 clean |
| Wheree (`rancho-moonrise.wheree.com`) | Unknown | Appeared in the exact-phrase result set; page 403 | 1 (presence only) |

Wheree is a scraped directory, like Yodel. It showed up in the exact-phrase result set, but that query contains the phrase, so its presence there is **not** evidence it carries the sentence. It is logged as a surface to watch, not a carrier.

---

## Section 3 — Content Gap Analysis (Updated September 28)

| Content Type | Who Has It | Rancho Moonrise Status | Δ vs. September 21 |
|---|---|---|---|
| Published flat buyout pricing | Lucky Arrow ($19,500/night from; $545–650 pp/night) | Custom-quoted | Unchanged (2nd read). No recommendation to publish. |
| Day-pass pricing vs. market | Lucky Arrow $35 (held) | $20 / $15 (held) | **STALE:2026-09-21**, ResortPass 403 |
| Glamping-intent SERP presence | Aggregators + one Rancho blog URL | **1 URL on 2 queries** (was 1 on 1) | ⬆ one query gained |
| Dedicated glamping/safari pages ranking | Safari for the Soul, Spoon Mountain, Wahwahtaysee | `/accommodations/`, `/safari-tents-near-austin/` rank for nothing tracked | = |
| Third-party listing copy hygiene | n/a | Knot 6th read; brand answer dirty ×2; Yodel ×2; Hotels.com clean ×6 | Yodel firmed up |
| Hipcamp curated "20 Best Glamping" | Lucky Arrow (#9), Ranch 3232 (#17) | Absent, 13th read | Competitors −1 each |
| Glamping Hub listing | Talula Mesa, others | Still absent | ~23 weeks |
| Large-scale corporate venue | Camp Lucy (300 attendees, 282 ac) | 20–200 guests, 36 ac | New competitor assessed, different tier |

---

## Section 4 — Quick Wins This Week

1. **Fix the venue description on The Knot (Ashley or Adam, ~15 min).** 6th confirmed read. The Knot is now the #1 link on Rancho's brand query, and Yodel is confirmed downstream on a 2nd read.
2. **After the Knot fix, re-check Yodel and the brand answer.** If both clean up without a separate edit, the inheritance is confirmed and the whole copy-hygiene bucket closes with one login.
3. **Open the WeddingWire listing as a logged-in owner (~15 min).** Still unreadable by automation; still unconfirmed.
4. **Glamping Hub submission, ~23 weeks absent, free, ~15 min** at `glampinghub.com/list-your-property`.
5. **Hipcamp curation question for Ashley (13th read).** *"Is the Hipcamp listing intentionally private (SEO presence only), or do we want bookings from it?"*
6. **ResortPass numbers: read them from the host dashboard if the pricing conversation happens this week.** The public listing is behind a 403 again; the last public read is 9/21.

---

## Section 5 — Recommendations for This Week

**Priority 1: The Knot description.** Unchanged, and stronger evidence than last week: two confirmed downstream surfaces (brand answer, Yodel) and the #1 brand-query slot.

**Priority 2: Treat the weekend-getaways blog as load-bearing.** It holds Rancho's only glamping-intent rankings, now on two queries. `rancho-site-daily` owns on-site changes. This report flags the dependency so nobody edits that page casually.

**Priority 3: Don't restate the day-pass gap as current.** It is held at 9/21. Two blocked reads in a row would match the August pattern; three would trigger a BLOCKERS entry per the gate.

**Priority 4: Re-read the new glamping gain before claiming it.** One read. Confirm next week on the identical phrasing.

**Priority 5: Don't chase Camp Lucy.** It is a 300-person, 282-acre operation farther out. It outranks Rancho on the corporate head term by scale and domain age, not content. Rancho's corporate position is intact on the ranch-specific variant (blog ~#4) and the venue baseline keyword (blog #4 + landing #8).

---

## Appendix: Rancho Moonrise Competitive Positioning (September 28, 2026)

| Attribute | Current State | Change Since September 21 |
|---|---|---|
| Tracked-keyword ranking (10-keyword baseline) | 3 / 10 (corporate venue blog #4 + landing #8, bachelorette #7, overnight event #7) | = same three keywords |
| Organic ranking — glamping intent | Weekend-getaways blog ~#5 on **two** queries | ⬆ `weekend getaway near austin glamping` gained (1 read) |
| Organic ranking — corporate retreat | Head term ~#7 (2nd read); ranch variant blog ~#4, landing ~#7 | Head-term slide confirmed |
| Organic ranking — wedding cluster | `/weddings/` ~#4, blog ~#5; home not in set | Home dropped out (1 read) |
| Rancho day-pass value | $20 / $15, 9.4 / 57 | **STALE:2026-09-21** (ResortPass 403) |
| Lucky Arrow day-pass value | $35, 9.2 / 217 | **STALE:2026-09-21** |
| Lucky Arrow corporate / buyout | $545–650 pp/night; from $19,500/night | Unchanged, 2nd read |
| Camp Lucy | ~#2 corporate head term; 282 ac, 300 attendees, no pricing | Confirmed 2nd read; assessed |
| Serana pricing | None published; up to 9 guests | Unchanged, 4th read |
| The Knot listing copy | Confirmed, 6th read; now #1 on brand query | Brand-slot position up |
| Brand answer copy | Dirty, 2nd consecutive read | Still dirty |
| Yodel listing copy | Confirmed, 2nd uncontaminated read | Firmed up |
| WeddingWire listing copy | Unconfirmed | = |
| Hotels.com listing copy | Clean, 6th read | = |
| Hipcamp curated list | Absent, 13th read; Lucky Arrow #9, Ranch 3232 #17 | Competitors −1 |
| Glamping Hub | Absent | ~23 weeks |
| `/safari-tents-near-austin/` | Not surfacing | Carried at site-daily's 9/27 read |
