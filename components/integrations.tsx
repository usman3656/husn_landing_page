type Node = {
  name: string;
  Logo: () => React.ReactElement;
};

const NODES: Node[] = [
  { name: "Slack", Logo: SlackLogo },
  { name: "Notion", Logo: NotionLogo },
  { name: "Gmail", Logo: GmailLogo },
  { name: "Outlook", Logo: OutlookLogo },
  { name: "Teams", Logo: TeamsLogo },
  { name: "Drive", Logo: DriveLogo },
  { name: "Docs", Logo: DocsLogo },
  { name: "SharePoint", Logo: SharePointLogo },
  { name: "PDFs", Logo: PdfLogo },
];

const CENTER = 400;
const RADIUS = 305;

function nodePos(i: number, n: number) {
  const angle = (i / n) * 2 * Math.PI - Math.PI / 2;
  const x = CENTER + RADIUS * Math.cos(angle);
  const y = CENTER + RADIUS * Math.sin(angle);
  return { x, y, angle };
}

function curvePath(x: number, y: number, idx: number) {
  const dx = x - CENTER;
  const dy = y - CENTER;
  const mx = CENTER + dx * 0.55;
  const my = CENTER + dy * 0.55;
  const perpX = -dy;
  const perpY = dx;
  const len = Math.hypot(perpX, perpY) || 1;
  const sign = idx % 2 === 0 ? 1 : -1;
  const offset = 26 * sign;
  const cx = mx + (perpX / len) * offset;
  const cy = my + (perpY / len) * offset;
  return `M ${CENTER} ${CENTER} Q ${cx} ${cy} ${x} ${y}`;
}

export function Integrations() {
  const N = NODES.length;
  return (
    <section className="relative overflow-hidden border-b border-ink/[0.06] bg-paper">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-dot-paper bg-dots [mask-image:radial-gradient(ellipse_at_center,black_22%,transparent_70%)] opacity-50"
      />

      <div className="relative z-10 mx-auto max-w-page px-6 py-16 md:py-20">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-4xl font-bold leading-[1.05] text-display tracking-display text-ink md:text-5xl">
            One connection, every tool your team uses.
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-ink-muted md:text-xl">
            Husn listens across Slack, Notion, Gmail, Outlook, Teams, Drive, Docs,
            SharePoint, PDFs and many more — no new tool for your team to adopt.
          </p>
        </div>

        <div className="relative mx-auto mt-12 aspect-square w-full max-w-[680px]">
          <svg
            viewBox="0 0 800 800"
            className="absolute inset-0 h-full w-full"
            aria-hidden="true"
          >
            <defs>
              <radialGradient id="centerHalo" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#2563EB" stopOpacity="0.22" />
                <stop offset="55%" stopColor="#2563EB" stopOpacity="0.05" />
                <stop offset="100%" stopColor="#2563EB" stopOpacity="0" />
              </radialGradient>
              <linearGradient id="lineFade" x1="0" y1="0" x2="1" y2="0" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#2563EB" stopOpacity="0.5" />
                <stop offset="100%" stopColor="#2563EB" stopOpacity="0.05" />
              </linearGradient>
              <radialGradient id="pulseDot" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#2563EB" stopOpacity="1" />
                <stop offset="60%" stopColor="#2563EB" stopOpacity="0.6" />
                <stop offset="100%" stopColor="#2563EB" stopOpacity="0" />
              </radialGradient>
            </defs>

            <circle cx={CENTER} cy={CENTER} r="290" fill="url(#centerHalo)" />

            <circle
              cx={CENTER}
              cy={CENTER}
              r="200"
              fill="none"
              stroke="rgba(11,14,20,0.07)"
              strokeDasharray="2 5"
            />
            <circle
              cx={CENTER}
              cy={CENTER}
              r="320"
              fill="none"
              stroke="rgba(11,14,20,0.05)"
              strokeDasharray="2 5"
            />

            {NODES.map((_, i) => {
              const { x, y } = nodePos(i, N);
              const d = curvePath(x, y, i);
              const id = `path-${i}`;
              const dur = 3.4 + (i % 3) * 0.6;
              return (
                <g key={i}>
                  <path id={id} d={d} fill="none" stroke="url(#lineFade)" strokeWidth="1.5" strokeLinecap="round" />
                  <circle r="9" fill="url(#pulseDot)" opacity="0">
                    <animateMotion dur={`${dur}s`} repeatCount="indefinite" begin={`${(i * 0.32) % 2.5}s`}>
                      <mpath href={`#${id}`} />
                    </animateMotion>
                    <animate
                      attributeName="opacity"
                      values="0;1;1;0"
                      keyTimes="0;0.1;0.85;1"
                      dur={`${dur}s`}
                      repeatCount="indefinite"
                      begin={`${(i * 0.32) % 2.5}s`}
                    />
                  </circle>
                  <circle r="2.6" fill="#2563EB" opacity="0">
                    <animateMotion dur={`${dur}s`} repeatCount="indefinite" begin={`${(i * 0.32) % 2.5}s`}>
                      <mpath href={`#${id}`} />
                    </animateMotion>
                    <animate
                      attributeName="opacity"
                      values="0;1;0"
                      dur={`${dur}s`}
                      repeatCount="indefinite"
                      begin={`${(i * 0.32) % 2.5}s`}
                    />
                  </circle>
                </g>
              );
            })}
          </svg>

          {NODES.map((node, i) => {
            const angle = (i / N) * 2 * Math.PI - Math.PI / 2;
            const top = `${50 + 38 * Math.sin(angle)}%`;
            const left = `${50 + 38 * Math.cos(angle)}%`;
            const Logo = node.Logo;
            return (
              <div
                key={node.name}
                className="absolute z-10 -translate-x-1/2 -translate-y-1/2"
                style={{ top, left }}
              >
                <div
                  className="card flex items-center gap-2.5 rounded-full bg-white px-3.5 py-2"
                  style={{ animation: "fade-in-up 0.6s ease-out both", animationDelay: `${i * 60}ms` }}
                >
                  <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-paper-dim">
                    <Logo />
                  </span>
                  <span className="whitespace-nowrap text-sm font-semibold text-ink">
                    {node.name}
                  </span>
                </div>
              </div>
            );
          })}

          <div className="absolute left-1/2 top-1/2 z-20 -translate-x-1/2 -translate-y-1/2">
            <div className="relative">
              <div
                aria-hidden="true"
                className="absolute inset-0 -m-8 rounded-full bg-accent/12 blur-3xl"
              />
              <div
                aria-hidden="true"
                className="absolute inset-0 -m-3 animate-ping rounded-full bg-accent/15"
                style={{ animationDuration: "2.8s" }}
              />
              <div className="relative grid h-28 w-28 place-items-center rounded-full bg-ink ring-[6px] ring-paper md:h-32 md:w-32">
                <p className="font-bold tracking-tightish text-paper text-2xl md:text-3xl">
                  husn
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

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
