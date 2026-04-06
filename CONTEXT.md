# Rancho Moonrise — Project Context

**Last updated:** 2026-04-06

---

## Project Overview

Website rebuild for Rancho Moonrise — Austin's first glamping and events ranch in Manor, TX.
Built in clean HTML/CSS/JS (no WordPress, no frameworks). Hosted on Vercel via GitHub push-to-deploy.

**Owner:** Adam's mother-in-law
**Property:** 20117 Lockwood Road, Manor, TX 78653 (35 acres)
**Phone:** 737-291-1260

---

## Revenue Streams

- Weddings (up to 200 guests, full ranch buyout)
- Private events (corporate retreats, reunions, parties)
- Overnight accommodations — 20 units (cabins + luxury safari tents, sleeps ~50)
- Swimply pool day passes
- ResortPass listing
- General Store (beer, wine, snacks)

---

## Tech Stack

| Layer | Tool |
|-------|------|
| Site | Static HTML/CSS/JS |
| Hosting | Vercel (push-to-deploy from GitHub) |
| Repo | `AStyer8345/rancho-moonrise`, branch `main` |
| Booking | Cloudbeds — https://hotels.cloudbeds.com/en/reservation/5tzv1r |
| Pool Pass | ResortPass — https://www.resortpass.com/hotels/rancho-moonrise |
| Events/Tickets | Showclix |
| Previous site | WordPress, built by Bofill Tech (bofilltech.com) |
| Fonts | Google Fonts — Playfair Display, Lato, Cormorant Garamond |
| Images | WebP format, served from `/site/images/` |

---

## Site Structure

```
rancho-moonrise/
├── vercel.json
├── .gitignore
├── CONTEXT.md
└── site/
    ├── index.html          ← Homepage with 5-image slideshow
    ├── css/styles.css      ← Single stylesheet, CSS custom properties
    ├── js/main.js          ← Nav, mobile menu, slideshow, FAQ accordion, fade-in
    ├── images/             ← All WebP images (optimized from originals)
    │   └── original/       ← Original full-size JPG/PNG (gitignored)
    └── pages/
        ├── accommodations.html
        ├── weddings.html
        ├── events.html        ← Static event cards (no CMS yet)
        ├── host-your-event.html
        ├── blog.html          ← Scaffold with placeholder posts
        ├── faqs.html
        ├── contact.html
        └── policies.html
```

---

## Design System

**Theme:** Light background, orange accents, dark footer.

| Variable | Value | Usage |
|----------|-------|-------|
| `--color-bg` | `#ffffff` | Page background |
| `--color-bg-alt` | `#f7f5f2` | Card/section alternate bg |
| `--color-orange` | `#c9944a` | Primary accent, nav bg, buttons |
| `--color-text` | `#3d3830` | Body text |
| `--color-heading` | `#2a2520` | Headings |
| `--color-text-muted` | `#7a7168` | Secondary text |
| `--color-footer-bg` | `#1e1b16` | Footer (dark) |

**Typography:**
- Headings: Playfair Display 700
- Body: Lato 300/400/700
- Accent: Cormorant Garamond (used sparingly)

**Nav:** Solid orange bar with white text. Scrolled state adds shadow.

---

## Performance Optimizations (2026-04-06)

- All images converted to WebP (74MB → 7.2MB, 90% reduction)
- Hero images: max 1920px wide
- Card/feature images: max 800px wide
- Badge/icon images: max 200px wide
- Google Fonts deferred (non-render-blocking via `media="print"` onload trick)
- First hero slide preloaded via `<link rel="preload">`
- Non-active slideshow images lazy-loaded via `data-bg` attributes
- Vercel caching headers: 1-year immutable for `/images/` and `/css/`

---

## Social / Online Presence

| Platform | Handle/URL | Notes |
|----------|-----------|-------|
| Instagram | @rancho_moonrise | 13K followers |
| Facebook | /RanchoMoonrise/ | 864 likes (gap vs. IG) |
| TikTok | @rancho_moonrise | |
| LinkedIn | /company/rancho-moonrise/ | |
| Google Business | Listed | 4.9 stars / 122 reviews |

