import { motion } from "framer-motion";
import { Check } from "lucide-react";
import Reveal from "../Reveal";
import { Sparkles } from "lucide-react";

const comparisonData = [
  {
    label: "Team structure",
    techRabbit: "100% inhouse, same office",
    freelancer: "1 person, part-time",
    offshore: "Distributed, no oversight",
    inhouse: "Full salary + benefits",
  },
  {
    label: "Codebase continuity",
    techRabbit: "Same team, every sprint",
    freelancer: "Disappears after project",
    offshore: "Rotation — context lost",
    inhouse: "	Internal — but slow to hire",
  },
  {
    label: "Figma design",
    techRabbit: "Always included",
    freelancer: "Usually not",
    offshore: "Extra cost",
    inhouse: "Separate hire needed",
  },
  {
    label: "AI features",
    techRabbit: "Built-in, every sprint",
    freelancer: "Rarely offered",
    offshore: "Expensive add-on",
    inhouse: "Depends on team skills",
  },
  {
    label: "QA",
    techRabbit: "Full cycle included",
    freelancer: "Self-tested",
    offshore: "Basic only",
    inhouse: "Separate QA hire",
  },
  {
    label: "Billing transparency",
    techRabbit: "Clockify - every hour",
    freelancer: "Invoice only",
    offshore: "Black box",
    inhouse: "Payroll — fixed",
  },
  {
    label: "Flexibility",
    techRabbit: "Cancel in 30 days",
    freelancer: "Project by project",
    offshore: "3-6 month lock-in",
    inhouse: "Permanent hire",
  },
  {
    label: "Time to start",
    techRabbit: "within 5 days",
    freelancer: "1-2 weeks",
    offshore: "4-8 weeks",
    inhouse: "3-6 months",
  },
  {
    label: "Monthly cost (senior)",
    techRabbit: "$3,200 (80 hrs)",
    freelancer: "$4,000-8,000+",
    offshore: "$3,000-6,000",
    inhouse: "$12,000-20,000+",
  },
  {
    label: "AI-powered dev tools",
    techRabbit: "Yes - every sprint",
    freelancer: "Varies",
    offshore: "Rarely",
    inhouse: "Varies by team",
  },
];

