"use client";

/* FINAL — G2's editorial calm merged with the current site's strengths:
   audience-clear taglines, the real logo orbital, the brief artifact high in the
   hero, varied CTAs (dark ink, not blue), and a restrained staggered load reveal.
   Newsreader + Inter + Plex Mono, warm bone paper. Blue stays a meaning-accent. */

import { Newsreader, IBM_Plex_Mono } from "next/font/google";
import { OrbitalGraphic } from "@/components/orbital-graphic";

const serif = Newsreader({ subsets: ["latin"], weight: ["400", "500"], style: ["normal", "italic"], display: "swap" });
const mono = IBM_Plex_Mono({ subsets: ["latin"], weight: ["400", "500"], display: "swap" });

const t: React.CSSProperties = {
  ["--paper" as string]: "#F6F4EF",
  ["--surface" as string]: "#FFFFFF",
  ["--ink" as string]: "#1B1D1E",
  ["--slate" as string]: "#5A6066",
  ["--mist" as string]: "#E8E4DB",
  ["--blue" as string]: "#2C5CE6",
  ["--oxide" as string]: "#B23A2E",
};

function Cta({ children, href = "#demo", ghost = false }: { children: React.ReactNode; href?: string; ghost?: boolean }) {
  return (
    <a href={href} className={ghost
      ? "inline-flex items-center gap-2 rounded-[2px] border border-[var(--ink)]/25 px-5 py-3 text-sm font-medium text-[var(--ink)] transition-colors hover:border-[var(--ink)]"
      : "inline-flex items-center gap-2 rounded-[2px] bg-[var(--ink)] px-5 py-3 text-sm font-medium text-[var(--paper)] transition-opacity hover:opacity-90"}>
      {children}
    </a>
  );
}

