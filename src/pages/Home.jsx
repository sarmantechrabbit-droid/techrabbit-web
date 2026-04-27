import Hero from "../components/Hero";
import PricingSection from "../components/PricingSection";
import TimezoneOverlap from "../components/TimezoneOverlap";
import ComparisonSection from "../components/ComparisonSection";
import ProcessSection from "../components/ProcessSection";
import FAQSection from "../components/FAQSection";
import PortfolioMarquee from "../components/Portfoliomarquee";
import CaseStudies from "../components/CaseStudies";
import Testimonials from "../components/Testimonials";
import PromisesSection from "../components/PromisesSection";
import AboutCTA from "../components/about/AboutCTA";
import ServicesOutcomes from "../components/services/ServicesOutcomes";

export default function Home() {
  return (
    <div className="bg-[var(--color-bg-page)] overflow-x-hidden">
      <Hero />
      <PortfolioMarquee />

      {/* Pricing - Second Section */}
      <PricingSection />
      {/* Timezone Overlap */}
      <TimezoneOverlap />
      <ServicesOutcomes />

      {/* Why we stand out - Third Section */}
      <ComparisonSection />
      <ProcessSection />
      {/* Process - Fourth Section */}
      <CaseStudies />

      {/* Testimonials */}
      {/* <Testimonials /> */}

      {/* Promises - Fifth Section */}
      <PromisesSection />

      {/* FAQ */}

      <FAQSection />
      {/* <AboutCTA / > */}
      {/* <CTASection />   */}
    </div>
  );
}
