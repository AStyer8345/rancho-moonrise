# Rancho Moonrise — TODO
Last updated: 2026-04-10

## Now (this week — April 9-15)

### NEEDS ASHLEY (manual, GBP access required)
- [ ] Reply to all 9 unreplied Google reviews (Task 1)
- [ ] Replace blog post in GBP "From the owner" with real business description (Task 2 — CRITICAL)
- [ ] Set business hours on GBP (Task 2)
- [ ] Answer remaining hotel amenity categories on GBP (Task 2)
- [ ] Answer the unanswered pool day pass Q&A on GBP (Task 3)
- [ ] Post 10 FAQ Q&As to GBP (Claude drafts, Ashley posts) (Task 3)

### NEEDS ADAM
- [ ] DNS cutover from BofillTech to Vercel — THE #1 unlock for all SEO/AEO
- [ ] Rotate `GITHUB_TOKEN` on Vercel → fine-grained PAT scoped only to `AStyer8345/rancho-moonrise` contents:write (currently broad `gh auth token`, 5 min fix)
- [ ] Get Exhibit A from Nancy/Ashley (ownership %, capital contributions)
- [ ] Get QuickBooks access or P&L + Balance Sheet

### CLAUDE (autonomous — scheduled task handles these)
- [x] Split blog posts into individual pages with URLs (S1) — already done previously
- [ ] Add answer-first H2 summaries to key pages (S2)
- [ ] Build topical authority clusters with internal linking (S3)
- [~] Add BreadcrumbList + SpeakableSpecification schema (S4) — Breadcrumbs DONE 2026-04-09, Speakable still pending
- [ ] Add Review/AggregateRating schema to homepage (accommodations.html already has it)

## Next (after DNS cutover)
- [ ] Google Search Console setup + sitemap submission (S6)
- [ ] Monitor indexing — all pages indexed within 14 days (S6)
- [ ] Redirect map from old BofillTech URLs to new structure (S6)
- [ ] AEO baseline — query AI engines for all 10 target keywords (S7)
- [ ] Claim TripAdvisor listing (Task 5 — Ashley)
- [ ] Optimize WeddingWire listing (Task 5)
- [ ] Fix Hipcamp "no showers" listing (Task 12)
- [ ] Build post-stay review request automation (Task 8)
- [ ] Build inquiry response email sequence (Task 9)
- [ ] Create "Pool Day Pass Austin" page (S5)
- [ ] Blog-to-GBP automation (S8)

## Backlog
- [ ] Corporate retreat landing page + HoneyBook flow (Task 16)
- [ ] HoneyBook flows for private events, intimate events, retreats (Task 17)
- [ ] "Build Your Experience" add-on booking flow (Task 18)
- [ ] Breakfast taco upsell for all stay types (Task 19)
- [ ] Conversion tracking + UTM parameters (Task 20)
- [ ] CRM implementation (Task 21)
- [ ] SOPs for Ashley's processes (Task 22)
- [ ] YouTube channel with walkthrough videos (Task 23)
- [ ] Facebook as a real channel (Task 24)
- [ ] Address neighbor noise issue (Task 25)
- [ ] Weekday utilization program (Task 26)
- [ ] Upload more owner photos to GBP (Task 27)

## Done

### April 10, 2026
- [x] Mark Done system shipped — `/api/complete` serverless fn + GitHub Contents API log append + Bearer auth via shared `BRIEFING_AUTH_TOKEN`
- [x] Done tab added to improvement-plan.html — completed tasks physically relocate into `#done-tasks-container` (newest on top), not just faded in place
- [x] Option C grade progression calculator — headline grade = highest phase where all required tasks complete; empty phases pass through without advancing grade; mini-progress "(X/Y toward <next grade>)" under each scorecard
- [x] Rewrote `rancho-apply-done` scheduled task SKILL.md — physically move task divs into Done tab instead of applying class in place
- [x] Backfilled tasks 4, 6, 10 into Done tab (moved at rest in source HTML)
- [x] Smoke tested Mark Done end-to-end on live Vercel deploy — commit 01319c8 READY

### April 9, 2026
- [x] Secondary GBP categories already set — Hotel, Campground, Event venue, Resort hotel, Wedding venue (Task 4)
- [x] Instagram link-in-bio — Linktree live with 5 links (Task 6)
- [x] Weekly GBP posting — scheduled task confirmed working (Task 10)
- [x] Live-verified all platforms and created metrics baseline
- [x] Built SEO/AEO strategy and scheduled task (Mon/Wed/Fri 5 AM)
- [x] BreadcrumbList schema on all 13 subpages
- [x] CollectionPage + ItemList schema on blog.html
- [x] Verified homepage LodgingBusiness schema complete (geo, price, amenities)