export default function Final() {
  return (
    <div style={t} className="min-h-screen bg-[var(--paper)] text-[var(--ink)] antialiased">
      <style>{`@keyframes finin{from{opacity:0;transform:translateY(10px)}to{opacity:1;transform:none}}.finin{animation:finin .7s cubic-bezier(.2,.7,.2,1) both}`}</style>

      <header className="sticky top-0 z-40 border-b border-[var(--mist)] bg-[var(--paper)]/85 backdrop-blur">
        <div className="mx-auto flex h-16 max-w-[1140px] items-center justify-between px-6">
          <span className={`${serif.className} text-xl`}>Husn</span>
          <nav className={`${mono.className} hidden gap-6 text-[11px] uppercase tracking-[0.14em] text-[var(--slate)] md:flex`}>
            <a href="#how">How it works</a><a href="#sees">What it sees</a><a href="#trust">Trust</a><a href="#pricing">Pricing</a>
          </nav>
          <Cta href="#demo">Book a demo</Cta>
        </div>
      </header>

      <section className="border-b border-[var(--mist)]">
        <div className="mx-auto grid max-w-[1140px] gap-12 px-6 py-16 md:grid-cols-[1.05fr_1fr] md:items-center md:py-20">
          <div>
            <span className={`${mono.className} finin block text-[11px] uppercase tracking-[0.18em] text-[var(--blue)]`} style={{ animationDelay: "0ms" }}>For leaders of complex organizations</span>
            <p className="finin mt-4 text-lg text-[var(--slate)]" style={{ animationDelay: "90ms" }}>Sixteen tools. A hundred updates. Everyone holding a different piece.</p>
            <h1 className={`${serif.className} finin mt-2 text-5xl font-medium leading-[1.03] tracking-[-0.01em] md:text-6xl`} style={{ animationDelay: "180ms" }}>One version of reality.</h1>
            <p className="finin mt-6 max-w-[46ch] text-lg leading-relaxed text-[var(--slate)]" style={{ animationDelay: "300ms" }}>
              Husn is an intelligence layer that sits above the tools your organization already
              uses and turns scattered signals into one shared picture, so leaders see what
              changed, why it matters, who is affected, and what to do next.
            </p>
            <div className="finin mt-8 flex flex-wrap gap-3" style={{ animationDelay: "420ms" }}>
              <Cta href="#demo">Book a demo</Cta>
              <Cta href="#brief" ghost>See a sample brief</Cta>
            </div>
            <p className={`${mono.className} finin mt-6 text-[11px] uppercase tracking-[0.14em] text-[var(--slate)]`} style={{ animationDelay: "540ms" }}>Read only · sits above Slack, Jira, email, docs, meetings</p>
          </div>

          <div id="brief" className="finin rounded-[2px] border border-[var(--mist)] bg-[var(--surface)]" style={{ animationDelay: "360ms", boxShadow: "0 1px 2px rgba(27,29,30,.06), 0 24px 48px -34px rgba(27,29,30,.2)" }}>
            <div className={`${mono.className} flex items-center justify-between border-b border-[var(--mist)] px-4 py-3 text-[11px] uppercase tracking-[0.12em] text-[var(--slate)]`}>
              <span>Husn brief · this week</span><span>3 things to know</span>
            </div>
            <ul className="px-4 py-1">
              {[
                ["A launch dependency just slipped. Two teams are affected.", "var(--oxide)", "Risk"],
                ["Ownership of the data migration moved last Thursday.", "var(--blue)", "Changed"],
                ["A signed-off doc was quietly rewritten.", "var(--slate)", "Watch"],
              ].map(([txt, c, tag], i) => (
                <li key={i} className="finin flex items-start justify-between gap-3 border-b border-[var(--mist)] py-3.5 last:border-0" style={{ animationDelay: `${640 + i * 130}ms` }}>
                  <div className="flex items-start gap-3"><span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full" style={{ background: c as string }} /><span className="text-sm">{txt}</span></div>
                  <span className={`${mono.className} shrink-0 text-[10px] uppercase tracking-[0.1em]`} style={{ color: c as string }}>{tag}</span>
                </li>
              ))}
            </ul>
            <div className="flex items-center justify-between border-t border-[var(--mist)] px-4 py-3">
              <span className={`${mono.className} text-[11px] uppercase tracking-[0.12em] text-[var(--slate)]`}>4 people affected · 1 conflict</span>
              <a href="#demo" className="text-sm font-medium text-[var(--blue)]">Open brief →</a>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-[var(--mist)] bg-[var(--mist)]/35">
        <div className="mx-auto flex max-w-[1140px] flex-col items-start gap-6 px-6 py-12 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className={`${serif.className} text-2xl font-medium md:text-3xl`}>Built for the people who have to decide.</h2>
            <div className={`${mono.className} mt-3 flex flex-wrap gap-x-6 gap-y-2 text-[12px] uppercase tracking-[0.1em] text-[var(--slate)]`}>
              <span>Founders &amp; CEOs</span><span>Program &amp; ops leaders</span><span>Heads of engineering &amp; product</span><span>Chiefs of staff</span>
            </div>
          </div>
          <Cta href="#demo">See it on your org</Cta>
        </div>
      </section>

      <section className="border-b border-[var(--mist)]">
        <div className="mx-auto grid max-w-[1140px] items-center gap-10 px-6 py-20 md:grid-cols-[0.8fr_1.2fr] md:py-24">
          <div className="max-w-md">
            <div className={`${mono.className} mb-6 text-[11px] uppercase tracking-[0.16em] text-[var(--slate)]`}>Integrations</div>
            <h2 className={`${serif.className} text-3xl font-medium leading-[1.1] md:text-5xl`}>One connection. Your whole stack.</h2>
            <p className="mt-5 text-lg leading-relaxed text-[var(--slate)]">
              Husn sits above the tools your team already uses and reconciles what they each
              say against one another. Read only. Nothing to migrate.
            </p>
            <div className="mt-7"><Cta href="#demo" ghost>See how it connects</Cta></div>
          </div>
          <OrbitalGraphic className="mx-auto aspect-square w-full max-w-[520px]" />
        </div>
      </section>

      <Sec id="sees" label="What Husn surfaces">
        <div className="divide-y divide-[var(--mist)] border-y border-[var(--mist)]">
          {[
            ["What changed", "What moved since you last looked, and why it matters."],
            ["Hidden dependencies", "The initiative that just put yours at risk."],
            ["Emerging risk", "A problem while it is still small."],
            ["Drift", "Ownership and alignment slipping before anyone says so."],
          ].map(([k, v]) => (
            <div key={k} className="grid gap-2 py-6 md:grid-cols-[0.4fr_1fr]">
              <span className={`${mono.className} text-[12px] uppercase tracking-[0.14em] text-[var(--blue)]`}>{k}</span>
              <span className="text-lg">{v}</span>
            </div>
          ))}
        </div>
        <div className="mt-10"><Cta href="#demo">See it on your data</Cta></div>
      </Sec>

      <Sec id="how" label="How it works" alt>
        <div className="grid gap-8 md:grid-cols-3">
          {[["Connect", "To the tools you already use. Read only."], ["Discover", "It finds the pattern that is already there."], ["Brief", "What matters, who is affected, what to do next."]].map(([k, v], i) => (
            <div key={k}><span className={`${mono.className} text-[12px] text-[var(--slate)]`}>0{i + 1}</span><h3 className={`${serif.className} mt-2 text-xl`}>{k}</h3><p className="mt-2 text-[var(--slate)]">{v}</p></div>
          ))}
        </div>
        <p className={`${serif.className} mt-12 text-2xl italic text-[var(--slate)]`}>The pattern is not created. It is discovered.</p>
        <div className="mt-8"><Cta href="#demo">Get a walkthrough</Cta></div>
      </Sec>

      <Sec id="trust" label="Trust">
        <div className="grid gap-10 md:grid-cols-2 md:items-start">
          <h2 className={`${serif.className} max-w-[18ch] text-3xl font-medium leading-[1.12] md:text-4xl`}>Read only. Husn watches and explains. It never acts in your tools.</h2>
          <ul className="space-y-5 border-[var(--mist)] md:border-l md:pl-10">
            {[
              ["Read-only access", "Husn connects through read-only OAuth. It can see, never change."],
              ["Never writes back", "It never posts, edits, or moves anything in your tools."],
              ["Your data stays yours", "Nothing you connect is used to train models."],
              ["Above your stack", "It sits on top of what you use. Nothing to rip out or migrate."],
            ].map(([k, v]) => (
              <li key={k}>
                <p className={`${mono.className} text-[11px] uppercase tracking-[0.14em] text-[var(--blue)]`}>{k}</p>
                <p className="mt-1.5 leading-relaxed text-[var(--slate)]">{v}</p>
              </li>
            ))}
          </ul>
        </div>
      </Sec>

      <Sec id="pricing" label="Pricing" alt>
        <div className="grid gap-10 md:grid-cols-2 md:items-center">
          <div>
            <h2 className={`${serif.className} max-w-[16ch] text-3xl font-medium leading-[1.1] md:text-4xl`}>Pilot pricing, per program, not per seat.</h2>
            <p className="mt-5 max-w-[42ch] text-lg leading-relaxed text-[var(--slate)]">We are setting pricing with our first teams. The fastest way to see numbers is a quick call.</p>
            <div className="mt-8"><Cta href="#demo">Talk to us</Cta></div>
          </div>
          <ul className="space-y-3.5 rounded-[2px] border border-[var(--mist)] bg-[var(--surface)] p-7">
            {[
              "Everyone on your team gets the brief.",
              "You pay only for the programs Husn watches.",
              "Two quiet weeks of shadow mode before any alert goes live.",
              "Cancel anytime.",
            ].map((x) => (
              <li key={x} className="flex items-start gap-3 text-[var(--slate)]">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--blue)]" />
                {x}
              </li>
            ))}
          </ul>
        </div>
      </Sec>

      <section id="demo" className="border-t border-[var(--mist)]">
        <div className="mx-auto max-w-[1140px] px-6 py-20 text-center md:py-28">
          <h2 className={`${serif.className} text-3xl font-medium md:text-5xl`}>One version of reality. Then confident action.</h2>
          <p className="mx-auto mt-4 max-w-[44ch] text-lg text-[var(--slate)]">See what Husn surfaces on your own organization in 15 minutes.</p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Cta href="#demo">Book a demo</Cta>
            <Cta href="#brief" ghost>See a sample brief</Cta>
          </div>
        </div>
      </section>

      <footer className="border-t border-[var(--mist)]">
        <div className={`${mono.className} mx-auto flex max-w-[1140px] flex-col items-start justify-between gap-2 px-6 py-8 text-[11px] uppercase tracking-[0.12em] text-[var(--slate)] md:flex-row md:items-center`}>
          <span>Read only · sits above your tools, never inside them</span>
          <span>Husn · {new Date().getFullYear()}</span>
        </div>
      </footer>
    </div>
  );
}

function Sec({ id, label, alt, children }: { id?: string; label: string; alt?: boolean; children: React.ReactNode }) {
  return (
    <section id={id} className={`border-b border-[var(--mist)] ${alt ? "bg-[var(--mist)]/35" : ""}`}>
      <div className="mx-auto max-w-[1140px] px-6 py-20 md:py-24">
        <div className="mb-8 font-mono text-[11px] uppercase tracking-[0.16em] text-[var(--slate)]">{label}</div>
        {children}
      </div>
    </section>
  );
}
