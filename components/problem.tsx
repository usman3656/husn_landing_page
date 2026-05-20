import { problem } from "@/lib/content";

export function Problem() {
  return (
    <section className="relative overflow-hidden border-y border-ink/[0.06] bg-paper-dim">
      <div className="relative z-10 mx-auto max-w-page px-6 py-20 md:py-24">
        <div className="max-w-3xl">
          <span className="eyebrow">The Problem</span>
          <h2 className="mt-6 text-4xl font-bold leading-[1.05] text-display tracking-display text-ink md:text-5xl">
            {problem.heading}
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-ink-muted md:text-xl">
            {problem.body}
          </p>
        </div>

        <ul className="mt-12 grid gap-5 md:grid-cols-3">
          {problem.bullets.map((b, i) => (
            <li key={i} className="card rounded-2xl p-7">
              <p className="text-base leading-relaxed text-ink">{b}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
