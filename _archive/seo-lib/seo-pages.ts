// Programmatic SEO content for /solutions/[slug].
//
// One structured record per landing page. Copy is hand written per page so no
// paragraph repeats across the set. Voice matches the Husn homepage: calm,
// specific, operator first. Husn is a read only intelligence layer that sits
// above Jira, Slack, and docs, reconciles what they each say, and briefs the
// right people on what changed, why it matters, who is affected, and what to do
// next. It never writes back to your tools.

import type { SeoPage, Category } from "./seo-types";
import { specialPages } from "./seo-data/specials";
import riskJson from "./seo-data/risk.json";
import execJson from "./seo-data/exec.json";
import meetingsJson from "./seo-data/meetings.json";
import depsJson from "./seo-data/deps.json";
import healthJson from "./seo-data/health.json";
// Wave 2 long-tail batches and the comparison set.
import risk2Json from "./seo-data/risk2.json";
import exec2Json from "./seo-data/exec2.json";
import meetings2Json from "./seo-data/meetings2.json";
import deps2Json from "./seo-data/deps2.json";
import health2Json from "./seo-data/health2.json";
import comparisonsJson from "./seo-data/comparisons.json";

// Re-export the public type and taxonomy surface so consumers can import
// everything SEO related from one module.
export type {
  BriefTone,
  BriefItem,
  FaqItem,
  UseCase,
  ComparisonRow,
  SeoPage,
  Category,
  PageType,
  CategoryMeta,
} from "./seo-types";
export {
  categories,
  categoryOrder,
  typeLabels,
  leadMagnet,
} from "./seo-types";

