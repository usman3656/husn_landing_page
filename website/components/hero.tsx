import Image from "next/image";
import { hero } from "../content";
import { Button } from "./ui";
import heroImg from "../assets/hero.jpg";

/* Full-screen landscape. The headline sits in the middle of the viewport and
   three glass cards rest along the bottom edge, letting the same image show
   through so they read as part of the scene. */
export function Hero() {
  return (
    <section id="top" className="relative flex min-h-screen flex-col overflow-hidden bg-black text-white">
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
        className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.55)_0%,rgba(0,0,0,0.25)_45%,rgba(0,0,0,0.6)_100%)]"
      />

      <div className="relative mx-auto flex w-full max-w-[1266px] flex-1 flex-col px-6 pb-8 pt-28 md:px-10 md:pb-10">
        <div className="flex flex-1 flex-col items-center justify-center text-center">
          <h1 className="mx-auto max-w-[14ch] font-serif text-[44px] leading-[1.05] md:text-[68px] md:leading-[1.08]">
            {hero.headline}
          </h1>
          <p className="mx-auto mt-6 max-w-[36ch] font-serif text-[22px] leading-snug text-white/90 md:text-[28px]">
            {hero.sub}
          </p>
          <div className="mt-9">
            <Button href={hero.cta.href} className="!px-7 !py-3 !text-base">
              {hero.cta.label}
            </Button>
          </div>
        </div>

        <ul className="mt-16 grid gap-4 text-left md:grid-cols-3">
          {hero.stats.map((s) => (
            <li
              key={s.label}
              className="flex items-center gap-5 rounded-2xl border border-white/15 bg-black/35 p-6 backdrop-blur-md"
            >
              <p className="min-w-[4.5ch] font-serif text-[48px] leading-none">{s.value}</p>
              <p className="text-[15px] leading-snug text-white/85">{s.label}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
