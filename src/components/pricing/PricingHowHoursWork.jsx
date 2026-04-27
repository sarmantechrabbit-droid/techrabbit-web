import { motion } from "framer-motion";
import Reveal from "../Reveal";
import { Clock, TrendingUp, RotateCcw, Users, ArrowRight } from "lucide-react";

const features = [
  {
    icon: Clock,
    title: "What counts as hours",
    desc: "Design, development, QA, BA calls, and PM coordination — all tracked via Clockify. Full report every month.",
    accent: "var(--color-brand-blue)",
  },
  {
    icon: TrendingUp,
    title: "Who works on your product",
    desc: "Tech Rabbit assigns the right mix of Figma, dev, QA, and BA based on what your sprint needs. You don't manage resourcing.",
    accent: "var(--color-brand-green)",
  },
  {
    icon: RotateCcw,
    title: "Unused hours",
    desc: "Rollover to next month — no waste. We alert you when 80% of your hours are used so you're never caught off guard.",
    accent: "var(--color-brand-blue)",
  },
  {
    icon: Users,
    title: "Going over your hours",
    desc: "We pause and check with you first. Extra hours billed at $55/hr — or upgrade your plan anytime.",
    accent: "var(--color-brand-green)",
  },
];

export default function PricingHowHoursWork() {
  return (
    <section className="relative overflow-hidden bg-[var(--color-bg-page)] px-4 sm:px-6 md:px-8 md:py-16 lg:px-12">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute right-[-20%] top-20 h-72 w-72 rounded-full blur-3xl sm:right-[-10%] md:right-10"
          style={{
            background:
              "radial-gradient(circle, var(--color-brand-blue), transparent)",
            opacity: 0.05,
          }}
        />
        <div
          className="absolute bottom-20 left-[-20%] h-64 w-64 rounded-full blur-3xl sm:left-[-10%] md:left-10"
          style={{
            background:
              "radial-gradient(circle, var(--color-brand-green), transparent)",
            opacity: 0.05,
          }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl">
        <Reveal>
          <div className="mb-12 space-y-3">
            <h2 className="max-w-[12ch] text-3xl font-bold font-heading leading-[1.15] tracking-tight sm:max-w-[12ch] md:text-4xl">
              How hours{" "}
              <span
                style={{
                  background:
                    "linear-gradient(135deg, var(--color-brand-blue), var(--color-brand-green))",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                work
              </span>
            </h2>
            <p className="max-w-2xl text-sm font-medium text-gray-600 md:text-base">
              Simple, transparent, and fair. Every hour tracked and reported.
            </p>
          </div>
        </Reveal>

        <div className="mb-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {features.map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.08, duration: 0.5 }}
                viewport={{ once: true }}
                className="group relative rounded-xl border border-[var(--color-border-card)] bg-white p-6 transition-all duration-300 hover:shadow-md sm:p-7"
              >
                <div
                  className="absolute left-0 right-0 top-0 h-1 rounded-t-xl transition-all duration-300"
                  style={{ background: feature.accent }}
                />

                <div
                  className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg transition-all duration-300 group-hover:scale-110"
                  style={{
                    background: `color-mix(in srgb, ${feature.accent} 10%, transparent)`,
                  }}
                >
                  <Icon className="h-6 w-6" style={{ color: feature.accent }} />
                </div>

                <h3 className="mb-2 text-lg font-bold font-heading tracking-tight text-gray-900">
                  {feature.title}
                </h3>

                <p className="text-sm font-medium leading-relaxed text-gray-600">
                  {feature.desc}
                </p>
              </motion.div>
            );
          })}
        </div>

        <Reveal delay={0.3}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative rounded-2xl border p-6 sm:p-8 md:p-10"
            style={{
              background:
                "linear-gradient(135deg, rgba(42,171,215,0.06), rgba(36,181,116,0.06))",
              borderColor: "rgba(42,171,215,0.15)",
            }}
          >
            <div
              className="absolute left-0 right-0 top-0 h-1 rounded-t-2xl"
              style={{
                background:
                  "linear-gradient(90deg, var(--color-brand-blue), var(--color-brand-green))",
              }}
            />

            <div className="relative z-10">
              <h3 className="mb-3 text-2xl font-bold font-heading md:text-3xl">
                Need a 0-to-1 MVP instead?
              </h3>
              <p className="mb-6 max-w-2xl text-sm font-medium text-gray-600 md:text-base">
                Fixed scope · Fixed price · ~30 day delivery. Design + Dev + QA
                + Deploy — all in..
              </p>

              <div className="flex flex-col items-start gap-6 sm:flex-row sm:items-center">
                <div>
                  <p className="mb-1 text-[10px] font-black uppercase tracking-widest text-gray-500">
                    Typically starting at
                  </p>
                  <p
                    className="text-3xl font-black font-heading"
                    style={{
                      background:
                        "linear-gradient(135deg, var(--color-brand-blue), var(--color-brand-green))",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                  >
                    $8k–$15k
                  </p>
                </div>

                <motion.a
                  href="https://calendly.com/techrabbit/meeting"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="group/btn flex w-full items-center justify-center gap-2 rounded-lg px-7 py-3 text-xs font-black uppercase tracking-widest text-white transition-all hover:shadow-lg sm:w-auto"
                  style={{
                    background:
                      "linear-gradient(135deg, var(--color-brand-blue), var(--color-brand-green))",
                  }}
                >
                  Tell us your idea
                  <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover/btn:translate-x-0.5" />
                </motion.a>
              </div>
            </div>
          </motion.div>
        </Reveal>
      </div>
    </section>
  );
}
