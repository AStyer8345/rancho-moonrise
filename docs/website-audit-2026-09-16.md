# Rancho Moonrise website audit
September 16, 2026 · Flow, speed, photography, code, SEO and AI search

## Overall assessment
The site has a recognizable ranch identity, useful booking paths, genuine property photography, and a sound crawlable structure. It does not need a framework rebuild or a new visual identity. The best improvements are faster images, clearer first impressions, reliable content editing, and proper measurement.

The main uncertainty is business performance: a technically healthy page does not prove that organic traffic, AI referrals, or qualified inquiries are increasing. Current Search Console and conversion reports were not available for this audit.

## Before and after: live mobile Lighthouse
| Check | Before | After |
|---|---:|---:|
| Performance | 70/100 | 99/100 |
| Accessibility | 93/100 | 100/100 |
| Best practices | 100/100 | 100/100 |
| Technical SEO | 92/100 | 100/100 |
| Largest contentful paint | 5.4 seconds | 2.1 seconds |
| First contentful paint | 2.9 seconds | 1.1 seconds |

One before/after pair of browser lab runs with the same Lighthouse configuration on the live homepage; not real-user Core Web Vitals, a sitewide score, or a ranking score. Normal test variability applies. After measurement: September 16, release ae5160d, production deployment READY. Local preview scores are not compared with production because the local server does not apply production compression/caching.

## Repairs in this release
- **Broken blog assets:** fixed root-relative paths for stylesheets, scripts and images. Nested `/blog/.../` URLs previously resolved `../css` and `../js` under `/blog/`, producing 404s despite the page itself returning 200. Also made the ranch-versus-hotel comparison cards stack on narrow screens. The validator now resolves assets against their public routes and checks stylesheet links; it reproduced the original failure and passed after the repair.
- **Photography and speed:** versioned, compressed WebP derivatives; a 768px option for phones; smaller transparent navigation logo. Like-for-like retained derivatives total 9.73 MB versus 14.46 MB previously, about 33% smaller across the asset set. This is not the download size of a single page visit. Originals remain available. The new 768px homepage cabin image is 62 KB; the old 1024px opening image was 175 KB.
- **First impression:** the homepage opens on actual cabins, with distinct event and stay calls to action. The about section shows ranch grounds; the stay image shows the tent interior instead of a pillow detail. The mobile wedding hero uses an existing portrait photograph instead of heavily cropping a landscape close-up.
- **Honest image descriptions:** corrected photos mislabeled as sunset, aerial views, evening scenes, or dinner setups. This helps visitors using screen readers and improves descriptive accuracy for search.
- **Homepage events:** removed expired April/May fallback cards and stale event artwork. Without the live feed, the HTML now offers an evergreen calendar link. The live feed still shows upcoming events, and events without artwork remain visible as text cards.
- **Navigation and readability:** compact desktop navigation stops short labels wrapping; small text/buttons get targeted contrast improvements without repainting the ranch theme; larger slideshow hit areas; chat sits above the mobile action bar.
- **Motion and focus:** hero pause/play control, reduced-motion preference, pause while the tab is hidden, keyboard focus handling in the mobile menu, and accurate FAQ expanded state. Event artwork changes manually, removing competing autoplay timers.
- **Forms:** client-side duplicate-submit guard, accessible status announcements, safe text rendering of server errors, retained inputs after failure, and a phone/email alternative with JavaScript disabled. The CRM endpoint and field contracts are unchanged. Server-side idempotency and real delivery were not tested by creating live leads.
- **Code and SEO cleanup:** removed duplicate event slideshow ownership and an unused scroll variable; added a bounded CMS fetch timeout; fixed dynamic event links to use `/events/`; made the wedding link descriptive; removed the incorrect hotel `starRating` use of a guest-review score. Existing aggregate review numbers were not invented or updated.

## Visitor flow review
| Journey | Assessment | Next refinement |
|---|---|---|
| Book a stay | Clear path to accommodations and the existing Cloudbeds reservation page. | Put room differences, bathrooms, and sleeping arrangements in a compact comparison; use full-resolution room photos. |
| Plan a wedding | Tour and inquiry actions are easy to find. Existing real-wedding gallery contains 17 photos. | Review packages, capacity and response expectations with Ashley; avoid unsupported promises. |
| Private event / buyout | Dedicated landing page and inquiry intent are in place. | Show 2–3 real examples: corporate gathering, celebration, and full-ranch buyout, with verified details. |
| Public event / pool | Live calendar works; pool passes route to ResortPass. | The featured-event modal now waits 10 seconds instead of 2, but an inline featured-event strip would be less interruptive. |
| Contact | Intent buttons lead to the appropriate form or booking destination. | Check actual mailbox/CRM receipt and draft approval with Ashley during Friday’s lesson. |

