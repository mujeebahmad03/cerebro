import Hero from "@/components/home/hero";
import Features from "@/components/home/features";
import TalentSection from "@/components/home/talent-section";
import FeatureSection from "@/components/home/feature-section";
import BusinessSection from "@/components/home/business-section";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Features />
      <TalentSection />
      <FeatureSection />
      <BusinessSection />
    </>
  );
}
