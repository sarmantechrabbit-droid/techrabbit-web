import { motion } from "framer-motion";
import { useRef, useState } from "react";
import Reveal from "./Reveal";
import {
  Calendar,
  Code2,
  Rocket,
  LineChart,
  ChevronRight,
  Play,
} from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Discovery & Strategy",
    icon: Calendar,
    description:
      "Scope your idea, identify core AI opportunities, and get a fixed-price roadmap in 48 hours.",
    stat: { value: "48h", label: "To roadmap" },
    accentVar: "--color-brand-blue",
    bgVar: "--color-bg-brand-tint",
  },
  {
    number: "02",
    title: "High-Fidelity Build",
    icon: Code2,
    description:
      "Figma first. Then we ship code every single day. Weekly Loom updates keep you in the loop.",
    stat: { value: "Daily", label: "Code shipped" },
    accentVar: "--color-brand-green",
    bgVar: "--color-bg-success-tint",
  },
  {
    number: "03",
    title: "QA & Deployment",
    icon: Rocket,
    description:
      "Rigorous testing and automated deployment. You own 100% of the IP and code from day 1.",
    stat: { value: "100%", label: "IP ownership" },
    accentVar: "--color-brand-blue",
    bgVar: "--color-bg-brand-tint",
  },
  {
    number: "04",
    title: "Scale & Support",
    icon: LineChart,
    description:
      "Switch to subscription mode for ongoing features. Same team, total focus. Cancel in 30 days.",
    stat: { value: "30d", label: "Cancel notice" },
    accentVar: "--color-brand-green",
    bgVar: "--color-bg-success-tint",
  },
];

function StepCard({ step, index, isActive, onClick }) {
  const Icon = step.icon;
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.08, duration: 0.5 }}
      viewport={{ once: true }}
      onClick={() => onClick(index)}
      className="cursor-pointer"
    >
      <div
        className="relative rounded-2xl border transition-all duration-300 overflow-hidden"
        style={{
          background: isActive ? `var(${step.bgVar})` : "white",
          borderColor: isActive
            ? `var(${step.accentVar})`
            : "var(--color-border-card)",
          boxShadow: isActive
            ? `0 8px 32px -8px color-mix(in srgb, var(${step.accentVar}) 22%, transparent)`
            : "0 2px 8px rgba(0,0,0,0.04)",
        }}
      >
        {/* Left accent bar */}
        <div
          className="absolute left-0 top-4 bottom-4 w-[3px] rounded-full transition-all duration-300"
          style={{
            background: isActive ? `var(${step.accentVar})` : "transparent",
          }}
        />

        <div className="p-5 pl-7 flex items-center gap-4">
          {/* Icon */}
          <div
            className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0 transition-all duration-300"
            style={{
              background: isActive
                ? `color-mix(in srgb, var(${step.accentVar}) 12%, transparent)`
                : "var(--color-bg-card)",
            }}
          >
            <Icon
              className="w-5 h-5 transition-colors duration-300"
              style={{
                color: isActive
                  ? `var(${step.accentVar})`
                  : "var(--color-text-disabled)",
              }}
            />
          </div>

          {/* Text */}
          <div className="flex-1 min-w-0">
            <span
              className="text-[9px] font-black uppercase tracking-widest transition-colors duration-300"
              style={{
                color: isActive
                  ? `var(${step.accentVar})`
                  : "var(--color-text-faint)",
              }}
            >
              Step {step.number}
            </span>
            <h3
              className="text-base font-black font-heading tracking-tight transition-colors duration-300"
              style={{
                color: isActive
                  ? "var(--color-text-primary)"
                  : "var(--color-text-secondary)",
              }}
            >
              {step.title}
            </h3>
            {isActive && (
              <motion.p
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="text-sm text-[var(--color-text-body)] leading-relaxed mt-1.5"
              >
                {step.description}
              </motion.p>
            )}
          </div>

          {/* Stat */}
          <div className="shrink-0 text-right">
            <div
              className="text-lg font-black font-heading transition-colors duration-300"
              style={{
                color: isActive
                  ? `var(${step.accentVar})`
                  : "var(--color-text-faint)",
              }}
            >
              {step.stat.value}
            </div>
            <div className="text-[9px] font-bold uppercase tracking-widest text-[var(--color-text-faint)]">
              {step.stat.label}
            </div>
          </div>

          <ChevronRight
            className="w-4 h-4 shrink-0 transition-all duration-300"
            style={{
              color: isActive
                ? `var(${step.accentVar})`
                : "var(--color-text-faint)",
              transform: isActive ? "rotate(90deg)" : "rotate(0deg)",
            }}
          />
        </div>
      </div>
    </motion.div>
  );
}

