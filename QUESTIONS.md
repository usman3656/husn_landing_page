# SyncGuard — Open Questions

Researched, opinionated questions you need to answer before we build. Each question carries a brief research-grounded note so you can decide quickly. Answer inline (✅ or your call) before we move past Phase 0.

---

## 1. Product Definition & Use Cases

1. **What is the single "wedge" artifact for v1?** ✅ **User pick: all three, equal weight** — pre-sync brief + acknowledgement graph + drift detector with G/Y/R transitions. Risk noted: equal-weight pitch can dilute message. We'll mitigate by ordering them on the page (brief = hero, graph = differentiator, drift = familiar entry) and A/B testing the order via PostHog.
2. **Which 3 drift signals do we detect first?** Options: stale Jira assumption contradicted in Slack; owner missing/ambiguous; dependency declared in doc not reflected in Jira; risk status change with no propagation; meeting decision not linked to ticket. Pick 3. Trying to do all = noise.
3. **What is *explicitly* out of scope for v1?** Recommend: no OKR/strategy layer, no engineering productivity metrics, no resource planning, no individual performance signals (legal landmine — see §7).
4. **Real-time or near-real-time?** Tech research: 30–120s end-to-end is right. Faster wastes money. Confirm.
5. **Read-only or write-back to Jira/Slack?** Read-only is safer and faster to ship. Write-back (auto-tagging owners, posting comments) is the moat but doubles the risk surface. v1 read-only?

## 2. Target Market & ICP

6. **Which ICP segment for v1 — SMB ($10–50k ACV), mid-market ($50–250k ACV), or enterprise ($250k+)?** Mid-market is the sweet spot: SOC 2 Type II is achievable, sales cycles are 60–120 days vs 9+ months enterprise, deals are big enough to support sales-led GTM. Recommend mid-market.
7. **Vertical focus or horizontal?** Horizontal "any tech co with TPMs" is broader but harder to message. Vertical wedges: high-growth B2B SaaS (200–2,000 eng), fintech, healthtech (HIPAA blocker — skip). Recommend horizontal tech-cos for now.
8. **Geographic launch — US-only, US+EU, or global?** ✅ **User pick: global, no geographic targeting.** Implication for Phase 0 landing page: GDPR cookie banner required, privacy policy must list sub-processors, free-text "biggest headache" field becomes profiling-adjacent under GDPR Art. 22 → recommend dropping it from waitlist form OR adding consent checkbox. Confirm in §9 update.
9. **Company size minimum?** Below 200 people there's usually no TPM. Above 5,000, you compete with Jira Align directly. Sweet spot: **300–3,000 employees**.

## 3. Personas — who do we talk to?

10. **Primary buyer vs primary user — confirm split.** Research: user = TPM/EPM, champion = Senior TPM/PMO manager, economic buyer = Director/VP PMO or Chief of Staff. Landing page CTA should target the **champion** (TPM), not the buyer.
11. **Are non-technical Program Managers in scope, or just TPMs/EPMs?** Non-technical PMs live in Asana/Monday more than Jira; they're a different ICP. Recommend: TPM/EPM-only for v1 messaging.
12. **What is the persona's #1 pain we lead with?** Options from research: (a) 40–60% of week in status meetings, (b) surprise dependencies that slip launches, (c) exec readout prep. Recommend leading with **(c) "walk into your weekly review already aligned"** — emotionally specific.

## 4. Business Model & Pricing

13. **Pricing structure: per-seat, per-program, or hybrid?** Per-seat punishes the "everyone-sees-the-brief" expansion that drives stickiness. Recommend **hybrid: per-program ($800–1,500/mo includes core TPM seats + connected projects) + cheap observer seats ($10–15/mo)**. Enterprise floor $60–100k ARR.
14. **Free tier — yes/no, and what shape?** PLG-assisted entry recommended: 1 program, 1 Jira project, 1 Slack workspace, no observer seats, 14-day brief history. Confirm.
15. **Annual vs monthly billing for v1?** Annual prepaid recommended even at SMB — cash flow + reduced churn signal. Monthly only as fallback.
16. **Do we charge for integrations (Teams, Notion, transcripts) or include them?** Recommend included in tier; differentiating on integrations attracts the wrong buyers.

## 5. Go-To-Market

