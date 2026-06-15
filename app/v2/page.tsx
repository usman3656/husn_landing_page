"use client";

/**
 * Husn v2 — "The Brief" (independent Swiss/editorial concept).
 * Built from the agent panel's winning spec. Self-contained: scoped palette via
 * CSS vars, editorial serif (Fraunces) for display, Inter body + JetBrains mono.
 * The page IS a pre-sync brief. One signature moment: the countdown reconciles a
 * new cross-vendor change live (respects prefers-reduced-motion).
 */

import { useEffect, useRef, useState } from "react";
import { Fraunces } from "next/font/google";
import { submitDemoRequest, type DemoInput } from "@/lib/waitlist-action";

const display = Fraunces({
  subsets: ["latin"],
  weight: ["400", "500"],
  style: ["normal", "italic"],
  display: "swap",
});

const theme: React.CSSProperties = {
  ["--bg" as string]: "#F4F2ED",
  ["--surface" as string]: "#FBFAF7",
  ["--sunk" as string]: "#ECEAE3",
  ["--text" as string]: "#16150F",
  ["--muted" as string]: "#6B6862",
  ["--accent" as string]: "#1B3AED",
  ["--accent-quiet" as string]: "#E2E6FB",
  ["--border" as string]: "#D8D5CC",
  ["--conflict" as string]: "#B23A1E",
};

const NAV = ["Product", "How", "Pricing", "FAQ"];

const TOOLS = [
  "Jira", "Slack", "Linear", "GitHub",
  "Notion", "Confluence", "Gmail", "Outlook",
  "Teams", "Drive", "SharePoint", "Figma",
  "Zoom", "Asana", "Docs", "Word",
];

const DRIFT = [
  "scope cuts",
  "owner changes",
  "blocked dependencies",
  "post-sign-off edits",
  "stale assumptions",
  "cross-tool conflicts",
];

const FAQ = [
  {
    q: "When can we start?",
    a: "We're onboarding our first pilot teams now. Connect Jira, Slack, and one doc source and you'll get your first pre-sync brief inside a week.",
  },
  {
    q: "Our Jira is a mess. Does that break it?",
    a: "Most are. For the first two weeks Husn watches quietly while you tune which signals matter and add owners. Alerts turn on when you say so.",
  },
  {
    q: "What's the smallest team that benefits?",
    a: "You need at least 3 connected teams and 2 active programs before there's enough cross-team activity to be worth it. Below about 200 people there usually isn't.",
  },
];

export default function V2Page() {
  return (
    <div
      style={theme}
      className="min-h-screen bg-[var(--bg)] text-[var(--text)] antialiased"
    >
      <Nav />
      <main>
        <Hero />
        <Problem />
        <Integrations />
        <HowItWorks />
        <Pricing />
        <Faq />
        <Founder />
        <DemoSection />
      </main>
      <Footer />
    </div>
  );
}

/* ---------- shared ---------- */

function Rail({ n, label }: { n: string; label: string }) {
  return (
    <div className="mb-8 flex items-baseline gap-3 font-mono text-xs tracking-[0.18em] text-[var(--muted)]">
      <span className="text-[var(--accent)]">{n}</span>
      <span className="uppercase">{label}</span>
      <span className="h-px flex-1 bg-[var(--border)]" />
    </div>
  );
}

