"use client";

import { motion } from "motion/react";
import {
  MessageSquare,
  Inbox,
  Eye,
  CreditCard,
  Rocket,
  ArrowRight,
} from "lucide-react";
import InboxPreview from "./mockups/InboxPreview";

const phases = [
  {
    label: "Day 0",
    title: "You reach out",
    desc: "Send a quick message — name, business, city. We take it from there.",
    Icon: MessageSquare,
    accent: "violet",
  },
  {
    label: "Day 1–2",
    title: "Your demo lands in your inbox",
    desc: "A real, clickable site. Your services, your area. No PDFs, no mockups.",
    Icon: Inbox,
    accent: "cyan",
  },
  {
    label: "Day 2",
    title: "You see it free",
    desc: "Open it, share it, sleep on it. First look is always free — no strings.",
    Icon: Eye,
    accent: "emerald",
  },
  {
    label: "Day 3",
    title: "50% deposit unlocks the custom build",
    desc: "Your logo, team photos, custom galleries — every detail becomes yours.",
    Icon: CreditCard,
    accent: "fuchsia",
  },
  {
    label: "Launch",
    title: "Live on your domain",
    desc: "Final 50% on launch day. Full ownership, no lock-in, no ongoing fees.",
    Icon: Rocket,
    accent: "amber",
  },
];

const accentMap = {
  violet:  { ring: "border-violet-500/30",  bg: "bg-violet-500/10",  text: "text-violet-300",  dot: "bg-violet-400" },
  cyan:    { ring: "border-cyan-500/30",    bg: "bg-cyan-500/10",    text: "text-cyan-300",    dot: "bg-cyan-400" },
  emerald: { ring: "border-emerald-500/30", bg: "bg-emerald-500/10", text: "text-emerald-300", dot: "bg-emerald-400" },
  fuchsia: { ring: "border-fuchsia-500/30", bg: "bg-fuchsia-500/10", text: "text-fuchsia-300", dot: "bg-fuchsia-400" },
  amber:   { ring: "border-amber-500/30",   bg: "bg-amber-500/10",   text: "text-amber-300",   dot: "bg-amber-400" },
} as const;

export default function Process() {
  return (
    <section id="process" className="relative px-6 py-24 border-t border-white/5">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-12 gap-10 mb-16">
          <div className="md:col-span-5">
            <div className="mono text-[12px] uppercase tracking-[0.2em] text-violet-300 mb-4">
              The process
            </div>
            <h2 className="text-[36px] md:text-[44px] tracking-[-0.025em] leading-[1.05] font-bold">
              Five steps. <br />
              No surprises. <br />
              <span className="bg-gradient-to-r from-violet-400 to-cyan-300 bg-clip-text text-transparent">
                You hold the wheel.
              </span>
            </h2>
          </div>
          <div className="md:col-span-7 md:pt-3">
            <p className="text-slate-400 text-[17px] leading-[1.6]">
              Most agencies make you trust them upfront. We&rsquo;d rather earn it. Here&rsquo;s
              exactly what happens — and where the money lands at each stage.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-12 gap-8 items-start">
          {/* Phase list */}
          <div className="md:col-span-7 space-y-3">
            {phases.map((p, i) => {
              const a = accentMap[p.accent as keyof typeof accentMap];
              return (
                <motion.div
                  key={p.title}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.5, delay: i * 0.06 }}
                  className="lift home-card-glass p-5 flex items-start gap-5"
                >
                  <div className="flex flex-col items-center gap-1 shrink-0">
                    <div className={`w-11 h-11 rounded-xl ${a.bg} ${a.ring} border flex items-center justify-center`}>
                      <p.Icon className={`w-5 h-5 ${a.text}`} strokeWidth={2} />
                    </div>
                    {i < phases.length - 1 && (
                      <div className="w-px h-6 bg-white/8" />
                    )}
                  </div>
                  <div className="flex-1 min-w-0 pt-1">
                    <div className="flex items-center gap-3 mb-1">
                      <span className={`mono text-[11px] uppercase tracking-widest ${a.text}`}>
                        {p.label}
                      </span>
                      <span className={`w-1 h-1 rounded-full ${a.dot}`} />
                      <span className="mono text-[11px] uppercase tracking-widest text-slate-600">
                        Step {String(i + 1).padStart(2, "0")}
                      </span>
                    </div>
                    <div className="text-[16px] font-semibold text-white mb-1">
                      {p.title}
                    </div>
                    <div className="text-[14px] text-slate-400 leading-[1.5]">
                      {p.desc}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Side: inbox mockup as anchor visual */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="md:col-span-5 md:sticky md:top-24"
          >
            <div className="mono text-[11px] uppercase tracking-[0.2em] text-slate-500 mb-3">
              An actual demo email
            </div>
            <InboxPreview />
            <div className="mt-5 flex items-center gap-2 text-[13px] text-slate-500">
              <ArrowRight className="w-3.5 h-3.5" />
              <span>This is what step 2 looks like for every customer.</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
