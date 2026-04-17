import React from "react";
import { Link } from "react-router-dom";

const mvpFeatures = [
  { title: "Figma UI/UX design", desc: "Every screen designed before a line of code is written" },
  { title: "Full-stack development", desc: "React + Node.js + PostgreSQL — production-ready" },
  { title: "AI features if needed", desc: "Calling agents, scoring, chatbots — built in" },
  { title: "QA + testing", desc: "Full test cycle. No 'it works on my machine'" },
  { title: "Deployment + go-live", desc: "We ship it. You own it — code, domain, IP" },
];

const subFeatures = [
  { title: "Same team every sprint", desc: "No rotation. No re-explaining. They know your codebase from day 1." },
  { title: "Figma + Dev + QA + BA + PM", desc: "Every skill you need. No separate vendors. No handoffs." },
  { title: "AI features in every sprint", desc: "Claude, GPT, custom logic — in every sprint, not a separate engagement." },
  { title: "Clockify reports monthly", desc: "Every hour tracked and reported. You see exactly what was built." },
  { title: "Unused hours rollover", desc: "Don't lose what you paid for. Hours carry to next month." },
];

const plans = [
  { name: "Starter", price: "$1,800", hours: "40 hrs/mo" },
  { name: "Growth", price: "$3,200", hours: "80 hrs/mo", active: true },
  { name: "Scale", price: "$5,500", hours: "160 hrs/mo" },
];

function CheckIcon() {
  return (
    <div className="flex-shrink-0 mt-0.5 w-5 h-5 rounded-full bg-[var(--color-brand-green)]/10 flex items-center justify-center text-[var(--color-brand-green)]">
      <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
      </svg>
    </div>
  );
}

