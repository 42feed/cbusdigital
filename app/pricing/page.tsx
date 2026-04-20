import type { Metadata } from "next";
import Nav from "@/components/Nav";
import CTABanner from "@/components/CTABanner";
import Footer from "@/components/Footer";
import ProcessRoadmap from "@/components/ProcessRoadmap";

export const metadata: Metadata = {
  title: "Pricing — CBUS Digital",
  description: "Transparent pricing for Columbus small business websites. See the site first. Pay after you love it.",
};

const included = [
  { icon: "👁️", label: "See it before you pay" },
  { icon: "🔁", label: "Unlimited revisions" },
  { icon: "📱", label: "Mobile-first design" },
  { icon: "🔍", label: "Built to rank on Google" },
  { icon: "⚡", label: "We launch as fast as you're ready" },
  { icon: "📞", label: "Click-to-call button" },
  { icon: "✉️", label: "Spam-protected contact form" },
  { icon: "📅", label: "Online booking widget" },
  { icon: "🖼️", label: "Photo gallery" },
  { icon: "📍", label: "Google Maps embed" },
  { icon: "🤖", label: "AI-powered build process" },
  { icon: "🚀", label: "Enterprise-grade hosting" },
  { icon: "🏆", label: "You own it — no lock-in" },
  { icon: "🔒", label: "SSL certificate (HTTPS)" },
  { icon: "📊", label: "Google Analytics connected" },
  { icon: "🗺️", label: "Sitemap submitted to Google" },
  { icon: "🏷️", label: "Local SEO schema markup" },
  { icon: "🎨", label: "Custom color scheme & branding" },
  { icon: "⭐", label: "Testimonials section" },
  { icon: "🕐", label: "Business hours display" },
  { icon: "📲", label: "Social media links" },
  { icon: "🌐", label: "Custom domain setup" },
  { icon: "🛡️", label: "99.99% uptime infrastructure" },
  { icon: "💨", label: "Core Web Vitals optimized" },
];

const packages = [
  {
    name: "Starter",
    pages: "3 pages",
    price: "$750",
    tagline: "Everything you need to get found and get called.",
    highlight: false,
    cta: "Get Started",
    href: "/demo",
  },
  {
    name: "Pro",
    pages: "10 pages",
    price: "$1,250",
    tagline: "More real estate to tell your full story and convert more visitors.",
    highlight: true,
    cta: "Get Started",
    href: "/demo",
  },
  {
    name: "Custom",
    pages: "Unlimited pages",
    price: "Let's talk",
    tagline: "Complex builds, advanced integrations, and fully custom solutions — anything goes.",
    highlight: false,
    cta: "Contact Kyle",
    href: "/demo",
  },
];


const addons = [
  {
    name: "Hosting + Unlimited Revisions",
    price: "$198/mo",
    description: "We host your site, keep it fast and secure, and handle any updates or changes you need — unlimited. Your site stays current, always.",
  },
];

