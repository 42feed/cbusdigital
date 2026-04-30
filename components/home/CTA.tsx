import { ArrowRight, Sparkles } from "lucide-react";

export default function CTA() {
  return (
    <section className="relative px-6 py-24 border-t border-white/5">
      <div className="max-w-5xl mx-auto">
        <div className="beam-card p-[1.5px]">
          <div className="rounded-[20px] bg-[#0a0a14] p-12 md:p-16 text-center relative overflow-hidden">
            <div
              aria-hidden
              className="absolute -top-32 left-1/2 -translate-x-1/2 w-[500px] h-[400px] rounded-full opacity-30 blur-3xl"
              style={{ background: "radial-gradient(circle, #7c3aed, transparent 70%)" }}
            />
            <div className="relative">
              <div className="inline-flex items-center gap-2 mono text-[12px] uppercase tracking-[0.2em] text-violet-300 border border-violet-500/25 bg-violet-500/8 rounded-full px-3 py-1.5 mb-6">
                <Sparkles className="w-3 h-3" />
                See it before you pay
              </div>
              <h2 className="text-[36px] md:text-[52px] font-bold tracking-[-0.025em] leading-[1.05] mb-5 max-w-[18ch] mx-auto">
                Your demo could be in your inbox{" "}
                <span className="bg-gradient-to-r from-violet-400 to-cyan-300 bg-clip-text text-transparent">
                  by Wednesday.
                </span>
              </h2>
              <p className="text-slate-400 text-[17px] max-w-[50ch] mx-auto leading-[1.6] mb-10">
                Send a quick message — your business name, what you do, where you serve.
                That&rsquo;s the whole intake form. We&rsquo;ll send you a live link within
                two business days.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <a
                  href="#"
                  className="group inline-flex items-center justify-center gap-2 bg-violet-600 hover:bg-violet-500 text-white text-[15px] font-semibold px-7 py-3.5 rounded-xl transition-colors"
                  style={{ boxShadow: "0 0 32px rgba(124, 58, 237, 0.45)" }}
                >
                  Claim your free demo
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                </a>
                <a
                  href="#"
                  className="inline-flex items-center justify-center gap-2 bg-white/5 hover:bg-white/8 border border-white/10 text-slate-200 text-[15px] font-semibold px-7 py-3.5 rounded-xl transition-colors"
                >
                  See pricing
                </a>
              </div>

              <div className="mt-8 flex items-center justify-center gap-1.5 text-[13px] text-slate-500">
                <span className="w-1 h-1 rounded-full bg-emerald-400" />
                Currently accepting 3 new builds this month
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
