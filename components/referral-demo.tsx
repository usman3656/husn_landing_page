"use client";

/* Illustrative example. All names, IDs, and clinical details below are
   synthetic and do not represent a real patient, referral, or institution.
   Husn is a working MVP in a demo environment — this mock shows the
   read -> extract -> match -> structure -> review pipeline described in
   01_foundation/products.md, not a live clinical deployment.

   Rendered inline (not via an iframe pointed at a separate static file)
   because Next.js's static export produced different output filenames for
   a route named with a literal ".html" segment depending on the build
   platform (confirmed: correct on a local Windows build, extension
   silently stripped on Vercel's Linux build) — an inline component has no
   separate URL for either host to resolve differently. */

import { useEffect, useRef } from "react";
import { Manrope } from "next/font/google";

const manrope = Manrope({ subsets: ["latin"], weight: ["400", "500", "600", "700", "800"], display: "swap" });

type Scenario = {
  tab: string;
  leaf: string;
  crumb: string;
  badgeBefore: "outdated";
  badgeAfter: "verified" | "self";
  title: string;
  meta: string;
  body: string;
  trigger: string;
  icon: "clock" | "git" | "refresh";
  diff: string;
  who: string;
  whoColor: string;
};

const SCENARIOS: Scenario[] = [
  {
    tab: "Source Extraction", leaf: "leaf-extract",
    crumb: '<span>New Referrals</span><span class="sep">/</span><b>Source Extraction</b>',
    badgeBefore: "outdated", badgeAfter: "verified",
    title: "Referral: J. Whitfield",
    meta: 'Source: <span class="zone"><del>unread fax</del> <ins>referral letter, 3 pages</ins></span>',
    body:
      '<h2>Extracted so far</h2><ul>' +
      '<li><b>Presenting complaint</b>: <span class="zone"><del>pending extraction</del> <ins>persistent cough, 6 weeks</ins></span></li>' +
      '<li><b>Referring clinician</b>: <span class="zone"><del>pending extraction</del> <ins>Dr. A. Meyers, primary care</ins></span></li></ul>',
    trigger: "New referral received. Reading attached documents.",
    icon: "clock", diff: "<del>Unread</del> &rarr; <ins>Extracted</ins>",
    who: "Husn", whoColor: "#2c5ce6",
  },
  {
    tab: "Patient Matching", leaf: "leaf-match",
    crumb: '<span>Patient Records</span><span class="sep">/</span><b>Patient Matching</b>',
    badgeBefore: "outdated", badgeAfter: "verified",
    title: "Patient Match",
    meta: 'Candidate record: <span class="zone"><del>2 possible matches</del> <ins>1 confirmed match</ins></span>',
    body:
      "<p>Matching the referral to an existing patient record using name, date of birth, and internal record ID.</p>" +
      '<h2>Match basis</h2><p><span class="zone"><del>Name only (ambiguous)</del></span> <span class="zone"><ins>Name + date of birth + record ID (confirmed)</ins></span></p>',
    trigger: "Cross-checking referral details against existing patient records.",
    icon: "git", diff: "Confirmed match &middot; record MRN-88291",
    who: "Husn", whoColor: "#2c5ce6",
  },
  {
    tab: "Clinician Review", leaf: "leaf-review",
    crumb: '<span>Chart Prep</span><span class="sep">/</span><b>Ready for Review</b>',
    badgeBefore: "outdated", badgeAfter: "self",
    title: "Structured Summary: Ready for Review",
    meta: "Compiled from referral letter, GP summary, and prior visit notes.",
    body:
      "<h2>Summary</h2><p>Persistent cough (6 weeks), referred by primary care. Relevant history and current medications compiled below for review.</p>" +
      "<h2><ins>Suggested chart entry</ins></h2>" +
      "<p><ins>Structured context prepared. A clinician reviews and confirms before anything is added to the chart.</ins></p>",
    trigger: "Summary ready. Nothing is added to the chart without clinician review.",
    icon: "refresh", diff: "<ins>Flag for follow-up</ins> or <ins>send to chart draft</ins>",
    who: "Dr. Rivera", whoColor: "#268f83",
  },
];

