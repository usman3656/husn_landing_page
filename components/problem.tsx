import { problem } from "@/lib/content";

const PROBLEM_ICONS = [SlackDriftIcon, DocDriftIcon, OwnerDriftIcon];

export function Problem() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden border-y border-ink/[0.06] bg-paper-dim">
      <div className="relative z-10 mx-auto w-full max-w-page px-6 py-12">
        <div className="max-w-3xl">
          <h2 className="text-4xl font-bold leading-[1.05] text-display tracking-display text-ink md:text-6xl">
            {problem.heading}
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-ink-muted md:text-xl">
            {problem.body}
          </p>
        </div>

        <ul className="mt-14 grid gap-6 md:mt-16 md:grid-cols-3">
          {problem.bullets.map((b, i) => {
            const Icon = PROBLEM_ICONS[i] ?? SlackDriftIcon;
            return (
              <li key={i} className="card rounded-2xl p-8 md:p-10">
                <div className="flex items-center justify-between">
                  <span className="grid h-14 w-14 place-items-center rounded-2xl bg-ink text-paper">
                    <Icon />
                  </span>
                  <span className="font-mono text-2xl font-bold tracking-tightish text-ink-subtle">
                    0{i + 1}
                  </span>
                </div>
                <p className="mt-8 text-base leading-relaxed text-ink md:text-lg">
                  {b}
                </p>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

function SlackDriftIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path
        d="M4 10h7M4 14h10"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path
        d="M16 4l4 4-4 4"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M20 8H10"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

function DocDriftIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <rect
        x="4"
        y="3"
        width="13"
        height="16"
        rx="2"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <path
        d="M8 8h6M8 11h6M8 14h4"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <path
        d="M15 15l4 4M19 15l-4 4"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

function OwnerDriftIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <circle cx="8" cy="9" r="3" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="17" cy="10" r="2.5" stroke="currentColor" strokeWidth="1.8" />
      <path
        d="M3 19c0-3 2.5-5.5 5.5-5.5"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path
        d="M13 19c0-2 1.5-3.5 3.5-3.5"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path
        d="M8 13.5l5 2"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeDasharray="2 3"
      />
    </svg>
  );
}
