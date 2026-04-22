import { motion } from "framer-motion";
import { useState } from "react";
import Reveal from "./Reveal";
import {
  Calendar,
  Code2,
  Rocket,
  LineChart,
  ArrowRight,
  Zap,
  CheckCircle2,
} from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Book a free call",
    icon: Calendar,
    description:
      "30 min. Scope your idea, get a fixed price quote in 48 hours. No commitment.",
    stat: { value: "48h", label: "To roadmap" },
    accentVar: "--color-brand-blue",
    color: "#2aabD7",
  },
  {
    number: "02",
    title: "We design + build",
    icon: Code2,
    description:
      "Figma first. Dev. QA. AI features. Weekly Loom updates. Full visibility.",
    stat: { value: "Daily", label: "Code shipped" },
    accentVar: "--color-brand-green",
    color: "#24B574",
  },
  {
    number: "03",
    title: "You launch + ship",
    icon: Rocket,
    description:
      "We deploy, test live, hand over. NDA signed on day 1. You own everything.",
    stat: { value: "100%", label: "IP ownership" },
    accentVar: "--color-brand-blue",
    color: "#2aabD7",
  },
  {
    number: "04",
    title: "Keep growing",
    icon: LineChart,
    description:
      "Subscribe monthly. Same team. They know your codebase. Cancel anytime.",
    stat: { value: "30d", label: "Cancel notice" },
    accentVar: "--color-brand-green",
    color: "#24B574",
  },
];

export default function 
() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section className="relative py-16 px-4 sm:px-6 md:px-12 bg-[var(--color-bg-page)] overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle, var(--color-grid-dot) 1px, transparent 1px)",
            backgroundSize: "32px 32px",
            opacity: 0.2,
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
      <Reveal className="mb-4">
  <div className="grid lg:grid-cols-2 gap-12 items-center">
    
    {/* LEFT SIDE CONTENT */}
    <div className="max-w-xl">
      <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[var(--color-border-brand-soft)] bg-[var(--color-bg-brand-tint)] text-[var(--color-brand-blue)] text-[10px] font-black tracking-widest uppercase mb-6">
        <Zap className="w-3.5 h-3.5" />
        How We Work
      </div>

      <h2 className="text-4xl sm:text-5xl md:text-6xl font-black font-heading tracking-tight text-[var(--color-text-primary)] leading-[1.1] mb-6">
        Four steps to
        <br />
        <span
          className="bg-clip-text text-transparent"
          style={{ backgroundImage: "var(--gradient-brand)" }}
        >
          your live product
        </span>
      </h2>

      <p className="text-lg text-[var(--color-text-body)] leading-relaxed">
        A proven process designed for speed, clarity, and real results.
        From concept to launch in just 30 days.
      </p>
    </div>

    {/* RIGHT SIDE (IMAGE / VIDEO / STEPS UI) */}
    <div className="w-full h-full">
      {/* Add your image / video / step preview here */}
    </div>

  </div>
