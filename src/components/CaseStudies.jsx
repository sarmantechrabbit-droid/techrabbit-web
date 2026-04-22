import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Reveal from "./Reveal";
import { ArrowUpRight, Zap, TrendingUp, Rocket } from "lucide-react";
import shipora from "../assets/Dashboard/Shipora.png";
import lexa from "../assets/Dashboard/lexa.png";
import oppvia from "../assets/Dashboard/oppvia.png";

const cases = [
  {
    tag: "Logistics SaaS",
    title: "Shipora",
    slug: "shipora",
    description:
      "Multi-country shipping management system handling end-to-end logistics from China to UK/EU routes.",
    stats: [
      { label: "Countries", value: "4" },
      { label: "Roles", value: "3" },
      { label: "Launch", value: "30d" },
    ],
    chips: ["Routing Engine", "Tracking API", "Cloud-native"],
    image: shipora,
    accent: "from-green-500 to-emerald-500",
    accentVar: "var(--color-brand-blue)",
    icon: Zap,
  },
  {
    tag: "AI Hiring Platform",
    title: "Oppvia",
    slug: "oppvia",
    description:
      "Revolutionizing recruitment with AI interview simulators and automated calling agents.",
    stats: [
      { label: "AI Modules", value: "5+" },
      { label: "Tiers", value: "3" },
      { label: "Status", value: "Live" },
    ],
    chips: ["AI Simulator", "Biometric Eval", "Booking Agent"],
    image: oppvia,
    accent: "from-blue-500 to-cyan-500",
    accentVar: "var(--color-brand-green)",
    icon: Rocket,
  },
  {
    tag: "Algo Trading",
    title: "Lexa",
    slug: "lexa",
    description:
      "High-performance trading engine connecting TradingView alerts to IBKR via Python FastAPI.",
    stats: [
      { label: "Production", value: "Live" },
      { label: "Backends", value: "2" },
      { label: "Signals", value: "Real-time" },
    ],
    chips: ["FastAPI", "API Bridge", "Execution Engine"],
    image: lexa,
    accent: "from-green-500 to-emerald-500",
    accentVar: "var(--color-brand-blue)",
    icon: TrendingUp,
  },
];

