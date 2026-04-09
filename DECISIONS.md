# Rancho Moonrise — Decisions

---

## 2026-04-07 — Adam Running Point on Christopher (Not Nancy)

**Decision:** Adam handles all communication and deal presentation to Christopher, the potential incoming 45% partner.

**Why:** Nancy deferred to Adam. Christopher will want real numbers, a professional deal summary, and a structured conversation — not a casual owner pitch. Nancy is the idea person, not the numbers person. A clean, credible presentation increases the odds Christopher commits.

---

## 2026-04-08 — Keep Playfair Display for Headings (Americane Not Available)

**Decision:** Keep Playfair Display as the heading font. Add Overpass (body) and Lora (accent) from Google Fonts per brand guide. Americane (brand guide primary heading font) is skipped.

**Why:** Americane is Adobe-only — requires an Adobe Fonts subscription and web project setup. Playfair Display is a reasonable serif substitute already in use. Overpass and Lora are both brand guide fonts available on Google Fonts, so those were added. If Ashley has Adobe Fonts access, Americane can be added later as a single CSS change.

---

## 2026-04-06 — Static HTML/CSS/JS (No Framework)

**Decision:** Pure HTML/CSS/JS with no build step. No React, no Next.js, no WordPress.

**Why:** Adam's rule — all web assets in HTML/CSS/JS. Site is content-driven with no dynamic data needs. Static files deploy instantly on Vercel with zero build complexity.

---

## 2026-04-06 — WebP Images Only

**Decision:** All images converted to WebP. Originals kept in `images/original/` (gitignored).

**Why:** 90% size reduction (74MB → 7.2MB). WebP has 98%+ browser support. Originals preserved locally for future re-exports.

---

## 2026-04-06 — Cloudbeds for Booking (Not Custom)

**Decision:** Booking links point to Cloudbeds hosted reservation page. No custom booking flow on the site.

**Why:** Cloudbeds handles availability, payments, and channel management (Airbnb, Booking.com). Building a custom booking UI would duplicate existing functionality and create sync issues.

---

## 2026-04-06 — No CMS for Events

**Decision:** Events page uses static HTML cards. No headless CMS or database.

**Why:** Events change infrequently. A CMS adds complexity without proportional value at this stage. If event volume increases, revisit with a lightweight JSON file or Supabase table.
