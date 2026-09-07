import { nav } from "../content";
import { Wordmark } from "./ui";

/* Floating header over the hero: wordmark left, a black pill of anchor links
   and a lime call-to-action right. Not sticky, matching the reference. */
export function Nav() {
  return (
    <header className="absolute inset-x-0 top-0 z-30">
      <div className="mx-auto flex max-w-[1266px] items-center justify-between px-6 py-5 md:px-10">
        <a href="#top" aria-label="Husn home" className="text-white">
          <Wordmark />
        </a>

        <nav aria-label="Primary" className="hidden items-center gap-1 rounded-full bg-black p-1.5 pl-6 md:flex">
          {nav.links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="px-3 text-[15px] text-white/70 transition-colors hover:text-white"
            >
              {l.label}
            </a>
          ))}
          <a
            href={nav.cta.href}
            className="ml-2 rounded-full bg-lime px-5 py-2.5 text-[15px] font-medium text-black transition-opacity hover:opacity-85"
          >
            {nav.cta.label}
          </a>
        </nav>

        {/* Mobile: native disclosure, no JavaScript needed */}
        <details className="group relative md:hidden">
          <summary
            aria-label="Open menu"
            className="flex h-10 w-10 cursor-pointer list-none items-center justify-center rounded-full bg-black text-white [&::-webkit-details-marker]:hidden"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true" className="group-open:hidden">
              <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true" className="hidden group-open:block">
              <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </summary>
          <div className="absolute right-0 top-12 w-56 rounded-2xl bg-black p-2 shadow-xl">
            {nav.links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="block rounded-lg px-3 py-2.5 text-[15px] text-white/80 hover:bg-white/10 hover:text-white"
              >
                {l.label}
              </a>
            ))}
            <a
              href={nav.cta.href}
              className="mt-1 block rounded-full bg-lime px-4 py-2.5 text-center text-[15px] font-medium text-black"
            >
              {nav.cta.label}
            </a>
          </div>
        </details>
      </div>
    </header>
  );
}
