# Rancho Moonrise — Review Monitor Report

**Run:** RUN_034 · **Date:** 2026-05-19 · **Prior report on disk:** 2026-04-09 (40 days ago)

---

## TL;DR

- **NEW unreplied 5★ corporate-retreat review on Google** — Cassie Butterfield, 3 days ago, 5/5/5 sub-ratings, mentions "team retreat," office space, pool, sunrises/sunsets, animals. Draft reply below. **Reply within 48 hours.**
- **NEW 1★ on The Knot (surfaced this run, posted 2026-02-26)** — Haylee L., never previously flagged in this monitor's history. Complaint is "neighboring property loud amplified music, never disclosed before booking." Carries real reputational weight on wedding-search SERP. Draft reply below. **Posted ~3 months ago and still no owner response on The Knot listing — this is the urgent item this run.**
- **Google count is 130 / 4.9★** (live-verified via GBP dashboard). +5 vs. the 2026-04-09 baseline (125). +4 vs. the inline-snippet "126" that RUN_026–033 was holding on — snippet was lagging live, exactly as SKILL.md anticipated.
- **No REMOVALS detectable this run.** Cached Apify JSON does not exist on disk (`raw-data/` was empty before this run created it). Diff is against the prior 2026-04-09 text report only — a fresh Apify pull this week would let future runs detect specific reviewer removals.
- **Voice violations on three third-party listings unchanged from prior intel** — Knot copy says "20 luxury cabins and safari tents for up to 50 guests"; Hipcamp overview says "34-acre ranch" + "unwind with a drink at our bar"; both still live today. Out-of-scope for review-monitor to fix, but worth surfacing because they shape what new prospects read before they ever leave a review.

---

## URGENT — Needs Adam action this week

### 1. Reply to Cassie Butterfield (Google, 5★, 3 days ago, UNREPLIED)

Draft response in code fence below. The "NEW" badge in the GBP dashboard means it's still counted as a recent customer interaction signal — replying inside the freshness window is worth more than replying late.

### 2. Reply to Haylee L. (The Knot, 1★, posted 2026-02-26)

This review has been live on The Knot's Rancho Moonrise listing for **~12 weeks** with no owner response. The Knot SERP currently shows Rancho at 4.5(8), and the 1★ is the most recently dated review on the listing — so a wedding prospect sorting by "most recent" sees this complaint first. A measured, factual owner response (acknowledging the issue, stating what's been addressed, not gaslighting the reviewer) is the highest-leverage single action this report can recommend. Draft below.

### 3. Decide: are we doing an Apify pull this week?

This monitor task lost its cache file at some point in the past 40 days (raw-data/ was empty before this run). Without a fresh JSON pull, the monitor can detect aggregate count changes but cannot reliably detect a single reviewer removal — which is the exact failure mode SKILL.md is trying to prevent. Recommend running `compass/Google-Maps-Reviews-Scraper` (dataset ID `fGpERg1UsXZiGebTa` per SKILL.md) on the Rancho GBP this week and saving to `brand/review-reports/raw-data/2026-05-19-gbp-all-reviews.json` (or next available date).

---

## Platform-by-platform diff table

| Platform | Baseline (2026-04-09 / CONTEXT) | Today | Change | Source |
|----------|----------------------------------|-------|--------|--------|
| Google reviews | 125 / 4.9★ | **130 / 4.9★** | **+5 reviews** | Chrome-live (GBP dashboard + Maps card) |
| Google unreplied | unknown | **1 visible** (Cassie); 4 new total per dashboard card | dashboard shows 3 of 4 new already replied | Chrome-live |
| Google "Scott Morgan 1★" baseline | reported as present | **UNVERIFIED this run** (modal scroll failed) | unknown — flag for next run | Chrome-live (partial) |
| TripAdvisor | 0 reviews, unclaimed, $63–$178 | 0 reviews, still unclaimed, $63–$178 | Flat; ceiling matches RUN_033 high | web-fetch (tripadvisor.com) |
| TripAdvisor — Travelers' Choice | not attributed to Rancho | still not attributed (generic boilerplate only) | Flat — 12th consecutive run | web-fetch |
| Hipcamp | 0 reviews, listed | **0 reviews, "Booked 1 time" badge on Cosmic Cabin** | Flat | web-fetch (hipcamp.com) |
| Hipcamp — voice/data | "34-acre" + "drink at our bar" violations | both still present in live overview | Flat (carry-over) | web-fetch |
| The Knot | 4.5(8) | **4.5(8) — same 8 reviews on file** | **Newest review is 1★ Haylee L. 2/26/2026; flagged this run** | web-fetch (theknot.com) |
| The Knot — listing copy | "20 luxury cabins…50 guests" violation | still present | Flat — voice violation persists | web-fetch |
| WeddingWire | listing exists, no detail captured prior | listing exists (page errored on full-page fetch — size limit) | Not refetched this run; carry-over assumption | WebSearch headers only |
| Yelp | 1 review, 5.0 | 1 review, 5.0 ("pool day was the best idea ever") | Flat | WebSearch |
| Facebook | 5 reviews, 100% recommend | 5 reviews, 100% recommend | Flat — 16th consecutive run | WebSearch (page-level) |
| Expedia | 8.0 / 23 reviews | 8.0 / 23 reviews | Flat | WebSearch |
| Hotels.com (ho2867109568) | 8.6/10 (23 reviews) | 8.6/10 (23 reviews) | Flat | WebSearch (listing card snippet) |
| Agoda | listing exists | listing exists | Not deep-fetched | WebSearch |
| ResortPass | listing live but dormant ("no active products") | not refetched this run; per 2026-05-18 competitive-weekly, still dormant | Flat | CONTEXT-carry |

