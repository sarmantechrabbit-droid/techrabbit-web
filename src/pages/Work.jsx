import WorkHero from "../components/work/WorkHero";
import WorkPortfolio from "../components/work/WorkPortfolio";
import WorkStats from "../components/work/WorkStats";
import WorkTestimonials from "../components/work/WorkTestimonials";
import WorkFAQ from "../components/work/WorkFAQ";
import WorkCTA from "../components/work/WorkCTA";

export default function Work() {
  return (
    <main className="min-h-screen bg-[var(--color-bg-page)]">
      <WorkHero />
      <WorkPortfolio />
      {/* <WorkStats /> */}
      {/* <WorkTestimonials /> */}
      {/* <WorkFAQ /> */}
      <WorkCTA />
    </main>
  );
}
