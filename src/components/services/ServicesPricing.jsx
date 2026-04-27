import { motion } from "framer-motion";
import Reveal from "../Reveal";
import { Check, ArrowRight, Zap } from "lucide-react";
import { Link } from "react-router-dom";

const tiers = [
  {
    name: "Launch — Lean MVP",
    price: "$8,500",
    period: "- $10,000",
    desc: "A focused product with the core feature set. Enough to validate your idea, onboard first users, and raise pre-seed.",
    features: [
      "Up to 4-5 core screens",
      "User auth + basic dashboard",
      "1 core feature fully built",
      "Mobile-responsive web app",
      "Deployed and live in 30 days",
    ],
    accent: "--color-brand-blue",
    cta: "Get started",
  },
  {
    name: "Launch — Full MVP",
    price: "$10,000",
    period: "- $15,000",
    desc: "A complete product. More screens, more features, possibly an AI module. Ready for real users and investor demos.",
    features: [
      "8-12 screens",
      "Full auth + admin panel",
      "1-2 AI features if needed",
      "Payment integration (Stripe)",
      "Deployed with full QA",
    ],
    accent: "--color-brand-green",
    cta: "Get started",
    recommended: true,
  },
  {
    name: "Grow — Subscription",
    price: "$1,800",
    period: "- $5,500 / month",
    desc: "Ongoing product team. The more hours, the more you ship.",
    features: [
      "Figma + Dev + QA + BA + PM",
      "AI features every sprint",
      "Clockify transparency",
      "Hours rollover monthly",
      "Cancel with 30 days notice",
    ],
    accent: "--color-brand-blue",
    cta: "Get started",
  },
];

export default function ServicesPricing() {
  return (
    <section className="relative bg-[var(--color-bg-page)] px-4 py-16 sm:px-6 md:px-8 lg:px-12">
      
      {/* Background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle, var(--color-grid-dot) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
          opacity: 0.5,
        }}
      />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl">

        {/* Header */}
        <Reveal className="mb-10 sm:mb-12">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[var(--color-border-brand-soft)] bg-[var(--color-bg-brand-tint)] px-3 py-1.5 text-[9px] font-black uppercase tracking-[0.28em] text-[var(--color-brand-green)]">
            <Zap className="h-3.5 w-3.5" />
            Honest expectations
          </div>

          <h2 className="mb-4 text-4xl font-bold font-heading tracking-tight">
            What $X gets you —
            <br />
            <span
              className="bg-clip-text text-transparent"
              style={{ backgroundImage: "var(--gradient-brand)" }}
            >
              no vague answers
            </span>
          </h2>

          <p className="max-w-2xl text-sm text-[var(--color-text-body)]">
            Most agencies make you get on a call. We don’t.
          </p>
        </Reveal>

        {/* ✅ FIXED SCROLL CONTAINER */}
        <div
          className="mb-8 flex items-stretch gap-4 overflow-x-auto overflow-y-hidden pb-4 pt-2 snap-x snap-mandatory scrollbar-hide 
          -mx-4 px-4 sm:-mx-6 sm:px-6 md:-mx-8 md:px-8
          lg:mx-0 lg:grid lg:grid-cols-3 lg:gap-6 lg:overflow-visible lg:px-0 lg:pb-0 lg:pt-0"
          style={{
            WebkitOverflowScrolling: "touch",
            touchAction: "pan-x",
          }}
        >
          {tiers.map((tier, idx) => (
            <div
              key={tier.name}
              className="shrink-0 snap-start basis-[84%] sm:basis-[68%] md:basis-[48%] lg:basis-auto"
            >
              {/* ✅ FIXED CARD */}
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.08 }}
                className="relative flex h-full flex-col rounded-3xl border overflow-visible"
                style={{
                  background: tier.recommended
                    ? `color-mix(in srgb, var(${tier.accent}) 4%, white)`
                    : "white",
                  borderColor: tier.recommended
                    ? `var(${tier.accent})`
                    : "var(--color-border-card)",
                }}
              >
                {/* Top line */}
               {/* Top line wrapper */}
<div className="relative pt-4">
  
  {/* Line */}
  <div
    className="mx-auto h-[3px] w-[90%] rounded-full"
    style={{
      background: `linear-gradient(90deg, transparent, var(${tier.accent}), transparent)`
    }}
  />

  {/* Badge (only for recommended) */}
  {tier.recommended && (
    <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 z-20">
      <div
        className="rounded-full px-4 py-1.5 text-[10px] font-black uppercase text-white"
        style={{
          background: `var(${tier.accent})`,
        }}
      >
        Most Popular
      </div>
    </div>
  )}
</div>

                {/* ✅ FIXED BADGE */}
                {tier.recommended && (
                  <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 z-20">
                    <div
                      className="rounded-full px-4 py-1.5 text-[10px] font-black uppercase text-white"
                      style={{
                        background: `var(${tier.accent})`,
                      }}
                    >
                      Most Popular
                    </div>
                  </div>
                )}

                {/* Content */}
                <div className="flex flex-col p-5 pt-10">
                  <h3 className="text-xl font-bold">{tier.name}</h3>

                  <div className="mt-2">
                    <span className="text-3xl font-bold">{tier.price}</span>
                    <span className="text-sm ml-1">{tier.period}</span>
                  </div>

                  <p className="mt-4 text-sm">{tier.desc}</p>

                  {/* Features */}
                  <div className="mt-6 space-y-3 flex-1">
                    {tier.features.map((f) => (
                      <div key={f} className="flex gap-2">
                        <Check className="w-4 h-4 mt-1" />
                        <span className="text-sm">{f}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA */}
                  <a
                    href="https://calendly.com/techrabbit/meeting"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 flex items-center justify-center gap-2 rounded-xl py-3 text-sm font-bold text-white"
                    style={{ background: `var(${tier.accent})` }}
                  >
                    {tier.cta}
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}