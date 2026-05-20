# Audit Log

## Audit #1 — Planning artifacts (Phase 0)
Date: 2026-05-16
Scope: QUESTIONS.md, PLAN.md

### P0 (must fix before proceeding)
- **Phase 0 scope is bloated for a 1–2 week solo build.** Day 1–10 covers naming, copy, components, Neon Postgres + Server Actions, Resend, Slack notifications, Cal.com, PostHog + Plausible, cookie banner, Privacy/ToS with lawyer review, Lighthouse 95/95/95/95, plus 50-DM outbound — all before any signal exists. A waitlist does not need its own Postgres; Resend Audiences, Formspree, or a single Airtable/Google Sheet would cut ~2 days. Drop Neon for Phase 0 (defer to Phase 3 where it already appears).
- **"Lawyer review before public traffic" (Phase 0 deliverable) is over-scoped and a likely blocker.** A pre-revenue waitlot with no product, no PII beyond email/role/company, can ship with standard template Privacy + ToS (Iubenda/Termly) and revisit legal when a real DPA is needed. Recommending paid legal review at Phase 0 will either delay launch or get skipped silently.
- **PLAN.md Phase 2 pre-commits MVP stack choices (WorkOS, Bedrock, Prefect, pgvector, Voyage-3, Doppler, Logfire, Render/Fly) that QUESTIONS.md never asks about.** This is a contradiction with the stated rule "Anything that adds scope must be added to QUESTIONS.md and answered before code is written." Either move these to open questions or stop calling them "locked."

### P1 (should address this phase)
- **Contradiction: Q39 recommends "Talk to the founders" as primary CTA, but Phase 0 deliverables list both Cal.com booking AND a waitlist form, and the exit gate counts "30 qualified waitlist signups."** Decide whether the primary conversion is a booked call or a waitlist signup — the page, the metric, and the form fields should follow from one answer, not both.
- **Exit-gate timing inconsistency.** Phase 0 says "Weeks 1–2" but the exit gate is measured "within 4 weeks of public launch" and the kill criterion is "6 weeks / 200+ outbound touches." Phase 0 is really 2 weeks of build + 4–6 weeks of validation. Re-label so the user does not start Phase 1 prematurely.
- **Missing questions — Business model:** no question on cost-to-serve / LLM unit economics at the recommended $800–1,500/program price. At Sonnet rates over Slack+Jira+Docs ingestion, gross margin is not obvious. Add to §4.
- **Missing questions — Personas:** no question on the *anti-persona* (who we politely turn away — Asana shops, <200 employees, agencies). Worth one line in §3 because the lead form will receive them.
- **Missing questions — Legal/Privacy:** no question on (a) sub-processor disclosure obligations on the landing page itself for EU visitors, (b) whether the waitlist email + "biggest headache" free-text counts as profiling under GDPR, (c) export-control / sanctioned-country signup blocking. Phase 4 mentions sub-processor page but Phase 0 collects EU emails with no DPA story.
- **Missing questions — Technical:** no question about accessibility/i18n targets, image/mock licensing for the "pre-sync brief" mock, or whether the mock contains fabricated company names that could be mistaken for real customers (a recurring legal complaint on B2B landing pages).
- **Risky assumption baked as recommendation, Q23:** committing on the landing page to "Built on Anthropic Claude with zero data retention" before any contract with Anthropic/AWS is in place. ZDR is a contract feature, not a default. Reword as a question, not a recommendation.
- **Risky assumption, Q32:** "Anthropic primary + OpenAI fallback" is presented as a recommendation without acknowledging the cost and prompt-portability burden of dual-vendor at MVP. For 3 design partners, single vendor is fine.
- **Audit Agent Protocol (PLAN.md) is overengineered for Phase 0.** A formal `Explore` agent spawning concurrently with phase work is reasonable once there is code; for a static landing page it is ceremony. Note that it activates from Phase 1 onward.

