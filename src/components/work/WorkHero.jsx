import { motion, AnimatePresence } from "framer-motion";
import Reveal from "../Reveal";
import { Sparkles, ArrowRight, Zap, Code2, Palette, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

const highlights = [
  {
    icon: Palette,
    title: "Design",
    desc: "Beautiful UI/UX",
    accent: "var(--color-brand-blue)",
  },
  {
    icon: Code2,
    title: "Development",
    desc: "Production-ready",
    accent: "var(--color-brand-green)",
  },
  {
    icon: Zap,
    title: "Performance",
    desc: "Lightning fast",
    accent: "var(--color-brand-blue)",
  },
  {
    icon: CheckCircle2,
    title: "Quality",
    desc: "Fully tested",
    accent: "var(--color-brand-green)",
  },
];

export default function WorkHero() {
  const [hoveredIdx, setHoveredIdx] = useState(null);

  return (
    <section className="relative z-0 overflow-hidden bg-[var(--color-bg-page)] pt-20 pb-12">
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
        className="absolute top-0 right-1/3 w-[600px] h-[600px] pointer-events-none"
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
      <div
        className="absolute top-0 inset-x-0 h-24 pointer-events-none"
        style={{ background: "linear-gradient(to bottom, var(--color-bg-page), transparent)" }}
      />
      <div
        className="absolute bottom-0 inset-x-0 h-24 pointer-events-none"
        style={{ background: "linear-gradient(to top, var(--color-bg-page), transparent)" }}
      />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Top Badge with Animation */}
        {/* <Reveal>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[var(--color-border-brand-soft)] bg-[var(--color-bg-brand-tint)] text-[var(--color-brand-blue)] text-[10px] font-black tracking-widest uppercase mb-8"
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            >
              <Sparkles className="w-3.5 h-3.5" />
            </motion.div>
            Our Portfolio
          </motion.div>
        </Reveal> */}

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Left: Heading + Description */}
         
          <Reveal>
                    <Reveal>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[var(--color-border-brand-soft)] bg-[var(--color-bg-brand-tint)] text-[var(--color-brand-blue)] text-[10px] font-black tracking-widest uppercase mb-6"
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            >
              <Sparkles className="w-3.5 h-3.5" />
            </motion.div>
            Our Portfolio
          </motion.div>
        </Reveal>
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-6xl font-bold font-heading tracking-tight text-[var(--color-text-primary)] leading-[1.1] mb-6">
                Products we've
                <br />
                <span className="bg-clip-text text-transparent" style={{ backgroundImage: "var(--gradient-brand)" }}>
                  shipped & scaled.
                </span>
              </h1>

              <p className="text-[var(--color-text-body)] text-lg leading-relaxed mb-8 max-w-lg font-medium">
                From concept to production. Real products, real users, real impact. See what we've built for startups and enterprises.
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
                  Start Your Project
                  <motion.div className="group-hover:translate-x-1 transition-transform">
                    <ArrowRight className="w-4 h-4" />
                  </motion.div>
                </Link>

                <Link
                  to="/#pricing"
                  className="flex items-center justify-center gap-2 px-8 py-4 rounded-full border border-[var(--color-border-subtle)] bg-white text-[var(--color-text-primary)] font-black text-sm hover:bg-[var(--color-bg-card-light)] transition-all duration-300"
                >
                  View Pricing
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>
          </Reveal>

          {/* Right: Interactive Highlight Cards */}
          <Reveal delay={0.2}>
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="grid grid-cols-2 gap-4"
            >
              {highlights.map((item, idx) => {
                const Icon = item.icon;
                const isHovered = hoveredIdx === idx;

                return (
                  <motion.div
                    key={item.title}
                    onMouseEnter={() => setHoveredIdx(idx)}
                    onMouseLeave={() => setHoveredIdx(null)}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.1, duration: 0.5 }}
                    viewport={{ once: true }}
                    className="relative rounded-2xl border overflow-hidden p-6 cursor-pointer transition-all duration-300 h-full group"
                    style={{
                      background: isHovered
                        ? `color-mix(in srgb, ${item.accent} 5%, white)`
                        : "white",
                      borderColor: isHovered
                        ? item.accent
                        : "var(--color-border-card)",
                      boxShadow: isHovered
                        ? `0 20px 60px -12px color-mix(in srgb, ${item.accent} 30%, transparent)`
                        : "0 2px 12px rgba(0,0,0,0.04)",
                    }}
                  >
                    {/* Top accent line */}
                    <motion.div
                      className="absolute top-0 inset-x-0 h-1 transition-all duration-300"
                      style={{
                        background: isHovered ? item.accent : "transparent",
                      }}
                      animate={{
                        scaleX: isHovered ? 1 : 0,
                      }}
                      transition={{ duration: 0.3 }}
                    />

                    {/* Icon */}
                    <motion.div
                      className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-all duration-300"
                      style={{
                        background: isHovered
                          ? `color-mix(in srgb, ${item.accent} 15%, transparent)`
                          : "var(--color-bg-card)",
                      }}
                      animate={{
                        scale: isHovered ? 1.15 : 1,
                        rotate: isHovered ? 5 : 0,
                      }}
                    >
                      <Icon
                        className="w-6 h-6 transition-colors duration-300"
                        style={{
                          color: isHovered
                            ? item.accent
                            : "var(--color-text-muted)",
                        }}
                      />
                    </motion.div>

                    {/* Content */}
                    <h3 className="text-lg font-black font-heading text-[var(--color-text-primary)] tracking-tight mb-1">
                      {item.title}
                    </h3>
                    <p className="text-sm text-[var(--color-text-body)] leading-relaxed">
                      {item.desc}
                    </p>

                    {/* Hover indicator */}
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
                              background: `color-mix(in srgb, ${item.accent} 15%, transparent)`,
                            }}
                          >
                            <ArrowRight
                              className="w-4 h-4"
                              style={{ color: item.accent }}
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

        {/* Bottom Stats Bar */}
        <Reveal delay={0.4}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            viewport={{ once: true }}
            className="relative rounded-2xl border overflow-hidden p-6 md:p-8"
            style={{
              background: "rgba(255, 255, 255, 0.5)",
              backdropFilter: "blur(10px)",
              borderColor: "var(--color-border-card)",
              boxShadow: "0 8px 32px rgba(0, 0, 0, 0.08)",
            }}
          >
            {/* Top gradient accent */}
            <div
              className="absolute top-0 inset-x-0 h-1"
              style={{ background: "var(--gradient-brand)" }}
            />

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { number: "50+", label: "Products Shipped" },
                { number: "200+", label: "Happy Clients" },
                { number: "1M+", label: "Active Users" },
                { number: "15+", label: "Years Experience" },
              ].map((stat, idx) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + idx * 0.05, duration: 0.5 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <motion.p
                    className="text-2xl md:text-3xl font-black font-heading text-[var(--color-text-primary)] mb-1"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.5 + idx * 0.05, duration: 0.5 }}
                    viewport={{ once: true }}
                  >
                    {stat.number}
                  </motion.p>
                  <p className="text-xs md:text-sm font-bold text-[var(--color-text-body)]">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </Reveal>
      </div>
    </section>
  );
}
