import { motion } from "framer-motion";
import Reveal from "../Reveal";
import { Check, ArrowRight, Zap } from "lucide-react";
import { Link } from "react-router-dom";

const tiers = [
  {
    name: "Launch — Lean MVP",
    price: "$8,500",
    period: "– $15,000",
    desc: "A focused build with core features. Target feedback first, scale after.",
    features: [
      "4-7 core screens",
      "Interactive Figma",
      "Search/Filter logic",
      "Mobile-responsive",
      "30-day delivery",
    ],
    accent: "--color-brand-blue",
    cta: "Get started",
  },
  {
    name: "Launch — Full App",
    price: "$15,000",
    period: "– $25,000",
    desc: "Complete product with advanced logic. Ready for public and scaling.",
    features: [
      "Multi-user roles",
      "Full auth & logic",
      "Serverless backend",
      "Advanced AI (LLM)",
      "Web + App Store",
    ],
    accent: "--color-brand-green",
    cta: "Get started",
    recommended: true,
  },
  {
    name: "Grow — Subscription",
    price: "$4,500",
    period: "– $8,000 / month",
    desc: "Scaling an existing product? Fine-tune logic and add monthly features.",
    features: [
      "Figma UI/UX Design",
      "Dedicated Lead Developer",
      "Weekly sprint review",
      "No per-hour billing",
      "Direct Slack Access",
    ],
    accent: "--color-brand-blue",
    cta: "Get started",
  },
];

export default function ServicesPricing() {
  return (
    <section className="py-12 px-6 md:px-12 bg-[var(--color-bg-page)] overflow-hidden relative">
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
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[var(--color-border-brand-soft)] bg-[var(--color-bg-brand-tint)] text-[var(--color-brand-green)] text-[10px] font-black tracking-widest uppercase mb-6">
            <Zap className="w-3.5 h-3.5" />
            Transparent pricing
          </div>
          <h2 className="text-4xl md:text-5xl font-bold font-heading tracking-tight text-[var(--color-text-primary)] leading-[1.2] mb-4">
            What $X gets you.
            <br />
            <span className="bg-clip-text text-transparent" style={{ backgroundImage: "var(--gradient-brand)" }}>
              No surprises.
            </span>
          </h2>
          <p className="text-[var(--color-text-body)] text-sm max-w-2xl mx-auto leading-relaxed font-medium">
            Transparent pricing. Clear deliverables.
          </p>
        </Reveal>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {tiers.map((tier, idx) => (
            <Reveal key={tier.name} delay={idx * 0.1}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                className="relative rounded-3xl border overflow-hidden h-full flex flex-col transition-all duration-300"
                style={{
                  background: tier.recommended
                    ? `color-mix(in srgb, var(${tier.accent}) 4%, white)`
                    : "white",
                  borderColor: tier.recommended
                    ? `var(${tier.accent})`
                    : "var(--color-border-card)",
                  boxShadow: tier.recommended
                    ? `0 20px 60px -12px color-mix(in srgb, var(${tier.accent}) 30%, transparent)`
                    : "0 2px 12px rgba(0,0,0,0.04)",
                }}
              >
                {/* Top accent line */}
                <div
                  className="h-1 w-full"
                  style={{ background: `var(${tier.accent})` }}
                />

                {/* Recommended Badge */}
                {tier.recommended && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full text-white text-[10px] font-black uppercase tracking-widest"
                    style={{
                      background: `var(${tier.accent})`,
                      boxShadow: `0 8px 24px -8px color-mix(in srgb, var(${tier.accent}) 40%, transparent)`,
                    }}
                  >
                    Most Popular
                  </div>
                )}

                {/* Content */}
                <div className="p-8 flex flex-col h-full">
                  {/* Title */}
                  <h3 className="text-xl font-bold font-heading text-[var(--color-text-primary)] tracking-tight mb-2">
                    {tier.name}
                  </h3>

                  {/* Price */}
                  <div className="mb-4">
                    <div className="flex items-baseline gap-1">
                      <span className="text-3xl font-bold font-heading text-[var(--color-text-primary)]">
                        {tier.price}
                      </span>
                      <span className="text-sm text-[var(--color-text-body)]">
                        {tier.period}
                      </span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-[var(--color-text-body)] leading-relaxed mb-8">
                    {tier.desc}
                  </p>

                  {/* Features */}
                  <div className="space-y-3 mb-8 flex-1">
                    {tier.features.map((feature, fidx) => (
                      <motion.div
                        key={feature}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: fidx * 0.05 }}
                        viewport={{ once: true }}
                        className="flex gap-3 items-start"
                      >
                        <div
                          className="w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5"
                          style={{
                            background: `color-mix(in srgb, var(${tier.accent}) 12%, transparent)`,
                          }}
                        >
                          <Check
                            className="w-3 h-3"
                            style={{ color: `var(${tier.accent})` }}
                          />
                        </div>
                        <span className="text-sm text-[var(--color-text-body)]">
                          {feature}
                        </span>
                      </motion.div>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <Link
                    to="/contact"
                    className="group flex items-center justify-center gap-2 w-full py-3 rounded-xl border transition-all duration-300 font-black text-sm"
                    style={{
                      background: `var(${tier.accent})`,
                      borderColor: `var(${tier.accent})`,
                      color: "white",
                    }}
                  >
                    {tier.cta}
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
        <Reveal delay={0.4}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative rounded-3xl border overflow-hidden p-8 md:p-12"
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

            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <h3 className="text-xl font-bold font-heading text-[var(--color-text-primary)] mb-2 tracking-tight">
                  Need a custom quote?
                </h3>
                <p className="text-[var(--color-text-body)] text-sm font-medium">
                  Enterprise projects or complex builds need personalized pricing.
                </p>
              </div>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-white font-black text-sm hover:scale-[1.03] transition-all duration-300 shrink-0"
                style={{
                  background: "var(--gradient-brand)",
                  boxShadow: "0 20px 40px var(--color-brand-glow)",
                }}
              >
                Contact Sales
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>
        </Reveal>
      </div>
    </section>
  );
}
