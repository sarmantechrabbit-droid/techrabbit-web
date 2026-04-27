import { motion } from "framer-motion";
import { Check, Calendar, ArrowRight, Zap } from "lucide-react";
import Reveal from "../Reveal";

const steps = [
  {
    title: "Book a call",
    desc: "Pick a time that works for you — 15 or 30 minutes.",
  },
  {
    title: "Quick discovery",
    desc: "We understand your project, goals, and timeline.",
  },
  {
    title: "Quote in 48 hrs",
    desc: "Receive a clear scope + fixed price — no surprises.",
  },
  { title: "Start in 5 days", desc: "Team onboards, NDA signed, sprint planning begins." },
];

const benefits = [
  "No commitment needed",
  "Fixed price quote in 48 hours",
  "NDA signed before we start",
  "Same team from day 1 to launch",
];

export default function PricingCTA() {
  return (
    <section className="relative overflow-hidden bg-[var(--color-bg-page)] px-4 pb-8 sm:px-6 md:px-8 lg:px-12">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute right-[-20%] top-0 h-96 w-96 rounded-full blur-3xl sm:right-[-10%] md:right-0"
          style={{
            background:
              "radial-gradient(circle, var(--color-brand-blue), transparent)",
            opacity: 0.1,
          }}
        />
        <div
          className="absolute bottom-0 left-[-20%] h-96 w-96 rounded-full blur-3xl sm:left-[-10%] md:left-0"
          style={{
            background:
              "radial-gradient(circle, var(--color-brand-green), transparent)",
            opacity: 0.1,
          }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-3xl"
          style={{
            background:
              "linear-gradient(135deg, rgba(42,171,215,0.12), rgba(36,181,116,0.12))",
            border: "1.5px solid rgba(42,171,215,0.2)",
            backdropFilter: "blur(10px)",
          }}
        >
          <div
            className="absolute left-0 right-0 top-0 h-1.5"
            style={{
              background:
                "linear-gradient(90deg, var(--color-brand-blue), var(--color-brand-green))",
            }}
          />

          <div className="grid grid-cols-1 items-start gap-10 p-6 sm:p-8 md:p-10 lg:grid-cols-2 lg:gap-12 lg:p-12">
            <Reveal>
              <div>
                <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/60 bg-white/50 px-4 py-1.5 text-[10px] font-black uppercase tracking-widest backdrop-blur-md">
                  <Zap
                    className="h-3.5 w-3.5"
                    style={{ color: "var(--color-brand-green)" }}
                  />
                 Get started today

                </div>

                <h2 className="mb-6 max-w-[12ch] text-4xl font-bold font-heading leading-[1.15] tracking-tight md:text-5xl">
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
                   15-min quick call

                  </span>
                </h2>

                <p className="mb-8 max-w-lg text-sm font-medium text-gray-600 md:text-base">
                  No pitch decks. No long intros. Just a quick chat — we'll understand your project and tell you exactly how we can help. Quote in 48 hours.


                </p>

                <div className="mb-10 space-y-3">
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
                        className="flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full"
                        style={{
                          background:
                            "linear-gradient(135deg, var(--color-brand-blue), var(--color-brand-green))",
                        }}
                      >
                        <Check className="h-3 w-3 text-white" />
                      </div>
                      <span className="text-sm font-semibold text-gray-900">
                        {benefit}
                      </span>
                    </motion.div>
                  ))}
                </div>

                <div className="flex flex-col gap-4 sm:flex-row">
                  <motion.a
                    href="https://calendly.com/techrabbit/meeting"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="group/btn flex w-full items-center justify-center gap-2 rounded-xl px-6 py-3.5 text-xs font-black uppercase tracking-widest text-white transition-all hover:shadow-lg sm:w-auto sm:px-8"
                    style={{
                      background:
                        "linear-gradient(135deg, var(--color-brand-blue), var(--color-brand-green))",
                    }}
                  >
                    <Calendar className="h-4 w-4" />
                    Book a Call
                    <ArrowRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                  </motion.a>

                  <button className="w-full rounded-xl border-2 border-gray-300 px-6 py-3.5 text-xs font-black uppercase tracking-widest text-gray-900 transition-all hover:border-gray-900 hover:bg-gray-50 sm:w-auto sm:px-8">
                    hello@techrabbit.io
                  </button>
                </div>
              </div>
            </Reveal>

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
                      {idx !== steps.length - 1 && (
                        <div className="absolute left-[15px] top-12 h-12 w-0.5 bg-gradient-to-b from-gray-300 to-transparent" />
                      )}

                      <div
                        className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full text-sm font-black text-white"
                        style={{
                          background:
                            idx % 2 === 0
                              ? "var(--color-brand-blue)"
                              : "var(--color-brand-green)",
                        }}
                      >
                        {idx + 1}
                      </div>

                      <div className="pt-1">
                        <h4 className="mb-1 text-base font-bold font-heading text-gray-900">
                          {step.title}
                        </h4>
                        <p className="text-sm font-medium text-gray-600">
                          {step.desc}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.5 }}
                  viewport={{ once: true }}
                  className="mt-12 border-t border-gray-300 pt-8"
                >
                  <p className="mb-2 text-[10px] font-black uppercase tracking-widest text-gray-500">
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
