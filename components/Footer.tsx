import Link from "next/link";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/8 py-12 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-slate-500">
        <div>
          <div className="text-white font-black text-lg tracking-tight mb-1">
            CBUS<span className="gradient-text">Digital</span>
          </div>
          <p className="text-sm">Powell, OH · Columbus Metro</p>
          <a href="mailto:kyle@cbusdigital.com" className="text-sm hover:text-white transition-colors">
            kyle@cbusdigital.com
          </a>
        </div>

        <nav className="flex flex-wrap gap-6 text-sm font-medium justify-center">
          <Link href="/" className="hover:text-white transition-colors">Home</Link>
          <Link href="/about" className="hover:text-white transition-colors">About</Link>
          <Link href="/pricing" className="hover:text-white transition-colors">Pricing</Link>
          <Link href="/contact" className="hover:text-white transition-colors">Contact</Link>
          <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
        </nav>

        <p className="text-sm">© {year} CBUS Digital. All rights reserved.</p>
      </div>
    </footer>
  );
}
