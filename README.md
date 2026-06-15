# Husn

**The operational intelligence layer for project teams.**

This repo is the marketing site at [husn.io](https://husn.io). The product backend lives in a separate repo (Phase 3). See `PLAN.md` for the roadmap and `AUDIT_LOG.md` for build history.

---

## The problem

In any company over a few hundred people, work happens across Slack, Jira, Google, Microsoft, Confluence, and a dozen meeting tools. A launch date moves in Jira; the deck still says the old one. QA lives in a different channel and never sees the change. Security's review is stale because the architecture quietly shifted.

By the time the status meeting catches the conflict, two weeks of work are wasted. Companies pay technical program managers $180K each to be human diff tools across these systems. They spend 25% of their week chasing status, and still miss things.

## The product

Husn reads continuously across the tools your team already uses. It maps the work into a structured graph, watches for drift (date conflicts, ownership gaps, status mismatches, decisions made in DMs that never made it to the doc), and writes a per-persona briefing every morning, with every claim sourced back to the original artifact.

It is not a project tool. It is not a dashboard. It sits one layer above all of them, like a chief of staff who has already read the inbox.

This is a step beyond the original "pre-sync brief" framing: Husn is an always-on alignment layer, not a meeting-prep utility.

## Who it's for

TPMs, program managers, chiefs of staff, and engineering leaders at companies of 500–8,000 employees running cross-functional programs across at least four tools. B2B SaaS, fintech, and healthtech first.

## What you get

- A daily briefing of what changed, what's at risk, and who hasn't acknowledged.
- A defensible answer to "is project X on track?" in 60 seconds, with sources.
- Conflicts surfaced before the status meeting, not during it.
- One-click outreach to the person closest to the answer.

Status meetings should not be where you discover problems. Husn catches drift before it costs you a quarter.

---

## Stack (this repo, marketing site only)

- Next.js 15 (App Router, TypeScript strict, `output: "export"` → static)
- React 19
- Tailwind CSS v3
- Demo form: Formspree (`NEXT_PUBLIC_FORM_ENDPOINT`) with `mailto:hello@husn.io` fallback
- Plausible (cookieless) + PostHog (consent-gated) for analytics
- Deployed to GitHub Pages on every push to `main` via `.github/workflows/deploy.yml`
- Custom domain `husn.io` via `public/CNAME`

See `DEPLOY.md` for the full deploy and DNS setup.

## Getting started

```bash
npm install
cp .env.example .env.local      # fill in NEXT_PUBLIC_FORM_ENDPOINT
npm run dev                     # http://localhost:3000
```

### Useful scripts

- `npm run dev` — local dev server
- `npm run build` — production static export to `out/`
- `npm run start` — serve a production build
- `npm run typecheck` — TypeScript strict check
- `npm run lint` — ESLint

## Environment variables

| Var | What it does | Where to get it |
| --- | --- | --- |
| `NEXT_PUBLIC_FORM_ENDPOINT` | Demo form submission endpoint | formspree.io → create form |
| `NEXT_PUBLIC_PLAUSIBLE_DOMAIN` | Domain for Plausible script | plausible.io |
| `NEXT_PUBLIC_POSTHOG_KEY` | PostHog project API key | posthog.com → Project Settings |
| `NEXT_PUBLIC_POSTHOG_HOST` | PostHog ingest host | Defaults to `https://us.i.posthog.com` |

The page builds and runs without any of these set. The demo form falls back to a `mailto:hello@husn.io` link; analytics simply don't load. Stub-detection in `lib/waitlist-action.ts` and `components/analytics.tsx` treats any value containing `"stub"` as not-yet-configured.

For GitHub Pages deploys, set `NEXT_PUBLIC_FORM_ENDPOINT` as a repo secret under **Settings → Secrets and variables → Actions**.

## File layout

```
app/
  layout.tsx            # root layout, skip link, cookie banner, analytics
  page.tsx              # composes the home sections
  globals.css           # Tailwind base + design-system primitives
  privacy/page.tsx      # privacy policy (plain-English template)
  terms/page.tsx        # terms (incl. anti-performance-management clause)
components/
  header.tsx            # sticky nav with wordmark + CTA
  hero.tsx              # H1 + dual CTA + brief mockup
  integrations.tsx      # 16 tools on two rings flowing into the dark Husn core
  problem.tsx           # the problem framing + 3 drift bullets
  how-it-works.tsx      # 3-step explainer + Book-a-demo CTA
  audience.tsx          # who Husn is for (4 audience cards)
  faq.tsx               # collapsible question list
  demo.tsx              # qualifier form → Formspree
  footer.tsx            # legal links + email
  cookie-banner.tsx     # consent banner (gates PostHog only)
  analytics.tsx         # Plausible + PostHog (consent-aware)
  brand/
    mark.tsx            # single brand glyph
    wordmark.tsx        # mark + "Husn" lockup
lib/
  content.ts            # all copy in one place
  waitlist-action.ts    # demo form action: validate → Formspree (or mailto fallback)
```

## Decisions reference

The locked decisions for the landing page live in `QUESTIONS.md` (sections marked ✅). The phased roadmap is in `PLAN.md`. Independent audit findings are in `AUDIT_LOG.md`. Reviewer notes are in `CRITIQUE.md`.

## Pre-launch checklist

- [ ] Custom domain configured on `husn.io` per `DEPLOY.md`
- [ ] Formspree form created, `NEXT_PUBLIC_FORM_ENDPOINT` set in GitHub Actions secret
- [ ] Plausible domain added
- [ ] PostHog project created, consent banner verified
- [ ] Lawyer skim of `app/privacy/page.tsx` and `app/terms/page.tsx`
- [ ] Lighthouse on prod: ≥90 perf, ≥95 a11y, ≥95 SEO
- [ ] Manual screen-reader pass on the demo form
- [ ] Mobile pass on a real iPhone + Android

## Notes

- `app/layout.tsx` declares `metadataBase: new URL("https://husn.io")`. Update if launching on a different domain.
- The brief mockup in the hero uses fictional company names and changes. Don't replace with real customer names without written permission.
- The integrations figure renders 16 tool logos for marketing; what Husn actually reads at v1 is locked in `QUESTIONS.md` §6 Q21.
