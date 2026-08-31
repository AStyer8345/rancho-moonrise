# Rancho Moonrise — Competitive Intelligence Report
**Prepared for:** Rancho Moonrise Operations
**Subject Property:** Rancho Moonrise · 20117 Lockwood Rd, 78653 (20 min from downtown Austin)
**Research Date:** August 31, 2026
**Previous Report:** August 25, 2026 — *written but never published; see below*

---

## Executive Summary

**The August 25 report was never published, and this report is the first place that is written down.**

Everything the 8/25 run produced is still sitting uncommitted in the working tree, six days later:

- `site/competitive-intelligence.md` — rewritten, never committed
- `site/competitive-intelligence.html` — regenerated, never committed
- `site/improvement-plan.html` — **the Intel tab card was never inserted at all**, in either file

The newest Intel card on the dashboard Adam and every downstream agent read is **August 17**. The 8/25 report's own headline "Shipped this run" claim — *"the linked report and the written report are the same document again"* — has never been true in production. The regenerated HTML it was announcing exists only on this machine.

This is the same failure the 8/25 report itself diagnosed, one layer up. That report's headline finding was that a claim entered the record on April 6, was never re-verified, and propagated for four months. This one is narrower and worse: a run recorded its own output as shipped without checking the destination. Adam's standing guidance already names it — *verify irreversible actions at the destination, not by proxy signals*. A file written to disk is a proxy signal. A commit that reached `origin/main` is the destination.

**Fixed this run:** both the recovered August 25 card and today's card are inserted into both improvement-plan files, the report markdown and HTML are regenerated together, and all of it is committed and pushed.

**The material competitor change: Serana withdrew its published price, and repositioned.** For four months this report has recorded Serana as the only tracked competitor publishing a flat full-property buyout price — *"All for $1000 / night on weekdays."* That sentence is gone. The live corporate page now reads:

> *"Pricing is offered as a flat package rate based on the size of your group and the length of your stay."*

Custom-quoted on group size and length of stay — which is precisely Rancho's model. A varied query confirms the change is a repositioning, not a page edit: Serana now presents as a **21+ boutique wellness retreat** on 53 acres, **up to 20 guests across nine cabins**, with a saltwater pool, private spa, a 1,000 sq ft gym and yoga studio, and a second domain (`seranaretreats.com`). It also **dropped out of the corporate head term entirely**, where it held ~#4 six days ago.

The consequence is not that a competitor got weaker. It is that **the "published flat pricing" content gap this report has carried since May has half-closed by the competitor retreating from it, not by Rancho advancing.** Serana tried transparent buyout pricing and pulled it. That is worth knowing before recommending Rancho publish one.

**The last readable pricing path closed.** ResortPass returned **HTTP 403** to this report today — the same Cloudflare block `rancho-review-monitor` hit on 8/30. Rancho's `4.8★ / 53` and `$15 / $20`, and Lucky Arrow's `$35 / 4.6★ / 201`, are **held at their August 25 values, not re-verified, and explicitly not recorded as changed.** An access failure is not a data change. Four verification blockers now stand — The Knot, Hotels.com, WeddingWire, ResortPass — and all four name the same remedy.

**Rankings held where they were measured, with one regression.** The wedding cluster reproduced exactly: three owned URLs on one query, blog above the landing page, second consecutive read. The corporate ranch variant reproduced exactly. The corporate head term improved a slot. But the broad glamping variant went from **three owned URLs to one** — and that is one read, with a caveat that matters: the engine still names Rancho *first* in its written answer on that query. Entity recognition held where the URLs did not surface.

**⚡ Top 3 Actionable Findings (Week of August 31):**

1. **Nothing this report has recommended in six days has reached the dashboard.** The 8/25 quick-wins list — claim WeddingWire, fix The Knot description, add WeddingWire to `sameAs` — was never rendered anywhere Adam or Ashley would see it. Those three items are re-surfaced below unchanged. They have not been declined; they have never been asked.
2. **Do not recommend published buyout pricing without weighing Serana's retreat from it.** The single competitor that published a flat number stopped, and repositioned to a wellness/group model in the same move.
3. **The Knot description is confirmed a third time and is now the longest-standing off-domain defect on the property.** Three banned-copy violations and a 50-vs-300+ self-contradiction, live, on the listing that ranks on Rancho's own brand name.

---

## Re-Verify Gate — Claims Checked Live (August 31)

Brand canary run first: a bare `Rancho Moonrise` query returned `ranchomoonrise.com`. Measurement session valid; absences below are recordable.

