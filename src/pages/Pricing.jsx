import PricingHero from "../components/pricing/PricingHero";
import PricingFeatures from "../components/pricing/PricingFeatures";
import PricingHowHoursWork from "../components/pricing/PricingHowHoursWork";
import PricingComparison from "../components/pricing/PricingComparison";
import PricingCTA from "../components/pricing/PricingCTA";
import FAQSection from "../components/FAQSection";
import ServicesTeam from "../components/services/ServicesTeam";
import ComparisonSection from "../components/ComparisonSection";

export default function Pricing() {
  return (
    <main className="min-h-screen bg-[var(--color-bg-page)]">
      <PricingHero />
      <PricingFeatures />
      <PricingHowHoursWork />
      <ServicesTeam />
          <ComparisonSection />
    
      {/* <PricingComparison /> */}
      <FAQSection />
      <PricingCTA />
    </main>
  );
}
