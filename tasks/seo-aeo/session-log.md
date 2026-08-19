# Rancho Moonrise — SEO/AEO Session Log

## 2026-08-19 (rancho-site-daily) — entity graph consolidated; banned copy escalated; third on-page lever disconfirmed
SESSION_START: 2026-08-19T08:05:00-05:00
- **Shipped:** homepage `sameAs` 4 → 11 on the root `LodgingBusiness`/`EventVenue` node. The site had exactly **one** `sameAs` array sitewide, carrying four social profiles and **zero** review/booking/OTA profiles — ResortPass (53 reviews), Hipcamp, The Knot, TripAdvisor, Yelp and Hotels.com were all outside the declared entity graph.
- Added 7 URLs, each verified live this run. **Excluded 5** rather than guess: Expedia (429; search returned an unrelated "Manor Condominium Resort" page), WeddingWire (repo contradicts itself), Airbnb (room URL, not an entity profile), Roadtrippers (not owned), **Google Business Profile (no canonical URL exists in this repo — highest-value gap, now a NEEDS ADAM one-liner)**. A wrong `sameAs` asserts a false identity; a missing one is only incomplete.
- **Recorded so no future run oversells it: `sameAs` is not a ranking factor.** Entity/AEO signal only.
- **`hotels-com-banned-copy` escalated STALE → CONFIRMED and re-scoped.** Unverifiable by direct fetch 4 consecutive runs; today *"20 luxury cabins and safari tents for up to 50 guests"* surfaced verbatim across two independent queries attributed to **The Knot**. Three VOICE-GUIDE violations in one sentence, and "50 guests" contradicts both the site's `maximumAttendeeCapacity: 200` and The Knot's own "300+". **Site re-verified clean:** 0 matches for "luxur"/"hill country" across index + 29 pages. Entirely off-domain.
- **Third on-page lever disconfirmed — exact-match title/H1, and it fails backwards.** `wedding-venues-near-austin.html` misses the keyword in its own title and holds the best position in the set (4/8) on a keyword absent from it. Four exact-match-title pages rank nowhere. Combined with 8/18 (links inverse; words/schema uniform), the read is that **ranking tracks SERP fragmentation, not on-page quality** — so aggregator presence (Glamping Hub, Hipcamp) now outranks any remaining on-site edit. `backlog.md` updated to reflect the reprioritization and to retire the internal-link item with its evidence.
- **Gate:** 8 claims — 6 still_true, 1 escalated, 1 fixed-in-run, 0 resolved. No done-log entry: the work maps to none of the named task IDs `s1`–`s8` (entity `sameAs` is not breadcrumb/speakable `s4`, and `s7` is already RESOLVED).
- **Not owned, skipped:** The Knot review count read *7 @ 5★* today vs the repo's *8 @ 4.5★* — belongs to `rancho-review-monitor`.
- Verified live post-deploy: all 7 new `sameAs` URLs present on production, sitemap `<lastmod>` for `/` serving 2026-08-19 (first read was an edge-cache HIT), `validate:site` passes.

## 2026-04-09 (Session 2, 5:00 AM) — Schema & Breadcrumbs
SESSION_START: 2026-04-09T05:00:00-05:00
- Added CollectionPage + ItemList schema to blog.html (5 posts listed)
- Added BreadcrumbList schema to all 13 subpages (blog posts + nav pages + policies)
- Fixed banned word "premier" in blog.html meta description and footer per voice guide
- Discovered homepage LodgingBusiness schema already has geo, priceRange, amenityFeature — can mark that backlog item verified
- Committed + pushed in one clean commit (6fb84e8): 13 files changed, 214 insertions

## 2026-04-09 — Initial Setup
- Created task folder structure: master-agent.md, backlog.md, agent-rules.md, session-log.md
- Live-checked ranchomoonrise.com: broken schema, "COMING SOON" meta desc, no H1s, no FAQ schema
- Verified Vercel site has proper schema on 12/14 pages (LodgingBusiness, EventVenue, FAQPage)
- Searched Google for target keywords: Rancho Moonrise NOT ranking for non-brand queries
- Searched AI engines: NOT cited for any glamping/wedding/venue queries
- Baselined GBP: 50,500 views, 127 reviews (4.9★), 9/10 unreplied, blog post as description
- Built initial backlog with pre-launch and post-launch priorities
- Key finding: launching the Vercel site on the main domain is THE single biggest SEO/AEO unlock
