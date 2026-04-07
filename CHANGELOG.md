# Rancho Moonrise — Changelog

## 2026-04-07 — Daily SEO Agent Run #1

- Created `/site/robots.txt` — was missing entirely; blocks dashboard/report/internal pages from crawlers
- Created `/site/sitemap.xml` — all 9 public pages with correct priority and changefreq values; Sitemap reference added to robots.txt
- Contact page: added missing OG + Twitter Card meta tags and ContactPage + LocalBusiness JSON-LD schema

## 2026-04-07 — Deal deep-dive: Nancy call + master summary

- Detailed call with Nancy (co-owner) — reviewed full property, people, financials, and deal structure
- Reviewed property survey (3 tracts) and Hog Eye Rd listing (19910 Hog Eye Rd, 10.1 ac)
- Built master deal summary: $4.2M invested, $350K 2025 revenue, buyout + Christopher partnership + Hog Eye acquisition
- Mapped all staff and compensation: Ashley, Monet ($28/hr), Arlen ($170/day), Kylie ($18/hr)
- Identified pipeline: Roger Clemens, Lone Star Beer ($10K), 7-10 weddings, Save Alliance (2K-person event)
- Drafted and sent due diligence request email to Nancy/Ashley (operating agreement, QuickBooks/P&L, contracts, permits)
- Updated all project files to reflect deal advisory scope (was website-only)

## 2026-04-07 — MD file audit and cleanup

- Created ARCHITECTURE.md (tech stack, site structure, design system, business details)
- Restructured CONTEXT.md from 275 → ~50 lines (moved reference content to ARCHITECTURE.md)
- Restructured TODO.md into Now/Next/Backlog sections

## 2026-04-06 — Contact Page Redesign + Conversion Optimization

- Contact page: full-width intent cards above split layout, SVG icons, compact trust bar
- AI chat widget: floating on every page, pulse animation, 380px panel
- Vision banner + 4 new service cards on dashboard (voice guide, social, blog, email automation)
- Drafted pitch email for Ashley & Nance (speed comparison, 30-day trial framing)
- Consolidated pitch report + competitive intelligence report added

## 2026-04-06 — Performance & SEO

- Images converted to WebP (74MB → 7.2MB, 90% reduction)
- Google Fonts deferred, hero preloaded, remaining slides lazy-loaded
- Vercel caching headers: 1-year immutable for images and CSS
- PageSpeed: 87 performance, 100 best practices, LCP 3.3s
- JSON-LD schema, canonical tags, alt text, OG + Twitter Card meta on all pages

## 2026-04-06 — Initial Build

- Full site rebuild from WordPress to static HTML/CSS/JS
- 8 pages: homepage, accommodations, weddings, events, host-your-event, blog, FAQs, contact, policies
- Hero slideshow with 5 images, mobile-responsive nav
- CSS custom properties design system, Vercel push-to-deploy