export default function ProcessSection() {
  const [activeStep, setActiveStep] = useState(0);
  const videoRef = useRef(null);

  return (
    <section className="relative py-16 px-4 sm:px-6 md:px-12 bg-[var(--color-bg-page)] overflow-hidden">
      {/* Dot grid background */}
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
        className="absolute top-0 left-0 right-0 h-32 pointer-events-none"
        style={{
          background:
            "linear-gradient(to bottom, var(--color-bg-page), transparent)",
        }}
      />
      <div
        className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
        style={{
          background:
            "linear-gradient(to top, var(--color-bg-page), transparent)",
        }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <Reveal className="lg:mb-16 max-sm:mb-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[var(--color-border-brand-soft)] bg-[var(--color-bg-brand-tint)] text-[var(--color-brand-blue)] text-[10px] font-black tracking-widest uppercase mb-5">
                How We Work
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl font-black font-heading tracking-tight text-[var(--color-text-primary)] leading-[0.95]">
                Simple process.
                <br />
                <span
                  className="bg-clip-text text-transparent"
                  style={{ backgroundImage: "var(--gradient-brand)" }}
                >
                  Serious execution.
                </span>
              </h2>
            </div>
            <p className="text-[var(--color-text-body)] text-base max-w-xs leading-relaxed md:text-right">
              From first call to live product — a proven 4-step system built for
              speed and clarity.
            </p>
          </div>
        </Reveal>

        {/* Body */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12 items-start">
          {/* LEFT — Step cards */}
          <div className="flex flex-col gap-3 lg:h-[580px]">
            {steps.map((step, idx) => (
              <StepCard
                key={step.number}
                step={step}
                index={idx}
                isActive={activeStep === idx}
                onClick={setActiveStep}
              />
            ))}

            {/* Mini stats */}
            <Reveal delay={0.3}>
              <div className="grid grid-cols-3 gap-3 mt-auto pt-2">
                {[
                  { value: "30d", label: "MVP Launch" },
                  { value: "100%", label: "In-house" },
                  { value: "4h", label: "Response" },
                ].map((s) => (
                  <div
                    key={s.label}
                    className="rounded-2xl border border-[var(--color-border-card)] bg-white p-4 text-center"
                    style={{ boxShadow: "0 2px 8px rgba(0,0,0,0.04)" }}
                  >
                    <div
                      className="text-xl font-black font-heading mb-0.5 bg-clip-text text-transparent"
                      style={{ backgroundImage: "var(--gradient-brand)" }}
                    >
                      {s.value}
                    </div>
                    <div className="text-[9px] font-black uppercase tracking-widest text-[var(--color-text-faint)]">
                      {s.label}
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>

          {/* RIGHT — Sticky video frame */}
          <div className="lg:sticky lg:top-28 lg:h-[580px]">
            <Reveal transition={{ duration: 0.7 }}>
              <div className="relative group">
                {/* Outer decorative border ring */}
                <div
                  className="absolute -inset-3 rounded-[2.8rem] pointer-events-none transition-all duration-500"
                  style={{
                    background: "var(--gradient-brand)",
                    opacity: 0.08,
                    filter: "blur(1px)",
                  }}
                />

                {/* Video card */}
                <div
                  className="relative rounded-[2.2rem] overflow-hidden border"
                  style={{
                    borderColor: "var(--color-border-card)",
                    boxShadow: "0 24px 64px -16px rgba(0,0,0,0.12)",
                  }}
                >
                  {/* Gradient top strip */}
                  <div
                    className="absolute top-0 left-0 right-0 h-1 z-20"
                    style={{ backgroundImage: "var(--gradient-brand)" }}
                  />

                  {/* Video */}
                  <div className="relative bg-[var(--color-bg-card)] overflow-hidden h-[280px] sm:h-[420px] lg:h-[520px]">
                    <video
                      ref={videoRef}
                      src="/videos/process.mp4"
                      autoPlay
                      muted
                      loop
                      playsInline
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                    />

                    {/* Subtle bottom gradient overlay */}
                    <div
                      className="absolute bottom-0 left-0 right-0 h-40 pointer-events-none z-10"
                      style={{
                        background:
                          "linear-gradient(to top, rgba(255,255,255,0.92), transparent)",
                      }}
                    />

                    {/* Bottom label overlay */}
                    <div className="absolute bottom-0 left-0 right-0 z-20 p-7">
                      <div className="flex items-end justify-between">
                        <div>
                          <p
                            className="text-[9px] font-black uppercase tracking-widest mb-1"
                            style={{
                              color: `var(${steps[activeStep].accentVar})`,
                            }}
                          >
                            Currently viewing
                          </p>
                          <h4 className="text-lg font-black font-heading text-[var(--color-text-primary)] tracking-tight">
                            {steps[activeStep].title}
                          </h4>
                        </div>

                        {/* Step dots */}
                        <div className="flex gap-1.5 items-center pb-1">
                          {steps.map((s, i) => (
                            <button
                              key={i}
                              onClick={() => setActiveStep(i)}
                              className="rounded-full transition-all duration-300"
                              style={{
                                width: activeStep === i ? 20 : 7,
                                height: 7,
                                background:
                                  activeStep === i
                                    ? `var(${steps[activeStep].accentVar})`
                                    : "var(--color-border-subtle)",
                              }}
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating step badge */}
                <motion.div
                  key={activeStep}
                  initial={{ opacity: 0, scale: 0.85, y: 8 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ duration: 0.35 }}
                  className="hidden md:block absolute -top-3 -right-3 sm:-top-4 sm:-right-4 z-30 px-3 py-1.5 sm:px-4 sm:py-2 rounded-xl sm:rounded-2xl border shadow-lg"
                  style={{
                    background: "white",
                    borderColor: `color-mix(in srgb, var(${steps[activeStep].accentVar}) 25%, transparent)`,
                    boxShadow: `0 8px 24px -4px color-mix(in srgb, var(${steps[activeStep].accentVar}) 20%, transparent)`,
                  }}
                >
                  <div
                    className="text-xl font-black font-heading leading-none"
                    style={{ color: `var(${steps[activeStep].accentVar})` }}
                  >
                    {steps[activeStep].stat.value}
                  </div>
                  <div className="text-[9px] font-black uppercase tracking-widest text-[var(--color-text-faint)]">
                    {steps[activeStep].stat.label}
                  </div>
                </motion.div>

                {/* Play indicator pill */}
                <div
                  className="hidden md:flex absolute -bottom-4 left-1/2 -translate-x-1/2 z-30 items-center gap-2 px-5 py-2.5 rounded-full border shadow-md"
                  style={{
                    background: "white",
                    borderColor: "var(--color-border-card)",
                    boxShadow: "0 4px 16px rgba(0,0,0,0.08)",
                  }}
                >
                  <div
                    className="w-5 h-5 rounded-full flex items-center justify-center"
                    style={{ backgroundImage: "var(--gradient-brand)" }}
                  >
                    <Play className="w-2.5 h-2.5 text-white fill-white" />
                  </div>
                  <span className="text-[10px] font-black uppercase tracking-widest text-[var(--color-text-muted)]">
                    Our workflow in action
                  </span>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
