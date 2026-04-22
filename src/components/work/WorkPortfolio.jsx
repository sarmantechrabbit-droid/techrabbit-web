import { motion, AnimatePresence } from "framer-motion";
import Reveal from "../Reveal";
import { ArrowRight, ExternalLink, Zap, ChevronRight, Sparkles } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import img from "../../assets/Dashboard/Shipora.png";
import img3 from "../../assets/Dashboard/lexa.png";
import img4 from "../../assets/Dashboard/oppvia.png";

const projects = [
  {
    id: 1,
    slug: "shipora",
    title: "Shipora",
    category: "Logistics SaaS",
    description: "Multi-country shipping management. Super Admin, Country Admin, Client roles. China → UK/EU routes.",
    image: img,
    accent: "var(--color-brand-blue)",
    features: ["Multi-vendor", "Real-time", "Analytics"],
    stats: [
      { label: "Countries", value: "4" },
      { label: "Roles", value: "3" },
      { label: "Launch", value: "30d" },
    ],
  },
  {
    id: 2,
    slug: "oppvia",
    title: "Oppvia",
    category: "AI Hiring Platform",
    description: "AI interview simulator, resume-JD scoring, AI calling agent, WhatsApp/email automation.",
    image: img4,
    accent: "var(--color-brand-green)",
    features: ["Single vendor", "Inventory", "Delivery"],
    stats: [
      { label: "AI modules", value: "5+" },
      { label: "Tiers", value: "3" },
      { label: "Live", value: "Active" },
    ],
  },
  {
    id: 3,
    slug: "lexa",
    title: "Lexa",
    category: "Algo Trading",
    description: "TradingView → Python FastAPI → IBKR execution. Real-time signals via Socket.IO.",
    image: img3,
    accent: "var(--color-brand-blue)",
    features: ["Real-time tracking", "Payments", "Ratings"],
    stats: [
      { label: "Production", value: "Live" },
      { label: "Backends", value: "2" },
      { label: "Signals", value: "Real-time" },
    ],
  },
];

