"use client";

/* G1 — "The Standing Brief". V2's editorial credibility fused with a structured
   intelligence-dashboard spine: an executive surface, not a feed. Fraunces +
   Inter + Plex Mono. Three-state semantic color (blue/oxide/verdant). */

import { Fraunces, IBM_Plex_Mono } from "next/font/google";

const serif = Fraunces({ subsets: ["latin"], weight: ["400", "500"], display: "swap" });
const mono = IBM_Plex_Mono({ subsets: ["latin"], weight: ["400", "500"], display: "swap" });

const t: React.CSSProperties = {
  ["--paper" as string]: "#F6F4EF",
  ["--surface" as string]: "#FFFFFF",
  ["--ink" as string]: "#1A1C1E",
  ["--slate" as string]: "#5B6166",
  ["--line" as string]: "#E2DED6",
  ["--blue" as string]: "#2C5BD6",
  ["--oxide" as string]: "#B23A2E",
  ["--verdant" as string]: "#3E7C59",
};

export default function G1() {
  return (
    <div style={t} className="min-h-screen bg-[var(--paper)] text-[var(--ink)] antialiased">
      <style>{`@keyframes g1in{from{opacity:0;transform:translateY(6px)}to{opacity:1;transform:none}}.g1row{animation:g1in .7s ease both}`}</style>

      <div className={`${mono.className} border-b border-[var(--line)] bg-[var(--paper)]`}>
        <div className="mx-auto flex max-w-[1140px] items-center justify-between px-6 py-2 text-[11px] uppercase tracking-[0.16em] text-[var(--slate)]">
          <span>Husn · standing brief</span>
          <span>Last reconciled 14:02</span>
        </div>
      </div>

      <header className="sticky top-0 z-30 border-b border-[var(--line)] bg-[var(--paper)]/90 backdrop-blur">
        <div className="mx-auto flex h-14 max-w-[1140px] items-center justify-between px-6">
          <span className={`${serif.className} text-xl`}>Husn</span>
          <nav className={`${mono.className} hidden gap-6 text-[11px] uppercase tracking-[0.14em] text-[var(--slate)] md:flex`}>
            <a href="#sees">What it surfaces</a><a href="#how">How it works</a><a href="#trust">Trust</a>
          </nav>
          <a href="#cta" className="rounded-[2px] bg-[var(--blue)] px-4 py-2 text-[13px] font-medium text-white">Request access</a>
        </div>
      </header>

      <section className="border-b border-[var(--line)]">
        <div className="mx-auto grid max-w-[1140px] gap-10 px-6 py-20 md:grid-cols-[1.05fr_1fr] md:py-24">
          <div className="flex flex-col justify-center">
            <h1 className={`${serif.className} text-4xl font-medium leading-[1.06] tracking-[-0.01em] md:text-[3.3rem]`}>
              Everyone is looking at the same tools. Almost no one is looking at the same picture.
            </h1>
            <p className="mt-6 max-w-[48ch] text-lg leading-relaxed text-[var(--slate)]">
              Husn is an intelligence layer for shared understanding. It reads across Slack,
              Jira, email, meetings, and docs to surface what changed, why it matters, and
              what to do next. Read only. It sits above the tools you already use.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#cta" className="rounded-[2px] bg-[var(--blue)] px-6 py-3 text-sm font-medium text-white">Request access</a>
              <a href="#sees" className="rounded-[2px] border border-[var(--ink)]/20 px-6 py-3 text-sm font-medium">See a live brief</a>
            </div>
          </div>

          <div className="rounded-[2px] border border-[var(--line)] bg-[var(--surface)]" style={{ boxShadow: "0 1px 2px rgba(26,28,30,.06)" }}>
            <div className={`${mono.className} flex justify-between border-b border-[var(--line)] px-4 py-3 text-[11px] uppercase tracking-[0.12em] text-[var(--slate)]`}>
              <span>Standing brief</span><span>4 signals</span>
            </div>
            <ul className="px-4 py-2">
              {[
                ["risk", "Launch dependency slipped. Two teams affected.", "var(--oxide)", "Risk"],
                ["change", "Ownership of data migration moved Thursday.", "var(--blue)", "Changed"],
                ["aligned", "Security review signed off by all owners.", "var(--verdant)", "Aligned"],
                ["change", "PRD edited after sign-off.", "var(--blue)", "Changed"],
              ].map(([k, txt, c, tag], i) => (
                <li key={i} className="g1row flex items-start justify-between gap-3 border-b border-[var(--line)] py-3 last:border-0" style={{ animationDelay: `${i * 120}ms` }}>
                  <div className="flex items-start gap-3">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full" style={{ background: c as string }} />
                    <span className="text-sm">{txt}</span>
                  </div>
                  <span className={`${mono.className} shrink-0 text-[10px] uppercase tracking-[0.1em]`} style={{ color: c as string }}>{tag}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <Sec id="sees" label="What it surfaces">
        <div className="divide-y divide-[var(--line)] border-y border-[var(--line)]">
          {[
            "What changed. And why it actually matters.",
            "Hidden dependencies between initiatives, made visible.",
            "Risks, surfaced before they escalate.",
            "Drift. Subtle shifts in ownership and alignment.",
          ].map((v, i) => (
            <div key={i} className="flex items-baseline gap-5 py-5">
              <span className={`${mono.className} text-[12px] text-[var(--slate)]`}>0{i + 1}</span>
              <span className={`${serif.className} text-xl md:text-2xl`}>{v}</span>
            </div>
          ))}
        </div>
      </Sec>

      <Sec id="how" label="How it works" alt>
        <div className="grid gap-8 md:grid-cols-3">
          {[["Connect", "Read only. Husn observes, it never acts in your tools."], ["Reconcile", "It lines up what every tool is saying against each other."], ["Brief", "What matters, who is affected, what to do next."]].map(([k, v], i) => (
            <div key={k}><span className={`${mono.className} text-[12px] text-[var(--slate)]`}>0{i + 1}</span><h3 className={`${serif.className} mt-2 text-xl`}>{k}</h3><p className="mt-2 text-[var(--slate)]">{v}</p></div>
          ))}
        </div>
        <p className={`${serif.className} mt-12 text-2xl italic text-[var(--slate)]`}>The pattern is not created. It is discovered.</p>
      </Sec>

      <Sec id="trust" label="Trust">
        <h2 className={`${serif.className} max-w-[22ch] text-3xl font-medium md:text-4xl`}>Read only, by design. Husn explains your organization. It never changes it.</h2>
      </Sec>

      <section id="cta" className="border-t border-[var(--line)]">
        <div className="mx-auto max-w-[1140px] px-6 py-20 text-center md:py-24">
          <h2 className={`${serif.className} text-3xl font-medium md:text-5xl`}>Act on one version of reality.</h2>
          <a href="#cta" className="mt-8 inline-block rounded-[2px] bg-[var(--blue)] px-7 py-3 text-sm font-medium text-white">Request access</a>
        </div>
      </section>
    </div>
  );
}

function Sec({ id, label, alt, children }: { id?: string; label: string; alt?: boolean; children: React.ReactNode }) {
  return (
    <section id={id} className={`border-b border-[var(--line)] ${alt ? "bg-[var(--line)]/25" : ""}`}>
      <div className="mx-auto max-w-[1140px] px-6 py-20 md:py-24">
        <div className="mb-8 font-mono text-[11px] uppercase tracking-[0.16em] text-[var(--slate)]">{label}</div>
        {children}
      </div>
    </section>
  );
}
