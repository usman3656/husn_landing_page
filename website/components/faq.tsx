import { faq } from "../content";
import { Button, Frame, Label, Section } from "./ui";

/* Two-column FAQ: heading and help aside on the left, native <details>
   accordion rows on the right so it works without JavaScript. */
export function Faq() {
  return (
    <Section id="faq" className="scroll-mt-10 bg-greige">
      <Frame>
        <div className="p-5 md:p-6">
          <div className="grid gap-10 rounded-2xl bg-card p-7 md:grid-cols-[0.8fr_1.2fr] md:p-10">
            <div className="flex flex-col">
              <div>
                <Label>{faq.label}</Label>
              </div>
              <h2 className="mt-6 max-w-[10ch] font-sans text-[40px] font-medium leading-[1.05] md:text-[48px]">
                {faq.heading}
              </h2>
              <div className="mt-auto pt-16">
                <p className="max-w-[28ch] text-[15px] leading-6 text-muted">{faq.aside}</p>
                <div className="mt-4">
                  <Button href={faq.asideCta.href} variant="black">
                    {faq.asideCta.label}
                  </Button>
                </div>
              </div>
            </div>

            <ul className="space-y-4">
              {faq.items.map((item, i) => (
                <li key={item.q}>
                  <details open={i === 0} className="group rounded-xl bg-card2 px-5 py-4">
                    <summary className="flex cursor-pointer list-none items-center justify-between gap-6 [&::-webkit-details-marker]:hidden">
                      <span className="font-serif text-[22px] leading-tight md:text-[28px]">{item.q}</span>
                      <span
                        aria-hidden="true"
                        className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-black text-white"
                      >
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                          <path d="M5 12h14" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" />
                          <path
                            d="M12 5v14"
                            stroke="currentColor"
                            strokeWidth="2.4"
                            strokeLinecap="round"
                            className="group-open:hidden"
                          />
                        </svg>
                      </span>
                    </summary>
                    <p className="mt-3 pr-10 text-[16px] leading-6 text-muted">{item.a}</p>
                  </details>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Frame>
    </Section>
  );
}
