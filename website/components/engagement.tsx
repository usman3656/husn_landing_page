import Image from "next/image";
import { band } from "../content";
import { Button, Frame, Section } from "./ui";
import lakeImg from "../assets/lake.jpg";

/* Rounded image band with a single call-to-action. */

export function Engagement() {
  return (
    <Section id="cta" className="scroll-mt-10 bg-greige">
      <div>
        <Frame className="!border-x-0 md:!border-x">
          <div className="relative overflow-hidden rounded-2xl text-center text-white">
            <Image src={lakeImg} alt="" fill sizes="(min-width: 1266px) 1266px, 100vw" className="object-cover saturate-[1.1]" />
            <div aria-hidden="true" className="absolute inset-0 bg-black/45" />
            <div className="relative px-6 py-20 md:py-28">
              <p className="text-[17px]">{band.kicker}</p>
              <h2 className="mx-auto mt-5 max-w-[24ch] font-serif text-[40px] leading-[1.05] md:text-[64px]">{band.heading}</h2>
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
