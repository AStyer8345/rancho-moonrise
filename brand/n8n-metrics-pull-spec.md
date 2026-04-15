# n8n Metrics Pull — Design Spec

**Status:** scoped, not yet built.
**Owner:** Claude (build in next session).
**Why:** `site/improvement-plan.html` has GBP + GSC rows that currently require manual fills. This doc specifies two n8n workflows to automate that feed, so the plan shows live numbers without Adam touching it.

---

## Workflow 1 — GSC Weekly Pull

### Purpose
Populate the GSC rows on `improvement-plan.html` (impressions / clicks / CTR / avg position / pages indexed) every Monday with the prior 7-day window.

### Access status
- GSC API access: **available** — no gating. Use `webmasters.searchanalytics.query` on the verified `ranchomoonrise.com` property.
- No additional OAuth scope setup needed if Adam's existing Google OAuth credential in n8n already has `https://www.googleapis.com/auth/webmasters.readonly`. Verify before build.

### Trigger
Schedule Trigger — `0 7 * * 1` (Mon 07:00 Central → 12:00 UTC). Matches the cadence of the Monday competitive-intel run.

### Flow
1. **Schedule Trigger** (Mon 07:00 CT)
2. **Google OAuth2** credential check — reuse existing `styer-google-oauth` credential
3. **HTTP Request** → `POST https://searchconsole.googleapis.com/v1/sites/https%3A%2F%2Franchomoonrise.com%2F/searchAnalytics/query`
   - Body:
     ```json
     {
       "startDate": "{{ $now.minus({days: 7}).toFormat('yyyy-MM-dd') }}",
       "endDate":   "{{ $now.minus({days: 1}).toFormat('yyyy-MM-dd') }}",
       "dimensions": ["date"],
       "rowLimit": 7
     }
     ```
4. **Code (JS)** — aggregate the 7 daily rows into 7-day totals:
   - `impressions = sum(row.impressions)`
   - `clicks = sum(row.clicks)`
   - `ctr = clicks / impressions` (format `%`)
   - `position = avg(row.position)` (weighted by impressions)
5. **HTTP Request** → `POST https://searchconsole.googleapis.com/v1/sites/.../indexStatus/query` *(or use URL Inspection API for indexed-page count — `indexed_count`)*
6. **Supabase Insert** into `rancho_gsc_weekly` (create table — spec below)
7. **HTTP Request** → webhook to Vercel endpoint on rancho-moonrise that re-renders `improvement-plan.html` with latest data *(or: have the static HTML fetch JSON at load-time from a public Supabase view)*

### Supabase schema (new)
```sql
create table rancho_gsc_weekly (
  week_start date primary key,
  impressions int not null,
  clicks int not null,
  ctr numeric(5,4) not null,
  avg_position numeric(6,2) not null,
  indexed_count int,
  pulled_at timestamptz default now()
);
alter table rancho_gsc_weekly enable row level security;
create policy "Public read GSC weekly" on rancho_gsc_weekly for select using (true);
create policy "Service role writes" on rancho_gsc_weekly for insert to service_role with check (true);
```

### Where it shows up
`site/improvement-plan.html` GSC Performance section — either:
- **Static rebuild path**: n8n writes to Supabase, triggers a Vercel deploy hook. Build-time fetch of latest row writes it into the HTML. *(Preferred if the site is fully static.)*
- **Client fetch path**: page JS hits a public Supabase view, renders rows client-side with a one-time delay. *(Cheaper, no rebuild.)*

Decide during build. Lean static-rebuild since the rest of the site is SSG.

### Build effort
~1.5 hr including table migration, policy, n8n workflow, and wiring the improvement-plan page to render from Supabase.

---

## Workflow 2 — GBP Monthly Email Auto-Parse

### Purpose
When the monthly GBP performance email lands (~6th of each month), parse it and fill GBP rows on `improvement-plan.html` without Adam touching the page.

### Access status
- GBP API: **still gated** (awaiting access approval — see MEMORY reference_rancho_gbp.md).
- Email parsing: **available now** — n8n Gmail trigger + regex/LLM parser.

### Trigger
Gmail Trigger — filter `from:noreply-business-profile@google.com subject:"Your March 2026 performance"` (or equivalent — refine on next actual email).

### Flow
1. **Gmail Trigger** on matching subject pattern
2. **Code (JS)** — strip HTML, extract metrics with regex OR pipe to Claude Haiku for robust parse:
   - Search impressions
   - Profile views (total)
   - Website clicks
   - Direction requests
   - Phone calls
3. **Supabase Insert** into `rancho_gbp_monthly`:
   ```sql
   create table rancho_gbp_monthly (
     month date primary key,   -- first of month
     search_impressions int,
     profile_views_total int,
     website_clicks int,
     direction_requests int,
     phone_calls int,
     source text default 'monthly_email',
     parsed_at timestamptz default now()
   );
   ```
4. **Optional**: email Adam a summary + delta-vs-prior-month.

### Build effort
~45 min once we have one real email to tune regex against. Trigger on the April 2026 email (lands ~May 6) as the first live test.

### What's NOT covered by this workflow
- Photo views, Bookings — dashboard-only metrics. Monthly email doesn't include them. Stays a manual pull from `business.google.com` until GBP API access lands.

---

## Sequencing

1. **Build Workflow 1 (GSC)** first — higher leverage, no gating, 7-day cadence means immediate value.
2. **Build Workflow 2 (GBP email)** second — wait for first real April email (~May 6) so we have actual HTML to parse against. Don't waste time on guessed selectors.

## Open questions to resolve during build

- Confirm `styer-google-oauth` credential in n8n has `webmasters.readonly` scope — if not, Adam adds it once.
- Decide static-rebuild vs client-fetch for improvement-plan.html rendering.
- Confirm Supabase project ID for the rancho tables (`uuqedsvjlkeszrbwzizl` or a separate rancho project?).
