import { book } from "../content";
import { Booking } from "@/components/booking";
import { Frame, Section } from "./ui";

/* Embedded Calendly scheduler. The URL comes from NEXT_PUBLIC_BOOKING_URL
   with Husn's Calendly as the fallback (see components/booking.tsx). */
export function Book() {
  return (
    <Section id="book" className="scroll-mt-10 bg-greige">
      <Frame>
        <div className="px-6 py-10 text-center md:py-12">
          <h2 className="font-serif text-[44px] leading-[1.05] md:text-[64px]">{book.heading}</h2>
          <p className="mx-auto mt-3 max-w-[48ch] text-[17px] leading-7 text-muted">{book.sub}</p>
          <div className="mt-8 overflow-hidden rounded-2xl bg-white shadow-[0_30px_60px_-30px_rgba(0,0,0,0.35)]">
            <Booking />
          </div>
        </div>
      </Frame>
    </Section>
  );
}
