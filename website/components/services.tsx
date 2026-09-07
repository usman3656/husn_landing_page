import Image from "next/image";
import { services } from "../content";
import { Button, Check, Frame, Label, Section } from "./ui";
import meadowImg from "../assets/meadow.jpg";

/* "What we do": a three-column grid of service tiles. The middle column is an
   illustrated tile spanning both rows with two fact cards floating on it. */

function Tile({ title, sub, items }: (typeof services.tiles)[number]) {
  return (
    <div className="flex flex-col gap-6 p-8 md:p-10">
      <div>
        <h3 className="font-serif text-[36px] leading-none md:text-[40px]">{title}</h3>
        <p className="mt-3 text-[17px] leading-snug text-muted">{sub}</p>
      </div>
      <ul className="space-y-3">
        {items.map((i) => (
          <Check key={i}>{i}</Check>
        ))}
      </ul>
    </div>
  );
}

function FactCard({ title, body }: { title: string; body: string }) {
  return (
    <div className="rounded-2xl border border-black/10 bg-card3/95 p-6 shadow-[0_20px_40px_-24px_rgba(0,0,0,0.45)]">
      <p className="font-sans text-[15px] font-semibold">{title}</p>
      <p className="mt-2 text-[15px] leading-6 text-muted">{body}</p>
      <div className="mt-5">
        <Button href="#book" variant="black" className="!px-4 !py-2 !text-sm">
          Start Hiring
        </Button>
      </div>
    </div>
  );
}

export function Services() {
  const [recruitment, hirePay, background, interviews] = services.tiles;
  return (
    <Section id="services" className="scroll-mt-10 bg-greige">
      <Frame>
        <div className="px-6 py-16 text-center md:py-20">
          <Label>{services.label}</Label>
          <h2 className="mx-auto mt-5 max-w-[18ch] font-serif text-[40px] leading-[1.05] md:text-[56px]">
            {services.heading}
          </h2>
        </div>
      </Frame>
      <div className="border-t border-black/10">
        <Frame className="!border-x-0 md:!border-x">
          <div className="grid md:grid-cols-3 md:grid-rows-2">
            <div className="border-b border-black/10 md:border-r"><Tile {...recruitment} /></div>

            <div className="relative order-first min-h-[420px] overflow-hidden border-b border-black/10 md:order-none md:row-span-2 md:min-h-0 md:border-r">
              <Image src={meadowImg} alt="" fill sizes="(min-width: 768px) 33vw, 100vw" className="object-cover saturate-[1.1]" />
              <div className="relative flex h-full flex-col justify-between gap-6 p-6 md:p-8">
                <FactCard {...services.facts[0]} />
                <FactCard {...services.facts[1]} />
              </div>
            </div>

            <div className="border-b border-black/10"><Tile {...hirePay} /></div>
            <div className="border-b border-black/10 md:border-b-0 md:border-r"><Tile {...background} /></div>
            <div className="relative md:col-start-3">
              <Tile {...interviews} />
            </div>
          </div>
        </Frame>
      </div>
    </Section>
  );
}
