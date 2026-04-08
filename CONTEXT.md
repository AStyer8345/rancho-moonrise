# Rancho Moonrise — Project Context

**Last updated:** 2026-04-07 (design overhaul session)

---

## What This Is

Advisory engagement for Rancho Moonrise — glamping, events, and retreat ranch in Manor, TX. Adam is running point on deal structuring (buyout + new partner + property acquisition) and building operational systems. Website (static HTML/CSS/JS on Vercel) is a secondary workstream.

**Repo:** `AStyer8345/rancho-moonrise`, branch `main`

---

## The Property

- **Address:** 20117 Lockwood Rd, Manor TX 78653
- **Structure:** 3 tracts in same LLC, free and clear (no debt)
  - Tract I (9.9 ac) — improved, all current operations
  - Tract II (11 ac) + Tract III (10.7 ac) — vacant, landlocked (need second exit via Hog Eye Rd)
- **Total invested:** ~$4.2M ($1.5M land + $2.5M improvements + $22K liquor license)
- **Jurisdiction:** Travis County only — out of Austin ETJ, permits already in place (competitive moat)
- **Survey:** obtained, covers all 3 tracts

---

## The People

| Who | Role | Notes |
|-----|------|-------|
| **Nancy** | Co-owner, idea person | Britney Jo's mom. No business systems. Wants Paul & Donna out. |
| **Ashley** | Runs everything | Irreplaceable. Salary unknown. |
| **Monet** | Staff | $28/hr, 30-40 hrs/week |
| **Arlen** | Maintenance | $170/day |
| **Kylie** | Part-time social/graphics | $18/hr |
| **Paul & Donna** | Co-owners wanting out | Put in ~$2M. Donna micromanages, contributes nothing. Kept in dark on pipeline. |
| **Rob & Laura** | 10% owners | Rob votes with Nancy = 55% control post-buyout |
| **Christopher** | Potential incoming partner | Visionary, has met Nancy on ranch. Adam running point. |
| **Britney Jo** | Nancy's daughter | Too busy to get involved |

---

## Financials

| Period | Revenue | Notes |
|--------|---------|-------|
| 2024 | $162K | Partial year, doesn't count |
| 2025 | $350K | Full year, zero PR. Private events 46%, rooms 31%, POS/bar 22% |
| 2026 Q1 | $61K | On pace |
| 2026 target | $500-650K | With pipeline events |

- No distributions taken. $10K set aside for septic permit.
- **Missing:** P&L, Balance Sheet, QuickBooks access — expenses and net profit unknown.

---

## The Deal

**Buyout:** Nancy wants to buy out Paul & Donna. Quoted $1.25M but made that number up — real number likely $1.5-2M+ given ~$2M invested.

**Post-buyout ownership target:** Nancy/Ashley 45% · Christopher 45% · Rob/Laura 10%

**Operating agreement:** Not yet reviewed — critical first step before any buyout conversation.

**Hog Eye Rd parcel (19910 Hog Eye Rd):**
- 10.1 acres, listed $1.3M, sitting since 2022, last sold $610K (May 2021)
- Needed as second exit to unlock Tracts II + III (RV park, glamping expansion, Airbnbs)
- Deed restrictions: no commercial buildings, but easement/driveway + 2 Airbnb-able structures allowed
- Target acquisition: $650-750K

**Total capital need:** ~$2-2.5M (buyout + Hog Eye)

---

## 2026 Pipeline

- Roger Clemens: retirement party + kids' charity + Russell Grove documentary fundraiser
- Lone Star Beer: $10K sponsorship committed
- Rick Warren, Cabillas, KOZ: events in discussion
- Bridal showcase, Austin Ray magazine feature (~21st), Save Alliance (2,000-person event)
- 7-10 weddings booked
- Packages: $3K / $5K / $15K — not listed online, tour required

---

## Active Blockers

- **No operating agreement reviewed** — can't determine real buyout number
- **No P&L or Balance Sheet** — can't build credible deal summary for Christopher
- **No QuickBooks access** — expenses unknown
- Signed event contracts, staff/pay list, permits, title docs, property tax statements, appraisals all outstanding

---

## Website SEO Status

- robots.txt + sitemap.xml: created 2026-04-07
- Contact page: OG/Twitter/schema added 2026-04-07
- AEO paragraphs: added to homepage + accommodations (2026-04-07)
- Blog: first article live — "Glamping Near Austin Texas" (2026-04-07)
- GBP: not yet claimed/completed (requires Adam's Google account)
- Sitemap not yet submitted to Google Search Console (requires Adam's UI access)

## Website UI Status (updated 2026-04-07)

- **Design overhaul**: "Modern Desert / Boutique Ranch" aesthetic applied
- Nav: orange glassmorphism, logo with shadow box (72px default → 44px scrolled)
- Nav buttons (Book Now, Pool Passes): white background + orange text
- Homepage restructured: dedicated sections for Cabins & Tents, Event Barn & Neon Moon duo, Ranch Weddings CTA, Wellness & Experiences
- Event cards now include artwork images (Lone Star Party, Bridal Sip & See, Yoga & Mimosas)
- Slideshow: improved positioning for near-square images (`background-position: center 30%`)
- Background: sand (#F5F2ED), body font Montserrat, headings Playfair Display
- Scroll reveal fade-in-up animations on sections
- Mobile sticky "Book Your Stay" CTA bar pinned to bottom
- Pool Passes in nav (links to ResortPass), FAQs + Blog footer-only
- Events page: list + calendar view toggle (calendar default on desktop, list on mobile)
- CSS cache busted to ?v=4 across all pages

---

## What's Next

1. Get operating agreement + QuickBooks/P&L + Balance Sheet from Nancy/Ashley
2. Determine real buyout number from operating agreement terms
3. Build proper deal summary for Christopher with real numbers
4. Explore Hog Eye Rd acquisition path simultaneously
5. (Website) Submit sitemap.xml to Google Search Console
6. (Website) Continue refining homepage to closer match live site patterns

---

## Key Files

| File | Purpose |
|------|---------|
| `CHANGELOG.md` | What changed and when |
| `DECISIONS.md` | Architecture and deal decisions |
| `TODO.md` | Prioritized open work |
| `ARCHITECTURE.md` | Website tech reference |

---

## Session Rules

At the end of every session:
1. Update CONTEXT.md — replace current state sections (don't append)
2. Append entry to CHANGELOG.md
3. `git add`, `git commit`, `git push origin main`
