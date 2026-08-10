import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Newsreader, IBM_Plex_Mono } from "next/font/google";
import { getAllPosts, getPost, formatDate } from "@/lib/blog";

// Same faces as the homepage so posts read as part of the site.
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

// Static export needs the full slug list up front.
export function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};

  const url = `https://husn.io/blog/${slug}/`;
  return {
    title: `${post.title} | Husn`,
    description: post.description,
    alternates: {
      canonical: url,
      types: { "application/rss+xml": "https://husn.io/feed.xml" },
    },
    openGraph: {
      title: post.title,
      description: post.description,
      url,
      siteName: "Husn",
      type: "article",
      publishedTime: post.date,
      authors: [post.author],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
    },
    robots: { index: true, follow: true },
  };
}

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

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const others = getAllPosts()
    .filter((p) => p.slug !== slug)
    .slice(0, 3);

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    author: { "@type": "Person", name: post.author },
    publisher: { "@type": "Organization", name: "Husn", url: "https://husn.io/" },
    mainEntityOfPage: `https://husn.io/blog/${slug}/`,
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://husn.io/" },
      { "@type": "ListItem", position: 2, name: "Blog", item: "https://husn.io/blog/" },
      {
        "@type": "ListItem",
        position: 3,
        name: post.title,
        item: `https://husn.io/blog/${slug}/`,
      },
    ],
  };

  return (
    <div
      style={theme}
      className="min-h-screen bg-[var(--paper)] text-[var(--ink)] antialiased"
    >
      {/* Rendered-markdown typography, scoped to the article body. Serif for
          headings and pull quotes, body copy in the site sans, mono touches. */}
      <style>{`
        .post-body { font-size: 16px; line-height: 1.75; color: #31353d; }
        .post-body > * + * { margin-top: 1.1em; }
        .post-body h2 { font-family: ${serif.style.fontFamily}; font-weight: 500; font-size: 1.7rem; line-height: 1.15; letter-spacing: -0.01em; color: var(--ink); margin-top: 2em; }
        .post-body h3 { font-family: ${serif.style.fontFamily}; font-weight: 500; font-size: 1.3rem; line-height: 1.2; color: var(--ink); margin-top: 1.7em; }
        .post-body a { color: var(--blue); text-decoration: underline; text-underline-offset: 3px; }
        .post-body strong { color: var(--ink); font-weight: 600; }
        .post-body ul, .post-body ol { padding-left: 1.4em; }
        .post-body li { margin-top: 0.45em; }
        .post-body li::marker { color: var(--slate); }
        .post-body blockquote { font-family: ${serif.style.fontFamily}; font-style: italic; font-size: 1.35rem; line-height: 1.4; color: var(--slate); border-left: 2px solid var(--blue); padding-left: 1.25rem; margin-top: 1.6em; margin-bottom: 1.6em; }
        .post-body blockquote p { margin: 0; }
        .post-body code { font-family: ${mono.style.fontFamily}; font-size: 0.86em; background: var(--mist); border-radius: 3px; padding: 0.1em 0.35em; }
        .post-body pre { background: var(--surface); border: 1px solid var(--mist); border-radius: 2px; padding: 1rem 1.25rem; overflow-x: auto; }
        .post-body pre code { background: none; padding: 0; }
        .post-body hr { border: 0; border-top: 1px solid var(--mist); margin: 2.2em 0; }
        .post-body img { max-width: 100%; height: auto; border: 1px solid var(--mist); border-radius: 2px; }
      `}</style>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
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
            <Link href="/#founders">Founders</Link>
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
          <li>
            <Link href="/blog/" className="hover:text-[var(--ink)]">
              Blog
            </Link>
          </li>
          <li aria-hidden="true">/</li>
          <li className="text-[var(--ink)]" aria-current="page">
            {post.title}
          </li>
        </ol>
      </nav>

      {/* Article */}
      <article className="border-b border-[var(--mist)]">
        <div className="mx-auto max-w-[720px] px-6 py-16 md:py-20">
          <p
            className={`${mono.className} text-[11px] uppercase tracking-[0.18em] text-[var(--blue)]`}
          >
            {formatDate(post.date)} · {post.readingMinutes} min read
          </p>
          <h1
            className={`${serif.className} mt-4 text-4xl font-medium leading-[1.08] tracking-[-0.01em] md:text-5xl`}
          >
            {post.title}
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-[var(--slate)]">
            {post.description}
          </p>
          <p
            className={`${mono.className} mt-6 border-b border-[var(--mist)] pb-8 text-[11px] uppercase tracking-[0.14em] text-[var(--slate)]`}
          >
            By {post.author}
          </p>

          <div
            className="post-body mt-10"
            dangerouslySetInnerHTML={{ __html: post.html }}
          />
        </div>
      </article>

      {/* More posts - internal links */}
      {others.length > 0 && (
        <section className="border-b border-[var(--mist)] bg-[var(--mist)]/35">
          <div className="mx-auto max-w-[1140px] px-6 py-16 md:py-20">
            <div
              className={`${mono.className} mb-8 text-[11px] uppercase tracking-[0.16em] text-[var(--slate)]`}
            >
              More from the blog
            </div>
            <div className="grid gap-4 md:grid-cols-3">
              {others.map((p) => (
                <Link
                  key={p.slug}
                  href={`/blog/${p.slug}/`}
                  className="group flex items-center justify-between gap-3 rounded-[2px] border border-[var(--mist)] bg-[var(--surface)] px-5 py-4 transition-colors hover:border-[var(--ink)]/30"
                >
                  <span className={`${serif.className} text-lg leading-snug`}>
                    {p.title}
                  </span>
                  <span className="text-[var(--blue)] transition-transform group-hover:translate-x-0.5">
                    &rarr;
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="border-t border-[var(--mist)]">
        <div className="mx-auto max-w-[1140px] px-6 py-20 text-center md:py-28">
          <h2 className={`${serif.className} text-3xl font-medium md:text-5xl`}>
            See Husn on a real referral scenario.
          </h2>
          <p className="mx-auto mt-4 max-w-[44ch] text-lg text-[var(--slate)]">
            The fastest way to understand Husn is a quick walkthrough on how
            it reads and structures a referral.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Cta href="/#demo">Book a demo</Cta>
            <Cta href="/blog/" ghost>
              More from the blog
            </Cta>
          </div>
        </div>
      </section>

      {/* Footer - mirrors the homepage chrome */}
      <footer className="border-t border-[var(--mist)]">
        <div
          className={`${mono.className} mx-auto flex max-w-[1140px] flex-col items-start justify-between gap-2 px-6 py-8 text-[11px] uppercase tracking-[0.12em] text-[var(--slate)] md:flex-row md:items-center`}
        >
          <span>Husn · referral records into EHR-ready context</span>
          <span>Husn · {new Date().getFullYear()}</span>
        </div>
      </footer>
    </div>
  );
}
