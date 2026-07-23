"use client";

/* FINAL - G2's editorial calm merged with the current site's strengths:
   audience-clear taglines, the real logo orbital, the brief artifact high in the
   hero, varied CTAs (dark ink, not blue), and a restrained staggered load reveal.
   Newsreader + Inter + Plex Mono, warm bone paper. Blue stays a meaning-accent. */

import { Newsreader, IBM_Plex_Mono } from "next/font/google";
import { OrbitalGraphic } from "@/components/orbital-graphic";
import { Booking } from "@/components/booking";

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
            <a href="#how">How it works</a><a href="#ask">See it work</a><a href="#pricing">Pricing</a><a href="/blog/">Blog</a>
          </nav>
          <Cta href="#demo">Book a demo</Cta>
        </div>
      </header>

      <section className="border-b border-[var(--mist)]">
        <div className="mx-auto grid max-w-[1140px] gap-10 px-6 py-12 md:grid-cols-[0.72fr_1.28fr] md:items-center md:py-16">
          <div>
            <h1 className={`${serif.className} finin text-5xl font-medium leading-[1.03] tracking-[-0.01em] md:text-6xl`} style={{ animationDelay: "80ms" }}>Husn gives you superpowers.</h1>
            <p className="finin mt-6 max-w-[40ch] text-lg leading-relaxed text-[var(--slate)]" style={{ animationDelay: "220ms" }}>
              Husn keeps your docs current, answers from across your tools, and does real work in Slack. You approve everything.
            </p>
            <div className="finin mt-8 flex flex-wrap gap-3" style={{ animationDelay: "420ms" }}>
              <Cta href="#demo">Book a demo</Cta>
            </div>
          </div>

          <div className="finin" style={{ animationDelay: "360ms" }}>
            <iframe id="brief" src="/demos/self-maintaining-docs.html" title="Husn keeps your docs current" className="block w-full border-0 h-[556px] md:h-[578px]" />
            <p className="mt-4 text-center text-sm leading-relaxed text-[var(--slate)]">Husn detects changes, updates documentation, and keeps teams aligned, with your approval.</p>
          </div>
        </div>
      </section>

      <section className="border-b border-[var(--mist)] bg-[var(--mist)]/35">
        <div className="mx-auto flex max-w-[1140px] flex-col items-start gap-6 px-6 py-9 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className={`${serif.className} text-2xl font-medium md:text-3xl`}>Built for teams juggling a dozen tools.</h2>
            <div className={`${mono.className} mt-3 flex flex-wrap gap-x-6 gap-y-2 text-[12px] uppercase tracking-[0.1em] text-[var(--slate)]`}>
              <span>Founders &amp; CEOs</span><span>Program &amp; ops leaders</span><span>Heads of engineering &amp; product</span><span>Chiefs of staff</span>
            </div>
          </div>
          <Cta href="#demo">See Husn on your org</Cta>
        </div>
      </section>

      <section className="border-b border-[var(--mist)]">
        <div className="mx-auto grid max-w-[1140px] items-center gap-10 px-6 py-20 md:grid-cols-[0.8fr_1.2fr] md:py-24">
          <div className="max-w-md">
            <h2 className={`${serif.className} text-3xl font-medium leading-[1.1] md:text-5xl`}>One connection. Your whole stack.</h2>
            <p className="mt-5 text-lg leading-relaxed text-[var(--slate)]">
              Husn works across the tools you already use. Nothing to migrate. You approve anything it does.
            </p>
          </div>
          <OrbitalGraphic className="mx-auto aspect-square w-full max-w-[520px]" />
        </div>
      </section>

      <section id="ask" className="border-b border-[var(--mist)]">
        <div className="mx-auto max-w-[1140px] px-6 py-14 md:py-16">
          <h2 className={`${serif.className} text-3xl font-medium leading-[1.1] md:text-5xl`}>Ask across your stack.</h2>
          <div className="mt-10">
            <iframe src="/demos/ask.html" title="Ask Husn across your stack" className="mx-auto block w-full max-w-[820px] border-0 h-[560px] md:h-[600px]" />
          </div>
        </div>
      </section>

      <section id="teammate" className="border-b border-[var(--mist)]">
        <div className="mx-auto max-w-[1140px] px-6 py-14 md:py-16">
          <h2 className={`${serif.className} text-3xl font-medium leading-[1.1] md:text-5xl`}>Let Husn handle it.</h2>
          <div className="mt-10">
            <iframe src="/demos/teammate.html" title="Husn as an AI teammate in Slack" className="mx-auto block w-full max-w-[1040px] border-0 h-[560px] md:h-[600px]" />
          </div>
        </div>
      </section>

      <Sec id="how" label="" alt>
        <h2 className={`${serif.className} mb-10 text-3xl font-medium leading-[1.1] md:text-5xl`}>How it works.</h2>
        <div className="grid gap-8 md:grid-cols-3">
          {[["Connect", "Connect the tools you already use. Setup takes minutes."], ["Work", "Husn keeps docs current, answers questions, and does the work."], ["Approve", "You review everything. Nothing goes out without your okay."]].map(([k, v], i) => (
            <div key={k}><span className={`${mono.className} text-[12px] text-[var(--slate)]`}>0{i + 1}</span><h3 className={`${serif.className} mt-2 text-xl`}>{k}</h3><p className="mt-2 text-[var(--slate)]">{v}</p></div>
          ))}
        </div>
        <p className={`${serif.className} mt-12 text-2xl italic text-[var(--slate)]`}>You stay in control. Husn does the rest.</p>
        <div className="mt-8"><Cta href="#demo">Get a walkthrough</Cta></div>
      </Sec>

      <Sec id="pricing" label="" alt>
        <div className="grid gap-10 md:grid-cols-2 md:items-center">
          <div>
            <h2 className={`${serif.className} max-w-[16ch] text-3xl font-medium leading-[1.1] md:text-4xl`}>Simple pricing while we onboard our first teams.</h2>
            <p className="mt-5 max-w-[42ch] text-lg leading-relaxed text-[var(--slate)]">We are setting pricing with our first teams. The fastest way to see numbers is a quick call.</p>
            <div className="mt-8"><Cta href="#demo">Talk to us</Cta></div>
          </div>
          <ul className="space-y-3.5 rounded-[2px] border border-[var(--mist)] bg-[var(--surface)] p-7">
            {[
              "100% First-Month Guarantee",
              "Free Integration & Onboarding",
              "Go Live in Days",
              "Cancel Anytime",
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
        <div className="mx-auto max-w-[1140px] px-6 py-14 text-center md:py-20">
          <h2 className={`${serif.className} text-3xl font-medium md:text-5xl`}>See Husn work on your own tools.</h2>
          <p className="mx-auto mt-4 max-w-[44ch] text-lg text-[var(--slate)]">Pick a slot and we&apos;ll show you Husn on your own stack.</p>
          <div className="mt-10">
            <Booking />
          </div>
        </div>
      </section>

      <footer className="border-t border-[var(--mist)]">
        <div className={`${mono.className} mx-auto flex max-w-[1140px] flex-col items-start justify-between gap-2 px-6 py-8 text-[11px] uppercase tracking-[0.12em] text-[var(--slate)] md:flex-row md:items-center`}>
          <span>Husn · knowledge, answers, and work across every tool</span>
          <span>Husn · {new Date().getFullYear()}</span>
        </div>
      </footer>
    </div>
  );
}

function Sec({ id, label, alt, children }: { id?: string; label: string; alt?: boolean; children: React.ReactNode }) {
  return (
    <section id={id} className={`border-b border-[var(--mist)] ${alt ? "bg-[var(--mist)]/35" : ""}`}>
      <div className="mx-auto max-w-[1140px] px-6 py-14 md:py-16">
        {label ? <div className="mb-8 font-mono text-[11px] uppercase tracking-[0.16em] text-[var(--slate)]">{label}</div> : null}
        {children}
      </div>
    </section>
  );
}
