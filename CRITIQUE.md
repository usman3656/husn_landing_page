# Foresio Landing Page — Independent Critique

Five reviewers ran in parallel against the actual code/copy. Three "learned" expert agents and two simulated customer personas. Below: cross-cutting headlines, per-critic verdicts, and a ranked fix list. Date: 2026-05-16.

---

## Headline grades

| Reviewer | Grade | One-line verdict |
|---|---|---|
| B2B SaaS landing-page expert | **C+** | Polished v0 brochure; hero doesn't name the category; CTAs muddled; sections overlap. |
| Senior product designer | **C** (template tier) | "Competent default startup template." Bones correct, craft signal zero. Sits two tiers below Linear/Mintlify. |
| Conversion + positioning specialist | **C** | Will hit waitlist target, miss founder-call target (3:1 ratio). Cal.com is wide-open. |
| Priya Shah (TPM, 1,400-person SaaS) | **B-** | "Sharp problem framing, unusually honest privacy, but no proof, no people, the cleverest claim is least defended." |
| Marcus Bell (PMO Director, 2,100-person fintech) | **B** | "Q4 conversation at the earliest — not a line item in this year's tooling budget." |

**Net:** the bones are right, the craft and trust signals are missing.

---

## Cross-cutting P0 issues (flagged by ≥3 reviewers)

### 1. No founder face, name, or pedigree → fatal trust deficit
*Flagged by all five.* Page CTA is "Talk to the founders" — but no founder is on the page. Priya: *"which founders? Ex-Atlassian? Ex-Asana? Ex-nothing?"* Marcus: *"Who are the founders, what did they build before, who's funded you?"* Fix: replace `lib/content.ts:175` `"— The Foresio team"` with named human(s) + headshot + LinkedIn + one credibility line. This is the single biggest unlock — carries the no-logos problem until logos exist.

### 2. Hero doesn't name the category
*Expert + Priya.* Current H1 "Walk into every sync already aligned" (`lib/content.ts:19`) is a feeling, not a product. A scanning TPM gets vibes, not "what is this." Fix: H1 should name the category and the wedge. Suggested: *"The alignment layer for program teams."* / Sub: *"Foresio watches Jira, Slack, and your docs for the changes your sync meetings keep discovering too late — and tells the right people 30 minutes before the meeting starts."*

### 3. Two hero CTAs read as visually co-equal
*Expert + Conversion specialist.* Filled black pill vs outlined pill of identical size routes high-intent readers to the lower-intent waitlist (`components/hero.tsx:14-27`). Fix: demote "Join the waitlist" to a text link under the primary, add a one-line qualifier under the primary ("30 min. For TPMs/EPMs at 300–3,000-person tech cos.").

### 4. The acknowledgement graph claim is undefended
*Priya + Marcus.* The most differentiated feature is also the least credible because nobody explains *how* detection works. Priya: *"If the answer is 'an LLM reads your Slack and guesses,' that's a hallucination factory pointed at my exec readouts."* Fix: add a "How detection actually works" line under each feature — for the graph specifically, name the signal (mentioned-user, channel-membership, owner-field-in-Jira, doc co-authorship) so it sounds engineered, not guessed.

### 5. No proof anywhere — no design partners, no logos, no advisors, no real artifact
*All five.* Page has zero social proof, zero advisor names, no anonymized customer quote, no real Slack DM screenshot, no precision/recall numbers on drift alerts. Fix (Phase 0 acceptable substitutes, ranked): (a) named founder with photo + LinkedIn, (b) one specific anonymized vignette ("TPM at 800-person fintech caught a dropped data-residency dependency 6 days before launch"), (c) advisor LinkedIns if any exist, (d) a Loom of the brief generating.

### 6. "SOC 2 on the roadmap" is a procurement hard-stop, and the hero says it out loud
*Marcus + Priya + Expert.* Hero trust line (`lib/content.ts:24`) leads with the *absence* of SOC 2. Marcus: *"That is a hard stop for production tenant data at our shop."* Fix: drop the hedge entirely from the hero, replace with what's actually earned ("Built on Anthropic Claude with zero data retention · 3 design-partner pilots in discovery"). Leave the SOC 2 roadmap language only on the Security section.

