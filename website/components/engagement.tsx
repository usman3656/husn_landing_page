import Image from "next/image";
import { band, engagement } from "../content";
import { Button, Check, Frame, Section } from "./ui";
import lakeImg from "../assets/lake.jpg";

/* One engagement card under a centred heading, then a rounded image band
   with a single call-to-action. */

export function Engagement() {
  const p = engagement.plan;
  return (
    <Section id="pricing" className="scroll-mt-10 bg-greige">
      <Frame>
        <div className="px-6 py-10 text-center md:py-12">
          <h2 className="font-serif text-[40px] leading-[1.05] md:text-[56px]">{engagement.heading}</h2>
        </div>
      </Frame>
      <div className="border-t border-black/10">
        <Frame className="!border-x-0 md:!border-x">
          <div className="mx-auto flex max-w-[760px] flex-col gap-4 p-5">
            <div className="flex flex-col rounded-2xl bg-card p-7 md:p-8">
              <h3 className="font-serif text-[32px] leading-none">{p.name}</h3>
              <p className="mt-5 font-serif text-[34px] leading-tight md:text-[40px]">{p.price}</p>
              <ul className="mt-8 space-y-3">
                {p.items.map((it) => (
                  <Check key={it}>{it}</Check>
                ))}
              </ul>
            </div>
            <Button href={p.cta.href} variant="black" block>
              {p.cta.label}
            </Button>
          </div>
        </Frame>
      </div>

      <div className="border-t border-black/10">
        <Frame className="!border-x-0 md:!border-x">
          <div className="relative overflow-hidden rounded-2xl text-center text-white">
            <Image src={lakeImg} alt="" fill sizes="(min-width: 1266px) 1266px, 100vw" className="object-cover saturate-[1.1]" />
            <div aria-hidden="true" className="absolute inset-0 bg-black/45" />
            <div className="relative px-6 py-14 md:py-20">
              <p className="text-[17px]">{band.kicker}</p>
              <h2 className="mx-auto mt-5 font-serif text-[40px] leading-[1.05] md:text-[64px]">{band.heading}</h2>
              <div className="mt-7">
                <Button href={band.cta.href}>{band.cta.label}</Button>
              </div>
            </div>
          </div>
        </Frame>
      </div>
    </Section>
  );
}
