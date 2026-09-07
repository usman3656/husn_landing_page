import Image, { type StaticImageData } from "next/image";
import { clients } from "../content";
import { Frame, Section } from "./ui";
import uclLogo from "../assets/logos/ucl.svg";
import harvardLogo from "../assets/logos/harvard.svg";
import ibaLogo from "../assets/logos/iba-karachi.png";
import zmLogo from "../assets/logos/zm-converters.png";

/* A single quiet logo row. Every logo is rendered in the same dark grey with
   multiply blending, so brand colours and white backgrounds disappear and the
   marks sit inside the page instead of on top of it. */

const logos: Record<string, StaticImageData> = {
  ucl: uclLogo,
  harvard: harvardLogo,
  "iba-karachi": ibaLogo,
  "zm-converters": zmLogo,
};

export function Clients() {
  return (
    <Section id="clients" className="scroll-mt-10 bg-greige">
      <Frame>
        <div className="px-6 py-14 text-center md:py-20">
          <h2 className="mx-auto max-w-[28ch] font-serif text-[40px] leading-[1.05] md:text-[56px]">{clients.heading}</h2>
          <ul className="mx-auto mt-12 flex max-w-[1000px] flex-wrap items-center justify-center gap-x-16 gap-y-8">
            {clients.items.map((c) => (
              <li key={c.name} className="flex items-center">
                <Image
                  src={logos[c.logo]}
                  alt={c.name}
                  title={c.name}
                  className="h-10 w-auto max-w-[200px] object-contain opacity-80 grayscale mix-blend-multiply md:h-12"
                />
              </li>
            ))}
          </ul>
        </div>
      </Frame>
    </Section>
  );
}
