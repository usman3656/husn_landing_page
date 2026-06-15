"use client";

import { useState, useTransition } from "react";
import { demo } from "@/lib/content";
import { submitDemoRequest, type DemoInput } from "@/lib/waitlist-action";

type State =
  | { kind: "idle" }
  | { kind: "submitting" }
  | { kind: "success" }
  | { kind: "error"; message: string };

export function Demo() {
  const [state, setState] = useState<State>({ kind: "idle" });
  const [pending, startTransition] = useTransition();
  const [role, setRole] = useState<string>("");

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const selected = String(data.get("role") ?? "");
    const otherText = String(data.get("roleOther") ?? "").trim();
    const finalRole = selected === "Other" ? otherText : selected;
    const email = String(data.get("email") ?? "").trim();

    if (!finalRole) {
      setState({
        kind: "error",
        message: selected === "Other" ? "Please tell us your role." : "Please pick a role.",
      });
      return;
    }
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setState({ kind: "error", message: "Please enter a valid email." });
      return;
    }

    const input: DemoInput = { role: finalRole, email };
    setState({ kind: "submitting" });
    startTransition(async () => {
      const res = await submitDemoRequest(input);
      if (res.ok) {
        setState({ kind: "success" });
      } else {
        setState({ kind: "error", message: res.message });
      }
    });
  }

  const inputBase =
    "mt-2 w-full rounded-xl border border-ink/12 bg-paper-dim/60 px-3.5 py-3 text-base text-ink placeholder:text-ink-dim outline-none transition-colors focus:border-accent focus:bg-white focus:ring-2 focus:ring-accent/20";

  return (
    <section id="demo" className="relative overflow-hidden border-b border-ink/[0.06] bg-paper">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-dot-paper bg-dots [mask-image:radial-gradient(ellipse_at_center,black_25%,transparent_75%)] opacity-50"
      />

      <div className="relative z-10 mx-auto max-w-page px-6 py-24 md:py-28">
        <div className="grid gap-12 md:grid-cols-[1fr,1.1fr] md:items-center md:gap-16">
          <div>
            <h2 className="text-4xl font-extrabold leading-[1.05] text-display tracking-display text-ink md:text-6xl">
              {demo.heading}
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-ink-muted md:text-xl">{demo.sub}</p>
          </div>

          <div className="relative rounded-3xl border border-ink/[0.08] bg-white p-7 shadow-card md:p-9">
            {state.kind === "success" ? (
              <SuccessBlock />
            ) : (
              <form onSubmit={onSubmit} noValidate className="relative space-y-5">
                <p className="text-sm text-ink-muted">{demo.qualifier.intro}</p>

                <label className="block text-sm">
                  <span className="font-medium text-ink">{demo.qualifier.roleLabel}</span>
                  <select
                    name="role"
                    required
                    value={role}
                    onChange={(e) => setRole(e.target.value)}
                    className={inputBase}
                  >
                    <option value="" disabled>
                      Select…
                    </option>
                    {demo.qualifier.roles.map((r) => (
                      <option key={r} value={r}>
                        {r}
                      </option>
                    ))}
                  </select>
                </label>

                {role === "Other" && (
                  <label className="block text-sm">
                    <span className="font-medium text-ink">{demo.qualifier.otherLabel}</span>
                    <input
                      name="roleOther"
                      required
                      autoFocus
                      placeholder={demo.qualifier.otherPlaceholder}
                      className={inputBase}
                    />
                  </label>
                )}

                <label className="block text-sm">
                  <span className="font-medium text-ink">{demo.qualifier.emailLabel}</span>
                  <input
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    placeholder={demo.qualifier.emailPlaceholder}
                    className={inputBase}
                  />
                </label>

                <div className="flex flex-col gap-3 pt-2 sm:flex-row sm:items-center sm:justify-between">
                  <button
                    type="submit"
                    disabled={pending || state.kind === "submitting"}
                    className="btn-primary inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm font-semibold disabled:opacity-60 disabled:hover:translate-y-0"
                  >
                    {pending || state.kind === "submitting" ? "Sending…" : demo.qualifier.submit}
                    <span aria-hidden="true">→</span>
                  </button>
                  {state.kind === "error" && (
                    <p role="alert" className="text-sm text-signal-red">
                      {state.message}
                    </p>
                  )}
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

function SuccessBlock() {
  return (
    <div className="relative py-4 text-center" role="status" aria-live="polite">
      <h3 className="text-2xl font-bold tracking-tightish text-ink">
        {demo.successHeading}
      </h3>
      <p className="mt-3 text-base leading-relaxed text-ink-muted">{demo.successBody}</p>
    </div>
  );
}
