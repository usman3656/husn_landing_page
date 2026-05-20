# SyncGuard — Implementation Plan

Phased, milestone-gated. **No phase starts until the prior phase's exit gate is met.** Each phase has a kill criterion — if we miss it, we pivot, not push.

---

## Phase 0 — Landing Page + Waitlist (Weeks 1–2 build, 4–6 weeks validation window)

**Goal:** Validate demand before any product is built. Capture qualified TPM/EPM/PMO leads. Surface enough founder conversations to refine ICP and wedge.
**Name:** Foresio (locked, pending domain + trademark verification)

### Deliverables (Phase 0 minimal stack — per audit P0)
- Single-page marketing site (Next.js 15 + Tailwind + shadcn/ui on Vercel)
- Waitlist form → **Resend Audiences** (no Postgres at Phase 0 — defer to Phase 3) + welcome email
- "Talk to the founders" CTA → **Cal.com** (primary, hero) + waitlist as fallback below the fold
- Plausible page analytics + PostHog event analytics (consent-gated)
- **GDPR-compliant cookie banner** (Cookiebot Free or Klaro) — required since launch is global
- Privacy + Terms pages from **Iubenda or Termly templates** — skip lawyer review at Phase 0
- One static "pre-sync brief" mock + simple acknowledgement-graph + drift-detector visuals (per user pick: all three with weighted ordering — brief hero, graph differentiator, drift familiar entry)

### Tech choices (Phase 0 only — Phase 2+ stack moved to QUESTIONS.md per audit P0)
- Frontend: Next.js 15 App Router, Tailwind, shadcn/ui, minimal Framer Motion
- Form backend: Server Action → Resend Audiences API + Slack-webhook notification (no DB)
- Hosting: Vercel Hobby (upgrade to Pro only if traffic warrants)
- Email: Resend
- Booking: Cal.com Free
- Analytics: Plausible (page) + PostHog Cloud (events, consent-gated)
- Legal templates: Iubenda or Termly

### Steps
1. **Domain & trademark (Day 1)** — verify foresio.com (or .ai/.io fallback) is available, quick USPTO + EU TM search, register, point DNS to Vercel.
2. **Copy draft (Day 1–2)** — write all sections in `content.md` before touching components. Iterate copy *first*.
3. **Wireframe + visual reference (Day 2)** — pick 2–3 reference landing pages (Linear, Vercel, Stripe), agree on visual direction.
4. **Component build (Day 3–6)** — Hero (founders-CTA primary), Problem, How-it-works (3-step), Brief/Graph/Drift visuals, Integrations strip, Security strip (Anthropic + ZDR language), FAQ, Waitlist form (below fold), Founder note. Keep page <100KB JS.
5. **Form + email (Day 5)** — Server Action → Resend Audiences + Slack-webhook ping; validate work email (block free providers), dedupe.
6. **Legal + cookie banner (Day 6)** — Iubenda/Termly privacy + ToS; sub-processor list (Vercel, Resend, Cal.com, Plausible, PostHog); GDPR-compliant cookie banner required for global audience.
7. **Analytics (Day 7)** — Plausible page-level, PostHog events (consent-gated): hero CTA click, Cal.com booking, waitlist submit, scroll depth. Conversion goals: bookings (primary), waitlist (secondary).
8. **QA + Lighthouse (Day 8)** — performance ≥90, accessibility ≥95 (WCAG AA target), mobile-first verified on real devices.
9. **Launch (Day 8–10)** — soft-launch to network for feedback (24h), then public.
10. **Distribution (Week 2 onward, 4–6 week validation window)** — 50 LinkedIn outbound DMs to target TPMs, 1 post in Rands Slack + TPM Huddle (with permission), 1 Lenny's Newsletter mention attempt, sponsor inquiry for Pragmatic Engineer.

### Exit gate (decides if Phase 1 starts)
- **Composite signal (3:1 weight)**: founder calls booked + qualified waitlist signups (TPM/EPM/PMO at 300–3,000-person tech co), within **4–6 weeks** of public launch. Target: ≥10 booked calls OR ≥30 qualified signups, ideally both.
- **5 booked founder interviews completed** within the same window.
- Qualitative: at least 3 interviewees independently describe the wedge problem in their own words.

### Kill criterion
- <10 qualified signups after 6 weeks despite 200+ outbound touches → pivot wedge or ICP before any code is written.

---

## Phase 1 — Customer Discovery & Wedge Validation (Weeks 3–6, parallel to Phase 0)

**Goal:** Talk to humans. Stop guessing.

### Deliverables
- 15+ structured 30-min interviews with TPM/EPM/PMO leads
- Interview synthesis doc: top 3 pain themes, top 3 dead-end themes, willingness-to-pay signal
- 3 signed "design partner" letters of intent (free 6-month pilot in exchange for weekly call + case study)

### Stop conditions
- If <2/15 interviewees light up on the wedge → revisit Q1 (wedge artifact) before Phase 2.
- If 0 design partners commit → don't build MVP; do more discovery.

---

## Phase 2 — MVP Scope Lock (Week 7)

**Goal:** Write down what we will and will not build. One page. Founder + design partners sign off.

