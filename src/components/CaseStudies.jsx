import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Reveal from "./Reveal";
import { ArrowUpRight } from "lucide-react";
import shipora from "../assets/Dashboard/Shipora.png";
import lexa from "../assets/Dashboard/lexa.png";
import oppvia from "../assets/Dashboard/oppvia.png";
import tr from "../assets/Dashboard/TR.jpg";


const cases = [
  {
    tag: "Logistics SaaS",
    title: "Shipora",
    description:
      "Multi-country shipping management system handling end-to-end logistics from China to UK/EU routes.",
    stats: [
      { label: "Countries", value: "4" },
      { label: "Roles", value: "3" },
      { label: "Launch", value: "30d" },
    ],
    chips: ["Routing Engine", "Tracking API", "Cloud-native"],
    image: shipora,
    accent: "--color-brand-green",
  },
  {
    tag: "AI Hiring Platform",
    title: "Oppvia",
    description:
      "Revolutionizing recruitment with AI interview simulators and automated calling agents.",
    stats: [
      { label: "AI Modules", value: "5+" },
      { label: "Tiers", value: "3" },
      { label: "Status", value: "Live" },
    ],
    chips: ["AI Simulator", "Biometric Eval", "Booking Agent"],
    image: oppvia,
    accent: "--color-brand-blue",
  },
  {
    tag: "Algo Trading",
    title: "Lexa",
    description:
      "High-performance trading engine connecting TradingView alerts to IBKR via Python FastAPI.",
    stats: [
      { label: "Production", value: "Live" },
      { label: "Backends", value: "2" },
      { label: "Signals", value: "Real-time" },
    ],
    chips: ["FastAPI", "API Bridge", "Execution Engine"],
    image: lexa,
    accent: "--color-brand-green",
  },
];

