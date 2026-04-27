# Rancho Moonrise — Competitive Intelligence Report
**Prepared for:** Rancho Moonrise Operations  
**Subject Property:** Rancho Moonrise · 20117 Lockwood Rd, 78653 (20 min from downtown Austin)  
**Research Date:** April 27, 2026  
**Previous Report:** April 20, 2026

---

## Executive Summary

The Austin glamping SERP keeps thickening. **The Retreat on the Hill** entered "safari tent austin texas" this week — 11 multi-format units (safari tents, tipis, belle tents, star-gazing domes, mirror house, container suite, cliff house) about an hour from Austin between Lakes LBJ and Marble Falls. **Spoon Mountain Glamping** just unveiled private pools for each of their 3 tents. **The Yurtopian** shipped a dedicated `/corporate-retreats-in-texas-hill-country/` landing page — exactly the content gap Rancho Moonrise still has.

Last week's time-sensitive window — Lucky Arrow's ResortPass dormancy — is closing fast. As of today's live verification (April 27), Lucky Arrow's ResortPass page still shows "no active products at the moment," but their site explicitly states full menu and bar resume **May 1, 2026** — that's 4 days. The 10-day opportunity to be the only non-hotel glamping pool pass in Austin is now a 4-day opportunity.

Rancho Moonrise still has zero organic ranking. Live `curl -I ranchomoonrise.com` confirms the main domain is still pointed at Flywheel/BofillTech (`x-fw-server: Flywheel/5.1.0`). The Vercel site — 18+ blog posts, full schema/AEO suite, dedicated safari tent landing page, FAQ schema added April 26 — sits indexed-and-waiting. The branded SERP shows ranchomoonrise.com (old), Hipcamp, The Knot, Cloudbeds, LinkedIn, Facebook — and zero Vercel-site presence.

**⚡ Top 3 Actionable Findings (Week of April 27):**

1. **⚡ The Retreat on the Hill** is the most format-diverse competitor in the safari tent SERP yet — 11 distinct units across 5+ formats. Their content density (one URL per accommodation, plus dedicated event/wedding/retreat pages) is the model Rancho Moonrise's accommodations.html must compete with once indexed.

2. **⚡ Spoon Mountain Glamping unveiled private pools** for all 3 tents (heating $60/day add-on). Their site copy: *"We're thrilled to unveil a sparkling new addition... Private pools for each of our luxury tents."* Pool was Rancho Moonrise's clearest pool-day-pass differentiator vs. Lucky Arrow; Spoon Mountain just contested it at the per-unit luxury level.

3. **⚡ ResortPass window narrowed to 4 days.** Lucky Arrow's ResortPass listing still shows "no active products at the moment" today. Their site says full menu/bar resume May 1. Submit-or-skip decision must happen this week.

---

## Re-Verify Gate — Claims from April 20 Checked Live

| Claim | Live Verification (April 27) | Result |
|---|---|---|
| Lucky Arrow safari tents (3 units, /lodging) | Fetched luckyarrowretreat.com/lodging — 5 accommodation types confirmed (Courtyard Cabins, Porch Houses, Breezeway Cabins, Yurts, Safari Tents); Safari Tents = "3 units available" | ✅ STILL TRUE |
| Lucky Arrow ResortPass listed but no active products | Fetched resortpass.com/hotels/lucky-arrow-retreat — "This property has no active products at the moment" | ✅ STILL TRUE — window now 4 days, not 10 |
| The Yurtopian: 16 luxury yurts, Dripping Springs (10) + Wimberley (6) | Fetched theyurtopian.com — 16 yurts confirmed across both locations | ✅ STILL TRUE |
| Spoon Mountain Glamping: Wimberley safari tents | Fetched spoonmountainglamping.com — 3 tents (Kingfisher, Shaka, Chisum); **NEW: private pools just unveiled** (heating $60/day) | ⚠️ STATE CHANGE — material product upgrade since last report |
| Safari for the Soul ranking #1 for "safari tent austin texas" | Live SERP — still #1 | ✅ STILL TRUE |
| Udoscape / Camposanto ATX / Cameron Ranch still active | All three sites fetched — Udoscape 11 pods, Camposanto "open to minimal dates" 2026, Cameron Ranch 7 units across Lake Livingston + Bastrop | ✅ STILL TRUE |
| Rancho Moonrise not ranking | Live SERPs across all tracked keywords — branded query returns ranchomoonrise.com (old), Hipcamp, The Knot, Cloudbeds, LinkedIn — zero Vercel-site results | ✅ STILL TRUE |
| DNS still on BofillTech (Flywheel) | `curl -I ranchomoonrise.com` → `x-fw-server: Flywheel/5.1.0` | ✅ STILL TRUE — DNS cutover blocker unresolved |

