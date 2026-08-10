import { getAllPosts } from "@/lib/blog";

// Static RSS feed of every blog post and solution page. force-static so it is
// emitted as a plain file under the static export.
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
  const blogItems = getAllPosts().map(
    (p) => `    <item>
      <title>${esc(p.title)}</title>
      <link>${BASE}/blog/${p.slug}/</link>
      <guid isPermaLink="true">${BASE}/blog/${p.slug}/</guid>
      <description>${esc(p.description)}</description>
      <pubDate>${new Date(`${p.date}T00:00:00Z`).toUTCString()}</pubDate>
    </item>`,
  );

  const items = blogItems.join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Husn</title>
    <link>${BASE}/</link>
    <atom:link href="${BASE}/feed.xml" rel="self" type="application/rss+xml" />
    <description>Writing from Husn.</description>
    <language>en-us</language>
${items}
  </channel>
</rss>`;

  return new Response(xml, {
    headers: { "Content-Type": "application/rss+xml; charset=utf-8" },
  });
}
