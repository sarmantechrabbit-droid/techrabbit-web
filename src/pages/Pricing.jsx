import PricingHero from "../components/pricing/PricingHero";
import PricingFeatures from "../components/pricing/PricingFeatures";
import PricingHowHoursWork from "../components/pricing/PricingHowHoursWork";
import PricingComparison from "../components/pricing/PricingComparison";
import PricingCTA from "../components/pricing/PricingCTA";
import Reveal from "../components/Reveal";
import FAQSection from "../components/FAQSection";

export default function Pricing() {
  return (
    <main className="min-h-screen bg-white">
      <PricingHero />
      <PricingFeatures />
      <PricingHowHoursWork />
      <PricingComparison />
        <FAQSection />
      <PricingCTA />

    
    </main>
  );
}
