import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, ArrowRight, Zap } from "lucide-react";
import Reveal from "../Reveal";
import { Link } from "react-router-dom";

const paths = [
  {
    type: "I have an idea",
    title: "Idea to live product in 30 days",
    desc: "You have a product to build. We take it from concept to live — design, code, QA, and deployment. Fixed price. No surprises.",
    features: [
      {
        t: "Figma UI/UX design",
        d: "Every screen designed before a line of code is written",
      },
      {
        t: "Full-stack development",
        d: "React + Node.js + PostgreSQL — production-ready, not prototype",
      },
      {
        t: "AI features if needed",
        d: "Calling agents, scoring, chatbots — built in, not bolted on",
      },
      { t: "QA & Testing", d: "Full test cycle. No 'it works on my machine'" },
      {
        t: "Deployment + guide",
        d: "We ship it. You own it — code, domain, IP, everything",
      },
    ],
    pricing: "$8,000 – $15,000",
    cta: "Tell us your idea",
    accent: "--color-brand-blue",
    featured: false,
  },
  {
    type: "My product is live",
    title: "Your product team, on subscription",
    desc: "Product is live. Now you need features, fixes, and someone who actually knows your codebase. Same team every month. Cancel with 30 days notice.",
    features: [
      {
        t: "Same team every sprint",
        d: "No rotation. No re-explaining. They know your codebase from day 1.",
      },
      {
        t: "Figma + Dev + QA in one",
        d: "Every skill you need. No separate vendors. No handoffs.",
      },
      {
        t: "AI features in every sprint",
        d: "Claude, GPT, custom logic — in every sprint, not a separate engagement.",
      },
      {
        t: "Clockify reports monthly",
        d: "Every hour tracked and reported. You see exactly what was built.",
      },
      {
        t: "Unused hours rollover",
        d: "Don't lose what you paid for. Hours carry to next month.",
      },
    ],
    pricingOptions: [
      { name: "Starter", price: "$1,800", hours: "40 hrs/mo" },
      { name: "Growth", price: "$3,200", hours: "80 hrs/mo", featured: true },
      { name: "Scale", price: "$5,500", hours: "160 hrs/mo" },
    ],
    cta: "See full pricing",
    accent: "--color-brand-green",
    featured: true,
  },
];

