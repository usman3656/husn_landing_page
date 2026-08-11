"use client";

import { useEffect, useRef, useState } from "react";

type Integration = { name: string; brand: string; Logo: () => React.ReactElement };
type Placed = Integration & { ring: "inner" | "outer"; idx: number };

const INNER: Integration[] = [
  { name: "Referrals", brand: "#2C5CE6", Logo: LetterIcon },
  { name: "Scans", brand: "#268F83", Logo: ScanIcon },
  { name: "Faxes", brand: "#9A680D", Logo: FaxIcon },
  { name: "GP notes", brand: "#5059C9", Logo: FolderIcon },
  { name: "Discharges", brand: "#0E9159", Logo: FileCheckIcon },
  { name: "Clinic notes", brand: "#71767F", Logo: NoteIcon },
];

const OUTER: Integration[] = [
  { name: "Labs", brand: "#268F83", Logo: FlaskIcon },
  { name: "Radiology", brand: "#2C5CE6", Logo: ScanBeamIcon },
  { name: "Pathology", brand: "#9A680D", Logo: MicroscopeIcon },
  { name: "Emails", brand: "#5059C9", Logo: EnvelopeIcon },
  { name: "EHR", brand: "#0E9159", Logo: DatabaseIcon },
  { name: "Transfers", brand: "#71767F", Logo: FormIcon },
  { name: "Meds", brand: "#EC5A4B", Logo: PillIcon },
  { name: "Allergies", brand: "#9A680D", Logo: AlertIcon },
  { name: "Visit notes", brand: "#2C5CE6", Logo: HistoryIcon },
  { name: "Consults", brand: "#268F83", Logo: LetterIcon },
];

const ALL: Placed[] = [
  ...INNER.map((n, i) => ({ ...n, ring: "inner" as const, idx: i })),
  ...OUTER.map((n, i) => ({ ...n, ring: "outer" as const, idx: i })),
];

const VIEW = 800, C = 400, R_INNER = 200, R_OUTER = 315;

function nodePosition(item: Placed) {
  const total = item.ring === "inner" ? INNER.length : OUTER.length;
  const offset = item.ring === "outer" ? Math.PI / OUTER.length : 0;
  const r = item.ring === "inner" ? R_INNER : R_OUTER;
  const a = (item.idx / total) * 2 * Math.PI - Math.PI / 2 + offset;
  return { x: C + r * Math.cos(a), y: C + r * Math.sin(a) };
}

function curveToCenter(x: number, y: number, idx: number) {
  const dx = C - x, dy = C - y;
  const mx = x + dx * 0.5, my = y + dy * 0.5;
  const perpX = -dy, perpY = dx;
  const len = Math.hypot(perpX, perpY) || 1;
  const off = 24 * (idx % 2 === 0 ? 1 : -1);
  const cx = mx + (perpX / len) * off, cy = my + (perpY / len) * off;
  return `M ${x.toFixed(1)} ${y.toFixed(1)} Q ${cx.toFixed(1)} ${cy.toFixed(1)} ${C} ${C}`;
}

