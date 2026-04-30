import { Phone, Star, MapPin } from "lucide-react";

/**
 * Desktop-style site preview shown in the hero — distinct from any other mockup on the page.
 */
export default function SitePreviewCard() {
  return (
    <div className="rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-violet-900/30 bg-[#0b0b13] w-full max-w-[420px]">
      {/* Browser chrome */}
      <div className="bg-[#0d0d18] px-4 py-2.5 flex items-center gap-3 border-b border-white/5">
        <div className="flex gap-1.5 shrink-0">
          <span className="w-2.5 h-2.5 rounded-full bg-red-400/60" />
          <span className="w-2.5 h-2.5 rounded-full bg-yellow-400/60" />
          <span className="w-2.5 h-2.5 rounded-full bg-green-400/60" />
        </div>
        <div className="flex-1 bg-white/5 rounded-md px-3 py-1 text-[11px] text-slate-500 text-center truncate mono">
          aceplumbing.cbusdigital.com
        </div>
      </div>

      {/* Site nav */}
      <div className="px-5 py-3 flex items-center justify-between border-b border-white/5">
        <div className="text-[13px] font-bold tracking-tight">Ace Plumbing</div>
        <div className="text-[10px] bg-violet-600/90 text-white px-2.5 py-1 rounded-md font-semibold flex items-center gap-1">
          <Phone className="w-3 h-3" strokeWidth={2.5} />
          Call Now
        </div>
      </div>

      {/* Hero */}
      <div className="px-5 pt-5 pb-6 relative">
        <div
          aria-hidden
          className="absolute -top-10 -left-10 w-40 h-40 rounded-full opacity-30 blur-2xl"
          style={{ background: "#7c3aed" }}
        />
        <div className="relative">
          <div className="flex items-center gap-1.5 mb-2 text-[10px] text-violet-300">
            <MapPin className="w-3 h-3" />
            <span>Columbus, OH · Licensed & Insured</span>
          </div>
          <div className="text-[18px] font-black leading-[1.05] tracking-tight mb-2">
            Columbus&rsquo;s Most<br />Trusted Plumber
          </div>
          <div className="text-[11px] text-slate-400 mb-4 leading-relaxed">
            Same-day service. No surprise bills.<br />12 years serving Columbus.
          </div>
          <div className="flex gap-2">
            <div className="text-[10px] bg-violet-600 text-white px-3 py-1.5 rounded-lg font-bold">
              Get a Free Quote
            </div>
            <div className="text-[10px] border border-white/15 text-slate-300 px-3 py-1.5 rounded-lg">
              Our Services
            </div>
          </div>
        </div>
      </div>

      {/* Reviews row */}
      <div className="px-5 py-3 border-t border-white/5 bg-white/2">
        <div className="flex items-center gap-2 mb-1.5">
          <div className="flex">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="w-3 h-3 text-yellow-400 fill-yellow-400" />
            ))}
          </div>
          <div className="text-[10px] text-slate-400 font-medium tabular">
            4.9 · 47 Google reviews
          </div>
        </div>
        <div className="text-[10px] text-slate-500 italic leading-relaxed">
          &ldquo;Called at 8pm with a burst pipe. Mike arrived within the hour.&rdquo;
        </div>
      </div>
    </div>
  );
}
