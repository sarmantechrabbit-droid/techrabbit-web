import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Reveal from "../Reveal";
import { ChevronDown, Zap, Code2, Rocket, Sparkles, ArrowRight } from "lucide-react";

const groups = [
  {
    title: "Full product — 0 to live",
    icon: Rocket,
    accent: "--color-brand-blue",
    items: [
      {
        t: "SaaS platform",
        d: "Multi-tenant, subscription billing, user auth — production-ready in 30 days.",
      },
      {
        t: "Web application",
        d: "React frontend, Node.js backend, PostgreSQL — built for your specific use case.",
      },
      {
        t: "Mobile app (iOS + Android)",
        d: "React Native (Expo) — one codebase, both platforms, live in under 45 days.",
      },
      {
        t: "Internal dashboard",
        d: "For ops, finance, or HR — if your team needs it, we build it efficiently.",
      },
    ],
  },
  {
    title: "AI features built-in",
    icon: Sparkles,
    accent: "--color-brand-green",
    items: [
      {
        t: "AI Calling agent",
        d: "Outbound + inbound. Handles objections and qualifies leads automatically.",
      },
      {
        t: "Interview simulator",
        d: "Face detection, dynamic questions, and response scoring evaluative logic.",
      },
      {
        t: "Resume / document scoring",
        d: "Match against JDs and rank candidates before any human sees them.",
      },
      {
        t: "Custom knowledge base",
        d: "Trained on your data. Answers accurately and escalates intelligently.",
      },
    ],
  },
  {
    title: "Existing product — scale",
    icon: Code2,
    accent: "--color-brand-blue",
    items: [
      {
        t: "Feature development",
        d: "We read your existing code, understand it, and build on it without rebuilds.",
      },
      {
        t: "UI/UX redesign",
        d: "Figma first. Redesigned from user flows, not just aesthetic preference.",
      },
      {
        t: "Performance fix",
        d: "Slow queries and bottlenecks fixed with measurement, not guesswork.",
      },
      {
        t: "Tech debt cleanup",
        d: "Identify and fix issues without breaking what is already working.",
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
    <section className="py-12 px-6 md:px-12 bg-[var(--color-bg-page)] overflow-hidden relative">
      {/* Dot grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle, var(--color-grid-dot) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
          opacity: 0.5,
        }}
      />

      {/* Gradient glows */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] pointer-events-none">
        <div
          className="absolute inset-0 rounded-full blur-[150px]"
          style={{
            background: "radial-gradient(circle, rgba(42,171,215,0.08) 0%, transparent 70%)",
          }}
        />
      </div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] pointer-events-none">
        <div
          className="absolute inset-0 rounded-full blur-[150px]"
          style={{
            background: "radial-gradient(circle, rgba(36,181,116,0.08) 0%, transparent 70%)",
          }}
        />
      </div>

      {/* Fade overlays */}
      <div className="absolute top-0 inset-x-0 h-20 pointer-events-none"
        style={{ background: "linear-gradient(to bottom, var(--color-bg-page), transparent)" }} />
      <div className="absolute bottom-0 inset-x-0 h-20 pointer-events-none"
        style={{ background: "linear-gradient(to top, var(--color-bg-page), transparent)" }} />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <Reveal className="mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[var(--color-border-brand-soft)] bg-[var(--color-bg-brand-tint)] text-[var(--color-brand-green)] text-[10px] font-black tracking-widest uppercase mb-6">
            <Zap className="w-3.5 h-3.5" />
            Our specialties
          </div>
          <h2 className="text-4xl md:text-5xl font-bold font-heading tracking-tight text-[var(--color-text-primary)] leading-[1.2] mb-4">
            Outcomes, not service names.
            <br />
            <span className="bg-clip-text text-transparent" style={{ backgroundImage: "var(--gradient-brand)" }}>
              Here's what you get.
            </span>
          </h2>
          <p className="text-[var(--color-text-body)] text-sm max-w-2xl leading-relaxed font-medium">
            We focus on results, not labels.
          </p>
        </Reveal>

        {/* Tab Navigation */}
        <div className="flex flex-col sm:flex-row gap-3 mb-12 overflow-x-auto pb-2">
          {groups.map((group, idx) => {
            const Icon = group.icon;
            const isActive = expandedGroup === idx;

            return (
              <motion.button
                key={group.title}
                onClick={() => setExpandedGroup(idx)}
                className="relative rounded-full px-6 py-3 border transition-all duration-300 flex items-center gap-2 shrink-0 whitespace-nowrap"
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
                    color: isActive ? `var(${group.accent})` : "var(--color-text-muted)",
                  }}
                />
                <span
                  className="text-sm font-black uppercase tracking-widest transition-colors duration-300"
                  style={{
                    color: isActive ? `var(${group.accent})` : "var(--color-text-muted)",
                  }}
                >
                  {group.title.split(" ")[0]}
                </span>
              </motion.button>
            );
          })}
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                      {group.items.map((item, iIdx) => (
                        <motion.div
                          key={item.t}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: iIdx * 0.08 }}
                          className="relative rounded-2xl border overflow-hidden transition-all duration-300 cursor-pointer group"
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
                          <div className="p-6 h-full flex flex-col">
                            {/* Icon + Title */}
                            <div className="flex items-start justify-between mb-4">
                              <div
                                className="w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300"
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
                                  rotate: expandedItems[`${gIdx}-${iIdx}`] ? 180 : 0,
                                }}
                                transition={{ duration: 0.3 }}
                              >
                                <ChevronDown
                                  className="w-4 h-4"
                                  style={{ color: `var(${group.accent})` }}
                                />
                              </motion.div>
                            </div>

                            <h4 className="text-base font-bold font-heading text-[var(--color-text-primary)] tracking-tight mb-2">
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
                                  className="text-sm text-[var(--color-text-body)] leading-relaxed"
                                >
                                  {item.d}
                                </motion.p>
                              ) : (
                                <motion.p
                                  initial={{ opacity: 0 }}
                                  animate={{ opacity: 1 }}
                                  exit={{ opacity: 0 }}
                                  className="text-sm text-[var(--color-text-body)] leading-relaxed line-clamp-2"
                                >
                                  {item.d}
                                </motion.p>
                              )}
                            </AnimatePresence>

                            {/* Hover indicator */}
                            <div className="mt-auto pt-4 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                              <div
                                className="w-1.5 h-1.5 rounded-full"
                                style={{ background: `var(${group.accent})` }}
                              />
                              <span
                                className="text-[10px] font-black uppercase tracking-widest"
                                style={{ color: `var(${group.accent})` }}
                              >
                                {expandedItems[`${gIdx}-${iIdx}`] ? "Show less" : "Learn more"}
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {groups.map((group, gIdx) => (
              <Reveal key={group.title} delay={gIdx * 0.1}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: gIdx * 0.1 }}
                  viewport={{ once: true }}
                  className="relative rounded-3xl border overflow-hidden p-8 transition-all duration-300 h-full"
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
                  <div className="flex items-center justify-between mb-8 pb-6 border-b border-[var(--color-border-light)]">
                    <div className="flex items-center gap-3">
                      {group.icon && (
                        <div
                          className="w-10 h-10 rounded-xl flex items-center justify-center"
                          style={{
                            background: `color-mix(in srgb, var(${group.accent}) 12%, transparent)`,
                          }}
                        >
                          {group.icon && <group.icon className="w-5 h-5" style={{ color: `var(${group.accent})` }} />}
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
                  <div className="space-y-6">
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
