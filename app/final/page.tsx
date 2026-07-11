"use client";

/* FINAL — G2's editorial calm merged with the current site's strengths:
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
            <a href="#how">How it works</a><a href="#sees">What Husn does</a><a href="#ask">See it work</a><a href="#trust">Trust</a><a href="#pricing">Pricing</a>
          </nav>
          <Cta href="#demo">Book a demo</Cta>
        </div>
      </header>

      <section className="border-b border-[var(--mist)]">
        <div className="mx-auto grid max-w-[1140px] gap-12 px-6 py-16 md:grid-cols-[0.78fr_1.22fr] md:items-center md:py-20">
          <div>
            <span className={`${mono.className} finin block text-[11px] uppercase tracking-[0.18em] text-[var(--blue)]`} style={{ animationDelay: "0ms" }}>Knowledge, answers, and action</span>
            <h1 className={`${serif.className} finin mt-4 text-5xl font-medium leading-[1.03] tracking-[-0.01em] md:text-6xl`} style={{ animationDelay: "120ms" }}>Meet your AI teammate.</h1>
            <p className="finin mt-6 max-w-[40ch] text-lg leading-relaxed text-[var(--slate)]" style={{ animationDelay: "220ms" }}>
              Husn keeps your docs current, answers from across your tools, and does real work in Slack. You approve everything.
            </p>
            <div className="finin mt-8 flex flex-wrap gap-3" style={{ animationDelay: "420ms" }}>
              <Cta href="#demo">Book a demo</Cta>
              <Cta href="#brief" ghost>See it in action</Cta>
            </div>
          </div>

          <div id="brief" className="finin overflow-hidden rounded-[2px] border border-[var(--mist)] bg-[var(--surface)]" style={{ animationDelay: "360ms", boxShadow: "0 1px 2px rgba(27,29,30,.06), 0 24px 48px -34px rgba(27,29,30,.2)" }}>
            <iframe src="/demos/self-maintaining-docs.html" title="Husn keeps your docs current" className="block w-full border-0 h-[560px] md:h-[640px]" />
          </div>
        </div>
      </section>

      <section className="border-b border-[var(--mist)] bg-[var(--mist)]/35">
        <div className="mx-auto flex max-w-[1140px] flex-col items-start gap-6 px-6 py-12 md:flex-row md:items-center md:justify-between">
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
            <div className={`${mono.className} mb-6 text-[11px] uppercase tracking-[0.16em] text-[var(--slate)]`}>Integrations</div>
            <h2 className={`${serif.className} text-3xl font-medium leading-[1.1] md:text-5xl`}>One connection. Your whole stack.</h2>
            <p className="mt-5 text-lg leading-relaxed text-[var(--slate)]">
              Husn works across the tools you already use. Nothing to migrate. You approve anything it does.
            </p>
            <div className="mt-7"><Cta href="#demo" ghost>See how Husn connects</Cta></div>
          </div>
          <OrbitalGraphic className="mx-auto aspect-square w-full max-w-[520px]" />
        </div>
      </section>

      <Sec id="sees" label="What Husn does">
        <div className="divide-y divide-[var(--mist)] border-y border-[var(--mist)]">
          {[
            ["Self-maintaining docs", "Your docs update themselves. You approve every change."],
            ["Answers across your stack", "Ask in plain language. Get one sourced answer from every tool."],
            ["Real work, done", "Mention Husn in Slack. It does the task and reports back."],
            ["Always in control", "Nothing ships without a human. Every action is yours to approve."],
          ].map(([k, v]) => (
            <div key={k} className="grid gap-2 py-6 md:grid-cols-[0.4fr_1fr]">
              <span className={`${mono.className} text-[12px] uppercase tracking-[0.14em] text-[var(--blue)]`}>{k}</span>
              <span className="text-lg">{v}</span>
            </div>
          ))}
        </div>
        <div className="mt-10"><Cta href="#demo">See Husn on your data</Cta></div>
      </Sec>

      <Sec id="ask" label="Ask across your stack">
        <h2 className={`${serif.className} max-w-[22ch] text-3xl font-medium leading-[1.1] md:text-4xl`}>One question. One sourced answer.</h2>
        <p className="mt-5 max-w-[60ch] text-lg leading-relaxed text-[var(--slate)]">Ask in plain language. Husn pulls the answer from across your tools, with the sources attached.</p>
        <div className="mt-8 overflow-hidden rounded-[2px] border border-[var(--mist)] bg-[var(--surface)]" style={{ boxShadow: "0 1px 2px rgba(27,29,30,.06), 0 24px 48px -34px rgba(27,29,30,.2)" }}>
          <iframe src="/demos/ask.html" title="Ask Husn across your stack" className="block w-full border-0 h-[560px] md:h-[600px]" />
        </div>
      </Sec>

      <Sec id="teammate" label="AI teammate in Slack" alt>
        <h2 className={`${serif.className} max-w-[22ch] text-3xl font-medium leading-[1.1] md:text-4xl`}>Mention Husn. It does the work.</h2>
        <p className="mt-5 max-w-[60ch] text-lg leading-relaxed text-[var(--slate)]">Give Husn a task in any channel. It gets it done and reports back for review.</p>
        <div className="mt-8 overflow-hidden rounded-[2px] border border-[var(--mist)] bg-[var(--surface)]" style={{ boxShadow: "0 1px 2px rgba(27,29,30,.06), 0 24px 48px -34px rgba(27,29,30,.2)" }}>
          <iframe src="/demos/teammate.html" title="Husn as an AI teammate in Slack" className="block w-full border-0 h-[680px] md:h-[720px]" />
        </div>
      </Sec>

      <Sec id="how" label="How it works" alt>
        <div className="grid gap-8 md:grid-cols-3">
          {[["Connect", "Connect the tools you already use. Setup takes minutes."], ["Work", "Husn keeps docs current, answers questions, and does the work."], ["Approve", "You review everything. Nothing goes out without your okay."]].map(([k, v], i) => (
            <div key={k}><span className={`${mono.className} text-[12px] text-[var(--slate)]`}>0{i + 1}</span><h3 className={`${serif.className} mt-2 text-xl`}>{k}</h3><p className="mt-2 text-[var(--slate)]">{v}</p></div>
          ))}
        </div>
        <p className={`${serif.className} mt-12 text-2xl italic text-[var(--slate)]`}>You stay in control. Husn does the rest.</p>
        <div className="mt-8"><Cta href="#demo">Get a walkthrough</Cta></div>
      </Sec>

      <Sec id="trust" label="Trust">
        <div className="grid gap-10 md:grid-cols-2 md:items-start">
          <h2 className={`${serif.className} max-w-[18ch] text-3xl font-medium leading-[1.12] md:text-4xl`}>Ask Husn anything. It answers, explains, and acts. You stay in control.</h2>
          <ul className="space-y-5 border-[var(--mist)] md:border-l md:pl-10">
            {[
              ["Ask in plain language", "Talk to Husn like a colleague. Every answer is traced to its source."],
              ["A human approves everything", "Husn drafts and does the work. Nothing ships until your team says yes."],
              ["Your data stays yours", "Nothing you connect is used to train models."],
              ["Above your stack", "Husn sits on top of your stack. Nothing to rip out or migrate."],
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
            <h2 className={`${serif.className} max-w-[16ch] text-3xl font-medium leading-[1.1] md:text-4xl`}>Simple pricing while we onboard our first teams.</h2>
            <p className="mt-5 max-w-[42ch] text-lg leading-relaxed text-[var(--slate)]">We are setting pricing with our first teams. The fastest way to see numbers is a quick call.</p>
            <div className="mt-8"><Cta href="#demo">Talk to us</Cta></div>
          </div>
          <ul className="space-y-3.5 rounded-[2px] border border-[var(--mist)] bg-[var(--surface)] p-7">
            {[
              "Everyone on your team gets Husn.",
              "Simple pricing that scales with your team.",
              "A quiet trial period before anything goes live.",
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
          <h2 className={`${serif.className} text-3xl font-medium md:text-5xl`}>See Husn work on your own tools.</h2>
          <p className="mx-auto mt-4 max-w-[44ch] text-lg text-[var(--slate)]">Pick a slot and we&apos;ll show you Husn on your own stack. 30 minutes, no slides.</p>
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
      <div className="mx-auto max-w-[1140px] px-6 py-20 md:py-24">
        <div className="mb-8 font-mono text-[11px] uppercase tracking-[0.16em] text-[var(--slate)]">{label}</div>
        {children}
      </div>
    </section>
  );
}
