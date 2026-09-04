# Strengthener Queue — rancho-content-weekly

Tracks which pages have been touched and which are queued. One page per run.
Priority: broken/placeholder assets first, then highest-impression landing pages.

---

## Queue (landing pages only — not blog posts)

| Page | Last Touch | Status |
|------|-----------|--------|
| `weddings.html` | 2026-04-22 | BLOCKED — no approved wedding testimonial (author block now unblocked) |
| `accommodations.html` | **2026-07-22** | ✅ **STRENGTHENED** — 3 of 4 elements shipped (photos, author block, local detail). Testimonial still NEEDS ADAM. |
| `host-your-event.html` | **2026-08-19** | ✅ **STRENGTHENED** — 3 of 4 elements shipped (photos, author block, local detail). Testimonial still NEEDS ADAM. |
| `events.html` | **2026-09-04** | ✅ **STRENGTHENED** — 3 of 4 elements shipped (photos, author block, local detail). Testimonial still NEEDS ADAM (T-001 doesn't serve this page type anyway). |
| `pool-day-pass-austin.html` | — | Pending |
| `glamping-near-austin-texas.html` | — | Pending |
| `bachelorette-party-austin-texas.html` | — | Pending |
| `ranch-wedding-texas.html` | — | Pending |
| `wedding-venues-near-austin.html` | — | Pending |
| `corporate-retreat-near-austin.html` | — | Pending |
| `safari-tents-near-austin.html` | — | Pending |
| `things-to-do-near-austin-with-kids.html` | — | Pending |
| `weekend-getaways-near-austin.html` | — | Pending |

---

## Run Log

### 2026-04-22 — weddings.html — BLOCKED (hard stops hit)

**Attempted:** weddings.html (priority 1 — listed as gallery placeholder in task file)

**Finding:** Gallery placeholder is RESOLVED. The 2026-04-21 Galleries admin build seeded 17 real photo tiles into Supabase (`rancho_photos` table, section=`weddings`) and hydrated the lightbox gallery non-blocking. No placeholder state remains.

**Hard stops hit (2 of 2 required items blocked):**

1. **No approved testimonials list exists.** The review report at `brand/review-reports/2026-04-09-review-report.md` contains review snippets from The Knot and other platforms, but they have no verified event dates and are not on an approved testimonials list. Cannot place a real guest testimonial on the wedding page without one. → **NEEDS ADAM**

2. **Author byline decision (Adam vs Ashley) not settled in GOALS.md.** GOALS.md (week of April 20) has no mention of content author byline for website pages. Cannot add a named author block without this decision. → **NEEDS ADAM**

**Result:** No changes to weddings.html. Page is not edited this run.

**Next run:** `accommodations.html` — low-res thumbnail blocker is a data issue (requires Ashley re-upload), but other strengthening items (local detail, copy depth) can proceed if testimonials and author block blockers are resolved.

---

### 2026-04-29 — accommodations.html — BLOCKED (second consecutive blocked run)

**Attempted:** accommodations.html (priority 2 — low-res thumbnails noted but workable).

**Re-verified blockers from 2026-04-22:**

1. **Testimonials list still does not exist.** No `brand/approved-testimonials.md`. `brand/review-aggregate.json` (RUN_012, 2026-04-28) confirms Google count remains stale-snippet-only (175 unverified vs. 127 verified Apr 9 baseline); no curation of individual quotes to event dates has happened. → Still NEEDS ADAM.

2. **Author byline decision still not in GOALS.md.** GOALS.md (week of April 20, last updated 2026-04-20) has no "Settled Decisions" entry and no mention of Adam/Ashley/Team byline. → Still NEEDS ADAM.

**Pattern:** Per the rancho-content-weekly task spec, each pass MUST include at least 3 of (photos, author block, testimonial, local detail). With items 2 and 3 blocked, only 2 are achievable — task spec cannot be satisfied. Two of the four item types are gated entirely on Adam, and they have not moved in 7 days.

**Recommendation to Adam:** Either (a) settle both decisions this week — both are <30 minutes of work — or (b) pause this scheduled task in `GOALS.md` → "Paused Workstreams" until the prerequisites are in place. Running the task weekly while it's structurally blocked produces noise without progress.

**Result:** No changes to accommodations.html or any other landing page. Queue remains as-is.

**Next run:** Same priority order — re-attempt accommodations.html if blockers resolve. Otherwise this entry becomes run 3 of the same NEEDS ADAM.

---

### 2026-05-06 — accommodations.html — BLOCKED (third consecutive blocked run)

**Attempted:** accommodations.html (priority 2, holdover from run 2).

**Re-verified blockers (per `feedback_stale_flags.md` — required before re-surfacing):**

1. **Testimonials list still does not exist.** `find /Users/adamstyer/Documents/rancho-moonrise/brand -name "*testimonial*" -o -name "*approved*"` returns zero results. No `brand/approved-testimonials.md`. Latest `brand/review-aggregate.json` (RUN_020, 2026-05-06) confirms Google snippet is at 126 @ 4.9★ for the fifth consecutive run — still no curation of individual quotes to verified event dates. → Still NEEDS ADAM.

2. **Author byline decision still not in GOALS.md.** GOALS.md (week of April 20, last updated 2026-04-20 — same week as run 2) has no "Settled Decisions" section and no Adam/Ashley/team byline mention. The week marker has not advanced for 16 days. → Still NEEDS ADAM.

**16-day pattern:** Three runs (4/22, 4/29, 5/06), zero website edits produced. Both prereqs are <30 minutes of Adam time. The task is structurally non-productive until one of two things happens:
  - (a) Adam creates `brand/approved-testimonials.md` AND adds a Settled Decisions section to GOALS.md with the byline pick, OR
  - (b) Adam pauses `rancho-content-weekly` in GOALS.md → "Paused Workstreams" so this slot stops firing weekly with no output.

**Recommendation tightened to single ask (not A/B menu):** Adam, pick (a) or (b) by next Monday's GOALS.md update (2026-05-11). If neither is done by 5/11, run 4 will be the same blocked entry.

**Result:** No changes to any landing page. No HTML edits. No commits to site/. Queue unchanged.

**Next run:** 2026-05-13. If still blocked, the next run will recommend pausing the task by default rather than running again.

---

### 2026-05-13 — accommodations.html — BLOCKED (fourth consecutive blocked run — escalating to pause request)

**Attempted:** accommodations.html (priority 2, fourth consecutive holdover).

**Re-verified blockers (per `feedback_stale_flags.md` — required before re-surfacing a flag for the 4th time):**

1. **Testimonials list still does not exist.** `find /Users/adamstyer/Documents/rancho-moonrise/brand -name "*testimonial*" -o -name "*approved*"` returns zero results. No `brand/approved-testimonials.md`. → Still NEEDS ADAM.
2. **Author byline decision still not in GOALS.md.** `grep -i "byline\|author\|adam.*ashley\|settled decision" /Users/adamstyer/Documents/GOALS.md` returns no matches. GOALS.md (week of April 20) still has no Settled Decisions section. The week marker has not advanced for 23 days. → Still NEEDS ADAM.

**21-day pattern:** Four runs (4/22, 4/29, 5/06, 5/13), zero website edits produced. Both prereqs are <30 minutes of Adam time. Per the 5/06 entry's commitment ("If neither is done by 5/11, run 4 will be the same blocked entry") and tightened recommendation ("the next run will recommend pausing the task by default rather than running again"), this run is making that recommendation directly.

**Single ask to Adam (no menu, no negotiation):** Add `rancho-content-weekly` to `GOALS.md` → "Paused Workstreams" until either `brand/approved-testimonials.md` exists or a Settled Decisions section in GOALS.md picks the byline. The scheduled task is firing weekly and producing only this same blocked log entry — that's noise, not progress. Pausing is reversible the moment the prereqs land.

**Result:** No changes to any landing page. No HTML edits. No commits to `site/`. Queue unchanged.

**If Adam wants to unblock instead of pause:** the two artifacts needed are (a) `brand/approved-testimonials.md` with at least one quote per page-type tied to a real event date (wedding, corporate, glamping), and (b) one line in GOALS.md under a `## Settled Decisions` heading: `Author byline: Adam` (or Ashley, or team). Total time: ~25 minutes if testimonials are pulled from existing HoneyBook/Google review exports.

**Next run:** 2026-05-20. If `rancho-content-weekly` is still firing and still blocked, that entry will be a one-liner pointer back to this one rather than a fifth re-litigation.

---

### 2026-06-03 — BLOCKED (run 5; one-liner per 5/13 commitment)

Two hard stops re-verified still true (`find brand -name "*testimonial*" -o -name "*approved*"` = 0 hits; `grep -i "byline\|settled decision\|author.*adam\|author.*ashley" GOALS.md` = 0 hits). Plus GOALS.md week of 5/18 now says "No Rancho Moonrise active work — paused (cruise control only if Ashley moves)" — the broader pause signal is also live alongside the task-specific blockers. Today is the 5th structurally-blocked content-weekly run (4/22, 4/29, 5/06, 5/13, 6/03) and the **10th overall Rancho scheduled-task firing against the cruise-control gate** (this is the 2nd content-weekly firing since the GOALS pause; the 5/27 firing exited via the gate without appending here). 42-day blocker pattern (4/22 → 6/03). No edits to any landing page. See 5/13 entry for the single-ask pause request to Adam — now also surfaced as TODO.md NEEDS ADAM #0 with daily firing-count drift. Next run: 2026-06-10.

---

### 2026-06-10 — BLOCKED (run 6; one-liner per 5/13 commitment)

Both hard stops re-verified live still true (`find brand -iname "*testimonial*" -o -iname "*approved*"` = 0 hits; `grep -i "byline\|author.*adam\|author.*ashley\|settled decision" GOALS.md` = exit 1, 0 matches). GOALS.md (still week of 5/18, last updated 6/6 — the 6/6 freeze-lift was styermortgage.com only) keeps "No Rancho Moonrise active work — paused (cruise control only if Ashley moves)." 6th structurally-blocked content-weekly run (4/22, 4/29, 5/06, 5/13, 6/03, 6/10); 49-day blocker pattern. No landing-page edits. The single-ask pause request lives in the 5/13 entry and TODO.md NEEDS ADAM #0 — not re-litigated here. Next run: 2026-06-17.

---

### 2026-06-17 — BLOCKED (run 7; one-liner per 5/13 commitment)

Both hard stops re-verified live still true (`find brand -iname "*testimonial*" -o -iname "*approved*"` = 0 hits; `grep -in "byline\|settled decision\|author.*adam\|author.*ashley" GOALS.md` = exit 1, 0 matches). GOALS.md still week of 5/18 — "No Rancho Moonrise active work — paused (cruise control only if Ashley moves)." 7th structurally-blocked content-weekly run (4/22, 4/29, 5/06, 5/13, 6/03, 6/10, 6/17); 56-day blocker pattern. No landing-page edits. Single-ask pause request lives in the 5/13 entry and TODO.md NEEDS ADAM #0 — not re-litigated here. Next run: 2026-06-24.

---

### 2026-06-24 — BLOCKED (run 8; one-liner per 5/13 commitment)

Both hard stops re-verified live still true (`find brand -iname "*testimonial*" -o -iname "*approved*"` = 0 hits; `grep -iE "byline|author.*(adam|ashley)|settled decision" GOALS.md` = 0 matches). GOALS.md still week of 5/18 — "No Rancho Moonrise active work — paused (cruise control only if Ashley moves)." 8th structurally-blocked content-weekly run (4/22, 4/29, 5/06, 5/13, 6/03, 6/10, 6/17, 6/24); 63-day blocker pattern. A compliant strengthening pass needs ≥3 of 4 elements; author-block and testimonial are hard-blocked and the photo element is NEEDS ADAM (low-res/placeholder) — only "local detail" remains, which alone fails the ≥3 bar. No landing-page edits. Single-ask pause request lives in the 5/13 entry and TODO.md NEEDS ADAM #0 — not re-litigated here. Next run: 2026-07-01.

---

### 2026-07-15 — BLOCKED (run 9; one-liner per 5/13 commitment)

Both hard stops re-verified live still true (`find brand site -iname "*testimonial*" -o -iname "*approved*"` = 0 hits; `grep -in "byline|settled decision|author.*adam|author.*ashley" GOALS.md` = 0 matches). GOALS.md still week of 5/18 (last updated 7/02 — a LoanOS-only edit; the Rancho line "No Rancho Moonrise active work — paused (cruise control only if Ashley moves)" is unchanged). 9th structurally-blocked content-weekly run (4/22, 4/29, 5/06, 5/13, 6/03, 6/10, 6/17, 6/24, 7/15); 84-day blocker pattern. No landing-page edits. Single-ask pause request lives in the 5/13 entry and TODO.md NEEDS ADAM #0 — not re-litigated here. Committed queue file only by explicit path; pre-existing prior-session changes + concurrent-writer artifacts intentionally NOT staged. Next run: 2026-07-22.

---

### 2026-07-22 — accommodations.html — ✅ SHIPPED (run 10; 10-run block broken, first strengthening pass in 91 days)

**Gate re-checked live, not inherited from CONTEXT.md** (per the standing correction logged by rancho-site-daily this morning — re-read GOALS.md from disk each run):

1. **Author byline — RESOLVED.** GOALS.md now has a `## Settled Decisions` section: *"Rancho Moonrise author byline: Ashley … Byline form: `Ashley · Rancho Moonrise`. Settled 2026-07-15. This clears the `rancho-content-weekly` author-block hard stop."* GOALS.md also moved `rancho-content-weekly` into **Keep running** ("unpaused 2026-07-15 — byline settled, testimonials sourcing underway"). Runs 1–9 read a GOALS.md that predated this.
2. **Testimonial — STILL BLOCKED.** `brand/approved-testimonials.md` now exists (created 2026-07-15) — real progress — but its only candidate, **T-001 Cassie Butterfield (Google 5★)**, is `STATUS: UNAPPROVED — awaiting Adam` with `EVENT DATE: UNKNOWN`. The file's own hard rule allows pulling only `APPROVED` entries. Separately, T-001 is corporate-retreat content and its own note says it "does NOT serve wedding, accommodation, or glamping pages" — so even once approved it will not serve this page. The file's Coverage-gaps table lists Accommodations/glamping as **"No — Hipcamp shows 0 reviews. Nothing on file."**

**Why this run shipped anyway (the ≥3 rule):** the task spec requires *at least 3 of 4* elements. Runs 1–9 correctly refused because author-block AND testimonial AND photos were all blocked, leaving only 1. With the byline settled and real unused photos available, this run had photos + author + local detail = 3. Bar met.

**Page picked:** `accommodations.html` — held the #2 queue slot since 4/29 and was the standing holdover.

**Shipped (1 file):**
- **3 real photos, each verified by opening the file** — no stock, no AI, and no alt text written from a filename. Two replaced *duplicate* images (the page was rendering `accom-safari-tent`, `accom-group-aerial` and `accom-cabin-exterior` twice each): Pet Friendly → `lodge-window-view` (black ranch dog at the Lodge window, straw hat and cowhide stool beside her); WiFi → `lodge-dining-area` (long reclaimed-wood table, leather sling chairs). Third: `accom-outdoor-bath` newly placed in a real content section.
- **Named author block** — `Ashley · Rancho Moonrise` + role line + review date. **First visible author block on the site** (no page had one; no CSS class existed — used the page's inline-style convention). Matching `author` Person added to `WebPage` JSON-LD with `dateModified: 2026-07-22`.
- **Local detail** — killed the generic *"clean, well-maintained bathhouse"* (3 occurrences; copyable by any Texas venue) and replaced it with the real building: corrugated metal walls, cedar plank floor, carved river-rock sink on a cedar vanity, walk-in shower — confirmed by opening `accom-outdoor-bath-1024.webp` directly. Plus Travis County active-burn-ban constraint on fire pits (already published in `faqs.html`) and donkeys at the fence line (VOICE-GUIDE-sanctioned).

**Bug fixed in passing:** `og:image`/`twitter:image` pointed at `accommodation-premium-safari.jpg` — a **342×340** thumbnail — while declaring `width 1200` / `height 630`. Repointed to `accom-safari-tent.jpg` (2049×1536) with true dimensions. **Checked all 29 other public pages — no other page has this defect.**

**Verification:** `npm run validate:site` passes; 3/3 JSON-LD blocks parse with `author.name = Ashley` and `dateModified` asserted; all 4 assets 200 + decode at real dimensions; 0 banned words; 0 emoji; `Manor` only in schema address + footer. No screenshot — preview harness reported `window.innerHeight: 0` (viewport never had height, so IntersectionObserver couldn't fire and lazy images never decoded). Confirmed a harness artifact, not a regression: every pre-existing `.fade-in` on the page behaves identically and the untouched homepage reveals normally.

**Finding for future runs — do not add photos to `[data-gallery]` blocks.** Both galleries here are Supabase-hydrated from `rancho_photos` (`ranch_tour` 12 active, `lodge` 8) and call `el.innerHTML = ''` before appending. Static tiles added there are **wiped client-side in production**. All three photos this run went to non-hydrated slots.

**Left alone deliberately:** `corral-hank-willie` and `corral-waylon-texas` — real photos in the responsive ladder with **zero references anywhere in the repo**. Strong orphaned assets, but VOICE-GUIDE lists the horse corral under "future, not yet public-ready" while it is already live on `index.html`, `weddings.html` and `host-your-event.html`. That contradiction is Adam's call, not an autonomous run's. Logged to TODO.

**Next run:** `host-your-event.html`. Note T-001 (once approved) is corporate-retreat content and suits `host-your-event.html` / `corporate-retreat-near-austin.html` — so that page could reach 4 of 4 if Adam approves it and Ashley supplies the event date.

---

### 2026-08-19 — host-your-event.html — ✅ SHIPPED (run 11; second consecutive productive run)

**Gate re-checked live, not inherited.** GOALS.md read from disk: `## Settled Decisions` still carries the Ashley byline (`Ashley · Rancho Moonrise`, settled 2026-07-15), and `rancho-content-weekly` is still under **Keep running**. Author block remains unblocked.

**Testimonial — STILL BLOCKED, re-verified rather than assumed.** `brand/approved-testimonials.md` read fresh this run: the only candidate, **T-001 Cassie Butterfield (Google 5★)**, is still `STATUS: UNAPPROVED — awaiting Adam` with `EVENT DATE: UNKNOWN`. This is the page the file's own header nominates for it ("Suggested pages: `corporate-retreat-near-austin.html`, `host-your-event.html`") — so `host-your-event.html` is exactly the page that would have hit **4 of 4** had T-001 been approved. It has now been sitting unapproved for **35 days**. Nothing else changed in the file since 2026-07-15. → **NEEDS ADAM** (still the single highest-value 2-minute unblock in this workstream).

**Page picked:** `host-your-event.html` — held the #3 queue slot and was named "next up" by the 7/22 run.

**Shipped (2 files, +49/−1 on the page, +1/−1 on the sitemap):**

- **3 real photos, each verified by opening the file** before alt text was written. All three were **orphaned assets** — present in the responsive ladder, referenced nowhere in the repo:
  - `event-fringe-pergola` → replaced a **duplicate** `venue-event-barn` on the Conferences & Luncheons card (the same image was rendering twice on this page, at the card and again in the Event Barn split). Covered cedar patio, round bistro tables, sage chairs, bench of patterned pillows, fringe garlands and string lights overhead.
  - `event-picnic-thunderbird` → new Courtyard split. Gravel courtyard, wood picnic tables, agave in the gravel, thunderbird mural with *BE HERE NOW* on the barn's black metal wall.
  - `event-outdoor-bar-disco` → new Outdoor Bar split. Corrugated-metal bar with wood counter, prickly pear in terracotta pots, branch pergola with a disco ball.
- **Named author block** — `Ashley · Rancho Moonrise` + role line + review date, matching the inline-style convention established on `accommodations.html` 7/22 (no CSS class exists for this yet; still only 2 pages carry one). Matching `author` Person added to the `WebPage` JSON-LD alongside `dateModified: 2026-08-19` — this page's `WebPage` block previously carried **neither**.
- **Local detail (two, both verifiable)** — (1) the thunderbird mural / *BE HERE NOW* / breeze-block wall / agave courtyard, read straight off the photo, not inferred; (2) **Travis County active burn ban** pausing fire-pit use, plus fires out by midnight — already published on `policies.html`, and county-specific, so a venue in Hays or Bastrop County literally cannot copy the sentence. Bar copy holds the VOICE-GUIDE line: venue-sold, per person per hour, no outside alcohol, never walk-in.

**Rejected during drafting — recorded so a future run doesn't re-reach for it:** the **9:30 PM noise curfew** looked like an ideal uncopyable planning detail (real, published on `policies.html` and `faqs.html`). It was cut because line 288 of this same page already reads "celebrations that go late" — publishing a 9:30 outdoor cutoff here would have contradicted live copy on the same screen. Which of the two is correct for *private events* (as opposed to overnight guests on a shared property) is a real question and is **NOT** resolvable autonomously → logged to TODO as a question for Ashley.

**Verification:** `npm run validate:site` passes. All 4 JSON-LD blocks parse; `WebPage.author.name = Ashley` and `dateModified = 2026-08-19` asserted by parse, not by grep. All 6 image variants (3 × 480w/1024w) exist and decode at their real dimensions. HTML tag balance checked programmatically — 0 unclosed, 0 mismatched. 0 banned filler words, 0 emoji. `Manor` appears 3× and all 3 are pre-existing postal-address contexts (schema `addressLocality`, schema FAQ answer, footer) — no location descriptor in body copy. Sitemap `lastmod` bumped 2026-05-05 → 2026-08-19.

**No screenshot — and the reason is different from 7/22's.** Dev servers cannot be started from an unattended scheduled-task run (the harness refuses: nobody is present to approve). Verification was therefore entirely static. Note for whoever runs this interactively: the three new images are **portrait** sources (1024×1366) landing in `4/3` `aspect-ratio` containers with `object-fit: cover`, so they centre-crop. The crop was reasoned through — mural and picnic tables both survive the centre band — but it has not been seen rendered.

**Left alone deliberately:** the page states **200** capacity in the AEO block and **1,000+** in the FAQ, and the `EventVenue` schema declares `maximumAttendeeCapacity: 200` while VOICE-GUIDE says "Events up to 200". That is a three-way contradiction in published copy and schema, it predates this run, and picking a number is a facts decision, not a content-strengthening one → logged to TODO.

**Next run:** `events.html`. If T-001 lands as APPROVED with an event date before then, **jump the queue back to `host-your-event.html` or `corporate-retreat-near-austin.html`** — either would reach 4 of 4 on a single short pass.

---

### 2026-09-04 — events.html — ✅ SHIPPED (run 12; third consecutive productive run)

**Gate re-checked live, not inherited.** GOALS.md read from disk: `## Settled Decisions` still carries the Ashley byline, and `rancho-content-weekly` is still under **Keep running**. Author block remains unblocked.

**Testimonial — STILL BLOCKED, re-verified.** `brand/approved-testimonials.md` read fresh: T-001 is still `STATUS: UNAPPROVED — awaiting Adam`, `EVENT DATE: UNKNOWN`, unchanged for 51 days. Moot for this specific page regardless — T-001 is corporate-retreat content and its own note says it doesn't serve wedding/accommodation/glamping pages; `events.html` (the public event calendar) isn't its target page type either. → **NEEDS ADAM**, TODO.md header re-verified and bumped.

**Page picked:** `events.html` — held the #1 queue slot, named "next up" by the 8/19 run.

**Shipped (1 file, +53/−0):**

- **3 real photos, each opened and visually verified before alt text was written.** All three were **orphaned assets** — present in the responsive ladder (480w/1024w), referenced nowhere in the repo:
  - `event-porch-yellow-umbrella` — the stone-faced Lodge porch, wood picnic table, open yellow umbrella, rocking chairs, cedar log posts, golden hour. A different building from the other two photos.
  - `event-rm-exterior-firepit` — Adirondack chairs circled around a fire pit outside the black event barn, string lights, a nearby picnic table.
  - `mural-be-here-now-night` — the hand-painted thunderbird-and-sunburst mural on the event barn's wall, lit by string lights at night.
  - New section "Where the Nights Happen" placed between the blog cross-links and the AEO block, using the existing `.features` / `.feature-card` grid class already established on `host-your-event.html` — no new CSS.
- **Named author block** — `Ashley · Rancho Moonrise` + role line + review date, matching the inline-style convention from the two prior pages (still no dedicated CSS class). Matching `author` Person added to the page's `WebPage` JSON-LD alongside `dateModified: 2026-09-04` — this page's `WebPage` block previously carried neither.
- **Local detail** — the barn's mural is hand-painted directly on the metal siding, not printed or a decal; described from the photo itself (sunburst, wingspan, wildflowers either side) without guessing at the small artist-credit text visible in-frame, which wasn't legible enough at this resolution to state as fact. Paired with a second, previously-unpublished-on-this-page detail pulled straight from `VOICE-GUIDE.md`'s Property Facts: the same barn is the Event Barn by day and the **Neon Moon Barn Lounge** by night, and that lounge is event-guest-only, never a walk-in bar — relevant precisely because this page is the one selling public, walk-up nights.

**Distinctness check against `host-your-event.html` (8/19):** that page already features the same mural in daytime (`event-picnic-thunderbird`) as part of its courtyard photo. This run's mural photo is a different file, shot at night, and used for a different reason (events-page night-energy, not courtyard-for-private-events context) — not a duplicate placement.

**Verification:** `npm run validate:site` passes. All 3 JSON-LD blocks parse; `WebPage.author.name = Ashley` and `dateModified = 2026-09-04` asserted by parse, not grep. All 6 image variants (3 × 480w/1024w) exist and decode at their real dimensions (`event-porch-yellow-umbrella` 1024×1821 portrait, `event-rm-exterior-firepit` 1024×768 — already 4:3, no crop — `mural-be-here-now-night` 1024×1366 portrait). HTML tag balance checked programmatically — 0 unclosed, 0 mismatched. 0 banned filler words (checked against the task's list), 0 emoji. `Manor` appears only in pre-existing schema/footer postal-address contexts — no new instance. Committed by explicit pathspec (`site/pages/events.html` only) — the 5 pre-existing uncommitted files from other workstreams (`api/inquiry.js`, `site/css/styles.css`, `site/js/main.js`, `site/pages/contact.html`, `site/pages/weddings.html`) were left untouched, per the standing NEEDS OWNER flag. Pushed to `origin/main` (`cdffcec`) and verified at the destination three ways: `git ls-remote` matches local HEAD, `git show origin/main:site/pages/events.html` contains the new section, and the Vercel production deployment for that commit (`dpl_3ZpFeBdnjJBW5QrSKFHCA8b4oG1p`) reached `READY` and aliased to `ranchomoonrise.com` — confirmed with a live `curl` of `/events/` returning the new section headings.

**Portrait-crop note (same caveat as 8/19):** two of the three new photos are portrait sources landing in `.feature-card`'s `aspect-ratio: 4/3` container with `object-fit: cover`, so they center-crop. The crop was reasoned through against each photo's real pixel dimensions and the subject placement holds up, but — as with the 8/19 run — no dev server could be started from this unattended run to see it rendered. Worth a human glance next time someone's on the page.

**Next run:** `pool-day-pass-austin.html`.
