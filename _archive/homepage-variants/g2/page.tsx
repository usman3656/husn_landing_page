"use client";

/* G2 — "One version of reality" (ensemble winner). Scattered signals resolve
   into one blue through-line: the image IS the product. Newsreader + Inter +
   Plex Mono, warm bone paper, one blue accent, oxide only on real risk. */

import { Newsreader, IBM_Plex_Mono } from "next/font/google";

const serif = Newsreader({ subsets: ["latin"], weight: ["400", "500"], style: ["normal", "italic"], display: "swap" });
const mono = IBM_Plex_Mono({ subsets: ["latin"], weight: ["400", "500"], display: "swap" });

const t: React.CSSProperties = {
  ["--paper" as string]: "#F6F4EF",
  ["--ink" as string]: "#1B1D1E",
  ["--slate" as string]: "#5A6066",
  ["--blue" as string]: "#2C5CE6",
  ["--oxide" as string]: "#B23A2E",
  ["--mist" as string]: "#E8E4DB",
};

const BARS = Array.from({ length: 22 }, (_, i) => {
  const dx = ((i * 73) % 180) - 90;
  const dy = (((i * 131) % 70) - 35);
  const r = (((i * 47) % 24) - 12);
  const w = 30 + ((i * 53) % 55);
  return { dx, dy, r, w, blue: i === 11 };
});

