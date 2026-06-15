"use client";

import { useRef, useState } from "react";

type Integration = {
  name: string;
  brand: string;
  Logo: () => React.ReactElement;
};

const INNER: Integration[] = [
  { name: "Slack", brand: "#611F69", Logo: SlackLogo },
  { name: "Jira", brand: "#2684FF", Logo: JiraLogo },
  { name: "Linear", brand: "#5E6AD2", Logo: LinearLogo },
  { name: "GitHub", brand: "#181717", Logo: GitHubLogo },
  { name: "Notion", brand: "#0F0F0F", Logo: NotionLogo },
  { name: "Docs", brand: "#1A73E8", Logo: DocsLogo },
];

const OUTER: Integration[] = [
  { name: "Gmail", brand: "#EA4335", Logo: GmailLogo },
  { name: "Outlook", brand: "#0078D4", Logo: OutlookLogo },
  { name: "Teams", brand: "#5059C9", Logo: TeamsLogo },
  { name: "Drive", brand: "#0066DA", Logo: DriveLogo },
  { name: "SharePoint", brand: "#036C70", Logo: SharePointLogo },
  { name: "Confluence", brand: "#2684FF", Logo: ConfluenceLogo },
  { name: "Figma", brand: "#F24E1E", Logo: FigmaLogo },
  { name: "Zoom", brand: "#2D8CFF", Logo: ZoomLogo },
  { name: "Asana", brand: "#F06A6A", Logo: AsanaLogo },
  { name: "PDFs", brand: "#D93025", Logo: PdfLogo },
];

type Placed = Integration & { ring: "inner" | "outer"; idx: number };

const ALL: Placed[] = [
  ...INNER.map((n, i) => ({ ...n, ring: "inner" as const, idx: i })),
  ...OUTER.map((n, i) => ({ ...n, ring: "outer" as const, idx: i })),
];

const VIEW = 800;
const C = 400;
const R_INNER = 200;
const R_OUTER = 315;

function nodePosition(item: Placed) {
  const total = item.ring === "inner" ? INNER.length : OUTER.length;
  const offset = item.ring === "outer" ? Math.PI / OUTER.length : 0;
  const r = item.ring === "inner" ? R_INNER : R_OUTER;
  const a = (item.idx / total) * 2 * Math.PI - Math.PI / 2 + offset;
  return { x: C + r * Math.cos(a), y: C + r * Math.sin(a) };
}

function curveToCenter(x: number, y: number, idx: number) {
  const dx = C - x;
  const dy = C - y;
  const mx = x + dx * 0.5;
  const my = y + dy * 0.5;
  const perpX = -dy;
  const perpY = dx;
  const len = Math.hypot(perpX, perpY) || 1;
  const sign = idx % 2 === 0 ? 1 : -1;
  const off = 24 * sign;
  const cx = mx + (perpX / len) * off;
  const cy = my + (perpY / len) * off;
  return `M ${x.toFixed(1)} ${y.toFixed(1)} Q ${cx.toFixed(1)} ${cy.toFixed(1)} ${C} ${C}`;
}

