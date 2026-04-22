import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, ArrowRight, Zap } from "lucide-react";
import Reveal from "../Reveal";
import { Link } from "react-router-dom";

const mvpPricingOptions = [
  {
    name: "Starter MVP",
    price: "$8,500",
    priceRange: "$10,000",
    hours: "Simple product",
    desc: "Simple product",
    features: ["5-7 screens", "Basic features", "1 integration"],
  },
  {
    name: "Growth MVP",
    price: "$10,000",
    priceRange: "$15,000",
    hours: "Complex product",
    desc: "Complex product",
    features: ["10-15 screens", "Advanced features", "3+ integrations"],
  },
];

const subscriptionPricing = {
  monthly: [
    { name: "Starter", price: "$1,800", hours: "40 hrs/mo" },
    { name: "Growth", price: "$3,200", hours: "80 hrs/mo" },
    { name: "Scale", price: "$5,500", hours: "160 hrs/mo" },
  ],
  quarterly: [
    { name: "Starter", price: "$1,620", hours: "40 hrs/mo", save: "10%" },
    { name: "Growth", price: "$2,880", hours: "80 hrs/mo", save: "10%" },
    { name: "Scale", price: "$4,950", hours: "160 hrs/mo", save: "10%" },
  ],
};

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
        t: "Deployment + go-live",
        d: "We ship it. You own it — code, domain, IP, everything",
      },
    ],
    mvpPricingOptions: mvpPricingOptions,
    cta: "Tell us your idea",
    accent: "--color-brand-blue",
    featured: false,
  },
  {
    type: "My product is live",
    title: "Your product team,on subscription",
    desc: "Product is live. Now you need features, fixes, and someone who actually knows your codebase. Same team every month. Cancel with 30 days notice.",
    features: [
      {
        t: "Same team every sprint",
        d: "No rotation. No re-explaining. They know your codebase from day 1.",
      },
      {
        t: "Figma + Dev + QA + BA + PM",
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
    cta: "See full pricing",
    accent: "--color-brand-green",
    featured: true,
  },
];

export default function ServicesPaths() {
  const [selectedPlan, setSelectedPlan] = useState(1);
  const [selectedMvp, setSelectedMvp] = useState(1);
  const [billingCycle, setBillingCycle] = useState("monthly");

  return (
    <section className="relative bg-[var(--color-bg-page)] px-4 pt-12 sm:px-6 md:px-8 lg:px-12">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle, var(--color-grid-dot) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
          opacity: 0.5,
        }}
      />

      <div className="absolute right-[-20%] top-0 h-[18rem] w-[18rem] pointer-events-none sm:right-[-10%] sm:h-[24rem] sm:w-[24rem] lg:right-0 lg:h-[37.5rem] lg:w-[37.5rem]">
        <div
          className="absolute inset-0 rounded-full blur-[150px]"
          style={{
            background:
              "radial-gradient(circle, rgba(42,171,215,0.08) 0%, transparent 70%)",
          }}
        />
      </div>
      <div className="absolute bottom-0 left-[-20%] h-[16rem] w-[16rem] pointer-events-none sm:left-[-10%] sm:h-[22rem] sm:w-[22rem] lg:left-0 lg:h-[31.25rem] lg:w-[31.25rem]">
        <div
          className="absolute inset-0 rounded-full blur-[150px]"
          style={{
            background:
              "radial-gradient(circle, rgba(36,181,116,0.08) 0%, transparent 70%)",
          }}
        />
      </div>

      <div
        className="absolute top-0 inset-x-0 h-20 pointer-events-none"
        style={{
          background:
            "linear-gradient(to bottom, var(--color-bg-page), transparent)",
        }}
      />
      <div
        className="absolute bottom-0 inset-x-0 h-20 pointer-events-none"
        style={{
          background:
            "linear-gradient(to top, var(--color-bg-page), transparent)",
        }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        <Reveal className="mb-10 sm:mb-12">
          <div className="mb-5 inline-flex max-w-full items-center gap-2 rounded-full border border-[var(--color-border-brand-soft)] bg-[var(--color-bg-brand-tint)] px-3 py-1.5 text-[9px] font-black uppercase tracking-[0.28em] text-[var(--color-brand-blue)] sm:mb-6 sm:px-4 sm:text-[10px]">
            <Zap className="w-3.5 h-3.5" />
            Two clear paths
          </div>
          <h2 className="mb-4 max-w-[12ch] text-4xl font-bold font-heading leading-[1.15] tracking-tight text-[var(--color-text-primary)] sm:max-w-[14ch] sm:text-5xl">
            Where are you right now?
          </h2>
          <p className="max-w-2xl text-sm font-medium leading-relaxed text-[var(--color-text-body)]">
            Two clear paths. Both with a visible price. No "let's hop on a call
            to discuss."
          </p>
        </Reveal>

        <div
          className="mb-12 flex items-stretch gap-4 scrollbar-hide overflow-x-auto pb-4 pt-2 snap-x snap-mandatory -mx-4 px-4 sm:-mx-6 sm:px-6 md:-mx-8 md:px-8 lg:mx-0 lg:grid lg:grid-cols-2 lg:gap-6 lg:overflow-visible lg:px-0 lg:pb-0 lg:pt-0"
          style={{ WebkitOverflowScrolling: "touch" }}
        >
          {paths.map((path, idx) => (
            <div
              key={path.type}
              className="min-w-0 shrink-0 snap-start basis-[84%] sm:basis-[74%] md:basis-[60%] lg:basis-auto"
            >
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: idx * 0.08,
                  duration: 0.45,
                  ease: "easeOut",
                }}
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
                <div
                  className="h-1 w-full"
                  style={{ background: `var(${path.accent})` }}
                />

                <div className="flex h-full flex-col p-4 sm:p-6 md:p-8 lg:p-10">
                  <div
                    className="mb-4 sm:mb-5 inline-flex w-fit items-center gap-2 rounded-full px-3 py-1.5 text-[9px] font-black uppercase tracking-[0.28em] sm:mb-6 sm:text-[10px]"
                    style={{
                      background: `color-mix(in srgb, var(${path.accent}) 10%, transparent)`,
                      color: `var(${path.accent})`,
                    }}
                  >
                    {path.type}
                  </div>

                  <h3 className="mb-2 sm:mb-3 text-lg sm:text-xl font-bold font-heading tracking-tight text-[var(--color-text-primary)] md:text-2xl">
                    {path.title}
                  </h3>

                  <p className="mb-4 sm:mb-6 text-xs sm:text-sm leading-relaxed text-[var(--color-text-body)] md:mb-8">
                    {path.desc}
                  </p>

                  <div className="mb-4 sm:mb-6 flex-1 space-y-3 sm:space-y-4 md:mb-8">
                    {path.features.map((feature, fidx) => (
                      <motion.div
                        key={feature.t}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: fidx * 0.05 }}
                        viewport={{ once: true }}
                        className="flex gap-2 sm:gap-3"
                      >
                        <div
                          className="w-4 h-4 sm:w-5 sm:h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5"
                          style={{
                            background: `color-mix(in srgb, var(${path.accent}) 12%, transparent)`,
                          }}
                        >
                          <CheckCircle2
                            className="w-3 h-3 sm:w-4 sm:h-4"
                            style={{ color: `var(${path.accent})` }}
                          />
                        </div>
                        <div>
                          <p className="text-xs sm:text-sm font-bold text-[var(--color-text-primary)]">
                            {feature.t}
                          </p>
                          <p className="text-[11px] sm:text-xs text-[var(--color-text-body)] leading-relaxed mt-0.5">
                            {feature.d}
                          </p>
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  <div className="mb-4 sm:mb-6 h-px bg-[var(--color-border-light)] md:mb-8" />

                  {path.mvpPricingOptions ? (
                    <div className="mb-6 sm:mb-8">
                      <p className="text-[9px] sm:text-[10px] font-black uppercase tracking-widest text-[var(--color-brand-blue)] mb-3 sm:mb-4">
                        Choose your scope
                      </p>
                      <div className="grid grid-cols-2 gap-3 sm:gap-4">
                        {path.mvpPricingOptions.map((opt, pidx) => (
                          <motion.button
                            key={opt.name}
                            onClick={() => setSelectedMvp(pidx)}
                            whileHover={{ y: -2 }}
                            whileTap={{ y: 0 }}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: pidx * 0.1 }}
                            className="relative rounded-xl sm:rounded-2xl border-2 p-3 sm:p-6 text-center transition-all duration-300 cursor-pointer"
                            style={{
                              background:
                                selectedMvp === pidx || opt.featured
                                  ? `color-mix(in srgb, var(${path.accent}) 6%, white)`
                                  : "white",
                              borderColor:
                                selectedMvp === pidx || opt.featured
                                  ? `var(${path.accent})`
                                  : "var(--color-border-light)",
                              boxShadow:
                                selectedMvp === pidx || opt.featured
                                  ? `0 8px 24px -8px color-mix(in srgb, var(${path.accent}) 25%, transparent)`
                                  : "0 2px 8px rgba(0,0,0,0.04)",
                            }}
                          >
                            <p
                              className="text-[8px] sm:text-[10px] font-black uppercase tracking-widest"
                              style={{ color: `var(${path.accent})` }}
                            >
                              {opt.name}
                            </p>
                            <div className="flex items-baseline justify-center gap-1 sm:gap-1.5 mt-2 sm:mt-3 flex-wrap">
                              <p className="text-xl sm:text-3xl font-black font-heading text-[var(--color-text-primary)]">
                                {opt.price}
                              </p>
                              <span className="text-xs sm:text-sm font-bold text-[var(--color-text-muted)]">
                                - {opt.priceRange}
                              </span>
                            </div>
                            <p className="text-[8px] sm:text-[11px] font-bold text-[var(--color-text-muted)] mt-1.5 sm:mt-2">
                              {opt.hours}
                            </p>
                          </motion.button>
                        ))}
                      </div>
                    </div>
                  ) : path.featured ? (
                    <div className="mb-6 sm:mb-8">
                      <div className="flex items-center justify-between gap-4 mb-4 sm:mb-5">
                        <p className="text-[9px] sm:text-[10px] font-black uppercase tracking-widest text-[var(--color-text-faint)]">
                          Choose your plan
                        </p>
                        <div className="flex gap-2 bg-[var(--color-bg-card)] p-1.5 rounded-lg border border-[var(--color-border-light)]">
                          <button
                            className="px-4 sm:px-5 py-2 rounded-md text-[8px] sm:text-[9px] font-black uppercase tracking-widest transition-all duration-300 whitespace-nowrap"
                            style={{
                              background:
                                billingCycle === "monthly"
                                  ? `var(${path.accent})`
                                  : "transparent",
                              color:
                                billingCycle === "monthly"
                                  ? "white"
                                  : "var(--color-text-secondary)",
                            }}
                            onClick={() => setBillingCycle("monthly")}
                          >
                            Monthly
                          </button>
                          <button
                            className="px-4 sm:px-5 py-2 rounded-md text-[8px] sm:text-[9px] font-black uppercase tracking-widest transition-all duration-300 whitespace-nowrap"
                            style={{
                              background:
                                billingCycle === "quarterly"
                                  ? `var(${path.accent})`
                                  : "transparent",
                              color:
                                billingCycle === "quarterly"
                                  ? "white"
                                  : "var(--color-text-secondary)",
                            }}
                            onClick={() => setBillingCycle("quarterly")}
                          >
                            Quarterly
                          </button>
                        </div>
                      </div>
                      <div
                        className="flex gap-2 sm:gap-3 overflow-x-auto sm:grid sm:grid-cols-3 sm:overflow-visible pb-2 snap-x snap-mandatory scrollbar-hide"
                        style={{ WebkitOverflowScrolling: "touch" }}
                      >
                        <AnimatePresence mode="wait">
                          {subscriptionPricing[billingCycle].map((opt, pidx) => (
                            <motion.button
                              key={`${billingCycle}-${opt.name}`}
                              initial={{ opacity: 0, y: 10 }}
                              animate={{ opacity: 1, y: 0 }}
                              exit={{ opacity: 0, y: -10 }}
                              transition={{ duration: 0.3 }}
                              onClick={() => setSelectedPlan(pidx)}
                              whileHover={{ y: -2 }}
                              whileTap={{ y: 0 }}
                              className="relative min-w-[100px] sm:min-w-0 snap-start rounded-lg sm:rounded-xl border p-3 sm:p-4 text-center transition-all duration-300 flex-1 cursor-pointer"
                              style={{
                                background:
                                  selectedPlan === pidx
                                    ? `color-mix(in srgb, var(${path.accent}) 10%, transparent)`
                                    : "white",
                                borderColor:
                                  selectedPlan === pidx
                                    ? `var(${path.accent})`
                                    : "var(--color-border-card)",
                                boxShadow:
                                  selectedPlan === pidx
                                    ? `0 8px 24px -8px color-mix(in srgb, var(${path.accent}) 25%, transparent)`
                                    : "0 2px 8px rgba(0,0,0,0.04)",
                              }}
                            >
                              {opt.save && (
                                <div
                                  className="absolute -top-2 left-1/2 -translate-x-1/2 px-2 py-0.5 rounded-full text-[7px] sm:text-[8px] font-black uppercase tracking-widest text-white"
                                  style={{ background: `var(${path.accent})` }}
                                >
                                  Save {opt.save}
                                </div>
                              )}
                              <p className="text-[8px] sm:text-[9px] font-black uppercase tracking-widest text-[var(--color-text-faint)] mb-1 sm:mb-2">
                                {opt.name}
                              </p>
                              <p className="text-base sm:text-xl font-black font-heading text-[var(--color-text-primary)] mb-0.5 sm:mb-1">
                                {opt.price}
                              </p>
                              <p className="text-[7px] sm:text-[8px] font-bold text-[var(--color-text-body)]">
                                {opt.hours}
                              </p>
                            </motion.button>
                          ))}
                        </AnimatePresence>
                      </div>
                    </div>
                  ) : null}

                  <Link
                    to="/contact"
                    className="group flex items-center justify-center gap-2 w-full py-2.5 sm:py-3.5 rounded-lg sm:rounded-xl border transition-all duration-300 font-black text-xs sm:text-sm"
                    style={{
                      background: `var(${path.accent})`,
                      borderColor: `var(${path.accent})`,
                      color: "white",
                    }}
                  >
                    {path.cta}
                    <motion.div className="group-hover:translate-x-1 transition-transform">
                      <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4" />
                    </motion.div>
                  </Link>
                </div>
              </motion.div>
            </div>
          ))}
        </div>

        <Reveal>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative overflow-hidden rounded-3xl border p-4 sm:p-8 md:p-10 lg:p-12 text-center"
            style={{
              background: "white",
              borderColor: "var(--color-border-card)",
              boxShadow: "0 2px 12px rgba(0,0,0,0.04)",
            }}
          >
            <div
              className="absolute top-0 inset-x-0 h-1"
              style={{ background: "var(--gradient-brand)" }}
            />

            <h3 className="mb-2 sm:mb-3 text-xl sm:text-2xl font-black font-heading tracking-tight text-[var(--color-text-primary)] md:text-3xl">
              Not sure which path?
            </h3>
            <p className="mx-auto mb-4 sm:mb-6 max-w-2xl text-xs sm:text-sm leading-relaxed text-[var(--color-text-body)] md:text-base">
              Let's talk about your project. We'll help you figure out the best
              approach and pricing for your needs.
            </p>
            <Link
              to="/contact"
              className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-full px-4 sm:px-8 py-2.5 sm:py-3.5 text-xs sm:text-sm font-black text-white transition-all duration-300 hover:scale-[1.03]"
              style={{
                background: "var(--gradient-brand)",
                boxShadow: "0 20px 40px var(--color-brand-glow)",
              }}
            >
              Schedule a call
              <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4" />
            </Link>
          </motion.div>
        </Reveal>
      </div>
    </section>
  );
}