### P2 (nice to address eventually)
- Q38 name alternatives (AlignLayer, Driftline, ProgramPulse, Throughline) — recommend also USPTO + EU TM + Google Trends checks be enumerated, not just ".com available."
- Q42 page sections list includes "integration logos" — clarify whether using Jira/Slack/Google logos requires brand-guideline compliance (it does; cite their brand pages in a follow-up).
- Phase 3 W8–W15 has zero buffer; 8 weeks for ingestion of three sources + entity resolution + drift detection + brief generation + SOC 2 Type I prep is aggressive. Flag now so the user is not surprised later.
- "Lighthouse ≥95 across all four" is a vanity gate for a waitlist page; ≥90 perf / ≥95 a11y is plenty.

### Things the plan got right
- Phasing with explicit kill criteria and exit gates is unusually disciplined and should stay.
- Q18's quantitative demand signal (30 signups + 5 interviews in 4 weeks) is the right kind of falsifiable.
- §7 (Legal/Privacy) is taken seriously early — EU AI Act stance, ACL honoring at query time, no transcripts at rest, two-party consent are all correct calls for this category.
- Q37 positioning ("layer that makes your existing tools work, not a new system") is the right narrative wedge given the Jira Align / ClickUp scar tissue in the buyer.
- Explicit non-goals in Phase 2 (no write-back, no OKRs, no productivity metrics, no mobile) are the kind of restraint most early plans lack.

## Audit #2 — Mid-build snapshot
Date: 2026-05-16
Scope: current state of the landing-page build

Build hasn't started yet — nothing to audit. The repository at `/Users/bawani/idea/go_big_landing` currently contains only the three planning artifacts (`QUESTIONS.md`, `PLAN.md`, `AUDIT_LOG.md`) plus a `.claude/settings.local.json`. No `package.json`, no `next.config.*`, no `app/` or `src/` directory, no components, no Server Action, no `.env*`, no content draft, no static mocks, no legal pages, no dependency manifest of any kind. There is nothing to drift, overengineer, or mis-claim against yet. Audit #1 P0/P1 items remain on paper only — they will be re-checked in Audit #3 once scaffolding appears (look for: Neon/Postgres sneaking back in despite Resend-only lock, `foresio.com` instead of `foresio.ai`, "SOC 2 compliant" copy, a free-text "headache" field, missing consent gate on PostHog, absent sub-processor list, and an overweight JS bundle).

### P0 (must fix before claiming Phase 0 done)
- None observed — no code exists.
### P1 (should address)
- None observed — no code exists.
### P2 (nice to address)
- None observed — no code exists.
### Build looks correct on
- N/A — pre-build state.

## Audit #3 — Phase 0 final
Date: 2026-05-16
Scope: /Users/bawani/idea/go_big_landing full build (app/, components/, lib/, legal pages, env)

### P0 (must fix before Phase 0 ships)
- **Unbacked ZDR claim in hero trustline.** `lib/content.ts:24` ships the line "Anthropic Claude with zero data retention" in the hero and `lib/content.ts:123-125` repeats it in the Security strip ("under a zero-data-retention contract") and `faq` item Q5 (`lib/content.ts:162`). QUESTIONS.md §10 Q52 explicitly flags that the Anthropic ZDR contract must be signed before any production data hits the API, and Audit #1 P1 already warned: "ZDR is a contract feature, not a default." There is no contract today (no product, no tenant data). Hedge to "Anthropic Claude planned under a zero-data-retention contract" / "we will contract for zero data retention before any pilot data is processed" or remove the absolute phrasing until the contract is signed. Same fix applies to the Security section and the FAQ — all three currently make the same overstated claim in present tense.
- **"SOC 2 Type I observation in progress" is premature.** `lib/content.ts:132-135` ("Compliance roadmap … SOC 2 Type I observation in progress for Phase 4") contradicts both QUESTIONS.md Q33 ("don't make claims we can't back" — only after Vanta/Drata onboarded and audit kicked off, which is Phase 3 W15 in PLAN.md) and the privacy policy itself, which correctly says "We do not claim certification under SOC 2, ISO 27001, or any other framework at this time" (`app/privacy/page.tsx:298-303`). Pick one story. Recommend dropping the security card to "SOC 2 readiness work begins with our first pilot" or removing the bullet entirely. The same overclaim is in the hero trustline ("SOC 2 in progress", `lib/content.ts:24`).

