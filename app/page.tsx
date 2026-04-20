import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Founder from "@/components/Founder";
import NewWay from "@/components/NewWay";
import Industries from "@/components/Industries";
import Stakes from "@/components/Stakes";
import HowItWorks from "@/components/HowItWorks";
import Guarantee from "@/components/Guarantee";
import FAQ from "@/components/FAQ";
import CTABanner from "@/components/CTABanner";
import Footer from "@/components/Footer";
import FadeIn from "@/components/FadeIn";

export default function Home() {
  return (
    <>
      <Nav />
      <main className="flex-1">
        <Hero />
        <Industries />
        <FadeIn><NewWay /></FadeIn>
        <FadeIn><Founder /></FadeIn>
        <FadeIn><Stakes /></FadeIn>
        <FadeIn><HowItWorks /></FadeIn>
        <FadeIn><Guarantee /></FadeIn>
        <FadeIn><FAQ /></FadeIn>
        <FadeIn><CTABanner /></FadeIn>
      </main>
      <Footer />
    </>
  );
}
