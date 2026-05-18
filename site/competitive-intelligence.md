# Rancho Moonrise — Competitive Intelligence Report
**Prepared for:** Rancho Moonrise Operations
**Subject Property:** Rancho Moonrise · 20117 Lockwood Rd, 78653 (20 min from downtown Austin)
**Research Date:** May 18, 2026
**Previous Report:** May 11, 2026

---

## Executive Summary

Two material findings this week reframe Rancho Moonrise's external position more than anything since the DNS cutover.

**First — Rancho Moonrise already has a live ResortPass listing.** [resortpass.com/hotels/rancho-moonrise](https://www.resortpass.com/hotels/rancho-moonrise) is live with the correct street address (20117 Lockwood Rd, Manor, TX 78653), a 3-star designation, pool-hours metadata (10am–6pm daily), and listing copy: *"Escape to Rancho Moonrise's pool for a rejuvenating day! Soak in ranch views, lounge in comfortable chairs, and bask in the serene atmosphere."* The listing is dormant — *"This property has no active products at the moment"* — but the listing exists. Five weeks of reports have framed ResortPass as a "submit or don't" decision. That framing is dead. The actual decision is "activate the existing listing, or formally kill the channel." Either Adam/Ashley submitted at some point and forgot, or ResortPass created a placeholder speculatively. Either way, the multi-week drift has new context.

**Second — Google has started indexing the apex.** A `site:ranchomoonrise.com` query returns at least 11 indexed pages: apex, host-your-event, events, accommodations, policies, videos, blog/bachelorette-party-austin-texas, blog/things-to-do-manor-tx, events/month/2025-08, event/open-house, testimonial-category/event-hosting. The previous four weeks' framing — "DNS live, no apex crawl yet" — is no longer accurate. **The bottleneck has narrowed: apex is crawling, but the high-leverage new landing pages (`/corporate-retreats/`, `/safari-tents-near-austin/`) are still NOT in the index 17 and 22 days post-launch respectively.** GSC sitemap submission remains the highest-leverage external action — but the frame is now "crawl the post-launch landing pages," not "crawl the site at all."

Two competitor state changes worth recording:

**Safari for the Soul has shifted brand mix.** Live site now reads "you are on over 6-acres at both properties in Spicewood and Marble Falls, TX" with the accommodation list breaking down as **1 safari tent (Cosmic Nights) + 4 yurts (Moonlight Magic, Starry Nights, Sabi Nights, Tentation)** — not the "5 luxury, adults-only safari tents on 6 secluded acres" framing the SERP snippet still carries. They're transitioning from safari-tent-first to yurt-first, with the SERP description lagging the property reality.

**Walden Retreats removed the unit-split SERP copy.** The "15 luxury safari tents (7 suites + 8 studios)" snippet that's been SERP-dominant for weeks has been replaced with "15 luxury glamping tents, designed for comfort in nature. Each sleeps 2-4 people." Less specific framing — suggesting a deliberate site copy refresh.

**SERP composition on `corporate retreat near austin texas` shifted.** Three new top-10 entrants — Moniker Partners (planning agency, not venue), Peaceful Waters Retreat Center (La Grange, 53 ac, 40-cap), Texas Old Town (Kyle, ~20 min from downtown). Three drop-outs since May 11 — Crystal Creek, Austin Luxury Retreat, and the second-position Sage Hill subpage. The Yurtopian's `/corporate-retreats-in-texas-hill-country/` no longer surfacing in the top 10 — a small opening if Rancho's `/corporate-retreats/` ever gets indexed.

Rancho Moonrise is still NOT ranking organically on any non-brand query. Branded SERP unchanged at #1 (ranchomoonrise.com, Vercel apex, 200 OK).

**⚡ Top 3 Actionable Findings (Week of May 18):**

1. **ResortPass listing already exists — activate or formally kill.** The "should we submit?" question is moot. Decision shifts from submission to activation. [resortpass.com/hotels/rancho-moonrise](https://www.resortpass.com/hotels/rancho-moonrise) is dormant and waiting on products.
2. **GSC sitemap submission stays Priority 1, with sharper framing.** Apex is being indexed. The post-launch landing pages (`/corporate-retreats/` 17 days, `/safari-tents-near-austin/` 22 days) are NOT. Request indexing specifically on those URLs.
3. **Safari for the Soul rebrand is a strategic data point.** A direct SERP competitor is migrating from safari tents to yurts — opens cleaner SERP territory for Rancho on the "safari tent" vertical specifically.

---

## Re-Verify Gate — Claims from May 11 Checked Live (May 18)

| Claim | Live Verification (May 18) | Result |
|---|---|---|
| Lucky Arrow ResortPass dormant ("no active products") | WebFetch resortpass.com/hotels/lucky-arrow-retreat — "This property has no active products at the moment." | ✅ STILL TRUE |
| Lucky Arrow ResortPass page references no specific reactivation date | WebFetch — no mention of any reactivation date. Default date selector shows May 18 calendar UI only. | ✅ STILL TRUE (resolved-state held) |
| Lucky Arrow safari tents (3 units) | WebFetch luckyarrowretreat.com/lodging — Courtyard Cabins (16), Porch Houses (5), Breezeway Cabins (6), Yurts (10), Safari Tents (3) | ✅ STILL TRUE |
| The Yurtopian corporate retreats page live | WebFetch theyurtopian.com/corporate-retreats-in-texas-hill-country/ — H1 "Plan Team Building, Wellness or Corporate Retreats In Texas," 10 private luxury yurts, group size form 1–4 → 10–20 guests | ✅ STILL TRUE |
| Spoon Mountain private pools per tent | WebFetch spoonmountainglamping.com — "We Now Have Private Pools!" + 3 tents (Kingfisher, Shaka, Chisum) + heating $60/day verbatim | ✅ STILL TRUE |
| Spoon Mountain `/travel-to-wimberley/romantic-weekend-getaways-near-austin/` live | WebFetch confirms — H1 "Romantic Weekend Getaways Near Austin – Ultimate 2026 Guide," 5 destinations (Wimberley, Dripping Springs, Lake Travis, Georgetown, Fredericksburg), 3-day Wimberley itinerary, Spoon Mountain $245+ pricing, August 1 2026 future-stamp date | ✅ STILL TRUE |
| Safari for the Soul: 5 luxury adults-only safari tents on 6 acres | **STATE CHANGE.** Live site reads "over 6-acres at both properties in Spicewood and Marble Falls, TX" — breakdown is **1 safari tent (Cosmic Nights) + 4 yurts (Moonlight Magic, Starry Nights, Sabi Nights, Tentation)**. SERP snippet still carries "5 safari tents" but property has rebranded. | ⚠️ PARTIAL CHANGE — brand mix shift |
| The Retreat on the Hill (11 multi-format units) | WebFetch confirms 11 named units, pricing $145–$395/night | ✅ STILL TRUE |
| Green Acres ATX (8 units, editorial press) | WebFetch confirms 8 accommodations sleeping 30 total, press in U.S. News, Dwell, Apartment Therapy, Austin Monthly | ✅ STILL TRUE |
| Walden Retreats SERP "15 luxury safari tents (7 suites + 8 studios)" | **STATE CHANGE.** Live site copy now reads "15 luxury glamping tents, designed for comfort in nature. Each sleeps 2-4 people." Split into 7/8 suites/studios has been REMOVED. SERP snippet may still lag the change. | ⚠️ PARTIAL CHANGE — copy refreshed, split dropped |
| Hipcamp curation gap — Rancho not on "20 Best Glamping Near Austin" landing | WebFetch hipcamp.com/d/.../austin/camping/glamping — 20 properties confirmed, Rancho not present (carousel rotated since May 11 — Twisted Oaks, P² Farm, Off Grid Immersion Camp, Missing Hotel, The Reserve at GreenLeaf etc. added; Rancho still absent) | ✅ STILL TRUE |
| Rancho Moonrise branded SERP #1, non-brand 0/N | Live SERPs — ranchomoonrise.com #1 brand query; 0 placements on non-brand glamping/safari tent/corporate retreat/weekend getaway/wedding venue queries | ✅ STILL TRUE |

**Resolution summary:** 2 prior claims show STATE CHANGE (Safari for the Soul brand-mix shift, Walden Retreats split-copy drop). 10 prior claims still true. 0 auto-resolved this run.

---

## Section 1 — SERP Rankings Summary (May 18, 2026)

| Keyword | Top SERP Sites | Named Competitors in Top 10 | Rancho Moonrise Position |
|---|---|---|---|
| glamping near austin tx | Udoscape (#1), Green Acres, Hipcamp listicle, Talula Mesa (Marble Falls), Glamping Hub, A Taste of Koko listicle, Yelp Austin, Udoscape /pods, The Retreat on the Hill, The Yurtopian | Same names as May 11. Yelp top-10 listicle holding its slot. | Not ranking |
| safari tent austin texas | Safari for the Soul (#1), Hipcamp, Wahwahtaysee, Glamping Hub, Spoon Mountain, Safari for the Soul (alt domain), Hipcamp (state), VRBO listing (Burnet County), Expedia (Marble Falls tent), Field Mag listicle | **Loving Heart Retreats** still surfacing in description text. Safari for the Soul has rebranded internally but SERP snippet lags. | Not ranking |
| corporate retreat near austin texas | Wilder Retreats, Element Ranch, TeamOut listicle, Moniker Partners, Walden Retreats, Sage Hill, 7744 Ranch, Peaceful Waters Retreat Center, Texas Old Town, Moniker Partners blog | **3 new entrants** (Moniker Partners, Peaceful Waters, Texas Old Town). 3 drop-outs (Crystal Creek, Austin Luxury Retreat, Sage Hill /hill-country/). Yurtopian /corporate-retreats-in-texas-hill-country/ no longer top-10. | Not ranking. `/corporate-retreats/` (5/1) still uncrawled 17 days post-launch |
| weekend getaway near austin glamping | Hipcamp listicle, Udoscape, Cameron Ranch best-glamping listicle, Glamping Hub, The Retreat on the Hill, Walden Retreats, Texplore Vibe listicle, Talula Mesa, The Yurtopian, Mount Bonnell 15 Best Spots listicle | Spoon Mountain's `/romantic-weekend-getaways-near-austin/` page DROPPED out of top-10 (was in May 11 results) — held its rank one week. | Not ranking |
| pool day pass austin glamping | ResortPass /s/.../austin/pool, **Lucky Arrow ResortPass (dormant)**, ResortPass /austin/hotel-day-passes, Do512, 365 Things Austin, Austin Motel, Dayuse, Do512 Family, W Austin ResortPass, Visit Austin listicle | Lucky Arrow still only glamping ResortPass listing on this SERP. **Rancho Moonrise's ResortPass listing exists but doesn't surface here** — dormant + 0 products = no SERP weight. | Not ranking. Listing exists but inactive |
| wedding venue manor tx | Eventective (180 venues), Wedding Spot (5 venues), Sandlewood Manor (Tomball), Briscoe Manor (Houston), The Knot Manor TX, WeddingWire (10 venues), Ashelynne Events (Magnolia), Briscoe Manor /the-venue, The Manor Trinity TX FB, PartySlate | Honeysuckle Ranch surfaces in WeddingWire/Knot subpages. Cross-Manor venue confusion still dominant — most "Manor" results are Houston-area properties. | Not ranking |
| Rancho Moonrise (brand) | **ranchomoonrise.com (#1, Vercel apex, 200 OK)**, Instagram, LinkedIn, Hipcamp listing, Facebook, Yelp /biz/rancho-moonrise-manor, The Knot marketplace, Romantic Spots Austin, Do512, **ResortPass /hotels/rancho-moonrise (NEW)** | **NEW external touchpoint**: ResortPass listing surfaces in branded SERP — first time since DNS cutover. | **Ranking #1** (branded only) |

---

## Section 2 — Competitor Highlights

### Major State Change — Rancho Moonrise ResortPass Listing EXISTS

**URL:** [resortpass.com/hotels/rancho-moonrise](https://www.resortpass.com/hotels/rancho-moonrise)

**What it shows:**
- Active page, indexed in Google
- Correct address: 20117 Lockwood Rd, Manor, TX 78653
- 3-star designation
- Pool hours: 10:00am – 6:00pm daily
- Amenities: Pool, drink service, towels
- Listing copy: *"Escape to Rancho Moonrise's pool for a rejuvenating day! Soak in ranch views, lounge in comfortable chairs, and bask in the serene atmosphere."*
- Products section: empty — *"This property has no active products at the moment."*

**Why it matters:** This is the single biggest reframing of the multi-week ResortPass decision. The five-week framing — "submit Rancho Moonrise to ResortPass" — has been the wrong question. The listing already exists. The question is whether to **activate it** by adding products (day passes, cabanas, pool+drink packages) or **kill it** by leaving it dormant indefinitely. Either Adam or Ashley submitted at some prior point and the listing went idle, or ResortPass created it speculatively from a venue lead. Worth a 30-second confirmation with Ashley.

### Material State Change — Safari for the Soul Brand Mix Shift

**Direct competitor on safari tent vertical.** Live site copy:
- "you are on over 6-acres at both properties in Spicewood and Marble Falls, TX"
- Accommodation list: **1 safari tent (Cosmic Nights) + 4 yurts (Moonlight Magic, Starry Nights, Sabi Nights, Tentation)**
- Tagline: "an Immersive Adults Only Escape"

**Why it matters:** Safari for the Soul has historically been Rancho's #1 SERP competitor on "safari tent austin texas" specifically. They appear to be transitioning brand mix from safari-tent-first to yurt-first across two properties. The SERP snippet still describes "five luxury, adults-only safari tents on 6 secluded acres" — but the property itself no longer matches that description. Net effect: the safari-tent SERP has fewer authentic safari-tent properties at the top than it appears, opening a small but real clearing for Rancho's `/safari-tents-near-austin/` page IF it gets indexed.

### State Change — Walden Retreats SERP Copy Refresh

**URL:** [waldenretreats.com](https://waldenretreats.com)

**Change:** The "15 luxury safari tents, including 7 suites and 8 studios" framing that's been SERP-dominant for several weeks has been removed from the live site. New copy: "15 luxury glamping tents, designed for comfort in nature. Each sleeps 2-4 people." Acreage (96 ac, Pedernales River) unchanged.

**Why it matters:** Walden has a SERP authority advantage that includes specific unit-count framing. The shift to less specific framing is a small competitive opening for Rancho's own structured property data. Not a big move on its own — but combined with the Safari for the Soul shift, the "safari tent" SERP cluster is in flux in a way it hasn't been all spring.

### Material SERP Shift — Corporate Retreat Top-10 Refreshed

**Three new top-10 entrants on `corporate retreat near austin texas`:**

1. **Moniker Partners** ([monikerpartners.com/retreat-locations/austin](https://www.monikerpartners.com/retreat-locations/austin)) — Planning agency, not a venue. Curates retreats at The LINE Austin, Hotel Van Zandt, Omni Austin Hotel Downtown. Two slots in top 10 (main page + blog).
2. **Peaceful Waters Retreat Center** ([peacefulwatersretreat.com](https://www.peacefulwatersretreat.com)) — La Grange, TX. 53 acres, capacity 40. Spring-fed private lake, sustainable accommodations.
3. **Texas Old Town** ([texasoldtown.com](https://texasoldtown.com)) — Kyle, TX (~20 min from downtown). Hill Country setting positioning.

**Three drop-outs since May 11:** Crystal Creek, Austin Luxury Retreat, Sage Hill `/hill-country/` subpage.

**Why it matters:** The corporate retreat SERP is more dynamic than the glamping or safari-tent SERPs. The Yurtopian's `/corporate-retreats-in-texas-hill-country/` — which has been in or near the top 10 for the past 4 weeks — has dropped out. That's a small opening for Rancho's own `/corporate-retreats/` page IF it gets indexed. Right now Google has not crawled it; the page is invisible.

### Indexing Status Update — Google Has Started Crawling The Apex

**Background:** For 4 weeks since the DNS cutover (4/30), the Re-Verify Gate has carried the claim "DNS live, apex not yet crawled — `/corporate-retreats/` invisible in Google."

**Today:** A `site:ranchomoonrise.com` query returns at least 11 indexed pages — the apex AND child pages including:
- `/` (apex)
- `/host-your-event/`
- `/events/`
- `/accommodations/`
- `/policies/`
- `/videos/`
- `/blog/bachelorette-party-austin-texas/`
- `/blog/things-to-do-manor-tx/`
- `/events/month/2025-08/`
- `/event/open-house/`
- `/testimonial-category/event-hosting/`

**Still NOT indexed:** `/corporate-retreats/` (live 5/1, 17 days), `/safari-tents-near-austin/` (live 4/26, 22 days), the `/blog/` index.

**Why it matters:** The bottleneck has narrowed. "Submit the sitemap to GSC" is still the right action, but the framing now is "the apex is crawling — request indexing specifically on the new landing pages." This is a meaningfully different conversation than four weeks ago.

### Re-Confirmed (No State Change)

#### Lucky Arrow Retreat — [luckyarrowretreat.com](https://luckyarrowretreat.com)
ResortPass listing still dormant. May 1 reactivation date still removed from page. 5 accommodation types still confirmed (Courtyard Cabins 16, Porch Houses 5, Breezeway Cabins 6, Yurts 10, Safari Tents 3).

#### Spoon Mountain Glamping (property pages) — [spoonmountainglamping.com](https://spoonmountainglamping.com)
3 tents, private pools, $60/day heating. Same as May 11. The `/romantic-weekend-getaways-near-austin/` content-marketing page dropped out of the "weekend getaway near austin glamping" top-10 after one week — held its position for the 5/11 → 5/18 cycle only.

#### The Yurtopian — [theyurtopian.com](https://theyurtopian.com)
10-yurt Dripping Springs location confirmed. Corporate retreats page live. **But** their `/corporate-retreats-in-texas-hill-country/` no longer in top-10 on the corporate retreat SERP (was in/near top 10 the past 4 weeks).

#### The Retreat on the Hill — [theretreatonthehill.com](https://theretreatonthehill.com)
11 named units confirmed. $145–$395 pricing.

#### Green Acres ATX — [greenacresatx.com](https://greenacresatx.com)
8 accommodations sleeping 30 total. Editorial press unchanged.

#### Wahwahtaysee Resort
7 safari tents + 3 cabins, 100+ acres on the San Marcos River, ~50 miles south of Austin. Same as May 11.

---

## Section 3 — Content Gap Analysis (Updated May 18)

| Content Type | Who Has It | Rancho Moonrise Status | Δ vs. May 11 |
|---|---|---|---|
| Dedicated safari tent landing page | Walden (re-copy), Safari for the Soul (rebranding), Spoon Mountain, The Retreat on the Hill | Built (`/safari-tents-near-austin/`), FAQPage schema. **Still NOT indexed by Google** 22 days post-launch. | Safari-tent SERP cluster in unusual flux — small opening if indexing unblocks |
| Corporate retreat landing page | Lucky Arrow, 7744 Ranch, Element Ranch, Sage Hill, Peaceful Waters, Texas Old Town | Built (`/corporate-retreats/`), full schema, 7 inbound internal links. **Still NOT indexed.** | Yurtopian's equivalent dropped out of top-10 — small opening |
| Per-unit accommodation URLs | The Retreat on the Hill (11), Safari for the Soul (5), Lucky Arrow (40 across 5 types), Green Acres (8) | accommodations.html lists 4 categories | Unchanged — blocked on low-res source JPGs |
| Private pool per unit | Spoon Mountain (3 units) | Shared pool only — different value prop | Unchanged |
| ResortPass listing | Lucky Arrow (dormant), **Rancho Moonrise (dormant — listing exists)** | **Listing exists.** Dormant — 0 products. | **MAJOR — listing identified, decision moves from "submit" to "activate"** |
| Glamping Hub listing | Talula Mesa, Udoscape, The Yurtopian, Loving Heart, Spoon Mountain (likely) | Still absent | Unchanged (5 weeks) |
| WeddingWire listing | Honeysuckle Ranch | Still absent | Unchanged |
| Destination-guide / weekend-getaway research content | Spoon Mountain (dropped out of weekend-getaway top-10 after one week) | 18-post blog cluster — pipeline paused 2026-04-23 | Spoon Mountain content move held one week only — single-week leading indicator |
| Press / media page | Sinya, Lucky Arrow (CultureMap), Walden (FOX 7), Green Acres (U.S. News, Dwell, Apartment Therapy, Austin Monthly) | None | Unchanged |
| External-listing brand-SERP hygiene | n/a | Hotels.com ho2867109568 "20 luxury cabins... 50 guests" — banned per VOICE-GUIDE | Unchanged (2nd week) |
| Hipcamp curation | Urban Hideout, Cozy Cactus, Breathe Deeply, River Forest Haven, Texas Music River Ranch (+15 more) | Active listing — but NOT in Hipcamp's "20 Best Glamping Near Austin" | Carousel rotated; Rancho still absent |
| Mission-driven content | Cameron Ranch Glamping | None | Unchanged |
| Google apex indexing | n/a | **STARTED.** 11+ pages indexed including apex, host-your-event, events, accommodations | **MAJOR — bottleneck narrowed** |
| New landing page indexing | n/a | **NOT YET.** `/corporate-retreats/` 17d uncrawled, `/safari-tents-near-austin/` 22d uncrawled | Stable — request indexing specifically on these URLs |

---

## Section 4 — Quick Wins This Week

1. **ResortPass listing — activate or formally kill (Adam, 30s with Ashley + decision).** The listing already exists. Decision is "activate by adding day-pass products" or "leave dormant and remove from TODO." Five weeks of "should we submit" is the wrong question.

2. **GSC — request indexing on the specific uncrawled URLs (Adam).** Submission framing has shifted: apex is now indexing on its own. The specific URLs that still need a manual indexing request are `/corporate-retreats/` and `/safari-tents-near-austin/`. ~5 minutes in Search Console.

3. **Hotels.com listing copy fix (Adam, ~15 min).** ho2867109568 still pushes "20 luxury cabins and safari tents... 50 guests" — banned per VOICE-GUIDE. 2nd week as a quick win. Hotels.com listing UI is the path.

4. **Glamping Hub submission still absent (5 weeks).** Free, ~15 min at glampinghub.com/list-your-property. The Yurtopian, Udoscape, Talula Mesa, Sabi, Loving Heart all already there.

5. **Hipcamp curation gap — drill in (Claude follow-up).** 2026-05-16 audit at `brand/2026-05-16-hipcamp-curation-gap-audit.md` already identified the structural exclusion flags (`isPrivate: true`, `isReviewable: false`, state-level `discoverUrl`). NEEDS ADAM question to Ashley: "is Hipcamp intentionally backlink-only, or do we want bookings from it?" Still pending Ashley answer.

6. **Blog pipeline restart decision (Adam + Ashley).** Spoon Mountain's content-marketing page held the weekend-getaway top-10 for exactly one week before dropping out. The "content-marketing is a leading indicator" framing from May 11 weakens when the page has a one-week SERP half-life. Less urgent than last week's framing implied.

---

## Section 5 — Recommendations for This Week

**Priority 1 — ResortPass listing reframe (Adam, fastest decision available):**
The listing at [resortpass.com/hotels/rancho-moonrise](https://www.resortpass.com/hotels/rancho-moonrise) is live but dormant. The five-week "submit or not" debate is answered: it's already submitted. The actual question is "do we want to sell pool day passes to non-overnight guests?" — a business decision, not a marketing decision. 30 seconds with Ashley settles it.

**Priority 2 — GSC indexing request on specific URLs (Adam, ~5 min):**
Apex is crawling. `/corporate-retreats/` (17 days uncrawled) and `/safari-tents-near-austin/` (22 days uncrawled) are not. In Search Console, use URL Inspection → Request Indexing for each. Don't re-submit the whole sitemap; target the specific URLs.

**Priority 3 — Hotels.com listing fix (Adam, ~15 min):**
Same item as last 2 weeks. ho2867109568 "20 luxury cabins... 50 guests." Banned per VOICE-GUIDE.

**Priority 4 — Track Safari for the Soul rebrand:**
Direct safari-tent competitor is moving brand mix from "5 safari tents" to "1 safari tent + 4 yurts." Their SERP authority on "safari tent austin texas" should soften over time as the SERP snippet catches up to property reality. Combined with Walden's split-copy drop, the safari-tent SERP cluster is the most dynamic Rancho-relevant SERP this spring — worth monitoring weekly.

---

## Appendix: Rancho Moonrise Competitive Positioning (May 18, 2026)

| Attribute | Current State | Change Since May 11 |
|---|---|---|
| Organic ranking — glamping queries | Not ranking | No change |
| Organic ranking — wedding queries | Not ranking | No change |
| Organic ranking — safari tent queries | Not ranking. SERP cluster in flux | Direct competitor (Safari for the Soul) rebranding to yurts |
| Organic ranking — corporate retreat | Not ranking. `/corporate-retreats/` uncrawled. Yurtopian dropped out of top-10 | Small SERP opening — pending indexing |
| Organic ranking — weekend getaway | Not ranking | Spoon Mountain's content-marketing page dropped out after one week |
| Organic ranking — branded query | #1 (Vercel apex) + **ResortPass listing now surfacing** | New external touchpoint |
| The Knot | Active — 8 reviews, 4.5 stars | No change |
| Hipcamp | Active listing — but NOT in curated "20 Best Glamping Near Austin" | No change (carousel rotated) |
| Glamping Hub | ❌ Still not listed | No change (5 weeks) |
| WeddingWire | ❌ Still not listed | No change |
| TripAdvisor | 0 reviews, NOT claimed | No change |
| Hotels.com listing copy | "20 luxury cabins... 50 guests" — banned per VOICE-GUIDE | No change |
| **ResortPass listing** | **Live but dormant — 0 products** | **MAJOR — listing identified this week** |
| DNS cutover | ✅ LIVE (4/30) — apex serves from Vercel | Stable, 18 days |
| **Google apex indexing** | **STARTED — 11+ pages indexed** | **MAJOR — bottleneck narrowed** |
| GSC indexing — `/corporate-retreats/` | Not crawled 17 days post-launch | Stable |
| GSC indexing — `/safari-tents-near-austin/` | Not crawled 22 days post-launch | Stable |
| AggregateRating coverage | 17/17 customer-facing pages (18/18 incl. corp-retreats) | Stable |
| FAQPage parity | 18/18 customer-facing pages | Stable |
| Blog cluster — inbound linking | 4-inbound floor across all 17 posts | Stable |
| Blog cluster — wordCount schema | 17/17 (5/17 ship) | NEW — cluster-wide schema enrichment shipped |
| Lucky Arrow status | 5 accommodation types; ResortPass dormant; no public reactivation date | Stable |
| Safari for the Soul status | **Brand mix shift: 1 safari tent + 4 yurts across 2 properties** | Material brand change |
| Walden Retreats status | 15 glamping tents; SERP split-copy removed | Material copy change |
| Spoon Mountain status | 3 tents + private pools; weekend-getaways page dropped from SERP top-10 after one week | Single-week SERP half-life on content-marketing move |
| The Yurtopian status | 16 yurts + corporate retreats page; dropped from corporate retreat top-10 | Small SERP opening |
| The Retreat on the Hill status | 11 multi-format units, $145–$395/night | Stable |
| Green Acres ATX status | 8 units, editorial press, Elgin (~25 min from Manor) | Stable |
| Corporate retreat SERP composition | 3 new entrants (Moniker, Peaceful Waters, Texas Old Town), 3 drop-outs | Material SERP refresh |
| New site SEO readiness | DNS live, 17/17 schema coverage, 18 blog posts, all schema-enriched (incl. wordCount as of 5/17), 4-inbound floor on blog cluster | Stable / improving |