17. **PLG, sales-led, or hybrid for first 12 months?** Research strongly suggests **hybrid, sales-led primary**: value only manifests at 3+ teams connected. Confirm.
18. **What is the validated demand signal that moves us from landing page → MVP build?** Recommend: **30 qualified waitlist signups (TPM/EPM/PMO Lead at 300–3,000-person tech co) + 5 founder-interview commitments** within 4 weeks of landing-page launch. If we hit it, build. If not, pivot.
19. **Founding design partner program?** Recommend offer: 6-month free pilot, weekly call, co-design 1 feature, in exchange for a logo + case study + testimonial + 12-month paid contract at 50% if successful. Target 3 design partners.
20. **Content/channel bets for waitlist growth?** Top candidates from research: Rands Leadership Slack, TPM Huddle Slack, r/projectmanagement, Lenny's Newsletter, Pragmatic Engineer sponsorship, LinkedIn outbound to TPMs at target accounts. Which 2 do we commit to first?

## 6. Technical (Decisions That Affect Landing Page Claims)

21. **What integrations do we promise on the landing page?** Tech research recommends MVP = **Jira + Slack + Google Docs only**; defer Teams, Notion, transcripts to v1.1. Confirm we don't over-promise on landing page.
22. **"Real-time" or "near-real-time" in copy?** Legally and technically, "near-real-time" is safer. Recommend the latter.
23. **LLM transparency in copy — disclose which provider?** Enterprise buyers ask. Recommend: "Built on Anthropic Claude with zero data retention" — concrete, builds trust, differentiates from "AI" hand-waves.
24. **On-prem/VPC deployment story for landing page — promised, "coming soon", or silent?** Recommend **silent** until enterprise pipeline justifies $500k+ engineering investment.
25. **Self-serve signup or "request access" on landing page?** Recommend **request access / waitlist** until we have ICP-qualified leads in pipeline. Self-serve attracts wrong-fit prosumers.

## 7. Legal, Privacy & Compliance (Existential — Decide Early)

26. **EU AI Act stance — do we contractually prohibit use for individual performance management?** Research says this is existential: usage for HR decisions flips us to high-risk Annex III. Recommend **explicit contractual prohibition in MSA + acceptable-use policy**. Confirm.
27. **Data residency promise on landing page?** US-only at launch, EU residency promised "for enterprise" with no public date. Confirm.
28. **Retention default — 90 days derived, 30 days cached raw, configurable?** Research recommends. Confirm.
29. **Do we cache meeting transcripts at rest?** Recommend **no — process in memory, store only embeddings + summaries + pointers**. Massively reduces wiretap and breach blast radius.
30. **Meeting-consent stance for transcript integrations?** Otter/Fireflies/Granola customers in CA/IL/WA/FL/PA need two-party consent. Recommend: customer is responsible for consent, we provide consent banner templates, we never auto-join meetings.
31. **ACL honoring — query-time or index-time?** Glean's incidents say query-time. Confirm we'll honor source-system ACLs at every retrieval, never elevate access.
32. **LLM provider — Anthropic, OpenAI, or both?** Research: both have ZDR available with enterprise contracts. Recommend **Anthropic primary** (Bedrock routing for enterprise data-boundary story) + OpenAI fallback. Confirm.
33. **SOC 2 Type I commitment date on website?** Recommend **"SOC 2 Type II in progress"** language only once Type I audit has actually started (Vanta/Drata onboarded). Don't make claims we can't back.

## 8. Risk & Failure Modes

34. **Garbage-in problem: how do we handle customers with stale/messy Jira?** Drift detection on bad data = noise = churn. Recommend onboarding gate: **Jira hygiene check + 2-week "shadow mode"** before notifications go live.
35. **Champion fragility: TPMs change jobs every 18–24 months.** What does the renewal motion look like when the champion leaves? Recommend: multi-threading (3+ users per account) is a hard requirement for renewal.
36. **Existential competitor risk — Atlassian Rovo + Microsoft Copilot are 12–18 months from this.** What's the defensible moat? Recommend: the **acknowledgement/conflict graph** (cross-source, owner-attributed). That's the only thing the incumbents can't trivially replicate from their existing positions. Confirm we orient the entire product around it.
37. **Tool fatigue — buyers have been burned by Jira Align, Airtable, ClickUp, etc.** Recommend: positioning as "layer that makes your existing tools work," NOT "new system to adopt." Lead with: "stay in Jira and Slack — we just listen."

## 9. Landing Page Specifics (Phase 0 — Right Now)