### 7. Cal.com link has zero qualification gate → founders' time at risk
*Conversion specialist + Marcus.* `components/talk.tsx:20-37` is a raw Cal.com link. Solo founders, agencies, vendors, recruiters can burn 30-min founder calls. Fix: 3-question pre-screen before revealing the calendar (role / company size / current pain). Posts to Slack webhook on submit, then unlocks Cal embed.

### 8. No anti-persona filter — wrong leads slip through, right ones get no signal
*Expert + Conversion specialist.* QUESTIONS.md §11.53 locked the anti-persona (solo PMs, agencies, non-tech, sub-200-person, performance-management buyers). Page never tells them they're out. Worse, the waitlist `< 200` company-size option (`lib/content.ts:199`) *invites* the wrong segment. Fix: add a "Who this is for / not for" 2-column strip before the Talk CTA; remove `< 200` from the size dropdown.

### 9. Cal.com placeholder text leaks to production
*Expert.* `components/talk.tsx` renders `talk.bookingPlaceholder` ("Cal.com link will be wired here…", `lib/content.ts:184`) into the live UI when the env var is unset. A visitor sees placeholder copy in the booking module and bounces. Fix: hide the section when the env var is stubbed, OR hard-code a real fallback handle.

### 10. No pricing posture, even directional
*Priya + Marcus + Conversion.* Page hides pricing entirely. QUESTIONS.md §9.44 said hide it — but the page should *acknowledge* that, not be silent. Fix: one line near the Talk section: *"Pricing set with design partners. Founders' call is the fastest way to learn it."*

### 11. FAQ ordering is founder-soapbox, not reader-objection
*Expert + Conversion specialist.* Q6 "When can we actually use it?" — the buying question — is last (`lib/content.ts:165`). Q4 "Performance management?" is a founder-defensive answer no TPM is asking on a landing page. Fix: reorder Q6 → Q1, kill Q4 (already covered in Security smallprint), merge Q5 ("where does data go?") into Security.

### 12. Founder-note prose is generic, sits below the form
*Expert + Conversion.* `lib/content.ts:174` uses the most-overused founder-note phrase in B2B SaaS ("the tool we wished had existed"). Also: `app/page.tsx:28` puts the note *after* the waitlist, so we ask for the meeting before we earn the trust. Fix: one specific anecdote (a real slipped launch, a real 2am readout), and move the note above the Talk CTA.

---

## Visual / design P0s (designer)

13. **One typeface, no display voice.** `globals.css:6` declares Inter only; `next/font` isn't loaded at all in `app/layout.tsx`. Every heading uses the same `font-semibold tracking-tight`. Fix: load Inter + a paired display face (Inter Display, GT America, Söhne) via `next/font`, plus a real mono (JetBrains Mono / Berkeley Mono). Use display face on H1/H2 only.

14. **Brand mark is inconsistent.** Header uses a wave-in-circle (`components/header.tsx:30-43`), brief-mock uses a different mark (`components/mocks/brief-mock.tsx:64-79`). *"Two inconsistent marks on the same page is the loudest 'we did not commission a designer' tell."* Fix: single-source one mark into `components/brand/mark.tsx`, use everywhere.

15. **Brand accent = signal green.** `#2D6A4F` accent is dangerously close to `#16A34A` signal-green. Same page where green = "acknowledged" in mocks, green also = "click this button" and "Available at launch" badge. Fix: move accent to a non-green hue (deep indigo `#1E3A8A`, terracotta `#7A4A2B`, or a desaturated teal far from signal-green). Reserve signal-green for status meaning only.

16. **Every section is `py-20`.** Spacing is a metronome — no rhythm between hero, feature deep-dives, and tertiary FAQ. Fix: hero `pt-28 pb-24`, problem `py-16`, features `py-28 md:py-36`, FAQ `py-16`. Let the page breathe and compress.

