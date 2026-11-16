# Rancho Moonrise — Competitive Intelligence Report
**Prepared for:** Rancho Moonrise Operations
**Subject Property:** Rancho Moonrise · 20117 Lockwood Rd, 78653 (20 min from downtown Austin)
**Research Date:** November 16, 2026
**Previous Report:** September 28, 2026 (published). An October 16 run wrote its card to the client-ops mirror only and never published; it is recovered this week and used below as the most recent prior read.

---

## Executive Summary

**The 10-keyword baseline reads 6/10, the highest this report has recorded.** Six tracked keywords return an owned URL: glamping near Austin (blog #6), ranch wedding venue (`/weddings/` #6), corporate retreat venue (landing #7 + blog #8), things to do in Manor (blog #6, new), bachelorette (blog #8) and overnight event venue (blog #6). The published 9/28 report read 3/10 and the unpublished 10/16 run read 5/10. **One caveat carries over from 10/16:** standard-mode search fails the brand canary (it returns only Expedia-family listings), so every query here ran in extended mode. 9/28 most likely did not. Compare 11/16 with 10/16 (same mode, 5 → 6), not with 9/28.

**Rancho now ranks for a safari-tent query, on the page built for it.** `safari tent austin texas` returns `/accommodations/` at ~#3 of 10, and the engine's answer opens with Rancho as *"the closest option, about 20 minutes from downtown."* Rancho was absent from this query on every prior read. One read, so it is a gain to confirm next week.

**The glamping floor broke upward.** `glamping weekend getaway from Austin` returns the weekend-getaways blog at ~#1 and the homepage at ~#6. That is two owned URLs after five reads at one. `weekend getaway near austin glamping` holds the blog at ~#3 and adds the homepage at ~#8 (3rd read present).

**Lucky Arrow rebranded and is now a direct safari-tent competitor.** `luckyarrowretreat.com` 301-redirects to `luckyarrowresort.com`. The property is now "Lucky Arrow Resort", describes itself as a boutique resort with *"Forty-one private cabins, yurts and safari tents across 15 acres"*, and appears in Roam Hospitality's managed-hotel portfolio. Its stay page lists 3 safari tents (king bed, clawfoot tub, private bath) and calls them *"one of our newest additions."* Earlier reports described 31 rooms plus 10 yurts and no tents.

**The banned copy is back in the brand answer.** The 10/16 clean read did not hold. This week's brand query (phrase not in the query) again says the property *"has 20 luxury cabins and safari tents for up to 50 guests."* On the exact-phrase query the engine states that The Knot is *"the only source that gives this number."* The Knot is still the fix.

**ResortPass is readable. The day-pass gap is re-verified.** Rancho $20 / $15 half-day, 9.4 from 57 reviews (unchanged). Lucky Arrow $35, 9.2 from 224 reviews (+2 since 10/16).

**⚡ Top 3 Actionable Findings (Week of November 16):**

1. **Fix The Knot description (Ashley or Adam, ~15 min).** 8th confirmed read. The engine now names it as the single source of the "20 units / 50 guests" claim, and that claim is in Rancho's brand answer again.
2. **Fill in the Wed Society vendor profile.** Rancho's page at `austin.wedsociety.com/vendors/rancho-moonrise/` is an empty stub (*"Rancho Moonrise hasn't shared their full story with us just yet"*). Wed Society published a new "Austin-Area Wedding Venues With On-Site Lodging" article on October 19. It ranks #1 on the 200-guest ranch-wedding-with-lodging query and does not mention Rancho. Check whether the profile is free before committing.
3. **Lucky Arrow now sells safari tents and has professional hotel management behind it.** No action on Rancho's side this week. Stop describing Lucky Arrow as cabins and yurts only, and use its new name and domain.

---

## Re-Verify Gate — Claims Checked Live (November 16)

Brand canary run first. `Rancho Moonrise Manor Texas` in **standard mode failed**: 19 results, all Expedia-family OTA listings, no `ranchomoonrise.com`. The same query in **extended mode passed**: `ranchomoonrise.com/blog/things-to-do-manor-tx/` and `/contact/` in the set. All queries below ran in extended mode. Absences are real within that mode.

Prior claims come from the published 9/28 report and the unpublished 10/16 card.

| Claim | Live Verification (November 16) | Result |
|---|---|---|
| Brand answer read clean (10/16, 1 read) | Brand query, phrase not in query: *"One says the property has 20 luxury cabins and safari tents for up to 50 guests."* The Knot is link #3 in the brand set. | ❌ **NO LONGER TRUE** — dirty again (3 of the last 4 reads) |
| The Knot carries the banned sentence | Exact-phrase query returns The Knot #1; engine: *"The Knot's listing is the only source that gives this number."* Page fetch 403. | ✅ **CONFIRMED — 8th read** (search-level) |
| Wed Society Dec-2020 article carries "20 luxury cabins and safari tents" (10/16, page-level) | `/article/comfy-cozy-austin-venues-lodging/` returns **404** on WebFetch and on browser-header curl, with and without the trailing slash. Replacement article published 2026-10-19 contains zero mentions of Rancho (raw HTML). | ❌ **NO LONGER TRUE** — carrier page is gone |
| Yodel carries a Knot-derived paraphrase | Yodel-restricted query, phrase not in query: *"cabins and safari tents… The property covers 34 acres."* No "luxury", no "50 guests" in this read. | ⚠️ **PARTIAL** — only the "34 acres" error surfaced (snippet-level, 1 read) |
| WeddingWire carries the banned phrase (unconfirmed since 9/21) | WeddingWire-restricted query returned other venues and no Rancho listing. | ⚠️ **STILL NOT REPRODUCED** — human check only |
| Hotels.com clean (7 reads) | Hotels.com-restricted query: pool, free parking and WiFi, pet-friendly, cafe, bar. No unit count, no "luxury". | ✅ **STILL TRUE — 8th clean read** |
| Rancho ResortPass: $20 / $15, 9.4 / 57 | Direct fetch: Day Pass from $20, Half-Day from $15, 9.4 "Exceptional", 57 verified reviews. | ✅ **STILL TRUE** |
| Lucky Arrow ResortPass: $35, 9.2 / 222; $75 family; $175 cabanas; $90 day room | Direct fetch: all four prices unchanged; 9.2, **224** reviews. | ✅ **STILL TRUE** (+2 reviews) |
| Day-pass gap: Rancho $20 vs Lucky Arrow $35 | Both sides read live. | ✅ **STILL TRUE** |
| Lucky Arrow is "Lucky Arrow Retreat", 31 rooms + 10 yurts | `luckyarrowretreat.com` 301s to `luckyarrowresort.com`. Name is Lucky Arrow Resort. 41 stays: Courtyard Cabin 16, Yurt 10, Breezeway Cabin 6, Porch House 5, **Safari Tent 3**, Vintage Camper 1. | ❌ **NO LONGER TRUE** — rebranded; safari tents listed |
| Lucky Arrow: $545–650 pp/night; buyout from $19,500/night | Old `/private-events` URL redirects to `/events`, which shows no pricing in the readable portion. `/corporate` returned an empty body to the fetcher. | ⚠️ **STALE:2026-10-16** — not re-verified; do not read as "pricing removed" |
| Lucky Arrow: events to 200; 35 minutes from Austin | New homepage: *"41 guest rooms · 200 event guests · 35 minutes to Austin."* | ✅ **STILL TRUE** |
| Serana publishes no price; groups up to 9 | Direct fetch: *"flat package rate based on the size of your group and the length of your stay."* Nine overnight (six cabins, three Airstreams). | ✅ **STILL TRUE — 6th read** |
| 7744 Ranch: 20 min, 100 events, 10 vs 18 overnight, no pricing | Direct fetch: all unchanged, including the 10-vs-18 inconsistency. | ✅ **STILL TRUE** |
| Camp Lucy absent from the corporate head term (10/16) | `corporate retreat near austin texas`: not in the 10-result set. | ✅ **STILL TRUE — 2nd read absent** |
| Corporate head term: Rancho holds 2 URLs | Blog ~#8, landing ~#9 of 10. | ✅ **STILL TRUE** (each −1) |
| Broad-glamping floor: exactly 1 owned URL (5 reads) | `glamping weekend getaway from Austin`: blog ~#1 **and** homepage ~#6. | ❌ **NO LONGER TRUE** — 2 owned URLs |
| `weekend getaway near austin glamping`: Rancho present (2 reads) | Blog ~#3, homepage ~#8. | ✅ **CONFIRMED — 3rd read** |
| `safari tent austin texas`: Rancho absent (every prior read) | `/accommodations/` ~#3 of 10. | ❌ **NO LONGER TRUE** — Rancho present (1 read) |
| `things to do Manor TX`: Rancho absent | `/blog/things-to-do-manor-tx/` ~#6 of 9. | ❌ **NO LONGER TRUE** — Rancho present (1 read) |
| Hipcamp "20 Best": Lucky Arrow #8, Ranch 3232 #17, Rancho absent | Full list read directly: **Lucky Arrow #10, Ranch 3232 #19**. Rancho not on the page. | ⚠️ **PARTIAL** — Rancho absence holds (**15th read**); both competitors −2 |
| Glamping Hub: Rancho absent | Domain-restricted search returns only unrelated Utah, New Braunfels and Rhode Island listings. | ✅ **STILL TRUE — ~30 weeks** |
| `/safari-tents-near-austin/` not surfacing | Not re-run here. `rancho-site-daily` re-confirmed it on 11/15. On this run the safari query surfaced `/accommodations/`, not this page. | ✅ CARRIED (site-daily's 11/15 read) |
| Competitor GBP posts, reviews, photos | No live read path through harness search or fetch. | **UNVERIFIED** — no live path |

**Resolution summary:** 11 still true or confirmed, 6 no longer true (4 are Rancho gains or a carrier page disappearing; 1 is the brand answer turning dirty again; 1 is Lucky Arrow's identity), 2 partial, 1 stale, 1 not reproduced, 2 carried or unverifiable. Five prior claims were written to the done-log as resolved.

---

## Section 1 — SERP Rankings Summary (November 16, 2026)

> Methodology note: ordering is from the harness `WebSearch` tool in extended mode (a US, logged-out, non-geolocated proxy). Presence and absence are reliable; exact ranks are approximate. Standard mode failed the brand canary and was not used.

### A. The 10 tracked baseline keywords (phrasing per `scripts/serp-baseline.py`)

| # | Keyword | 9/28 (published) | 10/16 (unpublished) | 11/16 | Δ vs 10/16 |
|---|---|---|---|---|---|
| 1 | glamping near Austin TX | absent | summer-glamping blog ~#9 | ✅ `/blog/glamping-near-austin-texas/` #6 of 9; answer lists Rancho first | ⬆ (+3, different URL) |
| 2 | wedding venue Austin TX ranch | absent | `/weddings/` ~#6 | ✅ `/weddings/` #6 of 9 | = |
| 3 | unique wedding venues near Austin | absent | absent | absent (Zola, The Knot, Junebug, Here Comes the Guide, Eventective) | = |
| 4 | corporate retreat venue Austin TX | blog #4 + landing #8 | landing #6 + blog #8 | ✅ landing #7 + blog #8 of 9; answer: *"Rancho Moonrise suits larger groups"* | ≈ (landing −1) |
| 5 | pool day pass Austin TX | absent | absent | absent (ResortPass ×3, Do512, Austin Motel, pooldaypass.com) | = |
| 6 | things to do Manor TX | absent | absent | ✅ **blog #6 of 9**; Rancho named in answer | ⬆ **NEW** |
| 7 | bachelorette party Austin ranch | blog #7 | blog #7 | ✅ blog #8 of 9; Rancho is the first item in the answer | ≈ (−1) |
| 8 | events venue Austin TX | absent | absent | absent (Bizzabo, LINE, EventUp, Eventective, Peerspace) | = |
| 9 | glamping with pool Texas | absent | absent | absent (Airbnb, The Dyrt, TPW Magazine, U.S. News, Spoon Mountain ×3, Talula Mesa) | = |
| 10 | overnight event venue Austin | blog #7 | blog #6 | ✅ blog #6 of 9 (wedding-venues blog) | = |

**Result: 6 / 10 ranking** (10/16: 5/10). The engine's written answer names Rancho on all six ranking keywords, with accurate copy on each (36 acres, 20 minutes east of downtown, Event Barn for 200, cabins and safari tents).

### B. Additional tracked queries

| Keyword | Top results (approx. order) | Rancho position | Δ vs last read |
|---|---|---|---|
| corporate retreat near austin texas | Lake Austin Spa, Yurtopian, Teamout, Sage Hill, Carter Creek, Sage Hill (2nd), Serana, **Rancho blog**, **Rancho landing**, Offsite | ✅ ~#8 blog, ~#9 landing | ≈ (each −1); Camp Lucy absent again |
| corporate retreat venue near austin ranch | Milk and Honey ×2, Carter Creek, **Rancho landing**, **Rancho blog**, 7744, Austin Ranch (DFW), **Rancho planning-guide blog**, **Rancho ranch-vs-hotel blog** | ✅ ~#4, #5, #8, #9. **Four owned URLs of 9** | ⬆ (was 2 URLs on 9/28) |
| ranch wedding venue with overnight lodging near Austin, 200 guests | Wed Society ×2, The Knot (Ranch Austin), Wedding Spot, **Rancho `/weddings/`**, Moonshadow Ranch, River Ranch Inn, **Rancho blog**, **Rancho home** | ✅ ~#5, #8, #9 | ≈ (three URLs; Wed Society now on top) |
| glamping weekend getaway from Austin | **Rancho blog**, Cameron Ranch ×2, Blue River Camp, Spoon Mountain, **Rancho home**, Retreat on the Hill, Son's River Ranch, Travelocity | ✅ **~#1 blog, ~#6 home**; answer: *"Closest option: Rancho Moonrise"* | ⬆ (10/16 ~#2, 1 URL) |
| weekend getaway near austin glamping | Hipcamp, holidays.com, **Rancho blog**, Cameron Ranch ×2, Udoscape, Spoon Mountain, **Rancho home**, Walden, Travelocity | ✅ ~#3 blog, ~#8 home | = blog; home added |
| safari tent austin texas | Vrbo, Glamping Hub, **Rancho `/accommodations/`**, Loving Heart, Son's River Ranch, Spoon Mountain ×3, austinvacationrentals, Expedia | ✅ **~#3**; answer names Rancho first | ⬆ **NEW** |
| Rancho Moonrise Manor Texas (brand canary) | Apple Maps, Hipcamp, The Knot, LinkedIn, ResortPass, Yelp, Romantic Spots Austin, **Rancho blog**, **Rancho `/contact/`**, Wheree | ✅ #8–9 of 10 | Banned copy back in the answer |

Not run this week: `best weekend getaways near austin texas 2026` and `romantic weekend getaways near austin`. Their last reads (9/28) are not carried forward as current.

**Read:** the owned footprint grew on glamping and safari-tent intent, which was the weakest cluster through September. For the first time a non-blog page (`/accommodations/`) holds a glamping-intent placement. The corporate cluster is steady on the head terms and deep on the ranch variant.

---

## Section 2 — Competitor Highlights

### Lucky Arrow Resort (formerly Lucky Arrow Retreat) — [luckyarrowresort.com](https://www.luckyarrowresort.com/)
The largest change in this report since tracking began. The old domain redirects permanently to the new one. Page title: *"Lucky Arrow Resort | Luxury Boutique Resort in the Texas Hill Country, Near Austin."* Homepage figures: 41 guest rooms, 200 event guests, 35 minutes to Austin, 4.9 from 96 TripAdvisor reviews. Stay inventory by their own table: 16 courtyard cabins, 10 yurts, 6 breezeway cabins with private hot tubs, 5 porch houses, 3 safari tents, 1 vintage camper. Two pools (one adults-only, one heated for families) and six cabanas. A footer link and Roam Hospitality's own site list the property in Roam's managed-hotel portfolio. A current offer runs November 22–29 (4th night free, code HOMEBASE).

What this report cannot say: when the rebrand happened, or whether Roam is new. A guest quote on the stay page references a safari tent stay in March 2024, so the tents predate this week. Prior reads of the old site did not show them. The corporate price points ($545–650 pp/night, buyout from $19,500/night) are held at `STALE:2026-10-16` because the new corporate page was not readable.

Day-pass side is unchanged: $35, 9.2 from 224. Hipcamp curated position slipped to #10.

### Serana — [seranatx.com](https://www.seranatx.com/austin-corporate-retreats/)
6th direct read: no published price, up to nine guests. It now sits ~#7 on the corporate head term, one place above Rancho's blog. Its page gives two drive times (45 minutes and one hour). Still outside Rancho's 20–200 lane.

### 7744 Ranch — [7744ranch.com/corporate-rentals](https://www.7744ranch.com/corporate-rentals)
Unchanged: 100 for events, five mobile estates, ~20 minutes from downtown, no pricing, and the same 10-versus-18 overnight inconsistency. ~#6 on the ranch-variant corporate query, behind two Rancho URLs.

### Camp Lucy
Absent from the corporate head term for a second straight read. The September appearance at ~#2 did not persist.

### Third-party copy carriers — state of the map

| Surface | Carries banned sentence? | Evidence level | Reads |
|---|---|---|---|
| The Knot | Yes | Search #1 on exact phrase; engine names it the only source; page 403 | 8 |
| Brand-query answer | Yes | Uncontaminated brand query | Dirty 3 of last 4 |
| Yodel | Partly: "34 acres" only this read | Uncontaminated domain query | Weakening |
| Wed Society (Dec 2020 article) | Page gone | 404 on two fetch paths | Resolved |
| Wed Society vendor profile | No (empty stub) | Direct fetch | 1 |
| WeddingWire | Unconfirmed | No Rancho listing in domain query | 0 since 9/21 |
| Hotels.com | No | Uncontaminated domain query | 8 clean |
| Wheree | Unknown | Present in brand and exact-phrase sets; page 403 | Presence only |

Other off-site inconsistencies seen in the brand answer this week: Hipcamp says 37 acres, The Knot says capacity 300+, and the search snippet for ResortPass still shows the old 4.8 / 53 while the live page shows 9.4 / 57.

---

## Section 3 — Content Gap Analysis (Updated November 16)

| Content Type | Who Has It | Rancho Moonrise Status | Δ vs. last read |
|---|---|---|---|
| Glamping-intent SERP presence | Aggregators, Cameron Ranch, Spoon Mountain | 4 queries, 3 distinct owned URLs | ⬆ from 1 URL on 2 queries |
| Safari-tent SERP presence | Vrbo, Glamping Hub, Spoon Mountain | `/accommodations/` ~#3 | ⬆ new |
| Safari tents as a product | **Lucky Arrow (3 tents, private bath, clawfoot tub)** | Safari tents are core inventory | New like-for-like competitor |
| Day-pass pricing vs. market | Lucky Arrow $35 | $20 / $15 | Re-verified |
| Published corporate pricing | Lucky Arrow (held) | Custom-quoted | STALE:2026-10-16 |
| Wed Society presence | Venues in the 10/19 lodging article | Empty vendor stub; not in the article | New gap |
| Third-party listing copy hygiene | n/a | Knot 8th read; brand answer dirty | Wed Society carrier gone |
| Hipcamp curated "20 Best" | Lucky Arrow (#10), Ranch 3232 (#19) | Absent, 15th read | Competitors −2 each |
| Glamping Hub listing | Others | Absent | ~30 weeks |

---

## Section 4 — Quick Wins This Week

1. **Fix the venue description on The Knot (~15 min).** 8th read. The engine attributes the wrong unit and guest counts to this one listing.
2. **Fill in the Wed Society vendor profile and ask about the October 19 lodging article.** The profile page exists and is empty. Confirm cost first.
3. **Open the WeddingWire listing as a logged-in owner (~15 min).** Automation cannot read it.
4. **Glamping Hub submission, ~30 weeks absent.** Glamping Hub is #2 on the safari-tent query Rancho just entered.
5. **Hipcamp question for Ashley (15th read):** should the listing be bookable, or is it presence only?
6. **Correct the acreage on Hipcamp (37) and Yodel (34).** The site says 36.

---

## Section 5 — Recommendations for This Week

**Priority 1: The Knot description.** Same as every report since August, with stronger evidence: the engine names it as the only source.

**Priority 2: Don't change the title or H1 on four pages.** `/blog/weekend-getaways-near-austin/`, `/blog/glamping-near-austin-texas/`, `/accommodations/` and `/blog/things-to-do-manor-tx/` now hold every glamping, safari-tent and local-intent placement Rancho has. `rancho-site-daily` owns on-site changes.

**Priority 3: Re-read the two new gains before claiming them.** `safari tent austin texas` and `things to do Manor TX` are one read each.

**Priority 4: Watch Lucky Arrow's positioning, not its prices.** A managed "boutique resort" with safari tents 35 minutes out competes with Rancho on product for the first time. Rancho's distance advantage (20 minutes) and day-pass price are both intact and re-verified. Next week: read the new corporate page and confirm whether the published prices survived the redesign.

**Priority 5: Fix the publishing gap in this task.** The 10/5, 10/12, 10/19–11/9 runs never landed, and the 10/16 run wrote one of two dashboards and committed neither. This run publishes from a worktree and verifies both live URLs.

---

## Appendix: Rancho Moonrise Competitive Positioning (November 16, 2026)

| Attribute | Current State | Change Since Last Read |
|---|---|---|
| Tracked-keyword ranking (10-keyword baseline) | 6 / 10 | +1 vs 10/16 (things to do Manor) |
| Glamping intent | Blog ~#1 and ~#3; home ~#6 and ~#8; glamping guide #6 | ⬆ |
| Safari-tent intent | `/accommodations/` ~#3 | ⬆ new (1 read) |
| Corporate retreat | Head term ~#8–9 (2 URLs); venue keyword #7 + #8; ranch variant 4 URLs | Steady |
| Wedding cluster | `/weddings/` #6 and ~#5; blog ~#8; home ~#9 | Steady |
| Rancho day pass | $20 / $15, 9.4 / 57 | Unchanged, live |
| Lucky Arrow day pass | $35, 9.2 / 224 | +2 reviews |
| Lucky Arrow identity | Lucky Arrow Resort, new domain, 3 safari tents, Roam Hospitality portfolio | **Changed** |
| Lucky Arrow corporate pricing | $545–650 pp/night; from $19,500/night | STALE:2026-10-16 |
| Serana | No price; up to 9; ~#7 corporate head term | 6th read |
| Camp Lucy | Absent from corporate head term | 2nd read absent |
| The Knot listing copy | Confirmed, 8th read | = |
| Brand answer copy | Dirty | Reverted from 10/16 clean read |
| Wed Society | Old carrier article 404; vendor stub empty | Changed |
| Hotels.com listing copy | Clean, 8th read | = |
| Hipcamp curated list | Absent, 15th read; Lucky Arrow #10, Ranch 3232 #19 | Competitors −2 |
| Glamping Hub | Absent | ~30 weeks |
| `/safari-tents-near-austin/` | Not surfacing | Carried at site-daily's 11/15 read |
