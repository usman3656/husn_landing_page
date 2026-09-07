# Founders Arm — full site capture (content + design reference)

Captured 7 September 2026 from https://foundersarm.com (127 URLs in the sitemap). Every page was read; the core marketing pages were screenshotted in full at 1400×868 desktop width, and long-tail pages (SEO landers, blog posts) were screenshotted at the first fold. Screenshots live in `research/foundersarm/screenshots/` and are indexed at the bottom of this file.

The site is built on **Framer** (generator meta: `Framer 27dd866`). Two visual systems coexist: a newer light "editorial" theme on the core funnel (home, stories, pricing, about, book-a-call) and an older dark "pixel/terminal" theme on talent, careers, guides, blog, SEO and legacy landers. Both are documented in §2.

---

## 1. Company snapshot

| Item | Value |
|---|---|
| Positioning | "The Virtual Assistant Company" — a full-stack offshore recruitment firm for startups. Tagline in footer: "We help startups hire cracked offshore talent." |
| Meta description | "A full stack recruitment firm for startups. We help founders hire cracked offshore talent." |
| Roles placed | Virtual assistants, executive assistants, marketing assistants (influencer/UGC/social), account managers/customer support, and engineers |
| Talent geography | Morocco, Egypt, Algeria, LatAM, Colombia; "Top 5% North African Talent, In Your Timezone" |
| Pricing (current home/pricing) | Part time 20 h/week **$1,100/mo**; Full time 40 h/week **$2,200/mo**; no charge until you pick a candidate; free replacement; month-to-month |
| Pricing (older pages) | Talent page "Starting at $1,800/mo"; profile pages "Starting at $2,500/mo"; /mafia "Starting at $2,000/mo"; /stratus "Under $2,000/month"; /hey FAQ "$1,800/month full-time, part-time under $1,000/month" |
| Volume claims | "We screen 50,000 candidates per month and shortlist the top 100" (about, talent); "10,000 applications weekly" (vetting); "We screen 10,000 candidates per week" (our-talent) |
| Trial | "2 WEEK TRIAL" popup on home; "Try an assistant for 1 month" CTA band; /hey says "Try an assistant for 2 weeks" |
| Team | Rayyan Khan (CEO), Khulud Hassine (Head of Recruitment), Sahar Ashraf (Talent Partner), Val Ramirez (Head of Payroll); Omar Waseem announced as Co-Owner (/hello) |
| Founder story (/stratus) | "Founders Arm was started by Rayyan Khan, a college dropout who bootstrapped the company to over $1M ARR in year one. No VC funding. No big team. Just him and 6 offshore hires." |
| Clients / logos | Cal AI, Pam, Alif, Grata AI, turbo ai, myfitnesspal, headstarter, Plural Energy, ReciMe, Minutes AI, Turbolearn, Elevate, Pantheon, Yapper.so |
| Contact | rayyan@foundersarm.com (contact page and footer mailto) |
| Booking | cal.com/foundersarm/intro (embedded on /book-a-call; "intro call", 20 min, Google Meet, Europe/London, requires confirmation); older pages link cal.com/foundersarm/intro-call-founders-arm-ad |
| Socials | LinkedIn: linkedin.com/company/founders-arm/ · X: x.com/foundersarm |
| Legal | Privacy, Refund, Terms are Notion pages: `candied-seed-2bd.notion.site/Privacy-policy-for-Founders-Arm-…`, `…/Refund-Policy-for-Founders-Arm-…`, `…/Terms-and-Conditions-for-Founders-Arm-…` (on the new-theme pages the footer legal links currently point to `./`, i.e. they are unwired) |
| Copyright | New theme footer: "© 2026. All Rights Reserved"; old theme footer: "© 2025 Founders Arm. All rights reserved." |

---

## 2. Design system

### 2.1 New theme (home, /success-stories, story pages, /pricing, /c, /book-a-call, /meta)

**Palette**

| Token | Value | Use |
|---|---|---|
| Page background | `#E4E5DD` (rgb 228,229,221) | warm greige page ground |
| Card / panel | `#DBDCCD` and `#CBCCB8` | FAQ rows, pricing cards, story cards, "What we do" columns |
| Lighter panel | `#EDEEE4` | testimonial cards floating on illustrations |
| Ink | `#000000` / `#020000` / `#030000` | headings, primary buttons, footer, nav pill |
| Muted text | `#5A5A5A` (also at 70–80 % alpha), `#212121` | body copy, list items |
| Accent | `#CAFE14` (rgb 202,254,20) lime | primary CTA ("Book a Call", "Start Hiring"), circular arrow buttons, "2 WEEK TRIAL" ticker |
| Dark olive | `#26271B` | stat-card fills over the hero image, dark bands |
| Overlay | `rgba(3,0,0,.5)` | modal backdrop |

**Typography**

| Role | Font | Sizes observed |
|---|---|---|
| Display / headings | **Libre Caslon Text** (serif), weight 400 | H1 64px / 70.4 lh; section H2 48px / 52.8 lh; card titles ~32px; pricing figures ~40px |
| Body / UI | **Apfel Grotezk** (grotesque sans), 400 & 500 | nav links 16px (white 70 %); pill labels 14px; body 16–18px; card sub-copy 24px on story cards |
| Secondary sans | Rubik, "Suisse Int'l Trial" | occasional body/labels |
| Story article body | Apfel Grotezk (body), Libre Caslon Text (H2, italic pull-quotes with a left rule) | body 16px grey on `#E4E5DD`; article H2 bold ~32px |

**Layout & components**

- 12-column feel with visible **hairline vertical gutters** at the page edges (thin grey lines framing a ~1265px content column). Sections are separated by hairline horizontal rules, giving a "ledger" look.
- **Nav**: logo left (Founders Arm wordmark with double-slash glyph); right side is a black rounded pill containing Clients · Pricing · About us and a lime "Book a Call" button. On dark hero it is dark; on light pages it stays black.
- **Section label pill**: small rounded tag `/ What we do`, `/ How it works`, `/ Stories`, `/ Pricing`, `/ FAQ`, `/ Team`, `/ How We Build`, `/ Book a Call`, `/ About the company` — the slash prefix is the brand's signature.
- **Buttons**: (a) lime pill, black text, 16px/500; (b) black pill, white text (`/ Book a Call`, `/ Read Stories`, `/ Submit` — note slash prefix); (c) outlined black pill ("More Customer Stories", "Get in Touch"); (d) lime circular icon button with black chevron on stat cards.
- **Hero**: full-bleed anime-style painted landscape (mountains, lake, lone figure with laptop) with a dark gradient; centered serif H1, small pill above ("No upfront fees & Free trial period"), lime CTA. Three dark stat cards overlap the hero bottom.
- **What we do**: 3-column grid; outer columns are illustrated tiles with a floating testimonial card; middle column is a text tile. Check-mark lists in grey.
- **How it works**: 2×2 text cells around a central illustrated tile that contains a fake video-call window ("Intro Call" with mute/hang-up controls and the logo glyph).
- **Stories cards**: greige card, client logo, one-line result, avatar + name, full-width black "/ Read Stories" button.
- **Pricing cards**: greige card, plan name left + "20 hours a week" pill right, big serif price, check list, black full-width button.
- **CTA band**: rounded full-bleed painted image (person on bench) with "Still not convinced?" / "Try an assistant for 1 month." / lime "Book a Call".
- **FAQ**: left column heading in Apfel Grotezk 48px; right column accordion rows (greige, rounded 12px, serif question ~28px, black circular ± toggle).
- **Footer**: black, rounded top corners inset from the page edges; two link columns (Menu, Legal), Contact Us (outlined) + Book a Call (lime) buttons, "Follow us" with LinkedIn/X icons in a right rail, giant white wordmark bottom-left, copyright bottom-right.
- **Popup**: appears on first load — cream modal, lime "2 WEEK TRIAL" ticker strip, 6 circular headshots on lime discs, serif "Want free candidates delivered to your inbox?", email field, black "/ Submit".
- **Story page layout**: black hero (BACK link in lime, serif H1 up to ~64px, serif intro in white, three dark stat cards), then a two-column body: sticky left rail (client logo, description, "Visit Site" button, "Join our hiring network" greige box with "Start Now") and article on the right.

### 2.2 Old / dark theme (/talent, /our-talent, /careers, /guides, /guide/*, /blog, /seo/*, /hello, /hey, /stratus, /mafia, /old-home, /jobs, /thankyou, /404)

**Palette**: near-black page `#0D0D0D`–`#0B0B0B`, panel `#1A1A1A`/`#262626`, white text, grey `#9A9A9A` secondary, the same lime `#CAFE14` accent (buttons, icons, highlighted words), faint dotted-grid or vertical-line backgrounds with occasional lime dots.

**Typography**: Libre Caslon Text serif for display on talent/guides/blog; **Instrument Sans** for body; **Instrument Serif** italics; **Be Vietnam Pro**; mono labels in **Fira Mono / Fragment Mono** (e.g. `OMAR WASEEM ANNOUNCED AS CO-OWNER`, `HOMEPAGE › CAREERS`, `STEPS`, `GUIDES`); a **pixel/8-bit display font** for sub-heads and nav on /talent, /hey, /guides ("Clients Talent Book a Call", "Hire a VA in less than 2 Weeks", "Book a call").

**Components**: lime rectangular buttons with hard offset shadow ("Start Hiring →", "Apply Now →", "Get Started →"); pixel-art character avatars for talent; pixel clouds; pixel "WE'RE HIRING" sign; "Manifesto" card in monospace lowercase; dark job rows (title · dept · Remote · lime Apply Now); dark FAQ list with chevrons; "Starting at $X/mo" dark card with 4 check-bullets and concentric-ring headshot graphic; thin footer with wordmark + tagline + X/LinkedIn circles and centered legal links.

