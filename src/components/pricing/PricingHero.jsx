import { useState } from "react";
import { Check, ArrowRight } from "lucide-react";
import Reveal from "../Reveal";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const buildPlans = [
  {
    name: "Starter",
    price: 1800,
    hours: "40 hrs/mo",
    desc: "Steady upkeep and small improvements every month.",
    cta: "Get Started",
    featured: false,
    features: [
      "Bug fixes + minor features",
      "Figma UI updates",
      "Basic QA on every release",
      "AI-assisted modules",
      "Slack + Loom updates",
      "2 syncs/month",
      "Clockify time reports",
      "Unused hrs rollover",
    ],
  },
  {
    name: "Growth",
    price: 3200,
    hours: "80 hrs/month · Priority bandwidth",
    desc: "Active feature development with priority bandwidth.",
    cta: "Go Growth",
    featured: true,
    features: [
      "Full feature sprints",
      "Figma design included",
      "Full QA cycle",
      "AI features + integrations",
      "Daily Slack + Loom",
      "Weekly sync meetings",
      "Clockify time reports",
      "Unused hrs rollover",
      "Dedicated PM",
    ],
  },
  {
    name: "Scale",
    price: 5500,
    hours: "160 hrs/month · Full team",
    desc: "Fully embedded team running complete sprints.",
    cta: "Get Started",
    featured: false,
    features: [
      "Full product sprints",
      "Figma design included",
      "Full QA + test cases",
      "AI features + integrations",
      "Daily standup",
      "Daily Slack + Loom",
      "Clockify time reports",
      "Unused hrs rollover",
      "Dedicated PM",
      "BA + requirement docs",
    ],
  },
];

const growPlans = [
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
    accent: "var(--color-brand-blue)",
    cta: "Get started",
    featured: false,
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
    accent: "var(--color-brand-green)",
    cta: "Get started",
    featured: true,
  },
  {
    name: "Grow — Subscription",
    price: "$1,800",
    period: "- $5,500 / month",
    desc: "Ongoing product team. The more hours, the more you ship.",
    features: [
      "BA · UX | UI · Dev · QA · DevOps",
      "AI features every sprint",
      "Clockify transparency",
      "Hours rollover monthly",
      "Cancel with 30 days notice",
    ],
    accent: "var(--color-brand-blue)",
    cta: "See Plans",
    featured: false,
  },
];

