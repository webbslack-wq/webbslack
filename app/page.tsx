"use client";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export default function HomePage() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const tailRef = useRef<HTMLDivElement>(null);
  const [isClicking, setIsClicking] = useState(false);
  const mousePos = useRef({ x: 0, y: 0 });
  const tailPos = useRef([{ x: 0, y: 0 }]);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      mousePos.current = { x: e.clientX, y: e.clientY };

      if (cursorRef.current) {
        cursorRef.current.style.left = e.clientX + "px";
        cursorRef.current.style.top = e.clientY + "px";
      }

      // Create tail trail effect
      tailPos.current.unshift({ x: e.clientX, y: e.clientY });
      if (tailPos.current.length > 15) {
        tailPos.current.pop();
      }

      if (tailRef.current) {
        tailRef.current.innerHTML = "";
        tailPos.current.forEach((pos, idx) => {
          const opacity = 1 - idx / tailPos.current.length;
          const size = 4 - (idx / tailPos.current.length) * 3;
          const dot = document.createElement("div");
          dot.style.position = "fixed";
          dot.style.left = pos.x + "px";
          dot.style.top = pos.y + "px";
          dot.style.width = size + "px";
          dot.style.height = size + "px";
          dot.style.borderRadius = "50%";
          dot.style.backgroundColor = "#2742f5";
          dot.style.opacity = String(opacity * 0.4);
          dot.style.pointerEvents = "none";
          dot.style.transform = "translate(-50%, -50%)";
          dot.style.boxShadow = `0 0 ${size * 1.5}px rgba(39, 66, 245, ${opacity * 0.3})`;
          tailRef.current?.appendChild(dot);
        });
      }
    };

    const handleMouseDown = () => {
      setIsClicking(true);
      if (cursorRef.current) {
        cursorRef.current.classList.add("scale-75");
      }
    };

    const handleMouseUp = () => {
      setIsClicking(false);
      if (cursorRef.current) {
        cursorRef.current.classList.remove("scale-75");
      }
    };

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, []);

  return (
    <>
      {/* Custom cursor with click animation */}
      <div
        ref={cursorRef}
        className="pointer-events-none fixed w-5 h-5 border-2 border-cobalt rounded-full transform -translate-x-1/2 -translate-y-1/2 z-50 opacity-60 hidden md:block transition-transform duration-75 shadow-lg shadow-cobalt/30"
      />

      {/* Cursor tail trail effect */}
      <div ref={tailRef} className="pointer-events-none fixed inset-0 z-40 hidden md:block" />

      {/* Hero Section - Modern & Bold */}
      <section className="relative min-h-screen overflow-hidden bg-gradient-to-b from-slate-900 to-slate-950 pt-32 pb-24 md:pb-40">
        {/* Animated background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 right-0 w-96 h-96 bg-cobalt/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute -bottom-40 left-0 w-96 h-96 bg-orange-500/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
          <div className="absolute top-1/2 left-1/2 w-72 h-72 bg-teal-500/12 rounded-full blur-3xl" />
        </div>

        <div className="wrap relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-start md:items-center">
            {/* Left column - headline and CTA */}
            <div className="space-y-12">
            {/* Main headline */}
            <div>
              <div className="inline-block mb-8 px-4 py-2 rounded-full border border-cobalt/30 bg-cobalt/5 backdrop-blur-md">
                <p className="text-sm font-semibold text-cobalt">15+ years of excellence</p>
              </div>

              <h1 className="font-display text-7xl md:text-8xl font-black text-white leading-[1.1] tracking-tighter mb-6">
                Build faster. <br />
                <span className="bg-gradient-to-r from-cobalt via-teal-400 to-green-400 text-transparent bg-clip-text">
                  Scale smarter.
                </span>
              </h1>

              <p className="text-xl md:text-2xl text-gray-400 max-w-2xl font-light leading-relaxed">
                Full-stack architect designing systems that power millions. From React to Kubernetes, we ship production-grade software that scales.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 items-center">
              <Link
                href="/work"
                className="group relative px-8 py-4 bg-gradient-to-r from-cobalt to-teal-600 text-white font-bold rounded-full overflow-hidden transition-all hover:shadow-2xl hover:shadow-cobalt/50 cursor-none"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-teal-600 to-cobalt translate-x-full group-hover:translate-x-0 transition-transform duration-500" />
                <span className="relative flex items-center gap-2">
                  Explore my work
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
              </Link>

              <Link
                href="/contact"
                className="px-8 py-4 border border-white/20 text-white font-bold rounded-full hover:bg-white/10 hover:border-white/40 transition-all backdrop-blur-sm cursor-none"
              >
                Let's connect
              </Link>
            </div>

            {/* Stats - Modern layout */}
            <div className="mt-20 grid grid-cols-3 gap-8 max-w-2xl">
              <div className="group cursor-none">
                <p className="text-4xl md:text-5xl font-black text-cobalt group-hover:text-teal-400 transition-colors">50+</p>
                <p className="text-gray-400 text-sm mt-2">Products Shipped</p>
              </div>
              <div className="group cursor-none">
                <p className="text-4xl md:text-5xl font-black text-cobalt group-hover:text-teal-400 transition-colors">200M+</p>
                <p className="text-gray-400 text-sm mt-2">Users Impacted</p>
              </div>
              <div className="group cursor-none">
                <p className="text-4xl md:text-5xl font-black text-cobalt group-hover:text-teal-400 transition-colors">99.99%</p>
                <p className="text-gray-400 text-sm mt-2">Uptime Track</p>
              </div>
            </div>
            </div>

            {/* Right column - SVG visualization */}
            <div className="hidden md:flex items-center justify-center relative h-full -mt-20 -mb-20">
              <div className="absolute inset-0 bg-gradient-to-br from-cobalt/5 to-teal-500/5 rounded-3xl blur-2xl" />
              <svg className="relative w-full h-full" viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg">
                {/* Grid background */}
                <defs>
                  <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                    <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#2742f5" strokeWidth="0.5" opacity="0.1" />
                  </pattern>
                  <linearGradient id="arcGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#2742f5" stopOpacity="0.8" />
                    <stop offset="100%" stopColor="#14b8a6" stopOpacity="0.4" />
                  </linearGradient>
                </defs>

                {/* Grid background */}
                <rect width="400" height="400" fill="url(#grid)" />

                {/* Central animated orbits */}
                <g opacity="0.6">
                  {/* Outer orbit */}
                  <circle cx="200" cy="200" r="120" fill="none" stroke="#2742f5" strokeWidth="1" opacity="0.2" style={{ animation: "rotate 20s linear infinite", transformOrigin: "200px 200px" }} />
                  {/* Middle orbit */}
                  <circle cx="200" cy="200" r="80" fill="none" stroke="#14b8a6" strokeWidth="1" opacity="0.3" style={{ animation: "rotate 15s linear infinite reverse", transformOrigin: "200px 200px" }} />
                  {/* Inner orbit */}
                  <circle cx="200" cy="200" r="40" fill="none" stroke="#2742f5" strokeWidth="1" opacity="0.2" style={{ animation: "rotate 10s linear infinite", transformOrigin: "200px 200px" }} />
                </g>

                {/* Nodes on orbits */}
                <g>
                  {/* Outer nodes */}
                  <circle cx="320" cy="200" r="6" fill="#2742f5" opacity="0.7" style={{ animation: "pulse 2s ease-in-out infinite" }} />
                  <circle cx="200" cy="80" r="6" fill="#14b8a6" opacity="0.7" style={{ animation: "pulse 2s ease-in-out 0.4s infinite" }} />
                  <circle cx="80" cy="200" r="6" fill="#2742f5" opacity="0.7" style={{ animation: "pulse 2s ease-in-out 0.8s infinite" }} />
                  <circle cx="200" cy="320" r="6" fill="#14b8a6" opacity="0.7" style={{ animation: "pulse 2s ease-in-out 1.2s infinite" }} />

                  {/* Center node - core */}
                  <circle cx="200" cy="200" r="8" fill="url(#arcGradient)" style={{ animation: "pulse 2s ease-in-out infinite", filter: "drop-shadow(0 0 8px rgba(39, 66, 245, 0.5))" }} />
                </g>

                {/* Connection lines */}
                <g stroke="#2742f5" strokeWidth="1" opacity="0.3">
                  <line x1="200" y1="200" x2="320" y2="200" />
                  <line x1="200" y1="200" x2="200" y2="80" />
                  <line x1="200" y1="200" x2="80" y2="200" />
                  <line x1="200" y1="200" x2="200" y2="320" />
                </g>

                {/* Data flow indicators */}
                <g>
                  <circle cx="260" cy="200" r="3" fill="#2742f5" opacity="0.6" style={{ animation: "float 3s ease-in-out infinite" }} />
                  <circle cx="200" cy="140" r="3" fill="#14b8a6" opacity="0.6" style={{ animation: "float 3s ease-in-out 1s infinite" }} />
                  <circle cx="140" cy="200" r="3" fill="#2742f5" opacity="0.6" style={{ animation: "float 3s ease-in-out 2s infinite" }} />
                </g>

                {/* Decorative tech nodes */}
                <g opacity="0.4" fontSize="10" fill="#94a3b8">
                  <text x="340" y="205">API</text>
                  <text x="185" y="60">FRONTEND</text>
                  <text x="30" y="205">CLOUD</text>
                  <text x="185" y="355">DATABASE</text>
                </g>
              </svg>
            </div>
          </div>
        </div>

        {/* Floating elements */}
        <div className="absolute bottom-20 right-10 w-32 h-32 border border-cobalt/20 rounded-3xl" style={{ animation: "float 6s ease-in-out infinite", transform: "rotate(45deg)" }} />
        <div className="absolute top-40 left-10 w-24 h-24 border border-orange-500/20 rounded-2xl" style={{ animation: "float 6s ease-in-out infinite 1s" }} />
      </section>

      {/* Expertise Section - Modern cards with glassmorphism */}
      <section className="relative py-32 md:py-48 bg-gradient-to-b from-slate-900 via-slate-950 to-slate-900">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-1/4 w-96 h-96 bg-cobalt/5 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 px-4 sm:px-8">
          <div className="mb-20 max-w-wrap mx-auto">
            <p className="text-cobalt text-lg font-bold mb-4">CORE EXPERTISE</p>
            <h2 className="font-display text-6xl md:text-7xl font-black text-white tracking-tight max-w-3xl">
              End-to-end technical excellence
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-wrap mx-auto">
            {/* Card 1 */}
            <div className="group relative overflow-hidden rounded-2xl p-8 bg-gradient-to-br from-white/10 to-white/5 border border-white/10 hover:border-cobalt/50 transition-all duration-500 hover:shadow-2xl hover:shadow-cobalt/20 backdrop-blur-xl cursor-none">
              <div className="absolute inset-0 bg-gradient-to-br from-cobalt/0 to-cobalt/0 group-hover:from-cobalt/10 group-hover:to-cobalt/5 transition-all duration-500" />
              <div className="relative">
                <div className="w-14 h-14 bg-gradient-to-br from-cobalt to-teal-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M3 13h2v8H3v-8zm4-8h2v16H7V5zm4-2h2v18h-2V3zm4 4h2v14h-2V7zm4-2h2v16h-2V5z" />
                  </svg>
                </div>
                <h3 className="font-display text-2xl font-bold text-white mb-3">Frontend Mastery</h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-6">
                  React, Next.js 14, TypeScript. Building blazing-fast, pixel-perfect interfaces that delight users.
                </p>
                <div className="flex flex-wrap gap-2">
                  {["React 18+", "Next.js", "TypeScript", "Tailwind"].map((tag) => (
                    <span key={tag} className="px-3 py-1 rounded-full bg-cobalt/20 text-cobalt text-xs font-semibold border border-cobalt/30">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="group relative overflow-hidden rounded-2xl p-8 bg-gradient-to-br from-white/10 to-white/5 border border-white/10 hover:border-cobalt/50 transition-all duration-500 hover:shadow-2xl hover:shadow-cobalt/20 backdrop-blur-xl cursor-none md:mt-12">
              <div className="absolute inset-0 bg-gradient-to-br from-cobalt/0 to-cobalt/0 group-hover:from-cobalt/10 group-hover:to-cobalt/5 transition-all duration-500" />
              <div className="relative">
                <div className="w-14 h-14 bg-gradient-to-br from-teal-500 to-emerald-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2L2 7l10 5 10-5-10-5zm0 10L2 17l10 5 10-5-10-5zm0 9l-10-5v3l10 5 10-5v-3l-10 5z" />
                  </svg>
                </div>
                <h3 className="font-display text-2xl font-bold text-white mb-3">Backend Systems</h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-6">
                  Node.js, Python, Go. Architecting scalable APIs and microservices that handle millions of requests.
                </p>
                <div className="flex flex-wrap gap-2">
                  {["Node.js", "PostgreSQL", "Redis", "GraphQL"].map((tag) => (
                    <span key={tag} className="px-3 py-1 rounded-full bg-teal-500/20 text-teal-300 text-xs font-semibold border border-teal-500/30">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="group relative overflow-hidden rounded-2xl p-8 bg-gradient-to-br from-white/10 to-white/5 border border-white/10 hover:border-cobalt/50 transition-all duration-500 hover:shadow-2xl hover:shadow-cobalt/20 backdrop-blur-xl cursor-none">
              <div className="absolute inset-0 bg-gradient-to-br from-cobalt/0 to-cobalt/0 group-hover:from-cobalt/10 group-hover:to-cobalt/5 transition-all duration-500" />
              <div className="relative">
                <div className="w-14 h-14 bg-gradient-to-br from-orange-500 to-pink-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11zm3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z" />
                  </svg>
                </div>
                <h3 className="font-display text-2xl font-bold text-white mb-3">Cloud & DevOps</h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-6">
                  Kubernetes, Docker, AWS, GCP. Building resilient infrastructure that runs 24/7 without downtime.
                </p>
                <div className="flex flex-wrap gap-2">
                  {["Kubernetes", "Docker", "AWS", "GitHub Actions"].map((tag) => (
                    <span key={tag} className="px-3 py-1 rounded-full bg-orange-500/20 text-orange-300 text-xs font-semibold border border-orange-500/30">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Work Preview - Bold Layout */}
      <section className="relative py-32 md:py-48 bg-gradient-to-b from-slate-900 to-slate-950">
        <div className="wrap">
          <div className="mb-20">
            <p className="text-cobalt text-lg font-bold mb-4">FEATURED WORK</p>
            <div className="flex items-end justify-between gap-8 flex-col md:flex-row">
              <h2 className="font-display text-6xl md:text-7xl font-black text-white tracking-tight max-w-2xl">
                Projects that moved the needle
              </h2>
              <Link href="/work" className="hidden md:inline-flex px-8 py-3 rounded-full border border-cobalt/50 text-cobalt font-bold hover:bg-cobalt/10 transition-all cursor-none">
                View all work →
              </Link>
            </div>
          </div>

          <div className="space-y-8">
            {/* Project 1 */}
            <div className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-cobalt/20 to-teal-950/50 border border-cobalt/30 p-8 md:p-12 hover:border-cobalt/80 transition-all duration-500 hover:shadow-2xl hover:shadow-cobalt/20 cursor-none">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <p className="text-cobalt text-sm font-bold mb-3">2023 - 2024</p>
                  <h3 className="font-display text-4xl md:text-5xl font-black text-white mb-4">
                    SaaS Platform
                  </h3>
                  <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                    Multi-tenant analytics platform handling 50K+ daily active users. Real-time dashboards, role-based access, and sub-second data ingestion.
                  </p>
                  <div className="flex flex-wrap gap-3 mb-6">
                    {["React", "Node.js", "PostgreSQL", "Kubernetes"].map((tech) => (
                      <span key={tech} className="px-4 py-2 rounded-lg bg-cobalt/30 text-cobalt border border-cobalt/50 text-sm font-semibold">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <Link href="/work" className="inline-flex items-center gap-2 text-cobalt font-bold group-hover:gap-3 transition-all">
                    Read case study <span>→</span>
                  </Link>
                </div>
                <div className="h-64 bg-gradient-to-br from-cobalt/40 to-teal-900/40 rounded-2xl flex items-center justify-center border border-cobalt/20">
                  <svg className="w-32 h-32 text-cobalt/50" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Project 2 */}
            <div className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-orange-900/20 to-pink-950/30 border border-orange-500/30 p-8 md:p-12 hover:border-orange-500/80 transition-all duration-500 hover:shadow-2xl hover:shadow-orange-500/20 cursor-none">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="md:order-2">
                  <p className="text-orange-400 text-sm font-bold mb-3">2022 - 2023</p>
                  <h3 className="font-display text-4xl md:text-5xl font-black text-white mb-4">
                    Fintech Infrastructure
                  </h3>
                  <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                    Payment processing engine processing $2B+ annually with 99.99% uptime. Built with Go, optimized for latency-critical operations.
                  </p>
                  <div className="flex flex-wrap gap-3 mb-6">
                    {["Go", "Kubernetes", "AWS", "PostgreSQL"].map((tech) => (
                      <span key={tech} className="px-4 py-2 rounded-lg bg-orange-500/30 text-orange-300 border border-orange-500/50 text-sm font-semibold">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <Link href="/work" className="inline-flex items-center gap-2 text-orange-400 font-bold group-hover:gap-3 transition-all">
                    Read case study <span>→</span>
                  </Link>
                </div>
                <div className="h-64 bg-gradient-to-br from-orange-500/40 to-pink-900/40 rounded-2xl flex items-center justify-center border border-orange-500/20 md:order-1">
                  <svg className="w-32 h-32 text-orange-500/50" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center md:hidden">
            <Link href="/work" className="inline-flex px-8 py-4 rounded-full bg-gradient-to-r from-cobalt to-teal-600 text-white font-bold hover:shadow-2xl transition-all cursor-none">
              View all projects →
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section - High Contrast */}
      <section className="relative py-32 md:py-40 overflow-hidden bg-white">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 right-20 w-80 h-80 bg-cobalt/10 rounded-full blur-3xl" />
          <div className="absolute -bottom-40 left-20 w-80 h-80 bg-orange-500/10 rounded-full blur-3xl" />
        </div>

        <div className="wrap relative z-10 text-center">
          <h2 className="font-display text-5xl md:text-6xl font-black text-black mb-6 tracking-tight">
            Ready to ship <br /> something great?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-12 leading-relaxed">
            Let's build your next big thing. Whether it's scaling infrastructure, launching a new product, or architecting systems at scale.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/contact"
              className="group relative px-8 py-4 bg-gradient-to-r from-cobalt to-teal-600 text-white font-bold rounded-full overflow-hidden transition-all hover:shadow-2xl hover:shadow-cobalt/50 cursor-none"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-teal-600 to-cobalt translate-x-full group-hover:translate-x-0 transition-transform duration-500" />
              <span className="relative">Start a conversation</span>
            </Link>

            <a
              href="mailto:webbslack@gmail.com"
              className="px-8 py-4 border-2 border-black text-black font-bold rounded-full hover:bg-black hover:text-white transition-all cursor-none"
            >
              webbslack@gmail.com
            </a>
          </div>
        </div>
      </section>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(45deg); }
          50% { transform: translateY(20px) rotate(45deg); }
        }

        @keyframes click {
          0% { transform: scale(1); }
          50% { transform: scale(0.7); }
          100% { transform: scale(1); }
        }
      `}</style>
    </>
  );
}