### 2.3 Imagery

- Hero/CTA art: painted, anime-inspired landscapes (Ghibli-like) — mountains, meadows, a bench under a tree, cliffs, sunsets — always with a small human figure using a laptop.
- Guides use isometric black/lime illustrations and painted fantasy scenes (crystal spires, jellyfish sky, blue city).
- Story pages use the client's product shots (Cal AI phone mockups, Pam chat UI, Alif summit photos).
- Talent profiles use pixel-art avatars plus personal photos with captions.

---

## 3. Page-by-page content

### 3.1 Home — `/`

Title: "Founders Arm | Hire cracked offshore talent."

**Nav**: Clients · Pricing · About us · [Book a Call]

**Popup (first visit)**: ticker "2 WEEK TRIAL"; "Want free candidates delivered to your inbox?"; "Try out an engineer or assistant, completely for free."; email placeholder `rayyan@foundersarm.com`; "/ Submit".

**Hero**
- Pill: "No upfront fees & Free trial period"
- H1: "The Virtual Assistant Company"
- Sub: "Hire the top 1% of global talent."
- CTA: "Start Hiring"
- Caption: "Trusted by the fastest growing companies and apps in the space."
- Stat cards: **Cal AI — 22 Marketing Assistants**; **Pam — 15+ Account Managers**; **alif — 20+ Hires placed** (each with lime arrow button)

**/ What we do** — "What your Founders Arm assistant can do you for you." *(sic)*
- Tile (Cal AI testimonial): "Every candidate they sent was someone we could realistically hire. Had 6 hires in place within two weeks — no padded resumes, no wasted interviews." → Start Hiring
- **Admin** — "Bookkeeping. Contracts. Payroll. Projects." — Account Management · Payroll And Audits · Bookkeeping · Project Management · Contracts
- **Marketing** — "Influencer campaigns. Cold outreach. Social content." — Influencer Management · Cold Outreach · Social Media Management · Influencer Marketing · Customer Support
- Tile (Pam testimonial): "The English and culture fit is what sold us. Our assistant was in Slack, on client calls, and fully ramped by the end of week two." → Start Hiring
- Tile (myfitnesspal testimonial): "They owned the entire hiring lift — sourcing, screening, first-round interviews. We showed up for the final call and picked someone great." → Start Hiring
- **Personal Life** — "Calendar. Travel. Bookings. Errands." — Meeting Scheduling · Travel Planning · Calendar Management · Health And Personal Care · OOO Requests

**/ How it works** — "How It Works (2 weeks)"
1. **Book Call** — "Hop on a 20 minute call. tell us what you're hiring for."
2. **Sourcing** — "Our recruiters will send over 4 candidates + notes."
3. **Placements** — "Hop on a one hour call to meet your candidates."
4. **Kick Off** — "Once you've picked your caniddate, it's all systems go!" *(sic)*

**/ Stories** — "Learn from the biggest teams using Founders Arm"
- Cal AI — "Marketing, support, ops. Scaled to $30M revenue." — Zach Yadegari
- Pam — "Entire operations and success team. 10+ people. $10M+ revenue." — Samee Khan
- alif — "Talent, operators, execution. Built from zero to launch." — Omar Waseem

**/ Pricing** — "No charge until you find a candidate you like"
- **Part time** · 20 hours a week · **$1,100 a month** — No Lock-In — Month-To-Month, Cancel Anytime · One Flat Fee — Salary, Payroll, And HR All Included · Top 5% North African Talent, In Your Timezone · Free Replacement If It's Not The Right Fit → / Book a Call
- **Full time** · 40 hours a week · **$2,200 a month** — Fully Embedded, 40 Hrs Dedicated To Your Team · A Fraction Of The Cost Of A US Hire, Same Caliber · We Employ Them — You Skip Payroll, Taxes, And Compliance · Free Replacement Until It Clicks → / Book a Call

**CTA band**: "Still not convinced?" / "Try an assistant for 1 month." / Book a Call

**/ FAQ** — "Frequently asked questions" · "Can't find the answer you're looking for? We're here to help." → Get in Touch
- **How much does it cost to hire through Founders Arm?** — Pricing starts at $2,200/month for full-time dedicated hires. Part-time options (20 hours/week) are available after a quick call, typically $1,100/month. This covers sourcing, vetting, onboarding support, and replacement guarantees.
- **What if I'm not happy with my hire?** — We'll send free replacements as soon as you need them. Just let us know what went wrong and we'll deliver new candidates right away.
- **What type of talent can I hire through Founders Arm?** — We specialize in VAs, marketers, EAs, and admin talent — professionals with at least 2–3 years of experience. Every candidate speaks proficient English and is vetted for communication, skills, and startup readiness.
- **Where are your candidates based?** — We source globally, with strong pipelines in Egypt, Morocco, and LATAM. These regions are full of highly skilled professionals eager to build with ambitious founders.
- **How do you vet your candidates?** — Candidates are screened for English through our platform, then evaluated on culture fit, relevant experience, and startup execution. Only the top profiles make it through.

**Footer**: Menu (About, Clients, Pricing) · Legal (Privacy Policy, Refund Policy, Terms & Conditions) · Contact Us · Book a Call · Follow us (LinkedIn, X) · "© 2026. All Rights Reserved"

### 3.2 Success stories index — `/success-stories`

- Dark stippled-landscape hero: pill "Customer Stories"; H1 "Read how companies use Founders Arm today."; sub "Find relevant stories from founders around the world."; Start Hiring.
- "/ Stories — Learn from the biggest teams using Founders Arm" + outlined "More Customer Stories"; the same three cards as home.
- Feature testimonial block: B&W portrait of Zach Yadegari; quote "Every candidate they sent was someone we could realistically hire. Had 6 hires in place within two weeks — no padded resumes, no wasted interviews."; Cal AI logo; "Zach Yadegari - CEO of Cal AI".
- "Trusted by the fastest growing companies and apps in the space." (logo row area)
- CTA band + FAQ + footer as on home.

### 3.3 Story — Cal AI — `/success-stories/cal-ai`

Title tag: "Marketing, support, ops. Scaled to $30M revenue. - Founders Arm | Virtual Growth Assistants for Hire"

Hero: "Marketing, support, ops. Scaled to $30M revenue." — "With Founders Arm, Cal AI built a virtual assistant team that runs influencer marketing end-to-end - scaling outreach, tracking, and partnerships while freeing founders to focus on product and strategy." Stat cards render as three "20+ Hires placed" (source labels: Marketing Assistants / Hires placed / $30M ARR Annual Revenue / Influencers Managed).

Left rail: "/ About the company" — "Introducing Cal AI, the AI-powered app that simplifies calorie tracking. Snap a photo or scan a barcode, and Cal AI instantly calculates calories and nutrients." — Visit Site — "Join our hiring network — real updates and insights to help you build your team smarter" → Start Now.

**From burnout to systems** — For most founders, influencer marketing starts as hustle: DM after DM, spreadsheet after spreadsheet. It works - until it breaks. As Cal AI began to grow, founder **Zach Yadegari** realized the biggest bottleneck wasn't product or ad spend - it was time. Instead of hiring an in-house marketing team, Cal AI partnered with Founders Arm to systemize influencer marketing with virtual assistants trained to manage sourcing, outreach, contracts, and tracking at scale.

**Systemizing influencer growth** — assistants are process owners, each managing a stage of the influencer funnel. Core functions: Sourcing (creators matching audience/aesthetic) · Outreach (personalized DMs/emails with approved scripts and cadence) · Tracking (every contact/response/post in shared trackers) · Contracts & Onboarding · Analytics (views, clicks, conversions per creator). Quote: "Our assistants don't just support campaigns - they run them. I wake up to a pipeline of creators already in motion."

**Why Founders Arm** — structured training and SOP development: Playbooks for every process · Soft and hard skills training · Outcome ownership ("creators booked" not "messages sent"). Quote: "Founders Arm's team felt like an extension of ours from day one… They understood our brand voice and could handle complex negotiations without losing the personal touch."

**The power of SOPs** — SOP pillars: 1 Sourcing (define creator fit + visual examples) · 2 Outreach (approved scripts, four-step follow-up Day 1, 4, 7, 10) · 3 Tracking (daily in sheets/Airtable) · 4 Feedback (daily early, then weekly) · 5 Scaling (add contracts, onboarding, analytics once stable). "The result is a machine that runs smoothly whether there's one assistant or twenty."

**Results that compound** — $30M+ ARR supported by a VA-run growth engine · 20+ virtual assistants · 150+ active influencers managed simultaneously · Millions of downloads.

