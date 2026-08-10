import { OrbitalGraphic } from "@/components/orbital-graphic";

export function Integrations() {
  return (
    <section
      id="integrations"
      className="relative flex items-center overflow-hidden border-b border-ink/[0.06] bg-paper py-24 md:py-28"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-dot-paper bg-dots [mask-image:radial-gradient(ellipse_at_center,black_22%,transparent_70%)] opacity-50"
      />

      <div className="relative z-10 mx-auto w-full max-w-page px-6">
        <div className="grid items-center gap-8 lg:grid-cols-[0.75fr,1.25fr] lg:gap-12">
          <div className="max-w-md">
            <span className="eyebrow">Integrations</span>
            <h2 className="mt-5 text-4xl font-extrabold leading-[1.05] text-display tracking-display text-ink md:text-6xl">
              Connect the tools you already use.
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-ink-muted md:text-xl">
              Husn plugs into Jira, Slack, and your docs and reads what your team
              already does. Nobody adopts anything new.
            </p>
          </div>

          <OrbitalGraphic />
        </div>
      </div>
    </section>
  );
}
