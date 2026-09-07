// All copy for the husn.io single-page site lives here. Sections read from
// this file only, so wording changes never touch markup.
//
// Positioning: Husn is a technical recruitment and offshore hiring partner.
// The offer (shortlist in 3 working days, no advance payment, free
// replacements, EOR payroll, background checks, technical interviews) is
// modelled on the HR Ways service set; client names are Husn's own.

export const site = {
  name: "Husn",
  domain: "husn.io",
  url: "https://husn.io",
  email: "hello@husn.io",
  title: "Husn: hire prescreened tech talent in 3 working days",
  description:
    "Husn is a technical recruitment partner. Prescreened engineers, assistants and operators in three working days, no advance payment, free replacements, and hire-and-pay payroll in the markets we recruit from.",
} as const;

export const nav = {
  links: [
    { href: "#services", label: "Services" },
    { href: "#clients", label: "Clients" },
    { href: "#how", label: "How it works" },
    { href: "#faq", label: "FAQ" },
  ],
  cta: { label: "Book a Call", href: "#book" },
} as const;

export const hero = {
  pill: "No advance payments & free replacements",
  headline: "The Technical Recruitment Partner",
  sub: "Prescreened tech candidates in 3 working days.",
  cta: { label: "Start Hiring", href: "#book" },
  caption: "Trusted by teams at",
  // Logos live in website/assets/logos; a client without a file renders as a
  // text wordmark until the file is added.
  clients: [
    { name: "UCL", logo: "ucl" },
    { name: "Harvard", logo: "harvard" },
    { name: "IBA Karachi", logo: "iba-karachi" },
    { name: "ZM Converters", logo: null },
  ],
  stats: [
    { value: "3 days", label: "To a prescreened shortlist" },
    { value: "$0", label: "Advance payment" },
    { value: "Free", label: "Candidate replacements" },
  ],
} as const;

export type ServiceTile = {
  title: string;
  sub: string;
  items: readonly string[];
};

export const services = {
  label: "What we do",
  heading: "What Husn can do for your team.",
  tiles: [
    {
      title: "Recruitment",
      sub: "Prescreened tech candidates in 3 working days.",
      items: [
        "Requirement gathering",
        "Sourcing and screening",
        "Interview scheduling",
        "Technical testing",
        "Offer negotiation",
        "Reference checks",
        "Staff augmentation: vetted engineers, part-time or as a team",
      ],
    },
    {
      title: "Hire & Pay",
      sub: "Employ talent anywhere without registering an entity.",
      items: [
        "Employer of Record",
        "Multi-currency payroll, 10+ methods",
        "Contractor management",
        "Benefits and HRMS",
        "Coworking space",
      ],
    },
    {
      title: "Background Checks",
      sub: "Employment, education and identity verification.",
      items: [
        "Reference and past employment, 5–10 working days",
        "Criminal record, 3–4 working days",
        "Degree verification, 10–15 working days",
        "National ID verification, 2–3 working days",
      ],
    },
    {
      title: "Technical Interviews",
      sub: "Expert-led screening across every tech stack.",
      items: [
        "Choose from a range of interviewers",
        "Recorded interviews with written feedback",
        "Scheduling and candidate communication handled",
        "Salary and benefits insight for the offer",
      ],
    },
  ],
  // Cards that sit on the two illustrated tiles.
  facts: [
    {
      title: "Industries we hire for",
      body: "Fintech, SaaS, healthcare, AI, banking, e-commerce, real estate, insurance, travel, logistics and digital agencies.",
    },
    {
      title: "Where the talent is",
      body: "A talent base across Pakistan, India, the Middle East, the UK and the US, placed with companies in Saudi Arabia, the UAE, Europe and North America.",
    },
  ],
} as const;

export const how = {
  label: "How it works",
  heading: "How It Works (3 working days)",
  steps: [
    {
      title: "Book a Call",
      body: "A 20 minute call. Tell us the role, the stack, the budget and the start date.",
    },
    {
      title: "Shortlist",
      body: "Our recruiters send a prescreened batch of candidates in 3–4 working days.",
    },
    {
      title: "Interviews",
      body: "We schedule interviews around your feedback and run technical tests if you would rather not.",
    },
    {
      title: "Offer & Onboarding",
      body: "We help place the offer, run the reference check, and get your hire started.",
    },
  ],
} as const;

export const engagement = {
  label: "Pricing",
  heading: "No charge until you hire",
  plans: [
    {
      name: "Recruitment",
      tag: "Success fee",
      price: "Pay when your hire starts",
      items: [
        "No advance payment, no minimum contract",
        "Prescreened shortlist in 3 working days",
        "Free replacement if it's not the right fit",
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
        "Salaries in 10+ payment methods, same day, multi-currency",
        "Benefits, HRMS and coworking on request",
        "Background checks and technical interviews priced per check",
      ],
      cta: { label: "/ Book a Call", href: "#book" },
    },
  ],
} as const;

export const band = {
  kicker: "Still deciding?",
  heading: "Talk to us for 20 minutes.",
  cta: { label: "Book a Call", href: "#book" },
} as const;

export const faq = {
  label: "FAQ",
  heading: "Frequently asked questions",
  aside: "Can't find the answer you're looking for? We're here to help.",
  asideCta: { label: "Get in Touch", href: "#book" },
  items: [
    {
      q: "What services does Husn provide?",
      a: "Recruitment, staff augmentation, technical interviews, hire and pay (employer of record and payroll), background verification, and dedicated software development teams.",
    },
    {
      q: "How does hiring through Husn work?",
      a: "You tell us the technology, joining period and salary range. We screen and shortlist candidates at our end, get their consent before sharing resumes, then handle interview scheduling, negotiation, reference checks and onboarding support.",
    },
    {
      q: "Is Husn only for tech roles?",
      a: "Mostly. We specialise in engineering, product, data and design roles, and also support non-tech and operational hires when a client needs them.",
    },
    {
      q: "What does it cost?",
      a: "Recruitment is a success fee with no advance payment. Hire and pay is a monthly fee per employee. Background checks and technical interviews are priced per check or per interview, with technical interviews starting at $60.",
    },
    {
      q: "Where are your candidates based?",
      a: "Our talent base spans Pakistan, India, the Middle East, the UK and the US. Candidates are screened for English, relevant experience and time-zone overlap with your team.",
    },
    {
      q: "Do candidates pay anything?",
      a: "No. Husn never charges candidates. We only charge the companies that hire.",
    },
  ],
} as const;

export const book = {
  label: "Book a Call",
  heading: "Let's build your team.",
  sub: "Pick a slot. We'll ask what you're hiring for and come back with a shortlist.",
} as const;

export const footer = {
  menu: [
    { href: "#services", label: "Services" },
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
