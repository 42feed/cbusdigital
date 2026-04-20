import type { Metadata } from "next";
import Image from "next/image";
import Nav from "@/components/Nav";
import CTABanner from "@/components/CTABanner";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "About Kyle Fedewa — CBUS Digital",
  description: "Forbes 30 Under 30 honoree. Ohio State University graduate. Columbus native building high-performance websites for local businesses.",
};


const featuredIn = [
  { name: "Forbes 30 Under 30",        file: "/images/forbes.png",                 boxW: "w-36", boxH: "h-16" },
  { name: "The Ohio State University",  file: "/images/osu.jpg",                    boxW: "w-24", boxH: "h-24" },
  { name: "Columbus Dispatch",          file: "/images/columbus-dispatch.png",       boxW: "w-52", boxH: "h-16" },
  { name: "Columbus Business First",    file: "/images/columbus-business-first.png", boxW: "w-44", boxH: "h-16" },
  { name: "NBC4",                       file: "/images/nbc4.webp",                   boxW: "w-44", boxH: "h-20" },
];

const values = [
  {
    icon: "📊",
    title: "Built to perform, not just look good",
    description:
      "I've spent years studying what makes people click, call, and convert. Every site I build is designed around those outcomes — not just how it looks, but how it performs.",
    accent: "#7c3aed",
  },
  {
    icon: "⚡",
    title: "AI-native and fast",
    description:
      "I use the latest AI tools and modern tech stacks to deliver sites in days, not months. You get enterprise-quality without the enterprise wait.",
    accent: "#2563eb",
  },
  {
    icon: "📍",
    title: "Columbus to the core",
    description:
      "I grew up here, went to school here, and built businesses here. I know how Columbus customers search, what they trust, and what makes them call.",
    accent: "#0891b2",
  },
  {
    icon: "💰",
    title: "ROI-first thinking",
    description:
      "With a finance background and years running P&Ls, I think about your website as a business investment — not a design project. Every decision is about return.",
    accent: "#059669",
  },
];


export default function AboutPage() {
  return (
    <>
      <Nav />
      <main className="flex-1">

        {/* Hero */}
        <section className="relative grid-bg overflow-hidden py-24 px-6 border-b border-white/8">
          <div
            className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 w-[700px] h-[500px] rounded-full opacity-15"
            style={{ background: "radial-gradient(ellipse, #7c3aed, transparent 70%)" }}
            aria-hidden="true"
          />
          <div
            className="pointer-events-none absolute -bottom-20 right-0 w-[400px] h-[400px] rounded-full opacity-10"
            style={{ background: "radial-gradient(ellipse, #0891b2, transparent 70%)" }}
            aria-hidden="true"
          />
          <div className="relative max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
            {/* Copy */}
            <div>
              <div className="inline-flex items-center gap-2 glass-card text-violet-300 text-sm font-semibold px-4 py-1.5 rounded-full mb-6">
                <span className="w-2 h-2 bg-violet-400 rounded-full" />
                Columbus, Ohio
              </div>
              <h1 className="text-5xl md:text-6xl font-black text-white mb-6 leading-tight">
                Hey, I'm Kyle.
              </h1>
              <p className="text-xl text-slate-400 leading-relaxed">
                Forbes 30 Under 30 honoree. A proud Ohio State graduate and Columbus native who
                has spent nearly a decade building technology and helping local businesses grow.
                I started CBUS Digital because this city deserves better than cookie-cutter
                websites from agencies that don't know it the way I do.
              </p>
            </div>

            {/* Photo */}
            <div className="flex justify-center md:justify-end">
              <div className="relative w-72 md:w-80">
                <div
                  className="absolute -inset-1 rounded-2xl opacity-40"
                  style={{ background: "linear-gradient(135deg, #7c3aed, #2563eb, #0891b2)" }}
                />
                <div className="relative rounded-2xl overflow-hidden border border-white/10 aspect-[3/4]">
                  <Image
                    src="/images/kyle-forbes.jpeg"
                    alt="Kyle Fedewa at Forbes 30 Under 30 Summit"
                    fill
                    className="object-cover object-top"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Story */}
        <section className="py-24 px-6">
          <div className="max-w-4xl mx-auto">
            <div className="space-y-6 text-slate-400 leading-relaxed text-lg">
              <p>
                I've spent my career at the intersection of technology, marketing, and business
                growth. I hold a Master's degree in Marketing Analytics from Penn State and a
                Bachelor's in Finance from The Ohio State University — which means when I build
                your website, I'm not guessing at what works. I understand the data, the
                conversion psychology, and the technical architecture that makes a site actually
                drive revenue.
              </p>
              <p>
                Over the last several years I've co-founded and scaled technology companies,
                built AI-powered systems, and worked with businesses across Columbus to grow their
                digital presence. I've been deep in the numbers — revenue models, marketing
                analytics, ROI measurement — and I've seen firsthand what separates a website
                that generates calls from one that just sits there.
              </p>
              <p>
                CBUS Digital is my answer to a problem I kept seeing: great local businesses
                with no online presence, or a website that was costing them customers instead of
                bringing them in. The traditional agency model is broken — you pay thousands
                upfront, wait months, and hope it's good. I flipped it. I build your site first,
                show it to you live, and you decide.
              </p>
              <p>
                I'm proud to be a Columbus native building for Columbus businesses. This city has
                given me a lot, and this is how I give back — by helping the businesses that make
                this community great compete and win online.
              </p>
              <div className="pt-4 border-t border-white/8 flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl overflow-hidden border border-white/10 relative shrink-0">
                  <Image src="/images/kyle-face.jpeg" alt="Kyle" fill className="object-cover" />
                </div>
                <div>
                  <div className="font-bold text-white">Kyle Fedewa</div>
                  <div className="text-sm text-slate-500">Owner, CBUS Digital · Columbus, OH</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why my background matters for YOUR site */}
        <section className="grid-bg border-y border-white/8 py-24 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-14">
              <h2 className="text-4xl font-black text-white mb-4">
                Why This Background Matters for Your Website
              </h2>
              <p className="text-lg text-slate-400 max-w-xl mx-auto">
                Most web designers know design. I know design <em>and</em> what drives business results.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 gap-6">
              {values.map((v) => (
                <div key={v.title} className="glass-card rounded-2xl p-8 relative overflow-hidden group hover:border-white/16 transition-all">
                  <div
                    className="absolute -top-6 -right-6 w-24 h-24 rounded-full opacity-10 group-hover:opacity-20 transition-opacity"
                    style={{ background: `radial-gradient(circle, ${v.accent}, transparent 70%)` }}
                  />
                  <div className="text-3xl mb-4">{v.icon}</div>
                  <h3 className="text-lg font-bold text-white mb-2">{v.title}</h3>
                  <p className="text-slate-400 leading-relaxed">{v.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>


        {/* Featured In */}
        <section className="border-t border-white/8 py-16 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-10">
              Featured In
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
        </section>



        <CTABanner />
      </main>
      <Footer />
    </>
  );
}