| Claim | Live Verification (August 31) | Result |
|---|---|---|
| Serana publishes **$1,000/night** flat full-property weekday price; 8 cabins; only tracked competitor publishing a buyout number | **Price withdrawn.** Live page: *"Pricing is offered as a flat package rate based on the size of your group and the length of your stay."* Varied query confirms repositioning — **21+ boutique wellness retreat**, 53 acres, **up to 20 guests in nine cabins**, spa/gym/yoga studio, second domain `seranaretreats.com`. Also **dropped out of the corporate head term** (held ~#4 on 8/25). | ❌ **PRIOR CLAIM FALSE — RESOLVED** |
| August 25 Intel card dual-written to both improvement-plan files | **Never inserted in either file.** Newest card in both is **August 17**. `competitive-intelligence.md` + `.html` rewritten but uncommitted for 6 days. | ❌ **PRIOR CLAIM FALSE — fixed this run** |
| Rancho ResortPass: 2 products ($15/$20), 4.8★ / 53, pool 10am–6pm | **HTTP 403 / Cloudflare.** Listing page confirmed present in the search index; no price, rating or count readable. Only corroboration available is a 2024 review snippet citing ~$20 — not a current read. **Value HELD, not re-verified.** | ⚠️ **BLOCKED — held, not changed** |
| Lucky Arrow ResortPass: $35 day passes, 4.6★ / 201 | **HTTP 403 / Cloudflare**, same block. Search path returns the listing and day-pass description but no pricing. **Value HELD, not re-verified.** | ⚠️ **BLOCKED — held, not changed** |
| The Knot carries *"20 luxury cabins and safari tents for up to 50 guests"* | Reproduced **verbatim** under an exact-phrase query, The Knot listing returned #1. Hotels.com again did **not** reproduce the phrase. | ⚠️ **CONFIRMED — 3rd read** |
| WeddingWire listing exists (`/biz/rancho-moonrise/f38c5e35e5491216.html`) | Returned as the **#1 result** on a domain-phrased query, titled "Rancho Moonrise · Barn & Farm Weddings · Manor, TX". Direct fetch of the listing **and** of WeddingWire's Manor category page both **403**. | ✅ **STILL TRUE — 2nd read** (content still unread) |
| Hipcamp curated "20 Best" — Lucky Arrow #8, Rancho absent (9th read) | Full list read. Lucky Arrow holds **#8**; Ranch 3232 holds **#16**. *"Rancho Moonrise" does not appear anywhere on the page.* **10th consecutive read.** | ✅ STILL TRUE (10th) |
| Glamping Hub — Rancho absent (~19 wk) | No `glampinghub.com` property page for Rancho on a domain-restricted query. Now ~**20 weeks**. | ✅ STILL TRUE (drifted) |
| 7744 Ranch markets Rancho's exact geographic hook | Verbatim: *"just east of Austin—approximately 20 minutes from downtown."* 100 guests / 10 overnight, five mobile estates. **New detail:** estates up to **1,200 sq ft, most two storeys**; property now also carries an **Expedia listing**. | ✅ STILL TRUE (detail added) |
| `/safari-tents-near-austin/` not indexed ~121d | `site:` query returned **10 owned URLs** — including `/blog/glamping-vs-camping/`, not previously seen — and never the safari-tents page. Now ~**126 days** (+5d). | ✅ STILL TRUE (drifted) |
| `/weddings/` + blog + home all rank on overnight-lodging wedding intent (8/25, new) | **Reproduced exactly.** `/blog/wedding-venues-near-austin/` ~#3, `/weddings/` ~#4, homepage ~#6. | ✅ **STILL TRUE — 2nd read, confirms** |
| `/weddings/` absent on `wedding venue Austin TX ranch` because Ranch Austin owns it | Confirmed. That SERP returns Ranch Austin on **four** separate surfaces (HereComesTheGuide, WeddingWire, The Knot, own domain). Absence is query-specific, not a page defect. | ✅ STILL TRUE |
| Broad glamping variant — 3 owned URLs (home ~#4, blog ~#5, `/accommodations/` ~#6) | **Only 1 owned URL surfaced** — `/blog/weekend-getaways-near-austin/` ~#6. Home and `/accommodations/` absent. **But** the engine still names Rancho **first** in its written answer for this query. | ⚠️ **CHANGED — regression, 1 read** |
| Spoon Mountain holds top property slot on romantic term beneath HomeToGo | Unchanged. HomeToGo #1, Sage Hill ~#4, Spoon Mountain ~#5 (top property slot). Rancho not ranking. | ✅ STILL TRUE |
| Talula Mesa ~#3 on `glamping near austin tx` | Holds ~#3. **New detail published:** 4 tents on **15 acres**, Lake Travis 2 minutes away. | ✅ STILL TRUE (detail added) |
| Brand SERP — owned site present, ordering unstable (WATCH) | `ranchomoonrise.com` returned ~**#8–9**, below Do512, Hotels.com, LinkedIn, Facebook, Hipcamp, Instagram, Yelp. Same non-geolocated proxy artifact family. **Notable:** the banned "20 luxury cabins… 50 guests" copy did **not** appear in this run's aggregated brand snippet, which read cleanly (36 acres, up to 200 guests). | ⚠️ WATCH (carried) |

**Resolution summary:** 9 still_true (3 with new detail), 1 changed/regression, 1 WATCH, **2 prior claims proven false and resolved**, 1 confirmed-3rd-read, **2 blocked-and-held**.

---

## Section 1 — SERP Rankings Summary (August 31, 2026)

> Methodology note: SERP ordering below is from a US logged-out, non-geolocated web-search proxy — directional, not pixel-exact (no ads, map pack, or PAA interleaving). Competitor presence/absence is reliable; exact ranks are approximate. Brand canary passed before any absence was recorded.

| Keyword | Top SERP Sites (approx. order) | Named Competitors | Rancho Moonrise Position | Δ vs 8/25 |
|---|---|---|---|---|
| corporate retreat near austin texas | Teamout listicle, Sage Hill, Lucky Arrow, **Rancho Moonrise (blog)**, Peaceful Waters, Element Ranch, Wilder, 7744 Ranch | Sage Hill holds the top property slot. Lucky Arrow ~#3 ($545–650 pp/night). **Serana dropped out entirely.** Miraval in body. | ✅ **~#4** — `/blog/corporate-retreat-near-austin/` | ▲ +1 |
| corporate retreat venue near austin ranch | Milk and Honey, Artemis Ranch, **Rancho Moonrise (blog)**, Element Ranch, 7744 Ranch, **Rancho Moonrise (landing)**, Peaceful Waters | Milk and Honey #1, Artemis ~#2, 7744 Ranch ~#5. Set identical to 8/25. | ✅ **~#3 (blog)** and **~#6 (landing)** | = held exactly |
| ranch wedding venue + overnight lodging, 200 guests | wedsociety, The Knot (Ranch Austin), **Rancho Moonrise (blog)**, **Rancho Moonrise (/weddings/)**, Tequila Ranch, **Rancho Moonrise (home)**, Hudson Bend, Ranch Austin, Zola | Ranch Austin on 3 surfaces. Camp Hideaway, Allegro in body. | ✅ **~#3 (blog), ~#4 (`/weddings/`), ~#6 (home)** | = **held exactly — 2nd read** |
| best weekend getaways near austin texas 2026 | Vrbo, solotripsandtips, A Taste of Koko, **Rancho Moonrise (blog)**, HotelThemedRooms, Lake Travis Yacht Rentals | Still the only property domain in the set. **NEW: solotripsandtips.** Yelp dropped out. | ✅ **~#4** | = held |
| weekend getaway near austin glamping | Hipcamp, Glamping Hub, onechelofanadventure, texplorevibe, Retreat on the Hill, Udoscape, mountbonnell, Expedia | **NEW: texplorevibe, mountbonnell** (2 listicles). Lake Travis Eco-Glamping Pods in body. | ❌ Absent | = 2nd consecutive absence |
| glamping weekend getaway from Austin (broad variant) | Glamping Hub, Hipcamp, onechelofanadventure, A Taste of Koko, Retreat on the Hill, **Rancho Moonrise (blog)**, Udoscape, Cameron Ranch | La Fortuna, Flophouze (Round Top) in body. | ⚠️ **~#6 (blog only)** — home and `/accommodations/` dropped | ▼ **3 owned URLs → 1** |
| glamping near austin tx | Glamping Hub, Hipcamp, Talula Mesa, Walden, Green Acres ATX, Udoscape, Expedia | Aggregators #1–2. **Set identical to 8/25.** Talula Mesa now publishes 15 acres. | Not ranking | = |
| safari tent austin texas | Hipcamp, Glamping Hub, **Vrbo (Burnet County)**, Hipcamp (2nd), Safari for the Soul (×2 domains), Wahwahtaysee, Spoon Mountain, Expedia, Travelocity | **NEW: Vrbo entered.** TPW Magazine dropped out. Living Waters now presenting as "Lake Travis Retreat" — 7 accommodations incl. 2 safari tents. | Not ranking. `/safari-tents-near-austin/` not surfacing ~126d | = (drifted +5d) |
| romantic weekend getaways near austin | HomeToGo, So Much Life, Yelp, Sage Hill, **Spoon Mountain**, Romantic Spots Austin, Visit Austin | Unchanged from 8/25. Spoon Mountain holds the top *property* slot beneath the aggregator. | Not ranking | = |
| pool day pass Austin TX | Swimply, ResortPass (×2 category pages), Austin Motel, Tribeza, 365 Things Austin, Visit Austin, TimeOut | **NEW: TimeOut.** Van Zandt $35, Hyatt $30, Thompson $15 named in body. | Not ranking — ResortPass reaches this SERP, Rancho's own page does not | = |
| wedding venue Austin TX ranch (narrow) | HereComesTheGuide, WeddingWire, wedsociety, The Knot, Facebook, Star Hill Ranch, Rambling Rose Ranch, Twisted Ranch Weddings, ranchaustin.com, Pecan Springs Ranch | **Ranch Austin owns 4 of 10 surfaces.** **NEW tracked:** Star Hill Ranch, Rambling Rose Ranch, Twisted Ranch Weddings (200 ac), Pecan Springs Ranch (17 ac). | Not ranking — see Gate; ranks ~#4 on the longer intent query | = query-specific |
| Rancho Moonrise (brand) | Do512, Hotels.com, LinkedIn, Facebook, Hipcamp, Instagram, Yelp, **ranchomoonrise.com** (×2), Romantic Spots Austin | Canary passed. **Banned copy absent from this run's brand snippet.** The Knot dropped out of the brand set; Hipcamp + Instagram entered. | Ranking ~#8–9 (ordering unstable — see WATCH) | ⚠️ |

**Rancho non-brand placement: 5 distinct owned URLs across 4 of 11 tracked non-brand queries — down from 7 URLs across 5 queries on August 25.**

The entire decline is one query: the broad glamping variant shed the homepage and `/accommodations/`. Every other measured position held or improved. Treat as one read, not a trend — and note that the engine's *written* answer on that same query still leads with Rancho.

---

## Section 2 — Competitor Highlights

### The Week's Story — A Competitor Withdrew From The Gap We Were Told To Close

Serana has been the anchor of one row in this report's content-gap table since May: **published flat pricing for buyouts**, at $1,000/night for the full property on weekdays. It was the concrete proof that a comparable operator could publish a buyout number, and it sat underneath a recommendation to consider the same.

That sentence no longer exists on the page. What replaced it:

> *"Pricing is offered as a flat package rate based on the size of your group and the length of your stay."*

A flat package rate quoted per enquiry against group size and stay length is not published pricing. It is Rancho's model, described in Serana's words.

The rest of the repositioning came from a varied query rather than a re-fetch — the discipline this property learned the hard way, that a second attempt at the same request confirms nothing:

| Attribute | Prior (through 8/25) | Live (8/31) |
|---|---|---|
| Positioning | Corporate retreats | **21+ boutique wellness retreat** |
| Price | **$1,000/night full property, weekday** | Flat package rate, quoted per enquiry |
| Units | 8 — 5 Post Oak, 3 Kampinas, 1 Field Cabin | **9 cabins** (six cabins + three Airstreams) |
| Capacity | Not stated | **Up to 20 guests** |
| Distance | ~30 mi SE of Austin | 45 min from Austin |
| Amenities | Not detailed | Saltwater pool, private spa, **1,000 sq ft gym + yoga studio**, day lodge with chef's kitchen |
| Domains | `seranatx.com` | `seranatx.com` **+ `seranaretreats.com`** |
| Corporate head term | ~#4 | **Not present** |

Read plainly: an operator with directly comparable inventory tested transparent buyout pricing, then withdrew it and moved upmarket into wellness. That is evidence *against* the published-pricing recommendation, not for it, and it arrived from the only competitor that had ever supplied evidence for it.

### The Verification Surface Closed Further — ResortPass Is Now Blocked Too

ResortPass returned **HTTP 403** to this report today. `rancho-review-monitor` recorded the same block on 8/30 and called it correctly: site-level bot detection, not a fetcher quirk. Six days ago this report read the Rancho and Lucky Arrow listings cleanly and in full.

What that costs, specifically: the day-pass pricing recommendation — Rancho at $20 and 4.8★ against Lucky Arrow at $35 and 4.6★ — is this report's single most concrete, most repeated, most actionable finding, and it can no longer be refreshed. It is not wrong. It is frozen at August 25.

**Held, explicitly not re-verified, explicitly not recorded as changed:**

| | Rancho Moonrise | Lucky Arrow Retreat |
|---|---|---|
| Adult day pass | **$20** *(held 8/25)* | **$35** *(held 8/25)* |
| Half-day pass | $15 *(held)* | — |
| Rating | **4.8★** *(held)* | 4.6★ *(held)* |
| Review count | 53 *(held)* | 201 *(held)* |
| Pool hours | 10:00am–6:00pm *(held)* | 12:00pm–8:00pm *(held)* |

Four verification blockers now stand, and they are one problem:

| Platform | Failure | Since |
|---|---|---|
| The Knot | 60s timeout | 2026-05-23 |
| Hotels.com | 60s timeout | 2026-04-17 |
| WeddingWire | 403 | 2026-08-25 |
| **ResortPass** | **403 / Cloudflare** | **2026-08-31 (this report)** |

All four are third-party listings carrying Rancho's own off-domain description, pricing, or review pool. `rancho-review-monitor` reached the same count from its own side on 8/30 and framed it exactly right: this is now **one purchase against six platforms**, re-litigated per-platform for four months.

### The Knot — Confirmed A Third Time

An exact-phrase query returned The Knot listing first and reproduced the sentence verbatim:

> *"Rancho Moonrise contains 20 luxury cabins and safari tents for up to 50 guests, making it suitable for destination weddings where guests can stay overnight."*

Four defects in one listing, unchanged since first confirmation:

1. **"luxury"** — banned word (`VOICE-GUIDE.md`)
2. **"20 … cabins and safari tents"** — banned specific unit count
3. **"up to 50 guests"** — contradicts the site's own `maximumAttendeeCapacity: 200`
4. **50 vs "300+"** — the listing contradicts itself by a factor of six

Hotels.com again failed to reproduce the phrase under a restricted query. The 8/25 re-attribution holds: **The Knot is the confirmed carrier; Hotels.com is suspected only.**

One genuinely new observation, and it cuts the other way: **this run's aggregated brand snippet did not contain the banned copy.** It read cleanly — 36 acres, up to 200 guests, safari tents and hand-crafted cabins. On 8/25 the banned sentence was present in that snippet. That is a single read and not enough to claim the copy has stopped propagating, but it is the first time the brand-level answer has been clean, and it is worth watching rather than asserting.

### Rankings — The Wedding Cluster Reproduced Exactly

The 8/25 report recorded three owned URLs on one wedding query as a new measurement. New measurements on this property have a history of being artifacts. This one is not:

| URL | 8/25 | 8/31 |
|---|---|---|
| `/blog/wedding-venues-near-austin/` | ~#3 | ~#3 |
| `/weddings/` | ~#4 | ~#4 |
| `ranchomoonrise.com` (home) | ~#6 | ~#6 |

Identical, six days apart. The blog-above-the-landing-page pattern now stands at **3 clusters, confirmed on repeat reads**, and the blog pipeline has been paused since 2026-04-23 on operational grounds that predate any of this evidence.

The one regression is the broad glamping variant, which shed the homepage and `/accommodations/` and kept only the blog post. Recorded as changed, flagged as one read. The caveat that keeps it from reading as a collapse: on that exact query the engine's written answer still opens with Rancho Moonrise, described accurately. The entity is recognised; the URLs did not place.

### New Surfaces Discovered This Run

Four third-party surfaces carrying Rancho content, none of them previously tracked and none in the site's `sameAs` graph:

- **Pop & Drop TX** — `popanddroptx.com/blog/vibrant-streamer-decor-for-eclectic-ranch-wedding-venue-rancho-moonrise-in-manor-texas`. An event-decor vendor's case study of a Rancho wedding. Editorial, keyword-rich, wedding-intent.
- **Rowan & Birch** — `rowanandbirch.com/stories/rancho-moonrise-wedding`. Wedding photographer's story feature.
- **Well City Guide** — `wellcityguide.com/articles/rancho-moonrise`. Surfaced on three separate queries this run.
- **Wheree** — `rancho-moonrise.wheree.com`. Aggregator listing, "Resort in Travis County".

Also confirmed live: a **TripAdvisor listing page** at `tripadvisor.com/Hotel_Review-g56224-d33307272-Reviews-Rancho_Moonrise-Manor_Texas.html`. The listing exists with a stable property ID. **Review and claim state on that listing belongs to `rancho-review-monitor` and is deliberately not asserted here** — but the URL itself is what `rancho-p1-05-tripadvisor-weddingwire` needs to act, and it has not previously been written down.

### Re-Confirmed Competitor State

#### Serana — [seranatx.com](https://www.seranatx.com/austin-corporate-retreats/) · [seranaretreats.com](https://www.seranaretreats.com/)
**Repositioned.** 21+ boutique wellness retreat, 53 acres, Paige TX. Nine cabins (six cabins + three Airstreams), up to 20 guests. Saltwater pool, private spa, 1,000 sq ft gym and yoga studio, day lodge with chef's kitchen. 45 min from Austin, 90 from Houston. 50% non-refundable deposit, balance 30 days before arrival. **No published nightly price.** Off the corporate head term.

#### Lucky Arrow Retreat — [luckyarrowretreat.com](https://luckyarrowretreat.com)
15 acres outside Dripping Springs. ResortPass values **held at 8/25** ($35 day passes, 4.6★/201) — listing unreadable this run. Holds Hipcamp curated **#8**. Corporate SERP ~#3, publishing $545–650 per person per night and 40+ corporate retreats annually. Adults-only and family pools, Beer Garden with axe throwing and arcade games.

#### 7744 Ranch — [7744ranch.com/corporate-rentals](https://www.7744ranch.com/corporate-rentals)
Re-confirmed verbatim: *"just east of Austin—approximately 20 minutes from downtown,"* referencing the Tesla Giga Factory and COTA. 100 event guests / 10 overnight in five mobile estates. **New detail:** estates up to **1,200 sq ft, most two storeys**; the property now also carries an **Expedia listing** (`The Heat @ 7744 Ranch`). Closest positional overlap with Rancho's geographic hook; not substitutive at scale.

#### Safari for the Soul — two domains, both ranking
"Five luxury, adults-only safari tents on 6 secluded acres," Marble Falls, 45 minutes from Austin. Both `safariforsoulglamping.com` and `safariforthesoulglamping.com` returned on the safari-tent term again.

#### Wahwahtaysee Resort
**100+ acres** on the San Marcos River, 50 miles south of Austin. Safari tents plus cabins. Consistently present on the safari-tent term.

#### Sage Hill Inn & Spa — [sagehill.com](https://www.sagehill.com/corporate-events)
88 acres. Top property slot on the corporate head term and ~#4 on the romantic term with a separate page. Publishes private hot tubs, garden-to-table dining, ~30 min from Austin.

#### Spoon Mountain Glamping — [spoonmountainglamping.com](https://spoonmountainglamping.com/)
3 private safari tents, Wimberley, adults-only, each with private pool and soaking tub. Holds the top *property* slot on the romantic term beneath HomeToGo. Also ranks on the safari-tent term with a dedicated 2026 guide page.

#### Talula Mesa — [talulamesa.com](https://www.talulamesa.com/)
Holds ~#3 on the glamping head term. **Now publishing 15 acres** with 4 luxury glamping tents; Lake Travis 2 minutes away, paddleboards and kayaks available. Marble Falls.

#### Newly Tracked — Wedding/Ranch Cluster
**Star Hill Ranch** (historic Pontotoc Chapel, hundreds of weddings since 2004), **Rambling Rose Ranch** (15 min from downtown, LGBT-owned), **Twisted Ranch Weddings** (**200 acres**, Hill Country), **Pecan Springs Ranch** (17 acres, 10 miles from downtown). All four surfaced on the narrow ranch-wedding term where Rancho does not rank.

---

## Section 3 — Content Gap Analysis (Updated August 31)

| Content Type | Who Has It | Rancho Moonrise Status | Δ vs. August 25 |
|---|---|---|---|
| **Published flat pricing for buyouts** | ~~Serana ($1,000/night)~~, Lucky Arrow ($545–650 pp/night) | Custom-quoted | ❌ **Serana WITHDREW its published price — gap half-closed by competitor retreat** |
| **WeddingWire listing** | Ranch Austin, Honeysuckle Ranch | **LISTING EXISTS** — 2nd read. Claim status still unread (403 on listing *and* category page). | Confirmed 2nd read |
| Own-domain listicle / guide content | Spoon Mountain, Cameron Ranch, Udoscape, A Taste of Koko, onechelofanadventure | 18-post cluster — **blog at or above landing page in 3 of 3 clusters, wedding cluster now confirmed on repeat read** | ✅ **Strengthened — reproduced** |
| Corporate retreat landing page | Sage Hill, Lucky Arrow, Element Ranch, 7744 Ranch, Artemis, Milk and Honey | Indexed, ranking ~#6 (blog above it at ~#3) | Held exactly |
| Wedding landing page | Ranch Austin (4 surfaces), Tequila Ranch, Hudson Bend, Star Hill, Pecan Springs | `/weddings/` ranking ~#4 (blog above it at ~#3) | ✅ Held exactly — 2nd read |
| Dedicated safari tent landing page | Safari for the Soul, Wahwahtaysee, Spoon Mountain, Vrbo listings | Built, FAQPage schema. **Still not surfacing ~126 days** | Drifted +5 days |
| Day-pass pricing | Lucky Arrow ($35 — held, unreadable) | **$20 / $15 half-day at 4.8★** — held, unreadable | ⚠️ **Both sides frozen — ResortPass 403** |
| ResortPass experience products | — | Unreadable this run; last read 2 products | 4th read attempt, 1st failure |
| Aggregator SERP presence | Swimply, HomeToGo, Hipcamp, Glamping Hub, Travelocity, Vrbo, Expedia, TimeOut | Present on Hipcamp only (uncurated) | Consolidation continues |
| Hipcamp curated "20 Best Glamping" | Lucky Arrow (#8), Ranch 3232 (#16), 18 others | Active listing — **absent across 10 consecutive reads** | Gap holds, 10th |
| Glamping Hub listing | Talula Mesa, Udoscape, Safari for the Soul | Still absent | ~**20 weeks** (was ~19) |
| Per-unit accommodation URLs | Retreat on the Hill, Safari for the Soul (5), Lucky Arrow | 4 categories on `accommodations.html` | Unchanged — blocked on low-res source JPGs |
| Third-party listing copy hygiene | n/a | **The Knot: banned copy CONFIRMED 3rd read.** Brand snippet clean this run (1st time). | Escalated; snippet improvement to watch |
| Earned media / editorial | (various) | Tribeza, Yahoo News, MTHR Collective, Awae Retreats, VenueScanner + **Pop & Drop TX, Rowan & Birch, Well City Guide, Wheree** | **+4 surfaces** |

---

## Section 4 — Quick Wins This Week

The first three were the 8/25 quick wins. They were never published anywhere Adam or Ashley would see them, so they are re-surfaced unchanged — not declined, never asked.

1. **Claim + optimize the WeddingWire listing (Ashley or Adam, ~15 min).** It exists, confirmed twice. Content and claim status still unreadable from here (403 on both the listing and the Manor category page), so this is a job only a logged-in human can even inspect.
2. **Fix the venue description on The Knot (Ashley or Adam, ~15 min).** Three banned-copy violations plus a 50-vs-300+ self-contradiction, confirmed a third time, live on the listing that ranks on Rancho's own brand name.
3. **Add WeddingWire to the site's `sameAs` array** — one of five URLs excluded on 8/19 for lack of confirmation. Confirmed twice now. Owned by `rancho-site-daily`.
4. **GSC — request indexing on `/safari-tents-near-austin/` only (Adam, ~2 min).** ~126 days, the lone holdout. Eleventh read of this item.
5. **Glamping Hub submission — ~20 weeks absent.** Free, ~15 min at `glampinghub.com/list-your-property`. Glamping Hub holds #1 or #2 on three tracked head terms.
6. **Hipcamp curation question for Ashley — 10th read.** *"Is the Hipcamp listing intentionally private — SEO presence only — or do we want bookings from it?"*
7. **Do not act on the day-pass pricing gap on new evidence — there isn't any.** The recommendation stands on 8/25 data and cannot currently be refreshed.

---

## Section 5 — Recommendations for This Week

**Priority 1 — Publish the report, then act on it.** This report's recommendations have not been rejected; for six days they have not been visible. The Intel tab is the interface between this task and every human and agent downstream of it, and it has been stale since August 17 while the markdown was rewritten twice. Both cards are inserted and pushed this run. The durable fix is that a run may not describe its own output as shipped until the commit reaches `origin/main` — the destination, not the file on disk.

**Priority 2 — Revise the published-pricing recommendation downward.** Serana was the entire evidence base for it, and Serana withdrew. An operator with comparable inventory published a flat buyout number, then replaced it with quote-on-request and moved upmarket into wellness. The honest read is that we do not know whether it failed, but we do know the one competitor who tried it stopped. Rancho should not publish a buyout price on the strength of a comparison that no longer exists.

**Priority 3 — The two vendor-dashboard jobs remain the highest-value half hour on this property (Ashley or Adam, ~30 min).** The Knot description and the WeddingWire claim. Both entirely off-domain, neither doable by an agent, both now confirmed on repeat reads. Unchanged from 8/25 because they were never seen.

**Priority 4 — Buy the rendering scraper, or accept that off-domain state is now unmeasurable.** Four blockers on this report, six platforms across this property, one remedy, four months of per-platform re-litigation. ResortPass closing is the one that costs something concrete: it froze the single most actionable number this report produces. `rancho-review-monitor` reached the same conclusion independently on 8/30. Two tasks converging on one purchase from different evidence is as strong a signal as this system generates.

**Priority 5 — Reopen the blog pipeline, or decide explicitly not to.** Three clusters, and the wedding cluster now reproduced exactly on a second read six days apart. The 2026-04-23 pause was set on operational grounds before any of this was measurable. The decision belongs to Ashley; the evidence is no longer ambiguous and is no longer single-read.

**Priority 6 — Watch the broad-glamping regression, do not act on it.** Three owned URLs to one, on one query, on one read, while the same query's written answer still leads with Rancho. That is the shape of query-level variance, not a penalty. It becomes real if it reproduces on September 7.

---

## Appendix: Rancho Moonrise Competitive Positioning (August 31, 2026)

| Attribute | Current State | Change Since August 25 |
|---|---|---|
| **Report publication** | 8/25 report + Intel card **never committed or inserted**; dashboard stale at Aug 17 | ❌ **Process defect found and fixed this run** |
| **Serana pricing** | **No published price** — flat package rate on request. Repositioned to 21+ wellness, 9 cabins, 20 guests, 53 acres. Off the corporate head term. | ❌ **PRIOR "$1,000/night" CLAIM FALSE — RESOLVED** |
| Organic ranking — wedding | ✅ ~#3 (blog), ~#4 (`/weddings/`), ~#6 (home) on overnight-lodging intent | ✅ **Held exactly — 2nd read confirms** |
| Organic ranking — corporate retreat | ✅ ~#3 (blog) / ~#6 (landing) on ranch variant; ~#4 (blog) on head term | Head term ▲+1; ranch variant held exactly |
| Organic ranking — weekend getaway | ✅ ~#4 on the 2026 listicle term; ~#6 (blog) on broad glamping variant; absent on narrow phrasing | ▼ broad variant 3 URLs → 1 |
| Organic ranking — glamping head term | Not ranking. Aggregators #1–2; Talula Mesa ~#3 | = set identical |
| Organic ranking — safari tent | Not ranking. Vrbo entered; TPW Magazine out | Minor churn |
| Organic ranking — romantic | Not ranking. HomeToGo #1; Spoon Mountain top property slot | = |
| Organic ranking — pool day pass | Not ranking. Swimply #1; ResortPass ~#2–3; TimeOut new | Rancho reaches this SERP only as a ResortPass tenant |
| Organic ranking — branded | Owned site ~#8–9 below 7 third-party surfaces | ⚠️ WATCH (proxy artifact) |
| Distinct owned URLs ranking non-brand | **5** across 4 of 11 tracked queries | ▼ from 7 across 5 — entirely one query |
| GSC indexing — `/safari-tents-near-austin/` | Not surfacing ~126 days | +5 days |
| **ResortPass listing** | **UNREADABLE — 403/Cloudflare.** Held: 2 products, $15/$20, 4.8★/53, pool 10am–6pm | ⚠️ **NEW BLOCKER — held, not changed** |
| Day-pass price vs market | $20 vs Lucky Arrow $35 — both **held at 8/25**, neither re-verifiable | ⚠️ Frozen |
| Blog cluster | 18 posts, paused 2026-04-23 — at or above the landing page in 3 of 3 clusters, wedding cluster reproduced | ✅ Strengthened |
| The Knot listing copy | ⚠️ **CONFIRMED banned copy, 3rd read.** "20 luxury cabins… up to 50 guests" + "300+ guests" | Confirmed again |
| Brand snippet copy | **Clean this run** — 36 acres, up to 200 guests, no banned copy | ⚠️ First clean read — watch, do not claim |
| Hotels.com listing copy | Suspected carrier — not reproduced under restricted query, 2nd consecutive | Attribution holds |
| WeddingWire | ✅ Listing exists, 2nd read. Content + claim status unread (403 ×2) | Confirmed |
| Hipcamp | Active listing — NOT in curated "20 Best". Lucky Arrow #8; Ranch 3232 #16 | Gap holds, **10th read** |
| Glamping Hub | ❌ Still not listed | ~**20 weeks** |
| TripAdvisor | Listing page confirmed live (`d33307272`). Review/claim state owned by `rancho-review-monitor` | URL newly recorded |
| Earned media | Tribeza, Yahoo News, MTHR Collective, Awae Retreats, VenueScanner, **Pop & Drop TX**, **Rowan & Birch**, **Well City Guide**, **Wheree** | **+4 surfaces** |
| Lucky Arrow status | $35 / 4.6★ / 201 **held**; Hipcamp curated #8; corporate SERP ~#3; 15 acres | Unreadable — held |
| 7744 Ranch status | "20 min from downtown, just east of Austin." 100 guests / 10 overnight. Estates 1,200 sq ft, two storeys. **Now on Expedia.** | Detail added |
| New entrants tracked | **Star Hill Ranch**, **Rambling Rose Ranch**, **Twisted Ranch Weddings** (200 ac), **Pecan Springs Ranch** (17 ac) | +4 (wedding cluster) |
| New aggregators in tracked SERPs | **Vrbo** (safari tent), **TimeOut** (pool day pass), **texplorevibe** + **mountbonnell** + **solotripsandtips** (listicles) | +5 |
| Verification blockers | The Knot (timeout), Hotels.com (timeout), WeddingWire (403), **ResortPass (403, NEW)** | **+1 — all four are off-domain listing content** |
