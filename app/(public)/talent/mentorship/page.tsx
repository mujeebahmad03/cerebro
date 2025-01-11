import MentorshipHero from "@/components/talent/mentorship/hero";
import VideoSection from "@/components/talent/mentorship/video-section";
import HowItWorks from "@/components/talent/mentorship/how-it-works";
import PackagesSection from "@/components/talent/mentorship/packages-section";
import SchedulingSection from "@/components/talent/mentorship/scheduling-section";
import NewsletterSection from "@/components/newsletter-section";

export default function MentorshipPage() {
  return (
    <>
      <MentorshipHero />
      <VideoSection />
      <HowItWorks />
      <PackagesSection />
      <SchedulingSection />
      <NewsletterSection />
    </>
  );
}
