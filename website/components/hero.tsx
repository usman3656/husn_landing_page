import Image from "next/image";
import { hero } from "../content";
import { ArrowButton, Button, Glyph } from "./ui";
import heroImg from "../assets/hero.jpg";

/* Full-bleed landscape with a dark wash, centred serif headline, lime CTA,
   and three dark stat cards that overlap the bottom edge. */
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

      <div className="relative mx-auto max-w-[1266px] px-6 pb-12 pt-36 text-center md:px-10 md:pt-40">
        <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-black/70 px-3 py-1 text-sm">
          <Glyph size={12} />
          {hero.pill}
        </span>
        <h1 className="mx-auto mt-5 font-serif text-[44px] leading-[1.05] md:text-[64px] md:leading-[1.1]">
          {hero.headline}
        </h1>
        <p className="mx-auto mt-4 max-w-[34ch] font-serif text-[22px] leading-snug text-white/90 md:text-[30px]">
          {hero.sub}
        </p>
        <div className="mt-7">
          <Button href={hero.cta.href}>{hero.cta.label}</Button>
        </div>

        <ul className="mt-16 grid gap-5 text-left md:mt-20 md:grid-cols-3">
          {hero.stats.map((s) => (
            <li
              key={s.label}
              className="flex items-end justify-between gap-4 rounded-2xl border border-white/10 bg-[linear-gradient(180deg,#26271B_0%,#0C0C12_100%)] p-6 pt-16 shadow-[0_20px_50px_-20px_rgba(0,0,0,0.7)]"
            >
              <div>
                <p className="font-serif text-[56px] leading-none">{s.value}</p>
                <p className="mt-3 text-[15px] leading-snug text-white/75">{s.label}</p>
              </div>
              <ArrowButton href="#book" label={`${s.label} Book a call.`} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
