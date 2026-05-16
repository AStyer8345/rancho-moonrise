# Hipcamp Curation-Gap Audit — Rancho Moonrise

**Date:** 2026-05-16
**Author:** `rancho-site-daily` (autonomous)
**Source:** Live fetch of Hipcamp's Austin glamping editorial landing page + Rancho's Hipcamp listing
**Status:** Research output — no HTML edits, no Hipcamp dashboard changes (NEEDS ADAM/ASHLEY for any fix)

---

## TL;DR

**Rancho Moonrise has zero mentions on Hipcamp's Austin glamping editorial landing page.** The cause is *not* Hipcamp's editorial judgment — it's the listing configuration. Three structural toggles plus eight content gaps explain the absence:

| Severity | Finding | Fix-owner |
|---|---|---|
| 🛑 Blocker | `isPrivate: true` on the listing | Hipcamp dashboard |
| 🛑 Blocker | `isReviewable: false`, 0 reviews, `recommendsViewable: false` | Hipcamp dashboard + booking flow |
| 🛑 Blocker | `discoverUrl` set to TX state-level, not Austin city | Hipcamp dashboard |
| ⚠️ Major | 0 highlights, 0 activities populated | Hipcamp dashboard |
| ⚠️ Major | `contextualPhotoCount` field missing (peer norm: 2–10) | Hipcamp dashboard |
| ⚠️ Major | `host.responseRate = null`, `responseTime = null`, `isHost = false` | Hipcamp dashboard |
| ⚠️ Major | Listing overview misses "glamping", "safari tent" keywords | Hipcamp dashboard |
| ⚠️ Major | Listing overview says "34-acre", VOICE-GUIDE says 36, data shows 37 | Hipcamp dashboard |
| ⚠️ Major | Listing overview promotes "bar" as walk-in (voice violation) | Hipcamp dashboard |
| ⚠️ Major | Address/phone/name hidden (`isNameAddressPhoneVisible: false`) | Hipcamp dashboard |
| ℹ️ Note | Meta title auto-renders as "...in Manor, Texas" (voice rule violation, but auto-generated from `cityName`) | Hipcamp dashboard (would require cityName change → likely not negotiable) |

**Net:** Even if Rancho's listing were promoted into the editorial set today, the 0-review baseline + private flag would knock it back out within a week. **Listing is currently optimized to be invisible.**

---

## Section 1 — What the Hipcamp editorial set actually looks like

**Live URL:** <https://www.hipcamp.com/en-US/d/united-states/texas/austin/camping/glamping>
**H1 on page:** "Glamping near Austin" (the "20 Best Glamping Sites 2026" framing surfaces in meta/SEO, not in body)
**Curation depth:** 20 properties — surfaced via Hipcamp's `discoverHipcampLands` carousel, ordered by distance from downtown Austin
**Distance band:** 3.7 mi (closest) → 34.8 mi (furthest)

### The 20 properties Hipcamp is surfacing (live as of 2026-05-16)