**GBP issues (from audit):**
- Missing business description (prime SEO real estate)
- Business hours incomplete
- No direct booking link (relies on OTA aggregation)
- Claim status unclear — may be OTA-populated

---

## SEO Implementation

- Unique `<title>` and `<meta name="description">` per page
- One H1 per page, keyword-rich
- JSON-LD schema on key pages:
  - Homepage: LodgingBusiness + EventVenue
  - Accommodations: LodgingBusiness
  - Weddings: EventVenue
- Canonical tags on all pages
- Descriptive alt text on every image
- Semantic heading hierarchy (H1 → H2 → H3)
- Open Graph + Twitter Card meta tags

---

## Known Issues / TODO

### Needs Building
- [ ] **Events CMS** — events page is static HTML. No way for client to add/edit events. Leading option: Google Sheets as lightweight CMS with Cloudinary for image hosting.
- [ ] **Blog content** — blog.html is scaffolded with 6 placeholder posts ("Coming Soon"). No actual articles written yet.
- [ ] **Pool pass page** — currently bounces to ResortPass. Could be internal page.
- [ ] **Booking inquiry automation** — AI auto-responder for wedding/event DMs and emails (scoped but not built).
- [ ] **Social content automation** — AI-assisted content calendar + Publer scheduling (scoped but not built).

### Known Gaps
- [ ] GBP description needs writing and claiming
- [ ] Facebook engagement far behind Instagram — needs strategy
- [ ] No email capture / newsletter signup on the site
- [ ] Blog SEO articles not written (target: "glamping near austin texas" etc.)
- [ ] Accessibility page (`/pages/accessibility.html`) — linked in footer but not built

### Technical Debt
- Original JPG/PNG images still in repo (large files). Could remove from git history.
- `og:image` still points to `.jpg` (kept for social crawler compatibility — intentional)
- Slideshow arrow buttons hidden via CSS `display: none` — HTML still in markup (could clean up)

---

## Commit History

| Hash | Message |
|------|---------|
| `55bf4be` | Initial commit — full site rebuild |
| `590ad36` | Add Vercel config for static site deployment |
| `d502342` | Light theme redesign with orange header + hero slideshow |
| `21b4d90` | Fix hero slideshow z-index and lighten overlays |
| `f3a4765` | Add .vercel to gitignore |
| `214e5b6` | Optimize PageSpeed: WebP images, lazy slideshow, deferred fonts |
| `9c39b44` | Improve hero text readability and remove slideshow arrows |

---

## Key Business Details

- **Check-in:** 4:00 PM – 8:00 PM
- **Check-out:** 11:00 AM
- **Parking:** One spot per reservation, general lot only
- **Noise curfew:** 9:30 PM
- **Pets:** Welcome ($50 fee, 60 lb limit, 1 per reservation)
- **No outside alcohol** — beer/wine available at General Store
- **Pool hours:** Open daily until 9 PM

---

## AI Opportunities (Scoped, Not Yet Built)

1. **Booking & Inquiry Automation** (biggest ROI)
   - AI inquiry responder for wedding/event/glamping DMs and emails
   - Lead capture → Supabase CRM
   - Follow-up drip via n8n
   - Est. cost: ~$350/month tools vs. $2,500+/month coordinator

2. **Social Content Automation**
   - AI-assisted content calendar from reviews, bookings, events
   - Auto-generate weekly posts + schedule via Publer
   - Pain signal: they posted for a social media intern

3. **SEO / Content Marketing**
   - Blog articles targeting glamping + Austin keywords
   - GBP optimization
   - Review response automation

---

## Speed Testing Tools

- **GTmetrix** — https://gtmetrix.com
- **PageSpeed Insights** — https://pagespeed.web.dev
- **WebPageTest** — https://webpagetest.org

---

## Session Rules

At the end of every Claude Code session working on this project:
1. Update this `CONTEXT.md` with everything changed
2. `git add`, `git commit`, `git push origin main`