// The original, hand written launch set. Additional batches live as JSON under
// seo-data/ and are concatenated below.
const corePages: SeoPage[] = [
  {
    slug: "project-risk-dashboard",
    type: "solution",
    category: "project-risk",
    title: "Project risk dashboard",
    metaTitle: "Project Risk Dashboard | Husn",
    metaDescription:
      "See project risk as it forms, not after the status meeting. Husn reads Jira, Slack, and docs and surfaces the risks that matter, with who is affected and why.",
    heroEyebrow: "For TPMs and delivery leads",
    heroHeadline: "A risk dashboard that fills itself in.",
    heroSubheadline:
      "Most risk registers are only as current as the last person who remembered to update them. Husn reads the work itself and keeps the picture of project risk current between meetings.",
    primaryPain:
      "Risk is usually logged after it has already cost you something. By the time a slipped dependency or a quiet scope change reaches the register, two teams have already planned around the old assumption.",
    painBullets: [
      "Risks get entered by hand, so the register reflects what someone remembered, not what is actually happening.",
      "The signals that predict a slip live in Jira comments and Slack threads that no single person reads end to end.",
      "Status meetings spend their first twenty minutes reconstructing what changed before anyone can decide what to do.",
    ],
    whyHardHeading: "Why this gets hard at scale",
    whyHard: [
      "One project is readable by one person. Ten parallel workstreams are not, and the risks that hurt most are the ones that cross between them.",
      "Every tool holds a fragment. Jira knows the date moved, Slack knows the reason, the doc knows the original commitment, and nobody holds all three.",
      "Manual registers decay fastest exactly when a program is busiest, which is when accurate risk visibility matters most.",
    ],
    howHusnHelps: [
      "Husn watches Jira, Slack, and your docs and flags the changes that raise project risk, before they surface in a meeting.",
      "Each risk arrives with its source, the teams affected, and what changed, so you triage instead of investigate.",
      "Risk stays current on its own. You open the dashboard and it already reflects the last hour, not the last standup.",
    ],
    briefing: {
      context: "Risk view, updated this morning",
      items: [
        {
          text: "A launch dependency slipped four days. Two downstream teams still plan against the old date.",
          tag: "Risk",
          tone: "risk",
        },
        {
          text: "Scope on the billing migration grew after sign off, with no new estimate attached.",
          tag: "Changed",
          tone: "changed",
        },
        {
          text: "A blocker has sat unassigned for six days in a thread leadership is not on.",
          tag: "Watch",
          tone: "watch",
        },
      ],
      footer: "3 risks - 5 people affected - 1 needs a decision",
    },
    useCases: [
      {
        title: "Pre meeting triage",
        body: "Walk into your risk review already knowing the three items that moved and which ones need a call, not a recap.",
      },
      {
        title: "Cross team exposure",
        body: "See when one team's change quietly raises another team's risk, while there is still time to act on it.",
      },
      {
        title: "Aging blockers",
        body: "Catch the blocker that has gone quiet for a week before it becomes the reason a milestone slips.",
      },
    ],
    idealFor: [
      "Technical program managers",
      "Delivery and engineering leads",
      "PMO and program directors",
      "Chiefs of staff",
    ],
    faq: [
      {
        q: "Does Husn replace our risk register?",
        a: "It keeps one current. Husn reads the work and surfaces risks as they form, so the register reflects what is happening rather than what someone last remembered to type.",
      },
      {
        q: "Where do the risks come from?",
        a: "From the tools you already use. Husn reconciles Jira, Slack, and your docs and flags the changes that raise risk, each traced back to its source.",
      },
      {
        q: "Will it change anything in our tools?",
        a: "No. Husn reads and reasons. It never posts, edits, or moves anything in Jira, Slack, or your documents.",
      },
      {
        q: "How fast does the view update?",
        a: "Continuously. The dashboard reflects recent activity rather than the cadence of your standups or status meetings.",
      },
    ],
    ctaHeadline: "See your project risk before the meeting does.",
    ctaText:
      "Connect your stack and Husn will show you the risks already forming across your projects in about fifteen minutes.",
    related: [
      "portfolio-risk-management",
      "program-health-dashboard",
      "project-health-score",
    ],
  },

  {
    slug: "executive-project-briefing",
    type: "solution",
    category: "executive-reporting",
    title: "Executive project briefing",
    metaTitle: "Executive Project Briefing | Husn",
    metaDescription:
      "A short, accurate executive briefing on every project, assembled from Jira, Slack, and docs. Husn tells leaders what changed, why it matters, and what needs a decision.",
    heroEyebrow: "For leaders who have to decide",
    heroHeadline: "The briefing a leader actually has time to read.",
    heroSubheadline:
      "Executives do not need every update. They need the few that change a decision. Husn writes a short briefing from the work itself, so the room starts with the same picture.",
    primaryPain:
      "Executive briefings are usually written the night before by whoever has the bandwidth, which means they reflect one person's view of one slice and quietly leave out what is inconvenient to surface.",
    painBullets: [
      "Slides get polished while the underlying reality keeps moving, so the briefing is stale before the meeting starts.",
      "Bad news travels slowly upward, and the items most worth raising are the ones least likely to make the deck.",
      "Leaders spend the meeting asking for context that should have been in the first paragraph.",
    ],
    whyHardHeading: "Why this gets hard at scale",
    whyHard: [
      "A handful of projects can be briefed from memory. A portfolio cannot, and the cost of a thin briefing rises with the size of the decision behind it.",
      "Every layer between the work and the executive smooths the story a little more, so the version that reaches the top is the least accurate one.",
      "Preparing honest briefings by hand is slow, so they get shortened under time pressure exactly when the stakes are highest.",
    ],
    howHusnHelps: [
      "Husn reads across Jira, Slack, and docs and drafts a briefing that leads with what changed and what needs a decision.",
      "Every line traces back to its source, so a leader can ask one question and see the evidence behind the claim.",
      "The briefing is the same whether the news is good or bad, because it comes from the work and not from whoever wrote the slide.",
    ],
    briefing: {
      context: "Executive briefing, this week",
      items: [
        {
          text: "Two of five workstreams are behind plan. One can recover this sprint, one cannot without a scope decision.",
          tag: "Decision",
          tone: "risk",
        },
        {
          text: "Ownership of the data migration moved last Thursday with no handover note.",
          tag: "Changed",
          tone: "changed",
        },
        {
          text: "A customer commitment in the deck now depends on a date that quietly slipped.",
          tag: "Watch",
          tone: "watch",
        },
      ],
      footer: "5 workstreams - 1 decision needed - 2 conflicts",
    },
    useCases: [
      {
        title: "Monday leadership read",
        body: "Start the week with one page that tells you what moved over the weekend and what your day should account for.",
      },
      {
        title: "Board and investor prep",
        body: "Assemble an accurate picture of every initiative without three days of chasing owners for updates.",
      },
      {
        title: "New leader onboarding",
        body: "Hand an incoming executive a true account of where things stand, traced to the source, not the office narrative.",
      },
    ],
    idealFor: [
      "Founders and CEOs",
      "Heads of engineering and product",
      "Chiefs of staff",
      "VPs running multiple programs",
    ],
    faq: [
      {
        q: "How is this different from a status report?",
        a: "A status report tells you everything. A briefing tells you the few things that change a decision. Husn writes the second, and leads with what needs your attention.",
      },
      {
        q: "Can I see why Husn flagged something?",
        a: "Yes. Every line links back to the Jira issue, Slack message, or document it came from, so you can verify any claim in a click.",
      },
      {
        q: "Does it post anything to our tools?",
        a: "No. Husn reads and explains. It never writes back to Jira, Slack, or your documents.",
      },
      {
        q: "Who decides what counts as briefing worthy?",
        a: "Husn prioritizes change, risk, and conflict. You can tune what rises to the top, but the default surfaces what moved and what needs a decision.",
      },
    ],
    ctaHeadline: "Give every leader the same accurate picture.",
    ctaText:
      "See the briefing Husn would write for your projects, drawn from your own tools, in about fifteen minutes.",
    related: [
      "executive-status-report",
      "steering-committee-reporting",
      "ai-project-status-report",
    ],
  },

  {
    slug: "program-health-dashboard",
    type: "solution",
    category: "project-health",
    title: "Program health dashboard",
    metaTitle: "Program Health Dashboard | Husn",
    metaDescription:
      "A program health dashboard that reads the work instead of waiting on status updates. Husn surfaces drift, risk, and dependencies across every workstream in a program.",
    heroEyebrow: "For program and delivery leaders",
    heroHeadline: "Program health you do not have to assemble by hand.",
    heroSubheadline:
      "A program is healthy until several small things go wrong together. Husn watches every workstream and shows you where health is slipping before the slip becomes the story.",
    primaryPain:
      "Program health is usually a color someone picks on a slide. Green means nobody raised a hand, not that the work is on track, and the gap between the two is where programs quietly fail.",
    painBullets: [
      "Status colors are self reported, so a green from an optimistic team and a green from a cautious one mean different things.",
      "Health is judged per workstream, which hides the cross workstream problems that sink programs.",
      "By the time a status turns red, the recovery options that mattered are already gone.",
    ],
    whyHardHeading: "Why this gets hard at scale",
    whyHard: [
      "Health is a pattern across workstreams, and patterns are invisible from inside any single one.",
      "The number of pairs that can conflict grows far faster than the number of workstreams, so coordination risk compounds as a program grows.",
      "Hand built health views take so long to maintain that they lag the work, and a lagging health view is worse than none.",
    ],
    howHusnHelps: [
      "Husn reads each workstream from Jira, Slack, and docs and reconciles them into one current view of program health.",
      "It distinguishes a quiet slip from a self reported color, so green means on track rather than nobody objected.",
      "Cross workstream risk surfaces early, while there is still room to rebalance instead of recover.",
    ],
    briefing: {
      context: "Program health, this week",
      items: [
        {
          text: "Workstream C reports green but has not closed a planned item in nine days.",
          tag: "Risk",
          tone: "risk",
        },
        {
          text: "Two workstreams now depend on the same engineer for the same week.",
          tag: "Changed",
          tone: "changed",
        },
        {
          text: "A milestone date moved in Jira but the program plan still shows the old one.",
          tag: "Watch",
          tone: "watch",
        },
      ],
      footer: "6 workstreams - 2 off the reported color - 1 collision",
    },
    useCases: [
      {
        title: "Weekly program review",
        body: "Open the review with a health view that already reconciles every workstream, so the time goes to decisions.",
      },
      {
        title: "Catching optimistic greens",
        body: "Find the workstream that reports healthy but has gone quiet in the work, before the next milestone proves it wrong.",
      },
      {
        title: "Resource collisions",
        body: "See when two workstreams quietly start depending on the same person or team in the same window.",
      },
    ],
    idealFor: [
      "Program managers and TPMs",
      "PMO leaders",
      "Heads of delivery",
      "Engineering directors",
    ],
    faq: [
      {
        q: "Does Husn use our existing status colors?",
        a: "It can show them alongside what the work actually shows. Where a reported color and the underlying activity disagree, Husn surfaces the gap.",
      },
      {
        q: "Does it work across many workstreams?",
        a: "That is the point. Husn is most useful where the risk lives between workstreams, which is exactly where single team views are blind.",
      },
      {
        q: "Will it modify our Jira or boards?",
        a: "No. Husn only reads. It never changes a ticket, a board, or a document.",
      },
      {
        q: "How current is the dashboard?",
        a: "It reflects recent activity continuously, so health does not wait on the next status cycle to update.",
      },
    ],
    ctaHeadline: "See where program health is slipping first.",
    ctaText:
      "Connect your program and Husn will reconcile every workstream into one current health view in about fifteen minutes.",
    related: [
      "program-drift-detection",
      "portfolio-health-dashboard",
      "project-risk-dashboard",
    ],
  },

  {
    slug: "cross-team-dependency-tracker",
    type: "solution",
    category: "dependency-management",
    title: "Cross team dependency tracker",
    metaTitle: "Cross Team Dependency Tracker | Husn",
    metaDescription:
      "Track cross team dependencies as they change, not as they were written down. Husn reads Jira, Slack, and docs to surface dependencies and warn you when one is at risk.",
    heroEyebrow: "For TPMs coordinating many teams",
    heroHeadline: "Dependencies that tell you when they break.",
    heroSubheadline:
      "A dependency map is only useful while it is true. Husn keeps track of how teams actually depend on each other and warns you the moment one side moves.",
    primaryPain:
      "Cross team dependencies are agreed in a planning session and then left to drift. When one team reprioritizes, the team that was counting on them often finds out in the worst possible way, by being blocked.",
    painBullets: [
      "Dependencies are captured once, in a spreadsheet or a doc, and never updated as the work moves.",
      "The team that owns a dependency rarely knows who downstream is relying on it this quarter.",
      "A reprioritization on one board is invisible to every other team until something they need stops arriving.",
    ],
    whyHardHeading: "Why this gets hard at scale",
    whyHard: [
      "Dependencies form a web, and the dangerous ones are second order, the dependency of a dependency that nobody drew.",
      "Each team optimizes its own board, so a locally reasonable change can quietly break a commitment three teams away.",
      "Maintaining a dependency map by hand across many teams is a full time job that nobody actually has.",
    ],
    howHusnHelps: [
      "Husn infers dependencies from how teams reference and block each other across Jira, Slack, and docs, then keeps that map current.",
      "When one side of a dependency moves, Husn warns the side that was counting on it, before the block lands.",
      "You see the chain, not just the pair, so a slip three teams upstream reaches you as a warning rather than a surprise.",
    ],
    briefing: {
      context: "Dependency watch, this week",
      items: [
        {
          text: "Platform deprioritized the API change that Mobile's launch depends on. Mobile has not been told.",
          tag: "Risk",
          tone: "risk",
        },
        {
          text: "A shared service moved its cutover date, shifting three downstream teams with it.",
          tag: "Changed",
          tone: "changed",
        },
        {
          text: "Two teams listed the same week as their hard deadline for the same integration.",
          tag: "Watch",
          tone: "watch",
        },
      ],
      footer: "11 active dependencies - 2 at risk - 4 teams affected",
    },
    useCases: [
      {
        title: "Quarter planning",
        body: "Enter planning with a true picture of who depends on whom this quarter, not last quarter's intentions.",
      },
      {
        title: "Reprioritization fallout",
        body: "When a team changes course, see immediately who downstream just lost something they were counting on.",
      },
      {
        title: "Launch readiness",
        body: "Confirm every team a launch depends on is actually on track, instead of assuming silence means yes.",
      },
    ],
    idealFor: [
      "Technical program managers",
      "Cross functional program leads",
      "Platform and infrastructure teams",
      "Release managers",
    ],
    faq: [
      {
        q: "How does Husn know our dependencies?",
        a: "It infers them from how teams block, reference, and hand off to each other across Jira, Slack, and docs, then keeps the map current as the work moves.",
      },
      {
        q: "What happens when a dependency is at risk?",
        a: "Husn surfaces it to the team that was counting on it, with what changed and which source it came from, before the block actually lands.",
      },
      {
        q: "Does it write to our boards?",
        a: "No. Husn reads only. It never creates links, moves tickets, or edits anything.",
      },
      {
        q: "Can it see second order dependencies?",
        a: "Yes. Husn follows the chain, so a slip several teams upstream reaches you as a warning rather than a surprise.",
      },
    ],
    ctaHeadline: "Know the moment a dependency breaks.",
    ctaText:
      "Connect your teams and Husn will map your live dependencies and flag the ones at risk in about fifteen minutes.",
    related: [
      "jira-dependency-management",
      "project-dependency-register",
      "cross-functional-alignment-software",
    ],
  },

  {
    slug: "jira-dependency-management",
    type: "tool",
    category: "dependency-management",
    title: "Jira dependency management",
    metaTitle: "Jira Dependency Management | Husn",
    metaDescription:
      "Manage Jira dependencies without living in the issue graph. Husn reads your Jira links and the conversation around them and warns you when a dependency is about to break.",
    heroEyebrow: "For teams running on Jira",
    heroHeadline: "Jira dependencies that surface themselves.",
    heroSubheadline:
      "Jira can store a dependency link, but it will not tell you when the work behind it has quietly gone sideways. Husn reads the links and the activity and warns you in time.",
    primaryPain:
      "Jira dependency links are only as honest as the people who maintain them. Half the real dependencies are never linked, and the linked ones rarely get updated when priorities move, so the issue graph drifts away from reality.",
    painBullets: [
      "Many real dependencies live in comments and Slack, not in a formal blocks link.",
      "A blocking issue can be reprioritized without anything visible happening on the issue it blocks.",
      "Reading the dependency graph across many projects in Jira is slow, and slower still when it is wrong.",
    ],
    whyHardHeading: "Why this gets hard at scale",
    whyHard: [
      "Across dozens of projects, the blocks graph is too large to read by eye and too out of date to trust.",
      "Jira shows you the link but not the meaning, so you still have to chase the thread to learn whether a dependency is actually at risk.",
      "Keeping links accurate is manual work that competes with delivery, so it loses, and the graph decays.",
    ],
    howHusnHelps: [
      "Husn reads your Jira links and the conversation around each issue, then tells you which dependencies are actually moving.",
      "It catches the dependencies that were never linked, because it reads how issues and people reference each other, not just the formal blocks field.",
      "When a blocker slips or gets deprioritized, the issue it blocks gets flagged, without anyone updating a link by hand.",
    ],
    briefing: {
      context: "Jira dependency check, today",
      items: [
        {
          text: "PROJ-812 blocks the release but was moved to next sprint without notice.",
          tag: "Risk",
          tone: "risk",
        },
        {
          text: "A dependency discussed in Slack was never linked in Jira and is now overdue.",
          tag: "Changed",
          tone: "changed",
        },
        {
          text: "Two epics quietly took a hard dependency on the same unestimated ticket.",
          tag: "Watch",
          tone: "watch",
        },
      ],
      footer: "Across 9 projects - 3 dependencies at risk - 1 unlinked",
    },
    useCases: [
      {
        title: "Sprint planning",
        body: "Go into planning knowing which incoming dependencies are real and which blocking tickets are quietly slipping.",
      },
      {
        title: "Finding unlinked dependencies",
        body: "Surface the dependencies your team agreed in conversation but never recorded as a Jira link.",
      },
      {
        title: "Release gating",
        body: "Confirm that every blocker on a release is actually progressing, not just marked done on paper.",
      },
    ],
    idealFor: [
      "Jira administrators and TPMs",
      "Scrum masters and delivery leads",
      "Release and engineering managers",
      "Program managers across many projects",
    ],
    faq: [
      {
        q: "Do we need to link every dependency in Jira first?",
        a: "No. Husn reads your existing links and also infers dependencies from the surrounding activity, so it catches the ones that were never formally linked.",
      },
      {
        q: "Does Husn change our Jira issues?",
        a: "No. It reads your Jira and never edits an issue, a link, or a field.",
      },
      {
        q: "Which Jira setups does it work with?",
        a: "Husn reads across projects and boards. It is most useful where dependencies cross project and team boundaries.",
      },
      {
        q: "How is this different from a Jira plugin that draws the graph?",
        a: "A graph shows you the links. Husn tells you which of those dependencies is actually at risk right now, and surfaces the ones the graph is missing.",
      },
    ],
    ctaHeadline: "Stop reading the Jira graph by hand.",
    ctaText:
      "Connect Jira and Husn will show you which dependencies are at risk and which ones you never linked, in about fifteen minutes.",
    related: [
      "cross-team-dependency-tracker",
      "project-dependency-register",
      "change-impact-analysis",
    ],
  },

  {
    slug: "steering-committee-reporting",
    type: "solution",
    category: "executive-reporting",
    title: "Steering committee reporting",
    metaTitle: "Steering Committee Reporting | Husn",
    metaDescription:
      "Prepare steering committee reports from the work itself. Husn assembles an accurate cross program report so the committee spends its time on decisions, not status recaps.",
    heroEyebrow: "For PMO and program directors",
    heroHeadline: "Steering reports the committee can trust.",
    heroSubheadline:
      "A steering committee should spend its hour deciding, not reconstructing. Husn assembles an accurate report from across your programs so the room starts aligned.",
    primaryPain:
      "Steering reports are compiled by hand from many owners, each describing their own area in their own way. The result is long, uneven, and optimistic, and the committee burns its time aligning on facts instead of making calls.",
    painBullets: [
      "Each contributor writes to look good, so the report understates the problems most worth a steering decision.",
      "Formats differ by owner, so the committee cannot compare programs on the same terms.",
      "Compiling the pack takes days, which means it is already out of date when it is presented.",
    ],
    whyHardHeading: "Why this gets hard at scale",
    whyHard: [
      "More programs means more contributors, more formats, and more places for an inconvenient fact to get smoothed away.",
      "A committee can only govern what it can see, and a hand compiled pack shows the version each owner chose to present.",
      "The effort to produce the pack grows with the portfolio, so quality drops exactly as the stakes rise.",
    ],
    howHusnHelps: [
      "Husn reads every program from Jira, Slack, and docs and assembles a report on consistent terms, so programs are comparable.",
      "It leads with the decisions a steering committee exists to make, and the risks that need their authority to resolve.",
      "Every item traces to its source, so the committee can challenge a claim and see the evidence behind it in the room.",
    ],
    briefing: {
      context: "Steering pack, this cycle",
      items: [
        {
          text: "Program Atlas needs a scope decision the program team cannot make on its own.",
          tag: "Decision",
          tone: "risk",
        },
        {
          text: "Two programs are now competing for the same budget line after a quiet reforecast.",
          tag: "Changed",
          tone: "changed",
        },
        {
          text: "A program reported green for the third cycle while its key dates kept moving.",
          tag: "Watch",
          tone: "watch",
        },
      ],
      footer: "4 programs - 2 decisions for the committee - 1 escalation",
    },
    useCases: [
      {
        title: "Monthly steering pack",
        body: "Produce a consistent, accurate pack across every program without a week of chasing owners for slides.",
      },
      {
        title: "Decision led agendas",
        body: "Open the meeting with the calls only this committee can make, instead of a program by program recap.",
      },
      {
        title: "Holding programs to account",
        body: "Surface the program that has reported green while its dates quietly slipped, with the evidence to back it.",
      },
    ],
    idealFor: [
      "PMO directors",
      "Program and portfolio leads",
      "Chiefs of staff",
      "Change and operations leaders",
    ],
    faq: [
      {
        q: "Does Husn replace our reporting template?",
        a: "It fills one. Husn assembles the content on consistent terms from the work itself, so the template stops depending on each owner's interpretation.",
      },
      {
        q: "Can the committee verify a claim live?",
        a: "Yes. Every item links to its source in Jira, Slack, or docs, so a challenge can be resolved in the room rather than taken away as an action.",
      },
      {
        q: "Does it write anything back to our tools?",
        a: "No. Husn reads and reports. It never changes anything in your systems.",
      },
      {
        q: "How current is the pack?",
        a: "It reflects the work up to the moment it is generated, so the committee is not deciding on month old information.",
      },
    ],
    ctaHeadline: "Give your steering committee one honest pack.",
    ctaText:
      "See the steering report Husn would assemble from your programs, on consistent terms, in about fifteen minutes.",
    related: [
      "executive-project-briefing",
      "program-review-template",
      "executive-status-report",
    ],
  },

  {
    slug: "portfolio-risk-management",
    type: "solution",
    category: "project-risk",
    title: "Portfolio risk management",
    metaTitle: "Portfolio Risk Management | Husn",
    metaDescription:
      "Manage risk across a portfolio of programs from one current view. Husn reads every program and surfaces the risks, conflicts, and dependencies that cross between them.",
    heroEyebrow: "For portfolio and PMO leaders",
    heroHeadline: "Portfolio risk, seen from above the programs.",
    heroSubheadline:
      "The risks that hurt a portfolio rarely sit inside one program. Husn reads every program and surfaces the risk that lives between them, while you can still act on it.",
    primaryPain:
      "Portfolio risk is usually a roll up of program level registers, each maintained differently and updated late. The cross program risks, the shared resources and competing dependencies, fall into the gaps between registers and surface only when they collide.",
    painBullets: [
      "Program registers use different scales and cadences, so rolling them up produces a number nobody fully trusts.",
      "Shared dependencies and shared people are owned by no single program, so their risk is tracked by no one.",
      "By the time a cross program risk is visible at the portfolio level, the window to rebalance has usually closed.",
    ],
    whyHardHeading: "Why this gets hard at scale",
    whyHard: [
      "A portfolio's worst risks are emergent, they appear from the interaction of programs that each look fine alone.",
      "Roll ups lose information at every level, so the portfolio view is the least accurate one in the organization.",
      "Reconciling many registers by hand is slow, so the portfolio picture always lags the programs it summarizes.",
    ],
    howHusnHelps: [
      "Husn reads every program directly and reconciles risk on consistent terms, so the portfolio view is built from the work, not from roll ups.",
      "It surfaces cross program risk explicitly, the shared resource, the competing dependency, the conflicting date.",
      "Risk stays current across the whole portfolio at once, so you see a forming collision while you can still move resources.",
    ],
    briefing: {
      context: "Portfolio risk, this week",
      items: [
        {
          text: "Three programs now depend on the same platform team in the same quarter.",
          tag: "Risk",
          tone: "risk",
        },
        {
          text: "A reforecast in one program quietly pushed a shared milestone two others rely on.",
          tag: "Changed",
          tone: "changed",
        },
        {
          text: "Two programs each assumed they owned the same integration deadline.",
          tag: "Watch",
          tone: "watch",
        },
      ],
      footer: "5 programs - 3 cross program risks - 1 resource conflict",
    },
    useCases: [
      {
        title: "Portfolio review",
        body: "Run the review from one current view that already reconciles every program on the same terms.",
      },
      {
        title: "Resource contention",
        body: "See when multiple programs start depending on the same team or person before the contention becomes a delay.",
      },
      {
        title: "Reforecast ripple",
        body: "Trace how a date change in one program moves shared milestones in others, the moment it happens.",
      },
    ],
    idealFor: [
      "Portfolio managers",
      "PMO directors",
      "Heads of change and operations",
      "Executives owning multiple programs",
    ],
    faq: [
      {
        q: "Does Husn roll up our program registers?",
        a: "It does better than a roll up. Husn reads each program directly and reconciles risk on consistent terms, so the portfolio view does not inherit each register's gaps.",
      },
      {
        q: "Can it see cross program risk?",
        a: "Yes, and that is the main point. Shared resources, competing dependencies, and conflicting dates are surfaced explicitly rather than falling between registers.",
      },
      {
        q: "Will it change anything in our programs?",
        a: "No. Husn only reads. It never edits a register, a plan, or a ticket.",
      },
      {
        q: "How current is the portfolio view?",
        a: "It updates continuously from the underlying work, so the portfolio picture does not lag the programs it summarizes.",
      },
    ],
    ctaHeadline: "See portfolio risk before it collides.",
    ctaText:
      "Connect your programs and Husn will reconcile portfolio risk into one current view in about fifteen minutes.",
    related: [
      "portfolio-health-dashboard",
      "project-risk-dashboard",
      "program-drift-detection",
    ],
  },

  {
    slug: "project-health-score",
    type: "solution",
    category: "project-health",
    title: "Project health score",
    metaTitle: "Project Health Score | Husn",
    metaDescription:
      "A project health score grounded in the work, not a self reported color. Husn reads Jira, Slack, and docs and explains why a project's health is where it is.",
    heroEyebrow: "For delivery and program leaders",
    heroHeadline: "A health score you can actually defend.",
    heroSubheadline:
      "A red or green that nobody can explain helps no one. Husn grounds each project's health in the work itself and shows you exactly why the score is where it is.",
    primaryPain:
      "Most health scores are a feeling, picked by the person filling in the report. Two projects in identical trouble can show different colors depending on who is reporting, and nobody can trace a score back to anything concrete.",
    painBullets: [
      "Scores are self reported, so they measure the reporter's mood as much as the project's state.",
      "A color with no explanation cannot be challenged, defended, or acted on with any confidence.",
      "Health is reported on a cycle, so a project can turn red days before the report admits it.",
    ],
    whyHardHeading: "Why this gets hard at scale",
    whyHard: [
      "Across many projects, inconsistent scoring makes comparison meaningless, the thing a portfolio most needs from a score.",
      "A score is only useful if you trust the inputs, and hand picked colors give you nothing to trust.",
      "Recomputing honest health for every project by hand is impossible at scale, so it gets approximated and the approximation drifts.",
    ],
    howHusnHelps: [
      "Husn derives health from real signals across Jira, Slack, and docs, so the score reflects the work rather than the reporter.",
      "Every score comes with its reasons, the slipped dependency, the aging blocker, the quiet scope change behind it.",
      "Health updates as the work moves, so a project that starts to slip shows it before the next reporting cycle.",
    ],
    briefing: {
      context: "Health score detail, today",
      items: [
        {
          text: "Project Orion dropped to at risk, driven by two blockers aging past a week.",
          tag: "Risk",
          tone: "risk",
        },
        {
          text: "Throughput fell by a third over two sprints with no change in scope on paper.",
          tag: "Changed",
          tone: "changed",
        },
        {
          text: "A project still scored green has not updated its plan in twelve days.",
          tag: "Watch",
          tone: "watch",
        },
      ],
      footer: "Scored from live signals - 3 reasons attached - 0 guesswork",
    },
    useCases: [
      {
        title: "Honest status",
        body: "Replace a hand picked color with a score that reflects the work and explains itself.",
      },
      {
        title: "Comparing projects",
        body: "Rank projects on the same consistent basis, so attention goes where the work, not the reporting, says it should.",
      },
      {
        title: "Early warning",
        body: "Catch the project sliding from green to amber while there is still time to act, not after.",
      },
    ],
    idealFor: [
      "Delivery managers",
      "Program managers and TPMs",
      "PMO analysts",
      "Engineering leaders",
    ],
    faq: [
      {
        q: "How is the score calculated?",
        a: "From real signals in the work, such as slipping dependencies, aging blockers, throughput changes, and quiet scope shifts, each shown as a reason behind the score.",
      },
      {
        q: "Can teams still set their own status?",
        a: "They can, and Husn will show where a self reported status and the work based score disagree, which is often the most useful signal of all.",
      },
      {
        q: "Does Husn change our projects?",
        a: "No. It reads the work to compute the score and never writes anything back.",
      },
      {
        q: "How often does the score update?",
        a: "Continuously, as the underlying work changes, rather than on a reporting cadence.",
      },
    ],
    ctaHeadline: "Score project health on the work, not a guess.",
    ctaText:
      "Connect your projects and Husn will score each one from live signals, with the reasons attached, in about fifteen minutes.",
    related: [
      "project-risk-dashboard",
      "program-health-dashboard",
      "portfolio-health-dashboard",
    ],
  },

  {
    slug: "meeting-preparation-ai",
    type: "solution",
    category: "meeting-preparation",
    title: "Meeting preparation",
    metaTitle: "AI Meeting Preparation for Program Teams | Husn",
    metaDescription:
      "Walk into every sync already prepared. Husn reads Jira, Slack, and docs and writes a short prep brief on what changed since last time, so the meeting starts on decisions.",
    heroEyebrow: "For anyone who runs recurring syncs",
    heroHeadline: "Prepared for the meeting before it starts.",
    heroSubheadline:
      "The first half of most syncs is spent finding out what changed. Husn reads the work and writes that part for you, so the meeting begins where it should, on what to do.",
    primaryPain:
      "Preparing properly for a recurring meeting means reading every board and thread since last time, which nobody has time to do. So most people walk in cold and the room reconstructs the week out loud, every week.",
    painBullets: [
      "Real prep means reading across several tools, so in practice it does not happen and the meeting becomes the prep.",
      "Whatever is freshest in memory dominates, while the quiet but important change goes unmentioned.",
      "Half the attendees are hearing the updates for the first time, so the meeting moves at the speed of catching up.",
    ],
    whyHardHeading: "Why this gets hard at scale",
    whyHard: [
      "More attendees and more workstreams mean more to read before the meeting, so prep gets skipped exactly when it matters most.",
      "The change worth raising is often small and buried, the kind a quick skim of a board will always miss.",
      "Recurring meetings compound, an hour of unprepared sync every week is a standing tax on the whole team.",
    ],
    howHusnHelps: [
      "Husn reads Jira, Slack, and docs and writes a short brief on what changed since the last meeting, before it starts.",
      "It leads with what needs a decision, so the agenda writes itself around the few things that actually moved.",
      "Everyone arrives with the same brief, so the meeting opens aligned instead of spending its first half catching up.",
    ],
    briefing: {
      context: "Pre sync brief, 30 minutes before",
      items: [
        {
          text: "The item you closed last week reopened after a regression was found in test.",
          tag: "Decision",
          tone: "risk",
        },
        {
          text: "An owner changed on the integration since your last sync, with no handover.",
          tag: "Changed",
          tone: "changed",
        },
        {
          text: "A decision from last meeting was never recorded and is already being relitigated in Slack.",
          tag: "Watch",
          tone: "watch",
        },
      ],
      footer: "Since last sync - 3 things changed - 1 needs a decision",
    },
    useCases: [
      {
        title: "Weekly program sync",
        body: "Send everyone a brief on what changed thirty minutes before, so the hour goes to decisions, not recaps.",
      },
      {
        title: "One on ones",
        body: "Walk into a one on one already knowing what moved in your report's area since you last spoke.",
      },
      {
        title: "Stakeholder check ins",
        body: "Prepare for a stakeholder update in two minutes with an accurate read of what actually changed.",
      },
    ],
    idealFor: [
      "Program and project managers",
      "Engineering and product leaders",
      "Chiefs of staff",
      "Anyone running recurring meetings",
    ],
    faq: [
      {
        q: "When does the brief arrive?",
        a: "Ahead of the meeting, so there is time to read it. The default is shortly before each recurring sync, and the timing is yours to set.",
      },
      {
        q: "What does the brief cover?",
        a: "What changed since the last meeting, what needs a decision, and who is affected, each traced back to its source.",
      },
      {
        q: "Does it join or record the meeting?",
        a: "No. Husn prepares you from the work before the meeting. It does not sit in the call or transcribe anything.",
      },
      {
        q: "Does it change anything in our tools?",
        a: "No. Husn reads to prepare the brief and never writes back to Jira, Slack, or docs.",
      },
    ],
    ctaHeadline: "Start every meeting already prepared.",
    ctaText:
      "Connect your stack and Husn will write the prep brief for your next sync in about fifteen minutes.",
    related: [
      "executive-project-briefing",
      "ai-project-status-report",
      "program-review-template",
    ],
  },

  {
    slug: "program-drift-detection",
    type: "solution",
    category: "project-risk",
    title: "Program drift detection",
    metaTitle: "Program Drift Detection | Husn",
    metaDescription:
      "Catch program drift before it becomes a miss. Husn watches Jira, Slack, and docs for ownership, scope, and alignment slipping quietly, and tells you while it is still small.",
    heroEyebrow: "For program and TPM leaders",
    heroHeadline: "Catch the drift while it is still small.",
    heroSubheadline:
      "Programs rarely fail in one moment. They drift, a little scope here, an owner there, until the plan and the work no longer match. Husn watches for that drift and names it early.",
    primaryPain:
      "Drift is invisible by nature. No single change looks like a problem, so each one passes without comment, and the gap between what was agreed and what is happening only becomes obvious once it is too wide to close quietly.",
    painBullets: [
      "Each small change looks reasonable on its own, so none of them triggers a review until the cumulative gap is large.",
      "Plans and docs are written once and rarely reconciled against the live work, so they quietly stop being true.",
      "The drift that matters crosses tools, an owner change in Slack against a plan in a doc against a date in Jira.",
    ],
    whyHardHeading: "Why this gets hard at scale",
    whyHard: [
      "Drift is a trend, not an event, and trends are exactly what a busy team cannot see from inside the day to day.",
      "The more sources a program spans, the more places drift can hide, and the harder it is to notice the plan and the work diverging.",
      "Manually reconciling intent against reality across a program is slow, so it happens too late to matter.",
    ],
    howHusnHelps: [
      "Husn continuously compares what was agreed in plans and docs against what is actually happening in the work.",
      "It names drift while it is still small, the scope that grew, the owner who changed, the date that quietly moved.",
      "Because it reads across tools, it catches the drift that lives between them, where no single source would reveal it.",
    ],
    briefing: {
      context: "Drift watch, this week",
      items: [
        {
          text: "Scope on the onboarding rebuild has grown 40 percent since the plan was signed off.",
          tag: "Risk",
          tone: "risk",
        },
        {
          text: "Ownership of a key deliverable has shifted twice without the plan being updated.",
          tag: "Changed",
          tone: "changed",
        },
        {
          text: "The success metric in the brief no longer matches the one the team is building toward.",
          tag: "Watch",
          tone: "watch",
        },
      ],
      footer: "Plan vs reality - 3 points of drift - 1 needs realignment",
    },
    useCases: [
      {
        title: "Scope creep",
        body: "See scope growing against the signed plan while it is still a conversation, not a missed date.",
      },
      {
        title: "Silent ownership changes",
        body: "Catch deliverables changing hands without a handover, before the gap shows up as dropped work.",
      },
      {
        title: "Goal drift",
        body: "Notice when the work has quietly started aiming at a different target than the one the program agreed.",
      },
    ],
    idealFor: [
      "Program managers and TPMs",
      "Heads of delivery",
      "Product and engineering leaders",
      "Chiefs of staff",
    ],
    faq: [
      {
        q: "What exactly is drift?",
        a: "The slow divergence between what a program agreed and what it is actually doing, in scope, ownership, dates, and goals. Husn watches for it across your tools.",
      },
      {
        q: "How does Husn detect it early?",
        a: "By comparing plans and docs against live activity continuously, so a small and growing gap is named before it becomes a miss.",
      },
      {
        q: "Does it change our plans?",
        a: "No. Husn reads your plans and your work to compare them, and never edits either.",
      },
      {
        q: "What do I do when drift is flagged?",
        a: "Husn shows what diverged, where, and who is affected, so you can realign deliberately rather than discover the gap later.",
      },
    ],
    ctaHeadline: "Name the drift before it becomes a miss.",
    ctaText:
      "Connect your program and Husn will show you where the plan and the work have started to diverge, in about fifteen minutes.",
    related: [
      "program-health-dashboard",
      "change-impact-analysis",
      "cross-functional-alignment-software",
    ],
  },

  {
    slug: "cross-functional-alignment-software",
    type: "tool",
    category: "dependency-management",
    title: "Cross functional alignment software",
    metaTitle: "Cross Functional Alignment Software | Husn",
    metaDescription:
      "Keep cross functional teams aligned without another meeting. Husn reads Jira, Slack, and docs and surfaces where engineering, product, and the business have quietly diverged.",
    heroEyebrow: "For leaders of cross functional work",
    heroHeadline: "Alignment that does not depend on everyone remembering.",
    heroSubheadline:
      "Cross functional teams fall out of sync one small decision at a time. Husn reads what each function is actually doing and surfaces where they have quietly stopped agreeing.",
    primaryPain:
      "Alignment is treated as a meeting outcome, but it decays the moment people leave the room. Engineering, product, and the business each move on their own information, and the divergence is invisible until it surfaces as rework or a missed commitment.",
    painBullets: [
      "Each function works in its own tools and language, so the same decision is recorded three different ways or not at all.",
      "Alignment is re established in meetings and then erodes between them, so the org runs on the last sync rather than the current truth.",
      "Nobody can see the whole picture, so a divergence between functions is only noticed once it costs something.",
    ],
    whyHardHeading: "Why this gets hard at scale",
    whyHard: [
      "Alignment cost grows with the number of functions involved, and the dangerous gaps sit in the seams between them.",
      "Each function optimizes locally, so a sensible move in one place can quietly contradict a commitment in another.",
      "Re aligning by meeting does not scale, more functions and more decisions mean more meetings and faster decay.",
    ],
    howHusnHelps: [
      "Husn reads what engineering, product, and the business are each actually doing and reconciles it into one shared picture.",
      "It surfaces where functions have diverged, the date one team is planning to that another has already moved.",
      "Alignment stays visible between meetings, so a gap is caught as it forms rather than discovered as rework.",
    ],
    briefing: {
      context: "Alignment check, this week",
      items: [
        {
          text: "Product is committing a date to a customer that engineering has already flagged as at risk.",
          tag: "Risk",
          tone: "risk",
        },
        {
          text: "A scope decision made in a product doc never reached the engineering board.",
          tag: "Changed",
          tone: "changed",
        },
        {
          text: "Marketing is planning a launch against a date the delivery team quietly pushed.",
          tag: "Watch",
          tone: "watch",
        },
      ],
      footer: "3 functions - 2 points of divergence - 1 customer commitment at risk",
    },
    useCases: [
      {
        title: "Product and engineering sync",
        body: "See where the roadmap and the board have quietly diverged before the gap turns into rework.",
      },
      {
        title: "Go to market readiness",
        body: "Confirm that sales, marketing, and delivery are all planning against the same dates, not three different ones.",
      },
      {
        title: "Decision propagation",
        body: "Catch the decision that was made in one function but never reached the others who needed it.",
      },
    ],
    idealFor: [
      "Heads of product and engineering",
      "Program and cross functional leads",
      "Chiefs of staff",
      "Go to market and operations leaders",
    ],
    faq: [
      {
        q: "How does Husn measure alignment?",
        a: "By reading what each function is actually doing across its tools and reconciling it, then surfacing where their plans, dates, and decisions disagree.",
      },
      {
        q: "Does this replace our alignment meetings?",
        a: "It makes them shorter and sharper. Husn keeps alignment visible between meetings, so the meeting addresses real gaps instead of re establishing context.",
      },
      {
        q: "Does it write to any of our tools?",
        a: "No. Husn reads across functions and never edits a roadmap, a board, or a doc.",
      },
      {
        q: "Which functions can it cover?",
        a: "Any function whose work lives in the tools Husn reads. It is most useful where product, engineering, and the business have to move together.",
      },
    ],
    ctaHeadline: "Keep your functions aligned between meetings.",
    ctaText:
      "Connect your tools and Husn will show you where your functions have quietly diverged, in about fifteen minutes.",
    related: [
      "cross-team-dependency-tracker",
      "project-coordination-software",
      "program-drift-detection",
    ],
  },

  {
    slug: "pmo-dashboard",
    type: "solution",
    category: "executive-reporting",
    title: "PMO dashboard",
    metaTitle: "PMO Dashboard | Husn",
    metaDescription:
      "A PMO dashboard that reads the work instead of waiting on status submissions. Husn reconciles every project and program from Jira, Slack, and docs into one current view.",
    heroEyebrow: "For the PMO",
    heroHeadline: "A PMO view that does not wait on submissions.",
    heroSubheadline:
      "A PMO spends too much of its week collecting status and too little using it. Husn reads the work directly, so the dashboard is current without anyone filling in a form.",
    primaryPain:
      "The PMO is the team that chases everyone else for updates, then spends what time remains formatting them. The dashboard is only ever as fresh as the last submission cycle, and the work has moved on by the time it is presented.",
    painBullets: [
      "Status is collected by request, so the PMO's week is consumed by chasing rather than analysis.",
      "Submissions are inconsistent and optimistic, so the consolidated view inherits every contributor's blind spots.",
      "The dashboard reflects the last cycle, not the current state, so decisions are made on stale information.",
    ],
    whyHardHeading: "Why this gets hard at scale",
    whyHard: [
      "Every project added means another owner to chase and another format to reconcile, so the PMO's effort scales with the portfolio.",
      "Hand collected status is always a cycle behind, and the gap between report and reality widens as the portfolio grows.",
      "The PMO ends up as a reporting function when it should be a steering one, because collection eats the time analysis needs.",
    ],
    howHusnHelps: [
      "Husn reads every project and program directly from the tools and reconciles them into one current PMO view.",
      "No status requests, the dashboard reflects the work itself, so the PMO stops chasing and starts steering.",
      "Where a submitted status disagrees with the work, Husn shows the gap, so the PMO governs reality rather than reporting.",
    ],
    briefing: {
      context: "PMO view, this morning",
      items: [
        {
          text: "Two projects reported on track last cycle but have not progressed since.",
          tag: "Risk",
          tone: "risk",
        },
        {
          text: "A program's budget reforecast has not yet reached the portfolio view it affects.",
          tag: "Changed",
          tone: "changed",
        },
        {
          text: "Three teams missed the status cycle, but Husn already has their current state.",
          tag: "Watch",
          tone: "watch",
        },
      ],
      footer: "All projects - 0 status requests sent - 2 gaps to reality",
    },
    useCases: [
      {
        title: "Always current portfolio view",
        body: "Replace the weekly collection scramble with a dashboard that is already up to date from the work.",
      },
      {
        title: "Governance with evidence",
        body: "Hold projects to account using what the work shows, not just what each owner chose to submit.",
      },
      {
        title: "Freeing the PMO's time",
        body: "Spend the hours you used to spend chasing status on the analysis the organization actually needs.",
      },
    ],
    idealFor: [
      "PMO leads and directors",
      "Portfolio and program managers",
      "PMO analysts",
      "Heads of delivery",
    ],
    faq: [
      {
        q: "Do teams still submit status?",
        a: "They do not have to for the dashboard to be current. Husn reads the work directly. Where teams do submit status, Husn shows where it diverges from reality.",
      },
      {
        q: "Does it cover both projects and programs?",
        a: "Yes. Husn reconciles individual projects and whole programs into one view, on consistent terms.",
      },
      {
        q: "Will it change anything in our tools?",
        a: "No. The PMO view is built entirely from reading. Husn never writes back.",
      },
      {
        q: "How current is the dashboard?",
        a: "It updates continuously from the underlying work, so it does not wait on a submission cycle.",
      },
    ],
    ctaHeadline: "Stop collecting status. Start using it.",
    ctaText:
      "Connect your portfolio and Husn will build a current PMO view from the work, with no status requests, in about fifteen minutes.",
    related: [
      "portfolio-health-dashboard",
      "program-health-dashboard",
      "portfolio-risk-management",
    ],
  },

  {
    slug: "ai-project-status-report",
    type: "tool",
    category: "executive-reporting",
    title: "AI project status report",
    metaTitle: "AI Project Status Report | Husn",
    metaDescription:
      "Generate an accurate project status report from the work itself. Husn reads Jira, Slack, and docs and writes a status report that leads with what changed and what needs a decision.",
    heroEyebrow: "For project and program managers",
    heroHeadline: "Status reports written from the work, not from memory.",
    heroSubheadline:
      "Writing a status report by hand means recalling a week you were too busy to track. Husn reads the week for you and drafts a report that is accurate, short, and traceable.",
    primaryPain:
      "Status reports take an hour to write and reflect whatever the author happened to remember. The important detail that did not come to mind gets left out, and the reader cannot tell the difference between a complete report and a hasty one.",
    painBullets: [
      "Reports are written from memory at the end of a busy week, so they are partial by construction.",
      "Each author has their own format and optimism, so reports are hard to compare and easy to discount.",
      "Writing them is a tax on the people doing the work, and the tax is paid every single week.",
    ],
    whyHardHeading: "Why this gets hard at scale",
    whyHard: [
      "More projects mean more reports, written by more people, in more formats, with less time each.",
      "A report written from memory cannot scale honestly, the busier the project, the thinner the recollection behind it.",
      "Readers across many reports cannot verify any of them, so the whole reporting layer runs on trust rather than evidence.",
    ],
    howHusnHelps: [
      "Husn reads Jira, Slack, and docs and drafts a status report grounded in what actually happened, in seconds.",
      "It leads with what changed and what needs a decision, and every claim links back to its source.",
      "Reports come out in a consistent shape, so they are comparable across projects and quick to read.",
    ],
    briefing: {
      context: "Drafted status, this week",
      items: [
        {
          text: "On track overall. One blocker on payments is the single thing standing between here and the milestone.",
          tag: "Decision",
          tone: "risk",
        },
        {
          text: "Scope changed mid sprint after a customer request was accepted without a re estimate.",
          tag: "Changed",
          tone: "changed",
        },
        {
          text: "A dependency on the data team is on track but worth watching as their sprint fills.",
          tag: "Watch",
          tone: "watch",
        },
      ],
      footer: "Drafted in seconds - every line sourced - edit before you send",
    },
    useCases: [
      {
        title: "Weekly status",
        body: "Turn an hour of writing into a few minutes of editing a draft that is already accurate and sourced.",
      },
      {
        title: "Consistent reporting",
        body: "Give every project the same report shape, so stakeholders can compare them at a glance.",
      },
      {
        title: "Catching what you forgot",
        body: "Let Husn surface the change you would have left out, because it read the week and you lived it.",
      },
    ],
    idealFor: [
      "Project and program managers",
      "Scrum masters and delivery leads",
      "Engineering managers",
      "Chiefs of staff",
    ],
    faq: [
      {
        q: "Can I edit the report before sending?",
        a: "Yes. Husn drafts it from the work. You review, adjust, and send. It is your report, written faster and grounded in evidence.",
      },
      {
        q: "Where does the content come from?",
        a: "From Jira, Slack, and your docs. Every line traces back to the source it came from, so the report is verifiable.",
      },
      {
        q: "Does Husn send or post the report itself?",
        a: "No. Husn drafts and never writes to your tools. Sending stays with you.",
      },
      {
        q: "Will the reports look consistent across projects?",
        a: "Yes. Husn produces a consistent shape, which is what makes a stack of reports actually comparable.",
      },
    ],
    ctaHeadline: "Write the status report in minutes, not an hour.",
    ctaText:
      "Connect your project and Husn will draft an accurate, sourced status report in about fifteen minutes.",
    related: [
      "executive-status-report",
      "executive-project-briefing",
      "meeting-preparation-ai",
    ],
  },

  {
    slug: "project-escalation-tracker",
    type: "solution",
    category: "project-risk",
    title: "Project escalation tracker",
    metaTitle: "Project Escalation Tracker | Husn",
    metaDescription:
      "Catch the issues that should be escalated before they escalate themselves. Husn watches Jira, Slack, and docs for aging blockers and stalled decisions that need attention.",
    heroEyebrow: "For delivery and program leaders",
    heroHeadline: "Escalate before it escalates itself.",
    heroSubheadline:
      "The worst escalations are the ones that arrive as a surprise. Husn watches for the issues quietly heading that way and flags them while a quiet word still fixes them.",
    primaryPain:
      "Escalation depends on someone deciding to raise a hand, and people wait, hoping a problem resolves itself. By the time it is escalated, it has usually grown past the point where it could have been handled quietly.",
    painBullets: [
      "Escalation is left to judgment and ego, so problems are raised late or only after they have already done damage.",
      "The signals that something needs attention, an aging blocker, a stalled decision, sit unread in tools nobody watches end to end.",
      "Leaders learn about issues when they are already crises, with the easy options long gone.",
    ],
    whyHardHeading: "Why this gets hard at scale",
    whyHard: [
      "The more work in flight, the more issues quietly age, and the harder it is to notice which one is about to break.",
      "Escalation paths cross teams and tools, so the very issues most worth raising are the ones least likely to be seen by one person.",
      "Relying on people to escalate does not scale, the busiest teams are the ones with the least time to raise a hand.",
    ],
    howHusnHelps: [
      "Husn watches for the patterns that should trigger an escalation, blockers aging past a threshold, decisions stalled, owners gone silent.",
      "It surfaces them to the right person early, with the context, so a quiet word fixes what a crisis meeting would later.",
      "Nothing depends on someone choosing to raise a hand, because Husn raises the issue from the work itself.",
    ],
    briefing: {
      context: "Escalation watch, today",
      items: [
        {
          text: "A blocker on the release has sat unassigned for eight days and is now on the critical path.",
          tag: "Escalate",
          tone: "risk",
        },
        {
          text: "A decision needed from legal has been waiting two weeks with no owner.",
          tag: "Changed",
          tone: "changed",
        },
        {
          text: "A thread asking for a call on scope has gone quiet without resolution.",
          tag: "Watch",
          tone: "watch",
        },
      ],
      footer: "3 issues aging - 1 on the critical path - 0 raised so far",
    },
    useCases: [
      {
        title: "Aging blockers",
        body: "Catch the blocker that has quietly sat too long before it becomes the reason a milestone slips.",
      },
      {
        title: "Stalled decisions",
        body: "Surface the decision waiting on someone who does not know it is waiting on them.",
      },
      {
        title: "Silent owners",
        body: "Notice when an owner has gone quiet on a critical item, before the silence becomes a missed date.",
      },
    ],
    idealFor: [
      "Delivery and program managers",
      "Engineering leaders",
      "PMO and operations leads",
      "Chiefs of staff",
    ],
    faq: [
      {
        q: "Does Husn escalate automatically?",
        a: "It surfaces what should be escalated to the right person, with context. The decision to act stays human. Husn makes sure the issue is seen in time to make that decision.",
      },
      {
        q: "What triggers an escalation flag?",
        a: "Patterns in the work, such as a blocker aging past a threshold, a decision stalled without an owner, or a critical thread going quiet.",
      },
      {
        q: "Does it post to our tools?",
        a: "No. Husn reads and flags. It never writes back to Jira, Slack, or docs.",
      },
      {
        q: "Can we set our own thresholds?",
        a: "Yes. What counts as too long or too quiet can be tuned to how your teams actually work.",
      },
    ],
    ctaHeadline: "See the escalation coming, not the crisis.",
    ctaText:
      "Connect your work and Husn will surface the issues quietly heading for escalation in about fifteen minutes.",
    related: [
      "portfolio-risk-management",
      "project-risk-dashboard",
      "change-impact-analysis",
    ],
  },

  {
    slug: "change-impact-analysis",
    type: "solution",
    category: "dependency-management",
    title: "Change impact analysis",
    metaTitle: "Change Impact Analysis | Husn",
    metaDescription:
      "Understand the blast radius of a change before it lands. Husn reads Jira, Slack, and docs to trace what a date, scope, or ownership change affects, and who needs to know.",
    heroEyebrow: "For program and change leaders",
    heroHeadline: "Know what a change touches before it lands.",
    heroSubheadline:
      "Every date move and scope change has a blast radius, and most of it is invisible from where the change is made. Husn traces the impact and tells you who needs to know.",
    primaryPain:
      "When something changes, a date, an owner, a piece of scope, the person making the change rarely sees everything that depends on it. The impact propagates silently, and the teams it hits find out only when their own plans no longer add up.",
    painBullets: [
      "A change is made locally, with full knowledge of one team's plan and no view of who downstream relies on it.",
      "Impact crosses tools and teams, so tracing it by hand means interviewing half the org after the fact.",
      "The people affected are notified late or not at all, so they absorb the change as a surprise instead of a heads up.",
    ],
    whyHardHeading: "Why this gets hard at scale",
    whyHard: [
      "Impact follows the dependency web, and the web is too large and too dynamic to trace by hand at the moment a change is made.",
      "Second order effects, the impact on the thing that depended on the thing you changed, are where the real damage hides.",
      "Doing impact analysis manually for every change is impossible, so most changes ship with their blast radius unexamined.",
    ],
    howHusnHelps: [
      "Husn knows how the work connects, so when something changes it traces what that change actually touches.",
      "It follows the chain past the obvious, surfacing the second and third order effects a manual check would miss.",
      "It names the teams and commitments affected, so the right people get a heads up instead of a surprise.",
    ],
    briefing: {
      context: "Impact of a date change, today",
      items: [
        {
          text: "Moving the API cutover hits three downstream teams, one with a customer commitment on the old date.",
          tag: "Impact",
          tone: "risk",
        },
        {
          text: "A doc two teams rely on still describes the original date and scope.",
          tag: "Changed",
          tone: "changed",
        },
        {
          text: "A second order dependency, the team that depends on the team you moved, is not yet aware.",
          tag: "Watch",
          tone: "watch",
        },
      ],
      footer: "1 change - 3 teams affected - 1 customer commitment in scope",
    },
    useCases: [
      {
        title: "Before moving a date",
        body: "See everything a date change touches, including the teams two steps removed, before you commit to it.",
      },
      {
        title: "Scope changes",
        body: "Trace which commitments and dependencies a scope change affects, so nobody is blindsided.",
      },
      {
        title: "Reorg and ownership moves",
        body: "Understand what a change of ownership disrupts downstream, before the handover gaps appear.",
      },
    ],
    idealFor: [
      "Program and change managers",
      "Release and platform leads",
      "TPMs coordinating dependencies",
      "Engineering directors",
    ],
    faq: [
      {
        q: "How does Husn know what a change affects?",
        a: "It maps how the work connects across Jira, Slack, and docs, then traces a change along those connections, including second and third order effects.",
      },
      {
        q: "Can I analyze impact before making the change?",
        a: "Yes. Husn shows the blast radius of a proposed change so you can weigh it before committing, not discover it afterward.",
      },
      {
        q: "Does it make the change for me?",
        a: "No. Husn only reads and analyzes. Making and communicating the change stays with you.",
      },
      {
        q: "Does it catch indirect impact?",
        a: "Yes. The indirect effects, the dependency of the thing you changed, are exactly where the costly surprises hide, and Husn follows the chain to find them.",
      },
    ],
    ctaHeadline: "See the blast radius before you commit.",
    ctaText:
      "Connect your work and Husn will trace the impact of a change across your teams in about fifteen minutes.",
    related: [
      "project-dependency-register",
      "program-drift-detection",
      "jira-dependency-management",
    ],
  },

  {
    slug: "project-dependency-register",
    type: "solution",
    category: "dependency-management",
    title: "Project dependency register",
    metaTitle: "Project Dependency Register | Husn",
    metaDescription:
      "A dependency register that stays true on its own. Husn reads Jira, Slack, and docs to keep an accurate, current register of project dependencies, with risk flagged as it forms.",
    heroEyebrow: "For TPMs and delivery leads",
    heroHeadline: "A dependency register that maintains itself.",
    heroSubheadline:
      "A register is only worth keeping if it stays true. Husn builds your dependency register from the work and keeps it current, so it is accurate the day you need it most.",
    primaryPain:
      "A dependency register is built in a planning workshop and then abandoned. Within weeks it describes a world that no longer exists, so when a dependency finally bites, the register everyone was supposed to trust is the last place anyone looks.",
    painBullets: [
      "Registers are populated once, by hand, and degrade from the first day no one updates them.",
      "Dependencies agreed informally in Slack or a call never make it into the register at all.",
      "A stale register is worse than none, because it gives false confidence that the dependencies are under control.",
    ],
    whyHardHeading: "Why this gets hard at scale",
    whyHard: [
      "Dependencies change constantly as priorities shift, and a hand maintained register cannot keep pace with that change.",
      "The most important entries are cross team, owned by no one, so they are the least likely to be kept current.",
      "Across many projects, maintaining registers by hand is more work than the registers are worth, so they rot.",
    ],
    howHusnHelps: [
      "Husn builds the register from how teams actually depend on each other across Jira, Slack, and docs, and keeps it current.",
      "It captures the informal dependencies too, the ones agreed in a thread and never written down.",
      "Each entry carries its status and risk, so the register is not just a list but a live view of what is at risk.",
    ],
    briefing: {
      context: "Dependency register, this week",
      items: [
        {
          text: "An inbound dependency on the data team is now at risk after their sprint was re scoped.",
          tag: "Risk",
          tone: "risk",
        },
        {
          text: "A new dependency on a shared service appeared this week and was added automatically.",
          tag: "Changed",
          tone: "changed",
        },
        {
          text: "A dependency marked resolved is showing fresh activity worth checking.",
          tag: "Watch",
          tone: "watch",
        },
      ],
      footer: "14 entries - kept current automatically - 1 at risk",
    },
    useCases: [
      {
        title: "Audit ready register",
        body: "Have an accurate dependency register at any moment, without the workshop to rebuild it first.",
      },
      {
        title: "Onboarding a new TPM",
        body: "Hand a new program manager a true map of dependencies, not a stale spreadsheet from last quarter.",
      },
      {
        title: "Risk on every entry",
        body: "See not just what the dependencies are, but which ones are currently at risk and why.",
      },
    ],
    idealFor: [
      "Technical program managers",
      "Delivery and release managers",
      "PMO analysts",
      "Cross team program leads",
    ],
    faq: [
      {
        q: "Do we build the register ourselves first?",
        a: "No. Husn builds it from how teams actually depend on each other across your tools, then keeps it current as the work changes.",
      },
      {
        q: "Does it capture informal dependencies?",
        a: "Yes. Dependencies agreed in a thread or a call, and never formally recorded, are exactly the ones a manual register misses and Husn catches.",
      },
      {
        q: "Does Husn edit our existing register?",
        a: "Husn maintains its own current view by reading. It never writes to your tools or your existing documents.",
      },
      {
        q: "Is risk shown on each dependency?",
        a: "Yes. Each entry carries its current status and risk, so the register is a live view rather than a static list.",
      },
    ],
    ctaHeadline: "Keep a dependency register that is actually true.",
    ctaText:
      "Connect your work and Husn will build a current dependency register, with risk on every entry, in about fifteen minutes.",
    related: [
      "cross-team-dependency-tracker",
      "jira-dependency-management",
      "change-impact-analysis",
    ],
  },

  {
    slug: "executive-status-report",
    type: "solution",
    category: "executive-reporting",
    title: "Executive status report",
    metaTitle: "Executive Status Report | Husn",
    metaDescription:
      "An executive status report assembled from the work, not from a chain of optimistic summaries. Husn writes a short, accurate report that leads with what needs a decision.",
    heroEyebrow: "For leaders and their teams",
    heroHeadline: "An executive report that survives the climb up.",
    heroSubheadline:
      "By the time a status reaches the top, it has been summarized and softened at every level. Husn writes the executive report straight from the work, so the climb does not cost you the truth.",
    primaryPain:
      "Executive status is the product of a relay, each layer summarizing the layer below and rounding up a little. The report that lands on the leader's desk is the most processed and least accurate account of what is actually happening.",
    painBullets: [
      "Every handoff up the chain smooths the story, so the executive sees the most flattering version, not the truest.",
      "The report is long where it should be short, and silent on exactly the problems an executive most needs to hear.",
      "Compiling it ties up a chain of people for days, and the result is stale before it is read.",
    ],
    whyHardHeading: "Why this gets hard at scale",
    whyHard: [
      "The more layers between the work and the executive, the more the report is shaped by the telling rather than the truth.",
      "A leader cannot verify a relayed summary, so the whole reporting chain runs on trust that erodes the moment one report proves wrong.",
      "Manual executive reporting does not scale, more programs mean a longer relay and a higher chance the signal is lost.",
    ],
    howHusnHelps: [
      "Husn reads the work directly and writes the executive report without the relay, so nothing is softened on the way up.",
      "It is short by design, leading with what needs a decision and the risks that require executive authority.",
      "Every claim links to its source, so a leader can verify any line and trust the report because it is checkable.",
    ],
    briefing: {
      context: "Executive status, this week",
      items: [
        {
          text: "One initiative will miss its committed date without a scope or resourcing decision this week.",
          tag: "Decision",
          tone: "risk",
        },
        {
          text: "A budget reforecast in a key program has not yet reached the executive view.",
          tag: "Changed",
          tone: "changed",
        },
        {
          text: "A risk reported as closed last month is showing signs of returning.",
          tag: "Watch",
          tone: "watch",
        },
      ],
      footer: "Straight from the work - 1 decision this week - every line sourced",
    },
    useCases: [
      {
        title: "Weekly executive update",
        body: "Send leadership a short, accurate report that leads with decisions, without a multi day compilation effort.",
      },
      {
        title: "Bypassing the relay",
        body: "Give executives the work based account directly, so the truth does not erode on the way up the chain.",
      },
      {
        title: "Verifiable reporting",
        body: "Back every line with a source, so the report earns trust by being checkable rather than polished.",
      },
    ],
    idealFor: [
      "Founders and CEOs",
      "VPs and executive sponsors",
      "Chiefs of staff",
      "PMO and program directors",
    ],
    faq: [
      {
        q: "How is this different from a project status report?",
        a: "A project report is for the team. An executive report is shorter, decision led, and pitched at the level a leader acts on. Husn writes it directly from the work, without the relay.",
      },
      {
        q: "Can leaders verify the report?",
        a: "Yes. Every line traces to its source, so a leader can check any claim instead of trusting a relayed summary.",
      },
      {
        q: "Does Husn distribute the report?",
        a: "No. Husn drafts it from the work. Sending and presenting stay with you.",
      },
      {
        q: "Does it write back to our tools?",
        a: "No. Husn reads to write the report and never edits anything in your systems.",
      },
    ],
    ctaHeadline: "Give leaders the truth, not the relay.",
    ctaText:
      "Connect your programs and Husn will write an executive report straight from the work in about fifteen minutes.",
    related: [
      "executive-project-briefing",
      "ai-project-status-report",
      "steering-committee-reporting",
    ],
  },

  {
    slug: "program-review-template",
    type: "template",
    category: "executive-reporting",
    title: "Program review template",
    metaTitle: "Program Review Template | Husn",
    metaDescription:
      "A program review template that fills itself from the work. Husn assembles each section from Jira, Slack, and docs, so the review meeting starts on decisions, not data gathering.",
    heroEyebrow: "For program and PMO leaders",
    heroHeadline: "A review template that arrives already filled in.",
    heroSubheadline:
      "A good program review template asks the right questions. Husn answers them from the work itself, so the review starts with the discussion instead of the data gathering.",
    primaryPain:
      "A program review template is only as good as the effort poured into filling it, and that effort happens the night before, from memory, under pressure. The sections that need honesty, risks and dependencies, get the least of it.",
    painBullets: [
      "The template is populated by hand at the last minute, so it reflects haste rather than the real state of the program.",
      "The hardest sections to fill honestly, risks, blockers, dependencies, are the ones most likely to be thin.",
      "The review then spends its time filling gaps in the template out loud, instead of acting on what it shows.",
    ],
    whyHardHeading: "Why this gets hard at scale",
    whyHard: [
      "More programs and more frequent reviews mean the template is filled more often by more people with less time each.",
      "Consistency across reviews breaks down, so programs cannot be compared and trends cannot be seen.",
      "Filling templates honestly by hand competes with the work, so it is the first thing to be rushed when a program is busy.",
    ],
    howHusnHelps: [
      "Husn populates each section of the review from the work, the status, the risks, the dependencies, the changes since last time.",
      "Every section is consistent across programs and across reviews, so comparison and trends become possible.",
      "The template arrives filled and sourced, so the meeting opens on the discussion the review exists to have.",
    ],
    briefing: {
      context: "Program review, ready to run",
      items: [
        {
          text: "Status section: on track on two of four objectives, at risk on one, blocked on one.",
          tag: "Status",
          tone: "risk",
        },
        {
          text: "Since last review: scope grew on one objective and a key owner changed on another.",
          tag: "Changed",
          tone: "changed",
        },
        {
          text: "Dependencies section: one inbound dependency moved into the danger zone this cycle.",
          tag: "Watch",
          tone: "watch",
        },
      ],
      footer: "Every section filled - consistent across programs - sourced",
    },
    useCases: [
      {
        title: "Recurring program reviews",
        body: "Run each review from a template already filled with the current state, so the hour goes to decisions.",
      },
      {
        title: "Consistent across programs",
        body: "Compare programs on the same sections and terms, so portfolio level patterns become visible.",
      },
      {
        title: "Honest risk sections",
        body: "Get the risk and dependency sections grounded in the work, instead of whatever made it into the slide.",
      },
    ],
    idealFor: [
      "Program managers and TPMs",
      "PMO leads",
      "Heads of delivery",
      "Portfolio managers",
    ],
    faq: [
      {
        q: "Can we use our own template?",
        a: "Yes. Husn fills the sections you already use from the work, so your template stays familiar while the content becomes current and consistent.",
      },
      {
        q: "What gets filled in automatically?",
        a: "Status, changes since the last review, risks, blockers, and dependencies, each drawn from the work and traced to its source.",
      },
      {
        q: "Does it edit our documents?",
        a: "No. Husn assembles the review content by reading. It never writes back to your tools or docs.",
      },
      {
        q: "Does it work across many programs?",
        a: "Yes, and it keeps the sections consistent across them, which is what makes program reviews comparable.",
      },
    ],
    ctaHeadline: "Walk into the review with the template already done.",
    ctaText:
      "Connect your program and Husn will fill your review template from the work in about fifteen minutes.",
    related: [
      "steering-committee-reporting",
      "executive-status-report",
      "program-health-dashboard",
    ],
  },

  {
    slug: "portfolio-health-dashboard",
    type: "solution",
    category: "project-health",
    title: "Portfolio health dashboard",
    metaTitle: "Portfolio Health Dashboard | Husn",
    metaDescription:
      "A portfolio health dashboard built from the work, not from roll ups. Husn reconciles every program into one current view and surfaces the risks that cross between them.",
    heroEyebrow: "For portfolio and PMO leaders",
    heroHeadline: "Portfolio health that is built, not rolled up.",
    heroSubheadline:
      "Roll ups lose the truth at every level. Husn reads every program directly and builds one current health view, so the portfolio picture is the most accurate one, not the least.",
    primaryPain:
      "A portfolio health dashboard is usually a stack of program statuses, each self reported and each smoothing its own problems. The aggregate inherits every program's optimism, so the portfolio looks healthier than any honest look at the programs would suggest.",
    painBullets: [
      "Program statuses are self reported, so the portfolio aggregate is built on a foundation of optimistic colors.",
      "Cross program problems, shared resources and competing dependencies, belong to no program and so appear in no status.",
      "The dashboard is refreshed on a cycle, so the portfolio view lags the programs, which already lag the work.",
    ],
    whyHardHeading: "Why this gets hard at scale",
    whyHard: [
      "Aggregating self reported statuses compounds their errors, so the portfolio view is the least reliable layer in the organization.",
      "The risks that threaten a portfolio are emergent and cross program, invisible to any single program's status.",
      "Refreshing a hand built portfolio view is slow, so it is always a cycle or two behind the programs it represents.",
    ],
    howHusnHelps: [
      "Husn reads every program directly and builds portfolio health from the work, not from a stack of self reported colors.",
      "It surfaces cross program risk explicitly, so the problems that belong to no single program still show up.",
      "The view stays current across the whole portfolio, so health does not lag two cycles behind the work.",
    ],
    briefing: {
      context: "Portfolio health, this week",
      items: [
        {
          text: "Two programs report healthy but share a critical team that is now over committed.",
          tag: "Risk",
          tone: "risk",
        },
        {
          text: "A program slipped from on track to at risk based on the work, ahead of its own status.",
          tag: "Changed",
          tone: "changed",
        },
        {
          text: "A milestone shared by three programs moved, and only one has reflected it.",
          tag: "Watch",
          tone: "watch",
        },
      ],
      footer: "6 programs - built from the work - 2 cross program risks",
    },
    useCases: [
      {
        title: "Portfolio review",
        body: "Run the review from a health view built directly from every program, not assembled from their slides.",
      },
      {
        title: "Spotting optimistic programs",
        body: "Find the program reporting healthy while the work tells a different story, before the next milestone proves it.",
      },
      {
        title: "Cross program risk",
        body: "See the shared resource and competing dependency problems that no single program's status will ever show.",
      },
    ],
    idealFor: [
      "Portfolio managers",
      "PMO directors",
      "Heads of change and operations",
      "Executives owning multiple programs",
    ],
    faq: [
      {
        q: "Is this just a roll up of program statuses?",
        a: "No. Husn reads each program directly and builds health from the work, so the portfolio view does not inherit the optimism of self reported statuses.",
      },
      {
        q: "Does it show cross program risk?",
        a: "Yes. Shared resources, competing dependencies, and conflicting dates are surfaced explicitly, because those are the risks a portfolio most needs to see.",
      },
      {
        q: "Will it change anything in our programs?",
        a: "No. The view is built entirely from reading. Husn never writes back.",
      },
      {
        q: "How current is the dashboard?",
        a: "It updates continuously from the underlying work, so it does not lag the programs it represents.",
      },
    ],
    ctaHeadline: "Build portfolio health from the work itself.",
    ctaText:
      "Connect your programs and Husn will build one current portfolio health view in about fifteen minutes.",
    related: [
      "pmo-dashboard",
      "portfolio-risk-management",
      "program-health-dashboard",
    ],
  },

  {
    slug: "project-coordination-software",
    type: "tool",
    category: "dependency-management",
    title: "Project coordination software",
    metaTitle: "Project Coordination Software | Husn",
    metaDescription:
      "Coordinate work across teams without another tool to update. Husn reads Jira, Slack, and docs and surfaces the conflicts, dependencies, and changes that coordination is meant to catch.",
    heroEyebrow: "For teams coordinating across tools",
    heroHeadline: "Coordination that reads, instead of asking you to update.",
    heroSubheadline:
      "Most coordination tools work only if everyone keeps them current, which is the very thing busy teams cannot do. Husn coordinates by reading the tools you already use, so there is nothing new to maintain.",
    primaryPain:
      "Coordination software usually adds another surface to update, on top of Jira, Slack, and docs. The teams who most need coordination are the busiest, so the new tool falls out of date first, and the coordination it promised quietly fails.",
    painBullets: [
      "Every coordination layer that needs manual updates competes with the work, and loses, so it goes stale.",
      "Adding a tool to align teams adds yet another place where the truth can diverge from the others.",
      "The conflicts coordination should catch, two teams planning the same week, live across tools no single surface sees.",
    ],
    whyHardHeading: "Why this gets hard at scale",
    whyHard: [
      "More teams and more tools mean more surfaces to keep in sync, and manual coordination cannot keep all of them true.",
      "Coordination problems are cross cutting by nature, so they fall between the tools each team maintains for itself.",
      "Any approach that depends on everyone updating one more place breaks down precisely when coordination matters most.",
    ],
    howHusnHelps: [
      "Husn coordinates by reading Jira, Slack, and docs, so there is no new surface for anyone to keep current.",
      "It surfaces the conflicts and dependencies coordination is meant to catch, drawn from the tools teams already use.",
      "Because nothing depends on manual upkeep, coordination stays accurate even when teams are at their busiest.",
    ],
    briefing: {
      context: "Coordination view, this week",
      items: [
        {
          text: "Two teams have committed to the same hard deadline for work that shares one engineer.",
          tag: "Risk",
          tone: "risk",
        },
        {
          text: "A handoff between teams moved, and the receiving team is still planning to the old date.",
          tag: "Changed",
          tone: "changed",
        },
        {
          text: "A decision affecting three teams was made in one team's channel only.",
          tag: "Watch",
          tone: "watch",
        },
      ],
      footer: "Across your tools - nothing new to update - 1 conflict to resolve",
    },
    useCases: [
      {
        title: "Multi team delivery",
        body: "Coordinate several teams toward one outcome by reading their tools, without asking any of them to update a new one.",
      },
      {
        title: "Catching conflicts early",
        body: "Surface the scheduling and resource conflicts between teams while they are still easy to resolve.",
      },
      {
        title: "Keeping handoffs clean",
        body: "Notice when a handoff between teams has shifted, before the receiving team plans against the wrong date.",
      },
    ],
    idealFor: [
      "Program and project managers",
      "Cross functional and delivery leads",
      "Operations and PMO teams",
      "Engineering managers",
    ],
    faq: [
      {
        q: "Is this another tool our teams have to update?",
        a: "No. That is the point. Husn coordinates by reading the tools your teams already use, so there is no new surface to keep current.",
      },
      {
        q: "What kind of conflicts does it catch?",
        a: "Cross team conflicts such as shared resources committed twice, competing deadlines, shifted handoffs, and decisions that did not reach everyone affected.",
      },
      {
        q: "Does it change anything in our tools?",
        a: "No. Husn reads to coordinate and never writes back to Jira, Slack, or docs.",
      },
      {
        q: "Does it replace Jira or our project tools?",
        a: "No. Husn sits above them. Your teams keep working where they work, and Husn coordinates across what they produce.",
      },
    ],
    ctaHeadline: "Coordinate without one more tool to maintain.",
    ctaText:
      "Connect your stack and Husn will surface the conflicts and dependencies across your teams in about fifteen minutes.",
    related: [
      "cross-functional-alignment-software",
      "cross-team-dependency-tracker",
      "pmo-dashboard",
    ],
  },
];

