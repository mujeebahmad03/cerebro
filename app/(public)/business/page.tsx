import BusinessHero from "@/components/business/hero";
import SolutionsSection from "@/components/business/solutions-section";
import FeaturesSection from "@/components/business/features-section";
import RecruitmentCTA from "@/components/business/recruitment-cta";
import BuildShopCTA from "@/components/business/buildshop-cta";
import NewsletterSection from "@/components/newsletter-section";

export default function BusinessPage() {
  return (
    <>
      <BusinessHero />
      <SolutionsSection />
      <FeaturesSection />
      <RecruitmentCTA />
      <BuildShopCTA />
      <NewsletterSection />
    </>
  );
}
