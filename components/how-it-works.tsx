import { how } from "@/lib/content";

const STEP_ICONS = [ConnectIcon, ListenIcon, BriefIcon];

export function HowItWorks() {
  return (
    <section
      id="how"
      className="relative flex min-h-screen items-center overflow-hidden border-b border-ink/[0.06] bg-paper"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-dot-paper bg-dots [mask-image:radial-gradient(ellipse_at_center,black_25%,transparent_75%)] opacity-50"
      />

      <div className="relative z-10 mx-auto w-full max-w-page px-6 py-12">
        <div className="max-w-2xl">
          <h2 className="text-2xl font-bold leading-[1.15] text-display tracking-display text-ink md:text-5xl">
            {how.heading}
          </h2>
        </div>

        <div className="relative mt-14">
          <svg
            aria-hidden="true"
            viewBox="0 0 1200 60"
            className="pointer-events-none absolute left-0 right-0 top-12 hidden h-16 w-full md:block"
            preserveAspectRatio="none"
          >
            <defs>
              <linearGradient id="flow" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#2563EB" stopOpacity="0.05" />
                <stop offset="50%" stopColor="#2563EB" stopOpacity="0.5" />
                <stop offset="100%" stopColor="#2563EB" stopOpacity="0.05" />
              </linearGradient>
            </defs>
            <path
              d="M 80 30 C 300 0, 500 60, 600 30 S 900 0, 1120 30"
              stroke="url(#flow)"
              strokeWidth="1.5"
              fill="none"
              strokeDasharray="4 5"
            />
            <circle r="4" fill="#2563EB">
              <animateMotion
                dur="6s"
                repeatCount="indefinite"
                path="M 80 30 C 300 0, 500 60, 600 30 S 900 0, 1120 30"
              />
            </circle>
          </svg>

          <ol className="grid gap-6 md:grid-cols-3 md:gap-8">
            {how.steps.map((s, i) => {
              const Icon = STEP_ICONS[i] ?? ConnectIcon;
              return (
                <li
                  key={s.number}
                  className="card relative rounded-2xl p-8 md:p-10"
                >
                  <div className="flex items-center justify-between">
                    <span className="grid h-14 w-14 place-items-center rounded-2xl bg-ink text-paper">
                      <Icon />
                    </span>
                    <span className="font-mono text-3xl font-bold tracking-tightish text-ink-subtle">
                      {s.number}
                    </span>
                  </div>
                  <h3 className="mt-8 text-xl font-bold tracking-tightish text-ink md:text-2xl">
                    {s.title}
                  </h3>
                  <p className="mt-4 text-sm leading-relaxed text-ink-muted md:text-base">
                    {s.body}
                  </p>
                </li>
              );
            })}
          </ol>

          <div className="mt-16 flex flex-col items-center gap-3 text-center">
            <a
              href="#demo"
              className="btn-primary inline-flex items-center gap-2 rounded-full px-7 py-4 text-base font-semibold"
            >
              Book a demo
              <span aria-hidden="true">→</span>
            </a>
            <p className="text-sm text-ink-muted">
              Be part of the team shaping Husn. Design partners get hands-on
              access.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function ConnectIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
      <path d="M9 15l-2 2a3.5 3.5 0 0 1-5-5l3-3a3.5 3.5 0 0 1 5 0M15 9l2-2a3.5 3.5 0 0 1 5 5l-3 3a3.5 3.5 0 0 1-5 0"
        stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M9 15l6-6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

function ListenIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
      <path d="M4 12a8 8 0 0 1 16 0" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <rect x="3" y="12" width="4" height="7" rx="2" stroke="currentColor" strokeWidth="1.8" />
      <rect x="17" y="12" width="4" height="7" rx="2" stroke="currentColor" strokeWidth="1.8" />
    </svg>
  );
}

function BriefIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
      <rect x="3" y="6" width="18" height="13" rx="2" stroke="currentColor" strokeWidth="1.8" />
      <path d="M3 8l9 6 9-6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