function ProjectCard({ project, index }) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.55 }}
      viewport={{ once: true }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="relative flex flex-col rounded-3xl border bg-white overflow-hidden cursor-pointer"
      style={{
        borderColor: hovered
          ? `var(${project.accent})`
          : "var(--color-border-card)",
        boxShadow: hovered
          ? `0 24px 60px -12px color-mix(in srgb, var(${project.accent}) 20%, transparent)`
          : "0 2px 20px rgba(0,0,0,0.06)",
        transform: hovered ? "translateY(-6px)" : "translateY(0)",
        transition: "border-color 0.35s, box-shadow 0.35s, transform 0.35s",
      }}
    >
      {/* Top accent line */}
      <div
        className="h-[3px] w-full shrink-0 transition-all duration-350"
        style={{
          background: hovered
            ? `var(${project.accent})`
            : "var(--color-border-light)",
        }}
      />

      {/* Image */}
      <div
        className="relative overflow-hidden"
        style={{ height: 180 , background: "var(--color-bg-card)" }}
      >
        <motion.img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-container object-top"
          animate={{ scale: hovered ? 1.04 : 1 }}
          transition={{ duration: 0.55, ease: "easeOut" }}
        />

        {/* Bottom fade */}
        <div
          className="absolute inset-0 pointer-events-none"
          // style={{
          //   background:
          //     "linear-gradient(to top, white 0%, rgba(255,255,255,0.15) 55%, transparent 100%)",
          // }}
        />

        {/* Tag */}
        <div className="absolute top-4 left-4 z-10">
          <span
            className="px-3 py-1.5 rounded-full text-[9px] font-black uppercase tracking-widest border bg-white"
            style={{
              color: `var(${project.accent})`,
              borderColor: `color-mix(in srgb, var(${project.accent}) 28%, transparent)`,
            }}
          >
            {project.tag}
          </span>
        </div>

        {/* Arrow */}
        <div className="absolute top-4 right-4 z-10">
          <motion.div
            animate={{
              rotate: hovered ? 45 : 0,
              backgroundColor: hovered ? `var(${project.accent})` : "white",
              borderColor: hovered
                ? `var(${project.accent})`
                : "var(--color-border-card)",
            }}
            transition={{ duration: 0.3 }}
            className="w-8 h-8 rounded-full border flex items-center justify-center"
          >
            <ArrowUpRight
              className="w-3.5 h-3.5 transition-colors duration-300"
              style={{ color: hovered ? "white" : "var(--color-text-muted)" }}
            />
          </motion.div>
        </div>
      </div>

      {/* Body */}
      <div className="flex flex-col flex-1 px-6 pt-5 pb-6 gap-4">
        {/* Title + desc */}
        <div>
          <h3 className="text-xl font-black font-heading text-[var(--color-text-primary)] tracking-tight mb-2">
            {project.title}
          </h3>
          <p className="text-sm text-[var(--color-text-body)] leading-relaxed line-clamp-2">
            {project.description}
          </p>
        </div>

        {/* Stats */}
        <div
          className="grid grid-cols-3 rounded-2xl overflow-hidden border"
          style={{ borderColor: "var(--color-border-card)" }}
        >
          {project.stats.map((s, i) => (
            <div
              key={s.label}
              className="py-3 text-center transition-colors duration-350"
              style={{
                borderRight:
                  i < project.stats.length - 1
                    ? "1px solid var(--color-border-card)"
                    : "none",
                background: hovered
                  ? `color-mix(in srgb, var(${project.accent}) 6%, white)`
                  : "var(--color-bg-card-light)",
              }}
            >
              <div
                className="text-base font-black font-heading leading-none transition-colors duration-300"
                style={{
                  color: hovered
                    ? `var(${project.accent})`
                    : "var(--color-text-primary)",
                }}
              >
                {s.value}
              </div>
              <div className="text-[8px] font-black uppercase tracking-widest text-[var(--color-text-faint)] mt-1">
                {s.label}
              </div>
            </div>
          ))}
        </div>

        {/* Chips */}
        <div className="flex flex-wrap gap-2 mt-auto">
          {project.chips.map((chip) => (
            <span
              key={chip}
              className="px-3 py-1 rounded-full text-[9px] font-black uppercase tracking-wider border transition-all duration-300"
              style={{
                background: hovered
                  ? `color-mix(in srgb, var(${project.accent}) 8%, transparent)`
                  : "var(--color-bg-card)",
                color: hovered
                  ? `var(${project.accent})`
                  : "var(--color-text-muted)",
                borderColor: hovered
                  ? `color-mix(in srgb, var(${project.accent}) 25%, transparent)`
                  : "var(--color-border-card)",
              }}
            >
              {chip}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default function CaseStudies() {
  return (
    <section
      id="work"
      className="relative pb-16  px-4 sm:px-6 md:px-12 bg-[var(--color-bg-page)] overflow-hidden"
    >
      {/* Dot grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle, var(--color-grid-dot) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
          opacity: 0.55,
        }}
      />
      <div
        className="absolute top-0 inset-x-0 h-28 pointer-events-none"
        style={{
          background: "linear-gradient(to bottom, var(--color-bg-page), transparent)",
        }}
      />
      <div
        className="absolute bottom-0 inset-x-0 h-28 pointer-events-none"
        style={{
          background: "linear-gradient(to top, var(--color-bg-page), transparent)",
        }}
      />

      <div className="max-w-7xl mx-auto relative z-10">

        {/* ── Header ── */}
        <Reveal className="mb-14">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">

            {/* Left */}
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[var(--color-border-brand-soft)] bg-[var(--color-bg-brand-tint)] text-[var(--color-brand-blue)] text-[10px] font-black tracking-widest uppercase mb-5">
                Our Work
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl font-black font-heading tracking-tight text-[var(--color-text-primary)] leading-[1]">
                Products we've built
                <br />
                <span
                  className="bg-clip-text text-transparent"
                  style={{ backgroundImage: "var(--gradient-brand)" }}
                >
                  shipped & scaled.
                </span>
              </h2>
            </div>

            {/* Right */}
            <div className="flex flex-col items-start md:items-end gap-4 shrink-0">
              <p className="text-[var(--color-text-body)] text-sm max-w-[220px] leading-relaxed md:text-right">
                Real products. Real clients. Real results — from MVP to scale.
              </p>
              <Link
                to="/work"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-black text-[10px] uppercase tracking-widest border transition-all duration-300 hover:shadow-md group"
                style={{
                  borderColor: "var(--color-border-subtle)",
                  color: "var(--color-text-primary)",
                  background: "white",
                }}
              >
                View all projects
                <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </div>
          </div>
        </Reveal>

        {/* ── Desktop grid / Mobile slider ── */}
        {/* Desktop / Tablet Grid */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cases.map((project, idx) => (
            <ProjectCard key={project.title} project={project} index={idx} />
          ))}
        </div>
        {/* Mobile horizontal slider */}
        <div className="md:hidden flex gap-4 overflow-x-auto snap-x snap-mandatory pb-4 -mx-1 px-1 scrollbar-hide">
          {cases.map((project, idx) => (
            <div key={project.title} className="snap-start shrink-0 w-[85vw]">
              <ProjectCard project={project} index={idx} />
            </div>
          ))}
        </div>

        {/* ── Bottom stats strip ── */}
        <Reveal delay={0.2} className="lg:mt-12 sm:mt-4">
          <div
            className="rounded-3xl border border-[var(--color-border-card)] bg-white px-4 sm:px-6 md:px-8 py-5 sm:py-6 flex flex-col lg:flex-row items-center justify-between gap-4 lg:gap-6"
            style={{ boxShadow: "0 2px 20px rgba(0,0,0,0.05)" }}
          >
            <div className="w-full lg:w-auto grid grid-cols-4 gap-2 sm:gap-4 lg:flex lg:items-center lg:gap-12 justify-center lg:justify-start">
              {[
                { value: "30+", label: "Products shipped" },
                { value: "6", label: "Countries" },
                { value: "100%", label: "IP ownership" },
                { value: "30d", label: "Avg. MVP launch" },
              ].map((s, i, arr) => (
                <div key={s.label} className="flex items-center gap-2 sm:gap-4 md:gap-8 lg:gap-12">
                  <div className="text-center">
                    <div
                      className="text-xl sm:text-2xl font-black font-heading bg-clip-text text-transparent leading-none"
                      style={{ backgroundImage: "var(--gradient-brand)" }}
                    >
                      {s.value}
                    </div>
                    <div className="text-[7px] sm:text-[8px] md:text-[9px] font-black uppercase tracking-widest text-[var(--color-text-faint)] mt-1 whitespace-nowrap">
                      {s.label}
                    </div>
                  </div>
                  {i < arr.length - 1 && (
                    <div
                      className="hidden md:block w-px h-8 shrink-0"
                      style={{ background: "var(--color-border-card)" }}
                    />
                  )}
                </div>
              ))}
            </div>

            <Link
              to="/contact"
              className="shrink-0 flex items-center gap-2 px-7 py-3.5 rounded-full text-white font-black text-[10px] uppercase tracking-widest transition-all duration-300 hover:scale-[1.03] hover:shadow-lg"
              style={{
                backgroundImage: "var(--gradient-brand)",
                boxShadow: "0 8px 24px var(--color-brand-glow)",
              }}
            >
              Start your project
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </Reveal>

      </div>
    </section>
  );
}
