import { seoPages } from "@/lib/seo-pages";

// Static RSS feed of every solution page. force-static so it is emitted as a
// plain file under the static export.
export const dynamic = "force-static";

const BASE = "https://husn.io";

function esc(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

export function GET() {
  const items = seoPages
    .map(
      (p) => `    <item>
      <title>${esc(p.title)}</title>
      <link>${BASE}/solutions/${p.slug}/</link>
      <guid isPermaLink="true">${BASE}/solutions/${p.slug}/</guid>
      <description>${esc(p.metaDescription)}</description>
    </item>`,
    )
    .join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Husn Solutions</title>
    <link>${BASE}/solutions/</link>
    <atom:link href="${BASE}/feed.xml" rel="self" type="application/rss+xml" />
    <description>Husn solutions for project risk, executive reporting, meeting preparation, dependency management, and project health.</description>
    <language>en-us</language>
${items}
  </channel>
</rss>`;

  return new Response(xml, {
    headers: { "Content-Type": "application/rss+xml; charset=utf-8" },
  });
}
