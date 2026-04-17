import AboutHero from "../components/about/AboutHero";
import AboutStory from "../components/about/AboutStory";
import AboutTeam from "../components/about/AboutTeam";
import AboutTimeline from "../components/about/AboutTimeline";
import AboutCTA from "../components/about/AboutCTA";
import HeroSec from "../components/about/HeroSec";
import hero_video from "../assets/video/hero_video.mp4";
import GridSec from "../components/about/GridSec";

const heroObj = {
  tagline: "About Us",
  title: "Built to solve the problems founders face",
  desc: "Tech Rabbit started in 2019 with one goal — build a product agency that actually works. Same team, full transparency, real accountability.",
  video: hero_video,
};

export const content = {
  badgeText: "From the founder",
  heading: "Why I built Tech Rabbit",
  description:
    "I've seen too many founders struggle with the same problems — offshore agencies that overpromise, freelancers who disappear, developers who don't understand the product.\n\nTech Rabbit is the agency I wish existed. One inhouse team. Full transparency. A subscription that grows with you — not a project-by-project vendor relationship.\n\nSix years in, 30+ products across 5 countries. The model works because we stay — same team, same codebase, same accountability.",
  video: hero_video,
  founder: {
    name: "Kunal",
    role: "Founder, Tech Rabbit· Ahmedabad, India",
    initial: "K",
    details: (
      <div className="flex flex-col">
        <span className="text-(--color-text-primary) font-bold text-sm">
          Kunal
        </span>
        <span className="text-(--color-text-muted) text-xs font-medium">
          Founder, Tech Rabbit · Ahmedabad, India
        </span>
      </div>
    ),
  },
};
export default function About() {
  return (
    <div className="bg-[var(--color-bg-page)] min-h-screen">
      {/* <AboutHero /> */}
      <HeroSec heroObj={heroObj} />
      {/* <GridSec content={content} /> */}

      <AboutStory />
      <AboutTeam />
      <AboutTimeline />
      <AboutCTA />
    </div>
  );
}