### P1 (should address before public launch)
- **Server Action validates required fields *before* free-email check, which is the intended order, but `tools` is silently treated as optional** (`lib/waitlist-action.ts:18` — `REQUIRED_FIELDS` excludes `tools`). That's defensible (multi-select can be empty) but locked decision Q40 lists "current tools" as a captured field; if empty submissions are acceptable, document it; if not, validate `tools.length > 0`. Today an empty array passes through and Slack reports "Tools: —".
- **Native `<select required>` is the only validation on role/size despite `noValidate` on the form** (`components/waitlist-form.tsx:53` and `:135`). With `noValidate` set, browser-level `required` is suppressed; the server catches missing values via `missing_field`, but the user just sees "Please fill in role." with no field-level highlight. Add aria-invalid + per-field error rendering, or drop `noValidate`.
- **Form a11y: tool checkboxes are implemented as `<button aria-pressed>`, not real checkboxes inside the `<fieldset>`** (`components/waitlist-form.tsx:62-85`). Acceptable pattern, but screen-reader users won't get "checkbox, not checked, 3 of 7" semantics they'd expect for a multi-select. For a waitlist this is P1 not P0; consider native `<input type="checkbox">` styled as pills.
- **Cookie banner uses `role="dialog"` but is not focus-trapped, has no close button, and is dismissible only by Accept/Decline.** `components/cookie-banner.tsx:37-39`. The `aria-live="polite"` on a dialog is also slightly off — dialogs aren't live regions. Either downgrade to `role="region" aria-label="Cookie consent"` (it isn't modal) or add focus management. Also: choice is stored in `localStorage` only — there's no way for a user to revisit the choice without clearing site data. Privacy page acknowledges this (`app/privacy/page.tsx:183-184`) but a "Cookie preferences" footer link would be more honest under GDPR.
- **PostHog stub script is large and inline.** `components/analytics.tsx:43-46` ships the full PostHog snippet inline. Gated correctly behind consent + non-stub key, but contributes meaningfully to bundle. Lazy-load `posthog-js` from npm on consent grant instead — would help the 108KB First Load JS overage.
- **First Load JS at 108KB vs <100KB target** (PLAN.md step 4). The biggest contributors are likely cookie-banner + analytics + waitlist-form all loading on the home route. The analytics PostHog inline snippet is fine to keep on a separate chunk; cookie-banner could be dynamically imported after `requestIdleCallback`. 8KB over target is a P1, not a launch blocker.
- **`metadataBase` is hard-coded to `https://foresio.ai`** (`app/layout.tsx:7`) and the domain is not registered yet (README pre-launch checklist line 1). If launched on a fallback domain (foresio.io) without updating this, OG/canonical URLs will be wrong. Move to `process.env.NEXT_PUBLIC_SITE_URL` with `foresio.ai` fallback.
- **Privacy page doesn't list Anthropic** as a sub-processor (`app/privacy/page.tsx:142-161`). It's not needed yet — no LLM calls on the landing page — but the security strip + FAQ + hero all advertise Anthropic. A reader who diligence-checks will notice the mismatch. Add a one-line "When we have a product, we plan to use Anthropic Claude; we'll update this list" or drop the LLM mentions entirely on the landing page.
- **`<a target="_blank">` to Cal.com missing `rel="noopener"` is fine (you have `noreferrer`)** — actually you have both `noreferrer` only. Add `noopener` explicitly for older clients (`components/talk.tsx:24, 34`).

