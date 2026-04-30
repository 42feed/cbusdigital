"use client";

import { motion, useInView, useMotionValue, animate } from "motion/react";
import { useEffect, useRef } from "react";
import { ArrowRight } from "lucide-react";
import LighthousePanel from "./mockups/LighthousePanel";

const stats = [
  { value: 48, suffix: "h", label: "Avg. demo turnaround", sub: "From intro to live preview" },
  { value: 50, suffix: "+", label: "Pages, every Standard build", sub: "Unlimited locations & services" },
  { value: 100, suffix: "/100", label: "Lighthouse, every page", sub: "Performance · A11y · SEO · BP" },
];

export default function Stats() {
  return (
    <section className="relative px-6 py-24 border-t border-white/5">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="mono text-[12px] uppercase tracking-[0.2em] text-violet-300 mb-4">
            By the numbers
          </div>
          <h2 className="text-[36px] md:text-[48px] tracking-[-0.025em] leading-[1.05] font-bold max-w-[20ch] mx-auto">
            Built faster, cleaner, and lighter than what you&rsquo;ve been quoted.
          </h2>
        </div>

        {/* Stat row + pricing CTA */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-white/5 rounded-2xl overflow-hidden border border-white/8 mb-16">
          {stats.map((s) => (
            <Stat key={s.label} {...s} />
          ))}
          <PricingCta />
        </div>

        {/* Lighthouse panel */}
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <div className="mono text-[12px] uppercase tracking-[0.2em] text-emerald-300 mb-4">
              Verified, every build
            </div>
            <h3 className="text-[28px] md:text-[34px] tracking-[-0.02em] leading-[1.1] font-bold mb-5">
              We don&rsquo;t just say it&rsquo;s fast.<br />We ship the score.
            </h3>
            <p className="text-slate-400 leading-[1.6] mb-6">
              Every site we deliver clears Lighthouse&rsquo;s four scoring categories at
              100. Same audit Google uses to decide what ranks. Same audit you can run
              on any site we ship in 30 seconds.
            </p>
            <ul className="space-y-2 text-[14px] text-slate-300">
              {[
                "First Contentful Paint under 1s",
                "Largest Contentful Paint under 1s",
                "Zero cumulative layout shift",
                "Real-world tested on 4G mobile",
              ].map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <span className="w-1 h-1 rounded-full bg-emerald-400" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <LighthousePanel />
        </div>
      </div>
    </section>
  );
}

function PricingCta() {
  return (
    <a
      href="/pricing"
      className="group bg-[#0a0a12] p-7 md:p-8 flex flex-col justify-between transition-colors hover:bg-[#0f0f1a] relative overflow-hidden"
    >
      <div
        aria-hidden
        className="absolute -top-12 -right-12 w-40 h-40 rounded-full opacity-30 blur-2xl transition-opacity group-hover:opacity-50"
        style={{ background: "#7c3aed" }}
      />
      <div className="relative">
        <div className="text-[14px] text-white font-semibold mb-1">One flat price.</div>
        <div className="text-[12px] text-slate-500 leading-[1.4]">
          Everything included. No retainers, no upsells.
        </div>
      </div>
      <div className="relative mt-6 inline-flex items-center gap-2 text-[14px] font-semibold text-violet-300 group-hover:text-white transition-colors">
        See pricing
        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
      </div>
    </a>
  );
}

function Stat({
  value,
  suffix = "",
  prefix = "",
  label,
  sub,
}: {
  value: number;
  suffix?: string;
  prefix?: string;
  label: string;
  sub: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const mv = useMotionValue(0);
  const display = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (!inView) return;
    const controls = animate(mv, value, {
      duration: 1.4,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (v) => {
        if (display.current) {
          display.current.textContent = Math.round(v).toLocaleString();
        }
      },
    });
    return () => controls.stop();
  }, [inView, mv, value]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 12 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
      className="bg-[#0a0a12] p-7 md:p-8"
    >
      <div className="text-[40px] md:text-[52px] font-bold tabular tracking-[-0.03em] leading-none mb-3 bg-gradient-to-b from-white to-slate-400 bg-clip-text text-transparent">
        {prefix}
        <span ref={display}>0</span>
        {suffix}
      </div>
      <div className="text-[14px] text-white font-semibold mb-1">{label}</div>
      <div className="text-[12px] text-slate-500 leading-[1.4]">{sub}</div>
    </motion.div>
  );
}
