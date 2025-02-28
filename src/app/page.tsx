import AnalyticsSection from "@/components/pages/home/AnalyticsSection";
import CalloutSection from "@/components/pages/home/CalloutSection";
import CreateAccountSection from "@/components/pages/home/CreateAccountSection";
import FaqSection from "@/components/pages/home/FaqSection";
import FeatureSection from "@/components/pages/home/FeatureSection";
import HeroSection from "@/components/pages/home/HeroSection";
import PromotionSection from "@/components/pages/home/PromotionSection";
import ReassuranceSection from "@/components/pages/home/ReassuranceSection";
import RegisterSection from "@/components/pages/home/RegisterSection";
import Testimonial from "@/components/pages/home/Testimonial";

export default function Home() {
  return (
    <section className="max-w-[1200px] mx-auto">
      <HeroSection />
      <RegisterSection />
      <FeatureSection />
      <CreateAccountSection />
      <Testimonial />
      <ReassuranceSection />
      <AnalyticsSection />
      <PromotionSection />
      <FaqSection />
      <CalloutSection />
    </section>
  );
}
