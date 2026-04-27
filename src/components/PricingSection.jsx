import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const mvpFeatures = [
  {
    title: "Figma UI/UX design",
    desc: "Every screen designed before a line of code is written",
  },
  {
    title: "Full-stack development",
    desc: "React + Node.js + PostgreSQL — production-ready, not prototype",
  },
  {
    title: "AI features if needed",
    desc: "Calling agents, scoring, chatbots — built in, not bolted on",
  },
  {
    title: "QA + testing",
    desc: "Full test cycle. No 'it works on my machine'",
  },
  {
    title: "Deployment + go-live",
    desc: "We ship it. You own it — code, domain, IP, everything",
  },
];

const subFeatures = [
  {
    title: "Same team every sprint",
    desc: "No rotation. No re-explaining. They know your codebase from day 1.",
  },
  {
    title: "Figma + Dev + QA + BA + PM",
    desc: "Every skill you need. No separate vendors. No handoffs.",
  },
  {
    title: "AI features in every sprint",
    desc: "Claude, GPT, custom logic — in every sprint, not a separate engagement.",
  },
  {
    title: "Clockify reports monthly",
    desc: "Every hour tracked and reported. You see exactly what was built.",
  },
  {
    title: "Unused hours rollover",
    desc: "Don't lose what you paid for. Hours carry to next month.",
  },
];

const mvpPlans = [
  {
    name: "Starter MVP",
    price: "$8,500",
    priceRange: "$10,000",
    hours: "Simple product",
  },
  {
    name: "Growth MVP",
    price: "$10,000",
    priceRange: "$15,000",
    hours: "Complex product",
  },
];

const plans = [
  { name: "Starter", price: "$1,800", hours: "40 hrs/mo" },
  { name: "Growth", price: "$3,200", hours: "80 hrs/mo" },
  { name: "Scale", price: "$5,500", hours: "160 hrs/mo" },
];

const quarterlyPlans = [
  { name: "Starter", price: "$1,620", hours: "40 hrs/mo", save: "10%" },
  { name: "Growth", price: "$2,880", hours: "80 hrs/mo", save: "10%" },
  { name: "Scale", price: "$4,950", hours: "160 hrs/mo", save: "10%" },
];

function CheckIcon() {
  return (
    <div className="flex-shrink-0 mt-0.5 w-5 h-5 rounded-full bg-[var(--color-brand-green)]/10 flex items-center justify-center text-[var(--color-brand-green)]">
      <svg
        className="w-3 h-3"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={3}
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
      </svg>
    </div>
  );
}