export function Integrations() {
  const [hover, setHover] = useState<string | null>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [active, setActive] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  function onPointerMove(e: React.PointerEvent<HTMLDivElement>) {
    const el = containerRef.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const nx = (e.clientX - r.left) / r.width - 0.5;
    const ny = (e.clientY - r.top) / r.height - 0.5;
    setTilt({ x: nx, y: ny });
  }
  function onPointerEnter() {
    setActive(true);
  }
  function onPointerLeave() {
    setTilt({ x: 0, y: 0 });
    setHover(null);
    setActive(false);
  }

  const tiltStyle: React.CSSProperties = {
    transform: `perspective(1400px) rotateX(${(-tilt.y * 5).toFixed(2)}deg) rotateY(${(tilt.x * 5).toFixed(2)}deg)`,
    transformStyle: "preserve-3d",
    transition: "transform 220ms ease",
  };

  return (
    <section className="relative flex min-h-screen items-center overflow-hidden border-b border-ink/[0.06] bg-paper">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-dot-paper bg-dots [mask-image:radial-gradient(ellipse_at_center,black_22%,transparent_70%)] opacity-50"
      />

      <div className="relative z-10 mx-auto w-full max-w-page px-6 py-10">
        <div className="grid items-center gap-8 lg:grid-cols-[0.75fr,1.25fr] lg:gap-12">
          <div className="max-w-md">
            <h2 className="text-2xl font-bold leading-[1.15] text-display tracking-display text-ink md:text-5xl">
              One connection, every tool your team uses.
            </h2>
            <p className="mt-5 text-base leading-relaxed text-ink-muted md:text-lg">
              Husn listens across Slack, Jira, Linear, GitHub, Notion, Google
              Workspace and many more. Your team doesn&rsquo;t adopt a thing.
            </p>
          </div>

          <div
            ref={containerRef}
            className="relative mx-auto aspect-square w-full max-w-[520px] lg:max-w-[640px]"
            onPointerMove={onPointerMove}
            onPointerEnter={onPointerEnter}
            onPointerLeave={onPointerLeave}
            role="img"
            aria-label="Sixteen tools flowing into Husn"
          >
          <div className="absolute inset-0" style={tiltStyle}>
            <div
              className="animate-spin absolute inset-0"
              style={{
                animationDuration: "240s",
                animationPlayState: active ? "paused" : "running",
              }}
            >
            <svg
              viewBox={`0 0 ${VIEW} ${VIEW}`}
              className="absolute inset-0 h-full w-full"
              aria-hidden="true"
            >
              <defs>
                <radialGradient id="halo" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#2563EB" stopOpacity="0.20" />
                  <stop offset="55%" stopColor="#2563EB" stopOpacity="0.04" />
                  <stop offset="100%" stopColor="#2563EB" stopOpacity="0" />
                </radialGradient>
                <radialGradient id="incoming" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#2563EB" stopOpacity="0.95" />
                  <stop offset="55%" stopColor="#2563EB" stopOpacity="0.40" />
                  <stop offset="100%" stopColor="#2563EB" stopOpacity="0" />
                </radialGradient>
                <radialGradient id="centerGlow" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#2563EB" stopOpacity="0" />
                  <stop offset="58%" stopColor="#60A5FA" stopOpacity="0.10" />
                  <stop offset="78%" stopColor="#2563EB" stopOpacity="0.06" />
                  <stop offset="100%" stopColor="#2563EB" stopOpacity="0" />
                </radialGradient>
              </defs>

              {/* Soft brand halo */}
              <circle cx={C} cy={C} r="300" fill="url(#halo)" />

              {/* Faint orbital rings */}
              <circle
                cx={C}
                cy={C}
                r={R_INNER}
                fill="none"
                stroke="rgba(11,14,20,0.06)"
                strokeDasharray="2 6"
              />
              <circle
                cx={C}
                cy={C}
                r={R_OUTER}
                fill="none"
                stroke="rgba(11,14,20,0.05)"
                strokeDasharray="2 6"
              />

              {/* Slow-rotating inner tick band */}
              <g>
                <animateTransform
                  attributeName="transform"
                  type="rotate"
                  from={`0 ${C} ${C}`}
                  to={`360 ${C} ${C}`}
                  dur="80s"
                  repeatCount="indefinite"
                />
                {Array.from({ length: 72 }).map((_, i) => {
                  const a = (i / 72) * 2 * Math.PI;
                  const inner = R_INNER - 5;
                  const outer = R_INNER + 5;
                  const x1 = (C + inner * Math.cos(a)).toFixed(2);
                  const y1 = (C + inner * Math.sin(a)).toFixed(2);
                  const x2 = (C + outer * Math.cos(a)).toFixed(2);
                  const y2 = (C + outer * Math.sin(a)).toFixed(2);
                  return (
                    <line
                      key={i}
                      x1={x1}
                      y1={y1}
                      x2={x2}
                      y2={y2}
                      stroke="rgba(11,14,20,0.07)"
                      strokeWidth="1"
                    />
                  );
                })}
              </g>

              {/* Connection lines with inward-flowing particles */}
              {ALL.map((node, i) => {
                const { x, y } = nodePosition(node);
                const d = curveToCenter(x, y, i);
                const id = `flow-${node.ring}-${node.idx}`;
                const isHovered = hover === node.name;
                const dur = 6.0 + ((i * 0.41) % 3.0);
                const begin = `${((i * 0.43) % 5).toFixed(2)}s`;
                const lineColor = isHovered ? node.brand : "#2563EB";
                const lineOp = isHovered ? 0.7 : 0.16;
                return (
                  <g key={id}>
                    <path
                      id={id}
                      d={d}
                      fill="none"
                      stroke={lineColor}
                      strokeOpacity={lineOp}
                      strokeWidth={isHovered ? 1.8 : 1.1}
                      strokeLinecap="round"
                      style={{
                        transition:
                          "stroke 220ms ease, stroke-opacity 220ms ease, stroke-width 220ms ease",
                      }}
                    />
                    {/* Soft incoming glow */}
                    <circle
                      r={isHovered ? 11 : 8}
                      fill="url(#incoming)"
                      opacity={isHovered ? 0.95 : 0.65}
                    >
                      <animateMotion
                        dur={`${dur}s`}
                        repeatCount="indefinite"
                        begin={begin}
                      >
                        <mpath href={`#${id}`} />
                      </animateMotion>
                      <animate
                        attributeName="opacity"
                        values="0;0.95;0.95;0"
                        keyTimes="0;0.15;0.85;1"
                        dur={`${dur}s`}
                        repeatCount="indefinite"
                        begin={begin}
                      />
                    </circle>
                    {/* Core particle (brand-tinted on hover) */}
                    <circle
                      r={isHovered ? 3.4 : 2.6}
                      fill={isHovered ? node.brand : "#2563EB"}
                    >
                      <animateMotion
                        dur={`${dur}s`}
                        repeatCount="indefinite"
                        begin={begin}
                      >
                        <mpath href={`#${id}`} />
                      </animateMotion>
                      <animate
                        attributeName="opacity"
                        values="0;1;1;0"
                        keyTimes="0;0.1;0.9;1"
                        dur={`${dur}s`}
                        repeatCount="indefinite"
                        begin={begin}
                      />
                    </circle>
                  </g>
                );
              })}

              {/* Soft glow behind the core */}
              <circle cx={C} cy={C} r="110" fill="url(#centerGlow)" />
            </svg>

            {/* Integration node pills */}
            {ALL.map((node) => {
              const { x, y } = nodePosition(node);
              const isHovered = hover === node.name;
              const Logo = node.Logo;
              const delay =
                node.ring === "inner"
                  ? node.idx * 60
                  : INNER.length * 60 + node.idx * 50;
              return (
                <div
                  key={`${node.ring}-${node.idx}`}
                  onMouseEnter={() => setHover(node.name)}
                  className="absolute z-10 -translate-x-1/2 -translate-y-1/2 cursor-default select-none"
                  style={{
                    left: `${((x / VIEW) * 100).toFixed(3)}%`,
                    top: `${((y / VIEW) * 100).toFixed(3)}%`,
                  }}
                  role="presentation"
                >
                  <div
                    className="animate-spin"
                    style={{
                      animationDuration: "240s",
                      animationDirection: "reverse",
                      animationTimingFunction: "linear",
                      animationPlayState: active ? "paused" : "running",
                    }}
                  >
                  <div
                    className="card flex items-center gap-0 rounded-full bg-white p-1 transition-all duration-200 sm:gap-2 sm:px-3 sm:py-1.5 md:gap-2.5 md:px-3.5 md:py-2"
                    style={{
                      animation: "fade-in-up 0.6s ease-out both",
                      animationDelay: `${delay}ms`,
                      transform: isHovered
                        ? "translateY(-2px) scale(1.06)"
                        : undefined,
                      boxShadow: isHovered
                        ? `0 1px 0 rgba(11,14,20,0.04), 0 14px 30px -12px ${node.brand}80, 0 0 0 1px ${node.brand}55`
                        : undefined,
                    }}
                  >
                    <span
                      className="grid h-5 w-5 shrink-0 place-items-center rounded-full bg-paper-dim transition-colors sm:h-6 sm:w-6 md:h-7 md:w-7"
                      style={{
                        backgroundColor: isHovered
                          ? `${node.brand}18`
                          : undefined,
                      }}
                    >
                      <Logo />
                    </span>
                    <span className="hidden whitespace-nowrap text-xs font-semibold text-ink sm:inline md:text-sm">
                      {node.name}
                    </span>
                  </div>
                  </div>
                </div>
              );
            })}
            </div>

            {/* Center - dark core with corona, status pulse, and orbital satellite */}
            <div className="pointer-events-none absolute left-1/2 top-1/2 z-20 -translate-x-1/2 -translate-y-1/2">
              <div className="relative">
                {/* Subtle halo */}
                <div
                  aria-hidden="true"
                  className="absolute inset-0 -m-10 rounded-full bg-accent/[0.05] blur-2xl"
                />
                {/* Slow rotating dashed orbital */}
                <div
                  aria-hidden="true"
                  className="animate-spin absolute -inset-6 rounded-full border border-dashed border-ink/12"
                  style={{ animationDuration: "40s" }}
                />

                {/* The dark core */}
                <div
                  className="relative grid h-16 w-16 place-items-center overflow-hidden rounded-full sm:h-20 sm:w-20 md:h-28 md:w-28"
                  style={{
                    backgroundImage:
                      "radial-gradient(circle at 32% 26%, #2A3340 0%, #14181F 48%, #0A0C12 100%)",
                    boxShadow:
                      "0 1px 0 rgba(255,255,255,0.08) inset, 0 14px 32px -14px rgba(11,14,20,0.40), 0 0 0 1px rgba(11,14,20,0.18)",
                  }}
                >
                  {/* Inner accent rim (faint) */}
                  <div
                    aria-hidden="true"
                    className="absolute inset-[4px] rounded-full"
                    style={{
                      boxShadow:
                        "inset 0 0 16px rgba(37,99,235,0.13), inset 0 0 1px rgba(147,197,253,0.20)",
                    }}
                  />
                  {/* Subtle specular highlight (top) */}
                  <div
                    aria-hidden="true"
                    className="absolute inset-x-3 top-3 h-8 rounded-full opacity-50"
                    style={{
                      background:
                        "radial-gradient(50% 100% at 50% 0%, rgba(255,255,255,0.35), transparent 75%)",
                    }}
                  />

                  {/* Wordmark */}
                  <span className="relative text-sm font-bold tracking-tightish text-paper sm:text-base md:text-2xl">
                    husn
                  </span>
                </div>
              </div>
            </div>
          </div>

          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- Logos ---------- */

function SlackLogo() {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true">
      <path d="M5 14a2 2 0 1 1-2-2h2v2zm1 0a2 2 0 1 1 4 0v5a2 2 0 1 1-4 0v-5z" fill="#E01E5A" />
      <path d="M10 5a2 2 0 1 1 2-2v2h-2zm0 1a2 2 0 1 1 0 4H5a2 2 0 1 1 0-4h5z" fill="#36C5F0" />
      <path d="M19 10a2 2 0 1 1 2 2h-2v-2zm-1 0a2 2 0 1 1-4 0V5a2 2 0 1 1 4 0v5z" fill="#2EB67D" />
      <path d="M14 19a2 2 0 1 1-2 2v-2h2zm0-1a2 2 0 1 1 0-4h5a2 2 0 1 1 0 4h-5z" fill="#ECB22E" />
    </svg>
  );
}

function NotionLogo() {
  return (
    <svg viewBox="0 0 24 24" width="15" height="15" aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="3" fill="#FFFFFF" stroke="#0F0F0F" strokeWidth="1.5" />
      <path d="M8 8v8M8 8l8 8M16 8v8" stroke="#0F0F0F" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

function GmailLogo() {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true">
      <path d="M3 7l9 6 9-6v10a1 1 0 0 1-1 1h-3V11l-5 3.5L7 11v7H4a1 1 0 0 1-1-1V7z" fill="#EA4335" />
      <path d="M3 7l9 6 9-6v1.5L12 14.5 3 8.5V7z" fill="#C5221F" />
    </svg>
  );
}

function OutlookLogo() {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true">
      <rect x="2" y="6" width="13" height="13" rx="1.5" fill="#0078D4" />
      <ellipse cx="8.5" cy="12.5" rx="3" ry="3.4" fill="#FFFFFF" />
      <ellipse cx="8.5" cy="12.5" rx="1.4" ry="1.7" fill="#0078D4" />
      <path d="M15 9l5 2.5v3L15 17V9z" fill="#28A8EA" />
    </svg>
  );
}

function TeamsLogo() {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true">
      <rect x="3" y="6" width="11" height="12" rx="1.5" fill="#5059C9" />
      <path d="M5.5 9h6M8.5 9v6" stroke="#FFFFFF" strokeWidth="1.6" strokeLinecap="round" />
      <circle cx="17.5" cy="9" r="2.2" fill="#7B83EB" />
      <path d="M14.5 12.5h6a1 1 0 0 1 1 1v3a3 3 0 0 1-3 3h-1a3 3 0 0 1-3-3v-3z" fill="#7B83EB" />
    </svg>
  );
}

