# Rancho Moonrise — Competitive Intelligence Report
**Prepared for:** Rancho Moonrise Operations  
**Subject Property:** Rancho Moonrise · 20117 Lockwood Rd, 78653 (20 min from downtown Austin)  
**Research Date:** May 4, 2026  
**Previous Report:** April 27, 2026

---

## Executive Summary

Big week of structural change for the subject property — DNS cutover went live April 30 (Vercel is now production origin) and the `/corporate-retreats/` landing page shipped May 1, closing the content gap flagged in last week's report. Internal-linking pass to the new page (May 2) wires it into the topical cluster with 7 inbound links across 6 high-value source pages. AggregateRating coverage is now 17 / 17 customer-facing landing pages.

The competitive landscape itself moved less. Lucky Arrow's ResortPass dormancy did **not** end on May 1 as their site copy promised — three days past the projected reactivation date, the listing still shows "no active products at the moment." That window narrowed, then extended. Spoon Mountain's private-pools launch is still live. The Yurtopian's `/corporate-retreats-in-texas-hill-country/` page is still up — and now that Rancho Moonrise has its own equivalent live as of three days ago, the gap has flipped from "glaring absence" to "needs Google to pick it up." DNS-fresh + new page is a 1–3 week indexing curve, not an instant ranking event.

Branded SERP for "Rancho Moonrise" now shows ranchomoonrise.com as the first result — Vercel-hosted, not BofillTech. That's the first concrete external signal that the cutover propagated. Non-brand SERPs ("glamping near austin tx", "safari tent austin texas", "corporate retreat venue near austin texas") still show zero Rancho Moonrise presence. Indexing has not yet caught up.

**⚡ Top 3 Actionable Findings (Week of May 4):**

1. **Lucky Arrow ResortPass window has *extended*, not closed.** Their site still says full menu/bar resumes May 1, 2026. May 1 was three days ago. The listing is still dormant. The April 27 "decide within 48 hours" framing turned out to be wrong — there's no signal Lucky Arrow is putting day passes back on ResortPass at all. The ResortPass submission decision is now a clean either/or: submit this week (still no Austin glamping competitor on the platform), or formally kill the idea.

2. **GSC sitemap submission is now the highest-leverage SEO action.** With DNS live four days and `/corporate-retreats/` published three days, the bottleneck has moved from "DNS is blocking everything" to "Google has not yet crawled the apex." A single GSC submission of `https://ranchomoonrise.com/sitemap.xml` would force-feed 17 customer-facing pages plus 18 blog posts plus the new corporate-retreats page into the crawl queue. Every day of delay is a day of competitor compounding.

3. **Walden Retreats SERP framing tightened to "15 luxury safari tents (7 suites + 8 studios)" in the search snippet** — the Pedernales-cliffs property is now the SERP-dominant safari tent option for Austin alongside Safari for the Soul. Rancho Moonrise's `/safari-tents-near-austin/` landing page still has not appeared on this SERP since DNS cutover.

---

## Re-Verify Gate — Claims from April 27 Checked Live (May 4)

| Claim | Live Verification (May 4) | Result |
|---|---|---|
| Lucky Arrow safari tents (3 units) | `curl` luckyarrowretreat.com/lodging — Safari Tents listed as accommodation type | ✅ STILL TRUE |
| Lucky Arrow ResortPass dormant ("no active products") | WebFetch resortpass.com/hotels/lucky-arrow-retreat — "This property has no active products at the moment." Site copy still references "full food and bar menu will resume starting May 1, 2026" — but May 1 has passed and the listing remains dormant | ✅ STILL TRUE — but window EXTENDED past projected reactivation |
| The Yurtopian corporate retreats page live | WebFetch theyurtopian.com/corporate-retreats-in-texas-hill-country/ — H1 "Plan Team Building, Wellness or Corporate Retreats In Texas," 10 yurts, copyright 2019–2025 | ✅ STILL TRUE |
| Spoon Mountain private pools per tent | `curl` spoonmountainglamping.com — "We Now Have Private Pools!" + "Private pools for each of our luxury tents! ... Enhance your stay with pool heating, available for an additional $60 per day." | ✅ STILL TRUE |
| Safari for the Soul ranking #1 for "safari tent austin texas" | Live SERP — top result | ✅ STILL TRUE |
| The Retreat on the Hill (11 multi-format units) | WebFetch theretreatonthehill.com — 11 named units confirmed (Mirror House, Wings, Starfield Observatory, Stardome Suite, Bird's Nest, Sunset Cliff House, Bayview Cliff House, Eagle's Nest Retreat, Curves the Container Suite, The Twins, The Tipis) | ✅ STILL TRUE |
| Rancho Moonrise not ranking organically | Live SERPs across glamping / safari tent / corporate retreat queries — branded query now shows ranchomoonrise.com (Vercel-hosted) #1; non-brand queries still show zero presence | ✅ STILL TRUE on non-brand queries; partial change on brand SERP (Vercel apex visible) |
| DNS still on BofillTech (Flywheel) | RESOLVED 2026-04-30 — apex now serves from Vercel, branded SERP confirms | ❌ CLAIM SUPERSEDED — pre-existing resolution, not re-verified this run |

