import Image from "next/image";
import { hero } from "../content";
import { ArrowButton, Button } from "./ui";
import heroImg from "../assets/hero.jpg";

/* Full-bleed landscape with a dark wash, centred serif headline, lime CTA,
   a logo strip, and three dark stat cards that overlap the bottom edge. */
export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-black text-white">
      <Image
        src={heroImg}
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover object-center saturate-[1.15]"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.55)_0%,rgba(0,0,0,0.25)_40%,rgba(0,0,0,0.65)_100%)]"
      />

      <div className="relative mx-auto max-w-[1266px] px-6 pb-16 pt-40 text-center md:px-10 md:pt-44">
        <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-black/70 px-3 py-1 text-sm">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M8 4L3 20M15 4l-5 16M21 4l-5 16" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
          </svg>
          {hero.pill}
        </span>
        <h1 className="mx-auto mt-5 max-w-[16ch] font-serif text-[44px] leading-[1.05] md:text-[64px] md:leading-[1.1]">
          {hero.headline}
        </h1>
        <p className="mx-auto mt-3 font-serif text-[22px] leading-snug text-white/90 md:text-[32px]">
          {hero.sub}
        </p>
        <div className="mt-7">
          <Button href={hero.cta.href}>{hero.cta.label}</Button>
        </div>

        <div id="clients" className="mt-24 scroll-mt-24 md:mt-32">
          <p className="text-[15px] text-white/90">{hero.caption}</p>
          <ul className="mt-5 flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
            {hero.clients.map((c) => (
              <li
                key={c}
                className="font-sans text-[20px] font-bold uppercase tracking-[0.08em] text-white/85 md:text-[24px]"
              >
                {c}
              </li>
            ))}
          </ul>
        </div>

        <ul className="mt-14 grid gap-5 text-left md:grid-cols-3">
          {hero.stats.map((s) => (
            <li
              key={s.label}
              className="flex items-end justify-between rounded-2xl border border-white/10 bg-[linear-gradient(180deg,#26271B_0%,#0C0C12_100%)] p-6 pt-24 shadow-[0_20px_50px_-20px_rgba(0,0,0,0.7)]"
            >
              <div>
                <p className="font-serif text-[44px] leading-none">{s.value}</p>
                <p className="mt-3 text-[15px] text-white/70">{s.label}</p>
              </div>
              <ArrowButton href="#book" label={`${s.label}: book a call`} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
