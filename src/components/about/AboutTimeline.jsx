import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Reveal from "../Reveal";
import {
  ChevronDown,
  Zap,
  Users,
  Globe,
  Award,
  Rocket,
  TrendingUp,
} from "lucide-react";

const timeline = [
  {
    year: "2019",
    title: "Tech Rabbit Founded",
    tagline: "The Beginning",
    desc: "Started in Ahmedabad with one goal — build a product agency that actually works. First 3 clients in month one.",
    highlights: [
      "Founded with 2 co-founders",
      "First office in Ahmedabad",
      "3 clients in first month",
      "Focus on quality over quantity",
    ],
    icon: Rocket,
    accent: "--color-brand-green",
  },
  {
    year: "2020",
    title: "First International Clients",
    tagline: "Going Global",
    desc: "First US and UK clients onboarded. Remote-first delivery model proven across time zones.",
    highlights: [
      "Expanded to US market",
      "UK clients onboarded",
      "Remote-first model established",
      "Team grew to 4 members",
    ],
    icon: Globe,
    accent: "--color-brand-blue",
  },
  {
    year: "2021",
    title: "ISO Certification",
    tagline: "Quality Standard",
    desc: "Achieved ISO certification (MMS/EGAC accredited). Quality process standardized across every sprint.",
    highlights: [
      "ISO 9001 Certified",
      "Process standardization",
      "Quality metrics tracked",
      "10+ products shipped",
    ],
    icon: Award,
    accent: "--color-brand-green",
  },
  {
    year: "2022",
    title: "Canada & Australia",
    tagline: "Scale Up",
    desc: "Expanded to Canadian and Australian markets. Full team of 6 in-house developers.",
    highlights: [
      "4 countries served",
      "Team of 6 developers",
      "24/7 timezone coverage",
      "15+ products shipped",
    ],
    icon: Users,
    accent: "--color-brand-blue",
  },
  {
    year: "2023",
    title: "AI Capabilities Added",
    tagline: "AI Era",
    desc: "Integrated Claude, GPT-4o, and custom agents into every sprint. 20+ products shipped.",
    highlights: [
      "Claude integration",
      "GPT-4o implementation",
      "Custom AI agents",
      "20+ products shipped",
    ],
    icon: Zap,
    accent: "--color-brand-green",
  },
  {
    year: "2025",
    title: "Subscription Model",
    tagline: "Today",
    desc: "Launched Dev-as-a-Service subscription. Full team of 8. 30+ products. 6 countries.",
    highlights: [
      "Dev-as-a-Service launched",
      "Team of 8 in-house",
      "30+ products shipped",
      "6 countries served",
    ],
    icon: TrendingUp,
    accent: "--color-brand-blue",
  },
];

