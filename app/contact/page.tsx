"use client";
import { useState } from "react";

export default function ContactPage() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [form, setForm] = useState({ name: "", email: "", business: "", message: "" });

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error();
      setStatus("sent");
      setForm({ name: "", email: "", business: "", message: "" });
    } catch {
      setStatus("error");
    }
  }

  const set = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm({ ...form, [k]: e.target.value });

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
            <p className="text-cobalt text-lg font-bold mb-4">LET'S WORK TOGETHER</p>
            <h1 className="font-display text-6xl md:text-7xl font-black text-white tracking-tight mb-6 leading-tight">
              Tell me about your project
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl leading-relaxed">
              Quick form, real response. We usually reply within one business day with a concrete answer.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-20 md:py-28 bg-slate-950">
        <div className="wrap">
          <div className="grid gap-12 lg:grid-cols-2">
            {/* FORM */}
            <div className="bg-gradient-to-br from-white/10 to-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-xl">
              {status === "sent" ? (
                <div className="py-12 text-center">
                  <div className="text-5xl mb-4">✓</div>
                  <p className="font-display text-2xl font-bold text-white mb-3">Got it!</p>
                  <p className="text-gray-400 mb-8">
                    Your message is in. We'll get back to you at <strong>{form.email}</strong> — usually within 24 hours.
                  </p>
                  <button onClick={() => setStatus("idle")} className="px-6 py-2 rounded-lg bg-cobalt/20 text-cobalt hover:bg-cobalt/30 transition-all text-sm font-semibold border border-cobalt/30">
                    Send another
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-white mb-2">
                      Your name
                    </label>
                    <input
                      id="name"
                      required
                      value={form.name}
                      onChange={set("name")}
                      placeholder="Priya Sharma"
                      className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-gray-500 focus:border-cobalt/50 focus:outline-none transition-all"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-white mb-2">
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      value={form.email}
                      onChange={set("email")}
                      placeholder="you@company.com"
                      className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-gray-500 focus:border-cobalt/50 focus:outline-none transition-all"
                    />
                  </div>

                  <div>
                    <label htmlFor="business" className="block text-sm font-semibold text-white mb-2">
                      What's your business about?
                    </label>
                    <select
                      id="business"
                      required
                      value={form.business}
                      onChange={set("business")}
                      className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white focus:border-cobalt/50 focus:outline-none transition-all"
                    >
                      <option value="" className="bg-slate-900">Choose one…</option>
                      <option className="bg-slate-900">Add AI agent to my existing website</option>
                      <option className="bg-slate-900">Restaurant / Café / Food</option>
                      <option className="bg-slate-900">Salon / Spa / Wellness</option>
                      <option className="bg-slate-900">Clinic / Healthcare</option>
                      <option className="bg-slate-900">Fintech / SaaS / Startup</option>
                      <option className="bg-slate-900">Trading / Capital Markets</option>
                      <option className="bg-slate-900">Blockchain / Web3</option>
                      <option className="bg-slate-900">E-commerce / Retail</option>
                      <option className="bg-slate-900">Something else</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-white mb-2">
                      Anything else? <span className="font-normal text-gray-500">(optional)</span>
                    </label>
                    <textarea
                      id="message"
                      rows={3}
                      value={form.message}
                      onChange={set("message")}
                      placeholder="Brief overview of what you're building…"
                      className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-gray-500 focus:border-cobalt/50 focus:outline-none transition-all resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={status === "sending"}
                    className="w-full py-3 rounded-lg bg-gradient-to-r from-cobalt to-teal-600 text-white font-bold hover:shadow-xl transition-all disabled:opacity-50"
                  >
                    {status === "sending" ? "Sending…" : "Send message"}
                  </button>

                  {status === "error" && (
                    <p className="text-sm text-orange-500">
                      That didn't go through. Email me directly:{" "}
                      <a className="underline font-semibold" href="mailto:webbslack@gmail.com">
                        webbslack@gmail.com
                      </a>
                    </p>
                  )}
                </form>
              )}
            </div>

            {/* DETAILS */}
            <div className="space-y-6">
              <div className="bg-gradient-to-br from-white/10 to-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-xl">
                <h3 className="font-display text-2xl font-bold text-white mb-6">Quick info</h3>
                <dl className="space-y-6">
                  <div>
                    <dt className="text-xs font-bold text-cobalt mb-1">EMAIL</dt>
                    <dd className="text-white font-semibold">
                      <a href="mailto:webbslack@gmail.com" className="hover:text-cobalt transition-colors">
                        webbslack@gmail.com
                      </a>
                    </dd>
                  </div>
                  <div>
                    <dt className="text-xs font-bold text-cobalt mb-1">WORKING HOURS</dt>
                    <dd className="text-white font-semibold">
                      GMT+5:30 · Flexible with US & EU timezones
                    </dd>
                  </div>
                  <div>
                    <dt className="text-xs font-bold text-cobalt mb-1">ENGAGEMENT TYPES</dt>
                    <dd className="text-white font-semibold">
                      Fixed-scope projects · Monthly retainers · Contract work
                    </dd>
                  </div>
                  <div>
                    <dt className="text-xs font-bold text-cobalt mb-1">RESPONSE TIME</dt>
                    <dd className="text-white font-semibold">
                      Usually within 24 hours
                    </dd>
                  </div>
                </dl>
              </div>

              <div className="bg-gradient-to-br from-orange-500/20 to-orange-500/10 border border-orange-500/30 rounded-2xl p-8">
                <h3 className="font-display text-xl font-bold text-white mb-3">Preferred stack</h3>
                <div className="flex flex-wrap gap-2">
                  {["React", "Next.js", "Node.js", "TypeScript", "PostgreSQL", "Docker", "Kubernetes"].map((tech) => (
                    <span key={tech} className="px-3 py-1.5 rounded-lg bg-orange-500/30 text-orange-200 text-xs font-semibold border border-orange-500/30">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
