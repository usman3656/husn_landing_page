import { hero } from "@/lib/content";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-paper">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-hero-paper"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-dot-paper bg-dots [mask-image:radial-gradient(ellipse_at_top,black_30%,transparent_75%)]"
      />

      <div className="relative z-10 mx-auto max-w-page px-6 pb-0 pt-14 md:pt-20">
        {/* Message — centered */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="eyebrow animate-fade-in-up">{hero.eyebrow}</span>

          <h1 className="mx-auto mt-5 max-w-3xl text-5xl font-extrabold leading-[1.05] text-display tracking-display text-ink animate-fade-in-up md:text-7xl">
            {hero.headline}
          </h1>

          <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-ink-muted animate-fade-in-up md:text-xl">
            {hero.sub}
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3 animate-fade-in-up">
            <a
              href={hero.primaryCta.href}
              className="btn-primary inline-flex items-center gap-2 rounded-full px-6 py-3.5 text-sm font-semibold"
            >
              {hero.primaryCta.label}
              <span aria-hidden="true">→</span>
            </a>
            <a
              href={hero.secondaryCta.href}
              className="inline-flex items-center gap-1.5 px-3 py-3.5 text-sm font-semibold text-ink-muted transition-colors hover:text-ink"
            >
              {hero.secondaryCta.label}
            </a>
          </div>
        </div>

        {/* Product — the brief, front and center in an app frame */}
        <ProductFrame />
      </div>
    </section>
  );
}

function ProductFrame() {
  return (
    <div className="relative mx-auto mt-16 max-w-4xl animate-fade-in-up md:mt-20">
      {/* Gradient pedestal glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -inset-x-10 -top-10 bottom-0"
        style={{
          background:
            "radial-gradient(640px 320px at 50% 0%, rgba(37,99,235,0.12), transparent 65%)",
        }}
      />

      {/* App window */}
      <div className="relative overflow-hidden rounded-2xl border border-ink/[0.08] bg-white shadow-lift">
        {/* Window chrome */}
        <div className="flex items-center gap-2 border-b border-ink/[0.06] bg-paper-dim/60 px-4 py-3">
          <span className="h-2.5 w-2.5 rounded-full bg-ink/15" />
          <span className="h-2.5 w-2.5 rounded-full bg-ink/15" />
          <span className="h-2.5 w-2.5 rounded-full bg-ink/15" />
          <span className="mx-auto flex items-center gap-1.5 rounded-md bg-white px-3 py-1 text-[0.7rem] text-ink-dim ring-1 ring-inset ring-ink/[0.06]">
            <LockIcon />
            husn.io · pre-sync brief
          </span>
        </div>

        {/* Brief body */}
        <div className="grid gap-0 md:grid-cols-[1.45fr_1fr]">
          {/* Left: the changes */}
          <div className="border-b border-ink/[0.06] px-6 py-6 md:border-b-0 md:border-r">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="grid h-8 w-8 place-items-center rounded-lg bg-ink text-paper">
                  <span className="font-mono text-[0.7rem] font-bold">H</span>
                </div>
                <div>
                  <p className="text-sm font-semibold text-ink">Husn brief</p>
                  <p className="text-xs text-ink-dim">7:30 am · 30 min before the weekly meeting</p>
                </div>
              </div>
              <span className="rounded-full bg-accent-soft px-2.5 py-0.5 text-[0.62rem] font-semibold uppercase tracking-[0.12em] text-accent">
                Pre-meeting
              </span>
            </div>

            <p className="mt-5 text-sm font-semibold text-ink">
              3 changes need your call before the weekly meeting
            </p>

            <ul className="mt-4 space-y-3">
              <BriefItem
                source="Slack"
                tone="ring"
                title="Scope cut: payments out of v1"
                detail="Owner shifted from @priya → @marcus · 14h ago"
                delay={120}
              />
              <BriefItem
                source="Jira"
                tone="warn"
                title="MOB-412 blocked by infra ticket"
                detail="Dependency added by @raj · 3h ago"
                delay={260}
              />
              <BriefItem
                source="Doc"
                tone="muted"
                title="PRD edited after sign-off"
                detail="Pricing section rewritten · 2 days ago"
                delay={400}
              />
            </ul>
          </div>

          {/* Right: who needs to know */}
          <div className="bg-paper-dim/40 px-6 py-6">
            <p className="text-[0.68rem] font-semibold uppercase tracking-[0.14em] text-ink-dim">
              Who needs to know
            </p>

            <div className="mt-4 space-y-3">
              <AckRow initials="PR" name="Priya R." role="TPM, Payments" state="seen" tone="#2563EB" delay={560} />
              <AckRow initials="MK" name="Marcus K." role="New owner" state="conflict" tone="#DC2626" delay={700} />
              <AckRow initials="RJ" name="Raj J." role="Infra" state="seen" tone="#0F766E" delay={840} />
              <AckRow initials="EL" name="Elena L." role="QA lead" state="pending" tone="#7C3AED" delay={980} />
            </div>

            <div className="brief-row mt-5 flex items-center justify-between border-t border-ink/[0.06] pt-4" style={{ animationDelay: "1120ms" }}>
              <span className="text-xs text-ink-dim">4 affected · 1 conflict</span>
              <span className="inline-flex items-center gap-1 text-sm font-semibold text-accent">
                Open brief
                <span aria-hidden="true">→</span>
              </span>
            </div>
          </div>
        </div>
      </div>

      <p className="mt-3 text-center text-xs text-ink-dim">
        Illustrative example · not real customer data
      </p>
    </div>
  );
}