function ProjectCard({ project, index }) {
  const [hovered, setHovered] = useState(false);
  const Icon = project.icon;

  return (
    <Link to={`/case-study/${project.slug}`} className="h-full">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: index * 0.1, duration: 0.6 }}
        viewport={{ once: true }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className="relative flex flex-col rounded-3xl border bg-white overflow-hidden cursor-pointer group h-full"
        style={{
          borderColor: hovered
            ? project.accentVar
            : "var(--color-border-card)",
          boxShadow: hovered
            ? `0 24px 60px -12px color-mix(in srgb, ${project.accentVar} 25%, transparent)`
            : "0 2px 20px rgba(0,0,0,0.04)",
          transform: hovered ? "translateY(-8px)" : "translateY(0)",
          transition: "all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)",
        }}
      >
        {/* Top accent line */}
        <div
          className="h-1 w-full shrink-0 transition-all duration-400"
          style={{
            background: hovered
              ? project.accentVar
              : "var(--color-border-light)",
          }}
        />

        {/* Image Container */}
        <div
          className="relative overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100 w-full"
          style={{ height: "auto", aspectRatio: "16 / 10" }}
        >
          <motion.img
            src={project.image}
            alt={project.title}
            className=" w-full h-full object-fill object-center"
            animate={{ scale: hovered ? 1.05 : 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          />

          {/* Overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />

          {/* Tag Badge */}
          <motion.div
            className="absolute top-4 left-4 z-10"
            animate={{ y: hovered ? -2 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <span
              className="px-3 py-1.5 rounded-full text-[9px] font-black uppercase tracking-widest border bg-white/95 backdrop-blur-sm"
              style={{
                color: project.accentVar,
                borderColor: `color-mix(in srgb, ${project.accentVar} 30%, transparent)`,
              }}
            >
              {project.tag}
            </span>
          </motion.div>

          {/* Icon Button */}
          <motion.div
            className="absolute top-4 right-4 z-10"
            animate={{
              rotate: hovered ? 45 : 0,
              scale: hovered ? 1.1 : 1,
            }}
            transition={{ duration: 0.4 }}
          >
            <div
              className="w-10 h-10 rounded-full border flex items-center justify-center backdrop-blur-sm transition-all duration-300"
              style={{
                background: hovered
                  ? project.accentVar
                  : "rgba(255, 255, 255, 0.9)",
                borderColor: hovered
                  ? project.accentVar
                  : "rgba(255, 255, 255, 0.5)",
              }}
            >
              <ArrowUpRight
                className="w-4 h-4 transition-colors duration-300"
                style={{
                  color: hovered ? "white" : "var(--color-text-muted)",
                }}
              />
            </div>
          </motion.div>
        </div>

        {/* Content */}
        <div className="flex flex-col flex-1 px-6 pt-6 pb-6 gap-5">
          {/* Title & Description */}
          <div>
            <motion.h3
              className="text-2xl font-black font-heading text-[var(--color-text-primary)] tracking-tight mb-2"
              animate={{ color: hovered ? project.accentVar : "var(--color-text-primary)" }}
              transition={{ duration: 0.3 }}
            >
              {project.title}
            </motion.h3>
            <p className="text-sm text-[var(--color-text-body)] leading-relaxed line-clamp-2">
              {project.description}
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-3 gap-3">
            {project.stats.map((s) => (
              <motion.div
                key={s.label}
                className="p-3 rounded-xl border transition-all duration-300"
                style={{
                  borderColor: hovered
                    ? `color-mix(in srgb, ${project.accentVar} 30%, transparent)`
                    : "var(--color-border-light)",
                  background: hovered
                    ? `color-mix(in srgb, ${project.accentVar} 8%, white)`
                    : "var(--color-bg-card-light)",
                }}
                animate={{ y: hovered ? -2 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <motion.div
                  className="text-base font-black font-heading leading-none transition-colors duration-300"
                  style={{
                    color: hovered
                      ? project.accentVar
                      : "var(--color-text-primary)",
                  }}
                >
                  {s.value}
                </motion.div>
                <div className="text-[8px] font-black uppercase tracking-widest text-[var(--color-text-faint)] mt-1.5">
                  {s.label}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Tech Chips */}
          <div className="flex flex-wrap gap-2 mt-auto pt-2">
            {project.chips.map((chip) => (
              <motion.span
                key={chip}
                className="px-3 py-1.5 rounded-lg text-[8px] font-black uppercase tracking-wider border transition-all duration-300"
                style={{
                  background: hovered
                    ? `color-mix(in srgb, ${project.accentVar} 10%, white)`
                    : "var(--color-bg-card)",
                  color: hovered
                    ? project.accentVar
                    : "var(--color-text-muted)",
                  borderColor: hovered
                    ? `color-mix(in srgb, ${project.accentVar} 30%, transparent)`
                    : "var(--color-border-card)",
                }}
                animate={{ y: hovered ? -1 : 0 }}
                transition={{ duration: 0.3 }}
              >
                {chip}
              </motion.span>
            ))}
          </div>
        </div>
      </motion.div>
    </Link>
  );
}

export default function CaseStudies() {
  return (
    <section
      id="work"
      className="relative pb-16 px-4 sm:px-6 md:px-12 bg-[var(--color-bg-page)] overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-5"
          style={{ background: "var(--gradient-brand)" }}
          animate={{
            x: [0, 50, 0],
            y: [0, 30, 0],
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-0 left-0 w-96 h-96 rounded-full opacity-5"
          style={{ background: "var(--gradient-brand)" }}
          animate={{
            x: [0, -50, 0],
            y: [0, -30, 0],
          }}
          transition={{ duration: 10, repeat: Infinity }}
        />
      </div>

      {/* Fade overlays */}
      <div
        className="absolute top-0 inset-x-0 h-32 pointer-events-none"
        style={{
          background: "linear-gradient(to bottom, var(--color-bg-page), transparent)",
        }}
      />
      <div
        className="absolute bottom-0 inset-x-0 h-32 pointer-events-none"
        style={{
          background: "linear-gradient(to top, var(--color-bg-page), transparent)",
        }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <Reveal className="mb-16 md:mb-20">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
            {/* Left */}
            <div className="flex-1">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[var(--color-border-brand-soft)] bg-[var(--color-bg-brand-tint)] text-[var(--color-brand-blue)] text-[10px] font-black tracking-widest uppercase mb-6"
              >
                <Zap className="w-3.5 h-3.5" />
                Case Studies
              </motion.div>
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-black font-heading tracking-tight text-[var(--color-text-primary)] leading-[1.1] mb-4">
                Products we've
                
              </h2>
              <p className="text-[var(--color-text-body)] text-lg leading-relaxed max-w-xl">
                Real products. Real clients. Real results — from MVP to scale.
              </p>
            </div>

            {/* Right */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="shrink-0"
            >
              <Link
                to="/work"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-black text-sm uppercase tracking-widest border transition-all duration-300 hover:shadow-lg group"
                style={{
                  borderColor: "var(--color-border-subtle)",
                  color: "var(--color-text-primary)",
                  background: "white",
                }}
              >
                View all projects
                <motion.div
                  animate={{ x: 0, y: 0 }}
                  whileHover={{ x: 2, y: -2 }}
                  transition={{ duration: 0.3 }}
                >
                  <ArrowUpRight className="w-4 h-4" />
                </motion.div>
              </Link>
            </motion.div>
          </div>
        </Reveal>

        {/* Grid */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {cases.map((project, idx) => (
            <ProjectCard key={project.title} project={project} index={idx} />
          ))}
        </div>

        {/* Mobile Slider */}
        <div className="md:hidden flex gap-4 overflow-x-auto snap-x snap-mandatory pb-4 -mx-4 px-4 scrollbar-hide mb-12">
          {cases.map((project, idx) => (
            <div key={project.title} className="snap-start shrink-0 w-[90vw]">
              <ProjectCard project={project} index={idx} />
            </div>
          ))}
        </div>

        {/* Bottom CTA Section */}
        <Reveal delay={0.2}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="rounded-3xl border border-[var(--color-border-card)] bg-gradient-to-br from-white to-gray-50 px-6 sm:px-8 md:px-12 py-8 md:py-12"
            style={{
              boxShadow: "0 8px 32px rgba(0,0,0,0.06)",
            }}
          >
            <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
              {/* Stats */}
              <div className="w-full lg:w-auto grid grid-cols-2 md:grid-cols-4 lg:flex lg:items-center gap-6 md:gap-8 lg:gap-12">
                {[
                  { value: "30+", label: "Products shipped" },
                  { value: "6", label: "Countries" },
                  { value: "100%", label: "IP ownership" },
                  { value: "30d", label: "Avg. MVP launch" },
                ].map((s, i) => (
                  <motion.div
                    key={s.label}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="text-center lg:text-left"
                  >
                    <div
                      className="text-2xl md:text-3xl font-black font-heading bg-clip-text text-transparent leading-none mb-2"
                      style={{ backgroundImage: "var(--gradient-brand)" }}
                    >
                      {s.value}
                    </div>
                    <div className="text-[10px] md:text-[11px] font-black uppercase tracking-widest text-[var(--color-text-faint)] whitespace-nowrap">
                      {s.label}
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* CTA Button */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 }}
                className="shrink-0 w-full lg:w-auto"
              >
                <Link
                  to="/contact"
                  className="flex items-center justify-center lg:justify-start gap-2 px-8 py-4 rounded-full text-white font-black text-sm uppercase tracking-widest transition-all duration-300 hover:scale-[1.05] hover:shadow-xl w-full lg:w-auto"
                  style={{
                    background: "var(--gradient-brand)",
                    boxShadow: "0 12px 40px var(--color-brand-glow)",
                  }}
                >
                  Start your project
                  <motion.div
                    animate={{ x: 0 }}
                    whileHover={{ x: 2 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ArrowUpRight className="w-4 h-4" />
                  </motion.div>
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </Reveal>
      </div>
    </section>
  );
}
