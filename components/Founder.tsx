import Image from "next/image";
import Link from "next/link";

const featuredIn = [
  { name: "Forbes 30 Under 30",        file: "/images/forbes.png",                 boxW: "w-36", boxH: "h-16" },
  { name: "The Ohio State University",  file: "/images/osu.jpg",                    boxW: "w-24", boxH: "h-24" },
  { name: "Columbus Dispatch",          file: "/images/columbus-dispatch.png",       boxW: "w-52", boxH: "h-16" },
  { name: "Columbus Business First",    file: "/images/columbus-business-first.png", boxW: "w-44", boxH: "h-16" },
  { name: "NBC4",                       file: "/images/nbc4.webp",                   boxW: "w-44", boxH: "h-20" },
];

export default function Founder() {
  return (
    <section className="py-16 px-6 border-t border-white/8">
      <div className="max-w-6xl mx-auto">
        <div className="relative rounded-2xl overflow-hidden">
          {/* Gradient border effect */}
          <div
            className="absolute inset-0 rounded-2xl p-px"
            style={{ background: "linear-gradient(135deg, #7c3aed40, #2563eb40, #0891b240)" }}
            aria-hidden="true"
          />

          {/* Card */}
          <div
            className="relative rounded-2xl p-8 md:p-10"
            style={{ background: "linear-gradient(145deg, #0d0f1f, #080b16)" }}
          >
            {/* Ambient glow */}
            <div
              className="pointer-events-none absolute -top-20 -left-20 w-64 h-64 rounded-full opacity-10"
              style={{ background: "radial-gradient(circle, #7c3aed, transparent 70%)" }}
              aria-hidden="true"
            />

            {/* Bio row */}
            <div className="flex flex-col md:flex-row items-center md:items-start gap-8 mb-10">
              {/* Photo — zoomed to face */}
              <div className="shrink-0 relative w-24 h-24 rounded-2xl overflow-hidden border border-white/10 ring-2 ring-violet-500/20">
                <Image
                  src="/images/kyle-face.jpeg"
                  alt="Kyle Fedewa — Owner, CBUS Digital"
                  fill
                  className="object-cover"
                  style={{
                    objectPosition: "50% 50%",
                  }}
                />
              </div>

              {/* Text */}
              <div className="flex-1 text-center md:text-left">
                <div className="flex flex-col md:flex-row md:items-center gap-2 mb-1">
                  <span className="text-2xl font-black text-white">Kyle Fedewa</span>
                </div>
                <div className="text-sm text-violet-400 font-semibold mb-4">Owner, CBUS Digital</div>
                <p className="text-slate-400 leading-relaxed text-sm md:text-base max-w-2xl mb-6">
                  I've spent the last 8 years helping local businesses and startups in Columbus grow
                  their digital presence — and I'm as passionate about it today as day one. CBUS Digital
                  is the natural next step: bringing enterprise-level websites to the small businesses
                  that need them most, without the agency price tag or the runaround.
                </p>
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 glass-card hover:border-violet-500/40 text-slate-300 hover:text-white text-sm font-semibold px-5 py-2.5 rounded-xl transition-all"
                >
                  More about Kyle →
                </Link>
              </div>
            </div>

            {/* Featured in */}
            <div className="border-t border-white/8 pt-8">
              <p className="text-xs font-bold text-slate-500 uppercase tracking-widest text-center mb-8">
                Kyle has been featured in
              </p>
              <div className="flex flex-wrap items-center justify-center gap-6 md:gap-8">
                {featuredIn.map((org) => (
                  <div
                    key={org.name}
                    className={`${org.boxW} ${org.boxH} bg-white rounded-xl flex items-center justify-center p-3 shrink-0`}
                  >
                    <Image
                      src={org.file}
                      alt={org.name}
                      width={200}
                      height={96}
                      className="w-full h-full object-contain"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
