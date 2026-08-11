import type { Metadata } from "next";
import Link from "next/link";
import { Newsreader, IBM_Plex_Mono } from "next/font/google";
import { SiteHeader } from "@/components/site-header";
import { getAllPublications, formatDate } from "@/lib/publications";

// Same faces as the homepage so this reads as part of the site.
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
  title: "Publications | Husn",
  description:
    "Independent and published research from the Husn founders, linked from here as it comes out.",
  alternates: { canonical: "https://husn.io/research/publications/" },
  openGraph: {
    title: "Publications | Husn",
    description:
      "Independent and published research from the Husn founders, linked from here as it comes out.",
    url: "https://husn.io/research/publications/",
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

export default function PublicationsIndex() {
  const publications = getAllPublications();

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
              { "@type": "ListItem", position: 2, name: "Research & Publications", item: "https://husn.io/research/" },
              { "@type": "ListItem", position: 3, name: "Publications", item: "https://husn.io/research/publications/" },
            ],
          }),
        }}
      />

      <SiteHeader variant="subpage" activeHref="/research/" />

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
            <Link href="/research/" className="hover:text-[var(--ink)]">
              Research &amp; Publications
            </Link>
          </li>
          <li aria-hidden="true">/</li>
          <li className="text-[var(--ink)]" aria-current="page">
            Publications
          </li>
        </ol>
      </nav>

      {/* Hero */}
      <section className="border-b border-[var(--mist)]">
        <div className="mx-auto max-w-[1140px] px-6 py-16 md:py-20">
          <span
            className={`${mono.className} block text-[11px] uppercase tracking-[0.18em] text-[var(--blue)]`}
          >
            Publications
          </span>
          <h1
            className={`${serif.className} mt-3 max-w-[22ch] text-4xl font-medium leading-[1.05] tracking-[-0.01em] md:text-5xl`}
          >
            Published research from the founders.
          </h1>
          <p className="mt-6 max-w-[58ch] text-lg leading-relaxed text-[var(--slate)]">
            Independent and published work from the founders, linked from here as it comes out.
          </p>
        </div>
      </section>

      {/* Publications */}
      <section className="border-b border-[var(--mist)]">
        <div className="mx-auto max-w-[1140px] px-6 py-16 md:py-20">
          {publications.length === 0 ? (
            <p className="text-lg text-[var(--slate)]">
              Nothing published yet. Check back soon.
            </p>
          ) : (
            <ul className="flex flex-col gap-4">
              {publications.map((pub) => (
                <li key={pub.slug}>
                  <a
                    href={pub.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex flex-col gap-3 rounded-[2px] border border-[var(--mist)] bg-[var(--surface)] p-6 transition-colors hover:border-[var(--ink)]/30 md:flex-row md:items-start md:justify-between md:gap-8"
                  >
                    <div>
                      <span
                        className={`${mono.className} text-[10px] uppercase tracking-[0.14em] text-[var(--slate)]`}
                      >
                        {formatDate(pub.date)}
                        {pub.venue ? ` · ${pub.venue}` : ""}
                      </span>
                      <h2 className={`${serif.className} mt-2 text-xl leading-snug`}>
                        {pub.title}
                      </h2>
                      <p className="mt-2 text-sm leading-relaxed text-[var(--slate)]">
                        {pub.description}
                      </p>
                      <p
                        className={`${mono.className} mt-3 text-[10px] uppercase tracking-[0.14em] text-[var(--slate)]`}
                      >
                        {pub.authors.join(", ")}
                      </p>
                    </div>
                    <span className="inline-flex shrink-0 items-center gap-2 text-sm font-medium text-[var(--blue)]">
                      Read paper
                      <span className="transition-transform group-hover:translate-x-0.5">&rarr;</span>
                    </span>
                  </a>
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
            See Husn on a real referral scenario.
          </h2>
          <p className="mx-auto mt-4 max-w-[44ch] text-lg text-[var(--slate)]">
            The fastest way to understand Husn is a quick walkthrough on how
            it reads and structures a referral.
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
          <span>Husn · referral records into EHR-ready context</span>
          <span>Husn · {new Date().getFullYear()}</span>
        </div>
      </footer>
    </div>
  );
}