### Scope (recommended baseline — confirm in QUESTIONS.md)
- Integrations: **Jira Cloud + Slack + Google Docs** only. Read-only.
- Detection: **3 drift signals** (Q2) only. Rule-based + small-classifier hybrid.
- Wedge artifact: **pre-sync meeting brief** with source citations, generated on demand + on a schedule.
- Surface: web app dashboard + Slack DM delivery of brief. No Teams, no email digest in v1.
- Auth: WorkOS (SSO + SCIM-ready)
- Tenancy: single-tenant logical isolation; shared infra acceptable for first 10 customers.

### Explicit non-goals for v1
- No Teams, Notion, Gmail, transcript ingestion.
- No write-back to Jira/Slack.
- No engineering productivity metrics.
- No OKR/strategy layer.
- No mobile app.
- No on-prem / VPC deployment.

---

## Phase 3 — MVP Build (Weeks 8–15, ~8 weeks)

### Stack (CANDIDATES — must be confirmed via QUESTIONS.md §10 before Phase 3 begins, per audit P0)
Research-grounded candidates, not commitments:
- Backend: Python 3.12 + FastAPI
- Workers: Prefect 2 vs Celery+Redis (to choose)
- DB: Postgres 16 + pgvector on Neon
- LLM: Anthropic Claude Sonnet (Bedrock for enterprise / direct API for SMB), Voyage-3-large embeddings
- Frontend: Next.js 15 (extends the landing page repo)
- Auth: WorkOS vs Clerk (to choose based on enterprise pipeline at the time)
- Hosting: Render vs Fly.io (to choose)
- Telemetry: Sentry + PostHog + Logfire
- Secrets: Doppler vs 1Password SDK (to choose)

### Weekly milestones
- **W8:** Repo skeleton, CI/CD, WorkOS auth, tenant model, Postgres schema (`entity`, `entity_link`, `event`, `mention`, `tenant`, `user`).
- **W9:** Jira ingestion (OAuth + webhook + reconciliation poll). End-to-end "we have Jira data in pgvector."
- **W10:** Slack ingestion (Events API + 3s ack + queue + reconciliation).
- **W11:** Google Docs ingestion (Drive `changes.watch` + renewal job).
- **W12:** Entity resolution (explicit links + URL co-occurrence + LLM-shortlist verification). Knowledge graph projection.
- **W13:** Drift-signal detection — 3 signals only. Rule-based first, classifier second.
- **W14:** Pre-sync brief generation (Claude agent, source-cited, structured output). Slack delivery.
- **W15:** Hardening, observability, docs, audit logging, retention/deletion jobs. Internal dogfood.

### Compliance work running parallel
- **W8:** Vanta/Drata setup, security policies drafted.
- **W9–14:** SOC 2 Type I controls in place; pen test scheduled.
- **W15:** SOC 2 Type I audit kickoff (Type II observation begins).

### Exit gate
- All 3 design partners able to receive a useful, source-cited pre-sync brief in their own Slack workspace, 3 weeks running, with <10% error rate on attribution.

---

## Phase 4 — Pilot & Feedback Loop (Weeks 16–22)

- Weekly call with each design partner. Track: brief usefulness 1–10, signals false-positive rate, time-to-value, NPS-style intent-to-pay.
- Sub-processor disclosure page live; DPA template ready.
- Pen test report received and remediated.
- Pricing tested via "would you pay $X" conversations — don't put pricing on site yet.
- First pilot converts to paid contract before public pricing launches.

### Exit gate
- 1 design partner has converted to a paid contract at a price within target band ($800–1,500/program/mo).
- Brief usefulness ≥7/10 across all 3 partners.

---

## Phase 5 — General Availability (Week 23+)

Out of scope for this plan. Triggered only after Phase 4 exit gate is met.

---

## Cross-cutting concerns (apply every phase)

- **No production data leaves the EU for EU customers** — even for Phase 4 pilots.
- **No raw transcripts cached at rest.**
- **Honor source-system ACLs at query time, never index time.**
- **Audit agent runs after every phase deliverable** (see below).
- **Anything that adds scope must be added to QUESTIONS.md and answered before code is written.**

---

## Audit Agent Protocol

After each Phase deliverable lands:
1. Spawn a parallel `Explore` agent: read all source files + `QUESTIONS.md` + `PLAN.md` + recent diffs.
2. Audit prompt asks for: (a) drift from plan, (b) overengineering, (c) correctness bugs, (d) skipped questions still unanswered, (e) anything in the build that contradicts a committed answer in QUESTIONS.md.
3. Output is a written audit report appended to `AUDIT_LOG.md`.
4. If audit flags a P0, work stops until resolved.
5. The audit agent runs **concurrently** with the next phase's first task — not after — so issues are caught in-flight.

---

## Definition of Done — Phase 0 (current)

- [ ] QUESTIONS.md §9 (landing page specifics) fully answered by user.
- [ ] QUESTIONS.md §1–§4 have placeholder answers (can be refined later).
- [ ] Name + domain locked.
- [ ] Landing page live at custom domain.
- [ ] Waitlist form working end-to-end (DB write + welcome email + Slack notification).
- [ ] Privacy + Terms pages linked in footer.
- [ ] Analytics firing, conversion goal defined.
- [ ] Lighthouse ≥95 / ≥95 / ≥95 / ≥95.
- [ ] First audit pass complete, no P0 findings.
