import Image from "next/image";
import { how } from "../content";
import { Frame, Glyph, Section } from "./ui";
import valleyImg from "../assets/valley.jpg";

/* Four numbered steps in a 2×2 arrangement around a central illustrated tile
   that carries a mock intro-call window. Steps read left to right, then
   down: 1 and 2 on the top row, 3 and 4 on the bottom row. */

function Step({ n, title, body }: { n: number; title: string; body: string }) {
  return (
    <div className="flex flex-col gap-3 p-7 md:p-8">
      <span className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-black/15 text-sm">
        {n}
      </span>
      <h3 className="font-serif text-[36px] leading-none md:text-[40px]">{title}</h3>
      <p className="max-w-[34ch] text-[16px] leading-6 text-muted">{body}</p>
    </div>
  );
}

function CallWindow() {
  return (
    <div className="w-full max-w-[320px] rounded-2xl bg-card3 p-2 shadow-[0_30px_60px_-30px_rgba(0,0,0,0.6)]">
      <div className="flex h-44 items-center justify-center rounded-xl bg-[#DADBCC]">
        <span className="flex h-16 w-16 items-center justify-center rounded-full bg-black text-lime">
          <Glyph size={30} />
        </span>
      </div>
      <div className="flex items-center justify-between px-2 py-2.5 text-[11px] text-black/70">
        <span>Intro Call</span>
        <span className="flex items-center gap-1.5">
          <i className="block h-5 w-5 rounded-full bg-black/10" />
          <i className="block h-5 w-5 rounded-full bg-black/10" />
          <i className="block h-5 w-8 rounded-full bg-[#E5484D]" />
        </span>
      </div>
    </div>
  );
}

export function How() {
  const [s1, s2, s3, s4] = how.steps;
  return (
    <Section id="how" className="scroll-mt-10 bg-greige">
      <Frame>
        <div className="px-6 py-14 text-center md:py-20">
          <h2 className="mx-auto max-w-[28ch] font-serif text-[40px] leading-[1.05] md:text-[56px]">{how.heading}</h2>
        </div>
      </Frame>
      <div className="border-t border-black/10">
        <Frame className="!border-x-0 md:!border-x">
          <div className="grid md:grid-cols-[1fr_1.15fr_1fr] md:grid-rows-2">
            <div className="border-b border-black/10 md:border-r"><Step n={1} {...s1} /></div>
            <div className="relative order-first min-h-[340px] border-b border-black/10 md:order-none md:row-span-2 md:border-b-0 md:border-r">
              <Image src={valleyImg} alt="" fill sizes="(min-width: 768px) 38vw, 100vw" className="object-cover saturate-[1.1]" />
              <div className="relative flex h-full items-center justify-center p-8">
                <CallWindow />
              </div>
            </div>
            <div className="border-b border-black/10"><Step n={2} {...s2} /></div>
            <div className="border-b border-black/10 md:border-b-0 md:border-r"><Step n={3} {...s3} /></div>
            <div className="md:col-start-3"><Step n={4} {...s4} /></div>
          </div>
        </Frame>
      </div>
    </Section>
  );
}
