const pains = [
  {
    stat: "75%",
    label: "of people judge your credibility by your website",
    sub: "No site — or a bad one — and you've already lost them before they call.",
  },
  {
    stat: "97%",
    label: "of consumers search online before buying local",
    sub: "If you're not showing up, your competitor is. Every single day.",
  },
  {
    stat: "$0",
    label: "in new business from customers who can't find you",
    sub: "A professional website isn't a cost. It's the thing that makes every other dollar you spend work harder.",
  },
];

export default function Stakes() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-black text-white leading-tight mb-4">
            Every Day Without a Website,<br />
            <span className="gradient-text">Your Competitor Gets the Call.</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-xl mx-auto">
            Columbus customers are searching right now. The question is whether they find you — or someone else.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-14">
          {pains.map((pain) => (
            <div
              key={pain.stat}
              className="glass-card rounded-2xl p-8 text-center group hover:border-white/16 transition-all"
            >
              <div className="text-5xl font-black gradient-text mb-3">{pain.stat}</div>
              <div className="text-white font-semibold mb-2 leading-snug">{pain.label}</div>
              <div className="text-slate-500 text-sm leading-relaxed">{pain.sub}</div>
            </div>
          ))}
        </div>

        {/* Bridge to solution */}
        <div
          className="rounded-2xl p-8 md:p-10 text-center relative overflow-hidden"
          style={{ background: "linear-gradient(135deg, #1e1b4b, #0f172a)" }}
        >
          <div
            className="pointer-events-none absolute inset-0 opacity-20"
            style={{ background: "radial-gradient(ellipse at center, #7c3aed, transparent 70%)" }}
            aria-hidden="true"
          />
          <div className="relative">
            <p className="text-2xl md:text-3xl font-black text-white leading-snug mb-4">
              One new customer from your website covers the entire investment.
            </p>
            <p className="text-slate-400 text-base max-w-xl mx-auto mb-8">
              A plumber charging $300/job needs 3 calls. An HVAC tech charging $500/visit needs 2.
              The math works. The only question is when you decide to start.
            </p>
            <a
              href="/demo"
              className="glow-button inline-block bg-violet-600 hover:bg-violet-500 text-white font-bold px-8 py-4 rounded-xl transition-all"
            >
              Claim Your Free Demo Site →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
