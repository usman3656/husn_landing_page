// Blog content loader. Posts live as markdown files under content/blog/, one
// file per post, named <slug>.md. Frontmatter carries the metadata; the body is
// standard markdown. Everything is read and rendered at build time (the site is
// a static export), so adding a post is: drop in a .md file and push.
//
// Required frontmatter: title, description, date (YYYY-MM-DD).
// Optional: author (defaults to "The Husn team").
//
// Like the SEO batches, malformed content fails the build loudly rather than
// letting Next error obscurely or ship a half-rendered page.

import { readFileSync, readdirSync, existsSync } from "node:fs";
import { join } from "node:path";
import matter from "gray-matter";
import { marked } from "marked";

export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  /** ISO date string, YYYY-MM-DD. */
  date: string;
  author: string;
  /** Rendered HTML body. */
  html: string;
  /** Rough reading time, floored at 1. */
  readingMinutes: number;
};

const BLOG_DIR = join(process.cwd(), "content", "blog");
const DATE_RE = /^\d{4}-\d{2}-\d{2}$/;

function loadPost(file: string): BlogPost {
  const slug = file.replace(/\.md$/, "");
  const raw = readFileSync(join(BLOG_DIR, file), "utf8");
  const { data, content } = matter(raw);

  for (const field of ["title", "description"] as const) {
    if (typeof data[field] !== "string" || data[field].trim() === "") {
      throw new Error(`Blog post "${file}": missing frontmatter field "${field}"`);
    }
  }
  // gray-matter parses unquoted YAML dates as Date objects and quoted ones as
  // strings; accept both and normalize to YYYY-MM-DD.
  if (
    !(data.date instanceof Date) &&
    (typeof data.date !== "string" || data.date.trim() === "")
  ) {
    throw new Error(`Blog post "${file}": missing frontmatter field "date"`);
  }
  const date =
    data.date instanceof Date
      ? data.date.toISOString().slice(0, 10)
      : data.date.trim();
  if (!DATE_RE.test(date)) {
    throw new Error(`Blog post "${file}": date must be YYYY-MM-DD, got "${data.date}"`);
  }

  const words = content.trim().split(/\s+/).length;

  return {
    slug,
    title: String(data.title).trim(),
    description: String(data.description).trim(),
    date,
    author: typeof data.author === "string" && data.author.trim() !== "" ? data.author.trim() : "The Husn team",
    html: marked.parse(content, { async: false }),
    readingMinutes: Math.max(1, Math.round(words / 220)),
  };
}

// Loaded once per build process, newest first.
let cache: BlogPost[] | null = null;

export function getAllPosts(): BlogPost[] {
  if (cache) return cache;
  if (!existsSync(BLOG_DIR)) {
    cache = [];
    return cache;
  }
  const posts = readdirSync(BLOG_DIR)
    .filter((f) => f.endsWith(".md"))
    .map(loadPost)
    .sort((a, b) => (a.date < b.date ? 1 : a.date > b.date ? -1 : 0));

  const seen = new Set<string>();
  for (const p of posts) {
    if (seen.has(p.slug)) throw new Error(`Duplicate blog slug: "${p.slug}"`);
    seen.add(p.slug);
  }

  cache = posts;
  return cache;
}

export function getPost(slug: string): BlogPost | undefined {
  return getAllPosts().find((p) => p.slug === slug);
}

// "20 July 2026" style, matching the site's plain editorial register.
export function formatDate(iso: string): string {
  const [y, m, d] = iso.split("-").map(Number);
  const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December",
  ];
  return `${d} ${months[m - 1]} ${y}`;
}