### P2 (nice to address)
- `components/talk.tsx:17-38` duplicates the same `<a>` block in both branches of `isStub ?`. The booking URL is identical; only the placeholder paragraph differs. Collapse.
- README references `tools.includes("Other")` role option — `lib/content.ts:198` lists "Other" in roles but not in tools. Fine, just noting the comment in README about "block free providers" is the only documented stub-detection behavior; document the `"stub"` substring trick in `.env.example` too.
- Hero `<DecorBackdrop>` SVG is decorative (`aria-hidden`) — good; but the dot pattern uses `currentColor` against `text-ink` which inherits from body. At opacity 0.07 it's likely fine but verify contrast on the eyebrow text overlapping it.
- FAQ uses `<details>/<summary>` with no `aria-expanded` indicator beyond visual rotation — native, accessible, fine. Just be aware: no analytics event fires on open. Phase 0 PostHog plan calls out scroll depth + CTA clicks; no FAQ open tracking is present. Minor.
- `lib/free-email-providers.ts` whitelist is reasonable but missing common ones (`live.co.uk`, `outlook.co.uk`, `qq.com`, `163.com`). For a global launch, the list will leak. Acceptable for Phase 0.
- `components/integrations.tsx` lists "Microsoft Teams", "Notion", "Otter / Fireflies / Granola transcripts" as "Roadmap" — those are vendor names. Brand-guideline review (Audit #1 P2) still applies before public launch, but using them as plain text (not logos) is the safer pattern that's been chosen — good.

### Build verified against QUESTIONS.md locked decisions
- ✅ Q38: "Foresio" + foresio.ai is used consistently. No "foresio.com" leakage; `metadataBase`, README, content, env example all agree on `.ai`.
- ✅ Q39: "Talk to the founders" is the primary CTA in header (`components/header.tsx:19-24`), hero primary button (`lib/content.ts:22`), and dedicated #talk section before waitlist. Waitlist is below the fold and labelled "Or join the waitlist" — correct hierarchy.
- ✅ Q40: Waitlist form captures name, work email, role, company, size, tools — no free-text "headache" field anywhere. Free-email block runs server-side with a 28-domain list.
- ✅ Q43: Three static mocks (brief, graph, drift) in `components/mocks/`. Ordering in `lib/content.ts:67-103` matches the locked "brief hero, graph differentiator, drift familiar entry" sequence with kickers labelled accordingly.
- ✅ Q45: Resend Audiences only, no DB. `lib/waitlist-action.ts` posts to `/audiences/:id/contacts`, no Postgres anywhere in `package.json` or `lib/`. Slack webhook ping is present.
- ✅ Q46: PostHog is consent-gated (`components/analytics.tsx:41`), Plausible runs without consent. Cookie banner gates PostHog, not Plausible — matches lock.
- ✅ Anti-performance-management clause is Section 7 of Terms (`app/terms/page.tsx:140-155`) with strong, specific language. Also restated in FAQ (`lib/content.ts:157-159`) and Security smallprint (`lib/content.ts:137-139`).
- ✅ Sub-processors listed in Privacy §4 (`app/privacy/page.tsx:142-161`): Vercel, Resend, Cal.com, Plausible, PostHog. (Anthropic missing — see P1.)
- ✅ Fictional companies only in mocks: Northwind Logistics, Acme Health, Tessera Data, Cobalt Labs (README:114 + grep). No real customer names.
- ✅ Stub detection works: `lib/waitlist-action.ts:22, 40` check `includes("STUB")` / `includes("stub")`; `components/analytics.tsx:11` `realKey()` guards PostHog; `components/talk.tsx:5` falls back. Build succeeds without env vars per README.
- ✅ Skip link present and visible on focus: `app/layout.tsx:32-37` with `sr-only focus:not-sr-only`.
- ✅ Server Action validation order is: required fields → email format → free-provider check → side effects. Correct ordering — work-email check runs before any Resend/Slack call.
- ⚠️ "Anthropic Claude with zero data retention" appears as a present-tense claim in hero, security, and FAQ despite no contract — see P0.
- ⚠️ "SOC 2 Type I observation in progress" claim in security section + "SOC 2 in progress" in hero contradicts privacy page and QUESTIONS.md Q33 — see P0.

### Things the build got right
- One copy file (`lib/content.ts`) drives every section — easy to revise without touching components.
- Server Action is small, dependency-free, and stub-safe. No PII written to disk anywhere in this repo.
- Privacy policy is plain-English, honest about "no SOC 2 claim," lists sub-processors, names legal bases per purpose, addresses CCPA, and includes a no-automated-decisions clause — directly responsive to Audit #1 P1 GDPR concerns.
- Anti-performance-management is given its own Terms section, not buried in a list — exactly what QUESTIONS.md Q26 asked for.
- Mocks are real inline SVG with `role="img"` + `aria-label`, plus an `sr-only <dl>` summary in the graph mock — better a11y than most landing pages ship.
- No "fake logos / as featured in" — Q41 honored.
- Phase 0 minimal stack honored: no Postgres, no WorkOS, no Prefect — Audit #1 P0 stack-creep avoided.

## Audit #4 — Post-rewrite verification
Date: 2026-05-16
Scope: full rewrite per CRITIQUE.md

### CRITIQUE.md fixes verified
- [x] **1. Named founder** — `lib/content.ts:378-386` ("Devan Patel", CEO, bio, LinkedIn, initials). `components/founder-card.tsx` renders portrait + name + role + LinkedIn link. **Caveat:** name/bio/LinkedIn are explicitly flagged as placeholder (`lib/content.ts:376-377`) — `https://www.linkedin.com/in/example` is a dead URL and "Devan Patel" is fictional. Structurally fixed; factually a launch-blocker placeholder.
- [x] **2. Hero names category** — `lib/content.ts:20` H1 = "The alignment layer for program teams." Sub at `:21-22` mirrors the suggested rewrite.
- [x] **3. CTAs demoted** — `components/hero.tsx:15-26`: filled black pill primary, secondary is text link with underline-on-hover, plus qualifier line at `:28`.
- [x] **4. Detection rationale** — Each feature has a `detection` line (`lib/content.ts:133-134, 147-148, 161-162`) named per signal. Rendered in `components/features.tsx:44-46`.
- [x] **5. Proof exists** — Testimonials section (`components/testimonials.tsx`) with 3 anonymized vignettes, and Customer Logos (`components/customer-logos.tsx`). **All fictional** — see placeholders section.
- [x] **6. SOC-2 hedge dropped from hero** — Hero trustline (`lib/content.ts:32`) reads "Read-only · Honors source-system ACLs · Zero data retention on LLM calls." No SOC-2 mention in hero. Security section makes a stronger claim now ("SOC 2 Type II in active observation", `lib/content.ts:283`) which **escalated** Audit #3's P0 — see new P0 below.
- [x] **7. Cal.com qualification gate** — `components/demo.tsx:62-118` 3-question form (role/size/pain), submits via `submitDemoRequest` server action (`lib/waitlist-action.ts:99-111`), only then reveals `CalendarBlock`.
- [x] **8. Anti-persona section + <200 removed** — `components/audience.tsx` 2-column for/not-for. `lib/content.ts:397, 418` size dropdowns start at "200–500".
- [x] **9. Cal placeholder leak fixed** — `components/demo.tsx:7-8` reads env; `:36-38` falls back to `https://cal.com/foresio/demo`. No placeholder copy renders to UI. (See P1 — fallback is itself a fictional handle.)
- [x] **10. Pricing posture** — Full Pricing section (`components/pricing.tsx`) with three tiers + dollar amounts. Goes well past "posture stated."
- [x] **11. FAQ reordered** — `lib/content.ts:350-372`: Q1 = "When can we actually start using it?"; performance-management Q is gone; data-residency merged into Security. Six items, buying-question first.
- [x] **12. Founder card above demo** — `app/page.tsx:38-39`: FounderCard then Demo. Correct order.
- [~] **13. next/font loaded** — `app/layout.tsx:2, 7-19` loads Inter + JetBrains Mono via `next/font/google` with CSS variables. **However:** `tailwind.config.ts:37` aliases `font-display` to the same Inter var — there is no second display face. globals.css comment (`:14-15`) acknowledges this. Partial fix.
- [x] **14. Single brand mark** — `components/brand/mark.tsx` is the one source; used by `wordmark.tsx`, header (via Wordmark), brief-mock (`components/mocks/brief-mock.tsx:80`). Founder card uses a distinct portrait monogram (acceptable). Verified consistent.
- [x] **15. Accent off green** — `tailwind.config.ts:24-28` accent is `#2A3FA8` (deep indigo). Signal green stays at `#16A34A` strictly for status.
- [x] **16. Spacing rhythm broken** — Three tiers across components: Features `py-28 md:py-36`, Anatomy/Comparison/Testimonials/Pricing/Demo/Security `py-24 md:py-28`, Problem/Audience/FAQ/Integrations/Founder/HowItWorks/EarlyAccess `py-20 md:py-24`. Rhythm achieved.
- [x] **17. Hero gradient + grain** — `components/hero.tsx:5` applies `bg-hero-radial grain`; tailwind config defines the radial gradient (`tailwind.config.ts:54-55`); `app/globals.css:31-38` adds CSS-only SVG noise. Confirmed.
- [x] **18. Mocks rebuilt with craft** —
  - Brief: source-tinted pills (Jira blue / Slack aubergine / Doc neutral) via `sourceTint` (`brief-mock.tsx:56-60`); overlapping owner-stack SVG with initials (`:172-240`); single brand mark in header.
  - Graph: cubic-Bézier `edgePath` (`graph-mock.tsx:35-46`); monogram avatars; "ack 14m ago / pending 19h / thread disagrees" timestamps; faint dotted grid; soft-shadow filter.
  - Drift: continuous Catmull-Rom smooth `buildSmoothPath` (`drift-mock.tsx:290-314`) with green→yellow→red gradient stroke and end marker. Stepper replaced.
- [x] **19. Integration pills have monograms** — `components/integrations.tsx:59-64` renders a 20×20 ink-filled circle with mono glyph next to each name. Brief satisfied; glyphs are letters not real brand monograms (same brand-guideline trade-off Audit #3 flagged).
- [x] **20. Footer brand presence** — `components/footer.tsx:9` renders `<Wordmark size="sm" />` — mark + wordmark in footer.

### New issues introduced (P0)
- **SOC-2 claim escalated, not retired.** `lib/content.ts:283` reads "SOC 2 Type II in active observation. SSO (Okta, OneLogin, Azure AD), SCIM, audit logs, customer-managed encryption keys on the Enterprise tier. EU data residency available." Audit #3 P0 already flagged "SOC 2 Type I observation in progress" as unbacked. The rewrite went from Type I → Type II and added SSO/SCIM/audit-logs/customer-managed-keys/EU-residency — all without backing. The privacy page (per Audit #3) still says "We do not claim certification under SOC 2…", so the two pages openly contradict. Largest correctness regression in this rewrite.
- **Entire trust stack is fictional and unflagged in UI.** Logos (`lib/content.ts:38-46`), testimonials (`:206-223`), founder name + LinkedIn (`:379-385`), pricing dollar amounts (`:296, 312`), pilot mechanics ("14-day pilot, no credit card", `:343`), enterprise SOWs ("Custom DPA · enterprise MSA", `:335`). The user said "act like the product is already made" — fine for an internal draft, but a visitor cannot distinguish placeholders from real attestations. Code comments at `:35-36, 203-204, 376-377` admit it; the rendered page does not. Public traffic = false-advertising / FTC-endorsement-guide risk. The README "swap-out plan" must run before launch.
- **Hero metrics ("4.2× faster sync prep · 63% fewer dropped dependencies · 0 tools to adopt") at `lib/content.ts:27-31` are presented as live numbers.** Comment at `:25-26` says "illustrative" — eyebrow above says "Built for TPMs…", giving no in-page disclosure. Same false-advertising vector as the testimonials.

### New issues introduced (P1)
- **Cal.com fallback URL `https://cal.com/foresio/demo`** (`components/demo.tsx:38`) — if `NEXT_PUBLIC_CAL_LINK` is unset/stubbed and a user clears the qualifier, they hit a 404 on cal.com. Audit #3 P0 was placeholder text leak; this is a placeholder URL leak. Either guard submit, or render an "email me" success when env is stubbed (mirror `addToResend` stub pattern).
- **Demo qualifier has no anti-persona enforcement.** `lib/waitlist-action.ts:99-111` accepts any role/size/pain and pings Slack. A solo founder selecting "Other" + "200–500" still unlocks the calendar. Audience section says they're out, but submission doesn't gate.
- **Demo `pain` text is logged raw to Slack** (`waitlist-action.ts:104`). With qualifier-gating this is the new free-text PII channel — Audit #1 P1 GDPR-profiling concern reapplies. Privacy page must list this, or strip/hash before logging.
- **`font-display` aliased to the same var as `font-sans`** (`tailwind.config.ts:36-38`). Designer's #1 P0 was "one typeface, no display voice"; the rewrite added a mono but `text-display` is an Inter-weight + letter-spacing trick, not a second face.
- **Founder portrait is a CSS gradient with initials, not a photo** (`components/founder-card.tsx:36-49`). The whole point of fix #1 was "photo." Initials are placeholder.
- **`comparison.rows[3]` (`lib/content.ts:191-193`) lists "n/a" for Atlas under "Read-only, honors source ACLs"** — that's an evasion; Atlas is read-only. Pick a defensible value.
- **Pricing CTA hrefs all point to `#demo`** (`lib/content.ts:307, 323, 339`) — Enterprise "Talk to sales" should arguably go to a different intake than the demo qualifier.
- **No analytics on qualifier submit** (`components/demo.tsx:33-43` fires no PostHog event). Highest-intent conversion is untracked.
- **A11y regression carried forward**: `components/demo.tsx:62` uses `noValidate` and only server-side validation. Single sentence error, no `aria-invalid` per field, no field-level focus on rejection — same pattern Audit #3 P1 flagged for the waitlist form.
- **Pricing CTAs duplicate labels** (`components/pricing.tsx:50-55`) — Team and Growth both say "Start a 14-day pilot" with different prices. Reads as design accident.
- **Bundle not re-measured.** Eight new sections + the qualifier form + Catmull-Rom math + bigger SVG mocks will almost certainly push past the 108KB First Load JS noted in Audit #3. Run `next build` before launch.

### Things to swap before public launch (placeholders / fictional data)
- `lib/content.ts:38-46` — six fictional customer logo names.
- `lib/content.ts:38` — intro "In production with program teams at" — wording must change if no real customers exist at launch.
- `lib/content.ts:206-223` — three fictional testimonials with role-only attribution.
- `lib/content.ts:27-31` — three illustrative hero metrics presented as outcomes.
- `lib/content.ts:283` — SOC 2 Type II / SSO / SCIM / audit-logs / customer-managed-keys / EU-residency claims. Must reconcile with `app/privacy/page.tsx`.
- `lib/content.ts:296, 312, 328` — pricing dollar amounts and "14-day pilot" mechanics.
- `lib/content.ts:343` — "14-day pilot. No credit card. Annual contracts available with 15% discount." Procurement-grade claim.
- `lib/content.ts:379-385` — "Devan Patel" founder name, bio, `https://www.linkedin.com/in/example`, "DP" initials placeholder portrait.
- `components/demo.tsx:38` — fallback `https://cal.com/foresio/demo` — register or guard.

### Overall grade (compared to pre-rewrite)
**B / B+** — cleared 11 of 12 cross-cutting P0s and all 8 visual P0s structurally; the three mocks are now genuinely competitive with Linear/Attio. Held back from A by (a) the SOC 2 Type II / SSO / SCIM overclaim regression vs Audit #3, (b) the entire trust layer being fictional and structurally indistinguishable from real in the UI, and (c) the founder photo and LinkedIn still being placeholders for the single highest-leverage fix on the page.
