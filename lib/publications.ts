// Publications loader. Entries live as markdown files under content/publications/,
// one file per entry, named <slug>.md. These are link-out citations to research
// the founders have published elsewhere (a journal, a preprint server, a PDF),
// not full articles hosted on this site — the markdown body is unused; everything
// needed lives in frontmatter.
//
// Required frontmatter: title, description (short abstract), date (YYYY-MM-DD),
// authors (comma-separated string), url (external link to the paper).
// Optional: venue (journal / publisher name).
//
// Like the blog loader, malformed content fails the build loudly rather than
// shipping a half-rendered entry.

import { readFileSync, readdirSync, existsSync } from "node:fs";
import { join } from "node:path";
import matter from "gray-matter";

export type Publication = {
  slug: string;
  title: string;
  description: string;
  /** ISO date string, YYYY-MM-DD. */
  date: string;
  authors: string[];
  venue: string | null;
  url: string;
};

const PUBLICATIONS_DIR = join(process.cwd(), "content", "publications");
const DATE_RE = /^\d{4}-\d{2}-\d{2}$/;

function loadPublication(file: string): Publication {
  const slug = file.replace(/\.md$/, "");
  const raw = readFileSync(join(PUBLICATIONS_DIR, file), "utf8");
  const { data } = matter(raw);

  for (const field of ["title", "description", "authors", "url"] as const) {
    if (typeof data[field] !== "string" || data[field].trim() === "") {
      throw new Error(`Publication "${file}": missing frontmatter field "${field}"`);
    }
  }
  if (
    !(data.date instanceof Date) &&
    (typeof data.date !== "string" || data.date.trim() === "")
  ) {
    throw new Error(`Publication "${file}": missing frontmatter field "date"`);
  }
  const date =
    data.date instanceof Date
      ? data.date.toISOString().slice(0, 10)
      : data.date.trim();
  if (!DATE_RE.test(date)) {
    throw new Error(`Publication "${file}": date must be YYYY-MM-DD, got "${data.date}"`);
  }

  return {
    slug,
    title: String(data.title).trim(),
    description: String(data.description).trim(),
    date,
    authors: String(data.authors)
      .split(",")
      .map((a) => a.trim())
      .filter(Boolean),
    venue: typeof data.venue === "string" && data.venue.trim() !== "" ? data.venue.trim() : null,
    url: String(data.url).trim(),
  };
}

let cache: Publication[] | null = null;

export function getAllPublications(): Publication[] {
  if (cache) return cache;
  if (!existsSync(PUBLICATIONS_DIR)) {
    cache = [];
    return cache;
  }
  const publications = readdirSync(PUBLICATIONS_DIR)
    .filter((f) => f.endsWith(".md"))
    .map(loadPublication)
    .sort((a, b) => (a.date < b.date ? 1 : a.date > b.date ? -1 : 0));

  const seen = new Set<string>();
  for (const p of publications) {
    if (seen.has(p.slug)) throw new Error(`Duplicate publication slug: "${p.slug}"`);
    seen.add(p.slug);
  }

  cache = publications;
  return cache;
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
