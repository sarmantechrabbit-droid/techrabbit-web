import Hero from "../components/Hero";
import PricingSection from "../components/PricingSection";
import ComparisonSection from "../components/ComparisonSection";
import ProcessSection from "../components/ProcessSection";
import PortfolioSection from "../components/PortfolioSection";
import Testimonials from "../components/Testimonials";
import FAQSection from "../components/FAQSection";
import CTASection from "../components/CTASection";

export default function Home() {
  return (
    <div className="bg-white">
      <Hero />

      {/* Pricing - Second Section */}
      <PricingSection />

      {/* Why we stand out - Third Section */}
      <ComparisonSection />

      {/* Process - Fourth Section */}
      <ProcessSection />

      {/* Explore Work - Fifth Section */}
      <PortfolioSection />

      {/* Testimonials */}
      <Testimonials />

      {/* FAQ */}
      <FAQSection />
      {/* <CTASection />   */}
    </div>
  );
}
