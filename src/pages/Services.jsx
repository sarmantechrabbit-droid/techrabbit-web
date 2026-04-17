import ServicesHero from "../components/services/ServicesHero";
import ServicesPaths from "../components/services/ServicesPaths";
import ServicesOutcomes from "../components/services/ServicesOutcomes";
import ServicesTeam from "../components/services/ServicesTeam";
import ServicesPricing from "../components/services/ServicesPricing";
import Reveal from "../components/Reveal";

export default function Services() {
  return (
    <main className="min-h-screen bg-white">
      <ServicesHero />
      <ServicesPaths />
      <ServicesOutcomes />
      <ServicesTeam />
      <ServicesPricing />
    </main>
  );
}
