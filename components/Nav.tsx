"use client";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";

const links = [
  { href: "/work", label: "Work" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-canvas/85 backdrop-blur-md">
      <div className="wrap flex h-16 items-center justify-between">
        <Link href="/" className="flex items-baseline gap-2 group">
          <span className="font-display text-lg font-extrabold tracking-tight">
            WEBBSLACK
          </span>
          <span className="dossier-line hidden sm:inline group-hover:text-cobalt transition-colors">
            / full-stack · devops
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`text-sm font-medium transition-colors hover:text-cobalt ${
                pathname?.startsWith(l.href) ? "text-cobalt" : "text-ink"
              }`}
            >
              {l.label}
            </Link>
          ))}
          <Link href="/contact" className="btn-primary !py-2 !px-4 text-sm">
            Request a callback
          </Link>
        </nav>

        <button
          className="md:hidden p-2 -mr-2"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          <div className="space-y-1.5">
            <span className={`block h-0.5 w-6 bg-ink transition-transform ${open ? "translate-y-2 rotate-45" : ""}`} />
            <span className={`block h-0.5 w-6 bg-ink transition-opacity ${open ? "opacity-0" : ""}`} />
            <span className={`block h-0.5 w-6 bg-ink transition-transform ${open ? "-translate-y-2 -rotate-45" : ""}`} />
          </div>
        </button>
      </div>

      {open && (
        <nav className="md:hidden border-t border-line bg-surface">
          <div className="wrap py-4 flex flex-col gap-4">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-base font-medium py-1"
              >
                {l.label}
              </Link>
            ))}
            <Link href="/contact" onClick={() => setOpen(false)} className="btn-primary justify-center">
              Request a callback
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}
