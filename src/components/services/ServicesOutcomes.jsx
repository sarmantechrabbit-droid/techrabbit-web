import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Reveal from "../Reveal";
import { ChevronDown, Zap, Code2, Rocket, Sparkles } from "lucide-react";

const groups = [
  {
    title: "Full product — 0 to live",
    icon: Rocket,
    accent: "--color-brand-blue",
    items: [
      {
        t: "SaaS platform",
        d: "Multi-tenant, subscription billing, user auth, admin panel — production-ready in 30 days",
      },
      {
        t: "Web application + landing page",
        d: "React frontend, Node.js backend, PostgreSQL — not a template, built for your use case",
      },
      {
        t: "Mobile app (iOS + Android)",
        d: "React Native (Expo) — one codebase, both platforms, live in under 45 days",
      },
      {
        t: "Internal tool or dashboard",
        d: "For ops, finance, logistics, HR — if your team needs it, we build it",
      },
    ],
  },
  {
    title: "AI features built-in",
    icon: Sparkles,
    accent: "--color-brand-green",
    items: [
      {
        t: "AI calling agent",
        d: "Outbound + inbound. Handles objections, qualifies leads, books appointments — no human operator",
      },
      {
        t: "Interview simulator",
        d: "Face detection, dynamic questions, response scoring. Not keyword matching — actual evaluation logic",
      },
      {
        t: "Resume / document scoring",
        d: "Match against job descriptions, extract structured data, rank candidates before any human sees them",
      },
      {
        t: "Custom chatbot with knowledge base",
        d: "Trained on your data. Answers accurately, escalates intelligently. Not a generic GPT wrapper",
      },
    ],
  },
  {
    title: "Existing product — scale",
    icon: Code2,
    accent: "--color-brand-blue",
    items: [
      {
        t: "Feature development on live codebase",
        d: "We read your existing code, understand it, build on it. No 'we need to rewrite this first'",
      },
      {
        t: "UI/UX redesign",
        d: "Figma first. We redesign from user flows, not aesthetic preference. Then implement it",
      },
      {
        t: "Performance optimization",
        d: "Slow queries, render bottlenecks, infra issues — fixed with measurement, not guesswork",
      },
      {
        t: "Tech debt cleanup",
        d: "Identify, prioritize, fix — without breaking what's working",
      },
    ],
  },
];

