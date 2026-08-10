import { founder } from "@/lib/content";

export function Founder() {
  // Until a real name is filled in, render nothing rather than ship a
  // bracketed placeholder into the highest-trust slot on the page.
  if (founder.name.trim().startsWith("[")) return null;

  return (
    <section className="relative overflow-hidden border-b border-ink/[0.06] bg-paper-dim">
      <div className="relative z-10 mx-auto w-full max-w-page px-6 py-24 md:py-28">
        <div className="mx-auto max-w-3xl">
          <span className="eyebrow">{founder.eyebrow}</span>

          <blockquote className="mt-7 text-2xl font-semibold leading-snug tracking-tightish text-ink text-display md:text-3xl">
            &ldquo;{founder.quote}&rdquo;
          </blockquote>

          <div className="mt-8 flex items-center gap-4">
            {founder.photo ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={founder.photo}
                alt={founder.name}
                className="h-12 w-12 rounded-full object-cover ring-1 ring-ink/10"
              />
            ) : (
              <span className="grid h-12 w-12 place-items-center rounded-full bg-ink text-sm font-bold text-paper">
                {founder.initials}
              </span>
            )}
            <div>
              <p className="text-sm font-semibold text-ink">{founder.name}</p>
              <p className="text-sm text-ink-muted">
                {founder.role} · {founder.credential}
              </p>
            </div>
            {founder.linkedin && (
              <a
                href={founder.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="ml-auto text-sm font-semibold text-accent hover:text-accent-deep"
              >
                LinkedIn →
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