export default function PricingComparison() {
  return (
    <section className="relative overflow-hidden bg-[var(--color-bg-page)] px-4 pt-16 sm:px-6 md:px-8 lg:px-12">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute right-[-20%] top-20 h-96 w-96 rounded-full blur-3xl sm:right-[-10%] md:right-10"
          style={{
            background:
              "radial-gradient(circle, var(--color-brand-blue), transparent)",
            opacity: 0.08,
          }}
        />
        <div
          className="absolute bottom-40 left-[-20%] h-80 w-80 rounded-full blur-3xl sm:left-[-10%] md:left-20"
          style={{
            background:
              "radial-gradient(circle, var(--color-brand-green), transparent)",
            opacity: 0.08,
          }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl">
        <Reveal>
          <div className="mb-12 space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[var(--color-border-brand-soft)] bg-[var(--color-bg-brand-tint)] text-[var(--color-brand-blue)] text-[10px] font-black tracking-widest uppercase">
              <Sparkles className="w-3.5 h-3.5" />
              Why Tech Rabbit
            </div>

            <h2 className="text-4xl font-bold font-heading leading-[1.15] tracking-tight md:text-5xl">
              Why we stand out
            </h2>

            <p className="max-w-2xl text-sm font-medium text-gray-600 md:text-base">
              Traditional offshore agencies give you developers. We give you a product team that ships.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.2}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="overflow-x-auto scrollbar-hide"
          >
            <div className="min-w-[1000px] overflow-hidden rounded-3xl border border-[var(--color-border-default)] shadow-lg">
              <div className="grid grid-cols-5 border-b border-[var(--color-border-light)] bg-[color:var(--color-bg-card)]/50">
                <div className="sticky left-0 z-20 p-4 md:p-8 bg-white border-r border-[var(--color-border-light)]/50 shadow-[4px_0_12px_rgba(0,0,0,0.02)]"></div>

                <div className="p-4 md:p-8 text-center border-x border-[var(--color-border-light)] bg-white rounded-t-lg">
                  <div className="h-full flex items-center justify-center">
                    <div className="flex flex-col items-center gap-1">
                      <div className="flex items-center justify-center text-center gap-2">
                        <div className="flex items-center justify-between gap-2">
                          <div className="w-2 h-2 rounded-full bg-[var(--color-brand-green)]"></div>
                          <span className="text-[10px] font-bold uppercase tracking-widest text-[var(--color-text-primary)]">
                            TECH RABBIT
                          </span>
                        </div>
                      </div>
                      <span className="text-[8px] font-bold uppercase tracking-widest text-[var(--color-text-muted)]">
                        BEST CHOICE
                      </span>
                    </div>
                  </div>
                </div>

                <div className="p-4 md:p-8 flex items-center justify-center text-center">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-[var(--color-text-muted)]">
                    Freelancer
                  </span>
                </div>

                <div className="p-4 md:p-8 text-center border-l border-[var(--color-border-light)]">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-[var(--color-text-muted)]">
                    Traditional Offshore
                  </span>
                </div>

                <div className="p-4 md:p-8 border-l border-[var(--color-border-light)] flex items-center justify-center text-center h-full">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-[var(--color-text-muted)]">
                    In-house Team
                  </span>
                </div>
              </div>

              {comparisonData.map((row, i) => (
                <motion.div
                  key={row.label}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: i * 0.05, duration: 0.4 }}
                  viewport={{ once: true }}
                  className={`grid grid-cols-5 items-center transition-colors hover:bg-[color:var(--color-bg-card)]/30 ${
                    i !== comparisonData.length - 1
                      ? "border-b border-[var(--color-border-light)]"
                      : ""
                  }`}
                >
                  <div className="sticky left-0 z-20 py-8 max-sm:py-12 px-4 text-sm font-bold text-[var(--color-text-primary)] font-heading bg-white border-r border-[var(--color-border-light)]/50 shadow-[4px_0_12px_rgba(0,0,0,0.02)]">
                    {row.label}
                  </div>

                  <div className="py-8 px-4 md:p-8 text-center border-x border-[var(--color-border-light)] bg-[color:var(--color-brand-green)]/5">
                    <div className="flex items-center justify-center gap-2 text-sm font-semibold text-[var(--color-text-dark)]">
                      <svg
                        width="14"
                        height="10"
                        viewBox="0 0 14 10"
                        fill="none"
                        className="text-[var(--color-brand-green)] shrink-0"
                      >
                        <path
                          d="M1.5 5.5L5 9L12.5 1.5"
                          stroke="currentColor"
                          strokeWidth="2.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      {row.techRabbit}
                    </div>
                  </div>

                  <div className="p-4 md:p-8 text-center">
                    <span className="text-sm font-medium text-[var(--color-text-muted)]">
                      {row.freelancer}
                    </span>
                  </div>

                  <div className="p-4 md:p-8 text-center border-l border-[var(--color-border-light)]">
                    <span className="text-sm font-medium text-[var(--color-text-muted)]">
                      {row.offshore}
                    </span>
                  </div>

                  <div className="p-4 md:p-8 text-center border-l border-[var(--color-border-light)]">
                    <span className="text-sm font-medium text-[var(--color-text-muted)]">
                      {row.inhouse}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </Reveal>

        {/* Bottom section - Our Guarantee */}
        <Reveal>
          <div className="grid grid-cols-1 lg:grid-cols-12 items-center bg-[var(--color-bg-dark-surface)] rounded-[1.5rem] sm:rounded-[2.5rem] p-6 sm:p-8 md:p-12 text-white overflow-hidden relative group">
            <div
              className="absolute top-0 right-0 w-1/3 h-full pointer-events-none"
              style={{
                background:
                  "linear-gradient(to left, rgba(42, 171, 215, 0.1), transparent)",
              }}
            />

            <div className="lg:col-span-8 relative z-10">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[var(--color-border-on-dark)] bg-white/5 text-[var(--color-text-on-dark)] text-[10px] font-black tracking-widest uppercase mb-5">
                Our Guarantee
              </div>
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-black font-heading mb-4 tracking-tight">
                100% In-house. <br className="hidden md:block" />
                <span className="text-white/60">
                  No freelancers. No exceptions.
                </span>
              </h3>
              <p className="text-[var(--color-text-muted)] text-lg max-w-xl leading-relaxed">
                Every person on your project sits in the same office in
                Ahmedabad. Same standup. Same sprint. Same accountability.
                You're not buying hours — you're buying a team that cares.
              </p>
            </div>

            <div className="lg:col-span-4 mt-12 lg:mt-0 grid grid-cols-3 gap-4 lg:gap-8">
              {[
                { value: "0", label: "Freelancers" },
                { value: "1", label: "Office" },
                { value: "ISO", label: "Certified" },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-2xl md:text-3xl font-black font-heading mb-1">
                    {stat.value}
                  </div>
                  <div className="text-[10px] font-bold uppercase tracking-widest text-[var(--color-brand-green)]">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
