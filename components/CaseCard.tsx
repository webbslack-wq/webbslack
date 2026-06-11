import Link from "next/link";
import type { CaseStudy } from "@/lib/caseStudies";

const tagColors: Record<string, string> = {
  RESTAURANT: "bg-amber-100 text-amber-800",
  SALON: "bg-rose-100 text-rose-800",
  FINTECH: "bg-emerald-100 text-emerald-800",
  BLOCKCHAIN: "bg-violet-100 text-violet-800",
  TRADING: "bg-sky-100 text-sky-800",
  DEVOPS: "bg-orange-100 text-orange-800",
  HEALTHCARE: "bg-teal-100 text-teal-800",
  MARKETPLACE: "bg-indigo-100 text-indigo-800",
  ANALYTICS: "bg-slate-200 text-slate-800",
};

const domainIcons: Record<string, string> = {
  RESTAURANT: "🍽️",
  SALON: "✨",
  FINTECH: "💳",
  BLOCKCHAIN: "⛓️",
  TRADING: "📈",
  DEVOPS: "🚀",
  HEALTHCARE: "🏥",
  MARKETPLACE: "🤝",
  ANALYTICS: "📊",
};

export default function CaseCard({ cs, index }: { cs: CaseStudy; index: number }) {
  return (
    <Link
      href={`/work/${cs.slug}`}
      className="group block rounded-2xl border border-slate-200 overflow-hidden hover:border-cobalt transition-all duration-300 hover:shadow-xl hover:shadow-cobalt/30 bg-white flex flex-col h-full"
    >
      {/* Icon Section */}
      <div className={`h-48 bg-gradient-to-br ${cs.imageColor || "from-slate-400 to-gray-600"} relative overflow-hidden flex items-center justify-center group-hover:scale-105 transition-transform duration-300`}>
        <div className="absolute inset-0 opacity-20">
          <svg className="w-full h-full" viewBox="0 0 100 100">
            <circle cx="20" cy="20" r="15" fill="white" opacity="0.3" />
            <circle cx="80" cy="80" r="20" fill="white" opacity="0.2" />
            <rect x="40" y="30" width="30" height="40" fill="white" opacity="0.15" />
            <path d="M 10 50 Q 50 70 90 50" stroke="white" strokeWidth="2" fill="none" opacity="0.2" />
          </svg>
        </div>
        <div className="text-6xl group-hover:scale-110 transition-transform duration-300">
          {domainIcons[cs.domainTag] || "💼"}
        </div>
      </div>

      {/* Content Section */}
      <div className="p-6 flex flex-col flex-1">
        {/* Header */}
        <div className="flex items-center justify-between gap-2 mb-4">
          <span className="text-xs font-bold text-cobalt">
            FILE/{String(index + 1).padStart(2, "0")} · {cs.year}
          </span>
          <span
            className={`font-mono text-[10px] tracking-widest px-2 py-1 rounded-full ${
              tagColors[cs.domainTag] || "bg-slate-100 text-slate-700"
            }`}
          >
            {cs.domainTag}
          </span>
        </div>

        {/* Title & Summary */}
        <h3 className="font-display text-lg font-bold text-slate-900 leading-snug group-hover:text-cobalt transition-colors mb-3">
          {cs.title}
        </h3>
        <p className="text-sm text-slate-600 leading-relaxed line-clamp-2 mb-4 flex-1">
          {cs.summary}
        </p>

        {/* Stack & Results */}
        <div className="space-y-2 border-t border-slate-200 pt-4">
          <div className="flex gap-2">
            <span className="text-xs font-semibold text-cobalt shrink-0">STACK</span>
            <span className="text-xs text-slate-600 truncate">
              {cs.stack.slice(0, 3).join(" · ")}
            </span>
          </div>
          <div className="flex gap-2">
            <span className="text-xs font-semibold text-cobalt shrink-0">RESULT</span>
            <span className="text-xs font-medium text-orange-600">
              {cs.outcomes[0].metric} {cs.outcomes[0].label.toLowerCase()}
            </span>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-cobalt group-hover:gap-3 transition-all">
          Read case study
          <svg className="w-4 h-4 transition-transform group-hover:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </div>
      </div>
    </Link>
  );
}
