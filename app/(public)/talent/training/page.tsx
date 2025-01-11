import TrainingHero from "@/components/talent/training/hero";
import TrainingIntro from "@/components/talent/training/intro";
import VideoSection from "@/components/talent/training/video-section";
import HowItWorks from "@/components/talent/training/how-it-works";
import PathwaysSection from "@/components/talent/training/pathways-section";
import NewsletterSection from "@/components/newsletter-section";

export default function TrainingPage() {
  return (
    <>
      <TrainingHero />
      <TrainingIntro />
      <VideoSection />
      <HowItWorks />
      <PathwaysSection />
      <NewsletterSection />
    </>
  );
}
