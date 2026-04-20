import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Privacy Policy — CBUS Digital",
  description: "How CBUS Digital handles your personal information.",
};

export default function PrivacyPage() {
  return (
    <>
      <Nav />
      <main className="flex-1">
        <section className="py-20 px-6">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl font-black text-white mb-3">Privacy Policy</h1>
            <p className="text-slate-500 text-sm mb-12">Last updated: April 2026</p>

            <div className="space-y-10 text-slate-400 leading-relaxed">
              <div>
                <h2 className="text-lg font-bold text-white mb-3">1. Who We Are</h2>
                <p>
                  CBUS Digital is a web design service operated by Kyle Fedewa, based in Columbus, Ohio.
                  We build custom websites for local service businesses. You can reach us at{" "}
                  <a href="mailto:kyle@cbusdigital.com" className="text-violet-400 hover:text-violet-300 transition-colors">
                    kyle@cbusdigital.com
                  </a>.
                </p>
              </div>

              <div>
                <h2 className="text-lg font-bold text-white mb-3">2. Information We Collect</h2>
                <p className="mb-3">When you submit a form on this site — either the demo request form or the contact form — we collect the information you provide, which may include:</p>
                <ul className="list-disc list-inside space-y-1 text-slate-400 ml-2">
                  <li>Your name</li>
                  <li>Your email address</li>
                  <li>Your business name and industry</li>
                  <li>Your phone number (if provided)</li>
                  <li>Your service area(s)</li>
                  <li>Any additional information you voluntarily submit</li>
                </ul>
                <p className="mt-3">
                  We do not collect payment information directly. Any payments are processed through third-party processors.
                </p>
              </div>

              <div>
                <h2 className="text-lg font-bold text-white mb-3">3. How We Use Your Information</h2>
                <p className="mb-3">We use the information you provide solely to:</p>
                <ul className="list-disc list-inside space-y-1 text-slate-400 ml-2">
                  <li>Build and deliver your demo website</li>
                  <li>Respond to your questions or messages</li>
                  <li>Communicate with you about your project</li>
                </ul>
                <p className="mt-3">
                  We do not sell, rent, or share your personal information with third parties for marketing purposes.
                </p>
              </div>

              <div>
                <h2 className="text-lg font-bold text-white mb-3">4. How We Store Your Information</h2>
                <p>
                  Form submissions are processed through{" "}
                  <a href="https://formspree.io" target="_blank" rel="noopener noreferrer" className="text-violet-400 hover:text-violet-300 transition-colors">
                    Formspree
                  </a>
                  , a third-party form processing service. By submitting a form on this site, your data is transmitted to and stored by Formspree in accordance with their{" "}
                  <a href="https://formspree.io/legal/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-violet-400 hover:text-violet-300 transition-colors">
                    privacy policy
                  </a>. We receive your submission via email and store it only as needed to complete your project.
                </p>
              </div>

              <div>
                <h2 className="text-lg font-bold text-white mb-3">5. Cookies & Analytics</h2>
                <p>
                  This site may use Google Analytics to understand how visitors interact with our pages. Google Analytics collects anonymized data such as pages visited, time on site, and browser type. No personally identifiable information is collected through analytics. You can opt out of Google Analytics tracking using the{" "}
                  <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer" className="text-violet-400 hover:text-violet-300 transition-colors">
                    Google Analytics Opt-out Browser Add-on
                  </a>.
                </p>
              </div>

              <div>
                <h2 className="text-lg font-bold text-white mb-3">6. Your Rights</h2>
                <p>
                  You have the right to request access to, correction of, or deletion of any personal information we hold about you. To make such a request, contact us at{" "}
                  <a href="mailto:kyle@cbusdigital.com" className="text-violet-400 hover:text-violet-300 transition-colors">
                    kyle@cbusdigital.com
                  </a>{" "}
                  and we will respond promptly.
                </p>
              </div>

              <div>
                <h2 className="text-lg font-bold text-white mb-3">7. Changes to This Policy</h2>
                <p>
                  We may update this privacy policy from time to time. Any changes will be posted on this page with an updated date. Continued use of the site after changes constitutes acceptance of the updated policy.
                </p>
              </div>

              <div>
                <h2 className="text-lg font-bold text-white mb-3">8. Contact</h2>
                <p>
                  Questions about this privacy policy? Email us at{" "}
                  <a href="mailto:kyle@cbusdigital.com" className="text-violet-400 hover:text-violet-300 transition-colors">
                    kyle@cbusdigital.com
                  </a>.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
