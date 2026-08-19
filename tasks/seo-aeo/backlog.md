# Rancho Moonrise — SEO/AEO Backlog
Last updated: 2026-04-09 (Session 2)

## CRITICAL — Pre-Launch (do now, no site access needed)

### GBP SEO (highest impact before site launch)
- [ ] Replace blog post in GBP "From the owner" with proper 750-char business description (BLOCKED: needs Ashley's GBP access)
- [ ] Seed 10 FAQ Q&As on GBP (Claude drafts, Ashley/Adam posts)
- [ ] Reply to all 9 unreplied Google reviews (Ashley)
- [ ] Set business hours on GBP (Ashley)

### Vercel Site — Schema Improvements
- [x] Add Article schema to each blog post section on blog.html — DONE 2026-04-09 (individual blog pages already have BlogPosting schema; blog.html now has ItemList referencing all 5)
- [x] Add BreadcrumbList schema to all subpages — DONE 2026-04-09 (13 pages)
- [ ] Add Review/AggregateRating schema to homepage (pull from Google reviews) — accommodations.html already has AggregateRating, homepage missing
- [x] Verify LodgingBusiness schema has geo coordinates, priceRange, amenityFeature — VERIFIED 2026-04-09 (all three present on homepage)
- [ ] Add SpeakableSpecification to homepage, glamping page, weddings page
- [x] Fix blog.html — add CollectionPage schema — DONE 2026-04-09

### Vercel Site — Content Gaps
- [ ] Split blog posts into individual pages with unique URLs
- [ ] Create "Pool Day Pass Austin" dedicated page (ResortPass already ranks, own the query too)
- [ ] Add answer-first H2 summaries to: glamping page, weddings page, corporate page
- [x] Build internal link clusters between related pages — **DONE, then RETIRED 2026-08-19. Do not re-propose; deepening it further is measured counterproductive.** The cluster was built out 5/9–5/10 and the floor restored to a uniform 4 inbound on 8/16. Two measurements since then say the lever is spent: (a) **8/18 — inbound-link count correlates *inversely* with ranking.** The two best-ranking posts have the **fewest** inbound links (5 each); the most-linked page (11) does not rank. (b) **8/19 — exact-match title/H1 also fails, and fails backwards:** `wedding-venues-near-austin.html` carries "Unique Wedding Venues Near Austin TX" in its title and does **not** rank for that phrase, while holding the **best position in the whole 10-keyword set (4/8)** on `overnight event venue Austin` — a phrase absent from its title. Word count (1,572–2,222) and schema depth (4–5 JSON-LD blocks) are uniform across ranking and non-ranking pages. **Three on-page levers, three disconfirmations. What ranking actually tracks on this property is SERP fragmentation** — Rancho ranks where competitors are metafilter/party-boat pages and is absent wherever aggregators consolidate. The corollary is in "External Citations & Directories" below: on head terms the winners are *platforms*, not pages, so aggregator presence outranks any further on-site edit. Evidence: `serp-baseline-2026-08-18.md`, `run-logs/2026-08-19-seo.md`.
- [ ] Add "People Also Ask" style sections to glamping and weddings pages

### External Citations & Directories
> **PROMOTED 2026-08-19 — this section now outranks the on-page sections above.** Head terms on every tracked keyword are held by aggregators (Glamping Hub, Hipcamp, Booking, Cvent, EventUp, Eventbrite, The Knot, ResortPass). On those SERPs the winners are platforms, not pages, so the only route in is *being in the aggregator*. The cheapest open item in this whole backlog — **Glamping Hub submission, free, ~15 minutes, untouched ~18 weeks** — is on this evidence worth more than any remaining on-site edit.
- [x] Declare owned third-party profiles in homepage `sameAs` — **DONE 2026-08-19.** 4 → 11 URLs on the root `LodgingBusiness`/`EventVenue` node. Added: YouTube, ResortPass, Hipcamp, The Knot, TripAdvisor, Yelp, Hotels.com — each verified live this run. **Still missing and highest-value: Google Business Profile** (~130 reviews) — no canonical URL exists anywhere in this repo; needs one paste from Adam. Also unresolved: Expedia (429 + a search pass returned an unrelated "Manor Condominium Resort" page) and WeddingWire (repo contradicts itself — a URL exists here while the 6/18 audit says no listing does). **Note for future runs: `sameAs` is not a ranking factor** — it is an entity/answer-engine signal. Do not report it as a ranking win.
- [ ] Claim TripAdvisor listing, add photos + description (Ashley)
- [ ] Optimize WeddingWire listing with current photos and description
- [ ] Verify NAP consistency across: Google, Yelp, TripAdvisor, Hipcamp, WeddingWire, TheKnot, Facebook, ResortPass
- [ ] Fix Hipcamp listing ("no showers" is wrong)
- [ ] Submit to Austin tourism directories (Visit Austin, Austin360, Do512)

## HIGH — Post-Launch (after DNS cutover)

### Technical SEO
- [ ] Submit XML sitemap to Google Search Console
- [ ] Set up Google Search Console property for ranchomoonrise.com
- [ ] Verify all pages are indexed within 2 weeks
- [ ] Set up redirect map from old BofillTech URLs to new structure
- [ ] Monitor Core Web Vitals (Vercel should be fast, verify)
- [ ] Check mobile-friendliness of all pages

### AEO — Answer Engine Optimization
- [ ] Baseline check: query ChatGPT, Perplexity, Google AI Overview for all 10 target keywords
- [ ] Track which competitors appear in AI answers for each keyword
- [ ] Ensure FAQ schema answers match conversational query patterns
- [ ] Add "About" structured content: "Rancho Moonrise is a 36-acre glamping and events ranch..." (was 34 — corrected 2026-08-18 against `VOICE-GUIDE.md:271`)
- [ ] Create content that directly answers "Best [X] near Austin" for each service type
- [ ] Monitor monthly: are AI engines citing ranchomoonrise.com pages?

### Content Calendar (post-launch, ongoing)
- [ ] Monthly blog post: Austin seasonal events + how Rancho Moonrise fits
- [ ] Monthly blog post: Guest spotlight / event recap
- [ ] Quarterly: Update pricing, amenity changes, new offerings on all pages
- [ ] Blog posts auto-flow to GBP posts (build automation)

## BASELINE METRICS — April 9, 2026
- Google "glamping near Austin TX": NOT RANKING (not in top 10)
- Google "wedding venues Austin TX ranch": NOT RANKING (not in top 10)
- Google "Rancho Moonrise": RANKING #1 (brand search works)
- Google "pool day pass Austin TX": ResortPass page ranks, not ranchomoonrise.com
- AI engines (ChatGPT/Perplexity): NOT CITED for any non-brand query
- GBP views: 50,500 (as of April 9)
- Google reviews: 127 (4.9 stars)
