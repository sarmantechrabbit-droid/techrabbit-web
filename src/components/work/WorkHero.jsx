import { motion, AnimatePresence } from "framer-motion";
import Reveal from "../Reveal";
import {
  Sparkles,
  ArrowRight,
  Zap,
  Code2,
  Palette,
  CheckCircle2,
} from "lucide-react";
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
    <section className="relative z-0 overflow-hidden bg-[var(--color-bg-page)] px-4 pt-40 sm:px-6 sm:pt-32 md:px-8 lg:px-12 lg:pt-40">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle, var(--color-grid-dot) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
          opacity: 0.5,
        }}
      />

      <div
        className="absolute inset-x-0 top-0 h-24 pointer-events-none"
        style={{
          background:
            "linear-gradient(to bottom, var(--color-bg-page), transparent)",
        }}
      />
      <div
        className="absolute inset-x-0 bottom-0 h-24 pointer-events-none"
        style={{
          background:
            "linear-gradient(to top, var(--color-bg-page), transparent)",
        }}
      />

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="mb-12 grid grid-cols-1 items-start gap-10 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-12 xl:gap-16">
          <Reveal>
            <div>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="mb-6 inline-flex items-center gap-2 rounded-full border border-[var(--color-border-brand-soft)] bg-[var(--color-bg-brand-tint)] px-3 py-1.5 text-[9px] font-black uppercase tracking-[0.28em] text-[var(--color-brand-blue)] sm:px-4 sm:text-[10px]"
              >
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                >
                  <Sparkles className="h-3.5 w-3.5" />
                </motion.div>
                Our work
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h1 className="mb-6 text-4xl font-bold font-heading leading-[1.05] tracking-tight text-[var(--color-text-primary)] sm:text-5xl md:text-6xl">
                  Products we've {/* <br /> */}
                  <span
                    className="bg-clip-text text-transparent"
                    style={{ backgroundImage: "var(--gradient-brand)" }}
                  >
                    built
                  </span>
                </h1>

                <p className="mb-8 max-w-xl text-sm font-medium leading-relaxed text-[var(--color-text-body)] sm:text-base lg:text-lg">
                  50+ products shipped across US, UK, Canada, UAE, and India.
                  Here are some we can share.
                </p>

                <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-4">
                  <Link
                    to="https://calendly.com/techrabbit/meeting"
                    className="group flex min-h-14 w-full items-center justify-center gap-2 rounded-full px-6 py-4 text-center text-sm font-black text-white transition-all duration-300 hover:scale-[1.03] sm:w-auto sm:px-8"
                    style={{
                      background: "var(--gradient-brand)",
                      boxShadow: "0 20px 40px var(--color-brand-glow)",
                    }}
                  >
                    Start Your Project
                    <motion.div className="transition-transform group-hover:translate-x-1">
                      <ArrowRight className="h-4 w-4" />
                    </motion.div>
                  </Link>

                  {/* <Link
                    to="/#pricing"
                    className="flex min-h-14 w-full items-center justify-center gap-2 rounded-full border border-[var(--color-border-subtle)] bg-white px-6 py-4 text-center text-sm font-black text-[var(--color-text-primary)] transition-all duration-300 hover:bg-[var(--color-bg-card-light)] sm:w-auto sm:px-8"
                  >
                    View Pricing
                    <ArrowRight className="h-4 w-4" />
                  </Link> */}
                </div>
              </motion.div>
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="grid grid-cols-2 gap-4 sm:grid-cols-2"
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
                    className="group relative h-full min-h-[12rem] cursor-pointer overflow-hidden rounded-2xl border p-5 transition-all duration-300 sm:p-6"
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
                    <motion.div
                      className="absolute inset-x-0 top-0 h-1 transition-all duration-300"
                      style={{
                        background: isHovered ? item.accent : "transparent",
                      }}
                      animate={{ scaleX: isHovered ? 1 : 0 }}
                      transition={{ duration: 0.3 }}
                    />

                    <motion.div
                      className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl transition-all duration-300"
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
                        className="h-6 w-6 transition-colors duration-300"
                        style={{
                          color: isHovered
                            ? item.accent
                            : "var(--color-text-muted)",
                        }}
                      />
                    </motion.div>

                    <h3 className="mb-1 text-lg font-black font-heading tracking-tight text-[var(--color-text-primary)]">
                      {item.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-[var(--color-text-body)]">
                      {item.desc}
                    </p>

                    <AnimatePresence>
                      {isHovered && (
                        <motion.div
                          initial={{ opacity: 0, x: -8 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: -8 }}
                          className="absolute bottom-4 right-4"
                        >
                          <div
                            className="flex h-8 w-8 items-center justify-center rounded-lg"
                            style={{
                              background: `color-mix(in srgb, ${item.accent} 15%, transparent)`,
                            }}
                          >
                            <ArrowRight
                              className="h-4 w-4"
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
      </div>
    </section>
  );
}
