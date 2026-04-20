import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import Link from 'next/link';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import { getIndustry, getAllSlugs } from '@/lib/industries';
import type { Industry } from '@/lib/industry-types';

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const industry = getIndustry(slug);
  if (!industry) return {};
  return {
    title: industry.metaTitle,
    description: industry.metaDescription,
  };
}

// ─── Browser Mockup ────────────────────────────────────────────────────────────
function BrowserMockup({ industry }: { industry: Industry }) {
  const m = industry.mockup;
  return (
    <a
      href={industry.exampleUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="group block w-full max-w-2xl mx-auto"
    >
      {/* Chrome frame */}
      <div className="rounded-xl overflow-hidden border border-white/10 shadow-2xl bg-[#1a1a2e]">
        {/* Title bar */}
        <div className="flex items-center gap-2 px-4 py-3 bg-[#111827] border-b border-white/8">
          <span className="w-3 h-3 rounded-full bg-red-500/80" />
          <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
          <span className="w-3 h-3 rounded-full bg-green-500/80" />
          <div className="flex-1 mx-3 bg-white/8 rounded-md px-3 py-1 text-xs text-slate-500 font-mono truncate">
            {industry.exampleUrl.replace('https://', '')}
          </div>
        </div>

        {/* Simulated site — nav */}
        <div className="relative overflow-hidden">
          <div
            className="flex items-center justify-between px-5 py-3 text-white text-sm"
            style={{ background: m.navBg }}
          >
            <span className="font-black text-base tracking-tight">
              {m.navBrand}
              <span style={{ color: m.accentColor }}>{m.navAccent}</span>
            </span>
            <span
              className="text-xs font-semibold px-3 py-1 rounded-full text-white"
              style={{ background: m.accentColor }}
            >
              Call Now
            </span>
          </div>

          {/* Hero */}
          <div
            className="relative px-6 pt-8 pb-10 text-white"
            style={{ background: m.heroBg }}
          >
            {/* Glow blob */}
            <div
              className="absolute inset-0 opacity-25 blur-3xl rounded-full w-64 h-64 -top-10 -left-10 pointer-events-none"
              style={{ background: `radial-gradient(circle, ${m.glowColor}, transparent 70%)` }}
            />

            <span
              className="inline-block text-xs font-semibold px-3 py-1 rounded-full mb-3 text-white"
              style={{ background: `${m.accentColor}55`, border: `1px solid ${m.accentColor}88` }}
            >
              {m.badge}
            </span>
            <h3 className="text-lg font-black leading-snug mb-2">{m.headline}</h3>
            <p className="text-sm text-white/70 mb-5 max-w-xs">{m.sub}</p>

            <div className="flex gap-2 flex-wrap">
              <span
                className="text-xs font-bold px-4 py-2 rounded-lg text-white"
                style={{ background: m.accentColor }}
              >
                Get a Free Quote
              </span>
              <span className="text-xs font-semibold px-4 py-2 rounded-lg border border-white/30 text-white/80">
                Call Now
              </span>
            </div>

            {/* Trust bar */}
            <div className="grid grid-cols-4 gap-2 mt-6">
              {m.trustBar.map((item) => (
                <div
                  key={item}
                  className="text-center text-[9px] font-medium text-white/60 bg-white/5 rounded-md py-1 px-1 leading-tight"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>

          {/* Services grid */}
          <div className="px-5 py-4 bg-[#0d1117]">
            <p className="text-[10px] font-semibold text-slate-500 uppercase tracking-wider mb-2">
              Our Services
            </p>
            <div className="grid grid-cols-3 gap-2">
              {m.services.map((service) => (
                <div
                  key={service}
                  className="bg-white/4 border border-white/8 rounded-lg p-2 text-center text-[9px] text-slate-300 font-medium"
                >
                  {service}
                </div>
              ))}
            </div>
          </div>

          {/* Hover overlay */}
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 flex items-center justify-center transition-all duration-300 pointer-events-none">
            <span className="opacity-0 group-hover:opacity-100 transition-opacity bg-white text-[#030712] font-bold text-sm px-5 py-2 rounded-full shadow-xl">
              View Full Example Site →
            </span>
          </div>
        </div>
      </div>

      <p className="text-center text-xs text-slate-500 mt-3 group-hover:text-slate-300 transition-colors">
        Click to view the live example → {industry.exampleUrl}
      </p>
    </a>
  );
}

// ─── Page ──────────────────────────────────────────────────────────────────────
export default async function IndustryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const industry = getIndustry(slug);
  if (!industry) notFound();

  const c = industry.colors;

  return (
    <>
      <Nav />
      <main className="flex-1">

        {/* ── Hero ── */}
        <section className="relative py-24 px-6 overflow-hidden grid-bg">
          {/* Glow */}
          <div
            className="absolute -top-32 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full opacity-15 blur-3xl pointer-events-none"
            style={{ background: `radial-gradient(circle, ${c.glow}, transparent 70%)` }}
          />

          <div className="relative max-w-5xl mx-auto text-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 glass-card px-4 py-2 rounded-full text-sm font-medium mb-8">
              <span className={`w-2 h-2 rounded-full ${c.badgeDot}`} />
              <span className={c.badgeText}>Industry: {industry.name}</span>
            </div>

            <h1 className="text-5xl sm:text-6xl font-black tracking-tight leading-tight mb-6">
              {industry.heroLine1}{' '}
              <span className="gradient-text">{industry.heroLine2}</span>
            </h1>

            <p className="text-xl text-slate-400 max-w-2xl mx-auto mb-10">
              {industry.heroSub}
            </p>

            <div className="flex flex-wrap gap-4 justify-center">
              <a
                href={industry.exampleUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="border border-white/20 hover:border-white/40 text-white font-semibold px-6 py-3 rounded-lg transition-all hover:bg-white/5"
              >
                View Example Site →
              </a>
              <Link
                href="/demo"
                className="glow-button bg-violet-600 hover:bg-violet-500 text-white font-semibold px-6 py-3 rounded-lg transition-all"
              >
                Get Your Free {industry.name.split(' ')[0]} Site
              </Link>
            </div>
          </div>
        </section>

        {/* ── Browser Mockup ── */}
        <section className="py-16 px-6 bg-[#030712]">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-black mb-3">See What Your Site Could Look Like</h2>
              <p className="text-slate-400">
                A live preview of the example site we built for {industry.name.toLowerCase()}.{' '}
                Click to view it in full.
              </p>
            </div>
            <BrowserMockup industry={industry} />
          </div>
        </section>

        {/* ── Stats ── */}
        <section className="py-16 px-6">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-black text-center mb-12">
              The Numbers Behind{' '}
              <span className="gradient-text">{industry.name}</span>
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {industry.stats.map((stat) => (
                <div key={stat.label} className="glass-card rounded-xl p-6">
                  <div
                    className="text-4xl font-black mb-1"
                    style={{ color: c.glow }}
                  >
                    {stat.value}
                  </div>
                  <div className="text-sm font-bold text-white mb-1">{stat.label}</div>
                  <div className="text-xs text-slate-400 leading-relaxed">{stat.detail}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Must-Haves ── */}
        <section className="py-16 px-6 bg-white/[0.02]">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-black mb-3">What Every {industry.name.split(' ')[0]} Website Must Have</h2>
            <p className="text-slate-400 mb-10 max-w-2xl">{industry.mustHavesIntro}</p>
            <div className="grid sm:grid-cols-2 gap-5">
              {industry.mustHaves.map((item) => (
                <div key={item.title} className="glass-card rounded-xl p-5 flex gap-4">
                  <span className="text-2xl flex-shrink-0">{item.icon}</span>
                  <div>
                    <div className="font-bold text-white mb-1">{item.title}</div>
                    <div className="text-sm text-slate-400 leading-relaxed">{item.description}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── SEO Strategy ── */}
        <section className="py-16 px-6">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-black mb-10">Local SEO Strategy</h2>
            <div className="grid lg:grid-cols-2 gap-8 items-start">
              {/* Left: blurb */}
              <div>
                <p className="text-slate-300 leading-relaxed mb-6">{industry.seoBlurb}</p>
                <div className="flex flex-wrap gap-2">
                  {industry.seoKeywords.map((kw) => (
                    <span
                      key={kw}
                      className={`text-xs font-medium px-3 py-1 rounded-full border ${c.seoCardBorder} text-slate-300 bg-white/4`}
                    >
                      {kw}
                    </span>
                  ))}
                </div>
              </div>

              {/* Right: GBP card */}
              <div
                className={`rounded-xl p-6 border ${c.seoCardBorder}`}
                style={{ background: c.seoCardBg }}
              >
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xl">📍</span>
                  <span className="font-bold text-white">Google Business Profile</span>
                </div>
                <p className="text-sm text-slate-300 leading-relaxed">{industry.gbpNote}</p>
              </div>
            </div>
          </div>
        </section>

        {/* ── Design Principles ── */}
        <section className="py-16 px-6 bg-white/[0.02]">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-black mb-2">{industry.designHeadline}</h2>
            <p className="text-slate-400 mb-10">{industry.designSub}</p>
            <div className="grid sm:grid-cols-2 gap-5">
              {industry.designPrinciples.map((p, i) => (
                <div key={p.title} className="glass-card rounded-xl p-5">
                  <div className="flex items-center gap-3 mb-2">
                    <span
                      className="w-7 h-7 rounded-full flex items-center justify-center text-xs font-black text-white"
                      style={{ background: c.glow }}
                    >
                      {i + 1}
                    </span>
                    <span className="font-bold text-white">{p.title}</span>
                  </div>
                  <p className="text-sm text-slate-400 leading-relaxed pl-10">{p.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Page Structure ── */}
        <section className="py-16 px-6">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-black mb-3">Recommended Page Structure</h2>
            <p className="text-slate-400 mb-8">
              The section order that converts best for {industry.name.toLowerCase()}, based on how customers
              research and decide.
            </p>
            <div className="space-y-3">
              {industry.pageStructure.map(([section, desc], i) => (
                <div key={section} className="glass-card rounded-xl px-5 py-4 flex items-start gap-4">
                  <span
                    className="w-8 h-8 rounded-full flex items-center justify-center text-sm font-black text-white flex-shrink-0 mt-0.5"
                    style={{ background: c.glow }}
                  >
                    {i + 1}
                  </span>
                  <div>
                    <span className="font-bold text-white">{section}</span>
                    <span className="text-slate-400"> — </span>
                    <span className="text-slate-400 text-sm">{desc}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Bottom CTA ── */}
        <section
          className="py-20 px-6 text-center"
          style={{ background: c.ctaGradient }}
        >
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-black mb-4">{industry.ctaTitle}</h2>
            <p className="text-white/80 text-lg mb-8">{industry.ctaSub}</p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                href="/demo"
                className="bg-white text-[#030712] font-bold px-8 py-4 rounded-xl hover:bg-white/90 transition-colors text-lg"
              >
                Start My Free Demo
              </Link>
              <a
                href={industry.exampleUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="border border-white/40 text-white font-semibold px-8 py-4 rounded-xl hover:bg-white/10 transition-colors text-lg"
              >
                View Example Site
              </a>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