17. **Surface system is one-deep, no gradients or elevation hierarchy.** Three tones + one accent isn't enough to build depth. Fix: add a `paper-deep` (`#EAE7E0`) tier, layered radial gradient + 4–6% SVG noise behind the hero, real inset-light / drop-shadow on stacked cards.

18. **Mocks are boxed-in.** `components/features.tsx:39` wraps each mock in `rounded-3xl border bg-paper p-4` — looks like a Notion screenshot. Fix: let mocks bleed off the container with a soft gradient mask (Linear-style).

19. **Per-mock craft gaps:**
    - **Graph mock** is the most wireframe-y. Flat straight edges, no curvature, no avatar monograms, no timestamps. Should use cubic-Bézier edges, avatar initials inside team circles, and a "last seen 19h" stamp. (`components/mocks/graph-mock.tsx:65-77, 82-127`)
    - **Drift mock** uses three discrete stops on a stepper — throws away the *drift* metaphor. Should be a sparkline that bends green → red over time, or a continuous thermometer with a moving marker. (`components/mocks/drift-mock.tsx:150-220`)
    - **Brief mock** is best of three but every source pill uses the same tint (JIRA/Slack/Doc are interchangeable). Should tint each source with a faint brand wash (Slack aubergine, Jira blue, Doc neutral). (`components/mocks/brief-mock.tsx:44-46`)

20. **Integration pills are bare text** in a paper-dim shape (`components/integrations.tsx:43-48`). Add a 14×14 monogram glyph per integration. ~90 min, transforms the section.

---

## Per-reviewer top calls

### Expert: B2B SaaS landing-page craft (C+)
1. Hero never names the category — rewrite the H1.
2. Trust line hedges into nothing — earn or drop.
3. CTA pair confuses intent — demote the secondary.
4. Problem paragraph is the densest, weakest copy on the page.
5. The "Differentiator" kicker is a tell — show, don't label.

**Missing sections:** Anti-comparison strip vs Atlas/Rovo/Copilot, a real artifact (Slack DM screenshot), anti-persona, pricing posture line.

### Senior product designer (C, template tier)
1. One typeface; no display voice.
2. Two inconsistent brand marks.
3. Every section `py-20` — no spacing rhythm.
4. Surface system flat, no elevation/gradients.
5. Brand accent collides with signal green.

**Biggest investments:** custom illustration system for the three mocks; a real brand mark + lockup system; founder-note as a 2-column tile with portrait + signature.
**Comparators:** Linear, Mintlify, Vercel, Attio.

### Conversion + positioning (C)
1. Hero CTAs visually co-equal — demote waitlist.
2. Cal.com has zero qualification gate — add a 3-question pre-screen.
3. Anti-persona never named on the page.
4. Waitlist form: 5 required + checkbox grid with no value exchange in success state.
5. Founder note signed by phantom "team."

**A/B tests worth running:** CTA hierarchy variants; qualifier-before-Cal vs raw Cal link; named founder with face vs anonymous.

### Priya Shah — TPM (B-)
- Made her pause: the brief-mock Tessera row felt real.
- Made her skeptical: SOC 2 status, acknowledgement-graph detection method, no founder names, manufactured scarcity, no false-positive rate.
- Would book a curiosity call, not commit her team to a pilot.
- Wants: founder bios, 60-second video of the brief on real-looking data, FP-rate claim, security one-pager.
- Wrong comp set on the page: Atlas/Rovo/Copilot are listed; *she* compares against Jellyfish.

### Marcus Bell — PMO Director (B)
- Honest Phase 0 framing is the only reason he didn't close the tab.
- Procurement red flags: no SOC 2, no DPA, no sub-processor list for the product, no named LLM provider, no jurisdiction in Terms, $100 liability cap, "SOC 2 on the roadmap" in the hero.
- Will assign his Director of Program Ops to a 30-min discovery call only.
- Won't escalate to himself without: SOC 2 Type II, DPA + sub-processor list + ZDR evidence, SSO + audit logs, 2 reference customers (one fintech), scoped pilot with his success criteria.

---

## Prioritized fix list (do in this order)

**This week (highest leverage per hour):**

