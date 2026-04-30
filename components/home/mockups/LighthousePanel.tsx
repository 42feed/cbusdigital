/**
 * Fake DevTools Lighthouse panel — visualizes the speed claim with credibility.
 */
export default function LighthousePanel() {
  const scores = [
    { label: "Performance", value: 100 },
    { label: "Accessibility", value: 100 },
    { label: "Best Practices", value: 100 },
    { label: "SEO", value: 100 },
  ];

  return (
    <div className="rounded-2xl overflow-hidden border border-white/10 bg-[#0a0a12] shadow-2xl shadow-emerald-900/20">
      {/* Window chrome */}
      <div className="bg-[#0c0c16] px-4 py-2.5 flex items-center justify-between border-b border-white/5">
        <div className="flex gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-red-400/60" />
          <span className="w-2.5 h-2.5 rounded-full bg-yellow-400/60" />
          <span className="w-2.5 h-2.5 rounded-full bg-green-400/60" />
        </div>
        <div className="text-[11px] text-slate-500 mono">DevTools — Lighthouse</div>
        <div className="text-[10px] text-slate-600 mono">cbusdigital.com</div>
      </div>

      {/* Scores */}
      <div className="px-8 py-10">
        <div className="grid grid-cols-4 gap-6">
          {scores.map((s) => (
            <ScoreDial key={s.label} label={s.label} value={s.value} />
          ))}
        </div>

        {/* Metric strip */}
        <div className="mt-10 pt-6 border-t border-white/5 grid grid-cols-3 gap-4 text-center">
          {[
            { k: "FCP", v: "0.4s" },
            { k: "LCP", v: "0.7s" },
            { k: "CLS", v: "0.00" },
          ].map((m) => (
            <div key={m.k}>
              <div className="text-[10px] uppercase tracking-widest text-slate-500 mono mb-1">
                {m.k}
              </div>
              <div className="text-[20px] font-bold tabular text-emerald-300">{m.v}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function ScoreDial({ label, value }: { label: string; value: number }) {
  const radius = 32;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (value / 100) * circumference;

  return (
    <div className="flex flex-col items-center">
      <div className="relative w-20 h-20">
        <svg className="w-full h-full -rotate-90" viewBox="0 0 80 80">
          <circle
            cx="40"
            cy="40"
            r={radius}
            stroke="rgba(52, 211, 153, 0.15)"
            strokeWidth="6"
            fill="none"
          />
          <circle
            cx="40"
            cy="40"
            r={radius}
            stroke="#34d399"
            strokeWidth="6"
            fill="none"
            strokeDasharray={circumference}
            strokeDashoffset={offset}
            strokeLinecap="round"
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-emerald-300 text-[20px] font-bold tabular">{value}</span>
        </div>
      </div>
      <div className="mt-3 text-[11px] text-slate-400 font-medium">{label}</div>
    </div>
  );
}
