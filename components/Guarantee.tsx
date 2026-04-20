const points = [
  {
    icon: "👁️",
    title: "See it before you spend a cent",
    description:
      "We send you a live, clickable website built specifically for your business. Not a PDF. Not a screenshot. A real URL you can open on your phone and hand to anyone.",
    tag: "No payment required",
  },
  {
    icon: "💳",
    title: "Commit when you're ready — not before",
    description:
      "Only put 50% down when you've seen the demo and decided you want it. That deposit signals you're in — and unlocks unlimited revisions until it's exactly right.",
    tag: "50% to start revisions",
  },
  {
    icon: "🔁",
    title: "Unlimited revisions — no nickel and diming",
    description:
      "Wrong font. Wrong color. Wrong headline. Doesn't matter. We fix it. All of it. As many times as it takes. We don't move forward until you'd proudly show it to your best customer.",
    tag: "Unlimited changes included",
  },
  {
    icon: "🚀",
    title: "We move fast — the timeline is yours.",
    description:
      "Approve the final version. Pay the remaining 50%. We're ready to launch the moment you are — most clients go live in under a week. You own it completely, no subscriptions, no lock-in.",
    tag: "Final 50% at launch",
  },
];

export default function Guarantee() {
  return (
    <section id="guarantee" className="grid-bg border-y border-white/8 py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 glass-card text-emerald-300 text-sm font-semibold px-4 py-1.5 rounded-full mb-6">
            ✦ The CBUS Digital Guarantee
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-white leading-tight mb-5">
            We Carry All the Risk.<br />
            <span className="gradient-text">You Keep All the Upside.</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed">
            Every other web designer takes your money, disappears for weeks, and hands you something
            you have to live with. We built a model where that's impossible.
          </p>
        </div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 gap-5 mb-16">
          {points.map((point, i) => (
            <div
              key={point.title}
              className="glass-card rounded-2xl p-7 flex gap-5 items-start group hover:border-white/16 transition-all"
            >
              <div className="text-2xl shrink-0 mt-0.5">{point.icon}</div>
              <div>
                <div className="flex items-center gap-3 flex-wrap mb-2">
                  <h3 className="text-base font-bold text-white">{point.title}</h3>
                  <span className="text-[10px] font-bold bg-violet-500/15 text-violet-300 border border-violet-500/20 px-2 py-0.5 rounded-full">
                    {point.tag}
                  </span>
                </div>
                <p className="text-slate-400 text-sm leading-relaxed">{point.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom bold statement */}
        <div
          className="rounded-2xl p-8 text-center relative overflow-hidden"
          style={{ background: "linear-gradient(135deg, #14532d20, #052e1620)" }}
        >
          <div className="text-3xl font-black text-white mb-3">
            Zero risk. Zero commitment. Just a real website, built for you.
          </div>
          <p className="text-slate-400 max-w-xl mx-auto text-base leading-relaxed mb-6">
            If you see the demo and it's not right for you, you walk away. No invoice.
            No awkward follow-up. Nothing. We part ways and you keep your money.
          </p>
          <a
            href="/demo"
            className="glow-button inline-block bg-violet-600 hover:bg-violet-500 text-white font-bold px-8 py-4 rounded-xl transition-all"
          >
            Claim Your Free Demo Site →
          </a>
        </div>
      </div>
    </section>
  );
}
