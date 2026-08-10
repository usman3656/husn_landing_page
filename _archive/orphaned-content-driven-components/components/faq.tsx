import { faq } from "@/lib/content";

export function Faq() {
  return (
    <section
      id="faq"
      className="relative overflow-hidden border-b border-ink/[0.06] bg-paper-dim"
    >
      <div className="relative z-10 mx-auto max-w-page px-6 py-24 md:py-28">
        <div className="max-w-2xl">
          <h2 className="text-4xl font-extrabold leading-[1.05] text-display tracking-display text-ink md:text-6xl">
            {faq.heading}
          </h2>
        </div>

        <ul className="mt-12 max-w-3xl divide-y divide-ink/[0.08] overflow-hidden rounded-2xl border border-ink/[0.08] bg-white shadow-card">
          {faq.items.map((item, i) => (
            <li key={i}>
              <details className="group">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 px-6 py-5 transition-colors hover:bg-paper-dim/60">
                  <span className="text-base font-semibold text-ink md:text-lg">
                    {item.q}
                  </span>
                  <span
                    aria-hidden="true"
                    className="grid h-7 w-7 shrink-0 place-items-center rounded-full border border-ink/15 bg-paper text-sm text-ink-muted transition-all duration-300 group-open:rotate-45 group-open:border-accent group-open:bg-accent-soft group-open:text-accent"
                  >
                    +
                  </span>
                </summary>
                <p className="max-w-prose px-6 pb-6 text-[0.95rem] leading-relaxed text-ink-muted">
                  {item.a}
                </p>
              </details>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
