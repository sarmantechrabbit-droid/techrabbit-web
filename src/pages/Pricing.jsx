import PricingHero from "../components/pricing/PricingHero";
import PricingFeatures from "../components/pricing/PricingFeatures";
import PricingHowHoursWork from "../components/pricing/PricingHowHoursWork";
import PricingComparison from "../components/pricing/PricingComparison";
import PricingCTA from "../components/pricing/PricingCTA";
import FAQSection from "../components/FAQSection";
import ServicesTeam from "../components/services/ServicesTeam";

export default function Pricing() {
  return (
    <main className="min-h-screen bg-[var(--color-bg-page)]">
      <PricingHero />
      <PricingFeatures />
      <PricingHowHoursWork />
      <ServicesTeam />

      <PricingComparison />
      <FAQSection />
      <PricingCTA />
    </main>
  );
}
