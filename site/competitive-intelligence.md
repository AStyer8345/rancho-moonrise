# Rancho Moonrise — Competitive Intelligence Report
**Prepared for:** Rancho Moonrise Operations
**Subject Property:** Rancho Moonrise · 20117 Lockwood Rd, 78653 (20 min from downtown Austin)
**Research Date:** May 11, 2026
**Previous Report:** May 4, 2026

---

## Executive Summary

Quiet competitive week on the SERP front. Top-10 names across glamping, safari tent, corporate retreat, and weekend-getaway queries are unchanged from May 4. The structural state changes happened inside competitor pages.

The most material shift: **Lucky Arrow has quietly walked back the May 1 ResortPass reactivation promise.** The "full food and bar menu will resume starting May 1, 2026" copy that drove April 27's "48-hour decision" framing and May 4's "window extended" framing has been removed from their ResortPass listing page entirely. Today's WebFetch returned: *"There is no mention of a food and bar menu resuming on May 1, 2026, or any similar statement about service restoration."* The listing is still dormant ("This property has no active products at the moment"), but Lucky Arrow no longer commits publicly to any reactivation date. Two readings — either they've privately abandoned the channel, or they've internally extended without a new date. Either way, the urgency framing the last two reports leaned on is fully dead.

The second material shift: **Spoon Mountain shipped heavy content-marketing.** `/travel-to-wimberley/romantic-weekend-getaways-near-austin/` is a 2026-dated long-form guide — 5 destination comparisons, a 3-day Wimberley itinerary, budget breakdown, FAQ — and it's already surfacing in the "weekend getaway near austin glamping" top 10. This is the first time we've seen a tracked competitor invest in destination-guide research content, not just property pages. Rancho Moonrise's blog pipeline has been paused since 2026-04-23 (Ashley); Spoon Mountain's move is a leading indicator that this pause has a cost.

Rancho Moonrise's `/corporate-retreats/` page is now 10 days old and still does NOT appear in the "corporate retreat near austin texas" top 10. The Vercel apex serves `200 OK` with `server: Vercel` + `x-vercel-cache: HIT` — there's no infrastructure problem, just an indexing curve. GSC sitemap submission remains the single highest-leverage external action available.

**⚡ Top 3 Actionable Findings (Week of May 11):**

1. **GSC sitemap submit is Priority 1 — again, with higher urgency.** DNS live 11 days, `/corporate-retreats/` live 10 days, no apex crawl yet. The Yurtopian's equivalent page is out-aging Rancho Moonrise's daily.
2. **ResortPass urgency framing is dead — pick a side and stop drifting.** Lucky Arrow has removed the May 1 reactivation date from their listing entirely. Submit Rancho Moonrise to ResortPass this week (still no Austin glamping property on the platform), or move it to "deferred" on TODO.
3. **Spoon Mountain content-marketing investment is a leading signal.** Their destination-guide content is capturing top-of-funnel research traffic. Rancho's blog pause should be revisited with Ashley at the next check-in. Not actionable autonomously.

---

## Re-Verify Gate — Claims from May 4 Checked Live (May 11)

