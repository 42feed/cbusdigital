"use client";

import { useState } from "react";

const faqs = [
  {
    q: "Do I pay anything upfront?",
    a: "No. We build your demo site and send you the live link for free. Once you're happy and ready to move forward, it's 50% to start the launch process and 50% when the site goes live on your domain.",
  },
  {
    q: "How long does the demo take?",
    a: "We typically send the live demo link within 1–2 business days of reaching out. You'll have a real, clickable site — not a PDF mockup.",
  },
  {
    q: "What if I don't like it?",
    a: "Tell us what you want changed. We offer unlimited revisions — we keep going until it's exactly right. If we genuinely can't make you happy, you walk away owing nothing.",
  },
  {
    q: "What do I need to provide?",
    a: "Nothing upfront. We build the demo from publicly available info about your business. After purchase, we'll ask for your logo and any real photos you want to use.",
  },
  {
    q: "Will it work on mobile?",
    a: "Every site we build is mobile-first — designed on a phone screen, then scaled up for desktop. Most of your customers will find you on mobile.",
  },
  {
    q: "Do you only work with certain industries?",
    a: "We work with any Columbus-area service business. Plumber, HVAC, landscaper, chiropractor, dog groomer — if you have local customers, we can build your site.",
  },
  {
    q: "What happens after the site goes live?",
    a: "You can take full ownership of your hosting, or we offer a monthly retainer ($100–$200/mo) that covers hosting, updates, and an hour of edits per month.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="py-24 px-6">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-4xl font-black text-white mb-4">Common Questions</h2>
          <p className="text-slate-400 text-lg">Everything you'd want to know before reaching out.</p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className={`glass-card rounded-2xl overflow-hidden transition-all ${
                open === i ? "border-white/16" : "hover:border-white/12"
              }`}
            >
              <button
                className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
                onClick={() => setOpen(open === i ? null : i)}
              >
                <span className="font-semibold text-white text-base">{faq.q}</span>
                <span
                  className={`shrink-0 text-slate-400 text-xl font-light transition-transform duration-300 ${
                    open === i ? "rotate-45" : "rotate-0"
                  }`}
                >
                  +
                </span>
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  open === i ? "max-h-48 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <p className="px-6 pb-5 text-slate-400 leading-relaxed text-sm">{faq.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