function Container({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <div className={`mx-auto w-full max-w-[1180px] px-6 ${className}`}>{children}</div>;
}

function FilledCTA({ children, href = "#demo" }: { children: React.ReactNode; href?: string }) {
  return (
    <a
      href={href}
      className="inline-flex items-center gap-2 rounded-[2px] bg-[var(--accent)] px-5 py-3 font-mono text-xs uppercase tracking-[0.12em] text-white transition-opacity hover:opacity-90"
    >
      {children}
    </a>
  );
}

function GhostCTA({ children, href = "#demo" }: { children: React.ReactNode; href?: string }) {
  return (
    <a
      href={href}
      className="inline-flex items-center gap-2 rounded-[2px] border border-[var(--border)] px-5 py-3 font-mono text-xs uppercase tracking-[0.12em] text-[var(--text)] transition-colors hover:border-[var(--text)]"
    >
      {children}
    </a>
  );
}

/* ---------- 00 Nav ---------- */

function Nav() {
  return (
    <header className="sticky top-0 z-40 border-b border-[var(--border)] bg-[var(--bg)]/85 backdrop-blur-md">
      <Container className="flex h-16 items-center justify-between">
        <a href="#top" className="flex items-center gap-2">
          <span className="grid h-6 w-6 place-items-center rounded-[2px] bg-[var(--accent)] font-mono text-[0.7rem] font-bold text-white">
            H
          </span>
          <span className={`${display.className} text-xl`}>Husn</span>
        </a>
        <nav className="hidden items-center gap-7 font-mono text-xs uppercase tracking-[0.14em] text-[var(--muted)] md:flex">
          {NAV.map((l) => (
            <a key={l} href={`#${l.toLowerCase()}`} className="transition-colors hover:text-[var(--text)]">
              {l}
            </a>
          ))}
        </nav>
        <GhostCTA>Book a demo</GhostCTA>
      </Container>
    </header>
  );
}

/* ---------- 01 Hero ---------- */

function Hero() {
  return (
    <section id="top" className="border-b border-[var(--border)]">
      <Container className="grid gap-12 pb-20 pt-20 md:grid-cols-2 md:gap-10 md:pb-28 md:pt-28">
        <div className="flex flex-col justify-center">
          <Kicker />
          <h1 className={`${display.className} mt-6 text-[2.6rem] font-medium leading-[1.04] tracking-[-0.01em] md:text-[3.6rem]`}>
            Walk into every sync already knowing what changed.
          </h1>
          <p className="mt-6 max-w-[46ch] text-lg leading-relaxed text-[var(--muted)]">
            Husn watches your Jira, Slack, and docs read-only, then emails your
            team a source-cited brief 30 minutes before each sync.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <FilledCTA>Book a demo</FilledCTA>
            <GhostCTA href="#brief">See a sample brief</GhostCTA>
          </div>
          <p className="mt-6 font-mono text-[0.7rem] uppercase tracking-[0.14em] text-[var(--muted)]">
            Read-only OAuth · Never writes back · Not used for training
          </p>
        </div>

        <div className="flex items-center">
          <BriefArtifact />
        </div>
      </Container>
    </section>
  );
}

function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(false);
  useEffect(() => {
    const m = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(m.matches);
  }, []);
  return reduced;
}

function Kicker() {
  const reduced = usePrefersReducedMotion();
  const [resolved, setResolved] = useState(false);
  useEffect(() => {
    if (reduced) {
      setResolved(true);
      return;
    }
    const t = setTimeout(() => setResolved(true), 3200);
    return () => clearTimeout(t);
  }, [reduced]);
  return (
    <span className="font-mono text-[0.7rem] uppercase tracking-[0.2em] text-[var(--accent)]">
      {resolved
        ? "One brief · 30 minutes before you walk in"
        : "Sixteen tools · Sixteen tabs · One blind spot"}
    </span>
  );
}

type Row = { tag: string; text: string; conflict?: boolean; accentArrow?: boolean };

const BASE_ROWS: Row[] = [
  { tag: "SLACK", text: "Scope cut: owner @priya to @marcus", accentArrow: true },
  { tag: "JIRA", text: "MOB-412 now blocked", conflict: true },
  { tag: "DOC", text: "PRD edited after sign-off", conflict: true },
];

const NEW_ROW: Row = { tag: "LINEAR", text: "Assumption now stale", conflict: true };

