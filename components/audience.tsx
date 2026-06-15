import { audience } from "@/lib/content";

const ROLE_ICONS = [TpmIcon, LeaderIcon, TeamIcon, FounderIcon];

export function Audience() {
  return (
    <section
      id="audience"
      className="relative flex min-h-screen items-center overflow-hidden border-b border-ink/[0.06] bg-paper"
    >
      <div className="relative z-10 mx-auto w-full max-w-page px-6 py-12">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-2xl font-bold leading-[1.15] text-display tracking-display text-ink md:text-5xl">
            {audience.heading}
          </h2>
        </div>

        <ul className="mx-auto mt-14 grid max-w-5xl gap-6 md:grid-cols-2">
          {audience.forItems.map((text, i) => {
            const Icon = ROLE_ICONS[i] ?? TpmIcon;
            return (
              <li key={text} className="card group rounded-2xl p-8 md:p-10">
                <div className="flex items-start gap-5">
                  <span className="grid h-14 w-14 shrink-0 place-items-center rounded-xl bg-accent-soft text-accent transition-colors group-hover:bg-accent group-hover:text-white">
                    <Icon />
                  </span>
                  <p className="text-sm leading-relaxed text-ink md:text-base">
                    {text}
                  </p>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

function TpmIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
      <rect x="3" y="4" width="18" height="16" rx="2" stroke="currentColor" strokeWidth="1.8" />
      <path d="M7 9h6M7 13h10M7 17h7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

function LeaderIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
      <path d="M3 19l4-9 4 5 4-7 6 11" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="7" cy="10" r="1.5" fill="currentColor" />
      <circle cx="15" cy="8" r="1.5" fill="currentColor" />
    </svg>
  );
}

function TeamIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
      <circle cx="9" cy="9" r="3" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="17" cy="10" r="2.5" stroke="currentColor" strokeWidth="1.8" />
      <path d="M3 19c0-3 2.7-5.5 6-5.5s6 2.5 6 5.5M14.5 19c0-2 1.5-4 3.5-4s3 1.5 3 4"
        stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

function FounderIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
      <path d="M12 3l2.6 5.4 5.9.9-4.3 4.2 1 5.9L12 16.6 6.8 19.4l1-5.9L3.5 9.3l5.9-.9L12 3z"
        stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
    </svg>
  );
}
