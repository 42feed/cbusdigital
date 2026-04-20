import Link from "next/link";

const row1 = [
  { name: "Plumbers",         emoji: "🔧", slug: "plumbing" },
  { name: "HVAC Companies",   emoji: "❄️",  slug: "hvac" },
  { name: "Landscapers",      emoji: "🌿", slug: "landscaping" },
  { name: "Cleaning Services",emoji: "🧹", slug: "cleaning" },
  { name: "Roofers",          emoji: "🏠", slug: "roofing" },
  { name: "Electricians",     emoji: "⚡", slug: "electrical" },
  { name: "Painters",         emoji: "🎨", slug: "painting" },
  { name: "Contractors",      emoji: "🏗️", slug: "contracting" },
  { name: "Auto Detailers",   emoji: "🚗", slug: "auto-detailing" },
  { name: "Pest Control",     emoji: "🐛", slug: "pest-control" },
  { name: "Tree Services",    emoji: "🌳", slug: "tree-service" },
  { name: "Pressure Washing", emoji: "💦", slug: "pressure-washing" },
  { name: "Handymen",         emoji: "🔨", slug: "handyman" },
  { name: "Pool Services",    emoji: "🏊", slug: "pool-service" },
  { name: "Locksmiths",       emoji: "🔑", slug: "locksmith" },
];

const row2 = [
  { name: "Chiropractors",    emoji: "🦴", slug: "chiropractic" },
  { name: "Med Spas",         emoji: "💆", slug: "med-spa" },
  { name: "Law Offices",      emoji: "⚖️",  slug: "law" },
  { name: "Accountants",      emoji: "📊", slug: "accounting" },
  { name: "Personal Trainers",emoji: "💪", slug: "personal-training" },
  { name: "Dog Groomers",     emoji: "🐾", slug: "dog-grooming" },
  { name: "Moving Companies", emoji: "📦", slug: "moving" },
  { name: "Photographers",    emoji: "📸", slug: "photography" },
  { name: "Tutors",           emoji: "📚", slug: "tutoring" },
  { name: "Flooring Companies",emoji: "🪵",slug: "flooring" },
  { name: "Window Cleaners",  emoji: "🪟", slug: "window-cleaning" },
  { name: "Appliance Repair", emoji: "🔌", slug: "appliance-repair" },
  { name: "Fence Companies",  emoji: "🏡", slug: "fencing" },
  { name: "Garage Door Repair",emoji: "🚪",slug: "garage-door" },
  { name: "Dumpster Rental",  emoji: "🗑️", slug: "dumpster-rental" },
];

// Duplicate for seamless loop
const track1 = [...row1, ...row1];
const track2 = [...row2, ...row2];

export default function Industries() {
  return (
    <section id="industries" className="py-24 border-y border-white/8 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 text-center mb-14">
        <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
          Built for Every Columbus Service Business
        </h2>
        <p className="text-lg text-slate-400 max-w-xl mx-auto">
          If you serve Columbus customers, we can build you a site that converts.
        </p>
      </div>

      {/* Row 1 — left to right */}
      <div className="relative mb-4 overflow-hidden">
        <div className="marquee-track gap-3 py-1">
          {track1.map((item, i) => (
            <Link
              key={`r1-${i}`}
              href={`/services/${item.slug}`}
              className="glass-card rounded-full px-5 py-2.5 text-sm font-semibold text-slate-300 whitespace-nowrap shrink-0 mx-1.5 hover:border-violet-500/40 hover:text-white transition-all flex items-center gap-2"
            >
              <span>{item.emoji}</span>
              {item.name}
            </Link>
          ))}
        </div>
      </div>

      {/* Row 2 — right to left */}
      <div className="relative overflow-hidden">
        <div className="marquee-track-reverse gap-3 py-1">
          {track2.map((item, i) => (
            <Link
              key={`r2-${i}`}
              href={`/services/${item.slug}`}
              className="glass-card rounded-full px-5 py-2.5 text-sm font-semibold text-slate-300 whitespace-nowrap shrink-0 mx-1.5 hover:border-cyan-500/40 hover:text-white transition-all flex items-center gap-2"
            >
              <span>{item.emoji}</span>
              {item.name}
            </Link>
          ))}
        </div>
      </div>

      <div className="text-center mt-10 px-6">
        <p className="text-slate-500 text-sm">
          Don&apos;t see your industry?{" "}
          <a href="mailto:kyle@cbusdigital.com" className="text-violet-400 hover:text-violet-300 underline underline-offset-4 transition-colors">
            Reach out — we build for everyone.
          </a>
        </p>
      </div>
    </section>
  );
}
