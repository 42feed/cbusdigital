"use client";

import { useState } from "react";

export default function ContactForm() {
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
  const [data, setData] = useState({ name: "", email: "", message: "" });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setSubmitting(true);
    try {
      const formspreeId = process.env.NEXT_PUBLIC_FORMSPREE_ID;
      if (!formspreeId) throw new Error("Form not configured.");

      const res = await fetch(`https://formspree.io/f/${formspreeId}`, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          name: data.name,
          email: data.email,
          message: data.message,
          _subject: "New Contact Message — CBUS Digital",
        }),
      });

      if (!res.ok) throw new Error("Submission failed.");
      setSubmitted(true);
    } catch {
      setError("Something went wrong. Please email kyle@cbusdigital.com directly.");
    } finally {
      setSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div className="text-center py-6 animate-in fade-in duration-500">
        <div className="text-5xl mb-4">✅</div>
        <h3 className="text-2xl font-black text-white mb-3">Message sent, {data.name.split(" ")[0]}.</h3>
        <p className="text-slate-400 leading-relaxed">
          I'll get back to you at{" "}
          <span className="text-violet-300 font-semibold">{data.email}</span> within a few hours.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="text-xs font-bold text-slate-500 uppercase tracking-widest block mb-2">Your Name</label>
        <input
          type="text"
          required
          placeholder="First name"
          value={data.name}
          onChange={(e) => setData({ ...data, name: e.target.value })}
          className="w-full bg-white/5 border border-white/12 text-white placeholder-slate-600 rounded-xl px-4 py-3 text-sm outline-none focus:border-violet-500/60 focus:bg-white/8 transition-all"
        />
      </div>
      <div>
        <label className="text-xs font-bold text-slate-500 uppercase tracking-widest block mb-2">Email Address</label>
        <input
          type="email"
          required
          placeholder="you@example.com"
          value={data.email}
          onChange={(e) => setData({ ...data, email: e.target.value })}
          className="w-full bg-white/5 border border-white/12 text-white placeholder-slate-600 rounded-xl px-4 py-3 text-sm outline-none focus:border-violet-500/60 focus:bg-white/8 transition-all"
        />
      </div>
      <div>
        <label className="text-xs font-bold text-slate-500 uppercase tracking-widest block mb-2">Message</label>
        <textarea
          required
          rows={5}
          placeholder="What's on your mind?"
          value={data.message}
          onChange={(e) => setData({ ...data, message: e.target.value })}
          className="w-full bg-white/5 border border-white/12 text-white placeholder-slate-600 rounded-xl px-4 py-3 text-sm outline-none focus:border-violet-500/60 focus:bg-white/8 transition-all resize-none"
        />
      </div>
      {error && <p className="text-red-400 text-sm">{error}</p>}
      <button
        type="submit"
        disabled={submitting}
        className="w-full glow-button bg-violet-600 hover:bg-violet-500 disabled:opacity-50 text-white font-bold py-3.5 rounded-xl transition-all"
      >
        {submitting ? "Sending..." : "Send Message →"}
      </button>
      <p className="text-slate-600 text-xs text-center">Typically responds within a few hours.</p>
    </form>
  );
}
