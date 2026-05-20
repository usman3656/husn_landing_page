"use client";

import { useEffect, useState } from "react";

const STORAGE_KEY = "husn.cookie-consent.v1";

export type ConsentState = "granted" | "denied" | null;

export function getConsent(): ConsentState {
  if (typeof window === "undefined") return null;
  const v = window.localStorage.getItem(STORAGE_KEY);
  return v === "granted" || v === "denied" ? v : null;
}

export function setConsent(v: "granted" | "denied") {
  if (typeof window === "undefined") return;
  window.localStorage.setItem(STORAGE_KEY, v);
  window.dispatchEvent(new CustomEvent("husn:consent", { detail: v }));
}

export function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(getConsent() === null);
    function onOpen() {
      setVisible(true);
    }
    window.addEventListener("husn:open-cookie-prefs", onOpen);
    return () => window.removeEventListener("husn:open-cookie-prefs", onOpen);
  }, []);

  function choose(v: "granted" | "denied") {
    setConsent(v);
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-label="Cookie preferences"
      className="fixed inset-x-4 bottom-4 z-40 mx-auto max-w-xl rounded-2xl border border-ink/10 bg-white p-5 shadow-lift md:bottom-6"
    >
      <p className="text-sm text-ink-muted">
        Plausible runs cookieless and is always on. With your consent we also use PostHog to learn
        which parts of the page work — decline and the page still works fine.{" "}
        <a href="/privacy" className="font-medium text-accent underline underline-offset-4 hover:text-accent-deep">
          Privacy policy
        </a>
        .
      </p>
      <div className="mt-4 flex flex-wrap gap-2">
        <button
          onClick={() => choose("granted")}
          className="btn-primary rounded-full px-4 py-2 text-sm font-semibold"
        >
          Accept
        </button>
        <button
          onClick={() => choose("denied")}
          className="btn-outline rounded-full px-4 py-2 text-sm font-semibold"
        >
          Decline
        </button>
      </div>
    </div>
  );
}
