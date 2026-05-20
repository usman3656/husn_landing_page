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
          className="btn-primary inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-sm font-semibold"
        >
          {nav.cta.label}
          <span aria-hidden="true">→</span>
        </a>
      </div>
    </header>
  );
}
