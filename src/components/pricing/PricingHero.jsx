import { useState } from "react";
import { Check, ArrowRight } from "lucide-react";
import Reveal from "../Reveal";

const plans = [
  {
    name: "Starter",
    price: 1800,
    hours: "40 hrs/mo",
    desc: "Perfect for maintenance and small features.",
    cta: "Get Started",
    featured: false,
    features: [
      "Dedicated team",
      "UI/UX updates",
      "React & Node.js",
      "Slack support",
      "Time tracking",
    ],
  },
  {
    name: "Growth",
    price: 3200,
    hours: "80 hrs/mo",
    desc: "Full product team shipping weekly.",
    cta: "Go Growth",
    featured: true,
    features: [
      "Full development",
      "AI features",
      "Database optimization",
      "Weekly demos",
      "Code reviews",
      "Priority support",
    ],
  },
  {
    name: "Scale",
    price: 5500,
    hours: "160 hrs/mo",
    desc: "2 senior developers equivalent.",
    cta: "Get Started",
    featured: false,
    features: [
      "Multiple features",
      "Advanced DevOps",
      "Security hardening",
      "Scalability audits",
      "Mobile + Web",
      "Project manager",
    ],
  },
];

export default function PricingHero() {
  const [billing, setBilling] = useState("monthly");

  return (
    <section className="relative py-12 md:py-16 bg-[var(--color-bg-page)] overflow-hidden">
      {/* Subtle background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 right-20 w-72 h-72 rounded-full opacity-8 blur-3xl" style={{ background: "radial-gradient(circle, var(--color-brand-blue), transparent)" }} />
        <div className="absolute bottom-20 left-10 w-64 h-64 rounded-full opacity-8 blur-3xl" style={{ background: "radial-gradient(circle, var(--color-brand-green), transparent)" }} />
      </div>

      <div className="max-w-6xl mx-auto px-6 md:px-10 relative z-10">
        {/* HEADER */}
        <Reveal>
          <div className="text-center mb-16 space-y-5">
            {/* Top badge */}
            <div className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full backdrop-blur-md bg-white/40 border border-white/60 text-[9px] font-black tracking-widest uppercase shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="w-2 h-2 rounded-full animate-pulse" style={{ background: "var(--color-brand-green)" }} />
              <span>Transparent Pricing</span>
            </div>

            {/* Main heading - Medium size */}
            <div className="space-y-2">
              <h1 className="text-3xl md:text-4xl font-bold font-heading tracking-tight leading-[1.2]">
                A full product team,
                <br />
                <span
                  style={{
                    backgroundImage: "linear-gradient(135deg, var(--color-brand-blue), var(--color-brand-green))",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  at a fraction of local cost
                </span>
              </h1>
            </div>

            {/* Subheading with services */}
            <p className="text-gray-600 max-w-2xl mx-auto text-sm md:text-base font-medium leading-relaxed">
              Figma · Full-Stack · QA · BA · AI — everything included. No hidden fees. Cancel anytime.
            </p>

            {/* BILLING TOGGLE - Premium style */}
            <div className="flex justify-center pt-3">
              <div className="inline-flex bg-white/50 backdrop-blur-md p-2 rounded-full border border-white/60 shadow-lg">
                {["monthly", "quarterly"].map((period) => (
                  <button
                    key={period}
                    onClick={() => setBilling(period)}
                    className={`relative px-7 py-2.5 rounded-full text-xs font-black uppercase tracking-widest transition-all duration-300 ${
                      billing === period ? "text-white" : "text-gray-600 hover:text-gray-900"
                    }`}
                    style={{
                      background:
                        billing === period
                          ? "linear-gradient(135deg, var(--color-brand-blue), var(--color-brand-green))"
                          : "transparent",
                    }}
                  >
                    {period === "monthly" ? "Monthly" : "Quarterly"}
                    {period === "quarterly" && billing === period && (
                      <span className="ml-2 inline-block px-2 py-0.5 bg-white/20 rounded-full text-[7px] font-black">Save 10%</span>
                    )}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </Reveal>

        {/* PRICING CARDS */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {plans.map((plan, idx) => {
            const price = billing === "monthly" ? plan.price : Math.round(plan.price * 0.9);
            const accentColor = idx === 0 ? "var(--color-brand-blue)" : idx === 1 ? "var(--color-brand-green)" : "var(--color-brand-blue)";

            return (
              <Reveal key={plan.name} delay={idx * 0.08}>
                <div
                  className={`relative rounded-2xl overflow-hidden transition-all duration-500 flex flex-col h-full group ${
                    plan.featured ? "md:scale-105 md:shadow-2xl shadow-lg" : "shadow-sm hover:shadow-lg"
                  }`}
                  style={{
                    background: plan.featured ? "linear-gradient(135deg, rgba(42,171,215,0.08), rgba(36,181,116,0.08))" : "bg-white",
                    border: `1px solid ${plan.featured ? "rgba(42,171,215,0.2)" : "var(--color-border-card)"}`,
                  }}
                >
                  {/* Top accent */}
                  <div className="h-1 w-full" style={{ background: `linear-gradient(90deg, ${accentColor}, transparent)` }} />

                  {/* Badge */}
                  {plan.featured && (
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                      <div className="px-3 py-1 rounded-full text-xs font-black uppercase tracking-widest text-white shadow-lg" style={{ background: `linear-gradient(135deg, var(--color-brand-blue), var(--color-brand-green))` }}>
                        Popular
                      </div>
                    </div>
                  )}

                  {/* Content */}
                  <div className="p-7">
                    <h3 className="text-xl font-black font-heading mb-1">{plan.name}</h3>
                    <p className="text-xs font-black uppercase tracking-widest text-gray-500 mb-3">{plan.hours}</p>
                    <p className="text-gray-600 text-sm font-medium mb-6">{plan.desc}</p>

                    {/* Price */}
                    <div className="mb-6">
                      <div className="flex items-baseline gap-1">
                        <span className="text-4xl font-black font-heading">${price.toLocaleString()}</span>
                        <span className="text-gray-500 text-xs font-bold">/mo</span>
                      </div>
                      {billing === "quarterly" && (
                        <p className="text-xs font-bold mt-1" style={{ color: accentColor }}>
                          Save ${Math.round(plan.price * 0.3)}/qtr
                        </p>
                      )}
                    </div>

                    {/* Button */}
                    {plan.featured ? (
                      <button className="w-full py-3 px-6 rounded-xl text-xs font-black flex items-center justify-center gap-2 transition-all text-white group/btn hover:shadow-lg" style={{ background: "linear-gradient(135deg, var(--color-brand-blue), var(--color-brand-green))" }}>
                        {plan.cta}
                        <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-0.5" />
                      </button>
                    ) : (
                      <button className="w-full py-3 px-6 rounded-xl text-xs font-black flex items-center justify-center gap-2 transition-all border-2 hover:shadow-lg group/btn" style={{ borderColor: accentColor, color: accentColor }}>
                        {plan.cta}
                        <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-0.5" />
                      </button>
                    )}
                  </div>

                  {/* Divider */}
                  <div className="mx-7 h-px bg-gray-200" />

                  {/* Features */}
                  <div className="p-7 pt-6 flex-grow">
                    <ul className="space-y-2.5">
                      {plan.features.map((f, i) => (
                        <li key={i} className="flex items-start gap-2.5">
                          <div className="w-4 h-4 rounded-full flex items-center justify-center shrink-0 mt-0.5" style={{ background: `color-mix(in srgb, ${accentColor} 12%, transparent)` }}>
                            <Check className="w-2.5 h-2.5" style={{ color: accentColor }} />
                          </div>
                          <span className="text-xs text-gray-700 font-semibold">{f}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>

        {/* BOTTOM CTA */}
        <Reveal delay={0.3}>
          <div className="rounded-2xl p-6 md:p-8 text-center" style={{ background: "linear-gradient(135deg, rgba(42,171,215,0.08), rgba(36,181,116,0.08))", border: "1px solid rgba(42,171,215,0.2)" }}>
            <div className="h-1 w-12 mx-auto mb-3" style={{ background: "linear-gradient(90deg, var(--color-brand-blue), var(--color-brand-green))" }} />
            <h3 className="text-xl font-black font-heading mb-2">Need custom plan?</h3>
            <p className="text-gray-600 text-sm font-medium mb-4">Let's discuss your specific needs.</p>
            <button className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl text-xs font-black text-white transition-all hover:shadow-lg group/cta" style={{ background: "linear-gradient(135deg, var(--color-brand-blue), var(--color-brand-green))" }}>
              Schedule Call
              <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/cta:translate-x-0.5" />
            </button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
