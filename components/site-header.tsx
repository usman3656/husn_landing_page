"use client";

import { useState } from "react";
import Link from "next/link";
import { Newsreader, IBM_Plex_Mono } from "next/font/google";

const serif = Newsreader({ subsets: ["latin"], weight: ["400", "500"], style: ["normal", "italic"], display: "swap" });
const mono = IBM_Plex_Mono({ subsets: ["latin"], weight: ["400", "500"], display: "swap" });

// "Research & Publications" doesn't fit the desktop nav at Tailwind's default
// md (768px) or even lg (1024px) breakpoint alongside the other three links
// and the CTA button — verified overflow up to ~1040px, clear by 1050px, so
// the nav/hamburger toggle below uses a custom min-[1100px] breakpoint.
// NOTE: that class must appear as a literal string, not be built from a
// variable — Tailwind's build-time scanner only generates CSS for class
// names it can find as plain text in the source; a template-interpolated
// breakpoint never produces a matching rule, so `hidden` wins unconditionally
// at every width (this broke the desktop nav entirely until caught in review).

function navLinks(variant: "home" | "subpage") {
  const prefix = variant === "home" ? "" : "/";
  // Pricing is a homepage-only anchor section; subpages never linked to it.
  const pricing = variant === "home" ? ([[`${prefix}#pricing`, "Pricing"]] as const) : ([] as const);
  return [
    [`${prefix}#how`, "How it works"],
    [`${prefix}#founders`, "Founders"],
    ...pricing,
    ["/research/", "Research & Publications"],
  ] as const;
}

export function SiteHeader({
  variant = "subpage",
  activeHref,
}: {
  variant?: "home" | "subpage";
  activeHref?: string;
}) {
  const [menuOpen, setMenuOpen] = useState(false);
  const links = navLinks(variant);

  return (
    <header className="sticky top-0 z-40 border-b border-[var(--mist)] bg-[var(--paper)]/85 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-[1140px] items-center justify-between px-6">
        <Link href="/" className={`${serif.className} text-xl`}>
          Husn
        </Link>
        <nav
          className={`${mono.className} hidden gap-6 text-[11px] uppercase tracking-[0.14em] text-[var(--slate)] min-[1100px]:flex`}
        >
          {links.map(([href, label]) => (
            <Link key={href} href={href} className={href === activeHref ? "text-[var(--ink)]" : undefined}>
              {label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <Link
            href={variant === "home" ? "#demo" : "/#demo"}
            className="inline-flex items-center gap-2 rounded-[2px] bg-[var(--ink)] px-5 py-3 text-sm font-medium text-[var(--paper)] transition-opacity hover:opacity-90"
          >
            Book a demo
          </Link>
          <button
            type="button"
            onClick={() => setMenuOpen((v) => !v)}
            aria-expanded={menuOpen}
            aria-controls="mobile-nav"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            className="grid h-9 w-9 shrink-0 place-items-center rounded-[2px] border border-[var(--ink)]/25 text-[var(--ink)] min-[1100px]:hidden"
          >
            <svg width="18" height="18" viewBox="0 0 18 18" aria-hidden="true">
              {menuOpen ? (
                <path d="M3 3l12 12M15 3L3 15" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
              ) : (
                <path d="M2 4.5h14M2 9h14M2 13.5h14" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
              )}
            </svg>
          </button>
        </div>
      </div>
      {menuOpen && (
        <nav
          id="mobile-nav"
          className={`${mono.className} flex flex-col gap-1 border-t border-[var(--mist)] bg-[var(--paper)] px-6 py-4 text-[13px] uppercase tracking-[0.14em] text-[var(--slate)] min-[1100px]:hidden`}
        >
          {links.map(([href, label]) => (
            <Link key={href} href={href} onClick={() => setMenuOpen(false)} className="py-2">
              {label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
