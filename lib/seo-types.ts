// Shared types and taxonomy for the programmatic SEO system.
// Kept separate from the page data so content modules (and JSON batches) can
// import the type without a circular dependency on the page array.

export type BriefTone = "risk" | "changed" | "watch";

// Page format. The dynamic route renders one base layout and adds a comparison
// table for "comparison" and a "what's inside" block for "template".
export type PageType = "solution" | "tool" | "template" | "comparison";

// Top level grouping. Drives the /solutions index and the per-category CTA.
export type Category =
  | "project-risk"
  | "executive-reporting"
  | "meeting-preparation"
  | "dependency-management"
  | "project-health";

export type BriefItem = {
  text: string;
  tag: string;
  tone: BriefTone;
};

export type FaqItem = {
  q: string;
  a: string;
};

export type UseCase = {
  title: string;
  body: string;
};

export type ComparisonRow = {
  dimension: string;
  husn: string;
  them: string;
};

export type SeoPage = {
  slug: string;
  type: PageType;
  category: Category;
  title: string;
  metaTitle: string;
  metaDescription: string;
  heroEyebrow: string;
  heroHeadline: string;
  heroSubheadline: string;
  primaryPain: string;
  painBullets: string[];
  // "Why this gets hard at scale"
  whyHardHeading: string;
  whyHard: string[];
  // "How Husn helps" - short, distinct points
  howHusnHelps: string[];
  // Example insight / briefing card
  briefing: {
    context: string;
    items: BriefItem[];
    footer: string;
  };
  useCases: UseCase[];
  idealFor: string[];
  faq: FaqItem[];
  ctaHeadline: string;
  ctaText: string;
  // Internal links to related solution pages
  related: string[];
  // Optional, only for type "template": what the template contains.
  templateContents?: string[];
  // Optional, only for type "comparison": the side by side.
  comparison?: {
    competitor: string;
    rows: ComparisonRow[];
    summary: string;
  };
};

export type CategoryMeta = {
  slug: Category;
  label: string;
  blurb: string;
  // Category level promise, shown on solution pages and the index.
  cta: string;
};

export const categories: Record<Category, CategoryMeta> = {
  "project-risk": {
    slug: "project-risk",
    label: "Project risk",
    blurb:
      "Dashboards, registers, and trackers that surface risk as it forms, drawn from the work itself.",
    cta: "Automatically identify risks from meetings, tickets, and updates.",
  },
  "executive-reporting": {
    slug: "executive-reporting",
    label: "Executive reporting",
    blurb:
      "Briefings, status reports, and steering packs assembled from the work, decision led and sourced.",
    cta: "Generate executive briefings automatically.",
  },
  "meeting-preparation": {
    slug: "meeting-preparation",
    label: "Meeting preparation",
    blurb:
      "Prep briefs, agendas, and checklists so the room starts on decisions instead of recaps.",
    cta: "Know what changed before your meeting starts.",
  },
  "dependency-management": {
    slug: "dependency-management",
    label: "Dependency management",
    blurb:
      "Trackers, registers, and maps that keep cross team dependencies true and warn you when one moves.",
    cta: "Automatically surface hidden dependencies.",
  },
  "project-health": {
    slug: "project-health",
    label: "Project health",
    blurb:
      "Health scores, indicators, and dashboards grounded in real signals rather than self reported colors.",
    cta: "Detect issues before they become incidents.",
  },
};

// Display order for the index and any grouped listing.
export const categoryOrder: Category[] = [
  "project-risk",
  "executive-reporting",
  "meeting-preparation",
  "dependency-management",
  "project-health",
];

export const typeLabels: Record<PageType, string> = {
  solution: "Solution",
  tool: "Tool",
  template: "Template",
  comparison: "Comparison",
};

// Lead magnet shown alongside the demo CTA. Points at the flagship template
// page, which is where the asset is offered.
export const leadMagnet = {
  label: "Get the free Executive Project Briefing Template",
  href: "/solutions/executive-project-briefing-template/",
  // The template page itself offers the asset via this address rather than
  // linking back to itself.
  contactHref:
    "mailto:hello@husn.io?subject=Executive%20Project%20Briefing%20Template",
};
