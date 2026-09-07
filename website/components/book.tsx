import { book } from "../content";
import { Booking } from "@/components/booking";
import { Frame, Label, Section } from "./ui";

/* Embedded Calendly scheduler. The URL comes from NEXT_PUBLIC_BOOKING_URL
   with Husn's Calendly as the fallback (see components/booking.tsx). */
export function Book() {
  return (
    <Section id="book" className="scroll-mt-10 bg-greige">
      <Frame>
        <div className="px-6 py-16 text-center md:py-20">
          <Label>{book.label}</Label>
          <h2 className="mt-5 font-serif text-[44px] leading-[1.05] md:text-[64px]">{book.heading}</h2>
          <p className="mx-auto mt-4 max-w-[44ch] text-[17px] leading-7 text-muted">{book.sub}</p>
          <div className="mt-10 overflow-hidden rounded-2xl bg-white shadow-[0_30px_60px_-30px_rgba(0,0,0,0.35)]">
            <Booking />
          </div>
        </div>
      </Frame>
    </Section>
  );
}
