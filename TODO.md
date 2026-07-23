# Rancho Moonrise — TODO
Last updated: 2026-07-22 (rancho-site-daily — **cruise-control streak BROKEN at 39; first shipped edit since 5/26.** Pause gate was stale: GOALS.md (mtime 2026-07-20 11:19) narrowed the Rancho pause to ***outreach only*** and marks **site/content work RESUMED 2026-07-15** — the 7/17 + 7/18 runs idled through an unblocked workstream. Shipped `WebPage`/`SpeakableSpecification` + `FAQPage` on `/blog/weekend-getaways-near-austin/` — the only blog-cluster page rendering a full visible `.aeo-block` Quick-Answers section (4 Q&As) with no schema exposing it. FAQ text extracted from the DOM and asserted verbatim, never authored. 2 files, +58/-2, schema-only, zero copy changes. Cluster 16/17 → 17/17 on both types; `npm run validate:site` passes; 0 invalid JSON-LD across all 30 public pages. Re-Verify Gate live 7/7 still_true, **3 resolved**: NEEDS ADAM #0 (tasks-vs-pause-list) CLOSED after 56 days by the GOALS.md update; AggregateRating-on-BlogPosting **RETIRED** (self-serving review schema earns no SERP stars); `rancho-seo-s4` → PROGRESS 90%. CONTEXT.md trimmed 251 → 204 lines (collapsed 20 duplicate site-daily cruise-control entries + 9 stacked headers; review-monitor/competitive-weekly entries left alone — not this task's to prune). New #1 next slot: **`videos.html` carries no JSON-LD at all** — VideoObject is one of the few types still earning a real SERP rich result. Coverage gap: no site-daily run-log for 7/19–7/21; task didn't fire 3 days. Run-log: `run-logs/2026-07-22-seo.md`.)

## 🔥 NEEDS ADAM (highest leverage this week)

### NEEDS ADAM — Approve testimonial T-001 (unblocks the 4th element of every content-weekly run) — added 2026-07-22 by `rancho-content-weekly`

**Status: the byline half is DONE, the testimonial half is one checkbox away.** Thank you — the `## Settled Decisions` line in GOALS.md ("byline: Ashley · Rancho Moonrise") plus creating `brand/approved-testimonials.md` broke a 10-run, 91-day block. `accommodations.html` shipped its first strengthening pass today with 3 of the 4 required elements.

**The one remaining gap — two small asks:**

1. **Flip T-001 to `STATUS: APPROVED` in `brand/approved-testimonials.md` (~30 seconds).** Cassie Butterfield's Google 5★ is verbatim, attributed and live-verified; it currently reads `UNAPPROVED — awaiting Adam`. Content tasks may only pull `APPROVED` entries, so it cannot be placed on any page until you flip it.
2. **Get the event date from Ashley's booking record (~2 min).** The entry has `EVENT DATE: UNKNOWN`. The task spec requires a testimonial tied to a **real event date** — a review date is explicitly not an event date — so even once approved, T-001 can't ship without it.

**Worth knowing about coverage:** T-001 is corporate-retreat content. Its own note says it "does NOT serve wedding, accommodation, or glamping pages." So approving it unblocks `host-your-event.html` and `corporate-retreat-near-austin.html` — **not** weddings, accommodations, glamping, pool or bachelorette. Per the file's Coverage-gaps table, weddings is the highest-value hole: **8 reviews live on The Knot at 4.5★, none captured verbatim.** The file's own recommendation is the fastest close: *"Ashley pulls 2–3 wedding quotes with real event dates straight from HoneyBook or her inbox"* — better provenance than anything scraped, and dated by definition. Until that happens, `weddings.html` can reach at most 3 of 4 elements.

**Two smaller decisions surfaced by today's run (neither blocking):**

- **Horse corral — is it public-ready or not?** `VOICE-GUIDE.md` lists it under *"Future spaces — future, not yet public-ready,"* but it is **already live on `index.html`, `weddings.html` and `host-your-event.html`**. Meanwhile `corral-hank-willie` and `corral-waylon-texas` — real photos of the hand-painted HANK / WILLIE / WAYLON signs under the corral shelter, genuinely uncopyable content — sit in the responsive ladder with **zero references anywhere in the repo**. Autonomous runs won't place them while the guide contradicts production. One line either way in VOICE-GUIDE unblocks them.
- **Acreage and direction contradict across surfaces.** VOICE-GUIDE says **36 acres**; the Hipcamp listing text says "34-acre" and its data payload says **37**. Site copy says "20 minutes **east**" while `things-to-do-manor-tx.html` says **northeast** and the Hipcamp coordinates compute NE. The approved phrase "20 minutes from downtown Austin" (no direction) sidesteps the second one cleanly.

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

## 📌 Competitive intel quick wins (refreshed 2026-07-15)

- **✅ RESOLVED 2026-07-15 — both ResortPass listings activated.** Rancho's own listing went LIVE with products (day passes + experiences, 4.9★/45 reviews) after 7 weeks dormant — resolves the 42-day activate-or-kill drift. Lucky Arrow also activated (6 products, pool 12–8pm). "Frozen both sides" retired. (done-log ×2)
- **🔄 Durable head-term read holds:** property domains that publish strong guide/listicle content win these terms. Aggregator "surge" (6/15) was a one-week artifact; property domains hold the tops (Safari for the Soul #1 safari-tent; Spoon Mountain #1 romantic; Talula Mesa jumped to #1 glamping this week as Udoscape slid to ~#6).
- **🆕 "Publish your own listicle" is the repeatable lever.** Spoon Mountain (#1 romantic, own "Ultimate 2026 Guide"), Cameron Ranch (#3 weekend getaway, own roundup), Udoscape all rank via own-domain guide pages, not just booking pages. Highest-value content move for Rancho's paused 18-post blog cluster once the pipeline reopens.
- **✅ RESOLVED — brand SERP anomaly.** The 6/15 UNVERIFIED ~#7 reading was a logged-out artifact: clean live brand search puts **ranchomoonrise.com at #1**, above all aggregators. No title-tag/brand-entity action. (done-log)
- **Spoon Mountain — still #1 narrow term at `/travel-to-wimberley/` URL; pricing copy now inconsistent (7/15):** the legacy "$245/night" line reappeared on-page alongside "starting $300–500". Not a material move — noted so the "price up to $300–500" claim isn't over-stated.
- **🔄 Corporate-retreat cluster churned again (7/15).** Sage Hill #1; Crystal Creek slid #2→#3; Element Ranch re-entered #6; 7744 Ranch #8; Camp Lucy #9; **Lucky Arrow dropped off the top 10** (was #7); Yurtopian still off. Volatile bottom half; Rancho can't enter until `/corporate-retreats/` is crawled (~75d).
- **🔄 Hipcamp curated "20 Best Glamping Near Austin" — ROTATED again 7/15** (byte-stable streak broken; top two Urban Hideout #1 / Cozy Cactus Airstream #2 held, mid-list reshuffled, **Lucky Arrow #9→#8**). Rancho absent **7th consecutive read**. Reinforces Hipcamp Ashley question (NEEDS ADAM #3). (done-log)
- **✅ Rancho ResortPass listing ACTIVATED 7/15** — LIVE with products (day passes + experiences, 4.9★/45 reviews). Decision drift cleared. (done-log)
- **✅ Lucky Arrow ResortPass ACTIVATED 7/15** — 6 products (day passes + cabanas + private-yurt day room); pool hours now 12–8pm (was 12–10pm); bar Fri 2–6pm + Sat/Sun 12–6pm. (done-log)
- **Safari for the Soul unit count still ambiguous** — 6 units / 2 locations; Sabi Nights titled "Yurt" but body says "safari tent." Honest read 1–2 safari tents + 3–4 yurts + 1 residential. No new units/third location.
- **Walden Retreats** — 15 tents, copy still clean (no "four types" relapse). **Camp Lucy** corporate page live + selling (re-entered SERP #9).
- **⚠️ Hotels.com — banned "20 cabins / 50 guests" copy still in live search index (8th wk, 7/15)**; on-page UNVERIFIED this run (surfaces in brand snippet). Needs browser-based check. See NEEDS ADAM.
- **🆕 Tribeza editorial feature (7/15)** — "Inside TRIBEZA's Creative Countryside Retreat at Rancho Moonrise" now surfaces on the brand SERP. Positive earned-media signal; no action.
- **Glamping Hub** — Rancho still absent (~11 weeks). Free aggregator lever; close regardless of on-site content play.
- **Landing pages still uncrawled** — `/corporate-retreats/` 45d + `/safari-tents-near-austin/` 50d (+7d each). See NEEDS ADAM #2 (GSC). (Owned by `rancho-site-daily` + Adam.)
- **The Retreat on the Hill** — 11 named units; held top-10 on safari-tent + weekend-getaway SERPs historically (did not surface this aggregator-heavy week).
- **Internal-doc housekeeping:** old `safariforthesoul.com` URLs in past audits/blog drafts redirect to an author site. Live property at `safariforthesoulglamping.com`. Low priority.
- **Per-unit accommodation pages remain blocked on low-res source JPGs** (Adam re-upload).
- **Track Loving Heart Retreats** as safari tent SERP entrant (25 ac, 12 min from Marble Falls). Domain still has TLS cert mismatch — not fetchable.
- **Track Green Acres ATX (Elgin) as closest geographic competitor.** Press footprint in U.S. News / Dwell / Apartment Therapy / Austin Monthly.
- **Internal-doc housekeeping:** old `safariforthesoul.com` URLs in any past audits/blog drafts now redirect to an author site. Live property at `safariforthesoulglamping.com`. Low priority.
- **Per-unit accommodation pages remain blocked on low-res source JPGs** (Adam re-upload). The Retreat on the Hill (11) + Green Acres (8) + Lucky Arrow (40 across 5 types) reinforce the multi-URL pattern.



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