// Labels are full pills at every width (never icon-only) — on phones the
// diagram itself stays at its natural size and simply scrolls horizontally
// inside `scrollRef` rather than shrinking labels to fit or overflowing the
// page. min-w below is what guarantees that scroll: it's wider than a phone's
// content column, so the browser gives this box real overflow to scroll.
export function OrbitalGraphic({ className = "mx-auto aspect-square w-full min-w-[420px] max-w-[520px] lg:max-w-[640px]" }: { className?: string }) {
  const [hover, setHover] = useState<string | null>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [active, setActive] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  // Center the scroll position on mount so a narrow viewport opens on the
  // middle of the diagram instead of its clipped left edge.
  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    el.scrollLeft = (el.scrollWidth - el.clientWidth) / 2;
  }, []);

  function onPointerMove(e: React.PointerEvent<HTMLDivElement>) {
    const el = containerRef.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    setTilt({ x: (e.clientX - r.left) / r.width - 0.5, y: (e.clientY - r.top) / r.height - 0.5 });
  }

  const tiltStyle: React.CSSProperties = {
    transform: `perspective(1400px) rotateX(${(-tilt.y * 5).toFixed(2)}deg) rotateY(${(tilt.x * 5).toFixed(2)}deg)`,
    transformStyle: "preserve-3d",
    transition: "transform 220ms ease",
  };

  return (
    <div ref={scrollRef} className="w-full overflow-x-auto py-4">
    <div
      ref={containerRef}
      className={`relative ${className}`}
      onPointerMove={onPointerMove}
      onPointerEnter={() => setActive(true)}
      onPointerLeave={() => { setTilt({ x: 0, y: 0 }); setHover(null); setActive(false); }}
      role="img"
      aria-label="The referral sources Husn reads, flowing into a structured summary"
    >
      <div className="absolute inset-0" style={tiltStyle}>
        <div className="animate-spin absolute inset-0" style={{ animationDuration: "240s", animationPlayState: active ? "paused" : "running" }}>
          <svg viewBox={`0 0 ${VIEW} ${VIEW}`} className="absolute inset-0 h-full w-full" aria-hidden="true">
            <defs>
              <radialGradient id="og-halo" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#2563EB" stopOpacity="0.18" />
                <stop offset="55%" stopColor="#2563EB" stopOpacity="0.04" />
                <stop offset="100%" stopColor="#2563EB" stopOpacity="0" />
              </radialGradient>
              <radialGradient id="og-incoming" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#2563EB" stopOpacity="0.95" />
                <stop offset="55%" stopColor="#2563EB" stopOpacity="0.40" />
                <stop offset="100%" stopColor="#2563EB" stopOpacity="0" />
              </radialGradient>
            </defs>
            <circle cx={C} cy={C} r="300" fill="url(#og-halo)" />
            <circle cx={C} cy={C} r={R_INNER} fill="none" stroke="rgba(11,14,20,0.06)" strokeDasharray="2 6" />
            <circle cx={C} cy={C} r={R_OUTER} fill="none" stroke="rgba(11,14,20,0.05)" strokeDasharray="2 6" />
            {ALL.map((node, i) => {
              const { x, y } = nodePosition(node);
              const d = curveToCenter(x, y, i);
              const id = `og-flow-${node.ring}-${node.idx}`;
              const isHovered = hover === node.name;
              const dur = 6.0 + ((i * 0.41) % 3.0);
              const begin = `${((i * 0.43) % 5).toFixed(2)}s`;
              return (
                <g key={id}>
                  <path id={id} d={d} fill="none" stroke={isHovered ? node.brand : "#2563EB"} strokeOpacity={isHovered ? 0.7 : 0.16} strokeWidth={isHovered ? 1.8 : 1.1} strokeLinecap="round" style={{ transition: "stroke 220ms ease, stroke-opacity 220ms ease" }} />
                  <circle r={isHovered ? 3.4 : 2.6} fill={isHovered ? node.brand : "#2563EB"}>
                    <animateMotion dur={`${dur}s`} repeatCount="indefinite" begin={begin}><mpath href={`#${id}`} /></animateMotion>
                    <animate attributeName="opacity" values="0;1;1;0" keyTimes="0;0.1;0.9;1" dur={`${dur}s`} repeatCount="indefinite" begin={begin} />
                  </circle>
                </g>
              );
            })}
          </svg>

          {ALL.map((node) => {
            const { x, y } = nodePosition(node);
            const isHovered = hover === node.name;
            const Logo = node.Logo;
            const delay = node.ring === "inner" ? node.idx * 60 : INNER.length * 60 + node.idx * 50;
            return (
              <div key={`${node.ring}-${node.idx}`} onMouseEnter={() => setHover(node.name)} className="absolute z-10 -translate-x-1/2 -translate-y-1/2 cursor-default select-none" style={{ left: `${((x / VIEW) * 100).toFixed(3)}%`, top: `${((y / VIEW) * 100).toFixed(3)}%` }} role="presentation">
                <div className="animate-spin" style={{ animationDuration: "240s", animationDirection: "reverse", animationTimingFunction: "linear", animationPlayState: active ? "paused" : "running" }}>
                  <div className="card flex items-center gap-2.5 rounded-full bg-white px-3.5 py-2 transition-all duration-200" style={{ animation: "fade-in-up 0.6s ease-out both", animationDelay: `${delay}ms`, transform: isHovered ? "translateY(-2px) scale(1.06)" : undefined, boxShadow: isHovered ? `0 1px 0 rgba(11,14,20,0.04), 0 14px 30px -12px ${node.brand}80, 0 0 0 1px ${node.brand}55` : undefined }}>
                    <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-paper-dim transition-colors" style={{ backgroundColor: isHovered ? `${node.brand}18` : undefined }}>
                      <Logo />
                    </span>
                    <span className="whitespace-nowrap text-sm font-semibold text-ink">{node.name}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="pointer-events-none absolute left-1/2 top-1/2 z-20 -translate-x-1/2 -translate-y-1/2">
          <div className="relative">
            <div aria-hidden="true" className="absolute inset-0 -m-10 rounded-full bg-accent/[0.05] blur-2xl" />
            <div aria-hidden="true" className="animate-spin absolute -inset-6 rounded-full border border-dashed border-ink/12" style={{ animationDuration: "40s" }} />
            <div className="relative grid h-24 w-24 place-items-center overflow-hidden rounded-full md:h-28 md:w-28" style={{ backgroundImage: "radial-gradient(circle at 32% 26%, #2A3340 0%, #14181F 48%, #0A0C12 100%)", boxShadow: "0 1px 0 rgba(255,255,255,0.08) inset, 0 14px 32px -14px rgba(11,14,20,0.40), 0 0 0 1px rgba(11,14,20,0.18)" }}>
              <div aria-hidden="true" className="absolute inset-[4px] rounded-full" style={{ boxShadow: "inset 0 0 16px rgba(37,99,235,0.13), inset 0 0 1px rgba(147,197,253,0.20)" }} />
              <span className="relative text-xl font-bold tracking-tightish text-paper md:text-2xl">husn</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}

/* ---------- Icons ----------
   Generic document/clinical glyphs — deliberately not real vendor logos,
   since these nodes represent categories of referral source, not third-party
   tools Husn has a relationship with. */
function LetterIcon() { return (<svg viewBox="0 0 24 24" width="15" height="15" aria-hidden="true"><rect x="2" y="4" width="20" height="16" rx="2" fill="none" stroke="#2C5CE6" strokeWidth="1.6" /><path d="M3 6l9 7 9-7" fill="none" stroke="#2C5CE6" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></svg>); }
function ScanIcon() { return (<svg viewBox="0 0 24 24" width="15" height="15" aria-hidden="true"><path d="M4 8V5a1 1 0 0 1 1-1h3M20 8V5a1 1 0 0 0-1-1h-3M4 16v3a1 1 0 0 0 1 1h3M20 16v3a1 1 0 0 1-1 1h-3" fill="none" stroke="#268F83" strokeWidth="1.7" strokeLinecap="round" /><path d="M4 12h16" stroke="#268F83" strokeWidth="1.4" strokeDasharray="1.5 2.5" strokeLinecap="round" /></svg>); }
function FaxIcon() { return (<svg viewBox="0 0 24 24" width="15" height="15" aria-hidden="true"><rect x="4" y="9" width="16" height="10" rx="1.5" fill="none" stroke="#9A680D" strokeWidth="1.6" /><path d="M7 9V5a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v4" fill="none" stroke="#9A680D" strokeWidth="1.6" /><path d="M8 13h4M8 16h6" stroke="#9A680D" strokeWidth="1.4" strokeLinecap="round" /></svg>); }
function FolderIcon() { return (<svg viewBox="0 0 24 24" width="15" height="15" aria-hidden="true"><path d="M3 6a1 1 0 0 1 1-1h5l2 2h9a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V6z" fill="none" stroke="#5059C9" strokeWidth="1.6" strokeLinejoin="round" /></svg>); }
function FileCheckIcon() { return (<svg viewBox="0 0 24 24" width="15" height="15" aria-hidden="true"><path d="M6 2h8l5 5v13a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2z" fill="none" stroke="#0E9159" strokeWidth="1.6" strokeLinejoin="round" /><path d="M9 13l2 2 4-4" fill="none" stroke="#0E9159" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" /></svg>); }
function NoteIcon() { return (<svg viewBox="0 0 24 24" width="15" height="15" aria-hidden="true"><rect x="4" y="3" width="16" height="18" rx="1.5" fill="none" stroke="#71767F" strokeWidth="1.6" /><path d="M8 8h8M8 12h8M8 16h5" stroke="#71767F" strokeWidth="1.4" strokeLinecap="round" /></svg>); }
function FlaskIcon() { return (<svg viewBox="0 0 24 24" width="15" height="15" aria-hidden="true"><path d="M9 2h6M10 2v6l-5.5 9.5A2 2 0 0 0 6.2 21h11.6a2 2 0 0 0 1.7-3.5L14 8V2" fill="none" stroke="#268F83" strokeWidth="1.6" strokeLinejoin="round" /><path d="M7.5 15h9" stroke="#268F83" strokeWidth="1.4" /></svg>); }
function ScanBeamIcon() { return (<svg viewBox="0 0 24 24" width="15" height="15" aria-hidden="true"><rect x="3" y="4" width="18" height="14" rx="2" fill="none" stroke="#2C5CE6" strokeWidth="1.6" /><path d="M7 18v2M17 18v2" stroke="#2C5CE6" strokeWidth="1.6" strokeLinecap="round" /><circle cx="12" cy="11" r="3.4" fill="none" stroke="#2C5CE6" strokeWidth="1.4" /></svg>); }
function MicroscopeIcon() { return (<svg viewBox="0 0 24 24" width="15" height="15" aria-hidden="true"><path d="M9 20h7M11 20v-4M7 12l4-4 5 5-2 2z" fill="none" stroke="#9A680D" strokeWidth="1.6" strokeLinejoin="round" strokeLinecap="round" /><circle cx="9" cy="8" r="1.6" fill="none" stroke="#9A680D" strokeWidth="1.4" /></svg>); }
function EnvelopeIcon() { return (<svg viewBox="0 0 24 24" width="15" height="15" aria-hidden="true"><rect x="2" y="5" width="20" height="14" rx="2" fill="none" stroke="#5059C9" strokeWidth="1.6" /><path d="M3 7l9 6 9-6" fill="none" stroke="#5059C9" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></svg>); }
function DatabaseIcon() { return (<svg viewBox="0 0 24 24" width="15" height="15" aria-hidden="true"><ellipse cx="12" cy="5.5" rx="8" ry="3" fill="none" stroke="#0E9159" strokeWidth="1.6" /><path d="M4 5.5V18c0 1.66 3.58 3 8 3s8-1.34 8-3V5.5" fill="none" stroke="#0E9159" strokeWidth="1.6" /><path d="M4 12c0 1.66 3.58 3 8 3s8-1.34 8-3" fill="none" stroke="#0E9159" strokeWidth="1.4" /></svg>); }
function FormIcon() { return (<svg viewBox="0 0 24 24" width="15" height="15" aria-hidden="true"><rect x="4" y="3" width="16" height="18" rx="1.5" fill="none" stroke="#71767F" strokeWidth="1.6" /><rect x="7" y="7" width="3" height="3" rx="0.5" fill="none" stroke="#71767F" strokeWidth="1.3" /><path d="M12 8.5h5M7 14h10M7 17h7" stroke="#71767F" strokeWidth="1.3" strokeLinecap="round" /></svg>); }
function PillIcon() { return (<svg viewBox="0 0 24 24" width="15" height="15" aria-hidden="true"><rect x="3.5" y="9.5" width="17" height="7" rx="3.5" fill="none" stroke="#EC5A4B" strokeWidth="1.6" transform="rotate(-32 12 13)" /><path d="M9.3 9.2l5.4 7.6" stroke="#EC5A4B" strokeWidth="1.4" strokeLinecap="round" /></svg>); }
function AlertIcon() { return (<svg viewBox="0 0 24 24" width="15" height="15" aria-hidden="true"><path d="M12 3l9 16H3z" fill="none" stroke="#9A680D" strokeWidth="1.6" strokeLinejoin="round" /><path d="M12 10v4" stroke="#9A680D" strokeWidth="1.6" strokeLinecap="round" /><circle cx="12" cy="17" r="0.9" fill="#9A680D" /></svg>); }
function HistoryIcon() { return (<svg viewBox="0 0 24 24" width="15" height="15" aria-hidden="true"><circle cx="12" cy="12" r="8.5" fill="none" stroke="#2C5CE6" strokeWidth="1.6" /><path d="M12 7v5l3.5 2" stroke="#2C5CE6" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></svg>); }
