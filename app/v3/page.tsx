"use client";

/**
 * Husn v3 — warm / human / narrative concept (independent runner-up).
 * Built faithfully to that single direction: terracotta + warm paper, rounded,
 * conversational peer-to-peer voice, a story arc from pain to relief, a resolving
 * headline, conflict shown in amber. No influence from the other two versions.
 */

import { useEffect, useState } from "react";
import { Fraunces } from "next/font/google";
import { submitDemoRequest, type DemoInput } from "@/lib/waitlist-action";

const display = Fraunces({
  subsets: ["latin"],
  weight: ["400", "500"],
  style: ["normal"],
  display: "swap",
});

const theme: React.CSSProperties = {
  ["--bg" as string]: "#FBF7F2",
  ["--surface" as string]: "#FFFFFF",
  ["--sunk" as string]: "#F3E9DF",
  ["--text" as string]: "#2A201A",
  ["--soft" as string]: "#6B5E54",
  ["--muted" as string]: "#80736A",
  ["--accent" as string]: "#C2410C",
  ["--accent-soft" as string]: "#F7E6DB",
  ["--amber" as string]: "#B45309",
  ["--amber-soft" as string]: "#FBEAD0",
  ["--border" as string]: "#EADFD4",
};

const TOOLS = [
  "Jira", "Slack", "Linear", "GitHub", "Notion", "Confluence",
  "Gmail", "Outlook", "Teams", "Drive", "SharePoint", "Figma",
  "Zoom", "Asana", "Google Docs", "Word",
];

const STEPS = [
  { icon: "🔌", title: "It connects", body: "Read-only, to the tools your team already lives in. Nobody adopts anything new." },
  { icon: "👂", title: "It listens", body: "For the quiet changes that break programs: scope cuts, owner changes, blocked work, docs edited after sign-off." },
  { icon: "✉️", title: "It briefs you", body: "A short, source-cited brief, in the right inboxes, 30 minutes before the meeting starts." },
];

const FAQ = [
  { q: "When can we start?", a: "We're onboarding our first pilot teams now. Connect Jira, Slack, and one doc source and you'll get your first brief inside a week." },
  { q: "Our Jira is a mess. Does that break it?", a: "Most are. For the first two weeks Husn just watches while you tune what matters and add owners. Alerts turn on when you say so." },
  { q: "What's the smallest team that benefits?", a: "You'll want at least 3 connected teams and 2 active programs before there's enough cross-team hand-off to be worth it." },
];

export default function V3Page() {
  return (
    <div style={theme} className="min-h-screen bg-[var(--bg)] text-[var(--text)] antialiased">
      <Nav />
      <main>
        <Hero />
        <Problem />
        <How />
        <Integrations />
        <Pricing />
        <Faq />
        <Founder />
        <DemoSection />
      </main>
      <Footer />
    </div>
  );
}

