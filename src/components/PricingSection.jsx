import { motion } from "framer-motion";
import Reveal from "./Reveal";

const plans = [
  {
    title: "Sprints",
    subtitle: "2-Weeks Sprints",
    description:
      "For founders or teams who want to move fast — strategy, design, and development executed in 14 days.",
    price: "$4,500",
    period: "/ Bi-Weekly",
    pause: "Pause or cancel anytime",
    cta: "Book A Call",
    icon: "✨",
    iconBg: "bg-linear-to-br from-rose-500 to-purple-600",
    features: [
      "AI developer team",
      "Unlimited revisions",
      "Product strategy & roadmap",
      "Integrations & API's",
      "Communication via Slack",
      "Weekly progress updates",
    ],
    featured: false,
  },
  {
    title: "MVP Development",
    subtitle: "We deliver an MVP in 2 weeks",
    description:
      "In 2-weeks you'll have a full working product ready to launch to the world.",
    price: "$9,500",
    period: "/ One-time",
    pause: "Pause or cancel anytime",
    cta: "Get Started Today",
    icon: "⚡",
    iconBg: "bg-linear-to-br from-(--color-brand-blue) to-(--color-brand-green)",
    features: [
      "Functional MVP built with Lovable",
      "Database + API integrations (Supabase, OpenAI, etc)",
      "User authentication & onboarding flow",
      "Product design components",
      "Communication via Slack",
      "Weekly progress updates",
    ],
    featured: true,
  },
];

export default function PricingSection() {
  return (
    <section id="pricing" className="py-24 bg-white px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <Reveal className="text-center mb-16">
          <h2 className="text-[32px] md:text-[44px] font-bold text-(--color-text-primary) leading-tight font-heading max-w-3xl mx-auto">
            Our Pricing.{" "}
            <span className="text-(--color-text-muted)">
              Your own fractionalized team, with flexible pricing. No contract
              term.
            </span>
          </h2>
        </Reveal>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-12">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`rounded-[2.5rem] p-8 md:p-12 border transition-all duration-500 ${
                plan.featured
                  ? "bg-(--color-text-primary) border-transparent text-white"
                  : "bg-(--color-bg-page) border-(--color-border-default) shadow-sm"
              }`}
            >
              <div className="flex items-center gap-4 mb-8">
                <div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center text-xl shadow-lg ${plan.iconBg} text-white`}
                >
                  {plan.icon}
                </div>
                <div>
                  <h3
                    className={`text-xl font-bold font-heading ${plan.featured ? "text-white" : "text-(--color-text-primary)"}`}
                  >
                    {plan.title}
                  </h3>
                  <p className="text-(--color-text-body) text-sm font-medium">
                    {plan.subtitle}
                  </p>
                </div>
              </div>

              <p
                className={`text-sm leading-relaxed mb-8 ${plan.featured ? "text-(--color-text-muted)" : "text-(--color-text-body)"}`}
              >
                {plan.description}
              </p>

              <div className="mb-8">
                <div className="flex items-baseline gap-1">
                  <span className="text-5xl font-black text-(--color-price-accent) font-heading tracking-tight">
                    {plan.price}
                  </span>
                  <span
                    className={`text-sm font-bold ${plan.featured ? "text-(--color-text-lighter)" : "text-(--color-text-muted)"}`}
                  >
                    {plan.period}
                  </span>
                </div>
                <p
                  className={`text-xs mt-2 font-semibold ${plan.featured ? "text-(--color-text-body)" : "text-(--color-text-muted)"}`}
                >
                  {plan.pause}
                </p>
              </div>

              <button
                className={`w-full py-4 rounded-full text-sm font-bold transition-all duration-300 mb-10 ${
                  plan.featured
                    ? "bg-white text-black hover:bg-(--color-bg-card)"
                    : "bg-white border border-(--color-border-subtle) text-(--color-text-primary) hover:bg-(--color-bg-card-light)"
                }`}
              >
                {plan.cta}
              </button>

              <div className="space-y-4">
                <p
                  className={`text-sm font-bold ${plan.featured ? "text-white" : "text-(--color-text-primary)"}`}
                >
                  What's included:
                </p>
                {plan.features.map((feature) => (
                  <div key={feature} className="flex items-start gap-3">
                    <div
                      className={`mt-1 shrink-0 w-4 h-4 rounded-full flex items-center justify-center ${plan.featured ? "bg-white/10 text-white" : "bg-(--color-bg-card) text-(--color-text-primary)"}`}
                    >
                      <svg
                        width="10"
                        height="8"
                        viewBox="0 0 10 8"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M1 4.5l3 3 5-6" />
                      </svg>
                    </div>
                    <span
                      className={`text-[13.5px] font-medium leading-tight ${plan.featured ? "text-(--color-text-muted)" : "text-(--color-text-body)"}`}
                    >
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <Reveal>
          <div className="max-w-xl mx-auto bg-(--color-bg-card-light)/50 border border-(--color-border-default) rounded-4xl p-6 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-white shadow-sm shrink-0">
                <img
                  src="https://ui-avatars.com/api/?name=Alex+Rivera&background=000&color=fff"
                  alt="Founder"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h4 className="text-(--color-text-primary) font-bold text-base font-heading">
                  Book a call
                </h4>
                <p className="text-(--color-text-muted) text-sm">
                  Book a 15-minute free call with our team
                </p>
              </div>
            </div>
            <button className="flex items-center gap-2 px-6 py-3 rounded-2xl bg-[#111] text-white font-bold text-sm hover:bg-black transition-all shadow-lg shadow-(--color-text-dark)/10">
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                <line x1="16" y1="2" x2="16" y2="6" />
                <line x1="8" y1="2" x2="8" y2="6" />
                <line x1="3" y1="10" x2="21" y2="10" />
              </svg>
              Book a Call
            </button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
