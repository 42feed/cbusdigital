import { ArrowRight } from "lucide-react";

export default function Nav() {
  return (
    <header className="relative z-30 px-6 py-5">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <a href="/preview" className="flex items-center gap-2">
          <span
            aria-hidden
            className="w-7 h-7 rounded-lg bg-gradient-to-br from-violet-500 to-cyan-500 flex items-center justify-center text-white text-[13px] font-black"
            style={{ boxShadow: "0 0 20px rgba(124, 58, 237, 0.5)" }}
          >
            C
          </span>
          <span className="text-[15px] font-semibold tracking-tight">
            CBUS Digital
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-8 text-[14px] text-slate-400">
          <a href="#process" className="hover:text-white transition-colors">Process</a>
          <a href="#" className="hover:text-white transition-colors">Pricing</a>
          <a href="#" className="hover:text-white transition-colors">Industries</a>
          <a href="#" className="hover:text-white transition-colors">About</a>
        </nav>

        <a
          href="#"
          className="inline-flex items-center gap-1.5 bg-white/8 hover:bg-white/12 border border-white/12 text-[13px] font-semibold text-white px-4 py-2 rounded-full transition-colors"
        >
          Get a free demo
          <ArrowRight className="w-3.5 h-3.5" />
        </a>
      </div>
    </header>
  );
}
