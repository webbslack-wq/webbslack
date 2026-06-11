"use client";
import { useState } from "react";
import { caseStudies, domains } from "@/lib/caseStudies";
import CaseCard from "@/components/CaseCard";

export default function WorkPage() {
  const [active, setActive] = useState("All");
  const filtered =
    active === "All" ? caseStudies : caseStudies.filter((c) => c.domain === active);

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
            <p className="text-cobalt text-lg font-bold mb-4">PORTFOLIO</p>
            <h1 className="font-display text-6xl md:text-7xl font-black text-white tracking-tight mb-6 leading-tight">
              Case studies from real work
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl leading-relaxed">
              Problems solved, systems shipped, and metrics that matter. Every project below is a real engagement with documented results.
            </p>
          </div>
        </div>
      </section>

      {/* Work Grid */}
      <section className="py-20 md:py-28 bg-slate-950">
        <div className="wrap">
          {/* Filters */}
          <div className="mb-12 flex flex-wrap gap-3">
            {domains.map((d) => (
              <button
                key={d}
                onClick={() => setActive(d)}
                className={`px-4 py-2 rounded-full font-semibold text-sm transition-all ${
                  active === d
                    ? "bg-cobalt text-white"
                    : "bg-white/10 text-white/70 hover:bg-white/20 border border-white/10"
                }`}
              >
                {d}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((cs, i) => (
              <CaseCard key={cs.slug} cs={cs} index={i} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
