import Link from "next/link";
import { footer } from "@/lib/content";
import Wordmark from "@/components/brand/wordmark";

export function Footer() {
  return (
    <footer className="border-t border-ink/[0.06] bg-paper">
      <div className="mx-auto flex max-w-page flex-col gap-6 px-6 py-12 md:flex-row md:items-center md:justify-between">
        <Wordmark size="sm" className="text-ink" />
        <div className="flex flex-col gap-3 text-xs text-ink-muted md:flex-row md:items-center md:gap-6">
          <p>{footer.copyright}</p>
          <ul className="flex flex-wrap items-center gap-5">
            {footer.legal.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="transition-colors hover:text-ink">
                  {l.label}
                </Link>
              </li>
            ))}
            <li>
              <a href="mailto:hello@husn.io" className="transition-colors hover:text-ink">
                hello@husn.io
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
