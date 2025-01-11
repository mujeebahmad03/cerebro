import RecruitmentHero from "@/components/business/recruitment/hero";
import VideoSection from "@/components/business/recruitment/video-section";
import RecruitmentSteps from "@/components/business/recruitment/steps";
import RecruitmentPackages from "@/components/business/recruitment/packages";
import CTASection from "@/components/business/recruitment/cta-section";
import NewsletterSection from "@/components/newsletter-section";

export default function RecruitmentPage() {
  return (
    <>
      <RecruitmentHero />
      <VideoSection />
      <RecruitmentSteps />
      <RecruitmentPackages />
      <CTASection />
      <NewsletterSection />
    </>
  );
}
