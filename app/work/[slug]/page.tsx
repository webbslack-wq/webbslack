import Link from "next/link";
import { notFound } from "next/navigation";
import { caseStudies, getCaseStudy } from "@/lib/caseStudies";
import { getScreenshots } from "@/components/CaseStudyScreenshots";

export function generateStaticParams() {
  return caseStudies.map((c) => ({ slug: c.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const cs = getCaseStudy(params.slug);
  return { title: cs ? `${cs.title} — webbslack` : "Case Study — webbslack" };
}

export default function CaseStudyPage({ params }: { params: { slug: string } }) {
  const cs = getCaseStudy(params.slug);
  if (!cs) notFound();

  const idx = caseStudies.findIndex((c) => c.slug === cs.slug);
  const next = caseStudies[(idx + 1) % caseStudies.length];

  return (
    <article className="wrap py-16 md:py-20 bg-white">
        {/* Dossier header */}
        <div className="flex items-center justify-between flex-wrap gap-2">
          <Link href="/work" className="text-cobalt hover:text-teal-400 text-sm font-semibold transition-colors">
            ← back to all files
          </Link>
          <span className="text-xs font-semibold text-gray-600">
            file/{String(idx + 1).padStart(2, "0")} · {cs.year}
          </span>
        </div>

        <h1 className="mt-6 font-display text-4xl md:text-6xl font-extrabold tracking-tight max-w-4xl leading-[1.1] text-slate-900">
          {cs.title}
        </h1>

        {/* Spec table */}
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {[
            ["domain", cs.domain],
            ["client", cs.client],
            ["timeline", cs.timeline],
            ["services", cs.services.join(" · ")],
          ].map(([k, v]) => (
            <div key={k} className="bg-slate-50 border border-slate-200 rounded-lg p-4">
              <dt className="text-xs font-bold text-cobalt uppercase">{k}</dt>
              <dd className="mt-2 text-sm font-medium text-slate-900">{v}</dd>
            </div>
          ))}
        </div>

        <div className="mt-16 grid gap-12 lg:grid-cols-[1fr_320px]">
          <div className="space-y-12 max-w-3xl">
            <section>
              <p className="text-cobalt text-lg font-bold mb-3">OVERVIEW</p>
              <p className="text-lg leading-relaxed text-slate-700">{cs.summary}</p>
            </section>

            <section>
              <p className="text-cobalt text-lg font-bold mb-3">THE PROBLEM</p>
              <p className="leading-relaxed text-slate-700">{cs.problem}</p>
            </section>

            <section>
              <p className="text-cobalt text-lg font-bold mb-6">WHAT WE BUILT</p>
              <ul className="space-y-6">
                {cs.approach.map((a, i) => (
                  <li key={i} className="flex gap-4">
                    <span className="text-cobalt font-bold shrink-0 text-lg">
                      {String(i + 1).padStart(2, "0")}.
                    </span>
                    <p className="leading-relaxed text-slate-700">{a}</p>
                  </li>
                ))}
              </ul>
            </section>

            {/* Screenshots */}
            <section className="mt-12">
              <p className="text-cobalt text-lg font-bold mb-6">PRODUCT SHOWCASE</p>
              <div className="flex gap-4 justify-start">
                {getScreenshots(cs.domainTag).map((screenshot, idx) => (
                  <div key={idx} className="flex-shrink-0 w-48 bg-gray-50 rounded-lg overflow-hidden shadow-md">
                    {screenshot}
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <aside className="space-y-6 lg:sticky lg:top-24 self-start">
            <div className="bg-slate-50 border border-slate-200 rounded-lg p-6">
              <p className="text-cobalt text-sm font-bold mb-4 uppercase">Outcomes</p>
              <div className="space-y-4">
                {cs.outcomes.map((o) => (
                  <div key={o.label}>
                    <p className="font-display text-3xl font-extrabold text-orange-600">{o.metric}</p>
                    <p className="text-sm text-slate-600 mt-1">{o.label}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-slate-50 border border-slate-200 rounded-lg p-6">
              <p className="text-cobalt text-sm font-bold mb-3 uppercase">Stack</p>
              <div className="flex flex-wrap gap-2">
                {cs.stack.map((s) => (
                  <span key={s} className="text-xs font-semibold bg-cobalt text-white px-3 py-1.5 rounded-full">
                    {s}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-cobalt to-teal-600 rounded-lg p-6">
              <p className="font-display font-bold text-white">Have something in mind?</p>
              <p className="mt-2 text-sm text-white/90">
                Tell us about your project and we'll map out what we'd build.
              </p>
              <Link href="/contact" className="mt-4 w-full inline-flex items-center justify-center bg-white/20 hover:bg-white/30 text-white font-semibold py-2 rounded-lg transition-all">
                Request a callback
              </Link>
            </div>
          </aside>
        </div>

        {/* Next file */}
        <Link
          href={`/work/${next.slug}`}
          className="mt-20 block bg-slate-50 border border-slate-200 rounded-lg p-8 hover:border-cobalt transition-all group"
        >
          <p className="text-sm font-semibold text-cobalt">next file →</p>
          <p className="mt-3 font-display text-2xl font-bold text-slate-900 group-hover:text-cobalt transition-colors">
            {next.title}
          </p>
        </Link>
      </article>
  );
}