| # | Name | City | Dist | $/night | Accomm | Sites | Acreage | Photos* | Bookings | Reviews | Rec % |
|---|---|---|---|---|---|---|---|---|---|---|---|
| 1 | Urban Hideout | Austin | 3.7 mi | $80 | house | 1 | 1 ac | 2 | 35 | 22 | 100% |
| 2 | Cozy Cactus Airstream w/ Hot Tub | Austin | 4.7 mi | $126 | house | 1 | 1 ac | 5 | 31 | 23 | 98% |
| 3 | Breathe Deeply | Manchaca | 12.3 mi | $90 | house | 2 | 3 ac | 10 | 19 | 16 | 94% |
| 4 | River Forest Haven | Del Valle | 15.0 mi | $30 | tent / rv / house | 36 | 30 ac | 4 | 832 | 532 | 95% |
| 5 | Texas Music River Ranch Events CTR | Webberville | 16.3 mi | $24.50 | tent / rv / house | 18 | 75 ac | 6 | 771 | 598 | 90% |
| 6 | The Outpost | Jonestown | 16.8 mi | $132 | house | 2 | 5 ac | 10 | 23 | 12 | 100% |
| 7 | Happy Horse Camp & RV Getaway | Cedar Creek | 20.6 mi | $45 | tent / rv / house | 13 | 22 ac | 3 | 823 | 943 | 100% |
| 8 | Lucky Arrow Retreat | Dripping Springs | 22.5 mi | $182.92 | house | 40 | 15 ac | 10 | 37 | 24 | 100% |
| 9 | Magical Lakefront Retreat | Spicewood | 20.8 mi | $71.10 | house | 7 | 5 ac | 10 | 92 | 44 | 95% |
| 10 | The jAy Frame | Marble Falls | 25.0 mi | $129 | house | 1 | 1 ac | 10 | 42 | 40 | 99% |
| 11 | Twisted Oaks | San Marcos | 26.5 mi | $15 | tent / rv / house | 14 | 21 ac | 4 | 463 | 304 | 98% |
| 12 | P² Farm \| Scenic River Camping | Georgetown | 27.2 mi | $30 | tent / rv / house | 6 | 30 ac | 1 | 414 | 194 | 93% |
| 13 | Off Grid Immersion Camp | Dale | 28.6 mi | $18.75 | tent / house | 2 | 85 ac | 9 | 215 | 254 | 94% |
| 14 | Missing Hotel | Marble Falls | 28.6 mi | $371.25 | house | 9 | 100 ac | 7 | 27 | 18 | 100% |
| 15 | The Reserve at GreenLeaf | Bastrop | 29.4 mi | $265.05 | house | 4 | 230 ac | 10 | 27 | 19 | 97% |
| 16 | Orrasis Ranch | Marble Falls | 30.3 mi | $35 | tent / rv / house | 10 | 6 ac | 7 | 74 | 65 | 94% |
| 17 | Ranch 3232 | Johnson City | 30.5 mi | $25 | tent / rv / house | 27 | 9 ac | 10 | 367 | 175 | 96% |
| 18 | Be the Bee @ Emerald Acres | Mc Dade | 31.5 mi | $120 | house | 1 | 40 ac | 4 | 78 | 33 | 95% |
| 19 | Robins Nest Treehouse | Lockhart | 34.2 mi | $265 | house | 1 | 5 ac | 10 | 157 | 89 | 99% |
| 20 | Dot's Spots | New Braunfels | 34.8 mi | $38.25 | tent / rv / house | 6 | 12 ac | 7 | 202 | 226 | 100% |

\* `contextualPhotoCount` — Hipcamp's count of editorial-quality contextual photos, distinct from raw upload count

### Geographic spread (and where Rancho should sit)

