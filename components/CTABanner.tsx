export default function CTABanner() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <div
          className="relative rounded-3xl overflow-hidden p-12 md:p-16 text-center"
          style={{ background: "linear-gradient(135deg, #4c1d95, #1e40af, #0e7490)" }}
        >
          {/* Subtle grain */}
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E\")",
            }}
            aria-hidden="true"
          />

          <div className="relative">
            <div className="text-blue-200 text-sm font-semibold uppercase tracking-widest mb-4">
              Zero risk · Zero upfront · Zero obligation
            </div>

            <h2 className="text-4xl md:text-5xl font-black text-white mb-4 leading-tight">
              Your Next Customer Is Searching Right Now.
            </h2>

            <p className="text-blue-100 text-lg mb-4 max-w-xl mx-auto leading-relaxed">
              Every day without a professional website is a day your competitors get the call instead of you. We'll build yours for free — you see it before you pay anything.
            </p>

            <p className="text-white font-bold text-xl mb-10">
              All it takes is three minutes to get started.
            </p>

            <a
              href="/demo"
              className="inline-block bg-white hover:bg-slate-50 text-violet-700 text-lg font-black px-12 py-4 rounded-xl transition-colors shadow-2xl"
            >
              Claim Your Free Demo Site →
            </a>

            <p className="text-blue-200/60 text-sm mt-6">
              Responds within a few hours · No sales call required · 100% free to see your demo
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
