"use client";

/* Third capability demo: queue-level visibility across referred patients.
   J. Whitfield appears here as "Ready for review" — the outcome of the
   pipeline shown in ReferralDemo — so the three demos on this page read as
   one connected story (per-referral pipeline -> ask on demand -> whole
   queue at a glance), not three disconnected mocks. Compliance framing:
   Husn surfaces status, a clinician decides what happens next; nothing is
   resolved autonomously. Inline component, same reasoning as ask-demo.tsx. */

import { Manrope, IBM_Plex_Mono } from "next/font/google";

const manrope = Manrope({ subsets: ["latin"], weight: ["400", "500", "600", "700", "800"], display: "swap" });
const mono = IBM_Plex_Mono({ subsets: ["latin"], weight: ["400", "500"], display: "swap" });

const ROWS = [
  { name: "J. Whitfield", mrn: "MRN-88291", status: "ready", statusLabel: "Ready for review", updated: "Just now" },
  { name: "M. Delgado", mrn: "MRN-70163", status: "new", statusLabel: "New referral", updated: "12m ago" },
  { name: "S. Okafor", mrn: "MRN-51402", status: "flagged", statusLabel: "Missing info — flagged", updated: "1h ago" },
  { name: "R. Chen", mrn: "MRN-93087", status: "extracting", statusLabel: "Extracting…", updated: "2h ago" },
] as const;

export function QueueDemo() {
  return (
    <div className={`${manrope.className} queue-demo`}>
      <style>{`
        .queue-demo{
          --bg:#F6F4EF; --panel:#ffffff; --panel-2:#faf7f1; --ink:#1c1e24;
          --ink-soft:#565b64; --ink-faint:#71767f; --line:#ece7dd; --line-2:#e3ded3;
          --green:#0e9159; --green-bg:#e6f4ec; --amber:#9a680d; --amber-bg:#fbedd2;
          --blue:#2c5ce6; --blue-bg:#e8edfc; --grey:#565b64; --grey-bg:#eeece6;
          --shadow:0 1px 2px rgba(28,30,36,.04), 0 34px 80px -34px rgba(28,30,36,.30);
          color:var(--ink); -webkit-font-smoothing:antialiased;
        }
        .queue-demo *{ box-sizing:border-box; }
        .queue-demo .card{
          width:100%; max-width:640px; background:var(--panel); border:1px solid var(--line);
          border-radius:18px; box-shadow:var(--shadow); overflow:hidden;
        }
        .queue-demo .head{ display:flex; align-items:center; gap:9px; padding:14px 20px; border-bottom:1px solid var(--line); background:var(--panel-2); }
        .queue-demo .tile{ width:23px; height:23px; border-radius:7px; background:linear-gradient(150deg,#2b2f3a,#0e1013); color:#fff; font-size:11px; font-weight:800; display:grid; place-items:center; }
        .queue-demo .headtitle{ font-size:13px; font-weight:700; letter-spacing:-.01em; }
        .queue-demo .headsub{ margin-left:auto; font-size:10.5px; font-weight:700; letter-spacing:.06em; color:var(--ink-faint); }
        .queue-demo .row{ display:flex; align-items:center; gap:12px; padding:13px 20px; border-bottom:1px solid var(--line); }
        .queue-demo .row:last-child{ border-bottom:none; }
        .queue-demo .who{ min-width:0; }
        .queue-demo .name{ font-size:13.5px; font-weight:700; }
        .queue-demo .mrn{ font-size:10.5px; color:var(--ink-faint); letter-spacing:.02em; }
        .queue-demo .status{
          margin-left:auto; display:inline-flex; align-items:center; gap:6px; font-size:11.5px; font-weight:700;
          padding:4px 11px; border-radius:999px; white-space:nowrap;
        }
        .queue-demo .status .dot{ width:6px; height:6px; border-radius:50%; }
        .queue-demo .status.ready{ background:var(--green-bg); color:var(--green); }
        .queue-demo .status.ready .dot{ background:var(--green); }
        .queue-demo .status.new{ background:var(--grey-bg); color:var(--grey); }
        .queue-demo .status.new .dot{ background:var(--grey); }
        .queue-demo .status.flagged{ background:var(--amber-bg); color:var(--amber); }
        .queue-demo .status.flagged .dot{ background:var(--amber); }
        .queue-demo .status.extracting{ background:var(--blue-bg); color:var(--blue); }
        .queue-demo .status.extracting .dot{ background:var(--blue); animation:queue-demo-pulse 1.4s ease-in-out infinite; }
        @keyframes queue-demo-pulse{ 0%,100%{ opacity:1; } 50%{ opacity:.35; } }
        .queue-demo .updated{ font-size:11px; color:var(--ink-faint); width:64px; text-align:right; flex-shrink:0; }
        .queue-demo .foot{ border-top:1px solid var(--line); padding:11px 22px; font-size:11.5px; color:var(--ink-faint); font-weight:600; }
      `}</style>

      <div className="card">
        <div className="head">
          <span className="tile">RC</span>
          <span className="headtitle">Referral queue · Riverside Clinic</span>
          <span className={`${mono.className} headsub`}>4 PATIENTS</span>
        </div>
        {ROWS.map((r) => (
          <div className="row" key={r.mrn}>
            <div className="who">
              <div className="name">{r.name}</div>
              <div className="mrn">{r.mrn}</div>
            </div>
            <span className={`status ${r.status}`}><span className="dot" />{r.statusLabel}</span>
            <span className="updated">{r.updated}</span>
          </div>
        ))}
        <div className="foot">Husn surfaces what needs a look — a clinician decides what happens next.</div>
      </div>
    </div>
  );
}
