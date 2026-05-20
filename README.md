# Foresio — Landing Page

Phase 0 landing page for **Foresio** — an operational alignment layer for program teams.

This repo contains the marketing site only. No product code lives here yet — see `PLAN.md` for the phased build plan.

## Stack

- Next.js 15 (App Router, TypeScript strict)
- Tailwind CSS v3
- React 19
- Resend Audiences for waitlist (stubbed in dev)
- Cal.com for founder bookings (stub link)
- Plausible (cookieless) + PostHog (consent-gated) for analytics
- Vercel for hosting (recommended)

> Note: `pnpm` was the recommended package manager but required `sudo` to install in this environment; we shipped with `npm`. To migrate later, delete `node_modules` + `package-lock.json` and run `pnpm install`.

## Getting started

```bash
npm install
cp .env.example .env.local      # fill in real values when ready
npm run dev
```

Open <http://localhost:3000>.

### Useful scripts

- `npm run dev` — local dev server
- `npm run build` — production build
- `npm run start` — serve the production build
- `npm run typecheck` — TypeScript strict check
- `npm run lint` — ESLint

## Environment variables

All env vars in `.env.example` are **stubbed**. The page builds and runs without them; the form will log to the console and the Cal.com link points at a placeholder slug.

Before public launch, set real values for:

| Var | What it does | Where to get it |
| --- | --- | --- |
| `RESEND_API_KEY` | Authenticates with Resend | resend.com → API Keys |
| `RESEND_AUDIENCE_ID` | Target Resend Audience for waitlist | resend.com → Audiences |
| `RESEND_FROM_EMAIL` | Sender for welcome email | Verify a domain in Resend |
| `SLACK_WEBHOOK_URL` | Notifies founder channel on signup | api.slack.com/apps → Incoming Webhooks |
| `NEXT_PUBLIC_CAL_LINK` | Your Cal.com booking slug | cal.com (e.g. `foresio/founders`) |
| `NEXT_PUBLIC_PLAUSIBLE_DOMAIN` | Domain for Plausible script | plausible.io |
| `NEXT_PUBLIC_POSTHOG_KEY` | PostHog project API key | posthog.com → Project Settings |
| `NEXT_PUBLIC_POSTHOG_HOST` | PostHog ingest host | Defaults to `https://us.i.posthog.com` |

The stub-detection logic (in `lib/waitlist-action.ts` and `components/analytics.tsx`) treats any value containing `"stub"` as not-yet-configured.

## File layout

```
app/
  layout.tsx          # root layout + skip link + cookie banner + analytics
  page.tsx            # composes all home page sections
  globals.css         # Tailwind base + small custom rules
  privacy/page.tsx    # privacy policy (template, plain-English)
  terms/page.tsx      # terms (incl. anti-performance-management clause)
components/
  header.tsx          # sticky nav with logo + CTA
  hero.tsx            # headline + dual CTA
  problem.tsx         # the problem + 3 bullet stats
  how-it-works.tsx    # 3-step explainer
  features.tsx        # composes the three feature cards/mocks
  mocks/
    brief-mock.tsx    # pre-sync brief card
    graph-mock.tsx    # acknowledgement graph
    drift-mock.tsx    # G/Y/R drift timeline
  integrations.tsx    # tools strip (v1 + v1.1)
  security.tsx        # dark security section
  faq.tsx             # six common questions
  talk.tsx            # founders CTA + Cal.com link
  waitlist.tsx        # wrapper for waitlist form
  waitlist-form.tsx   # client-side form with validation
  founder-note.tsx    # closing pull quote
  footer.tsx          # legal links + copyright
  cookie-banner.tsx   # consent banner (gates PostHog)
  analytics.tsx       # Plausible + PostHog (consent-aware)
lib/
  content.ts          # all copy in one place
  free-email-providers.ts
  waitlist-action.ts  # server action: validate → Resend → Slack
```

## Decisions reference

The locked decisions for this landing page live in `QUESTIONS.md` (sections marked ✅). The phased roadmap is in `PLAN.md`. Independent audit findings against the plan and the build are in `AUDIT_LOG.md`.

## Placeholder content — must be swapped before public launch

The site is now written as a shipping product, but several elements are **fictional placeholders** and must be replaced with real values before going public:

| Placeholder | File | Swap to |
| --- | --- | --- |
| Founder name + bio (Devan Patel) | `lib/content.ts` → `founder` | Real founder name, role, bio, LinkedIn URL, initials |
| Founder portrait (gradient + initials monogram) | `components/founder-card.tsx` → `Portrait` | Real headshot — swap monogram for `<Image>` with `next/image` |
| Customer logos (Northwind Logistics, Tessera Data, Cobalt Labs, Halcyon Health, Stellaris Fintech, Lumen Robotics) | `lib/content.ts` → `logos` | Real customer wordmarks (with their permission) OR remove the section until you have them |
| Three testimonial quotes | `lib/content.ts` → `testimonials` | Real customer quotes with named/anonymized attribution they've signed off on |
| Hero metric strip values (4.2× / 63% / 0) | `lib/content.ts` → `hero.metrics` | Real aggregate numbers from production telemetry |
| Comparison table values (✓ / ✗ / "Limited") | `lib/content.ts` → `comparison.rows` | Verify against each competitor's current docs/marketing — they change |
| SOC 2 Type II "in active observation" claim | `lib/content.ts` → `security.points[3]` | Only keep if you have actually onboarded with Vanta/Drata and an auditor — otherwise downgrade or remove |
| Pricing ($890, $1,490) | `lib/content.ts` → `pricing.tiers` | Real prices once design partners convert |

**Do not ship the site publicly without swapping these.** Fabricated customer quotes or unbacked SOC 2 claims are FTC Section 5 territory (Rite Aid, Everalbum precedents).

## Pre-launch checklist

- [ ] Register `foresio.ai` (foresio.com is taken — see `QUESTIONS.md` §9 Q38)
- [ ] USPTO + EU trademark search on "Foresio"
- [ ] Provision Resend, Cal.com, Plausible, PostHog accounts
- [ ] Fill in real values in `.env.local` (and Vercel project env)
- [ ] Sign up for Vercel, connect this repo, deploy
- [ ] Custom domain + HTTPS configured on Vercel
- [ ] Resend domain verified (SPF/DKIM records on `foresio.ai` DNS)
- [ ] Slack incoming webhook into a `#waitlist` channel
- [ ] Cal.com event type created (30-min founder call, three slots per week)
- [ ] Lawyer skim of `privacy/page.tsx` and `terms/page.tsx` (templates, not legal advice)
- [ ] Lighthouse run on production URL: target ≥90 perf, ≥95 a11y, ≥95 SEO, ≥95 best practices
- [ ] Manual screen-reader pass on the form
- [ ] Mobile device check (real iPhone + Android)
- [ ] Distribution: outbound DMs, Rands / TPM Huddle Slack posts, Lenny / Pragmatic Engineer outreach

## Notes

- The page uses fictional company names in mocks (Northwind Logistics, Acme Health, Tessera Data, Cobalt Labs). Do not replace with real customer names without permission.
- `app/layout.tsx` declares `metadataBase: new URL("https://foresio.ai")`. Update if launching on a different domain.
