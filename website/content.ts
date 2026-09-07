// All copy for the husn.io single-page site lives here. Sections read from
// this file only, so wording changes never touch markup.
//
// The pitch: hiring is slow and exhausting, and even after weeks of it you
// often still don't end up with the best person. Husn searches the world for
// any role, sends three people worth meeting, sends more if those aren't
// right, and charges nothing until someone is hired.

export const site = {
  name: "Husn",
  domain: "husn.io",
  url: "https://husn.io",
  email: "hello@husn.io",
  title: "Husn: extraordinary people, found for you",
  description:
    "Husn finds extraordinary talent anywhere in the world, for any role. Three candidates worth meeting, more if you need them, and you pay nothing until you hire.",
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
  pill: "You only pay when you hire",
  headline: "Hiring shouldn't take over your life.",
  sub: "We search the world, send you three people worth meeting, and you pay nothing until you hire one.",
  cta: { label: "Start Hiring", href: "#book" },
  caption: "Trusted by teams at universities, business schools and manufacturers.",
  stats: [
    { badge: "Shortlist", value: "3", label: "Candidates worth interviewing" },
    { badge: "Pricing", value: "$0", label: "Until the day you hire" },
    { badge: "Guarantee", value: "More", label: "Candidates if those three aren't it" },
  ],
} as const;

export type ServiceTile = {
  title: string;
  sub: string;
  items: readonly string[];
};

export const services = {
  label: "What we do",
  heading: "Everything between “we need someone” and their first day.",
  tiles: [
    {
      title: "Search",
      sub: "People you would never reach with a job ad.",
      items: [
        "Any role, any level, any country",
        "Screened for English, experience and your time zone",
        "Three shortlisted candidates, with our notes",
        "More candidates whenever you ask",
      ],
    },
    {
      title: "Interviews",
      sub: "Skip the five-round process. Meet the finalists.",
      items: [
        "We run the first rounds and the tests",
        "You meet three people, back to back, in one call",
        "Recorded interviews and written feedback",
        "Offer and negotiation handled for you",
      ],
    },
    {
      title: "Hire & Pay",
      sub: "Employ them anywhere, without opening an office.",
      items: [
        "We employ, you manage",
        "Payroll in any currency, same day",
        "Contracts, benefits and compliance",
        "Reference and background checks on every hire",
      ],
    },
  ],
  // Cards floating on the three illustrated tiles.
  facts: [
    {
      title: "Where we look",
      body: "Pakistan, India, North Africa, the Middle East, Europe, the UK and the US. Wherever the best person for the role happens to live.",
    },
    {
      title: "What you don't do",
      body: "No job ads. No inbox full of resumes. No five rounds of interviews. You meet three people and pick one.",
    },
    {
      title: "If it's not the right person",
      body: "Tell us what was missing. We go back out and send more, and you still pay nothing until you hire.",
    },
  ],
} as const;

export const how = {
  label: "How it works",
  heading: "Two calls. That's your part.",
  steps: [
    {
      title: "Tell us the role",
      body: "A 20 minute call. Who you need, what they will own, and when they should start.",
    },
    {
      title: "We search",
      body: "Our recruiters work through hundreds of profiles, calls and tests so you never have to.",
    },
    {
      title: "Meet three",
      body: "One call, three finalists, back to back. Not the right fit? We send more.",
    },
    {
      title: "Hire and start",
      body: "We handle the offer, the reference checks and the paperwork. You get a new colleague.",
    },
  ],
} as const;

export const clients = {
  label: "Clients",
  heading: "Teams that hire with Husn",
  // Logos live in website/assets/logos; a client without a file renders as a
  // text wordmark until the file is added. The line under each name is a
  // plain description, not a result claim.
  items: [
    { name: "UCL", logo: "ucl", line: "University. London." },
    { name: "Harvard", logo: "harvard", line: "University. Cambridge, Massachusetts." },
    { name: "IBA Karachi", logo: "iba-karachi", line: "Business school. Karachi." },
    { name: "ZM Converters", logo: null, line: "Packaging manufacturer. Pakistan." },
  ],
  cta: { label: "/ Start Hiring", href: "#book" },
} as const;

export const engagement = {
  label: "Pricing",
  heading: "You only pay when you hire",
  plans: [
    {
      name: "Find & Hire",
      tag: "Success fee",
      price: "Nothing until they start",
      items: [
        "No upfront fee, no retainer, no minimum contract",
        "Three finalists, and more if you need them",
        "Free replacement if it doesn't work out",
        "Reference check report with every hire",
      ],
      cta: { label: "/ Book a Call", href: "#book" },
    },
    {
      name: "Hire & Pay",
      tag: "Monthly per hire",
      price: "We employ, you manage",
      items: [
        "We employ them, you skip payroll, taxes and compliance",
        "Salaries in any currency, paid the same day",
        "Contracts, benefits and equipment sorted",
        "Month to month, cancel anytime",
      ],
      cta: { label: "/ Book a Call", href: "#book" },
    },
  ],
} as const;

export const band = {
  kicker: "Still deciding?",
  heading: "Twenty minutes. Then we start looking.",
  cta: { label: "Book a Call", href: "#book" },
} as const;

export const faq = {
  label: "FAQ",
  heading: "Frequently asked questions",
  aside: "Can't find the answer you're looking for? We're here to help.",
  asideCta: { label: "Get in Touch", href: "#book" },
  items: [
    {
      q: "What roles do you hire for?",
      a: "Any role you would otherwise spend weeks recruiting for. Engineers, designers, marketers, salespeople, finance, operations, executive assistants, customer support. Junior to leadership.",
    },
    {
      q: "Where do the candidates come from?",
      a: "Wherever the right person is. Most of our network is in Pakistan, India, North Africa and the Middle East, with candidates across Europe, the UK and the US as well.",
    },
    {
      q: "What does it cost?",
      a: "Nothing until you hire. Recruitment is a success fee paid when your hire starts. If we employ the person for you through Hire & Pay, that is a flat monthly fee per hire.",
    },
    {
      q: "What if I don't like the three candidates?",
      a: "Tell us what was missing. We go back and send more. You still pay nothing until you hire someone.",
    },
    {
      q: "How much of my time does this take?",
      a: "One 20 minute call to brief us and one call to meet the finalists. We do the searching, screening, first interviews, tests and reference checks.",
    },
    {
      q: "Do candidates pay anything?",
      a: "No. We never charge candidates.",
    },
  ],
} as const;

export const book = {
  label: "Book a Call",
  heading: "Let's find your person.",
  sub: "Pick a slot. Tell us the role. We come back with three people worth meeting.",
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
