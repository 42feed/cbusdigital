import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://cbusdigital.com"),
  title: {
    default: "CBUS Digital — Columbus Web Design",
    template: "%s | CBUS Digital",
  },
  description:
    "We build modern, high-converting websites for Columbus small businesses. See yours before you pay.",
  applicationName: "CBUS Digital",
  authors: [{ name: "Kyle Fedewa", url: "https://cbusdigital.com" }],
  creator: "Kyle Fedewa",
  publisher: "CBUS Digital",
  category: "Web Design",
  keywords: [
    "Columbus web design",
    "Columbus website designer",
    "small business websites Columbus Ohio",
    "local SEO Columbus",
    "web design for plumbers",
    "web design for HVAC",
    "Columbus Ohio web developer",
  ],
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://cbusdigital.com",
    siteName: "CBUS Digital",
    title: "CBUS Digital — Columbus Web Design",
    description:
      "We build modern, high-converting websites for Columbus small businesses. See yours before you pay.",
  },
  twitter: {
    card: "summary_large_image",
    title: "CBUS Digital — Columbus Web Design",
    description:
      "We build modern, high-converting websites for Columbus small businesses. See yours before you pay.",
  },
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full`}>
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-P24D51C6DM"
          strategy="afterInteractive"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-P24D51C6DM');
          `}
        </Script>
      </head>
      <body className="min-h-full flex flex-col bg-[#030712] text-slate-100 antialiased">
        {children}
      </body>
    </html>
  );
}
