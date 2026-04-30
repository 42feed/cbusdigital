import Image from "next/image";
import { ArrowRight, Award } from "lucide-react";

const featuredIn = [
  { name: "Forbes 30 Under 30",        file: "/images/forbes.png",                  boxW: "w-32", boxH: "h-14" },
  { name: "The Ohio State University", file: "/images/osu.jpg",                     boxW: "w-20", boxH: "h-20" },
  { name: "Columbus Dispatch",         file: "/images/columbus-dispatch.png",       boxW: "w-44", boxH: "h-14" },
  { name: "Columbus Business First",   file: "/images/columbus-business-first.png", boxW: "w-40", boxH: "h-14" },
  { name: "NBC4",                      file: "/images/nbc4.webp",                   boxW: "w-36", boxH: "h-16" },
];

export default function Founder() {
  return (
    <section className="relative px-6 py-24 border-t border-white/5">
      <div className="max-w-6xl mx-auto">
        <div className="beam-card p-[1.5px]">
          <div className="rounded-[20px] bg-[#0a0a14] p-8 md:p-12 relative overflow-hidden">
            <div
              aria-hidden
              className="pointer-events-none absolute -top-24 -left-24 w-72 h-72 rounded-full opacity-25 blur-3xl"
              style={{ background: "#7c3aed" }}
            />
            <div
              aria-hidden
              className="pointer-events-none absolute -bottom-24 -right-24 w-72 h-72 rounded-full opacity-15 blur-3xl"
              style={{ background: "#22d3ee" }}
            />

            <div className="relative grid md:grid-cols-12 gap-10 items-start">
              {/* Photo + handle */}
              <div className="md:col-span-4 flex md:flex-col items-center md:items-start gap-5">
                <div
                  className="relative w-24 h-24 md:w-32 md:h-32 rounded-2xl overflow-hidden border border-white/10 shrink-0"
                  style={{ boxShadow: "0 0 0 2px rgba(167, 139, 250, 0.25)" }}
                >
                  <Image
                    src="/images/kyle-face.jpeg"
                    alt="Kyle Fedewa — Owner, CBUS Digital"
                    fill
                    className="object-cover"
                    style={{ objectPosition: "50% 50%" }}
                  />
                </div>
                <div>
                  <div className="text-[20px] font-semibold tracking-tight text-white">
                    Kyle Fedewa
                  </div>
                  <div className="mono text-[11px] uppercase tracking-[0.18em] text-violet-300 mt-1">
                    Owner · CBUS Digital
                  </div>
                </div>
              </div>

              {/* Bio */}
              <div className="md:col-span-8">
                <div className="mono text-[12px] uppercase tracking-[0.2em] text-violet-300 mb-4">
                  Built by one operator, not an agency
                </div>
                <p className="text-slate-300 text-[17px] leading-[1.6] mb-5">
                  I&rsquo;ve spent the last 8 years helping Columbus businesses and startups
                  grow online — and I&rsquo;m as passionate about it today as day one.
                </p>
                <p className="text-slate-400 text-[15px] leading-[1.6] mb-7">
                  CBUS Digital is the natural next step: bringing enterprise-level
                  websites to the small businesses that need them most, without the
                  agency price tag or the runaround.
                </p>
                <a
                  href="/about"
                  className="group inline-flex items-center gap-2 bg-white/5 hover:bg-white/8 border border-white/10 text-slate-200 text-[14px] font-semibold px-5 py-2.5 rounded-full transition-colors"
                >
                  More about Kyle
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
                </a>
              </div>
            </div>

            {/* Featured in */}
            <div className="relative mt-12 pt-8 border-t border-white/8">
              <div className="flex items-center justify-center gap-2 mono text-[11px] uppercase tracking-[0.22em] text-slate-500 mb-7">
                <Award className="w-3.5 h-3.5" strokeWidth={2} />
                Featured in
              </div>
              <div className="flex flex-wrap items-center justify-center gap-5 md:gap-7">
                {featuredIn.map((org) => (
                  <div
                    key={org.name}
                    className={`${org.boxW} ${org.boxH} bg-white rounded-xl flex items-center justify-center p-3 shrink-0 transition-transform hover:scale-[1.03]`}
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
