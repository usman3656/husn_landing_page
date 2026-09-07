import Image, { type StaticImageData } from "next/image";
import { services } from "../content";
import { Button, Check, Frame, Section } from "./ui";
import meadowImg from "../assets/meadow.jpg";
import ridgeImg from "../assets/ridge.jpg";
import forestImg from "../assets/forest.jpg";

/* "What we do": a 3×2 checkerboard. Row one is image / text / image, row two
   is text / image / text, so every text tile touches an illustrated tile
   carrying a floating card. */

function Tile({ title, sub, items }: (typeof services.tiles)[number]) {
  return (
    <div className="flex h-full flex-col gap-6 p-8 md:p-10">
      <div>
        <h3 className="font-serif text-[36px] leading-none md:text-[44px]">{title}</h3>
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

function ImageTile({
  img,
  fact,
  align,
}: {
  img: StaticImageData;
  fact: (typeof services.facts)[number];
  align: "top" | "bottom";
}) {
  return (
    <div className="relative min-h-[360px] overflow-hidden">
      <Image src={img} alt="" fill sizes="(min-width: 768px) 33vw, 100vw" className="object-cover saturate-[1.1]" />
      <div className={`relative flex h-full flex-col p-6 md:p-8 ${align === "top" ? "justify-start" : "justify-end"}`}>
        <div className="rounded-2xl border border-black/10 bg-card3/95 p-6 shadow-[0_20px_40px_-24px_rgba(0,0,0,0.45)]">
          <p className="font-sans text-[15px] font-semibold">{fact.title}</p>
          <p className="mt-2 text-[15px] leading-6 text-muted">{fact.body}</p>
          <div className="mt-5">
            <Button href="#book" variant="black" className="!px-4 !py-2 !text-sm">
              Start Hiring
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export function Services() {
  const [search, interviews, guarantee] = services.tiles;
  const [where, whatYouDont, notRight] = services.facts;
  const cell = "border-b border-black/10";
  const right = "md:border-r";
  return (
    <Section id="services" className="scroll-mt-10 bg-greige">
      <Frame>
        <div className="px-6 py-14 text-center md:py-20">
          <h2 className="mx-auto max-w-[28ch] font-serif text-[40px] leading-[1.05] md:text-[56px]">{services.heading}</h2>
        </div>
      </Frame>
      <div className="border-t border-black/10">
        <Frame className="!border-x-0 md:!border-x">
          <div className="grid md:grid-cols-3">
            <div className={`${cell} ${right}`}><ImageTile img={meadowImg} fact={where} align="top" /></div>
            <div className={`${cell} ${right}`}><Tile {...search} /></div>
            <div className={cell}><ImageTile img={ridgeImg} fact={whatYouDont} align="bottom" /></div>

            <div className={`${cell} ${right} md:border-b-0`}><Tile {...interviews} /></div>
            <div className={`${cell} ${right} md:border-b-0`}><ImageTile img={forestImg} fact={notRight} align="top" /></div>
            <div className="md:border-b-0"><Tile {...guarantee} /></div>
          </div>
        </Frame>
      </div>
    </Section>
  );
}