export default function PricingPage() {
  return (
    <>
      <Nav />
      <main className="flex-1">

        {/* Header */}
        <section className="relative grid-bg overflow-hidden py-24 px-6 border-b border-white/8">
          <div
            className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 w-[600px] h-[400px] rounded-full opacity-15"
            style={{ background: "radial-gradient(ellipse, #2563eb, transparent 70%)" }}
            aria-hidden="true"
          />
          <div className="relative max-w-3xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-black text-white mb-5 leading-tight">
              One New Customer Pays<br />
              <span className="gradient-text">For Your Entire Website.</span>
            </h1>
            <p className="text-xl text-slate-400 leading-relaxed">
              See it before you pay for it. Unlimited revisions. 50% to start, 50% when it goes live.
            </p>
          </div>
        </section>

        {/* Packages */}
        <section className="py-20 px-6">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-black text-white mb-3">Choose Your Page Count</h2>
              <p className="text-slate-400">More pages, more story. Same quality across the board.</p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {packages.map((pkg) => (
                <div
                  key={pkg.name}
                  className={`rounded-2xl flex flex-col relative overflow-hidden ${
                    pkg.highlight ? "border border-violet-500/50" : "glass-card"
                  }`}
                  style={pkg.highlight ? { background: "linear-gradient(145deg, #2e1065, #1e3a8a)" } : {}}
                >
                  {pkg.highlight && (
                    <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-violet-400 to-transparent" />
                  )}
                  <div className="p-8 flex-1">
                    {pkg.highlight && (
                      <div className="text-xs font-bold bg-white/15 text-white px-3 py-1 rounded-full inline-block mb-4">
                        Most Popular
                      </div>
                    )}
                    <h2 className="text-2xl font-black text-white mb-1">{pkg.name}</h2>
                    <p className="text-slate-400 text-sm mb-6">{pkg.tagline}</p>

                    <div className="mb-6 pb-6 border-b border-white/8">
                      <div className="text-4xl font-black gradient-text">{pkg.price}</div>
                    </div>

                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-2xl">📄</span>
                      <span className="text-white font-black text-xl">{pkg.pages}</span>
                    </div>
                    <p className="text-slate-500 text-sm">Everything listed below included.</p>
                  </div>

                  <div className="px-8 pb-8">
                    <a
                      href={pkg.href}
                      className={`block text-center font-bold py-3.5 rounded-xl transition-all ${
                        pkg.highlight
                          ? "bg-white text-violet-700 hover:bg-slate-50"
                          : "glow-button bg-violet-600 hover:bg-violet-500 text-white"
                      }`}
                    >
                      {pkg.cta}
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Comparison */}
        <section className="py-24 px-6 border-t border-white/8">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-14">
              <h2 className="text-4xl md:text-5xl font-black text-white mb-4 leading-tight">
                How We Stack Up
              </h2>
              <p className="text-slate-400 text-lg max-w-xl mx-auto">
                See how CBUS Digital compares to the alternatives before you decide.
              </p>
            </div>

            {/* Table */}
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr>
                    <th className="text-left pb-6 pr-4 text-slate-500 font-semibold w-1/4" />
                    <th className="pb-6 px-4 w-1/4">
                      <div className="rounded-2xl border border-violet-500/50 px-4 py-3 text-center" style={{ background: "linear-gradient(145deg, #2e1065, #1e3a8a)" }}>
                        <div className="text-xs font-bold text-violet-300 uppercase tracking-widest mb-1">Best Value</div>
                        <div className="text-white font-black text-base">CBUS Digital</div>
                      </div>
                    </th>
                    <th className="pb-6 px-4 w-1/4">
                      <div className="glass-card rounded-2xl px-4 py-3 text-center">
                        <div className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-1">Expensive</div>
                        <div className="text-slate-300 font-black text-base">Traditional Agency</div>
                      </div>
                    </th>
                    <th className="pb-6 pl-4 w-1/4">
                      <div className="glass-card rounded-2xl px-4 py-3 text-center">
                        <div className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-1">Time-consuming</div>
                        <div className="text-slate-300 font-black text-base">DIY (Wix / Squarespace)</div>
                      </div>
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  {[
                    {
                      label: "Cost",
                      cbus: "$750–$1,250",
                      agency: "$5,000–$20,000+",
                      diy: "$200–$500/yr + your time",
                      cbusGood: true,
                    },
                    {
                      label: "Time to launch",
                      cbus: "1–2 business days",
                      agency: "6–16 weeks",
                      diy: "Weeks or months",
                      cbusGood: true,
                    },
                    {
                      label: "See it before paying",
                      cbus: "✓ Always",
                      agency: "✗ Pay upfront",
                      diy: "✗ Build it yourself first",
                      cbusGood: true,
                    },
                    {
                      label: "Revisions",
                      cbus: "✓ Unlimited",
                      agency: "✗ Billed hourly",
                      diy: "✓ Do it yourself",
                      cbusGood: true,
                    },
                    {
                      label: "You own the site",
                      cbus: "✓ Forever",
                      agency: "~ Sometimes",
                      diy: "✗ Locked to platform",
                      cbusGood: true,
                    },
                    {
                      label: "SEO & local optimization",
                      cbus: "✓ Built in",
                      agency: "✓ Sometimes (extra cost)",
                      diy: "✗ Template limitations",
                      cbusGood: true,
                    },
                    {
                      label: "Mobile-first design",
                      cbus: "✓ Always",
                      agency: "✓ Usually",
                      diy: "~ Depends on template",
                      cbusGood: true,
                    },
                    {
                      label: "Personal attention",
                      cbus: "✓ Direct with Kyle",
                      agency: "✗ Account manager layers",
                      diy: "✗ You're on your own",
                      cbusGood: true,
                    },
                    {
                      label: "Quality of result",
                      cbus: "✓ Enterprise-level",
                      agency: "✓ High (at a cost)",
                      diy: "✗ Template quality",
                      cbusGood: true,
                    },
                  ].map((row) => (
                    <tr key={row.label} className="group">
                      <td className="py-4 pr-4 text-slate-400 font-medium">{row.label}</td>
                      <td className="py-4 px-4 text-center">
                        <span className="text-emerald-400 font-semibold">{row.cbus}</span>
                      </td>
                      <td className="py-4 px-4 text-center">
                        <span className="text-slate-500">{row.agency}</span>
                      </td>
                      <td className="py-4 pl-4 text-center">
                        <span className="text-slate-500">{row.diy}</span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mt-10 text-center">
              <a
                href="/demo"
                className="glow-button inline-block bg-violet-600 hover:bg-violet-500 text-white font-bold px-10 py-4 rounded-xl transition-all"
              >
                Claim Your Free Demo Site →
              </a>
            </div>
          </div>
        </section>

        {/* What's included in every package */}
        <section className="py-24 px-6 border-t border-white/8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-14">
              <div className="inline-flex items-center gap-2 glass-card text-emerald-300 text-sm font-semibold px-4 py-1.5 rounded-full mb-5">
                ✦ Included in every single package
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-white mb-4 leading-tight">
                You're Not Buying a Template.<br />
                <span className="gradient-text">You're Getting a Complete Digital Presence.</span>
              </h2>
              <p className="text-slate-400 text-lg max-w-2xl mx-auto">
                Every site ships with everything below — no matter which package you choose. The price only changes based on how many pages you need. Quality is never negotiable.
              </p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
              {included.map((item) => (
                <div
                  key={item.label}
                  className="glass-card rounded-xl px-4 py-3.5 flex items-center gap-3 hover:border-white/16 transition-all"
                >
                  <span className="text-xl shrink-0">{item.icon}</span>
                  <span className="text-slate-300 text-sm font-medium leading-snug">{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* The Process */}
        <section className="grid-bg border-y border-white/8 py-24 px-6">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-black text-white mb-4">The Process, Start to Finish</h2>
              <p className="text-slate-400 text-lg max-w-xl mx-auto">
                No surprises. Here's exactly what happens from the moment you reach out to the moment your site is live.
              </p>
            </div>
            <ProcessRoadmap />
          </div>
        </section>

        {/* Add-ons */}
        <section className="border-t border-white/8 py-16 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl font-black text-white mb-6">Optional Add-On</h2>
            <div className="inline-block w-full max-w-md">
              {addons.map((addon) => (
                <div key={addon.name} className="glass-card rounded-2xl p-6 text-left">
                  <div className="flex items-start justify-between gap-4 mb-3">
                    <h3 className="text-base font-bold text-white">{addon.name}</h3>
                    <span className="gradient-text font-black text-sm whitespace-nowrap">{addon.price}</span>
                  </div>
                  <p className="text-slate-400 text-sm leading-relaxed">{addon.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <CTABanner />
      </main>
      <Footer />
    </>
  );
}
