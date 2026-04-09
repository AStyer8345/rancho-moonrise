# Rancho Moonrise — SEO/AEO Agent Rules
Learned rules from prior sessions. CRITICAL: read before every session.

## Rule 1: Live site is OFF LIMITS
The live site (ranchomoonrise.com) is hosted by BofillTech. DO NOT touch it, check it, or plan work against it. All SEO/AEO work targets the Vercel site (rancho-moonrise.vercel.app) in the repo at /Users/adamstyer/Documents/rancho-moonrise/site/. The Vercel site becomes the live site after DNS cutover — until then, it's prep work only.

## Rule 2: Always verify live before assuming
Never rely on MD files or prior session data for current state. Live-check GBP, search results, and review platforms before building plans or making recommendations. (Feedback from Adam, April 9 2026)

## Rule 3: Three-location file workflow
Every file created must go to: (1) working directory, (2) git repo, (3) NotebookLM. See memory file for details.

## Rule 4: Blog posts need individual URLs
Blog posts on blog.html are invisible to Google as separate content. Every new blog post must be created as its own HTML file in site/pages/ or site/blog/ with its own URL, Article schema, and links to the blog index.

## Rule 5: GBP description is currently a blog post
As of April 9 2026, the "From the owner" section on GBP contains a full article about glamping near Austin — NOT a business description. This needs Ashley's access to fix. Flag it every session until resolved.

## Rule 6: Site not on main domain yet
Until DNS cutover happens, all SEO work on the Vercel site is preparation only. Google Search Console, sitemap submission, and indexing monitoring cannot begin until the site is live on ranchomoonrise.com.

## Rule 7: Update improvement plan HTML when completing tasks
When you complete a backlog item that corresponds to a task in the improvement plan HTML (`brand/2026-04-09-rancho-moonrise-improvement-plan.html`), mark that task as DONE in the HTML using the same pattern as existing DONE tasks:
- Add `style="text-decoration: line-through; opacity: 0.5;"` to the task-title span
- Add `<span style="color:#4ECDC4; font-size: 0.85rem;">✅ DONE</span>` after the title
- Replace the task-desc with a verified note: `<strong style="color:#4ECDC4;">Completed [date]:</strong> [what was done]`
- Add `style="opacity: 0.5;"` to the task-desc paragraph
- Also update the "Last updated" line in the plan header
- Copy the updated file to `site/improvement-plan.html` so the Vercel deployment updates
- Git commit and push so the live URL refreshes
