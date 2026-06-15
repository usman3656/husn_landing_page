import { pricing } from "@/lib/content";

export function Pricing() {
  return (
    <section
      id="pricing"
      className="relative overflow-hidden border-b border-ink/[0.06] bg-paper-dim"
    >
      <div className="relative z-10 mx-auto w-full max-w-page px-6 py-24 md:py-28">
        <div className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">{pricing.eyebrow}</span>
          <h2 className="mt-5 text-4xl font-extrabold leading-[1.05] text-display tracking-display text-ink md:text-6xl">
            {pricing.heading}
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-ink-muted">
            {pricing.sub}
          </p>

          <div className="mt-9 flex justify-center">
            <a
              href={pricing.cta.href}
              className="btn-primary inline-flex items-center gap-2 rounded-full px-6 py-3.5 text-sm font-semibold"
            >
              {pricing.cta.label}
              <span aria-hidden="true">→</span>
            </a>
          </div>

          <p className="mt-6 text-sm text-ink-dim">{pricing.note}</p>
        </div>
      </div>
    </section>
  );
}
