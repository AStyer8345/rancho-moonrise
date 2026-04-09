# Rancho Moonrise — Changelog

## 2026-04-09 — SEO Run #6: OG Completion + Host-Your-Event AEO

- **events.html:** Added full OG block (og:image, og:site_name, og:locale) + Twitter Card — page had zero social sharing metadata before this run.
- **host-your-event.html:** Added full OG block + Twitter Card. Used events-hero-barn.jpg as social image.
- **weddings.html, accommodations.html, faqs.html:** Added og:site_name + og:locale (both missing despite having og:image + Twitter Card from prior runs).
- **host-your-event.html:** Added AEO paragraph section (two direct-answer paragraphs targeting "private event venue near Austin" — covers location, capacity, rental models, overnight stays, exclusive-use differentiator).
- **host-your-event.html:** Added inline internal link in Corporate Retreats card → corporate-retreat-near-austin.html blog article.
- **sitemap.xml:** Updated lastmod to 2026-04-08 for accommodations, weddings, events, host-your-event, faqs.

## 2026-04-08 — Brand Alignment Update (2022 Brand Guide + Pinterest Direction)

- **Color palette warmed to brand guide:** Background → White Denim #F2E9DB (was #F5F2ED), terracotta → Clay #B6603F (was #C4704B), amber → #C9842B (was #c9944a). Added Coral #DE8556 and Pine #31735A as new CSS variables.
- **Nav glassmorphism shifted:** Gold → clay/terracotta (`rgba(182, 96, 63, 0.78)`) for warmer, earthier feel.
- **Fonts updated to brand guide:** Added Overpass (body secondary) and Lora (accent) from Google Fonts across all 13 HTML pages. Kept Playfair Display for headings (Americane is Adobe-only).
- **Paper texture overlay:** SVG inline noise pattern added to `body` and `.section--cream` backgrounds for subtle paper/canvas feel per Pinterest vintage poster direction.
- **Card softening:** Border-radius increased from 4px to 8px on all card types, warmer shadows (`0 2px 8px rgba(0,0,0,0.08)`).
- **Content fix:** Homepage AEO check-in time corrected from "4–8 PM" to "3–5 PM"; schema.org `checkinTime` from "16:00" to "15:00".
- **Mobile tweaks:** Nav gap tightened, mobile CTA bar updated to terracotta background.
- **Cache bust:** All CSS links updated to `?v=7` across all pages.

## 2026-04-08 — Admin Panel + Supabase CMS

- **Supabase CMS tables:** Created `rancho_events`, `rancho_photos`, `rancho_testimonials` with RLS (public SELECT for site reads, authenticated-only writes for admin). Auto-updating `updated_at` triggers. Storage bucket `rancho-moonrise` with public read, authenticated write.
- **Admin panel built:** `/admin/index.html` — Supabase Auth login, 3-tab dashboard (Events, Photos, Reviews). Full CRUD: create/edit/hide/delete items, file upload with preview, sort order control, active/hidden badges. Toast notifications for feedback.
- **CMS content loader:** `site/js/cms.js` — raw `fetch()` to Supabase REST API (no SDK on public site). Loads testimonials into marquee and events into slideshow + grid. Graceful fallback: if Supabase unreachable, hardcoded HTML stays. Hero photo loader built but commented out until Ashley uploads new photos.
- **Admin credentials created:** admin@ranchomoonrise.com in Supabase Auth, email confirmed via SQL.
- **Vercel config updated:** `/admin/*` routes get `no-cache` + `X-Robots-Tag: noindex, nofollow` headers.
- **Cache bust:** All CSS links updated to `?v=6` across all pages.
- **Seeded data:** 6 events (Lone Star Party through Paella Dinner), 4 hero photos, 6 testimonials loaded into Supabase tables.

## 2026-04-08 — Weekly Content Agent Run #5