## Aesthetics and photo direction
Keep the terracotta navigation, cream backgrounds, Western typography and real ranch imagery. Avoid a broad restyle: earlier project feedback explicitly favored this palette.

The visual story should be **place → accommodation or event experience → practical details → action**. Favor wide establishing shots for desktop heroes and portrait compositions for phones. Use people and real occasions for weddings/events, a full room and bathroom for accommodations, and an accurate pool overview for day passes. Several legacy filenames are misleading; do not choose an image based on its filename alone.

Remaining image work: replace genuinely low-resolution accommodation thumbnails with Ashley’s originals; confirm photo permissions and current property details; crop future uploads for both desktop and mobile. Do not use generated property photos or enlarge small thumbnails as a substitute for real originals.

## SEO and AEO: what is verified
- All 30 sitemap URLs returned HTTP 200, have one H1, and declare the matching canonical URL.
- Public pages have descriptions; the existing static validator passes local asset references, route coverage and JSON-LD syntax. Syntax validity is not a guarantee of eligibility for Google rich results.
- The site already has dedicated topic pages, internal links, FAQs and answer-first text. Those are useful foundations.
- The audit found stale static event content and inaccurate photo descriptions despite prior checklists passing. Counting schema blocks or nonempty alt attributes does not test accuracy.
- Live browser inspection and source code show blank GA4/GTM IDs. Conversion hooks currently emit locally or to an already-present analytics runtime; no configured analytics destination was verified.
- Google says normal SEO fundamentals apply to AI Overviews/AI Mode; special AI schema or an AI text file is not required. Prioritize indexable, accurate pages, useful text, good images, and matching structured data. [Google guidance](https://developers.google.com/search/docs/appearance/ai-features)

## Highest-priority follow-up
1. **Measure actual outcomes.** Connect the correct GA4 property/GTM installation and verify the existing booking, pool pass, phone, and inquiry events. Obtain Search Console access. Compare the last 28 days with the preceding 28 and review nonbrand queries, landing pages, clicks, CTR, indexing and qualified inquiries. Configure booking-domain measurement if supported by the booking setup.
2. **Check indexing in Search Console.** The safari-tents page is technically reachable. Old `site:` search observations do not establish its current index status or prove all possible causes are exhausted. Use URL Inspection and the indexing report before deciding the next action.
3. **Finish the admin handoff.** Home/accommodations load the shared CMS. Events has its own copy loader. Weddings has a live gallery loader, but its hero copy fields—and corresponding contact/FAQ/other hero fields—are not all wired to the shared copy loader. Zero active single-image-slot overrides were returned during the check. Hero/gallery tables do not imply every page uses every editor control. Ashley needs an explicit “editable here” map before relying on the admin.
4. **Unify content sources.** CMS updates can diverge from the static HTML read by non-JavaScript crawlers. Add a deliberate publication/synchronization process rather than relying on duplicate hardcoded and live text. This release removes expired homepage fallback dates but does not solve that entire architecture.
5. **Refresh trust evidence.** Confirm the current Google rating/count and the source of review quotations before updating visible copy and schema together. Some quotations have generic attribution. No fresh review count was assumed in this audit.
6. **Keep maintenance focused.** Avoid repeated schema additions that do not improve the guest experience. Preserve the existing five-file unpublished work in the original checkout; review that separate work on its own merits.

## Verification boundaries
All 30 sitemap pages were browser-checked at a 390px mobile viewport after the asset-path and comparison-grid repairs; no horizontal overflow, broken loaded images or JavaScript errors were found. Keyboard navigation and FAQ state were checked. Contact success/error behavior was tested with a local mocked endpoint, including duplicate prevention, input retention, escaping and attribution. JavaScript-disabled contact fallback was checked. No live inquiry, guest email, payment or booking was submitted. A real-user speed assessment and an authenticated analytics/CRM delivery audit remain separate follow-ups.