| Claim | Live Verification (May 11) | Result |
|---|---|---|
| Lucky Arrow ResortPass dormant ("no active products") | WebFetch resortpass.com/hotels/lucky-arrow-retreat — "This property has no active products at the moment." | ✅ STILL TRUE |
| Lucky Arrow ResortPass page references May 1, 2026 reactivation | WebFetch resortpass.com/hotels/lucky-arrow-retreat — "There is no mention of a food and bar menu resuming on May 1, 2026, or any similar statement about service restoration." | ❌ **RESOLVED — REMOVED from page** |
| Lucky Arrow safari tents (3 units) | WebFetch luckyarrowretreat.com/lodging — confirms 5 accommodation types, 3 Safari Tents | ✅ STILL TRUE |
| The Yurtopian corporate retreats page live | WebFetch theyurtopian.com/corporate-retreats-in-texas-hill-country/ — H1 "Plan Team Building, Wellness or Corporate Retreats In Texas," 10 yurts | ✅ STILL TRUE |
| Spoon Mountain private pools per tent | WebFetch spoonmountainglamping.com — "We Now Have Private Pools!" + "Private pools for each of our luxury tents" + heating $60/day verbatim | ✅ STILL TRUE |
| Safari for the Soul ranking #1 for "safari tent austin texas" | Live SERP — top result, snippet describes "five luxury, adults-only safari tents on 6 secluded acres" | ✅ STILL TRUE |
| The Retreat on the Hill (11 multi-format units) | WebFetch theretreatonthehill.com — 11 named units confirmed (Mirror House, Wings, Starfield Observatory, Stardome Suite, Bird's Nest, two Cliff Houses, Eagle's Nest, Container Suite, Twins, Tipis) | ✅ STILL TRUE |
| Green Acres ATX (8 units, editorial press) | WebFetch greenacresatx.com — 8 accommodations, press in U.S. News, DWELL, Apartment Therapy, Austin Monthly; tagline "Austin's Original Glamping Location" | ✅ STILL TRUE |
| Walden Retreats SERP snippet "15 luxury safari tents (7 suites + 8 studios)" | Live SERP — snippet unchanged | ✅ STILL TRUE |
| Rancho Moonrise branded SERP #1, non-brand 0/N | Live SERPs — ranchomoonrise.com #1 on brand query (Vercel apex), 0 placements on glamping/safari tent/corporate retreat/weekend getaway/wedding venue Manor non-brand queries | ✅ STILL TRUE |

