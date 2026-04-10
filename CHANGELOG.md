# Rancho Moonrise — Changelog

## 2026-04-10 — Phase 3 UI Refinements: Bigger Logo, Weddings Form Parity, FAQ Accordions
- **Logo size bump site-wide:** `.nav__logo-img` desktop `height: 72px → 112px`, `.nav--scrolled .nav__logo-img` `44px → 68px`, tablet `@media (max-width: 768px)` `32px → 48px` (plus new scrolled-on-tablet rule at 40px), very-narrow `@media (max-width: 400px)` `30px → 44px`. Padding bumped from 6px → 8px and border-radius 8px → 10px for the larger base size to keep the proportion consistent. Phase 2 already swapped to the Tertiary Clay wordmark; at 112px that wordmark now reads cleanly across the nav header instead of feeling cramped.
- **Weddings inquiry form replaced with exact contact.html form.** Removed the Phase 2 custom wedding form (First/Last Name, native `type="date"` picker, Guest Count dropdown, Referral dropdown) and pasted the verbatim contact.html wedding form markup: Full Name, Partner's Name, Email, Phone, Preferred Date Range (free text like "Fall 2026"), Estimated Guest Count (number input 1-300), Total Wedding Budget* (4-tier dropdown $5K-$60K+), Tell Us About Your Vision (textarea), How Did You Hear About Us? (free text), "Send Wedding Inquiry" primary CTA. Both pages now have identical field schemas, so one future backend handler covers both entry points. IDs left as-is (`wedding-name`, `wedding-email`, etc.) — no collision since the pages don't overlap.
- **Form section repositioned directly under "Schedule a Venue Tour".** New flow on `weddings.html`: Schedule a Venue Tour (existing, unchanged) → `#wedding-inquiry` (new position) → FAQ (converted to accordions, see below) → CTA banner. The CTA banner's "Send an Inquiry" anchor still resolves to `#wedding-inquiry` because the section ID was preserved across the replacement.
- **Weddings FAQ converted to real accordions.** Previously 5 plain `<div><h3><p>` blocks inside a flex container. Now wrapped in `.faq-list` with each Q&A in a `.faq-item > button.faq-question + .faq-answer > .faq-answer__inner > p` structure — same markup as the faqs.html page. Zero new JS: the existing main.js FAQ accordion handler (lines 79-103) queries `.faq-item` globally at DOMContentLoaded, so it picks up the new weddings.html accordions automatically. Only the question is visible by default; clicking opens that item and closes any previously open one (`maxHeight = scrollHeight` transition).
- **CSS cache bust:** `styles.css?v=9 → v=10` across all 15 HTML pages (index.html + 14 pages). Delegated the 15-file mechanical swap to a subagent.
- **Verified on live Vercel (`rancho-moonrise.vercel.app/pages/weddings.html`):** served CSS contains `.nav__logo-img { height: 112px }`, weddings.html contains 5 `faq-item` accordion containers and 2 `wedding-budget` references (label + select). Preview-level DOM inspection confirmed: logo computes to 112px at desktop / 68px when scrolled, form has 11 inputs matching contact.html exactly, first FAQ item opens on click with `maxHeight: 155px` while others stay collapsed, section order is `schedule-tour → wedding-inquiry → faq` with zero gap.
- **Commit `e9fb9e3`** — 16 files changed, 108 insertions, 112 deletions (the form replacement was a net-negative diff because contact.html's form is simpler than the custom one). Pushed to `main`, auto-deployed to Vercel.

## 2026-04-10 — Phase 2 UI Fixes: Buttons, Nav, FAQ, Wedding Form, `.reveal` Bug
- **Root-cause fix for "empty looking" cream sections:** `.btn--primary` was `background: transparent; color: white; border: white`. On every cream-background section (`.section`, `.section--cream`, `.section--dark` which is actually beige `#ebe3d5`) the primary CTAs disappeared because white text on white border on cream = invisible. Rewrote `.btn--primary` to solid `var(--color-terracotta)` fill + white text + terracotta border; hover deepens to `#9a4f33`. Rewrote `.btn--outline` to solid `var(--color-heading)` (charcoal) fill + white text; hover flips to terracotta. `.nav__links .btn` override (white pill with terracotta text on the terracotta header) left untouched — that one works on the dark header background.
- **Nav logo swap site-wide:** replaced `RanchoMoonrise_Logo_RGB_Secondary_Clay.svg` (full lockup, 360×360 square viewBox, too busy at nav height) with `RanchoMoonrise_Logo_RGB_Tertiary_Clay.svg` (circular wordmark, 88×88) on all 15 pages. Cleaner render, same brand-pack file family.
- **Nav social icons repositioned:** Instagram + Facebook + TikTok + LinkedIn moved from the position between Contact and Book Now to the RIGHT of Pool Passes. New desktop nav order: Logo → Accommodations → Weddings → RM Events → Private Events → Contact → BOOK NOW → POOL PASSES → Social icons. Applied to all 15 pages via subagent. Mobile menu intentionally left alone.
- **Weddings FAQ:** section heading "What You Need to Know" → "Frequently Asked Questions". H3 labels shortened to remove location-stuffing from visible text while preserving the full keyword-rich answer paragraphs verbatim:
  - "Is Rancho Moonrise a wedding venue near Austin, TX?" → "Where is Rancho Moonrise?"
  - "What makes Rancho Moonrise different from other wedding venues near Austin?" → "What makes Rancho Moonrise different?"
  - "How many people can attend a wedding at Rancho Moonrise?" → "How many guests can attend?"
  - "Does Rancho Moonrise allow outside vendors for weddings?" → "Can we bring outside vendors?"
  - "How far in advance should I book a ranch wedding near Austin?" → "How far in advance should we book?"
- **FAQPage JSON-LD schema added to weddings.html** with the 5 short-question / full-answer pairs. Google deprecated FAQ rich results in 2023 for non-gov/health sites, but AEO engines (ChatGPT, Perplexity, Claude) still consume FAQPage schema — so the visible H3s stay clean while the machine-readable layer keeps the structured Q&A.
- **New `#wedding-inquiry` form on weddings.html** inserted between FAQ and the CTA banner. Fields: First Name\*, Last Name\*, Email\*, Phone, Wedding Date (native `type="date"`), Estimated Guest Count (Under 50 / 50–100 / 100–150 / 150–200 / 200+), Total Wedding Budget\* (same 4-tier dropdown as contact.html), How Did You Hear About Us? (Google / Instagram / Facebook / TikTok / Friend / Vendor / Directory / Event / Other), Tell Us About Your Vision (textarea). Primary-filled "Send Inquiry" button at full width. Uses `action="#" method="POST"` to match the existing contact.html placeholder pattern — no backend form handler exists in main.js yet, so both forms are placeholder until a real endpoint is wired up.
- **Weddings CTA banner rewritten** to pair with the new form: heading "Walk the Ranch Before You Commit", primary button changed from "Request a Quote" (→ contact.html) to "Send an Inquiry" (anchor `#wedding-inquiry` on-page), "Schedule a Tour" Calendly button kept.
- **CSS cache bust:** `styles.css?v=8` → `v=9` across all 15 pages.
- **CRITICAL pre-existing bug discovered and fixed:** `.reveal` had `opacity: 0` in CSS, but `main.js`'s IntersectionObserver only watched `.fade-in`. Every `.reveal` element (section labels like "Our Spaces", "Upcoming Events", "@rancho_moonrise", plus 9 elements on the homepage alone) was permanently hidden across every page of the site. One-line fix: extended the observer's query selector from `.fade-in` to `.fade-in, .reveal`. Verified via Playwright that after a natural scroll-through, zero `.reveal` or `.fade-in` elements remain at `opacity: 0`.
- **Bulk mechanical updates across 15 HTML files** (CSS cache bump + logo swap + social-group reorder) delegated to a general-purpose subagent. 45 edits total, all verified via final grep (`styles.css?v=8` = 0 files, `Secondary_Clay.svg` = 0 files, `Tertiary_Clay.svg` = 15 files, `styles.css?v=9` = 15 files).
- **Live verification on rancho-moonrise.vercel.app** via Playwright screenshots: header layout correct (logo → nav → Book Now → Pool Passes → social), hero + all interior sections render with visible buttons, wedding form renders with all fields + date picker + budget dropdown, FAQ shows the short H3s.
- Commits: `ddf556e` (16 files: button CSS fix + FAQ rename + schema + wedding form + 15 subagent-modified files) → `36fb00d` (1 file: `main.js` reveal fix). Both pushed to `main`.

## 2026-04-10 — Brand-Facts Site Sweep Shipped
- Swept all 17 customer-facing HTML pages + `site/js/main.js` clean of banned terms per Ashley's 2026-04-10 brand-facts call. Terms removed: "luxury", "(Texas) Hill Country", "General Store" (→ "The Lodge"), "20/31 acres" (→ "36 acres"), "Manor, TX" as descriptor (postal address OK), "Neon Moon Barn Lounge" framed as walk-in (now event-only), "4 ceremony sites" (→ "unlimited ceremony options"), "premier", "oak trees" (none on property), specific unit counts (fluctuates 15/18/19 — now "cabins and safari tents"), "private fire pit at every cabin" (→ "fire pits throughout the property").
- Header logo swapped from `site/images/logo.webp` → brand-pack SVG `site/images/brand/logos/untextured/secondary/RanchoMoonrise_Logo_RGB_Secondary_Clay.svg` (240×80) on every page.
- Added 4-icon social button group to desktop nav (Instagram-priority — bigger and first — followed by Facebook, TikTok, LinkedIn). Mobile menu got a parallel social row below Pool Passes.
- Renamed "Events" → "RM Events" in nav, mobile menu, and all Celebrate-column footer links across every page. Kept in-content phrases like "Upcoming Events" section headings and "View All Events" CTAs untouched — those describe content, not the tab.
- `site/pages/contact.html` wedding inquiry form: added required `<select>` budget dropdown with 4 ranges ($5K-$20K, $20K-$40K, $40K-$60K, $60K+) between guest count row and vision textarea, with helper text "Helps us recommend the right package and tailor your tour."
- `site/pages/weddings.html`: inserted new `<section>` with 6-tile placeholder `.wedding-gallery` grid between Accommodations and Recognition sections, marked `aria-hidden="true"` with visible "Gallery photos coming soon — we're curating a collection from real weddings hosted at the ranch." note. Real-wedding photo curation is the open asset gap. Also rewrote hero subtitle, What's Included cards, Ceremony Sites section (H2 + intro), Poolside split copy, and all AEO answers to match the 36-acre/unlimited-layout framing.
- `site/pages/accommodations.html`: rewrote meta descriptions, page header, group bookings, amenities (General Store card → "The Lodge"), check-in copy, AEO block, CTA section, and LodgingBusiness schema (removed `"numberOfRooms": 20`).
- `site/pages/events.html`: renamed title, meta descriptions, BreadcrumbList position 2, and H1 to "RM Events". Confirmed list view is already the default active view (no restructure needed). Replaced "Vinyasa yoga under the Texas sky" → "Vinyasa yoga poolside" for consistency.
- CSS cache bust bumped `styles.css?v=7` → `v=8` on every page.
- Footer description standardized across all pages to "Austin's glamping and events ranch. 36 acres of safari tents, cabins, weddings, and live events — 20 minutes from downtown Austin."
- Review count updated 122 → 125 on pages that carry AggregateRating.
- Committed the untracked `site/images/brand/` directory (352 logo/symbol/monogram assets, ~7.7 MB) in the same commit as the HTML sweep so the logo reference doesn't 404 on deploy.
- Bulk mechanical pattern application (nav swap, social icon group, mobile row, Events rename, banned-term removal, footer desc, CSS cache bust) delegated to a general-purpose subagent across 11 secondary pages + `js/main.js`. Subagent verified clean via final grep.
- Post-sweep verification: ran global regex across `site/` for all banned terms — zero matches in customer-facing files; remaining matches all confined to internal tooling (`improvement-plan.html`, `audits/`, `brand-audit.html`, `mockup-preview.html`, `dashboard.html`, `report.html`, `competitive-intelligence.html`/.md) which is intentional.
- Follow-up commit `5bbf84d` fixed 4 spots the subagent missed: `index.html` nav/mobile/footer RM Events rename + 3 footer "Upcoming Events" → "RM Events" in events.html, accommodations.html, weddings.html.
- Live-verified on `https://rancho-moonrise.vercel.app/`: RM Events × 3 on homepage, wedding gallery + Ceremony Sites for Every Vision + Unlimited Ceremony Options on `/pages/weddings.html`, `wedding-budget` + `5k-20k` on `/pages/contact.html`, logo SVG returns 200, zero banned terms across 7 spot-checked pages (home, weddings, accommodations, events, contact, ranch-wedding-texas, glamping-near-austin-texas).
- Commits: `59beb4b` (main sweep, 373 files, +1357/-386) → `5bbf84d` (4 footer cleanup, 4 files, +6/-6). Both pushed to `main`.

## 2026-04-10 — Acreage Locked: "36 Acres" for All Website Copy
- Adam confirmed: use **36 acres** in all customer-facing site copy, GBP, social, and brand materials. This is Ashley's number from the 2026-04-10 brand-facts call and takes precedence over the 31.6-acre per-tract sum in the deal file (Tract I 9.9 + Tract II 11 + Tract III 10.7).
- `VOICE-GUIDE.md` already reflects 36 from the earlier Ashley corrections pass — no edit needed there.
- `TODO.md` "Flagged conflicts" section updated: marketing-copy conflict marked **RESOLVED**; deal-file reconciliation split out as its own non-blocking item for buyout modeling.
- `DECISIONS.md` — new entry "2026-04-10 — Website Copy Uses '36 Acres' (Ashley's Number)" documenting the chosen/over/why/context.
- Site sweep itself (22 files, ~109 banned-term occurrences) deferred to a fresh Claude Code session using the rewritten `brand/CLAUDE-CODE-WEBSITE-UPDATE-PROMPT.md` — this session is post-compaction and the sweep is large enough to benefit from a clean context window.

## 2026-04-10 — Official Brand Pack Imported
- Received official Rancho Moonrise brand pack from Ashley (715 MB zip, 1 GB extracted). Split into two locations:
  - **Full pack** → `/Users/adamstyer/Documents/rancho-moonrise-assets/brand-pack-2026-04-10/` (outside repo — too large for git/Vercel). Contains the original 2022 brand guidelines PDF (30 MB), print-ready CMYK EPS logos (16 MB each × 66), texture-embedded SVGs (2 MB each), full RGB asset tree, and Americane fonts. Canonical source for print work — leave it alone.
  - **Web-ready curated subset** → committed to repo at `site/images/brand/` and `brand/fonts/` (~7.7 MB total, 352 images + 3 fonts). Includes: all untextured logo SVGs (Primary / Secondary / Tertiary), all textured logo @2x PNGs (same three levels — textured SVGs skipped because they embed 2 MB base64 rasters), all ATX monograms (SVG + @2x PNG), all 5 symbols (Sun, Agave, Cresent [sic], Prickly Pear, Waves) in SVG + @2x PNG, Americane-Black/Bold OTF fonts plus Monotype EULA.
- Preserved source-pack folder structure as `textured/` vs `untextured/` × `primary/secondary/tertiary/` so assets map cleanly to design intent (textured = aspirational organic look per Ashley, untextured = flat-vector fallback for small sizes).
- Wrote `brand/BRAND-ASSETS.md` — index file documenting where every asset lives, the color-naming convention (Clay/Amber/Coral/Pine/Agave/WhiteDenim/Charcoal → 1:1 with hex tokens in voice guide), HTML/CSS usage examples, and a pointer to the canonical PDF in the outside-repo location.
- Flagged in `TODO.md`: existing `site/images/logo.png` / `logo.webp` pre-date this brand pack and should be replaced with a variant from `site/images/brand/logos/` during the next site sweep.
- Original 715 MB zip left in `~/Downloads/` untouched (safe for Adam to delete when ready).

## 2026-04-10 — Ashley Brand-Facts Call: Voice Guide Corrections
- Processed transcript from operations call with Ashley. Updated both `VOICE-GUIDE.md` (root) and `brand/voice-guide.md` to reflect the corrected brand facts. Kept the two files in sync and added a cross-reference from the brand copy.
- **Permanent ban list added to both voice guides:** "luxury" (not the brand), "Texas Hill Country" (factually wrong — not in the Hill Country, locals call it out), "Manor" / "Mainer" as a copy-level location descriptor (always say "20 minutes from downtown Austin"), "General Store" (renamed to "The Lodge" everywhere), "yoga under the oaks" / "oak-shaded" (no oak trees on the property), "4 ceremony sites" (misleading — say "unlimited options for your own unique layout"), specific unit/room counts (inventory fluctuates 15/18/19), "private fire pit at every cabin" (not every unit has one — say "fire pits throughout the property"), "full-service bar open" or any framing implying the Neon Moon Barn Lounge is a walk-in bar (it's event-only).
- **Corrected acreage 20 / 31 → 36 acres** across the voice guides. Flagged to TODO.md that this conflicts with the deal-file tract breakdown (9.9 + 11 + 10.7 = 31.6) — **Adam needs to reconcile before Exhibit A buyout modeling is final**.
- **New "Property Facts (authoritative)" section added to `VOICE-GUIDE.md`** — a single grep-able source of truth listing the 5 current spaces (Event Barn, The Pool, The Lodge, safari tents + cabins, Neon Moon Barn Lounge [event-only]), the selling-point emphasis (donkeys/animals, real beds, "just show up"), the wedding inquiry budget dropdown ($5K–$20K / $20K–$40K / $40K–$60K / $60K+), the "Our Venues" → "Our Spaces" rename, the Events → "RM Events" rename with chronological list default.
- Added "drinks available" clarification: margaritas, beer, wine and more at the Lodge or event bars — event bars are NOT walk-in, must be specified.
- Added check-in softening: 3–5 PM but guests routinely check in after 5, don't make it sound rigid.
- Added noise curfew (9:30 PM) and parking rules (free general lot, no vehicles at sites overnight) to the brand details table.
- Added "provided in room" list (soap, shampoo, conditioner, towels, linens) so agents stop inventing amenities.
- Updated `CONTEXT.md` header with pointer to Property Facts section, replaced location descriptor in "What This Is" paragraph, and added a new Last Worked On entry for this session.
- Logged **NEEDS ADAM** block in `TODO.md` itemizing the ~109 occurrences of banned language across 22 `site/` HTML files (hotspots: index.html 16, competitive-intelligence.html 14, weddings.html 11, accommodations.html 10). Site sweep flagged as required before any new customer-facing copy ships. Also logged: wedding inquiry form needs budget dropdown, events page needs rename + chronological list default, homepage needs Instagram integration to replace SEO block, header needs social buttons, wedding page needs gallery (asset gap — photos needed from Ashley), GBP needs Mon/Tue closed + updated voicemail greeting. Plus context note on the F1 1-star review: neighbor noise not ranch noise, annual anomaly, Ashley will respond.
- HoneyBook-Wedding-Flow-Content.md and historical decks in `brand/` left untouched (they're snapshots/artifacts) but flagged so no one quotes from them into new copy without filtering through the updated voice guide first.

## 2026-04-10 — 3-Disposition Tag Sweep (Adam Now Has GBP Access)
- Adam confirmed he has Google Business Profile **Manager** access — can post, reply to reviews, edit info, view performance. Unblocks GBP work previously waiting on Ashley.
- Added new `tag-draft-post` CSS class (dark magenta on `#2A0D2A`, text `#D47DC4`) for "Claude writes content, human pastes into third-party system" tasks. Sits alongside existing `tag-auto` (teal) and `tag-manual` (amber).
- Replaced vague intro paragraph on `site/improvement-plan.html` with a new `.disposition-legend` block that explicitly defines all 3 dispositions: **AUTO** (scheduled Claude task, zero human touch), **DRAFT→POST** (Claude writes, human pastes into GBP/Hipcamp/WeddingWire/etc.), **MANUAL** (click/verify/configure/decide — Claude cannot advance alone).
- Re-tagged every task so each carries exactly ONE disposition (was previously inconsistent — many tasks had no disposition tag at all):
  - **AUTO (12):** #8 review request system, #9 inquiry response, #14 pool pass promo, #24 Facebook channel, S1-S5 (blog splits, H2 summaries, topical clusters, schema, pool pass page), S7 AEO baseline, S8 blog-to-GBP, plus completed #10 weekly GBP posting
  - **DRAFT→POST (5):** #1 Google review replies, #2 GBP description/amenities/hours, #3 GBP Q&A seed, #12 Hipcamp listing fix, #22 SOPs for Ashley
  - **MANUAL (18):** #5, #7, #11, #13, #15, #16, #17, #18, #19, #20, #21, #23, #25, #26, #27, S6, plus completed #4, #6
- Shifted GBP-related ownership from Ashley → Adam on tasks now unblocked by Manager access: #1, #2, #7, #15, #27 all moved to Adam. Task #1 and #2 also gained Claude as co-owner (Claude drafts the copy). Task #3 was already Adam + Claude — disposition clarified.
- HTML balance post-sweep: 243 open `<div>` / 243 close (gained 4 from the legend block), 35 task cards preserved (32 active + 3 completed), all 35 tasks now carry exactly one disposition tag.

## 2026-04-10 — Daily SEO Run: Blog #6, SpeakableSpecification, AggregateRating Fix
- Published blog article #6: `site/pages/ranch-wedding-texas.html` — "Planning a Ranch Wedding in Texas — What Austin Couples Need to Know". Targets "ranch wedding Texas", "ranch wedding near Austin", "planning a ranch wedding". ~1,500 words with AEO block (4 direct-answer Q&As), BlogPosting + BreadcrumbList schema, full OG/Twitter tags, cross-links to weddings/accommodations/contact pages.
- Blog index updated: 6th post card added to `site/pages/blog.html`; CollectionPage ItemList schema updated to position 6.
- SpeakableSpecification schema added to homepage (`index.html`) as WebPage schema — identifies `.hero__title`, `.hero__subtitle`, `.section h2`, `.aeo-block p` for AI/voice engine consumption. Completes S4 (BreadcrumbList done 2026-04-09, Speakable now done).
- AggregateRating reviewCount corrected 122→125 in `index.html` and `pages/accommodations.html` (confirmed from 2026-04-09 baseline).
- Sitemap updated: added `/blog/ranch-wedding-texas/`, updated `/` and `/blog/` lastmod to 2026-04-10.

## 2026-04-10 — Links Tab + Voice Tab Added to Improvement Plan
- Added two new tabs to `site/improvement-plan.html`: **Links** (mind-map-style category grid of every Rancho Moonrise URL) and **Voice** (condensed brand voice guide)
- Links tab groups all URLs into 8 category cards: Websites, Booking & Reservations, Social Media, Google Business Profile, Review Platforms, OTA Listings, Wedding Directories, Internal & Source
- Each link pill carries a status tag: `Primary` (customer-facing), `Live` (active), `Gap` (missing/unclaimed/broken), `Verify` (URL needs confirmation) — same component doubles as a visible gap audit
- Gaps flagged: YouTube channel (doesn't exist — Task 23), TripAdvisor (unclaimed), Hipcamp (0 reviews), WeddingWire (not listed), Zola (not listed)
- Voice tab renders: Who We Are (one breath), Voice in Three Words, Tone by Context, Key Phrases, Things We Never Say, Writing Patterns, Instagram Voice, Audience Personas, Brand Details quick-reference — full source lives at `VOICE-GUIDE.md` on GitHub
- Tab order (left → right): Plan · Metrics · Audits · Intel · Done · Links · **Voice** (Voice all the way right per request)
- Hash-link routing added for `#links` and `#voice`
- HTML balance verified: 239 open/239 close `<div>`, 7 tab buttons matching 7 tab-content divs, 35 task cards preserved

## 2026-04-10 — Done Tab + Option C Grade Progression (commit 01319c8)
- Added Done tab to improvement-plan.html with `#done-tasks-container` — completed tasks physically relocate into the Done tab (newest on top) instead of fading in place on the Plan tab
- Backfilled tasks #4 (GBP secondary categories), #6 (Instagram link-in-bio), #10 (weekly GBP posting) moved from Plan tab to Done tab at rest in the HTML
- Built phase-gated grade calculator (Option C): headline grade snaps to the highest phase where all required tasks for that area are complete; empty phases pass through without advancing the grade so Operations stays at C until task #20 ships (not C+ just because phases 1-2 have no Operations tasks)
- Mini-progress "(X/Y toward <next grade>)" displays under each of the 8 scorecards
- Scorecards + Grade Trajectory table recompute on page load AND after every successful mark-done click (no page refresh needed)
- Done tab button shows a live count badge; empty-state placeholder displays when Done tab is empty
- Source of truth for "is done?" is now DOM location (task inside `#done-tasks-container`); localStorage is optimistic UI cache only
- Updated `rancho-apply-done` scheduled task SKILL.md: now physically moves task divs into the Done tab container instead of just applying a class in place — keeps multi-device state in sync on next deploy

## 2026-04-10 — Mark Done System Shipped + Smoke Tested (commits 5ef5db0, e38a812)
- New Vercel serverless function `/api/complete` (Node 20.x, 256MB, 10s maxDuration) — Bearer auth via shared `BRIEFING_AUTH_TOKEN` (same secret as client-ops briefing page), appends RESOLVED lines to `rancho-done-log.md` via GitHub Contents API, idempotent on id
- New append-only log `rancho-done-log.md` — backfilled with the 3 tasks already marked done (#4, #6, #10)
- Added `data-item-id` + `data-item-title` + `data-item-system` attributes to all 35 task divs with stable kebab-slug IDs
- Added Mark Done button CSS + click handler + auth gear icon + auth modal + toast notifications, all styled to the Rancho amber palette
- Set `BRIEFING_AUTH_TOKEN` + `GITHUB_TOKEN` on Vercel `rancho-moonrise` project (production scope)
- Smoke test verified: clicked Mark Done on test task, commit `5ef5db0` landed in GitHub from the `rancho-mark-done` bot, round-trip working end-to-end
- Known issue: `GITHUB_TOKEN` is currently Adam's broad-scoped `gh auth token` — TODO to rotate to a fine-grained PAT scoped only to `AStyer8345/rancho-moonrise` contents:write

## 2026-04-09 — SEO/AEO Session 2: Schema Rollout
- Added CollectionPage + ItemList schema to blog.html (5 posts)
- Added BreadcrumbList schema to all 13 subpages on Vercel site
- Fixed banned word "premier" in blog.html meta + footer (voice guide)
- Verified homepage LodgingBusiness schema: geo, priceRange, amenityFeature all present
- Committed + pushed (6fb84e8): 13 files, 214 insertions

## 2026-04-09 — Weekly Metrics: Baseline Confirmed

- First automated run of `rancho-metrics-weekly` scheduled task
- Searched all 10 target keywords live — ranchomoonrise.com not ranking for any (unchanged from baseline)
- Confirmed review counts: Google ~125 (4.9★), Facebook 5 (100%), Expedia 8.0, TripAdvisor 0 (unclaimed), Hipcamp listed, The Knot present
- Confirmed social: Instagram ~13K, Facebook 864, TikTok 1,408, LinkedIn page exists, YouTube no channel
- AEO citations: 0/10 across all engines (unchanged)
- Google indexed pages (old site): ~10; new site: 0
- GBP health: description still blog post, hours still not set, 0 Q&As, weekly posts status unverified, Google Chat not enabled
- Updated improvement plan HTML timestamps (both brand/ and site/ copies)
- Committed and pushed to main — Vercel auto-deploys

## 2026-04-09 — Live Audit + SEO/AEO Strategy

- Live-verified all platforms: GBP, TripAdvisor, Yelp, Hipcamp, Instagram, WeddingWire, TheKnot, ResortPass, Expedia, Facebook
- Created metrics baseline (`brand/2026-04-09-metrics-baseline.md`) with verified data
- Updated improvement plan: marked Tasks 4, 6, 10 as DONE; updated Tasks 1, 2, 5, 7, 27 with verified findings
- Added 8 SEO/AEO tasks (S1-S8) to improvement plan — blog splitting, AEO summaries, schema, topical clusters, pool page, GSC, tracking, blog-to-GBP automation
- Created `tasks/seo-aeo/` folder with master-agent, backlog, agent-rules, session-log, blockers
- Created scheduled task `rancho-seo-aeo-weekly` — Mon/Wed/Fri at 5 AM
- Key findings: live site has broken SEO ("COMING SOON" meta desc, malformed schema, no H1s), not ranking for any non-brand query, not cited by any AI engine
- Rewrote CONTEXT.md (was 217 lines, now under 80), cleaned TODO.md with Now/Next/Backlog

## 2026-04-09 — SEO Run #7: Blog Article #5 + Blog Page Cleanup

- **bachelorette-party-austin-texas.html:** New blog article published — "Bachelorette Party in Austin, Texas — The Complete Planning Guide". Targets high-intent query "bachelorette party Austin Texas". Includes AEO block (4 direct-answer paragraphs), BlogPosting schema, full OG + Twitter Card. CTAs → contact page (private event inquiry) + accommodations. Related links → private events, accommodations, weddings.
- **blog.html:** Removed "Blog Launching Soon" placeholder block. Replaced two placeholder post cards (posts 5 & 6) with live article #5 entry (bachelorette guide). Blog grid now shows 5 live published articles.
- **sitemap.xml:** Added `/blog/bachelorette-party-austin-texas/` entry (lastmod 2026-04-09). Updated `/blog/` lastmod to 2026-04-09.

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
