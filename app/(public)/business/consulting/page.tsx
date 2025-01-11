import ConsultingHero from "@/components/business/consulting/hero";
import VideoSection from "@/components/business/consulting/video-section";
import ConsultingSteps from "@/components/business/consulting/steps";
import ConsultingPackages from "@/components/business/consulting/packages";
import SchedulingSection from "@/components/business/consulting/scheduling";
import NewsletterSection from "@/components/newsletter-section";

export default function ConsultingPage() {
  return (
    <>
      <ConsultingHero />
      <VideoSection />
      <ConsultingSteps />
      <ConsultingPackages />
      <SchedulingSection />
      <NewsletterSection />
    </>
  );
}