function BriefArtifact() {
  const reduced = usePrefersReducedMotion();
  const [reconciled, setReconciled] = useState(false);
  const [secs, setSecs] = useState(1800);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (reduced) {
      setReconciled(true);
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          const t = setTimeout(() => setReconciled(true), 3000);
          io.disconnect();
          return () => clearTimeout(t);
        }
      },
      { threshold: 0.4 },
    );
    if (ref.current) io.observe(ref.current);
    const tick = setInterval(() => setSecs((s) => (s > 0 ? s - 1 : 0)), 1000);
    // Let the live countdown play through the reconcile beat, then settle so the
    // page can go idle (no perpetual timer running behind a static landing page).
    const stop = setTimeout(() => clearInterval(tick), 8000);
    return () => {
      io.disconnect();
      clearInterval(tick);
      clearTimeout(stop);
    };
  }, [reduced]);

  const rows = reconciled ? [NEW_ROW, ...BASE_ROWS] : BASE_ROWS;
  const sources = reconciled ? 4 : 3;
  const mm = String(Math.floor(secs / 60)).padStart(2, "0");
  const ss = String(secs % 60).padStart(2, "0");

  return (
    <div id="brief" ref={ref} className="relative w-full">
      {/* second card peeking — recurrence cue */}
      <div className="absolute -bottom-2 left-2 right-2 top-2 -z-0 rounded-[2px] border border-[var(--border)] bg-[var(--surface)] opacity-50" />

      <div
        className="relative z-10 rounded-[2px] border border-[var(--border)] bg-[var(--surface)]"
        style={{ boxShadow: "0 1px 0 var(--border), 0 24px 48px -32px rgba(22,21,15,0.18)" }}
      >
        {/* header */}
        <div className="flex items-center justify-between border-b border-[var(--border)] px-5 py-3 font-mono text-[0.66rem] uppercase tracking-[0.14em] text-[var(--muted)]">
          <span>Pre-sync brief · Platform Weekly</span>
          <span className="flex items-center gap-3">
            <span className="text-[var(--accent)]">{mm}:{ss}</span>
            <span>{sources} sources</span>
          </span>
        </div>

        {/* change rows */}
        <ul>
          {rows.map((r, i) => (
            <li
              key={`${r.tag}-${i}`}
              className="flex items-start justify-between gap-3 border-b border-[var(--border)] px-5 py-3.5"
            >
              <div className="flex items-start gap-3">
                <span
                  className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full"
                  style={{ background: r.conflict ? "var(--conflict)" : "var(--accent)" }}
                />
                <div>
                  <span className="font-mono text-[0.62rem] uppercase tracking-[0.14em] text-[var(--muted)]">
                    {r.tag}
                  </span>
                  <p className="mt-0.5 text-sm text-[var(--text)]">
                    {r.accentArrow ? (
                      <>
                        Scope cut: owner @priya{" "}
                        <span className="text-[var(--accent)]">→</span> @marcus
                      </>
                    ) : (
                      r.text
                    )}
                  </p>
                </div>
              </div>
              <span className="mt-1 font-mono text-[0.6rem] text-[var(--muted)]">▸ source</span>
            </li>
          ))}
        </ul>

        {/* who needs to know */}
        <div className="px-5 py-4">
          <p className="font-mono text-[0.6rem] uppercase tracking-[0.16em] text-[var(--muted)]">
            Who needs to know
          </p>
          <div className="mt-3 flex flex-wrap gap-2">
            <Ack initials="PR" state="seen" />
            <Ack initials="MK" state="conflict" />
            <Ack initials="RJ" state="seen" />
            <Ack initials="EL" state={reconciled ? "conflict" : "pending"} />
          </div>
        </div>
      </div>

      <p className="mt-3 text-center font-mono text-[0.62rem] uppercase tracking-[0.14em] text-[var(--muted)]">
        Illustrative example · not real customer data
      </p>
    </div>
  );
}

function Ack({ initials, state }: { initials: string; state: "seen" | "conflict" | "pending" }) {
  const map = {
    seen: { label: "Seen", color: "var(--accent)", bg: "var(--accent-quiet)" },
    conflict: { label: "Conflict", color: "#fff", bg: "var(--conflict)" },
    pending: { label: "Pending", color: "var(--muted)", bg: "var(--sunk)" },
  }[state];
  return (
    <span className="inline-flex items-center gap-1.5 rounded-[2px] border border-[var(--border)] py-1 pl-1 pr-2">
      <span className="grid h-5 w-5 place-items-center rounded-[2px] bg-[var(--text)] font-mono text-[0.55rem] text-white">
        {initials}
      </span>
      <span
        className="rounded-[2px] px-1.5 py-0.5 font-mono text-[0.55rem] uppercase tracking-[0.1em]"
        style={{ color: map.color, background: map.bg }}
      >
        {map.label}
      </span>
    </span>
  );
}

/* ---------- 02 Problem ---------- */

function Problem() {
  return (
    <section id="product" className="border-b border-[var(--border)]">
      <Container className="py-20 md:py-28">
        <Rail n="02" label="The problem" />
        <h2 className={`${display.className} max-w-[18ch] text-[2rem] font-medium leading-[1.08] tracking-[-0.01em] md:text-[3rem]`}>
          Status meetings shouldn&rsquo;t be where you discover problems.
        </h2>
        <p className="mt-6 font-mono text-sm tracking-[0.04em] text-[var(--muted)]">
          By the time it&rsquo;s on the agenda, the decision already shipped.
        </p>
      </Container>
    </section>
  );
}

/* ---------- 03 Integrations ---------- */