- **Blog article #4 published:** "Things to Do in Manor, TX — A Local's Guide" at `/pages/things-to-do-manor-tx.html` — targets "things to do in Manor TX", "things to do near Manor Texas", "weekend getaway near Austin". Full BlogPosting schema, OG/Twitter tags, AEO Q&A section, internal links to accommodations + events pages.
- **Blog listing updated:** Post #4 placeholder wired to live article — April 8 date, real link, updated alt text.
- **Sitemap updated:** Added `/blog/things-to-do-manor-tx/` with `lastmod 2026-04-08`.
- **GBP webhook triggered:** n8n post sent summarizing the Manor guide with CTA link.
- **Social snippets created:** 3 Instagram/Facebook captions saved to `outreach/social-snippets/2026-04-08-manor-things-to-do.md`.
- **Events check:** All April events (Lone Star Party Apr 11, Bridal Sip & See Apr 12, Free Friday Apr 24, Yoga & Mimosas Apr 26) still upcoming — no removals needed.

## 2026-04-08 — Daily SEO Agent Run #4

- **OG image tags added:** `og:image`, `og:image:width/height`, `twitter:card`, `twitter:title`, `twitter:description`, `twitter:image` added to weddings.html, accommodations.html, and faqs.html. Images: `wedding-hero.jpg`, `accommodation-premium-safari.jpg`, `faqs-hero.jpg`.
- **faqs.html OG tags:** Full open graph block added (was completely missing all OG/Twitter tags).
- **FAQPage schema expanded:** faqs.html schema grew from 6 to 14 questions, now covers all FAQ accordion items — accommodations included, parking, WiFi, campfires, noise curfew, cancellation, group site requests.
- **Blog article #3 published:** "Why Your Next Corporate Retreat Should Be at a Ranch" at `/pages/corporate-retreat-near-austin.html` — targets "corporate retreat near Austin" / "corporate retreat venue Austin Texas". Full BlogPosting schema, OG/Twitter tags, AEO Q&A section, internal links to host-your-event/accommodations/contact. Mobile CTA is "Schedule a Tour".
- **Blog listing updated:** Post #3 placeholder wired to live article with April 8 date, link, updated alt text.
- **Sitemap updated:** Added `/blog/corporate-retreat-near-austin/` entry with `lastmod 2026-04-08`.

## 2026-04-07 — Daily SEO Agent Run #3

- **Weddings page AEO:** Added 5-question AEO section before the final CTA banner targeting "wedding venue manor tx", "ranch wedding near austin", "outdoor wedding venue austin with overnight stays", and related queries. Each Q&A is a self-contained paragraph for AI/SGE extraction.
- **Blog article #2 published:** "Unique Wedding Venues Near Austin With Overnight Stays" at `/pages/wedding-venues-near-austin.html` — full BlogPosting schema, OG tags, internal links to weddings/accommodations/contact pages.
- **Blog listing updated:** Post #2 placeholder wired to live article with correct date, alt text, and link.
- **Sitemap updated:** Added `/blog/wedding-venues-near-austin/` entry with `lastmod 2026-04-07`.

## 2026-04-07 — Event Slideshow + Review Marquee

