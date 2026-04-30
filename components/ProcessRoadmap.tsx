"use client";

import { useState } from "react";

const steps = [
  {
    number: "01",
    title: "You reach out",
    description: "Send a quick message or fill out the form. Tell us your business name, industry, and what you're looking for. That's it — we take it from there.",
    duration: "5 min",
    icon: "✉️",
    phase: "Start",
  },
  {
    number: "02",
    title: "We research your business",
    description: "We pull your Google listing, reviews, service area, and any existing online presence. You don't need to provide anything yet.",
    duration: "Same day",
    icon: "🔍",
    phase: "Start",
  },
  {
    number: "03",
    title: "We build your demo",
    description: "A fully personalized, live website — your name, your services, your area. Not a mockup. Not a PDF. A real, clickable site you can open on your phone.",
    duration: "1–2 business days",
    icon: "⚡",
    phase: "Build",
  },
  {
    number: "04",
    title: "You see it for free",
    description: "We send you the live link. Browse it, show your spouse, show a business partner. First look is always free — no payment, no pressure, no strings.",
    duration: "Your call",
    icon: "👁️",
    phase: "Build",
  },
  {
    number: "05",
    title: "50% deposit unlocks the custom build",
    description: "If you love what you see, you put 50% down. That's your signal to us that you're in — and it unlocks the full custom build phase, where the site becomes truly yours.",
    duration: "Instant",
    icon: "💳",
    phase: "Refine",
  },
  {
    number: "06",
    title: "We make it yours",
    description: "Send over your logo, team photos, photo galleries of your work, and any custom assets — they all get incorporated into the site. Wrong font, wrong color, wrong headline? Doesn't matter — we revise it. As many rounds as it takes until you'd proudly send that URL to your best customer.",
    duration: "1–3 rounds",
    icon: "🔁",
    phase: "Refine",
  },
  {
    number: "07",
    title: "You approve the final version",
    description: "When everything is exactly right, you give us the green light. This is the moment it gets real.",
    duration: "Your call",
    icon: "✅",
    phase: "Refine",
  },
  {
    number: "08",
    title: "Your site goes live",
    description: "We handle the domain, hosting, and all technical setup. We're ready to launch the moment you approve — we move as fast as you provide us the go-ahead.",
    duration: "24 hrs",
    icon: "🚀",
    phase: "Launch",
  },
  {
    number: "09",
    title: "Final 50% — yours forever",
    description: "Last payment collected on launch day. The site is 100% yours. No lock-in, no ongoing fees unless you want our monthly support retainer.",
    duration: "Launch day",
    icon: "🏆",
    phase: "Launch",
  },
];

const phases = ["Start", "Build", "Refine", "Launch"];

const phaseColors: Record<string, { text: string; bg: string; border: string; glow: string }> = {
  Start:  { text: "text-blue-300",   bg: "bg-blue-500/10",   border: "border-blue-500/30",   glow: "#3b82f6" },
  Build:  { text: "text-violet-300", bg: "bg-violet-500/10", border: "border-violet-500/30", glow: "#7c3aed" },
  Refine: { text: "text-cyan-300",   bg: "bg-cyan-500/10",   border: "border-cyan-500/30",   glow: "#0891b2" },
  Launch: { text: "text-emerald-300",bg: "bg-emerald-500/10",border: "border-emerald-500/30",glow: "#059669" },
};

