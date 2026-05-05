import type { Metadata } from "next";
import Link from "next/link";
import { Suspense } from "react";
import DemoForm from "@/components/DemoForm";

export const metadata: Metadata = {
  title: { absolute: "Get Your Free Demo Site — CBUS Digital" },
  description:
    "Tell us about your business and we'll build a personalized demo site within 1–2 business days. No payment required.",
  alternates: { canonical: "/demo" },
  openGraph: {
    title: "Get Your Free Demo Site — CBUS Digital",
    description:
      "Tell us about your business and we'll build a personalized demo site within 1–2 business days. No payment required.",
    url: "https://cbusdigital.com/demo",
    type: "website",
  },
};

export default function DemoPage() {
  return (
    <div className="min-h-screen grid-bg flex flex-col">
      {/* Minimal header */}
      <header className="px-6 py-5 flex items-center justify-between border-b border-white/8">
        <Link href="/" className="text-lg font-black tracking-tight text-white">
          CBUS<span className="gradient-text">Digital</span>
        </Link>
        <div className="text-sm text-slate-500">
          Questions?{" "}
          <a href="mailto:kyle@cbusdigital.com" className="text-slate-300 hover:text-white transition-colors underline underline-offset-4">
            kyle@cbusdigital.com
          </a>
        </div>
      </header>

      {/* Ambient glow */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden" aria-hidden="true">
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] opacity-10 rounded-full"
          style={{ background: "radial-gradient(ellipse, #7c3aed, transparent 70%)" }}
        />
      </div>

      {/* Form */}
      <main className="flex-1 flex flex-col items-center justify-center px-6 py-16 relative">
        <Suspense fallback={null}>
          <DemoForm />
        </Suspense>
      </main>

      {/* Footer trust line */}
      <footer className="px-6 py-5 text-center border-t border-white/8">
        <p className="text-slate-600 text-xs">
          🔒 Your info is used only to build your demo. No payment required. No spam.
        </p>
      </footer>
    </div>
  );
}
