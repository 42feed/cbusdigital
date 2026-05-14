"use client";

import { useState } from "react";

export default function LockInForm() {
  const [business, setBusiness] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [opened, setOpened] = useState(false);

  const canSubmit = business.trim() && name.trim() && email.trim();

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!canSubmit) return;
    const subject = `Send it — ${business.trim()}`;
    const body = [
      `Kyle,`,
      ``,
      `Lock me in for the $497 founding spot.`,
      ``,
      `Business: ${business.trim()}`,
      `Name: ${name.trim()}`,
      `Reply to: ${email.trim()}`,
      ``,
      `Thanks,`,
      `${name.trim()}`,
    ].join("\n");
    const href = `mailto:kyle@cbusdigital.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
    window.location.href = href;
    setOpened(true);
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="grid gap-3 md:grid-cols-3 md:gap-3"
    >
      <input
        type="text"
        placeholder="Business name"
        value={business}
        onChange={(e) => setBusiness(e.target.value)}
        required
        autoComplete="organization"
        className="bg-white/8 border border-white/15 text-white placeholder-slate-400 rounded-xl px-4 py-3 text-base outline-none focus:border-amber-400/60 focus:bg-white/12 transition-all"
      />
      <input
        type="text"
        placeholder="Your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
        autoComplete="name"
        className="bg-white/8 border border-white/15 text-white placeholder-slate-400 rounded-xl px-4 py-3 text-base outline-none focus:border-amber-400/60 focus:bg-white/12 transition-all"
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        autoComplete="email"
        className="bg-white/8 border border-white/15 text-white placeholder-slate-400 rounded-xl px-4 py-3 text-base outline-none focus:border-amber-400/60 focus:bg-white/12 transition-all"
      />
      <button
        type="submit"
        disabled={!canSubmit}
        className="md:col-span-3 mt-1 bg-white text-violet-700 font-bold py-3.5 rounded-xl hover:bg-slate-50 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {opened ? "Email draft opened ✓" : "Lock in my $497 spot →"}
      </button>
      <p className="md:col-span-3 text-slate-300 text-xs text-center">
        {opened ? (
          <>
            Didn&rsquo;t open?{" "}
            <a
              href="mailto:kyle@cbusdigital.com"
              className="underline underline-offset-2 hover:text-white"
            >
              Email kyle@cbusdigital.com
            </a>{" "}
            directly.
          </>
        ) : (
          <>
            Or email{" "}
            <a
              href="mailto:kyle@cbusdigital.com"
              className="underline underline-offset-2 hover:text-white"
            >
              kyle@cbusdigital.com
            </a>{" "}
            directly — same result.
          </>
        )}
      </p>
    </form>
  );
}
