# Archive

Old-product (pre-healthcare) material, kept for reference during the Husn AI Medical rewrite, not part of the active app.

- `homepage-variants/` — nine abandoned homepage experiments (`g1`–`g5`, `v1`–`v3`, `home`) that existed alongside the live page (`app/final/`, served via `app/page.tsx`). None were wired into navigation.
- `seo-solutions-pages/solutions/` — programmatic SEO pages (`/solutions/[slug]`) targeting old-product keywords (executive reporting, dependency risk, meeting prep, org "health").
- `seo-lib/` — the data/types (`seo-data/`, `seo-pages.ts`, `seo-types.ts`) that powered the solutions pages above.
- `validate-seo.mjs` — build-time validator for the SEO pages; not wired into `package.json` scripts, so removing it broke nothing.

`app/sitemap.ts` and `app/feed.xml/route.ts` were updated to drop references to the archived SEO pages.