const PricingSection = () => {
  const [selectedMvp, setSelectedMvp] = useState(1);
  const [selectedPlan, setSelectedPlan] = useState(1);
  const [billingCycle, setBillingCycle] = useState("monthly");
  const currentPlans = billingCycle === "monthly" ? plans : quarterlyPlans;

  return (
    <section
      id="pricing"
      className="lg:py-16 max-sm:py-10 bg-[var(--color-bg-page)] px-4 sm:px-6 md:px-12 "
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="lg:mb-14 max-sm:mb-8">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[var(--color-border-brand-soft)] bg-[var(--color-bg-brand-tint)] text-[var(--color-brand-blue)] text-[10px] font-black tracking-widest uppercase mb-5">
            Pricing
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black font-heading tracking-tight text-[var(--color-text-primary)] leading-[1] mb-3">
            Where are you right now?
          </h2>
          <p className="text-[var(--color-text-body)] text-base max-w-lg leading-relaxed">
            Two clear paths. Both with a visible price. No "let's hop on a call
            to discuss."
          </p>
        </div>

        {/* Cards — grid on desktop, horizontal slider on mobile */}
        <div
          className="flex items-stretch gap-6 overflow-x-auto h-fit snap-x snap-mandatory md:grid md:grid-cols-2 md:overflow-visible -mx-1 md:mx-0 px-1 md:px-0 w-full scrollbar-hide pt-4 md:pt-0"
          style={{ WebkitOverflowScrolling: "touch" }}
        >
          {/* LEFT CARD — MVP */}
          <div
            className="snap-start shrink-0 w-[84vw] sm:w-[70vw] md:w-auto rounded-3xl border border-[var(--color-border-card)] bg-white p-5 sm:p-8 flex flex-col h-auto"
            style={{ boxShadow: "0 2px 20px rgba(0,0,0,0.05)" }}
          >
            <div className="flex-1 flex flex-col">
              <span className="inline-flex items-center w-fit text-[10px] px-3 py-1.5 rounded-full border border-[var(--color-border-subtle)] text-[var(--color-text-muted)] font-black uppercase tracking-widest">
                I have an idea
              </span>

              <h3 className="mt-5 text-2xl font-black font-heading text-[var(--color-text-primary)] leading-tight tracking-tight">
                build
              </h3>

              <h4 className="mt-2 text-lg font-bold font-heading text-[var(--color-text-secondary)] leading-tight">
                Idea to live product in 30 days
              </h4>

              <p className="mt-3 text-sm text-[var(--color-text-body)] leading-relaxed">
                You have a product to build. We take it from concept to live —
                design, code, QA, and deployment. Fixed price. No surprises.
              </p>

              {/* Features */}
              <div className="mt-7">
                <p className="text-[10px] font-black uppercase tracking-widest text-[var(--color-brand-green)] mb-4">
                  What you get
                </p>
                <div className="space-y-1">
                  {mvpFeatures.map((item) => (
                    <div
                      key={item.title}
                      className="flex gap-3 py-3 px-2 rounded-xl hover:bg-[var(--color-bg-card-light)] transition-colors duration-200"
                    >
                      <CheckIcon />
                      <div>
                        <p className="text-sm font-bold text-[var(--color-text-primary)]">
                          {item.title}
                        </p>
                        <p className="text-xs text-[var(--color-text-body)] leading-relaxed mt-0.5">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-auto">
              {/* MVP Plans */}
              <div className="mt-7">
                <p className="text-[10px] font-black uppercase tracking-widest text-[var(--color-brand-blue)] mb-4">
                  Choose your scope
                </p>
                <div className="grid grid-cols-2 gap-3 sm:gap-4">
                  {mvpPlans.map((plan, idx) => (
                    <motion.button
                      key={plan.name}
                      onClick={() => setSelectedMvp(idx)}
                      whileHover={{ y: -2 }}
                      whileTap={{ y: 0 }}
                      className={`p-4 sm:p-6 rounded-xl sm:rounded-2xl border-2 transition-all duration-300 cursor-pointer text-center ${
                        selectedMvp === idx || plan.featured
                          ? "border-[var(--color-brand-blue)] bg-[var(--color-bg-success-tint)]"
                          : "border-[var(--color-border-card)] bg-white hover:border-[var(--color-brand-blue)]/50 hover:shadow-md"
                      }`}
                    >
                      <p
                        className={`text-[9px] sm:text-[10px] font-black uppercase tracking-widest ${selectedMvp === idx || plan.featured ? "text-[var(--color-brand-blue)]" : "text-[var(--color-text-muted)]"}`}
                      >
                        {plan.name}
                      </p>
                      <div className="flex items-baseline justify-center gap-1 sm:gap-1.5 mt-2 sm:mt-3 flex-wrap">
                        <p className="text-2xl sm:text-3xl font-black font-heading text-[var(--color-text-primary)]">
                          {plan.price}
                        </p>
                        <span className="text-xs sm:text-sm font-bold text-[var(--color-text-muted)]">
                          - {plan.priceRange}
                        </span>
                      </div>
                      <p className="text-[9px] sm:text-[10px] font-bold text-[var(--color-text-muted)] mt-1.5 sm:mt-2">
                        {plan.hours}
                      </p>
                    </motion.button>
                  ))}
                </div>
              </div>

              <Link
                to="/contact"
                className="mt-5 w-full py-3.5 rounded-xl border border-[var(--color-border-subtle)] text-[var(--color-text-primary)] font-bold text-sm hover:bg-[var(--color-bg-card-light)] transition-all duration-300 flex items-center justify-center"
              >
                Tell us your idea →
              </Link>
            </div>
          </div>

          {/* RIGHT CARD — Subscription */}
          <div
            className="snap-start shrink-0 w-[84vw] sm:w-[70vw] md:w-auto relative rounded-3xl border-2 border-[var(--color-brand-green)] bg-white p-5 sm:p-8 flex flex-col h-auto"
            style={{ boxShadow: "0 2px 20px rgba(36,181,116,0.1)" }}
          >
            <div className="flex-1 flex flex-col">
              {/* <div className="absolute -top-3.5 left-6">
                <span className="text-[10px] px-3 py-1.5 rounded-full bg-[var(--color-brand-green)] text-white font-black uppercase tracking-widest">
                  Most Popular
                </span>
              </div> */}

              <span className="inline-flex items-center w-fit text-[10px] px-3 py-1.5 rounded-full border border-[var(--color-border-subtle)] text-[var(--color-text-muted)] font-black uppercase tracking-widest">
                My product is live
              </span>

              <h3 className="mt-5 text-2xl font-black font-heading text-[var(--color-text-primary)] leading-tight tracking-tight">
                grow
              </h3>

              <h4 className="mt-2 text-lg font-bold font-heading text-[var(--color-text-secondary)] leading-tight">
                Your product team, on subscription
              </h4>

              <p className="mt-3 text-sm text-[var(--color-text-body)] leading-relaxed">
                Product is live. Now you need features, fixes, and someone who
                actually knows your codebase. Same team every month. Cancel with
                30 days notice.
              </p>

              {/* Features */}
              <div className="mt-7">
                <p className="text-[10px] font-black uppercase tracking-widest text-[var(--color-brand-green)] mb-4">
                  What you get
                </p>
                <div className="space-y-1">
                  {subFeatures.map((item) => (
                    <div
                      key={item.title}
                      className="flex gap-3 py-3 px-2 rounded-xl hover:bg-[var(--color-bg-success-tint)] transition-colors duration-200"
                    >
                      <CheckIcon />
                      <div>
                        <p className="text-sm font-bold text-[var(--color-text-primary)]">
                          {item.title}
                        </p>
                        <p className="text-xs text-[var(--color-text-body)] leading-relaxed mt-0.5">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-auto">
              {/* Plans */}
              <div className="mt-7">
                <div className="flex items-center justify-between gap-4 mb-4">
                  <p className="text-[10px] font-black uppercase tracking-widest text-[var(--color-text-muted)]">
                    Choose your plan
                  </p>
                  <div className="flex gap-2 bg-[var(--color-bg-card)] p-1.5 rounded-lg border border-[var(--color-border-light)]">
                    <button
                      className="px-3 py-1.5 rounded-md text-[8px] font-black uppercase tracking-widest transition-all duration-300 whitespace-nowrap"
                      style={{
                        background:
                          billingCycle === "monthly"
                            ? "var(--color-brand-green)"
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
                      className="px-3 py-1.5 rounded-md text-[8px] font-black uppercase tracking-widest transition-all duration-300 whitespace-nowrap"
                      style={{
                        background:
                          billingCycle === "quarterly"
                            ? "var(--color-brand-green)"
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
                  className="flex sm:grid sm:grid-cols-3 gap-3 overflow-x-auto sm:overflow-visible snap-x snap-mandatory scrollbar-hide w-full"
                  style={{ WebkitOverflowScrolling: "touch" }}
                >
                  <AnimatePresence mode="wait">
                    {currentPlans.map((plan, idx) => (
                      <motion.button
                        key={`${billingCycle}-${plan.name}`}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.3 }}
                        onClick={() => setSelectedPlan(idx)}
                        whileHover={{ y: -2 }}
                        whileTap={{ y: 0 }}
                        className={`shrink-0 min-w-[120px] flex-1 p-4 rounded-2xl border transition-all duration-300 text-center flex flex-col items-center justify-center min-h-[110px] snap-start cursor-pointer relative ${
                          selectedPlan === idx || plan.active
                            ? "border-[var(--color-brand-green)] bg-[var(--color-bg-success-tint)]"
                            : "border-[var(--color-border-card)] bg-white hover:border-[var(--color-brand-green)]/50 hover:shadow-md"
                        }`}
                      >
                        {plan.save && (
                          <div
                            className="absolute -top-2 left-1/2 -translate-x-1/2 px-2 py-0.5 rounded-full text-[7px] font-black uppercase tracking-widest text-white"
                            style={{ background: "var(--color-brand-green)" }}
                          >
                            Save {plan.save}
                          </div>
                        )}
                        <p
                          className={`text-[10px] uppercase font-black tracking-widest ${selectedPlan === idx || plan.active ? "text-[var(--color-brand-green)]" : "text-[var(--color-text-muted)]"}`}
                        >
                          {plan.name}
                        </p>
                        <p className="text-xl font-black font-heading text-[var(--color-text-primary)] mt-1.5">
                          {plan.price}
                        </p>
                        <p className="text-[10px] font-bold text-[var(--color-text-muted)] mt-1">
                          {plan.hours}
                        </p>
                      </motion.button>
                    ))}
                  </AnimatePresence>
                </div>
              </div>

              <Link
                to="/pricing"
                className="mt-5 w-full py-3.5 rounded-xl text-white font-bold text-sm bg-[var(--color-brand-green)] hover:opacity-90 transition-all duration-300 flex items-center justify-center"
              >
                See full pricing →
              </Link>

              <p className="text-[11px] text-center text-[var(--color-text-muted)] mt-3">
                Cancel anytime · 30-day notice · NDA on day 1
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
