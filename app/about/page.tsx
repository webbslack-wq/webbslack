import Link from "next/link";

const skills = [
  { group: "Frontend", items: ["React", "Next.js 13+", "TypeScript", "Vue.js", "Angular", "Tailwind CSS"] },
  { group: "Backend", items: ["Node.js", "Express", "GraphQL", "REST APIs", "Python / FastAPI"] },
  { group: "Mobile", items: ["React Native", "Flutter"] },
  { group: "Data", items: ["PostgreSQL", "MongoDB", "Redis", "TimescaleDB"] },
  { group: "Cloud & DevOps", items: ["AWS (ECS, Lambda, S3, CloudFront)", "GCP (GKE, CloudSQL)", "Docker", "Nginx", "GitHub Actions", "Ansible", "ELK"] },
  { group: "Web3", items: ["Solidity", "Ethereum", "Truffle", "Cosmos", "Hyperledger"] },
  { group: "Quality", items: ["Jest", "Cypress", "Code review culture"] },
];

const timeline = [
  {
    period: "2019 — Present",
    role: "Technical Lead — Full Stack",
    org: "India-based Product Startup (SaaS / Fintech) · Noida / Remote",
    points: [
      "Architected and led full-stack delivery across 20+ concurrent product modules.",
      "Designed escrow smart contracts, NFT minting and crypto wallet flows on Ethereum.",
      "Managed AWS (ECS, Fargate, Lambda) and GCP infrastructure with full CI/CD.",
      "Mentored 6–10 engineers; owned sprint planning, releases and client communication.",
    ],
  },
  {
    period: "2018 — 2019",
    role: "JavaScript Full Stack Developer",
    org: "US-based AgriTech Startup · Remote Contract",
    points: [
      "Built Angular web apps and Node/Express APIs for agricultural field operations.",
      "Delivered role-based admin dashboards with US stakeholders across timezones.",
    ],
  },
  {
    period: "2016 — 2017",
    role: "Freelance Web Developer",
    org: "Independent · Healthcare, e-commerce, B2B clients",
    points: [
      "Shipped WordPress, PHP and CodeIgniter builds including a full sales CRM.",
      "Learned the freelance fundamentals: scoping, delivery, and keeping clients.",
    ],
  },
];

export default function AboutPage() {
  return (
    <div className="wrap py-16 md:py-20">
      <p className="eyebrow">About</p>
      <h1 className="mt-3 font-display text-4xl md:text-5xl font-extrabold tracking-tight max-w-3xl">
        Ten years of shipping. Still hands-on keyboard.
      </h1>
      <div className="mt-6 max-w-2xl space-y-4 text-lg leading-relaxed text-muted">
        <p>
          We're webbslack — a full-stack technical lead and architect. We've spent 15+ years
          building production software that scales: from early-stage MVPs to enterprise systems
          serving millions of users. We work across the entire stack with no silos.
        </p>
        <p>
          The throughline: We build things businesses depend on, and we stay around to
          keep them running. Frontend, backend, mobile, smart contracts, cloud
          infrastructure — one person who understands the whole machine, not a
          relay race of specialists.
        </p>
        <p>
          Focused on creating systems that are performant, maintainable, and resilient.
          Every project we touch becomes a reference architecture.
        </p>
      </div>

      {/* Timeline */}
      <section className="mt-16">
        <p className="eyebrow">Experience</p>
        <ol className="mt-6 space-y-6 max-w-3xl">
          {timeline.map((t) => (
            <li key={t.period} className="bg-surface border border-line rounded-lg p-6 shadow-card">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="font-display text-lg font-bold">{t.role}</h3>
                <span className="dossier-line">{t.period}</span>
              </div>
              <p className="mt-1 text-sm text-muted">{t.org}</p>
              <ul className="mt-4 space-y-2">
                {t.points.map((p) => (
                  <li key={p} className="flex gap-2.5 text-sm leading-relaxed">
                    <span className="text-cobalt shrink-0">—</span>
                    {p}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ol>
      </section>

      {/* Skills */}
      <section className="mt-16">
        <p className="eyebrow">Tooling</p>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((s) => (
            <div key={s.group} className="bg-surface border border-line rounded-lg p-5">
              <p className="dossier-line mb-3">{s.group.toLowerCase()}</p>
              <div className="flex flex-wrap gap-1.5">
                {s.items.map((i) => (
                  <span key={i} className="font-mono text-[11px] bg-canvas border border-line rounded px-2 py-1">
                    {i}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <div className="mt-16">
        <Link href="/contact" className="btn-primary">
          Work with me
        </Link>
      </div>
    </div>
  );
}
