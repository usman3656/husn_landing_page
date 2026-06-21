import type { Metadata } from "next";
import Link from "next/link";
import { Newsreader, IBM_Plex_Mono } from "next/font/google";
import {
  seoPages,
  getPagesByCategory,
  categories,
  categoryOrder,
  typeLabels,
  leadMagnet,
} from "@/lib/seo-pages";

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
  title: "Solutions | Husn",
  description:
    "Husn for project risk, executive reporting, meeting preparation, dependency management, and project health. Browse every solution, tool, template, and comparison.",
  alternates: { canonical: "https://husn.io/solutions/" },
  openGraph: {
    title: "Solutions | Husn",
    description:
      "Browse every Husn solution across project risk, executive reporting, meeting preparation, dependency management, and project health.",
    url: "https://husn.io/solutions/",
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

export default function SolutionsIndex() {
  return (
    <div
      style={theme}
      className="min-h-screen bg-[var(--paper)] text-[var(--ink)] antialiased"
    >
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

      {/* Hero */}
      <section className="border-b border-[var(--mist)]">
        <div className="mx-auto max-w-[1140px] px-6 py-16 md:py-20">
          <span
            className={`${mono.className} block text-[11px] uppercase tracking-[0.18em] text-[var(--blue)]`}
          >
            Solutions
          </span>
          <h1
            className={`${serif.className} mt-3 max-w-[20ch] text-4xl font-medium leading-[1.05] tracking-[-0.01em] md:text-5xl`}
          >
            Everywhere a program quietly drifts, Husn is watching.
          </h1>
          <p className="mt-6 max-w-[58ch] text-lg leading-relaxed text-[var(--slate)]">
            Husn reads Jira, Slack, and your docs and tells the right people what
            changed, why it matters, and who is affected. Browse the ways teams
            put it to work, grouped by the problem they are trying to solve.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Cta href="/#demo">Book a demo</Cta>
            <Cta href={leadMagnet.href} ghost>
              {leadMagnet.label}
            </Cta>
          </div>
          <p
            className={`${mono.className} mt-6 text-[11px] uppercase tracking-[0.14em] text-[var(--slate)]`}
          >
            {seoPages.length} pages - {categoryOrder.length} categories - one
            read only layer
          </p>
        </div>
      </section>

      {/* Categories */}
      {categoryOrder.map((catKey, idx) => {
        const cat = categories[catKey];
        const pages = getPagesByCategory(catKey);
        if (pages.length === 0) return null;
        return (
          <section
            key={catKey}
            className={`border-b border-[var(--mist)] ${idx % 2 === 1 ? "bg-[var(--mist)]/35" : ""}`}
          >
            <div className="mx-auto max-w-[1140px] px-6 py-16 md:py-20">
              <div className="grid gap-6 md:grid-cols-[0.9fr_1.1fr] md:items-end">
                <div>
                  <div
                    className={`${mono.className} mb-3 text-[11px] uppercase tracking-[0.16em] text-[var(--slate)]`}
                  >
                    {String(idx + 1).padStart(2, "0")} / {cat.label}
                  </div>
                  <h2
                    className={`${serif.className} text-3xl font-medium leading-[1.1] md:text-4xl`}
                  >
                    {cat.label}
                  </h2>
                </div>
                <div>
                  <p className="leading-relaxed text-[var(--slate)]">
                    {cat.blurb}
                  </p>
                  <p
                    className={`${mono.className} mt-3 text-[11px] uppercase tracking-[0.12em] text-[var(--blue)]`}
                  >
                    {cat.cta}
                  </p>
                </div>
              </div>

              <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {pages.map((p) => (
                  <li key={p.slug}>
                    <Link
                      href={`/solutions/${p.slug}/`}
                      className="group flex h-full flex-col rounded-[2px] border border-[var(--mist)] bg-[var(--surface)] p-5 transition-colors hover:border-[var(--ink)]/30"
                    >
                      <div className="flex items-center justify-between gap-2">
                        <span
                          className={`${mono.className} text-[10px] uppercase tracking-[0.14em] text-[var(--slate)]`}
                        >
                          {typeLabels[p.type]}
                        </span>
                        <span className="text-[var(--blue)] transition-transform group-hover:translate-x-0.5">
                          &rarr;
                        </span>
                      </div>
                      <h3 className={`${serif.className} mt-3 text-lg leading-snug`}>
                        {p.title}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-[var(--slate)]">
                        {p.heroSubheadline}
                      </p>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        );
      })}

      {/* CTA */}
      <section id="demo" className="border-t border-[var(--mist)]">
        <div className="mx-auto max-w-[1140px] px-6 py-20 text-center md:py-28">
          <h2 className={`${serif.className} text-3xl font-medium md:text-5xl`}>
            See Husn on your own programs.
          </h2>
          <p className="mx-auto mt-4 max-w-[44ch] text-lg text-[var(--slate)]">
            Whatever brought you here, the fastest way to understand Husn is to
            point it at your own work for fifteen minutes.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Cta href="/#demo">Book a demo</Cta>
            <Cta href={leadMagnet.href} ghost>
              {leadMagnet.label}
            </Cta>
          </div>
        </div>
      </section>

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
