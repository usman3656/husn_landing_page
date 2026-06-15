"use client";

/* G3 — "The Resolve". Stakes everything on one cinematic image: scattered signal
   fragments settle into a single readable constellation on a dark field, then the
   page returns to calm bone paper. Newsreader + Inter + Plex Mono. */

import { Newsreader, IBM_Plex_Mono } from "next/font/google";

const serif = Newsreader({ subsets: ["latin"], weight: ["400", "500"], style: ["normal", "italic"], display: "swap" });
const mono = IBM_Plex_Mono({ subsets: ["latin"], weight: ["400"], display: "swap" });

const t: React.CSSProperties = {
  ["--bone" as string]: "#F4F2ED",
  ["--ink" as string]: "#15171A",
  ["--muted" as string]: "#5B6068",
  ["--field" as string]: "#0E1116",
  ["--blue" as string]: "#2F5FE0",
  ["--glow" as string]: "#7FA2F0",
  ["--oxide" as string]: "#B5482E",
};

const DOTS = Array.from({ length: 34 }, (_, i) => {
  const fx = ((i * 89) % 100);
  const fy = ((i * 53) % 100);
  const tx = 18 + ((i * 64) % 64);
  const ty = 20 + ((i % 6) * 12);
  return { fx, fy, tx, ty, key: i };
});

export default function G3() {
  return (
    <div style={t} className="min-h-screen bg-[var(--bone)] text-[var(--ink)] antialiased">
      <style>{`@keyframes g3settle{from{left:var(--fx);top:var(--fy);opacity:.2}to{left:var(--tx);top:var(--ty);opacity:1}}.g3dot{animation:g3settle 1.8s cubic-bezier(.2,.7,.2,1) both}`}</style>

      <header className="absolute left-0 right-0 z-20">
        <div className="mx-auto flex h-16 max-w-[1120px] items-center justify-between px-6">
          <span className={`${serif.className} text-xl text-white`}>Husn</span>
          <nav className={`${mono.className} hidden gap-6 text-[11px] uppercase tracking-[0.14em] text-white/60 md:flex`}><a href="#problem">Vision</a><a href="#sees">How it works</a><a href="#cta">Request access</a></nav>
        </div>
      </header>

      <section className="relative overflow-hidden" style={{ background: "var(--field)" }}>
        <div className="relative mx-auto flex min-h-[88vh] max-w-[1120px] flex-col justify-center px-6 py-28">
          <div className="absolute inset-0" aria-hidden="true">
            {DOTS.map((d) => (
              <span key={d.key} className="g3dot absolute h-[3px] rounded-full" style={{ width: d.key % 9 === 0 ? 26 : 4, background: d.key % 9 === 0 ? "var(--blue)" : "var(--glow)", opacity: 0.5, ["--fx" as string]: `${d.fx}%`, ["--fy" as string]: `${d.fy}%`, ["--tx" as string]: `${d.tx}%`, ["--ty" as string]: `${d.ty}%`, animationDelay: `${d.key * 28}ms` } as React.CSSProperties} />
            ))}
          </div>
          <div className="relative max-w-[20ch]">
            <h1 className={`${serif.className} text-5xl font-medium leading-[1.03] tracking-[-0.01em] text-white md:text-7xl`}>The pattern was always there.</h1>
            <p className="mt-6 max-w-[44ch] text-lg leading-relaxed text-white/70">
              Husn is the intelligence layer for shared understanding. It sits above the tools
              you already use and reveals what they cannot show on their own.
            </p>
            <a href="#cta" className="mt-8 inline-block rounded-[2px] bg-white px-6 py-3 text-sm font-medium text-[var(--field)]">Request access</a>
          </div>
        </div>
      </section>

      <Sec id="problem" label="The real failure">
        <h2 className={`${serif.className} max-w-[20ch] text-3xl font-medium leading-[1.1] md:text-5xl`}>Organizations rarely fail for lack of information.</h2>
        <p className="mt-6 max-w-[60ch] text-lg leading-relaxed text-[var(--muted)]">
          They fail because it is scattered. Context is incomplete, dependencies are hidden,
          ownership drifts, and signals are buried in noise. So teams operate on different
          versions of reality.
        </p>
      </Sec>

      <Sec id="sees" label="What Husn sees" alt>
        <div className="divide-y divide-[var(--ink)]/10 border-y border-[var(--ink)]/10">
          {["Surfaces what changed and why it matters", "Reveals hidden dependencies between initiatives", "Detects drift in ownership and alignment", "Prepares you before the meeting that matters"].map((v, i) => (
            <div key={i} className="flex items-baseline gap-5 py-5"><span className={`${mono.className} text-[12px] text-[var(--muted)]`}>0{i + 1}</span><span className={`${serif.className} text-xl md:text-2xl`}>{v}</span></div>
          ))}
        </div>
      </Sec>

      <section id="cta" className="border-t border-[var(--ink)]/10">
        <div className="mx-auto max-w-[1120px] px-6 py-20 text-center md:py-28">
          <h2 className={`${serif.className} text-3xl font-medium md:text-5xl`}>See the whole picture, at last.</h2>
          <a href="#cta" className="mt-8 inline-block rounded-[2px] px-7 py-3 text-sm font-medium text-white" style={{ background: "var(--field)" }}>Request access</a>
        </div>
      </section>
    </div>
  );
}

function Sec({ id, label, alt, children }: { id?: string; label: string; alt?: boolean; children: React.ReactNode }) {
  return (
    <section id={id} className={`border-b border-[var(--ink)]/10 ${alt ? "bg-[var(--ink)]/[0.03]" : ""}`}>
      <div className="mx-auto max-w-[1120px] px-6 py-20 md:py-24">
        <div className="mb-8 font-mono text-[11px] uppercase tracking-[0.16em] text-[var(--muted)]">{label}</div>
        {children}
      </div>
    </section>
  );
}
