import { motion } from "framer-motion";
import { Check, Calendar, ArrowRight, Zap } from "lucide-react";
import Reveal from "../Reveal";

const steps = [
  {
    title: "Book a call",
    desc: "Pick a time that works for you. No pressure.",
  },
  {
    title: "Quick discovery",
    desc: "We understand your product and tech stack.",
  },
  {
    title: "Quote in 24 hrs",
    desc: "Receive a transparent setup & sprint quote.",
  },
  { title: "Kickoff in 5 days", desc: "Our team starts building immediately." },
];

const benefits = [
  "No commitment required",
  "Fixed price estimates in 24 hrs",
  "100% In-house team access",
  "Direct CTO consultation",
];

export default function PricingCTA() {
  return (
    <section className="relative pb-8 bg-[var(--color-bg-page)] overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-10 blur-3xl"
          style={{
            background:
              "radial-gradient(circle, var(--color-brand-blue), transparent)",
          }}
        />
        <div
          className="absolute bottom-0 left-0 w-96 h-96 rounded-full opacity-10 blur-3xl"
          style={{
            background:
              "radial-gradient(circle, var(--color-brand-green), transparent)",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="relative rounded-3xl overflow-hidden"
          style={{
            background:
              "linear-gradient(135deg, rgba(42,171,215,0.12), rgba(36,181,116,0.12))",
            border: "1.5px solid rgba(42,171,215,0.2)",
            backdropFilter: "blur(10px)",
          }}
        >
          {/* Top gradient accent */}
          <div
            className="absolute top-0 left-0 right-0 h-1.5"
            style={{
              background:
                "linear-gradient(90deg, var(--color-brand-blue), var(--color-brand-green))",
            }}
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 p-10 md:p-12 items-center">
            {/* LEFT: Content */}
            <Reveal>
              <div>
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/50 backdrop-blur-md border border-white/60 text-[10px] font-black tracking-widest uppercase mb-6">
                  <Zap
                    className="w-3.5 h-3.5"
                    style={{ color: "var(--color-brand-green)" }}
                  />
                  Ready to Start?
                </div>

                <h2 className="text-4xl md:text-5xl font-bold font-heading tracking-tight leading-[1.2] mb-6">
                  Book your free
                  <br />
                  <span
                    style={{
                      background:
                        "linear-gradient(135deg, var(--color-brand-blue), var(--color-brand-green))",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                  >
                    15-min call
                  </span>
                </h2>

                <p className="text-gray-600 text-base font-medium mb-8 max-w-lg">
                  No commitment. No pressure. Just a quick conversation about
                  your product and how we can help.
                </p>

                {/* Benefits List */}
                <div className="space-y-3 mb-10">
                  {benefits.map((benefit, idx) => (
                    <motion.div
                      key={benefit}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.08, duration: 0.5 }}
                      viewport={{ once: true }}
                      className="flex items-center gap-3"
                    >
                      <div
                        className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0"
                        style={{
                          background:
                            "linear-gradient(135deg, var(--color-brand-blue), var(--color-brand-green))",
                        }}
                      >
                        <Check className="w-3 h-3 text-white" />
                      </div>
                      <span className="text-sm font-semibold text-gray-900">
                        {benefit}
                      </span>
                    </motion.div>
                  ))}
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl text-xs font-black uppercase tracking-widest text-white transition-all hover:shadow-lg group/btn"
                    style={{
                      background:
                        "linear-gradient(135deg, var(--color-brand-blue), var(--color-brand-green))",
                    }}
                  >
                    <Calendar className="w-4 h-4" />
                    Book a Call
                    <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                  </motion.button>

                  <button className="px-8 py-3.5 rounded-xl text-xs font-black uppercase tracking-widest text-gray-900 border-2 border-gray-300 transition-all hover:border-gray-900 hover:bg-gray-50">
                    hello@techrabbit.io{" "}
                  </button>
                </div>
              </div>
            </Reveal>

            {/* RIGHT: Steps Timeline */}
            <Reveal delay={0.2}>
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="space-y-8">
                  {steps.map((step, idx) => (
                    <motion.div
                      key={step.title}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: idx * 0.1, duration: 0.5 }}
                      viewport={{ once: true }}
                      className="relative flex gap-5"
                    >
                      {/* Connecting line */}
                      {idx !== steps.length - 1 && (
                        <div className="absolute left-[15px] top-12 w-0.5 h-12 bg-gradient-to-b from-gray-300 to-transparent" />
                      )}

                      {/* Step number circle */}
                      <div
                        className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 font-black text-sm text-white"
                        style={{
                          background:
                            idx % 2 === 0
                              ? "var(--color-brand-blue)"
                              : "var(--color-brand-green)",
                        }}
                      >
                        {idx + 1}
                      </div>

                      {/* Content */}
                      <div className="pt-1">
                        <h4 className="text-base font-bold font-heading text-gray-900 mb-1">
                          {step.title}
                        </h4>
                        <p className="text-sm text-gray-600 font-medium">
                          {step.desc}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Bottom stat */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.5 }}
                  viewport={{ once: true }}
                  className="mt-12 pt-8 border-t border-gray-300"
                >
                  <p className="text-[10px] font-black uppercase tracking-widest text-gray-500 mb-2">
                    Average time to first sprint
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
                    5 Days
                  </p>
                </motion.div>
              </motion.div>
            </Reveal>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
