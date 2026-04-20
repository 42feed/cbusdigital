"use client";

import Link from "next/link";
import { useState, useRef } from "react";

// ─── Mega menu data ────────────────────────────────────────────────────────────
const columns = [
  {
    label: "Home Services",
    items: [
      { name: "Plumbers",          emoji: "🔧", slug: "plumbing" },
      { name: "HVAC Companies",    emoji: "❄️",  slug: "hvac" },
      { name: "Electricians",      emoji: "⚡", slug: "electrical" },
      { name: "Roofers",           emoji: "🏠", slug: "roofing" },
      { name: "Painters",          emoji: "🎨", slug: "painting" },
      { name: "Contractors",       emoji: "🏗️", slug: "contracting" },
      { name: "Handymen",          emoji: "🔨", slug: "handyman" },
      { name: "Appliance Repair",  emoji: "🔌", slug: "appliance-repair" },
      { name: "Garage Door Repair",emoji: "🚪", slug: "garage-door" },
      { name: "Window Cleaners",   emoji: "🪟", slug: "window-cleaning" },
    ],
  },
  {
    label: "Outdoor & Property",
    items: [
      { name: "Landscapers",       emoji: "🌿", slug: "landscaping" },
      { name: "Cleaning Services", emoji: "🧹", slug: "cleaning" },
      { name: "Tree Services",     emoji: "🌳", slug: "tree-service" },
      { name: "Pest Control",      emoji: "🐛", slug: "pest-control" },
      { name: "Pressure Washing",  emoji: "💦", slug: "pressure-washing" },
      { name: "Pool Services",     emoji: "🏊", slug: "pool-service" },
      { name: "Fence Companies",   emoji: "🏡", slug: "fencing" },
      { name: "Flooring Companies",emoji: "🪵", slug: "flooring" },
      { name: "Dumpster Rental",   emoji: "🗑️", slug: "dumpster-rental" },
    ],
  },
  {
    label: "Professional Services",
    items: [
      { name: "Law Offices",       emoji: "⚖️",  slug: "law" },
      { name: "Accountants",       emoji: "📊", slug: "accounting" },
      { name: "Chiropractors",     emoji: "🦴", slug: "chiropractic" },
      { name: "Med Spas",          emoji: "💆", slug: "med-spa" },
      { name: "Personal Trainers", emoji: "💪", slug: "personal-training" },
      { name: "Photographers",     emoji: "📸", slug: "photography" },
      { name: "Tutors",            emoji: "📚", slug: "tutoring" },
      { name: "Dog Groomers",      emoji: "🐾", slug: "dog-grooming" },
      { name: "Moving Companies",  emoji: "📦", slug: "moving" },
      { name: "Locksmiths",        emoji: "🔑", slug: "locksmith" },
      { name: "Auto Detailers",    emoji: "🚗", slug: "auto-detailing" },
    ],
  },
];