**Lessons for founders** — Systemize before you scale (if you've explained it twice, it belongs in an SOP) · Define fit and tone · Train for judgment, not just tools · Feedback fast (red/green reviews daily → weekly) · Grow in layers.

**What's next** — expanding into affiliate marketing, brand partnerships, international expansion; plans to double its creator network.

### 3.4 Story — Pam — `/success-stories/pam-hq`

Hero: "Entire operations and success team. 10+ people. $10M+ revenue." — "With Founders Arm, Pam built a fully virtual operations engine that runs billing, onboarding, and client support - freeing its founder to focus entirely on product and revenue." (stat labels: 100% / Account Managers / Hires placed / $10M+ Annual Revenue / Client Touchpoints Automated). About: "Pam is an AI Receptionist that answers every call for your dealership."

**From growth to overload** — scaling brought operational chaos (tickets, invoices, onboarding). "Half my week was disappearing into backend work," recalls **Samee Khan**. Pam built its entire backend on VAs trained and managed by Founders Arm.

**The shift to client-facing assistants** — Onboarding · Billing + Payments · Customer Support · Account Management. Quote: "With the right structure, assistants can own full processes — not just tasks… They're the backbone of our $10 M ARR company."

**Why Founders Arm** — operational design: Dedicated Roles (one VA per function) · Outcome Ownership ("billing collected" not "send invoices") · Accountability Systems (weekly reports, checklists, escalation paths). Quote: "Founders Arm helped us run the backend like a product - documented, tested, and continuously improved."

**Training for trust** — Hard skills (billing software, CRM, email) · Soft skills (tone, empathy) · SOPs ("how to respond to a late payment", "how to escalate a technical issue") · Feedback loops (daily → weekly).

**Scaling without breaking** — Ratio-based Hiring · Ops Oversight (a lead assistant monitors the backend) · Evolving SOPs · Metrics Dashboards.

**Real results** — $10M ARR supported entirely by VAs · 8% of client requests resolved without founder involvement *(as published)* · 50% faster response times · Zero in-house ops staff added since launch.

**Lessons** — Don't silo VAs · Define success by outcomes · Specialize early · Keep feedback loops tight · Delegate the bottleneck.

**What's next** — voice support and AI-assisted reporting; "a fully autonomous client operations layer where assistants manage processes and AI handles data."

### 3.5 Story — Alif — `/success-stories/alif`

Hero: "Talent, operators, execution. Built from zero to launch." — "With Founders Arm, Alif built a dedicated offshore operations team that powers its portfolio startups with the execution support they need to scale faster." (labels: Hires placed / 80% Operational tasks automated / Founders supported). About: "Introducing Alif, a founder-first accelerator built to scale high-growth startups across emerging markets…" Header image: "We're backing the next generation of Muslim founders."

**Building an accelerator that actually scales** — founders were spending time on lead gen, CRM maintenance, investor outreach, content coordination. "Our startups had brilliant ideas but limited bandwidth," says **Omar Waseem**.

**Inside the system** — three pillars: 1 Dedicated Operators per Function · 2 Unified Tooling (Notion, HubSpot, Airtable, Slack; weekly dashboards and automated status updates) · 3 Training + Accountability (Founders Arm ran recruitment, onboarding, reviews; SOPs, daily check-ins, outcome goals). Result: a cohesive operations engine across Alif's 50+ startups.

**Why Founders Arm** — end-to-end recruiting + training + management; specialists instead of generalists. Quote: "They weren't just filling roles — they built the backbone that lets our founders focus on growth."

**Real results** — 20+ offshore hires placed · 80% of routine workflows automated or delegated · 40+ founder hours saved per week per company · Consistent GTM and investor-relations systems.

**A partnership built on alignment** — "Founders Arm runs the backend; Alif sets direction."

**What's next** — growth operations, marketing execution, investor success; "an autonomous operations layer supporting every Alif founder — from day zero to Series A."

### 3.6 Pricing — `/pricing`

Light page: pill "/ Pricing", H1 "No charge until you find a candidate you like", the two pricing cards (identical to home), CTA band, FAQ, footer.

### 3.7 About — `/c`

- H1 (serif, left): "10x your productivity with an assistant that knows startups" · right column: "We screen 50,000 candidates per month; And shortlist the top 100 for companies like yours." · black "Book a call". (Hidden variant copy: "We don't hire fast. We filter hard.")
- **Founder note** card over a stippled landscape: "Every founder has the same problem. Too much to do. Not enough time. For years, the only options were: 1) Hire slow 2) Do it yourself 3) Or burn out. We built Founders Arm to break that problem… A full-stack offshore hiring solution. Designed to help companies find the best talent from across the world. So you can focus only on the things that matter." — **Rayyan, CEO**
- **/ How We Build — Vetting Process** (Get in Touch): 1 "10,000 applications weekly" · 2 "500 video submissions" · 3 "50 pass skills + founder interview" · 4 "Top 1% placed"
- **/ Team — The team**: Rayyan Khan (CEO) · Khulud Hassine (Head of Recruitment) · Sahar Ashraf (Talent Partner) · Val Ramirez (Head of Payroll). (Team cards did not render in the screenshot; names come from page source.)
- CTA band, FAQ, footer.

### 3.8 Book a call — `/book-a-call`

Pill "/ Book a Call"; H1 "Let's build your team."; embedded Cal.com widget: Rayyan Khan · "intro call" · "a call to explore how we can help your company hire cracked engineering and offshore sales/marketing talent." · Requires confirmation · 20m · Google Meet · Europe/London; calendar + time slots. Then FAQ + footer.

### 3.9 Contact — `/contact-us`

Black page, centered: "Contact Us" / "Need help or want to work with us? Let's connect." / "Email: rayyan@foundersarm.com".

### 3.10 Careers — `/careers` (dark theme)

- Breadcrumb `HOMEPAGE › CAREERS`; H1 "Work with a US Based Startup"; "Founders Arm connects you with the top 1% of virtual roles available"; "View Open Positions →"; floating "Position Vacant" cards.
- **STEPS — How to Get Hired**: Fill out the Rapha form ("Share your background and work preferences.") · Interview ("Meet with our team for a quick screening.") · Placement call ("Speak directly with the startup team.") · Kick-off ("Get hired and start within days.")
- **Careers at Founders Arm — 9 openings**; categories Marketing, Virtual Assistant, Executive Assistant, Graphic Design, Business (BDR. Ops. Account Management.) — every row currently shows the placeholder "Social Media Manager · Marketing · Remote · Apply Now →".
- **FREQUENTLY ASKED — Got questions? We've got answers.**: What is Founders Arm? · What roles do you hire for? · What is the process of getting hired? · Why should I apply? · What exactly is a CRM Virtual Assistant? (answers collapsed; not in DOM)
- **HIRE WITH FOUNDERS ARM** card: "You want to build a great career. We want to help." Book a Call →; logo marquee (Pam, Grata AI, Cal AI, alif, turbo ai).
- Dark footer.

### 3.11 Our Talent — `/our-talent` (dark theme)

- H1 "Our Talent"; "You can't build a great company without hiring great people. That's why we started Founders Arm."; Get Started →
- Talent cards (with "Hire"): **Yusra** — social media professional, 2–3 yrs (Social Media Specialist, Influencer Marketing, Customer Support +3) · **Amad** — full-stack engineer (Next.js, Vercel, Supabase +4) · **Eman** — account executive 4+ yrs (Executive Assistant, Project Management, Lead Generation +2) · **Marya** — sales rep 2+ yrs at a US startup (LinkedIn Sales Navigator, Instantly.ai, Cold Emails) · **Chae** — market research/admin 3+ yrs at Aramco (Market Research, Inventory Management, Billing & Customer Support)
- "Great companies aren't built by average people." / "Your first few hires are the most essential. We've got you covered."
  - **Growth Marketers**: B2B Sales ("Automated outreach at scale. Send 50k verified leads monthly through LinkedIn and email. 100% tested.") · Social Media Management ("Ideation, editing, scripting, copywriting, engagements, and analytics.") · Influencer Campaign Management ("Managing high-budget influencer campaigns with full attribution.") → Hire marketers
  - **Executive Assistants**: Calendar Management ("Run your personal life on autopilot…") · CRM Management ("Generate insights, manage, and update company leads, accounts, and data.") · Personal Generalist ("Jack-of-all-trades who makes problems vanish. Your backup brain for everything.") → Hire assistants
  - **Cracked Engineers**: Full-stack Engineers ("Can ship large features overnight. Strangely good with Supabase. Probably powered by Cursor.") · Research Engineers ("Top 1% developers, sourced directly from the best engineer schools in the country.") · Offshore Talent ("Need an MVP built in a week? Hire cost-effective ex-Microsoft/Ramp engineers from other countries.") → Hire engineers
- "We screen **10,000 candidates** per week." / "We've perfected our hiring funnel to only interview the best of the best." — Language proficiency · Educational background ("All our candidates have earned a bachelors.") · Relevant experience · Time-zone compatibility ("PST/EST/GMT…") · Work ethic · Culture fit ("Is this someone we'd love to talk to for a few hours every day if we had to?")
- "Find your next hire in a week." — "No one-time recruiter fees, no upfront sourcing costs — only pay when you've found the perfect candidate." Steps: 1 Intro call (30 min) · 2 Sourcing · 3 Placement Call · 4 Kick-off ("All of our talent can onboard themselves in under 2 weeks.")
- "Ready to get started?" / "We've made the onboarding process as simple as possible." → Start hiring

### 3.12 Talent — `/talent` (dark theme, pixel font)

- H1 "We screen 50,000 candidates every month and shortlist the best 100." · "Meet some of the candidates behind the fastest growing companies in the space." · pixel-avatar grid of 8 profiles · "Hire a VA in less than 2 Weeks" → Book a call
- **Marketing Assistants** — "Influencer sourcing. UGC management. Social media campaigns. Outreach at scale." Overview: worked with Cal AI, Turbolearn, Elevate, Minutes AI. Use cases: Source 60–100 influencers per day · Manage UGC creator programs · Send 60+ outreach messages daily · Onboard, brief, analyse campaign metrics · Social Media Management. Qualifications: 2–3 yrs marketing (agency + brands) · native English screening · trained on consumer apps + startups. Located: Morocco, Egypt, Columbia.
- **Virtual Assistants** — "Customer Support. Data Entry. CRM Management. Account Management." Use cases: customer support (email, chat, ticketing) · data entry/database · reports, CRMs, spreadsheets · supporting AMs and ops. Qualifications: 2–3 yrs admin/support · offshore + startup experience · English & reliability screened. Located: Morocco. Egypt. Algeria. LatAM.
- **Executive Assistants** — "Assistants trained to buy back 40+ hours of founder time." Use cases: calendar/inbox · reports, decks, meeting notes · travel, logistics, expenses · fundraising, board prep, investor updates. Qualifications: 3+ yrs supporting CEOs · top colleges or equivalent · confidential info · communication/organization/prioritization · admin + strategic. Located: LatAM.
- **Starting at $1,800/mo** — Save 60% of the cost · Self onboarding · Hire in under 2 weeks · No admin hassle → Book a call

### 3.13 Talent profiles — `/talent/*` (8 pages, shared template)

Template: "← TALENTS", pixel avatar, name (serif), role, employer badge, start month, one-line bio; four Q&A blocks; right rail of personal photos with captions; prev/next links; "Starting at $2,500/mo" card; dark footer.

| Slug | Name | Role · Employer · Since | Bio (one line) |
|---|---|---|---|
| shaymaa-belkacemi | Shaymaa Belkacemi | Revenue Operations & Executive Assistant · Pantheon | Bookkeeping, HubSpot leads, follow-ups and meetings |
| merna-islam | Merna Islam | Chief of Staff · Founders Arm · Dec 2024 | Contracts, ops, payroll, social, hiring stats, CEO scheduling |
| madina-khazerouni | Madina Khazerouni | Marketing Assistant Manager · Cal AI · Apr 2024 | Leads 9 marketing assistants, runs IG/TikTok, DMs, negotiations |
| rawan-hamed | Rawan Hamed | Virtual Assistant · alif · Jan 2025 | Supports Omar Waseem; meetings, email, priorities, PM on projects |
| khulud-hassine | Khulud Hassine | Head of Recruitment · Founders Arm · Sep 2024 | Screens global campaigns, ATS pipeline, pairs assistants with US startups |
| yussra | Yousra Mehyaji | Marketing Assistant Manager · Cal AI · May 2024 | Leads 9 assistants; Cal AI Instagram/TikTok |
| haya-bassiouny | Haya Bassiouny | Social Media Specialist / UGC Creator Recruiter · Minutes AI | Recruits UGC creators, outreach, analytics, trends |
| nour-elmansy | Nour Elmansy | Ops & Customer Support · Pam | Onboarding, client testing, day-to-day support, launch ops |

Questions asked on every profile: "Can you tell us a bit about your work and what your day to day looks like?" · "What are you currently excited about for the next year?" · "What can we catch you doing outside of work?" · "What has been the highlight working at founders arm/your client so far?"

Notable answers:
- Shaymaa: "I never leave my house without my laptop! You'll probably find me at the beach, answering emails and enjoying the view." Highlight: "the strong leadership and positive energy—both from Founders Arm and the clients."
- Merna: highlight was meeting Rayyan, Khulud and Rawan in Egypt ("showing them around the Pyramids was actually an insane experience"). Excited to watch the company "evolve into the billion-dollar company it's meant to be ;)".
- Madina: "I started as a Marketing Assistant and later moved into a Manager role… I also appreciate Founders Arm—especially Rayyan, who has guided me with valuable advice, and Kholoud…"
- Rawan: runs her own cosmetics brand Skyla; "Omar often jokes that I'm awake 24/7"; graduated top ten in pharmacy with a published paper.
- Khulud: "Going from managing the CEO's inbox as a personal assistant to leading an entire department was never on my bingo card."
- Yousra: started as a Marketing Assistant, now Manager; "hopefully reach my goal of buying a car this year!"
- Haya: "Drinking matcha, taking long walks, and shopping."
- Nour: also runs Skyla; "the trust to own projects end-to-end, even early on, made a huge difference in my growth."

### 3.14 Guides — `/guides` and `/guide/*` (dark theme)

Index hero (painted crystal-spire scene): label "GUIDES"; H1 "Quick-Read Guide Series for Founders Working with VAs"; "This series is designed to help early-stage founders get the most out of their first VA - fast."; pixel "Book a call". "Free Resources — Read our guides on delegation and GTM'ing our assistants." Cards (only six titles; Load More): Calendar & Inbox Management: The VA Playbook · How to Automate Operations, Customer Support, and Account Management with VAs (Ft. How Pam scaled to $10M ARR…) · How to Build a Long-Term Relationship With Your VA · How to Build a Team of Virtual Assistants · How to Build High-Leverage Teams with VAs (Inside Alif's playbook…) · How to Create SOPs Your VA Can Actually Follow (Loom + Notion). Note: the card titles do not match the five live guide URLs below.

Guide template: "N min read", author avatar, serif H1, hero illustration, bold intro, "Lets dive in" list, numbered sections, "💡 Want help?" block with black/lime "Start Hiring" illustration; sticky right rail "Table of content" + "You want to build a great company. We want to help." + Start Hiring + X/LinkedIn.

**Scaling Consumer Apps** (3 min, Omar Waseem) — "How to source influencers and UGC creators to grow your app." Sections: 1 Why influencer marketing is a growth unlock ("A friend saying, 'Hey, I actually use this.'… turn creator sourcing into a daily pipeline") · 2 Picking the right influencers — Nano 1k–10k (high trust), Micro 10k–50k (affordable), Mid-Tier 50k–200k, Macro 200k+ (top of funnel); pick by who your app is for · 3 Workflow — Notion database, track views/clicks/conversion, weekly targets (50 messages/day, 10 collabs/week), follow up (deals happen on follow-up #2 or #3) · 4 Marketing assistants can find 100+ creators/day, pre-fill outreach, track replies, flag high performers · 5 Onboarding creators — onboarding doc, Notion/GDoc with affiliate links, payment + tracking system; "Consistency > perfection."

**Scaling Your Engineering Team** (5 min, Rayyan Khan) — "How to hire offshore engineers that actually ship." Two mistakes: overpay for prestige vs. underpay and micromanage. 1 Clarify the engineer you need (backend vs UI, MVP vs infra) · 2 Sourcing — Reddit r/forhire r/webdev, LinkedIn, WeWorkRemotely/RemoteOK/Dev.to, referral networks in LATAM/Egypt/Morocco, paid pipelines; "You need 3–5 great ones." · 3 Screening — 30–45 min mini technical test, portfolio check, comms test; "If they're not using Copilot or ChatGPT, that's a flag." · 4 Checklist — 2–4 h timezone overlap, English clarity, tools (GitHub, Linear, Notion, Slack, Copilot), culture fit, ownership · 5 Two-week onboarding sprint (Day 1–3 setup, 4–7 small tasks, 8–14 features, Week 3+ ownership).

**Hiring Offshore Talent** (5 min, Rayyan Khan) — "How to build a high-output global team (without chaos)." "We've helped dozens of founders delegate 80% of their week." 1 $5/hr tasks (research, scheduling, inbox) · $20/hr (support, content repurposing, outreach) · $100/hr (strategy, closing, offer) · 2 Sourcing — Reddit, LinkedIn Ads (LATAM, MENA), OnlineJobs.ph/Workana/Remotive, Typeform + Airtable inbound, referral system with thousands of screened profiles · 3 Screening — written test, voice/Loom intro, 1–2 day paid trial · 4 Checklist — English, timezone, tools, growth mindset, cultural alignment; "mini-founders, not task bots" · 5 Onboarding — Week 1 access + walkthroughs, Week 2 real tasks, then SOP library + async standups.

**Hiring Executive Assistants** (5 min, Rayyan Khan) — "How to get out of the weeds and reclaim your time." "The right executive assistant doesn't just support you. They scale you." 1 Delegate $5/hr (scheduling, reminders) and $20/hr (inbox, travel, docs/SOPs); keep $100/hr (strategy, hiring, investor calls) · 2 Sourcing — Reddit r/assistant, LinkedIn paid + DM sequences, AngelList Talent, Dynamite Jobs, internal database (1,000+ pre-screened) · 3 Screening — written prompt, voice/video intro, live scenario ("You're managing my inbox. What do you prioritize?"), paid 1-week trial · 4 Rubric — English, 3–5 h overlap, tools (Notion, Slack, ChatGPT, Trello, Gmail), growth mindset, cultural alignment · 5 Onboarding — Week 1: tools, SOPs, 3–5 daily recurring tasks, 15-min check-ins; Week 2: async ownership, Loom feedback, weekly priorities.

**Hiring Marketing Talent** (5 min, Rayyan Khan) — "How to find creative operators who drive growth." 1 Top-of-funnel vs conversion vs growth strategy · 2 Sourcing — LinkedIn/Twitter search, Reddit r/marketing, Workello/MarketerHire/Dynamite Jobs, referrals (LATAM, MENA, Eastern Europe) · 3 Screen — portfolio, scenario test ("Create a 3-post LinkedIn launch plan for this new app"), async communication; check marketing intuition · 4 Checklist — timezone, tools (Canva, Figma, Webflow, Meta Ads, GA4, Notion), written English, speed, ownership · 5 Two-week ramp (Day 1–3 brand/style, 4–7 test deliverables, 8–14 first campaign + KPIs); "If they're not generating ideas by Week 2, they're not the right fit."

### 3.15 Blog — `/blog` and `/blog/*` (dark theme)

Index: nav variant "How It Works · Pricing · Candidates · Customers · Get Started →"; two-column grid of cards (image, date, serif title), newest first (Sept 8 2025 "EPAM Vs SoftServe…" down to Oct 24 2024 "How To Hire Offshore Staff The Right Way"). Post template: centered 600px column, hero image, serif H1, lime full-width CTA "Read How CalAI Makes $3M/month with Founders Arm →", intro, "Table of Contents", serif H2s, closing "Our Unique Value Proposition" (AssistantOS, blueprints, selection from over 1,000 candidates) and "Leverage Our Support for Your Business Goals" pitch ("Perfect for funded startups (pre-seed, seed) and consumer apps looking to scale from 1 to 100, we offer affordable rates without placement fees.").

Three content clusters: software-engineering outsourcing comparisons (EPAM, SoftServe, DataArt, Andela, Globant, Luxoft, Turing, Toptal, TCS, Mindtree, BairesDev, ELEKS…), virtual/executive/admin assistant guides, and marketing outsourcing. The full list of the 77 posts with titles and meta descriptions is in §5.

### 3.16 SEO landers — `/seo/*` (9 pages, dark theme, shared template)

Template: mono banner "OMAR WASEEM ANNOUNCED AS CO-OWNER ›"; large sans H1; sub; "Get Started Now →"; carousel of candidate cards (Eman — Casablanca, Morocco — 600$/Mo · Marya — Columbia — 550$/Mo · Chae — Madrid, Spain — 1100$/Mo · Yusra — Cairo, Egypt — 350$/Mo · Emad — Riyadh, Saudi Arabia — 700$/Mo; role labels change per page); "Trusted by fast growing startups around the globe" logos; ABOUT section with two B&W dithered 3D illustrations and a testimonial ("We were struggling to find affordable yet skilled developers. FoundersArm brought us pre-vetted talent who felt like Silicon Valley hires—without the price tag." — Alex, Co-Founder, Webflow); BENEFIT cards; HOW IT WORKS (Book an intro call · Meet 3 candidates quickly — 30-minute call, 10-minute back-to-back slots · Watch the magic happen — onboarded within 24 hours: Slack, Calendar, Emails); Success Stories with a second quote ("…It's like discovering a hiring cheat code." — Sriram, Engineering Lead, Webflow); FAQ; "HIRE WITH FOUNDERS ARM" card.

| Slug | H1 |
|---|---|
| executive-va | Growth with an Executive VA |
| crm-virtual-assistant | CRM Virtual Assistant: Empower Your Business Growth |
| calendar-management-virtual-assistant | Calendar Management Virtual Assistant that Empowers Your Productivity |
| -marketing-virtual-assistant | Elevate Your Growth with a Marketing Virtual Assistant |
| social-media-virtual-assistant | Empower Your Growth with a Social Media Virtual Assistant |
| virtual-account-manager | Virtual Account Manager - Revolutionize Your Offshore Hiring |
| virtual-assistant-for-influencers | Virtual Assistant for Influencers |
| virtual-customer-service | Virtual Customer Service for Next-Level Customer Experience |
| virtual-sales-assistant | Empower Your Growth with a Virtual Sales Assistant |

### 3.17 Secondary / legacy landers

- **/hello** and **/hi** (identical): "Re(introducing) Founders Arm" · H1 "Unlocking the **top 1% of global talent.**" (lime highlight) · "We help startup founders hire cracked offshore growth marketers, full-stack engineers, and executive assistants." · Start Hiring → · video of the two founders · Omar W letter: "I see an opportunity. There are hundreds of millions of people across the world who, with a small amount of support, can work on things that truly shape the world. Founders Arm was born, 16 months ago, as a byproduct of that opportunity. It was a small investment… in a close friend. But the company quickly became a key part of our ecosystem. It supported founders with hiring as they scaled to millions — and some, tens of millions — in revenue. And more importantly, we started to see pockets of communities in countries like Algeria, Morocco, and Egypt turn to Founders Arm as an alternative career path… And that's why I'm doubling down — and excited to officially become a Co-Owner of Founders Arm." — Omar W · then "A full-stack solution for hiring offshore. The best marketers, operators, and engineers — at a fraction of the cost."
- **/hey** (pixel theme, painted hero): "10x your productivity with a virtual assistant that knows startups." · "We screen 50,000 candidates per month; And shortlist the top 100 for companies like yours." · logo marquee · **Manifesto** card (lowercase mono, "rayyan, CEO") · HIRING: "Hire offshore without the usual headaches." — Marketing Assistant ("Grow your audience faster…"), Executive Assistant ("Reclaim 40+ hours a week…"), Virtual Assistant ("Hire a trained operator… leadgen, CRM, and daily ops") · TESTIMONIALS "Why fast growing teams hire through us." — Jake Castillo (CAL AI): "The marketing assistants we hired through Founders Arm were absolute rockstars… we promoted them into manager roles" · Samee Khan (Co-founder): "Scaling our operations and sales team was seamless…" · Emmet Halm (Yapper.so): "We had strong candidates in just 3 days…" · HOW IT WORKS "We charge $0 to get started. Get 4 candidates for free…" (Book a Free Call · Sourcing: pool of 4 candidates in < a week · Placement Call · Kick off) · WHY FOUNDERS ARM "Starting at $1,800 /month — your dedicated assistant 40 hrs/week · timezone compatibility (PST/EST) · no minimum contract · no hidden costs or markups" · "Filtered out of 10,000 candidates · Screened with English in mind · Minimum 2–3 years of experience · Time-Zone compatibility" · "Try an assistant for 2 weeks" · FAQ (General): pricing "$1,800/month full-time… part-time typically under $1,000/month", Are there hidden fees?, What if I'm not happy?
- **/stratus** (long-form direct-response lander): H1 "You Can't Scale If You're Doing Everything Yourself." · "Fully vetted talent. Under $2,000/month. Placed in days, not months." · "Book Your Free Call" · badges No upfront fees • Free replacement guarantee • Free trial period · PROBLEM "You're the Bottleneck. And You Know It." (Upwork? 20 hours interviewing people who ghost… Fiverr? Cheap for a reason. Agencies? $5,000 upfront and 3x markups. "You didn't fail at hiring. The system failed you.") · SOLUTION "Pre-Vetted Talent. Zero Guesswork." — 10,000 screened monthly, top 100, 3–4 candidates in 5 days, pay only after · role cards (EAs, Marketing Assistants "100+ touches/day", Customer Support & Success "4+ years experience. Phone-ready.", VAs, Engineers & Technical Talent) · PROOF "10,000+ screened monthly · Top 1% · $1M+ ARR year one bootstrapped · 5 Days from call to candidates" · PROCESS 4 steps (Discovery Call 15 min → We Search → Meet Your Candidates in 5 days → They Start. You Pay.) · RISK REVERSAL "Zero Risk. Seriously." · Founder story ("His executive assistant alone buys back 40+ hours of his week…") · **The Math Is Simple** table: US Hire $8,000–$12,000+/mo, benefits & taxes you pay, recruiter fees $5,000–$15,000, 3–6 months to hire, replacement = start over **vs** Founders Arm $1,500–$2,800/mo, included, 1–3 weeks, free replacement · FAQ ("How is this different from Upwork or Fiverr? Night and day…") · closing "Ready to Stop Doing Everything Yourself? Every week you wait is another 20+ hours you're not getting back."
- **/mafia** ("Founders Arm x App Mafia"): "We help app founders hire great offshore talent." · talent cards · the /our-talent role sections · "Why Founders Arm? Join hundreds of founders who hire from our talent pools every week" · "Hiring with us is as easy as 1-2-3." · "We'll sweat the small stuff." (Easy onboarding · No payroll hassle · Scale (and save) with us) · "Starting at $2,000/mo".
- **/meta**: a copy of the current home page (same popup).
- **/old-home**: dark split hero "We help founders hire great offshore talent." / "Need a great virtual assistant or engineer? Get 3 candidates with 0 upfront cost." with inline email + Start Hiring; popup "Want a 2 week trial with our offshore team? Startup-grade execution, zero overhead, results from day one."; "Trusted by teams that prioritize *growth*."; candidate cards.
- **/old-home-2**: painted hero "10x your productivity with a remote assistant that knows startups." + Get Started; popup "Try out one of our trained candidates for 2 weeks"; "Welcome!" manifesto.
- **/jobs** / **/jobs-draft**: label CAREERS; "Join the team building the brands and products of tomorrow." / "At Founders Arm, we partner with founders, startups, and companies around the world to turn bold ideas into real impact…"
- **/bookacall** (legacy): "Book a call" + quote "Founders Arm streamlined the process of hiring top marketing talent at a fraction of the price." — Jake Castillo, CMO at Cal AI; logos Pam, headstarter, alif, Cal AI, Plural Energy, ReciMe; embedded calendar.
- **/thankyou** / **/confirmation**: "You're In. Here's what happens next." · "We'll reach out within 24 hours to schedule your discovery call. On the call, we'll cover: What tasks are eating your time · What roles would help most · How our matching process works · Your questions—no pressure, no pitch" · "Before your call, think about: 1 What tasks are taking up the most time that you shouldn't be doing? 2 What would you do with 20+ extra hours a week? 3 When do you want someone to start?"
- **/404**: "404 — The page you're looking for has either been removed or is nonexistent." → Back to home →

---

## 4. Sitemap (127 URLs)

Core: `/`, `/success-stories`, `/success-stories/cal-ai`, `/success-stories/pam-hq`, `/success-stories/alif`, `/pricing`, `/c`, `/book-a-call`, `/contact-us`, `/careers`, `/our-talent`, `/talent`, `/talent/{shaymaa-belkacemi, merna-islam, madina-khazerouni, rawan-hamed, khulud-hassine, yussra, haya-bassiouny, nour-elmansy}`, `/guides`, `/guide/{scaling-consumer-apps, scaling-your-engineering-team, hiring-offshore-talent, hiring-executive-assistants, hiring-marketing-talent}`, `/blog`, `/blog/*` (77), `/seo/*` (9).

Legacy / utility: `/old-home`, `/old-home-2`, `/bookacall`, `/hey`, `/hello`, `/hi`, `/stratus`, `/mafia`, `/meta`, `/jobs`, `/jobs-draft`, `/thankyou`, `/confirmation`, `/404`.

---

## 5. Blog posts (77)

| Slug | Title | Meta description |
|---|---|---|
| [admin-assistant-duties](https://foundersarm.com/blog/admin-assistant-duties) | Admin Assistant Duties (What Admnis Do For Your Business & Organization) | Improve your business efficiency with a skilled admin assistant duties. Learn how they can streamline operations and boost productivity. |
| [administration-recruitment-agencies](https://foundersarm.com/blog/administration-recruitment-agencies) | 12 Top Administration Recruitment Agencies For Admin Staffing Needs | Find out how to pick the right administration recruitment agency that aligns with your staffing goals and helps you attract skilled administrative talent. |
| [affordable-virtual-assistant-services](https://foundersarm.com/blog/affordable-virtual-assistant-services) | Affordable Virtual Assistant Services: How to Scale Your Business | Simplify your workflow with affordable virtual assistant services. Hire skilled VAs and scale your business for less. |
| [andela-competitors](https://foundersarm.com/blog/andela-competitors) | Top 10 Andela Competitors in Software Engineering Outsourcing | Find out how Andela competitors compare in a head-to-head analysis. We review alternatives to help you choose the best platform for your hiring needs. |
| [b2b-offshore-marketing-services](https://foundersarm.com/blog/b2b-offshore-marketing-services) | B2B Offshore Marketing Services (Benefits & 5 Top Firms To Outsource To) | Gain insights into B2B offshore marketing services, including key benefits and five leading firms to consider for effective outsourcing. |
| [bairesdev-competitors](https://foundersarm.com/blog/bairesdev-competitors) | 13 Top BairesDev Competitors in Software Engineering Outsourcing | Searching for Bairesdev competitors? See how rival outsourcing companies measure up in quality, cost, and innovation. |
| [benefits-of-hiring-dedicated-developers](https://foundersarm.com/blog/benefits-of-hiring-dedicated-developers) | 6 Benefits of Hiring Dedicated Developers for Your Startup | Understand the benefits of hiring dedicated developers and how they enhance productivity, bring expertise, and ensure project success. |
| [benefits-of-outsourcing-marketing](https://foundersarm.com/blog/benefits-of-outsourcing-marketing) | 20 Top Benefits of Outsourcing Marketing to an External Team | Benefits of outsourcing marketing is to drive growth, cut costs, and boost expertise. Discover essential benefits of partnering with an external team. |
| [benefits-of-outsourcing-to-a-virtual-assistant](https://foundersarm.com/blog/benefits-of-outsourcing-to-a-virtual-assistant) | Top 10 Benefits of Outsourcing to a Virtual Assistant | Virtual assistants can boost productivity, cut costs, and improve agility. Discover the benefits of outsourcing to a virtual assistant today. |
| [best-virtual-assistant-agency](https://foundersarm.com/blog/best-virtual-assistant-agency) | 22 Best Virtual Assistant Agencies For Specialized Talent | Need expert help fast? Hire from the best virtual assistant agency and get matched with vetted talent in 48 hours. |
| [bpo-marketing](https://foundersarm.com/blog/bpo-marketing) | Understanding BPO Marketing And If It's Right for Your Business | Evaluate BPO marketing’s potential for your business with insights on cost-efficiency, scalability, and its impact on customer engagement and growth. |
| [can-software-engineers-work-from-home](https://foundersarm.com/blog/can-software-engineers-work-from-home) | Can Software Engineers Work From Home? What Employers Need To Know  |  Wondering, can software engineers work from home? Explore the rise of remote tech roles and what it means for your career path. |
| [cold-calling-virtual-assistant](https://foundersarm.com/blog/cold-calling-virtual-assistant) | The Ultimate Guide To Hiring A Cold-Calling Virtual Assistant | Trained to convert, built to scale. Let a cold calling virtual assistant handle outreach while you focus on sealing the deal. |
| [dataart-competitors](https://foundersarm.com/blog/dataart-competitors) | Top 12 DataArt Competitors For Outsourcing Software Engineering | Compare DataArt competitors to find the right software engineering firm. We analyze key players, services, and expertise to help you make an informed choice. |
| [digital-marketing-virtual-assistant](https://foundersarm.com/blog/digital-marketing-virtual-assistant) | What is a Digital Marketing Virtual Assistant? Business Benefits | Your growth shouldn’t stall. A digital marketing virtual assistant brings focus, execution, and results: remotely. |
| [eleks-competitors-software-engineering](https://foundersarm.com/blog/eleks-competitors-software-engineering) | 13 ELEKS Competitors & Alternatives for Software Engineering | Compare Eleks' competitors in software engineering. See which firms deliver strong expertise, global reach, and innovation in custom solutions. |
| [engineering-staffing-agencies](https://foundersarm.com/blog/engineering-staffing-agencies) | Top 13 Engineering Staffing Agencies For Top Talent | Engineering staffing agencies simplify recruitment, offering on-demand access to top engineers for critical and niche roles. |
| [epam-vs-softserve](https://foundersarm.com/blog/epam-vs-softserve) | EPAM Vs SoftServe (Choosing the Right Software Engineering Partner) | Discover the key differences in services, expertise, and culture in our detailed comparison: EPAM vs SoftServe. |
| [executive-assistant-duties](https://foundersarm.com/blog/executive-assistant-duties) | 13 Essential Executive Assistant Duties & Responsibilities (Hiring Guide) | Learn about 13 essential executive assistant duties and responsibilities to streamline hiring and meet your executive support needs. |
| [executive-assistant-outsourcing](https://foundersarm.com/blog/executive-assistant-outsourcing) | The Definitive Guide To Executive Assistant Outsourcing (Benefits, Challenges & More) | Definitive guide to executive assistant outsourcing: Uncover benefits, address challenges, and learn how outsourcing enhance business productivity. |
| [executive-assistant-recruitment-agencies](https://foundersarm.com/blog/executive-assistant-recruitment-agencies) | Top 17 Executive Assistant Recruitment Agencies For Hiring The Right EA | Find the top 17 executive assistant recruitment agencies known for connecting with skilled EAs who excel in organization and support. |
| [executive-assistant-salary](https://foundersarm.com/blog/executive-assistant-salary) | Executive Assistant Salary (How Much Should You Pay Your Executive Assistant?) | Uncover insights on executive assistant salaries to ensure competitive compensation and attract top talent for your organization. |
| [executive-assistant-vs-administrative-assistant](https://foundersarm.com/blog/executive-assistant-vs-administrative-assistant) | Executive Assistant vs Administrative Assistant, Which One Do You Need? | Executive assistant vs administrative assistant: A detailed breakdown of roles and responsibilities to help you choose the right support. |
| [executive-assistant-vs-personal-assistant](https://foundersarm.com/blog/executive-assistant-vs-personal-assistant) | Executive Assistant vs Personal Assistant, Which One Do You Need? | Find the top 17 executive assistant recruitment agencies known for connecting with skilled EAs who excel in organization and support. |
| [fractional-executive-assistant](https://foundersarm.com/blog/fractional-executive-assistant) | The Best Guide To Hiring A Fractional Executive Assistant  | Transform your business efficiency with expert insights on hiring a fractional executive assistant tailored to your unique needs. |
| [freelancer-vs-virtual-assistant](https://foundersarm.com/blog/freelancer-vs-virtual-assistant) | Freelancer vs. Virtual Assistant (Key Differences & Which to Hire) | Confused between a freelancer vs. a virtual assistant? Compare roles, reliability, and ROI to hire smarter and streamline your operations. |
| [globant-competitors](https://foundersarm.com/blog/globant-competitors) | 10 Globant Competitors & Alternatives For Software Engineering | Compare Globant competitors like Founders Arm, Wipro, and Thoughtworks. Find out how they stack up in digital transformation and software development. |
| [hire-a-virtual-assistant-for-social-media](https://foundersarm.com/blog/hire-a-virtual-assistant-for-social-media) | How to Hire A Virtual Assistant for Social Media | You don’t need to do it all. Hire a virtual assistant for social media and reclaim your time while keeping your brand active and engaging. |
| [hire-administrative-assistant](https://foundersarm.com/blog/hire-administrative-assistant) | How to Hire an Administrative Assistant in 5 Simple Steps | How to hire an administrative assistant: Follow these 5 simple steps to find the right candidate and streamline your workflow efficiently. |
| [hire-an-executive-assistant](https://foundersarm.com/blog/hire-an-executive-assistant) | 7 Best Tips & Tricks To Hire An Executive Assistant  | Find 7 expert tips and tricks to hire administrative assistant who will streamline operations and elevate your productivity. |
| [hire-offshore-staff](https://foundersarm.com/blog/hire-offshore-staff) | How To Hire Offshore Staff The Right Way (13 Essential Steps To Follow) | Follow these 13 essential steps to master the process of hiring offshore staff, ensuring a successful and efficient recruitment experience. |
| [how-much-do-engineers-make](https://foundersarm.com/blog/how-much-do-engineers-make) | How Much Do Engineers Make? A Practical Guide For Startup Founders |  Thinking of becoming an engineer? See how much engineers make based on discipline, experience level, and geographic location. |
| [how-much-does-it-cost-to-hire-a-structural-engineer](https://foundersarm.com/blog/how-much-does-it-cost-to-hire-a-structural-engineer) | How Much Does It Cost to Hire A Structural Engineer? | Need a structural engineer? Learn how much it costs to hire one and what influences the price, from site visits to drawings and calculations. |
| [how-much-does-it-cost-to-hire-a-web-developer](https://foundersarm.com/blog/how-much-does-it-cost-to-hire-a-web-developer) | How Much Does It Cost to Hire A Web Developer? A Startup’s Guide | Need a developer, but unsure of the cost? Learn how much it costs to hire a web developer and what drives pricing today. |
| [how-much-does-it-cost-to-hire-an-engineer](https://foundersarm.com/blog/how-much-does-it-cost-to-hire-an-engineer) | How Much Does It Cost To Hire An Engineer? Budgeting For A Software Engineer | Learn how much it costs to hire an engineer based on role, experience, and project type, plus tips to avoid hidden charges. |
| [how-much-does-marketing-cost-for-a-startup](https://foundersarm.com/blog/how-much-does-marketing-cost-for-a-startup) | How Much Does Marketing Cost For A Startup? Managing Your Budget | How much does marketing cost for a startup? Ensure smart spending while maximizing growth potential and brand visibility. |
| [how-to-find-a-good-virtual-assistant](https://foundersarm.com/blog/how-to-find-a-good-virtual-assistant) | How to Find A Good Virtual Assistant (Guide for Startup Founders) | Define your needs, assess skills, and use personal referrals or freelance platforms in how to find a good virtual assistant for your business. |
| [how-to-find-a-social-media-manager](https://foundersarm.com/blog/how-to-find-a-social-media-manager) | How to Find & Hire A Social Media Manager | How to find a social media manager who does more than manage, one who builds brand presence, drives engagement, and owns results. |
| [how-to-hire-a-digital-marketing-manager](https://foundersarm.com/blog/how-to-hire-a-digital-marketing-manager) | How To Hire A Digital Marketing Manager In 6 Simple Steps |  Looking for ways on how to hire a digital marketing manager? Follow our six-step process to identify and select the best fit for your business needs. |
| [how-to-hire-a-front-end-developer](https://foundersarm.com/blog/how-to-hire-a-front-end-developer) | A Complete Guide on How to Hire A Front-End Developer | Get practical advice on how to hire a front-end developer and build a team that crafts modern, efficient, and visually appealing websites. |
| [how-to-hire-a-java-developer](https://foundersarm.com/blog/how-to-hire-a-java-developer) | A Complete Guide on How to Hire A Java Developer for Startups | A straightforward guide on how to hire a Java developer for your project, covering skills to look for, interview questions, and hiring best practices. |
| [how-to-hire-a-virtual-assistant-for-internet-marketing](https://foundersarm.com/blog/how-to-hire-a-virtual-assistant-for-internet-marketing) | How To Hire A Virtual Assistant For Internet Marketing In 9 Easy Steps |  How to hire a virtual assistant for internet marketing? Follow these 9 clear steps to simplify your hiring process and boost efficiency. |
| [how-to-use-a-virtual-assistant](https://foundersarm.com/blog/how-to-use-a-virtual-assistant) | How to Use A Virtual Assistant in Your Business | Unlock productivity with this guide on how to use a virtual assistant to handle repetitive tasks and scale your daily operations efficiently. |
| [in-house-vs-outsourcing-marketing](https://foundersarm.com/blog/in-house-vs-outsourcing-marketing) | In House vs Outsourcing Marketing, Which Do You Choose? | In-house vs. outsourced marketing. Analyze costs, control, and flexibility to determine which approach best aligns with your goals and resources. |
| [is-a-front-end-developer-a-software-engineer](https://foundersarm.com/blog/is-a-front-end-developer-a-software-engineer) | Is A Front-End Developer A Software Engineer? What Startups Should Know | Is a front-end developer a software engineer? Learn how their skills, tools, and responsibilities compare in modern development teams. |
| [lead-engineer-vs-senior-engineer](https://foundersarm.com/blog/lead-engineer-vs-senior-engineer) | Lead Engineer Vs Senior Engineer (Key Differences & Which to Hire First) | Lead Engineer vs Senior Engineer: Understand the distinct responsibilities, leadership roles, and career paths in engineering teams. |
| [luxoft-competitors](https://foundersarm.com/blog/luxoft-competitors) | Top 10 Luxoft Competitors For Outsourcing Software Engineering | Analyze leading Luxoft competitors and discover the top-tier IT services companies offering similar software development and digital solutions. |
| [marketing-cost-for-small-business](https://foundersarm.com/blog/marketing-cost-for-small-business) | What is the Average Marketing Cost for Small Business? | Determine effective marketing cost for small businesses with insights into typical costs, key channels, and budget allocation strategies. |
| [marketing-recruitment-agencies](https://foundersarm.com/blog/marketing-recruitment-agencies) | 15 Top Marketing Recruitment Agencies To Help You Hire Right | Hire top talent with these 15 leading marketing recruitment agencies, each skilled in matching companies with ideal candidates for success. |
| [marketing-team-for-small-business](https://foundersarm.com/blog/marketing-team-for-small-business) | Building A Strong Marketing Team For Small Business (7 Most Crucial Roles) | Building a strong marketing team for small business is vital for growth. This guide outlines the key roles you need for your marketing strategy! |
| [nearshoring-companies](https://foundersarm.com/blog/nearshoring-companies) | Top 17 Nearshore Outsourcing Companies to Work With |  See how nearshoring companies help reduce costs without sacrificing quality, which is ideal for tech, manufacturing, and logistics leaders. |
| [offshore-marketing-services](https://foundersarm.com/blog/offshore-marketing-services) | Seeking Offshore Marketing Services, What Are The Pros & Cons? | Thinking of outsourcing marketing? Weigh the pros and cons of offshore marketing services to understand costs and risks involved. |
| [offshore-talent](https://foundersarm.com/blog/offshore-talent) | What is Offshore Talent? Benefits, Challenges & How To Hire | Beyond cost savings, offshore talent brings diverse perspectives, specialized skills, and scalable solutions to modern business challenges. |
| [offshore-virtual-assistant](https://foundersarm.com/blog/offshore-virtual-assistant) | What Is An Offshore Virtual Assistant & How Do I Hire One? | Learn how to hire an offshore virtual assistant, boost productivity, and access skilled support to grow your business efficiently. |
| [outsourced-business-development-services](https://foundersarm.com/blog/outsourced-business-development-services) | A Simple Guide to Outsourced Business Development Services | High-output outsourced business development services for companies ready to scale without hiring full-time. Results, not just activity. |
| [outsourced-marketing-manager](https://foundersarm.com/blog/outsourced-marketing-manager) | What is an Outsourced Marketing Manager? Roles, Skills & Benefits for Businesses | Boost your business growth with an outsourced marketing manager, offering specialized skills and flexible solutions to your goals. |
| [outsourced-virtual-assistant](https://foundersarm.com/blog/outsourced-virtual-assistant) | Outsourced Virtual Assistant (Benefits, How to Hire & More) | Boost productivity and focus on core business with an outsourced virtual assistant for tasks like social media, email, and project support. |
| [outsourcing-administrative-services](https://foundersarm.com/blog/outsourcing-administrative-services) | The Definitive Guide To Outsourcing Administrative Services | Boost your business efficiency with our guide to outsourcing administrative services, covering benefits and best practices for success. |
| [sdr-outsourcing-companies](https://foundersarm.com/blog/sdr-outsourcing-companies) | Top 15 SDR Outsourcing Companies to Hire for Sales Growth | SDR outsourcing companies can unlock sales growth. Learn what sets high-performing providers apart and that aligns with your goals. |
| [skills-for-administrative-assistant](https://foundersarm.com/blog/skills-for-administrative-assistant) | Top 11 Skills for Administrative Assistant Job Role (Hiring Guide) | Learn the top 11 skills for administrative assistant roles to excel in organization and communication backed by hiring guide. |
| [social-media-virtual-assistant](https://foundersarm.com/blog/social-media-virtual-assistant) | Social Media Virtual Assistant (Business Benefits, How to Hire & More) | Get expert support from a social media virtual assistant, perfect for handling engagement, content planning, and staying active across platforms. |
| [software-engineer-staffing](https://foundersarm.com/blog/software-engineer-staffing) | Software Engineer Staffing (Build, Scale, and Retain a High-Performance Team) | Find expert software engineer staffing solutions tailored to your business needs. Hire top talent efficiently and scale your team with confidence. |
| [strengths-of-an-executive-assistant](https://foundersarm.com/blog/strengths-of-an-executive-assistant) | What Are The Strengths Of An Executive Assistant? 19 Must-Have Traits | Learn 19 must-have traits that highlight the strengths of an executive assistant and ensure exceptional support for organizational success. |
| [tcs-vs-mindtree](https://foundersarm.com/blog/tcs-vs-mindtree) | TCS Vs Mindtree (Choosing the Right Software Engineering) | TCS vs Mindtree explained. Compare size, strategy, and strengths to understand which IT services provider matches your goals. |
| [tools-for-virtual-assistants](https://foundersarm.com/blog/tools-for-virtual-assistants) | 50 Best Tools For Virtual Assistants To Be Productive & Efficient | Looking for the best tools for virtual assistants? Find software to manage tasks, schedule meetings, and stay productive on the go. |
| [turing-vs-toptal](https://foundersarm.com/blog/turing-vs-toptal) | Turing Vs Toptal (Which Platform Should You Choose When Hiring A Developer?) | Find out what sets Turing vs Toptal apart when hiring remote developers for your business. |
| [virtual-administrative-assistant-companies](https://foundersarm.com/blog/virtual-administrative-assistant-companies) | 11 Best Virtual Administrative Assistant Companies With Top-Notch VAs | Find the 11 best virtual administrative assistant companies offering top-notch VAs to streamline tasks, boost efficiency, and support your business. |
| [virtual-assistant-email-marketing](https://foundersarm.com/blog/virtual-assistant-email-marketing) | Working With An Email Marketing Virtual Assistant (Benefits, Tasks, Tips) | Get results without burnout. Virtual assistant email marketing handles the backend so your emails hit harder, faster, and smarter. |
| [virtual-assistant-for-lead-generation](https://foundersarm.com/blog/virtual-assistant-for-lead-generation) | Why Hire A Virtual Assistant For Lead Generation? | Virtual assistant for lead generation helps businesses generate quality leads, manage outreach, and effectively support sales teams. |
| [virtual-assistant-for-social-media-marketing](https://foundersarm.com/blog/virtual-assistant-for-social-media-marketing) | Hire A Virtual Assistant for Social Media Marketing? | From post planning to analytics, a Virtual Assistant for Social Media Marketing streamlines your workflow, without missing a beat. |
| [virtual-assistant-packages-examples](https://foundersarm.com/blog/virtual-assistant-packages-examples) | Common Types of Virtual Assistant Packages (with Examples) | Skip the guesswork. These Virtual Assistant Package examples demonstrate exactly how professionals bundle admin, content, and client support. |
| [virtual-assistant-platforms](https://foundersarm.com/blog/virtual-assistant-platforms) | 19 Best Virtual Assistant Platforms To Hire On- And Off-Shore Assistants | Maximize your productivity with the right help! Explore our list of the 19 best virtual assistant platforms to find on- and off-shore support. |
| [virtual-assistant-seo](https://foundersarm.com/blog/virtual-assistant-seo) | What Is An SEO Virtual Assistant? Benefits, Tasks, Hiring Tips | Virtual assistant SEO help boost search engine rankings through keyword research, content creation, and performance optimization. |
| [virtual-assistant-services-for-small-businesses](https://foundersarm.com/blog/virtual-assistant-services-for-small-businesses) | Virtual Assistant Services For Small Businesses & Why Use Them | From emails to bookkeeping, virtual assistant services for small businesses handle the busy work so you can focus on growth. |
| [virtual-assistant-vs-executive-assistant](https://foundersarm.com/blog/virtual-assistant-vs-executive-assistant) | Virtual Assistant vs. Executive Assistant (Which Does Your Business Need?) | From delegation to decision support, unpack the real-world differences between a Virtual Assistant vs. an Executive Assistant today. |
| [what-does-a-pinterest-virtual-assistant-do](https://foundersarm.com/blog/what-does-a-pinterest-virtual-assistant-do) | What Does a Pinterest Virtual Assistant Do? | What Does a Pinterest Virtual Assistant Do? They manage Pinterest accounts, create engaging pins, optimize content, and boost visibility. |
| [who-needs-a-virtual-assistant](https://foundersarm.com/blog/who-needs-a-virtual-assistant) | Who Needs A Virtual Assistant? How VAs Help & What To Consider | Who needs a virtual assistant? Entrepreneurs, professionals, and businesses benefit from VAs who help with administrative tasks and support. |

---

## 6. Screenshot index

All files are in `research/foundersarm/screenshots/` (1400×868 JPEG, desktop viewport 1503×932, scrolled in ~850px steps). Naming: `<page>-<NN>.jpg` top to bottom.

| Page | Files |
|---|---|
| about | about-01.jpg about-02.jpg about-03.jpg about-04.jpg about-05.jpg about-06.jpg  |
| blog-index | blog-index-01.jpg blog-index-02.jpg blog-index-03.jpg blog-index-04.jpg  |
| blog-post-hire-offshore-staff | blog-post-hire-offshore-staff-01.jpg blog-post-hire-offshore-staff-02.jpg blog-post-hire-offshore-staff-03.jpg  |
| book-a-call | book-a-call-01.jpg book-a-call-02.jpg book-a-call-03.jpg  |
| careers | careers-01.jpg careers-02.jpg careers-03.jpg careers-04.jpg careers-05.jpg  |
| contact-us | contact-us-01.jpg  |
| guide-hiring-executive-assistants | guide-hiring-executive-assistants-01.jpg guide-hiring-executive-assistants-02.jpg guide-hiring-executive-assistants-03.jpg guide-hiring-executive-assistants-04.jpg guide-hiring-executive-assistants-05.jpg guide-hiring-executive-assistants-06.jpg  |
| guide-hiring-marketing-talent | guide-hiring-marketing-talent-01.jpg guide-hiring-marketing-talent-02.jpg guide-hiring-marketing-talent-03.jpg guide-hiring-marketing-talent-04.jpg guide-hiring-marketing-talent-05.jpg guide-hiring-marketing-talent-06.jpg  |
| guide-hiring-offshore-talent | guide-hiring-offshore-talent-01.jpg guide-hiring-offshore-talent-02.jpg guide-hiring-offshore-talent-03.jpg guide-hiring-offshore-talent-04.jpg guide-hiring-offshore-talent-05.jpg guide-hiring-offshore-talent-06.jpg  |
| guide-scaling-consumer-apps | guide-scaling-consumer-apps-01.jpg guide-scaling-consumer-apps-02.jpg guide-scaling-consumer-apps-03.jpg guide-scaling-consumer-apps-04.jpg guide-scaling-consumer-apps-05.jpg guide-scaling-consumer-apps-06.jpg  |
| guide-scaling-your-engineering-team | guide-scaling-your-engineering-team-01.jpg guide-scaling-your-engineering-team-02.jpg guide-scaling-your-engineering-team-03.jpg guide-scaling-your-engineering-team-04.jpg guide-scaling-your-engineering-team-05.jpg guide-scaling-your-engineering-team-06.jpg  |
| guides | guides-01.jpg guides-02.jpg guides-03.jpg  |
| home | home-01.jpg home-02.jpg home-03.jpg home-04.jpg home-05.jpg home-06.jpg home-07.jpg home-08.jpg home-09-faq-expanded.jpg  |
| jobs | jobs-01.jpg  |
| landing-bookacall | landing-bookacall-01.jpg  |
| landing-hello | landing-hello-01.jpg landing-hello-02.jpg landing-hello-03.jpg  |
| landing-hey | landing-hey-01.jpg landing-hey-02.jpg  |
| landing-mafia | landing-mafia-01.jpg landing-mafia-02.jpg  |
| landing-meta | landing-meta-01.jpg  |
| landing-old-home | landing-old-home-01.jpg landing-old-home-02.jpg  |
| landing-old-home-2 | landing-old-home-2-01.jpg  |
| landing-stratus | landing-stratus-01.jpg  |
| our-talent | our-talent-01.jpg our-talent-02.jpg our-talent-03.jpg our-talent-04.jpg our-talent-05.jpg  |
| page-404 | page-404-01.jpg  |
| pricing | pricing-01.jpg pricing-02.jpg pricing-03.jpg pricing-04.jpg  |
| seo-calendar-management-virtual-assistant | seo-calendar-management-virtual-assistant-01.jpg  |
| seo-crm-virtual-assistant | seo-crm-virtual-assistant-01.jpg  |
| seo-executive-va | seo-executive-va-01.jpg seo-executive-va-02.jpg seo-executive-va-03.jpg seo-executive-va-04.jpg seo-executive-va-05.jpg  |
| seo-marketing-virtual-assistant | seo-marketing-virtual-assistant-01.jpg  |
| seo-social-media-virtual-assistant | seo-social-media-virtual-assistant-01.jpg  |
| seo-virtual-account-manager | seo-virtual-account-manager-01.jpg  |
| seo-virtual-assistant-for-influencers | seo-virtual-assistant-for-influencers-01.jpg  |
| seo-virtual-customer-service | seo-virtual-customer-service-01.jpg  |
| seo-virtual-sales-assistant | seo-virtual-sales-assistant-01.jpg  |
| story-alif | story-alif-01.jpg story-alif-02.jpg story-alif-03.jpg story-alif-04.jpg story-alif-05.jpg  |
| story-cal-ai | story-cal-ai-01.jpg story-cal-ai-02.jpg story-cal-ai-03.jpg story-cal-ai-04.jpg story-cal-ai-05.jpg  |
| story-pam-hq | story-pam-hq-01.jpg story-pam-hq-02.jpg story-pam-hq-03.jpg story-pam-hq-04.jpg story-pam-hq-05.jpg  |
| success-stories | success-stories-01.jpg success-stories-02.jpg success-stories-03.jpg success-stories-04.jpg success-stories-05.jpg  |
| talent | talent-01.jpg talent-02.jpg talent-03.jpg talent-04.jpg talent-05.jpg  |
| talent-haya-bassiouny | talent-haya-bassiouny-01.jpg talent-haya-bassiouny-02.jpg talent-haya-bassiouny-03.jpg  |
| talent-khulud-hassine | talent-khulud-hassine-01.jpg talent-khulud-hassine-02.jpg talent-khulud-hassine-03.jpg  |
| talent-madina-khazerouni | talent-madina-khazerouni-01.jpg talent-madina-khazerouni-02.jpg talent-madina-khazerouni-03.jpg  |
| talent-merna-islam | talent-merna-islam-01.jpg talent-merna-islam-02.jpg talent-merna-islam-03.jpg  |
| talent-nour-elmansy | talent-nour-elmansy-01.jpg talent-nour-elmansy-02.jpg talent-nour-elmansy-03.jpg  |
| talent-rawan-hamed | talent-rawan-hamed-01.jpg talent-rawan-hamed-02.jpg talent-rawan-hamed-03.jpg  |
| talent-shaymaa-belkacemi | talent-shaymaa-belkacemi-01.jpg talent-shaymaa-belkacemi-02.jpg talent-shaymaa-belkacemi-03.jpg  |
| talent-yussra | talent-yussra-01.jpg talent-yussra-02.jpg talent-yussra-03.jpg  |
| thankyou | thankyou-01.jpg  |

Not captured: the blog posts other than one sample (77 posts share one template), the three Notion legal pages, and `/hi`, `/confirmation`, `/jobs-draft` which are duplicates of `/hello`, `/thankyou`, `/jobs`.