function DriveLogo() {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true">
      <path d="M8 3l-5 9 3 5 5-9-3-5z" fill="#0066DA" />
      <path d="M16 3H8l5 9h8l-5-9z" fill="#EA4335" />
      <path d="M6 17h10l3-5h-8l-5 5z" fill="#FBBC04" />
      <path d="M16 3l5 9-3 5-5-9 3-5z" fill="#00AC47" />
    </svg>
  );
}

function DocsLogo() {
  return (
    <svg viewBox="0 0 24 24" width="14" height="14" aria-hidden="true">
      <path d="M6 2h8l5 5v13a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2z" fill="#1A73E8" />
      <path d="M14 2v5h5" fill="#A1C2FA" />
      <path d="M8 12h8M8 15h8M8 18h5" stroke="#FFFFFF" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  );
}

function SharePointLogo() {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true">
      <circle cx="9" cy="9" r="6" fill="#036C70" />
      <circle cx="15" cy="13" r="5" fill="#1A9BA1" />
      <circle cx="13" cy="17" r="3.5" fill="#04787C" />
      <text x="9" y="11.5" textAnchor="middle" fontSize="6" fontWeight="700" fill="#FFFFFF" fontFamily="system-ui">S</text>
    </svg>
  );
}

function PdfLogo() {
  return (
    <svg viewBox="0 0 24 24" width="14" height="14" aria-hidden="true">
      <path d="M6 2h8l5 5v13a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2z" fill="#D93025" />
      <path d="M14 2v5h5" fill="#F28B82" />
      <text x="12" y="17" textAnchor="middle" fontSize="5.5" fontWeight="800" fill="#FFFFFF" fontFamily="system-ui">PDF</text>
    </svg>
  );
}

