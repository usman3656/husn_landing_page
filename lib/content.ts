export const brand = {
  name: "Husn",
  tagline: "The operational intelligence layer for project teams.",
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
  eyebrow: "Drift intelligence for operating teams.",
  headline: "The operational intelligence layer for project teams.",
  sub:
    "Husn reads continuously across Slack, Jira, Google, and Confluence, maps your work into a structured graph, and writes a sourced briefing every morning. Drift surfaces before the meeting, not during it.",
  primaryCta: { label: "Book a demo", href: "#demo" },
  secondaryCta: { label: "How it works →", href: "#how" },
  feature: {
    value: "0",
    label: "tools your team has to adopt",
    detail:
      "Husn sits one layer above the tools you already run. Your team changes nothing.",
  },
} as const;

export const problem = {
  heading: "Status meetings shouldn't be where you discover problems.",
  body:
    "A launch date moves in Jira. The deck still says the old one. QA lives in a different channel and never sees the change. Security's review is stale because the architecture quietly shifted. By the time the status meeting catches the conflict, two weeks of work are wasted.",
  bullets: [
    "A launch date moves in Jira but the deck never gets updated.",
    "QA lives in a different channel and misses the scope change.",
    "Security's review goes stale because the architecture quietly shifted.",
  ],
} as const;

export const how = {
  heading: "How it works",
  steps: [
    {
      number: "01",
      title: "Read.",
      body: "OAuth into Slack, Jira, Google, Microsoft, Confluence, and your meeting tools. Read-only across every system.",
    },
    {
      number: "02",
      title: "Map.",
      body: "Husn projects every artifact, owner, and decision into one structured graph. The work becomes queryable across tools.",
    },
    {
      number: "03",
      title: "Brief.",
      body: "Daily per-persona briefing of what changed, what's at risk, and who hasn't acknowledged. Every claim sourced back to the original artifact.",
    },
  ],
} as const;

export const audience = {
  heading: "Who Husn is for.",
  forItems: [
    "TPMs and program managers running cross-functional programs across at least four tools",
    "Chiefs of staff and engineering leaders who own the cross-team readout",
    "Companies of 500–8,000 employees in B2B SaaS, fintech, or healthtech",
    "Teams paying $180K/year for humans to be diff tools across systems",
  ],
} as const;

export const faq = {
  heading: "Common questions",
  items: [
    {
      q: "When can we actually start using it?",
      a: "Today. Sign up for a 14-day pilot, connect Slack + Jira + your doc source, and the first daily briefing lands in your inbox within a week. A two-week shadow mode runs in parallel so you tune signal precision before alerts go live.",
    },
    {
      q: "Is this another tool we have to adopt?",
      a: "No. Your team stays in Slack, Jira, Google, Microsoft, and wherever else they already work. Husn sits one layer above and listens. The briefing arrives in Slack DM, a Google Doc, or email.",
    },
    {
      q: "How is this different from Atlas, Rovo, Copilot, or Jellyfish?",
      a: "Those tools sit on top of one vendor's data (Atlas/Rovo: Atlassian; Copilot: Microsoft; Jellyfish: Git + Jira). Husn reconciles across vendors. The cross-source drift graph (who's affected, who's seen the change, who conflicts) is something none of them produce.",
    },
    {
      q: "What if our Jira is messy?",
      a: "Most are. We onboard with a two-week shadow mode where Husn detects drift silently while you tune signal precision and add owners. Notifications turn on when you say so, not by default.",
    },
    {
      q: "What does Husn cost?",
      a: "$890/program/month on the Team tier, $1,490/program/month on Growth, custom on Enterprise. Pricing scales with programs connected, not viewer seats. Everyone on your team gets the briefing at no extra cost.",
    },
    {
      q: "What's the smallest team that benefits?",
      a: "You need at least 3 connected teams and 2 active programs running across 4+ tools for the drift graph to start paying off. Below ~500 employees there usually isn't enough cross-team interface to justify it.",
    },
  ],
} as const;

export const demo = {
  heading: "Book a demo.",
  sub:
    "Twenty minutes. We'll pull a sample briefing from a workflow shaped like yours.",
  qualifier: {
    intro: "Tell us where to write back:",
    roleLabel: "Your role",
    roles: [
      "TPM",
      "EPM",
      "PMO Lead",
      "Chief of Staff",
      "Director of Engineering",
      "Founder",
      "CTO",
      "Other",
    ],
    otherLabel: "Tell us your role",
    otherPlaceholder: "e.g. Head of Operations",
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
  copyright: `© ${new Date().getFullYear()} Husn. Drift intelligence for operating teams.`,
} as const;