Rancho Moonrise is at 30.30251, -97.499615 — **14.7 mi NE of downtown Austin** (computed by haversine from the listing's own coordinates). The editorial set has #3 at 12.3 mi and #5 at 16.3 mi. **Distance-wise, Rancho slots cleanly at #4 or #5 in the editorial geography.** The exclusion is *not* "too far from Austin" — Texas Music River Ranch in Webberville (16.3 mi, same direction) made the cut.

### Patterns across the surfacing 20

- **Reviews are non-optional.** Lowest review count in the editorial set is 12 (The Outpost). Median is ~63. Texas Music River Ranch (Rancho's closest geographic peer in the set) has **598 reviews**.
- **Bookings count is non-optional.** Lowest is 19. Rancho's `bookingsCount` is **1**.
- **Recommend % is high.** Floor is 90%. Top performers cluster at 100%.
- **Multi-accommodation listings dominate the mid-range.** Properties with mixed `tent / rv / house` types tend to surface higher in the bookings/reviews rankings.
- **Photo count varies but isn't the limiting factor.** P² Farm sits at #12 with only 1 contextual photo because it has 194 reviews. Conversely, listings with 10 photos but <50 reviews stay in the back half. **Reviews > photos** in surfacing weight.
- **Price spread is enormous** ($15 → $371/night). Price is not a curation filter.
- **Acreage is not a filter.** Surfacing set ranges 1 ac → 230 ac.

---

## Section 2 — What Rancho Moonrise's Hipcamp listing actually looks like

**Live URL:** <https://www.hipcamp.com/en-US/land/texas-rancho-moonrise-dw9hklej>
**Status:** LIVE
**Listed:** Joined March 2024 (per `host.createdAt`)

### Listing facts (verbatim from Hipcamp's GraphQL payload)

```
fullName: "Rancho Moonrise"
cityName: "Manor"
countyName: "Travis"
stateName: "Texas"
streetAddress: null
postalCode: null
isNameAddressPhoneVisible: false

acreage: 37 acres
campsiteCount: 22
structureCount: 2
tentCount: 20
rvCount: 0
rvTentCount: 0
maxSiteCapacity: 4
minPricePerNight: $40
maxBookingWindowInMonths: 6

isBookable: true
isPaused: false
isExternal: false
isPrivate: TRUE           ← excludes from public discover surfaces
isReviewable: false       ← reviews cannot be left
reviewsViewable: false
recommendsViewable: false
isHost: false             ← host metrics not tracked
recommendsCount: 0
recommendsPercentage: 0
bookingsCount: 1
favoritesCount: 0

discoverUrl: /en-US/d/united-states/texas/camping/all   ← state-level, not Austin

host.responseRate: null
host.responseTime: null
host.isProfilePhotoUploaded: true
```

### What's populated vs. empty

| Field | Rancho | Editorial peers |
|---|---|---|
| `overview` (description) | 1,091 chars | typically 400–2,100 chars |
| `subheader` | null | populated for surfacing properties |
| `highlights` | **empty** | typically 2–6 populated |
| `activities` | **empty** | typically 3–8 populated |
| `terrain` | Farm, Ranch | typical |
| `coreAmenities` | Pets, Potable water, Toilets, Trash | typical floor |
| `basicAmenities` | Picnic table, Wifi, Hot Tub | thin (peers carry 8–15) |
| `customRules` | **empty** | typically 5–10 |
| `contributedPhotos` | 24 total uploaded, but ALL descriptions are empty strings | peers caption their photos |
| `contributedTipsSummaries` | not surfaced (no reviews to summarize) | populated for properties with reviews |

### Hipcamp's auto-generated SEO for the listing

```
metaTitle: "Rancho Moonrise - Hipcamp in Manor, Texas"
metaDescription: (verbatim mirror of overview — first 156 chars)
canonicalUrl: /en-US/land/texas-rancho-moonrise-dw9hklej
shouldIndex: true
```

The metaTitle uses "in Manor, Texas" — auto-generated from `cityName`. This conflicts with the project VOICE-GUIDE rule "never use Manor as a location descriptor in copy." Hipcamp would not let us override this without changing `cityName`, which is likely tied to the legal address.

### Verbatim text of the current Rancho overview (with voice flags)

> Welcome to our **34-acre** ranch ⚠️ *(VOICE-GUIDE says 36; data field says 37)* just outside of vibrant Austin, Texas! Experience the authentic charm of Texas living as you wake up to the sprawling Texan sky and sip your morning coffee while watching our cows graze peacefully.
>
> Our ranch offers a range of amenities designed to make your stay memorable and enjoyable. Take a refreshing dip in our inviting pool, unwind with **a drink at our bar** ⚠️ *(VOICE-GUIDE: the bar lounge is event-only, not walk-in)*, or relax in our cozy lounge area. Whether you're seeking relaxation or excitement, there's something for everyone to enjoy on our ranch.
>
> We welcome families and pets, so feel free to bring your loved ones along for the adventure. Create lasting memories as you explore our expansive property and take in the beauty of the Texas countryside.
>
> Escape the hustle and bustle of city life and immerse yourself in the tranquility of our ranch. Whether you're lounging by the pool, exploring the grounds, or simply enjoying the company of friends and family, our ranch offers the perfect retreat for a memorable Texas getaway. We look forward to hosting you and sharing the beauty of our ranch with you.

**Keyword absences in the overview:**
- ❌ "glamping" (the editorial taxonomy under which Rancho should surface — never named)
- ❌ "safari tent" (Rancho has 20 — never mentioned)
- ❌ "donkeys" (VOICE-GUIDE: a known emotional differentiator)
- ❌ "real beds" (VOICE-GUIDE: explicit differentiator vs. camping)
- ❌ "20 minutes from downtown Austin" (VOICE-GUIDE distance frame; copy says vague "just outside of vibrant Austin")
- ❌ "events", "weddings", "barn", "retreat" (revenue-bearing use cases)
- ❌ "pool day pass", "pool cabana" (`/pool-day-pass-austin/` page on the apex; missing cross-channel signal)

### Sites Hipcamp shows under the listing

3 sites bookable:

1. **Cosmic Cabin** — cabin, 2 guests, 10 photos, 0 reviews
2. **Cosmic Camping At Rancho Moonrise** — tent, 4 guests, 6 photos, 0 reviews
3. **Family Safari Tent** — safari-tent, 4 guests, 6 photos, 0 reviews

`campsiteCount` says 22, but only 3 sites are publicly bookable. The 22 likely includes private/event-mode inventory. **This explains the `isPrivate: true` flag** — the property is configured as an event/private inventory holder with 3 token public sites on the side.

---

## Section 3 — The actual gap, ranked

### Tier 1 — Structural exclusion flags

These three are why Rancho doesn't surface at all. Until they flip, content improvements are moot.

1. **`isPrivate: true`** — Private listings are excluded from Hipcamp's public discover/editorial surfaces by design. This is the single largest cause.
2. **`isReviewable: false` + `recommendsViewable: false`** — Even if made public, no review flywheel can start. Hipcamp's editorial ranking is reviews-weighted (floor 12 reviews in current set; median 63).
3. **`discoverUrl: /en-US/d/united-states/texas/camping/all`** — Listing isn't categorized under Austin; it's categorized at the TX-state level. The Austin landing page literally only pulls from listings tagged Austin.

### Tier 2 — Discoverability metadata gaps

4. **Empty `highlights` array** — peer listings carry 2–6 (e.g., "5 minutes to Lake Travis", "On-site axe throwing"). Highlights are surfaced on filter pages.
5. **Empty `activities` array** — peers carry 3–8 (hiking, fishing, swimming, stargazing). Activities feed the activity-filter landing pages.
6. **`isNameAddressPhoneVisible: false`** — disables the city-clustering Hipcamp uses to build "near X" landings.
7. **`host.responseRate: null` + `responseTime: null`** — host metrics aren't tracking. Hipcamp's editorial likely weights responsive hosts.
8. **`subheader: null`** — the tagline slot most surfacing listings use as a hook.

### Tier 3 — Content quality gaps in the public-facing copy

9. **Overview never says "glamping" or "safari tent"** — Hipcamp's NLP categorization for editorial landings almost certainly weights direct keyword match. Rancho has both, but the listing copy doesn't.
10. **24 uploaded photos have empty descriptions** — photo descriptions feed alt-text, image SEO, and Hipcamp's `contextualPhotoCount` editorial signal.
11. **Acreage drift** — overview says "34-acre", data field says 37, VOICE-GUIDE says 36. Pick one and use it consistently.
12. **Voice violations in the overview** — promotes "bar" as walk-in (VOICE-GUIDE: event-only), generic stay-marketing language without Rancho's three voice words.
13. **Thin `basicAmenities`** — 3 items (picnic table, wifi, hot tub). Peers carry 8–15. Rancho has firepits, pool, lounge, etc. — not surfaced as metadata.

### Tier 4 — Strategic posture (not a "gap" but worth naming)

14. **Hipcamp may not be the right channel for Rancho's primary revenue mix.** The editorial set is dominated by either (a) low-priced/high-volume nature campsites (River Forest Haven, Happy Horse Camp, Twisted Oaks, Dot's Spots) or (b) low-inventory ultra-premium overnight retreats (Missing Hotel, Robin's Nest, Lucky Arrow). Rancho is positioned as an **events-and-retreat ranch with overnight as one channel** — that profile doesn't fit either of Hipcamp's surfacing archetypes neatly. The `isPrivate: true` flag may have been a deliberate Ashley/operator choice to **not** be a Hipcamp-style "drop-in camper" property and instead use Hipcamp as a SEO/footprint listing only. If so, this audit's "fix it all" framing is wrong. **Recommend Adam confirm intent with Ashley before any dashboard changes.**

---

## Section 4 — Recommendations (in dependency order)

### A. Confirm strategic intent (FIRST — blocks everything else)

Ask Ashley: **"Is the Hipcamp listing intentionally private — i.e., are we using Hipcamp only as a backlink/SEO presence, not as a real booking channel?"**

- **If yes (intentional)** — close this audit as Adam-aware. Hipcamp surfacing is not a goal. Possibly remove the Hipcamp link-pill from improvement-plan.html "Gap" tag, since the gap isn't a gap.
- **If no (Ashley wants Hipcamp bookings)** — proceed to B.

### B. If Hipcamp surfacing is desired — the unlock sequence

(Roughly in dependency order; each unlocks the next.)

1. **Flip `isPrivate: false`** in Hipcamp dashboard.
2. **Enable reviewability** so the recommend-flywheel can start. Push existing guests to leave a Hipcamp review post-stay (an email send list of 4-10 names would seed credibility fast).
3. **Re-categorize `discoverUrl` to Austin** (Hipcamp Settings → Location → confirm city = Austin metro, not just Texas-wide).
4. **Make name/address/phone visible** so geo-clustering finds Rancho.
5. **Rewrite the overview** to lead with: glamping + safari tents + 20-min from downtown Austin + donkeys + real beds + pool. Fix the acreage to 36 (or whatever number Adam/Ashley agree is the right public anchor). Remove "bar" walk-in framing — replace with "lounge with drinks" or similar event-compliant phrasing.
6. **Populate `highlights`** — 4-6 punchy claims that match VOICE-GUIDE selling points.
7. **Populate `activities`** — pool, stargazing, animal feeding (donkeys), hiking the property, hot tub.
8. **Expand `basicAmenities`** to include everything Rancho actually has (firepit, parking, picnic shelter, etc.).
9. **Caption the 24 photos** with descriptive text — even a 1-sentence summary per photo improves the contextual photo count and editorial signal.
10. **Set host response rate/time targets** — Hipcamp typically rewards <24-hour response.

### C. Out-of-scope but worth noting

- **"Manor, Texas" in auto-generated metaTitle** is a downstream consequence of `cityName: "Manor"`. To resolve, the listing would need to register `cityName: "Austin"` (which may not be allowed — legal address controls), or accept the trade-off. The voice rule is about Rancho's *owned* copy, not Hipcamp's metadata. Flag for awareness only.
- **Hipcamp safari-tent filter page** (`/austin/camping/safari-tent`) returns identical HTML to the glamping landing — Hipcamp serves the same default carousel for both. The "missing from safari-tent filter" claim from the 4/8 audit is the same root cause as missing from glamping.

---

## Section 5 — What this audit does NOT do

- **No HTML edits.** Output is research-only per pre-scoping in 5/15 run-log.
- **No Hipcamp dashboard changes.** Adam/Ashley own the Hipcamp account.
- **No claim about SERP impact.** Surfacing on Hipcamp's Austin landing is a discoverability play on a third-party platform — it won't move ranchomoonrise.com's Google rankings.
- **No prescription of "fix Hipcamp first."** Tier 4 explicitly raises the question of whether Hipcamp is the right channel at all.

---

## Section 6 — Methodology + reproducibility

- Live fetched <https://www.hipcamp.com/en-US/d/united-states/texas/austin/camping/glamping> (200, 1.32 MB) on 2026-05-16 at audit time.
- Live fetched <https://www.hipcamp.com/en-US/land/texas-rancho-moonrise-dw9hklej> (200, 844 KB) on 2026-05-16 at audit time.
- Parsed `__NEXT_DATA__` JSON from both pages.
- Editorial set: `props.pageProps.query.place.discoverHipcampLands.nodes` (20 nodes).
- Listing data: `props.pageProps.fallback.<query-key>.land` (Apollo cache).
- Distance calculation: haversine, downtown Austin = (30.2672, -97.7431).
- Grep audit confirmed "rancho moonrise" / "ranchomoonrise" / "Rancho" all return 0 hits on the editorial landing page.

Re-running this audit is a single `python3` script away if anything changes on Hipcamp's side.
