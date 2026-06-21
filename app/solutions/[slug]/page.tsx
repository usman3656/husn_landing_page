import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Newsreader, IBM_Plex_Mono } from "next/font/google";
import {
  getSeoPage,
  getAllSeoSlugs,
  getRelatedPages,
  categories,
  leadMagnet,
  type BriefTone,
} from "@/lib/seo-pages";

// Same faces as the homepage so solution pages read as part of the site, not a
// bolt on. Newsreader for headings, Plex Mono for labels.
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

const toneColor: Record<BriefTone, string> = {
  risk: "var(--oxide)",
  changed: "var(--blue)",
  watch: "var(--slate)",
};

// Static export needs the full slug list up front.
export function generateStaticParams() {
  return getAllSeoSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const page = getSeoPage(slug);
  if (!page) return {};

  const url = `https://husn.io/solutions/${slug}/`;
  return {
    title: page.metaTitle,
    description: page.metaDescription,
    alternates: { canonical: url },
    openGraph: {
      title: page.metaTitle,
      description: page.metaDescription,
      url,
      siteName: "Husn",
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: page.metaTitle,
      description: page.metaDescription,
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

function Sec({
  id,
  label,
  alt,
  children,
}: {
  id?: string;
  label: string;
  alt?: boolean;
  children: React.ReactNode;
}) {
  return (
    <section
      id={id}
      className={`border-b border-[var(--mist)] ${alt ? "bg-[var(--mist)]/35" : ""}`}
    >
      <div className="mx-auto max-w-[1140px] px-6 py-16 md:py-20">
        <div
          className={`${mono.className} mb-8 text-[11px] uppercase tracking-[0.16em] text-[var(--slate)]`}
        >
          {label}
        </div>
        {children}
      </div>
    </section>
  );
}

export default async function SolutionPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const page = getSeoPage(slug);
  if (!page) notFound();

  const related = getRelatedPages(slug);
  const category = categories[page.category];
  // The flagship template is the lead magnet itself, so it offers the asset
  // directly rather than pointing visitors back to its own page.
  const isLeadMagnetPage = `/solutions/${slug}/` === leadMagnet.href;

  // FAQ structured data so the page is eligible for rich results.
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: page.faq.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };

  return (
    <div
      style={theme}
      className="min-h-screen bg-[var(--paper)] text-[var(--ink)] antialiased"
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
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
            <Link href="/#sees">What Husn sees</Link>
            <Link href="/#trust">Trust</Link>
            <Link href="/#pricing">Pricing</Link>
          </nav>
          <Cta href="/#demo">Book a demo</Cta>
        </div>
      </header>

      {/* 1 - Hero */}
      <section className="border-b border-[var(--mist)]">
        <div className="mx-auto grid max-w-[1140px] gap-12 px-6 py-16 md:grid-cols-[1.05fr_1fr] md:items-center md:py-20">
          <div>
            <span
              className={`${mono.className} block text-[11px] uppercase tracking-[0.18em] text-[var(--blue)]`}
            >
              {page.heroEyebrow}
            </span>
            <h1
              className={`${serif.className} mt-3 text-4xl font-medium leading-[1.05] tracking-[-0.01em] md:text-5xl`}
            >
              {page.heroHeadline}
            </h1>
            <p className="mt-6 max-w-[46ch] text-lg leading-relaxed text-[var(--slate)]">
              {page.heroSubheadline}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Cta href="/#demo">Book a demo</Cta>
              <Cta href="#brief" ghost>
                See a sample brief
              </Cta>
            </div>
            <p
              className={`${mono.className} mt-6 text-[11px] uppercase tracking-[0.14em] text-[var(--slate)]`}
            >
              Husn reads your tools - never changes them
            </p>
          </div>

          {/* 5 (high) - Example insight / briefing card */}
          <div
            id="brief"
            className="rounded-[2px] border border-[var(--mist)] bg-[var(--surface)]"
            style={{
              boxShadow:
                "0 1px 2px rgba(27,29,30,.06), 0 24px 48px -34px rgba(27,29,30,.2)",
            }}
          >
            <div
              className={`${mono.className} flex items-center justify-between border-b border-[var(--mist)] px-4 py-3 text-[11px] uppercase tracking-[0.12em] text-[var(--slate)]`}
            >
              <span>{page.briefing.context}</span>
              <span>{page.briefing.items.length} to know</span>
            </div>
            <ul className="px-4 py-1">
              {page.briefing.items.map((item, i) => (
                <li
                  key={i}
                  className="flex items-start justify-between gap-3 border-b border-[var(--mist)] py-3.5 last:border-0"
                >
                  <div className="flex items-start gap-3">
                    <span
                      className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full"
                      style={{ background: toneColor[item.tone] }}
                    />
                    <span className="text-sm">{item.text}</span>
                  </div>
                  <span
                    className={`${mono.className} shrink-0 text-[10px] uppercase tracking-[0.1em]`}
                    style={{ color: toneColor[item.tone] }}
                  >
                    {item.tag}
                  </span>
                </li>
              ))}
            </ul>
            <div className="flex items-center justify-between border-t border-[var(--mist)] px-4 py-3">
              <span
                className={`${mono.className} text-[11px] uppercase tracking-[0.12em] text-[var(--slate)]`}
              >
                {page.briefing.footer}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 2 - Pain */}
      <Sec label="The problem">
        <div className="grid gap-10 md:grid-cols-[0.9fr_1.1fr] md:items-start">
          <h2
            className={`${serif.className} text-3xl font-medium leading-[1.1] md:text-4xl`}
          >
            {page.title}
          </h2>
          <div>
            <p className="text-lg leading-relaxed text-[var(--slate)]">
              {page.primaryPain}
            </p>
            <ul className="mt-8 divide-y divide-[var(--mist)] border-y border-[var(--mist)]">
              {page.painBullets.map((b, i) => (
                <li key={i} className="flex items-start gap-3 py-4">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--oxide)]" />
                  <span className="text-[var(--slate)]">{b}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Sec>

      {/* 3 - Why this gets hard at scale */}
      <Sec label="Why this gets hard at scale" alt>
        <h2
          className={`${serif.className} max-w-[20ch] text-3xl font-medium leading-[1.12] md:text-4xl`}
        >
          {page.whyHardHeading}
        </h2>
        <div className="mt-10 grid gap-8 md:grid-cols-3">
          {page.whyHard.map((w, i) => (
            <div key={i}>
              <span className={`${mono.className} text-[12px] text-[var(--slate)]`}>
                0{i + 1}
              </span>
              <p className="mt-2 leading-relaxed text-[var(--slate)]">{w}</p>
            </div>
          ))}
        </div>
      </Sec>

      {/* 4 - How Husn helps */}
      <Sec label="How Husn helps">
        <div className="divide-y divide-[var(--mist)] border-y border-[var(--mist)]">
          {page.howHusnHelps.map((h, i) => (
            <div key={i} className="grid gap-2 py-6 md:grid-cols-[0.4fr_1fr]">
              <span
                className={`${mono.className} text-[12px] uppercase tracking-[0.14em] text-[var(--blue)]`}
              >
                Step 0{i + 1}
              </span>
              <span className="text-lg">{h}</span>
            </div>
          ))}
        </div>
        <p
          className={`${serif.className} mt-10 text-2xl italic text-[var(--slate)]`}
        >
          Husn reads and reasons, and never changes your tools.
        </p>
      </Sec>

      {/* Comparison table (type "comparison" only) */}
      {page.comparison && (
        <Sec label="Side by side" alt>
          <div className="overflow-hidden rounded-[2px] border border-[var(--mist)] bg-[var(--surface)]">
            <div
              className={`${mono.className} grid grid-cols-[1.1fr_1fr_1fr] gap-3 border-b border-[var(--mist)] px-5 py-3 text-[11px] uppercase tracking-[0.12em] text-[var(--slate)]`}
            >
              <span></span>
              <span className="text-[var(--ink)]">Husn</span>
              <span>{page.comparison.competitor}</span>
            </div>
            {page.comparison.rows.map((row, i) => (
              <div
                key={i}
                className="grid grid-cols-[1.1fr_1fr_1fr] gap-3 border-b border-[var(--mist)] px-5 py-4 text-sm last:border-0"
              >
                <span
                  className={`${mono.className} text-[12px] uppercase tracking-[0.1em] text-[var(--slate)]`}
                >
                  {row.dimension}
                </span>
                <span className="text-[var(--ink)]">{row.husn}</span>
                <span className="text-[var(--slate)]">{row.them}</span>
              </div>
            ))}
          </div>
          <p className="mt-8 max-w-[60ch] text-lg leading-relaxed text-[var(--slate)]">
            {page.comparison.summary}
          </p>
        </Sec>
      )}

      {/* Template contents (type "template" with contents only) */}
      {page.templateContents && page.templateContents.length > 0 && (
        <Sec label="What is inside" alt>
          <div className="grid gap-10 md:grid-cols-[0.8fr_1.2fr] md:items-start">
            <h2
              className={`${serif.className} max-w-[16ch] text-3xl font-medium leading-[1.12] md:text-4xl`}
            >
              The sections, in the order leaders read them.
            </h2>
            <ol className="divide-y divide-[var(--mist)] border-y border-[var(--mist)]">
              {page.templateContents.map((item, i) => (
                <li key={i} className="flex items-start gap-4 py-4">
                  <span
                    className={`${mono.className} shrink-0 text-[12px] text-[var(--blue)]`}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-[var(--slate)]">{item}</span>
                </li>
              ))}
            </ol>
          </div>
          <div className="mt-10">
            <Cta href={leadMagnet.contactHref}>Get the template</Cta>
          </div>
        </Sec>
      )}

      {/* 6 - Use cases */}
      <Sec label="Use cases" alt>
        <div className="grid gap-8 md:grid-cols-3">
          {page.useCases.map((u, i) => (
            <div
              key={i}
              className="rounded-[2px] border border-[var(--mist)] bg-[var(--surface)] p-6"
            >
              <h3 className={`${serif.className} text-xl`}>{u.title}</h3>
              <p className="mt-3 leading-relaxed text-[var(--slate)]">{u.body}</p>
            </div>
          ))}
        </div>
      </Sec>

      {/* 7 - Who this is for */}
      <Sec label="Who this is for">
        <div className="grid gap-10 md:grid-cols-2 md:items-start">
          <h2
            className={`${serif.className} max-w-[18ch] text-3xl font-medium leading-[1.12] md:text-4xl`}
          >
            Built for the people who have to keep it all straight.
          </h2>
          <ul className="grid gap-x-8 gap-y-3 sm:grid-cols-2">
            {page.idealFor.map((role, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--blue)]" />
                <span className="text-[var(--slate)]">{role}</span>
              </li>
            ))}
          </ul>
        </div>
      </Sec>

      {/* 8 - FAQ (native <details>, plus JSON-LD above) */}
      <Sec label="FAQ" alt>
        <h2
          className={`${serif.className} text-3xl font-medium leading-[1.1] md:text-4xl`}
        >
          Questions, answered.
        </h2>
        <ul className="mt-10 divide-y divide-[var(--mist)] border-y border-[var(--mist)]">
          {page.faq.map((item, i) => (
            <li key={i}>
              <details className="group py-5">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6">
                  <span className="text-base font-medium text-[var(--ink)] md:text-lg">
                    {item.q}
                  </span>
                  <span
                    aria-hidden="true"
                    className="grid h-7 w-7 shrink-0 place-items-center rounded-full border border-[var(--ink)]/15 text-sm text-[var(--slate)] transition-transform duration-300 group-open:rotate-45"
                  >
                    +
                  </span>
                </summary>
                <p className="mt-4 max-w-[70ch] leading-relaxed text-[var(--slate)]">
                  {item.a}
                </p>
              </details>
            </li>
          ))}
        </ul>
      </Sec>

      {/* Related solution pages - internal links */}
      {related.length > 0 && (
        <Sec label="Related solutions">
          <div className="grid gap-4 md:grid-cols-3">
            {related.map((r) => (
              <Link
                key={r.slug}
                href={`/solutions/${r.slug}/`}
                className="group flex items-center justify-between gap-3 rounded-[2px] border border-[var(--mist)] bg-[var(--surface)] px-5 py-4 transition-colors hover:border-[var(--ink)]/30"
              >
                <span className={`${serif.className} text-lg`}>{r.title}</span>
                <span className="text-[var(--blue)] transition-transform group-hover:translate-x-0.5">
                  &rarr;
                </span>
              </Link>
            ))}
          </div>
        </Sec>
      )}

      {/* 9 - CTA, with the category promise and the lead magnet */}
      <section id="demo" className="border-t border-[var(--mist)]">
        <div className="mx-auto max-w-[1140px] px-6 py-20 text-center md:py-28">
          <span
            className={`${mono.className} block text-[11px] uppercase tracking-[0.18em] text-[var(--blue)]`}
          >
            {category.cta}
          </span>
          <h2
            className={`${serif.className} mt-4 text-3xl font-medium md:text-5xl`}
          >
            {page.ctaHeadline}
          </h2>
          <p className="mx-auto mt-4 max-w-[46ch] text-lg text-[var(--slate)]">
            {page.ctaText}
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Cta href="/#demo">Book a demo</Cta>
            {isLeadMagnetPage ? (
              <Cta href="/#sees" ghost>
                See what Husn surfaces
              </Cta>
            ) : (
              <Cta href={leadMagnet.href} ghost>
                {leadMagnet.label}
              </Cta>
            )}
          </div>
        </div>
      </section>

      {/* Footer - mirrors the homepage chrome */}
      <footer className="border-t border-[var(--mist)]">
        <div
          className={`${mono.className} mx-auto flex max-w-[1140px] flex-col items-start justify-between gap-2 px-6 py-8 text-[11px] uppercase tracking-[0.12em] text-[var(--slate)] md:flex-row md:items-center`}
        >
          <span>Husn explains and answers - never changes your tools</span>
          <span>Husn - {new Date().getFullYear()}</span>
        </div>
      </footer>
    </div>
  );
}
