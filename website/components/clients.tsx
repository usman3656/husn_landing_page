import Image, { type StaticImageData } from "next/image";
import { clients } from "../content";
import { Button, Frame, Label, Section } from "./ui";
import uclLogo from "../assets/logos/ucl.svg";
import harvardLogo from "../assets/logos/harvard.svg";
import ibaLogo from "../assets/logos/iba-karachi.png";

/* Client cards in the story-card style: logo, one plain descriptive line,
   and a full-width black button. Logos are keyed by the `logo` value in
   content.ts; a client without a file renders as a text wordmark. */

const logos: Record<string, StaticImageData> = {
  ucl: uclLogo,
  harvard: harvardLogo,
  "iba-karachi": ibaLogo,
};

function Logo({ name, logo }: { name: string; logo: string | null }) {
  const file = logo ? logos[logo] : undefined;
  if (!file) {
    return <span className="font-sans text-[26px] font-bold uppercase tracking-tight">{name}</span>;
  }
  return <Image src={file} alt={name} title={name} className="h-12 w-auto max-w-[170px] object-contain" />;
}

export function Clients() {
  return (
    <Section id="clients" className="scroll-mt-10 bg-greige">
      <Frame>
        <div className="px-6 py-16 text-center md:py-20">
          <Label>{clients.label}</Label>
          <h2 className="mx-auto mt-5 max-w-[18ch] font-serif text-[40px] leading-[1.05] md:text-[56px]">
            {clients.heading}
          </h2>
        </div>
      </Frame>
      <div className="border-t border-black/10">
        <Frame className="!border-x-0 md:!border-x">
          <ul className="grid gap-px md:grid-cols-4">
            {clients.items.map((c, i) => (
              <li
                key={c.name}
                className={`p-5 ${i < clients.items.length - 1 ? "border-b border-black/10 md:border-b-0 md:border-r" : ""}`}
              >
                <div className="flex h-full flex-col rounded-2xl bg-card p-6">
                  <div className="flex h-14 items-center">
                    <Logo name={c.name} logo={c.logo} />
                  </div>
                  <p className="mt-6 text-[20px] leading-snug">{c.line}</p>
                  <div className="mt-auto pt-12">
                    <Button href={clients.cta.href} variant="black" block>
                      {clients.cta.label}
                    </Button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </Frame>
      </div>
    </Section>
  );
}
