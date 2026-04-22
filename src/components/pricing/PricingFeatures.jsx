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
    title: "Cancel anytime",
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
    <section className="relative overflow-hidden bg-[var(--color-bg-page)] px-4 pt-16 sm:px-6 md:px-8 lg:px-12">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute right-[-20%] top-20 h-96 w-96 rounded-full blur-3xl sm:right-[-10%] md:right-10"
          style={{
            background:
              "radial-gradient(circle, var(--color-brand-blue), transparent)",
            opacity: 0.08,
          }}
        />
        <div
          className="absolute bottom-40 left-[-20%] h-80 w-80 rounded-full blur-3xl sm:left-[-10%] md:left-20"
          style={{
            background:
              "radial-gradient(circle, var(--color-brand-green), transparent)",
            opacity: 0.08,
          }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl">
        <Reveal>
          <div className="mb-12 space-y-4">
            <div className="inline-flex items-center gap-2 rounded-full border border-[var(--color-border-card)] bg-white px-4 py-2 text-[10px] font-black uppercase tracking-widest shadow-sm sm:px-5 sm:py-2.5">
              <span
                className="h-2 w-2 rounded-full"
                style={{ background: "var(--color-brand-green)" }}
              />
              What's included
            </div>

            <h2 className="max-w-[12ch] text-4xl font-bold font-heading leading-[1.15] tracking-tight sm:max-w-[14ch] md:text-5xl">
              Everything included
              <br />
              <span
                style={{
                  background:
                    "linear-gradient(135deg, var(--color-brand-blue), var(--color-brand-green))",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                in every plan
              </span>
            </h2>

            <p className="max-w-2xl text-sm font-medium text-gray-600 md:text-base">
              No hidden fees. No extra charges for design or QA. One
              subscription, full team.
            </p>
          </div>
        </Reveal>

        <div className="mb-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {features.map((feature, idx) => {
            const Icon = feature.icon;

            return (
              <Reveal key={feature.title} delay={idx * 0.06}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.06, duration: 0.5 }}
                  viewport={{ once: true }}
                  className="group relative overflow-hidden rounded-2xl border p-6 transition-all duration-500 hover:shadow-lg sm:p-8"
                  style={{
                    background: "white",
                    borderColor: "var(--color-border-card)",
                  }}
                >
                  <div
                    className="absolute left-0 right-0 top-0 h-1 transition-all duration-500"
                    style={{ background: feature.accent }}
                  />

                  <div
                    className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl transition-all duration-300 group-hover:scale-110"
                    style={{
                      background: `color-mix(in srgb, ${feature.accent} 12%, transparent)`,
                    }}
                  >
                    <Icon
                      className="h-6 w-6 transition-colors duration-300"
                      style={{ color: feature.accent }}
                    />
                  </div>

                  <h3 className="mb-3 text-lg font-bold font-heading tracking-tight text-gray-900">
                    {feature.title}
                  </h3>

                  <p className="text-sm font-medium leading-relaxed text-gray-600">
                    {feature.desc}
                  </p>

                  <div
                    className="absolute bottom-4 right-4 h-2 w-2 rounded-full opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                    style={{ background: feature.accent }}
                  />
                </motion.div>
              </Reveal>
            );
          })}
        </div>

        {/* <Reveal delay={0.5}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mt-12"
          >
            <div
              className="rounded-2xl border p-6 sm:p-8 md:p-10"
              style={{
                background:
                  "linear-gradient(135deg, rgba(42,171,215,0.08), rgba(36,181,116,0.08))",
                borderColor: "rgba(42,171,215,0.2)",
              }}
            >
              <h3 className="mb-2 text-2xl font-bold font-heading text-gray-900">
                Ready to get started?
              </h3>
              <p className="mb-6 text-sm font-medium text-gray-600">
                All features are available in every plan. Choose what works for
                your team.
              </p>
              <button
                className="group/btn inline-flex w-full items-center justify-center gap-2 rounded-xl px-8 py-3 text-sm font-black text-white transition-all hover:shadow-lg sm:w-auto"
                style={{
                  background:
                    "linear-gradient(135deg, var(--color-brand-blue), var(--color-brand-green))",
                }}
              >
                View Pricing
                <span className="transition-transform group-hover/btn:translate-x-1">
                  {">"}
                </span>
              </button>
            </div>
          </motion.div>
        </Reveal> */}
      </div>
    </section>
  );
}