const PricingSection = () => {
  return (
    <section id="pricing" className="lg:py-16 max-sm:py-10 bg-[var(--color-bg-page)] px-4 sm:px-6 md:px-12 overflow-hidden">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="lg:mb-14 sm:mb-8">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[var(--color-border-brand-soft)] bg-[var(--color-bg-brand-tint)] text-[var(--color-brand-blue)] text-[10px] font-black tracking-widest uppercase mb-5">
            Pricing
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black font-heading tracking-tight text-[var(--color-text-primary)] leading-[1] mb-3">
            Where are you right now?
          </h2>
          <p className="text-[var(--color-text-body)] text-base max-w-lg leading-relaxed">
            Two clear paths. Both with a visible price. No "let's hop on a call to discuss."
          </p>
        </div>

        {/* Cards — grid on desktop, horizontal slider on mobile */}
        <div className="flex md:grid md:grid-cols-2 gap-6 overflow-x-auto md:overflow-visible snap-x snap-mandatory pt-5 pb-4 md:pt-0 md:pb-0 -mx-1 md:mx-0 px-1 md:px-0 scrollbar-hide w-full">

          {/* LEFT CARD — MVP */}
          <div className="snap-start shrink-0 w-[88vw] md:w-auto rounded-3xl border border-[var(--color-border-card)] bg-white p-5 sm:p-8 flex flex-col h-auto" style={{ boxShadow: "0 2px 20px rgba(0,0,0,0.05)" }}>
            <div className="flex-1 flex flex-col">
              <span className="inline-flex items-center w-fit text-[10px] px-3 py-1.5 rounded-full border border-[var(--color-border-subtle)] text-[var(--color-text-muted)] font-black uppercase tracking-widest">
                I have an idea
              </span>

              <h3 className="mt-5 text-2xl font-black font-heading text-[var(--color-text-primary)] leading-tight tracking-tight">
                Idea to live MVP in 30 days
              </h3>

              <p className="mt-3 text-sm text-[var(--color-text-body)] leading-relaxed">
                We take it from concept to live — design, code, QA, and deployment. Fixed price. No surprises.
              </p>

              {/* Features */}
              <div className="mt-7">
                <p className="text-[10px] font-black uppercase tracking-widest text-[var(--color-brand-green)] mb-4">
                  What you get
                </p>
                <div className="space-y-1">
                  {mvpFeatures.map((item) => (
                    <div key={item.title} className="flex gap-3 py-3 px-2 rounded-xl hover:bg-[var(--color-bg-card-light)] transition-colors duration-200">
                      <CheckIcon />
                      <div>
                        <p className="text-sm font-bold text-[var(--color-text-primary)]">{item.title}</p>
                        <p className="text-xs text-[var(--color-text-body)] leading-relaxed mt-0.5">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-auto">
              {/* Price box */}
              <div className="mt-7 border border-[var(--color-border-card)] rounded-2xl p-5 bg-[var(--color-bg-card-light)]">
                <p className="text-[10px] font-black uppercase tracking-widest text-[var(--color-text-muted)]">Fixed price</p>
                <h4 className="text-2xl font-black font-heading mt-1 text-[var(--color-text-primary)]">$8,000 – $15,000</h4>
                <p className="text-xs text-[var(--color-text-body)] mt-1 leading-relaxed">Scope agreed upfront. No hourly billing.</p>
              </div>

              <Link to="/contact" className="mt-5 w-full py-3.5 rounded-xl border border-[var(--color-border-subtle)] text-[var(--color-text-primary)] font-bold text-sm hover:bg-[var(--color-bg-card-light)] transition-all duration-300 flex items-center justify-center">
                Tell us your idea →
              </Link>
            </div>
          </div>

          {/* RIGHT CARD — Subscription */}
          <div className="snap-start shrink-0 w-[88vw] md:w-auto relative rounded-3xl border-2 border-[var(--color-brand-green)] bg-white p-5 sm:p-8 flex flex-col h-auto" style={{ boxShadow: "0 2px 20px rgba(36,181,116,0.1)" }}>
            <div className="flex-1 flex flex-col">
              <div className="absolute -top-3.5 left-6">
                <span className="text-[10px] px-3 py-1.5 rounded-full bg-[var(--color-brand-green)] text-white font-black uppercase tracking-widest">
                  Most Popular
                </span>
              </div>

              <span className="inline-flex items-center w-fit text-[10px] px-3 py-1.5 rounded-full border border-[var(--color-border-subtle)] text-[var(--color-text-muted)] font-black uppercase tracking-widest">
                My product is live
              </span>

              <h3 className="mt-5 text-2xl font-black font-heading text-[var(--color-text-primary)] leading-tight tracking-tight">
                Your product team, on subscription
              </h3>

              <p className="mt-3 text-sm text-[var(--color-text-body)] leading-relaxed">
                Same team every month. Cancel with 30 days notice. No lock-in, no re-explaining your codebase.
              </p>

              {/* Features */}
              <div className="mt-7">
                <p className="text-[10px] font-black uppercase tracking-widest text-[var(--color-brand-green)] mb-4">
                  What you get
                </p>
                <div className="space-y-1">
                  {subFeatures.map((item) => (
                    <div key={item.title} className="flex gap-3 py-3 px-2 rounded-xl hover:bg-[var(--color-bg-success-tint)] transition-colors duration-200">
                      <CheckIcon />
                      <div>
                        <p className="text-sm font-bold text-[var(--color-text-primary)]">{item.title}</p>
                        <p className="text-xs text-[var(--color-text-body)] leading-relaxed mt-0.5">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-auto">
              {/* Plans */}
              <div className="flex sm:grid sm:grid-cols-3 gap-3 mt-7 overflow-x-auto sm:overflow-visible snap-x snap-mandatory scrollbar-hide w-full">
                {plans.map((plan) => (
                  <div
                    key={plan.name}
                    className={`shrink-0 min-w-[120px] flex-1 p-4 rounded-2xl border transition-all duration-300 text-center flex flex-col items-center justify-center min-h-[110px] snap-start ${
                      plan.active
                        ? "border-[var(--color-brand-green)] bg-[var(--color-bg-success-tint)]"
                        : "border-[var(--color-border-card)] bg-white"
                    }`}
                  >
                    <p className={`text-[10px] uppercase font-black tracking-widest ${plan.active ? "text-[var(--color-brand-green)]" : "text-[var(--color-text-muted)]"}`}>
                      {plan.name}
                    </p>
                    <p className="text-xl font-black font-heading text-[var(--color-text-primary)] mt-1.5">{plan.price}</p>
                    <p className="text-[10px] font-bold text-[var(--color-text-muted)] mt-1">{plan.hours}</p>
                  </div>
                ))}
              </div>

              <Link to="/pricing" className="mt-5 w-full py-3.5 rounded-xl text-white font-bold text-sm bg-[var(--color-brand-green)] hover:opacity-90 transition-all duration-300 flex items-center justify-center">
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
