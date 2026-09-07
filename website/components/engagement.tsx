import Image from "next/image";
import { band, engagement } from "../content";
import { Button, Check, Frame, Label, Section } from "./ui";
import lakeImg from "../assets/lake.jpg";

/* Two engagement cards under a centred heading, then a rounded image band
   with a single call-to-action. */

export function Engagement() {
  return (
    <Section id="pricing" className="scroll-mt-10 bg-greige">
      <Frame>
        <div className="px-6 py-16 text-center md:py-20">
          <Label>{engagement.label}</Label>
          <h2 className="mx-auto mt-5 max-w-[16ch] font-serif text-[40px] leading-[1.05] md:text-[56px]">
            {engagement.heading}
          </h2>
        </div>
      </Frame>
      <div className="border-t border-black/10">
        <Frame className="!border-x-0 md:!border-x">
          <div className="grid md:grid-cols-2">
            {engagement.plans.map((p, i) => (
              <div
                key={p.name}
                className={`flex flex-col gap-4 p-5 ${i === 0 ? "border-b border-black/10 md:border-b-0 md:border-r" : ""}`}
              >
                <div className="flex flex-1 flex-col rounded-2xl bg-card p-7 md:p-8">
                  <div className="flex items-center justify-between gap-4">
                    <h3 className="font-serif text-[32px] leading-none">{p.name}</h3>
                    <span className="rounded-full bg-black/[0.06] px-3 py-1 text-[15px] text-muted">{p.tag}</span>
                  </div>
                  <p className="mt-6 font-serif text-[34px] leading-tight md:text-[40px]">{p.price}</p>
                  <ul className="mt-24 space-y-3">
                    {p.items.map((it) => (
                      <Check key={it}>{it}</Check>
                    ))}
                  </ul>
                </div>
                <Button href={p.cta.href} variant="black" block>
                  {p.cta.label}
                </Button>
              </div>
            ))}
          </div>
        </Frame>
      </div>

      <div className="border-t border-black/10">
        <Frame className="!border-x-0 md:!border-x">
          <div>
            <div className="relative overflow-hidden rounded-2xl text-center text-white">
              <Image src={lakeImg} alt="" fill sizes="(min-width: 1266px) 1266px, 100vw" className="object-cover saturate-[1.1]" />
              <div aria-hidden="true" className="absolute inset-0 bg-black/45" />
              <div className="relative px-6 py-16 md:py-24">
                <p className="text-[17px]">{band.kicker}</p>
                <h2 className="mx-auto mt-6 max-w-[14ch] font-serif text-[40px] leading-[1.05] md:text-[64px]">
                  {band.heading}
                </h2>
                <div className="mt-8">
                  <Button href={band.cta.href}>{band.cta.label}</Button>
                </div>
              </div>
            </div>
          </div>
        </Frame>
      </div>
    </Section>
  );
}
