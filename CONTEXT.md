# Rancho Moonrise — Project Context

**Last updated:** 2026-04-09 (SEO/AEO Session 2 — schema rollout)

---

## What This Is

Advisory engagement for Rancho Moonrise — glamping, events, and retreat ranch in Manor, TX (20117 Lockwood Rd, Manor TX 78653). Adam runs deal structuring (buyout + new partner) and builds digital/operational systems. Ashley runs day-to-day operations.

**Repo:** `AStyer8345/rancho-moonrise`, branch `main`, deploys to Vercel
**Live site:** ranchomoonrise.com (BofillTech hosting — OLD, not editable by Claude)
**New site:** rancho-moonrise.vercel.app (Vercel — all dev work happens here)

---

## Active Blockers

- **DNS cutover not done** — New Vercel site not live on main domain. ALL SEO/AEO impact blocked until this happens. This is the #1 unlock.
- **GBP access** — Claude cannot edit GBP. Description fix, hours, Q&A seeding all require Ashley.
- **Exhibit A missing** — Cannot model buyout without ownership percentages from Nancy/Ashley.

## What's Next

- Ashley: Fix GBP (description is a blog post, hours not set, reply to 9 unreplied reviews, seed Q&As)
- Adam: DNS cutover from BofillTech to Vercel
- Claude (auto): SEO/AEO prep work on Vercel site — Mon/Wed/Fri at 5 AM
- Claude (auto): Weekly GBP posts — drafts saved to `brand/gbp-posts/` for Adam/Ashley to review and post manually
  - Week 1 (April 9, 2026): Event announcement drafted — `brand/gbp-posts/2026-04-09-gbp-post.md`
  - Rotation: Event → Property showcase → Special offer → Behind-the-scenes → repeat

## Last Worked On

- 2026-04-09 (Session 2): Added BreadcrumbList schema to all 13 subpages (5 blog posts + 8 nav pages)
- 2026-04-09 (Session 2): Added CollectionPage + ItemList schema to blog.html listing all 5 posts
- 2026-04-09 (Session 2): Fixed banned word "premier" in blog.html meta description + footer per voice guide
- 2026-04-09 (Session 2): Verified homepage LodgingBusiness schema is complete (geo, priceRange, amenityFeature)
- 2026-04-09 (Session 2): Committed + pushed schema work in one clean commit (6fb84e8)

---

## Key Metrics (confirmed April 9, 2026 — baseline week)

| Metric | Value |
|--------|-------|
| Google reviews | ~125 (4.9★) — 9/10 unreplied |
| GBP views | 50,500 |
| Instagram | ~13K followers, 279 posts |
| Facebook | 864 followers, 5 reviews (100%) |
| TikTok | 1,408 followers |
| TripAdvisor | 0 reviews, NOT claimed |
| Expedia | 8.0 rating |
| Google ranking (non-brand) | NOT ranking (0/10 keywords) |
| AI engine citations | NOT cited (0/10) |
| Google indexed pages (old site) | ~10 |
| Next metrics update | April 16, 2026 |

---

## Property & Deal Summary

- **3 tracts** in same LLC, free and clear (~$4.2M invested)
- Tract I (9.9 ac) — improved, all operations
- Tract II (11 ac) + III (10.7 ac) — vacant, landlocked
- **Revenue:** 2025 = $350K, 2026 target $500-650K
- Private events 46%, rooms 31%, POS/bar 22%
- **Buyout:** Paul & Donna want out (~$2M invested). Blocked on Exhibit A.
- **Christopher:** potential incoming partner, Adam running point

## People

| Who | Role |
|-----|------|
| Nancy | Co-owner |
| Ashley | Runs everything — GBP access, operations |
| Monet | Staff ($28/hr) |
| Arlen | Maintenance ($170/day) |
| Kylie | Part-time social ($18/hr) |

## Key Files

- `brand/2026-04-09-metrics-baseline.md` — live-verified platform data
- `brand/2026-04-09-rancho-moonrise-improvement-plan.html` — 35 tasks, 4 phases + SEO/AEO
- `tasks/seo-aeo/` — autonomous SEO/AEO agent workspace
- `site/` — Vercel site (new build, not yet live on main domain)