export default function ServicesPaths() {
  const [selectedPlan, setSelectedPlan] = useState(1);

  return (
    <section className="pt-12 px-6 md:px-12 bg-[var(--color-bg-page)] overflow-hidden relative pb-8">
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
        <Reveal className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[var(--color-border-brand-soft)] bg-[var(--color-bg-brand-tint)] text-[var(--color-brand-blue)] text-[10px] font-black tracking-widest uppercase mb-6">
            <Zap className="w-3.5 h-3.5" />
            Two clear paths
          </div>
          <h2 className="text-4xl md:text-5xl font-bold font-heading tracking-tight text-[var(--color-text-primary)] leading-[1.2] mb-4">
            Where are you right now?
            <br />
            <span className="bg-clip-text text-transparent" style={{ backgroundImage: "var(--gradient-brand)" }}>
              Let's pick a path.
            </span>
          </h2>
          <p className="text-[var(--color-text-body)] text-sm max-w-2xl mx-auto leading-relaxed font-medium">
            Two clear paths. Both with visible pricing.
          </p>
        </Reveal>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-12">
          {paths.map((path, idx) => (
            <Reveal key={path.type} delay={idx * 0.1}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                className="relative rounded-3xl border overflow-hidden h-full flex flex-col transition-all duration-300"
                style={{
                  background: path.featured
                    ? `color-mix(in srgb, var(${path.accent}) 4%, white)`
                    : "white",
                  borderColor: path.featured
                    ? `var(${path.accent})`
                    : "var(--color-border-card)",
                  boxShadow: path.featured
                    ? `0 20px 60px -12px color-mix(in srgb, var(${path.accent}) 30%, transparent)`
                    : "0 2px 12px rgba(0,0,0,0.04)",
                }}
              >
                {/* Top accent line */}
                <div
                  className="h-1 w-full"
                  style={{ background: `var(${path.accent})` }}
                />

                {/* Content */}
                <div className="p-8 md:p-10 flex flex-col h-full">
                  {/* Badge */}
                  <div
                    className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-[10px] font-black tracking-widest uppercase mb-6 w-fit"
                    style={{
                      background: `color-mix(in srgb, var(${path.accent}) 10%, transparent)`,
                      color: `var(${path.accent})`,
                    }}
                  >
                    {path.type}
                  </div>

                  {/* Title */}
                  <h3 className="text-xl md:text-2xl font-bold font-heading text-[var(--color-text-primary)] tracking-tight mb-3">
                    {path.title}
                  </h3>

                  {/* Description */}
                  <p className="text-[var(--color-text-body)] text-sm leading-relaxed mb-8">
                    {path.desc}
                  </p>

                  {/* Features */}
                  <div className="space-y-4 mb-8 flex-1">
                    {path.features.map((feature, fidx) => (
                      <motion.div
                        key={feature.t}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: fidx * 0.05 }}
                        viewport={{ once: true }}
                        className="flex gap-3"
                      >
                        <div
                          className="w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5"
                          style={{
                            background: `color-mix(in srgb, var(${path.accent}) 12%, transparent)`,
                          }}
                        >
                          <CheckCircle2
                            className="w-4 h-4"
                            style={{ color: `var(${path.accent})` }}
                          />
                        </div>
                        <div>
                          <p className="text-sm font-bold text-[var(--color-text-primary)]">
                            {feature.t}
                          </p>
                          <p className="text-xs text-[var(--color-text-body)] leading-relaxed mt-0.5">
                            {feature.d}
                          </p>
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  {/* Divider */}
                  <div className="h-px bg-[var(--color-border-light)] mb-8" />

                  {/* Pricing Section */}
                  {path.pricingOptions ? (
                    <div className="mb-8">
                      <p className="text-[10px] font-black uppercase tracking-widest text-[var(--color-text-faint)] mb-4">
                        Choose your plan
                      </p>
                      <div className="grid grid-cols-3 gap-3">
                        {path.pricingOptions.map((opt, pidx) => (
                          <motion.button
                            key={opt.name}
                            onClick={() => setSelectedPlan(pidx)}
                            className="relative rounded-xl border p-4 transition-all duration-300 text-center"
                            style={{
                              background: selectedPlan === pidx
                                ? `color-mix(in srgb, var(${path.accent}) 10%, transparent)`
                                : "white",
                              borderColor: selectedPlan === pidx
                                ? `var(${path.accent})`
                                : "var(--color-border-card)",
                            }}
                          >
                            {opt.featured && (
                              <div
                                className="absolute -top-2 left-1/2 -translate-x-1/2 px-2 py-0.5 rounded-full text-[8px] font-black uppercase tracking-widest text-white"
                                style={{ background: `var(${path.accent})` }}
                              >
                                Popular
                              </div>
                            )}
                            <p className="text-[9px] font-black uppercase tracking-widest text-[var(--color-text-faint)] mb-2">
                              {opt.name}
                            </p>
                            <p className="text-xl font-black font-heading text-[var(--color-text-primary)] mb-1">
                              {opt.price}
                            </p>
                            <p className="text-[8px] font-bold text-[var(--color-text-body)]">
                              {opt.hours}
                            </p>
                          </motion.button>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <div className="mb-8">
                      <p className="text-[10px] font-black uppercase tracking-widest text-[var(--color-text-faint)] mb-2">
                        Fixed price
                      </p>
                      <p className="text-3xl font-black font-heading text-[var(--color-text-primary)]">
                        {path.pricing}
                      </p>
                    </div>
                  )}

                  {/* CTA Button */}
                  <Link
                    to="/contact"
                    className="group flex items-center justify-center gap-2 w-full py-3.5 rounded-xl border transition-all duration-300 font-black text-sm"
                    style={{
                      background: `var(${path.accent})`,
                      borderColor: `var(${path.accent})`,
                      color: "white",
                    }}
                  >
                    {path.cta}
                    <motion.div
                      className="group-hover:translate-x-1 transition-transform"
                    >
                      <ArrowRight className="w-4 h-4" />
                    </motion.div>
                  </Link>
                </div>
              </motion.div>
            </Reveal>
          ))}
        </div>

        {/* Bottom CTA */}
        <Reveal>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative rounded-3xl border overflow-hidden p-8 md:p-12 text-center"
            style={{
              background: "white",
              borderColor: "var(--color-border-card)",
              boxShadow: "0 2px 12px rgba(0,0,0,0.04)",
            }}
          >
            {/* Top gradient accent */}
            <div
              className="absolute top-0 inset-x-0 h-1"
              style={{ background: "var(--gradient-brand)" }}
            />

            <h3 className="text-2xl md:text-3xl font-black font-heading text-[var(--color-text-primary)] mb-3 tracking-tight">
              Not sure which path?
            </h3>
            <p className="text-[var(--color-text-body)] text-base max-w-2xl mx-auto mb-6 leading-relaxed">
              Let's talk about your project. We'll help you figure out the best approach and pricing for your needs.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-white font-black text-sm hover:scale-[1.03] transition-all duration-300"
              style={{
                background: "var(--gradient-brand)",
                boxShadow: "0 20px 40px var(--color-brand-glow)",
              }}
            >
              Schedule a call
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </Reveal>
      </div>
    </section>
  );
}