- **Event artwork slideshow:** Wellness section now cycles through 6 event posters (yoga, lone star party, mother's day, bridal sip & see, rancho rodeo, paella dinner) with dot navigation, autoplay every 4s, pause-on-hover. Uses `object-fit: contain` so artwork isn't cropped.
- **Testimonial marquee scroller:** Reviews section replaced with horizontal CSS-only infinite scrolling ticker (6 cards + 6 duplicates for seamless loop). Edge fade gradients, pause on hover, responsive card sizing. Pattern matches Styer Mortgage site.
- **Cache bust:** All CSS links updated to ?v=5

## 2026-04-07 — Homepage Redesign + Live Site Alignment

- **Logo bigger + shadow box:** 72px default with box-shadow, shrinks to 44px on scroll (was 44px/38px)
- **Nav buttons filled:** Book Now and Pool Passes now white background + orange text (was outline)
- **Slideshow zoom fix:** Default `background-position: center 30%` + per-slide `data-pos` attribute for near-square images
- **Homepage restructured** to match live site with dedicated showcase sections:
  - Cabins & Safari Tents (split section with image + CTAs)
  - Event Barn & Neon Moon (venue duo cards side-by-side)
  - Ranch Weddings (full-width CTA banner)
  - Wellness & Experiences (reverse split with yoga image)
- **Event cards with artwork:** Upcoming events now display event poster images (Lone Star Party, Bridal Sip & See, Yoga & Mimosas)
- **Venue duo CSS component:** New `.venue-duo` two-column card layout with image overlay
- **Cache bust:** All CSS links updated to ?v=4

## 2026-04-07 — "Modern Desert" Design Overhaul

- **Orange glassmorphism nav:** Semi-transparent orange bar with backdrop-blur, compact height (~41px), logo left-aligned with white background and rounded corners
- **Outline buttons:** All CTAs changed to transparent background with 1px border; orange fill on hover
- **Sand palette:** Page background changed from white to #F5F2ED, text from #3d3830 to charcoal #333
- **Montserrat font:** Replaced Lato body font with Montserrat (wider, more modern tracking)
- **20% more spacing:** All spacing tokens increased for more breathing room between sections
- **Cards:** 4px border-radius, removed box shadows, added lift-on-hover (translateY -4px)
- **Hero:** Lighter overlay (20% opacity), reduced to 85vh height
- **Scroll animations:** Fade-in-up reveal on section labels via IntersectionObserver
- **Mobile sticky CTA:** Fixed "Book Your Stay" bar at bottom of viewport on screens < 960px
- **Cache bust:** All CSS links updated to ?v=3
- **Nav restructured:** Logo-left with single nav__links group (removed centered split layout)
- **Dev server fix:** Added query string stripping so ?v=N cache busters don't cause 404s

## 2026-04-07 — Website UI Updates

- **Logo in header:** Added RM logo image (`logo.webp`) next to "Rancho Moonrise" text in nav across all 10 pages. Logo shrinks on scroll.
- **Pool Passes in top nav:** Added "Pool Passes" as prominent nav item linking to ResortPass, in both desktop and mobile nav.
- **FAQs & Blog moved to footer:** Removed from top nav and mobile menu. Both were already present in footer nav (Stay → FAQs, Celebrate → Blog).
- **Events page redesign:** Added list/calendar view toggle. List view preserves existing card layout. Calendar view shows month grid with clickable event buttons that open a detail popup. Defaults to list on mobile, calendar on desktop.
- **Mobile responsiveness:** Tightened section padding, button sizing, hero height, nav spacing, footer layout, and feature card aspect ratios on screens < 640px. Added full-width stacked buttons on screens < 400px.

## 2026-04-07 — Daily SEO Agent Run #2

- Homepage: added AEO section "The Best Glamping Near Austin, Texas" with direct-answer paragraphs targeting AI/SGE search queries
- Accommodations page: added AEO section "What Is Glamping Near Austin, Texas?" with concrete details (tent numbers, check-in hours, pet policy, etc.)
- First blog article published: "Glamping Near Austin, Texas — The Complete Guide" at `/pages/glamping-near-austin-texas.html` with full BlogPosting schema, OG tags, and internal links
- Blog listing page updated: placeholder Post 1 replaced with real article card and link
- Sitemap updated to include the new blog article URL

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

## 2026-04-08 — Operating Agreement Full Review

- Reviewed full 20-page LLC Company Agreement (2022-02-22) — all 10 articles
- Key finding: transfers require Manager Unanimous Approval (Section 2.4) — Paul has veto power
- Key finding: no buyout formula, no right of first refusal, no forced buyout mechanism
- Key finding: valuation = fair market value determined by Board in good faith (no formula)
- Key finding: two Manager seats — PRH Partnership LP (Herchman) and Stichter Gal LLC (Tittle)
- Identified critical gap: Exhibit A (ownership %, units, capital contributions) NOT included in 20 pages — still missing
- Updated CONTEXT.md with full "Operating Agreement — Key Findings" section and deal implications
- Updated TODO.md: added Exhibit A as top priority, added post-Exhibit-A deal modeling tasks
- Updated Active Blockers: operating agreement now reviewed, Exhibit A flagged as new blocker
