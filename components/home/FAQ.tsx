"use client";

import { useState } from "react";
import { Plus } from "lucide-react";

const faqs = [
  {
    q: "What if I don't love the demo?",
    a: "No problem — we'll revise it until you do. Tell me what's not working and I'll redesign and resend a fresh version. We keep iterating as many rounds as it takes. And if it turns out to be the wrong fit entirely, walk away — you owe nothing.",
  },
  {
    q: "What gets added after I pay the 50% deposit?",
    a: "The demo shows the full design, structure, and copy of your site. Your 50% deposit unlocks the full custom build — that's when we add your logo, team photos, custom galleries of your work, and any specific imagery or content you want featured.",
  },
  {
    q: "How long until my site goes live?",
    a: "Most sites launch within 1–2 business days of approval. We handle the domain, hosting, and all technical setup. The moment you give us the green light, we move.",
  },
  {
    q: "Why is this so much cheaper than other agencies?",
    a: "Two reasons. Every site is built fully custom from scratch — no templates, ever — but I use modern AI tooling that compresses what used to take weeks into days. And I run this entirely by email and text — no sales calls, no account managers, no overhead.",
  },
  {
    q: "Can we hop on a call?",
    a: "I typically don't take calls — and it's intentional. Keeping a written record of every request and change is how I make sure nothing gets missed. Email and text give both of us a clear paper trail through the build. I usually respond within a few hours.",
  },
  {
    q: "Do I own the site after?",
    a: "Yes. Forever. No lock-in, no ongoing fees, host it anywhere you want. You can also opt into Set & Forget — $149/mo for hosting, security, and unlimited content updates. Cancel anytime.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="relative px-6 py-24 border-t border-white/5">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <div className="mono text-[12px] uppercase tracking-[0.2em] text-violet-300 mb-4">
            Common questions
          </div>
          <h2 className="text-[32px] md:text-[42px] tracking-[-0.025em] leading-[1.1] font-bold">
            Everything you&rsquo;d want to know <br />before reaching out.
          </h2>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className={`home-card-glass overflow-hidden transition-colors ${
                open === i ? "border-white/16" : ""
              }`}
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
              >
                <span className="text-[15px] font-semibold text-white">{faq.q}</span>
                <Plus
                  className={`w-4 h-4 text-slate-400 shrink-0 transition-transform duration-300 ${
                    open === i ? "rotate-45" : ""
                  }`}
                  strokeWidth={2}
                />
              </button>
              <div
                className={`grid transition-all duration-300 ease-out ${
                  open === i ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                }`}
              >
                <div className="overflow-hidden">
                  <p className="px-6 pb-5 text-[14px] text-slate-400 leading-[1.6]">{faq.a}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