export default function ProcessRoadmap() {
  const [active, setActive] = useState(0);

  const activeStep = steps[active];
  const colors = phaseColors[activeStep.phase];

  return (
    <div className="max-w-5xl mx-auto">
      {/* Phase labels */}
      <div className="flex justify-between mb-6 px-1">
        {phases.map((phase) => {
          const c = phaseColors[phase];
          const isActive = activeStep.phase === phase;
          return (
            <div
              key={phase}
              className={`text-xs font-bold uppercase tracking-widest transition-all ${
                isActive ? c.text : "text-slate-600"
              }`}
            >
              {phase}
            </div>
          );
        })}
      </div>

      {/* Progress bar */}
      <div className="relative h-1 bg-white/5 rounded-full mb-8 overflow-hidden">
        <div
          className="absolute left-0 top-0 h-full rounded-full transition-all duration-500"
          style={{
            width: `${((active + 1) / steps.length) * 100}%`,
            background: "linear-gradient(90deg, #3b82f6, #7c3aed, #0891b2, #059669)",
          }}
        />
      </div>

      {/* Step bubbles */}
      <div className="flex items-center justify-between gap-1 mb-10">
        {steps.map((step, i) => {
          const c = phaseColors[step.phase];
          const isActive = i === active;
          const isDone = i < active;
          return (
            <button
              key={step.number}
              onClick={() => setActive(i)}
              className="flex flex-col items-center gap-1.5 group flex-1"
              aria-label={step.title}
            >
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-black border transition-all duration-300 ${
                  isActive
                    ? `${c.bg} ${c.border} ${c.text} scale-110 shadow-lg`
                    : isDone
                    ? "bg-white/8 border-white/20 text-slate-300"
                    : "bg-white/3 border-white/8 text-slate-600 group-hover:border-white/20 group-hover:text-slate-400"
                }`}
                style={isActive ? { boxShadow: `0 0 16px ${c.glow}40` } : {}}
              >
                {isDone ? "✓" : step.number}
              </div>
              <span
                className={`text-[10px] font-semibold hidden sm:block text-center leading-tight transition-colors ${
                  isActive ? c.text : isDone ? "text-slate-500" : "text-slate-700"
                }`}
              >
                {step.title}
              </span>
            </button>
          );
        })}
      </div>

      {/* Detail card */}
      <div
        key={active}
        className={`rounded-2xl border p-8 md:p-10 transition-all duration-300 ${colors.bg} ${colors.border}`}
        style={{ boxShadow: `0 0 40px ${colors.glow}15` }}
      >
        <div className="flex flex-col md:flex-row md:items-start gap-6">
          <div className="flex items-center gap-4 md:flex-col md:items-center md:gap-2 shrink-0">
            <div className="text-4xl">{activeStep.icon}</div>
            <div className={`text-xs font-bold uppercase tracking-widest ${colors.text} md:text-center`}>
              Step {activeStep.number}
            </div>
          </div>

          <div className="flex-1">
            <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
              <h3 className="text-2xl font-black text-white">{activeStep.title}</h3>
              <span className={`text-xs font-bold px-3 py-1 rounded-full ${colors.bg} ${colors.border} ${colors.text} border`}>
                {activeStep.duration}
              </span>
            </div>
            <p className="text-slate-300 leading-relaxed text-base">{activeStep.description}</p>
          </div>
        </div>

        {/* Prev / Next */}
        <div className="flex justify-between mt-8 pt-6 border-t border-white/8">
          <button
            onClick={() => setActive((a) => Math.max(0, a - 1))}
            disabled={active === 0}
            className="text-sm font-semibold text-slate-400 hover:text-white disabled:opacity-20 disabled:cursor-not-allowed transition-colors flex items-center gap-2"
          >
            ← Previous
          </button>
          {active < steps.length - 1 ? (
            <button
              onClick={() => setActive((a) => a + 1)}
              className={`text-sm font-semibold ${colors.text} hover:text-white transition-colors flex items-center gap-2`}
            >
              Next step →
            </button>
          ) : (
            <a
              href="/demo"
              className={`text-sm font-semibold ${colors.text} hover:text-white transition-colors flex items-center gap-2`}
            >
              Claim your free demo →
            </a>
          )}
        </div>
      </div>

      {/* Bottom guarantee line */}
      <div className="mt-10 text-center">
        <div className="inline-flex items-center gap-3 glass-card px-6 py-3 rounded-full">
          <span className="text-emerald-400 text-lg">✦</span>
          <p className="text-slate-300 text-sm font-medium">
            You see it free. You approve it. Then you pay. That's the deal — every time.
          </p>
        </div>
      </div>
    </div>
  );
}
