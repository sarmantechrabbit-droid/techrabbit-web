import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Reveal from "../Reveal";
import {
  ArrowRight,
  Zap,
  Code2,
  Palette,
  CheckCircle2,
  Sparkles,
} from "lucide-react";
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

export default function ServicesHero() {
  const [hoveredService, setHoveredService] = useState(null);

  return (
    <section className="relative z-0 overflow-hidden bg-[var(--color-bg-page)] pb-10 pt-28 sm:pb-12 sm:pt-32 lg:pt-36">
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

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 md:px-8 lg:px-12">
        <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-12 xl:gap-16">
          <Reveal>
            <div>
              <Reveal>
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="mb-6 inline-flex max-w-full items-center gap-2 rounded-full border border-[var(--color-border-brand-soft)] bg-[var(--color-bg-brand-tint)] px-3 py-1.5 text-[9px] font-black uppercase tracking-[0.28em] text-[var(--color-brand-blue)] sm:mb-8 sm:px-4 sm:text-[10px]"
                >
                  <Sparkles className="h-3.5 w-3.5 shrink-0" />
                  <span className="truncate">
                    One team · Figma to deployment
                  </span>
                </motion.div>
              </Reveal>

              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7 }}
              >
                <h1 className="mb-4 max-w-[16ch] text-3xl font-bold font-heading leading-[1.05] tracking-tight text-[var(--color-text-primary)] sm:text-4xl md:max-w-[18ch] md:text-5xl xl:text-6xl">
                  You tell us what you need.{" "}
                  <span
                    className="bg-clip-text text-transparent"
                    style={{ backgroundImage: "var(--gradient-brand)" }}
                  >
                    We ship it.
                  </span>
                </h1>

                <p className="mb-6 max-w-xl text-sm font-medium leading-relaxed text-[var(--color-text-body)] sm:text-base">
                  Not "we have React developers." Not "we do Agile." Just a full
                  inhouse team that designs, builds, tests, and ships your
                  product — and stays after launch.
                </p>

                <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-4">
                  <Link
                    to="/contact"
                    className="group flex min-h-14 w-full items-center justify-center gap-2 rounded-full px-6 py-4 text-center text-sm font-black text-white transition-all duration-300 hover:scale-[1.03] sm:w-auto sm:px-8"
                    style={{
                      background: "var(--gradient-brand)",
                      boxShadow: "0 20px 40px var(--color-brand-glow)",
                    }}
                  >
                    I have an idea
                    <motion.div className="transition-transform group-hover:translate-x-1">
                      <ArrowRight className="h-4 w-4" />
                    </motion.div>
                  </Link>

                  <Link
                    to="/#pricing"
                    className="flex min-h-14 w-full items-center justify-center gap-2 rounded-full border border-[var(--color-border-subtle)] bg-white px-6 py-4 text-center text-sm font-black text-[var(--color-text-primary)] transition-all duration-300 hover:bg-[var(--color-bg-card-light)] sm:w-auto sm:px-8"
                  >
                    My product is live
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </motion.div>
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="grid grid-cols-2 gap-4 sm:grid-cols-2"
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
                    className="relative h-full min-h-[12rem] cursor-pointer overflow-hidden rounded-2xl border p-5 transition-all duration-300 sm:p-6"
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
                    <div
                      className="absolute inset-x-0 top-0 h-1 transition-all duration-300"
                      style={{
                        background: isHovered
                          ? `var(${service.accent})`
                          : "transparent",
                      }}
                    />

                    <motion.div
                      className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl transition-all duration-300"
                      style={{
                        background: isHovered
                          ? `color-mix(in srgb, var(${service.accent}) 12%, transparent)`
                          : "var(--color-bg-card)",
                      }}
                      animate={{ scale: isHovered ? 1.1 : 1 }}
                    >
                      <Icon
                        className="h-6 w-6 transition-colors duration-300"
                        style={{
                          color: isHovered
                            ? `var(${service.accent})`
                            : "var(--color-text-muted)",
                        }}
                      />
                    </motion.div>

                    <h3 className="mb-2 text-lg font-black font-heading tracking-tight text-[var(--color-text-primary)]">
                      {service.title}
                    </h3>
                    <p className="max-w-[26ch] text-sm leading-relaxed text-[var(--color-text-body)]">
                      {service.desc}
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
                              background: `color-mix(in srgb, var(${service.accent}) 12%, transparent)`,
                            }}
                          >
                            <ArrowRight
                              className="h-4 w-4"
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