function JiraLogo() {
  return (
    <svg viewBox="0 0 24 24" width="15" height="15" aria-hidden="true">
      <defs>
        <linearGradient id="jiraG" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#0052CC" />
          <stop offset="100%" stopColor="#2684FF" />
        </linearGradient>
      </defs>
      <path d="M11.5 2.5L2 12l4.6 4.6L12 11.4l5.4 5.2L22 12 11.5 2.5z" fill="url(#jiraG)" />
      <path d="M11.5 8.7L17.4 14.6l-5.9 5.9-5.9-5.9 5.9-5.9z" fill="#2684FF" opacity="0.85" />
    </svg>
  );
}

function LinearLogo() {
  return (
    <svg viewBox="0 0 24 24" width="14" height="14" aria-hidden="true">
      <defs>
        <linearGradient id="linG" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#5E6AD2" />
          <stop offset="100%" stopColor="#9CA3FF" />
        </linearGradient>
      </defs>
      <path d="M2.5 12.5L11.5 21.5l9-9-3-3-6 6-6-6 6-6-3-3-6 6z" fill="url(#linG)" />
    </svg>
  );
}

function GitHubLogo() {
  return (
    <svg viewBox="0 0 24 24" width="15" height="15" aria-hidden="true">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        fill="#181717"
        d="M12 2C6.48 2 2 6.58 2 12.25c0 4.54 2.87 8.39 6.84 9.75.5.09.66-.22.66-.49v-1.7c-2.78.62-3.37-1.21-3.37-1.21-.45-1.18-1.11-1.5-1.11-1.5-.91-.63.07-.62.07-.62 1 .07 1.53 1.05 1.53 1.05.89 1.56 2.34 1.11 2.91.85.09-.66.35-1.11.63-1.37-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.39-2.04 1.03-2.76-.1-.26-.45-1.3.1-2.71 0 0 .84-.27 2.75 1.05a9.4 9.4 0 0 1 2.5-.34c.85.004 1.71.12 2.51.34 1.91-1.32 2.75-1.05 2.75-1.05.55 1.41.2 2.45.1 2.71.64.72 1.03 1.64 1.03 2.76 0 3.94-2.34 4.81-4.57 5.07.36.32.68.94.68 1.9v2.81c0 .27.16.59.67.49A10.02 10.02 0 0 0 22 12.25C22 6.58 17.52 2 12 2z"
      />
    </svg>
  );
}

