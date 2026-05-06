import Link from "next/link";
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

type IndustryItem = {
  Icon: typeof Wrench;
  label: string;
  slug?: string;
};

const industries: IndustryItem[] = [
  { Icon: Wrench, label: "Plumbing", slug: "plumbing" },
  { Icon: Flame, label: "HVAC", slug: "hvac" },
  { Icon: Trees, label: "Landscaping", slug: "landscaping" },
  { Icon: Stethoscope, label: "Chiropractic", slug: "chiropractic" },
  { Icon: Scissors, label: "Salons" },
  { Icon: Hammer, label: "Roofing", slug: "roofing" },
  { Icon: Sparkles, label: "Cleaning", slug: "cleaning" },
  { Icon: Truck, label: "Moving", slug: "moving" },
  { Icon: Brush, label: "Painting", slug: "painting" },
  { Icon: HardHat, label: "Contractors", slug: "contracting" },
  { Icon: Dog, label: "Pet Services", slug: "dog-grooming" },
  { Icon: Car, label: "Auto Detailing", slug: "auto-detailing" },
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
          {[...industries, ...industries].map((i, idx) => {
            const inner = (
              <>
                <i.Icon className="w-4 h-4" strokeWidth={1.75} />
                <span className="text-[14px] font-medium whitespace-nowrap">{i.label}</span>
                <span className="text-slate-700 ml-1">·</span>
              </>
            );
            const className =
              "flex items-center gap-2.5 px-7 text-slate-400 hover:text-white transition-colors";
            return i.slug ? (
              <Link
                key={`${i.label}-${idx}`}
                href={`/services/${i.slug}`}
                className={className}
              >
                {inner}
              </Link>
            ) : (
              <div key={`${i.label}-${idx}`} className={className}>
                {inner}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
