import type { Metadata } from "next";
import Nav from "@/components/Nav";
import CTABanner from "@/components/CTABanner";
import Footer from "@/components/Footer";
import ProcessRoadmap from "@/components/ProcessRoadmap";

export const metadata: Metadata = {
  title: "Pricing — CBUS Digital",
  description: "See your custom website before you pay anything. $1,997 flat — $6,900 in deliverables. No deposit, no risk.",
};

const offerStack = [
  { label: "Custom website — up to 50 pages, unlimited locations & services", value: 2500 },
  { label: "Location-based SEO pages — rank in every city you serve", value: 750 },
  { label: "Service-specific landing pages — one per service you offer", value: 750 },
  { label: "AI-generated, SEO-optimized FAQ section", value: 400 },
  { label: "Schema markup (LocalBusiness, Service, FAQ)", value: 400 },
  { label: "Google Search Console + sitemap submission", value: 300 },
  { label: "Core Web Vitals / speed optimization", value: 400 },
  { label: "Google Analytics 4 + conversion tracking", value: 400 },
  { label: "Microsoft Clarity heatmaps + session recording", value: 200 },
  { label: "Industry-specific quote/estimate form", value: 500 },
  { label: "Contact form with automated email reply", value: 300 },
];

const totalValue = offerStack.reduce((sum, item) => sum + item.value, 0);
const totalValueFormatted = `$${totalValue.toLocaleString()}`;

const compareRows = [
  { label: "Cost", cbus: "$1,997 flat", agency: "$5,000–$20,000+", diy: "$200–$500/yr + your time" },
  { label: "Time to launch", cbus: "1–2 business days", agency: "6–16 weeks", diy: "Weeks or months" },
  { label: "See it before paying", cbus: "Always", agency: "Pay upfront", diy: "Build it yourself first" },
  { label: "Revisions", cbus: "Unlimited", agency: "Billed hourly", diy: "Do it yourself" },
  { label: "You own the site", cbus: "Forever — no lock-in", agency: "Sometimes", diy: "Locked to platform" },
  { label: "Personal attention", cbus: "Direct with Kyle", agency: "Account manager layers", diy: "You're on your own" },
];

const faqs = [
  {
    q: "What if I don't love the demo?",
    a: "No problem — we'll revise it until you do. Tell me what's not working and I'll redesign and resend a fresh version. We keep iterating as many rounds as it takes. And if it turns out to be the wrong fit entirely, walk away — you owe nothing.",
  },
  {
    q: "What gets added after I pay the 50% deposit?",
    a: "The demo shows the full design, structure, and copy of your site so you can see exactly what you're getting. Your 50% deposit unlocks the full custom build — that's when we add your logo, team photos, custom galleries of your work, and any specific imagery or content you want featured. By the time the site goes live, every detail is unmistakably yours.",
  },
  {
    q: "How long until my site goes live?",
    a: "Most sites launch within 1–2 business days of your final approval. You see the demo first, request any revisions, send over your custom content after the deposit, then we ship the moment you give the green light.",
  },
  {
    q: "Why is this so much cheaper than other agencies?",
    a: "Two reasons. Every site is built fully custom from scratch — no templates, ever — but I use modern AI tooling that compresses what used to take agencies weeks into days. And I run this entirely by email and text — no sales calls, no account managers, no overhead. Same custom quality, fraction of the cost.",
  },
  {
    q: "Do I own the site after?",
    a: "Yes. Forever. No lock-in. You can host it anywhere, transfer it to anyone, or take the code and walk. It's yours.",
  },
  {
    q: "What if I want changes later?",
    a: "Unlimited revisions before launch. After launch, the optional $149/mo Set & Forget plan covers any content updates you need — just send a quick email or text. Cancel anytime.",
  },
  {
    q: "Can we hop on a call?",
    a: "I typically don't take calls — and it's intentional. Keeping a written record of every request, change, and detail is how I make sure nothing gets missed or misremembered. Email and text give both of us a clear paper trail through the entire build, so every detail of your site gets accounted for exactly the way you want it. I usually respond within a few hours, and if a question is easier to show than type, I'll record a quick video walkthrough and send it over. Just reach out from the contact page.",
  },
];