export default function ServicesOutcomes() {
  const [expandedGroup, setExpandedGroup] = useState(0);
  const [expandedItems, setExpandedItems] = useState({});

  const toggleItem = (groupIdx, itemIdx) => {
    const key = `${groupIdx}-${itemIdx}`;
    setExpandedItems((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  return (
    <section className="relative overflow-hidden bg-[var(--color-bg-page)] px-4 py-16 sm:px-6 md:px-8 lg:px-12">
      {/* Dot grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle, var(--color-grid-dot) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
          opacity: 0.5,
        }}
      />

      {/* Gradient glows */}
      <div className="absolute right-[-20%] top-0 h-[18rem] w-[18rem] pointer-events-none sm:right-[-10%] sm:h-[24rem] sm:w-[24rem] lg:right-0 lg:h-[37.5rem] lg:w-[37.5rem]">
        <div
          className="absolute inset-0 rounded-full blur-[150px]"
          style={{
            background:
              "radial-gradient(circle, rgba(42,171,215,0.08) 0%, transparent 70%)",
          }}
        />
      </div>
      <div className="absolute bottom-0 left-[-20%] h-[16rem] w-[16rem] pointer-events-none sm:left-[-10%] sm:h-[22rem] sm:w-[22rem] lg:left-0 lg:h-[31.25rem] lg:w-[31.25rem]">
        <div
          className="absolute inset-0 rounded-full blur-[150px]"
          style={{
            background:
              "radial-gradient(circle, rgba(36,181,116,0.08) 0%, transparent 70%)",
          }}
        />
      </div>

      {/* Fade overlays */}
      <div
        className="absolute top-0 inset-x-0 h-20 pointer-events-none"
        style={{
          background:
            "linear-gradient(to bottom, var(--color-bg-page), transparent)",
        }}
      />
      <div
        className="absolute bottom-0 inset-x-0 h-20 pointer-events-none"
        style={{
          background:
            "linear-gradient(to top, var(--color-bg-page), transparent)",
        }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <Reveal className="mb-10 sm:mb-12">
          <div className="mb-5 inline-flex max-w-full items-center gap-2 rounded-full border border-[var(--color-border-brand-soft)] bg-[var(--color-bg-brand-tint)] px-3 py-1.5 text-[9px] font-black uppercase tracking-[0.28em] text-[var(--color-brand-green)] sm:mb-6 sm:px-4 sm:text-[10px]">
            <Zap className="w-3.5 h-3.5" />
          What we actually build

          </div>
          <h2 className="mb-4 text-4xl font-bold font-heading leading-[1.15] tracking-tight text-[var(--color-text-primary)] sm:text-5xl">
            Outcomes, not 

            <br className="sm:hidden" />
            service names.
            <br />
            <span
              className="bg-clip-text text-transparent"
              style={{ backgroundImage: "var(--gradient-brand)" }}
            >
              Here's what you get.
            </span>
          </h2>
          <p className="max-w-2xl text-sm font-medium leading-relaxed text-[var(--color-text-body)]">
          Most agencies list technologies. We list what you actually get — so you know what you're paying for before the first call.


          </p>
        </Reveal>

        {/* Tab Navigation */}
        <div className="mb-10 flex gap-3 overflow-x-auto pb-2 scrollbar-hide sm:mb-12">
          {groups.map((group, idx) => {
            const Icon = group.icon;
            const isActive = expandedGroup === idx;

            return (
              <motion.button
                key={group.title}
                onClick={() => setExpandedGroup(idx)}
                className="relative flex shrink-0 items-center gap-2 whitespace-nowrap rounded-full border px-4 py-3 transition-all duration-300 sm:px-6"
                style={{
                  background: isActive
                    ? `color-mix(in srgb, var(${group.accent}) 10%, white)`
                    : "white",
                  borderColor: isActive
                    ? `var(${group.accent})`
                    : "var(--color-border-card)",
                  boxShadow: isActive
                    ? `0 8px 24px -8px color-mix(in srgb, var(${group.accent}) 25%, transparent)`
                    : "0 1px 4px rgba(0,0,0,0.03)",
                }}
              >
                <Icon
                  className="w-4 h-4 transition-colors duration-300"
                  style={{
                    color: isActive
                      ? `var(${group.accent})`
                      : "var(--color-text-muted)",
                  }}
                />
                <span
                  className="text-xs font-black uppercase tracking-[0.22em] transition-colors duration-300 sm:text-sm sm:tracking-widest"
                  style={{
                    color: isActive
                      ? `var(${group.accent})`
                      : "var(--color-text-muted)",
                  }}
                >
                  {group.title.split(" ")[0]}
                </span>
              </motion.button>
            );
          })}
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 gap-6">
          {groups.map((group, gIdx) => {
            const Icon = group.icon;
            const isActive = expandedGroup === gIdx;

            return (
              <AnimatePresence key={group.title}>
                {isActive && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    transition={{ duration: 0.3 }}
                    className="lg:col-span-3"
                  >
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
                      {group.items.map((item, iIdx) => (
                        <motion.div
                          key={item.t}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: iIdx * 0.08 }}
                          className="group relative cursor-pointer overflow-hidden rounded-2xl border transition-all duration-300"
                          style={{
                            background: "white",
                            borderColor: "var(--color-border-card)",
                            boxShadow: "0 2px 12px rgba(0,0,0,0.04)",
                          }}
                          onClick={() => toggleItem(gIdx, iIdx)}
                        >
                          {/* Top accent line */}
                          <div
                            className="absolute top-0 inset-x-0 h-1"
                            style={{ background: `var(${group.accent})` }}
                          />

                          {/* Content */}
                          <div className="flex h-full flex-col p-5 sm:p-6">
                            {/* Icon + Title */}
                            <div className="mb-4 flex items-start justify-between">
                              <div
                                className="flex h-10 w-10 items-center justify-center rounded-xl transition-all duration-300"
                                style={{
                                  background: `color-mix(in srgb, var(${group.accent}) 12%, transparent)`,
                                }}
                              >
                                <Icon
                                  className="w-5 h-5"
                                  style={{ color: `var(${group.accent})` }}
                                />
                              </div>
                              <motion.div
                                animate={{
                                  rotate: expandedItems[`${gIdx}-${iIdx}`]
                                    ? 180
                                    : 0,
                                }}
                                transition={{ duration: 0.3 }}
                              >
                                <ChevronDown
                                  className="w-4 h-4"
                                  style={{ color: `var(${group.accent})` }}
                                />
                              </motion.div>
                            </div>

                            <h4 className="mb-2 text-base font-bold font-heading tracking-tight text-[var(--color-text-primary)]">
                              {item.t}
                            </h4>

                            {/* Description - Expandable */}
                            <AnimatePresence>
                              {expandedItems[`${gIdx}-${iIdx}`] ? (
                                <motion.p
                                  initial={{ opacity: 0, height: 0 }}
                                  animate={{ opacity: 1, height: "auto" }}
                                  exit={{ opacity: 0, height: 0 }}
                                  transition={{ duration: 0.3 }}
                                  className="text-sm leading-relaxed text-[var(--color-text-body)]"
                                >
                                  {item.d}
                                </motion.p>
                              ) : (
                                <motion.p
                                  initial={{ opacity: 0 }}
                                  animate={{ opacity: 1 }}
                                  exit={{ opacity: 0 }}
                                  className="line-clamp-2 text-sm leading-relaxed text-[var(--color-text-body)]"
                                >
                                  {item.d}
                                </motion.p>
                              )}
                            </AnimatePresence>

                            {/* Hover indicator */}
                            <div className="mt-auto flex items-center gap-2 pt-4 opacity-100 transition-opacity duration-300 sm:opacity-0 sm:group-hover:opacity-100">
                              <div
                                className="w-1.5 h-1.5 rounded-full"
                                style={{ background: `var(${group.accent})` }}
                              />
                              <span
                                className="text-[10px] font-black uppercase tracking-widest"
                                style={{ color: `var(${group.accent})` }}
                              >
                                {expandedItems[`${gIdx}-${iIdx}`]
                                  ? "Show less"
                                  : "Learn more"}
                              </span>
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            );
          })}
        </div>

        {/* Fallback Grid - Show all when no tab selected */}
        {expandedGroup === null && (
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
            {groups.map((group, gIdx) => (
              <Reveal key={group.title} delay={gIdx * 0.1}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: gIdx * 0.1 }}
                  viewport={{ once: true }}
                  className="relative h-full overflow-hidden rounded-3xl border p-6 transition-all duration-300 sm:p-8"
                  style={{
                    background: "white",
                    borderColor: "var(--color-border-card)",
                    boxShadow: "0 2px 12px rgba(0,0,0,0.04)",
                  }}
                >
                  {/* Top accent line */}
                  <div
                    className="absolute top-0 inset-x-0 h-1"
                    style={{ background: `var(${group.accent})` }}
                  />

                  {/* Header */}
                  <div className="mb-6 flex items-center justify-between border-b border-[var(--color-border-light)] pb-5 sm:mb-8 sm:pb-6">
                    <div className="flex items-center gap-3">
                      {group.icon && (
                        <div
                          className="flex h-10 w-10 items-center justify-center rounded-xl"
                          style={{
                            background: `color-mix(in srgb, var(${group.accent}) 12%, transparent)`,
                          }}
                        >
                          {group.icon && (
                            <group.icon
                              className="w-5 h-5"
                              style={{ color: `var(${group.accent})` }}
                            />
                          )}
                        </div>
                      )}
                      <h3 className="text-lg font-black font-heading text-[var(--color-text-primary)] tracking-tight">
                        {group.title}
                      </h3>
                    </div>
                    <span
                      className="text-[10px] font-black uppercase tracking-widest px-2.5 py-1.5 rounded-lg"
                      style={{
                        background: `color-mix(in srgb, var(${group.accent}) 10%, transparent)`,
                        color: `var(${group.accent})`,
                      }}
                    >
                      0{gIdx + 1}
                    </span>
                  </div>

                  {/* Items */}
                  <div className="space-y-5 sm:space-y-6">
                    {group.items.map((item) => (
                      <div key={item.t} className="flex gap-3">
                        <div
                          className="w-2 h-2 rounded-full mt-2 shrink-0"
                          style={{ background: `var(${group.accent})` }}
                        />
                        <div>
                          <h4 className="text-sm font-bold text-[var(--color-text-primary)] mb-1">
                            {item.t}
                          </h4>
                          <p className="text-sm text-[var(--color-text-body)] leading-relaxed">
                            {item.d}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </Reveal>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