function Container({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <div className={`mx-auto w-full max-w-[1100px] px-6 ${className}`}>{children}</div>;
}

function Pill({ children, href = "#demo", filled = true }: { children: React.ReactNode; href?: string; filled?: boolean }) {
  return (
    <a
      href={href}
      className={
        filled
          ? "inline-flex items-center gap-2 rounded-full bg-[var(--accent)] px-6 py-3 text-sm font-medium text-white transition-opacity hover:opacity-90"
          : "inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--surface)] px-6 py-3 text-sm font-medium text-[var(--text)] transition-colors hover:border-[var(--accent)]"
      }
    >
      {children}
    </a>
  );
}

/* ---------- Nav ---------- */

function Nav() {
  return (
    <header className="sticky top-0 z-40 border-b border-[var(--border)] bg-[var(--bg)]/85 backdrop-blur-md">
      <Container className="flex h-16 items-center justify-between">
        <span className="text-lg font-semibold tracking-tight">Husn</span>
        <nav className="hidden items-center gap-7 text-sm text-[var(--muted)] md:flex">
          <a href="#how" className="hover:text-[var(--text)]">How it works</a>
          <a href="#pricing" className="hover:text-[var(--text)]">Pricing</a>
          <a href="#faq" className="hover:text-[var(--text)]">FAQ</a>
        </nav>
        <Pill>Book a demo</Pill>
      </Container>
    </header>
  );
}

/* ---------- Hero ---------- */

function Hero() {
  return (
    <section className="border-b border-[var(--border)]">
      <Container className="py-20 text-center md:py-28">
        <p className="text-lg text-[var(--muted)]">16 tools. 16 tabs. One blind spot.</p>
        <h1 className={`${display.className} mx-auto mt-2 max-w-[16ch] text-5xl font-medium leading-[1.02] tracking-[-0.015em] text-[var(--accent)] md:text-7xl`}>
          One brief.
        </h1>
        <p className="mx-auto mt-6 max-w-[52ch] text-lg leading-relaxed text-[var(--soft)]">
          You shouldn&rsquo;t find out in the meeting. Husn quietly reads the tools
          your team already uses and tells the right people what changed, 30 minutes
          before you sit down.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Pill>Book a demo</Pill>
          <Pill href="#brief" filled={false}>See a sample brief</Pill>
        </div>

        <div id="brief" className="mx-auto mt-14 max-w-[560px]">
          <BriefCard />
        </div>
      </Container>
    </section>
  );
}

function BriefCard() {
  return (
    <div className="rounded-3xl border border-[var(--border)] bg-[var(--surface)] p-5 text-left md:p-6">
      <div className="flex items-center justify-between">
        <span className="text-sm font-medium">Your brief for Platform Weekly</span>
        <span className="text-xs text-[var(--muted)]">in 30 min</span>
      </div>
      <div className="mt-4 flex flex-col gap-3">
        <Line tone="accent" icon="💬" text="Payments got cut from v1. The owner changed from Priya to Marcus." />
        <Line tone="amber" icon="⚠" text="A ticket your launch depends on is now blocked." badge="needs a call" />
        <Line tone="accent" icon="📄" text="The PRD was edited after everyone signed off." />
      </div>
      <div className="mt-5 flex items-center gap-2 border-t border-[var(--border)] pt-4">
        <Avatar initials="PR" tone="#C2410C" />
        <Avatar initials="MK" tone="#9A7B66" />
        <Avatar initials="RJ" tone="#6B8E7A" />
        <span className="ml-2 text-sm text-[var(--muted)]">4 people need to know. 1 hasn&rsquo;t seen it yet.</span>
      </div>
    </div>
  );
}

function Line({ tone, icon, text, badge }: { tone: "accent" | "amber"; icon: string; text: string; badge?: string }) {
  const bg = tone === "amber" ? "var(--amber-soft)" : "var(--accent-soft)";
  const fg = tone === "amber" ? "var(--amber)" : "var(--accent)";
  return (
    <div className="flex items-start gap-3">
      <span
        className="grid h-7 w-7 shrink-0 place-items-center rounded-full text-xs"
        style={{ background: bg, color: fg }}
        aria-hidden="true"
      >
        {icon}
      </span>
      <p className="text-sm leading-relaxed text-[var(--text)]">
        {text}
        {badge && (
          <span
            className="ml-2 rounded-full px-2 py-0.5 text-xs"
            style={{ background: "var(--amber-soft)", color: "var(--amber)" }}
          >
            {badge}
          </span>
        )}
      </p>
    </div>
  );
}

function Avatar({ initials, tone }: { initials: string; tone: string }) {
  return (
    <span
      className="-ml-2 grid h-7 w-7 place-items-center rounded-full text-[0.65rem] font-medium text-white ring-2 ring-[var(--surface)] first:ml-0"
      style={{ background: tone }}
    >
      {initials}
    </span>
  );
}

/* ---------- Problem ---------- */

function Problem() {
  return (
    <section className="border-b border-[var(--border)]">
      <Container className="py-20 text-center md:py-28">
        <h2 className={`${display.className} mx-auto max-w-[22ch] text-3xl font-medium leading-[1.12] text-[var(--text)] md:text-5xl`}>
          Status meetings shouldn&rsquo;t be where you discover problems.
        </h2>
        <p className="mx-auto mt-5 max-w-[48ch] text-lg leading-relaxed text-[var(--soft)]">
          By the time it&rsquo;s on the agenda, the decision already shipped, the owner
          already moved on, and you&rsquo;re the last to know. It doesn&rsquo;t have to
          be that way.
        </p>
      </Container>
    </section>
  );
}

/* ---------- How ---------- */

function How() {
  return (
    <section id="how" className="border-b border-[var(--border)] bg-[var(--sunk)]">
      <Container className="py-20 md:py-28">
        <h2 className={`${display.className} text-center text-3xl font-medium md:text-5xl`}>
          It does the watching, so you don&rsquo;t have to.
        </h2>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {STEPS.map((s) => (
            <div key={s.title} className="rounded-3xl border border-[var(--border)] bg-[var(--surface)] p-7 text-center">
              <div className="text-3xl" aria-hidden="true">{s.icon}</div>
              <h3 className="mt-4 text-lg font-medium">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-[var(--soft)]">{s.body}</p>
            </div>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Pill href="#pricing" filled={false}>See pricing</Pill>
        </div>
      </Container>
    </section>
  );
}

/* ---------- Integrations ---------- */

function Integrations() {
  return (
    <section className="border-b border-[var(--border)]">
      <Container className="py-20 text-center md:py-28">
        <h2 className={`${display.className} mx-auto max-w-[20ch] text-3xl font-medium md:text-5xl`}>
          16 tabs to keep open. We read them so you don&rsquo;t have to.
        </h2>
        <p className="mx-auto mt-5 max-w-[46ch] text-lg leading-relaxed text-[var(--soft)]">
          Husn connects to the tools your team already uses, read-only, and reconciles
          what they say against each other.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-2.5">
          {TOOLS.map((t) => (
            <span
              key={t}
              className="rounded-full border border-[var(--border)] bg-[var(--surface)] px-4 py-2 text-sm text-[var(--text)]"
            >
              {t}
            </span>
          ))}
        </div>
      </Container>
    </section>
  );
}

/* ---------- Pricing ---------- */

function Pricing() {
  return (
    <section id="pricing" className="border-b border-[var(--border)] bg-[var(--sunk)]">
      <Container className="py-20 text-center md:py-28">
        <h2 className={`${display.className} mx-auto max-w-[22ch] text-3xl font-medium leading-[1.12] md:text-5xl`}>
          We watch quietly for two weeks before a single alert goes out.
        </h2>
        <p className="mx-auto mt-5 max-w-[44ch] text-lg leading-relaxed text-[var(--soft)]">
          Pilot pricing, per program, not per seat. Everyone on your team gets the
          brief. Cancel anytime.
        </p>
        <div className="mt-8">
          <Pill>Start a pilot</Pill>
        </div>
      </Container>
    </section>
  );
}

/* ---------- FAQ ---------- */

function Faq() {
  return (
    <section id="faq" className="border-b border-[var(--border)]">
      <Container className="py-20 md:py-28">
        <h2 className={`${display.className} text-center text-3xl font-medium md:text-5xl`}>
          Questions teams ask us.
        </h2>
        <ul className="mx-auto mt-10 max-w-[700px]">
          {FAQ.map((f) => (
            <li key={f.q} className="border-b border-[var(--border)]">
              <details className="group">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-5">
                  <span className="text-lg font-medium">{f.q}</span>
                  <span className="text-[var(--accent)] transition-transform group-open:rotate-45">+</span>
                </summary>
                <p className="max-w-[60ch] pb-5 text-[0.95rem] leading-relaxed text-[var(--soft)]">{f.a}</p>
              </details>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}

/* ---------- Founder ---------- */

function Founder() {
  return (
    <section className="border-b border-[var(--border)] bg-[var(--sunk)]">
      <Container className="py-20 text-center md:py-28">
        <blockquote className={`${display.className} mx-auto max-w-[24ch] text-2xl font-medium leading-snug md:text-4xl`}>
          &ldquo;Husn is the brief we always wished we&rsquo;d had walking into a Monday
          sync.&rdquo;
        </blockquote>
        <p className="mt-6 text-sm text-[var(--muted)]">The Husn team</p>
      </Container>
    </section>
  );
}

/* ---------- Demo ---------- */

type State =
  | { kind: "idle" }
  | { kind: "submitting" }
  | { kind: "success" }
  | { kind: "error"; message: string };

function DemoSection() {
  const [state, setState] = useState<State>({ kind: "idle" });

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const role = String(data.get("role") ?? "");
    const email = String(data.get("email") ?? "").trim();
    if (!role) return setState({ kind: "error", message: "Pick a role." });
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
      return setState({ kind: "error", message: "Enter a valid email." });
    setState({ kind: "submitting" });
    const input: DemoInput = { role, email };
    submitDemoRequest(input).then((res) =>
      setState(res.ok ? { kind: "success" } : { kind: "error", message: res.message }),
    );
  }

  return (
    <section id="demo">
      <Container className="py-20 text-center md:py-28">
        <h2 className={`${display.className} text-3xl font-medium md:text-5xl`}>
          See your own tools in shadow mode.
        </h2>
        <p className="mx-auto mt-4 max-w-[40ch] text-lg text-[var(--soft)]">
          15 minutes. We&rsquo;ll show you what a brief on your work would look like.
        </p>

        <div className="mx-auto mt-10 max-w-[440px]">
          {state.kind === "success" ? (
            <div className="rounded-3xl border border-[var(--border)] bg-[var(--surface)] p-8 text-left">
              <h3 className="text-xl font-medium">Thanks, that&rsquo;s in.</h3>
              <p className="mt-2 text-[var(--soft)]">
                It goes straight to the founder. You&rsquo;ll hear back within a day with
                a couple of times.
              </p>
            </div>
          ) : (
            <form onSubmit={onSubmit} noValidate className="rounded-3xl border border-[var(--border)] bg-[var(--surface)] p-7 text-left">
              <label className="block text-sm font-medium">
                Your role
                <select
                  name="role"
                  required
                  defaultValue=""
                  className="mt-2 w-full rounded-xl border border-[var(--border)] bg-[var(--bg)] px-3 py-3 text-sm outline-none focus:border-[var(--accent)]"
                >
                  <option value="" disabled>Select</option>
                  {["TPM / Program", "EPM", "PMO / Ops", "Eng leadership", "Other"].map((r) => (
                    <option key={r} value={r}>{r}</option>
                  ))}
                </select>
              </label>
              <label className="mt-4 block text-sm font-medium">
                Your work email
                <input
                  name="email"
                  type="email"
                  required
                  placeholder="you@company.com"
                  className="mt-2 w-full rounded-xl border border-[var(--border)] bg-[var(--bg)] px-3 py-3 text-sm outline-none placeholder:text-[var(--muted)] focus:border-[var(--accent)]"
                />
              </label>
              <button
                type="submit"
                disabled={state.kind === "submitting"}
                className="mt-6 w-full rounded-full bg-[var(--accent)] px-6 py-3 text-sm font-medium text-white transition-opacity hover:opacity-90 disabled:opacity-60"
              >
                {state.kind === "submitting" ? "Sending" : "Book a demo"}
              </button>
              {state.kind === "error" && (
                <p role="alert" className="mt-3 text-sm text-[var(--amber)]">{state.message}</p>
              )}
            </form>
          )}
        </div>
      </Container>
    </section>
  );
}

/* ---------- Footer ---------- */

function Footer() {
  return (
    <footer>
      <Container className="flex flex-col items-center justify-between gap-3 py-8 text-sm text-[var(--muted)] md:flex-row">
        <span>Read-only. Never writes back. Not used for training.</span>
        <span>Husn · {new Date().getFullYear()}</span>
      </Container>
    </footer>
  );
}
