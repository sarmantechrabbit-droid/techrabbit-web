import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Reveal from "../Reveal";
import { ArrowRight, Zap, Code2, Palette, CheckCircle2, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

const services = [
  {
    icon: Palette,
    title: "Design",
    desc: "Figma UI/UX design before a line of code",
    accent: "--color-brand-blue",
  },
  {
    icon: Code2,
    title: "Development",
    desc: "Full-stack React, Node.js, PostgreSQL",
    accent: "--color-brand-green",
  },
  {
    icon: Zap,
    title: "AI Integration",
    desc: "Claude, GPT-4o, custom agents built-in",
    accent: "--color-brand-blue",
  },
  {
    icon: CheckCircle2,
    title: "QA & Testing",
    desc: "Full test cycle, production-ready",
    accent: "--color-brand-green",
  },
];

const highlights = [
  "Same team every sprint",
  "No handoffs between teams",
  "AI features in every sprint",
  "Clockify reports monthly",
  "Unused hours rollover",
];

export default function ServicesHero() {
  const [hoveredService, setHoveredService] = useState(null);
  const [activeHighlight, setActiveHighlight] = useState(0);

  return (
    <section className="relative z-0 overflow-hidden bg-[var(--color-bg-page)] pt-36 pb-8">
      {/* Animated background grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle, var(--color-grid-dot) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
          opacity: 0.5,
        }}
      />

      {/* Multiple animated gradient glows */}
      <motion.div
        className="absolute top-0 right-1/4 w-[600px] h-[600px] pointer-events-none"
        animate={{
          x: [0, 40, 0],
          y: [0, 50, 0],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      >
        <div
          className="absolute inset-0 rounded-full blur-[120px]"
          style={{
            background: "radial-gradient(circle, rgba(42,171,215,0.15) 0%, transparent 70%)",
          }}
        />
      </motion.div>

      <motion.div
        className="absolute bottom-20 left-0 w-[500px] h-[500px] pointer-events-none"
        animate={{
          x: [0, -40, 0],
          y: [0, -50, 0],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      >
        <div
          className="absolute inset-0 rounded-full blur-[120px]"
          style={{
            background: "radial-gradient(circle, rgba(36,181,116,0.15) 0%, transparent 70%)",
          }}
        />
      </motion.div>

      <motion.div
        className="absolute top-1/2 right-0 w-[400px] h-[400px] pointer-events-none"
        animate={{
          x: [0, 30, 0],
          y: [0, -30, 0],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      >
        <div
          className="absolute inset-0 rounded-full blur-[100px]"
          style={{
            background: "radial-gradient(circle, rgba(42,171,215,0.1) 0%, transparent 70%)",
          }}
        />
      </motion.div>

      {/* Fade overlays */}
      <div className="absolute top-0 inset-x-0 h-24 pointer-events-none"
        style={{ background: "linear-gradient(to bottom, var(--color-bg-page), transparent)" }} />
      <div className="absolute bottom-0 inset-x-0 h-24 pointer-events-none"
        style={{ background: "linear-gradient(to top, var(--color-bg-page), transparent)" }} />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Top Badge */}
        {/* <Reveal>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[var(--color-border-brand-soft)] bg-[var(--color-bg-brand-tint)] text-[var(--color-brand-blue)] text-[10px] font-black tracking-widest uppercase "
          >
            <Sparkles className="w-3.5 h-3.5" />
            Full-stack product development
          </motion.div>
        </Reveal> */}

        {/* Main Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Left: Heading + Description */}
          
          <Reveal>
             <Reveal>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[var(--color-border-brand-soft)] bg-[var(--color-bg-brand-tint)] text-[var(--color-brand-blue)] text-[10px] font-black tracking-widest uppercase mb-8"
          >
            <Sparkles className="w-3.5 h-3.5" />
            Full-stack product development
          </motion.div>
        </Reveal>

            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
            >
              <h1 className="text-4xl md:text-5xl font-bold font-heading tracking-tight text-[var(--color-text-primary)] leading-[1.2] mb-4">
                You tell us what you need.
                <br />
                <span className="bg-clip-text text-transparent" style={{ backgroundImage: "var(--gradient-brand)" }}>
                  We ship it.
                </span>
              </h1>

              <p className="text-[var(--color-text-body)] text-base leading-relaxed mb-6 max-w-lg font-medium">
                A full in-house team that designs, builds, tests, and ships your product — and stays after launch.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/contact"
                  className="group flex items-center justify-center gap-2 px-8 py-4 rounded-full text-white font-black text-sm hover:scale-[1.03] transition-all duration-300"
                  style={{
                    background: "var(--gradient-brand)",
                    boxShadow: "0 20px 40px var(--color-brand-glow)",
                  }}
                >
                  I have an idea
                  <motion.div
                    className="group-hover:translate-x-1 transition-transform"
                  >
                    <ArrowRight className="w-4 h-4" />
                  </motion.div>
                </Link>

                <Link
                  to="/#pricing"
                  className="flex items-center justify-center gap-2 px-8 py-4 rounded-full border border-[var(--color-border-subtle)] bg-white text-[var(--color-text-primary)] font-black text-sm hover:bg-[var(--color-bg-card-light)] transition-all duration-300"
                >
                  My product is live
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>
          </Reveal>

          {/* Right: Interactive Service Cards */}
          <Reveal delay={0.2}>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="grid grid-cols-2 gap-4"
            >
              {services.map((service, idx) => {
                const Icon = service.icon;
                const isHovered = hoveredService === idx;

                return (
                  <motion.div
                    key={service.title}
                    onMouseEnter={() => setHoveredService(idx)}
                    onMouseLeave={() => setHoveredService(null)}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.1, duration: 0.5 }}
                    viewport={{ once: true }}
                    className="relative rounded-2xl border overflow-hidden p-6 cursor-pointer transition-all duration-300 h-full"
                    style={{
                      background: isHovered
                        ? `color-mix(in srgb, var(${service.accent}) 4%, white)`
                        : "white",
                      borderColor: isHovered
                        ? `var(${service.accent})`
                        : "var(--color-border-card)",
                      boxShadow: isHovered
                        ? `0 20px 60px -12px color-mix(in srgb, var(${service.accent}) 30%, transparent)`
                        : "0 2px 12px rgba(0,0,0,0.04)",
                    }}
                  >
                    {/* Top accent line */}
                    <div
                      className="absolute top-0 inset-x-0 h-1 transition-all duration-300"
                      style={{
                        background: isHovered ? `var(${service.accent})` : "transparent",
                      }}
                    />

                    {/* Icon */}
                    <motion.div
                      className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-all duration-300"
                      style={{
                        background: isHovered
                          ? `color-mix(in srgb, var(${service.accent}) 12%, transparent)`
                          : "var(--color-bg-card)",
                      }}
                      animate={{
                        scale: isHovered ? 1.1 : 1,
                      }}
                    >
                      <Icon
                        className="w-6 h-6 transition-colors duration-300"
                        style={{
                          color: isHovered
                            ? `var(${service.accent})`
                            : "var(--color-text-muted)",
                        }}
                      />
                    </motion.div>

                    {/* Content */}
                    <h3 className="text-lg font-black font-heading text-[var(--color-text-primary)] tracking-tight mb-2">
                      {service.title}
                    </h3>
                    <p className="text-sm text-[var(--color-text-body)] leading-relaxed">
                      {service.desc}
                    </p>

                    {/* Hover arrow */}
                    <AnimatePresence>
                      {isHovered && (
                        <motion.div
                          initial={{ opacity: 0, x: -8 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: -8 }}
                          className="absolute bottom-4 right-4"
                        >
                          <div
                            className="w-8 h-8 rounded-lg flex items-center justify-center"
                            style={{
                              background: `color-mix(in srgb, var(${service.accent}) 12%, transparent)`,
                            }}
                          >
                            <ArrowRight
                              className="w-4 h-4"
                              style={{ color: `var(${service.accent})` }}
                            />
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                );
              })}
            </motion.div>
          </Reveal>
        </div>

      
      </div>
    </section>
  );
}