export default function PricingPage() {
  return (
    <>
      <Nav />
      <main className="flex-1">

        {/* Hero — offer-forward with demo-first promise */}
        <section className="relative grid-bg overflow-hidden py-20 md:py-28 px-6 border-b border-white/8">
          <div className="relative max-w-4xl mx-auto">
            <div className="flex justify-center mb-6">
              <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full">
                <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
                See it first. Pay only if you love it.
              </div>
            </div>

            <h1 className="text-5xl md:text-7xl font-black text-white text-center leading-[1.05] mb-6 tracking-tight">
              First We Build It.<br />
              <span className="text-violet-400">Then You Decide.</span>
            </h1>

            <p className="text-lg md:text-xl text-slate-400 text-center max-w-2xl mx-auto leading-relaxed mb-12">
              We design the first draft of your custom site upfront — at zero cost. You see it live, we refine it together until every detail is exactly right, and you only pay when you love it.
            </p>

            <div className="max-w-lg mx-auto rounded-2xl border border-violet-500/40 p-6" style={{ background: "linear-gradient(145deg, #2e1065, #1e3a8a)" }}>
              <div className="flex items-baseline justify-between mb-2">
                <span className="text-slate-300 text-sm">Stand-alone value</span>
                <span className="text-slate-400 line-through font-mono text-lg tabular-nums">{totalValueFormatted}</span>
              </div>
              <div className="flex items-baseline justify-between mb-5 pb-5 border-b border-white/15">
                <span className="text-white font-bold">All in, one time</span>
                <span className="text-5xl font-black text-white tabular-nums">$1,997</span>
              </div>
              <a
                href="/demo"
                className="block text-center bg-white text-violet-700 font-bold py-3.5 rounded-xl hover:bg-slate-50 transition-all"
              >
                Claim Your Free Demo →
              </a>
              <p className="text-slate-300 text-xs text-center mt-3">
                $0 to start · $0 deposit · $0 if you walk away
              </p>
            </div>
          </div>
        </section>

        {/* The Stack — what's included */}
        <section className="py-24 px-6">
          <div className="max-w-3xl mx-auto">
            <div className="mb-12">
              <div className="text-violet-400 text-xs font-bold uppercase tracking-widest mb-3">The Stack</div>
              <h2 className="text-4xl md:text-5xl font-black text-white leading-tight mb-4">
                Here's exactly what's included.
              </h2>
              <p className="text-slate-400 text-lg max-w-xl">
                Each line below is something a traditional agency would quote you separately. You get all of it — for one flat $1,997.
              </p>
            </div>

            <div className="rounded-2xl overflow-hidden border border-white/10">
              <ul className="divide-y divide-white/5">
                {offerStack.map((item) => (
                  <li
                    key={item.label}
                    className="flex items-start justify-between gap-4 px-6 py-4 bg-white/[0.02] hover:bg-white/[0.04] transition-colors"
                  >
                    <div className="flex items-start gap-3 flex-1 min-w-0">
                      <span className="shrink-0 w-5 h-5 mt-0.5 rounded-full bg-emerald-500/20 flex items-center justify-center">
                        <svg className="w-3 h-3 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3} aria-hidden="true">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                      </span>
                      <span className="text-slate-200 text-sm md:text-base leading-snug">{item.label}</span>
                    </div>
                    <span className="shrink-0 text-slate-500 text-sm md:text-base font-mono tabular-nums">
                      ${item.value.toLocaleString()}
                    </span>
                  </li>
                ))}
              </ul>

              <div className="flex items-baseline justify-between gap-4 px-6 py-5 bg-violet-950/40 border-t border-white/10">
                <span className="text-slate-300 font-semibold text-sm md:text-base uppercase tracking-wider">
                  Total stand-alone value
                </span>
                <span className="text-slate-400 line-through text-2xl md:text-3xl font-black font-mono tabular-nums">
                  {totalValueFormatted}
                </span>
              </div>
              <div className="flex items-baseline justify-between gap-4 px-6 py-6 bg-violet-600">
                <span className="text-white font-black text-base md:text-lg uppercase tracking-wider">
                  Your price today
                </span>
                <span className="text-white font-black text-4xl md:text-5xl tabular-nums">$1,997</span>
              </div>
            </div>

            <div className="mt-10 text-center">
              <a
                href="/demo"
                className="glow-button inline-block bg-violet-600 hover:bg-violet-500 text-white font-bold px-10 py-4 rounded-xl transition-all"
              >
                Claim Your Free Demo →
              </a>
              <p className="text-slate-500 text-sm mt-3">See your site before you pay anything.</p>
            </div>
          </div>
        </section>

        {/* Two tiers */}
        <section className="py-20 px-6 border-t border-white/8">
          <div className="max-w-5xl mx-auto">
            <div className="mb-12">
              <div className="text-violet-400 text-xs font-bold uppercase tracking-widest mb-3">Tiers</div>
              <h2 className="text-3xl md:text-4xl font-black text-white mb-3">Two ways to work with us.</h2>
              <p className="text-slate-400 text-lg">Most businesses fit Standard. Enterprise is for the unusual ones.</p>
            </div>
            <div className="grid md:grid-cols-3 gap-6 items-stretch">
              <div
                className="md:col-span-2 relative rounded-2xl border border-violet-500/40 p-8 flex flex-col overflow-hidden"
                style={{ background: "linear-gradient(145deg, #2e1065, #1e3a8a)" }}
              >
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-violet-400 to-transparent" />
                <div className="self-start text-xs font-bold bg-white text-violet-800 px-3 py-1 rounded-full inline-block mb-5 tracking-widest">
                  STANDARD
                </div>
                <div className="flex items-baseline gap-3 mb-2">
                  <span className="text-5xl md:text-6xl font-black text-white tabular-nums">$1,997</span>
                  <span className="text-slate-300 text-lg">one-time</span>
                </div>
                <p className="text-slate-300 text-base mb-6">
                  Everything in The Stack. One flat price. Risk-free preview.
                </p>
                <ul className="space-y-3 mb-8 flex-1">
                  <li className="flex items-center gap-3 text-slate-100">
                    <span className="text-violet-300 font-bold">✓</span> Up to 50 pages
                  </li>
                  <li className="flex items-center gap-3 text-slate-100">
                    <span className="text-violet-300 font-bold">✓</span> Unlimited locations & service variants
                  </li>
                  <li className="flex items-center gap-3 text-slate-100">
                    <span className="text-violet-300 font-bold">✓</span> Full feature stack ({totalValueFormatted} stand-alone value)
                  </li>
                  <li className="flex items-center gap-3 text-slate-100">
                    <span className="text-violet-300 font-bold">✓</span> 50% to start, 50% when it goes live
                  </li>
                </ul>
                <a
                  href="/demo"
                  className="block text-center bg-white text-violet-700 font-bold py-3.5 rounded-xl hover:bg-slate-50 transition-all"
                >
                  Claim Your Free Demo →
                </a>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-8 flex flex-col">
                <div className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-5">ENTERPRISE</div>
                <div className="text-slate-500 text-sm mb-1">Starting at</div>
                <div className="text-4xl font-black text-white mb-2 tabular-nums">$7,999</div>
                <p className="text-slate-400 text-sm mb-6">For builds that exceed Standard scope.</p>
                <ul className="space-y-2.5 mb-8 text-sm flex-1">
                  <li className="flex items-start gap-2 text-slate-300"><span className="text-slate-500 mt-0.5">•</span> 50+ pages</li>
                  <li className="flex items-start gap-2 text-slate-300"><span className="text-slate-500 mt-0.5">•</span> E-commerce / online payments</li>
                  <li className="flex items-start gap-2 text-slate-300"><span className="text-slate-500 mt-0.5">•</span> Custom software integrations</li>
                  <li className="flex items-start gap-2 text-slate-300"><span className="text-slate-500 mt-0.5">•</span> Site migrations</li>
                  <li className="flex items-start gap-2 text-slate-300"><span className="text-slate-500 mt-0.5">•</span> Multi-brand / franchise setups</li>
                </ul>
                <a
                  href="/contact"
                  className="block text-center border border-white/20 hover:bg-white/8 text-white font-bold py-3.5 rounded-xl transition-all"
                >
                  Request a Quote
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Comparison */}
        <section className="py-24 px-6 border-t border-white/8">
          <div className="max-w-5xl mx-auto">
            <div className="mb-14">
              <div className="text-violet-400 text-xs font-bold uppercase tracking-widest mb-3">The Comparison</div>
              <h2 className="text-4xl md:text-5xl font-black text-white mb-4 leading-tight">How we stack up.</h2>
              <p className="text-slate-400 text-lg max-w-xl">
                See the alternatives before you decide. There's no honest version of this where you lose.
              </p>
            </div>

            <div className="overflow-x-auto rounded-2xl border border-white/10">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-white/[0.03]">
                    <th className="text-left py-5 pl-6 pr-4 text-slate-500 font-semibold w-1/4 uppercase tracking-wider text-xs">Feature</th>
                    <th className="py-5 px-4 w-1/4">
                      <div className="text-center">
                        <div className="text-xs font-bold text-violet-300 uppercase tracking-widest mb-1">★ Best Value</div>
                        <div className="text-white font-black text-base">CBUS Digital</div>
                      </div>
                    </th>
                    <th className="py-5 px-4 w-1/4">
                      <div className="text-center">
                        <div className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-1">Expensive</div>
                        <div className="text-slate-300 font-black text-base">Traditional Agency</div>
                      </div>
                    </th>
                    <th className="py-5 pl-4 pr-6 w-1/4">
                      <div className="text-center">
                        <div className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-1">Time-consuming</div>
                        <div className="text-slate-300 font-black text-base">DIY (Wix / Squarespace)</div>
                      </div>
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  {compareRows.map((row) => (
                    <tr key={row.label} className="hover:bg-white/[0.02] transition-colors">
                      <td className="py-4 pl-6 pr-4 text-slate-400 font-medium">{row.label}</td>
                      <td className="py-4 px-4 text-center text-emerald-400 font-semibold">{row.cbus}</td>
                      <td className="py-4 px-4 text-center text-slate-500">{row.agency}</td>
                      <td className="py-4 pl-4 pr-6 text-center text-slate-500">{row.diy}</td>
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
                Claim Your Free Demo →
              </a>
            </div>
          </div>
        </section>

        {/* How it works (process + risk reversal) */}
        <section className="grid-bg border-y border-white/8 py-24 px-6">
          <div className="max-w-5xl mx-auto">
            <div className="mb-16">
              <div className="text-violet-400 text-xs font-bold uppercase tracking-widest mb-3">How It Works</div>
              <h2 className="text-4xl md:text-5xl font-black text-white mb-4 leading-tight">
                You see your site<br />
                <span className="text-violet-400">before you pay anything.</span>
              </h2>
              <p className="text-slate-400 text-lg max-w-2xl">
                No deposit. No commitment. No risk. The site only costs you something if it's worth $1,997 to you.
              </p>
            </div>
            <ProcessRoadmap />
          </div>
        </section>

        {/* FAQ */}
        <section className="py-24 px-6 border-t border-white/8">
          <div className="max-w-3xl mx-auto">
            <div className="mb-12">
              <div className="text-violet-400 text-xs font-bold uppercase tracking-widest mb-3">FAQ</div>
              <h2 className="text-4xl md:text-5xl font-black text-white mb-3 leading-tight">Common questions.</h2>
              <p className="text-slate-400 text-lg">Everything you'd ask if we were on a call (which we're not).</p>
            </div>
            <div className="space-y-3">
              {faqs.map((faq) => (
                <details
                  key={faq.q}
                  className="group rounded-xl bg-white/[0.03] border border-white/10 hover:border-white/20 transition-colors"
                >
                  <summary className="flex items-center justify-between gap-4 p-5 cursor-pointer list-none">
                    <span className="text-white font-bold text-base md:text-lg">{faq.q}</span>
                    <span className="shrink-0 text-violet-400 group-open:rotate-45 transition-transform text-2xl leading-none font-light">
                      +
                    </span>
                  </summary>
                  <div className="px-5 pb-5 text-slate-300 leading-relaxed text-sm md:text-base">{faq.a}</div>
                </details>
              ))}
            </div>
            <div className="mt-12 text-center">
              <a
                href="/contact"
                className="text-violet-400 hover:text-violet-300 font-semibold transition-colors text-sm"
              >
                Still have a question? Send Kyle a message →
              </a>
            </div>
          </div>
        </section>

        {/* Set & Forget */}
        <section className="border-t border-white/8 py-20 px-6">
          <div className="max-w-3xl mx-auto">
            <div className="mb-10">
              <div className="text-violet-400 text-xs font-bold uppercase tracking-widest mb-3">Optional Add-On</div>
              <h2 className="text-3xl md:text-4xl font-black text-white mb-3">Set &amp; Forget.</h2>
              <p className="text-slate-400 text-lg">For business owners who'd rather never think about their website again.</p>
            </div>
            <div className="rounded-2xl bg-white/[0.03] border border-white/10 p-8">
              <div className="flex flex-col sm:flex-row items-start justify-between gap-6 mb-6">
                <div className="flex-1">
                  <h3 className="text-xl font-black text-white mb-2">Hosting + Unlimited Updates</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    We host your site, keep it fast and secure, and handle any content updates you need. Just send a quick email or text whenever something needs to change.
                  </p>
                </div>
                <div className="text-right shrink-0">
                  <div className="flex items-baseline gap-1 justify-end">
                    <span className="text-4xl font-black text-violet-400 tabular-nums">$149</span>
                    <span className="text-slate-400 text-base font-bold">/mo</span>
                  </div>
                  <div className="text-emerald-400 text-xs font-semibold mt-1 uppercase tracking-wider">
                    Cancel anytime
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-6 border-t border-white/5 text-sm">
                <div className="flex items-center gap-2 text-slate-300">
                  <span className="text-emerald-400">✓</span> Enterprise-grade hosting
                </div>
                <div className="flex items-center gap-2 text-slate-300">
                  <span className="text-emerald-400">✓</span> SSL + uptime monitoring
                </div>
                <div className="flex items-center gap-2 text-slate-300">
                  <span className="text-emerald-400">✓</span> Unlimited content updates
                </div>
                <div className="flex items-center gap-2 text-slate-300">
                  <span className="text-emerald-400">✓</span> Email or text — no calls
                </div>
              </div>
            </div>
          </div>
        </section>

        <CTABanner />
      </main>
      <Footer />
    </>
  );
}