export default function G2() {
  return (
    <div style={t} className="min-h-screen bg-[var(--paper)] text-[var(--ink)] antialiased">
      <style>{`
        @keyframes g2resolve { from { transform: translate(var(--dx), var(--dy)) rotate(var(--r)); opacity: .25 } to { transform: none; opacity: 1 } }
        .g2bar { animation: g2resolve 1.5s cubic-bezier(.2,.7,.2,1) both; }
      `}</style>

      <header className="border-b border-[var(--mist)]">
        <div className="mx-auto flex h-16 max-w-[1100px] items-center justify-between px-6">
          <span className={`${serif.className} text-xl`}>Husn</span>
          <nav className={`${mono.className} hidden gap-6 text-[11px] uppercase tracking-[0.14em] text-[var(--slate)] md:flex`}>
            <a href="#how">How it works</a><a href="#sees">What it sees</a><a href="#trust">Trust</a>
          </nav>
          <a href="#cta" className={`${mono.className} rounded-[2px] border border-[var(--ink)]/20 px-4 py-2 text-[11px] uppercase tracking-[0.12em]`}>See a sample brief</a>
        </div>
      </header>

      <section className="border-b border-[var(--mist)]">
        <div className="mx-auto grid max-w-[1100px] gap-10 px-6 py-20 md:grid-cols-2 md:py-28">
          <div className="flex flex-col justify-center">
            <p className="text-lg text-[var(--slate)]">Sixteen tools. A hundred updates. Everyone holding a different piece.</p>
            <h1 className={`${serif.className} mt-3 text-5xl font-medium leading-[1.04] tracking-[-0.01em] md:text-6xl`}>One version of reality.</h1>
            <p className="mt-6 max-w-[44ch] text-lg leading-relaxed text-[var(--slate)]">
              Husn sits above the tools you already use and connects the dots, so your
              whole team is working from the same picture.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#cta" className="rounded-[2px] bg-[var(--blue)] px-6 py-3 text-sm font-medium text-white">See it on your data</a>
              <a href="#how" className="rounded-[2px] border border-[var(--ink)]/20 px-6 py-3 text-sm font-medium">How it works</a>
            </div>
            <p className={`${mono.className} mt-6 text-[11px] uppercase tracking-[0.14em] text-[var(--slate)]`}>Read only · sits above Slack, Jira, email, docs, meetings</p>
          </div>

          <div className="flex items-center justify-center">
            <div className="flex w-full max-w-[360px] flex-col gap-2.5">
              {BARS.map((b, i) => (
                <div key={i} className="g2bar" style={{ ["--dx" as string]: `${b.dx}px`, ["--dy" as string]: `${b.dy}px`, ["--r" as string]: `${b.r}deg`, animationDelay: `${i * 22}ms` } as React.CSSProperties}>
                  <div style={{ width: b.blue ? "100%" : `${b.w}%`, height: b.blue ? 4 : 2, background: b.blue ? "var(--blue)" : "var(--ink)", opacity: b.blue ? 1 : 0.28, borderRadius: 2 }} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Section label="The real failure">
        <h2 className={`${serif.className} max-w-[24ch] text-3xl font-medium leading-[1.12] md:text-4xl`}>
          Organizations rarely fail for lack of information. They fail because everyone is holding a different piece of it.
        </h2>
        <div className={`${mono.className} mt-8 flex flex-wrap gap-x-8 gap-y-2 text-[12px] uppercase tracking-[0.12em] text-[var(--slate)]`}>
          <span>Context is incomplete</span><span>Dependencies are hidden</span><span>Ownership quietly drifts</span>
        </div>
      </Section>

      <Section id="sees" label="What Husn surfaces" alt>
        <div className="divide-y divide-[var(--mist)] border-y border-[var(--mist)]">
          {[
            ["What changed", "What moved since you last looked, and why it matters."],
            ["Hidden dependencies", "The initiative that just put yours at risk."],
            ["Emerging risk", "A problem while it is still small."],
            ["Drift", "Ownership and alignment slipping before anyone says so."],
          ].map(([k, v]) => (
            <div key={k} className="grid gap-2 py-6 md:grid-cols-[0.4fr_1fr]">
              <span className={`${mono.className} text-[12px] uppercase tracking-[0.14em] text-[var(--blue)]`}>{k}</span>
              <span className="text-lg text-[var(--ink)]">{v}</span>
            </div>
          ))}
        </div>
      </Section>

      <Section id="how" label="How it works">
        <div className="grid gap-8 md:grid-cols-3">
          {[
            ["Connect", "To the tools you already use. Read only."],
            ["Discover", "It finds the pattern that is already there."],
            ["Brief", "What matters, who is affected, what to do next."],
          ].map(([k, v], i) => (
            <div key={k}>
              <span className={`${mono.className} text-[12px] text-[var(--slate)]`}>0{i + 1}</span>
              <h3 className={`${serif.className} mt-2 text-xl`}>{k}</h3>
              <p className="mt-2 text-[var(--slate)]">{v}</p>
            </div>
          ))}
        </div>
        <p className={`${serif.className} mt-12 text-2xl italic text-[var(--slate)]`}>The pattern is not created. It is discovered.</p>
      </Section>

      <Section label="Before the room" alt>
        <div className="grid gap-10 md:grid-cols-2 md:items-center">
          <h2 className={`${serif.className} text-3xl font-medium leading-[1.1] md:text-4xl`}>Walk into any meeting already knowing what changed and what is at stake.</h2>
          <div className="rounded-[2px] border border-[var(--mist)] bg-white p-5">
            <div className={`${mono.className} flex justify-between border-b border-[var(--mist)] pb-3 text-[11px] uppercase tracking-[0.12em] text-[var(--slate)]`}><span>Husn · this week</span><span>3 things to know</span></div>
            <ul className="mt-3 space-y-3 text-sm">
              <li className="flex gap-3"><span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full" style={{ background: "var(--oxide)" }} />A launch dependency just slipped. Two teams are affected.</li>
              <li className="flex gap-3"><span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full" style={{ background: "var(--blue)" }} />Ownership of the data-migration moved last Thursday.</li>
              <li className="flex gap-3"><span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--slate)]" />A signed-off doc was quietly rewritten.</li>
            </ul>
          </div>
        </div>
      </Section>

      <Section id="trust" label="Trust">
        <h2 className={`${serif.className} text-3xl font-medium md:text-4xl`}>Read only. Husn watches and explains. It never acts in your tools.</h2>
      </Section>

      <section id="cta" className="border-t border-[var(--mist)]">
        <div className="mx-auto max-w-[1100px] px-6 py-20 text-center md:py-28">
          <h2 className={`${serif.className} text-3xl font-medium md:text-5xl`}>One version of reality. Then confident action.</h2>
          <a href="#cta" className="mt-8 inline-block rounded-[2px] bg-[var(--blue)] px-7 py-3 text-sm font-medium text-white">See it on your data</a>
        </div>
      </section>
    </div>
  );
}

function Section({ id, label, alt, children }: { id?: string; label: string; alt?: boolean; children: React.ReactNode }) {
  return (
    <section id={id} className={`border-b border-[var(--mist)] ${alt ? "bg-[var(--mist)]/35" : ""}`}>
      <div className="mx-auto max-w-[1100px] px-6 py-20 md:py-24">
        <div className="mb-8 font-mono text-[11px] uppercase tracking-[0.16em] text-[var(--slate)]">{label}</div>
        {children}
      </div>
    </section>
  );
}
