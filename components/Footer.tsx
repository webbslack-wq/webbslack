import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-slate-950 text-white mt-24">
      <div className="wrap py-14 grid gap-10 md:grid-cols-3">
        <div>
          <p className="font-display text-xl font-extrabold tracking-tight">WEBBSLACK</p>
          <p className="text-xs font-semibold text-cobalt mt-2">
            full-stack architect
          </p>
          <p className="mt-4 text-sm text-gray-400 max-w-xs leading-relaxed">
            Websites, platforms and infrastructure for businesses that need things
            built properly — and kept running at scale.
          </p>
        </div>

        <div>
          <p className="text-xs font-bold text-cobalt mb-4">NAVIGATE</p>
          <ul className="space-y-2 text-sm">
            <li><Link className="text-gray-400 hover:text-white transition-colors" href="/work">Case studies</Link></li>
            <li><Link className="text-gray-400 hover:text-white transition-colors" href="/services">Services</Link></li>
            <li><Link className="text-gray-400 hover:text-white transition-colors" href="/about">About</Link></li>
            <li><Link className="text-gray-400 hover:text-white transition-colors" href="/contact">Contact</Link></li>
          </ul>
        </div>

        <div>
          <p className="text-xs font-bold text-cobalt mb-4">REACH OUT</p>
          <a
            href="mailto:webbslack@gmail.com"
            className="text-sm text-gray-400 hover:text-white transition-colors"
          >
            webbslack@gmail.com
          </a>
          <p className="text-xs font-semibold text-cobalt mt-4">
            response time
          </p>
          <p className="text-sm text-gray-400">Usually 24 hours</p>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="wrap py-6 flex flex-col sm:flex-row gap-2 justify-between text-sm">
          <p className="text-gray-500">
            © {new Date().getFullYear()} webbslack — built with next.js · react · node
          </p>
          <p className="text-gray-500">15+ years shipping production software</p>
        </div>
      </div>
    </footer>
  );
}
