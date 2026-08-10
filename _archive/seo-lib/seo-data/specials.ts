import type { SeoPage } from "../seo-types";

// Hand written exemplars for the three non-standard page formats: a tool page,
// the flagship template (lead magnet) page, and a comparison page.
export const specialPages: SeoPage[] = [
  {
    slug: "slack-project-updates",
    type: "tool",
    category: "meeting-preparation",
    title: "Slack project updates",
    metaTitle: "Slack Project Updates, Read Automatically | Husn",
    metaDescription:
      "Turn the project signal buried in Slack into a clear update. Husn reads your channels alongside Jira and docs and tells you what actually changed, without anyone writing a status.",
    heroEyebrow: "For teams that live in Slack",
    heroHeadline: "The project update hiding in your Slack.",
    heroSubheadline:
      "Most of what changed on a project gets said in Slack and then scrolls away. Husn reads those channels with the rest of your tools and turns the signal into an update you can actually use.",
    primaryPain:
      "Slack is where decisions get made and problems get raised, and also where they disappear. The thread that explained why a date moved is three days up the channel by the time anyone needs it, and asking people to repost it as a status update never works.",
    painBullets: [
      "The reason behind a change lives in Slack, while the change itself lives in Jira, so neither tells the whole story alone.",
      "Important context scrolls past in busy channels and is effectively gone within hours.",
      "Asking people to summarize their own Slack activity into an update is a tax they skip when they are busy.",
    ],
    whyHardHeading: "Why this gets hard at scale",
    whyHard: [
      "The more channels a program spans, the less any one person can follow, and the more the real story is split across threads nobody reads end to end.",
      "Slack has no notion of a project, so the signal about one initiative is scattered across general chatter with no structure to it.",
      "Reading every relevant channel by hand to compile an update does not scale past a couple of teams.",
    ],
    howHusnHelps: [
      "Husn reads the channels that matter and connects what is said there to the work in Jira and your docs, so a Slack thread becomes part of one picture.",
      "It surfaces the decisions, owner changes, and risks raised in Slack that would otherwise scroll away, before they are lost.",
      "You get an update built from what people actually said and did, with each point traced back to the message it came from.",
    ],
    briefing: {
      context: "From your channels, this week",
      items: [
        {
          text: "A blocker was raised in the launch channel on Tuesday and has had no owner since.",
          tag: "Risk",
          tone: "risk",
        },
        {
          text: "A scope decision was agreed in a thread but never made it into the ticket.",
          tag: "Changed",
          tone: "changed",
        },
        {
          text: "Two people disagreed about a date in Slack and the disagreement was never resolved.",
          tag: "Watch",
          tone: "watch",
        },
      ],
      footer: "3 channels read - 2 items at risk of being lost - 0 status asks",
    },
    useCases: [
      {
        title: "No more status pings",
        body: "Stop asking people to repost what they already said in Slack, and read it from the channels instead.",
      },
      {
        title: "Decisions that stick",
        body: "Catch the decision made in a thread that never reached the ticket, before the two diverge.",
      },
      {
        title: "Catching raised risks",
        body: "Surface the concern someone flagged in passing, so it gets an owner instead of scrolling away.",
      },
    ],
    idealFor: [
      "Program and project managers",
      "Engineering and product leads",
      "Chiefs of staff",
      "Remote and async teams",
    ],
    faq: [
      {
        q: "Does Husn read every Slack message?",
        a: "It reads the channels you connect, and focuses on the signal that relates to your projects. It is built to surface what matters, not to archive every message.",
      },
      {
        q: "Does it post anything to Slack?",
        a: "No. Husn reads Slack and never posts, replies, or reacts. The update it produces lives outside your channels.",
      },
      {
        q: "How does it tie Slack to the actual work?",
        a: "Husn reconciles what is said in Slack with the related items in Jira and your docs, so a thread about a date and the ticket holding that date are connected.",
      },
      {
        q: "Is our Slack data used to train models?",
        a: "No. Nothing you connect is used to train models. Husn reads your data to reason about your work and nothing else.",
      },
    ],
    ctaHeadline: "Read the update Slack already wrote.",
    ctaText:
      "Connect Slack alongside your other tools and Husn will turn the project signal in your channels into a clear update in about fifteen minutes.",
    related: [
      "meeting-preparation-ai",
      "ai-project-status-report",
      "executive-project-briefing",
    ],
  },

  {
    slug: "executive-project-briefing-template",
    type: "template",
    category: "executive-reporting",
    title: "Executive project briefing template",
    metaTitle: "Free Executive Project Briefing Template | Husn",
    metaDescription:
      "A free executive project briefing template, plus a way to fill it automatically. Get the structure leaders actually read, and let Husn keep it current from the work.",
    heroEyebrow: "Free template for program leaders",
    heroHeadline: "The executive briefing template, and a way to fill it.",
    heroSubheadline:
      "A good briefing template asks the right questions in the right order. This one does, and Husn can answer it from the work so you are not filling it in from memory the night before.",
    primaryPain:
      "Most teams either have no briefing template, so every update looks different, or they have one that nobody fills in honestly because doing so by hand takes an hour they do not have. Either way, leaders get an inconsistent picture they cannot fully trust.",
    painBullets: [
      "Without a shared structure, every briefing reads differently and leaders cannot compare one week to the next.",
      "With a structure but no help filling it, the hard sections get rushed and the honest detail goes missing.",
      "A template alone does not solve the real problem, which is that the work keeps moving after the briefing is written.",
    ],
    whyHardHeading: "Why a template alone is not enough",
    whyHard: [
      "A template standardizes the questions but not the answers, and the answers are where accuracy is won or lost.",
      "Filled by hand, even a good template is only as current as the moment someone stopped typing, which is usually the night before.",
      "Across many programs, keeping every briefing both consistent and true is more work than any one person can sustain.",
    ],
    howHusnHelps: [
      "Use the template as is. It gives you a clean, decision led structure that leaders can read in two minutes.",
      "Or connect your tools and Husn fills the template from the work, leading with what changed and what needs a decision.",
      "Either way every section can be traced to its source, so the briefing is something a leader can verify rather than just trust.",
    ],
    briefing: {
      context: "The template, filled by Husn",
      items: [
        {
          text: "Headline: on track on three of four objectives, one at risk pending a resourcing call.",
          tag: "Summary",
          tone: "watch",
        },
        {
          text: "Decision needed: approve the scope cut on objective two or accept a two week slip.",
          tag: "Decision",
          tone: "risk",
        },
        {
          text: "Change since last week: a key dependency moved, shifting the integration date.",
          tag: "Changed",
          tone: "changed",
        },
      ],
      footer: "7 sections - filled from the work - every line sourced",
    },
    templateContents: [
      "Headline summary, the one paragraph a leader reads first",
      "What changed since the last briefing, with the few items that moved",
      "Decisions needed, framed so the room can actually decide",
      "Risks and issues, with owner and what is being done",
      "Key dependencies, and which ones are at risk",
      "Milestones and dates, with anything that slipped called out",
    ],
    useCases: [
      {
        title: "Start from a clean structure",
        body: "Adopt a briefing format leaders can read fast, instead of inventing one per program.",
      },
      {
        title: "Fill it without the night before",
        body: "Let Husn populate the template from the work, so the briefing is ready and accurate before you start.",
      },
      {
        title: "Keep every program consistent",
        body: "Brief on the same sections across programs, so leadership can compare and trends become visible.",
      },
    ],
    idealFor: [
      "Program and PMO leaders",
      "Chiefs of staff",
      "Founders and executive sponsors",
      "Heads of engineering and product",
    ],
    faq: [
      {
        q: "Is the template actually free?",
        a: "Yes. You can take the structure and use it with no commitment. The optional part is connecting Husn so the template fills itself from your tools.",
      },
      {
        q: "What format is it in?",
        a: "It is a simple, sectioned structure you can drop into a doc or deck. The value is the order and framing, which keep a briefing short and decision led.",
      },
      {
        q: "How does Husn fill it in?",
        a: "Husn reads Jira, Slack, and your docs, then writes each section from what actually changed, with every line traced back to its source. It never writes back to your tools.",
      },
      {
        q: "Can I edit what Husn produces?",
        a: "Yes. Husn drafts the briefing into the template. You review, adjust, and send. It is your briefing, written faster and grounded in evidence.",
      },
    ],
    ctaHeadline: "Get the template, then let it fill itself.",
    ctaText:
      "Take the executive project briefing template, and connect Husn to keep it current from the work, in about fifteen minutes.",
    related: [
      "executive-project-briefing",
      "executive-status-report",
      "steering-committee-update-template",
    ],
  },

  {
    slug: "husn-vs-pmo-dashboard",
    type: "comparison",
    category: "executive-reporting",
    title: "Husn vs a PMO dashboard",
    metaTitle: "Husn vs a Traditional PMO Dashboard | Husn",
    metaDescription:
      "How Husn differs from a traditional PMO dashboard. A dashboard shows the status people submit. Husn reads the work itself and tells you what changed, why, and who is affected.",
    heroEyebrow: "An honest comparison",
    heroHeadline: "Husn vs a traditional PMO dashboard.",
    heroSubheadline:
      "A PMO dashboard is only as good as the status people remember to submit. Husn reads the work directly, so the picture is current without anyone filling in a form. Here is how the two differ.",
    primaryPain:
      "A traditional PMO dashboard promises a single view of every project, but it is fed by manual status submissions. The dashboard is only ever as fresh, as honest, and as complete as the last round of updates, and the work has usually moved on by the time anyone looks.",
    painBullets: [
      "Dashboards depend on people submitting status, so they reflect the reporting cycle rather than the current state.",
      "Self reported colors smooth over problems, so the dashboard often looks healthier than the work really is.",
      "Cross project issues, the shared resource or competing dependency, belong to no project and so appear on no dashboard.",
    ],
    whyHardHeading: "Why dashboards drift from reality",
    whyHard: [
      "Manual data entry competes with the work and loses, so a dashboard is stale within days of every refresh.",
      "A dashboard shows a status but not a reason, so you still have to chase the thread to learn what is actually going on.",
      "Aggregating self reported colors compounds their optimism, which is why the portfolio view is so often the least accurate one.",
    ],
    howHusnHelps: [
      "Husn reads Jira, Slack, and docs directly, so the picture is built from the work and stays current without status requests.",
      "It tells you what changed, why it matters, and who is affected, not just a color, and traces every point to its source.",
      "It surfaces the cross project risks a dashboard cannot see, because Husn reasons across the work rather than aggregating submissions.",
    ],
    briefing: {
      context: "What a dashboard would have missed",
      items: [
        {
          text: "A project still showing green has not progressed in nine days.",
          tag: "Risk",
          tone: "risk",
        },
        {
          text: "Two programs quietly took a dependency on the same team this quarter.",
          tag: "Changed",
          tone: "changed",
        },
        {
          text: "A milestone moved in Jira while the dashboard still shows the old date.",
          tag: "Watch",
          tone: "watch",
        },
      ],
      footer: "Read from the work - no submissions - 2 risks a dashboard hides",
    },
    comparison: {
      competitor: "A traditional PMO dashboard",
      rows: [
        {
          dimension: "Where the data comes from",
          husn: "Reads the work directly in Jira, Slack, and docs.",
          them: "Manual status that people submit on a cycle.",
        },
        {
          dimension: "How current it is",
          husn: "Continuously, reflecting recent activity.",
          them: "As fresh as the last reporting round.",
        },
        {
          dimension: "What it shows",
          husn: "What changed, why it matters, who is affected.",
          them: "A status color, usually with no reason attached.",
        },
        {
          dimension: "Cross project risk",
          husn: "Surfaced, because Husn reasons across the work.",
          them: "Missed, because it belongs to no single project.",
        },
        {
          dimension: "Setup and upkeep",
          husn: "Connect and read. Nothing to maintain by hand.",
          them: "Build it, then chase everyone to keep it current.",
        },
        {
          dimension: "Effect on your tools",
          husn: "Read only. It never writes back to anything.",
          them: "Varies, and often adds another surface to update.",
        },
      ],
      summary:
        "A PMO dashboard is a place to put status. Husn is a way to know the status without anyone putting it anywhere. If your dashboard is current and trusted, keep it. If it is always a cycle behind, that is the gap Husn closes.",
    },
    useCases: [
      {
        title: "Replace the status scramble",
        body: "Stop chasing submissions and read the current picture straight from the work.",
      },
      {
        title: "See what the dashboard hides",
        body: "Surface the optimistic green and the cross project dependency that a submitted status will never show.",
      },
      {
        title: "Keep the dashboard, add the truth",
        body: "Run Husn alongside an existing dashboard and let it flag where the submitted status and the work disagree.",
      },
    ],
    idealFor: [
      "PMO leads and directors",
      "Portfolio and program managers",
      "Chiefs of staff",
      "Executives owning multiple programs",
    ],
    faq: [
      {
        q: "Does Husn replace our PMO dashboard?",
        a: "It can, or it can run alongside one. Many teams keep an existing dashboard and use Husn to surface where the submitted status diverges from what the work shows.",
      },
      {
        q: "Do people still submit status?",
        a: "They do not have to for Husn to be current, because it reads the work directly. Where teams do submit status, Husn shows where it disagrees with reality.",
      },
      {
        q: "Is this just a dashboard with AI on top?",
        a: "No. A dashboard displays what is entered. Husn reasons across the work to tell you what changed, why, and who is affected, and traces each point to its source.",
      },
      {
        q: "Will it change anything in our tools?",
        a: "No. Husn is read only. It never posts, edits, or moves anything in Jira, Slack, or your documents.",
      },
    ],
    ctaHeadline: "See what your dashboard is missing.",
    ctaText:
      "Connect your tools and Husn will show you, on your own programs, what a status dashboard leaves out, in about fifteen minutes.",
    related: [
      "pmo-dashboard",
      "pmo-dashboard-for-executives",
      "portfolio-health-dashboard",
    ],
  },
];