---

## Section 1 — SERP Rankings Summary (May 4, 2026)

| Keyword | Top SERP Sites | Named Competitors in Top 10 | Rancho Moonrise Position |
|---|---|---|---|
| glamping near austin tx | Hipcamp (#1), Camposanto ATX, Walden Retreats, Udoscape, Glamping Hub, Talula Mesa, A Taste of Koko (listicle), Safari for the Soul, Cameron Ranch, **Green Acres ATX (Elgin)** | Green Acres ATX surfacing in top 10 — claims "Austin's Original Glamping Location," 8 units in Elgin (~25 min from Manor) | Not ranking |
| safari tent austin texas | Safari for the Soul (#1), Wahwahtaysee Resort, The Retreat on the Hill, Expedia (listing for a Marble Falls tent), Spoon Mountain, Walden Retreats (15 luxury safari tents, 7 suites + 8 studios), Glamping Hub | Wahwahtaysee surfacing more aggressively in SERP descriptions (7 tents + 3 cabins, 100+ ac on San Marcos River, 50 mi south) | Not ranking |
| corporate retreat near austin texas | Element Ranch, Walden Retreats, Lucky Arrow, Wilder Retreats, Sage Hill, Miraval Austin, Lake Austin Spa, Crystal Creek, Texas Old Town, The Yurtopian | Heavily entrenched top 10 — same names as April 27, no new entrants | Not ranking. New `/corporate-retreats/` page (5/1) not yet indexed |
| pool day pass austin | ResortPass (top 10 dominated by hotels: W Austin, Fairmont, Thompson, JW Marriott, Hotel Van Zandt, South Congress, etc.) — Lucky Arrow listed but inactive | No glamping competitor showing on hotel-pass SERP | Not ranking |
| wedding venue manor tx | Eventective, WeddingWire, Honeysuckle Ranch, Knot listings | Honeysuckle Ranch dominant for Manor specifically | Not ranking (Knot listing exists, not surfacing) |
| weekend getaway austin | Travel blogs, Hipcamp, individual properties | Walden Retreats, Lucky Arrow, Cameron Ranch | Not ranking |
| Rancho Moonrise (brand) | **ranchomoonrise.com (#1, now Vercel-hosted)**, LinkedIn, Romantic Spots Austin, Facebook, Hipcamp, Instagram, Beyond the Nest Austin, MTHR Collective | DNS cutover effect visible — apex domain showing as live Vercel site, not Flywheel | **Ranking** (branded only; first concrete signal post-cutover) |

---

## Section 2 — Competitor Highlights

### New SERP Surfacing — Green Acres ATX

#### Green Acres Glamping — [greenacresatx.com](https://greenacresatx.com)
**Location:** Elgin, TX (2889 FM 1704) — Far East Austin, ~25 min from Manor.  
**What they have:** 8 accommodations across diverse formats — The Lodge (sleeps 6), Spartan Mansion vintage trailer (sleeps 4), Airstream Land Yacht (sleeps 2), 4 yurts (Yurts 1–4, sleeps 2–8), full compound rental sleeps up to 30. Press: U.S. News, Dwell, Apartment Therapy, Austin Monthly.  
**Why it matters:** This is the closest geographic competitor surfaced so far. Manor and Elgin are both East-of-Austin, both Bastrop-County-adjacent, both 25–30 min from downtown. Green Acres' claim "Austin's Original Glamping Location" is a positioning Rancho Moonrise's accommodations page does not contest. Their multi-format approach (vintage trailer + airstream + yurts + lodge) maps to The Retreat on the Hill's 11-unit model at smaller scale — and they have established editorial press Rancho Moonrise still lacks.

---

### Re-Confirmed (No State Change)

#### The Retreat on the Hill — [theretreatonthehill.com](https://theretreatonthehill.com)
11 named units confirmed. Format mix unchanged. Still surfacing in safari tent SERP.

#### Spoon Mountain Glamping — [spoonmountainglamping.com](https://spoonmountainglamping.com)
"We Now Have Private Pools!" copy still live verbatim. Heating $60/day. 3 tents (Kingfisher, Shaka, Chisum) — pool launch is roughly two weeks old at this point.

#### The Yurtopian — [theyurtopian.com](https://theyurtopian.com)
`/corporate-retreats-in-texas-hill-country/` live. 10 yurts at Dripping Springs surfaced on the corporate page; total inventory across both locations remains 16. H1: "Plan Team Building, Wellness or Corporate Retreats In Texas."

#### Safari for the Soul — [safariforthesoulglamping.com](https://safariforthesoulglamping.com)
Still #1 for "safari tent austin texas." SERP description has tightened to "five luxury, adults-only safari tents on 6 secluded acres" — earlier framings included an additional home rental; current SERP snippet emphasizes the 5-tent core.

#### Walden Retreats — [waldenretreats.com](https://waldenretreats.com)
SERP description has tightened to "15 rooms of luxury safari style glamping tents, including 7 suites and 8 studios." This is the most explicit unit-count framing Walden has surfaced in any recent run — they're now SERP-dominant alongside Safari for the Soul, with format/unit specifics in the snippet.

#### Wahwahtaysee Resort — wahwahtayseeresort.com
7 safari tents + 3 cabins on 100+ ac on the San Marcos River, 50 miles south of Austin. Newly prominent in the safari tent SERP descriptions this week.

#### Lucky Arrow Retreat — [luckyarrowretreat.com](https://luckyarrowretreat.com)
5 accommodation types still confirmed, including 3 Safari Tents. Site copy still references "full food and bar menu will resume starting May 1, 2026." But May 1 has passed and the ResortPass listing still shows "no active products at the moment" — there's no live signal Lucky Arrow has reactivated day passes.

---

## Section 3 — Content Gap Analysis (Updated May 4)

| Content Type | Who Has It | Rancho Moonrise Status | Δ vs. April 27 |
|---|---|---|---|
| Dedicated safari tent landing page | Walden, Safari for the Soul, Spoon Mountain, The Retreat on the Hill | Built (`/safari-tents-near-austin/`), FAQPage schema, **now indexable post-DNS** | Indexable now; needs GSC submit |
| Corporate retreat package landing page | Lucky Arrow, 7744 Ranch, Element Ranch, The Yurtopian, Sage Hill | **BUILT 5/1** (`/corporate-retreats/`), full schema (EventVenue, BreadcrumbList, FAQPage, SpeakableSpec), 7 inbound internal links | ✅ GAP CLOSED on the build side; awaiting indexing |
| Per-unit accommodation URLs (one URL per unit) | The Retreat on the Hill (11), Safari for the Soul (5), Lucky Arrow (5+), Green Acres (8) | accommodations.html lists 4 categories, no per-unit pages | Blocked on low-res source JPGs |
| Private pool per unit | Spoon Mountain (3 units), Walden Retreats (some) | Shared pool only — different value prop | Unchanged |
| ResortPass pool day pass listing | Lucky Arrow (still inactive May 4) | Not submitted — window extended past May 1 | Window state changed (extended, not closed) |
| Glamping Hub listing | Talula Mesa, Udoscape, The Yurtopian, Loving Heart, Spoon Mountain (likely) | Still absent | Unchanged |
| WeddingWire listing | Honeysuckle Ranch, Ranch Austin, Grand Lady Austin | Still absent | Unchanged |
| Press / media page | Sinya, Lucky Arrow (CultureMap), Walden (FOX 7), Green Acres (U.S. News, Dwell, Apartment Therapy, Austin Monthly) | No press page; brief local TV mentions only | Green Acres editorial footprint adds to gap |
| Mission-driven content (charity / climate) | Cameron Ranch Glamping | None | Unchanged |
| Multi-format unit copy | The Retreat on the Hill, Green Acres | 4-category accommodations.html | Unchanged |

---

## Section 4 — Quick Wins This Week

1. **GSC sitemap submit (Adam — highest leverage now).** With DNS live and `/corporate-retreats/` published, the next bottleneck is Google's crawl queue. Submit `https://ranchomoonrise.com/sitemap.xml` in Search Console and request indexing on `/corporate-retreats/`, `/safari-tents-near-austin/`, and the apex. Every day of indexing delay is a day where The Yurtopian's corporate retreats page out-ages ours.

2. **ResortPass — extended window, simplest decision yet (Adam).** April 27's "decide within 48 hours" was wrong — Lucky Arrow's reactivation didn't happen on schedule. The window is still open. Either email ResortPass supply this week or formally kill the idea on TODO. No third option still applies, but the urgency framing was overstated last week.

3. **Glamping Hub submission still absent.** Three weeks running. Free, 15 min, glampinghub.com/list-your-property. The Yurtopian, Udoscape, Talula Mesa already there. Small action, compounding return.

4. **Per-unit accommodation pages (Phase 2, blocked).** The Retreat on the Hill's 11-URL model + Green Acres' 8-URL model both reinforce the per-unit content density pattern. accommodations.html still shows 4 thumbnail cards. Blocked on low-res source JPGs (see CONTEXT.md "Low-res source JPGs" section). Re-upload from Ashley unblocks this.

---

## Section 5 — Recommendations for This Week

**Priority 1 — Submit sitemap to Google Search Console (Adam):**  
This is the highest-leverage SEO action available this week. DNS is live four days. `/corporate-retreats/` is live three days. The Vercel apex serves the full 17/17 schema-coverage site. Without a GSC sitemap submission and indexing request, the new site has to wait for organic crawl. This was already in CONTEXT.md "What's Next" as a NEEDS ADAM item — promoting it to Priority 1 here.

**Priority 2 — ResortPass decision (Adam):**  
Window extended past projected reactivation. Either submit this week or remove from TODO. The April 27 framing of "decide within 48 hours" was incorrect — Lucky Arrow has not put day passes back on ResortPass three days past their stated May 1 resumption. Same recommendation, looser timeline: pick a side.

**Priority 3 — Decide on Green Acres ATX as an indirect-SERP threat:**  
Green Acres is the closest geographic competitor surfaced so far (Elgin, ~25 min from Manor). They have editorial press Rancho Moonrise lacks. Track their ranking changes; consider whether the press-pitch action item from the April 6 baseline (Texas Monthly, CultureMap, Austin Monthly) needs a different angle if Green Acres is already in three of those publications.

**Priority 4 — Glamping Hub submission (Adam, 15 min):**  
Unchanged for three weeks. Smallest-effort action item still on the list.

---

## Appendix: Rancho Moonrise Competitive Positioning (May 4, 2026)

| Attribute | Current State | Change Since April 27 |
|---|---|---|
| Organic ranking — glamping queries | Not ranking | No change |
| Organic ranking — wedding queries | Not ranking | No change |
| Organic ranking — safari tent queries | Not ranking | No change |
| Organic ranking — corporate retreat | Not ranking | New `/corporate-retreats/` page live 5/1 — awaiting indexing |
| Organic ranking — branded query | **#1 (Vercel-hosted apex)** | NEW — first post-cutover signal |
| The Knot | Active — 8 reviews, 4.5 stars | No change |
| Hipcamp | Active — 22 sites listed | No change |
| Glamping Hub | ❌ Still not listed | No change (3 weeks) |
| WeddingWire | ❌ Still not listed | No change |
| ResortPass | Not submitted | Window EXTENDED past May 1 — Lucky Arrow has not reactivated |
| DNS cutover | ✅ LIVE (4/30) — apex serves from Vercel | RESOLVED — branded SERP confirms |
| GSC sitemap submission | Not yet submitted (NEEDS ADAM) | Newly the #1 SEO bottleneck |
| `/corporate-retreats/` landing page | ✅ LIVE (5/1) — full schema, 7 internal inbound links | NEW — closes content gap on the build side |
| AggregateRating coverage | 17 / 17 customer-facing pages | Up from 16/17 last week (closed `/events/` 5/3) |
| Internal linking density (corp-retreats hub) | 7 inbound links from 6 source pages | NEW (5/2 pass) |
| Competitor count (top glamping SERP) | 7+ ranked individual properties | +1: Green Acres ATX surfacing |
| Lucky Arrow status | Still 5 accommodation types; ResortPass still dormant | Window EXTENDED |
| Spoon Mountain status | 3 tents + private pools | Unchanged |
| The Yurtopian status | 16 yurts + corporate retreats page | Unchanged |
| Walden Retreats SERP framing | 15 luxury safari tents (7 suites + 8 studios) | NEW SERP-snippet specificity |
| Wahwahtaysee Resort SERP prominence | 7 safari tents + 3 cabins, 100+ ac, San Marcos River | Newly prominent in safari tent SERP descriptions |
| New site SEO readiness | DNS live, 17/17 schema coverage, 18 blog posts, `/corporate-retreats/` live, `/safari-tents-near-austin/` live, GSC submit pending | Major shift — unblocked, awaiting crawl |
