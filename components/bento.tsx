export function Bento() {
  return (
    <section
      id="how"
      className="relative overflow-hidden border-b border-ink/[0.06] bg-paper"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-dot-paper bg-dots [mask-image:radial-gradient(ellipse_at_top,black_20%,transparent_70%)] opacity-50"
      />

      <div className="relative z-10 mx-auto w-full max-w-page px-6 py-24 md:py-28">
        <div className="max-w-2xl">
          <span className="eyebrow">How it works</span>
          <h2 className="mt-5 text-4xl font-extrabold leading-[1.04] text-display tracking-display text-ink md:text-6xl">
            It watches the work, so the meeting doesn&rsquo;t have to.
          </h2>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {/* Drift */}
          <Tile>
            <TileLabel>Cross-source drift</TileLabel>
            <TileTitle>It catches what falls between your tools.</TileTitle>
            <TileBody>
              Slack says one thing, Jira says another, the doc was edited after
              sign-off. Husn reconciles them and flags the conflict, with every
              claim cited back to the source.
            </TileBody>
            <DriftVisual />
          </Tile>

          {/* Timing */}
          <Tile>
            <TileLabel>Pre-meeting</TileLabel>
            <TileTitle>30 minutes before, not 30 minutes in.</TileTitle>
            <TileBody>
              The brief lands while there&rsquo;s still time to act, so the room
              starts aligned, not surprised.
            </TileBody>
            <div className="mt-auto pt-6">
              <ClockVisual />
            </div>
          </Tile>

          {/* Flow */}
          <Tile>
            <TileLabel>The flow</TileLabel>
            <TileTitle>Three steps, then it runs itself.</TileTitle>
            <ol className="mt-5 space-y-4">
              <Step n="01" title="Connect" body="OAuth into Jira, Slack, and your docs. Read-only." />
              <Step n="02" title="Listen" body="Husn watches for stale assumptions, drift, and ambiguous ownership." />
              <Step n="03" title="Brief" body="A source-cited brief lands before each sync." />
            </ol>
          </Tile>

          {/* Security — light accent tile (orbital core stays the page's one dark moment) */}
          <div className="relative flex flex-col overflow-hidden rounded-2xl border border-accent/20 bg-accent-soft/30 p-8">
            <span className="eyebrow">Trust by default</span>
            <p className="mt-4 text-2xl font-bold tracking-tightish text-ink text-display md:text-3xl">
              Read-only. It never writes back.
            </p>
            <p className="mt-3 text-sm leading-relaxed text-ink-muted">
              Husn reads only what it needs to write the brief. It never posts,
              edits, or changes anything in your tools, and your data isn&rsquo;t
              used to train models.
            </p>
          </div>
        </div>

        <div className="mt-12 flex justify-center">
          <a
            href="#demo"
            className="btn-primary inline-flex items-center gap-2 rounded-full px-6 py-3.5 text-sm font-semibold"
          >
            Book a demo
            <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}

/* ---------- Tile primitives ---------- */

function Tile({ className, children }: { className?: string; children: React.ReactNode }) {
  return (
    <div
      className={`flex flex-col rounded-2xl border border-ink/[0.08] bg-white p-8 shadow-card transition-shadow hover:shadow-soft ${className ?? ""}`}
    >
      {children}
    </div>
  );
}

function TileLabel({ children }: { children: React.ReactNode }) {
  return (
    <span className="font-mono text-[0.66rem] font-semibold uppercase tracking-[0.16em] text-accent">
      {children}
    </span>
  );
}

function TileTitle({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="mt-3 text-xl font-bold tracking-tightish text-ink md:text-2xl">
      {children}
    </h3>
  );
}

function TileBody({ children }: { children: React.ReactNode }) {
  return <p className="mt-3 text-sm leading-relaxed text-ink-muted">{children}</p>;
}

function Step({ n, title, body }: { n: string; title: string; body: string }) {
  return (
    <li className="flex gap-4">
      <span className="font-mono text-sm font-bold text-ink-subtle">{n}</span>
      <div>
        <p className="text-sm font-semibold text-ink">{title}</p>
        <p className="mt-0.5 text-sm leading-relaxed text-ink-muted">{body}</p>
      </div>
    </li>
  );
}

/* ---------- Visuals ---------- */

function DriftVisual() {
  return (
    <div className="mt-auto flex items-center gap-3 pt-6">
      <div className="flex-1 rounded-xl border border-ink/[0.08] bg-paper-dim/50 p-3">
        <div className="flex items-center gap-1.5">
          <span className="h-4 w-4 rounded bg-[#611F69]" />
          <span className="text-[0.62rem] font-semibold uppercase tracking-wide text-ink-dim">Slack</span>
        </div>
        <p className="mt-1.5 text-xs font-medium text-ink">&ldquo;payments is out of v1&rdquo;</p>
      </div>

      <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-signal-yellow/15 text-signal-yellow ring-1 ring-inset ring-signal-yellow/30">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path d="M5 9h14M5 15h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          <path d="M4 4l16 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
      </span>

      <div className="flex-1 rounded-xl border border-ink/[0.08] bg-paper-dim/50 p-3">
        <div className="flex items-center gap-1.5">
          <span className="h-4 w-4 rounded bg-[#2684FF]" />
          <span className="text-[0.62rem] font-semibold uppercase tracking-wide text-ink-dim">Jira</span>
        </div>
        <p className="mt-1.5 text-xs font-medium text-ink">MOB-220 &ldquo;payments&rdquo; still open</p>
      </div>
    </div>
  );
}

function ClockVisual() {
  return (
    <div className="flex items-center gap-4">
      <svg width="64" height="64" viewBox="0 0 64 64" fill="none" aria-hidden="true">
        <circle cx="32" cy="32" r="26" stroke="#0B0E14" strokeOpacity="0.12" strokeWidth="3" />
        <circle
          cx="32"
          cy="32"
          r="26"
          stroke="#2563EB"
          strokeWidth="3"
          strokeLinecap="round"
          strokeDasharray="163"
          strokeDashoffset="122"
          transform="rotate(-90 32 32)"
        />
        <path d="M32 20v12l8 5" stroke="#0B0E14" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
      <div>
        <p className="text-2xl font-bold tracking-tightish text-ink tabular-nums">7:30 am</p>
        <p className="text-xs text-ink-dim">Weekly sync at 8:00 am</p>
      </div>
    </div>
  );
}

