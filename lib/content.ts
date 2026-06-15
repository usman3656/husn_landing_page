export const brand = {
  name: "Husn",
  tagline: "The alignment layer for program teams.",
  domain: "husn.io",
} as const;

export const nav = {
  links: [
    { href: "#how", label: "How it works" },
    { href: "#pricing", label: "Pricing" },
    { href: "#faq", label: "FAQ" },
  ],
  cta: { label: "Book a demo", href: "#demo" },
} as const;

export const hero = {
  eyebrow: "Pre-sync briefings for program teams",
  headline: "Walk into every sync already knowing what changed.",
  sub:
    "Husn watches your Jira, Slack, and docs, then emails the right people what changed — 30 minutes before each sync.",
  primaryCta: { label: "Book a demo", href: "#demo" },
  secondaryCta: { label: "See how it works →", href: "#how" },
} as const;

// NOTE: replace the bracketed placeholders below with the real founder's
// name, role, credential, and a headshot in /public. This proof element was
// the #1 conversion gap flagged by every reviewer — a real human + credential.
export const founder = {
  eyebrow: "Why Husn exists",
  initials: "YN",
  photo: "", // e.g. "/founder.jpg" — falls back to initials when empty
  name: "[Your name]",
  role: "Founder, Husn",
  credential: "Previously [your program / engineering leadership role]",
  quote:
    "I spent years running cross-functional programs, and the worst moments were always the same: finding out in the status meeting that something had quietly broken days earlier. Husn is the tool I wish I'd had — it reads the work and tells you what changed before the room does.",
  linkedin: "", // e.g. "https://www.linkedin.com/in/you"
} as const;

export const pricing = {
  eyebrow: "Pricing",
  heading: "Pilot pricing, and it scales by program, not seats.",
  sub:
    "We're setting pricing with our first pilot teams. Everyone on your team gets the brief; you only pay for the programs Husn watches.",
  note: "Two quiet weeks to tune it before any alert goes live · cancel anytime.",
  cta: { label: "Book a demo", href: "#demo" },
} as const;

export const faq = {
  heading: "Common questions",
  items: [
    {
      q: "When can we actually start using it?",
      a: "We're onboarding our first pilot teams now. Connect Jira + Slack + one doc source and you'll get your first pre-sync brief inside a week. For the first two weeks Husn runs in shadow mode, so you can tune which changes matter before any alert goes live.",
    },
    {
      q: "What if our Jira is messy?",
      a: "Most are. During the two-week shadow mode Husn watches quietly while you tune which signals matter and add owners. Alerts turn on when you say so, not by default.",
    },
    {
      q: "What's the smallest team that benefits?",
      a: "Honestly, you need at least 3 connected teams and 2 active programs before Husn has enough cross-team activity to be worth it. Below ~200 employees there usually isn't enough hand-off between teams to justify it.",
    },
  ],
} as const;

export const demo = {
  heading: "Book a demo.",
  sub:
    "We'll walk you through Husn and show you what a brief on your kind of work would look like.",
  qualifier: {
    intro: "Where should we send times?",
    roleLabel: "Your role",
    roles: [
      "TPM / Program",
      "Eng leadership",
      "PMO / Ops",
      "Other",
    ],
    otherLabel: "Tell us your role",
    otherPlaceholder: "e.g. Chief of Staff, Head of Operations",
    emailLabel: "Your work email",
    emailPlaceholder: "you@company.com",
    submit: "Book my demo",
  },
  successHeading: "Request received.",
  successBody:
    "Your request went straight to our founder. Expect a reply within a day with two or three times that work.",
} as const;

export const footer = {
  legal: [
    { href: "/privacy", label: "Privacy" },
    { href: "/terms", label: "Terms" },
  ],
  copyright: `© ${new Date().getFullYear()} Husn. Built for program teams.`,
} as const;
