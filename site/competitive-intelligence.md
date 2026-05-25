# Rancho Moonrise — Competitive Intelligence Report
**Prepared for:** Rancho Moonrise Operations
**Subject Property:** Rancho Moonrise · 20117 Lockwood Rd, 78653 (20 min from downtown Austin)
**Research Date:** May 25, 2026
**Previous Report:** May 18, 2026

---

## Executive Summary

A quiet week on the subject-property side (no new external touchpoints, no indexing breakthrough on the post-launch landing pages, ResortPass decision still drifting), but two competitor-side findings worth recording.

**First — Safari for the Soul has migrated domains.** The `safariforthesoul.com` domain that hosted the property all spring now `301`-redirects to `janboalauthor.com` (an unrelated author site). The actual property is now at `safariforthesoulglamping.com` — that's where the SERP #1 result for `safari tent austin texas` resolves. The accommodation list on the new domain reads slightly differently from last week's snapshot: **Marble Falls: Cosmic Nights (safari tent), Sabi Nights (safari tent), Moonlight Magic (yurt), Starry Nights (yurt); Spicewood: Tentation (yurt) + KickBack Cove Home (residential).** That's **2 safari tents + 3 yurts + 1 residential across two properties**, not "1 safari tent + 4 yurts" as captured 5/18. Last week's read either missed Sabi Nights or the page was mid-edit. Either way, the brand-mix-shift framing holds — they remain a tent-and-yurt hybrid, not the "5 safari tents" property the SERP snippet still describes.

**Second — Spoon Mountain's `/romantic-weekend-getaways-near-austin/` is back in the weekend-getaway top 10 after one week out.** On May 18 it had dropped from the SERP after exactly one week; today it's surfacing again at position 9. That changes the May 11 → May 18 framing of "one-week SERP half-life" into a "in/out/in" oscillation pattern over three weeks — closer to a content piece that's earned a real (if unstable) slot than a one-time spike.

Rancho Moonrise remains not ranking on any non-brand query. The ResortPass listing is still dormant — same state as 5/18, no Adam-side decision yet. The two post-launch landing pages (`/corporate-retreats/` 24 days, `/safari-tents-near-austin/` 29 days) are still not in Google's index, though apex indexing has continued to expand: filtered `site:ranchomoonrise.com safari tents` query now surfaces apex, `/faqs/`, `/policies/`, `/weddings/`, `/contact/`, `/accessibility/`, `/event/july-4th/`, and several event-calendar URLs.

**⚡ Top 3 Actionable Findings (Week of May 25):**

