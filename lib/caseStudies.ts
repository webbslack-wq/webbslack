export type CaseStudy = {
  slug: string;
  title: string;
  domain: string;
  domainTag: string;
  client: string;
  timeline: string;
  year: string;
  summary: string;
  problem: string;
  approach: string[];
  stack: string[];
  outcomes: { metric: string; label: string }[];
  services: string[];
  featured?: boolean;
  imageColor?: string;
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "restaurant-ordering-platform",
    title: "Online Ordering & Reservations for a Multi-Outlet Restaurant",
    domain: "Restaurant & Hospitality",
    domainTag: "RESTAURANT",
    client: "Multi-outlet restaurant group · Delhi NCR",
    timeline: "5 weeks",
    year: "2024",
    summary:
      "A three-outlet restaurant group was losing orders to phone tag and a Google listing with outdated hours. We built a fast ordering site with table reservations, a live menu the staff can edit themselves, and outlet-wise pickup routing.",
    problem:
      "Reviews repeatedly mentioned the same issues: no menu online, wrong hours on Google, and customers calling three times to book a table. Each outlet ran its own WhatsApp ordering, which meant missed messages during dinner rush and zero order history.",
    approach: [
      "Built a Next.js storefront with server-rendered menu pages — fast on 4G, indexed by Google, with structured data so dishes and hours show up in search.",
      "Added a reservation flow with outlet selection, party size, and time slots synced to each outlet's actual capacity — no double bookings.",
      "Gave staff a simple admin panel to update menu items, prices, and hours in under a minute. Changes go live instantly across all pages and the Google Business sync.",
      "Order notifications route to the right outlet via WhatsApp Business API, with a daily summary email to the owner.",
    ],
    stack: ["Next.js", "Node.js", "PostgreSQL", "Tailwind CSS", "WhatsApp Business API", "Vercel"],
    outcomes: [
      { metric: "2.1s → 0.6s", label: "Mobile page load" },
      { metric: "38%", label: "Of reservations now come online" },
      { metric: "0", label: "Wrong-hours complaints since launch" },
    ],
    services: ["Web Development", "UI/UX Design", "SEO Setup", "Maintenance"],
    featured: true,
    imageColor: "from-amber-400 to-orange-600",
  },
  {
    slug: "salon-booking-system",
    title: "Booking & Stylist Management for a Premium Salon",
    domain: "Salon & Wellness",
    domainTag: "SALON",
    client: "Premium unisex salon · South Delhi",
    timeline: "4 weeks",
    year: "2024",
    summary:
      "A high-end salon ran entirely on phone bookings and a paper diary. We shipped a booking site where clients pick their stylist, service, and slot — and the salon cut no-shows with automated reminders.",
    problem:
      "The front desk spent hours daily on booking calls. Clients couldn't see stylist availability, prices weren't published anywhere, and no-shows ran around 20% with no reminder system in place.",
    approach: [
      "Designed a booking flow around how clients actually choose: stylist first, then service, then time. Each stylist has a profile with their specialisations.",
      "Published the full service menu with transparent pricing — the single most requested item in their reviews.",
      "Automated SMS + email reminders 24h and 2h before appointments, with one-tap reschedule.",
      "Built a back-office calendar where the manager drags appointments between stylists and blocks leave.",
    ],
    stack: ["Next.js", "React", "Node.js", "MongoDB", "Twilio", "Razorpay"],
    outcomes: [
      { metric: "20% → 6%", label: "No-show rate after reminders" },
      { metric: "60%", label: "Bookings moved online in 3 months" },
      { metric: "4.2 → 4.6★", label: "Google rating trend post-launch" },
    ],
    services: ["Web Development", "Booking System", "Payment Integration"],
    featured: true,
    imageColor: "from-rose-400 to-pink-600",
  },
  {
    slug: "fintech-saas-platform",
    title: "SaaS Fintech Platform — Payments, Escrow & ERP Integration",
    domain: "Fintech",
    domainTag: "FINTECH",
    client: "Product startup · SaaS / Fintech",
    timeline: "Ongoing · 5+ years",
    year: "2019–present",
    summary:
      "As Technical Lead, architected and delivered full-stack modules across a fintech SaaS product — payment flows, escrow logic, role-based dashboards, and a Microsoft Dynamics Navision ERP integration that removed manual reconciliation.",
    problem:
      "The product needed to scale from a single module to 20+ concurrent product modules while keeping payment integrity, audit trails, and enterprise ERP sync — with a team that had to grow alongside the codebase.",
    approach: [
      "Defined the frontend architecture on React/Next.js with TypeScript, shared component libraries, and strict API contracts across modules.",
      "Designed escrow and settlement logic with full state machines — every rupee traceable through pending, held, released, and reconciled states.",
      "Integrated Microsoft Dynamics Navision ERP via a structured API layer, replacing spreadsheet-based reconciliation between finance and operations.",
      "Established CI/CD on GitHub Actions, AWS ECS/Fargate deployments, and led a team of 6–10 engineers through sprint planning and release management.",
    ],
    stack: ["React", "Next.js", "Node.js", "TypeScript", "PostgreSQL", "AWS ECS / Fargate", "Dynamics NAV API"],
    outcomes: [
      { metric: "20+", label: "Product modules shipped" },
      { metric: "6–10", label: "Engineers led" },
      { metric: "~90%", label: "Reduction in manual reconciliation effort" },
    ],
    services: ["Architecture", "Full-Stack Development", "Team Leadership", "DevOps"],
    featured: true,
    imageColor: "from-emerald-400 to-teal-600",
  },
  {
    slug: "nft-ticketing-marketplace",
    title: "NFT Ticketing & Marketplace with On-Chain Escrow",
    domain: "Blockchain / Web3",
    domainTag: "BLOCKCHAIN",
    client: "Events & ticketing venture",
    timeline: "14 weeks",
    year: "2022",
    summary:
      "Smart ticketing platform minting event tickets as NFTs on Ethereum, with custom escrow smart contracts securing peer-to-peer transfers and resales — killing ticket fraud and scalper duplication at the protocol level.",
    problem:
      "Event organisers were losing revenue and trust to counterfeit tickets and uncontrolled resale. A ticket needed to be provably unique, transferable under organiser-set rules, and verifiable at the gate in under two seconds.",
    approach: [
      "Wrote Solidity contracts (ERC-721) for ticket minting with organiser-configurable resale royalty and price caps.",
      "Built on-chain/off-chain escrow: funds release only when ticket transfer is confirmed on-chain, with a dispute window.",
      "QR-based gate verification reads the chain state — no central database to spoof.",
      "Handled the hard UX problem: async transaction confirmation with optimistic UI, gas estimation, and graceful failure states for non-crypto-native buyers.",
    ],
    stack: ["Solidity", "Truffle", "Ethereum", "React", "Node.js", "Ethers.js"],
    outcomes: [
      { metric: "ERC-721", label: "Standards-compliant ticketing" },
      { metric: "<2s", label: "Gate verification time" },
      { metric: "100%", label: "Counterfeit elimination by design" },
    ],
    services: ["Smart Contracts", "Web3 Frontend", "Escrow Architecture"],
    featured: true,
    imageColor: "from-violet-400 to-purple-600",
  },
  {
    slug: "day-trading-analytics-terminal",
    title: "Day Trading Analytics Terminal — Real-Time Market Dashboard",
    domain: "Trading & Capital Markets",
    domainTag: "TRADING",
    client: "Proprietary trading desk (confidential)",
    timeline: "10 weeks",
    year: "2023",
    summary:
      "A real-time trading dashboard streaming live tick data over WebSockets — candlestick charts, watchlists, P&L tracking, and configurable alerts — built for a small prop desk that had outgrown spreadsheet-based tracking.",
    problem:
      "Traders were juggling broker terminals, Excel P&L sheets, and Telegram alerts. They needed one screen: live prices, their open positions, intraday P&L, and rule-based alerts (price cross, volume spike, % move) — with zero perceptible lag.",
    approach: [
      "Built a WebSocket data layer fanning out live tick streams to the client with per-symbol subscriptions — only the data each screen needs.",
      "Rendered candlestick and depth charts with canvas-based charting tuned for 60fps updates on watchlists of 40+ symbols.",
      "Designed an alert engine: traders define rules in plain controls (\"alert me when NIFTY crosses X\"), evaluated server-side, delivered via push and sound.",
      "Intraday P&L computed live against positions, with end-of-day reports exported automatically.",
    ],
    stack: ["React", "Node.js", "WebSockets", "Redis", "TimescaleDB", "Docker"],
    outcomes: [
      { metric: "<100ms", label: "Tick-to-screen latency" },
      { metric: "40+", label: "Symbols streamed concurrently" },
      { metric: "3 tools → 1", label: "Consolidated trading workflow" },
    ],
    services: ["Real-Time Systems", "Dashboard UI", "Data Engineering"],
    featured: true,
    imageColor: "from-sky-400 to-blue-600",
  },
  {
    slug: "aws-devops-migration",
    title: "DevOps Overhaul — From Manual Deploys to Zero-Downtime CI/CD",
    domain: "DevOps & Cloud Infrastructure",
    domainTag: "DEVOPS",
    client: "SaaS product company · 8 services",
    timeline: "6 weeks",
    year: "2023",
    summary:
      "Migrated a product company from SSH-and-pray deployments to a fully automated pipeline: GitHub Actions, AWS ECS Fargate, blue-green deploys, centralised logging, and monitoring that pages before customers notice.",
    problem:
      "Every release was a Friday-evening ritual of manual SSH deploys with 15–30 minutes of downtime. No rollback plan, no centralised logs, and outages were discovered by customer complaints rather than alerts.",
    approach: [
      "Containerised all 8 services with Docker and moved them to AWS ECS Fargate — no servers to patch.",
      "Built GitHub Actions pipelines: test → build → push → blue-green deploy. A failed health check rolls back automatically.",
      "Centralised logs into an ELK stack and wired Nagios-style alerting to Slack — error spikes page the on-call before users tweet about it.",
      "Put Nginx config, infrastructure definitions, and Ansible playbooks in version control. The whole environment is reproducible.",
    ],
    stack: ["AWS ECS / Fargate", "Docker", "GitHub Actions", "Nginx", "Ansible", "ELK Stack", "CloudFront"],
    outcomes: [
      { metric: "30min → 0", label: "Deployment downtime" },
      { metric: "12/day", label: "Deploys possible vs 1/week before" },
      { metric: "<5min", label: "Mean time to detect incidents" },
    ],
    services: ["Cloud Migration", "CI/CD", "Monitoring", "Infrastructure as Code"],
    featured: true,
    imageColor: "from-orange-400 to-red-600",
  },
  {
    slug: "healthcare-medication-app",
    title: "Patient Medication Manager — Cross-Platform Health App",
    domain: "Healthcare",
    domainTag: "HEALTHCARE",
    client: "Healthcare startup",
    timeline: "9 weeks",
    year: "2021",
    summary:
      "A patient-facing mobile app for storing medical records and tracking daily medications, with intelligent push reminders that adapt to dose schedules — built in Flutter with a GraphQL backend.",
    problem:
      "Patients managing chronic conditions missed doses and lost paper prescriptions. The product needed offline-capable record storage and reminders reliable enough to be medically useful.",
    approach: [
      "Built the app in Flutter for one codebase across iOS and Android, with offline-first local storage syncing when connectivity returns.",
      "Modelled complex dose schedules (alternate days, tapering, multiple daily doses) and generated reminder plans from them automatically.",
      "Used Hasura GraphQL over PostgreSQL for a clean, permissioned API — patients see only their own records.",
    ],
    stack: ["Flutter", "Node.js", "Hasura GraphQL", "PostgreSQL", "Firebase Cloud Messaging"],
    outcomes: [
      { metric: "iOS + Android", label: "Single codebase" },
      { metric: "Offline-first", label: "Records available without network" },
      { metric: "Schedule-aware", label: "Adaptive dose reminders" },
    ],
    services: ["Mobile Development", "API Design", "Push Infrastructure"],
    imageColor: "from-teal-400 to-cyan-600",
  },
  {
    slug: "talent-matching-platform",
    title: "Global Talent Matching Platform — Verified Recruitment Marketplace",
    domain: "HR Tech / Marketplace",
    domainTag: "MARKETPLACE",
    client: "Recruitment intermediary · global",
    timeline: "16 weeks",
    year: "2022",
    summary:
      "A recruitment platform connecting double-verified candidates with enterprise clients — structured recruiter workflows, automated matching, and role-based dashboards, deployed on Google Kubernetes Engine.",
    problem:
      "Enterprise clients wasted interview cycles on unverified candidates. The platform needed a structured verification pipeline, recruiter tooling, and matching logic that surfaces genuinely relevant candidates rather than keyword spam.",
    approach: [
      "Built candidate and recruiter portals in React/Redux with role-based access — separate workflows for screening, verification, and client presentation.",
      "Implemented a two-stage verification pipeline with document checks and structured interview scoring stored against each profile.",
      "Matching engine ranks candidates on weighted skill, experience, and availability signals rather than raw keyword overlap.",
      "Deployed on GCP GKE with CloudSQL and Azure DevOps pipelines for the enterprise client's compliance requirements.",
    ],
    stack: ["React", "Redux", "Node.js", "PostgreSQL", "GCP GKE", "Azure DevOps"],
    outcomes: [
      { metric: "2-stage", label: "Candidate verification pipeline" },
      { metric: "Enterprise", label: "Compliance-grade deployment" },
      { metric: "Global", label: "Cross-timezone client base" },
    ],
    services: ["Platform Development", "Matching Systems", "Cloud Deployment"],
    imageColor: "from-indigo-400 to-blue-600",
  },
  {
    slug: "document-intelligence-analytics",
    title: "Data Analytics Platform with Document Q&A",
    domain: "Data & Analytics",
    domainTag: "ANALYTICS",
    client: "Product startup",
    timeline: "12 weeks",
    year: "2023",
    summary:
      "An analytics platform where teams upload CSV/XLSX data, run multi-algorithm statistical analysis, and query documents in plain language — practical machine intelligence applied to everyday business data, without the buzzword overhead.",
    problem:
      "Business teams had data in spreadsheets and questions in their heads, with analysts as a bottleneck in between. They needed self-serve analysis that didn't require SQL or a data science degree.",
    approach: [
      "Built upload-and-analyse flows for tabular data with automated profiling: distributions, correlations, and outliers surfaced on upload.",
      "Wired multi-algorithm processing — regression, XGBoost, decision trees — behind a simple 'what do you want to predict?' interface.",
      "Added plain-language document Q&A over uploaded PDFs so policy and report lookups stopped being a search-and-skim exercise.",
    ],
    stack: ["Next.js 13", "FastAPI", "Python", "PostgreSQL", "Pinecone"],
    outcomes: [
      { metric: "Self-serve", label: "Analysis without an analyst" },
      { metric: "CSV/XLSX/PDF", label: "Formats handled end-to-end" },
      { metric: "Minutes", label: "From upload to insight" },
    ],
    services: ["Full-Stack Development", "Data Pipelines", "Applied ML"],
    imageColor: "from-slate-400 to-gray-600",
  },
];

export const domains = [
  "All",
  ...Array.from(new Set(caseStudies.map((c) => c.domain))),
];

export function getCaseStudy(slug: string) {
  return caseStudies.find((c) => c.slug === slug);
}
