export const brand = {
  name: "Husn",
  tagline: "The alignment layer for program teams.",
  domain: "husn.io",
} as const;

export const nav = {
  links: [
    { href: "#how", label: "How it works" },
    { href: "#audience", label: "Who it's for" },
    { href: "#faq", label: "FAQ" },
  ],
  cta: { label: "Book a demo", href: "#demo" },
} as const;

export const hero = {
  eyebrow: "Make project management saner.",
  headline: "The alignment layer for program teams.",
  sub:
    "Husn watches Jira, Slack, and your docs for the changes your sync meetings keep discovering too late, and tells the right people 30 minutes before the meeting starts.",
  primaryCta: { label: "Book a demo", href: "#demo" },
  secondaryCta: { label: "How it works →", href: "#how" },
  feature: {
    value: "0",
    label: "tools your team has to adopt",
    detail:
      "Husn listens to the tools you already use. Your team doesn't change a thing.",
  },
} as const;

export const problem = {
  heading: "Status meetings shouldn't be where you discover problems.",
  body:
    "Program work changes hourly in Slack, drifts in Jira, and gets reframed in docs. Owners shift, assumptions go stale, dependencies break, and the first time anyone notices is when an exec asks why the milestone slipped.",
  bullets: [
    "Changes happen in Slack and never make it back to Jira.",
    "Doc edits invalidate ticket assumptions that no one updates.",
    "Owners shift without the affected teams being told.",
  ],
} as const;

export const how = {
  heading: "How it works",
  steps: [
    {
      number: "01",
      title: "Connect.",
      body: "OAuth into Jira, Slack, and your docs. Husn never writes back.",
    },
    {
      number: "02",
      title: "Listen.",
      body: "We watch for stale assumptions, ambiguous ownership, and docs that drift from tickets.",
    },
    {
      number: "03",
      title: "Brief.",
      body: "Source-cited brief in your inbox 30 minutes before each sync.",
    },
  ],
} as const;

export const audience = {
  heading: "Who Husn is for.",
  forItems: [
    "Anyone running 2+ cross-functional programs and tired of status-meeting surprises",
    "Engineering and program leaders who own portfolio reporting",
    "Teams that live in Jira + Slack + Google Docs (or a close variant)",
    "Founders / CTOs who don't want to staff a PMO just to keep things aligned",
  ],
} as const;

export const faq = {
  heading: "Common questions",
  items: [
    {
      q: "When can we actually start using it?",
      a: "Today. Sign up for a 14-day pilot, connect Jira + Slack + one doc source, and you'll get your first pre-sync brief inside a week. The two-week shadow mode runs in parallel so you tune signal precision before alerts go live.",
    },
    {
      q: "Is this another tool we have to adopt?",
      a: "No. Your team stays in Jira, Slack, and your docs. Husn listens — it doesn't ask anyone to type updates somewhere new. The brief shows up in Slack DM (or as a Google Doc) before each meeting.",
    },
    {
      q: "How is this different from Atlas, Rovo, Copilot, or Jellyfish?",
      a: "Those tools sit on top of one vendor's data (Atlas/Rovo: Atlassian; Copilot: Microsoft; Jellyfish: Git + Jira). Husn reconciles across vendors. The acknowledgement graph — who's affected, who's seen the change, who conflicts — is something none of them produce. The full comparison is above.",
    },
    {
      q: "What if our Jira is messy?",
      a: "Most are. We onboard with a two-week shadow mode where Husn detects drift silently while you tune signal precision and add owners. Notifications turn on when you say so — not by default.",
    },
    {
      q: "What does Husn cost?",
      a: "$890/program/month on the Team tier, $1,490/program/month on Growth, custom on Enterprise. Pricing scales with programs connected, not viewer seats — everyone on your team gets the brief at no extra cost. Full pricing above.",
    },
    {
      q: "What's the smallest team that benefits?",
      a: "Honestly, you need at least 3 connected teams and 2 active programs for the acknowledgement graph to start paying off. Below ~200 employees there usually isn't enough cross-team interface to justify it.",
    },
  ],
} as const;

export const demo = {
  heading: "Book a demo.",
  sub:
    "We'll walk you through Husn and show you what a brief on your kind of work would look like.",
  qualifier: {
    intro: "Tell us where to write back:",
    roleLabel: "Your role",
    roles: [
      "TPM",
      "EPM",
      "PMO Lead",
      "Director of Engineering",
      "Founder",
      "CTO",
      "Other",
    ],
    otherLabel: "Tell us your role",
    otherPlaceholder: "e.g. Chief of Staff, Head of Operations",
    emailLabel: "Your work email",
    emailPlaceholder: "you@company.com",
    submit: "Request a time",
  },
  successHeading: "We'll email you with a few times.",
  successBody:
    "Your request landed with the founder. Expect a reply within 24 hours with two or three slots that work.",
} as const;

export const footer = {
  legal: [
    { href: "/privacy", label: "Privacy" },
    { href: "/terms", label: "Terms" },
  ],
  copyright: `© ${new Date().getFullYear()} Husn. Built for program teams.`,
} as const;
