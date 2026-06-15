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

      <div className="relative z-10 mx-auto max-w-page px-6 pb-8 pt-8 md:pb-12 md:pt-12">
        <div className="grid items-center gap-8 lg:grid-cols-[1.05fr,0.95fr] lg:gap-16">
          <div>
            <h1 className="max-w-2xl text-3xl font-bold leading-[1.08] text-display text-ink animate-fade-in-up md:text-6xl">
              {hero.headline}
            </h1>

            <p className="mt-6 max-w-xl text-base leading-relaxed text-ink-muted animate-fade-in-up md:text-lg">
              {hero.sub}
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-3 animate-fade-in-up">
              <a
                href={hero.primaryCta.href}
                className="btn-primary inline-flex items-center gap-2 rounded-full px-6 py-3.5 text-sm font-semibold"
              >
                {hero.primaryCta.label}
                <span aria-hidden="true">→</span>
              </a>
              <a
                href={hero.secondaryCta.href}
                className="btn-outline inline-flex items-center gap-2 rounded-full px-6 py-3.5 text-sm font-semibold"
              >
                {hero.secondaryCta.label}
              </a>
            </div>

            <div className="mt-10 flex items-center gap-5 animate-fade-in-up">
              <p className="text-5xl font-bold leading-none tracking-tightish text-ink md:text-6xl">
                {hero.feature.value}
              </p>
              <div className="border-l border-ink/10 pl-5">
                <p className="text-base font-semibold text-ink">{hero.feature.label}</p>
                <p className="mt-1 text-sm leading-relaxed text-ink-muted">
                  {hero.feature.detail}
                </p>
              </div>
            </div>
          </div>

          <BriefMockup />
        </div>
      </div>
    </section>
  );
}

function BriefMockup() {
  return (
    <div className="relative animate-fade-in-up">
      <div className="relative">
        <div
          aria-hidden="true"
          className="absolute -right-3 -top-3 hidden h-24 w-24 rounded-2xl border border-ink/10 bg-white shadow-card md:block"
          style={{ transform: "rotate(8deg)" }}
        />

        <div className="relative rounded-3xl border border-ink/10 bg-white shadow-lift">
          <div className="flex items-center justify-between border-b border-ink/[0.06] px-5 py-3.5">
            <div className="flex items-center gap-2.5">
              <div className="grid h-7 w-7 place-items-center rounded-lg bg-ink text-paper">
                <span className="font-mono text-[0.62rem] font-bold tracking-[0.04em]">H</span>
              </div>
              <div>
                <p className="text-sm font-semibold text-ink">Husn brief</p>
                <p className="text-xs text-ink-dim">7:30 am · 30 min before the weekly meeting</p>
              </div>
            </div>
            <span className="rounded-full bg-accent-soft px-2.5 py-0.5 text-[0.65rem] font-semibold uppercase tracking-[0.12em] text-accent">
              Pre-meeting
            </span>
          </div>

          <div className="px-5 py-5">
            <p className="text-sm font-semibold text-ink">
              3 changes need your call before the weekly meeting
            </p>

            <ul className="mt-4 space-y-3">
              <BriefItem
                source="Slack"
                tone="ring"
                title="Scope cut: payments out of v1"
                detail="Owner shifted from @priya → @marcus · 14h ago"
              />
              <BriefItem
                source="Jira"
                tone="warn"
                title="MOB-412 blocked by infra ticket"
                detail="Dependency added by @raj · 3h ago"
              />
              <BriefItem
                source="Doc"
                tone="muted"
                title="PRD edited after sign-off"
                detail="Pricing section rewritten · 2 days ago"
              />
            </ul>

            <div className="mt-5 flex items-center justify-between border-t border-ink/[0.06] pt-4">
              <div className="flex -space-x-1.5">
                <Avatar initials="PR" tone="#2563EB" />
                <Avatar initials="MK" tone="#16A34A" />
                <Avatar initials="RJ" tone="#0F766E" />
                <span className="grid h-7 w-7 place-items-center rounded-full border border-ink/10 bg-paper-dim text-[0.62rem] font-semibold text-ink-muted">
                  +4
                </span>
              </div>
              <a
                href="#how"
                className="inline-flex items-center gap-1 text-sm font-semibold text-accent hover:text-accent-deep"
              >
                Open brief
                <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function BriefItem({
  source,
  tone,
  title,
  detail,
}: {
  source: string;
  tone: "ring" | "warn" | "muted";
  title: string;
  detail: string;
}) {
  const dot =
    tone === "ring"
      ? "bg-accent"
      : tone === "warn"
        ? "bg-signal-yellow"
        : "bg-ink-subtle";
  const badge =
    tone === "ring"
      ? "bg-accent-soft text-accent"
      : tone === "warn"
        ? "bg-paper-dim text-ink"
        : "bg-paper-dim text-ink-muted";
  return (
    <li className="flex items-start gap-3">
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

function Avatar({ initials, tone }: { initials: string; tone: string }) {
  return (
    <span
      className="grid h-7 w-7 place-items-center rounded-full text-[0.62rem] font-bold text-white ring-2 ring-white"
      style={{ backgroundColor: tone }}
    >
      {initials}
    </span>
  );
}
