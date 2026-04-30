import "./home.css";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";

import Nav from "@/components/home/Nav";
import Hero from "@/components/home/Hero";
import Industries from "@/components/home/Industries";
import Stats from "@/components/home/Stats";
import Comparison from "@/components/home/Comparison";
import Founder from "@/components/home/Founder";
import Process from "@/components/home/Process";
import FAQ from "@/components/home/FAQ";
import CTA from "@/components/home/CTA";

export default function Home() {
  return (
    <div
      className={`home-shell ${GeistSans.variable} ${GeistMono.variable} min-h-screen`}
    >
      <Nav />
      <main className="relative z-10">
        <Hero />
        <Industries />
        <Stats />
        <Comparison />
        <Founder />
        <Process />
        <FAQ />
        <CTA />
      </main>
      <footer className="relative z-10 px-6 py-10 border-t border-white/5">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-[13px] text-slate-500">
          <div className="flex items-center gap-2">
            <span className="w-5 h-5 rounded-md bg-gradient-to-br from-violet-500 to-cyan-500" />
            <span>CBUS Digital · Columbus, Ohio</span>
          </div>
          <div className="mono text-[12px]">© 2025 — built first, paid for last.</div>
        </div>
      </footer>
    </div>
  );
}