export default function WorkPortfolio() {
  const [hoveredId, setHoveredId] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [expandedId, setExpandedId] = useState(null);

  const categories = ["All", "Logistics SaaS", "AI Hiring Platform", "Algo Trading"];
  const filteredProjects = selectedCategory === "All" 
    ? projects 
    : projects.filter(p => p.category === selectedCategory);

  return (
    <section className="relative overflow-hidden bg-[var(--color-bg-page)] px-4 sm:px-6 md:px-8 lg:px-12 py-16">
      {/* Animated background grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle, var(--color-grid-dot) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
          opacity: 0.3,
        }}
      />

      {/* Animated gradient glows */}
      <motion.div
        className="absolute right-[-20%] top-0 h-[18rem] w-[18rem] pointer-events-none sm:right-[-10%] sm:h-[24rem] sm:w-[24rem] lg:right-1/3 lg:h-[37.5rem] lg:w-[37.5rem]"
        animate={{
          x: [0, 40, 0],
          y: [0, 50, 0],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      >
        <div
          className="absolute inset-0 rounded-full blur-[120px]"
          style={{
            background: "radial-gradient(circle, rgba(42,171,215,0.12) 0%, transparent 70%)",
          }}
        />
      </motion.div>

      <motion.div
        className="absolute bottom-0 left-[-20%] h-[16rem] w-[16rem] pointer-events-none sm:left-[-10%] sm:h-[22rem] sm:w-[22rem] lg:left-0 lg:h-[31.25rem] lg:w-[31.25rem]"
        animate={{
          x: [0, -40, 0],
          y: [0, -50, 0],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      >
        <div
          className="absolute inset-0 rounded-full blur-[120px]"
          style={{
            background: "radial-gradient(circle, rgba(36,181,116,0.12) 0%, transparent 70%)",
          }}
        />
      </motion.div>

      {/* Fade overlays */}
      <div
        className="absolute top-0 inset-x-0 h-24 pointer-events-none"
        style={{ background: "linear-gradient(to bottom, var(--color-bg-page), transparent)" }}
      />
      <div
        className="absolute bottom-0 inset-x-0 h-24 pointer-events-none"
        style={{ background: "linear-gradient(to top, var(--color-bg-page), transparent)" }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header Section */}
        <Reveal className="mb-12 lg:mb-16">
          <div className="flex items-center gap-3 mb-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[var(--color-border-brand-soft)] bg-[var(--color-bg-brand-tint)] text-[var(--color-brand-green)] text-[10px] font-black tracking-widest uppercase">
              <Sparkles className="w-3.5 h-3.5" />
              Our Work
            </div>
          </div>

          <div className="max-w-3xl">
           <h2 className="mb-4 text-4xl md:text-5xl font-bold font-heading tracking-tight text-[var(--color-text-primary)] leading-[1.15]">
  <span className="block">Projects We're Proud of</span>
</h2>
            <p className="text-[var(--color-text-body)] text-sm sm:text-base leading-relaxed font-medium">
              Explore our portfolio of successful projects across different industries. Each one represents our commitment to quality, innovation, and client success.
            </p>
          </div>
        </Reveal>

        {/* Category Filter - Creative Design */}
        <Reveal className="mb-12 lg:mb-16">
          <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide sm:flex-wrap">
            {categories.map((cat, idx) => (
              <motion.button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.05, duration: 0.3 }}
                className="relative shrink-0 px-4 sm:px-5 py-2.5 rounded-full border transition-all duration-300 text-sm font-bold uppercase tracking-wide overflow-hidden group"
                style={{
                  background: selectedCategory === cat
                    ? "var(--gradient-brand)"
                    : "white",
                  borderColor: selectedCategory === cat
                    ? "transparent"
                    : "var(--color-border-card)",
                  color: selectedCategory === cat ? "white" : "var(--color-text-primary)",
                  boxShadow: selectedCategory === cat
                    ? "0 8px 24px -8px var(--color-brand-glow)"
                    : "0 2px 8px rgba(0,0,0,0.04)",
                }}
                whileHover={{ y: -2 }}
              >
                <span className="relative">{cat}</span>
              </motion.button>
            ))}
          </div>
        </Reveal>

        {/* Projects Grid - Creative Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          <AnimatePresence mode="wait">
            {filteredProjects.map((project, idx) => (
              <Reveal key={project.id} delay={idx * 0.05}>
                <Link to={`/case-study/${project.slug}`} className="h-full">
                  <motion.div
                    layout
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    transition={{ duration: 0.5 }}
                    onMouseEnter={() => setHoveredId(project.id)}
                    onMouseLeave={() => setHoveredId(null)}
                    className="relative rounded-2xl border overflow-hidden flex flex-col transition-all duration-300 group cursor-pointer h-full"
                    style={{
                      background: "white",
                      borderColor: hoveredId === project.id || expandedId === project.id
                        ? project.accent
                        : "var(--color-border-card)",
                      boxShadow: hoveredId === project.id || expandedId === project.id
                        ? `0 16px 48px -8px color-mix(in srgb, ${project.accent} 28%, transparent)`
                        : "0 2px 8px rgba(0,0,0,0.04)",
                    }}
                  >
                    {/* Top accent line - animated */}
                    <motion.div
                      className="absolute top-0 inset-x-0 h-1 z-10"
                      style={{ background: project.accent }}
                      animate={{
                        scaleX: hoveredId === project.id || expandedId === project.id ? 1 : 0,
                      }}
                      transition={{ duration: 0.3 }}
                    />

                    {/* Image Container with Creative Effects */}
                    <div className="relative overflow-hidden h-56 bg-gradient-to-br from-[var(--color-bg-card)] to-[var(--color-bg-page)]">
                      <motion.img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-contain"
                        animate={{
                          scale: hoveredId === project.id ? 1.08 : 1,
                        }}
                        transition={{ duration: 0.4 }}
                      />

                      {/* Creative overlay gradient */}
                      <motion.div
                        className="absolute inset-0"
                        style={{
                          background: hoveredId === project.id
                            ? `linear-gradient(135deg, ${project.accent}20 0%, transparent 100%)`
                            : "transparent",
                        }}
                        animate={{
                          opacity: hoveredId === project.id ? 1 : 0,
                        }}
                        transition={{ duration: 0.3 }}
                      />

                      {/* Floating Badge */}
                      <AnimatePresence>
                        {hoveredId === project.id && (
                          <motion.div
                            initial={{ opacity: 0, scale: 0.8, y: 10 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.8, y: 10 }}
                            className="absolute top-4 right-4 z-20"
                          >
                            <motion.div
                              className="w-11 h-11 rounded-full flex items-center justify-center"
                              style={{
                                background: "white",
                                boxShadow: `0 6px 16px color-mix(in srgb, ${project.accent} 35%, transparent)`,
                              }}
                              whileHover={{ scale: 1.1 }}
                            >
                              <ExternalLink
                                className="w-5 h-5"
                                style={{ color: project.accent }}
                              />
                            </motion.div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>

                    {/* Content Section */}
                    <div className="p-5 sm:p-6 flex flex-col flex-1">
                      {/* Category Badge - Creative */}
                      <motion.div
                        className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg text-[10px] font-bold tracking-widest uppercase mb-3 w-fit"
                        style={{
                          background: `color-mix(in srgb, ${project.accent} 10%, transparent)`,
                          color: project.accent,
                          border: `1.5px solid color-mix(in srgb, ${project.accent} 20%, transparent)`,
                        }}
                        animate={{
                          scale: hoveredId === project.id ? 1.05 : 1,
                        }}
                      >
                        <motion.div
                          className="w-1.5 h-1.5 rounded-full"
                          style={{ background: project.accent }}
                          animate={{
                            scale: hoveredId === project.id ? 1.3 : 1,
                          }}
                        />
                        {project.category}
                      </motion.div>

                      {/* Title */}
                      <h3 className="text-lg font-bold font-heading text-[var(--color-text-primary)] tracking-tight mb-2 line-clamp-2 leading-tight">
                        {project.title}
                      </h3>

                      {/* Description */}
                      <p className="text-sm text-[var(--color-text-body)] leading-relaxed mb-4 flex-1 line-clamp-2">
                        {project.description}
                      </p>

                      {/* Features - Creative Tags */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.features.map((feature, fidx) => (
                          <motion.span
                            key={feature}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: fidx * 0.05 }}
                            className="text-[11px] font-semibold px-2.5 py-1 rounded-md transition-all duration-300"
                            style={{
                              background: `color-mix(in srgb, ${project.accent} 8%, transparent)`,
                              color: project.accent,
                              border: `1px solid color-mix(in srgb, ${project.accent} 15%, transparent)`,
                            }}
                            whileHover={{
                              scale: 1.05,
                              background: `color-mix(in srgb, ${project.accent} 12%, transparent)`,
                            }}
                          >
                            {feature}
                          </motion.span>
                        ))}
                      </div>

                      {/* Stats Section */}
                      <div className="grid grid-cols-3 gap-3 py-4 border-t border-b border-[var(--color-border-light)] mb-5">
                        {project.stats.map((stat, sidx) => (
                          <motion.div
                            key={stat.label}
                            initial={{ opacity: 0, y: 5 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: sidx * 0.05 }}
                            className="text-center"
                          >
                            <p className="text-sm font-black font-heading text-[var(--color-text-primary)]">
                              {stat.value}
                            </p>
                            <p className="text-[10px] font-bold text-[var(--color-text-muted)] uppercase tracking-wide">
                              {stat.label}
                            </p>
                          </motion.div>
                        ))}
                      </div>

                      {/* CTA Button - Creative */}
                      <motion.button
                        className="group/btn flex items-center justify-center gap-2 w-full py-3 rounded-lg border transition-all duration-300 font-bold text-sm relative overflow-hidden"
                        style={{
                          background: hoveredId === project.id ? project.accent : "white",
                          borderColor: project.accent,
                          color: hoveredId === project.id ? "white" : project.accent,
                        }}
                        whileHover={{ y: -2 }}
                        whileTap={{ y: 0 }}
                      >
                        <motion.div
                          className="absolute inset-0 opacity-0 group-hover/btn:opacity-10 transition-opacity"
                          style={{ background: project.accent }}
                        />
                        <span className="relative">View Project</span>
                        <motion.div
                          animate={{
                            x: hoveredId === project.id ? 4 : 0,
                          }}
                          transition={{ duration: 0.3 }}
                        >
                          <ChevronRight className="w-4 h-4 relative" />
                        </motion.div>
                      </motion.button>
                    </div>
                  </motion.div>
                </Link>
              </Reveal>
            ))}
          </AnimatePresence>
        </div>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center py-24"
          >
            <motion.div
              className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
              style={{
                background: "color-mix(in srgb, var(--color-brand-blue) 10%, transparent)",
              }}
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Zap
                className="w-8 h-8"
                style={{ color: "var(--color-brand-blue)" }}
              />
            </motion.div>
            <p className="text-[var(--color-text-body)] text-base font-medium mb-2">
              No projects found in this category.
            </p>
            <p className="text-[var(--color-text-muted)] text-sm">
              Try selecting a different category to explore more.
            </p>
          </motion.div>
        )}

        {/* Bottom CTA Section - Creative */}
        <Reveal delay={0.3}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative rounded-2xl border overflow-hidden p-6 sm:p-8 md:p-12 mt-16"
            style={{
              background: "white",
              borderColor: "var(--color-border-card)",
              boxShadow: "0 8px 32px rgba(0,0,0,0.06)",
            }}
          >
            {/* Top gradient accent */}
            <div
              className="absolute top-0 inset-x-0 h-1"
              style={{ background: "var(--gradient-brand)" }}
            />

            {/* Animated background elements */}
            <motion.div
              className="absolute top-0 right-0 w-64 h-64 rounded-full blur-3xl pointer-events-none"
              animate={{
                x: [0, 30, 0],
                y: [0, 20, 0],
              }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
              style={{
                background: "radial-gradient(circle, rgba(42,171,215,0.08) 0%, transparent 70%)",
              }}
            />

            <div className="relative z-10">
              <h3 className="text-2xl md:text-3xl font-bold font-heading text-[var(--color-text-primary)] mb-3 tracking-tight">
                Ready to start your project?
              </h3>
              <p className="text-[var(--color-text-body)] text-sm sm:text-base max-w-2xl mb-8 font-medium">
                Let's discuss your ideas and turn them into reality. Our team is ready to help you build something amazing.
              </p>
              <Link
                to="/contact"
                className="inline-flex w-full sm:w-auto items-center justify-center gap-2 px-8 py-4 rounded-lg text-white font-bold text-sm hover:scale-[1.02] transition-all duration-300"
                style={{
                  background: "var(--gradient-brand)",
                  boxShadow: "0 12px 32px var(--color-brand-glow)",
                }}
              >
                Get Started Today
                <motion.div
                  animate={{ x: 0 }}
                  whileHover={{ x: 4 }}
                >
                  <ArrowRight className="w-4 h-4" />
                </motion.div>
              </Link>
            </div>
          </motion.div>
        </Reveal>
      </div>
    </section>
  );
}