function LockIcon() {
  return (
    <svg width="11" height="11" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="5" y="11" width="14" height="9" rx="2" stroke="currentColor" strokeWidth="2" />
      <path d="M8 11V8a4 4 0 0 1 8 0v3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function BriefItem({
  source,
  tone,
  title,
  detail,
  delay = 0,
}: {
  source: string;
  tone: "ring" | "warn" | "muted";
  title: string;
  detail: string;
  delay?: number;
}) {
  const dot =
    tone === "ring" ? "bg-accent" : tone === "warn" ? "bg-signal-yellow" : "bg-ink-subtle";
  const badge =
    tone === "ring"
      ? "bg-accent-soft text-accent"
      : tone === "warn"
        ? "bg-paper-dim text-ink"
        : "bg-paper-dim text-ink-muted";
  return (
    <li className="brief-row flex items-start gap-3" style={{ animationDelay: `${delay}ms` }}>
      <span className={`mt-1.5 inline-block h-2 w-2 shrink-0 rounded-full ${dot}`} />
      <div className="flex-1">
        <span
          className={`rounded-full px-2 py-0.5 text-[0.62rem] font-semibold uppercase tracking-[0.12em] ${badge}`}
        >
          {source}
        </span>
        <p className="mt-1.5 text-sm font-semibold leading-snug text-ink">{title}</p>
        <p className="mt-0.5 text-xs leading-relaxed text-ink-muted">{detail}</p>
      </div>
    </li>
  );
}

function AckRow({
  initials,
  name,
  role,
  state,
  tone,
  delay = 0,
}: {
  initials: string;
  name: string;
  role: string;
  state: "seen" | "pending" | "conflict";
  tone: string;
  delay?: number;
}) {
  const badge =
    state === "seen"
      ? { label: "Seen", cls: "bg-accent-soft text-accent" }
      : state === "conflict"
        ? { label: "Conflict", cls: "bg-signal-red/10 text-signal-red" }
        : { label: "Pending", cls: "bg-paper-deep text-ink" };
  return (
    <div className="brief-row flex items-center gap-2.5" style={{ animationDelay: `${delay}ms` }}>
      <span
        className="grid h-7 w-7 shrink-0 place-items-center rounded-full text-[0.6rem] font-bold text-white"
        style={{ backgroundColor: tone }}
      >
        {initials}
      </span>
      <div className="min-w-0 flex-1">
        <p className="truncate text-xs font-semibold text-ink">{name}</p>
        <p className="truncate text-[0.68rem] text-ink-dim">{role}</p>
      </div>
      <span
        className={`inline-block rounded-full px-2 py-0.5 text-[0.58rem] font-semibold uppercase tracking-wide ${badge.cls} ${state === "conflict" ? "ack-pulse" : ""}`}
      >
        {badge.label}
      </span>
    </div>
  );
}
