import { Check, X, Skull, Sparkles } from "lucide-react";

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
  "One flat price — and you see it before you pay a cent",
  "Built specifically for your business, your services, your city",
  "SEO-ready structure baked in from the first line of code",
  "Perfect Lighthouse scores. Loads in under a second.",
  "Ongoing support available — month to month, no contracts",
];

export default function Comparison() {
  return (
    <section className="relative px-6 py-24 border-t border-white/5">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 mono text-[12px] uppercase tracking-[0.2em] text-cyan-300 border border-cyan-500/25 bg-cyan-500/8 rounded-full px-3 py-1.5 mb-6">
            <Sparkles className="w-3 h-3" />
            The old way is dead
          </div>
          <h2 className="text-[36px] md:text-[52px] font-bold tracking-[-0.025em] leading-[1.05] mb-5">
            Spending thousands &amp; waiting months
            <br />
            <span className="bg-gradient-to-r from-violet-400 via-fuchsia-400 to-cyan-300 bg-clip-text text-transparent">
              isn&rsquo;t how this works anymore.
            </span>
          </h2>
          <p className="text-slate-400 text-[17px] max-w-[55ch] mx-auto leading-[1.6]">
            We use the same tech stack powering the world&rsquo;s fastest-growing companies —
            paired with modern AI tooling — to deliver higher-quality work in a fraction of
            the time, at a fraction of the cost.
          </p>
        </div>

        {/* Two-column comparison — distinct visual variants */}
        <div className="grid md:grid-cols-2 gap-5">
          {/* Old way — flat, joyless */}
          <div className="rounded-2xl border border-white/8 bg-[#0a0a10] p-8 relative overflow-hidden">
            <div className="flex items-center gap-3 mb-7">
              <div className="w-9 h-9 rounded-lg bg-white/5 border border-white/8 flex items-center justify-center">
                <Skull className="w-4 h-4 text-slate-500" strokeWidth={2} />
              </div>
              <div>
                <div className="text-[15px] font-semibold text-slate-300">
                  The average website company
                </div>
                <div className="mono text-[11px] uppercase tracking-widest text-slate-600 mt-0.5">
                  Status quo
                </div>
              </div>
            </div>

            <ul className="space-y-3.5">
              {oldWay.map((item) => (
                <li key={item} className="flex items-start gap-3 text-[14px] text-slate-500 leading-[1.5]">
                  <span className="mt-0.5 shrink-0 w-5 h-5 rounded-full bg-white/5 border border-white/8 flex items-center justify-center">
                    <X className="w-3 h-3 text-slate-600" strokeWidth={2.5} />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* New way — beam edge, glow, accent */}
          <div className="beam-card p-[1.5px]">
            <div className="rounded-[20px] bg-[#0a0a14] p-8 relative overflow-hidden">
              <div
                aria-hidden
                className="absolute -top-20 -right-20 w-60 h-60 rounded-full opacity-25 blur-3xl"
                style={{ background: "#7c3aed" }}
              />
              <div className="relative">
                <div className="flex items-center gap-3 mb-7">
                  <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-violet-500 to-cyan-500 flex items-center justify-center">
                    <Sparkles className="w-4 h-4 text-white" strokeWidth={2.5} />
                  </div>
                  <div>
                    <div className="text-[15px] font-semibold text-white">
                      The CBUS Digital way
                    </div>
                    <div className="mono text-[11px] uppercase tracking-widest text-violet-300 mt-0.5">
                      What you get
                    </div>
                  </div>
                </div>

                <ul className="space-y-3.5">
                  {newWay.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-[14px] text-slate-200 leading-[1.5]">
                      <span className="mt-0.5 shrink-0 w-5 h-5 rounded-full bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center">
                        <Check className="w-3 h-3 text-emerald-400" strokeWidth={2.5} />
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
