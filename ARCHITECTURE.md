# Rancho Moonrise — Architecture Reference

## Stack

| Layer | Tool |
|-------|------|
| Site | Static HTML/CSS/JS |
| Hosting | Vercel (push-to-deploy from GitHub) |
| Repo | `AStyer8345/rancho-moonrise`, branch `main` |
| Booking | Cloudbeds — https://hotels.cloudbeds.com/en/reservation/5tzv1r |
| Pool Pass | ResortPass — https://www.resortpass.com/hotels/rancho-moonrise |
| Events/Tickets | Showclix |
| Email Marketing | Flodesk |
| Fonts | Google Fonts — Playfair Display, Lato, Cormorant Garamond |
| Images | WebP format, served from `/site/images/` |

## Site Structure

```
rancho-moonrise/
├── vercel.json
├── .gitignore
├── CONTEXT.md / CHANGELOG.md / DECISIONS.md / TODO.md / ARCHITECTURE.md
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

**Typography:** Playfair Display 700 (headings), Lato 300/400/700 (body), Cormorant Garamond (accent).
**Nav:** Solid orange bar with white text. Scrolled state adds shadow.

## Performance

- All images WebP (74MB → 7.2MB, 90% reduction)
- Hero images max 1920px, card images max 800px, badges max 200px
- Google Fonts deferred (non-render-blocking)
- First hero slide preloaded, remaining lazy-loaded
- Vercel caching: 1-year immutable for `/images/` and `/css/`
- PageSpeed: 87 performance, 100 best practices, LCP 3.3s

## SEO

- Unique `<title>` + `<meta description>` per page
- JSON-LD: LodgingBusiness + EventVenue (homepage), LodgingBusiness (accommodations), EventVenue (weddings)
- Canonical tags, alt text, OG + Twitter Card meta on all pages

## Business Details

- **Property:** 20117 Lockwood Road, Manor, TX 78653 (35 acres)
- **Phone:** 737-291-1260
- **Check-in:** 4-8 PM | **Check-out:** 11 AM
- **Noise curfew:** 9:30 PM | **Pool hours:** until 9 PM
- **Pets:** Welcome ($50 fee, 60 lb limit, 1 per reservation)
- **No outside alcohol** — General Store sells beer/wine
- **Capacity:** 20 units (cabins + luxury safari tents), sleeps ~50. Weddings up to 200 guests.

## Social Presence

| Platform | Handle | Notes |
|----------|--------|-------|
| Instagram | @rancho_moonrise | 13K followers |
| Facebook | /RanchoMoonrise/ | 864 likes (gap vs. IG) |
| TikTok | @rancho_moonrise | |
| Google Business | Listed | 4.9 stars / 122 reviews |
