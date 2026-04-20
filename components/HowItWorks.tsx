const steps = [
  {
    number: "01",
    title: "You reach out. We do everything else.",
    description:
      "Send one email. That's your entire workload. We research your business, pull your reviews, and get to work. No forms, no intake calls, no homework.",
    outcome: "Your time investment: 5 minutes",
    accent: "#7c3aed",
  },
  {
    number: "02",
    title: "A live, personalized site lands in your inbox.",
    description:
      "Within 1–2 business days, you get a link to a fully built website — your name, your services, your area. Click through it on your phone like a customer would.",
    outcome: "No mockups. A real, live URL.",
    accent: "#2563eb",
  },
  {
    number: "03",
    title: "Love it? We move fast — the timeline is yours.",
    description:
      "Put 50% down to lock it in. We refine anything you want — unlimited changes until it's exactly right. We're ready to launch the moment you give us the green light.",
    outcome: "Most clients are live in under a week.",
    accent: "#0891b2",
  },
];

export default function HowItWorks() {
  return (
    <section className="py-24 px-6 border-t border-white/8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 glass-card text-violet-300 text-sm font-semibold px-4 py-1.5 rounded-full mb-6">
            ✦ Zero Risk. Zero Wasted Time.
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
            The Simplest Way to Get<br />a Website That Actually Works
          </h2>
          <p className="text-lg text-slate-400 max-w-xl mx-auto">
            No contracts upfront. No discovery calls. No paying before you see anything.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {steps.map((step) => (
            <div
              key={step.number}
              className="glass-card rounded-2xl p-8 relative overflow-hidden group hover:border-white/16 transition-all flex flex-col"
            >
              <div
                className="absolute -top-8 -right-8 w-36 h-36 rounded-full opacity-10 group-hover:opacity-20 transition-opacity"
                style={{ background: `radial-gradient(circle, ${step.accent}, transparent 70%)` }}
              />
              <div
                className="text-5xl font-black mb-5 leading-none"
                style={{ color: step.accent, opacity: 0.35 }}
              >
                {step.number}
              </div>
              <h3 className="text-lg font-bold text-white mb-3 leading-snug">{step.title}</h3>
              <p className="text-slate-400 leading-relaxed text-sm flex-1">{step.description}</p>
              <div className="mt-5 pt-4 border-t border-white/8 text-xs font-semibold text-violet-300">
                {step.outcome}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
