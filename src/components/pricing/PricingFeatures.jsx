import { motion } from "framer-motion";
import Reveal from "../Reveal";
import {
  Users,
  Bot,
  Clock,
  ShieldCheck,
  RefreshCw,
  Zap,
  MessageSquare,
  Layout,
  Target,
} from "lucide-react";

const features = [
  {
    title: "Full product team",
    desc: "Not just a developer — Figma designer, full-stack dev, QA engineer, BA, and PM. All inhouse, all in one sprint.",
    icon: Users,
    accent: "var(--color-brand-blue)",
  },
  {
    title: "AI features built-in",
    desc: "Custom AI modules in every plan. Calling agents, interview simulators, scoring engines — not API wrappers.",
    icon: Bot,
    accent: "var(--color-brand-green)",
  },
  {
    title: "Unused hours rollover",
    desc: "Don't lose what you paid for. Hours roll to next month automatically. We alert you at 80% usage.",
    icon: Clock,
    accent: "var(--color-brand-blue)",
  },
  {
    title: "Clockify transparency",
    desc: "Every hour tracked and reported. You see exactly what was built, by whom, when. No black box.",
    icon: ShieldCheck,
    accent: "var(--color-brand-green)",
  },
  {
    title: "Cancel Anytime",
    desc: "30-day notice. No penalties. No lock-in contracts. Stay because it works, not because you're trapped.",
    icon: RefreshCw,
    accent: "var(--color-brand-blue)",
  },
  {
    title: "Same team every month",
    desc: "No rotation. The dev who starts your project finishes it. They know your codebase — no re-explaining.",
    icon: Zap,
    accent: "var(--color-brand-green)",
  },
  {
    title: "NDA on day 1",
    desc: "Your IP, your code. Always. We sign before the first line of conversation about your product.",
    icon: MessageSquare,
    accent: "var(--color-brand-blue)",
  },
  {
    title: "4-hour response SLA",
    desc: "Every message answered within 4 business hours. Dedicated Slack channel. Daily Loom updates.",
    icon: Layout,
    accent: "var(--color-brand-green)",
  },
  {
    title: "Your timezone overlap",
    desc: "Team working overlapping hours with US, UK, Canada, and Australia. Standups at your time.",
    icon: Target,
    accent: "var(--color-brand-blue)",
  },
];

export default function PricingFeatures() {
  return (
    <section className="relative bg-[var(--color-bg-page)] overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-10 w-96 h-96 rounded-full opacity-8 blur-3xl" style={{ background: "radial-gradient(circle, var(--color-brand-blue), transparent)" }} />
        <div className="absolute bottom-40 left-20 w-80 h-80 rounded-full opacity-8 blur-3xl" style={{ background: "radial-gradient(circle, var(--color-brand-green), transparent)" }} />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* HEADER */}
        <Reveal>
          <div className="text-center mb-12 space-y-4">
            <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white border border-[var(--color-border-card)] text-[10px] font-black tracking-widest uppercase shadow-sm">
              <span className="w-2 h-2 rounded-full" style={{ background: "var(--color-brand-green)" }} />
              Everything Included
            </div>

            <h2 className="text-4xl md:text-5xl font-bold font-heading tracking-tight leading-[1.2]">
              Core features in
              <br />
              <span style={{ background: "linear-gradient(135deg, var(--color-brand-blue), var(--color-brand-green))", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                every plan
              </span>
            </h2>

            <p className="text-gray-600 max-w-2xl mx-auto text-base font-medium">
              No hidden features. No tier-based limitations. Everything below is included in Starter, Growth, and Scale.
            </p>
          </div>
        </Reveal>

        {/* FEATURES GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {features.map((feature, idx) => {
            const Icon = feature.icon;
            const isBlue = feature.accent === "var(--color-brand-blue)";

            return (
              <Reveal key={feature.title} delay={idx * 0.06}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.06, duration: 0.5 }}
                  viewport={{ once: true }}
                  className="group relative rounded-2xl overflow-hidden border transition-all duration-500 hover:shadow-lg p-8"
                  style={{
                    background: "white",
                    borderColor: "var(--color-border-card)",
                  }}
                >
                  {/* Top accent line */}
                  <div
                    className="absolute top-0 left-0 right-0 h-1 transition-all duration-500"
                    style={{ background: feature.accent }}
                  />

                  {/* Icon Container */}
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-6 transition-all duration-300 group-hover:scale-110"
                    style={{
                      background: `color-mix(in srgb, ${feature.accent} 12%, transparent)`,
                    }}
                  >
                    <Icon
                      className="w-6 h-6 transition-colors duration-300"
                      style={{ color: feature.accent }}
                    />
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold font-heading text-gray-900 mb-3 tracking-tight">
                    {feature.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 text-sm leading-relaxed font-medium">
                    {feature.desc}
                  </p>

                  {/* Hover indicator dot */}
                  <div
                    className="absolute bottom-4 right-4 w-2 h-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{ background: feature.accent }}
                  />
                </motion.div>
              </Reveal>
            );
          })}
        </div>

        {/* BOTTOM CTA */}
        <Reveal delay={0.5}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mt-12 text-center"
          >
            <div
              className="inline-block rounded-2xl p-8 md:p-10 border"
              style={{
                background: "linear-gradient(135deg, rgba(42,171,215,0.08), rgba(36,181,116,0.08))",
                border: "1px solid rgba(42,171,215,0.2)",
              }}
            >
             
         
              <h3 className="text-2xl font-bold font-heading text-gray-900 mb-2">
                Ready to get started?
              </h3>
              <p className="text-gray-600 text-sm font-medium mb-6">
                All features are available in every plan. Choose what works for your team.
              </p>
              <button
                className="inline-flex items-center gap-2 px-8 py-3 rounded-xl text-sm font-black text-white transition-all hover:shadow-lg group/btn"
                style={{
                  background: "linear-gradient(135deg, var(--color-brand-blue), var(--color-brand-green))",
                }}
              >
                View Pricing
                <span className="transition-transform group-hover/btn:translate-x-1">→</span>
              </button>
            </div>
          </motion.div>
        </Reveal>
      </div>
    </section>
  );
}
