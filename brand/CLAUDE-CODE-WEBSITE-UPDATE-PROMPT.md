# Rancho Moonrise Website Update — Claude Code Prompt

Copy everything below the line into Claude Code:

---

## Task: Review and update the Rancho Moonrise website (ranchomoonrise.com)

### Context — Read these files FIRST before doing anything:

**Brand direction (read all 3):**
1. `/Users/adamstyer/Documents/rancho-moonrise/brand/2026-04-08-pinterest-design-analysis.txt` — Visual design language extracted from their Pinterest boards. This is the aspirational look: vintage 60s-70s poster art, hand-drawn, warm earth tones, organic/handmade feel. NOT slick, NOT corporate.
2. `/Users/adamstyer/Documents/rancho-moonrise/brand/2026-04-08-ashley-conversation-intel.txt` — Direct notes from Ashley (co-owner). Key: wants "organic/handmade" not "slick/corporate", CMS must be simple, mobile score is 42/100, Pinterest is major creative reference, graphic designer is gone.
3. `/Users/adamstyer/Documents/rancho-moonrise/brand/2022-brand-guidelines.txt` — Official brand guidelines (logos, colors, fonts, voice).

**Current accurate data (read these to fact-check the site):**
4. `/Users/adamstyer/Documents/rancho-moonrise/deal/_SOURCE-GUIDE.txt` — Master authority file. Tells you which documents are CURRENT vs HISTORICAL. Critical for knowing what info is accurate.
5. `/Users/adamstyer/Documents/rancho-moonrise/deal/2026-04-07-rm-numbers.txt` — Latest revenue numbers (2024/2025/2026 YTD).
6. `/Users/adamstyer/Documents/rancho-moonrise/deal/2026-04-07-ranchomoonrise-items-needed-response.txt` — Current operational details.

**Event/marketing decks (for accurate service descriptions):**
7. `/Users/adamstyer/Documents/rancho-moonrise/brand/2023-11-events-deck.txt`
8. `/Users/adamstyer/Documents/rancho-moonrise/brand/2023-11-weddings-deck.txt`
9. `/Users/adamstyer/Documents/rancho-moonrise/brand/2024-01-retreats-deck.txt`
10. `/Users/adamstyer/Documents/rancho-moonrise/brand/2025-05-rancho-moonrise-events-sponsorship.txt`

### Step 1: Audit the current site

Visit https://ranchomoonrise.com and crawl every page. For each page, document:
- What content/copy is displayed
- What services, events, or offerings are listed
- Any pricing, dates, or factual claims
- The current visual design (colors, fonts, layout, imagery style)
- Mobile responsiveness issues

### Step 2: Cross-reference for inaccuracies

Compare the site content against the CURRENT sources in `_SOURCE-GUIDE.txt`. Flag anything on the site that:
- References outdated pricing, packages, or services
- Uses old revenue numbers or projections
- Lists events or offerings that no longer exist
- Has contact info, team bios, or operational details that have changed
- Contradicts the current decks (events, weddings, retreats, sponsorship)

The site was likely built using older data. Many files in the deal/ folder are marked HISTORICAL in the source guide. The site may reflect that old info. Fix it.

### Step 3: Design audit against Pinterest + brand guide

Compare the current site design against:
- The Pinterest design analysis (vintage poster art, warm earth tones, hand-drawn feel)
- The 2022 brand guidelines (official colors, fonts, logo usage)
- Ashley's preferences ("organic/handmade" not "slick/corporate")

Identify specific design gaps. The site should feel like the Pinterest boards — warm, textured, handmade, artsy Texas ranch. Not a generic Squarespace template.

### Step 4: Make updates

**Content fixes (priority 1):**
- Fix any factual inaccuracies found in Step 2
- Update service descriptions to match current decks
- Remove or update any outdated pricing/packages
- Ensure contact info and operational details are current

**Subtle design updates (priority 2):**
These should be SUBTLE — not a full redesign. Think evolution, not revolution:
- Warm up the color palette toward the brand guide colors (terracotta, olive, dusty rose, cream)
- Add paper/canvas texture to backgrounds where it makes sense
- Swap any generic sans-serif headings for warmer display fonts that match the brand guide
- Soften any hard/corporate edges — rounded corners, organic shapes, warmth
- Improve mobile responsiveness (currently scoring 42/100)
- Add subtle texture or grain overlays to hero sections
- Make sure the logo usage follows brand guidelines
- If there are stock photos that feel corporate, note them for replacement

**Do NOT:**
- Do a full redesign — subtle alignment only
- Change the site structure or navigation
- Remove any pages or sections without flagging first
- Break anything that currently works
- Add any new features Ashley didn't ask for

### Step 5: Deploy

Deploy the updated site to Vercel. Verify the deployment is live and working.
Show me a before/after summary of every change made.

### Step 6: Report

Output a summary with:
1. **Inaccuracies found** — what was wrong, what it was changed to, source for the correction
2. **Design changes made** — specific CSS/HTML changes, before vs after
3. **Mobile improvements** — what was fixed for mobile responsiveness
4. **Remaining issues** — anything that needs Ashley's input or manual attention (like replacing stock photos with actual ranch photography)
5. **Deployment URL** — live link to verify

### Important notes:
- The Rancho Moonrise website repo may need to be located first. Check `/Users/adamstyer/Documents/` for a website repo, or check the git remotes.
- "Organic/handmade" is the north star. Every change should move toward that, not away from it.
- Ashley is not technical. Any CMS or content updates need to remain simple.
- Reference the Pinterest URL (https://www.pinterest.com/Rancho_Moonrise/) if you need to visually verify the design direction.
- The brand colors from the 2022 guide are authoritative. The Pinterest analysis describes the VIBE, the brand guide has the exact HEX codes.
