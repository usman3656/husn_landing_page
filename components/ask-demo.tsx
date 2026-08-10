"use client";

/* Second capability demo: on-demand Q&A, answered from what's already been
   extracted for a referred patient (continues the J. Whitfield thread from
   ReferralDemo — same fictional patient, same clinic). Compliance framing:
   answers are compiled/retrieved from source documents, explicitly not a
   diagnosis, always attributed to source. Inline component (no iframe, no
   public/ file) — see components/referral-demo.tsx's header comment for why. */

import { Manrope } from "next/font/google";

const manrope = Manrope({ subsets: ["latin"], weight: ["400", "500", "600", "700", "800"], display: "swap" });

export function AskDemo() {
  return (
    <div className={`${manrope.className} ask-demo`}>
      <style>{`
        .ask-demo{
          --bg:#F6F4EF; --panel:#ffffff; --panel-2:#faf7f1; --ink:#1c1e24;
          --ink-soft:#565b64; --ink-faint:#71767f; --line:#ece7dd; --line-2:#e3ded3;
          --chip:#f5f1ea; --accent:#2c5ce6;
          --shadow:0 1px 2px rgba(28,30,36,.04), 0 34px 80px -34px rgba(28,30,36,.30);
          color:var(--ink); -webkit-font-smoothing:antialiased;
        }
        .ask-demo *{ box-sizing:border-box; }
        .ask-demo .card{
          width:100%; max-width:640px; background:var(--panel); border:1px solid var(--line);
          border-radius:18px; box-shadow:var(--shadow); overflow:hidden;
        }
        .ask-demo .head{ display:flex; align-items:center; gap:9px; padding:14px 20px; border-bottom:1px solid var(--line); background:var(--panel-2); }
        .ask-demo .tile{ width:23px; height:23px; border-radius:7px; background:linear-gradient(150deg,#2b2f3a,#0e1013); color:#fff; font-size:11px; font-weight:800; display:grid; place-items:center; }
        .ask-demo .headtitle{ font-size:13px; font-weight:700; letter-spacing:-.01em; }
        .ask-demo .headsub{ margin-left:auto; font-size:10.5px; font-weight:700; letter-spacing:.06em; color:var(--ink-faint); border:1px solid var(--line-2); border-radius:999px; padding:2px 8px; text-transform:uppercase; }
        .ask-demo .body{ padding:22px 22px 20px; }
        .ask-demo .q{
          margin-left:auto; max-width:88%; background:var(--ink); color:var(--bg);
          border-radius:14px 14px 4px 14px; padding:11px 15px; font-size:13.5px; font-weight:600;
          line-height:1.5;
        }
        .ask-demo .a{ margin-top:16px; }
        .ask-demo .a .who{ display:flex; align-items:center; gap:7px; font-size:11.5px; font-weight:700; color:var(--ink-soft); margin-bottom:7px; }
        .ask-demo .a .dot{ width:6px; height:6px; border-radius:50%; background:var(--accent); }
        .ask-demo .a p{ font-size:14px; line-height:1.65; color:#31353d; font-weight:500; margin:0 0 12px; }
        .ask-demo .a p b{ color:var(--ink); font-weight:700; }
        .ask-demo .sources{ display:flex; flex-wrap:wrap; gap:6px; }
        .ask-demo .chip{ display:inline-flex; align-items:center; gap:5px; font-size:11px; font-weight:700; color:var(--ink-soft); background:var(--chip); border:1px solid var(--line); border-radius:999px; padding:4px 10px; }
        .ask-demo .chip svg{ width:11px; height:11px; opacity:.7; }
        .ask-demo .foot{ border-top:1px solid var(--line); padding:11px 22px; font-size:11.5px; color:var(--ink-faint); font-weight:600; }
      `}</style>

      <div className="card">
        <div className="head">
          <span className="tile">RC</span>
          <span className="headtitle">Ask Husn · Riverside Clinic</span>
          <span className="headsub">Read-only</span>
        </div>
        <div className="body">
          <div className="q">What&apos;s J. Whitfield&apos;s cardiac and medication history ahead of his 2pm review?</div>
          <div className="a">
            <div className="who"><span className="dot" />Husn</div>
            <p>
              No prior cardiac diagnoses noted in the referral letter or GP summary. <b>Current medications</b>: none listed as ongoing. A short course of antibiotics was prescribed 3 months ago for an unrelated infection, per the GP summary.
            </p>
            <div className="sources">
              <span className="chip">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="4" width="20" height="16" rx="2" /><path d="M3 6l9 7 9-7" /></svg>
                Referral letter
              </span>
              <span className="chip">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 6a1 1 0 0 1 1-1h5l2 2h9a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V6z" /></svg>
                GP summary
              </span>
            </div>
          </div>
        </div>
        <div className="foot">Answers are compiled from documents on file, for clinician review, not a diagnosis.</div>
      </div>
    </div>
  );
}
