import WorkCenterHero from "@/components/talent/work-center/hero";
import VideoSection from "@/components/talent/work-center/video-section";
import HowItWorks from "@/components/talent/work-center/how-it-works";
import BenefitsSection from "@/components/talent/work-center/benefits-section";
import JoinBanner from "@/components/talent/work-center/join-banner";
import NewsletterSection from "@/components/newsletter-section";

export default function WorkCenterPage() {
  return (
    <>
      <WorkCenterHero />
      <VideoSection />
      <HowItWorks />
      <BenefitsSection />
      <JoinBanner />
      <NewsletterSection />
    </>
  );
}
