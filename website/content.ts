// All copy for the husn.io single-page site lives here. Sections read from
// this file only, so wording changes never touch markup.
//
// The pitch: hiring is slow and exhausting, and even after weeks of it you
// often still don't end up with the best person. Husn searches the world for
// any role, sends the three best vetted candidates, keeps sending more until
// the right one is found, and charges nothing until someone is hired.

export const site = {
  name: "Husn",
  domain: "husn.io",
  url: "https://husn.io",
  email: "hello@husn.io",
  title: "Husn: extraordinary people, found for you",
  description:
    "Husn finds extraordinary talent anywhere in the world, for any role. Interview the three best vetted candidates, get more until you find the right one, and pay nothing until you hire.",
} as const;

export const nav = {
  links: [
    { href: "#services", label: "What we do" },
    { href: "#clients", label: "Clients" },
    { href: "#how", label: "How it works" },
    { href: "#faq", label: "FAQ" },
  ],
  cta: { label: "Book a Call", href: "#book" },
} as const;

export const hero = {
  headline: "Hiring shouldn't take over your life.",
  sub: "We find the three best people for the role. You pay nothing until you hire one.",
  cta: { label: "Start Hiring", href: "#book" },
  stats: [
    { value: "3", label: "Interview only the three best vetted candidates." },
    { value: "$0", label: "Pay nothing until you actually hire someone." },
    { value: "More", label: "If none of the three is right, we keep sending candidates until one is." },
  ],
} as const;

export type ServiceTile = {
  title: string;
  sub: string;
  items: readonly string[];
};

export const services = {
  heading: "We handle the whole search.",
  tiles: [
    {
      title: "Search",
      sub: "People a job ad would never reach.",
      items: [
        "Any role, any level, any country",
        "Screened for English, experience and your time zone",
        "Three shortlisted candidates, with our notes on each",
        "More candidates whenever you ask",
      ],
    },
    {
      title: "Interviews",
      sub: "Skip the five rounds. Meet the finalists.",
      items: [
        "We run the first interviews and the tests",
        "You meet three people, back to back, in one call",
        "Recorded interviews with written feedback",
        "We handle the offer and the negotiation",
      ],
    },
    {
      title: "Guarantee",
      sub: "Not the right person? We keep going.",
      items: [
        "More candidates until you find the right one",
        "A free replacement if it doesn't work out",
        "Reference checks on every hire",
        "Nothing to pay until someone starts",
      ],
    },
  ],
  // Cards floating on the three illustrated tiles.
  facts: [
    {
      title: "Where we look",
      body: "A talent base across the US, Europe, South East Asia and the MENA region, placed with companies in North America, the UK, Saudi Arabia and the UAE.",
    },
    {
      title: "What you skip",
      body: "No job ads, no inbox full of resumes, no five rounds of interviews. You meet three people and choose one.",
    },
    {
      title: "If it's not the right person",
      body: "Tell us what was missing. We go back out and send more, and you still pay nothing until you hire.",
    },
  ],
} as const;

export const how = {
  heading: "One call, and they're hired.",
  steps: [
    {
      title: "Tell us the role",
      body: "Send us the job description, or talk it through with us on a 20 minute call.",
    },
    {
      title: "We search",
      body: "Our recruiters go through hundreds of profiles, calls and tests, so you never have to.",
    },
    {
      title: "Meet three",
      body: "One call, three finalists, back to back. If none is right, we send more.",
    },
    {
      title: "Hire and start",
      body: "We handle the offer, the reference checks and the paperwork. You get a new colleague.",
    },
  ],
} as const;

export const clients = {
  heading: "Teams that hire with Husn",
  // Logo files live in website/assets/logos, keyed by `logo`.
  items: [
    { name: "UCL", logo: "ucl" },
    { name: "Harvard", logo: "harvard" },
    { name: "IBA Karachi", logo: "iba-karachi" },
    { name: "ZM Converters", logo: "zm-converters" },
  ],
} as const;

export const engagement = {
  heading: "Pay only when you hire.",
  plan: {
    name: "Find & Hire",
    price: "Nothing until they start",
    items: [
      "No upfront fee, no retainer, no minimum contract",
      "Three finalists, and more if you need them",
      "A free replacement if it doesn't work out",
      "A reference check report with every hire",
    ],
    cta: { label: "Book a Call", href: "#book" },
  },
} as const;

export const band = {
  kicker: "Still not convinced?",
  heading: "Just book a call.",
  cta: { label: "Book a Call", href: "#book" },
} as const;

export const faq = {
  heading: "Frequently asked questions",
  aside: "Can't find the answer you're looking for? We're here to help.",
  asideCta: { label: "Get in Touch", href: "#book" },
  items: [
    {
      q: "What roles do you hire for?",
      a: "Any role you would otherwise spend weeks recruiting for: engineers, designers, marketers, salespeople, finance, operations, executive assistants and customer support, from junior to leadership.",
    },
    {
      q: "Where do the candidates come from?",
      a: "Our talent base spans the US, Europe, South East Asia and the MENA region. We place people with companies in North America, the UK, Saudi Arabia and the UAE.",
    },
    {
      q: "What does it cost?",
      a: "Nothing until you hire. You pay a success fee when your hire starts, and nothing before that.",
    },
    {
      q: "What if I don't like the three candidates?",
      a: "Tell us what was missing. We go back and send more candidates, and you still pay nothing until you hire someone.",
    },
    {
      q: "How much of my time does this take?",
      a: "Send us the job description or take one 20 minute call, then one call to meet the finalists. We do the searching, screening, first interviews, tests and reference checks.",
    },
    {
      q: "Do candidates pay anything?",
      a: "No. We never charge candidates.",
    },
  ],
} as const;

export const book = {
  heading: "Let's find your person.",
  sub: "Pick a slot, tell us the role, and we'll come back with three people worth meeting.",
} as const;

export const footer = {
  menu: [
    { href: "#services", label: "What we do" },
    { href: "#clients", label: "Clients" },
    { href: "#how", label: "How it works" },
    { href: "#faq", label: "FAQ" },
  ],
  legal: [
    { href: "/privacy/", label: "Privacy Policy" },
    { href: "/terms/", label: "Terms & Conditions" },
  ],
  contact: { label: "Contact Us", href: "mailto:hello@husn.io" },
  cta: { label: "Book a Call", href: "#book" },
  copyright: `© ${new Date().getFullYear()} Husn. All Rights Reserved`,
} as const;
