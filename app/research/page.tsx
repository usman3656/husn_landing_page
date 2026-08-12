import type { Metadata } from "next";
import Link from "next/link";
import { Newsreader, IBM_Plex_Mono } from "next/font/google";
import { SiteHeader } from "@/components/site-header";

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
  title: "Research & Publications | Husn",
  description:
    "Writing from the team building Husn, and research the founders have published elsewhere.",
  alternates: { canonical: "https://husn.io/research/" },
  openGraph: {
    title: "Research & Publications | Husn",
    description:
      "Writing from the team building Husn, and research the founders have published elsewhere.",
    url: "https://husn.io/research/",
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

const SECTIONS = [
  {
    href: "/blog/",
    label: "Blogs",
    description:
      "Notes on referral records, clinical validation, and what it takes to build structured context clinicians can trust.",
  },
  {
    href: "/research/publications/",
    label: "Publications",
    description:
      "Research from the founders, published elsewhere and linked from here as it comes out.",
  },
] as const;

export default function ResearchHub() {
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
          <li className="text-[var(--ink)]" aria-current="page">
            Research &amp; Publications
          </li>
        </ol>
      </nav>

      {/* Hero */}
      <section className="border-b border-[var(--mist)]">
        <div className="mx-auto max-w-[1140px] px-6 py-10 md:py-20">
          <span
            className={`${mono.className} block text-[11px] uppercase tracking-[0.18em] text-[var(--blue)]`}
          >
            Research &amp; Publications
          </span>
          <h1
            className={`${serif.className} mt-3 max-w-[22ch] text-4xl font-medium leading-[1.05] tracking-[-0.01em] md:text-5xl`}
          >
            Writing and research from the team building Husn.
          </h1>
          <p className="mt-6 max-w-[58ch] text-lg leading-relaxed text-[var(--slate)]">
            Notes on the product, and research the founders have published elsewhere.
          </p>
        </div>
      </section>

      {/* Section tiles */}
      <section className="border-b border-[var(--mist)]">
        <div className="mx-auto grid max-w-[1140px] gap-4 px-6 py-10 sm:grid-cols-2 md:py-20">
          {SECTIONS.map((s) => (
            <Link
              key={s.href}
              href={s.href}
              className="group flex flex-col justify-between gap-8 rounded-[2px] border border-[var(--mist)] bg-[var(--surface)] p-8 transition-colors hover:border-[var(--ink)]/30"
            >
              <div>
                <h2 className={`${serif.className} text-2xl leading-snug md:text-3xl`}>
                  {s.label}
                </h2>
                <p className="mt-3 text-[15px] leading-relaxed text-[var(--slate)]">
                  {s.description}
                </p>
              </div>
              <span className="inline-flex items-center gap-2 text-sm font-medium text-[var(--blue)]">
                View {s.label.toLowerCase()}
                <span className="transition-transform group-hover:translate-x-0.5">&rarr;</span>
              </span>
            </Link>
          ))}
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
