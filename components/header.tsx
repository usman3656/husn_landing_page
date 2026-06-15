import Link from "next/link";
import { nav } from "@/lib/content";
import Wordmark from "@/components/brand/wordmark";

export function Header() {
  return (
    <header className="sticky top-0 z-30 border-b border-ink/[0.06] bg-paper/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-page items-center justify-between px-6 py-3.5">
        <Link href="/" aria-label="Husn home" className="text-ink">
          <Wordmark />
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-8 md:flex">
          {nav.links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-ink-muted transition-colors hover:text-ink"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <a
          href={nav.cta.href}
          className="btn-primary hidden items-center gap-1.5 rounded-full px-4 py-2 text-sm font-semibold md:inline-flex"
        >
          {nav.cta.label}
          <span aria-hidden="true">→</span>
        </a>

        {/* Mobile menu — native <details>, no JS required */}
        <details className="group relative md:hidden">
          <summary
            aria-label="Open menu"
            className="flex h-9 w-9 cursor-pointer list-none items-center justify-center rounded-lg border border-ink/10 text-ink [&::-webkit-details-marker]:hidden"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true" className="group-open:hidden">
              <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true" className="hidden group-open:block">
              <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </summary>

          <div className="absolute right-0 top-12 w-56 rounded-2xl border border-ink/[0.08] bg-white p-2 shadow-lift">
            {nav.links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="block rounded-lg px-3 py-2.5 text-sm font-medium text-ink-muted transition-colors hover:bg-paper-dim hover:text-ink"
              >
                {l.label}
              </a>
            ))}
            <a
              href={nav.cta.href}
              className="btn-primary mt-1 flex items-center justify-center gap-1.5 rounded-lg px-4 py-2.5 text-sm font-semibold"
            >
              {nav.cta.label}
              <span aria-hidden="true">→</span>
            </a>
          </div>
        </details>
      </div>
    </header>
  );
}
