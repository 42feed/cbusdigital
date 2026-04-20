"use client";

import { useState } from "react";

const techItems = [
  {
    label: "Next.js",
    detail: "The same framework used by Vercel, TikTok, and Netflix. Lightning fast.",
  },
  {
    label: "AI-Assisted Build",
    detail: "We use the latest AI tools to research, write, and design faster than any solo dev.",
  },
  {
    label: "Tailwind CSS",
    detail: "Pixel-perfect, responsive design that looks great on every screen — first try.",
  },
  {
    label: "Core Web Vitals",
    detail: "Google's performance standards — built in, not bolted on. Better SEO by default.",
  },
  {
    label: "Vercel Hosting",
    detail: "Enterprise-grade infrastructure. 99.99% uptime. Global CDN. Free for your first year.",
  },
  {
    label: "SEO Architecture",
    detail: "Semantic HTML, proper meta tags, fast load times — everything Google wants to see.",
  },
];

export default function TechStack() {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-4 glass-card rounded-2xl px-6 py-4 hover:border-white/16 transition-all group"
      >
        <div className="flex items-center gap-3">
          <p className="text-slate-400 text-sm font-semibold uppercase tracking-widest">
            Built on enterprise-grade technology
          </p>
          <div className="flex gap-1.5">
            {["Next.js", "AI", "Vercel", "SEO"].map((tag) => (
              <span key={tag} className="text-[10px] font-bold text-slate-500 bg-white/5 border border-white/8 px-2 py-0.5 rounded-full">
                {tag}
              </span>
            ))}
          </div>
        </div>
        <span
          className={`text-slate-400 text-lg font-light transition-transform duration-300 shrink-0 ${open ? "rotate-45" : "rotate-0"}`}
        >
          +
        </span>
      </button>

      <div
        className={`overflow-hidden transition-all duration-500 ease-in-out ${open ? "max-h-[600px] opacity-100 mt-4" : "max-h-0 opacity-0"}`}
      >
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {techItems.map((tech) => (
            <div
              key={tech.label}
              className="glass-card rounded-xl p-5 flex gap-4 items-start group hover:border-white/16 transition-all"
            >
              <div className="w-2 h-2 rounded-full bg-violet-400 mt-1.5 shrink-0 group-hover:bg-cyan-400 transition-colors" />
              <div>
                <div className="text-sm font-bold text-white mb-1">{tech.label}</div>
                <div className="text-xs text-slate-500 leading-relaxed">{tech.detail}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
