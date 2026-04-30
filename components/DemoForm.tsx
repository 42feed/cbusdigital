"use client";

import { useState, useRef, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";

// Maps the slug used in /services/[slug] to the matching INDUSTRY_GROUPS label
const SLUG_TO_LABEL: Record<string, string> = {
  plumbing: "Plumber",
  hvac: "HVAC / Heating & Cooling",
  landscaping: "Landscaper / Lawn Care",
  cleaning: "House Cleaning",
  roofing: "Roofer",
  electrical: "Electrician",
  painting: "Painter",
  contracting: "General Contractor",
  "auto-detailing": "Auto Detailing",
  "pest-control": "Pest Control",
  "tree-service": "Tree Service",
  "pressure-washing": "Pressure Washing",
  handyman: "Handyman",
  "pool-service": "Pool Service & Repair",
  locksmith: "Locksmith",
  chiropractic: "Chiropractor",
  "med-spa": "Med Spa / Aesthetician",
  law: "Attorney / Law Firm",
  accounting: "Accountant / CPA",
  "personal-training": "Personal Trainer",
  "dog-grooming": "Dog Grooming",
  moving: "Moving Company",
  photography: "Photographer",
  tutoring: "Tutor / Tutoring Service",
  flooring: "Flooring Company",
  "window-cleaning": "Window Cleaning",
  "appliance-repair": "Appliance Repair",
  fencing: "Fence Company",
  "garage-door": "Garage Door Repair",
  "dumpster-rental": "Dumpster Rental",
};

interface FormData {
  firstName: string;
  businessName: string;
  industry: string;
  customIndustry: string;
  yearsInBusiness: string;
  services: string[];
  phone: string;
  hasWebsite: string;
  websiteUrl: string;
  googleBusinessUrl: string;
  serviceAreas: string[];
  email: string;
  extras: string;
}

const INDUSTRY_GROUPS: { group: string; items: string[] }[] = [
  {
    group: "Home Services",
    items: [
      "Plumber",
      "HVAC / Heating & Cooling",
      "Electrician",
      "Roofer",
      "General Contractor",
      "Painter",
      "Handyman",
      "Flooring Company",
      "Window & Door Installation",
      "Insulation Contractor",
      "Gutter Company",
      "Siding Company",
      "Fence Company",
      "Deck Builder",
      "Concrete & Masonry",
      "Foundation Repair",
      "Waterproofing",
      "Garage Door Repair",
      "Locksmith",
      "Chimney Sweep",
    ],
  },
  {
    group: "Lawn & Outdoor",
    items: [
      "Landscaper / Lawn Care",
      "Tree Service",
      "Pressure Washing",
      "Pool Service & Repair",
      "Irrigation & Sprinklers",
      "Snow Removal",
    ],
  },
  {
    group: "Cleaning & Junk",
    items: [
      "Pest Control",
      "House Cleaning",
      "Commercial Cleaning",
      "Carpet Cleaning",
      "Window Cleaning",
      "Junk Removal",
      "Dumpster Rental",
    ],
  },
  {
    group: "Auto",
    items: [
      "Auto Detailing",
      "Mobile Mechanic",
      "Windshield Repair",
      "Towing Service",
      "Auto Body Shop",
    ],
  },
  {
    group: "Health & Wellness",
    items: [
      "Chiropractor",
      "Physical Therapist",
      "Massage Therapist",
      "Personal Trainer",
      "Med Spa / Aesthetician",
      "Mental Health Counselor",
      "Dentist",
    ],
  },
  {
    group: "Professional Services",
    items: [
      "Attorney / Law Firm",
      "Accountant / CPA",
      "Financial Advisor",
      "Insurance Agent",
      "Real Estate Agent",
    ],
  },
  {
    group: "Personal Care",
    items: [
      "Hair Salon / Barber",
      "Nail Salon",
      "Dog Grooming",
      "Pet Sitting / Dog Walking",
    ],
  },
  {
    group: "Moving & Care",
    items: ["Moving Company", "Home Organizer", "Senior / Home Care"],
  },
  {
    group: "Events & Media",
    items: [
      "Photographer",
      "Videographer",
      "Caterer",
      "Event Planner",
      "DJ / Entertainment",
    ],
  },
  {
    group: "Education",
    items: ["Tutor / Tutoring Service", "Music Lessons", "Driving School"],
  },
  {
    group: "Specialty Repair",
    items: [
      "Appliance Repair",
      "Computer Repair",
      "Phone Repair",
      "Security System Installation",
    ],
  },
];

const ALL_INDUSTRIES = INDUSTRY_GROUPS.flatMap((g) => g.items);

const TOTAL_STEPS = 11;

function ProgressBar({ step }: { step: number }) {
  const pct = Math.round((step / TOTAL_STEPS) * 100);
  return (
    <div className="w-full mb-10">
      <div className="flex justify-between text-xs text-slate-500 mb-2">
        <span>Building your demo</span>
        <span>{pct}% complete</span>
      </div>
      <div className="h-1 bg-white/8 rounded-full overflow-hidden">
        <div
          className="h-full rounded-full transition-all duration-500"
          style={{
            width: `${pct}%`,
            background: "linear-gradient(90deg, #7c3aed, #2563eb, #0891b2)",
          }}
        />
      </div>
    </div>
  );
}

function StepWrapper({ children }: { children: React.ReactNode }) {
  return (
    <div className="animate-in fade-in slide-in-from-right-4 duration-300">
      {children}
    </div>
  );
}

// Searchable industry dropdown
function IndustryDropdown({
  value,
  onChange,
}: {
  value: string;
  onChange: (val: string) => void;
}) {
  const [query, setQuery] = useState(value === "Other" ? "" : value);
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  // Close on outside click
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const filtered = query.trim()
    ? ALL_INDUSTRIES.filter((i) =>
        i.toLowerCase().includes(query.toLowerCase())
      )
    : null; // null = show grouped view

  const select = (item: string) => {
    onChange(item);
    setQuery(item);
    setOpen(false);
  };

  return (
    <div ref={ref} className="relative">
      <input
        type="text"
        autoFocus
        autoComplete="off"
        placeholder="Search or select your industry..."
        value={query}
        onFocus={() => setOpen(true)}
        onChange={(e) => {
          setQuery(e.target.value);
          onChange("");
          setOpen(true);
        }}
        className="w-full bg-white/5 border border-white/12 text-white placeholder-slate-600 rounded-xl px-5 py-4 text-lg outline-none focus:border-violet-500/60 focus:bg-white/8 transition-all"
      />
      {value && (
        <div className="absolute right-4 top-1/2 -translate-y-1/2 text-emerald-400 text-sm font-semibold">
          ✓
        </div>
      )}

      {open && (
        <div className="absolute z-50 mt-2 w-full bg-[#0f1120] border border-white/12 rounded-2xl shadow-2xl overflow-hidden">
          <div className="max-h-72 overflow-y-auto">
            {/* Filtered flat list */}
            {filtered !== null ? (
              filtered.length > 0 ? (
                <ul className="py-2">
                  {filtered.map((item) => (
                    <li key={item}>
                      <button
                        className="w-full text-left px-5 py-2.5 text-sm text-slate-300 hover:bg-white/8 hover:text-white transition-colors"
                        onMouseDown={() => select(item)}
                      >
                        {item}
                      </button>
                    </li>
                  ))}
                </ul>
              ) : (
                <div className="px-5 py-4 text-slate-500 text-sm">
                  No match —{" "}
                  <button
                    className="text-violet-400 hover:text-violet-300 underline"
                    onMouseDown={() => { onChange("Other"); setQuery(""); setOpen(false); }}
                  >
                    select "Other" to enter manually
                  </button>
                </div>
              )
            ) : (
              /* Grouped list */
              <ul className="py-2">
                {INDUSTRY_GROUPS.map((group) => (
                  <li key={group.group}>
                    <div className="px-5 py-2 text-[10px] font-bold text-slate-600 uppercase tracking-widest">
                      {group.group}
                    </div>
                    {group.items.map((item) => (
                      <button
                        key={item}
                        className="w-full text-left px-5 py-2 text-sm text-slate-300 hover:bg-white/8 hover:text-white transition-colors"
                        onMouseDown={() => select(item)}
                      >
                        {item}
                      </button>
                    ))}
                  </li>
                ))}
              </ul>
            )}

            {/* Always-visible Other option */}
            <div className="border-t border-white/8">
              <button
                className="w-full text-left px-5 py-3 text-sm text-slate-400 hover:bg-white/8 hover:text-white transition-colors"
                onMouseDown={() => { onChange("Other"); setQuery(""); setOpen(false); }}
              >
                💼 Other — I'll enter it manually
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

// Tag input for service areas
function ServiceAreaInput({
  areas,
  onChange,
  placeholder = "Type a city, town, or area and press Enter...",
}: {
  areas: string[];
  onChange: (areas: string[]) => void;
  placeholder?: string;
}) {
  const [input, setInput] = useState("");

  const add = () => {
    const trimmed = input.trim();
    if (trimmed && !areas.includes(trimmed)) {
      onChange([...areas, trimmed]);
    }
    setInput("");
  };

  const remove = (area: string) => onChange(areas.filter((a) => a !== area));

  return (
    <div>
      <input
        autoFocus
        type="text"
        placeholder={placeholder}
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") { e.preventDefault(); add(); }
          if (e.key === "," ) { e.preventDefault(); add(); }
        }}
        className="w-full bg-white/5 border border-white/12 text-white placeholder-slate-600 rounded-xl px-5 py-4 text-lg outline-none focus:border-violet-500/60 focus:bg-white/8 transition-all"
      />
      <p className="text-xs text-slate-600 mt-2 mb-4">Press Enter after each area to add it.</p>

      {areas.length > 0 && (
        <div className="flex flex-wrap gap-2">
          {areas.map((area) => (
            <span
              key={area}
              className="inline-flex items-center gap-1.5 bg-violet-600/20 border border-violet-500/30 text-violet-200 text-sm font-semibold px-3 py-1.5 rounded-full"
            >
              {area}
              <button
                onClick={() => remove(area)}
                className="text-violet-400 hover:text-white transition-colors leading-none"
                aria-label={`Remove ${area}`}
              >
                ×
              </button>
            </span>
          ))}
        </div>
      )}
    </div>
  );
}

export default function DemoForm() {
  const searchParams = useSearchParams();
  const prefilledIndustry = (() => {
    const slug = searchParams.get("industry");
    if (!slug) return "";
    return SLUG_TO_LABEL[slug] ?? "";
  })();

  const [intro, setIntro] = useState(true);
  const [step, setStep] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  const [data, setData] = useState<FormData>({
    firstName: "",
    businessName: "",
    industry: prefilledIndustry,
    customIndustry: "",
    yearsInBusiness: "",
    services: [],
    phone: "",
    hasWebsite: "",
    websiteUrl: "",
    googleBusinessUrl: "",
    serviceAreas: [],
    email: "",
    extras: "",
  });

  const update = <K extends keyof FormData>(field: K, value: FormData[K]) =>
    setData((prev) => ({ ...prev, [field]: value }));

  const next = () => { setStep((s) => s + 1); setError(""); };
  const back = () => { setStep((s) => s - 1); setError(""); };

  const validate = (): boolean => {
    setError("");
    if (step === 0 && !data.firstName.trim()) { setError("Please enter your name."); return false; }
    if (step === 1 && !data.businessName.trim()) { setError("Please enter your business name."); return false; }
    if (step === 2) {
      if (!data.industry) { setError("Please select your industry."); return false; }
      if (data.industry === "Other" && !data.customIndustry.trim()) { setError("Please enter your business type."); return false; }
    }
    if (step === 5 && !data.phone.trim()) { setError("Please enter a phone number."); return false; }
    if (step === 6 && data.hasWebsite === "yes" && !data.websiteUrl.trim()) { setError("Please enter your website URL."); return false; }
    if (step === 8 && data.serviceAreas.length === 0) { setError("Add at least one service area."); return false; }
    if (step === 9) {
      if (!data.email.trim()) { setError("Please enter your email address."); return false; }
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) { setError("Please enter a valid email address."); return false; }
    }
    return true;
  };

  const handleNext = () => { if (validate()) next(); };

  const handleSubmit = async () => {
    setSubmitting(true);
    try {
      const formspreeId = process.env.NEXT_PUBLIC_FORMSPREE_ID;
      const industryLabel = data.industry === "Other" ? data.customIndustry : data.industry;
      if (formspreeId) {
        await fetch(`https://formspree.io/f/${formspreeId}`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            name: data.firstName,
            businessName: data.businessName,
            industry: industryLabel,
            yearsInBusiness: data.yearsInBusiness,
            services: data.services.join(", "),
            phone: data.phone,
            hasWebsite: data.hasWebsite,
            websiteUrl: data.websiteUrl,
            googleBusinessUrl: data.googleBusinessUrl,
            serviceAreas: data.serviceAreas.join(", "),
            email: data.email,
            extras: data.extras,
            _subject: `New Demo Request — ${data.businessName} (${industryLabel})`,
          }),
        });
      }
      setSubmitted(true);
    } catch {
      setError("Something went wrong. Please email kyle@cbusdigital.com directly.");
    } finally {
      setSubmitting(false);
    }
  };

  const industryLabel = data.industry === "Other" ? data.customIndustry : data.industry;

  if (submitted) {
    return (
      <div className="text-center py-8 animate-in fade-in duration-500">
        <div className="text-6xl mb-6">🚀</div>
        <h2 className="text-4xl font-black text-white mb-4">We're on it, {data.firstName}.</h2>
        <p className="text-slate-400 text-lg max-w-md mx-auto mb-3 leading-relaxed">
          Your demo site for{" "}
          <span className="text-white font-semibold">{data.businessName}</span> is being built now.
          Expect a live link at{" "}
          <span className="text-violet-300 font-semibold">{data.email}</span> within 1–2 business days.
        </p>
        <p className="text-slate-500 text-sm mb-10">No payment. No commitment. Just your site.</p>
        <div className="glass-card rounded-2xl p-6 max-w-sm mx-auto text-left space-y-3 mb-8">
          <div className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-4">What happens next</div>
          {[
            "We build your personalized demo site",
            "You get a live link sent to your email",
            "You review it — no pressure, no payment",
            "Love it? Put 50% down to start revisions",
          ].map((item, i) => (
            <div key={i} className="flex items-start gap-3 text-sm text-slate-300">
              <span className="text-violet-400 shrink-0">✓</span>
              {item}
            </div>
          ))}
        </div>
        <Link href="/" className="text-slate-500 hover:text-white text-sm transition-colors underline underline-offset-4">
          Back to home
        </Link>
      </div>
    );
  }

  if (intro) {
    return (
      <div className="w-full max-w-xl mx-auto text-center animate-in fade-in duration-500">
        <div className="text-5xl mb-6">🚀</div>
        <h2 className="text-3xl md:text-4xl font-black text-white mb-4 leading-tight">
          Let's Build Your Free Demo Site
        </h2>
        <p className="text-slate-400 text-lg leading-relaxed mb-8 max-w-md mx-auto">
          We'll ask you a few quick questions about your business — takes about{" "}
          <span className="text-white font-semibold">3 minutes</span>. Once submitted, we'll
          research your business and build you a fully personalized, live website within{" "}
          <span className="text-white font-semibold">1–2 business days</span>. No payment. No commitment.
          You see it first.
        </p>

        <div className="glass-card rounded-2xl p-6 max-w-sm mx-auto text-left space-y-3 mb-8">
          <div className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-4">What to expect</div>
          {[
            "Answer a few questions about your business",
            "We build your personalized site for free",
            "You get a live link within 1–2 business days",
            "Love it? Then we talk next steps",
          ].map((item, i) => (
            <div key={i} className="flex items-start gap-3 text-sm text-slate-300">
              <span className="text-violet-400 font-bold shrink-0">{i + 1}.</span>
              {item}
            </div>
          ))}
        </div>

        <button
          onClick={() => setIntro(false)}
          className="glow-button bg-violet-600 hover:bg-violet-500 text-white text-lg font-bold px-10 py-4 rounded-xl transition-all"
        >
          Get Started →
        </button>
        <p className="text-slate-600 text-xs mt-4">No credit card. No sales call. Unlimited revisions.</p>
      </div>
    );
  }

  return (
    <div className="w-full max-w-xl mx-auto">
      <ProgressBar step={step} />

      {step === 0 && (
        <StepWrapper>
          <p className="text-slate-400 text-sm mb-2">Let's get started</p>
          <h2 className="text-3xl md:text-4xl font-black text-white mb-2">What's your name?</h2>
          <p className="text-slate-500 text-sm mb-8">Just so we can personalize your demo site.</p>
          <input
            autoFocus type="text" placeholder="First name"
            value={data.firstName}
            onChange={(e) => update("firstName", e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleNext()}
            className="w-full bg-white/5 border border-white/12 text-white placeholder-slate-600 rounded-xl px-5 py-4 text-lg outline-none focus:border-violet-500/60 focus:bg-white/8 transition-all"
          />
        </StepWrapper>
      )}

      {step === 1 && (
        <StepWrapper>
          <p className="text-slate-400 text-sm mb-2">Nice to meet you, {data.firstName}.</p>
          <h2 className="text-3xl md:text-4xl font-black text-white mb-2">What's your business called?</h2>
          <p className="text-slate-500 text-sm mb-8">We'll use this throughout your site.</p>
          <input
            autoFocus type="text" placeholder="Business name"
            value={data.businessName}
            onChange={(e) => update("businessName", e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleNext()}
            className="w-full bg-white/5 border border-white/12 text-white placeholder-slate-600 rounded-xl px-5 py-4 text-lg outline-none focus:border-violet-500/60 focus:bg-white/8 transition-all"
          />
        </StepWrapper>
      )}

      {step === 2 && (
        <StepWrapper>
          <p className="text-slate-400 text-sm mb-2">Got it.</p>
          <h2 className="text-3xl md:text-4xl font-black text-white mb-2">What type of business is it?</h2>
          <p className="text-slate-500 text-sm mb-8">We'll use the right design and copy style for your industry.</p>
          <IndustryDropdown
            value={data.industry}
            onChange={(val) => update("industry", val)}
          />
          {data.industry === "Other" && (
            <div className="mt-4 animate-in fade-in slide-in-from-bottom-2 duration-200">
              <input
                autoFocus
                type="text"
                placeholder="Describe your business type..."
                value={data.customIndustry}
                onChange={(e) => update("customIndustry", e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleNext()}
                className="w-full bg-white/5 border border-white/12 text-white placeholder-slate-600 rounded-xl px-5 py-4 text-lg outline-none focus:border-violet-500/60 focus:bg-white/8 transition-all"
              />
            </div>
          )}
        </StepWrapper>
      )}

      {step === 3 && (
        <StepWrapper>
          <p className="text-slate-400 text-sm mb-2">Great. <span className="text-slate-600">(Optional)</span></p>
          <h2 className="text-3xl md:text-4xl font-black text-white mb-2">How long have you been in business?</h2>
          <p className="text-slate-500 text-sm mb-8">We'll use this to build trust on your site — "Serving Columbus since 2012" goes a long way. Skip if you just started.</p>
          <input
            autoFocus type="text" placeholder="e.g. 8 years, since 2015, over a decade..."
            value={data.yearsInBusiness}
            onChange={(e) => update("yearsInBusiness", e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleNext()}
            className="w-full bg-white/5 border border-white/12 text-white placeholder-slate-600 rounded-xl px-5 py-4 text-lg outline-none focus:border-violet-500/60 focus:bg-white/8 transition-all"
          />
        </StepWrapper>
      )}

      {step === 4 && (
        <StepWrapper>
          <p className="text-slate-400 text-sm mb-2">Almost there. <span className="text-slate-600">(Optional)</span></p>
          <h2 className="text-3xl md:text-4xl font-black text-white mb-2">What are your top services?</h2>
          <p className="text-slate-500 text-sm mb-8">Type each service and press Enter to add it. These will be featured on your site. Skip if you'd rather tell us later.</p>
          <ServiceAreaInput
            areas={data.services}
            onChange={(vals) => update("services", vals)}
            placeholder="e.g. Drain Cleaning, Water Heater Installation..."
          />
        </StepWrapper>
      )}

      {step === 5 && (
        <StepWrapper>
          <p className="text-slate-400 text-sm mb-2">Perfect.</p>
          <h2 className="text-3xl md:text-4xl font-black text-white mb-2">What's your business phone number?</h2>
          <p className="text-slate-500 text-sm mb-8">This goes on your demo site as the click-to-call number.</p>
          <input
            autoFocus type="tel" placeholder="(614) 555-0100"
            value={data.phone}
            onChange={(e) => update("phone", e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleNext()}
            className="w-full bg-white/5 border border-white/12 text-white placeholder-slate-600 rounded-xl px-5 py-4 text-lg outline-none focus:border-violet-500/60 focus:bg-white/8 transition-all"
          />
        </StepWrapper>
      )}

      {step === 6 && (
        <StepWrapper>
          <p className="text-slate-400 text-sm mb-2">Good to know.</p>
          <h2 className="text-3xl md:text-4xl font-black text-white mb-2">Do you currently have a website?</h2>
          <p className="text-slate-500 text-sm mb-8">If you do, we'll make sure ours is a clear upgrade.</p>
          <div className="flex gap-4 mb-5">
            <button
              onClick={() => { update("hasWebsite", "no"); next(); }}
              className={`flex-1 glass-card rounded-xl py-4 font-bold text-lg transition-all hover:border-white/20 ${
                data.hasWebsite === "no" ? "border-violet-500/60 bg-violet-500/10 text-white" : "text-slate-300"
              }`}
            >
              No website
            </button>
            <button
              onClick={() => update("hasWebsite", "yes")}
              className={`flex-1 glass-card rounded-xl py-4 font-bold text-lg transition-all hover:border-white/20 ${
                data.hasWebsite === "yes" ? "border-violet-500/60 bg-violet-500/10 text-white" : "text-slate-300"
              }`}
            >
              Yes, I do
            </button>
          </div>
          {data.hasWebsite === "yes" && (
            <div className="animate-in fade-in slide-in-from-bottom-2 duration-200">
              <input
                autoFocus type="url" placeholder="https://yoursite.com"
                value={data.websiteUrl}
                onChange={(e) => update("websiteUrl", e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleNext()}
                className="w-full bg-white/5 border border-white/12 text-white placeholder-slate-600 rounded-xl px-5 py-4 text-lg outline-none focus:border-violet-500/60 focus:bg-white/8 transition-all"
              />
            </div>
          )}
        </StepWrapper>
      )}

      {step === 7 && (
        <StepWrapper>
          <p className="text-slate-400 text-sm mb-2">Optional — but very helpful.</p>
          <h2 className="text-3xl md:text-4xl font-black text-white mb-2">Do you have a Google Business Profile?</h2>
          <p className="text-slate-500 text-sm mb-8">If so, paste the link here. We'll use your reviews, rating, and info to make your demo as accurate as possible.</p>
          <input
            autoFocus type="url" placeholder="https://maps.google.com/..."
            value={data.googleBusinessUrl}
            onChange={(e) => update("googleBusinessUrl", e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleNext()}
            className="w-full bg-white/5 border border-white/12 text-white placeholder-slate-600 rounded-xl px-5 py-4 text-lg outline-none focus:border-violet-500/60 focus:bg-white/8 transition-all"
          />
          <p className="text-slate-600 text-xs mt-3">Search your business on Google Maps and paste the URL — or skip if you don't have one.</p>
        </StepWrapper>
      )}

      {step === 8 && (
        <StepWrapper>
          <p className="text-slate-400 text-sm mb-2">Almost there.</p>
          <h2 className="text-3xl md:text-4xl font-black text-white mb-2">What areas do you serve?</h2>
          <p className="text-slate-500 text-sm mb-8">We'll highlight these throughout your site.</p>
          <ServiceAreaInput
            areas={data.serviceAreas}
            onChange={(areas) => update("serviceAreas", areas)}
          />
        </StepWrapper>
      )}

      {step === 9 && (
        <StepWrapper>
          <p className="text-slate-400 text-sm mb-2">Last important one.</p>
          <h2 className="text-3xl md:text-4xl font-black text-white mb-2">Where should we send your demo site?</h2>
          <p className="text-slate-500 text-sm mb-8">We'll only use this to send you the live demo. No spam — ever.</p>
          <input
            autoFocus type="email" placeholder="you@yourbusiness.com"
            value={data.email}
            onChange={(e) => update("email", e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleNext()}
            className="w-full bg-white/5 border border-white/12 text-white placeholder-slate-600 rounded-xl px-5 py-4 text-lg outline-none focus:border-violet-500/60 focus:bg-white/8 transition-all"
          />
          <div className="flex items-center gap-2 mt-4">
            <span className="text-emerald-400 text-sm">🔒</span>
            <p className="text-slate-600 text-xs">Used only to send your demo. Nothing else.</p>
          </div>
        </StepWrapper>
      )}

      {step === 10 && (
        <StepWrapper>
          <p className="text-slate-400 text-sm mb-2">Optional — but helpful.</p>
          <h2 className="text-3xl md:text-4xl font-black text-white mb-2">Anything specific you want on your site?</h2>
          <p className="text-slate-500 text-sm mb-8">
            Specific services, your tagline, things you like or hate on competitor sites. The more you share, the better the demo.
          </p>
          <textarea
            autoFocus
            placeholder="e.g. We specialize in emergency drain cleaning, been in business 15 years, hate sites that are too busy..."
            value={data.extras}
            onChange={(e) => update("extras", e.target.value)}
            rows={5}
            className="w-full bg-white/5 border border-white/12 text-white placeholder-slate-600 rounded-xl px-5 py-4 text-base outline-none focus:border-violet-500/60 focus:bg-white/8 transition-all resize-none"
          />
        </StepWrapper>
      )}

      {error && <p className="text-red-400 text-sm mt-4">{error}</p>}

      {/* Navigation */}
      <div className="flex items-center justify-between mt-8">
        {step > 0 ? (
          <button onClick={back} className="text-slate-500 hover:text-slate-300 text-sm transition-colors">
            ← Back
          </button>
        ) : (
          <Link href="/" className="text-slate-500 hover:text-slate-300 text-sm transition-colors">
            ← Home
          </Link>
        )}

        {step < TOTAL_STEPS - 1 && step !== 2 && step !== 10 && (
          <button
            onClick={handleNext}
            className="glow-button bg-violet-600 hover:bg-violet-500 text-white font-bold px-8 py-3 rounded-xl transition-all"
          >
            Next →
          </button>
        )}

        {step === 2 && (
          <button
            onClick={handleNext}
            disabled={!data.industry || (data.industry === "Other" && !data.customIndustry.trim())}
            className="glow-button bg-violet-600 hover:bg-violet-500 disabled:opacity-30 disabled:cursor-not-allowed text-white font-bold px-8 py-3 rounded-xl transition-all"
          >
            Next →
          </button>
        )}

        {step === 10 && (
          <button
            onClick={handleSubmit}
            disabled={submitting}
            className="glow-button bg-violet-600 hover:bg-violet-500 disabled:opacity-50 text-white font-bold px-8 py-3 rounded-xl transition-all"
          >
            {submitting ? "Sending..." : "Build My Demo Site →"}
          </button>
        )}
      </div>

      {/* Skip links for optional steps */}
      {(step === 3 || step === 4 || step === 7 || step === 10) && (
        <button
          onClick={step === 10 ? handleSubmit : next}
          disabled={step === 10 && submitting}
          className="block text-center w-full text-slate-600 hover:text-slate-400 text-sm mt-4 transition-colors"
        >
          {step === 10 ? "Skip and submit →" : "Skip this step →"}
        </button>
      )}
    </div>
  );
}
