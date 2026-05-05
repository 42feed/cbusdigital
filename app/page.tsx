import "./home.css";
import type { Metadata } from "next";
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

export const metadata: Metadata = {
  title: {
    absolute: "CBUS Digital — Columbus Web Design for Local Businesses",
  },
  description:
    "Custom websites for Columbus small businesses — built first, paid for last. See your demo site before you pay.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "CBUS Digital — Columbus Web Design for Local Businesses",
    description:
      "Custom websites for Columbus small businesses — built first, paid for last. See your demo site before you pay.",
    url: "https://cbusdigital.com/",
    type: "website",
  },
};

const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": "https://cbusdigital.com/#business",
  name: "CBUS Digital",
  description:
    "Web design and local SEO for Columbus, Ohio small businesses. Custom-built sites with no upfront payment.",
  url: "https://cbusdigital.com",
  telephone: "+1-614-352-2887",
  email: "kyle@cbusdigital.com",
  founder: {
    "@type": "Person",
    name: "Kyle Fedewa",
    url: "https://cbusdigital.com/about",
  },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Columbus",
    addressRegion: "OH",
    addressCountry: "US",
  },
  areaServed: [
    { "@type": "City", name: "Columbus" },
    { "@type": "City", name: "Dublin" },
    { "@type": "City", name: "Westerville" },
    { "@type": "City", name: "Hilliard" },
    { "@type": "City", name: "Worthington" },
    { "@type": "City", name: "Gahanna" },
    { "@type": "City", name: "Upper Arlington" },
    { "@type": "City", name: "Grove City" },
    { "@type": "City", name: "Reynoldsburg" },
    { "@type": "City", name: "Pickerington" },
    { "@type": "AdministrativeArea", name: "Franklin County, Ohio" },
  ],
  priceRange: "$$",
  serviceType: [
    "Web Design",
    "Web Development",
    "Local SEO",
    "Conversion Rate Optimization",
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Web Design Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Custom Website Design",
          description:
            "Custom-coded website with up to 50 pages, location SEO pages, and conversion-focused design.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Local SEO",
          description:
            "Google Business Profile optimization, schema markup, and location-based landing pages.",
        },
      },
    ],
  },
};

export default function Home() {
  return (
    <div
      className={`home-shell ${GeistSans.variable} ${GeistMono.variable} min-h-screen`}
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
      />
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