1. **Add a named founder to the founder note** — photo + LinkedIn + 1-line credibility. [`lib/content.ts:171-176`, `components/founder-note.tsx`]
2. **Rewrite the hero** — name the category in the H1, tighten the sub, demote the secondary CTA to a text link, add the qualifier under the primary. [`lib/content.ts:18-24`, `components/hero.tsx:14-27`]
3. **Fix the Cal.com placeholder leak** — hide the section when `NEXT_PUBLIC_CAL_LINK` is stubbed or contains "stub". [`components/talk.tsx:20-37`]
4. **Add a 3-question pre-screen before Cal.com.** [`components/talk.tsx`, new server action]
5. **Drop the SOC-2 hedge from the hero trust line.** [`lib/content.ts:24`]
6. **Add an anti-persona / "Who this is for / not for" strip** before the Talk section. [new section]
7. **Reorder FAQ — Q6 first, kill Q4, merge Q5 into Security.** [`lib/content.ts:143-168`]
8. **Move the founder note above the Talk CTA.** [`app/page.tsx:28`]
9. **Add one line acknowledging the no-pricing posture** near the Talk section. [content + `components/talk.tsx`]
10. **Remove `< 200` from the company-size dropdown.** [`lib/content.ts:199`]

**Next 1–2 weeks (depth + design craft):**

11. **Add a display typeface via `next/font`** + real mono. [`app/layout.tsx`, `app/globals.css`]
12. **Single brand mark, used everywhere** — `components/brand/mark.tsx`. Fix the wave-circle and the brief-mock mark mismatch.
13. **Move the brand accent off green** to deep indigo / terracotta / desaturated teal far from signal-green.
14. **Break spacing monotony** — hero/features get more, FAQ less.
15. **Per-mock fixes:**
    - Brief: tint pills per source (Jira blue, Slack aubergine, Doc neutral); add stacked-initials ack avatars; single brand mark.
    - Graph: curved cubic-Bézier edges; monogram avatars inside team circles; "last seen 19h" timestamps; remove duplicate callout.
    - Drift: replace 3-stop stepper with a sparkline that bends green → red, or a continuous thermometer marker.
16. **Add an "Anatomy of a slipped launch" mini-narrative** between Problem and How — 4 vignettes, 20 words each, with file/source glyphs.
17. **Add a comparison strip vs Atlas / Rovo / Copilot / Jellyfish** out of the FAQ and into its own section.
18. **Drop a single mono-set metric row** under the hero CTAs (e.g. *"4.2× faster syncs · 6/6 owners acknowledged · 0 stale assumptions"* — fictional but specific from the design-partner shadow runs).

**Bigger investments (4–8 hours each, when bandwidth allows):**

19. Custom illustration system for the three mocks — shared stroke widths, halo treatment, depth pair, single inline mono font.
20. Real logo + wordmark + lockup system.
21. A Loom-equivalent video of the brief generating on simulated-but-plausible data — embedded in the features section.
22. Scroll-driven choreography in the hero only (one sticky moment, restrained).

---

## What every reviewer agreed on

- The **problem framing is the strongest thing on the page**. Don't dilute it.
- The **honest privacy/security posture** is unusually good for Phase 0 — keep it, just don't lead the hero with it.
- The **brief mock** is the only piece of real craft currently in the build.
- **Phase 0 acceptable shortcuts**: no logos, no SOC 2. **Not acceptable**: no founder name, no qualification gate, no proof, no category name.

---

## Methodology

Reviewers: 1 senior B2B SaaS landing-page expert, 1 senior product designer, 1 conversion + positioning specialist, 1 simulated TPM persona (Priya Shah, 1,400-person SaaS, 8y TPM, ex-Meta), 1 simulated PMO Director (Marcus Bell, 2,100-person fintech, 14y program leadership). Each read the live source — `lib/content.ts`, page components under `app/` and `components/`, the three SVG mocks, and the locked decisions in `QUESTIONS.md`. Personas reacted in first-person; experts cited file:line.

All five reports landed independently and overlapped on the items marked P0 above. Where exactly one reviewer flagged something, it's in the per-reviewer section, not the cross-cutting one.
