import { motion } from "framer-motion";
import Reveal from "../Reveal";
import { Clock, TrendingUp, RotateCcw, Users, ArrowRight } from "lucide-react";

const features = [
  {
    icon: Clock,
    title: "What counts as hours?",
    desc: "Design, development, QA, and PM coordination — all focused on your roadmap.",
    accent: "var(--color-brand-blue)",
  },
  {
    icon: TrendingUp,
    title: "Efficient by Design",
    desc: "Senior lead takes the complex tasks, while support builds the rest — maximizing value.",
    accent: "var(--color-brand-green)",
  },
  {
    icon: RotateCcw,
    title: "Unused Hours",
    desc: "Roll over to next month. Total transparency via Clockify reporting.",
    accent: "var(--color-brand-blue)",
  },
  {
    icon: Users,
    title: "Boutique Scale",
    desc: "We limit our subscription to 5 active partners to ensure quality and speed.",
    accent: "var(--color-brand-green)",
  },
];

export default function PricingHowHoursWork() {
  return (
    <section className="relative py-12 md:py-16 bg-[var(--color-bg-page)] overflow-hidden">
      {/* Subtle background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-10 w-72 h-72 rounded-full opacity-5 blur-3xl" style={{ background: "radial-gradient(circle, var(--color-brand-blue), transparent)" }} />
        <div className="absolute bottom-20 left-10 w-64 h-64 rounded-full opacity-5 blur-3xl" style={{ background: "radial-gradient(circle, var(--color-brand-green), transparent)" }} />
      </div>

      <div className="max-w-5xl mx-auto px-6 md:px-10 relative z-10">
        {/* HEADER */}
        <Reveal>
          <div className="text-center mb-12 space-y-3">
            <h2 className="text-3xl md:text-4xl font-bold font-heading tracking-tight leading-[1.2]">
              How our
              <br />
              <span style={{ background: "linear-gradient(135deg, var(--color-brand-blue), var(--color-brand-green))", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                hours work
              </span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-sm md:text-base font-medium">
              Simple, transparent, and fair. Every hour tracked and reported.
            </p>
          </div>
        </Reveal>

        {/* FEATURES GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {features.map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.08, duration: 0.5 }}
                viewport={{ once: true }}
                className="group relative rounded-xl p-7 transition-all duration-300 hover:shadow-md"
                style={{
                  background: "white",
                  border: "1px solid var(--color-border-card)",
                }}
              >
                {/* Top accent line */}
                <div
                  className="absolute top-0 left-0 right-0 h-1 rounded-t-xl transition-all duration-300"
                  style={{ background: feature.accent }}
                />

                {/* Icon */}
                <div
                  className="w-12 h-12 rounded-lg flex items-center justify-center mb-4 transition-all duration-300 group-hover:scale-110"
                  style={{
                    background: `color-mix(in srgb, ${feature.accent} 10%, transparent)`,
                  }}
                >
                  <Icon className="w-6 h-6" style={{ color: feature.accent }} />
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold font-heading text-gray-900 mb-2 tracking-tight">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-gray-600 leading-relaxed font-medium">
                  {feature.desc}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* BOTTOM SECTION - MVP */}
        <Reveal delay={0.3}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative rounded-2xl p-6 md:p-8 text-center"
            style={{
              background: "linear-gradient(135deg, rgba(42,171,215,0.06), rgba(36,181,116,0.06))",
              border: "1px solid rgba(42,171,215,0.15)",
            }}
          >
            {/* Top accent */}
            <div
              className="absolute top-0 left-0 right-0 h-1 rounded-t-2xl"
              style={{
                background: "linear-gradient(90deg, var(--color-brand-blue), var(--color-brand-green))",
              }}
            />

            <div className="relative z-10">
              <h3 className="text-2xl md:text-3xl font-bold font-heading mb-3">
                Need a 0-to-1 MVP instead?
              </h3>
              <p className="text-gray-600 text-sm md:text-base font-medium mb-6 max-w-2xl mx-auto">
                Fixed scope. Fixed price → 30-day delivery. Design + Dev + QA + Deployment for a single predictable cost.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                <div>
                  <p className="text-[10px] font-black uppercase tracking-widest text-gray-500 mb-1">
                    Typically starting at
                  </p>
                  <p className="text-3xl font-black font-heading" style={{ background: "linear-gradient(135deg, var(--color-brand-blue), var(--color-brand-green))", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                    $9,500
                  </p>
                </div>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-7 py-3 rounded-lg text-xs font-black uppercase tracking-widest text-white transition-all hover:shadow-lg flex items-center justify-center gap-2 group/btn"
                  style={{
                    background: "linear-gradient(135deg, var(--color-brand-blue), var(--color-brand-green))",
                  }}
                >
                  Start build
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-0.5" />
                </motion.button>
              </div>
            </div>
          </motion.div>
        </Reveal>
      </div>
    </section>
  );
}
