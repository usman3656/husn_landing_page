import { getAllPosts } from "@/lib/blog";

// Static RSS feed of every blog post. force-static so it is emitted as a
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
  const items = getAllPosts().map(
    (p) => `    <item>
      <title>${esc(p.title)}</title>
      <link>${BASE}/blog/${p.slug}/</link>
      <guid isPermaLink="true">${BASE}/blog/${p.slug}/</guid>
      <description>${esc(p.description)}</description>
      <pubDate>${new Date(`${p.date}T00:00:00Z`).toUTCString()}</pubDate>
    </item>`,
  );

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0">
  <channel>
    <title>Husn Blog</title>
    <link>${BASE}/blog/</link>
    <description>Writing from the Husn team.</description>
    <language>en</language>
${items.join("\n")}
  </channel>
</rss>`;

  return new Response(xml, {
    headers: { "Content-Type": "application/rss+xml; charset=utf-8" },
  });
}