1. **ResortPass listing decision is now 7 days overdue — same 30-second Ashley question, still pending.** [resortpass.com/hotels/rancho-moonrise](https://www.resortpass.com/hotels/rancho-moonrise) unchanged from 5/18: dormant, 0 products, correct address, 3-star designation. Activate or kill.
2. **GSC URL-Inspection on `/corporate-retreats/` (24d uncrawled) + `/safari-tents-near-austin/` (29d uncrawled).** Same item as 5/18. Apex is now expanding in the index; the post-launch landing pages are the bottleneck. ~5 min in Search Console.
3. **Safari for the Soul domain move worth noting in any external listings/citations of competitors.** If any internal docs or future content cite `safariforthesoul.com`, the link is dead. The live property is at `safariforthesoulglamping.com`.

---

## Re-Verify Gate — Claims from May 18 Checked Live (May 25)

| Claim | Live Verification (May 25) | Result |
|---|---|---|
| Rancho Moonrise ResortPass listing exists but dormant | WebFetch resortpass.com/hotels/rancho-moonrise — "This property has no active products at the moment." Address 20117 Lockwood Rd, 3-star, pool hours 10am–6pm. | ✅ STILL TRUE |
| Lucky Arrow ResortPass dormant, no public reactivation date | WebFetch resortpass.com/hotels/lucky-arrow-retreat — "This property has no active products at the moment." No reactivation date. | ✅ STILL TRUE |
| Lucky Arrow 5 accommodation types (Courtyard Cabins 16, Porch Houses 5, Breezeway Cabins 6, Yurts 10, Safari Tents 3) | WebFetch luckyarrowretreat.com/lodging — all 5 categories + counts identical | ✅ STILL TRUE |
| Safari for the Soul: 1 safari tent + 4 yurts across Spicewood + Marble Falls | **STATE CHANGE — DOMAIN MOVED.** `safariforthesoul.com` now 301-redirects to `janboalauthor.com`. Live property at `safariforthesoulglamping.com`. Accommodation list reads: Marble Falls — Cosmic Nights (safari tent), Sabi Nights (safari tent), Moonlight Magic (yurt), Starry Nights (yurt); Spicewood — Tentation (yurt), KickBack Cove Home (residential). **2 safari tents + 3 yurts + 1 residential.** Last week's count of "1 safari tent" was an undercount. | ⚠️ STATE CHANGE — domain moved + corrected count |
| Walden Retreats "15 luxury glamping tents… each sleeps 2-4" | WebFetch waldenretreats.com — 15 luxury glamping tents intact. Variants now visible on the site: Premier Suites + Studios + Studios with Soaking Tubs. Unit count 15 holds. | ✅ STILL TRUE (variant labels added) |
| Spoon Mountain 3 tents, private pools, $60/day heating | WebFetch spoonmountainglamping.com — Kingfisher, Shaka, Chisum; "Each pool is a seamless blend of comfort and nature"; heating $60/day verbatim | ✅ STILL TRUE |
| The Yurtopian `/corporate-retreats-in-texas-hill-country/` live, dropped from corporate-retreat top 10 | WebFetch — page is LIVE with 10 yurts, group sizes 1-4 / 5-9 / 10-20, indoor lodge + presentation capability + outdoor pavilion. Did NOT re-enter the corporate-retreat top 10 this week. | ✅ STILL TRUE (page live, off SERP) |
| Spoon Mountain `/romantic-weekend-getaways-near-austin/` dropped from weekend-getaway top 10 after one week | **STATE CHANGE — RETURNED to top 10.** Page is back at position 9 in `weekend getaway near austin glamping` SERP today. One-week-out / one-week-back oscillation, not a clean drop-out. | ⚠️ STATE CHANGE — returned |
| Hipcamp curation gap — Rancho not on "20 Best Glamping Near Austin" landing | WebFetch hipcamp.com/d/.../austin/camping/glamping — 20 properties confirmed (Dos Rios, The Charmadillo, Seco Ridge, 3 Dry Wells Ranch, Ranch 3232, Boulderdash, Mystic Quarry, etc.). Rancho still absent. Carousel rotated since 5/18 (Twisted Oaks/P²/Off Grid/Missing Hotel/Reserve at GreenLeaf cycled out). | ✅ STILL TRUE |
| Rancho Moonrise branded SERP #1, non-brand 0/N | Live SERPs — ranchomoonrise.com #1 brand query, Vercel apex 200 OK `server: Vercel` `x-vercel-cache: HIT`. 0 non-brand placements on glamping / safari tent / corporate retreat / weekend getaway / Manor wedding venue. | ✅ STILL TRUE |
| Google apex indexing — 11+ pages indexed including apex, host-your-event, events, accommodations, policies | WebSearch via multiple `site:ranchomoonrise.com` filters — apex, `/blog/`, `/blog/things-to-do-manor-tx/`, `/blog/bachelorette-party-austin-texas/`, `/faqs/`, `/policies/`, `/weddings/`, `/contact/`, `/accessibility/`, `/event/july-4th/`, `/testimonial-category/event-hosting/`, `/events/list/?tribe-bar-date=2024-09-11`, `/events/month/2025-08/` all surfacing | ✅ STILL TRUE — index has continued to expand |
| `/corporate-retreats/` (17d) + `/safari-tents-near-austin/` (22d) not indexed | Filtered `site:ranchomoonrise.com corporate retreats` and `site:ranchomoonrise.com safari tents` queries — neither target URL surfaces. 24d and 29d now. | ✅ STILL TRUE — drifting longer |

**Resolution summary:** 2 prior claims show STATE CHANGE (Safari for the Soul domain move + count correction; Spoon Mountain weekend-getaways page returned to top 10). 10 prior claims still true. 0 auto-resolved this run.

---

## Section 1 — SERP Rankings Summary (May 25, 2026)

| Keyword | Top SERP Sites | Named Competitors in Top 10 | Rancho Moonrise Position |
|---|---|---|---|
| glamping near austin tx | Hipcamp listicle (#1), **Camposanto ATX** (NEW), Udoscape, Walden Retreats, The Yurtopian, Yelp Austin, Cameron Ranch, Talula Mesa, Glamping Hub, Expedia/Gary Dome | **New entrant: Camposanto ATX** (Lake Travis / Graveyard Point neighborhood). | Not ranking |
| safari tent austin texas | **Safari for the Soul Glamping** (NEW DOMAIN `safariforthesoulglamping.com`) #1, Hipcamp safari-tent landing, Wahwahtaysee, Glamping Hub, Spoon Mountain, Safari for the Soul alt-domain (`safariforsoulglamping.com` — typo-variant), Hipcamp state-level, Glamping Hub Spicewood, Expedia Marble Falls tent | Safari for the Soul moved primary domain. Alt-variant `safariforsoulglamping.com` also surfaces (typo/alternate). | Not ranking |
| corporate retreat near austin texas | Wilder Retreats (#1), Element Ranch, TeamOut listicle, Moniker Partners, **planretreat.com** (NEW listicle), Sage Hill /corporate-events, Moniker Partners blog, Peaceful Waters, 7744 Ranch, **The Retreat at Crystal Creek** (BACK) | **New entrants: planretreat.com listicle, The Retreat at Crystal Creek** (returned after one week out). Yurtopian still off the SERP. | Not ranking. `/corporate-retreats/` still uncrawled 24 days post-launch |
| weekend getaway near austin glamping | Hipcamp listicle (#1), Udoscape, Cameron Ranch best-glamping listicle, Glamping Hub, Walden Retreats, Texplore Vibe listicle, The Retreat on the Hill, Talula Mesa, **Spoon Mountain `/romantic-weekend-getaways-near-austin/`** (BACK), Mount Bonnell 15 Best Spots listicle | Spoon Mountain content page returned after one week out. The Yurtopian holds top 10 slot. | Not ranking |
| pool day pass austin glamping | ResortPass /s/.../austin/pool, **Lucky Arrow ResortPass (dormant)**, ResortPass /austin/hotel-day-passes, Do512, 365 Things Austin, Austin Motel, Dayuse, Do512 Family, W Austin ResortPass | Lucky Arrow still only glamping property on this SERP. **Rancho Moonrise's ResortPass listing exists but doesn't surface here** — dormant + 0 products = no SERP weight. | Not ranking. Listing exists, inactive (7th day drift) |
| wedding venue manor tx | Sandlewood Manor (Tomball), Eventective (180 venues), Briscoe Manor (Houston), WeddingWire (10 venues), The Knot Manor TX, Wedding Spot (5 venues), Ashelynne Events (Magnolia), **TerrAdorna direct domain** (NEW — direct, was subpage), PartySlate, Yelp Manor 78653 | TerrAdorna now surfaces via direct/Nearme listing (was a /listings/.../highly-rated-terradorna URL on 5/18). Honeysuckle Ranch surfaces in WeddingWire/Knot subpages. | Not ranking |
| Rancho Moonrise (brand) | **ranchomoonrise.com (#1, Vercel apex, 200 OK)**, Yelp /biz/rancho-moonrise-manor, Hipcamp /land/texas-rancho-moonrise-dw9hklej, /blog/things-to-do-manor-tx/, Facebook, Hotels.com ho2867109568, LinkedIn, The Knot marketplace, Roadtrippers, Do512 venue | Hotels.com listing still surfacing (ho2867109568) with banned-copy "20 luxury cabins…" framing. ResortPass listing IS indexed but did not surface in this run's top 10 (was in 5/18's run). | **Ranking #1** (branded only) |

---

## Section 2 — Competitor Highlights

### Material State Change — Safari for the Soul Domain Migration

**Previous primary domain:** [safariforthesoul.com](https://safariforthesoul.com) (now 301-redirects to `janboalauthor.com`)
**New primary domain:** [safariforthesoulglamping.com](https://safariforthesoulglamping.com)

**What it shows:**
- Tagline: *"Allow yourself to indulge in the Hill Country's best-kept secret… Luxury glamping in Marble Falls and pet friendly."*
- Two properties — Marble Falls (6+ acres) and Spicewood (6+ acres)
- Accommodation list (corrected from 5/18):
  - Marble Falls: **Cosmic Nights** (safari tent), **Sabi Nights** (safari tent), **Moonlight Magic** (yurt), **Starry Nights** (yurt)
  - Spicewood: **Tentation** (yurt), **KickBack Cove Home** (residential)
- Brand framing: "modern, Indonesian-inspired luxury glamping structures" — safari tent and yurt used interchangeably
- Positioning: "Immersive Adults Only Escape"

**Why it matters:** Two things. (1) The domain move means any internal Rancho docs / past audits / future content that cite `safariforthesoul.com` will hit a 301 redirect to an unrelated author site. The live property is at `safariforthesoulglamping.com` now. (2) Last week's "1 safari tent + 4 yurts" framing under-counted — they actually run 2 safari tents (Cosmic Nights + Sabi Nights). The brand-mix-shift framing from May 18 directionally holds (more yurts than safari tents, no longer "5 safari tents"), but the exact count is 2 safari tents + 3 yurts + 1 residential across both properties, not 1 + 4.

### Material State Change — Spoon Mountain Weekend-Getaways Page Returned

**URL:** [spoonmountainglamping.com/travel-to-wimberley/romantic-weekend-getaways-near-austin/](https://spoonmountainglamping.com/travel-to-wimberley/romantic-weekend-getaways-near-austin/)

**Change:** On May 18 this page had dropped out of the `weekend getaway near austin glamping` top 10 after holding for one week. Today it's back at position 9.

**Why it matters:** The May 18 framing was "one-week SERP half-life — content-marketing investment with limited durability." Today's return changes that to "in/out/in oscillation over 3 weeks" — closer to an unstable but real SERP presence than a one-week spike. The May 11 framing of "first competitor publishing destination-guide research content that hits top of funnel" is partially rehabilitated. Still doesn't escalate the Rancho blog-pipeline restart decision (paused 2026-04-23 per Ashley) — but does soften last week's softer framing.

### Material SERP Shift — Corporate Retreat Top-10 Refreshed Again

**New top-10 entrant on `corporate retreat near austin texas`:** [planretreat.com/destinations/corporate-retreat-austin](https://www.planretreat.com/destinations/corporate-retreat-austin) — "Top 10 Venues for Corporate Retreats in Austin (2026 Guide)" — another planning-aggregator listicle in the same vein as TeamOut and Moniker.

**Returning to top 10:** **The Retreat at Crystal Creek** ([retreatatcrystalcreek.com](https://www.retreatatcrystalcreek.com)) was a drop-out from May 18; back in top 10 today. The Crystal Creek drop-out claim from last week was a one-week off-SERP, not a permanent exit.

**Off the top 10 this week:** Peaceful Waters Retreat Center direct page (was top 10 on 5/18; still surfaces in description text but not as a top-10 result), Texas Old Town.

**Why it matters:** The corporate retreat SERP continues to be the most volatile Rancho-relevant cluster — three weeks of name churn. Listicles (TeamOut, Moniker, planretreat.com) hold their slots; direct-venue placements rotate week to week. The Yurtopian's corporate-retreats page remains off the SERP for the second consecutive week. The "small opening if Rancho's `/corporate-retreats/` gets indexed" framing from 5/18 still applies — but indexing has not happened (24 days now).

### New SERP Entrant — Camposanto ATX

**URL:** [camposantoatx.com](https://camposantoatx.com)
**Location:** Graveyard Point (private neighborhood) on Lake Travis
**Significance:** Surfaces in `glamping near austin tx` top 10 — first time this site has appeared in the cluster across 4+ weeks of tracking. Geography is Lake Travis (not East Austin / Manor), so not a direct geographic competitor — but adds another Austin-area name to the cluster.

### Re-Confirmed (No State Change)

#### Lucky Arrow Retreat — [luckyarrowretreat.com](https://luckyarrowretreat.com)
ResortPass listing still dormant. No reactivation date. 5 accommodation types still confirmed (Courtyard Cabins 16, Porch Houses 5, Breezeway Cabins 6, Yurts 10, Safari Tents 3 = 40 total).

#### Walden Retreats — [waldenretreats.com](https://waldenretreats.com)
15 luxury glamping tents, unit count holding. Variant labels now visible on the site: Premier Suites, Studios, Studios with Soaking Tubs. Acreage (96 ac, Pedernales River) unchanged.

#### Spoon Mountain Glamping (property pages) — [spoonmountainglamping.com](https://spoonmountainglamping.com)
3 tents (Kingfisher, Shaka, Chisum), private pools, $60/day heating. Same as 5/18.

#### The Yurtopian — [theyurtopian.com](https://theyurtopian.com)
10-yurt Dripping Springs location confirmed. Corporate retreats page live (group sizes 1-4 / 5-9 / 10-20). Still off the corporate-retreat top-10 for second consecutive week.

#### The Retreat on the Hill — [theretreatonthehill.com](https://theretreatonthehill.com)
11 named units confirmed. $145–$395 pricing.

#### Wahwahtaysee Resort
7 safari tents + 3 cabins, 100+ acres on the San Marcos River, ~50 miles south of Austin.

---

## Section 3 — Content Gap Analysis (Updated May 25)

| Content Type | Who Has It | Rancho Moonrise Status | Δ vs. May 18 |
|---|---|---|---|
| Dedicated safari tent landing page | Walden, Safari for the Soul (rebrand mid-flight), Spoon Mountain, The Retreat on the Hill | Built (`/safari-tents-near-austin/`), FAQPage schema. **Still NOT indexed by Google** 29 days post-launch. | Drifted 7 days longer |
| Corporate retreat landing page | Lucky Arrow, 7744 Ranch, Element Ranch, Sage Hill, Peaceful Waters, planretreat.com (listicle), Crystal Creek | Built (`/corporate-retreats/`), full schema, 7 inbound internal links. **Still NOT indexed** 24 days post-launch. | Drifted 7 days longer |
| Per-unit accommodation URLs | The Retreat on the Hill (11), Safari for the Soul (5+), Lucky Arrow (40 across 5 types), Green Acres (8) | accommodations.html lists 4 categories | Unchanged — blocked on low-res source JPGs |
| Private pool per unit | Spoon Mountain (3 units) | Shared pool only — different value prop | Unchanged |
| ResortPass listing | Lucky Arrow (dormant), **Rancho Moonrise (dormant — listing exists)** | **Listing exists.** Dormant — 0 products. Decision drift now 7 days past 5/18 surface. | Same state — drift continues |
| Glamping Hub listing | Talula Mesa, Udoscape, The Yurtopian, Loving Heart, Spoon Mountain (likely) | Still absent | Unchanged (6 weeks) |
| WeddingWire listing | Honeysuckle Ranch | Still absent | Unchanged |
| Destination-guide / weekend-getaway research content | Spoon Mountain (back in top 10 after one week out) | 18-post blog cluster — pipeline paused 2026-04-23 | Spoon Mountain content page held in/out/in pattern — softer than May 18 framing |
| Press / media page | Sinya, Lucky Arrow (CultureMap), Walden (FOX 7), Green Acres (U.S. News, Dwell, Apartment Therapy, Austin Monthly) | None | Unchanged |
| External-listing brand-SERP hygiene | n/a | Hotels.com ho2867109568 "20 luxury cabins... 50 guests" — banned per VOICE-GUIDE | Unchanged (3rd week) |
| Hipcamp curation | The Charmadillo, Dos Rios, Seco Ridge, 3 Dry Wells Ranch, Ranch 3232 (+15 more) | Active listing — but NOT in Hipcamp's "20 Best Glamping Near Austin" | Carousel rotated; Rancho still absent |
| Mission-driven content | Cameron Ranch Glamping | None | Unchanged |
| Google apex indexing | n/a | Continued expansion — `/faqs/`, `/policies/`, `/weddings/`, `/contact/`, `/accessibility/`, `/event/july-4th/` surfacing in addition to 5/18 set | Stable trend — index growing |
| New landing page indexing | n/a | **NOT YET.** `/corporate-retreats/` 24d, `/safari-tents-near-austin/` 29d | Drifting — request indexing specifically on these URLs |

---

## Section 4 — Quick Wins This Week

1. **ResortPass listing — activate or formally kill (Adam, 30s with Ashley + decision).** Same item as 5/18. Listing exists. Decision is "activate by adding day-pass products" or "leave dormant and remove from TODO." Drift now 7 days past last week's framing.

2. **GSC — request indexing on the specific uncrawled URLs (Adam, ~5 min).** Same item as 5/18. Apex is now expanding in the index — the bottleneck is specifically `/corporate-retreats/` (24 days) and `/safari-tents-near-austin/` (29 days). URL Inspection → Request Indexing for each.

3. **Hotels.com listing copy fix (Adam, ~15 min).** Same as 5/18. ho2867109568 still pushes "20 luxury cabins and safari tents... 50 guests" — banned per VOICE-GUIDE. 3rd consecutive week.

4. **Glamping Hub submission still absent (6 weeks).** Free, ~15 min at glampinghub.com/list-your-property. The Yurtopian, Udoscape, Talula Mesa, Sabi, Loving Heart all already there.

5. **Hipcamp curation gap — Ashley question still pending.** 2026-05-16 audit at `brand/2026-05-16-hipcamp-curation-gap-audit.md` identified the structural exclusion flags. Ashley question: "is Hipcamp intentionally backlink-only, or do we want bookings from it?" Still pending.

6. **Update any internal references to `safariforthesoul.com`.** Old primary domain now 301-redirects to `janboalauthor.com`. Live property is at `safariforthesoulglamping.com`. Audits, blog drafts, comparisons that cite the old domain will redirect to an author site. Low-priority housekeeping.

---

## Section 5 — Recommendations for This Week

**Priority 1 — ResortPass listing reframe (Adam, fastest decision available):** Same as 5/18. The listing at [resortpass.com/hotels/rancho-moonrise](https://www.resortpass.com/hotels/rancho-moonrise) is live but dormant. 7 days have passed since this surfaced. 30 seconds with Ashley settles it.

**Priority 2 — GSC indexing request on specific URLs (Adam, ~5 min):** Same as 5/18. Apex is crawling, expanding weekly. `/corporate-retreats/` (24 days uncrawled) and `/safari-tents-near-austin/` (29 days uncrawled) are not. In Search Console, use URL Inspection → Request Indexing for each. Don't re-submit the whole sitemap; target the specific URLs.

**Priority 3 — Hotels.com listing fix (Adam, ~15 min):** Same item as last 3 weeks. ho2867109568 "20 luxury cabins... 50 guests." Banned per VOICE-GUIDE.

**Priority 4 — Continue tracking the safari-tent SERP cluster:** Direct competitor (Safari for the Soul) has now moved domains and the brand-mix shift is slightly clearer than last week's read (2 safari tents + 3 yurts + 1 residential, not 1 safari tent + 4 yurts). The cluster remains the most dynamic Rancho-relevant SERP this spring. No Rancho-side change needed yet — but worth watching whether the safari-tent SERP keeps softening or reasserts.

---

## Appendix: Rancho Moonrise Competitive Positioning (May 25, 2026)

| Attribute | Current State | Change Since May 18 |
|---|---|---|
| Organic ranking — glamping queries | Not ranking | No change. New entrant: Camposanto ATX |
| Organic ranking — wedding queries | Not ranking | No change. TerrAdorna now direct-domain in top 10 |
| Organic ranking — safari tent queries | Not ranking. SERP cluster in flux. Safari for the Soul moved domain | Domain migration on direct competitor |
| Organic ranking — corporate retreat | Not ranking. `/corporate-retreats/` uncrawled 24 days. Crystal Creek + planretreat.com in top 10 | One drop-out returned, one new listicle entrant |
| Organic ranking — weekend getaway | Not ranking. Spoon Mountain's content-marketing page returned after one week out | Returned (in/out/in) |
| Organic ranking — branded query | #1 (Vercel apex). Hotels.com listing still surfaces with banned copy | Stable |
| The Knot | Active — 8 reviews, 4.5 stars | No change |
| Hipcamp | Active listing — but NOT in curated "20 Best Glamping Near Austin" | No change (carousel rotated) |
| Glamping Hub | ❌ Still not listed | No change (6 weeks) |
| WeddingWire | ❌ Still not listed | No change |
| TripAdvisor | 0 reviews, NOT claimed | No change |
| Hotels.com listing copy | "20 luxury cabins... 50 guests" — banned per VOICE-GUIDE | No change (3rd week) |
| **ResortPass listing** | **Live but dormant — 0 products** | **Decision drift: 7 days since 5/18 surface** |
| DNS cutover | ✅ LIVE (4/30) — apex serves from Vercel | Stable, 25 days |
| Google apex indexing | Expanding — `/faqs/`, `/policies/`, `/weddings/`, `/contact/`, `/accessibility/`, `/event/july-4th/` added to set | Continued indexing growth |
| GSC indexing — `/corporate-retreats/` | Not crawled 24 days post-launch | +7 days drift |
| GSC indexing — `/safari-tents-near-austin/` | Not crawled 29 days post-launch | +7 days drift |
| AggregateRating coverage | 17/17 customer-facing pages (18/18 incl. corp-retreats) | Stable |
| FAQPage parity | 18/18 customer-facing pages | Stable |
| Blog cluster — inbound linking | 4-inbound floor across all 17 posts | Stable |
| Blog cluster — schema coverage | 17/17 BlogPostings with `articleSection`, `wordCount`, `inLanguage: "en-US"`, ImageObject (5/24 ship) | Stable trend — schema enrichment continuing |
| Lucky Arrow status | 5 accommodation types; ResortPass dormant; no public reactivation date | Stable |
| Safari for the Soul status | **Domain moved to `safariforthesoulglamping.com`.** 2 safari tents + 3 yurts + 1 residential across Marble Falls + Spicewood | Domain migration + count correction |
| Walden Retreats status | 15 luxury glamping tents; variant labels (Premier Suites / Studios / Studios with Soaking Tubs) now on site | Variant labels visible, count holds |
