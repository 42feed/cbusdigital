import Link from "next/link";
import { Mail, MapPin, ArrowRight } from "lucide-react";
import { industries } from "@/lib/industries";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-white/8 bg-[#06060a]">
      {/* Top glow accent */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(124,58,237,0.45), rgba(34,211,238,0.35), transparent)",
        }}
      />

      <div className="max-w-6xl mx-auto px-6 py-16">
        {/* Top: brand + nav columns */}
        <div className="grid gap-12 md:grid-cols-12">
          {/* Brand */}
          <div className="md:col-span-5">
            <Link href="/" className="inline-flex items-center gap-2.5 mb-5">
              <span
                className="w-8 h-8 rounded-lg"
                style={{
                  background:
                    "linear-gradient(135deg, #7c3aed 0%, #2563eb 50%, #22d3ee 100%)",
                }}
              />
              <span className="text-white font-black text-lg tracking-tight">
                CBUS<span className="gradient-text">Digital</span>
              </span>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed max-w-sm mb-6">
              Custom websites for Columbus service businesses. We build the
              first draft up front — you only pay when you love it.
            </p>
            <Link
              href="/demo"
              className="inline-flex items-center gap-2 text-sm font-semibold text-white bg-violet-600 hover:bg-violet-500 px-4 py-2.5 rounded-lg transition-colors"
              style={{ boxShadow: "0 0 24px rgba(124, 58, 237, 0.35)" }}
            >
              Get your free demo
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Navigate */}
          <div className="md:col-span-3">
            <div className="text-[11px] font-bold uppercase tracking-[0.2em] text-slate-500 mb-4">
              Navigate
            </div>
            <ul className="space-y-2.5 text-sm">
              {[
                ["/", "Home"],
                ["/about", "About Kyle"],
                ["/pricing", "Pricing"],
                ["/demo", "Get a free demo"],
                ["/contact", "Contact"],
                ["/privacy", "Privacy policy"],
              ].map(([href, label]) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-slate-400 hover:text-white transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="md:col-span-4">
            <div className="text-[11px] font-bold uppercase tracking-[0.2em] text-slate-500 mb-4">
              Contact
            </div>
            <ul className="space-y-3 text-sm text-slate-400">
              <li>
                <a
                  href="mailto:kyle@cbusdigital.com"
                  className="inline-flex items-start gap-2.5 hover:text-white transition-colors"
                >
                  <Mail className="w-4 h-4 mt-0.5 text-violet-400 shrink-0" />
                  kyle@cbusdigital.com
                </a>
              </li>
              <li className="inline-flex items-start gap-2.5">
                <MapPin className="w-4 h-4 mt-0.5 text-violet-400 shrink-0" />
                <span>
                  Powell, OH
                  <span className="text-slate-600"> · </span>
                  Serving All of Central Ohio
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Industries grid — all 30, every page */}
        <div className="mt-14 pt-10 border-t border-white/5">
          <div className="flex items-baseline justify-between gap-4 mb-5 flex-wrap">
            <div>
              <div className="text-[11px] font-bold uppercase tracking-[0.2em] text-slate-500 mb-1.5">
                Industries we build for
              </div>
              <div className="text-slate-300 text-sm">
                Tailored websites for {industries.length} Columbus service industries.
              </div>
            </div>
          </div>
          <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-x-4 gap-y-2">
            {industries.map((i) => (
              <li key={i.slug}>
                <Link
                  href={`/services/${i.slug}`}
                  className="text-sm text-slate-400 hover:text-white transition-colors"
                >
                  {i.name.split(" ")[0]} websites
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500">
          <div>© {year} CBUS Digital · Built first, paid for last.</div>
          <div className="mono">Columbus, Ohio</div>
        </div>
      </div>
    </footer>
  );
}