</Reveal>

        {/* Timeline */}
        <div className="relative">
          {/* Steps grid - 4 columns in one row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step, idx) => {
              const Icon = step.icon;

              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1, duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  {/* Card */}
                  <motion.div
                    onClick={() => setActiveStep(idx)}
                    className="cursor-pointer group h-full"
                    whileHover={{ y: -8 }}
                  >
                    <div
                      className="relative rounded-2xl border overflow-hidden transition-all duration-300 p-6 h-full flex flex-col"
                      style={{
                        background:
                          activeStep === idx
                            ? "white"
                            : "rgba(255, 255, 255, 0.6)",
                        borderColor:
                          activeStep === idx
                            ? step.color
                            : "rgba(255, 255, 255, 0.4)",
                        boxShadow:
                          activeStep === idx
                            ? `0 20px 60px -12px ${step.color}30, inset 0 1px 0 rgba(255,255,255,0.8)`
                            : "0 4px 16px rgba(0,0,0,0.05), inset 0 1px 0 rgba(255,255,255,0.5)",
                      }}
                    >
                      {/* Top accent line */}
                      <div
                        className="absolute top-0 left-0 right-0 h-1"
                        style={{
                          background: step.color,
                          opacity: activeStep === idx ? 1 : 0.3,
                        }}
                      />

                      {/* Step number circle */}
                      <motion.div
                        className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 font-black font-heading text-lg text-white"
                        style={{
                          background: step.color,
                        }}
                        whileHover={{ scale: 1.1, rotate: 5 }}
                      >
                        {step.number}
                      </motion.div>

                      {/* Title */}
                      <h3 className="text-lg font-black font-heading text-[var(--color-text-primary)] mb-2 group-hover:translate-x-1 transition-transform">
                        {step.title}
                      </h3>

                      {/* Description */}
                      <p className="text-sm text-[var(--color-text-body)] leading-relaxed mb-4 flex-grow">
                        {step.description}
                      </p>

                      {/* Stat badge */}
                      <motion.div
                        className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg mt-auto"
                        style={{
                          background: `${step.color}15`,
                        }}
                      >
                        <div
                          className="w-2 h-2 rounded-full"
                          style={{ background: step.color }}
                        />
                        <span
                          className="text-xs font-black"
                          style={{ color: step.color }}
                        >
                          {step.stat.value}
                        </span>
                        <span className="text-[10px] font-bold text-[var(--color-text-muted)]">
                          {step.stat.label}
                        </span>
                      </motion.div>
                    </div>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Bottom CTA section */}
        {/* <Reveal>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative rounded-3xl border overflow-hidden p-12 text-center"
            style={{
              background: "white",
              borderColor: "var(--color-border-card)",
              boxShadow: "0 20px 60px -12px rgba(0,0,0,0.1)",
            }}
          >
            <div
              className="absolute top-0 left-0 right-0 h-1"
              style={{ backgroundImage: "var(--gradient-brand)" }}
            />

            <div className="absolute -top-20 -right-20 w-40 h-40 rounded-full opacity-5" style={{ background: "var(--color-brand-blue)" }} />
            <div className="absolute -bottom-20 -left-20 w-40 h-40 rounded-full opacity-5" style={{ background: "var(--color-brand-green)" }} />

            <div className="relative z-10">
              <h3 className="text-3xl font-black font-heading text-[var(--color-text-primary)] mb-4">
                Ready to get started?
              </h3>
              <p className="text-lg text-[var(--color-text-body)] mb-8 max-w-2xl mx-auto">
                Book your free 30-minute call today. We'll scope your project,
                provide a fixed price quote, and answer all your questions.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href="/contact"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-black text-base text-white transition-all duration-300 hover:scale-105"
                  style={{
                    background: "var(--gradient-brand)",
                    boxShadow: "0 16px 40px -8px rgba(42,171,215,0.3)",
                  }}
                >
                  Book a call
                  <ArrowRight className="w-5 h-5" />
                </a>
                <a
                  href="/pricing"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-black text-base text-[var(--color-text-primary)] border border-[var(--color-border-card)] hover:border-[var(--color-brand-blue)]/50 transition-all duration-300"
                >
                  View pricing
                  <ArrowRight className="w-5 h-5" />
                </a>
              </div>

              <div className="mt-12 pt-8 border-t border-[var(--color-border-light)] flex flex-col sm:flex-row items-center justify-center gap-8">
                {[
                  { icon: CheckCircle2, text: "No hidden fees" },
                  { icon: CheckCircle2, text: "Fixed pricing" },
                  { icon: CheckCircle2, text: "30-day guarantee" },
                ].map((item, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-2"
                  >
                    <item.icon className="w-5 h-5 text-[var(--color-brand-green)]" />
                    <span className="font-bold text-[var(--color-text-body)]">
                      {item.text}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </Reveal> */}
      </div>
    </section>
  );
}