---

## New reviews — drafted responses

### Google · Cassie Butterfield · 5★ · 3 days ago

**Original review:**
> I had such a wonderful stay at Rancho Moonrise! The property is beautiful, and the staff was so friendly and welcoming. My coworkers and I hosted a team retreat here, where we used the office space for planning sessions and spent our breaks lounging by the pool. The best part was taking in the gorgeous sunrises and sunsets — plus seeing the cutest animals around the property!

**Drafted reply (post on Google):**

```
Cassie — thank you, this made our whole team smile. Pool breaks between
planning sessions is exactly how a corporate retreat is supposed to feel
out here. The donkeys are pretty sure they're the main attraction (we
don't argue with them). Y'all are welcome back any time — we're 20 minutes
from downtown Austin, so it's an easy yes for the next offsite.

— The Rancho Moonrise Team
```

Notes on voice compliance:
- No "luxury," no "Hill Country," no "Manor" as location descriptor, no "General Store," no unit count.
- "20 minutes from downtown Austin" used as Ashley-approved frame.
- "Donkeys" lean-in per VOICE-GUIDE selling-points.
- 4 sentences, warm but not sycophantic, signs off as "The Rancho Moonrise Team" per email-voice convention.
- Steers softly toward repeat-corporate-retreat booking without sounding like a pitch.

---

### The Knot · Haylee L. · 1★ · 2026-02-26 (still unreplied)

**Original review (excerpt):**
> We booked Rancho Moonrise expecting a quiet, remote wedding venue. During our site visit, a neighboring property played extremely loud amplified music from early afternoon until after midnight, making it impossible to sleep on site or enjoy our time there. We later learned the venue has no ability to control or prevent this and cannot guarantee it wouldn't happen during a wedding weekend. This risk was never disclosed to us before booking. If quiet and remoteness are important to you, I strongly recommend asking very specific questions and getting guarantees in writing. If the level of neighboring sound happened on our wedding weekend it would have easily ruined the entire event. I would never recommend this venue to a fellow bride or my own network in the event rental space.

**Drafted reply (post on The Knot — measured, owner voice, no PR speak):**

```
Haylee — we're sorry your site visit landed on a day a neighboring
property was running amplified music late. That's not the experience
anyone walks onto the ranch hoping to find, and we hear you that it
should have been raised with you before we ever sat down to plan a
wedding weekend. We're 20 minutes from downtown Austin on working
ranch land, and most weekends the only sound you hear is the wind
and the donkeys — but we can't honestly promise zero noise from
neighboring properties, and we should have said so upfront. Going
forward we're flagging neighboring-property activity directly in
our wedding inquiry conversations and on tours, so couples can ask
the questions that matter to them before they put down a deposit.
If you ever want to come back out on a quieter weekend and see what
the property usually feels like, the invitation stands.

— Ashley & the Rancho Moonrise Team
```

Notes on voice compliance:
- No "luxury," no "Hill Country," no "Manor" as descriptor, no defensive "we appreciate your feedback" boilerplate.
- "20 minutes from downtown Austin" used as Ashley-approved frame.
- "Donkeys" + "wind" lean-in (concrete sensory detail per VOICE-GUIDE).
- Acknowledges the substance of the complaint, names a specific operational change (disclose to inquiries + on tour), and offers a return invitation without minimizing the original experience.
- Signed "Ashley & the Rancho Moonrise Team" because this is the kind of complaint where owner-voice carries more weight than "team."
- **Adam: read this twice before posting.** Specifically: do we want to commit on a public review platform to "flagging neighboring-property activity in inquiry conversations and on tours"? If yes, the reply is ready. If no, edit that sentence to something narrower like "we're working through how to set noise expectations earlier in the inquiry process" — softer, still accountable, doesn't promise a specific operational change.