export default function AboutTimeline() {
  const [expanded, setExpanded] = useState(0);

  return (
    <section className="py-20 px-6 md:px-12 bg-[var(--color-bg-page)] overflow-hidden relative">
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
      <div
        className="absolute top-0 inset-x-0 h-28 pointer-events-none"
        style={{
          background:
            "linear-gradient(to bottom, var(--color-bg-page), transparent)",
        }}
      />
      <div
        className="absolute bottom-0 inset-x-0 h-28 pointer-events-none"
        style={{
          background:
            "linear-gradient(to top, var(--color-bg-page), transparent)",
        }}
      />

      <div className="max-w-5xl mx-auto relative z-10">
        {/* ── Header ── */}
        <Reveal className="mb-16 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[var(--color-border-brand-soft)] bg-[var(--color-bg-brand-tint)] text-[var(--color-brand-blue)] text-[10px] font-black tracking-widest uppercase mb-5">
            Our Journey
          </div>
          <h2 className="text-4xl md:text-5xl font-bold font-heading tracking-tight text-[var(--color-text-primary)] leading-[1.2] mb-4">
            6 years of
            <br />
            <span
              className="bg-clip-text text-transparent"
              style={{ backgroundImage: "var(--gradient-brand)" }}
            >
              building & shipping.
            </span>
          </h2>
          <p className="text-[var(--color-text-body)] text-base max-w-xl mx-auto leading-relaxed font-medium">
            From a single office in Ahmedabad to clients across 6 countries —
            every milestone that shaped us.
          </p>
        </Reveal>

        {/* ── Timeline accordion ── */}
        <div className="relative">
          {/* Left progress bar */}
          <div className="absolute left-0 top-0 bottom-0 w-1 bg-[var(--color-border-light)] rounded-full">
            <motion.div
              className="w-full bg-[var(--color-brand-green)] rounded-full"
              initial={{ height: 0 }}
              animate={{
                height: `${((expanded + 1) / timeline.length) * 100}%`,
              }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            />
          </div>

          {/* Timeline items */}
          <div className="space-y-4 pl-8">
            {timeline.map((item, idx) => {
              const Icon = item.icon;
              const isExpanded = expanded === idx;

              return (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.08, duration: 0.45 }}
                  viewport={{ once: true }}
                  className="relative"
                >
                  {/* Timeline dot */}
                  <div
                    className="absolute -left-[2.25rem] top-6 w-5 h-5 rounded-full border-4 transition-all duration-300"
                    style={{
                      borderColor: isExpanded
                        ? `var(${item.accent})`
                        : "var(--color-border-card)",
                      background: isExpanded ? `var(${item.accent})` : "white",
                      boxShadow: isExpanded
                        ? `0 0 0 4px color-mix(in srgb, var(${item.accent}) 10%, transparent)`
                        : "none",
                    }}
                  />

                  {/* Card */}
                  <motion.button
                    onClick={() => setExpanded(isExpanded ? -1 : idx)}
                    className="w-full text-left relative rounded-2xl border overflow-hidden transition-all duration-300"
                    style={{
                      background: isExpanded
                        ? `color-mix(in srgb, var(${item.accent}) 4%, white)`
                        : "white",
                      borderColor: isExpanded
                        ? `var(${item.accent})`
                        : "var(--color-border-card)",
                      boxShadow: isExpanded
                        ? `0 12px 48px -12px color-mix(in srgb, var(${item.accent}) 25%, transparent)`
                        : "0 2px 12px rgba(0,0,0,0.04)",
                    }}
                  >
                    {/* Top accent line */}
                    <div
                      className="h-1 w-full transition-all duration-300"
                      style={{
                        background: isExpanded
                          ? `var(${item.accent})`
                          : "transparent",
                      }}
                    />

                    {/* Header */}
                    <div className="p-6 flex items-start justify-between gap-4">
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-3 mb-2">
                          <div
                            className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition-all duration-300"
                            style={{
                              background: isExpanded
                                ? `color-mix(in srgb, var(${item.accent}) 12%, transparent)`
                                : "var(--color-bg-card)",
                            }}
                          >
                            <Icon
                              className="w-5 h-5 transition-colors duration-300"
                              style={{
                                color: isExpanded
                                  ? `var(${item.accent})`
                                  : "var(--color-text-disabled)",
                              }}
                            />
                          </div>
                          <span
                            className="text-[10px] font-black uppercase tracking-widest transition-colors duration-300"
                            style={{
                              color: isExpanded
                                ? `var(${item.accent})`
                                : "var(--color-text-faint)",
                            }}
                          >
                            {item.tagline}
                          </span>
                        </div>

                        <div className="flex items-baseline gap-3 mb-1">
                          <h3 className="text-lg md:text-xl font-bold font-heading text-[var(--color-text-primary)] tracking-tight">
                            {item.title}
                          </h3>
                          <span
                            className="text-xl font-bold font-heading transition-colors duration-300"
                            style={{
                              color: isExpanded
                                ? `var(${item.accent})`
                                : "var(--color-text-faint)",
                            }}
                          >
                            {item.year}
                          </span>
                        </div>

                        <p className="text-sm text-[var(--color-text-body)] leading-relaxed line-clamp-2 font-medium">
                          {item.desc}
                        </p>
                      </div>

                      {/* Chevron */}
                      <motion.div
                        animate={{ rotate: isExpanded ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                        className="shrink-0 mt-1"
                      >
                        <ChevronDown
                          className="w-5 h-5 transition-colors duration-300"
                          style={{
                            color: isExpanded
                              ? `var(${item.accent})`
                              : "var(--color-text-muted)",
                          }}
                        />
                      </motion.div>
                    </div>

                    {/* Expanded content */}
                    <AnimatePresence initial={false}>
                      {isExpanded && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{
                            duration: 0.35,
                            ease: [0.04, 0.62, 0.23, 0.98],
                          }}
                          className="overflow-hidden"
                        >
                          <div
                            className="px-6 pb-6 border-t"
                            style={{ borderColor: "var(--color-border-light)" }}
                          >
                            <p className="text-[var(--color-text-body)] text-base leading-relaxed mb-5 font-medium">
                              {item.desc}
                            </p>

                            {/* Highlights grid */}
                            <div className="grid grid-cols-2 gap-3">
                              {item.highlights.map((highlight) => (
                                <div
                                  key={highlight}
                                  className="flex items-start gap-2 p-3 rounded-xl transition-colors duration-300"
                                  style={{
                                    background: `color-mix(in srgb, var(${item.accent}) 6%, transparent)`,
                                  }}
                                >
                                  <div
                                    className="w-1.5 h-1.5 rounded-full shrink-0 mt-1.5"
                                    style={{
                                      background: `var(${item.accent})`,
                                    }}
                                  />
                                  <span className="text-sm font-bold text-[var(--color-text-dark)]">
                                    {highlight}
                                  </span>
                                </div>
                              ))}
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.button>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* ── Bottom stats ── */}
        <Reveal delay={0.4} className="mt-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { value: "6+", label: "Years" },
              { value: "30+", label: "Products" },
              { value: "6", label: "Countries" },
              { value: "8", label: "Team size" },
            ].map((s) => (
              <div
                key={s.label}
                className="rounded-2xl border border-[var(--color-border-card)] bg-white p-5 text-center"
                style={{ boxShadow: "0 2px 12px rgba(0,0,0,0.04)" }}
              >
                <div
                  className="text-2xl font-black font-heading bg-clip-text text-transparent leading-none"
                  style={{ backgroundImage: "var(--gradient-brand)" }}
                >
                  {s.value}
                </div>
                <div className="text-[9px] font-black uppercase tracking-widest text-[var(--color-text-faint)] mt-2">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
