# Rancho Moonrise — Project Context

**Last updated:** 2026-04-07

---

## What This Is

Website rebuild for Rancho Moonrise — Austin's first glamping and events ranch in Manor, TX.
Static HTML/CSS/JS (no frameworks). Hosted on Vercel via GitHub push-to-deploy.

**Owners:** Ashley & Nance (Adam's sister-in-law and her husband)
**Repo:** `AStyer8345/rancho-moonrise`, branch `main`

---

## Current Status

Site is live with 8 pages. Performance optimized (WebP images, deferred fonts, 87 PageSpeed). SEO implemented (JSON-LD, OG tags, canonical URLs). Contact page recently redesigned with conversion-focused intent cards and AI chat widget.

**Last session (2026-04-06):** Contact page redesign, vision banner + 4 new service cards, chat widget, pitch email drafted for Ashley & Nance.

---

## Active Blockers

- GBP not confirmed as owner-claimed (may be OTA-populated)
- Blog content is placeholder only — no real articles written
- Ashley & Nance haven't been onboarded yet (need logins, event details, vendor list)

---

## What's Next

1. GBP: claim, add description, complete hours, add direct booking link
2. Blog: write 3-4 SEO articles (Austin glamping, ranch weddings, corporate retreats)
3. Client onboarding: send Google Form to collect Ashley & Nance's info

---

## Key Files

| File | Purpose |
|------|---------|
| `CHANGELOG.md` | What changed and when |
| `DECISIONS.md` | Architecture decisions |
| `TODO.md` | Prioritized open work |
| `site/css/styles.css` | Single stylesheet, CSS custom properties |
| `site/js/main.js` | Nav, mobile menu, slideshow, FAQ accordion |
| `vercel.json` | Vercel config + caching headers |

---

## Session Rules

At the end of every session:
1. Update CONTEXT.md — replace "Last session" and "What's Next" (don't append)
2. Append entry to CHANGELOG.md
3. `git add`, `git commit`, `git push origin main`