function Integrations() {
  return (
    <section className="border-b border-[var(--border)]">
      <Container className="py-20 md:py-28">
        <Rail n="03" label="Integrations" />
        <div className="grid gap-12 md:grid-cols-[1fr_1.1fr] md:gap-16">
          <div className="flex flex-col justify-center">
            <p className={`${display.className} text-[1.6rem] font-medium leading-[1.2] tracking-[-0.01em] md:text-[2rem]`}>
              Most tools watch one vendor. Husn reconciles across all of them.
            </p>
            <p className="mt-6 font-mono text-[0.7rem] uppercase tracking-[0.16em] text-[var(--muted)]">
              Read-only · 16 sources · One truth
            </p>
          </div>

          <div className="grid grid-cols-4 overflow-hidden rounded-[2px] border border-[var(--border)]">
            {TOOLS.map((t, i) => (
              <div
                key={t}
                className={`flex items-center justify-between gap-1 bg-[var(--surface)] px-3 py-4 font-mono text-[0.66rem] text-[var(--text)] ${
                  i % 4 !== 3 ? "border-r border-[var(--border)]" : ""
                } ${i < 12 ? "border-b border-[var(--border)]" : ""}`}
              >
                <span className="truncate">{t}</span>
                <span className="text-[var(--accent)]">▸</span>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

/* ---------- 04 How it works ---------- */

function HowItWorks() {
  return (
    <section id="how" className="border-b border-[var(--border)]">
      <Container className="py-20 md:py-28">
        <Rail n="04" label="How it works" />
        <div className="grid gap-px overflow-hidden rounded-[2px] border border-[var(--border)] bg-[var(--border)] md:grid-cols-3">
          <Step n="01" title="Connect">
            <p className="text-sm leading-relaxed text-[var(--muted)]">
              OAuth, read-only. We never write back.
            </p>
          </Step>
          <Step n="02" title="Listen">
            <p className="text-sm leading-relaxed text-[var(--muted)]">We watch for drift:</p>
            <ul className="mt-3 space-y-1.5 font-mono text-[0.72rem] text-[var(--text)]">
              {DRIFT.map((d) => (
                <li key={d}>· {d}</li>
              ))}
            </ul>
          </Step>
          <Step n="03" title="Brief">
            <p className="text-sm leading-relaxed text-[var(--muted)]">
              Source-cited, in the right inboxes, 30 minutes before each sync.
            </p>
            <a href="#pricing" className="mt-4 inline-block font-mono text-[0.72rem] uppercase tracking-[0.12em] text-[var(--accent)]">
              See pricing ▸
            </a>
          </Step>
        </div>
      </Container>
    </section>
  );
}

function Step({ n, title, children }: { n: string; title: string; children: React.ReactNode }) {
  return (
    <div className="bg-[var(--bg)] p-7">
      <div className="flex items-baseline gap-3">
        <span className="font-mono text-xs text-[var(--accent)]">{n}</span>
        <h3 className={`${display.className} text-xl font-medium`}>{title}</h3>
      </div>
      <div className="mt-4">{children}</div>
    </div>
  );
}

/* ---------- 05 Pricing ---------- */

function Pricing() {
  return (
    <section id="pricing" className="border-b border-[var(--border)]">
      <Container className="py-20 md:py-28">
        <Rail n="05" label="Pricing" />
        <h2 className={`${display.className} max-w-[20ch] text-[2rem] font-medium leading-[1.1] tracking-[-0.01em] md:text-[3rem]`}>
          We watch quietly for two weeks before a single alert goes out.
        </h2>
        <p className="mt-6 font-mono text-[0.72rem] uppercase tracking-[0.14em] text-[var(--muted)]">
          Pilot pricing · Per program, not per seat · Two-week shadow mode
        </p>
        <div className="mt-8">
          <FilledCTA>Start a pilot</FilledCTA>
        </div>
      </Container>
    </section>
  );
}

/* ---------- 06 FAQ ---------- */

function Faq() {
  return (
    <section id="faq" className="border-b border-[var(--border)]">
      <Container className="py-20 md:py-28">
        <div className="grid gap-10 md:grid-cols-[0.4fr_1fr]">
          <div>
            <span className="font-mono text-xs uppercase tracking-[0.18em] text-[var(--muted)]">
              06 / FAQ
            </span>
          </div>
          <ul className="border-t border-[var(--border)]">
            {FAQ.map((f) => (
              <li key={f.q} className="border-b border-[var(--border)]">
                <details className="group">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-5">
                    <span className={`${display.className} text-lg md:text-xl`}>{f.q}</span>
                    <span className="font-mono text-sm text-[var(--accent)] transition-transform group-open:rotate-45">
                      +
                    </span>
                  </summary>
                  <p className="max-w-[60ch] pb-5 text-[0.95rem] leading-relaxed text-[var(--muted)]">
                    {f.a}
                  </p>
                </details>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}

/* ---------- 07 Founder ---------- */

function Founder() {
  return (
    <section className="border-b border-[var(--border)]">
      <Container className="py-20 md:py-28">
        <Rail n="07" label="Why Husn exists" />
        <blockquote className={`${display.className} max-w-[58ch] text-2xl font-medium italic leading-snug md:text-[2rem]`}>
          &ldquo;The worst moments running programs were always the same: finding
          out in the meeting that something had quietly broken days earlier. Husn
          is the brief we wished we&rsquo;d had.&rdquo;
        </blockquote>
        <p className="mt-6 font-mono text-xs uppercase tracking-[0.16em] text-[var(--muted)]">
          The Husn team
        </p>
      </Container>
    </section>
  );
}

/* ---------- 08 Demo ---------- */

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
      <Container className="grid gap-12 py-20 md:grid-cols-2 md:gap-16 md:py-28">
        <div>
          <Rail n="08" label="Sign-off" />
          <h2 className={`${display.className} text-[2.2rem] font-medium leading-[1.05] tracking-[-0.01em] md:text-[3.2rem]`}>
            Book a demo.
          </h2>
          <p className="mt-5 font-mono text-[0.72rem] uppercase tracking-[0.14em] text-[var(--muted)]">
            15 minutes. See your own tools in shadow mode.
          </p>
        </div>

        <div className="flex items-center">
          {state.kind === "success" ? (
            <div className="w-full rounded-[2px] border border-[var(--border)] bg-[var(--surface)] p-8">
              <h3 className={`${display.className} text-2xl`}>Request received.</h3>
              <p className="mt-3 text-[var(--muted)]">
                It goes straight to the founder. You&rsquo;ll hear back within a day
                with a couple of times.
              </p>
            </div>
          ) : (
            <form
              onSubmit={onSubmit}
              noValidate
              className="w-full rounded-[2px] border border-[var(--border)] bg-[var(--surface)] p-8"
            >
              <label className="block">
                <span className="font-mono text-[0.66rem] uppercase tracking-[0.14em] text-[var(--muted)]">
                  Your role
                </span>
                <select
                  name="role"
                  required
                  defaultValue=""
                  className="mt-2 w-full rounded-[2px] border border-[var(--border)] bg-[var(--bg)] px-3 py-3 text-sm outline-none focus:border-[var(--accent)]"
                >
                  <option value="" disabled>
                    Select
                  </option>
                  {["TPM / Program", "EPM", "PMO / Ops", "Eng leadership", "Other"].map((r) => (
                    <option key={r} value={r}>
                      {r}
                    </option>
                  ))}
                </select>
              </label>

              <label className="mt-5 block">
                <span className="font-mono text-[0.66rem] uppercase tracking-[0.14em] text-[var(--muted)]">
                  Your work email
                </span>
                <input
                  name="email"
                  type="email"
                  required
                  placeholder="you@company.com"
                  className="mt-2 w-full rounded-[2px] border border-[var(--border)] bg-[var(--bg)] px-3 py-3 text-sm outline-none placeholder:text-[var(--muted)] focus:border-[var(--accent)]"
                />
              </label>

              <button
                type="submit"
                disabled={state.kind === "submitting"}
                className="mt-6 inline-flex items-center gap-2 rounded-[2px] bg-[var(--accent)] px-5 py-3 font-mono text-xs uppercase tracking-[0.12em] text-white transition-opacity hover:opacity-90 disabled:opacity-60"
              >
                {state.kind === "submitting" ? "Sending" : "Book a demo"}
              </button>
              {state.kind === "error" && (
                <p role="alert" className="mt-3 font-mono text-xs text-[var(--conflict)]">
                  {state.message}
                </p>
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
    <footer className="border-t border-[var(--border)]">
      <Container className="flex flex-col items-start justify-between gap-3 py-8 font-mono text-[0.66rem] uppercase tracking-[0.14em] text-[var(--muted)] md:flex-row md:items-center">
        <span>Read-only OAuth · Never writes back · Not used for training</span>
        <span>Husn · {new Date().getFullYear()}</span>
      </Container>
    </footer>
  );
}
