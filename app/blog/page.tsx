import type { Metadata } from "next";
import Link from "next/link";
import { Newsreader, IBM_Plex_Mono } from "next/font/google";
import { getAllPosts, formatDate } from "@/lib/blog";

// Same faces as the homepage so the blog reads as part of the site.
const serif = Newsreader({
  subsets: ["latin"],
  weight: ["400", "500"],
  style: ["normal", "italic"],
  display: "swap",
});
const mono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

// Homepage theme tokens, reused verbatim so the visual identity carries over.
const theme: React.CSSProperties = {
  ["--paper" as string]: "#F6F4EF",
  ["--surface" as string]: "#FFFFFF",
  ["--ink" as string]: "#1B1D1E",
  ["--slate" as string]: "#5A6066",
  ["--mist" as string]: "#E8E4DB",
  ["--blue" as string]: "#2C5CE6",
  ["--oxide" as string]: "#B23A2E",
};

export const metadata: Metadata = {
  title: "Blog | Husn",
  description:
    "Writing from the team building Husn: keeping knowledge current, answering from across your tools, and putting an AI teammate to work.",
  alternates: {
    canonical: "https://husn.io/blog/",
    types: { "application/rss+xml": "https://husn.io/feed.xml" },
  },
  openGraph: {
    title: "Blog | Husn",
    description:
      "Writing from the team building Husn: keeping knowledge current, answering from across your tools, and putting an AI teammate to work.",
    url: "https://husn.io/blog/",
    siteName: "Husn",
    type: "website",
  },
  robots: { index: true, follow: true },
};

function Cta({
  children,
  href = "/#demo",
  ghost = false,
}: {
  children: React.ReactNode;
  href?: string;
  ghost?: boolean;
}) {
  return (
    <Link
      href={href}
      className={
        ghost
          ? "inline-flex items-center gap-2 rounded-[2px] border border-[var(--ink)]/25 px-5 py-3 text-sm font-medium text-[var(--ink)] transition-colors hover:border-[var(--ink)]"
          : "inline-flex items-center gap-2 rounded-[2px] bg-[var(--ink)] px-5 py-3 text-sm font-medium text-[var(--paper)] transition-opacity hover:opacity-90"
      }
    >
      {children}
    </Link>
  );
}

export default function BlogIndex() {
  const posts = getAllPosts();

  return (
    <div
      style={theme}
      className="min-h-screen bg-[var(--paper)] text-[var(--ink)] antialiased"
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: "https://husn.io/" },
              { "@type": "ListItem", position: 2, name: "Blog", item: "https://husn.io/blog/" },
            ],
          }),
        }}
      />

      {/* Header - mirrors the homepage chrome */}
      <header className="sticky top-0 z-40 border-b border-[var(--mist)] bg-[var(--paper)]/85 backdrop-blur">
        <div className="mx-auto flex h-16 max-w-[1140px] items-center justify-between px-6">
          <Link href="/" className={`${serif.className} text-xl`}>
            Husn
          </Link>
          <nav
            className={`${mono.className} hidden gap-6 text-[11px] uppercase tracking-[0.14em] text-[var(--slate)] md:flex`}
          >
            <Link href="/#how">How it works</Link>
            <Link href="/#ask">See it work</Link>
            <Link href="/#pricing">Pricing</Link>
            <Link href="/blog/" className="text-[var(--ink)]">
              Blog
            </Link>
          </nav>
          <Cta href="/#demo">Book a demo</Cta>
        </div>
      </header>

      {/* Breadcrumbs */}
      <nav aria-label="Breadcrumb" className="border-b border-[var(--mist)]">
        <ol
          className={`${mono.className} mx-auto flex max-w-[1140px] flex-wrap items-center gap-2 px-6 py-3 text-[11px] uppercase tracking-[0.12em] text-[var(--slate)]`}
        >
          <li>
            <Link href="/" className="hover:text-[var(--ink)]">
              Home
            </Link>
          </li>
          <li aria-hidden="true">/</li>
          <li className="text-[var(--ink)]" aria-current="page">
            Blog
          </li>
        </ol>
      </nav>

      {/* Hero */}
      <section className="border-b border-[var(--mist)]">
        <div className="mx-auto max-w-[1140px] px-6 py-16 md:py-20">
          <span
            className={`${mono.className} block text-[11px] uppercase tracking-[0.18em] text-[var(--blue)]`}
          >
            Blog
          </span>
          <h1
            className={`${serif.className} mt-3 max-w-[20ch] text-4xl font-medium leading-[1.05] tracking-[-0.01em] md:text-5xl`}
          >
            Notes from the team building Husn.
          </h1>
          <p className="mt-6 max-w-[58ch] text-lg leading-relaxed text-[var(--slate)]">
            On keeping knowledge current, answering from across your tools, and
            what it takes to trust an AI teammate with real work.
          </p>
        </div>
      </section>

      {/* Posts */}
      <section className="border-b border-[var(--mist)]">
        <div className="mx-auto max-w-[1140px] px-6 py-16 md:py-20">
          {posts.length === 0 ? (
            <p className="text-lg text-[var(--slate)]">
              Nothing published yet. Check back soon.
            </p>
          ) : (
            <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {posts.map((post) => (
                <li key={post.slug}>
                  <Link
                    href={`/blog/${post.slug}/`}
                    className="group flex h-full flex-col rounded-[2px] border border-[var(--mist)] bg-[var(--surface)] p-6 transition-colors hover:border-[var(--ink)]/30"
                  >
                    <div className="flex items-center justify-between gap-2">
                      <span
                        className={`${mono.className} text-[10px] uppercase tracking-[0.14em] text-[var(--slate)]`}
                      >
                        {formatDate(post.date)}
                      </span>
                      <span className="text-[var(--blue)] transition-transform group-hover:translate-x-0.5">
                        &rarr;
                      </span>
                    </div>
                    <h2
                      className={`${serif.className} mt-3 text-xl leading-snug`}
                    >
                      {post.title}
                    </h2>
                    <p className="mt-3 text-sm leading-relaxed text-[var(--slate)]">
                      {post.description}
                    </p>
                    <span
                      className={`${mono.className} mt-auto pt-5 text-[10px] uppercase tracking-[0.14em] text-[var(--slate)]`}
                    >
                      {post.readingMinutes} min read
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-[var(--mist)]">
        <div className="mx-auto max-w-[1140px] px-6 py-20 text-center md:py-28">
          <h2 className={`${serif.className} text-3xl font-medium md:text-5xl`}>
            See Husn on your own tools.
          </h2>
          <p className="mx-auto mt-4 max-w-[44ch] text-lg text-[var(--slate)]">
            The fastest way to understand Husn is to point it at your own stack
            for fifteen minutes.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Cta href="/#demo">Book a demo</Cta>
          </div>
        </div>
      </section>

      {/* Footer - mirrors the homepage chrome */}
      <footer className="border-t border-[var(--mist)]">
        <div
          className={`${mono.className} mx-auto flex max-w-[1140px] flex-col items-start justify-between gap-2 px-6 py-8 text-[11px] uppercase tracking-[0.12em] text-[var(--slate)] md:flex-row md:items-center`}
        >
          <span>Husn · knowledge, answers, and work across every tool</span>
          <span>Husn · {new Date().getFullYear()}</span>
        </div>
      </footer>
    </div>
  );
}