export default function PricingHero() {
  const [activeTab, setActiveTab] = useState("build");
  const [billing, setBilling] = useState("monthly");

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    setBilling("monthly");
  };

  return (
    <section className="relative bg-[var(--color-bg-page)] px-4 sm:px-6 md:px-8 lg:px-12 pt-40 max-sm:pt-22">
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute right-[-20%] top-10 h-72 w-72 rounded-full blur-3xl sm:right-[-10%] md:right-20"
          style={{
            background:
              "radial-gradient(circle, var(--color-brand-blue), transparent)",
            opacity: 0.08,
          }}
        />
        <div
          className="absolute bottom-20 left-[-20%] h-64 w-64 rounded-full blur-3xl sm:left-[-10%] md:left-10"
          style={{
            background:
              "radial-gradient(circle, var(--color-brand-green), transparent)",
            opacity: 0.08,
          }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl">
        <Reveal>
          <div className="mb-12 space-y-5 md:mb-16">
            <div className="inline-flex max-w-full items-center gap-2.5 rounded-full border border-white/60 bg-white/40 px-4 py-2 backdrop-blur-md text-[9px] font-black uppercase tracking-[0.28em] shadow-lg transition-all duration-300 hover:shadow-xl sm:px-5 sm:py-2.5">
              <div
                className="h-2 w-2 rounded-full animate-pulse"
                style={{ background: "var(--color-brand-green)" }}
              />
              <span>Transparent Pricing</span>
            </div>

            <div className="space-y-2">
              <h1 className="text-3xl font-bold font-heading leading-[1.12] tracking-tight md:text-4xl">
                A full product team,
                <br />
                <span
                  style={{
                    backgroundImage:
                      "linear-gradient(135deg, var(--color-brand-blue), var(--color-brand-green))",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  at a fraction of local cost
                </span>
              </h1>
            </div>

            <p className="max-w-2xl text-sm font-medium leading-relaxed text-gray-600 md:text-base">
              BA · UX | UI · Dev · QA · DevOps · PM — everything included. No
              hidden fees. Cancel anytime.
            </p>

            {/* Tabs and Toggle Container */}
            <div className="pt-4 flex flex-col items-center gap-6 sm:flex-row sm:justify-between md:gap-6">
              {/* Top Tabs - Build/Grow */}
              <div className="inline-flex gap-2 rounded-full border border-white/60 bg-white/50 p-2 shadow-lg backdrop-blur-md w-fit">
                {["build", "grow"].map((tab) => (
                  <motion.button
                    key={tab}
                    onClick={() => handleTabChange(tab)}
                    className="relative rounded-full px-6 py-2.5 text-[10px] font-black uppercase tracking-[0.22em] transition-all duration-300 sm:px-8 sm:text-xs"
                    style={{
                      background:
                        activeTab === tab
                          ? "linear-gradient(135deg, var(--color-brand-blue), var(--color-brand-green))"
                          : "transparent",
                      color:
                        activeTab === tab ? "white" : "var(--color-text-muted)",
                    }}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {tab === "build" ? "Build" : "Grow"}
                  </motion.button>
                ))}
              </div>

              {/* Pricing Toggle - Only show for Build tab */}
              {activeTab === "grow" && (
                <div className="inline-flex items-center gap-1.5 rounded-full border border-white/60 bg-white/50 p-1.5 shadow-lg backdrop-blur-md relative w-fit shrink-0">
                  {["monthly", "quarterly"].map((period) => (
                    <div key={period} className="relative">
                      <motion.button
                        onClick={() => setBilling(period)}
                        className={`relative rounded-full px-5 py-2.5 text-[10px] font-black uppercase tracking-[0.22em] transition-all duration-300 sm:px-7 sm:text-xs ${
                          billing === period
                            ? "text-white"
                            : "text-gray-600 hover:text-gray-900"
                        }`}
                        style={{
                          background:
                            billing === period
                              ? "linear-gradient(135deg, var(--color-brand-blue), var(--color-brand-green))"
                              : "transparent",
                        }}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        {period === "monthly" ? "Monthly" : "Quarterly"}
                      </motion.button>
                      {period === "quarterly" && (
                        <motion.div
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          className="absolute -top-2.5 -right-2 rounded-full px-2 py-0.5 text-[7px] font-black text-white shadow-lg whitespace-nowrap"
                          style={{
                            background:
                              "linear-gradient(135deg, var(--color-brand-blue), var(--color-brand-green))",
                          }}
                        >
                          Save 10%
                        </motion.div>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </Reveal>

        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="mb-6"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[var(--color-border-subtle)] text-[var(--color-text-muted)] text-[10px] font-black uppercase tracking-widest">
            {activeTab === "build" ? "I have an idea" : "My product is live"}
          </div>
        </motion.div>

        {/* BUILD TAB - 3 Column Grid */}
        {activeTab === "grow" && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="mb-8 flex items-stretch gap-4 overflow-x-auto pb-4 pt-2 snap-x snap-mandatory scrollbar-hide -mx-4 px-4 sm:-mx-6 sm:px-6 md:-mx-8 md:px-8 lg:mx-0 lg:grid lg:grid-cols-3 lg:gap-6 lg:overflow-visible lg:px-0 lg:pb-0 lg:pt-0"
            style={{ WebkitOverflowScrolling: "touch" }}
          >
            {buildPlans.map((plan, idx) => {
              const price =
                billing === "monthly"
                  ? plan.price
                  : Math.round(plan.price * 0.9);
              const accentColor =
                idx === 0
                  ? "var(--color-brand-blue)"
                  : idx === 1
                    ? "var(--color-brand-green)"
                    : "var(--color-brand-blue)";

              return (
                <div
                  key={plan.name}
                  className="min-w-0 shrink-0 snap-start basis-[84%] sm:basis-[68%] md:basis-[48%] lg:basis-auto"
                >
                  <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      delay: idx * 0.08,
                      duration: 0.45,
                      ease: "easeOut",
                    }}
                    className={`group relative flex h-full flex-col overflow-visible rounded-2xl transition-all duration-500 ${
                      plan.featured
                        ? "shadow-lg md:shadow-2xl lg:scale-105"
                        : "shadow-sm hover:shadow-lg"
                    }`}
                    style={{
                      background: plan.featured
                        ? "linear-gradient(135deg, rgba(42,171,215,0.08), rgba(36,181,116,0.08))"
                        : "white",
                      border: `1px solid ${
                        plan.featured
                          ? "rgba(42,171,215,0.2)"
                          : "var(--color-border-card)"
                      }`,
                    }}
                  >
                    {/* <div
                      className="h-1 w-full"
                      style={{
                        background: `linear-gradient(90deg, ${accentColor}, transparent)`,
                      }}
                    /> */}

                    {plan.featured && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="absolute left-1/2 top-1 -translate-x-1/2 -translate-y-1/2 z-10"
                      >
                        <div className="relative">
                          <div
                            className="rounded-full px-3 py-1 text-xs font-black uppercase tracking-widest text-white shadow-lg relative z-10"
                            style={{
                              background: "var(--color-brand-green)",
                            }}
                          >
                            MOST POPULAR
                          </div>
                        </div>
                      </motion.div>
                    )}

                    <div className="p-5 sm:p-6 sm:pt-10 md:p-7 md:pt-10">
                      <h3 className="mb-1 text-xl font-black font-heading">
                        {plan.name}
                      </h3>
                      <p className="mb-3 text-xs font-black uppercase tracking-widest text-gray-500">
                        {plan.hours}
                      </p>
                      <p className="mb-6 text-sm font-medium text-gray-600">
                        {plan.desc}
                      </p>

                      <div className="mb-6">
                        <motion.div
                          key={`${billing}-${price}`}
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ duration: 0.3 }}
                          className="flex flex-wrap items-baseline gap-1"
                        >
                          <span className="text-4xl font-black font-heading">
                            ${price.toLocaleString()}
                          </span>
                          <span className="text-xs font-bold text-gray-500">
                            /mo
                          </span>
                        </motion.div>
                        {billing === "quarterly" && (
                          <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="mt-1 text-xs font-bold"
                            style={{ color: accentColor }}
                          >
                            Save ${Math.round(plan.price * 0.3)}/qtr
                          </motion.p>
                        )}
                      </div>

                      {plan.featured ? (
                        <a
                          href="https://calendly.com/techrabbit/meeting"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group/btn flex w-full items-center justify-center gap-2 rounded-xl px-6 py-3 text-xs font-black text-white transition-all hover:shadow-lg"
                          style={{
                            background:
                              "linear-gradient(135deg, var(--color-brand-blue), var(--color-brand-green))",
                          }}
                        >
                          {plan.cta}
                          <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover/btn:translate-x-0.5" />
                        </a>
                      ) : (
                        <a
                          href="https://calendly.com/techrabbit/meeting"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group/btn flex w-full items-center justify-center gap-2 rounded-xl border-2 px-6 py-3 text-xs font-black transition-all hover:shadow-lg"
                          style={{
                            borderColor: accentColor,
                            color: accentColor,
                          }}
                        >
                          {plan.cta}
                          <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover/btn:translate-x-0.5" />
                        </a>
                      )}
                    </div>

                    <div className="mx-5 h-px bg-gray-200 sm:mx-6 md:mx-7" />

                    <div className="flex-grow p-5 pt-6 sm:p-6 md:p-7">
                      <ul className="space-y-2.5">
                        {plan.features.map((f) => (
                          <li key={f} className="flex items-start gap-2.5">
                            <div
                              className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full"
                              style={{
                                background: `color-mix(in srgb, ${accentColor} 12%, transparent)`,
                              }}
                            >
                              <Check
                                className="h-2.5 w-2.5"
                                style={{ color: accentColor }}
                              />
                            </div>
                            <span className="text-xs font-semibold text-gray-700">
                              {f}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                </div>
              );
            })}
          </motion.div>
        )}

        {/* GROW TAB - Equal Size 3 Column Grid */}
        {activeTab === "build" && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="mb-8 flex items-stretch gap-4 overflow-x-auto pb-4 pt-2 snap-x snap-mandatory scrollbar-hide -mx-4 px-4 sm:-mx-6 sm:px-6 md:-mx-8 md:px-8 lg:mx-0 lg:grid lg:grid-cols-3 lg:gap-6 lg:overflow-visible lg:px-0 lg:pb-0 lg:pt-0"
            style={{ WebkitOverflowScrolling: "touch" }}
          >
            {growPlans.map((plan, idx) => (
              <div
                key={plan.name}
                className="min-w-0 shrink-0 snap-start basis-[84%] sm:basis-[68%] md:basis-[48%] lg:basis-auto"
              >
                <motion.div
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: idx * 0.08,
                    duration: 0.45,
                    ease: "easeOut",
                  }}
                  className={`group relative flex h-full flex-col overflow-visible rounded-2xl transition-all duration-500 ${
                    plan.featured
                      ? "shadow-lg md:shadow-2xl"
                      : "shadow-sm hover:shadow-lg"
                  }`}
                  style={{
                    background: plan.featured
                      ? `color-mix(in srgb, ${plan.accent} 4%, white)`
                      : "white",
                    border: `1px solid ${
                      plan.featured ? plan.accent : "var(--color-border-card)"
                    }`,
                  }}
                >
                  {/* <div
                    className="h-1 w-full"
                    style={{
                      background: `linear-gradient(90deg, ${plan.accent}, transparent)`,
                    }}
                  /> */}

                  {plan.featured && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="absolute left-1/2 top-1 -translate-x-1/2 -translate-y-1/2 z-10"
                    >
                      <div className="relative">
                        <div
                          className="rounded-full px-3 py-1 text-xs font-black uppercase tracking-widest text-white shadow-lg relative z-10"
                          style={{
                            background: "var(--color-brand-green)",
                          }}
                        >
                          MOST POPULAR
                        </div>
                      </div>
                    </motion.div>
                  )}

                  <div className="p-5 sm:p-6 sm:pt-10 md:p-7 md:pt-10">
                    <h3 className="mb-1 text-xl font-black font-heading">
                      {plan.name}
                    </h3>
                    <div className="mb-3">
                      <span className="text-2xl font-black font-heading">
                        {plan.price}
                      </span>
                      <span className="text-xs font-bold text-gray-500 ml-1">
                        {plan.period}
                      </span>
                    </div>
                    <p className="mb-6 text-sm font-medium text-gray-600">
                      {plan.desc}
                    </p>

                    {plan.name.includes("Launch") ? (
                      <a
                        href="https://calendly.com/techrabbit/meeting"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group/btn flex w-full items-center justify-center gap-2 rounded-xl px-6 py-3 text-xs font-black text-white transition-all hover:shadow-lg mb-6"
                        style={{
                          background: plan.accent,
                        }}
                      >
                        {plan.cta}
                        <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover/btn:translate-x-0.5" />
                      </a>
                    ) : (
                      <button
                        onClick={() => handleTabChange("grow")}
                        className="group/btn flex w-full items-center justify-center gap-2 rounded-xl px-6 py-3 text-xs font-black text-white transition-all hover:shadow-lg mb-6"
                        style={{
                          background: plan.accent,
                        }}
                      >
                        {plan.cta}
                        <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover/btn:translate-x-0.5" />
                      </button>
                    )}
                  </div>

                  <div className="mx-5 h-px bg-gray-200 sm:mx-6 md:mx-7" />

                  <div className="flex-grow p-5 pt-6 sm:p-6 md:p-7">
                    <ul className="space-y-2.5">
                      {plan.features.map((f) => (
                        <li key={f} className="flex items-start gap-2.5">
                          <div
                            className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full"
                            style={{
                              background: `color-mix(in srgb, ${plan.accent} 12%, transparent)`,
                            }}
                          >
                            <Check
                              className="h-2.5 w-2.5"
                              style={{ color: plan.accent }}
                            />
                          </div>
                          <span className="text-xs font-semibold text-gray-700">
                            {f}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              </div>
            ))}
          </motion.div>
        )}

        {activeTab === "grow" && (
          <Reveal delay={0.3}>
            <div
              className="rounded-2xl border p-6 sm:p-8 md:p-10"
              style={{
                background:
                  "linear-gradient(135deg, rgba(42,171,215,0.08), rgba(36,181,116,0.08))",
                borderColor: "rgba(42,171,215,0.2)",
              }}
            >
              <div
                className="mb-3 h-1 w-12"
                style={{
                  background:
                    "linear-gradient(90deg, var(--color-brand-blue), var(--color-brand-green))",
                }}
              />
              <h3 className="mb-2 text-xl font-black font-heading">
                Need more than 160 hrs/month?
              </h3>
              <p className="mb-4 text-sm font-medium text-gray-600">
                Custom team · Flexible structure · Dedicated account manager
              </p>
              <a
                href="https://calendly.com/techrabbit/meeting"
                target="_blank"
                rel="noopener noreferrer"
                className="group/cta inline-flex w-full items-center justify-center gap-2 rounded-xl px-6 py-2.5 text-xs font-black text-white transition-all hover:shadow-lg sm:w-auto"
                style={{
                  background:
                    "linear-gradient(135deg, var(--color-brand-blue), var(--color-brand-green))",
                }}
              >
                Schedule Call
                <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover/cta:translate-x-0.5" />
              </a>
            </div>
          </Reveal>
        )}
      </div>
    </section>
  );
}
