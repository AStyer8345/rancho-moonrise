# RUN_073 — 2026-09-07 raw scrape notes

8-day gap since RUN_072 (2026-08-30); task did not fire 8/31-9/6.

## Brand canary
WebSearch `"Rancho Moonrise" ranch Austin Texas` → ranchomoonrise.com returned prominently (top result + several owned pages). PASSED.

## Google
WebSearch `Rancho Moonrise Manor Texas Google Maps rating reviews` → no Google-specific rating/count surfaced (only Hotels.com 9.0, listing URLs). Did NOT re-run the contaminated query from RUN_070/072. No new data. Authoritative 130/4.9★ (RUN_034, 2026-05-19) now 111 days stale. Googlebot-UA path stays CLOSED (tried 8/30, entity-only).

## Hipcamp
WebSearch `site:hipcamp.com Rancho Moonrise Texas` → listing content summary (cabins, family safari tent, pool/lounge access) but the summarizer did NOT reproduce the "34-acre" or "a bar" verbatim strings this run — first time in 6 consecutive prior confirmations that the violation text didn't surface. No count/rating in result either way. Not treated as resolution (no "36-acre" or bar-removed text appeared either) — genuinely inconclusive excerpt, different snippet slice of the same listing.

## TripAdvisor
Canonical listing g56224-d33307272 surfaced in the general Google-rating query ("RANCHO MOONRISE - Prices & Campground Reviews (Manor, TX)") with no review count/rating in the title snippet — consistent with 0/unclaimed. site:tripadvisor.com-scoped query itself didn't return tripadvisor.com in the link set (search tool ignored/loosened the site: filter), but the canonical URL appeared via the other query. 0/unclaimed HELD.

## Facebook
4 WebSearch attempts (site:facebook.com reviews/recommend query, plain recommend/rating query, quoted-URL + 86% query, "reviews section star rating" query) — NONE surfaced the 6/86% aggregate this run. All four returned only page metadata (1,137 likes / 333 talking about it / 576 visited) or bled in Hotels.com's 9.0. Direct WebFetch of https://www.facebook.com/p/Rancho-Moonrise-100083582071947/reviews returned a truncated/incomplete render (JS-gated, consistent with the established facebook-review-text failure mode) — could not extract count, %, or text. First verification gap after 5 consecutive successful WebSearch confirmations (RUN_068 through RUN_071/072... actually confirmed RUN_068,069(recovered),070,071 explicitly, held RUN_072 without a fresh query). 6/86% HELD as unconfirmed this run, not assumed changed. attempt count vs review-aggregate path = 1.

## The Knot
WebSearch `site:theknot.com Rancho Moonrise reviews` → Haylee L.'s review body still indexed verbatim: "a neighboring property played extremely loud amplified music from early afternoon until after midnight, making it impossible to sleep on site or enjoy their time there, and they later learned the venue has no ability to control or prevent this." No owner-response text surfaced in the excerpt. Also surfaced a positive snippet ("most beautiful and unique venue, staff incredibly helpful, kind, and communicative") — consistent with existing 8/4.5★ profile, not a new review confirmed (no count delta evidence). Unreplied day count now 193 / 27.6 weeks (was 185/26.4wk at RUN_072, +8 days).

## Expedia
Direct WebFetch of https://www.expedia.com/Manor-Hotels-Rancho-Moonrise.h89565924.Hotel-Information → HTTP 429 (5th recorded direct-fetch attempt across RUN_069/070/071/[no-attempt 072]/073, all 429 except none). This is now after a 17-day gap since the last attempt (8/21) — resolution path (d) ("429 may self-heal on backoff") is now fully disconfirmed per RUN_072's own stated threshold ("should not be counted as a live option after one more failure"). WebSearch surfaced "On Expedia, Rancho Moonrise has a rating of 9.0 out of 10 rating with 15 reviews" — this is almost certainly the summarizer blending Hotels.com's 9.0/"Wonderful" figure under the Expedia label again (the same divergent-values contamination pattern documented since RUN_066/068/070). NOT recorded as an Expedia-specific value; logged as another instance of the known bleed, and "15" added to the divergent-values-observed list without promotion. Expedia h89565924 anchor stays 8.0, count stays null (search-confirmed 6, never promoted — rule question still with Adam).

## Apple Maps
WebFetch https://maps.apple.com/place?place-id=IECFC57C438E79EC4 → identical to both 8/30 reads: 80% overall (5 ratings), Accommodations 100%/4, Customer Service 100%/3, Location 100%/4, attribution "Yelp" by icon. This is the 3rd consecutive identical read (2 on 8/30 + this one) — stability confirmed.

## Yelp (out of scope, cross-check for Apple Maps attribution)
WebSearch `Yelp Rancho Moonrise Manor Texas rating reviews` → "Yelp shows 1 review and 36 photos" — the SAME single pool-day-pass review body as previously documented ("perfect temperature and depth... towel rentals $2... pool passes ~$20/day"). This is now 2 independent confirmations of Yelp=1 review, directly contradicting Apple Maps' "5 ratings" if the icon attribution were literal. Yelp's own count cannot be the source of Apple's 5-rating aggregate. Attribution conclusion: Apple Maps' displayed 80%/5-ratings block is NOT a live mirror of Yelp's actual review count — either Apple blends multiple minor sources under a generic "review" icon, or the icon is simply wrong. Still not promoted anywhere; still out of monitored scope; no held value moved.

## ResortPass (out of scope — cross-reference only, not a fresh scrape by this task)
rancho-competitive-weekly re-verified ResortPass live TODAY (2026-09-07, done-log entry `resortpass-access-blocked-2026-08-31` RESOLVED): Rancho $20/$15, 4.8★/53 — identical to the pre-block value, confirming no drift during the 403 blackout. Lucky Arrow review count moved 201→209. Noted here for continuity; not re-fetched by this task since same-day fresh data already exists from a sister task and ResortPass remains out of this task's ownership table.

## Airbnb
No attempt (73rd consecutive) — 403 pattern established since 2026-04-17, NEEDS_ADAM_VERIFY standing.
