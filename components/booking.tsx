"use client";

/* Demo booking — a hosted Calendly scheduling widget embedded inline. The site stays
   fully static (GitHub Pages); Calendly owns slot availability, double-booking, and the
   confirmation emails + calendar invites. Set NEXT_PUBLIC_BOOKING_URL to your Calendly
   (or Cal.com) link. Swapping to Cal.com later is just a different embed src + URL. */

import { useEffect, useRef, useState } from "react";

const BOOKING_URL = process.env.NEXT_PUBLIC_BOOKING_URL || "https://calendly.com/notbawanyuk/30min";
const CONFIGURED = !BOOKING_URL.includes("YOUR-HANDLE");

const CALENDLY_CSS = "https://assets.calendly.com/assets/external/widget.css";
const CALENDLY_JS = "https://assets.calendly.com/assets/external/widget.js";

type CalendlyWindow = Window & {
  Calendly?: { initInlineWidget: (opts: { url: string; parentElement: HTMLElement }) => void };
};

export function Booking() {
  const ref = useRef<HTMLDivElement>(null);
  // Only the real widget depends on the browser; render a stable shell on the server.
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  useEffect(() => {
    if (!mounted || !CONFIGURED) return;
    const parent = ref.current;
    if (!parent) return;

    // Calendly's stylesheet (load once).
    if (!document.querySelector(`link[href="${CALENDLY_CSS}"]`)) {
      const link = document.createElement("link");
      link.rel = "stylesheet";
      link.href = CALENDLY_CSS;
      document.head.appendChild(link);
    }

    const init = () => {
      const w = window as CalendlyWindow;
      if (!w.Calendly || !ref.current) return;
      ref.current.innerHTML = ""; // guard against double-init in React strict mode
      w.Calendly.initInlineWidget({ url: BOOKING_URL + (BOOKING_URL.includes("?") ? "&" : "?") + "hide_gdpr_banner=1", parentElement: ref.current });
    };

    const existing = document.getElementById("calendly-widget-script") as HTMLScriptElement | null;
    if (existing) {
      if ((window as CalendlyWindow).Calendly) init();
      else existing.addEventListener("load", init);
      return () => existing.removeEventListener("load", init);
    }

    const script = document.createElement("script");
    script.id = "calendly-widget-script";
    script.src = CALENDLY_JS;
    script.async = true;
    script.addEventListener("load", init);
    document.body.appendChild(script);
    return () => script.removeEventListener("load", init);
  }, [mounted]);

  if (!CONFIGURED) {
    // Build-time placeholder: NEXT_PUBLIC_BOOKING_URL hasn't been set yet.
    return (
      <div className="mx-auto w-full max-w-[440px] rounded-[2px] border border-dashed border-[var(--mist)] bg-[var(--surface)] p-8 text-center text-[var(--slate)]">
        <p className="text-sm">
          Booking link not configured yet. Set <code className="text-[var(--ink)]">NEXT_PUBLIC_BOOKING_URL</code> to your Calendly link.
        </p>
      </div>
    );
  }

  return (
    <div
      ref={ref}
      aria-label="Booking calendar"
      className="mx-auto w-full max-w-[760px]"
      style={{ minWidth: "min(320px, 100%)", height: 1000 }}
    />
  );
}