38. **Domain/name — is "SyncGuard" final?** ✅ **User pick: Foresio on foresio.ai** (foresio.com taken by adjacent French tech-strategy/security firm — TM-search before public launch required). USPTO + EU TM search, social-handle check (X, LinkedIn, GitHub) before public launch.
39. **Landing page primary CTA — "Join waitlist", "Request access", "Book a demo", or "Talk to founders"?** ✅ **User pick: "Talk to the founders" via Cal.com primary + waitlist fallback.** To avoid measurement confusion (audit P1), Phase 0 success metric becomes **founder calls booked + qualified waitlist signups, weighted 3:1**.
40. **Lead-capture fields on waitlist form?** ✅ Locked: name, work email (block free providers), role, company name, company size, current tools (Jira/Linear/Slack/Teams checkboxes). **Free-text "headache" field dropped** per GDPR Art. 22 concern; richer qual data comes from founder calls instead.
41. **Logos/social proof — do we have any to display, or do we wait?** Recommend: **no fake logos, no "as featured in" if untrue**. Replace with founder quote + 2–3 strong customer-discovery quotes (anonymized OK if needed).
42. **Page sections — minimum viable structure?** Recommend: Hero + problem + how-it-works (3 steps) + sample pre-sync brief mock + integration logos + security/privacy strip + FAQ + waitlist form + founder note. No pricing on v1 page.
43. **Demo media — animated mock, static screenshot, video, or none?** ✅ **User pick: three static annotated mocks** — one each for pre-sync brief, acknowledgement graph, drift detector (G/Y/R). No video. Lean per audit.
44. **Pricing on the page — show, hide, or "starting at"?** Recommend **hide entirely** until we have 3 paying pilots. Lets us learn the right number.
45. **Tech stack for the landing page itself?** ✅ Locked: **Next.js 15 + Tailwind + shadcn/ui on Vercel**, form → **Resend Audiences only** (no DB), Slack webhook ping on signup, Cal.com booking, Plausible + PostHog analytics, Iubenda/Termly legal templates.
46. **Analytics & tracking on the page?** Recommend PostHog (events + session replay opt-in) + Plausible (privacy-respecting page views). Skip GA4. Cookie banner required for EU traffic.

---

## 10. Deferred — Phase 3 Stack Decisions (do not answer until Phase 2 exit)

These were pre-locked in PLAN.md without basis; audit P0 moved them here. Confirm before Phase 3 starts, not now.

47. **Workers**: Prefect 2 vs Celery+Redis.
48. **Auth**: WorkOS vs Clerk (decision driven by enterprise pipeline state at time of choice).
49. **Hosting (API + workers)**: Render vs Fly.io vs AWS ECS.
50. **Secrets**: Doppler vs 1Password Connect.
51. **Embeddings**: Voyage-3-large vs text-embedding-3-large (run a benchmark on real Jira+Slack data before deciding).
52. **Anthropic ZDR contract**: signed before any production tenant data hits the API? Confirm acquired before Phase 4 pilots.

## 11. Coverage Gaps Surfaced by Audit (answer at appropriate phase)

53. **Anti-persona** — who do we explicitly NOT serve? Recommend: solo founders, agency PMs, non-tech industries, sub-200-person companies, individual performance management buyers. Lock this so we don't chase poor-fit logos.
54. **LLM unit economics at recommended price** — at $25–40/seat/mo or $800–1.5k/program/mo, what's the gross margin headroom if customer ingests 200k events/day? Cost-cap per tenant required? Decide before pricing goes public.
55. **Sub-processor disclosure for the waitlist itself** — list Vercel, Resend, Cal.com, Plausible, PostHog on the Phase 0 privacy page. EU visitors trigger this immediately given global launch.
56. **Profiling under GDPR Art. 22** — does the free-text "biggest headache" field on waitlist constitute profiling? Recommend: drop the field, OR add explicit consent checkbox + state we won't use it for automated decisions. Decide before form ships.
57. **Sanctioned-country blocking** — Cal.com / Resend / Vercel terms require us to not knowingly serve OFAC-sanctioned countries. Add country dropdown OR IP-block list? Recommend: IP block at Vercel edge for OFAC list.
58. **Mock data licensing** — the pre-sync brief mock will show fake company/project names. Don't accidentally use real customer names from research. Recommend: use clearly fictional names (e.g., "Northwind Logistics", "Acme Health").
59. **Accessibility commitment** — public WCAG AA target on the page? Recommend yes, internal-only goal for Phase 0; revisit for SOC 2 Type II readiness.
60. **Domain handling if foresio.com is unavailable** — fallback ranking: foresio.ai > foresio.io > pick alternate name. See §9 Q38.

## How to use this file

Mark each question with ✅ + your call, or "skip — accept recommendation." Anything left blank = blocker. We won't write a line of code until §9 is fully answered and §1–§4 have at least placeholder answers.
