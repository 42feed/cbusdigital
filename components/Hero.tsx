import Link from "next/link";
import RotatingText from "@/components/RotatingText";
import MockupPreview from "@/components/MockupPreview";

export default function Hero() {
  return (
    <section className="relative grid-bg overflow-hidden px-6 py-20 md:py-28">
      {/* Glow blobs */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div
          className="absolute -top-40 -left-20 w-[600px] h-[500px] rounded-full opacity-15"
          style={{ background: "radial-gradient(ellipse, #7c3aed, transparent 70%)" }}
        />
        <div
          className="absolute top-1/2 -right-40 w-[400px] h-[400px] rounded-full opacity-10"
          style={{ background: "radial-gradient(ellipse, #0891b2, transparent 70%)" }}
        />
      </div>

      <div className="relative max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Left: copy */}
        <div>
          <div className="inline-flex items-center gap-2 glass-card text-violet-300 text-sm font-semibold px-4 py-1.5 rounded-full mb-8">
            <span className="w-2 h-2 bg-violet-400 rounded-full animate-pulse" />
            Serving All of Columbus, OH
          </div>

          <h1 className="text-5xl md:text-6xl font-black leading-tight tracking-tight mb-6 text-white">
            Websites Built for<br />
            <RotatingText />
          </h1>

          <p className="text-lg text-slate-400 mb-10 leading-relaxed max-w-lg">
            We build modern, high-converting websites for Columbus service businesses — and you
            see yours live before paying a cent.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="/demo"
              className="glow-button bg-violet-600 hover:bg-violet-500 text-white text-lg font-bold px-8 py-4 rounded-xl transition-all text-center"
            >
              Claim Your Free Demo Site →
            </a>
            <a
              href="#guarantee"
              className="glass-card hover:bg-white/8 text-slate-200 text-lg font-bold px-8 py-4 rounded-xl transition-all text-center"
            >
              How It Works
            </a>
          </div>

          {/* Trust badges */}
          <div className="flex flex-wrap gap-x-5 gap-y-2 mt-6">
            {[
              { icon: "🔒", label: "See it before you pay" },
              { icon: "🔁", label: "Unlimited revisions" },
              { icon: "🏆", label: "You own it — no lock-in, ever" },
            ].map((badge) => (
              <div key={badge.label} className="flex items-center gap-1.5 text-sm text-slate-500">
                <span>{badge.icon}</span>
                <span>{badge.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right: floating mockup */}
        <div className="flex justify-center md:justify-end">
          <div className="float-anim">
            <MockupPreview />
          </div>
        </div>
      </div>
    </section>
  );
}
