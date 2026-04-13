import Reveal from "./Reveal";
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
    iconBg: "#111",
    iconColor: "#fff",
    image: img1,
  },
  {
    name: "Euro Shipper",
    icon: "ES",
    iconBg: "#6366f1",
    iconColor: "#fff",
    image: img2,
  },
  {
    name: "GroupBuy",
    icon: "G",
    iconBg: "#FF6B35",
    iconColor: "#fff",
    image: img3,
  },
  {
    name: "Lexa Dashboard",
    icon: "L",
    iconBg: "#09B87F",
    iconColor: "#fff",
    image: img4,
  },
  {
    name: "Oppvia",
    icon: "O",
    iconBg: "#6366f1",
    iconColor: "#fff",
    image: img5,
  },
  {
    name: "Parentician",
    icon: "P",
    iconBg: "#E93E8C",
    iconColor: "#fff",
    image: img6,
  },
  {
    name: "PBN Cloud Kitchen",
    icon: "PK",
    iconBg: "#09B87F",
    iconColor: "#fff",
    image: img7,
  },
];

function ProjectCard({ project }) {
  return (
    <div className="group relative shrink-0 w-[880px] mx-8 transition-all duration-500 hover:-translate-y-2">
      {/* Outer device shell */}
      <div className="relative w-full h-[507px] rounded-[28px] overflow-hidden ">
        {/* macOS chrome bar */}
        <div className="flex-shrink-0 flex items-center px-4 h-10 bg-[#242424] border-b border-white/[0.07]">
          <div className="flex items-center gap-1.5">
            <span className="w-3 h-3 rounded-full bg-[#ff5f57]" />
            <span className="w-3 h-3 rounded-full bg-[#febc2e]" />
            <span className="w-3 h-3 rounded-full bg-[#28c840]" />
          </div>
          <div className="mx-auto bg-white/[0.08] rounded-md px-10 py-1 text-[11px] text-white/30 font-mono">
            techrabbit
          </div>
        </div>

        {/* ✅ White screen area — image scaled to fit entirely, no crop */}
        <div
          className="absolute inset-x-0 bottom-0 overflow-hidden bg-white border border-gray-200 rounded-b-[28px]"
          style={{ top: "40px" }} /* exactly the chrome bar height */
        >
          <img
            src={project.image}
            alt={project.name}
            className="w-full h-full object-contain object-top group-hover:scale-[1.015] transition-transform duration-700 ease-out"
          />
        </div>

        {/* Inner edge glow */}
        <div className="absolute inset-0 rounded-[28px] pointer-events-none " />
      </div>

      {/* Label */}
      <div className="flex items-center gap-3 mt-5 px-1">
        <div
          className="w-8 h-8 rounded-xl flex items-center justify-center text-[11px] font-bold flex-shrink-0 shadow-sm"
          style={{ backgroundColor: project.iconBg, color: project.iconColor }}
        >
          {project.icon}
        </div>
        <p className="text-[15px] text-gray-800 font-semibold font-heading">
          {project.name}
        </p>
      </div>
    </div>
  );
}

function PortfolioMarquee() {
  const doubled = [...projects, ...projects];

  return (
    <section className="py-12 bg-white overflow-hidden">
      <style>{`
        @keyframes marquee {
          0%   { transform: translateX(0); }
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

      {/* Marquee strip */}
      <div className="relative">
        <div className="absolute left-0 top-0 h-full w-48 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 h-full w-48 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

        <div className="flex overflow-hidden">
          <div className="marquee-track flex items-end px-16">
            {doubled.map((project, i) => (
              <ProjectCard key={i} project={project} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default PortfolioMarquee;