---

## Removed reviews — none detected this run

No reviewer is identifiably removed because the 2026-04-09 baseline report does not enumerate individual reviewer names with a full list, and `raw-data/` had no JSON cache. The aggregate count went UP (+5), so any removal would have been masked by ≥5 additions in the same window. **If Adam had a review removed in the past 40 days, this run cannot confirm it either way.** A fresh Apify pull this week fixes that for the next run.

---

## Still-pending replies carried forward

The prior 2026-04-09 review report on disk did not include drafted-but-unposted replies — it predates the current SKILL.md spec. So nothing to carry forward except:

- **Cassie Butterfield (Google)** — drafted above, recommend posting this week.
- **Haylee L. (The Knot)** — drafted above, recommend posting this week with the edit-flag noted.

---

## What I checked today

**Chrome MCP (live):**
- Google Maps place card for Rancho Moonrise → confirmed 4.9 / 130, captured aggregate signals.
- Google Search → GBP manager-view dashboard → opened Reviews modal → captured Cassie Butterfield full review, sub-ratings, hotel highlights.
- Attempted: Unreplied tab list past Cassie, modal scroll for top-20 reviewer list, Scott Morgan baseline verification. **Modal would not scroll** in the available time before the Chrome extension dropped its connection mid-drag.

**Web-fetch (live HTML):**
- tripadvisor.com/Hotel_Review-g56224-d33307272-Reviews-Rancho_Moonrise-Manor_Texas.html → 0 reviews, unclaimed, $63–$178.
- hipcamp.com/en-US/land/texas-rancho-moonrise-dw9hklej → 0 reviews, "Be the first to review," 22 sites, 37 acres, "Booked 1 time" on Cosmic Cabin.
- theknot.com/marketplace/rancho-moonrise-manor-tx-2087722 → 4.5(8), full review list including new 1★ Haylee L. 2/26/2026.
- weddingwire.com/biz/rancho-moonrise/f38c5e35e5491216.html → page size exceeded fetch limit; carry-over only.

**WebSearch (queries):**
- `"Rancho Moonrise" review 2026 site:tripadvisor.com`
- `"Rancho Moonrise" review site:hipcamp.com`
- `"Rancho Moonrise" site:theknot.com OR site:weddingwire.com`
- `"Rancho Moonrise" site:yelp.com OR site:expedia.com OR site:hotels.com`
- `"Rancho Moonrise" review 4.9 130 reviews Manor TX`
- `"Rancho Moonrise" "Scott Morgan" review` → no hit. Either the reviewer name from the SKILL.md baseline is misremembered, the review was removed before public indexing, or it never matched a search-engine-extractable snippet.
- `"Rancho Moonrise" facebook reviews Manor TX 2026` → confirms Facebook 5 reviews / 100% recommend, unchanged.

**Blockers (for next run to act on):**
- Chrome MCP extension dropped connection mid-task; second-half platform sweep had to fall back to web-fetch. If Adam can confirm Chrome MCP is signed in for tomorrow's run, the GBP modal-scroll attempt can be retried with `left_click_drag` on the scrollbar thumb.
- `raw-data/` had no JSON cache before this run — the monitor's diff-against-cached-set capability is currently dormant. **One Apify pull restores it.**

---

## Next action for Adam — ranked

1. **Post the Cassie Butterfield Google reply this week.** Draft above is voice-clean and ready. 30 seconds in GBP dashboard.
2. **Decide on the Haylee L. Knot reply.** Draft above carries an edit-flag — read the "we're flagging neighboring-property activity..." sentence and either ship it as a commitment or soften it. 2 minutes to decide, ~3 minutes to post.
3. **Run a fresh Apify GBP scrape into `raw-data/2026-05-19-gbp-all-reviews.json`** so the next monitor run can do a real reviewer-name diff. Without this, "review removed?" remains unanswerable. 5 minutes if the Apify token + dataset ID are already set up.
4. **30-second confirm with Ashley** — does the "Scott Morgan 1★" baseline referenced in SKILL.md still apply (or did that get removed at some point before today's run)? This collapses the unverified item on the next-run checklist.
5. **Out-of-scope but worth surfacing**: the WeddingWire fetch failed on size today, and the Knot listing copy still has the "20 luxury cabins…50 guests" voice violation — both are downstream of review-monitor's scope but they're the kind of thing a wedding prospect reads right before they sit down to write the next 1★.
