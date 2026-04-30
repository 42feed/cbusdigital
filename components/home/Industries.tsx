import {
  Wrench,
  Flame,
  Trees,
  Stethoscope,
  Scissors,
  Hammer,
  Sparkles,
  Truck,
  Brush,
  HardHat,
  Dog,
  Car,
} from "lucide-react";

const industries = [
  { Icon: Wrench, label: "Plumbing" },
  { Icon: Flame, label: "HVAC" },
  { Icon: Trees, label: "Landscaping" },
  { Icon: Stethoscope, label: "Chiropractic" },
  { Icon: Scissors, label: "Salons" },
  { Icon: Hammer, label: "Roofing" },
  { Icon: Sparkles, label: "Cleaning" },
  { Icon: Truck, label: "Moving" },
  { Icon: Brush, label: "Painting" },
  { Icon: HardHat, label: "Contractors" },
  { Icon: Dog, label: "Pet Services" },
  { Icon: Car, label: "Auto Detailing" },
];

export default function Industries() {
  return (
    <section className="relative py-14 border-t border-white/5">
      <div className="text-center mb-8">
        <div className="mono text-[11px] uppercase tracking-[0.22em] text-slate-500">
          Built for Columbus service businesses
        </div>
      </div>
      <div className="relative overflow-hidden">
        <div
          aria-hidden
          className="absolute inset-y-0 left-0 w-32 z-10 pointer-events-none"
          style={{ background: "linear-gradient(to right, #07070b, transparent)" }}
        />
        <div
          aria-hidden
          className="absolute inset-y-0 right-0 w-32 z-10 pointer-events-none"
          style={{ background: "linear-gradient(to left, #07070b, transparent)" }}
        />
        <div className="flex" style={{ width: "max-content", animation: "marquee 35s linear infinite" }}>
          {[...industries, ...industries].map((i, idx) => (
            <div
              key={`${i.label}-${idx}`}
              className="flex items-center gap-2.5 px-7 text-slate-400 hover:text-white transition-colors"
            >
              <i.Icon className="w-4 h-4" strokeWidth={1.75} />
              <span className="text-[14px] font-medium whitespace-nowrap">{i.label}</span>
              <span className="text-slate-700 ml-1">·</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
