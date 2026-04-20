import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Contact — CBUS Digital",
  description: "Have a question before requesting your demo? Reach out to Kyle directly.",
};

export default function ContactPage() {
  return (
    <>
      <Nav />
      <main className="flex-1">
        <section className="relative grid-bg overflow-hidden py-24 px-6 min-h-[80vh] flex items-center">
          <div
            className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 w-[600px] h-[400px] rounded-full opacity-15"
            style={{ background: "radial-gradient(ellipse, #7c3aed, transparent 70%)" }}
            aria-hidden="true"
          />

          <div className="relative max-w-5xl mx-auto w-full grid md:grid-cols-2 gap-16 items-start">
            {/* Left */}
            <div>
              <div className="inline-flex items-center gap-2 glass-card text-violet-300 text-sm font-semibold px-4 py-1.5 rounded-full mb-6">
                <span className="w-2 h-2 bg-violet-400 rounded-full animate-pulse" />
                Columbus, OH
              </div>
              <h1 className="text-4xl md:text-5xl font-black text-white mb-5 leading-tight">
                Have a Question?<br />
                <span className="gradient-text">Let's Talk.</span>
              </h1>
              <p className="text-slate-400 text-lg leading-relaxed mb-8">
                If you're not quite ready to request your demo site but have a question first, send a message and I'll get back to you personally — usually within a few hours.
              </p>

              {/* Nudge toward demo */}
              <div
                className="rounded-2xl p-6 border border-violet-500/30"
                style={{ background: "linear-gradient(145deg, #2e106520, #1e3a8a20)" }}
              >
                <p className="text-white font-bold mb-2">Ready to see your site?</p>
                <p className="text-slate-400 text-sm mb-4">
                  The fastest way to get started is to claim your free demo. Takes 3 minutes — no payment, no commitment.
                </p>
                <a
                  href="/demo"
                  className="glow-button inline-block bg-violet-600 hover:bg-violet-500 text-white font-bold px-6 py-3 rounded-xl transition-all text-sm"
                >
                  Claim Your Free Demo Site →
                </a>
              </div>

              <div className="mt-8">
                <p className="text-slate-500 text-sm">Or email directly:</p>
                <a
                  href="mailto:kyle@cbusdigital.com"
                  className="text-violet-400 hover:text-violet-300 font-semibold transition-colors"
                >
                  kyle@cbusdigital.com
                </a>
              </div>
            </div>

            {/* Right — simple contact form */}
            <div className="glass-card rounded-2xl p-8">
              <h2 className="text-xl font-black text-white mb-6">Send a Message</h2>
              <form
                action={`https://formspree.io/f/${process.env.NEXT_PUBLIC_FORMSPREE_ID}`}
                method="POST"
                className="space-y-4"
              >
                <div>
                  <label className="text-xs font-bold text-slate-500 uppercase tracking-widest block mb-2">Your Name</label>
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="First name"
                    className="w-full bg-white/5 border border-white/12 text-white placeholder-slate-600 rounded-xl px-4 py-3 text-sm outline-none focus:border-violet-500/60 focus:bg-white/8 transition-all"
                  />
                </div>
                <div>
                  <label className="text-xs font-bold text-slate-500 uppercase tracking-widest block mb-2">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="you@example.com"
                    className="w-full bg-white/5 border border-white/12 text-white placeholder-slate-600 rounded-xl px-4 py-3 text-sm outline-none focus:border-violet-500/60 focus:bg-white/8 transition-all"
                  />
                </div>
                <div>
                  <label className="text-xs font-bold text-slate-500 uppercase tracking-widest block mb-2">Message</label>
                  <textarea
                    name="message"
                    required
                    rows={5}
                    placeholder="What's on your mind?"
                    className="w-full bg-white/5 border border-white/12 text-white placeholder-slate-600 rounded-xl px-4 py-3 text-sm outline-none focus:border-violet-500/60 focus:bg-white/8 transition-all resize-none"
                  />
                </div>
                <input type="hidden" name="_subject" value="New Contact Message — CBUS Digital" />
                <button
                  type="submit"
                  className="w-full glow-button bg-violet-600 hover:bg-violet-500 text-white font-bold py-3.5 rounded-xl transition-all"
                >
                  Send Message →
                </button>
                <p className="text-slate-600 text-xs text-center">Typically responds within a few hours.</p>
              </form>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
