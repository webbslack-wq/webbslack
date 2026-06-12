import Link from "next/link";

type Tier = {
  id?: string;
  flagship?: boolean;
  name: string;
  who: string;
  items: string[];
  mono: string;
  color: string;
};

const tiers: Tier[] = [
  {
    id: "ai-agent",
    flagship: true,
    name: "AI Agent Integration",
    who: "New builds (included) · existing websites on any stack (retrofit)",
    items: [
      "Chat-based admin panel embedded in your dashboard",
      "Make site changes in plain language — text, images, pricing, pages",
      "Preview-and-approve flow: nothing goes live without your sign-off",
      "Works with your current website — WordPress, PHP, React, any stack",
      "Customisable permissions: control exactly what the agent can touch",
      "Audit log of every change, with one-click rollback",
    ],
    mono: "claude-powered · sandboxed · git-native",
    color: "cobalt",
  },
  {
    name: "Business Website",
    who: "Restaurants, salons, clinics, local services",
    items: [
      "5–8 page fast, mobile-first website",
      "Online booking / ordering / enquiry flows",
      "Content you can edit yourself (simple CMS)",
      "Google Business sync, maps & SEO setup",
      "Hosting, SSL & analytics configured",
    ],
    mono: "next.js · cms · seo",
    color: "cobalt",
  },
  {
    name: "Platform / SaaS Build",
    who: "Startups, fintech, marketplaces, internal tools",
    items: [
      "Product architecture & technical roadmap",
      "Full-stack build: React/Next frontend, Node APIs",
      "Auth, roles, payments, dashboards",
      "Real-time features (WebSockets, live data)",
      "Web3 / smart contract integration if needed",
    ],
    mono: "react · node · postgres · web3",
    color: "teal",
  },
  {
    name: "DevOps & Maintenance",
    who: "Anyone whose product must not go down",
    items: [
      "CI/CD pipelines — push to deploy, zero downtime",
      "AWS / GCP setup: containers, CDN, scaling",
      "Monitoring, alerting, centralised logs",
      "Monthly retainer: updates, patches, content changes",
      "Performance & security reviews",
    ],
    mono: "aws · docker · github actions",
    color: "orange",
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 bg-gradient-to-b from-slate-900 to-slate-950 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 right-0 w-96 h-96 bg-cobalt/15 rounded-full blur-3xl" />
          <div className="absolute -bottom-40 left-0 w-96 h-96 bg-orange-500/15 rounded-full blur-3xl" />
        </div>

        <div className="wrap relative z-10">
          <div className="max-w-3xl">
            <p className="text-cobalt text-lg font-bold mb-4">SERVICES</p>
            <h1 className="font-display text-6xl md:text-7xl font-black text-white tracking-tight mb-6 leading-tight">
              Build it. Ship it. Scale it.
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl leading-relaxed">
              Four ways to work together — from a first website to a full product team of one, with an AI agent included in every build. Every engagement starts with a written proposal.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 md:py-28 bg-slate-950">
        <div className="wrap">
          <div className="grid gap-6 lg:grid-cols-2 mb-20">
            {tiers.map((t, i) => (
              <div
                key={t.name}
                id={t.id}
                className={`group relative overflow-hidden rounded-2xl p-8 bg-gradient-to-br backdrop-blur-xl flex flex-col scroll-mt-28 transition-all duration-300 hover:shadow-xl ${
                  t.flagship
                    ? "from-cobalt/15 to-white/5 border border-cobalt/50 hover:border-cobalt/80"
                    : "from-white/10 to-white/5 border border-white/10 hover:border-white/30"
                }`}
              >
                <div className="mb-6">
                  <div className="inline-flex items-center gap-2 mb-4">
                    {t.flagship ? (
                      <span className="font-mono text-[10px] tracking-[0.18em] text-white bg-cobalt px-2 py-0.5 rounded">FLAGSHIP</span>
                    ) : (
                      <span className="text-cobalt text-xs font-bold">TIER {i}</span>
                    )}
                    <span className="text-xs text-gray-500">{t.mono}</span>
                  </div>
                  <h2 className="font-display text-2xl font-bold text-white">{t.name}</h2>
                  <p className="mt-2 text-sm text-gray-400">{t.who}</p>
                </div>

                <ul className="space-y-3 flex-1 mb-8">
                  {t.items.map((item) => (
                    <li key={item} className="flex gap-3 text-sm text-gray-300 leading-relaxed">
                      <svg className="w-4 h-4 text-cobalt shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>

                <Link href="/contact" className="w-full px-4 py-2 rounded-lg bg-cobalt/20 text-cobalt hover:bg-cobalt/30 transition-all text-center text-sm font-semibold border border-cobalt/30">
                  Discuss this
                </Link>
              </div>
            ))}
          </div>

          {/* FAQ */}
          <section className="max-w-3xl">
            <p className="text-cobalt text-lg font-bold mb-8">STRAIGHT ANSWERS</p>
            <div className="space-y-4">
              {[
                ["Is the AI agent safe? Can it break my site?", "No. The agent works in an isolated copy of your site, and every change must pass an automated build check before you see it. You review a preview and approve it before anything goes live — failed or rejected changes never reach the real website, and any published change can be rolled back in one click."],
                ["How does pricing work?", "Fixed price for defined scopes (websites, specific features), or a monthly retainer for ongoing work. You'll always know the number before anything starts — it's in the proposal."],
                ["How long does a business website take?", "Typically 3–6 weeks from kickoff to launch, depending on booking/ordering complexity. Platform builds are scoped individually."],
                ["Do you maintain what you build?", "Yes — and we prefer to. A site is a living thing: hours change, menus change, security patches land. Retainers cover all of it."],
                ["Do you work with existing teams?", "Often. We've led teams of 6–10 engineers and slot comfortably into existing codebases, sprint cycles and timezones."],
              ].map(([q, a]) => (
                <div key={q} className="rounded-xl p-6 bg-white/10 border border-white/10 hover:border-white/20 transition-all">
                  <h3 className="font-display font-bold text-white text-lg">{q}</h3>
                  <p className="mt-3 text-sm text-gray-400 leading-relaxed">{a}</p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </section>
    </>
  );
}
