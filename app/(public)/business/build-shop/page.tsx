import HeroSection from "@/components/business/build-shop/hero-section";
import VideoSection from "@/components/business/build-shop/video-section";
import PackagesSection from "@/components/business/build-shop/packages-section";
import HowItWorks from "@/components/business/build-shop/how-it-works";
import NewsletterSection from "@/components/business/build-shop/newsletter-section";
import IdeaSection from "@/components/business/build-shop/idea-section";
import FeaturesSection from "@/components/business/build-shop/features-section";
import RecruitmentSection from "@/components/business/build-shop/recruitment-section";

export default function BuildShopPage() {
  return (
    <>
      <HeroSection />
      <VideoSection />
      <HowItWorks />
      <PackagesSection />
      <FeaturesSection />
      <IdeaSection />
      <RecruitmentSection />
      <NewsletterSection />
    </>
  );
}
