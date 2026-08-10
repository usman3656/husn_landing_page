"use client";

/* G4 — "One version of reality" (the surface). The page behaves like the product:
   the brief card sits quiet, then surfaces the one thing that matters.
   Newsreader + Inter + Plex Mono. Blue = matters, oxide = risk, green = aligned. */

import { Newsreader, IBM_Plex_Mono } from "next/font/google";

const serif = Newsreader({ subsets: ["latin"], weight: ["400", "500"], display: "swap" });
const mono = IBM_Plex_Mono({ subsets: ["latin"], weight: ["400", "500"], display: "swap" });

const t: React.CSSProperties = {
  ["--ink" as string]: "#16181D",
  ["--paper" as string]: "#F7F6F3",
  ["--surface" as string]: "#FFFFFF",
  ["--line" as string]: "#E3E1DB",
  ["--muted" as string]: "#6B6F76",
  ["--blue" as string]: "#2D5BD7",
  ["--oxide" as string]: "#B4452E",
  ["--green" as string]: "#3B7A57",
};

export default function G4() {
  return (
    <div style={t} className="min-h-screen bg-[var(--paper)] text-[var(--ink)] antialiased">
      <style>{`@keyframes g4surface{0%,55%{opacity:0;transform:translateY(8px)}100%{opacity:1;transform:none}}.g4detect{animation:g4surface 3s ease both}@keyframes g4dim{0%,55%{opacity:1}100%{opacity:.5}}.g4dim{animation:g4dim 3s ease both}`}</style>

      <header className="border-b border-[var(--line)]">
        <div className="mx-auto flex h-16 max-w-[1080px] items-center justify-between px-6">
          <span className={`${serif.className} text-xl`}>Husn</span>
          <nav className="hidden gap-6 text-sm text-[var(--muted)] md:flex"><a href="#sees">What it sees</a><a href="#how">How it works</a><a href="#trust">Trust</a></nav>
          <a href="#cta" className="rounded-lg bg-[var(--blue)] px-4 py-2 text-[13px] font-medium text-white">Book a demo</a>
        </div>
      </header>

      <section className="border-b border-[var(--line)]">
        <div className="mx-auto grid max-w-[1080px] gap-12 px-6 py-20 md:grid-cols-2 md:items-center md:py-28">
          <div>
            <h1 className={`${serif.className} text-4xl font-medium leading-[1.06] tracking-[-0.01em] md:text-6xl`}>Your organization already knows. The signal is just scattered.</h1>
            <p className="mt-6 max-w-[46ch] text-lg leading-relaxed text-[var(--muted)]">
              Husn is an intelligence layer for shared understanding. It sits above the tools you
              already use and surfaces what changed, why it matters, and what to do next.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#cta" className="rounded-lg bg-[var(--blue)] px-6 py-3 text-sm font-medium text-white">Book a demo</a>
              <a href="#how" className="rounded-lg border border-[var(--ink)]/15 px-6 py-3 text-sm font-medium">See how it works</a>
            </div>
          </div>

          <div className="rounded-xl border border-[var(--line)] bg-[var(--surface)]" style={{ boxShadow: "0 1px 2px rgba(22,24,29,.06)" }}>
            <div className={`${mono.className} flex justify-between border-b border-[var(--line)] px-4 py-3 text-[11px] uppercase tracking-[0.12em] text-[var(--muted)]`}><span>Husn · live</span><span>watching</span></div>
            <ul className="px-4 py-2">
              {["Roadmap on track", "Hiring plan aligned", "Budget review on track"].map((x) => (
                <li key={x} className="g4dim flex items-center gap-3 border-b border-[var(--line)] py-3 text-sm last:border-0">
                  <span className="h-1.5 w-1.5 rounded-full" style={{ background: "var(--green)" }} />{x}
                </li>
              ))}
            </ul>
            <div className="g4detect border-t border-[var(--line)] px-4 py-4">
              <div className="flex items-center gap-2">
                <span className={`${mono.className} rounded-[3px] px-1.5 py-0.5 text-[10px] uppercase tracking-[0.1em] text-white`} style={{ background: "var(--oxide)" }}>Detected</span>
                <span className={`${mono.className} text-[11px] text-[var(--muted)]`}>2 min ago</span>
              </div>
              <p className="mt-2 text-sm">A dependency for the launch just slipped. Two teams are affected, and ownership is unclear.</p>
            </div>
          </div>
        </div>
      </section>

      <Sec id="sees" label="What Husn sees">
        <div className="grid gap-px overflow-hidden rounded-xl border border-[var(--line)] bg-[var(--line)] md:grid-cols-2">
          {["What changed and why it matters", "Hidden dependencies between initiatives", "Risks before they escalate", "Drift in ownership and alignment"].map((v) => (
            <div key={v} className="bg-[var(--paper)] p-7"><p className={`${serif.className} text-xl`}>{v}</p></div>
          ))}
        </div>
      </Sec>

      <Sec id="how" label="How it works" alt>
        <div className="grid gap-8 md:grid-cols-3">
          {[["Connects", "Read only, to Slack, Jira, email, docs, meetings."], ["Notices", "Finds the pattern already in your data."], ["Prepares you", "What matters, who is affected, what to do next."]].map(([k, v], i) => (
            <div key={k}><span className={`${mono.className} text-[12px] text-[var(--muted)]`}>0{i + 1}</span><h3 className={`${serif.className} mt-2 text-xl`}>{k}</h3><p className="mt-2 text-[var(--muted)]">{v}</p></div>
          ))}
        </div>
      </Sec>

      <Sec id="trust" label="For leaders">
        <h2 className={`${serif.className} max-w-[22ch] text-3xl font-medium md:text-4xl`}>Walk in already knowing. Clarity before the meeting, alignment at scale.</h2>
        <p className="mt-5 text-lg text-[var(--muted)]">Read only. Above your tools, never inside them.</p>
      </Sec>

      <section id="cta" className="border-t border-[var(--line)]">
        <div className="mx-auto max-w-[1080px] px-6 py-20 text-center md:py-28">
          <h2 className={`${serif.className} text-3xl font-medium md:text-5xl`}>Move from scattered to aligned.</h2>
          <a href="#cta" className="mt-8 inline-block rounded-lg bg-[var(--blue)] px-7 py-3 text-sm font-medium text-white">Book a demo</a>
        </div>
      </section>
    </div>
  );
}

function Sec({ id, label, alt, children }: { id?: string; label: string; alt?: boolean; children: React.ReactNode }) {
  return (
    <section id={id} className={`border-b border-[var(--line)] ${alt ? "bg-white/40" : ""}`}>
      <div className="mx-auto max-w-[1080px] px-6 py-20 md:py-24">
        <div className="mb-8 font-mono text-[11px] uppercase tracking-[0.16em] text-[var(--muted)]">{label}</div>
        {children}
      </div>
    </section>
  );
}
