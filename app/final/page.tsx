"use client";

/* Husn AI Medical homepage. Rewritten from the prior alignment-layer
   ("Foresio"/tech-program-teams) positioning per 03_strategy/change_brief.md.
   Keeps the visual system (Newsreader + Plex Mono, warm bone paper, blue
   accent, staggered reveal) from the prior build — only content, the hero
   demo, the orbital graphic's nodes, and section scope changed.
   Copy is checked against .claude/skills/healthcare-compliance-copy: never
   imply live clinical deployment, never imply autonomous clinical decisions,
   frame validation interviews/pilot interest as research, not customers. */

import { Newsreader, IBM_Plex_Mono } from "next/font/google";
import { OrbitalGraphic } from "@/components/orbital-graphic";
import { Booking } from "@/components/booking";
import { ReferralDemo } from "@/components/referral-demo";
import { AskDemo } from "@/components/ask-demo";

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

const FOUNDERS = [
  {
    name: "Usman Bawany",
    role: "Co-founder, Engineering",
    bio: "MSc, University College London, with published research on explainable AI in healthcare. Focused on making clinical information usable and trustworthy.",
    linkedin: "https://www.linkedin.com/in/usman-ghani-bawany/",
    initials: "UB",
  },
  {
    name: "Lamaan Haq",
    role: "Co-founder, Product & Clinical Partnerships",
    bio: "Saw this problem firsthand working across a lab and clinic affiliated with Harvard Medical School and Mass General Brigham, where patient information was trapped in scanned PDFs, referral letters, and external records.",
    linkedin: "https://www.linkedin.com/in/lamaan-haq-3145ba1b9/",
    initials: "LH",
  },
];