function ConfluenceLogo() {
  return (
    <svg viewBox="0 0 24 24" width="15" height="15" aria-hidden="true">
      <defs>
        <linearGradient id="cfG1" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#0052CC" />
          <stop offset="100%" stopColor="#2684FF" />
        </linearGradient>
        <linearGradient id="cfG2" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#2684FF" />
          <stop offset="100%" stopColor="#0052CC" />
        </linearGradient>
      </defs>
      <path
        d="M2.5 18.5c1-2.4 5.2-3.4 9.2-1.2 4 2.1 8 1 10.3-1.5l-1.7 4.4c-2 2-5.8 2.6-9.4.6-3.6-2-7-1.4-8.4-2.3z"
        fill="url(#cfG1)"
      />
      <path
        d="M21.5 5.5c-1 2.4-5.2 3.4-9.2 1.2-4-2.1-8-1-10.3 1.5l1.7-4.4c2-2 5.8-2.6 9.4-.6 3.6 2 7 1.4 8.4 2.3z"
        fill="url(#cfG2)"
      />
    </svg>
  );
}

function FigmaLogo() {
  return (
    <svg viewBox="0 0 24 24" width="13" height="13" aria-hidden="true">
      <path d="M9 2h3v6H9a3 3 0 1 1 0-6z" fill="#F24E1E" />
      <path d="M12 2h3a3 3 0 1 1 0 6h-3V2z" fill="#FF7262" />
      <path d="M9 8h3v6H9a3 3 0 1 1 0-6z" fill="#A259FF" />
      <path d="M12 8a3 3 0 1 1 3 3 3 3 0 0 1-3-3z" fill="#1ABCFE" />
      <path d="M9 14h3v3a3 3 0 1 1-3-3z" fill="#0ACF83" />
    </svg>
  );
}

function ZoomLogo() {
  return (
    <svg viewBox="0 0 24 24" width="15" height="15" aria-hidden="true">
      <rect x="2" y="7" width="20" height="10" rx="2.5" fill="#2D8CFF" />
      <path d="M5 10h8.5v4H5z" fill="#FFFFFF" />
      <path d="M14 11l4-1.6v5.2L14 13v-2z" fill="#FFFFFF" />
    </svg>
  );
}

function AsanaLogo() {
  return (
    <svg viewBox="0 0 24 24" width="14" height="14" aria-hidden="true">
      <circle cx="12" cy="6.5" r="3.2" fill="#F06A6A" />
      <circle cx="6.8" cy="15.5" r="3.2" fill="#F06A6A" />
      <circle cx="17.2" cy="15.5" r="3.2" fill="#F06A6A" />
    </svg>
  );
}
