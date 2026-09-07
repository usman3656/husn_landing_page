import type { ReactNode } from "react";

/* Shared primitives for the single-page site. The look is an editorial
   greige page framed by hairline gutters, serif display type, and a lime
   accent reserved for primary actions. */

/** Page column with the hairline gutters that frame every section. */
export function Frame({
  children,
  className = "",
  id,
}: {
  children: ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <div id={id} className={`mx-auto w-full max-w-[1266px] border-x border-black/10 ${className}`}>
      {children}
    </div>
  );
}

/** Full-width section band with a bottom hairline. */
export function Section({
  children,
  className = "",
  id,
}: {
  children: ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <section id={id} className={`border-b border-black/10 ${className}`}>
      {children}
    </section>
  );
}

/** Slash-prefixed section label, e.g. "/ What we do". */
export function Label({ children, dark = false }: { children: ReactNode; dark?: boolean }) {
  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full border px-3 py-1 text-sm ${
        dark
          ? "border-white/15 bg-black/60 text-white"
          : "border-black/10 bg-black/[0.05] text-ink"
      }`}
    >
      <span aria-hidden="true">/</span>
      {children}
    </span>
  );
}

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "lime" | "black" | "outline" | "outline-light";
  block?: boolean;
  className?: string;
};

export function Button({ href, children, variant = "lime", block = false, className = "" }: ButtonProps) {
  const base =
    "inline-flex items-center justify-center rounded-full px-5 py-2.5 text-[15px] font-medium leading-tight transition-opacity hover:opacity-85 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lime";
  const look = {
    lime: "bg-lime text-black",
    black: "bg-black text-white",
    outline: "border border-black text-black",
    "outline-light": "border border-white text-white",
  }[variant];
  return (
    <a href={href} className={`${base} ${look} ${block ? "w-full" : ""} ${className}`}>
      {children}
    </a>
  );
}

/** Check-mark list item used across service and plan cards. */
export function Check({ children }: { children: ReactNode }) {
  return (
    <li className="flex items-start gap-3 text-[15px] leading-6 text-muted">
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        aria-hidden="true"
        className="mt-1 shrink-0 text-black/60"
      >
        <path d="M3 8.5l3 3 7-7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
      <span>{children}</span>
    </li>
  );
}

/** Lime circular chevron button used on the hero stat cards. */
export function ArrowButton({ href, label }: { href: string; label: string }) {
  return (
    <a
      href={href}
      aria-label={label}
      className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-lime text-black transition-opacity hover:opacity-85"
    >
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M9 6l6 6-6 6" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </a>
  );
}

/** Brand glyph: two slanted strokes, echoing the double-slash label motif. */
export function Glyph({ size = 22, className = "" }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true" className={className}>
      <path d="M8 4L3 20M15 4l-5 16M21 4l-5 16" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
    </svg>
  );
}

export function Wordmark({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-2 ${className}`}>
      <Glyph />
      <span className="font-sans text-[22px] font-bold uppercase tracking-tight">Husn</span>
    </span>
  );
}
