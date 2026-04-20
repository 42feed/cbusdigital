export interface IndustryStat {
  value: string;
  label: string;
  detail: string;
}

export interface IndustryMustHave {
  icon: string;
  title: string;
  description: string;
}

export interface IndustryDesignPrinciple {
  title: string;
  detail: string;
}

export interface IndustryMockup {
  navBrand: string;    // e.g. "Columbus"
  navAccent: string;   // e.g. "Plumbing" — shown in accent color
  navBg: string;       // CSS color
  heroBg: string;      // CSS gradient
  glowColor: string;   // hex for radial glow in hero
  accentColor: string; // hex for buttons / badge / highlights
  badge: string;       // small pill text above headline
  headline: string;    // H2 inside the mockup
  sub: string;         // body text inside the mockup
  trustBar: string[];  // 4 items
  services: string[];  // 6 service names
}

export interface IndustryColors {
  glow: string;         // hex for hero section blob
  ctaGradient: string;  // CSS gradient for bottom CTA banner
  badgeText: string;    // Tailwind text class e.g. "text-blue-300"
  badgeDot: string;     // Tailwind bg class e.g. "bg-blue-400"
  seoCardBorder: string; // Tailwind border class
  seoCardBg: string;    // CSS gradient for the GBP info card
}

export interface Industry {
  slug: string;
  name: string;           // full label e.g. "Plumbers & Plumbing Companies"
  exampleUrl: string;     // https://plumber.cbusdigital.com
  metaTitle: string;
  metaDescription: string;

  heroLine1: string;      // plain text
  heroLine2: string;      // gradient text
  heroSub: string;

  colors: IndustryColors;
  mockup: IndustryMockup;

  stats: IndustryStat[];

  mustHavesIntro: string;
  mustHaves: IndustryMustHave[];

  seoBlurb: string;
  seoKeywords: string[];
  gbpNote: string;

  designHeadline: string;
  designSub: string;
  designPrinciples: IndustryDesignPrinciple[];

  pageStructure: [string, string][];

  ctaTitle: string;
  ctaSub: string;
}
