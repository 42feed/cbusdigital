"use client";

import { motion, useMotionValue, useSpring, useTransform } from "motion/react";
import { useRef, useState } from "react";
import {
  ArrowRight,
  Lock,
  RefreshCw,
  Sparkles,
  CheckCircle2,
} from "lucide-react";
import SitePreviewCard from "./mockups/SitePreviewCard";
import RotatingText from "@/components/RotatingText";

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const } },
};

export default function Hero() {
  return (
    <section className="relative overflow-hidden px-6 pt-14 pb-28 home-grid-bg">
      {/* Glow blobs */}
      <div aria-hidden className="absolute inset-0 pointer-events-none">
        <div
          className="glow-blob -top-40 -left-20 w-[600px] h-[500px] opacity-30"
          style={{ background: "radial-gradient(ellipse, #7c3aed, transparent 70%)" }}
        />
        <div
          className="glow-blob top-1/2 -right-40 w-[500px] h-[500px] opacity-20"
          style={{ background: "radial-gradient(ellipse, #22d3ee, transparent 70%)" }}
        />
        <div
          className="glow-blob bottom-0 left-1/3 w-[400px] h-[400px] opacity-15"
          style={{ background: "radial-gradient(ellipse, #34d399, transparent 70%)" }}
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto grid md:grid-cols-12 gap-12 items-center">
        {/* Left: copy */}
        <motion.div
          initial="hidden"
          animate="show"
          variants={stagger}
          className="md:col-span-7"
        >
          <motion.div
            variants={fadeUp}
            className="inline-flex items-center gap-2 text-[12px] mono uppercase tracking-[0.2em] text-violet-300 border border-violet-500/25 bg-violet-500/8 rounded-full px-3 py-1.5 mb-8"
          >
            <span className="relative flex w-1.5 h-1.5">
              <span className="absolute inline-flex w-full h-full rounded-full bg-violet-400 opacity-75 ping-soft" />
              <span className="relative inline-flex w-1.5 h-1.5 rounded-full bg-violet-400" />
            </span>
            Serving All of Columbus, OH
          </motion.div>

          <motion.h1
            variants={fadeUp}
            className="text-[40px] sm:text-[54px] md:text-[60px] leading-[1.02] tracking-[-0.035em] font-bold mb-5"
          >
            <span className="sm:whitespace-nowrap">Columbus Web Design</span>
            <br />
            for <span className="gradient-text">Local Service Businesses</span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            aria-hidden="true"
            className="text-[20px] sm:text-[22px] text-slate-300 mb-6"
          >
            Built for <RotatingText />
          </motion.p>

          <span className="sr-only">
            Web design for plumbers, HVAC companies, landscapers, cleaning
            services, roofers, electricians, contractors, painters, auto
            detailers, pest control, tree service, pressure washing, handymen,
            pool service, locksmiths, chiropractors, med spas, attorneys,
            accountants, personal trainers, dog groomers, moving companies,
            photographers, tutors, flooring companies, window cleaning,
            appliance repair, fence companies, garage door installers, and
            dumpster rental companies in Columbus, Ohio.
          </span>

          <motion.p
            variants={fadeUp}
            className="text-[18px] text-slate-400 mb-10 leading-[1.55] max-w-[52ch]"
          >
            We design the first draft of your custom site upfront — at zero cost.
            You see it live, we refine until every detail is right, and you only pay
            when you love it.
          </motion.p>

          <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-3 mb-8">
            <a
              href="/demo"
              className="group inline-flex items-center justify-center gap-2 bg-violet-600 hover:bg-violet-500 text-white text-[15px] font-semibold px-6 py-3.5 rounded-xl transition-colors"
              style={{ boxShadow: "0 0 32px rgba(124, 58, 237, 0.45)" }}
            >
              Claim your free demo
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href="#process"
              className="inline-flex items-center justify-center gap-2 bg-white/5 hover:bg-white/8 border border-white/10 text-slate-200 text-[15px] font-semibold px-6 py-3.5 rounded-xl transition-colors"
            >
              <Sparkles className="w-4 h-4 text-violet-300" />
              How it works
            </a>
          </motion.div>

          <motion.div
            variants={fadeUp}
            className="flex flex-wrap gap-x-6 gap-y-2 text-[13px] text-slate-500"
          >
            {[
              { Icon: Lock, label: "See it before you pay" },
              { Icon: RefreshCw, label: "Unlimited revisions" },
              { Icon: CheckCircle2, label: "You own it forever" },
            ].map(({ Icon, label }) => (
              <div key={label} className="inline-flex items-center gap-1.5">
                <Icon className="w-3.5 h-3.5 text-slate-500" strokeWidth={2} />
                {label}
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* Right: tilt mockup + activity toast */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92, y: 32 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.25 }}
          className="md:col-span-5 relative flex justify-center md:justify-end"
        >
          <TiltMockup />

          {/* Floating activity toast */}
          <ActivityToast />
        </motion.div>
      </div>
    </section>
  );
}

function TiltMockup() {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 200, damping: 20 });
  const sy = useSpring(y, { stiffness: 200, damping: 20 });
  const rotateX = useTransform(sy, [-0.5, 0.5], [8, -8]);
  const rotateY = useTransform(sx, [-0.5, 0.5], [-10, 10]);

  const [pos, setPos] = useState({ px: 50, py: 50 });

  function onMove(e: React.MouseEvent<HTMLDivElement>) {
    const r = ref.current?.getBoundingClientRect();
    if (!r) return;
    const px = (e.clientX - r.left) / r.width;
    const py = (e.clientY - r.top) / r.height;
    x.set(px - 0.5);
    y.set(py - 0.5);
    setPos({ px: px * 100, py: py * 100 });
  }

  function onLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      animate={{ y: [0, -10, 0] }}
      transition={{ y: { duration: 5.5, repeat: Infinity, ease: "easeInOut" } }}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d", perspective: 1200 }}
      className="relative"
    >
      <div className="beam-card p-[1.5px]">
        <div className="relative rounded-[20px] overflow-hidden bg-[#0b0b13]">
          {/* Spotlight that follows cursor */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 transition-opacity duration-300"
            style={{
              background: `radial-gradient(220px circle at ${pos.px}% ${pos.py}%, rgba(167, 139, 250, 0.18), transparent 60%)`,
              mixBlendMode: "screen",
            }}
          />
          <SitePreviewCard />
        </div>
      </div>
    </motion.div>
  );
}

function ActivityToast() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.2, duration: 0.6 }}
      className="absolute top-2 left-2 md:-top-3 md:-left-16 toast-in z-20"
    >
      <div className="home-card-edge px-4 py-3 flex items-center gap-3 max-w-[260px] shadow-xl shadow-black/40">
        <div className="relative shrink-0">
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-emerald-400 to-cyan-500 flex items-center justify-center">
            <Sparkles className="w-4 h-4 text-white" strokeWidth={2.5} />
          </div>
          <span className="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-emerald-400 border-2 border-[#11111a]" />
        </div>
        <div className="min-w-0">
          <div className="text-[12px] font-semibold text-white truncate">
            Demo sent · Worthington
          </div>
          <div className="text-[11px] text-slate-400 mono truncate">2m ago</div>
        </div>
      </div>
    </motion.div>
  );
}
