# Rancho Moonrise — TODO
Last updated: 2026-09-04 (rancho-site-daily — **WeddingWire's `sameAs` contradiction, open since 2026-08-19, is resolved.** Excluded three times (8/19, 8/25, 8/31) for lack of independent confirmation — resolved by varying the query rather than retrying the known-403 direct fetch: `Rancho Moonrise weddingwire.com` returned `https://www.weddingwire.com/biz/rancho-moonrise/f38c5e35e5491216.html`, independently reconfirmed by a second query, cross-matched to the property's operational address. Added to `site/index.html`'s `sameAs` (14 → 15), `validate:site` passes. **This still leaves two open items from the "three never-published 8/25 quick wins" line further down: claim the WeddingWire vendor listing, and fix The Knot description — those are unchanged, not this run's to do.** **Today's assigned top-autonomous-slot item — "extend AEO measurement to a second answer engine" — was attempted and closed negative.** Tried `WebFetch` (a genuinely different mechanism than the bare-`curl` path that failed 8/17) against Bing and Google directly: both failed the mandatory brand-canary guard identically to the 8/17 bare-curl failure (Bing returned gorancho.com/Wikipedia/Merriam-Webster instead of the site; Google returned an error interstitial). Logged as **MEASUREMENT BLOCKED, not "0 citations"** per the shared runbook — this closes the "maybe a different fetch mechanism works" hypothesis for good. **Genuine second-engine AEO measurement needs a paid API key** (ChatGPT, Perplexity, or Bing Web Search API) — nothing short of that will unblock it. Extended the shared `client-ops/templates/re-verify-before-report.md` dead-paths table with this finding. **New finding, own remit: Apple Maps lists hours as "3:00 PM – 5:00 PM daily"** — re-read via `WebFetch`, cross-verifying review-monitor's 8/30 rating figures (80%, 5 ratings) exactly along the way. A 2-hour daily window is almost certainly wrong for an events venue and risks Siri/Spotlight telling people the property is closed. Flagged below as a new NEEDS ADAM item (Apple Business Connect fix, ~2 min) — not fixable from this repo. Everything else re-verified unchanged: site health, `/safari-tents-near-austin/` still uncrawled (still closed on the on-site side per the standing 8/31 instruction), and the 5-file NEEDS OWNER uncommitted set (untouched, still not this task's). Gate: 4 claims — 1 resolved, 3 still_true. Run-log: `run-logs/2026-09-04-seo.md`. Prior header ↓.)

Prior: 2026-08-31 (rancho-site-daily — **The #1 item on this list is closed: the 8/25 run is committed, pushed and verified live.** `rancho-review-monitor` (8/30) and `rancho-competitive-weekly` (8/31) both flagged that this task's 8/25 run wrote its work to disk, reported "shipped", and never committed; the ask was that the next site-daily run land it. Done. **Because the failure being fixed is a run trusting the file it wrote, none of the verification came from the working tree:** `git ls-remote origin refs/heads/main` matches local HEAD `818bbed`, `git show origin/main:site/index.html` returns **14** `sameAs` URLs in the pushed blob, and a live `curl` of ranchomoonrise.com returns **14** including the Google Business Profile CID and Apple Maps nodes. **One correction to the carried claim, and it matters: only three of the four 8/25 files were still undeployed.** The fourth — `improvement-plan.html`, carrying the s2 banned-copy template fix — had already reached `origin/main` inside competitive's own `6f306b0` commit, re-verified in HEAD before writing this. **So the piece everyone was most worried about — the template that would have had the next agent publish banned copy in the answer-first position — was already live before this run started.** **The tree was mixed and separating it was the real work:** 11 files were modified but the 8/25 run-log names exactly four. Committed only this task's workstream, and **recovered 3 orphaned SEO edits that belong to no logged run at all** (speakable schema ×2, *"Manor"* voice-compliance ×2) — **which means this is at least the second uncommitted site-daily session, not the first.** **Deliberately left 5 files uncommitted** from two other workstreams — including a **44-line deletion in `weddings.html`** that strips the guest-accommodations section and three real photos from a bride-critical page, flagged below rather than committed or reverted. **Also killed a four-month-stale defect in the instruction layer:** `CLAUDE.md:25` **and** `AGENTS.md:25` both told every arriving agent *"Current #1 blocker: DNS cutover — every SEO workstream is dead until this happens"*, resolved **2026-04-30**; re-verified live before editing (`server: Vercel`, 9/9 routes 200). `AGENTS.md` was **untracked**, so the Codex-side copy was invisible to git entirely. **And `/safari-tents-near-austin/` is now closed on the on-site side** — see the narrowed GSC item below: it is not orphaned, not missing from the sitemap, not broken, not mis-canonicalised, and has **the same 5 public inbound links as two peers Google indexed and ranked**. Nothing on-site can fix it; Adam's 2-minute URL-Inspection is the only lever left. Gate: 9 claims — 2 resolved, 6 still_true, 1 partial. Run-log: `run-logs/2026-08-31-seo.md`. Prior header ↓.)

Prior: 2026-08-31 (rancho-competitive-weekly — **The 8/25 competitive run was written and never published, and this is the THIRD instance of the same failure across three tasks.** `rancho-review-monitor` found the first two on 8/30 and called it correctly: *"the second instance across two different tasks, which makes it a pattern rather than an incident."* It is now three. The 8/25 competitive run rewrote `site/competitive-intelligence.md`, regenerated `site/competitive-intelligence.html`, and **never inserted its Intel card into either improvement-plan file** — the newest card on the dashboard was **August 17** while the markdown had been rewritten twice underneath it. Its own headline *"Shipped this run"* was never true in production. **Unlike review-monitor, this task owns the affected files, so it fixed them rather than only flagging them:** recovered 8/25 card + new 8/31 card, **byte-identical in both files** (diffed, 19,214 bytes), markdown + HTML regenerated together, committed and pushed. Also repaired a **pre-existing mirror drift** found while verifying — client-ops was missing the **April 20** card; both files now carry **15 identical cards in identical order**. **`rancho-site-daily`'s 8/25 tree is still uncommitted and still needs its own run to land it** — deliberately not swept up here, same reasoning review-monitor gave. **Competitor headline: Serana withdrew its published price.** The claim carried since May — *"the only tracked competitor publishing a flat full-property buyout price ($1,000/night weekday)"* — is dead; the page now reads *"a flat package rate based on the size of your group and the length of your stay"*, which is Rancho's own model. Confirmed by **varying the query, not retrying**: an independent search returned a repositioning to a **21+ boutique wellness retreat**, 53 acres, **9 cabins / up to 20 guests**, second domain `seranaretreats.com`; it also **dropped off the corporate head term** where it held ~#4. **This removes the entire evidence base for the "publish flat buyout pricing" recommendation below — that item is now retired, not carried.** **ResortPass closed (403/Cloudflare)** — the same block review-monitor hit 8/30, now hitting this task too. Rancho `$20/$15/4.8★/53` and Lucky Arrow `$35/4.6★/201` are **HELD, not re-verified, not recorded as changed**; this **freezes the 43% day-pass underpricing finding** rather than refuting it. **4 verification blockers now** (Knot, Hotels.com, WeddingWire, ResortPass), all off-domain listings carrying Rancho's own copy/price/reviews — **two independent tasks have now converged on one rendering-scraper purchase.** **Rankings:** wedding cluster **reproduced exactly** six days apart (blog ~#3, `/weddings/` ~#4, home ~#6) — new measurement promoted to confirmed; corporate head term ▲+1; broad glamping variant ▼ 3 owned URLs → 1, **deliberately not escalated** (one query, one read, and that query's written answer still opens with Rancho). Knot banned copy **3rd read**; **first clean brand snippet ever** — watched, not claimed. 4 new surfaces (Pop & Drop TX, Rowan & Birch, Well City Guide, Wheree) + a live **TripAdvisor listing URL** (`d33307272`) written down for the first time. Gate: 16 claims — **2 resolved**, 9 still_true, 1 changed, 1 WATCH, 1 confirmed-3rd, **2 blocked-and-held**. Run-log: `run-logs/2026-08-31-competitive.md`. Prior header ↓.)

Prior: 2026-08-30 (rancho-review-monitor — **RUN_072: no new reviews anywhere. The last working direct-scrape path on ANY monitored platform closed, and a new readable surface opened the same run.** **(1) ResortPass — the sole survivor — returned HTTP 403 behind a Cloudflare captcha**, on WebFetch *and* on a desktop-UA `curl`, so site-level bot detection rather than a fetcher quirk. RUN_071 had recorded it `direct_fetch_works: true`, *"a WORKING PATH, re-proven"*. Checked against `review-aggregate.json` rather than asserted: google/airbnb/hotels-com (04-17), theknot (05-23), hipcamp (06-03), tripadvisor (07-18), facebook (08-19), expedia (08-21) were already blocked. **Working direct paths are now ZERO and every number this task holds rests on a search snippet** — the rendering-scraper decision is now **one purchase against six platforms**, not four. `53 @ 4.8★` **held entirely unchanged** (an access failure is not a data change — the discipline RUN_071 vindicated); logged as a **WATCH at 1 of 3**, deliberately below threshold. Third distinct ResortPass failure mode in four runs: extraction → clean → access. **(2) Offsetting: Apple Maps renders review aggregates** — first read ever, on the node site-daily declared 8/25 as *"the entity behind Siri/Spotlight, an answer surface with zero measurement here"*. Two reads, two URL forms, identical: **80% overall (5 ratings)**. **Not promoted, no held value moved** — the Yelp attribution is **by icon, not stated text**, and Yelp's own domain-restricted result the same run reads **1 review**; five ratings and one review cannot both describe the same pool, and the weaker link is the icon. The 80% is **not** recorded as a decline (80% against three 100% subcategories is internally odd — the Travelers' Choice shape). **(3) The Googlebot-UA lead is tried and CLOSED** — a genuinely untried path on the oldest blocker here, not a retry: HTTP 200, title renders, **zero** rating/count tokens in 4,160 bytes. Entity identity only, never review data. Google authoritative **130 now 103 days stale**. **(4) Expedia 429 a 4th time → blocker resolution path (d) ("429 is transient, may self-heal") DISCONFIRMED** on the most generous terms it will get — a 9-day gap with zero requests from this client; no Expedia search issued, deliberately, because count-6 is a **rule** question already with Adam. **Held:** Facebook 6/86% **5th consecutive**, text still unreadable → **no draft, 5th run, deliberate**; Hipcamp both voice violations **6th consecutive**; Haylee L. 1★ unreplied **day 185 / 26.4 wks**; 2 drafts unposted **day 103**; TripAdvisor 0/unclaimed; Airbnb 72nd no-attempt. **Rejected:** the TripAdvisor bleed set recurred ("120 acre", "15 minutes from downtown") **3rd sighting**, plus a `$35–$70` band that arrived inside it and is **not** recorded against the held `$45–$154`. **Also killed a stale flag that was not this task's:** the top-of-list "one Google Business Profile URL (~30 seconds)" ask had already been answered by `rancho-site-daily` on 8/25 and sat above everything else for 11 days — re-confirmed resolved live today and struck. Gate: 19 claims — 7 still_true, **1 REVERSED**, 2 held, 4 blocked/stale, 1 closed_lead, 1 not_requeried, 1 rejected, 1 no_attempt, 1 new, **0 resolved**. Status **urgent** (carried). Run-log: `run-logs/2026-08-30-review-monitor.md`. Prior header ↓.)

Prior: 2026-08-21 (rancho-review-monitor — **RUN_071: no new reviews anywhere, and the headline is a RESOLUTION rather than a discovery.** **(1) The Re-Verify Gate completed its first full save-and-recover cycle on this property.** RUN_070's ResortPass fetch returned HTTP 200 with products and star class rendering normally but **no rating and no count surviving**; it called that an *extraction failure* and held `53 @ 4.8★` `STALE` rather than recording a decline. **Today the same URL returned 4.8★ / 53 / $15 / $20 — identical.** That refusal is now vindicated on the record, and it mattered: ResortPass carries this year's *only* genuine rating decline (4.9→4.8, RUN_068), so a second consecutive drop would have **fit the story perfectly** — which is exactly what would have made it dangerous. Value now rests on four independent reads; `stale` cleared, failure count 1→0. **(2) Two opposite things happened on Expedia in one run.** Direct fetch hit **HTTP 429 a 3rd consecutive time → new blocker `expedia-direct-fetch`**; simultaneously **the count of 6 earned its 3rd independent, 3rd-phrasing, domain-restricted confirmation** — *exactly* the precondition RUN_070 set for promoting it. **The precondition is met and the promotion is withheld**, because the rule demands a direct scrape and the direct scrape just became a blocker: *"pending a direct scrape"* now means *"pending forever."* That is a **rule** question, not a data question — escalated, not taken unilaterally. **(3) Refused:** TripAdvisor's *"Travelers' Choice award … top 10% of properties"* string **resurfaced (2nd sighting)** and was rejected as **self-refuting** — the award is defined by consistently great reviews and this listing has **zero** and is unclaimed; now logged as a *recurring* artifact so future runs reject on sight, because flattering well-formed news about your own property is the finding nobody's instinct challenges. The **OTA split was NOT re-confirmed and its counter deliberately NOT incremented** (a listing being live is not a rating being read); the **Google snippet query was deliberately not run** (it echoes our own `reviewCount:"125"`). **Facebook 6/86% 4th consecutive confirmation** (1st domain-restricted), text still unreadable → **no draft, 4th run, deliberate**. **Hipcamp's two voice violations 5th consecutive.** Haylee L. 1★ unreplied **day 176**; 2 drafts unposted **day 94**; Google's authoritative count **94 days stale**. Gate: 19 claims — 12 still_true, **1 resolved**, 1 not-reconfirmed, 1 rejected-artifact, 2 unknown/blocked, 1 verification-failure, 1 no-attempt. Status **urgent** (carried). Run-log: `run-logs/2026-08-21-review-monitor.md`. Prior header ↓.)

Prior: 2026-08-19 (rancho-review-monitor — **RUN_070: nothing arrived, nothing moved, and all three findings are about the measurement apparatus rather than the reviews.** **(1) Expedia carries 6 reviews** — a count this task has recorded as `null` since the 2026-04-09 baseline. Two independent domain-restricted queries agree, both binding it to Expedia-specific descriptors for entity `h89565924` at 8.0/10, which re-confirms the 8.0 anchor at the same time. Recorded as search-confirmed, **not** promoted — direct fetch returned **HTTP 429, 2nd consecutive run**. Coincidence flagged not smoothed: Facebook also reads exactly 6, though neither result set contained facebook.com. **The exposure beats the number** — six public reviews on a surface whose reply coverage has never been checked, invisible until now because the count was null. **(2) The Google snippet path was caught quoting our own site.** This run's snippet said *"4.9-star rating across 125+ Google reviews"* — and **125 is Rancho's own `reviewCount` at `site/index.html:90`**. Observed values 175/130/126/125+; already "not a count proxy in either direction", now additionally *partly an echo of ourselves*. Live-authoritative **130 is 92 days stale** and is the only real Google number this task holds. **(3) RUN_069 (8/18) scraped every platform and wrote nothing** — no session-log heading, no run-log, aggregate still read run 68, **raw notes untracked in git**. Recovered and folded in; nothing carried as live state, every claim re-fetched. **Facebook 6/86% HELD, 3rd consecutive confirmation — the movement is real and has settled;** text unobtainable a 3rd run → **blocker `facebook-review-text` opened**. Still no draft, and that is correct rather than a gap. **Refused:** ResortPass's rating block failed to render on an HTTP-200 page — logged as an **extraction failure, not a drop**, held 53 @ 4.8★ `STALE:2026-08-18`; a blended TripAdvisor answer (*120 acres / Lonesome Dove / $116–119*) rejected as bleed from five other properties; a PissedConsumer 1.3/69 result rejected as the wrong entity. **Hipcamp's "34-acre" + "bar" violations re-confirmed 4th run on a domain-restricted query** — cleanest attribution yet; the drift is Hipcamp's alone. Haylee L. 1★ unreplied **day 174**; 2 drafts unposted **day 92**. Gate: 18 claims — 13 still_true, 2 new_signal, 1 unknown, 4 verification-failure, **0 resolved**. Status **urgent** (carried). Run-log: `run-logs/2026-08-19-review-monitor.md`. Prior header ↓.)

Prior: 2026-08-19 (rancho-site-daily — **entity graph consolidated (`sameAs` 4 → 11); banned third-party copy escalated STALE → CONFIRMED and re-scoped off Hotels.com; a third on-page lever disconfirmed.** The site had exactly **one** `sameAs` array sitewide — four social profiles, **zero** review/booking/OTA profiles — so ResortPass (53 reviews), Hipcamp, The Knot, TripAdvisor, Yelp and Hotels.com all sat outside the declared entity graph. Added 7 independently-verified URLs; **excluded 5** that could not be confirmed today (Expedia, WeddingWire, Airbnb, Roadtrippers, and **Google Business Profile — no canonical URL exists in the repo at all**, now the highest-value one-line ask). Said plainly: **`sameAs` is not a ranking factor and will not move a position** — it is an AEO/knowledge-graph lever. **`hotels-com-banned-copy`, unverifiable by direct fetch 4 consecutive runs, is now CONFIRMED live on The Knot** — *"20 luxury cabins…up to 50 guests"*, three violations in one sentence, contradicting the site's own `maximumAttendeeCapacity: 200` **and** The Knot's own "300+". Site itself re-verified **clean** (0 "luxury"/"Hill Country" across 30 pages) — the violation is entirely off-domain. **Exact-match title/H1 tested and disconfirmed, backwards:** `wedding-venues-near-austin.html` misses the keyword sitting in its own title and simultaneously holds the **best position in the whole set (4/8)** on a keyword absent from it. **Three levers now measured dry** (links, words+schema, titles) — **ranking tracks SERP fragmentation, not on-page quality**, which promotes **Glamping Hub (free, 15 min, ~18 weeks untouched)** and the **Hipcamp curation gap** above every remaining on-site edit. 2 files, +7/-1, `validate:site` passes, no visible change. Gate: 8 claims — 6 still_true, 1 escalated, 1 fixed, 0 resolved. Run-log: `run-logs/2026-08-19-seo.md`. Prior header ↓.)

Prior: 2026-08-18 (rancho-site-daily — **`rancho-seo-s7` MEASURED and RESOLVED: 4/10 keywords ranking, 4/10 answer-engine citations.** Yesterday's "unmeasurable from this client" verdict is **overturned** — bare `curl` is bot-detected, the harness `WebSearch` tool is not. Brand canary passed before any absence was recorded. CONTEXT had already flagged the contradiction (`rancho-competitive-weekly` ran 8 successful SERP queries the same morning) and asked for reconciliation before buying a key — **reconciled: one variable, and it wasn't the credential.** Ranking: `/weddings/` (**first core landing page ever recorded ranking**), `/blog/corporate-retreat-near-austin/`, `/blog/bachelorette-party-austin-texas/` (new), `/blog/wedding-venues-near-austin/` (new, best position 4/8). **3 of 4 are blog URLs — pipeline paused since 4/23.** **Retired rather than performed** the queued 4→5 internal-link pass: correlation is *inverse* (best performers have the **fewest** inbound links; most-linked page doesn't rank), word count + schema uniform across both groups — on-page levers **measured** exhausted. **Fixed:** AEO entity-authority template said **"34-acre"** vs VOICE-GUIDE's 36 and 183/183 site instances → corrected. Site acreage drift **auto-resolved** (belongs to Hipcamp, not the site). Cross-repo: shared re-verify runbook now names the working SERP path fleet-wide. **API-key ask DOWNGRADED to nice-to-have — nothing waits on it.** No site HTML changed. Gate: 8 claims, 4 resolved. Run-log: `run-logs/2026-08-18-seo.md`. Prior header ↓.)

Prior: 2026-08-17 (rancho-site-daily — ⚠️ **conclusion overturned 2026-08-18.**

Prior: 2026-08-16 (rancho-site-daily — **schema workstream closed at 100%; `rancho-seo-s4` RESOLVED.** 23-day coverage gap (no run 7/24→8/16; only auth-blocked notebooklm-sync commits). **The entire pre-scoped next-slot queue was already shipped** — CONTEXT.md's #1 (`videos.html` no JSON-LD) and #2 (`accessibility.html`/`policies.html` no WebPage/speakable) were closed by commits `089439f` (7/23) and `531d7a5` (7/24) that landed after the last CONTEXT rewrite; the re-verify gate caught this before duplicate work. Sitewide re-audit across 29 public pages: **0 invalid JSON-LD, 0 pages without speakable**; sitemap↔routes↔page-files complete in all three directions. **Shipped:** internal-linking floor restoration — `ranch-wedding-texas.html` sat at 3 inbound vs a floor of 4; verified against HEAD first so it's reported as a long-standing gap, **not a regression**. One `<li>` added in `bachelorette-party-austin-texas.html` (host chosen for link equity, 8 inbound, and existing wedding adjacency); anchor variance across the other 3 inbound links deliberately preserved. **Cluster floor now uniform 4 across all 17 posts.** validate:site passes; sitemap well-formed. New NEEDS ADAM: dead YouTube video on `/videos/` day 24. Run-log: `run-logs/2026-08-16-seo.md`. Prior header ↓.)

Prior: 2026-07-22 (rancho-site-daily — **cruise-control streak BROKEN at 39; first shipped edit since 5/26.** Pause gate was stale: GOALS.md (mtime 2026-07-20 11:19) narrowed the Rancho pause to ***outreach only*** and marks **site/content work RESUMED 2026-07-15** — the 7/17 + 7/18 runs idled through an unblocked workstream. Shipped `WebPage`/`SpeakableSpecification` + `FAQPage` on `/blog/weekend-getaways-near-austin/` — the only blog-cluster page rendering a full visible `.aeo-block` Quick-Answers section (4 Q&As) with no schema exposing it. FAQ text extracted from the DOM and asserted verbatim, never authored. 2 files, +58/-2, schema-only, zero copy changes. Cluster 16/17 → 17/17 on both types; `npm run validate:site` passes; 0 invalid JSON-LD across all 30 public pages. Re-Verify Gate live 7/7 still_true, **3 resolved**: NEEDS ADAM #0 (tasks-vs-pause-list) CLOSED after 56 days by the GOALS.md update; AggregateRating-on-BlogPosting **RETIRED** (self-serving review schema earns no SERP stars); `rancho-seo-s4` → PROGRESS 90%. CONTEXT.md trimmed 251 → 204 lines (collapsed 20 duplicate site-daily cruise-control entries + 9 stacked headers; review-monitor/competitive-weekly entries left alone — not this task's to prune). New #1 next slot: **`videos.html` carries no JSON-LD at all** — VideoObject is one of the few types still earning a real SERP rich result. Coverage gap: no site-daily run-log for 7/19–7/21; task didn't fire 3 days. Run-log: `run-logs/2026-07-22-seo.md`.)

## 🔥 NEEDS ADAM (highest leverage this week)

### NEEDS ADAM — Apple Maps hours are almost certainly wrong (~2 min) — added 2026-09-04 by `rancho-site-daily`

Live-verified via `maps.apple.com/place?place-id=IECFC57C438E79EC4` (`WebFetch`): listed hours read **"3:00 PM – 5:00 PM daily."** A 2-hour daily window reads like a stale or default value, not real hours for an events and glamping venue. This is the entity behind **Siri and Spotlight** — if either answers a "when is Rancho Moonrise open" or "is Rancho Moonrise open now" question from this data, it will tell people the property is closed almost all day, every day. This task has no Apple Business Connect access to fix it.

**Fix:** open Apple Business Connect (business.apple.com) → correct the listed hours, or mark the listing "by appointment / event-based" if that's a better fit than a fixed daily window.

### ~~NEEDS ADAM — `rancho-site-daily`'s 2026-08-25 run reported "shipped" and never committed~~ → ✅ **RESOLVED 2026-08-31 by `rancho-site-daily`. Committed, pushed, and verified live. Nothing is needed from Adam. Do not re-surface.**

> **Landed this run.** Commits `768de7a` (the 8/25 files), `d27ee70` (3 orphaned SEO edits from an *earlier* unrecorded session), `818bbed` (instruction-layer fix). **Verified at the destination, not from the working tree** — which is the whole point, since the failure being fixed is a run trusting the file it wrote:
>
> - `git ls-remote origin refs/heads/main` → `818bbed`, matching local HEAD
> - `git show origin/main:site/index.html` → **14** `sameAs` URLs **in the pushed blob**
> - `curl -s https://ranchomoonrise.com/` → **14** `sameAs` URLs **live**, including the GBP CID and Apple Maps nodes
>
> **Correction to the claim below, on the record:** it stated that *none* of 8/25 was deployed. Only **three of the four** files were still undeployed. The fourth — `site/improvement-plan.html`, carrying the `rancho-seo-s2` banned-copy template fix — had already reached `origin/main` **inside competitive-weekly's own `6f306b0` commit**, verified in `HEAD` before this run wrote anything. **The item everyone was most worried about — "the next agent to pick up s2 would publish banned copy in the answer-first position" — was therefore already live and already safe.** The claim was right about the pattern and wrong about the blast radius; recorded rather than quietly dropped, per the standing stale-flag rule.
>
> **New finding this run, and it widens the pattern rather than closing it:** three of the modified files (`blog.html`, `videos.html`, `wedding-venues-near-austin.html` — speakable schema and *"Manor"* voice-compliance fixes) are **not in the 8/25 run-log at all**, which enumerates exactly four files. They are orphans from an **earlier** site-daily session that also never committed. **So this task has now shipped-from-disk at least twice, and the three-instances-in-six-days count is a floor, not a ceiling.** All three were recovered and committed.

### NEEDS OWNER (not site-daily's) — 5 files still uncommitted, one of them a 44-line deletion on a bride-critical page — flagged 2026-08-31 by `rancho-site-daily`

While separating the mixed tree, five modified files were identified as belonging to **other workstreams** and deliberately left alone — same reasoning review-monitor and competitive-weekly each gave for leaving site-daily's files alone.

**The one that needs a human look:**

- **`site/pages/weddings.html` — a 44-line deletion** removing the entire *"Guests Can Stay on the Ranch"* accommodations section, including three real photos (`accommodation-cabin`, `accommodation-family-safari`, `accommodation-premium-safari`) and their descriptions. **`weddings.html` is bride-critical and currently ranks ~#4 on the wedding cluster.** Not committed and not reverted — this task cannot tell whether the removal is intentional. If it is, land it; if it is a stray edit, `git checkout site/pages/weddings.html` restores it.

**The other four, lower stakes:**

- `site/pages/contact.html` + `api/inquiry.js` — a required "Total Event Budget" select on the event form, plus its `budget → budget_range` field alias for the CRM webhook. Looks complete and coherent; just needs landing.
- `site/js/main.js` (+58) — injects a **Flodesk** newsletter embed above every footer sitewide (form ID `69fc00a63d1dc8adaf8fce44`). This is a **third-party script on every page**; it should get an explicit yes before it goes live, not arrive as a side effect of someone landing a tree.
- `site/css/styles.css` (+114) — wedding-gallery grid sizing plus a blog template stylesheet (`.blog-post-body`, `.aeo-block`, `.blog-related`).

**Latent, unrelated to the above:** `api/inquiry.js` **contains a NUL byte, present in `HEAD` as well as the working copy** — so pre-existing, not introduced by the uncommitted edit. Git therefore classifies the file as binary and renders its diff as `Bin 6182 → 6214 bytes`, hiding every future change to it from review. Worth stripping.

<details><summary>superseded 2026-08-31 wording (the original flag, kept for the record)</summary>

### NEEDS ADAM — `rancho-site-daily`'s 2026-08-25 run reported "shipped" and never committed. None of it is deployed. — found 2026-08-30 by `rancho-review-monitor`, **widened 2026-08-31 by `rancho-competitive-weekly`: this is instance THREE, and the competitive half is now fixed**

> **Update 2026-08-31.** `rancho-competitive-weekly` checked its own 8/25 outputs at the git level and found the identical failure: rewritten `site/competitive-intelligence.md`, regenerated `site/competitive-intelligence.html`, and an Intel card that **was never inserted into either improvement-plan file at all**. The newest card on both dashboards was **August 17**. That run's own headline "Shipped this run" was never true in production either.
>
> Review-monitor called it on 8/30 as *"the second instance across two different tasks, which makes it a pattern rather than an incident."* **It is now three instances across three tasks in six days, and the correct read is that "shipped" is being decided from the file on disk instead of from the commit.** `memory/feedback_verify_irreversible_at_destination.md` already names the remedy: verify at the destination, not by proxy signal. For a repo task the destination is `origin/main`, not the working tree.
>
> **The competitive half is fixed** — cards recovered and inserted byte-identically in both files, markdown and HTML regenerated together, all committed and pushed. **`rancho-site-daily`'s tree is deliberately still untouched**, for the same reason review-monitor gave: committing another task's half-finished 13-file diff would produce an incoherent commit and could pull files out from under a session still holding them. The ask below stands unchanged for site-daily.

**Not a review item, and not this task's workstream — surfaced because it is a false "shipped" claim sitting in `CONTEXT.md` and because the next agent to touch these files will collide with it.**

`CONTEXT.md`'s current header states `sameAs` **11 → 14** and describes a real defect fixed at `site/improvement-plan.html:1076`. Verified this run at the git level:

- `git show HEAD:site/index.html` → **11** `sameAs` URLs
- working tree `site/index.html` → **14** `sameAs` URLs

**The edits exist on disk and only on disk.** `site/index.html`, `site/improvement-plan.html`, `.gitignore`, `api/inquiry.js`, `site/js/main.js`, `site/css/styles.css`, the sitemap and six page files are all modified-uncommitted, and `run-logs/2026-08-25-seo.md` is untracked. **Nothing from 8/25 has been pushed, so nothing has deployed** — the Google Business Profile and Apple Maps entity nodes that run derived are not live, and the banned-copy fix in the `rancho-seo-s2-h2-summaries` card is not live either. That last one matters most: the run's own write-up says the next agent to pick up s2 would otherwise publish banned copy in the answer-first position, and that fix is still sitting uncommitted.

**Same failure shape as RUN_069 of this task** (scraped every platform, died before writing, raw notes untracked) — recovered then by the next run. This is the second instance across two different tasks, which makes it a pattern rather than an incident.

**Deliberately not fixed here.** Committing another task's half-finished tree would produce an incoherent commit and would take its files out from under a session that may still be holding them. `rancho-review-monitor` committed **only its own files** this run and left all thirteen of site-daily's modified files untouched.

**The ask:** let the next `rancho-site-daily` run commit and push its own 8/25 work — or have it re-verify and redo it. Until then, treat every "shipped 8/25" claim in `CONTEXT.md` as **written, not deployed**.

</details>

### ~~NEEDS ADAM — one Google Business Profile URL (~30 seconds)~~ → ✅ **RESOLVED 2026-08-25 by `rancho-site-daily`, independently re-confirmed 2026-08-30 by `rancho-review-monitor`. Nothing is needed from Adam. Do not re-surface.**

> **This never was an Adam item.** `rancho-site-daily` derived the canonical URL on 2026-08-25 from the `fid` already sitting in `memory/reference_rancho_gbp.md` — that fid **is** the CID — and shipped it into `sameAs` (11 → 14). **Re-confirmed live today, independently, by this task:** `curl` with a Googlebot UA against `https://www.google.com/maps?cid=10788924849497903065` returns HTTP 200 and `<title>Rancho Moonrise - Google Maps</title>`. The ask below sat at the top of Adam's list for **11 days after it was already answered** — logged here per the standing stale-flag rule rather than quietly deleted.
>
> **Carry-over that is still real:** the URL confirms *entity identity only*. It does **not** yield a review count — see the Google-count item below, where that path is now recorded as a closed lead.

<details><summary>superseded 2026-08-19 wording</summary>

Today the homepage entity node went from **4 `sameAs` URLs to 11** — ResortPass, Hipcamp, The Knot, TripAdvisor, Yelp, Hotels.com and YouTube are now declared as the same entity as ranchomoonrise.com, so an answer engine reconciling "what is Rancho Moonrise" treats the owned domain as the hub rather than one peer among many.

**The largest review pool on the property is the one I could not add.** Google — ~130 reviews at 4.9★ — is missing, because **no canonical Google Business Profile URL exists anywhere in this repo.** Every Google link in here is either a maps *search* query or an embed iframe; neither is a stable entity URL.

**The ask:** open the GBP dashboard → the profile's "Share" / short link → paste it here. It looks like `https://g.page/…` or `https://maps.app.goo.gl/…` or a `maps/place/…/?…place_id=ChIJ…` form. Any of those works; a search URL does not. I'll add it on the next run.

**Also unresolved, lower value, same mechanism:** **Expedia** (`h89565924`) and **WeddingWire** were both excluded because they could not be independently confirmed today — Expedia returned 429 and a search pass surfaced an unrelated "Manor Condominium Resort" page instead; WeddingWire has a URL in this repo while the 2026-06-18 audit in this same file says the listing doesn't exist. **The repo contradicts itself on WeddingWire** — worth 60 seconds to settle either way.

**Honest framing:** `sameAs` is not a ranking factor. It will not move a position. It is an entity/answer-engine signal, and it matters here specifically because third-party listings are currently out-describing the site (see next item).

</details>

### NEEDS ADAM — the banned copy is confirmed, spreading, and it is The Knot as well as Hotels.com — added 2026-08-19 by `rancho-site-daily`

This claim has ridden CONTEXT.md as `STALE:2026-06-29` and was **unverifiable by direct fetch four consecutive runs**. It is now confirmed — and it was scoped to the wrong platform.

The sentence, surfaced verbatim across two independent queries today and attributed to **The Knot** listing:

> *"Rancho Moonrise contains 20 luxury cabins and safari tents for up to 50 guests."*

**Three `VOICE-GUIDE.md` violations in one sentence:**
1. **"luxury"** — banned word
2. **"20 … cabins and safari tents"** — banned specific unit count
3. **"up to 50 guests"** — contradicts the site's own `maximumAttendeeCapacity: 200`, **and** contradicts The Knot's own page, which elsewhere claims **300+**

**The site itself is clean** — I re-verified 0 matches for "luxury" and "Hill Country" across `index.html` and all 29 pages. This is entirely a third-party listing problem, so there is nothing I can fix in the repo. It reads like one syndicated venue description propagating across platforms, which means **fixing it at the source may correct several listings at once.**

**Why it matters more than a copy nit:** the 8/18 baseline caught an answer engine reading this sentence back as Rancho's own description. The brand is currently being described to AI search by copy the brand bans, with a guest capacity 4× too low on a venue whose whole pitch is 200-guest events.

**Fix:** log into The Knot vendor dashboard → edit the venue description. Then check Hotels.com (`ho2867109568`) for the same text. ~15 minutes for both.

### NEEDS ADAM — the blog pause is now measurably expensive, and Ashley has never seen the number — added 2026-08-18 by `rancho-site-daily`

**Rancho ranks on 4 of its 10 target keywords. 3 of those 4 rankings are blog posts. The blog pipeline has been paused since 2026-04-23.**

| Keyword | Ranking URL | Position in set |
|---|---|---|
| overnight event venue Austin | `/blog/wedding-venues-near-austin/` | **4 / 8** — best in the whole set |
| bachelorette party Austin ranch | `/blog/bachelorette-party-austin-texas/` | 5 / 9 |
| corporate retreat venue Austin TX | `/blog/corporate-retreat-near-austin/` | 8 / 8 |
| wedding venue Austin TX ranch | `/weddings/` — the one landing page | 9 / 9 |

The two blog URLs also hold **better positions** than either the landing page or the corporate blog post. And the same 4 keywords are the only ones where an answer engine names Rancho at all.

**This is not an argument to unpause.** The pause was Ashley's call on 2026-04-23 and there may be good operational reasons for it — she is running events, laundry, design, inquiries and two babies, and writing is real work. **It is an argument that the decision should be re-made with the number visible**, because when it was made nobody knew the blog was the only thing on this property that ranks.

**The ask:** put the 4/10 baseline in front of Ashley and ask whether the pause still reflects what she wants. If the answer is "yes, no bandwidth," that is a fine answer — but then the honest conclusion is that organic growth is capped, and the lever moves to GBP and the OTA listings instead.

**Full data:** `tasks/seo-aeo/serp-baseline-2026-08-18.md`

### NEEDS ADAM — GSC is down to ONE url (~2 min) — narrowed 2026-08-18

`/safari-tents-near-austin/` only, now **~114 days** uncrawled. URL Inspection → Request Indexing on that one URL. **Do not re-submit the sitemap.**

`/corporate-retreats/` is **done** — indexed and ranking, confirmed independently by two tasks (`rancho-competitive-weekly` 8/17, `rancho-site-daily` 8/18). It rode this list for 8 consecutive reports; it is off now.

### ~~NEEDS ADAM — search API key (Priority 1)~~ → DOWNGRADED 2026-08-18, do not buy on the old framing

`rancho-seo-s7` is **baselined without a key**, and SERP verification works fleet-wide **without one** — the harness `WebSearch` tool is the working path; only bare `curl` is bot-detected. A Google Programmable Search Engine key (free, 100 q/day) is still worth having for *certified absolute ranks* and *unattended script runs*. **Nothing is waiting on it.**

### NEEDS ADAM — Expedia: 6 reviews, reply coverage never checked, and a promotion rule that is now stuck (~30 sec) — added 2026-08-19 by `rancho-review-monitor`, **escalated 2026-08-21, re-confirmed 2026-08-30**

> **RUN_072 — the "it might fix itself" option is now disconfirmed.** Direct fetch returned **HTTP 429 a 4th consecutive time**, and it got the most generous test it will ever get: the retry came after a **9-day gap in which this client sent Expedia zero requests**. A 429 that survives nine days of silence is not a transient throttle being re-tripped by our own traffic, so blocker resolution path (d) should not be counted on. **No Expedia search query was issued this run, deliberately** — the count-6 promotion is a **rule** question, not a data question, and a 4th snippet confirmation cannot move a rule. The ask below is unchanged and still the fastest way to settle it.

**Expedia entity `h89565924` carries 6 reviews at 8.0/10. This task has recorded that count as `null` on every single run since the 2026-04-09 baseline.**

Two independent domain-restricted queries agree, both binding the count to Expedia-specific descriptors — *"a 2.5-star property in Manor with an 8.0 out of 10 rating ('Very Good') and has 6 verified reviews"*. The 8.0 anchor is re-confirmed at the same time, unchanged since April.

**The number is not the point. The exposure is.** Six public reviews sit on a surface whose reply coverage has never been checked once — and it was invisible until now *precisely because the count read null*. That is the same shape as the ResortPass discovery two runs ago: a real review pool, accumulating outside anything this monitor can enumerate.

**One question, answerable in the Expedia Partner Central extranet:** are any of those 6 unreplied? It is recorded as `null`, not zero, because there is no way to answer it from outside.

**⚠️ UPDATED 2026-08-21 (RUN_071) — this item now needs a DECISION from you, not just a lookup.**

**The third confirmation landed.** A third independent query, third distinct phrasing, restricted to `expedia.com` alone: *"Rancho Moonrise has a rating of 8.0 out of 10 with 6 verified guest reviews."* That was **exactly** the bar RUN_070 set before treating 6 as a hard number. The bar is cleared.

**And the same run closed the only door that could satisfy the rule.** The direct fetch returned **HTTP 429 for the third consecutive run** → blocker `expedia-direct-fetch` opened. The task's own hard rule says the aggregate is never written without a fresh **direct** scrape — so *"pending a direct scrape"* has quietly become *"pending forever."* The evidence bar is met and the rule still forbids the write.

**That is a rule question, not a data question, so I have not resolved it myself. Pick one:**
1. **30 seconds in Expedia Partner Central** — settles the count, the rating, the reply coverage *and* the 8.0/9.0/8.6 split question in a single look. Best value per second of anything this task currently carries.
2. **Authorise search-confirmed promotion** when a value has ≥3 independent same-day domain-restricted confirmations *and* the direct path is a logged blocker. This would also unblock the Hipcamp, Knot and TripAdvisor counts under the same logic — it is a change to `master-agent.md`'s hard rules.

**The coincidence caveat is now largely retired.** Facebook also reads 6 — but this run the Facebook 6 came from a `facebook.com`-restricted query and the Expedia 6 from an `expedia.com`-restricted one. Two figures, two domains, independently sourced. Still a genuine coincidence; recorded as one rather than explained away.

**Related, and cheaper if you are already in an extranet:** the three-entity split holds a **5th consecutive run** — expedia `h89565924` → 8.0, hotels.com `ho2867109568` → 9.0, agoda `h82700060` → 8.6. Thirty seconds settles whether that is one rating or three. If it is three, hotels.com and agoda are accumulating reviews on surfaces nobody monitors for replies either.

### NEEDS ADAM — Google's review count is 103 days old, and the last untried workaround just died (~30 seconds) — added 2026-08-19 by `rancho-review-monitor`, re-verified 2026-08-30

> **RUN_072 update — the Googlebot-UA lead is tried and CLOSED.** `rancho-site-daily` proved on 8/25 that Google Maps serves a JS shell to `WebFetch` *and* to a default `curl` UA, and that **only a Googlebot UA renders the page**. This task had never tried that UA, so it was a genuinely untried path on the oldest blocker here — a *varied request*, not a retry. Tried today: HTTP 200, 4,160 bytes, the title renders, and there are **zero** rating / review / `aggregateRating` / `reviewCount` tokens anywhere in the document. **It unlocks entity identity only, never review data.** Recorded as a closed lead so no future run spends a fetch on it. The contaminated snippet path (which echoes our own `reviewCount:"125"`) stays retired and was not re-run for the 2nd consecutive run. **Net: the two options below are now the only two that exist, and the count is 103 days stale.**

The last **authoritative** Google review count — 130 at 4.9★ — came from a Chrome MCP read of the GBP dashboard on **2026-05-19**. That is **94 days ago**, and it is the only real Google number this task holds. **RUN_071 did not re-run the snippet query at all** — re-issuing the call that produced the contamination would only re-inject our own number dressed as a fresh read, so no Google value was recorded this run, by design.

**The fallback just failed in a new and disqualifying way.** This run's search snippet read *"a 4.9-star rating across **125+ Google reviews**."* But **125 is our own number** — `site/index.html:90` carries `reviewCount": "125"`, the AggregateRating anchor CONTEXT.md holds pending your confirmation. The engine read Rancho's own structured data and served it back as a Google review count.

Snippet values observed to date: **175 · 130 · 126 · 125+**. It was already documented as unreliable in both directions after oscillating across three values while the live count sat at 130. It is now additionally *partly an echo of ourselves*, which removes the last reason to look at it at all.

`google-count` now has three dead paths on record: WebFetch of the GBP page (JS-rendered), the search snippet (unreliable **and** contaminated), and the Google Travel entity page (truncated, found dead 2026-08-18).

**Fix, either one:**
1. **30 seconds** — open the GBP dashboard, read the count and rating, drop them here. That replaces a number nobody has been able to verify since May.
2. **Permanent** — a Google Places API key lets this task call `places.googleapis.com/v1/places/{placeId}?fields=reviews,rating,userRatingCount` and read both the count *and* per-review reply state directly, which would also close the standing "is Cassie's review replied to" question without touching the done-log.

While the count is unverified, the site's own `reviewCount: 125` stays as-is — it should not be nudged toward any snippet value, because at least one of those values is now known to be that same 125 coming back around.

### NEEDS ADAM — Direct verification of Rancho's reviews is now at ZERO working paths (~one decision) — added 2026-08-21 by `rancho-review-monitor`, **escalated 2026-08-30**

> **RUN_072 escalation — this stopped being a coverage-breadth problem and became a total one.** ResortPass, the **only** platform still returning a clean direct fetch, went to **HTTP 403 behind a Cloudflare captcha** on 8/30 — reproduced on both WebFetch and a desktop-UA `curl`, so it is site-level bot detection, not a fetcher quirk. Checked against `brand/review-aggregate.json` rather than asserted from memory: google / airbnb / hotels-com (blocked 04-17), theknot (05-23), hipcamp (06-03), tripadvisor (07-18), facebook (08-19) and expedia (08-21) were already blocked. **ResortPass was the sole survivor.**
>
> **As of today, the number of working direct-scrape paths across every monitored platform is zero, and every review number this task holds rests on a search snippet.** `53 @ 4.8★` was held entirely unchanged — an access failure is not a data change — and logged as a WATCH at 1 of 3, not a blocker.
>
> **What this does to the decision below: the rendering scraper is now one purchase against SIX platforms, not four** (Google-adjacent, Hipcamp, The Knot, TripAdvisor, Expedia, ResortPass). This has been re-litigated per-platform for five months. **Also new, and free to look at:** Apple Maps *does* render review aggregates — it showed 80% / 5 ratings on two independent reads today — but its attribution is ambiguous enough that nothing was promoted from it (see the run-log).

`expedia-direct-fetch` opened 8/21, bringing this task to **eight** open blockers. The count is less interesting than the shape: **seven of the eight are the identical failure** — no direct-fetch path to a review surface.

| Blocker | Platform | Failure mode |
|---|---|---|
| `google-reviews-count` | Google | JS-rendered, needs Places API |
| `hotels-com-direct-fetch` | Hotels.com | 60s timeout |
| `expedia-direct-fetch` | Expedia | HTTP 429 *(new this run)* |
| `theknot-direct-fetch` | The Knot | 60s timeout |
| `hipcamp-direct-fetch` | Hipcamp | JS-render / wrong page |
| `tripadvisor-direct-fetch` | TripAdvisor | 403 / domain block |
| `facebook-review-text` | Facebook | JS-gated, title only |
| `airbnb-listing-existence` | Airbnb | 403 |

**Four of them — Hipcamp, The Knot, TripAdvisor, Expedia — already name the same remedy in their own resolution paths: a rendering / residential-proxy scraper such as Apify.** Each was logged separately over four months, so it has never been put to you as one question. At four platforms it reads less like four workarounds and more like **one purchase**.

**The concrete cost of the status quo:** Rancho's tracked review total reads **144**, and that undercounts the real public surface by **at least 59** — ResortPass's 53 and Expedia's 6, both confirmed live, neither countable under current scope and rules. Reply coverage on both is unknown, not zero.

**The ask:** one decision on whether to buy a rendering scraper, or an explicit "no — monitor aggregates only and accept that review *bodies* on six platforms are permanently unreadable." Either answer is fine; the current state is drift, and it is now four months old.

**Cheapest partial alternative that needs no purchase:** a Google Places API key (free tier, 100 q/day) closes the single highest-value blocker on the list — it returns count, rating *and* per-review reply state, which would also settle the standing "is Cassie's review replied to" question without going through the done-log.


### NEEDS ADAM — ResortPass has 53 reviews, nobody is watching it, and as of today nobody *can* (~2 min) — added 2026-08-17 by `rancho-review-monitor`, **escalated 2026-08-30 (4th run carrying this)**

> **RUN_072 — the readable one went dark.** The line below that reads *"the one review surface that is actually readable is the one that was never in scope"* is **no longer true.** ResortPass now returns **HTTP 403 behind a Cloudflare captcha** on both WebFetch and a desktop-UA `curl`. `53 @ 4.8★` is **held entirely unchanged** — an access failure is not a data change, and that is exactly the discipline RUN_071 vindicated. Logged as a **WATCH at 1 of 3**, deliberately below the blocker threshold; retry once per run, and if RUN_073 and RUN_074 also 403, it becomes a formal blocker.
>
> **Third distinct failure mode on this one platform in four runs:** extraction (RUN_070, HTTP 200 with the rating block missing) → clean (RUN_071) → access (RUN_072, 403). **The ask below is unchanged and now strictly more valuable**, because the host dashboard is the only remaining way to see these 53 reviews or their reply coverage at all.

> **RUN_071 status (3rd run carrying this): still open, still out of scope — but the data question is now CLOSED.** RUN_070's rating block failed to render on an HTTP-200 page and was held rather than recorded as a decline. **This run the same URL returned everything cleanly: 4.8★, 53 reviews, Half-Day Pass from $15, Day Pass from $20 — identical to the held value.** The non-render was transient, exactly as classified. `stale` cleared, extraction-failure count reset 1→0 (never reached the 3-run blocker threshold), value now standing on **four independent reads** (this task 8/17, `rancho-competitive-weekly` 8/17, this task 8/18, this task 8/21).
>
> **Worth one line of your attention, because it is the clearest evidence the gate pays for itself:** had RUN_070 recorded "no rating found" as a drop, this monitor would have reported a *second consecutive rating decline* on the one platform carrying this year's only real decline. It would have been plausible, it would have fit the narrative, and it would have propagated into every downstream surface as a trend. It was fiction, and the gate caught it before it existed.
>
> **What remains open is unchanged and is not a data problem:** ResortPass is still outside monitored scope, and reply coverage across those 53 reviews is still genuinely unknown.

**`resortpass.com/hotels/rancho-moonrise` carries 53 reviews at 4.8★. It is not in this task's monitored scope and never has been.**

It moved **+8 reviews and −0.1★** since 2026-07-15 (was 45 @ 4.9★). Verified by two independent direct fetches the same morning — this task's own and `rancho-competitive-weekly`'s — returning identical values.

At 53 reviews it is **Rancho's second-largest review pool after Google — four times The Knot (8) and Facebook (6) combined.**

**The part worth your attention:** `resortpass.com` returns HTTP 200 to a plain fetch and parses cleanly, while **six of the eight platforms this task does monitor are hard-blocked** (Google, Airbnb, Hotels.com, The Knot, Hipcamp, TripAdvisor). The one review surface that is actually readable is the one that was never in scope.

**Two questions, both answerable in the ResortPass host dashboard:**
1. **Are there unreplied reviews sitting in there?** 53 reviews with unknown reply coverage is a real gap. There is no per-review enumeration path from outside — `/hotels/rancho-moonrise/reviews` returns 404 — so this genuinely cannot be answered without the dashboard. It is recorded as `null`, not zero.
2. **Is a specific bad review behind the 4.9 → 4.8 drift**, or is it just eight average ones? This is the only rating decline observed on any platform this year, and it is invisible to every current monitor.

### NEEDS ADAM — A negative Facebook review is live, unanswered, and nobody knows what it says (60 seconds) — added 2026-08-17 by `rancho-review-monitor`, **now a formal blocker as of 2026-08-19**

> **RUN_070 status:** third run, third failure, threshold hit. Blocker **`facebook-review-text`** is now logged in `tasks/review-monitor/BLOCKERS.md`. The **aggregate** is settled — 6 reviews / 86% recommend confirmed on three consecutive runs, so the 8/17 movement was real and has stopped moving. What is blocked is strictly the **text**, and therefore the draft.

Facebook went **5 → 6 reviews, 100% → 86% recommend** — its first movement in 48 consecutive runs. Confirmed across three independent queries before recording. A drop from 100% means **at least one non-recommend now exists where there were zero.**

**I could not get the review text.** Facebook's page is JS-gated — a direct fetch returns the page title and nothing else, identically on 8/17, 8/18 and 8/19 — and no search query surfaced the body. **So no response draft has been written, three runs running.** Drafting one would have meant inventing what the guest said, and a fabricated reply in Ashley's voice answering a complaint nobody has read is worse than an empty slot. The empty slot is the honest state, not a gap in the run.

**Attribution guard, because this nearly went wrong twice:** search results place *Haylee L.'s The Knot review* prose ("a neighboring property played extremely loud amplified music…", "I would never recommend this venue…") right next to the Facebook figure, because both are the negative signal on the property. RUN_069 caught and rejected exactly that blend. It is **not** Facebook review content and must never be recorded as such.

**Fix:** open [the Reviews tab](https://www.facebook.com/p/Rancho-Moonrise-100083582071947/) → read the non-recommend → paste the text into this repo or send it to Ashley. A proper draft follows on the next run.

**If that never happens,** the fallback is to accept that Facebook review *bodies* are permanently unreadable by this agent, monitor the aggregate only, and treat any further recommend-rate drop as a same-day ping to you rather than a draftable event. Say the word and the blocker gets closed that way instead of staying open.


### NEEDS ADAM — One search API key (~10 min) — added 2026-08-17 by `rancho-site-daily`

**This unblocks two things at once, and the second one is bigger than Rancho.**

`rancho-seo-s7-aeo-baseline` has been "pending" since 2026-05-04. Today I tried to actually run it and found every SERP measurement path is dead or unreliable from this client:

| Path | State | Failure mode |
|---|---|---|
| `html.duckduckgo.com/html/` | **DEAD** | HTTP 202 challenge page, 0 results |
| `lite.duckduckgo.com/lite/` | **DEAD** | HTTP 202 challenge page, 0 results |
| `bing.com/search` (bare curl) | **UNRELIABLE** | 200 and parses cleanly, then degrades to generic dictionary/Wikipedia results |

The Bing failure is the dangerous one. It produced a clean, well-formed table reading **"0/10 target keywords ranking"** — which matches the known prior state exactly, so it would have read as confirmation and gone straight into CONTEXT.md. It was an artifact. A brand canary proved it: querying **`Rancho Moonrise`**, a term the site holds at **#1**, returned `gorancho.com`, `merriam-webster.com`, `miranchogrill.com` — the engine could not see the site on **its own name**.

**The bigger half:** the shared runbook `client-ops/templates/re-verify-before-report.md` names DuckDuckGo HTML as *the* verification path for SERP-position claims. It's dead. So **every client task following that runbook has been unable to verify any SERP claim it surfaces** — Rancho, Styer Mortgage, Crystal Kilpatrick, all of them.

**Fix — pick any one, cheapest first:**
1. **Google Programmable Search Engine — free, 100 queries/day.** Needs a `cx` (engine ID) + API key. 10 keywords monthly leaves enormous headroom. ← recommended
2. Bing Web Search API key
3. SerpAPI or DataForSEO key

Drop it in Vercel env and tell me the variable name; `scripts/serp-baseline.py` is already built and waiting. Until then the harness correctly refuses to emit numbers rather than inventing them.

### NEEDS ADAM — Dead YouTube video live on `/videos/` (30 seconds) — day 25, added 2026-07-23 by `rancho-site-daily`

The video card **"Escape to Rancho Moonrise"** on `/videos/` points at YouTube ID `_klefu2vTwM`, which is **removed or private**. Re-verified live today (2026-08-17): thumbnail returns **404**, oembed returns **403**. The other three video IDs on the page all return 200/200, so this is isolated to one card.

**Impact:** real visitors to `/videos/` see a broken thumbnail image. It was deliberately excluded from the page's `VideoObject` schema on 7/23, so there's no schema/SERP damage — this is purely a visible-quality defect, and it's now **the oldest live user-facing defect on the site**.

**Decision needed — either one closes it:**
1. Re-upload the video to YouTube and give me the new ID, or
2. Say the word and I'll delete the card.

I've left the card in place rather than silently removing visible content, since deleting published content is your call, not mine.

### NEEDS ADAM — Approve testimonial T-001 (unblocks the 4th element of every content-weekly run) — added 2026-07-22, **re-verified 2026-09-04** by `rancho-content-weekly`

**Re-verified live 2026-09-04 (not recycled):** `brand/approved-testimonials.md` re-read this run — T-001 is still `STATUS: UNAPPROVED — awaiting Adam` with `EVENT DATE: UNKNOWN`, unchanged for **51 days**. This run strengthened **`events.html`** (queue's next-up page); T-001 doesn't serve it either way (events.html isn't corporate-retreat content), so this run shipped 3 of 4 elements — photos, author block, local detail — same as the two before it. The unblock target is still `host-your-event.html` and `corporate-retreat-near-austin.html`, per T-001's own suggested-pages note. The ask below has not changed; only the cost of not doing it has.

**Status: the byline half is DONE, the testimonial half is one checkbox away.** Thank you — the `## Settled Decisions` line in GOALS.md ("byline: Ashley · Rancho Moonrise") plus creating `brand/approved-testimonials.md` broke a 10-run, 91-day block. `accommodations.html` shipped its first strengthening pass today with 3 of the 4 required elements.

**The one remaining gap — two small asks:**

1. **Flip T-001 to `STATUS: APPROVED` in `brand/approved-testimonials.md` (~30 seconds).** Cassie Butterfield's Google 5★ is verbatim, attributed and live-verified; it currently reads `UNAPPROVED — awaiting Adam`. Content tasks may only pull `APPROVED` entries, so it cannot be placed on any page until you flip it.
2. **Get the event date from Ashley's booking record (~2 min).** The entry has `EVENT DATE: UNKNOWN`. The task spec requires a testimonial tied to a **real event date** — a review date is explicitly not an event date — so even once approved, T-001 can't ship without it.

**Worth knowing about coverage:** T-001 is corporate-retreat content. Its own note says it "does NOT serve wedding, accommodation, or glamping pages." So approving it unblocks `host-your-event.html` and `corporate-retreat-near-austin.html` — **not** weddings, accommodations, glamping, pool or bachelorette. Per the file's Coverage-gaps table, weddings is the highest-value hole: **8 reviews live on The Knot at 4.5★, none captured verbatim.** The file's own recommendation is the fastest close: *"Ashley pulls 2–3 wedding quotes with real event dates straight from HoneyBook or her inbox"* — better provenance than anything scraped, and dated by definition. Until that happens, `weddings.html` can reach at most 3 of 4 elements.

**Two smaller decisions surfaced by today's run (neither blocking):**

- **Horse corral — is it public-ready or not?** `VOICE-GUIDE.md` lists it under *"Future spaces — future, not yet public-ready,"* but it is **already live on `index.html`, `weddings.html` and `host-your-event.html`**. Meanwhile `corral-hank-willie` and `corral-waylon-texas` — real photos of the hand-painted HANK / WILLIE / WAYLON signs under the corral shelter, genuinely uncopyable content — sit in the responsive ladder with **zero references anywhere in the repo**. Autonomous runs won't place them while the guide contradicts production. One line either way in VOICE-GUIDE unblocks them.
- **Acreage and direction contradict across surfaces.** VOICE-GUIDE says **36 acres**; the Hipcamp listing text says "34-acre" and its data payload says **37**. Site copy says "20 minutes **east**" while `things-to-do-manor-tx.html` says **northeast** and the Hipcamp coordinates compute NE. The approved phrase "20 minutes from downtown Austin" (no direction) sidesteps the second one cleanly.

**Two more surfaced by the 2026-08-19 run on `host-your-event.html` (neither blocking, both are facts decisions an autonomous run should not make):**

- **Does the 9:30 PM noise curfew bind private events?** It's published on `policies.html` and `faqs.html` as a property-wide quiet-hours rule for a shared property with overnight guests. It would be an excellent planning detail on the events page — specific, real, and impossible for a competitor to copy. It was **cut** because `host-your-event.html` line 288 already tells event clients *"celebrations that go late."* One of those two is wrong for private events, and shipping both on one page would contradict live copy on the same screen. **Question for Ashley:** does a buyout or private party run past 9:30 outdoors, or does the music move into the barn? One sentence unblocks a strong detail on this page and on `events.html`, `weddings.html` and `bachelorette-party-austin-texas.html`.
- **Capacity contradicts itself three ways on the events page.** The AEO block says the Event Barn holds **200**; the FAQ (visible copy *and* `FAQPage` schema) says **"up to 1,000+ guests"**; the `EventVenue` schema declares `maximumAttendeeCapacity: 200`; `VOICE-GUIDE.md` says "Events up to 200." Both numbers are published to Google right now from the same page. Related and probably the same root: `rancho-site-daily` confirmed today that The Knot listing claims **"up to 50 guests"** in one place and **300+** in another. **Which number is real for a full-property buyout?** Once settled, the fix is mechanical and one run wide.

**Do not re-surface the old framing.** The pre-2026-07-15 version of this item asked you to either settle the byline or pause the task. Both are resolved — the task is correctly unpaused in GOALS.md → Keep running, and it is shipping. This item is now scoped only to the testimonial approval above.

### NEEDS ADAM — From 2026-06-18 Bi-Weekly Audit

The June 18 audit (`site/audits/2026-06-18-business-audit.html`) confirmed the build shipped but the manual push stalled. Six items below — ordered by impact — are all free and all under 30 minutes, and none requires code. They are the difference between the next audit reading Reviews F → C / GBP B- → B+ / Website A- → A, or reading identical.

1. **Post the 2 waiting review replies (~5 min).** Restores April's "unreplied=0" GBP win, which regressed this period. Cassie Butterfield Google 5★ (~30d) is paste-ready; Haylee L. Knot 1★ (~110d unreplied, body still surfacing in Rancho-attributed snippets) needs the 2-minute mitigation-language decision. Drafts: `brand/review-reports/2026-05-19-review-report.md`. **This is the single highest-leverage 5 minutes on the board.**
2. **Claim TripAdvisor + open WeddingWire (~50 min combined, free).** TripAdvisor re-confirmed live 0 reviews / unclaimed today — the venue's own listing still shows "Is this your business?". WeddingWire still has no listing. 70 days untouched; this is the only audit area that has produced nothing since baseline.
3. **GSC Request Indexing on the 2 uncrawled landing pages (~5 min).** `/corporate-retreats/` (~59d) + `/safari-tents-near-austin/` (~64d) are built and schema-complete but uncrawled — rest of site indexes fine (homepage #1 on brand), these two lag specifically.
4. ~~**ResortPass — activate or formally kill.**~~ ✅ **RESOLVED 2026-07-15** — listing is now LIVE with products (Half-Day $15, Day Pass $20, Pilates and Horses $58, Full Moon Sound Bath $30; 4.9★/45 reviews). Optional 30s with Ashley: confirm the activation was intentional/complete.
5. **Fix the stale homepage "Upcoming Events" block.** The live homepage shows past dates (April 26, May 2, May 29) as "upcoming" — a visitor skimming for "what's on this weekend" reads stale events. Refresh or auto-wire it to the live Supabase feed. (Also: hero still says "125+ Google reviews" vs ~130 live.)
6. **Supply a GA4 / GTM measurement ID.** Conversion events fire to `console.debug` and report nowhere — the business still can't see which channel drives bookings. The inquiry plumbing is wired; the measurement layer is the missing half.

0. ~~**NEEDS ADAM — Rancho scheduled tasks firing against a paused workstream.**~~ ✅ **RESOLVED 2026-07-22 — closed by the GOALS.md update, not by Adam action.** The claim was that `rancho-site-daily` / `-content-weekly` / `-competitive-weekly` / `-review-monitor` were firing against the GOALS.md week-of-5/18 line "No Rancho Moonrise active work — paused," and that a 30-second pause-list fix had been on Adam's plate since 5/27. **Live re-verify this run: that line no longer exists.** GOALS.md (mtime 2026-07-20 11:19) now reads "No Rancho Moonrise ***outreach*** (Christopher Gill) — still paused. **Site/content work RESUMED 2026-07-15**," and the Paused-Workstreams entry matches. The pause was narrowed to outreach only. So these tasks firing daily is **correct behavior, not drift** — no pause-list edit is needed and none should be requested. The item ran 56 days and 39 firings past its actual expiry because runs re-surfaced it from CONTEXT.md instead of re-reading GOALS.md live. Logged to `rancho-done-log.md`. **Do not re-surface.** (Standing correction for every rancho-* task: re-read GOALS.md from disk each run and check its mtime — do not inherit the pause verdict from CONTEXT.md.)

1. **🆕 POST 2 REVIEW REPLIES — drafts ready in `brand/review-reports/2026-05-19-review-report.md`. DAY 66 UNPOSTED IN MONITOR (RUN_067, 2026-07-23).** (a) **Cassie Butterfield (Google 5★, ~68 days old, ~2026-05-16)** — corporate-retreat review, drafted reply is voice-clean and ready to paste as-is in GBP dashboard, 30 seconds. (b) **Haylee L. (The Knot 1★, 2026-02-26, ~147 days / ~21 weeks unreplied)** — quiet-property-risk complaint from a site visit, drafted reply has an edit-flag on the "we're flagging neighboring-property activity..." sentence — 2-minute decision on whether to publicly commit to that operational change before posting. **Visibility cost:** Haylee's verbatim review body ("would never recommend" + loud-music complaint) still surfaces in Rancho-attributed snippets even on name-free queries, with no owner-response indexed — bad-review exposure persists, raising the cost of continued non-reply. **After posting, mark `rancho-review-replies-2026-05-20` done from the briefing page** (the done-log lives at repo root `rancho-done-log.md`) so this monitor can stop carrying it forward.
1b. **🆕 NEEDS ADAM — is the Expedia rating 8.0 or 9.0? (~30 seconds, either extranet). RE-CONFIRMED RUN_067 (2026-07-23) — 2nd consecutive run.** RUN_066 (2026-07-22) first surfaced **9.0 "Wonderful"** across independent queries, consistently attributed **per entity**: `hotels.com/ho2867109568` reads **9.0**, `expedia.com/…h89565924` reads **8.0**. RUN_067 re-confirmed the same split (8.0 for h89565924 inline, 9.0 for hotels.com + ie.hotels.com) — two consecutive per-entity confirmations, so this is no longer a snippet artifact. The monitor spent 10 prior runs dismissing 9.0 as noise against the 8.0 anchor; that reading no longer fits, and the two entities may genuinely carry different ratings. The monitor **cannot** settle this from outside: hotels.com direct fetch is a 42-timeout BLOCKER, so no fresh scrape is available and the 8.0 anchor was deliberately left unchanged. **Two review counts also surfaced for the first time since the April baseline** (13, and "8.6 out of 10 from 20 reviews") — mutually inconsistent, the 8.6/20 pulled off an aggregate travel-guide page, so neither was written. Log in to either extranet and read the real rating + count. If they genuinely differ, the monitor should track Expedia and Hotels.com as **two platforms, not one** — which also means reviews may be accumulating on a surface nobody is watching for replies.

2. ✅ **RESOLVED 2026-07-15 — ResortPass listing activated.** [resortpass.com/hotels/rancho-moonrise](https://www.resortpass.com/hotels/rancho-moonrise) is now **LIVE with products** (Half-Day Pass $15, Day Pass $20, Pilates and Horses $58, Full Moon Floating Sound Bath $30) and shows 4.9★/45 reviews. Activated between 6/29 and 7/15 — the 42-day decision drift is cleared. Optional 30s with Ashley: confirm the activation was intentional and is complete. (Lucky Arrow's ResortPass also activated this cycle — 6 products, pool 12–8pm.)
2. **GSC — request indexing on specific URLs (Priority 1, ~5 min).** `/corporate-retreats/` (**~59 days uncrawled**, +14d from 6/15) + `/safari-tents-near-austin/` (**~64 days uncrawled**, +14d). URL Inspection → Request Indexing for each. **6/29 update:** corporate-retreat cluster churned again (Sage Hill to #1, The Yurtopian re-entered ~#3 after 4 weeks off) and a broad SERP shift pushed aggregators/listicles to the top across all glamping head terms. The pressure isn't any single entrant — the cluster churns weekly while Rancho's page stays invisible. Crawl is the gate; both pages fully built + schema-complete. (Owned by `rancho-site-daily` + Adam.)
3. **Hipcamp strategy question for Ashley (carry-over from 2026-05-16 audit).** Read `brand/2026-05-16-hipcamp-curation-gap-audit.md`. TL;DR: Rancho excluded from Hipcamp's Austin glamping editorial landing by 3 structural flags + 8 content gaps. **6/15 update:** the curated set rotated (broke a 4-week byte-identical streak); Lucky Arrow slipped #8→#9; Rancho still absent (6th read since 5/16; set did NOT rotate again 6/29 — byte-stable two weeks). Hipcamp inclusion remains a free aggregator lever worth closing regardless of the on-site content play. One question for Ashley: **"Is the Hipcamp listing intentionally private — SEO presence only — or do we want bookings from it?"** Two voice/data fixes worth doing regardless: acreage drift ("34-acre" vs VOICE-GUIDE's 36) + voice violation ("unwind with a drink at our bar").
4. **Hotels.com listing copy fix (~15 min, 5th week running).** Listing ho2867109568 surfaces "20 luxury cabins and safari tents that can accommodate up to 50 guests" in brand SERP description. Per VOICE-GUIDE.md, no specific unit counts. Vercel site itself does NOT contain this copy — third-party listing problem.
5. **Blog pipeline restart — framing reframed, still does not escalate.** Spoon Mountain's `/romantic-weekend-getaways-near-austin/` is OUT of the broad `weekend getaway near austin glamping` term (2nd straight week) but ranks **#1 for the narrower "romantic weekend getaways near austin."** So the 4-week in/out oscillation isn't instability — the page is durably strong on its precise long-tail intent and just doesn't compete on the broad listicle-dominated head term. Research-intent content wins narrow intent, not broad volume. Does NOT escalate restart (blog paused 2026-04-23 per Ashley).
6. **Glamping Hub submission.** ~11 weeks running. Free, 15 min, glampinghub.com/list-your-property.

## 🔧 Schema gaps (found 2026-07-22 — per-page JSON-LD matrix, all 30 public pages)

The 5/26 "surgical schema runway exhausted" read was cluster-scoped — it only counted BlogPosting CreativeWork properties and missed whole-page gaps. Real remaining work, ordered by value:

1. **`videos.html` carries no JSON-LD at all** — no BreadcrumbList, no WebPage, no VideoObject/ItemList, on a page whose entire purpose is a video library. **`VideoObject` is one of the few schema types that still earns a genuine SERP rich result** (thumbnail + duration in results, plus Google Video surface eligibility). Highest-value remaining autonomous slot; needs a pass over the embeds to pull real titles/durations/thumbnails — no fabricated values. **#1 next slot.**
2. **`accessibility.html`** — no JSON-LD at all. Add `WebPage` + `BreadcrumbList`. Small, surgical.
3. **`policies.html`** — has `BreadcrumbList`, lacks `WebPage`/`speakable`.
4. `index.html` has no `BreadcrumbList` — **correct by design** (homepage is the breadcrumb root). No action; recorded so a future run doesn't "fix" it.

Blog cluster is now complete: 17/17 on `BlogPosting`, `BreadcrumbList`, `WebPage`/`speakable`, and `FAQPage`.

**Retired, do not re-propose:** AggregateRating onto BlogPosting. Self-serving review schema earns no SERP stars; the real star lever is off-page (GBP). Sat in the next-slot queue since 5/26.

**CONTEXT.md hygiene (for the owning tasks):** trimmed 251 → 204 lines this run by collapsing 20 duplicate `site-daily` cruise-control entries + 9 stacked headers. Still over the 150-line cap in CLAUDE.md. The remaining bulk is 10 `review-monitor` and 5 `competitive-weekly` "Nth consecutive quiet sweep" entries — **those tasks should collapse their own history**; site-daily won't prune another task's records.

## 📌 Competitive intel quick wins (refreshed 2026-08-31)

**Read this first: items 1–3 were the 8/25 quick wins and were never published anywhere Adam or Ashley would see them.** They have not been declined. They have never been asked. The 8/25 Intel card never reached either dashboard (see NEEDS ADAM above).

- **1️⃣ Claim + optimize the WeddingWire listing (Ashley or Adam, ~15 min).** `weddingwire.com/biz/rancho-moonrise/f38c5e35e5491216.html` — **listing existence confirmed on a second independent read 8/31.** The "WeddingWire entirely misses Rancho Moonrise" claim carried since 2026-04-06 was **false**, and on 8/19 it caused a real decision (a `sameAs` exclusion) to be made on bad information. Content and claim status remain **unread — 403 on the listing AND on WeddingWire's own Manor category page** — so this is a job only a logged-in human can even inspect. Strong indirect signal it is unclaimed: WeddingWire's "10 Best Barn & Farm Wedding Venues in Manor, TX" surfaces **Honeysuckle Ranch (a 60-guest barn)** instead of a 200-guest venue with on-site lodging.
- **2️⃣ Fix the venue description on The Knot (Ashley or Adam, ~15 min).** **Confirmed a 3rd time on 8/31**, verbatim: *"Rancho Moonrise contains 20 luxury cabins and safari tents for up to 50 guests"* — alongside the same listing's *"can host 300+ guests."* Four defects in one sentence: banned word "luxury", banned unit count, "50 guests" contradicting the site's own `maximumAttendeeCapacity: 200`, and a **6× self-contradiction**. Hotels.com again did **not** reproduce the phrase — attribution stays The Knot, Hotels.com suspected only. Likely syndicated; fixing the source may correct several listings at once.
- **3️⃣ Add WeddingWire to the site's `sameAs` array** — one of five URLs excluded 8/19 for lack of confirmation, now confirmed twice. Owned by `rancho-site-daily`.
- **4️⃣ `/safari-tents-near-austin/` — GSC request-indexing (Adam, ~2 min).** Now ~**126 days** (+5). **Eleventh** read of this item. A `site:` query returns 10 owned URLs — including `/blog/glamping-vs-camping/`, not previously seen — and never this one. Entire remaining GSC ask. (Owned by `rancho-site-daily` + Adam.)
- **5️⃣ Glamping Hub submission — ~20 weeks absent.** Free, ~15 min at `glampinghub.com/list-your-property`. Glamping Hub holds **#1 or #2 on three tracked head terms**; the only route onto an aggregator's SERP is to be in the aggregator.
- **6️⃣ Hipcamp curation question for Ashley — 10th consecutive absence.** *"Is the Hipcamp listing intentionally private — SEO presence only — or do we want bookings from it?"* Lucky Arrow holds curated **#8**; Ranch 3232 entered at **#16**; Rancho has never appeared.
- **❌ RETIRED 2026-08-31 — "publish flat buyout pricing".** **Serana was the entire evidence base and withdrew it.** The page that read *"All for $1000 / night on weekdays"* now reads *"a flat package rate based on the size of your group and the length of your stay"* — quote-on-request, i.e. **Rancho's own model**. Confirmed by varying the query, not retrying: independent search returned a full repositioning to a **21+ boutique wellness retreat**, 53 acres, **9 cabins / up to 20 guests**, spa + 1,000 sq ft gym, second domain `seranaretreats.com`; it also **dropped off the corporate head term** (held ~#4 on 8/25). The one comparable operator who published a buyout number stopped and moved upmarket. **Do not re-propose without new evidence.** (done-log)
- **⚠️ FROZEN, NOT REFUTED — day-pass underpricing.** Rancho **$20 / $15 half-day at 4.8★/53** vs Lucky Arrow **$35 at 4.6★/201** — 43% below market at a higher rating. **ResortPass went 403/Cloudflare on 8/31**, the same block review-monitor hit 8/30, so **both sides are HELD at their 8/25 values and neither can be refreshed.** An access failure is not a data change; nothing here is recorded as moved. The recommendation stands on 8/25 data. → Ashley.
- **⚠️ FOUR verification blockers, one remedy.** The Knot (60s timeout, since 05-23), Hotels.com (60s timeout, since 04-17), WeddingWire (403, since 08-25), **ResortPass (403/Cloudflare, NEW 08-31)**. All four are third-party listings carrying Rancho's own off-domain description, price or review pool. `rancho-review-monitor` reached the identical conclusion independently on 8/30 (*"one purchase against six platforms"*). **Two tasks converging on one purchase from independent evidence is as strong a signal as this system generates.**
- **✅ CONFIRMED, not new — the blog outranks the landing page, and the wedding cluster now reproduced exactly.** `/blog/wedding-venues-near-austin/` ~#3, `/weddings/` ~#4, homepage ~#6 — **identical on 8/25 and 8/31, six days apart.** That promotes the three-URL finding from a single measurement to a confirmed one. Three clusters now show a blog URL at or above the purpose-built landing page, and **the blog pipeline has been paused since 2026-04-23 on operational grounds that predate all of this evidence.** Strongest form yet of the argument to revisit the pause with Ashley.
- **⚠️ WATCH, do not act — broad-glamping regression.** `glamping weekend getaway from Austin` went from **3 owned URLs to 1** (only the blog, ~#6; homepage and `/accommodations/` dropped). One query, one read — and on that same query the engine's *written* answer still **opens with Rancho Moonrise**, so entity recognition held where the URLs did not place. That is the shape of query variance, not a penalty. **It becomes real only if it reproduces on 2026-09-07.**
- **⚠️ WATCH — brand snippet read CLEAN for the first time.** This run's aggregated brand snippet carried **no banned copy** (36 acres, up to 200 guests, safari tents and hand-crafted cabins). On 8/25 the banned sentence was present in it. One read — **watched, not claimed**; The Knot listing itself is still confirmed carrying the sentence.
- **⚠️ WATCH — brand SERP ordering.** Bare-brand query put the owned site ~#8–9 below Do512, Hotels.com, LinkedIn, Facebook, Hipcamp, Instagram and Yelp. Same non-geolocated proxy artifact cleared 6/29. The Knot dropped out of the brand set; Hipcamp and Instagram entered. Not treated as a regression; a clean incognito or rank-tracker check would settle it permanently.
- **🆕 Four new third-party surfaces, none in `sameAs`.** **Pop & Drop TX** (`popanddroptx.com` — event-decor case study of an actual Rancho wedding, keyword-rich wedding intent), **Rowan & Birch** (`rowanandbirch.com/stories/rancho-moonrise-wedding` — photographer story), **Well City Guide** (surfaced on three separate queries this run), **Wheree** (aggregator). Earned/editorial footprint now **9 surfaces**.
- **🆕 TripAdvisor listing URL recorded for the first time** — `tripadvisor.com/Hotel_Review-g56224-d33307272-Reviews-Rancho_Moonrise-Manor_Texas.html`. Stable property ID; this is the concrete target the TripAdvisor half of `rancho-p1-05` needs to become actionable. **Review count and claim state deliberately NOT asserted here — they belong to `rancho-review-monitor`.**
- **🆕 New competitors tracked (wedding/ranch cluster).** Surfaced on `wedding venue Austin TX ranch`, which **Ranch Austin owns across 4 of 10 surfaces** and where Rancho does not rank (correctly — Rancho ranks ~#4 on the longer intent query): **Star Hill Ranch**, **Rambling Rose Ranch** (15 min from downtown, LGBT-owned), **Twisted Ranch Weddings** (200 acres), **Pecan Springs Ranch** (17 acres, 10 mi from downtown).
- **🔄 Competitor detail refreshed.** **7744 Ranch** still markets *"just east of Austin—approximately 20 minutes from downtown"* — Rancho's exact hook — now adding **1,200 sq ft two-storey mobile estates** and an **Expedia listing**. **Talula Mesa** holds ~#3 on the glamping head term and now publishes **15 acres**, Lake Travis 2 min. **Lucky Arrow** 15 acres, Hipcamp curated #8, corporate SERP ~#3 at $545–650 pp/night.
- **🔄 Five new aggregators/listicles entered tracked SERPs:** Vrbo (safari tent), TimeOut (pool day pass), texplorevibe, mountbonnell, solotripsandtips. Head-term consolidation to platforms continues.
- **Walden Retreats** (96 ac, Johnson City) and **The Retreat on the Hill** (star-gazing dome, safari tents, tipis) both surfaced again but were not re-fetched — copy claims carried UNVERIFIED-on-page.
- **Track Green Acres ATX (Elgin) as closest geographic competitor.** Rose on the glamping head term; press footprint in U.S. News / Dwell / Apartment Therapy / Austin Monthly.
- **Internal-doc housekeeping:** old `safariforthesoul.com` URLs in past audits/blog drafts redirect to an author site. Live property at `safariforthesoulglamping.com`. Low priority.
- **Per-unit accommodation pages remain blocked on low-res source JPGs** (Adam re-upload).

## 🚩 FLAG_FOR_ADAM — refreshed 2026-08-31 by `rancho-competitive-weekly`

### ✅ RESOLVED — `competitive-intelligence.html` was ~4 months stale; it is now current and, as of today, actually deployed
Flagged 2026-08-17. The 8/25 run built `scripts/render-competitive-report.py` and regenerated the page from the markdown for the first time since **April 6** — closing 141 days of drift between the written report and the one every Intel card links to. **But that regeneration was never committed**, so until today the live page still served April data and the fix existed only on disk. Rendered again from the 8/31 markdown, and **pushed**. Per the stale-flag rule this is recorded as resolved rather than quietly deleted. **Do not re-surface.**

### ✅ RESOLVED — "a working SERP path exists; `rancho-seo-s7` may be unblocked"
Flagged 2026-08-17 by this task after it ran 8 clean live SERP queries the same morning `rancho-site-daily` declared measurement impossible. **Reconciled and closed 2026-08-18:** one variable, and it was not a credential — bare `curl` is bot-detected, the harness `WebSearch` tool is not. `rancho-seo-s7` was baselined at 4/10 keywords ranking without buying anything, and the search-API-key ask was downgraded to nice-to-have fleet-wide. **Do not re-surface.**

### ⏳ STILL OPEN — VOICE-GUIDE contradicts itself on "Manor", and the Manor pages are the ones ranking
`VOICE-GUIDE.md:270` says the location descriptor is "20 minutes from downtown Austin" — **never "Manor"**; line 99 attributes the rule to Ashley. But line **230** of the same guide says to "naturally weave in location keywords (**Manor TX**, near Austin, Central Texas)." **30 site files** reference "Manor, TX", including three body-copy instances on `/blog/corporate-retreat-near-austin/` — a page holding ~#4 — and an entire post `things-to-do-manor-tx.html` with "Manor TX" in its title, H1, meta and schema `keywords`. Third-party listings reinforce it: the WeddingWire listing is titled *"Rancho Moonrise · Barn & Farm Weddings · **Manor, TX**"*. This is a deliberate SEO play against a stated brand rule, on the pages producing Rancho's only non-brand rankings. **Needs Ashley's ruling before anyone "fixes" it in either direction.** Flagged only — page edits belong to `rancho-site-daily` / `rancho-content-weekly`. *(Carried from 2026-08-17; re-verified live 2026-08-31, still contradictory, still unruled.)*

## ✅ DONE 2026-05-26 — `copyrightYear: 2026` + `copyrightHolder` enrichment across 17-post BlogPosting JSON-LD cluster (closes CreativeWork-property arc)

Pre-scoped 5/25 as the named #1 next slot. Cluster-wide schema-only edit. `copyrightYear` + `copyrightHolder` are schema.org `CreativeWork` properties Google's structured-data spec recommends for content-attribution clarity to search engines and AI engines. Until today, every BlogPosting block on the site lacked both.

1. **Pre-edit audit.** `grep -c '"copyrightYear"' site/pages/*.html` and `grep -c '"copyrightHolder"' site/pages/*.html` both returned no matches across all 17 BlogPosting pages — CONTEXT's "0/17 carry it" claim confirmed still_true.
2. **Schema edit (17 pages).** Appended `"copyrightYear": 2026,` + `"copyrightHolder": {"@type": "Organization", "name": "Rancho Moonrise", "url": "https://ranchomoonrise.com"}` after `"isAccessibleForFree": true` on every BlogPosting JSON-LD block via uniform Python regex pass. +8 lines per file (8 new schema lines, 2 modifications including the dateModified bump and the trailing comma after `isAccessibleForFree`).
3. **Why `copyrightHolder` inline (not `@id`-referenced to publisher).** Avoids modifying the existing `publisher` block, which would mean adding an `@id` and risk breaking assumptions made by other agents (validators, AggregateRating tooling). Schema.org allows the same Organization to appear in multiple properties; AI engines and Google's Rich Results test parse both inline and `@id`-referenced forms cleanly. Inline keeps the edit purely additive.
4. **Why `copyrightYear` over Person-author / nav-promotion.** Autonomous (no NEEDS ADAM), cluster-wide, closes a logical enrichment arc (wordCount → articleSection → ImageObject → inLanguage → isAccessibleForFree → copyrightYear/Holder). Person-author still BLOCKED on byline decision; nav promotion needs Adam confirm.
5. **Metadata refresh.** `BlogPosting.dateModified` 2026-05-25 → 2026-05-26 across all 17. Sitemap `<lastmod>` synced for the same 17 URLs (verified 1:1 — all 17 pre-edit 2026-05-25 lastmod lines were blog URLs).
6. **Improvement-plan mapping.** Does NOT map to any of the 8 named SEO task IDs (s1–s8). `copyrightYear`/`copyrightHolder` are post-level CreativeWork schema, distinct from s4 (Breadcrumb + Speakable). No done-log entry.
7. **Validation.** `npm run validate:site` passes. Every JSON-LD block re-parsed via `python3 json.loads`. Every BlogPosting block asserts `copyrightYear == 2026` AND `copyrightHolder.@type == "Organization"` AND `copyrightHolder.name == "Rancho Moonrise"` AND `copyrightHolder.url == "https://ranchomoonrise.com"` AND `dateModified == "2026-05-26"` AND `isAccessibleForFree is True` AND `inLanguage == "en-US"`.
8. **Diff.** 18 files staged, 153 insertions / 51 deletions — uniform (8/2 per blog file + 17/17 sitemap). Pre-existing prior-session changes in styles.css/main.js/weddings.html/contact.html/api/inquiry.js intentionally NOT staged (5/7–5/25 convention).
9. **Re-Verify Gate (live).** apex 200 + `server: Vercel` + `x-vercel-cache: HIT`; www 308 → apex; sitemap 200; `/corporate-retreats/` 200; `/safari-tents-near-austin/` 200; `/blog/` 200. Plus 2 pre-edit grep checks. 8/8 verified claims still_true; 0 stale claims auto-resolved.

**Surgical-runway exhaustion.** With this slot shipped, the CreativeWork-property enrichment arc on BlogPosting JSON-LD is complete. The next autonomous runs need to either move schema type, pursue research-output, or wait for Adam-decision unblock.

**Future autonomous candidates** (in priority order):
- **Person-schema author research (research-only deliverable).** Auto-discover plausible authoritative authorship per post, draft a recommendation matrix at `brand/2026-05-XX-blog-author-byline-research.md`, surface as a NEEDS ADAM single-question matrix ("default byline = X?"). Clean autonomous slot — output is research, not code.
- **AggregateRating onto BlogPosting JSON-LD** (currently only on publisher) — cluster-wide, surgical, autonomous; defends "this article is by a reviewed/rated org" at the article level.
- AEO baseline measurement (rancho-seo-s7) — still deferred until apex is fully in Google's index; signal is low pre-GSC URL-inspection.
- Internal-linking cluster floor 4 → 5 inbound — would require Related-Reading insertion on 4–5 additional host pages per orphan post.
- Promote `/corporate-retreats/` into main nav (currently footer only) — needs Adam confirm.

## ✅ DONE 2026-05-25 — `isAccessibleForFree: true` enrichment across 17-post BlogPosting JSON-LD cluster

Pre-scoped 5/24 as the named #1 next slot. Cluster-wide schema-only edit. `isAccessibleForFree` is a schema.org `CreativeWork` boolean that defends against AI-engine paywall mis-classification — major open-content publishers (NYT free articles, WaPo Climate Lab, Reuters) carry it explicitly. Until today, every BlogPosting block on the site lacked it.

1. **Audit (pre-edit).** `grep -l 'isAccessibleForFree' site/pages/*.html` returned 1 match — but on second-pass inspection that file is `corporate-retreats.html` (EventVenue schema with `"isAccessibleForFree": false` for paid venue access), NOT one of the 17 BlogPosting pages. CONTEXT's "0/17 BlogPosting carry it" claim re-confirmed still_true after a stale-match scare.
2. **Schema edit (17 pages).** Appended `"isAccessibleForFree": true` as the new last property on every BlogPosting JSON-LD block. Insertion anchor: `"inLanguage": "en-US"` (current last property, added 5/24) → added trailing comma, appended new line. +33 bytes per file.
3. **Why `isAccessibleForFree` over `copyrightYear` / Person-author / nav-promotion.** Autonomous (no NEEDS ADAM), cluster-wide, defensive against a specific failure mode (Perplexity/ChatGPT occasionally tag uncertain pages as "behind paywall"). Person-author BLOCKED on byline decision; nav promotion needs Adam confirm; `copyrightYear` queued for next slot.
4. **Metadata refresh.** `BlogPosting.dateModified` 2026-05-24 → 2026-05-25 across all 17. Sitemap `<lastmod>` synced for the same 17 URLs.
5. **Improvement-plan mapping.** Does NOT map to any of the 8 named SEO task IDs (s1–s8). `isAccessibleForFree` is post-level CreativeWork schema, distinct from s4 (Breadcrumb + Speakable). No done-log entry.
6. **Validation.** `npm run validate:site` passes. All 17 BlogPosting JSON-LD blocks parse-valid via `python3 json.loads`. Every block asserts `obj["isAccessibleForFree"] is True` AND `obj["dateModified"] == "2026-05-25"`.
7. **Diff.** 18 files, 85 insertions, 51 deletions — uniform, surgical. Pre-existing prior-session changes in styles.css/main.js/weddings.html/contact.html/api/inquiry.js intentionally NOT staged (5/7–5/24 convention).
8. **Re-Verify Gate (live).** apex 200 + `server: Vercel` + `x-vercel-cache: HIT`; www 308 → apex; sitemap 200; `/corporate-retreats/` 200; `/safari-tents-near-austin/` 200; `/blog/` 200. 6/6 verified claims still_true; 0 stale claims auto-resolved.

**Future autonomous candidates** (in priority order):
- **`copyrightYear: 2026` + `copyrightHolder` (publisher.Organization reference) on BlogPosting JSON-LD.** Cluster-wide, surgical, schema.org-recognized CreativeWork property. Closes the enrichment arc (wordCount → articleSection → ImageObject → inLanguage → isAccessibleForFree → copyrightYear/Holder).
- AEO baseline measurement (rancho-seo-s7) — still deferred until apex is fully in Google's index; signal is low pre-GSC URL-inspection.
- Author Person schema for BlogPosting JSON-LD — BLOCKED on `NEEDS ADAM` author-byline decision (Adam vs. Ashley vs. team byline).
- Promote `/corporate-retreats/` into main nav (currently footer only) — needs Adam confirm.
- Internal-linking cluster floor 4 → 5 inbound — would require Related-Reading insertion on 4–5 additional host pages per orphan post.

## ✅ DONE 2026-05-17 — `wordCount` enrichment across 17-post BlogPosting JSON-LD cluster

Pre-scoped by 5/16 run-log as the cleanest next autonomous slot. Cluster-wide schema-only edit. `wordCount` is a schema.org `Article` property supported by all major engines and useful for AEO "how long is this article" intent — particularly relevant for AI-engine result framing ("a 1,200-word guide to…"). Until today, every BlogPosting block on the site lacked it.

1. **Audit (pre-edit).** 17 pages with `"@type": "BlogPosting"` JSON-LD; 0 had `wordCount`.
2. **Word-count method.** Regex-based article extraction: preferred `<article>` (10 pages), fell back to `<main>` (7 pages). Stripped `<script>/<style>/<nav>/<header>/<footer>/<aside>` before counting to avoid chrome bloat. Token pattern `[A-Za-z0-9][A-Za-z0-9'’\-]*` — punctuation-tolerant, contraction-friendly.
3. **Schema edit (17 pages).** Inserted `"wordCount": NNNN,` between `"dateModified"` and `"url"` in each BlogPosting JSON-LD block. Bumped `dateModified` to `2026-05-17` on all 17 (schema actually changed today).
4. **Word counts.** Range 1,005–1,993. Median ~1,256. Total cluster 22,083 words. No post dips below the 1,000-word "thin content" floor that Google has historically flagged in core-update post-mortems.
5. **Sitemap.** Synced `<lastmod>` to `2026-05-17` for all 17 blog URLs.
6. **Validation.** `npm run validate:site` passes. All 17 BlogPosting JSON-LD blocks parse-valid via `python3 json.loads`; all carry `"wordCount": <int>` and `"dateModified": "2026-05-17"`.
7. **Diff.** 18 files, 51 insertions, 34 deletions — surgical. Pre-existing prior-session changes in styles.css/main.js/weddings.html/contact.html/api/inquiry.js intentionally NOT staged (5/7–5/16 convention).
8. **Voice / data compliance.** No body content changed. `wordCount` is computed from existing body text; no new copy was written. VOICE-GUIDE compliance unchanged.
9. **Accuracy note.** 7 pages without an `<article>` wrapper count FAQ accordion + Related Reading list contents because those are inside `<main>`. Consistent extraction rule; FAQ/Related-Reading copy IS substantive answer content engines parse. Dominant body sections still dominate the count; no post over-counted by more than ~50–100 words.
10. **Re-Verify Gate (live).** apex 200 + `server: Vercel` + `x-vercel-cache: HIT`; www 308 → apex; sitemap 200; `/corporate-retreats/` 200; `/safari-tents-near-austin/` 200; all 17 BlogPosting pages still parse-verified after edits. 6/6 verified claims still_true; 0 stale claims auto-resolved.
11. **Improvement-plan mapping.** This work does NOT map to any of the 8 named SEO task IDs (s1–s8). `wordCount` is post-level Article schema, distinct from s3 (internal linking), s4 (Breadcrumb + Speakable), or s7 (AEO measurement). No done-log entry.

**Future autonomous candidates** (in priority order):
- **`articleSection` enrichment on BlogPosting JSON-LD.** Cluster-wide, autonomous, schema.org-recognized. Would categorize each post under "Weddings" / "Corporate Retreats" / "Glamping" / "Things to Do" / "Bachelorette" / "Events". Useful for AI-engine topic classification.
- **Image schema enrichment.** BlogPosting `"image"` fields are currently URL strings; schema.org prefers `ImageObject` with `width`/`height`. Dimensions are available from the WebP responsive ladder. Autonomous, surgical.
- AEO baseline measurement (rancho-seo-s7) — still deferred until apex is in Google's index; signal is low pre-GSC-submit.
- Author Person schema for BlogPosting JSON-LD — BLOCKED on `NEEDS ADAM` author-byline decision (Adam vs. Ashley vs. team byline).
- Promote `/corporate-retreats/` into main nav (currently footer only) — needs Adam confirm.

## ✅ DONE 2026-05-13 — ItemList JSON-LD on `/blog/things-to-do-manor-tx/` (6 numbered destinations)

Yesterday's run pre-scoped this exact slot as the next-best ItemList candidate (6 numbered destinations in body, no item-level schema). Page body has explicit "1." through "6." H2s. Added a parallel `ItemList` JSON-LD block between existing `BlogPosting` and `BreadcrumbList`.

1. **Schema edit (`site/pages/things-to-do-manor-tx.html`).** New `ItemList` JSON-LD with `numberOfItems: 6` and 6 `ListItem` items matching body H2s 1–6: Base Yourself at Rancho Moonrise / Lake Walter E. Long / Live Events on the Ranch / Day Trip into Austin / Manor Downtown / Sunrise and Sunset on the Ranch.
2. **URL assignments.** Position 1 (Base Yourself at Rancho Moonrise) → `https://ranchomoonrise.com/`; position 3 (Live Events on the Ranch) → `https://ranchomoonrise.com/events/` (Rancho-owned URL distinct from apex); positions 2, 4, 5 → name+description only (no fake URLs claimed for destinations we don't own — Lake Walter E. Long, Austin day trip, Manor downtown); position 6 (Sunrise/Sunset on the Ranch) intentionally omits a URL because it's a feature of position 1's destination — duplicating the apex URL would create internal-inconsistency.
3. **`itemListOrder` intentionally omitted** (same rationale as 5/12 weekend-getaways run): numbering is partly editorial (position 1 is the host's own ranch in a hosted listicle) and the rest is rough thematic flow. Not a competitive ranking — omitting is honest framing and Google treats it as unordered curated list.
4. **Item descriptions distilled, not mirrored.** Each 1–2 sentence summary of its H2 section (173–252 chars), so the schema stands on its own when an AI engine extracts one item in isolation.
5. **Voice compliance.** No banned terms — "Manor" appears only as the town name for its own destination ("Manor downtown") not as a location descriptor for Rancho Moonrise (Rancho is framed "20 minutes east of downtown Austin"). No "luxury", "Hill Country", "General Store", specific unit counts.
6. **Metadata refresh.** `BlogPosting.dateModified` 2026-04-29 → 2026-05-13 since the page-level schema actually changed today. Sitemap `/blog/things-to-do-manor-tx/` lastmod 2026-05-09 → 2026-05-13.
7. **Validation.** `npm run validate:site` passes. All 5 JSON-LD blocks parse via `python3 json.loads`: BlogPosting (dateModified=2026-05-13), ItemList (numberOfItems=6, itemListElement.length=6 — internal consistency check passes), BreadcrumbList (3 crumbs), FAQPage (4 Q&A), WebPage (Speakable).
8. **Diff.** 2 files, 56 insertions, 2 deletions — surgical. Pre-existing uncommitted prior-session changes in styles.css/main.js/weddings.html intentionally NOT staged (5/7, 5/8, 5/9, 5/10, 5/11, 5/12 convention).
9. **Re-Verify Gate (live).** apex 200 + `server: Vercel` + `x-vercel-cache: HIT`; www 308 → apex; sitemap 200; target `/blog/things-to-do-manor-tx/` 200; prior target `/blog/weekend-getaways-near-austin/` 200; `/corporate-retreats/` 200; `/safari-tents-near-austin/` 200; all 6 remaining critical landing pages (faqs/accommodations/host-your-event/events/weddings/contact) 200. All 13 verified claims still_true; 0 stale claims auto-resolved.

**Future autonomous candidates** (in priority order):
- **Finish ItemList rollout — `things-to-do-near-austin-with-kids.html`** (5 named destinations: McKinney Falls, Bastrop, Hamilton Pool, Blue Hole, Rancho Moonrise). Same pattern as today and 5/12; position 5 (Rancho Moonrise) gets apex URL, others name+description only. After this slot ships, ItemList rollout to numbered/listicle blog posts is complete.
- AEO baseline measurement (rancho-seo-s7) — query AI engines for the 10 target keywords. Still deferred until Adam submits the GSC sitemap; signal is low before apex is in Google's index.
- **Hipcamp curation-gap audit** (flagged in 5/11 competitive-weekly) — Rancho's active Hipcamp listing is NOT in Hipcamp's "20 Best Glamping Sites 2026 Near Austin" landing page; top 5 are urban/airstream/East Austin properties. Audit listing photos / description / amenities vs. surfacing properties to identify what's missing. Autonomous-doable as a research/recommendation output.
- Author Person schema for BlogPosting JSON-LD — BLOCKED on `NEEDS ADAM` author-byline decision.
- Promote `/corporate-retreats/` into main nav (currently footer only) — needs Adam confirm.

## ✅ DONE 2026-05-12 — ItemList JSON-LD on `/blog/weekend-getaways-near-austin/`

Yesterday's run pre-scoped this slot as "survey the blog cluster for the next-best Article/HowTo schema candidate." Survey complete: no other blog has explicit "Step N" procedural structure (only `corporate-retreat-planning-guide-texas` did, shipped 5/11). What 3 posts DO have is a numbered/listicle roundup structure. 5/11's competitive-weekly specifically logged Spoon Mountain shipping a competing "Ultimate 2026 Guide" surfacing on the `weekend getaway near austin glamping` SERP — making that page the highest-strategic-value target.

1. **Schema choice — ItemList, not HowTo.** HowTo requires procedural content where step N+1 depends on having done step N. This page is a roundup of 5 independent destinations, not a procedure. `ItemList` is schema.org's first-class type for curated/ranked list content and is Google's recommended schema for listicle pages.
2. **Schema edit (`site/pages/weekend-getaways-near-austin.html`).** New `ItemList` JSON-LD block inserted after `BlogPosting` block, before `BreadcrumbList`. Structure:
   - `@type: "ItemList"`, `name: "Best Weekend Getaways Near Austin, Texas"`, top-level `description` summarizing the 5 destinations and distance band, `url` pointing at canonical, `numberOfItems: 5`.
   - 5 `ListItem` items with `position` (1–5), `name` (mirrors each H2 minus the numeric prefix), and `description` (1–2 sentence distillation of the H2 section, 174–222 chars each).
   - Position 1 (Rancho Moonrise) has `url: https://ranchomoonrise.com/`; positions 2–5 are name+description only — no fake URLs claimed for destinations we don't own.
3. **`itemListOrder` intentionally omitted.** The numbering is partly editorial (position 1 is the host's own ranch in a hosted listicle) and the rest is rough geographic order. Claiming `ItemListOrderDescending` would misrepresent it as a competitive ranking. Omitting is the honest framing; Google treats it as an unordered curated list.
4. **Item `description` is distilled, not mirrored.** Each summarizes its H2 section rather than quoting body content, so the schema stands on its own when an AI engine extracts one item in isolation. Voice-compliant (no "luxury", "Hill Country", "Manor" as location descriptor, "General Store", specific unit counts).
5. **Metadata refresh.** `BlogPosting.dateModified` bumped 2026-04-11 → 2026-05-12 since the page-level schema actually changed today. Sitemap `/blog/weekend-getaways-near-austin/` lastmod 2026-05-10 → 2026-05-12.
6. **Validation.** `npm run validate:site` passes. All 3 JSON-LD blocks on the target page parse via `python3 json.loads`: BlogPosting (dateModified=2026-05-12), ItemList (numberOfItems=5, itemListElement.length=5 — internal consistency check passes), BreadcrumbList (3 crumbs).
7. **Diff.** 2 files, 46 insertions, 1 deletion — surgical. Pre-existing uncommitted prior-session changes in styles.css/main.js/weddings.html intentionally NOT staged (5/7, 5/8, 5/9, 5/10, 5/11 convention).
8. **Re-Verify Gate (live).** apex 200 + `server: Vercel` + `x-vercel-cache: HIT`; www 308 → apex; sitemap 200; target `/blog/weekend-getaways-near-austin/` 200; yesterday's target `/blog/corporate-retreat-planning-guide-texas/` 200; all 9 critical landing pages 200. All 13 verified claims still_true; 0 stale claims auto-resolved.

**Future autonomous candidates** (in priority order):
- **Continue ItemList rollout to remaining list-structured blog posts.** Next-best fit: `things-to-do-manor-tx.html` (6 numbered destinations: Rancho Moonrise, Lake Walter E. Long, live event, Austin drive-in, Manor downtown, sunrise/sunset on the ranch). Then: `things-to-do-near-austin-with-kids.html` (5 named destinations — McKinney Falls, Bastrop, Hamilton Pool, Blue Hole, Rancho Moonrise). Both have clean roundup structure already in the body.
- AEO baseline measurement (rancho-seo-s7) — query AI engines for the 10 target keywords. Still deferred until Adam submits the GSC sitemap; signal is low before apex is in Google's index.
- **Hipcamp curation-gap audit** (flagged in 5/11 competitive-weekly) — Rancho's active Hipcamp listing is NOT in Hipcamp's "20 Best Glamping Sites 2026 Near Austin" landing page; top 5 are urban/airstream/East Austin properties. Audit listing photos / description / amenities vs. surfacing properties to identify what's missing. Autonomous-doable as a research/recommendation output.
- Author Person schema for BlogPosting JSON-LD — BLOCKED on `NEEDS ADAM` author-byline decision.
- Promote `/corporate-retreats/` into main nav (currently footer only) — needs Adam confirm.

## ✅ DONE 2026-05-11 — HowTo JSON-LD on `/blog/corporate-retreat-planning-guide-texas/`

Yesterday's run pre-scoped this exact edit as "next slot's target" — closing the handoff cleanly today.

1. **Audit (pre-edit).** Page body is an explicit 5-step "How to plan a corporate retreat" structure: H2 "Step 1: Define the Retreat Goal" (line 206), "Step 2: Choose the Right Texas Venue" (218), "Step 3: Build Your Timeline" (232), "Step 4: Build an Agenda That People Don't Dread" (246), "Step 5: Handle the Logistics Checklist" (265). But the page's only article-level schema was `BlogPosting` (lines 28–50) — a publication wrapper with no step semantics.
2. **Schema edit (`site/pages/corporate-retreat-planning-guide-texas.html`).** New `HowTo` JSON-LD block inserted after `BlogPosting`, before `BreadcrumbList`. Structure:
   - `@type: "HowTo"`, `name: "How to Plan a Corporate Retreat in Texas"`, top-level `description` distilling the 5-step process, `image` mirroring the BlogPosting hero, `totalTime: P12W` (matches the timeline section's "Lock the venue 12 weeks out" anchor).
   - 5 `HowToStep` items with `position` (1–5), `name` (mirrors each H2 minus the "Step N:" prefix), and `text` (1–2 sentence distillation of the H2 section, 199–297 chars each).
3. **Why HowTo not Article.** `BlogPosting` is a subtype of `Article` in schema.org's hierarchy — meaning the page IS already typed as an Article. Adding a parallel top-level `Article` block would be redundant. `HowTo` is the distinct sibling type with first-class `step` semantics; the body's explicit step structure is a textbook fit. Google retired most HowTo SERP rich results in 2023, but HowTo structured data remains valuable for AEO — AI engines parse `step` arrays to extract procedural answers.
4. **Step `text` is distilled, not mirrored.** Each `HowToStep.text` summarizes its H2 section rather than quoting body content, so the schema stands on its own when an AI engine extracts one step in isolation.
5. **Metadata refresh.** `BlogPosting.dateModified` bumped 2026-04-15 → 2026-05-11 since the page-level schema actually changed today. Sitemap `/blog/corporate-retreat-planning-guide-texas/` lastmod 2026-05-05 → 2026-05-11.
6. **Validation.** `npm run validate:site` passes. All 5 JSON-LD blocks on the target page parse via `python3 json.loads`: BlogPosting (dateModified=2026-05-11), HowTo (5 steps), BreadcrumbList, WebPage (Speakable), FAQPage (4 Q&A).
7. **Diff.** 2 files, 47 insertions, 2 deletions — surgical. Pre-existing uncommitted prior-session changes in styles.css/main.js/weddings.html intentionally NOT staged (5/7, 5/8, 5/9, 5/10 convention).
8. **Re-Verify Gate (live).** apex 200 + `server: Vercel` + `x-vercel-cache: HIT`; www 308 → apex; sitemap 200; target `/blog/corporate-retreat-planning-guide-texas/` 200; all 9 critical landing pages 200 (`/corporate-retreats/`, `/safari-tents-near-austin/`, `/faqs/`, `/accommodations/`, `/host-your-event/`, `/events/`, `/weddings/`, `/contact/`). All DNS/canonical/sitemap claims still_true; 0 stale claims auto-resolved.

**Future autonomous candidates** (in priority order):
- AEO baseline measurement (rancho-seo-s7) — query AI engines for the 10 target keywords. Still deferred until Adam submits the GSC sitemap; signal is low before apex is in Google's index.
- **Hipcamp curation-gap audit** (flagged in today's competitive-weekly) — Rancho's active Hipcamp listing is NOT in Hipcamp's "20 Best Glamping Sites 2026 Near Austin" landing page; top 5 are urban/airstream/East Austin properties. Audit listing photos / description / amenities vs. surfacing properties to identify what's missing. Autonomous-doable as a research/recommendation output.
- Article/HowTo schema on other long-form blog posts with explicit step or list structure — today's edit shipped on `/blog/corporate-retreat-planning-guide-texas/`; survey blog cluster for the next-best fit (e.g., the "vs." comparison posts may not need HowTo, but `/blog/corporate-retreat-near-austin/` and `/blog/weekend-getaways-near-austin/` may benefit).
- Author Person schema for BlogPosting JSON-LD — BLOCKED on `NEEDS ADAM` author-byline decision (Adam vs. Ashley vs. team byline).
- Promote `/corporate-retreats/` into main nav (currently footer only) — needs Adam confirm.

## ✅ DONE 2026-05-10 — Internal-linking close-out: 3 lightly-linked posts → 4 inbound each

Continuation of 5/9 orphan pass. Yesterday closed 4 critically-orphaned blog posts (1 → 4 inbound). Today closes the 3 remaining lightly-linked posts that were flagged as the next slot's autonomous candidate: `austin-bachelorette-ranch-vs-bar-crawl`, `glamping-vs-camping`, `summer-glamping-near-austin` — each at 2 inbound (blog index + 1 cluster page).

1. **Audit (pre-edit)**: confirmed each of the 3 posts had exactly 2 inbound topical links via `grep -rl --include='*.html' "/blog/<slug>/"` on `site/`, excluding self-references. Inbound sources for each: blog index + the parent cluster page (`bachelorette-party-austin-texas.html` for one; `glamping-near-austin-texas.html` for the other two).
2. **6 surgical `<li>` inserts across 5 host-page Related Reading lists**:
   - `weekend-getaways-near-austin.html` Related Reading ← `austin-bachelorette-ranch-vs-bar-crawl` + `glamping-vs-camping` (decision-aid + sibling weekend content; list grew 6 → 8 items + final blog-CTA)
   - `glamping-near-austin-texas.html` Related Reading ← `austin-bachelorette-ranch-vs-bar-crawl` (bachelorette glamping is a real SERP query; page already links to bachelorette parent)
   - `safari-tents-near-austin.html` Related Reading ← `glamping-vs-camping` (the question lands at the conversion-decision moment)
   - `events.html` Related Reading ← `summer-glamping-near-austin` (peak event season)
   - `weddings.html` Related Reading ← `summer-glamping-near-austin` (peak wedding season; page already links to bachelorette which is sibling cluster)
3. **Insertion convention**: each new `<li>` placed before the trailing "More from the Rancho Moonrise Blog" sentinel where present, preserving the final-CTA pattern (matches 5/9 convention).
4. **Anchor text**: mirrors each blog post's H1 / SERP title for keyword consistency. "Austin Bachelorette: Ranch vs. Bar Crawl" / "Glamping vs Camping: What's the Difference?" / "Summer Glamping Near Austin — Pool, A/C & Live Events".
5. **Result**: post-edit `grep` count confirms each of the 3 posts now has 4 inbound topical links — matches the `wedding-venues-near-austin` baseline. **Cluster has zero blog posts below 4 inbound.**
6. **Sitemap freshness**: 5 lastmod entries bumped to 2026-05-10. `/safari-tents-near-austin/` was 2026-04-26 — caught a 2-week-stale entry.
7. **Validation**: `npm run validate:site` passes.
8. **Diff**: 6 files, 11 insertions, 5 deletions (sitemap date replacements) — surgical. Pre-existing prior-session changes in styles.css/main.js (and an accommodations-section delete in weddings.html) intentionally NOT staged; weddings.html staged via focused 1-line patch (5/7, 5/8, 5/9 convention).
9. **Re-Verify Gate (live)**: apex 200 + `server: Vercel` + cache HIT, www 308 → apex, sitemap 200, all 9 critical landing pages 200, all 3 target blog posts 200, `/blog/corporate-retreat-planning-guide-texas/` 200 (next slot's target). All DNS/canonical/sitemap claims still_true; 0 stale claims auto-resolved.

**Future autonomous candidates** (in priority order):
- **Article/HowTo schema enrichment on `/blog/corporate-retreat-planning-guide-texas/`** — currently typed `BlogPosting`, but the long-form planning-guide content fits `Article` (or `HowTo`, given step-by-step structure) better. This is the cleanest, well-scoped next slot — page is live (200), schema is single-block, edit is testable in one validation run. **Promote to top of queue.**
- AEO baseline measurement (rancho-seo-s7) — query AI engines for the 10 target keywords. Defer until Adam submits the GSC sitemap; signal is low before apex is in Google's index.
- Author Person schema for BlogPosting JSON-LD — BLOCKED on `NEEDS ADAM` author-byline decision (Adam vs. Ashley vs. team byline).
- Promote `/corporate-retreats/` into main nav (currently footer only) — needs Adam confirm.
- ~~Internal-linking audit — orphaned blog posts (low inbound count) → cluster hubs.~~ **CLOSED 5/10.** Cluster at 4-inbound floor; no posts below baseline.

## ✅ DONE 2026-05-09 — Internal-linking pass: 4 orphaned blog posts → 4 inbound each

(Yesterday's session-log entry was written into CONTEXT.md "Last Worked On" but didn't make it into TODO.md before the file was committed. Backfilled here for the historical record.)

Audit found 4 critically-orphaned blog posts whose only inbound link was the blog index (a list page, not topical PageRank): `birthday-party-venue-near-austin`, `mothers-day-near-austin`, `things-to-do-near-austin-with-kids`, `yoga-retreat-near-austin`. 12 surgical `<li>` inserts across 7 host-page Related Reading lists brought each to 4 inbound (4x improvement). 7 sitemap lastmod entries bumped. Validation passed. Diff surgical (8 files, 12+/7 changes).

## ✅ DONE 2026-05-08 — FAQPage JSON-LD parity closure on /faqs/ (17 → 18 items)

Yesterday's TODO listed "FAQPage JSON-LD on `/faqs/` itself" as a future autonomous candidate — page allegedly had no FAQPage schema. Re-Verify Gate found the claim was a **false-positive**: a FAQPage block already existed at lines 29-122 with 17 Q&A items. Real gap was schema/accordion parity: visible accordion has 18 items, schema only 17.

1. **Diverged item identified**: "Is the ranch a working ranch?" — accordion line 419-426, missing from schema.
2. **Schema edit (`site/pages/faqs.html`)**: one Q&A appended to the FAQPage `mainEntity` array. Name "Is Rancho Moonrise a working ranch?", answer mirrors accordion with minor third-person rephrase ("Guests are asked" → consistent with rest of schema voice).
3. **Voice compliance**: no banned terms; reuses existing "working ranch with livestock and wildlife" framing; no new claims added to the page.
4. **Sitemap freshness**: `/faqs/` lastmod 2026-05-07 → 2026-05-08.
5. **Validation**: `npm run validate:site` passes. All 4 JSON-LD blocks on `/faqs/` re-parse via `python3 json.loads`: FAQPage (now 18 items), BreadcrumbList, LocalBusiness, WebPage.
6. **Question-name divergence preserved**: schema uses long-form names ("Is there a pool on the property?") while accordion uses short-form ("Is there a pool?"). For AI extraction the answer text is what gets cited; the name is metadata. Not worth churning.
7. **Diff**: 2 files, 6 insertions, 1 deletion — surgical. Pre-existing uncommitted prior-session changes in styles.css/main.js/weddings.html intentionally NOT staged (same as 5/7 run).
8. **Re-Verify Gate (live)**: apex 200 + Vercel + cache HIT, www 308 → apex, all 9 critical landing pages 200. All DNS/canonical claims still_true. **1 prior persistent claim auto-resolved** during the gate: yesterday's TODO claim about FAQPage absence was wrong; FAQPage was already present, schema/accordion parity now closed.

**Future autonomous candidates** (in priority order):
- AEO baseline measurement (rancho-seo-s7) — query AI engines for the 10 target keywords. Defer until Adam submits the GSC sitemap; signal is low before apex is in Google's index.
- Author Person schema for BlogPosting JSON-LD — BLOCKED on `NEEDS ADAM` author-byline decision (Adam vs. Ashley vs. team byline).
- Promote `/corporate-retreats/` into main nav (currently footer only) — needs Adam confirm.
- Internal-linking audit — orphaned blog posts (low inbound count) → cluster hubs.
- Article/HowTo schema enrichment on `/blog/corporate-retreat-planning-guide-texas/` — currently typed as BlogPosting, but the long-form planning-guide content fits Article (or HowTo, given step-by-step structure) better. Worth scoping next run.

## ✅ DONE 2026-05-07 — AEO answer-first blocks on faqs.html + accommodations.html

Yesterday closed image alt-text on the nav cluster. Today's audit checked 28 customer-facing pages across 6 SEO dimensions; 5/6 came back clean (duplicate titles 0, duplicate meta 0, multi-H1 0, canonical 0, blog alt-text 0). One real gap: 2 customer-facing landing pages were jumping from page-header straight into content with no AEO answer-first overview block.

1. **`site/pages/faqs.html`** — new `<section class="section aeo-block">` after page-header. H2 "Quick Answers — Stays at Rancho Moonrise" + 2 paragraphs covering 36-acre/Austin location, A/C-heat-real-beds + pool/lodge, check-in/out (3-5 PM / 11 AM), dog policy ($50 fee, 1 dog, 60-lb limit), and pointer to detailed FAQ list. Speakable cssSelector extended with `.aeo-block h2, .aeo-block p`.
2. **`site/pages/accommodations.html`** — new `<section class="section aeo-block">` after page-header, before cabin section. H2 "Where to Stay at Rancho Moonrise — Cabins and Safari Tents Near Austin" + 2 paragraphs covering cabin/safari-tent configurations, amenities, ensuite-vs-bathhouse logic, and pricing-by-config note. Speakable cssSelector extended with `.aeo-block h2, .aeo-block p`.
3. **False-positive (no change made)**: `host-your-event.html:202` already has answer-first content in `<div class="container--narrow">` and the speakable selector already references it. Adding `aeo-block` class would have introduced unwanted cream-box visual styling. Audit logic noted for future runs.
4. **Voice compliance**: keyword-leading H2 with location anchor, "20 minutes east of downtown Austin" (never "Manor"), zero banned terms. Pattern matches `safari-tents-near-austin.html:222`.
5. **Sitemap freshness**: 2 lastmod bumps to 2026-05-07 (`/faqs/` was 2026-04-30 — week-stale; `/accommodations/` was 2026-05-06).
6. **Validation**: `npm run validate:site` passes. JSON-LD on both pages parses (faqs 4 blocks, accommodations 3 blocks).
7. **Diff**: 4 files, 22 insertions, 2 deletions — surgical. Pre-existing prior-session changes in styles.css/main.js/weddings.html were intentionally NOT staged.
8. **Re-Verify Gate (live)**: apex 200 + Vercel + cache HIT, www 308 → apex, sitemap + corp-retreats + safari-tents all 200. All DNS/canonical claims still_true; no stale claims auto-resolved.

**Future autonomous candidates** (in priority order):
- AEO baseline measurement (rancho-seo-s7) — query AI engines for the 10 target keywords now that AEO blocks are wired across the cluster
- ~~FAQPage JSON-LD on `/faqs/`~~ — was a false-positive on inspection; FAQPage already existed. Real gap (17→18 parity) closed 5/8.
- Promote `/corporate-retreats/` into main nav (currently footer only) — needs Adam confirm
- Author Person schema for BlogPosting JSON-LD — BLOCKED on `NEEDS ADAM` author-byline decision

## ✅ DONE 2026-05-06 — Image alt-text audit + Instagram-grid SEO recovery

Text-CTR levers (S4 schema 5/3, meta 5/4, titles 5/5) all closed for the customer-facing nav cluster. Today extends the same "pre-position for the eventual GSC indexing" theme into Google Image Search.

1. **Audit scope**: 207 `<img>` tags scanned across 27 customer-facing pages (`site/index.html` + 26 `site/pages/*.html`). Two false-positive classes filtered: brand-wordmark logo `alt="Rancho Moonrise"` (correct W3C practice for a wordmark image — left as-is on 26 occurrences), lightbox `<img class="lightbox__img" alt="">` (JS-populated at click time per `weddings.html:720+`).
2. **9 Instagram-grid alts populated** on `site/index.html:555-579`. Each `<a aria-label="View on Instagram">` containing an empty-alt image got a descriptive + location-keyword alt. Per ARIA accessible-name rules the link's aria-label wins for SR announcement, so populating the contained image alts is **pure SEO win, zero a11y cost**. Examples: "Resort-style pool at Rancho Moonrise glamping ranch near Austin, Texas" / "Safari tent interior with queen bed and string lights at Rancho Moonrise" / "Outdoor wedding ceremony at Rancho Moonrise ranch wedding venue near Austin".
3. **3 long alts trimmed** to under 125 chars (Google/W3C cap):
   - `index.html:293` lodge-fireplace-lounge: 127 → 95 chars
   - `weddings.html:279` wedding-event-barn: 127 → 95 chars
   - `accommodations.html:161` accom-cabin-exterior: 131 → 102 chars (also caught a "Manor TX" body-tag tail — replaced with brand+Austin anchor)
4. **Sitemap freshness**: 3 lastmod entries bumped to 2026-05-06 (`/`, `/accommodations/`, `/weddings/`). `/accommodations/` was at 2026-04-08 — caught up that staleness too.
5. **Validation**: `npm run validate:site` passes. Diff: 4 files, 15 insertions, 15 deletions — surgical.
6. **Re-Verify Gate (live)**: apex 200 + `server: Vercel` + cache HIT, www 308 → apex, sitemap 200, `/corporate-retreats/` 200. All DNS/canonical claims still_true; no stale claims auto-resolved.

**Future autonomous candidates** (in priority order):
- AEO baseline measurement (rancho-seo-s7) — query AI engines for the 10 target keywords once apex is indexed
- Promote `/corporate-retreats/` into main nav (currently footer only) — needs Adam confirm
- Author Person schema for BlogPosting JSON-LD — BLOCKED on `NEEDS ADAM` author-byline decision (Adam vs. Ashley vs. team byline)
- Broader site-wide alt-text sweep on blog posts if any have similar gaps (today was nav cluster only)

## ✅ DONE 2026-05-05 — Title-tag CTR sweep (10 pages)

Yesterday closed the meta-description gap; the next strongest SERP CTR lever is the `<title>` tag. Audit found 14 customer-facing pages with rendered titles over 65 chars (Google truncates around 600px ≈ 55–60 chars). Worst offenders were 100–101 chars on the two `vs.` comparison blog posts — clearly truncating. Edited the 10 with rendered titles ≥72 chars.

1. **10 titles tightened** to 49–61 chars rendered (was 72–101). Pages: `austin-bachelorette-ranch-vs-bar-crawl` (101→58), `corporate-retreat-ranch-vs-hotel` (100→58), `yoga-retreat-near-austin` (88→61), `birthday-party-venue-near-austin` (87→57), `mothers-day-near-austin` (85→61), `host-your-event` (85→52), `corporate-retreat-near-austin` (86→57), `events` (78→56), `corporate-retreat-planning-guide-texas` (75→49), `wedding-venues-near-austin` (72→54). Keyword-leading on every page; `| Rancho Moonrise` brand suffix preserved on every page that already had it; `(2026 Guide)` retained on the two seasonal CTR-magnet titles.
2. **OG/Twitter titles deliberately untouched.** Same logic as yesterday's description sweep — different surfaces, different truncation thresholds. Several pages already had distinct, deliberate OG/Twitter title strings; editing them risked breaking working share-card framing for no SERP benefit.
3. **Sitemap freshness**: 10 lastmod entries bumped to 2026-05-05.
4. **Validation**: `npm run validate:site` passes. Diff: 11 files, 20 insertions, 20 deletions — surgical.
5. **Re-Verify Gate (live)**: apex 200 + `server: Vercel` + `x-vercel-cache: HIT`; www 308 → apex; `/sitemap.xml`, `/corporate-retreats/`, `/safari-tents-near-austin/`, `/events/`, `/weddings/`, `/faqs/`, `/host-your-event/` all 200. All DNS/canonical/sitemap claims still_true; no stale claims auto-resolved this run.

## ✅ DONE 2026-05-04 — Meta-description CTR sweep (18 pages)

S4 schema-breadcrumb-speakable hit 17/17 yesterday; next SEO bottleneck is GSC indexing (NEEDS ADAM, owned at top of file). Today's autonomous lever: raise SERP CTR for the eventual reindex.

1. **18 meta descriptions tightened** to 129–155 chars rendered (was 161–210). Pages: index, weddings, events, corporate-retreats, pool-day-pass-austin, glamping-near-austin-texas, corporate-retreat-near-austin, ranch-wedding-texas, bachelorette-party-austin-texas, glamping-vs-camping, things-to-do-near-austin-with-kids, summer-glamping-near-austin, corporate-retreat-ranch-vs-hotel, mothers-day-near-austin, birthday-party-venue-near-austin, yoga-retreat-near-austin, weekend-getaways-near-austin, corporate-retreat-planning-guide-texas. Voice-guide-clean — no banned terms; keyword-leading + Austin/20-minutes anchor preserved on every page where it was already there.
2. **Voice cleanup bonus.** `/blog/ranch-wedding-texas/` was using "Rancho Moonrise in Manor, TX" in its meta description. Per Ashley's directive (Manor, TX = schema/alt text only, not body copy), this was a SERP-visible violation. Rewrite drops the Manor reference.
3. **OG/Twitter descriptions left alone.** Each page already had distinct OG and Twitter description strings; truncation thresholds are different (OG no hard cutoff, Twitter ~200). Editing them risked breaking existing share-card framing for no SERP benefit.
4. **Sitemap freshness**: 18 lastmod entries bumped to 2026-05-04 to nudge re-crawl when Google next visits the apex sitemap.
5. **Validation**: `npm run validate:site` passes. Diff: 19 files, 36 insertions, 36 deletions — surgical.
6. **Re-Verify Gate (live)**: apex 200 + `server: Vercel` + `x-vercel-cache: HIT`; www 308 → apex; `/sitemap.xml`, `/corporate-retreats/`, `/safari-tents-near-austin/`, `/events/`, `/weddings/`, `/faqs/` all 200. All DNS/canonical claims still_true.

## ✅ DONE 2026-05-03 — `/events/` AggregateRating closure (last customer-facing landing-page gap)

`/events/` was the only customer-facing landing page still missing `aggregateRating` (the 4-30 closure on faqs+contact got 16/17). Today's edit closes it.

1. **Schema edit** (`site/pages/events.html`): existing `WebPage` JSON-LD block (the SpeakableSpecification block) extended with `publisher.Organization` carrying `aggregateRating` 4.9 / 125 / bestRating 5. Same `publisher.Organization` shape adopted 2026-04-29 for the 4 BlogPosting landing pages — keeps the rating on the venue Organization entity and off the WebPage entity. No new top-level JSON-LD block.
2. **Validation**: all 3 JSON-LD blocks parse via `python3 json.loads` (Event[4], WebPage with publisher.aggregateRating + speakable, BreadcrumbList). `npm run validate:site` passes.
3. **Sitemap freshness**: `/events/` lastmod 2026-04-27 → 2026-05-03.
4. **Re-Verify Gate**: pre-edit live curl confirmed apex 200 + Vercel server + cache HIT, www 308 → apex, sitemap + 5 critical landing pages all 200. No stale claims to auto-resolve.

## ✅ DONE 2026-05-02 — Internal-link pass to `/corporate-retreats/`

Yesterday's new landing page launched with 0 internal inbound links. Today's pass wires it into the topical cluster so it inherits link equity from established hub pages.

1. **Edits (6 files):**
   - `site/index.html` About Split paragraph — inline anchor on "corporate retreat".
   - `site/pages/host-your-event.html` Corporate Retreats feature card — href flipped from `/blog/corporate-retreat-near-austin/` to `/corporate-retreats/`. Better conversion-intent match.
   - `site/pages/weddings.html` Related Reading list — added `/corporate-retreats/` item.
   - `site/pages/corporate-retreat-near-austin.html` — 2 inbound links (Related Reading top + replaced duplicate `/host-your-event/` feature card with the canonical venue page); also added cross-link to `/blog/corporate-retreat-ranch-vs-hotel/`.
   - `site/pages/corporate-retreat-planning-guide-texas.html` Related Reading — top-of-list link + ranch-vs-hotel cross-link.
   - `site/pages/corporate-retreat-ranch-vs-hotel.html` "More on Corporate Retreats" — top-of-list link.
2. **Sitemap freshness**: 7 lastmod entries bumped to 2026-05-02 (`/`, `/weddings/`, `/host-your-event/`, `/corporate-retreats/`, and the 3 corp-retreat blog posts).
3. **Validation**: `npm run validate:site` passes.
4. **Final inbound count**: index 1, host-your-event 1, weddings 1, corporate-retreat-near-austin 2, corp-retreat-planning-guide-texas 1, corp-retreat-ranch-vs-hotel 1 = **7 links from 6 sources**.

## ✅ DONE 2026-04-30 — Adversarial site repair: canonical, crawlability, conversion tracking prep

1. **Canonical host resolved.** Vercel project domain settings now make `https://ranchomoonrise.com` primary and permanently redirect `https://www.ranchomoonrise.com` → apex with 308. Project firewall config checked via Vercel API; no active/draft challenge rules were present.
2. **Sitemap rewrite gaps closed.** Added clean public rewrites for the five sitemap blog URLs that previously had no `vercel.json` route: bachelorette ranch vs bar crawl, corporate retreat ranch vs hotel, Mother's Day, birthday party venue, and yoga retreat.
3. **Clean-route internal links.** Customer-facing internal links now use public routes instead of `/pages/*.html` wherever a rewrite exists.
4. **Broken assets and stale claims fixed.** Corrected Lone Star Party image names, removed the missing 1024w safari-tent bright reference, scrubbed specific 50-overnight/Hill Country/$3K/breakfast-taco claims, kept review count at 125, and renamed virtual-tour CTAs so they do not promise a real booking URL yet.
5. **Analytics placeholder centralized.** `window.RANCHO_ANALYTICS_CONFIG` documents the future GA4/GTM slot without fake IDs; `window.rmTrack` remains the event abstraction.
6. **Static validation added.** `npm run validate:site` now checks JSON-LD parsing, local asset references, sitemap URL rewrite coverage, apex host consistency, stale/risky claim patterns, and clean-route link hygiene.

**NEEDS ADAM follow-ups:**
- [ ] **Submit apex sitemap in GSC:** `https://ranchomoonrise.com/sitemap.xml`.
- [ ] **Provide GA4 measurement ID or GTM container ID.** Site-side placeholder is ready; no fake analytics ID was installed.
- [ ] **Provide a dedicated virtual walkthrough booking URL** if that should become a real scheduling CTA.
- [ ] **Defer static partials/templates refactor** to a later branch. This repair stayed framework-free by design.

## ✅ DONE 2026-04-30 — DNS cutover live + AggregateRating utility-page closure

1. **🚀 DNS cutover verified live.** `curl -I https://ranchomoonrise.com/` returns `server: Vercel` + 307 → `https://www.ranchomoonrise.com/` (HTTP 200, `x-vercel-cache: HIT`). The #1 SEO blocker since the new site shipped is RESOLVED. Auto-resolved `rancho-p2-11-website-launch-dns` in `rancho-done-log.md`.
2. **AggregateRating extended to the 2 remaining utility pages.** `contact.html` got it nested into the existing `LocalBusiness` under `mainEntity` of the `ContactPage` block (cleanest schema — no new top-level block). `faqs.html` got a stand-alone `LocalBusiness` JSON-LD (FAQPage has no `publisher` slot to nest into). Both use the site's standard 4.9 / 125 / bestRating 5 anchor. Coverage now 16 of 17 customer-facing pages.
3. **Sitemap freshness**: `/contact/` lastmod 04-07 → 04-30; `/faqs/` lastmod 04-08 → 04-30. All 7 JSON-LD blocks across both pages validate.

**NEW NEEDS ADAM (post-cutover):**
- [x] **Canonical strategy decision (apex vs www).** Resolved 2026-04-30: apex is canonical and Vercel primary domain; `www` redirects to apex.
- [ ] **GSC sitemap submit (rancho-seo-s6).** Submit `https://ranchomoonrise.com/sitemap.xml` to Search Console. This was blocked on cutover; now actionable.


## ✅ DONE 2026-04-28 — Scroll effects (5 patterns from grandladyaustin.com)

Added `site/js/scroll-effects.js` (vanilla JS, no libs) + ~150 lines of CSS at the end of `site/css/styles.css`. CSS bumped to `?v=15` on `index.html`.

1. **Parallax hero** — `.parallax-hero` on hero bg div(s) of `index.html` (5 slideshow slides), `weddings.html`, `host-your-event.html`, `accommodations.html`. JS does `translate3d(0, scrollY * 0.4, 0)` via rAF. Skipped on touch + reduced-motion.
2. **Stagger reveals** — `.reveal-stagger` on the venue-duo quad and events-grid on `index.html`; children fade-up with 0.15s stagger. Coexists with main.js's `.reveal` handler (no double-binding).
3. **Nav `.scrolled` state at 80px** — independent of main.js's `.nav--scrolled` (60px). Past 80px nav background swaps to `var(--color-footer-bg)` at 95% with `backdrop-filter: blur(10px)`.
4. **Sticky text + scrolling images** — new "Entirely Yours" section on `index.html`. Pure CSS sticky on `min-width: 900px`; stacks on mobile.
5. **Horizontal drag gallery** — new "From Our Guests" section on `index.html` using 20 photos from `site/visitor-photos/visitor-photo-01.jpg` through `-20.jpg` (copied from repo-root `visitor-photos/`). Mouse + touch drag, scrollbar hidden, 420px desktop / 280px mobile.

**Verified in preview (port 8080):** zero console errors. Parallax transform fires (`translate3d(0, 160px, 0)` at scrollY 400 on weddings.html). `.nav.scrolled` resolves to `rgba(30, 27, 22, 0.95)` + blur. Drag gallery overflows correctly (scrollWidth 7315 vs clientWidth 1265). Sticky H2 renders Americane 40px on cream. Existing main.js `.fade-in` / `.reveal` / `.nav--scrolled` / FAQ accordion all still firing.

## ✅ DONE 2026-04-25 (evening) — Routing + Calendly cleanup

1. **`api/inquiry.js` event_type mapping rewritten** — no more CRM-invalid `general` / `event_other`. Always maps to one of `wedding | private_event | glamping | pool_day_pass | corporate | other`. 17/17 unit cases pass.
2. **Calendly placeholder URLs hard-wired in HTML** across `weddings.html` (4), `contact.html` (5), `host-your-event.html` (2). `tour` → `calendly.com/rancho_moonrise/connect`, `call` → `calendly.com/monet-b30w/30min`, both with `target="_blank" rel="noopener"`. `virtual` still falls back to `/pages/contact.html?intent=wedding` until Adam supplies a Calendly URL. Crawlers and no-JS users now get correct destinations without depending on `main.js`.

## ✅ DONE 2026-04-25 — Pre-launch CRO/QA pass

Launch-blocker sweep across the Vercel site ahead of DNS cutover. Full breakdown in CHANGELOG.md.

1. **Calendly placeholders wired to real URLs** — `tour`→`calendly.com/rancho_moonrise/connect`, `call`→`calendly.com/monet-b30w/30min`. `virtual` (30-min walkthrough) has no URL yet — falls back to `/pages/contact.html?intent=wedding` (form + phone fallback intact).
2. **Page-specific mobile sticky CTAs** — homepage "Plan an Event", weddings "Send a Wedding Inquiry", host-your-event "Send an Event Inquiry", accommodations + safari-tents "Check Availability", contact "Call 737-291-1260", pool already correct.
3. **Form hardening** — phone required on wedding/event forms with auto-attached asterisk; `page_path` / `source_url` / `submitted_at` / `referrer` hidden fields stamped at submit; `host-your-event.html` form's missing `inquiry_type=event` hidden input added.
4. **Risky claims softened** across contact, weddings, host-your-event — pricing-frame language replaces "we respond immediately" / "we'll send package details right away" / "within 2 hours" / hard bar pricing tiers ($7-$15/pp/hr).
5. **Analytics scaffold** — `window.rmTrack` + click auto-binder for `cloudbeds_click` / `resortpass_click` / `calendly_click` / `phone_click` / `email_click` / `form_submit_success` / `form_submit_error` / `wedding_inquiry_submit` / `event_inquiry_submit` / `general_inquiry_submit`. Auto-tags by URL pattern so nav/footer Book Now links emit conversions site-wide. **NEEDS ADAM:** GA4 measurement ID or GTM container ID.
6. **Voice scrub** on primary pages — all "50 overnight guests" / "Multiple Ceremony Sites" / "$3K bar package" specifics removed; replaced with "your wedding party" / "Unlimited Ceremony Layouts" / venue-mandatory bar policy from VOICE-GUIDE.
7. **Stale event QA** — `index.html` static event grid Apr 24 Free Friday → May 29 (live Supabase hydrator unaffected, this is the no-JS / SEO fallback).
8. **Phase 2 CRO improvements:**
   - Homepage trust bar near top + hero CTAs reordered to lead "Plan an Event"
   - Wedding page "What Drives Wedding Pricing" + bar-policy section
   - Private events page "What Drives Event Pricing" + bar-policy section + dual hero CTAs
   - Accommodations "Good to Know — Before You Book" objection-answers block (bathrooms, A/C, pool, parking, pets, check-in/out, alcohol, quiet hours)

**Verified locally** at desktop + mobile (375×812) on homepage, weddings, host-your-event, accommodations, contact, events. No console errors. Calendly resolution confirmed via DOM eval. Phone-required + asterisk attachment confirmed. Local `/api/inquiry` returns 404 because `server.js` doesn't proxy serverless functions (production webhook only runs on Vercel) — intentional, no fake leads submitted.

**NEEDS ADAM follow-ups (logged in CONTEXT.md "What's Next"):**
- [ ] **Provide GA4 measurement ID or GTM container ID** — site already emits all conversion events through `window.rmTrack`. Wiring GA4/GTM is a single `<script>` in the page head.
- [ ] **Provide Calendly URL for 30-min virtual wedding walkthrough** — once you have it, add the URL to `CALENDLY_URLS.virtual` in `site/js/main.js`. Two link instances will pick it up automatically (`weddings.html:450`, `contact.html:216`). No HTML edits required.

## ✅ DONE 2026-04-21 — Admin Galleries Build + 4-Page Photo Hydration

Shipped the capstone of the admin panel refactor: Ashley can now CRUD photos directly from `/admin` without touching code.

1. **Events admin auto-sorted by closest date first** — `site/admin/index.html` events list now ascending by `event_date` (upcoming on top, past at bottom).
2. **New Galleries admin tab** — picker for 5 sections (`events_barn`, `weddings`, `pool`, `lodge`, `ranch_tour`), full CRUD: upload to `rancho-moonrise/galleries/` Supabase Storage bucket, edit alt_text/title/sort_order, toggle `is_active`, delete. Single Tab UI alongside existing Events and Photos (hero slideshow) tabs.
3. **Expanded `rancho_photos.section` CHECK constraint to 9 values** — was 4, now includes the 5 new gallery sections.
4. **Seeded 64 rows into `rancho_photos`** from the hardcoded HTML across the 4 public pages (legacy pattern: `storage_path='legacy/...'`, `public_url='/images/...'`).
5. **Hydrated 4 public pages from Supabase:**
   - `events.html` — `events_barn` (12 photos)
   - `weddings.html` — `weddings` (17 photos) — lightbox preserved via event delegation + `gallery:hydrated` CustomEvent (tiles rebuilt as `<button>` with regenerated `data-lb-index`, lightbox re-runs `collectPhotos()` on event)
   - `pool-day-pass-austin.html` — `pool` (6 photos)
   - `accommodations.html` — `lodge` (9) + `ranch_tour` (20), single hydrator handles both via `querySelectorAll('[data-gallery]')`
6. **All hydrators non-blocking** — hardcoded HTML stays as SEO fallback if fetch fails. Responsive srcset derived from `-1024.webp` / `-1920.webp` naming pattern.

Commit `96f6f96`, pushed to origin. Vercel deploy `dpl_7XsYa1pg1u7XweUDZfYVG7v4Rg5H` state **READY** (build time ~19s, region iad1). Live on `rancho-moonrise.vercel.app`.

## ✅ DONE 2026-04-21 — Pre-DNS-cutover event sweep

Triple workstream the day before the DNS cutover. All blocking items closed.

1. **Ashley admin login verified** — Reset `aludkows@gmail.com` password directly via Supabase `auth.users` using `pgcrypto` (`crypt('...', gen_salt('bf', 10))`) — no service_role key needed. Verified login via `/auth/v1/token?grant_type=password` against the anon key — returned a valid access_token. Password reset email then sent to **howdy@ranchomoonrise.com** (not `aludkows@gmail.com` — per Adam's directive since Ashley has mailbox access to howdy@). First Outlook draft had a CDATA encoding bug — discarded and regenerated clean; Adam to send the second draft.
2. **events.html cleaned + wired to Supabase** — Cross-referenced old WordPress `ranchomoonrise.com/events/list/` and verified no events missing. Added 130-line client-side hydration block in `events.html` (lines 797-925): JS fetches from Supabase REST `rancho_events` table with anon key, pulls `status=eq.published` and `event_date>=now()`, replaces hardcoded May/June/July/August grid while preserving hardcoded HTML as SEO fallback. Verified syntax with `node --check`. Data-events-month attributes confirmed at lines 231 (April), 280 (May), 389 (June).
3. **Supabase data cleanup** — Fixed 4 title mismatches (WordPress canon vs. Supabase), inserted 2 missing events (Rancho Rodeo: Cinco De Mayo, Lone Star Party), assigned artwork_url to 2 NULL rows (Rosés Around the World → `hero-sunset-roses.jpg`, Sunday Funday → `event-free-friday-pool.webp`). Column name fix: `ticket_url` (singular), not `tickets_url`.
4. **GBP event backlog cleared via Publer** — Root cause of "only 1 event posted yesterday": n8n workflow `QYxXYLx5WgKI9393` uses a 7-day lookahead, so on 2026-04-20 only Apr 26 Yoga was caught (Apr 24 Free Friday was already `gbp_posted=true`). Working as designed. Solution: bypass n8n, manually push backlog via bash + curl mirroring workflow logic. Built `/tmp/gbp-post/post-event.sh` — downloads image from Vercel, uploads to Publer with explicit `Content-Type: image/webp|jpeg|png` (Publer rejects `.bin` / missing MIME), schedules GBP post via `/api/v1/posts/schedule` with 15-min stagger starting at now+10min. Posted 12 events (May 02 through Aug 30) at 16:01Z–18:47Z UTC = 11:01 AM–1:47 PM CDT. All 12 rows marked `gbp_posted=true` in single SQL tx. `still_unposted=0` verified post-run. Inserted audit row into `n8n_run_logs` with `workflow='gbp-event-sync-manual'`.

**Publer job_ids captured** (all @ 2026-04-21):
- Cinco De Mayo 05-02 → `69e79cfddf0b0c07bbc36963` @ 16:01Z
- Mother's Day Retreat 05-10 → `69e79d1078f5d69b2b037c66` @ 16:16Z
- Sunday Funday 05-24 → `69e79d12a758d2afe1dce9dc` @ 16:31Z
- Rosés Around the World 05-24 → `69e79d1ddf0b0c07bbc369c8` @ 16:46Z
- Yoga & Mimosas 05-31 → `69e79d1f4691a4d56f9437ab` @ 17:01Z
- Rancho Rodeo: Sun Series 06-06 → `69e79d20a758d2afe1dce9f7` @ 17:16Z
- Paella Dinner Party 06-20 → `69e79d2a1e6e96dad0ebec8b` @ 17:32Z
- Yoga & Mimosas 06-28 → `69e79d2c1e6e96dad0ebec91` @ 17:47Z
- 4th of July Music Festival 07-04 → `69e79d2ddf0b0c07bbc36a13` @ 18:02Z
- Lone Star Party 07-18 → `69e79d378dca9d3a132c7012` @ 18:17Z
- Yoga & Mimosas 07-26 → `69e79d3878f5d69b2b037d02` @ 18:32Z
- Yoga & Mimosas 08-30 → `69e79d398dca9d3a132c701f` @ 18:47Z

**NEEDS ADAM follow-ups:**
- [ ] Send clean Outlook draft #2 (password reset) to howdy@ranchomoonrise.com — discard the first one (CDATA bug)
- [ ] Confirm Ashley can log in after she receives it
- [ ] DNS cutover tomorrow — once live, re-test Supabase hydration + events.html loads from the final hostname

## ✅ DONE 2026-04-11 — Color revert on Codex audit commit

Adam rejected the visual half of commit `4ca2778` ("fix(site): improve audit findings and mobile UX"). Codex had swapped the nav from terracotta orange to near-black, repainted `.section--dark` and every `.page-header` from cream `--color-bg-alt` to a dark brown gradient, turned the mobile menu dark, wrapped the hero copy in a glass card, and restyled event cards / events toggle / mobile CTA with gradients and heavy shadows. All color/visual changes were surgically reverted inside `site/css/styles.css` — NO `git revert` — so the real bug fixes underneath stay in place.

**Restored to pre-4ca2778 state:** `--color-bg #F2E9DB`, `--color-bg-alt #ebe3d5`, `--color-bg-card #faf7f2`, `--color-heading #2a2520`, `--color-footer-bg #1e1b16`, body background to noise SVG only, `.section--dark` to `background: var(--color-bg-alt)`, `.nav` to `rgba(182, 96, 63, 0.78)` terracotta, `.nav--scrolled` to `rgba(182, 96, 63, 0.92)`, `.nav__logo-img` to solid white plate, nav "Book Now" button to white with terracotta text, mobile menu to white, hero `align-items: center` with no glass card panel, hero overlay back to stock `rgba(0,0,0,0.10/0.20/0.50)`, `.page-header` to `background: var(--color-bg-alt)`, `.page-header--hero::before` opacity `0.26 → 0.15` (dropped the extra `::after` darkener), events view toggle to cream, event cards to `--color-bg-card`, events calendar grid + cells + events to original flat styling, event popup to white, mobile CTA to flat terracotta, footer dropped the inset shadow.

**Preserved from Codex's commit** (real bug fixes, not visual):
- Mobile hero sizing clamps in `@media (max-width: 480px)` — `.hero__title { font-size: clamp(1.45rem, 6.2vw, 2.05rem); max-width: 11ch }`, `.hero__content { width: calc(100vw - 24px); margin: 0 12px 84px; padding: 22px 16px 24px }` — this was a genuine mobile-layout bug fix.
- `text-wrap: balance` on `.hero__title`, `max-width: 34rem` on `.hero__subtitle`.
- `.form-status` utility class.
- `topicOverride()` fix in `site/js/main.js` — concierge no longer misroutes wedding/event pricing questions.
- Inquiry/contact form `mailto:events@ranchomoonrise.com` fallback (replaces dead `action="#"`).
- `site/pages/accessibility.html` (new page — fixes broken footer link).
- Favicon and OG image reference fixes across pages.

**Verified locally** via preview at `http://localhost:8080`:
- Homepage: orange terracotta nav strip, white logo plate, hero has no glass card overlay, cream body background.
- Events page: cream page header with dark text, cream event cards with subtle borders, cream events view toggle with flat-orange active state.

**Still NEEDS ADAM on inquiry forms** — the mailto fallback is a safety net, not a backend. A real handler (Formspree / Netlify Forms / Vercel serverless → email + Salesforce `create_lead`) is still the right answer and should land on the DNS cutover checklist. Same item already tracked under "Wedding inquiry form backend" below.

## ✅ DONE 2026-04-10 — Responsive image pipeline (Option C)

Fixed Adam's "photos on Vercel look shitty" complaint. Root cause: CSS `background-image` has no srcset support, so a phone and a 4K desktop were fetching the same single-size WebP, sized wrong for both. Fix was three pieces:
1. `scripts/generate-responsive-images.sh` — idempotent WebP ladder (480/1024/1920/2560/3840 for full tier, 400/800/1200 for medium tier), cwebp `-q 88`, never upscales.
2. `scripts/apply-srcset.py` — idempotent HTML sweep that rewrites bare `<img src>` into srcset-aware tags. Rewrote 42 tags across 7 files.
3. Hero slideshows + CTA banners refactored from `div[style=background-image]` to real `<img class="hero__img">` with `object-fit: cover` + `object-position` replacing `background-position`. Manual `data-srcset` promotion in `loadSlide()` because stacked absolute slides defeat native `loading="lazy"`. Preload hints upgraded to `imagesrcset`/`imagesizes`/`fetchpriority="high"`.

Commit `547abfa`, Vercel deploy `dpl_948R6gNKCNUeDSuosKZjvczyJ8oz` READY. See CHANGELOG 2026-04-10 "Responsive Image Pipeline" for full details.

**Open data gap (NEEDS ADAM):**
- [ ] **Re-upload 8 low-res source JPGs at 2560px+.** The pipeline is live and working, but the ladder caps at source dimensions (the script refuses to upscale — correctly). See CONTEXT.md "Low-res source JPGs" table. Priority order:
  - **HIGH — `feature-wedding.jpg`** (currently 1060×651, caps at 1024w) — bride-critical, on the weddings page feature section
  - **HIGH — 4 accommodation cards** (`accommodation-cabin.jpg`, `accommodation-double-safari.jpg`, `accommodation-family-safari.jpg`, `accommodation-premium-safari.jpg`) — currently 336-350 px thumbnails being upscaled on room-type cards, re-upload at 1600×1600+ minimum
  - **MEDIUM — `venue-event-barn.jpg`** (1067×1600 portrait) — host-your-event hero
  - **MEDIUM — `about-ranch-aerial.jpg`** (1600×1067) — index about section
  - **MEDIUM — `feature-safari-tent.jpg`** (1706×1017) — index feature section
  - After re-upload: rerun `./scripts/generate-responsive-images.sh` and commit. No HTML changes needed — the `<img srcset>` tags already reference the full ladder filenames.

## ✅ DONE 2026-04-10 — Phase 3 UI refinements

Logo size bump site-wide (`.nav__logo-img` 72→112 px desktop, 44→68 px scrolled, 32→48 px tablet, 30→44 px narrow mobile), weddings.html `#wedding-inquiry` replaced with exact contact.html wedding form and repositioned directly under the Schedule a Venue Tour section, and the 5 weddings FAQs converted from plain h3+p to `.faq-item` accordion markup so they collapse/expand on click (existing main.js handler picks them up automatically). CSS cache-bust `v=9 → v=10` across all 15 pages. Commit `e9fb9e3`, live on `https://rancho-moonrise.vercel.app/`. See CHANGELOG 2026-04-10 "Phase 3 UI Refinements".

## ✅ DONE 2026-04-10 — Phase 2 UI fixes

Button visibility fix (root cause: `.btn--primary` was transparent + white text on cream), nav logo swap (Secondary lockup → Tertiary wordmark, 88×88), nav social icons moved right of Pool Passes across 15 pages, weddings FAQ renamed + shortened + FAQPage schema, new `#wedding-inquiry` form on weddings.html, and **pre-existing `.reveal` bug fixed** (section labels were permanently invisible site-wide — `main.js` IntersectionObserver only watched `.fade-in`). Commits `ddf556e` + `36fb00d`, live on `https://rancho-moonrise.vercel.app/`. See CHANGELOG 2026-04-10 "Phase 2 UI Fixes".

**Open follow-up (carried forward from Phase 2):**
- [ ] **Wedding inquiry form backend** — `weddings.html#wedding-inquiry` and `contact.html` wedding section both use `action="#"` placeholder. Now that Phase 3 made the two forms identical (same field schema), one backend wire-up covers both. Needs Formspree / Netlify Forms / Vercel serverless → email + Salesforce create_lead. Current UX: form submits and does nothing. Flag on the DNS cutover checklist.

## ✅ DONE 2026-04-10 — Brand-facts site sweep

All 17 customer-facing HTML pages + `js/main.js` swept clean of banned terms. Live on `https://rancho-moonrise.vercel.app/`. Commits `59beb4b` + `5bbf84d`. See CHANGELOG 2026-04-10 "Brand-Facts Site Sweep Shipped" for the full breakdown.

**Open asset gap (follow-up):**
- [ ] **Wedding gallery photos** — weddings.html has a 6-tile placeholder grid with "photos coming soon" note. Needs curated real-wedding photo set from Ashley. When photos arrive, replace the empty `.wedding-gallery__tile` divs with `<img>` tags, remove `aria-hidden="true"` from the grid, and delete the placeholder note.

**Google Business (from same call):**
- [ ] Set Monday = closed, Tuesday = closed (or minimal hours)
- [ ] Voicemail greeting: note Mon/Tue closed, responses resume Wednesday

**Reviews (context for Task #1 review replies):**
- The 1-star F1 weekend review is **neighbor noise, not ranch noise**. Ashley is planning to respond herself. Response strategy: acknowledge F1 weekend is an annual anomaly (neighbors run amplified music activations), outside ranch control, extend goodwill. F1 is the one anomaly — not a recurring noise issue.

## Flagged conflicts with existing documentation
- `ARCHITECTURE.md` and `CONTEXT.md` historical entries may still reference "20 acres" or "Manor, TX". Left as-is for now since they're internal ops docs, but flag for cleanup if they get quoted into customer-facing content.
- `brand/2022-brand-guidelines.txt` and other historical decks (`2023-11-weddings-deck.txt`, `2024-01-retreats-deck.txt`, etc.) likely contain the banned language — these are historical artifacts, do NOT edit, but do NOT quote from them into new copy without filtering through the updated voice guide first.
- `brand/HoneyBook-Wedding-Flow-Content.md` is scraped from the live HoneyBook flow — likely contains banned terms. Not editing (it's a snapshot), but flag that the HoneyBook flow itself needs the same sweep the site does.
- Per-tract acreage in `CONTEXT.md` ("Tract I 9.9 ac + Tract II 11 ac + Tract III 10.7 ac = 31.6 ac") does not match the "36 acres" figure Ashley gave. **RESOLVED for website (2026-04-10):** Adam confirmed — use **36 acres** in all customer-facing copy. Deal-file reconciliation remains open for buyout modeling (see below).
- [ ] **Deal file acreage reconciliation** (separate from website copy) — before buyout modeling is final, confirm whether 36 acres is the total operational footprint (rounded up from 31.6), includes land outside the three tracts, or is a different measurement basis. Not blocking website work.


## Now (this week — April 20-26)

### ✅ DNS CUTOVER LIVE (verified 2026-04-30)
- [x] DNS cutover from BofillTech → Vercel — verified live 2026-04-30 (`server: Vercel`, www host serves HTTP 200)
- [ ] **Post-cutover smoke test (NEEDS ADAM or next interactive run):** load `/pages/events.html` on `www.ranchomoonrise.com`, verify Supabase hydration populates the month grids, verify no mixed-content / CORS errors, verify all 12 GBP posts scheduled 04-21 render correctly on the GBP listing over the next few days.
- [ ] **Ashley:** confirm admin login (howdy@ranchomoonrise.com Outlook draft #2)

### CLAUDE (next task to build) — Re-verify gate for Rancho
- [ ] **Create `rancho-review-monitor` scheduled task** — mirror `acr-review-monitor` pattern, own Rancho GBP review-reply state as a live claim. Use the shared gate at `/Users/adamstyer/Documents/client-ops/templates/re-verify-before-report.md`. Verification path: public GBP page scrape or Places API `place.reviews[].reply` presence. First-run responsibility: re-verify every live-claim finding currently in CONTEXT.md Active Blockers + improvement-plan.html Plan-tab task cards, auto-resolve stale ones into `rancho-done-log.md`. Expected ~30 min fork of acr SKILL.md.
- [ ] **Add Re-Verify Gate to `rancho-site-daily` SKILL** — same runbook, for SERP/indexing claims it currently surfaces without re-checking.
- [ ] **Add Re-Verify Gate to `rancho-competitive-weekly` SKILL** — same runbook, for competitor-state claims.


### NEEDS ADAM — Weekly Strengthener Blockers (added 2026-04-22, **3rd consecutive blocked run 2026-05-06**)
**Status:** rancho-content-weekly produced zero website edits for three weeks running (4/22, 4/29, 5/06) because both prerequisites are unowned. **Single ask** (not A/B menu anymore — both options were offered 7 days ago and 14 days ago without movement): pick one of (1) settle both decisions in next Monday's GOALS.md update (2026-05-11) — both items are <30 min combined, or (2) pause `rancho-content-weekly` in `GOALS.md` → "Paused Workstreams". If 5/11 lands and neither is done, the 5/13 run will recommend pausing by default.
- [ ] **Create approved testimonials list for website use.** `rancho-content-weekly` strengthener task needs real guest quotes tied to verified event dates to place on landing pages (weddings, accommodations, events, etc.). The review report has some snippets but none are verified or on an approved list. Curate 10–15 real quotes from Google/Knot reviews, note the event date, and save as `brand/approved-testimonials.md`. Required before the weekly strengthener can add social proof to any page.
- [ ] **Decide: Adam or Ashley as named content author on website pages?** The weekly strengthener adds an author byline block to landing pages. It can't proceed without knowing who to attribute. Options: (a) Ashley as "your host" (authentic — she runs day-to-day), (b) Adam as "advisor/strategist" (if Adam writes the copy), (c) "The Rancho Moonrise Team" as a generic byline (no named person required). Save decision in GOALS.md under "Settled Decisions."

### NEEDS ADAM — GBP work (newly unblocked, he has Manager access)
- [x] Reply to all 9 unreplied Google reviews — DONE 2026-04-14 per done-log (RESOLVED by Adam)
- [x] Replace blog post in GBP "From the owner" with real business description — DONE 2026-04-15 (Task 2)
- [x] Set business hours on GBP — DONE 2026-04-15 (Mon/Tue closed, Wed–Sun 9–8)
- [x] Answer remaining amenity categories on GBP — DONE 2026-04-15
- [x] Add opening date + HTTPS website + phone verify — DONE 2026-04-15
- [x] **GBP primary category swap Hotel → Event venue** — Adam 2026-04-15. Hotel category blocked the "From the owner" description field entirely; Event venue + Wedding venue is a truer match for how the property actually books revenue (46% private events, 31% rooms). Hotel stays on as a secondary category so lodging queries still hit.
- [x] Answer the unanswered pool day pass Q&A on GBP — DONE 2026-04-15 (Adam answered directly). 10 seed FAQs added to faqs.html instead (GBP Q&A seeding UI unavailable). Task 3 RESOLVED.
- [x] Verify social profile links on GBP (Task 7 — MANUAL) — DONE 2026-04-16 per done-log
- [ ] Enable Google Chat on GBP (Task 15 — MANUAL)
- [ ] Upload 10+ owner photos to GBP across all categories (Task 27 — MANUAL)

### NEEDS ADAM — Improvement plan data sources
- [ ] **Fill GSC rows on improvement-plan.html** (impressions / clicks / CTR / avg position / pages indexed) — grab from [search.google.com/search-console](https://search.google.com/search-console) last-28-days view, paste numbers to Claude, or greenlight the n8n workflow option below. GSC has no access gating, unlike GBP.
- [x] **Decide: automate GBP + GSC monthly pull?** ✅ 2026-04-14 — greenlit. Design spec landed at `brand/n8n-metrics-pull-spec.md`. Build in next n8n session: GSC weekly workflow first (no gating, ~1.5 hr), GBP email parser second (after the April email lands ~May 6, ~45 min).
- [ ] **Pull Photo views + Bookings from GBP dashboard** — not in the monthly email; need a one-time manual grab from business.google.com until GBP API access lands.

### NEEDS ADAM — From 2026-04-23 Ashley Onsite Meeting
- [ ] **Respond to Cynthia on Yelp** (grad party, 20 people daytime) — barn rental at ~$75/hr + venue alcohol framing. **Do NOT quote $3K package.** Pricing rule codified in `brand/voice-guide.md` → "Inquiry Responses — Pricing Frames".
- [x] ~~Fix hot tub listing on GBP~~ — DONE 2026-04-24 (commit `0bec5cf`). Chatbot KB + GBP profile fields doc updated.
- [ ] **Re-report Scott Morgan 1★ review on Google Maps** — Ashley thought it was gone; it's still live. Try "low quality information" or "off topic" classification.
- [ ] **Update Ashley's Gmail profile photo** — she called it out at the meeting.
- [ ] **Document Paul/Donna step-away email + Ben/Robert counter** → send summary to Nancy. Material deal development. Donna still unilaterally renewing insurance.
- [ ] **Business plan + projections for Christopher** — Ashley's call: realistic projections are the next move to close. Needed anyway for buyout modeling.
- [ ] **Alternate path to QuickBooks access** — Beth (bookkeeper) is a Donna loyalist, cannot be used as a resource. Even Beth thinks Donna is unreasonable. Need a different path.

### Ashley-requested website batch (small, safe to ship together)
- [ ] Nav order: Happenings → Accommodations → Weddings → Private Events → Contact
- [ ] Remove small floating text blocks at top of RM Events and Private Events pages
- [ ] Replace wrong section photos — birthday section currently shows Lone Star (wrong); day retreats currently shows yoga mimosas (wrong)
- [ ] Color/logo update: swap green to sage or stone; square logo → stone color
- [ ] Mobile audit — some blocks still render wonky on phone
- [ ] Add "Manor, TX" to location tags / schema / alt text (NOT body copy — Ashley refuses)

### Major next project — Inquiry auto-responder
- [ ] Set up shared inquiry inbox (`inquiries@ranchomoonrise.com` or similar) for Ashley + Monet
- [ ] Build auto-responder: read inquiry → send customized response → start drip if no reply → hand off to human at tour/booking stage
- [ ] Enforce pricing-frame rules from voice guide at draft-send time (hold for human review on violation)
- [ ] Consider SMS follow-up in the drip
- [ ] Feedback loop: Ashley corrects bad drafts, corrections refine the prompt
- [ ] Current funnel math: ~100 inquiries → 10 replies → 2 tours → 1 booking. Target: raise reply rate with auto-response, raise tour rate with better qualifying questions.

### Operational gap — Bar manager
- [ ] Flag to Nancy: bar manager is effectively a full-time role with no one filling it. Alcohol ordering (25 distributors, minimums, tracking) is currently on Ashley on top of everything else. Biggest single operational risk.

### Deprioritize / kill (per Ashley)
- [x] ~~Blog pipeline (ongoing)~~ — PAUSED per Ashley 2026-04-23. Do not push new drafts until she has bandwidth to review. Does not apply to scheduled SEO daily runs that have already shipped.
- [x] ~~WeddingWire paid placement~~ — Ashley skeptical after The Knot $1K/mo × 8–10 months = zero bookings. Open the free listing (already tracked) but don't spend.
- [x] ~~Breakfast taco upsell~~ — killed (not sustainable without on-site food).

### NEEDS ADAM — From 2026-04-23 Bi-Weekly Audit
- [ ] **Claim TripAdvisor listing** — 20 minutes, free. Still 0 reviews / unclaimed at audit time. Biggest multi-platform discoverability gap on the books.
- [ ] **Open WeddingWire listing** — 30 minutes, free. No listing exists.
- [ ] **Wire wedding inquiry form backend** — contact.html and weddings.html both still `action="#"`. Formspree or Vercel serverless → email + Salesforce create_lead. One-day job, unblocks all downstream nurture automation.
- [ ] **Submit to ResortPass before May 1** — Lucky Arrow's ResortPass has no active products through May 1 (per 04-20 competitive intel). 10-day competitive window to be the only non-hotel glamping pool pass in Austin. resortpass.com/list-property.
- [ ] **Re-upload 8 low-res source JPGs at 2560px+** — especially `feature-wedding.jpg` (bride-critical). Responsive pipeline can't upscale past source dimensions; 4 accommodation cards are currently 340×340 thumbnails.
- [ ] **Seed stay-type-routed post-event review request** — glamping → Hipcamp, wedding → The Knot/WeddingWire, event → Google. Even a manual template routed by Ashley beats the current ad-hoc state.
- [ ] **Rewrite Hipcamp listing first paragraph + OTA listings (Expedia, Hotels.com, Agoda)** — lead with "glamping + shared-bath cabin option, private-bath safari tent option" so amenities surface honestly. Addresses Alison's 4★ feedback from 04-16.

### NEEDS ADAM — Infrastructure
- [x] **DNS cutover from BofillTech to Vercel** — DONE, verified live 2026-04-30 (Vercel server header, www host serves HTTP 200). #1 SEO unlock complete. Next: GSC submit + canonical strategy (apex vs www).
- [ ] Rotate `GITHUB_TOKEN` on Vercel → fine-grained PAT scoped only to `AStyer8345/rancho-moonrise` contents:write (currently broad `gh auth token`, 5 min fix)
- [ ] Get Exhibit A from Nancy/Ashley (ownership %, capital contributions)
- [ ] Get QuickBooks access or P&L + Balance Sheet

### NEEDS ASHLEY
- [ ] Claim TripAdvisor + optimize WeddingWire listings (Task 5 — MANUAL)
- [ ] Fix broken Cloudbeds URL in Cloudbeds admin (Task 13 — MANUAL)

### CLAUDE (autonomous — scheduled task handles these)
- [x] Split blog posts into individual pages with URLs (S1) — already done previously
- [x] Add answer-first H2 summaries / AEO blocks to key pages (S2) — accommodations DONE (prior run), weddings DONE 2026-04-11, host-your-event DONE 2026-04-11, events DONE 2026-04-14
- [x] Build topical authority clusters with internal linking (S3) — blog cross-links on 6 landing pages DONE 2026-04-12; weddings → wedding blog posts DONE 2026-04-14; events → related content DONE 2026-04-14; glamping guide updated 2026-04-14
- [x] Add BreadcrumbList + SpeakableSpecification schema (S4) — BreadcrumbList DONE 2026-04-09, SpeakableSpecification: homepage DONE 2026-04-10, accommodations + weddings + host-your-event DONE 2026-04-11, faqs DONE 2026-04-12, events DONE 2026-04-14
- [x] Add Review/AggregateRating schema to homepage (done, count corrected to 125 on 2026-04-10)
- [x] Blog post #7 — "Best Weekend Getaways Near Austin Texas" — DONE 2026-04-11
- [x] faqs.html SpeakableSpecification schema — DONE 2026-04-12
- [x] S3 topical authority cluster pass — blog cross-links added to 6 landing pages — DONE 2026-04-12
- [x] Blog post #8 — "Austin Pool Day Pass Guide" — DONE 2026-04-12
- [x] Build `/safari-tents-near-austin/` landing page — DONE 2026-04-13
- [x] Blog post #10 — "Glamping vs Camping: What's the Difference?" — DONE 2026-04-14. AEO block, FAQPage schema (4 Q&A), SpeakableSpecification, BlogPosting schema, FAQ accordion.
- [x] Blog post #11 — "Things to Do Near Austin With Kids" — DONE 2026-04-15
- [x] Blog post #12 — "Corporate Retreat Planning Guide Texas" — DONE 2026-04-15
- [x] AEO block + FAQPage + SpeakableSpec on `glamping-near-austin-texas.html` — DONE 2026-04-16
- [x] AEO block + FAQPage + SpeakableSpec on `bachelorette-party-austin-texas.html` — DONE 2026-04-16
- [x] AEO + schema pass on 4 remaining zero-coverage landing pages: `wedding-venues-near-austin.html`, `corporate-retreat-near-austin.html`, `ranch-wedding-texas.html`, `things-to-do-manor-tx.html` — DONE 2026-04-17. FAQPage + SpeakableSpecification + aeo-block on all 4. Commit `e570002`.
- [x] Blog post #13 — "Summer Glamping Near Austin Texas" — DONE 2026-04-18. AEO block, FAQPage schema (4 Q&A), SpeakableSpecification, BlogPosting schema. Seasonal timing target: 6 weeks before peak summer demand.
- [x] Blog post #14 — "Austin Bachelorette Weekend: Ranch vs. Bar Crawl" — DONE 2026-04-19. Comparison/decision format. AEO block, comparison table, decision framework, FAQPage (4 Q&A), SpeakableSpecification, BlogPosting, BreadcrumbList. Cross-link from bachelorette guide. Commit `2a4837a`.
- [x] Blog post #15 — "Corporate Retreat: Ranch vs. Hotel Conference Room" — COMMITTED 2026-04-21. File existed locally as untracked (created 2026-04-20, full schema). Committed and pushed this run.
- [x] Blog post #16 — "Mother's Day Near Austin Texas" — DONE 2026-04-21. Seasonal target (Mother's Day May 11). AEO block, FAQPage (4 Q&A), SpeakableSpecification, BreadcrumbList. Three-tier content: pool day pass / Yoga & Mimosas / overnight stay.
- [x] Blog post #17 — "Birthday Party Venue Near Austin Texas" — DONE 2026-04-22. High commercial intent (private events = 46% revenue). AEO block, FAQPage (4 Q&A), SpeakableSpec, BreadcrumbList. CTAs to host-your-event + accommodations.
- [x] Blog post #18 — "Yoga Retreat Near Austin Texas" — DONE 2026-04-24. Targets yoga/wellness keyword cluster using Yoga & Mimosas event series (May 31, Jun 28, Jul 26, Aug 30). AEO block, FAQPage (4 Q&A), SpeakableSpec, BreadcrumbList. CTAs to events + host-your-event. S1 now 18 posts.
- [x] ReservePage schema on pool-day-pass-austin.html — DONE 2026-04-22. Dual type `["WebPage","ReservePage"]` + `ReserveAction` potentialAction → ResortPass URL. Time-sensitive (Lucky Arrow window closes May 1).
- [x] Rotate past Free Friday Apr 24 → May 29 — DONE 2026-04-25. events.html Event schema, static card, and EVENTS JS array all updated. sitemap lastmod bumped. Apr 26 Yoga & Mimosas left as-is (still upcoming).
- [x] Add FAQPage schema + visible FAQ to safari-tents-near-austin.html — DONE 2026-04-26. Closes the only gap in the SEO cluster (other landing pages already had FAQPage). 4 questions, BlogPosting-style answers. Speakable cssSelector expanded. Sitemap lastmod bumped to 2026-04-26.
- [x] Rotate past Apr 26 Yoga & Mimosas → July section + AggregateRating on weddings.html / host-your-event.html + sitemap freshness sweep — DONE 2026-04-27. April section replaced with July (4 events). Event JSON-LD updated. EVENTS JS array updated. EventVenue schemas on weddings + host-your-event now carry AggregateRating (4.9 / 125). 9 sitemap lastmod entries bumped (3 to 04-27, 6 to 04-16/17 to match actual AEO-block edit dates). All 11 JSON-LD blocks validate.
- [x] Extend AggregateRating to wedding-venues, corporate-retreat, ranch-wedding, bachelorette, pool-day-pass — DONE 2026-04-28. Embedded in `publisher.Organization` (BlogPosting pages — keeps rating off the article and on the venue entity). Sitemap lastmod bumped on all 5. All 20 JSON-LD blocks validate.
- [x] Extend AggregateRating to remaining 4 BlogPosting landing pages — `glamping-near-austin-texas`, `things-to-do-manor-tx`, `glamping-vs-camping`, `things-to-do-near-austin-with-kids` — DONE 2026-04-29. Same `publisher.Organization` pattern (4.9 / 125 / bestRating 5). dateModified + sitemap lastmod bumped to 2026-04-29 on all 4. All 16 JSON-LD blocks validate. Coverage now 14 of 17 customer-facing pages.
- [x] AggregateRating treatment for the 2 remaining utility pages (`faqs.html` + `contact.html`) — DONE 2026-04-30. `contact.html` extended its existing nested `LocalBusiness` (under `mainEntity` of `ContactPage`) with `aggregateRating`. `faqs.html` got a stand-alone `LocalBusiness` JSON-LD with the rating + full address + phone. Coverage now 16/17 customer-facing pages.

### NEEDS ADAM — Review monitor flags (from 2026-04-15 rancho-review-monitor run)
- [ ] **Verify possible Airbnb listing** — search surfaced `/rooms/1284193976615696223` ("Glamping Safari Tent 25 mins from downtown Austin, Manor TX"). April 9 baseline said no Airbnb listing. Confirm if this is a Rancho Moonrise listing — if yes, add to review coverage scope. (Page returned 403 when fetched by agent.)

### NEEDS ADAM — YouTube channel
- [ ] **Upload remaining 7 videos (01-07)** — hit YouTube daily upload limit. Try again tomorrow. Files are in `youtube-uploads/` folder with manifest spreadsheet.
- [ ] **Delete duplicate videos** — Fk17TEpGCFY (10-pool-wedding-day) and WTstKx2JVUo (11-ranch-flower-decorations) are duplicates of the content that was correctly uploaded under different IDs. Pick which set to keep and delete the other.

### NEEDS ADAM — Competitive intel quick wins (updated 2026-04-27)
- [ ] **⚡ ResortPass — decide within 48 hours, window now 4 days.** Lucky Arrow's listing still shows "no active products at the moment" (verified live 2026-04-27); their site copy says full menu/bar resume **May 1, 2026**. Either submit this week (resortpass.com/list-property or supply team email) and beat the reactivation, or remove from this list. Waiting past Wednesday is effectively a "no."
- [x] **Build a corporate retreats landing page** — DONE 2026-05-01. `/pages/corporate-retreats.html` shipped with EventVenue + BreadcrumbList + FAQPage (6 Q&A) + SpeakableSpecification schema. Clean route `/corporate-retreats/` wired in `vercel.json`. Sitemap entry added with priority 0.9. Voice-guide-clean (no banned terms; pricing-frame language matches Ashley's tour-required + venue-mandatory bar policy). Closes the competitive gap vs. Yurtopian / Lucky Arrow / 7744 Ranch / Element Ranch / Sage Hill. 4 JSON-LD blocks parse, `npm run validate:site` passes, local preview verified clean (6 FAQ items, 9 sections, 0 broken images, 0 console errors).
- [ ] Submit Glamping Hub listing — free, 15 min at glampinghub.com/list-your-property. The Yurtopian, Udoscape, Talula Mesa, Spoon Mountain (likely) all appear there while Rancho Moonrise stays absent.
- [x] **DNS cutover** — DONE, verified live 2026-04-30 (Vercel server header). 18+ blog posts + safari tent page + full AEO suite are now crawlable at the production hostname.

## Next (after DNS cutover)
- [ ] Google Search Console setup + sitemap submission (S6)
- [ ] Monitor indexing — all pages indexed within 14 days (S6)
- [ ] Redirect map from old BofillTech URLs to new structure (S6)
- [ ] AEO baseline — query AI engines for all 10 target keywords (S7)
- [ ] Claim TripAdvisor listing (Task 5 — Ashley)
- [ ] Optimize WeddingWire listing (Task 5)
- [ ] Fix Hipcamp "no showers" listing (Task 12)
- [ ] Build post-stay review request automation (Task 8)
- [ ] Build inquiry response email sequence (Task 9)
- [ ] Create "Pool Day Pass Austin" page (S5)
- [ ] Blog-to-GBP automation (S8)

## Backlog
- [ ] Corporate retreat landing page + HoneyBook flow (Task 16)
- [ ] HoneyBook flows for private events, intimate events, retreats (Task 17)
- [ ] "Build Your Experience" add-on booking flow (Task 18)
- [ ] Breakfast taco upsell for all stay types (Task 19)
- [ ] Conversion tracking + UTM parameters (Task 20)
- [ ] CRM implementation (Task 21)
- [ ] SOPs for Ashley's processes (Task 22)
- [x] YouTube channel with walkthrough videos (Task 23) — PARTIALLY DONE 2026-04-17. 10 of 17 videos uploaded (08-17) with full metadata. 7 remaining (01-07) blocked by daily upload limit.
- [ ] Facebook as a real channel (Task 24)
- [ ] Address neighbor noise issue (Task 25)
- [ ] Weekday utilization program (Task 26)
- [ ] Upload more owner photos to GBP (Task 27)

## Done

### April 10, 2026
- [x] Mark Done system shipped — `/api/complete` serverless fn + GitHub Contents API log append + Bearer auth via shared `BRIEFING_AUTH_TOKEN`
- [x] Done tab added to improvement-plan.html — completed tasks physically relocate into `#done-tasks-container` (newest on top), not just faded in place
- [x] Option C grade progression calculator — headline grade = highest phase where all required tasks complete; empty phases pass through without advancing grade; mini-progress "(X/Y toward <next grade>)" under each scorecard
- [x] Rewrote `rancho-apply-done` scheduled task SKILL.md — physically move task divs into Done tab instead of applying class in place
- [x] Backfilled tasks 4, 6, 10 into Done tab (moved at rest in source HTML)
- [x] Smoke tested Mark Done end-to-end on live Vercel deploy — commit 01319c8 READY

### April 9, 2026
- [x] Secondary GBP categories already set — Hotel, Campground, Event venue, Resort hotel, Wedding venue (Task 4)
- [x] Instagram link-in-bio — Linktree live with 5 links (Task 6)
- [x] Weekly GBP posting — scheduled task confirmed working (Task 10)
- [x] Live-verified all platforms and created metrics baseline
- [x] Built SEO/AEO strategy and scheduled task (Mon/Wed/Fri 5 AM)
- [x] BreadcrumbList schema on all 13 subpages
- [x] CollectionPage + ItemList schema on blog.html
- [x] Verified homepage LodgingBusiness schema complete (geo, price, amenities)

---

## Added 2026-08-17 by `rancho-review-monitor` (RUN_068)

- [ ] **Add ResortPass to the live-claim ownership table** in `tasks/review-monitor/master-agent.md`. It carries 53 reviews at 4.8★ and is the **only** review surface returning a clean HTTP 200 while 6 of 8 in-scope platforms are blocked. **Not done this run** — editing the ownership table is a scope change, not a data write, and this task's hard rules put scope decisions with Adam. Needs his yes, then it's a 5-minute edit.
- [ ] **Paste the Facebook non-recommend review text into the repo** so a response draft can be written. Blocked on the NEEDS ADAM item above.
- [ ] **Post the two drafts sitting unposted at day 90** — Cassie Butterfield (Google 5★) and Haylee L. (The Knot 1★), both in `brand/review-reports/2026-05-19-review-report.md`. Haylee's 1★ is now **172 days / ~24.6 weeks unreplied**. Re-verified against the root done-log this run: last review-reply resolution is still 2026-04-15.
- [ ] **Settle the three-entity OTA split** — expedia 8.0 / hotels.com 9.0 / agoda 8.6, now holding a 3rd consecutive run with a third value. 30 seconds in either extranet. If it is genuinely more than one rating, hotels.com and agoda are accumulating reviews on surfaces nobody monitors for replies — the same failure mode ResortPass just demonstrated.
- [ ] **Fix the two Hipcamp voice/data violations** (re-confirmed live 2026-08-17): "34-acre ranch" (VOICE-GUIDE says 36, site data field says 37 — three different numbers in circulation) and "a refreshing pool, **a bar**, and cozy lounge areas" (the Neon Moon Barn Lounge is event-only, not a walk-in bar).
- [ ] **CONTEXT.md is over its 150-line cap** — 152 after this run, and it arrived at 153 *before* this task touched it. This run folded its own superseded RUN_067 entry into the collapsed block to take it down rather than up, but the overage is driven by two very long same-day header entries from `rancho-competitive-weekly` and `rancho-site-daily`, which are not this task's to prune.

---

## Added 2026-08-19 by `rancho-review-monitor` (RUN_070)

- [ ] **Expedia's review pool is real and its reply coverage has never been checked** — `h89565924` carries 6 reviews at 8.0/10, first count ever recorded (the field read `null` since April). Add Expedia's per-review reply state to the ownership table in `tasks/review-monitor/master-agent.md` alongside the still-pending ResortPass addition — both are scope decisions, deliberately not made unilaterally. See the NEEDS ADAM item above.
- [ ] **Take a third, differently-phrased confirmation of Expedia's count of 6 before promoting it** to `platforms.expedia.count`. Two independent domain-restricted queries agree, but Facebook also reads exactly 6 and only a direct scrape (or a third distinct phrasing) fully excludes the coincidence. Direct fetch is currently returning HTTP 429.
- [ ] **Watch for a third consecutive HTTP 429 on the expedia.com entity** — two so far (RUN_069, RUN_070). A third opens a blocker distinct from the 43-failure `hotels-com-direct-fetch`. Agoda's first direct attempt also failed (empty page); its 8.6 is carried, not re-confirmed.
- [ ] **Re-read the ResortPass rating block next run before anyone concludes anything** — it failed to render this run on an otherwise-identical HTTP 200 page. Held `53 @ 4.8★ STALE:2026-08-18`. Two consecutive non-renders would mean the path is degrading, not that the rating moved.
- [ ] **Stop treating the Google search snippet as a count signal in any form.** It is now demonstrated to echo the site's own `reviewCount: 125` (`site/index.html:90`). Do not nudge the site's AggregateRating anchor toward any snippet value, and do not record snippet deltas as review movement. Only the GBP dashboard or a Places API key produces a real number.
- [ ] **Guard against silent run loss** — RUN_069 scraped every platform and died before step 6, leaving raw notes **untracked in git**, no session-log heading and no run-log. Nothing downstream could tell it had run; RUN_070's "prior value" would have silently reached back two days. Worth writing the aggregate/session-log **incrementally** rather than only at the end of the 9-step procedure, so a partial run still leaves a legible trace.
- [ ] **CONTEXT.md is 166 lines, over the 150-line cap in `CLAUDE.md`** — and it was over before this task touched it. This run folded its own superseded RUN_068 entry into the collapsed review-monitor block; the review-monitor workstream is now down to two lines total. **The remaining bulk is `site-daily`'s stacked header block (lines 3–11) and its five recent entries** — those belong to that task to prune, and this one won't rewrite another workstream's record.
