export default function MockupPreview() {
  return (
    <div className="rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-violet-900/30 w-full max-w-sm">
      {/* Browser chrome */}
      <div className="bg-[#12121f] px-4 py-3 flex items-center gap-3 border-b border-white/8">
        <div className="flex gap-1.5 shrink-0">
          <div className="w-3 h-3 rounded-full bg-red-400/70" />
          <div className="w-3 h-3 rounded-full bg-yellow-400/70" />
          <div className="w-3 h-3 rounded-full bg-green-400/70" />
        </div>
        <div className="flex-1 bg-white/5 rounded-md px-3 py-1 text-[11px] text-slate-500 text-center truncate">
          aceplumbing.cbusdigital.com
        </div>
      </div>

      {/* Site preview */}
      <div className="bg-[#0b0f1a]">
        {/* Nav bar */}
        <div className="px-4 py-3 flex items-center justify-between border-b border-white/5">
          <div className="text-xs font-black text-white">Ace Plumbing</div>
          <div className="text-[10px] bg-blue-600 text-white px-2.5 py-1 rounded-md font-semibold">
            📞 Call Now
          </div>
        </div>

        {/* Hero */}
        <div className="px-4 pt-5 pb-6 bg-gradient-to-br from-blue-950 to-[#0b0f1a]">
          <div className="flex items-center gap-1.5 mb-2">
            <div className="w-1.5 h-1.5 rounded-full bg-blue-400" />
            <div className="text-[10px] text-blue-300 font-medium">Columbus, OH · Licensed &amp; Insured</div>
          </div>
          <div className="text-base font-black text-white leading-tight mb-2">
            Columbus's Most<br />Trusted Plumber
          </div>
          <div className="text-[11px] text-slate-400 mb-4 leading-relaxed">
            Same-day service. No surprise bills.<br />12 years serving Columbus.
          </div>
          <div className="flex gap-2">
            <div className="text-[10px] bg-blue-600 text-white px-3 py-1.5 rounded-lg font-bold">
              Get a Free Quote
            </div>
            <div className="text-[10px] border border-white/15 text-slate-300 px-3 py-1.5 rounded-lg">
              Our Services
            </div>
          </div>
        </div>

        {/* Services row */}
        <div className="px-4 py-4 border-t border-white/5">
          <div className="text-[10px] font-bold text-slate-300 mb-2.5 uppercase tracking-wide">Services</div>
          <div className="grid grid-cols-2 gap-2">
            {["🚿 Drain Cleaning", "🔥 Water Heaters", "🔧 Pipe Repair", "🚨 Emergency"].map((s) => (
              <div key={s} className="bg-white/5 border border-white/5 rounded-lg p-2 text-[10px] text-slate-300">
                {s}
              </div>
            ))}
          </div>
        </div>

        {/* Reviews */}
        <div className="px-4 py-3 border-t border-white/5 bg-white/2">
          <div className="flex items-center gap-2 mb-1.5">
            <div className="text-yellow-400 text-xs tracking-tight">★★★★★</div>
            <div className="text-[10px] text-slate-400 font-medium">4.9 · 47 Google reviews</div>
          </div>
          <div className="text-[10px] text-slate-500 italic leading-relaxed">
            "Called at 8pm with a burst pipe. Mike arrived within the hour. Incredible service."
          </div>
        </div>
      </div>
    </div>
  );
}