export default function Final() {
  return (
    <div style={t} className="min-h-screen bg-[var(--paper)] text-[var(--ink)] antialiased">
      <style>{`@keyframes finin{from{opacity:0;transform:translateY(10px)}to{opacity:1;transform:none}}.finin{animation:finin .7s cubic-bezier(.2,.7,.2,1) both}`}</style>

      <header className="sticky top-0 z-40 border-b border-[var(--mist)] bg-[var(--paper)]/85 backdrop-blur">
        <div className="mx-auto flex h-16 max-w-[1140px] items-center justify-between px-6">
          <span className={`${serif.className} text-xl`}>Husn</span>
          <nav className={`${mono.className} hidden gap-6 text-[11px] uppercase tracking-[0.14em] text-[var(--slate)] md:flex`}>
            <a href="#how">How it works</a><a href="#founders">Founders</a><a href="#pricing">Pricing</a><a href="/blog/">Blog</a>
          </nav>
          <Cta href="#demo">Book a demo</Cta>
        </div>
      </header>

      <section className="border-b border-[var(--mist)]">
        <div className="mx-auto grid max-w-[1140px] gap-10 px-6 py-12 md:grid-cols-[0.72fr_1.28fr] md:items-center md:py-16">
          <div>
            <p className={`${mono.className} finin text-[11px] uppercase tracking-[0.14em] text-[var(--slate)]`} style={{ animationDelay: "0ms" }}>
              For clinicians reviewing referred patients
            </p>
            <h1 className={`${serif.className} finin mt-3 text-5xl font-medium leading-[1.03] tracking-[-0.01em] md:text-6xl`} style={{ animationDelay: "80ms" }}>
              Turn referral records into EHR-ready context.
            </h1>
            <p className="finin mt-6 max-w-[42ch] text-lg leading-relaxed text-[var(--slate)]" style={{ animationDelay: "220ms" }}>
              Husn reads fragmented referral material, including scanned letters, external records, faxes, and emails, extracts what&apos;s clinically relevant, matches it to the right patient, and prepares a structured summary for clinician review.
            </p>
            <div className="finin mt-8 flex flex-wrap items-center gap-4" style={{ animationDelay: "420ms" }}>
              <Cta href="#demo">Book a demo</Cta>
              <a href="#how" className="text-sm font-medium text-[var(--slate)] underline decoration-[var(--mist)] underline-offset-4 hover:text-[var(--ink)]">See how it works →</a>
            </div>
            <p className="finin mt-4 text-xs text-[var(--slate)]" style={{ animationDelay: "480ms" }}>
              A working MVP in a demo environment, moving toward clinical pilots.
            </p>
          </div>

          <div className="finin" style={{ animationDelay: "360ms" }}>
            <ReferralDemo />
            <p className="mt-4 text-center text-sm leading-relaxed text-[var(--slate)]">
              Illustrative example, synthetic data. Husn structures referral information for review, and a clinician always stays in the loop.
            </p>
          </div>
        </div>
      </section>

      <section className="border-b border-[var(--mist)] bg-[var(--mist)]/35">
        <div className="mx-auto flex max-w-[1140px] flex-col items-start gap-6 px-6 py-9 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className={`${serif.className} text-2xl font-medium md:text-3xl`}>Built for clinicians managing referred-patient caseloads.</h2>
            <div className={`${mono.className} mt-3 flex flex-wrap gap-x-6 gap-y-2 text-[12px] uppercase tracking-[0.1em] text-[var(--slate)]`}>
              <span>Clinicians reviewing referrals</span><span>Referral &amp; care coordination teams</span><span>Hospital digital &amp; informatics leaders</span><span>Specialty practices &amp; clinics</span>
            </div>
          </div>
          <Cta href="#demo">Talk to our team</Cta>
        </div>
      </section>

      <section className="border-b border-[var(--mist)]">
        <div className="mx-auto grid max-w-[1140px] items-center gap-10 px-6 py-20 md:grid-cols-[0.8fr_1.2fr] md:py-24">
          <div className="max-w-md">
            <h2 className={`${serif.className} text-3xl font-medium leading-[1.1] md:text-5xl`}>One place for every referral source.</h2>
            <p className="mt-5 text-lg leading-relaxed text-[var(--slate)]">
              Husn reads scanned letters, external records, faxes, and emails, and structures what matters for review inside your EHR workflow.
            </p>
          </div>
          <OrbitalGraphic className="mx-auto aspect-square w-full max-w-[520px]" />
        </div>
      </section>

      <section className="border-b border-[var(--mist)]">
        <div className="mx-auto grid max-w-[1140px] items-center gap-10 px-6 py-20 md:grid-cols-[0.8fr_1.2fr] md:py-24">
          <div className="max-w-md finin">
            <h2 className={`${serif.className} text-3xl font-medium leading-[1.1] md:text-5xl`}>Ask about any referred patient.</h2>
            <p className="mt-5 text-lg leading-relaxed text-[var(--slate)]">
              Skip the digging through scanned PDFs and prior notes. Ask a question and Husn answers from what&apos;s already been extracted, with every fact traceable to its source.
            </p>
          </div>
          <div className="finin flex justify-center" style={{ animationDelay: "120ms" }}>
            <AskDemo />
          </div>
        </div>
      </section>

      <Sec id="how" label="" alt>
        <h2 className={`${serif.className} mb-10 text-3xl font-medium leading-[1.1] md:text-5xl`}>How it works.</h2>
        <div className="grid gap-8 md:grid-cols-3">
          {[
            ["Read", "Husn reads referral letters, scanned records, and external documents as they arrive."],
            ["Extract & match", "Clinically relevant information is extracted and matched to the correct patient."],
            ["Review", "You get a structured summary, ready for clinician review before anything is added to the chart."],
          ].map(([k, v], i) => (
            <div key={k}><span className={`${mono.className} text-[12px] text-[var(--slate)]`}>0{i + 1}</span><h3 className={`${serif.className} mt-2 text-xl`}>{k}</h3><p className="mt-2 text-[var(--slate)]">{v}</p></div>
          ))}
        </div>
        <p className={`${serif.className} mt-12 text-2xl italic text-[var(--slate)]`}>A clinician stays in the loop at every step.</p>
        <div className="mt-8"><Cta href="#demo">Get a walkthrough</Cta></div>
      </Sec>

      <Sec id="founders" label="Why we're building Husn">
        <h2 className={`${serif.className} max-w-[20ch] text-3xl font-medium leading-[1.1] md:text-4xl`}>Built by people who&apos;ve sat with the problem.</h2>
        <p className="mt-4 max-w-[60ch] text-[var(--slate)]">
          Grounded in 40+ interviews with clinicians across the US and UK, and conversations with hospital digital leadership: validation research and pilot interest.
        </p>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {FOUNDERS.map((f) => (
            <div key={f.name} className="rounded-[2px] border border-[var(--mist)] bg-[var(--surface)] p-7">
              <div className="flex items-center gap-4">
                <div className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-[var(--ink)] text-sm font-semibold text-[var(--paper)]">{f.initials}</div>
                <div>
                  <div className="font-semibold">{f.name}</div>
                  <div className="text-sm text-[var(--slate)]">{f.role}</div>
                </div>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-[var(--slate)]">{f.bio}</p>
              <a href={f.linkedin} target="_blank" rel="noopener noreferrer" className="mt-4 inline-block text-sm font-medium text-[var(--blue)] underline underline-offset-4">
                LinkedIn →
              </a>
            </div>
          ))}
        </div>
      </Sec>

      <Sec id="pricing" label="" alt>
        <div className="grid gap-10 md:grid-cols-2 md:items-center">
          <div>
            <h2 className={`${serif.className} max-w-[18ch] text-3xl font-medium leading-[1.1] md:text-4xl`}>Pricing depends on deployment scope.</h2>
            <p className="mt-5 max-w-[42ch] text-lg leading-relaxed text-[var(--slate)]">We&apos;re shaping pricing around early conversations with pilot-interested doctors. The fastest way to see numbers for your team is a quick call.</p>
            <div className="mt-8"><Cta href="#demo">Talk to us</Cta></div>
          </div>
        </div>
      </Sec>

      <section id="demo" className="border-t border-[var(--mist)]">
        <div className="mx-auto max-w-[1140px] px-6 py-14 text-center md:py-20">
          <h2 className={`${serif.className} text-3xl font-medium md:text-5xl`}>See Husn on a real referral scenario.</h2>
          <p className="mx-auto mt-4 max-w-[48ch] text-lg text-[var(--slate)]">We&apos;ll walk through how Husn reads a referral, extracts what matters, and prepares it for review, and talk through what a pilot could look like for your team.</p>
          <div className="mt-10">
            <Booking />
          </div>
        </div>
      </section>

      <footer className="border-t border-[var(--mist)]">
        <div className={`${mono.className} mx-auto flex max-w-[1140px] flex-col items-start justify-between gap-2 px-6 py-8 text-[11px] uppercase tracking-[0.12em] text-[var(--slate)] md:flex-row md:items-center`}>
          <span>Husn · referral records into EHR-ready context</span>
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