// ─── Component ────────────────────────────────────────────────────────────────
export default function Nav() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [industriesOpen, setIndustriesOpen] = useState(false); // mobile accordion
  const [megaOpen, setMegaOpen] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  function openMega() {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setMegaOpen(true);
  }

  function closeMega() {
    closeTimer.current = setTimeout(() => setMegaOpen(false), 120);
  }

  function closeMobileMenu() {
    setMobileOpen(false);
    setIndustriesOpen(false);
  }

  return (
    <header className="sticky top-0 z-50 border-b border-white/8 bg-[#030712]/80 backdrop-blur-xl">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="text-xl font-black tracking-tight">
          CBUS<span className="gradient-text">Digital</span>
        </Link>

        {/* ── Desktop nav ── */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-400">
          <Link href="/" className="hover:text-white transition-colors">Home</Link>

          {/* Industries trigger */}
          <div
            className="relative"
            onMouseEnter={openMega}
            onMouseLeave={closeMega}
          >
            <button
              className="flex items-center gap-1 hover:text-white transition-colors"
              aria-expanded={megaOpen}
            >
              Industries
              <svg
                className={`w-3.5 h-3.5 transition-transform duration-200 ${megaOpen ? "rotate-180" : ""}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {/* Mega menu panel */}
            {megaOpen && (
              <div
                className="absolute left-1/2 -translate-x-1/2 top-full mt-3 w-[720px] rounded-2xl border border-white/10 bg-[#0d1117]/95 backdrop-blur-xl shadow-2xl p-6"
                onMouseEnter={openMega}
                onMouseLeave={closeMega}
              >
                {/* Arrow */}
                <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 rotate-45 bg-[#0d1117] border-l border-t border-white/10 rounded-sm" />

                <div className="grid grid-cols-3 gap-6">
                  {columns.map((col) => (
                    <div key={col.label}>
                      <p className="text-[10px] font-bold uppercase tracking-widest text-slate-500 mb-3 px-2">
                        {col.label}
                      </p>
                      <ul className="space-y-0.5">
                        {col.items.map((item) => (
                          <li key={item.slug}>
                            <Link
                              href={`/services/${item.slug}`}
                              onClick={() => setMegaOpen(false)}
                              className="flex items-center gap-2.5 px-2 py-1.5 rounded-lg text-sm text-slate-300 hover:text-white hover:bg-white/6 transition-all group"
                            >
                              <span className="text-base leading-none">{item.emoji}</span>
                              <span className="group-hover:translate-x-0.5 transition-transform">
                                {item.name}
                              </span>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>

                {/* Footer row */}
                <div className="mt-5 pt-4 border-t border-white/8 flex items-center justify-between">
                  <p className="text-xs text-slate-500">30 industries — all Columbus-focused</p>
                  <Link
                    href="/demo"
                    onClick={() => setMegaOpen(false)}
                    className="text-xs font-semibold text-violet-400 hover:text-violet-300 transition-colors"
                  >
                    Get your free demo site →
                  </Link>
                </div>
              </div>
            )}
          </div>

          <Link href="/about" className="hover:text-white transition-colors">About</Link>
          <Link href="/pricing" className="hover:text-white transition-colors">Pricing</Link>
          <Link href="/contact" className="hover:text-white transition-colors">Contact</Link>
          <Link
            href="/demo"
            className="glow-button bg-violet-600 hover:bg-violet-500 text-white px-4 py-2 rounded-lg font-semibold transition-all"
          >
            Free Demo Site
          </Link>
        </nav>

        {/* Mobile toggle */}
        <button
          className="md:hidden p-2 rounded-lg text-slate-400 hover:bg-white/5 transition-colors"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* ── Mobile menu ── */}
      {mobileOpen && (
        <div className="md:hidden border-t border-white/8 bg-[#030712] px-6 py-4 flex flex-col gap-1 text-sm font-medium text-slate-400">
          <Link href="/" onClick={closeMobileMenu} className="py-2 hover:text-white">Home</Link>

          {/* Industries accordion */}
          <div>
            <button
              onClick={() => setIndustriesOpen(!industriesOpen)}
              className="w-full flex items-center justify-between py-2 hover:text-white transition-colors"
            >
              <span>Industries</span>
              <svg
                className={`w-3.5 h-3.5 transition-transform duration-200 ${industriesOpen ? "rotate-180" : ""}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {industriesOpen && (
              <div className="pl-3 pb-2 space-y-4 border-l border-white/8 ml-1 mt-1">
                {columns.map((col) => (
                  <div key={col.label}>
                    <p className="text-[10px] font-bold uppercase tracking-widest text-slate-600 mb-2">
                      {col.label}
                    </p>
                    <div className="space-y-0.5">
                      {col.items.map((item) => (
                        <Link
                          key={item.slug}
                          href={`/services/${item.slug}`}
                          onClick={closeMobileMenu}
                          className="flex items-center gap-2 py-1.5 px-2 rounded-lg text-slate-300 hover:text-white hover:bg-white/5 transition-all"
                        >
                          <span>{item.emoji}</span>
                          <span className="text-sm">{item.name}</span>
                        </Link>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          <Link href="/about" onClick={closeMobileMenu} className="py-2 hover:text-white">About</Link>
          <Link href="/pricing" onClick={closeMobileMenu} className="py-2 hover:text-white">Pricing</Link>
          <Link href="/contact" onClick={closeMobileMenu} className="py-2 hover:text-white">Contact</Link>
          <Link
            href="/demo"
            onClick={closeMobileMenu}
            className="mt-2 bg-violet-600 text-white px-4 py-2.5 rounded-lg font-semibold text-center"
          >
            Free Demo Site
          </Link>
        </div>
      )}
    </header>
  );
}
