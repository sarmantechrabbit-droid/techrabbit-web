import { Link } from "react-router-dom";
import img1 from "../assets/Dashboard/EchoVault.png";
import img2 from "../assets/Dashboard/EURO SHIPPER.png";
import img3 from "../assets/Dashboard/GroupBuy.png";
import img4 from "../assets/Dashboard/lexa.png";
import img5 from "../assets/Dashboard/oppvia.png";
import img6 from "../assets/Dashboard/Parentician.png";
import img7 from "../assets/Dashboard/pbn Cloud Kitchen.png";

const projects = [
  {
    name: "EchoVault",
    icon: "E",
    iconColor: "#fff",
    image: img1,
  },
  {
    name: "Euro Shipper",
    icon: "ES",
    iconColor: "#fff",
    image: img2,
  },
  {
    name: "GroupBuy",
    icon: "G",
    iconColor: "#fff",
    image: img3,
  },
  {
    name: "Lexa Dashboard",
    icon: "L",
    iconColor: "#fff",
    image: img4,
  },
  {
    name: "Oppvia",
    icon: "O",
    iconColor: "#fff",
    image: img5,
  },
  {
    name: "Parentician",
    icon: "P",
    iconColor: "#fff",
    image: img6,
  },
  {
    name: "PBN Cloud Kitchen",
    icon: "PK",
    iconColor: "#fff",
    image: img7,
  },
];

function ProjectCard({ project }) {
  return (
    <div className="group relative shrink-0 w-[85vw] sm:w-[600px] lg:w-[880px] mx-2 sm:mx-4 transition-all duration-500">
      <div className="relative w-full h-[220px] sm:h-[340px] lg:h-[480px] rounded-[20px] sm:rounded-[28px] overflow-hidden">
        <div className="flex-shrink-0 flex items-center px-4 h-10 bg-[var(--color-bg-footer)] border-b border-[var(--color-border-on-dark)]">
          <div className="flex items-center gap-1.5">
            <span className="w-3 h-3 rounded-full bg-[#ff5f57]" />
            <span className="w-3 h-3 rounded-full bg-[var(--color-accent-amber)]" />
            <span className="w-3 h-3 rounded-full bg-[var(--color-brand-green)]" />
          </div>
          <div className="mx-auto bg-white/[0.08] rounded-md px-10 py-1 text-[11px] text-white/30 font-mono">
            techrabbit
          </div>
        </div>

        <div
          className="absolute inset-x-0 bottom-0 overflow-hidden bg-[var(--color-bg-page)] border border-[var(--color-border-default)] rounded-b-[28px]"
          style={{ top: "40px" }}
        >
          <img
            src={project.image}
            alt={project.name}
            className="w-full h-full object-contain object-top group-hover:scale-[1.015] transition-transform duration-700 ease-out"
          />
        </div>
      </div>

      <div className="flex items-center gap-3 mt-4 px-1">
        <div className="w-8 h-8 rounded-xl bg-[var(--color-bg-card)] border border-[var(--color-border-card)] flex items-center justify-center text-[11px] font-black text-[var(--color-text-muted)] flex-shrink-0">
          {project.icon}
        </div>
        <p className="text-sm font-bold text-[var(--color-text-primary)] font-heading">
          {project.name}
        </p>
      </div>
    </div>
  );
}

function PortfolioMarquee() {
  const doubled = [...projects, ...projects];

  return (
    <section className="bg-[var(--color-bg-page)] overflow-hidden ">
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .marquee-track {
          animation: marquee 50s linear infinite;
          will-change: transform;
        }
        .marquee-track:hover {
          animation-play-state: paused;
        }
      `}</style>

      <div className="relative">
        {/* Gradient fade left */}
        <div
          className="absolute left-0 top-0 h-full w-16 sm:w-32 lg:w-48 z-10 pointer-events-none"
          style={{
            background:
              "linear-gradient(to right, var(--color-bg-page), transparent)",
          }}
        />

        {/* Gradient fade right */}
        <div
          className="absolute right-0 top-0 h-full w-16 sm:w-32 lg:w-48 z-10 pointer-events-none"
          style={{
            background:
              "linear-gradient(to left, var(--color-bg-page), transparent)",
          }}
        />

        <div className="flex overflow-hidden">
          <div className="marquee-track flex items-end px-4 sm:px-16">
            {doubled.map((project, i) => (
              <ProjectCard key={i} project={project} />
            ))}
          </div>
        </div>
      </div>

      <div className="flex justify-end px-4 sm:px-16 mt-6 mb-2">
        <Link
          to="/work"
          className="px-7 py-3.5 rounded-full text-sm font-black text-white transition-all duration-300 hover:scale-105"
          style={{
            background: "var(--gradient-brand)",
            boxShadow: "0 8px 24px var(--color-brand-glow)",
          }}
        >
          View all work →
        </Link>
      </div>
    </section>
  );
}

export default PortfolioMarquee;
