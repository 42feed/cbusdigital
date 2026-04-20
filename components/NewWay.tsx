import TechStack from "@/components/TechStack";

const oldWay = [
  "Months of back-and-forth before you see anything",
  "$3,000–$10,000 upfront — before a single pixel is designed",
  "Generic templates dressed up as custom work",
  "SEO as a $500/mo upsell you never asked for",
  "Slow, bloated sites that tank on mobile",
  "Developer disappears after launch",
];

const newWay = [
  "Live demo site in your inbox within 48 hours",
  "Starting at $750 — and you see it before you pay a cent",
  "Built specifically for your business, your services, your city",
  "SEO-ready structure baked in from the first line of code",
  "Perfect Lighthouse scores. Loads in under a second.",
  "Ongoing support available — month to month, no contracts",
];

export default function NewWay() {
  return (
    <section className="py-24 px-6 border-t border-white/8">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 glass-card text-cyan-300 text-sm font-semibold px-4 py-1.5 rounded-full mb-6">
            ✦ The Old Way Is Dead
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-white leading-tight mb-5">
            Spending Thousands &amp; Waiting Months<br />
            <span className="gradient-text">Is No Longer How This Works.</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed">
            We use the same technology stack powering the world's fastest-growing companies —
            combined with AI tools — to deliver a higher-quality website than the average Columbus
            developer, in a fraction of the time, at a fraction of the cost.
          </p>
        </div>

        {/* Old vs New comparison */}
        <div className="grid md:grid-cols-2 gap-5 mb-16">
          {/* Old way */}
          <div className="rounded-2xl border border-red-500/15 bg-red-950/10 p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 rounded-full bg-red-500/15 border border-red-500/25 flex items-center justify-center text-sm">
                ✕
              </div>
              <h3 className="text-lg font-bold text-slate-300">The Average Website Company</h3>
            </div>
            <ul className="space-y-3">
              {oldWay.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-slate-500">
                  <span className="text-red-500/60 mt-0.5 shrink-0">✕</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* New way */}
          <div className="rounded-2xl border border-emerald-500/20 bg-emerald-950/10 p-8 relative overflow-hidden">
            <div
              className="pointer-events-none absolute -top-10 -right-10 w-40 h-40 rounded-full opacity-10"
              style={{ background: "radial-gradient(circle, #10b981, transparent 70%)" }}
              aria-hidden="true"
            />
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 rounded-full bg-emerald-500/15 border border-emerald-500/25 flex items-center justify-center text-sm">
                ✓
              </div>
              <h3 className="text-lg font-bold text-white">The CBUS Digital Way</h3>
            </div>
            <ul className="space-y-3">
              {newWay.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-slate-300">
                  <span className="text-emerald-400 mt-0.5 shrink-0">✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Tech stack — collapsible */}
        <TechStack />

      </div>
    </section>
  );
}
