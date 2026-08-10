"use client";

/* G5 — "Above the noise". Tightest trunk-test: one clear promise, calm picture
   card, the dots connecting, a pre-launch waitlist (no pricing wall).
   Inter Tight + Inter + Plex Mono. Blue accent, amber only for risk. */

import { useState } from "react";
import { Inter_Tight, IBM_Plex_Mono } from "next/font/google";
import { submitDemoRequest } from "@/lib/waitlist-action";

const tight = Inter_Tight({ subsets: ["latin"], weight: ["500", "600"], display: "swap" });
const mono = IBM_Plex_Mono({ subsets: ["latin"], weight: ["400", "500"], display: "swap" });

const t: React.CSSProperties = {
  ["--paper" as string]: "#F7F5F1",
  ["--ink" as string]: "#16181D",
  ["--slate" as string]: "#5B6470",
  ["--line" as string]: "#E4E0D8",
  ["--blue" as string]: "#2A52CC",
  ["--amber" as string]: "#C77A1F",
};

export default function G5() {
  return (
    <div style={t} className="min-h-screen bg-[var(--paper)] text-[var(--ink)] antialiased">
      <style>{`@keyframes g5draw{from{stroke-dashoffset:240}to{stroke-dashoffset:0}}.g5line{stroke-dasharray:240;animation:g5draw 1.6s ease both .3s}`}</style>

      <header className="border-b border-[var(--line)]">
        <div className="mx-auto flex h-16 max-w-[1080px] items-center justify-between px-6">
          <span className={`${tight.className} text-xl font-semibold`}>Husn</span>
          <nav className="hidden gap-6 text-sm text-[var(--slate)] md:flex"><a href="#sees">What it does</a><a href="#how">How it works</a><a href="#trust">Trust</a></nav>
          <a href="#cta" className="rounded-lg bg-[var(--blue)] px-4 py-2 text-[13px] font-medium text-white">Join the waitlist</a>
        </div>
      </header>

      <section className="border-b border-[var(--line)]">
        <div className="mx-auto grid max-w-[1080px] gap-10 px-6 py-20 md:grid-cols-[1.1fr_1fr] md:py-28">
          <div className="flex flex-col justify-center">
            <h1 className={`${tight.className} text-4xl font-semibold leading-[1.05] tracking-[-0.02em] md:text-6xl`}>
              Everyone has the information. Nobody has the same picture.
            </h1>
            <p className="mt-6 max-w-[46ch] text-lg leading-relaxed text-[var(--slate)]">
              Husn is the intelligence layer that sits above your tools and gives leaders one
              shared, current picture. What changed, why it matters, who is affected, what to do next.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#cta" className="rounded-lg bg-[var(--blue)] px-6 py-3 text-sm font-medium text-white">See it on your org</a>
              <a href="#how" className="rounded-lg border border-[var(--ink)]/15 px-6 py-3 text-sm font-medium">How it works</a>
            </div>
          </div>

          <div className="flex items-center">
            <div className="w-full rounded-xl border border-[var(--line)] bg-white p-5">
              <div className={`${mono.className} text-[11px] uppercase tracking-[0.14em] text-[var(--slate)]`}>Today, across 14 tools</div>
              <svg viewBox="0 0 320 120" className="mt-3 w-full" aria-hidden="true">
                <line className="g5line" x1="40" y1="30" x2="160" y2="60" stroke="var(--blue)" strokeWidth="1.5" />
                <line className="g5line" x1="160" y1="60" x2="280" y2="92" stroke="var(--blue)" strokeWidth="1.5" />
                <g><rect x="10" y="16" width="80" height="28" rx="4" fill="#F7F5F1" stroke="var(--line)" /><text x="50" y="34" textAnchor="middle" fontSize="10" fill="#5B6470" fontFamily="monospace">slack</text></g>
                <g><rect x="120" y="46" width="80" height="28" rx="4" fill="#F7F5F1" stroke="var(--line)" /><text x="160" y="64" textAnchor="middle" fontSize="10" fill="#5B6470" fontFamily="monospace">jira</text></g>
                <g><rect x="240" y="78" width="72" height="28" rx="4" fill="#F7F5F1" stroke="var(--line)" /><text x="276" y="96" textAnchor="middle" fontSize="10" fill="#5B6470" fontFamily="monospace">doc</text></g>
              </svg>
              <p className="mt-3 text-sm text-[var(--ink)]">Three signals, one story: a slip in Jira, a decision in a doc, a thread in Slack. Same risk.</p>
            </div>
          </div>
        </div>
      </section>

      <Sec id="sees" label="What Husn does">
        <div className="grid gap-px overflow-hidden rounded-xl border border-[var(--line)] bg-[var(--line)] md:grid-cols-2">
          {[
            "Surfaces what changed and why it matters",
            "Reveals hidden dependencies",
            "Catches drift in ownership and alignment",
            "Prepares you before the meeting that matters",
          ].map((v) => (<div key={v} className="bg-[var(--paper)] p-7"><p className={`${tight.className} text-xl font-medium`}>{v}</p></div>))}
        </div>
      </Sec>

      <Sec id="how" label="It sits above, it does not replace" alt>
        <div className="flex flex-wrap gap-2.5">
          {["Slack", "Jira", "Email", "Docs", "Planning", "Meetings"].map((x) => (<span key={x} className="rounded-lg border border-[var(--line)] bg-white px-4 py-2 text-sm">{x}</span>))}
        </div>
        <p className={`${tight.className} mt-8 max-w-[24ch] text-2xl font-medium md:text-3xl`}>Read only. Above your stack. Nothing to migrate.</p>
        <p className="mt-4 text-lg text-[var(--slate)]">The pattern is already in your data. We do not invent it. We surface it.</p>
      </Sec>

      <section id="cta" className="border-t border-[var(--line)]">
        <div className="mx-auto max-w-[640px] px-6 py-20 text-center md:py-28">
          <h2 className={`${tight.className} text-3xl font-semibold md:text-5xl`}>Lead from one picture.</h2>
          <p className="mt-4 text-lg text-[var(--slate)]">We are onboarding our first teams now. Join the waitlist and we will reach out.</p>
          <Waitlist />
        </div>
      </section>
    </div>
  );
}