---

## Section 1 — SERP Rankings Summary (April 27, 2026)

| Keyword | Dominant Sites | Named Competitors in Top 10 | Rancho Moonrise Position |
|---|---|---|---|
| glamping near austin tx | Hipcamp (#1), Camposanto ATX, Walden Retreats, Udoscape, Safari for the Soul, A Taste of Koko, Talula Mesa, GlampingHub, Cameron Ranch, **The Yurtopian** | The Yurtopian persistent in top 10 | Not ranking |
| safari tent austin texas | Safari for the Soul (#1), Expedia, Spoon Mountain, Wahwahtaysee, **NEW: The Retreat on the Hill**, Walden Retreats, Hipcamp, Glamping.com, Glamping Hub | The Retreat on the Hill is new (11 multi-format units) | Not ranking |
| corporate retreat near austin texas | Element Ranch, Sage Hill, TeamOut, **PlanRetreat (Top 10 2026)**, Wilder Retreats, Camp Lucy, Peaceful Waters, **The Yurtopian (corporate-retreats page)**, Austin Luxury Retreat | The Yurtopian now has a dedicated corporate retreats landing page | Not ranking |
| pool day pass austin | ResortPass (top 10 dominated by hotels: W Austin, Fairmont, Thompson, JW Marriott, Hotel Van Zandt, South Congress, **The Wayback** new, **Otopia Rooftop**, The LINE) | Lucky Arrow listed but inactive — no glamping competitor showing on hotel-pass SERP | Not ranking |
| wedding venue manor tx | Eventective, WeddingWire, Honeysuckle Ranch, Knot listings | Honeysuckle Ranch dominant for Manor specifically | Not ranking (Knot listing exists, not surfacing) |
| weekend getaway austin | Travel blogs, Hipcamp, individual properties | Walden Retreats, Lucky Arrow, Cameron Ranch | Not ranking |

---

## Section 2 — Competitor Highlights

### New Entrants This Week

#### The Retreat on the Hill — [theretreatonthehill.com](https://theretreatonthehill.com)
**Location:** Texas Hill Country, ~1 hour from downtown Austin, perched on the tallest local hilltop with 360° views overlooking Lakes LBJ and Marble Falls.  
**What they have:** 11 distinct glamping units across 5+ formats — Star-gazing domes (Starfield Observatory + Stardome Suite, "perched 20 feet in the air"), Safari tents, Belle Tents (private decks), Tipis, Mirror House, Wings, Bird's Nest (treehouse-style), container suite, cliff house. All unique, none repeating.  
**Why it matters:** The most **format-diverse** competitor in the safari tent SERP. Where Rancho Moonrise's accommodations page sells 4 categories (cabins, double safari, family safari, premium safari), The Retreat on the Hill sells 11 individually-named experiences — each a separate URL, each a separate booking, each a separate keyword target. This is the content-density model the new Vercel site needs to match once indexed. They also operate as a wedding/event venue and corporate retreat site, so the comparison is direct.

---

### Updates to Established Competitors

#### Spoon Mountain Glamping — [spoonmountainglamping.com](https://spoonmountainglamping.com)
**Key change since April 20:** **Private pools just unveiled** for all 3 tents (Kingfisher, Shaka, Chisum). Direct site copy: *"We're thrilled to unveil a sparkling new addition to your stay at Spoon Mountain. Private pools for each of our luxury tents!"* Pool heating available for $60/day. Adults-only positioning maintained.  
**Strategic implication:** Rancho Moonrise's pool — the basis for the ResortPass play and the pool day pass blog post — was a *shared amenity* differentiator (one of the few non-hotel glamping pools open to all guests). Spoon Mountain just upgraded the format to *private pool per unit* at the luxury tier. The "pool" content gap is narrowing fast. Worth noting: only 3 tents at Spoon Mountain vs. Rancho Moonrise's full pool deck capacity, so the use cases stay distinct (couples retreat vs. group event with shared pool day passes).

#### The Yurtopian — [theyurtopian.com](https://theyurtopian.com)
**Key change since April 20:** Now ranking with a **dedicated corporate retreats landing page** — `/corporate-retreats-in-texas-hill-country/`. Capacity 1–20+ guests, 10 yurts on the Dripping Springs property, indoor lodge with high-speed wifi + large-screen TV, covered pavilion, two fire pits, creek-adjacent yoga area, on-site spa yurt for massage. 45 min from Austin.  
**Strategic implication:** This is the exact page Rancho Moonrise doesn't have. Lucky Arrow has it, 7744 Ranch has it, Element Ranch has it, Sage Hill has it, and now The Yurtopian has it. Rancho Moonrise has the corporate-retreat blog post (April 20 publish) but no landing page with capacity, amenities, and inquiry CTA. Content gap is now glaring.

#### Lucky Arrow Retreat — [luckyarrowretreat.com](https://luckyarrowretreat.com)
**Status:** No structural change since April 20. ResortPass still showing "no active products." Site copy reaffirms full food/bar menu resumes May 1, 2026 (4 days from this report). 5 accommodation types still confirmed (Courtyard Cabins, Porch Houses, Breezeway Cabins, Yurts, Safari Tents = 3 units, "newest addition").  
**Strategic implication:** The ResortPass window is now 4 days. After May 1, Lucky Arrow reactivates and Rancho Moonrise loses the "only non-hotel glamping pool pass in Austin" angle.

#### Cameron Ranch Glamping — [cameronranchglamping.com](https://cameronranchglamping.com)
**Status:** Confirmed multi-property. 7 units across two Texas locations: Coldspring/Lake Livingston (Wonderland Geo Dome, ÖÖD Texas Mirror House, Zen Den Cabin, Lighthouse on Lake Livingston) and **Bastrop/Austin** (The Hideaway ÖÖD, The Bloom ÖÖD, Premium Lakefront Cabin Magnolia). Booking calendars open through March 2027.  
**Strategic implication:** The Bastrop units are in the same Austin geographic corridor as Manor — closer than previously categorized. Mission-driven angle (mental-health nonprofits, climate initiatives, Stripe Climate) is differentiated content positioning Rancho Moonrise hasn't matched.

#### Safari for the Soul — [safariforthesoulglamping.com](https://safariforthesoulglamping.com)
**Status:** Still #1 for "safari tent austin texas." Confirmed inventory: 5 tent/yurt accommodations + 1 home rental — Cosmic Nights, Moonlight Magic Yurt, Starry Nights Yurt, Sabi Nights (460 sq ft Marble Falls), Tentation Yurt (Spicewood, treehouse feel), KickBack Cove Home (Spicewood). Adults-only, pet-friendly, Indonesian-inspired across all units.

#### Udoscape — [udoscaperesorts.com](https://udoscaperesorts.com)
**Status:** Still active. Confirmed 11 pods total: Deluxe (4) sleeps 3, Deluxe-Plus (4) sleeps 4, Ultra-Lux (2) sleeps 5, Crown-Lux (1) "honeymoon pod" 21+ only. Cloudbeds booking, conference/board room, massage pod, experiential packages.

#### Camposanto ATX — [camposantoatx.com](https://camposantoatx.com)
**Status:** Site active but limited 2026 availability ("open to minimal dates"). 2 yurts on Lake Travis (Graveyard Point neighborhood). Direct contact required for bookings.

---

## Section 3 — Content Gap Analysis (Updated April 27)

| Content Type | Who Has It | Rancho Moonrise Status |
|---|---|---|
| Dedicated safari tent landing page | Walden, Safari for the Soul, Spoon Mountain, The Retreat on the Hill | BUILT (`/safari-tents-near-austin/`), FAQPage schema added Apr 26, NOT INDEXED (DNS pending) |
| Corporate retreat package landing page | Lucky Arrow (2 pages), 7744 Ranch, Element Ranch, **The Yurtopian (NEW)**, Sage Hill | Blog post only — no pricing/packages page |
| Per-unit accommodation URLs (one URL per unit) | The Retreat on the Hill (11), Safari for the Soul (6), Lucky Arrow (5+) | accommodations.html lists 4 categories, no per-unit pages |
| Private pool per unit | Spoon Mountain (NEW — 3 units), Walden Retreats (some) | Shared pool only — different value prop, but pool keyword now contested |
| ResortPass pool day pass listing | Lucky Arrow (inactive through May 1) | Not submitted |
| Glamping Hub listing | Talula Mesa, Udoscape, The Yurtopian, Loving Heart, Spoon Mountain (likely) | Still absent |
| WeddingWire listing | Honeysuckle Ranch, Ranch Austin, Grand Lady Austin | Still absent |
| Press/media page | Sinya, Lucky Arrow (CultureMap), Walden (FOX 7) | No press page |
| Mission-driven content (charity/climate) | Cameron Ranch Glamping | None |

---

## Section 4 — Quick Wins This Week

1. **ResortPass submission decision (Adam — 4 days left).** The April 20 recommendation stands but the window is now 4 days, not 10. Either submit this week (resortpass.com/list-property or supply team email) and beat Lucky Arrow's May 1 reactivation, or accept that the window is closed and deprioritize. No middle ground.

2. **Corporate retreat landing page (Claude can draft).** The Yurtopian's `/corporate-retreats-in-texas-hill-country/` shipping makes Rancho Moonrise's content gap glaring. Rancho Moonrise has a corporate-retreat blog post (April 20) — promote the strongest sections into a `/host-your-event/corporate-retreats` package page with capacity (300+ vs. Yurtopian's 20), pricing-frame (open bar, mandatory through venue per Ashley 2026-04-23), inquiry CTA. 1-2 hour build.

3. **Per-unit accommodation pages (Phase 2).** The Retreat on the Hill's 11-URL model is the long-term content density Rancho Moonrise needs. accommodations.html currently shows 4 thumbnail cards — break each into a dedicated URL once the low-res source images are re-uploaded (data blocker on accommodation thumbnails, see CONTEXT.md).

4. **DNS cutover (Adam — #1 unlock, unchanged).** This is the prerequisite for everything else. DNS is still on BofillTech/Flywheel (verified via header today). Every week the Vercel site sits unindexed, competitors gain ground.

---

## Section 5 — Recommendations for This Week

**Priority 1 — Decide ResortPass within 48 hours (Adam):**  
The 4-day reactivation window means waiting past Wednesday is effectively a "no" decision. Either email ResortPass supply (referencing Lucky Arrow's existing listing as proof of category fit) or remove it from this week's TODO. No third option.

**Priority 2 — DNS cutover:**  
Unchanged from April 20. Live `curl -I` confirms ranchomoonrise.com still resolves to Flywheel. Adam needs to identify who controls BofillTech DNS and either get nameserver delegation to Vercel or set the ALIAS/CNAME records pointing at Vercel. Without this, the safari tent landing page, the FAQPage schema additions (April 26), and 18+ blog posts produce zero search visibility.

**Priority 3 — Corporate retreats package page:**  
Claude can produce a draft from the existing corporate-retreat blog content + voice-guide pricing frames + Ashley's "private party 100+ open bar overnight" target profile. Publish to `/pages/corporate-retreats.html` with full schema (Service or Offer), inquiry CTA, capacity table, alcohol policy clarification. Fills the most urgent content gap and ships before DNS cutover so it's already indexable.

**Priority 4 — Glamping Hub submission:**  
Free, 15 min, still absent. The Yurtopian, Udoscape, Talula Mesa already there. Repurpose Hipcamp listing copy.

---

## Appendix: Rancho Moonrise Competitive Positioning (April 27, 2026)

| Attribute | Current State | Change Since April 20 |
|---|---|---|
| Organic ranking — glamping queries | Not ranking | No change (DNS cutover still pending) |
| Organic ranking — wedding queries | Not ranking | No change |
| Organic ranking — safari tent queries | Not ranking | No change; new safari-tent landing page got FAQPage schema Apr 26 |
| Organic ranking — corporate retreat | Not ranking | The Yurtopian shipped a dedicated landing page — gap widened |
| The Knot | Active — 8 reviews, 4.5 stars | No change |
| Hipcamp | Active — 22 sites listed | No change |
| Glamping Hub | ❌ Still not listed | No change |
| WeddingWire | ❌ Still not listed | No change |
| ResortPass | Not submitted | Window narrowed from 10 to 4 days (Lucky Arrow reactivates May 1) |
| DNS cutover | Pending (BofillTech → Vercel) — verified live today | Still blocked — #1 overall unlock |
| Competitor count (top glamping SERP) | 7+ ranked individual properties | +1 new: The Retreat on the Hill (multi-format glamping) |
| Lucky Arrow status | 5 accommodation types, ResortPass dormant for 4 more days | No change |
| Spoon Mountain status | 3 tents + **NEW private pools per unit** | Material product upgrade |
| The Yurtopian status | 16 yurts + **NEW dedicated corporate retreats page** | Content expansion |
| New site SEO readiness | 18+ blog posts, schema, AEO blocks, safari tent page (FAQPage as of Apr 26) | FAQPage added Apr 26 — schema completeness improved |
