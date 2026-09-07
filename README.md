# husn.io

Single-page marketing site for Husn, a technical recruitment and offshore hiring partner. Next.js 15 (App Router), Tailwind, static export, deployed to GitHub Pages on every push to `main` (see `DEPLOY.md`).

## Layout

```
website/            the whole site
  content.ts        every line of copy, nav, FAQ, footer
  page.tsx          section order
  components/       nav, hero, services, how, engagement, faq, book, footer, ui
  assets/           royalty-free landscape art (picsum.photos / Unsplash licence)
app/
  page.tsx          renders website/page.tsx at /
  layout.tsx        fonts (Libre Caslon Text, Instrument Sans), metadata, cookie banner, analytics
  blog/             markdown blog, kept live but not linked from the nav
  privacy/ terms/   legal pages linked from the footer
  sitemap.ts feed.xml/ robots.ts
components/         booking (Calendly embed), cookie banner, analytics
content/blog/       one markdown file per post (see lib/blog.ts)
research/           design and content captures used as reference
```

## Editing

- Copy: edit `website/content.ts`. Nothing else needs to change for wording.
- New section: add a component in `website/components/`, mount it in `website/page.tsx`, and give it an `id` if the nav should link to it.
- Blog post: drop a `.md` file with `title`, `description`, `date` frontmatter into `content/blog/`.
- Art: replace files in `website/assets/` keeping the same names.

## Local

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # static export to out/
npm run typecheck
```

## Environment

| Variable | Purpose |
|---|---|
| `NEXT_PUBLIC_BOOKING_URL` | Calendly link for the embedded scheduler (falls back to Husn's default in `components/booking.tsx`) |
| `NEXT_PUBLIC_PLAUSIBLE_DOMAIN`, `NEXT_PUBLIC_POSTHOG_KEY`, `NEXT_PUBLIC_POSTHOG_HOST`, `NEXT_PUBLIC_GA_ID` | Optional analytics, all disabled when unset |
| `NEXT_PUBLIC_GSC_VERIFICATION` | Google Search Console meta tag |

Set them in `.env.local` for development and as repository secrets for the GitHub Actions build.