**Resolution summary:** 1 prior-report claim auto-resolved this run (Lucky Arrow's "May 1, 2026" reactivation promise — copy removed from page). 9 prior claims still_true.

---

## Section 1 — SERP Rankings Summary (May 11, 2026)

| Keyword | Top SERP Sites | Named Competitors in Top 10 | Rancho Moonrise Position |
|---|---|---|---|
| glamping near austin tx | Udoscape (#1), Hipcamp listicle, A Taste of Koko (listicle), Green Acres, The Yurtopian, Udoscape /pods, Camposanto, Sabi (Glamping Hub Marble Falls), AmericasStateParks listicle, Glamping Hub | Same top names as May 4. No new entrants. | Not ranking |
| safari tent austin texas | Safari for the Soul (#1), Spoon Mountain, Safari for the Soul (alternate domain), Wahwahtaysee Resort, Hipcamp, Glamping Hub, Glamping Hub Spicewood, Hipcamp (state-level), Expedia (Marble Falls tent), Safari for the Soul /new-home | **Loving Heart Retreats** newly prominent in SERP descriptions (25 acres, 12 min from Marble Falls). TLS cert mismatch on their domain — not fetchable. | Not ranking |
| corporate retreat near austin texas | Wilder Retreats, Element Ranch, Sage Hill, TeamOut listicle, Walden Retreats, Sage Hill blog, Crystal Creek, 7744 Ranch, Austin Luxury Retreat, Sage Hill Hill Country | Heavily entrenched top 10 — same names as April 27, May 4. No new entrants. The Yurtopian's `/corporate-retreats-in-texas-hill-country/` still surfacing within the SERP cluster. | Not ranking. New `/corporate-retreats/` (5/1) still not indexed 10 days post-launch |
| weekend getaway near austin glamping | Udoscape, Cameron Ranch, Hipcamp listicle, Glamping Hub, Walden, The Retreat on the Hill, Talula Mesa, The Yurtopian, **Spoon Mountain's /travel-to-wimberley/romantic-weekend-getaways-near-austin/**, Cameron Ranch best-glamping listicle | **Spoon Mountain's new content-marketing page surfacing** — first competitor we track investing in destination-guide content for top-of-funnel traffic. | Not ranking |
| pool day pass austin glamping | ResortPass listicle, Lucky Arrow ResortPass (dormant), ResortPass hotel day passes, Dayuse, Do512 Family, Do512, Austin Motel, W Austin ResortPass, 365 Things Austin, AustinCityGuide | Lucky Arrow still the only glamping listing on the pool-pass SERP. No competitor activity. | Not ranking. Window indefinitely open |
| wedding venue manor tx | Sandlewood Manor (Tomball), Briscoe Manor (Houston), Eventective, The Knot, WeddingWire, Iron Manor (Montgomery), Wedding Spot, Briscoe Manor /the-venue, The Manor (Trinity TX), The Manor Facebook | Honeysuckle Ranch dominant for Manor-specific. Knot/WeddingWire marketplaces dominant for the long tail. | Not ranking |
| Rancho Moonrise (brand) | **ranchomoonrise.com (#1, Vercel apex, 200 OK)**, Instagram, Facebook, Hipcamp listing, The Knot, Romantic Spots Austin, Do512, Swimply (Pool detail), **Hotels.com (ho2867109568)**, LinkedIn | DNS cutover continues to hold. Vercel cache headers serving on all subpages tested. | **Ranking #1** (branded only) |

---

## Section 2 — Competitor Highlights

### State Change — Lucky Arrow Retreat — [luckyarrowretreat.com](https://luckyarrowretreat.com)

**Material change:** ResortPass page copy edited. The "full food and bar menu will resume starting May 1, 2026" line that was verbatim on the page through both April 27 and May 4 reports has been removed. Today's WebFetch returned no mention of any reactivation date.

**Interpretation:** Lucky Arrow is no longer making a public commitment to put day passes back on ResortPass on any specific date. The listing is still dormant. Two equally plausible readings: (a) they've decided to abandon ResortPass as a channel and are cleaning the page up quietly, (b) they've extended internally without setting a new public date. There is no signal that distinguishes between the two from outside.

**Why it matters for Rancho Moonrise:** The framing in the last two reports — "decide within 48 hours," "window extended" — has been wrong twice. The decision is now untethered from any Lucky Arrow timeline. The right framing this week is: there is no Austin glamping property on ResortPass. That window has been open since April 6 and will likely stay open. Either submit, or formally remove from TODO.

---

### New Content-Marketing Move — Spoon Mountain Glamping — [spoonmountainglamping.com](https://spoonmountainglamping.com)

**Page:** [`/travel-to-wimberley/romantic-weekend-getaways-near-austin/`](https://spoonmountainglamping.com/travel-to-wimberley/romantic-weekend-getaways-near-austin/)
**Title:** "Romantic Weekend Getaways Near Austin – Ultimate 2026 Guide"
**Date stamp:** 2026-08-01 (future-stamped — common SEO tactic to signal freshness)

**Structure:**
- Introduction framing Austin's proximity to romantic destinations
- 5 destination comparisons (within 2 hours of Austin)
- Deep-dive sections on each destination with lodging recommendations
- 3-day Wimberley itinerary
- Budget breakdown
- Travel tips and FAQs

**Competitor mentions in the guide:** Inn at Sunset Mill Ranch (Dripping Springs), Lakeway Resort and Spa, The Ritz-Carlton Dallas (Las Colinas), Signia by Hilton La Cantera Resort and Spa (Fredericksburg). Spoon Mountain itself gets prominent placement with amenity lists, pricing ($245+), and the itinerary anchored on their property.

**Why it matters:** This is the first tracked competitor publishing destination-guide content that ranks for research-intent queries. The page is already in the "weekend getaway near austin glamping" top 10. Rancho Moonrise has a 18-post blog cluster with full schema and internal-linking coverage — but the blog pipeline has been paused since 2026-04-23 per Ashley. While Spoon Mountain captures top-of-funnel traffic, Rancho's blog moat is static. Not actionable this week (needs Ashley sign-off to unpause), but the competitive case has strengthened.

---

### New SERP Surfacing — Loving Heart Retreats — lovingheartretreats.com

**SERP description (Hipcamp-mediated):** "Loving Heart Retreats is a relaxing and beautiful glamping retreat situated on over 25 acres of lush trees and hillside views, and just 12 minutes outside of Marble Falls."

**Live verification:** Failed — `ERR_TLS_CERT_ALTNAME_INVALID` on direct WebFetch. The domain's TLS cert doesn't match its name. Cannot confirm site state today.

**Why it matters:** Adds to the safari-tent cluster (Safari for the Soul, Spoon Mountain, Wahwahtaysee, Walden Retreats, The Retreat on the Hill, now Loving Heart) without displacing anyone. Marble Falls is 45+ minutes from Austin, which keeps Rancho Moonrise's 20-minute-from-downtown geographic moat intact for the Austin metro segment.

---

### Re-Confirmed (No State Change)

#### The Retreat on the Hill — [theretreatonthehill.com](https://theretreatonthehill.com)
11 named units confirmed. Same as May 4.

#### Spoon Mountain Glamping (property pages) — [spoonmountainglamping.com](https://spoonmountainglamping.com)
3 tents (Kingfisher, Shaka, Chisum). Private pools per tent live. Heating $60/day. Same as May 4. The new addition is the content-marketing page (above).

#### The Yurtopian — [theyurtopian.com](https://theyurtopian.com)
`/corporate-retreats-in-texas-hill-country/` live. 10 yurts at Dripping Springs. Same as May 4.

#### Safari for the Soul — [safariforthesoulglamping.com](https://safariforthesoulglamping.com)
Still #1 for "safari tent austin texas." 5 luxury adults-only safari tents on 6 acres. Same as May 4.

#### Walden Retreats — [waldenretreats.com](https://waldenretreats.com)
SERP snippet "15 rooms of luxury safari style glamping tents, including 7 suites and 8 studios" still active. Same as May 4.

#### Green Acres ATX — [greenacresatx.com](https://greenacresatx.com)
8 accommodations confirmed. Press in U.S. News, DWELL, Apartment Therapy, Austin Monthly. Tagline "Austin's Original Glamping Location" still on homepage. Same as May 4.

#### Wahwahtaysee Resort — wahwahtayseeresort.com
7 safari tents + 3 cabins, 100+ acres on the San Marcos River, 50 miles south of Austin. Same as May 4.

---

## Section 3 — Content Gap Analysis (Updated May 11)

| Content Type | Who Has It | Rancho Moonrise Status | Δ vs. May 4 |
|---|---|---|---|
| Dedicated safari tent landing page | Walden, Safari for the Soul, Spoon Mountain, The Retreat on the Hill | Built (`/safari-tents-near-austin/`), FAQPage schema, **still awaiting GSC indexing** | Unchanged — GSC submit still pending |
| Corporate retreat landing page | Lucky Arrow, 7744 Ranch, Element Ranch, The Yurtopian, Sage Hill | Built (`/corporate-retreats/`), full schema (EventVenue, BreadcrumbList, FAQPage, SpeakableSpec), 7 inbound internal links | Built — but 10 days post-launch, still not in top 10 |
| Per-unit accommodation URLs | The Retreat on the Hill (11), Safari for the Soul (5), Lucky Arrow (5+), Green Acres (8) | accommodations.html lists 4 categories | Unchanged — blocked on low-res source JPGs |
| Private pool per unit | Spoon Mountain (3 units), Walden Retreats (some) | Shared pool only — different value prop | Unchanged |
| ResortPass pool day pass listing | Lucky Arrow (still inactive, May 1 date removed) | Not submitted — door indefinitely open | Lucky Arrow walked back May 1 promise — urgency framing dead |
| Glamping Hub listing | Talula Mesa, Udoscape, The Yurtopian, Loving Heart, Spoon Mountain (likely) | Still absent | Unchanged (4 weeks) |
| WeddingWire listing | Honeysuckle Ranch, Ranch Austin, Grand Lady Austin | Still absent | Unchanged |
| Destination-guide / weekend-getaway research content | **Spoon Mountain (new this week — Ultimate 2026 Guide)** | 18-post blog cluster — but pipeline paused 2026-04-23 | **NEW GAP — research-intent traffic captured by competitor** |
| Press / media page | Sinya, Lucky Arrow (CultureMap), Walden (FOX 7), Green Acres (U.S. News, Dwell, Apartment Therapy, Austin Monthly) | None | Unchanged |
| Mission-driven content (charity / climate) | Cameron Ranch Glamping | None | Unchanged |
| Multi-format unit copy | The Retreat on the Hill, Green Acres | 4-category accommodations.html | Unchanged |
| External-listing brand-SERP hygiene | n/a | **Hotels.com listing ho2867109568 surfaces "20 luxury cabins... 50 guests" — banned per VOICE-GUIDE** | NEW — first time noted |
| Hipcamp curation | Urban Hideout, Cozy Cactus, Breathe Deeply, River Forest Haven, Texas Music River Ranch | Active listing — but NOT in Hipcamp's "20 Best Glamping Near Austin" curated landing page | NEW — discoverability gap |

---

## Section 4 — Quick Wins This Week

1. **GSC sitemap submit (Adam — highest leverage, escalating).** DNS live 11 days. `/corporate-retreats/` live 10 days. Rancho's corporate retreats page is NOT in the "corporate retreat near austin texas" top 10 — The Yurtopian's equivalent is out-aging it daily. Submit `https://ranchomoonrise.com/sitemap.xml` in Search Console and request indexing on `/corporate-retreats/`, `/safari-tents-near-austin/`, and the apex.

2. **ResortPass — pick a side this week (Adam).** The urgency framing has been wrong twice in a row. Lucky Arrow has removed the May 1 reactivation date from their listing. Submit or remove from TODO — but stop letting it drift.

3. **Hotels.com listing edit (Adam, ~15 min).** ho2867109568 still pushes "20 luxury cabins and safari tents... 50 guests" into the brand SERP. Per VOICE-GUIDE.md, no specific unit counts. Fastest external-SERP cleanup available. The Vercel site itself doesn't have this copy — this is a third-party listing problem.

4. **Glamping Hub submission still absent (4 weeks).** Free, 15 min, glampinghub.com/list-your-property. The Yurtopian, Udoscape, Talula Mesa, Sabi, Loving Heart all already there.

5. **Hipcamp curation gap (Claude — investigate next slot).** Rancho's active Hipcamp listing is not surfacing in their curated "20 Best Glamping Near Austin" landing page. Audit the listing's photos, description, and amenities against the surfacing properties to see what's missing. Won't fix ranking, but worth knowing the gap.

6. **Blog pipeline restart decision (Adam + Ashley).** Spoon Mountain's content-marketing investment is a new signal — competitors are now publishing research-intent destination guides. Rancho's pipeline has been paused since 2026-04-23. Not unilaterally actionable; flag for next Ashley check-in.

---

## Section 5 — Recommendations for This Week

**Priority 1 — Submit sitemap to GSC (Adam, ~15 min):**
This is the third week in a row this has been the top recommendation. Urgency is escalating, not flat. DNS live 11 days, `/corporate-retreats/` live 10 days, no apex crawl yet. The Yurtopian's content gap-closing page has 5+ years of indexed authority; Rancho's equivalent has none. Every day costs.

**Priority 2 — ResortPass decision (Adam):**
The framing this week is not "decide within X days." It is: "Lucky Arrow has removed the May 1 date. The door has been open for 35 days. Pick a side and move on." Either submit, or remove from TODO.

**Priority 3 — Hotels.com listing copy fix (Adam, ~15 min):**
ho2867109568 contains "20 luxury cabins and safari tents that can accommodate up to 50 guests." Per VOICE-GUIDE.md, no specific unit counts. This surfaces in the brand SERP description and is the single most visible voice-violation in third-party listings.

**Priority 4 — Blog pipeline restart (Adam + Ashley check-in):**
Spoon Mountain's destination-guide content is a leading indicator that the research-intent SERP is moving. Rancho's blog cluster has the schema, internal-linking, and content density to compete — but it's frozen. Worth flagging at the next Ashley check-in, with Spoon Mountain's new page as the concrete data point.

---

## Appendix: Rancho Moonrise Competitive Positioning (May 11, 2026)

| Attribute | Current State | Change Since May 4 |
|---|---|---|
| Organic ranking — glamping queries | Not ranking | No change |
| Organic ranking — wedding queries | Not ranking | No change |
| Organic ranking — safari tent queries | Not ranking | No change |
| Organic ranking — corporate retreat | Not ranking. `/corporate-retreats/` 10 days old, still uncrawled | Worse — gap continues to age |
| Organic ranking — weekend getaway | Not ranking. Spoon Mountain's new guide surfacing instead | NEW — research-intent SERP moved |
| Organic ranking — branded query | #1 (Vercel apex) | Stable |
| The Knot | Active — 8 reviews, 4.5 stars | No change |
| Hipcamp | Active listing — but NOT in curated "20 Best Glamping Near Austin" | NEW — curation gap surfaced |
| Glamping Hub | ❌ Still not listed | No change (4 weeks) |
| WeddingWire | ❌ Still not listed | No change |
| TripAdvisor | 0 reviews, NOT claimed | No change |
| Hotels.com listing copy | "20 luxury cabins... 50 guests" — banned per VOICE-GUIDE | NEW finding |
| ResortPass | Not submitted | Lucky Arrow walked back May 1 date — urgency framing dead |
| DNS cutover | ✅ LIVE (4/30) — apex serves from Vercel | Stable, 11 days |
| GSC sitemap submission | Not yet submitted (NEEDS ADAM) | 3rd consecutive week as Priority 1 |
| `/corporate-retreats/` landing page | ✅ LIVE (5/1) — full schema, 7 internal inbound links | 10 days old, still uncrawled |
| AggregateRating coverage | 17 / 17 customer-facing pages (18/18 incl. /corporate-retreats/) | Stable |
| FAQPage parity | 18/18 customer-facing pages (faqs.html parity closed 5/8) | Stable |
| Blog cluster — inbound linking | 4-inbound floor across all 18 posts (close-out 5/10) | NEW baseline |
| Internal linking density (corp-retreats hub) | 7 inbound links from 6 source pages | Stable |
| Lucky Arrow status | 5 accommodation types; ResortPass still dormant; May 1 date REMOVED | Material state change |
| Spoon Mountain status | 3 tents + private pools + **NEW destination-guide content surfacing in weekend-getaway SERP** | Material state change |
| The Yurtopian status | 16 yurts + corporate retreats page | Stable |
| Walden Retreats SERP framing | 15 luxury safari tents (7 suites + 8 studios) | Stable |
| The Retreat on the Hill status | 11 multi-format units, $145–$395/night | Stable |
| Green Acres ATX status | 8 units, editorial press, Elgin (~25 min from Manor) | Stable |
| Loving Heart Retreats | New SERP surfacing for safari tent austin; 25 ac, 12 min from Marble Falls; TLS cert mismatch (not fetchable today) | NEW SERP entrant |
| New site SEO readiness | DNS live, 17/17 schema coverage, 18 blog posts, `/corporate-retreats/` live, `/safari-tents-near-austin/` live, 4-inbound floor on blog cluster, GSC submit pending | Stable |
