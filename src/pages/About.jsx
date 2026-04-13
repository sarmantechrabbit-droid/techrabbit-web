import AboutHero from "../components/about/AboutHero";
import AboutStory from "../components/about/AboutStory";
import AboutTeam from "../components/about/AboutTeam";
import AboutTimeline from "../components/about/AboutTimeline";
import AboutCTA from "../components/about/AboutCTA";

export default function About() {
  return (
    <div className="bg-[#0c0c0c] min-h-screen">
      <AboutHero />
      <AboutStory />
      <AboutTeam />
      <AboutTimeline />
      <AboutCTA />
    </div>
  );
}