// JSON batches are validated at build time by scripts/validate-seo (structure,
// uniqueness, banned words, em-dashes) so the loose cast here is safe.
const batchPages = [
  riskJson,
  execJson,
  meetingsJson,
  depsJson,
  healthJson,
  risk2Json,
  exec2Json,
  meetings2Json,
  deps2Json,
  health2Json,
  comparisonsJson,
].flat() as unknown as SeoPage[];

// The full page set: launch core, hand written specials, and JSON batches.
export const seoPages: SeoPage[] = [
  ...corePages,
  ...specialPages,
  ...batchPages,
];

// Fail the build loudly if any two pages (core, special, or batch) collide on
// a slug, rather than letting Next error obscurely on duplicate static params.
(() => {
  const seen = new Set<string>();
  for (const p of seoPages) {
    if (seen.has(p.slug)) {
      throw new Error(`Duplicate SEO slug detected: "${p.slug}"`);
    }
    seen.add(p.slug);
  }
})();

const bySlug: Record<string, SeoPage> = Object.fromEntries(
  seoPages.map((p) => [p.slug, p]),
);

export function getSeoPage(slug: string): SeoPage | undefined {
  return bySlug[slug];
}

export function getAllSeoSlugs(): string[] {
  return seoPages.map((p) => p.slug);
}

// Resolve a page's related links into 3 to 5 full records. Declared related
// slugs come first (invalid ones skipped), then we backfill from the same
// category so every page always has a healthy internal-link block.
export function getRelatedPages(slug: string, target = 4, max = 5): SeoPage[] {
  const page = bySlug[slug];
  if (!page) return [];

  const out: SeoPage[] = [];
  const seen = new Set<string>([slug]);
  const push = (p: SeoPage | undefined) => {
    if (p && !seen.has(p.slug) && out.length < max) {
      seen.add(p.slug);
      out.push(p);
    }
  };

  for (const s of page.related) push(bySlug[s]);

  if (out.length < target) {
    for (const p of seoPages) {
      if (out.length >= target) break;
      if (p.category === page.category) push(p);
    }
  }

  return out;
}

// All pages in a category, in declaration order. Used by the /solutions index.
export function getPagesByCategory(category: Category): SeoPage[] {
  return seoPages.filter((p) => p.category === category);
}