const ICONS: Record<Scenario["icon"], string> = {
  clock: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>',
  git: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="6" cy="6" r="2.5"/><circle cx="6" cy="18" r="2.5"/><circle cx="18" cy="9" r="2.5"/><path d="M6 8.5v7M18 11.5c0 4-6 2-6 6"/></svg>',
  refresh: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 11a8 8 0 1 0-.5 4"/><path d="M20 5v6h-6"/></svg>',
};

const BADGE = {
  verified: '<span class="badge verified"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4"><path d="M20 6 9 17l-5-5"/></svg>Extracted</span>',
  outdated: '<span class="badge outdated"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><circle cx="12" cy="12" r="9"/><path d="M15 9l-6 6M9 9l6 6"/></svg>Incomplete</span>',
  self: '<span class="badge self"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M20 11a8 8 0 1 0-.5 4"/><path d="M20 5v6h-6"/></svg>Ready for review</span>',
} as const;

export function ReferralDemo() {
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const prefersReduced = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches ?? false;
    const doc = root.querySelector<HTMLElement>(".doc")!;
    const tabsEl = root.querySelector<HTMLElement>(".tabs")!;
    const crumbEl = root.querySelector<HTMLElement>(".crumb")!;
    let current = 0;
    let timers: ReturnType<typeof setTimeout>[] = [];
    let stopped = false;

    const DWELL = 9000;
    const clearTimers = () => { timers.forEach(clearTimeout); timers = []; };
    const later = (fn: () => void, ms: number) => { timers.push(setTimeout(fn, ms)); };

    const setActiveLeaf = (id: string) => {
      ["leaf-extract", "leaf-match", "leaf-review"].forEach((x) => {
        const n = root.querySelector(`[data-leaf="${x}"]`);
        n?.classList.toggle("active", x === id);
      });
    };

    const renderTabs = () => {
      tabsEl.innerHTML = "";
      SCENARIOS.forEach((sc, i) => {
        const b = document.createElement("button");
        b.className = "tab" + (i === current ? " active" : "");
        b.type = "button";
        b.setAttribute("role", "tab");
        b.setAttribute("aria-selected", i === current ? "true" : "false");
        b.innerHTML = sc.tab + '<span class="bar"></span>';
        b.style.setProperty("--dwell", `${DWELL / 1000}s`);
        b.addEventListener("click", () => play(i));
        tabsEl.appendChild(b);
      });
    };

    function play(index: number) {
      if (stopped) return;
      clearTimers();
      current = index;
      const sc = SCENARIOS[index];
      crumbEl.innerHTML = sc.crumb;
      setActiveLeaf(sc.leaf);
      renderTabs();

      doc.className = "doc";
      doc.innerHTML =
        `<div class="badges">${BADGE[sc.badgeBefore]}</div>` +
        `<h1>${sc.title}</h1>` +
        `<p class="meta">${sc.meta}</p>` +
        sc.body +
        `<div class="approve">` +
        `<span class="avatar"><span class="a" style="background:${sc.whoColor}">${sc.who.charAt(0)}</span>${sc.who}</span>` +
        `<div class="trigger">${ICONS[sc.icon]}${sc.trigger}</div>` +
        `<div class="diffrow"><div class="diff">${sc.diff}</div>` +
        `<div class="btns"><button class="btn" type="button">Flag for follow-up</button>` +
        `<button class="btn primary" type="button">Send to chart draft</button></div></div>` +
        `</div>`;

      const badges = doc.querySelector<HTMLElement>(".badges")!;
      const card = doc.querySelector<HTMLElement>(".approve")!;
      const s = prefersReduced ? 0 : 1;

      later(() => doc.classList.add("editing"), 800 * s);
      later(() => doc.classList.add("edited"), 1600 * s);
      later(() => card.classList.add("in"), 2500 * s);
      later(() => {
        card.classList.remove("in");
        doc.classList.remove("editing");
        badges.innerHTML = BADGE[sc.badgeAfter];
      }, 5400 * s);

      if (!prefersReduced) later(() => play((index + 1) % SCENARIOS.length), DWELL);
    }

    renderTabs();
    play(0);

    return () => { stopped = true; clearTimers(); };
  }, []);

  return (
    <div ref={rootRef} className={`${manrope.className} referral-demo`}>
      <style>{`
        .referral-demo{
          --bg:#F6F4EF; --panel:#ffffff; --panel-2:#faf7f1; --ink:#1c1e24;
          --ink-soft:#565b64; --ink-faint:#71767f; --line:#ece7dd; --line-2:#e3ded3;
          --chip:#f5f1ea; --accent:#2c5ce6; --approve:#2c5ce6;
          --green:#0e9159; --green-bg:#e6f4ec; --amber:#9a680d; --amber-bg:#fbedd2;
          --red:#ec5a4b; --teal:#268f83; --teal-bg:#e4f2f0;
          --shadow:0 1px 2px rgba(28,30,36,.04), 0 34px 80px -34px rgba(28,30,36,.30);
          color-scheme: light; color:var(--ink); -webkit-font-smoothing:antialiased;
        }
        .referral-demo *{ box-sizing:border-box; }
        .referral-demo .app{
          width:100%; max-width:980px; background:var(--panel); border:1px solid var(--line);
          border-radius:18px; box-shadow:var(--shadow); overflow:hidden;
          display:grid; grid-template-columns:232px 1fr; grid-template-rows:auto 1fr auto;
        }
        .referral-demo .side{ grid-row:1 / 3; border-right:1px solid var(--line); background:var(--panel-2); padding:15px 11px; }
        .referral-demo .ws{ display:flex; align-items:center; gap:9px; padding:5px 8px 14px; }
        .referral-demo .ws .tile{ width:23px; height:23px; border-radius:7px; background:linear-gradient(150deg,#2b2f3a,#0e1013); color:#fff; font-size:11px; font-weight:800; display:grid; place-items:center; }
        .referral-demo .ws .name{ font-size:14px; font-weight:700; letter-spacing:-.02em; }
        .referral-demo .ws .huxn{ margin-left:auto; font-size:9.5px; font-weight:800; letter-spacing:.06em; color:var(--ink-faint); border:1px solid var(--line-2); border-radius:999px; padding:2px 7px; }
        .referral-demo .nav{ display:flex; align-items:center; gap:9px; padding:7px 9px; border-radius:9px; font-size:13px; color:var(--ink-soft); font-weight:600; }
        .referral-demo .nav svg{ width:15px; height:15px; opacity:.7; }
        .referral-demo .nav.active{ background:var(--chip); color:var(--ink); }
        .referral-demo .sec{ font-size:10px; font-weight:800; letter-spacing:.1em; color:var(--ink-faint); padding:15px 10px 6px; }
        .referral-demo .leaf{ display:flex; align-items:center; gap:9px; padding:6px 9px 6px 14px; border-radius:9px; font-size:12.5px; color:var(--ink-soft); font-weight:500; }
        .referral-demo .leaf .ico{ width:8px; height:8px; border-radius:2px; }
        .referral-demo .leaf.active{ background:var(--chip); color:var(--ink); font-weight:700; }
        .referral-demo .leaf.sub{ padding-left:27px; }
        .referral-demo .dochead{ grid-column:2; display:flex; align-items:center; gap:10px; padding:13px 20px; border-bottom:1px solid var(--line); }
        .referral-demo .crumb{ display:flex; align-items:center; gap:9px; font-size:12.5px; color:var(--ink-soft); font-weight:600; }
        .referral-demo .crumb .sep{ color:var(--ink-faint); font-weight:400; }
        .referral-demo .crumb b{ color:var(--ink); font-weight:700; }
        .referral-demo .tools{ margin-left:auto; display:flex; align-items:center; gap:15px; color:var(--ink-faint); }
        .referral-demo .tools .share{ color:var(--ink-soft); font-weight:700; font-size:12.5px; }
        .referral-demo .tools svg{ width:15px; height:15px; }
        .referral-demo .doc{ grid-column:2; padding:32px 34px 22px; min-height:404px; position:relative; }
        .referral-demo .badges{ display:flex; gap:8px; margin-bottom:15px; }
        .referral-demo .badge{ display:inline-flex; align-items:center; gap:6px; font-size:11.5px; font-weight:700; padding:4px 11px; border-radius:999px; }
        .referral-demo .badge svg{ width:12px; height:12px; }
        .referral-demo .badge.verified{ background:var(--green-bg); color:var(--green); }
        .referral-demo .badge.outdated{ background:var(--amber-bg); color:var(--amber); }
        .referral-demo .badge.self{ background:var(--teal-bg); color:var(--teal); }
        .referral-demo .doc h1{ margin:0 0 6px; font-size:23px; font-weight:800; letter-spacing:-.03em; line-height:1.1; }
        .referral-demo .meta{ font-size:13px; color:var(--ink-soft); margin:0 0 12px; font-weight:500; }
        .referral-demo .doc h2{ font-size:16px; font-weight:800; letter-spacing:-.02em; margin:13px 0 6px; }
        .referral-demo .doc p, .referral-demo .doc li{ font-size:14px; line-height:1.65; color:#31353d; font-weight:500; }
        .referral-demo .doc ul{ margin:7px 0; padding-left:20px; }
        .referral-demo .doc li{ margin:2px 0; }
        .referral-demo .doc li b{ color:var(--ink); font-weight:700; }
        .referral-demo del{ color:var(--red); text-decoration:line-through; text-decoration-thickness:1.5px; }
        .referral-demo ins{ color:var(--green); text-decoration:none; font-weight:700; }
        .referral-demo .doc:not(.edited) ins{ display:none; }
        .referral-demo .doc:not(.edited) del{ color:inherit; text-decoration:none; }
        .referral-demo .doc.edited ins{ animation:none; }
        .referral-demo .zone{ border-radius:4px; padding:0 2px; margin:0 -2px; transition:background .4s ease; box-decoration-break:clone; -webkit-box-decoration-break:clone; }
        .referral-demo .doc.editing .zone{ background:color-mix(in srgb, var(--accent) 13%, transparent); }
        .referral-demo .approve{
          position:relative; margin:12px 0 2px;
          background:var(--panel); border:1px solid color-mix(in srgb, var(--accent) 42%, var(--line));
          border-radius:15px; box-shadow:0 16px 34px -16px rgba(28,30,36,.30);
          padding:11px 14px; opacity:0; transform:translateY(14px);
          transition:opacity .5s cubic-bezier(.2,.7,.2,1), transform .5s cubic-bezier(.2,.7,.2,1);
        }
        .referral-demo .approve.in{ opacity:1; transform:none; }
        .referral-demo .approve .trigger{ display:flex; align-items:center; gap:8px; font-size:12.5px; color:var(--ink-soft); font-weight:600; }
        .referral-demo .approve .trigger svg{ width:15px; height:15px; color:var(--accent); flex:none; }
        .referral-demo .approve .diffrow{ display:flex; align-items:center; gap:11px; margin-top:8px; }
        .referral-demo .approve .diff{ flex:1; background:var(--chip); border:1px solid var(--line); border-radius:10px; padding:9px 12px; font-size:13px; font-weight:600; }
        .referral-demo .approve .btns{ display:flex; gap:8px; }
        .referral-demo .btn{ font-family:inherit; font-size:12.5px; font-weight:700; border-radius:10px; padding:8px 15px; cursor:pointer; border:1px solid var(--line-2); background:var(--panel); color:var(--ink-soft); }
        .referral-demo .btn.primary{ background:var(--approve); color:#fff; border-color:transparent; }
        .referral-demo .avatar{ position:absolute; right:18px; top:-12px; display:flex; align-items:center; gap:6px; background:var(--ink); color:#fff; font-size:11px; font-weight:600; padding:3px 10px 3px 3px; border-radius:999px; }
        .referral-demo .avatar .a{ width:19px; height:19px; border-radius:50%; display:grid; place-items:center; font-size:9px; font-weight:800; }
        .referral-demo .tabs{ grid-column:1 / 3; display:flex; flex-wrap:wrap; gap:6px; padding:6px 14px 12px; }
        .referral-demo .tab{ font-family:inherit; font-size:11.5px; font-weight:700; color:var(--ink-soft); padding:5px 12px; border-radius:999px; border:1px solid transparent; background:transparent; cursor:pointer; }
        .referral-demo .tab:hover{ color:var(--ink); }
        .referral-demo .tab.active{ background:var(--panel); color:var(--ink); border-color:var(--line-2); box-shadow:0 1px 2px rgba(28,30,36,.05); }
        .referral-demo .tab .bar{ display:block; height:2px; border-radius:2px; margin-top:6px; background:var(--accent); transform:scaleX(0); transform-origin:left; }
        .referral-demo .tab.active .bar{ animation:referral-demo-sweep var(--dwell,9s) linear forwards; }
        @keyframes referral-demo-sweep{ to{ transform:scaleX(1); } }
        @media (max-width:760px){
          .referral-demo .app{ grid-template-columns:1fr; height:548px; }
          .referral-demo .side{ display:none; }
          .referral-demo .dochead,.referral-demo .doc,.referral-demo .tabs{ grid-column:1; }
          .referral-demo .doc{ min-height:0; padding-bottom:12px; overflow:hidden; }
          .referral-demo .approve{ position:static; margin-top:16px; }
        }
        @media (prefers-reduced-motion: reduce){
          .referral-demo .approve,.referral-demo .doc.edited ins,.referral-demo .zone{ transition:none; animation:none; }
          .referral-demo .tab .bar{ animation:none; }
        }
      `}</style>

      <main className="app" aria-label="Husn turning fragmented referral sources into a structured summary for clinician review">
        <aside className="side">
          <div className="ws"><span className="tile">RC</span><span className="name">Riverside Clinic</span><span className="huxn">Husn</span></div>
          <div className="nav active"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="4" /><path d="M12 2v3M12 19v3M2 12h3M19 12h3" /></svg> Agent</div>
          <div className="nav"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="7" /><path d="m21 21-4-4" /></svg> Search</div>
          <div className="nav"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 6h16M4 12h16M4 18h10" /></svg> Referral triage</div>
          <div className="sec">REFERRED PATIENTS</div>
          <div className="leaf"><span className="ico" style={{ background: "#8b8f99" }} /> New Referrals</div>
          <div className="leaf sub" data-leaf="leaf-extract"><span className="ico" style={{ background: "#8b8f99" }} /> Source Extraction</div>
          <div className="leaf"><span className="ico" style={{ background: "#2c5ce6" }} /> Patient Records</div>
          <div className="leaf sub" data-leaf="leaf-match"><span className="ico" style={{ background: "#2c5ce6" }} /> Patient Matching</div>
          <div className="leaf"><span className="ico" style={{ background: "#268f83" }} /> Chart Prep</div>
          <div className="leaf sub" data-leaf="leaf-review"><span className="ico" style={{ background: "#268f83" }} /> Ready for Review</div>
        </aside>

        <div className="dochead">
          <div className="crumb" />
          <div className="tools">
            <span className="share">Share</span>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="5" cy="12" r="1.6" /><circle cx="12" cy="12" r="1.6" /><circle cx="19" cy="12" r="1.6" /></svg>
          </div>
        </div>

        <section className="doc" />
        <nav className="tabs" role="tablist" aria-label="Views" />
      </main>
    </div>
  );
}