function Waitlist() {
  const [done, setDone] = useState(false);
  const [err, setErr] = useState("");
  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const email = String(new FormData(e.currentTarget).get("email") ?? "").trim();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return setErr("Enter a valid email.");
    setErr("");
    submitDemoRequest({ role: "Waitlist", email }).then((r) => (r.ok ? setDone(true) : setErr(r.message)));
  }
  if (done) return <p className="mt-8 text-[var(--slate)]">You are on the list. We will be in touch.</p>;
  return (
    <form onSubmit={onSubmit} noValidate className="mx-auto mt-8 flex max-w-[420px] gap-2">
      <input name="email" type="email" required placeholder="you@company.com" className="flex-1 rounded-lg border border-[var(--line)] bg-white px-4 py-3 text-sm outline-none focus:border-[var(--blue)]" />
      <button className="rounded-lg bg-[var(--blue)] px-5 py-3 text-sm font-medium text-white">Join</button>
      {err && <p role="alert" className="text-sm text-[var(--amber)]">{err}</p>}
    </form>
  );
}

function Sec({ id, label, alt, children }: { id?: string; label: string; alt?: boolean; children: React.ReactNode }) {
  return (
    <section id={id} className={`border-b border-[var(--line)] ${alt ? "bg-white/40" : ""}`}>
      <div className="mx-auto max-w-[1080px] px-6 py-20 md:py-24">
        <div className="mb-8 font-mono text-[11px] uppercase tracking-[0.16em] text-[var(--slate)]">{label}</div>
        {children}
      </div>
    </section>
  );
}
