import { motion } from "framer-motion";
import { Check, X } from "lucide-react";
import Reveal from "../Reveal";

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
    offshore: "Rotation – context lost",
    inhouse: "Internal – but slow to hire",
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
    techRabbit: "Clockify – every hour",
    freelancer: "Invoice only",
    offshore: "Black box",
    inhouse: "Payroll – fixed",
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
    techRabbit: "Yes – every sprint",
    freelancer: "Varies",
    offshore: "Rarely",
    inhouse: "Varies by team",
  },
];

export default function PricingComparison() {
  return (
    <section className="relative bg-[var(--color-bg-page)] overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-10 w-96 h-96 rounded-full opacity-8 blur-3xl" style={{ background: "radial-gradient(circle, var(--color-brand-blue), transparent)" }} />
        <div className="absolute bottom-40 left-20 w-80 h-80 rounded-full opacity-8 blur-3xl" style={{ background: "radial-gradient(circle, var(--color-brand-green), transparent)" }} />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* HEADER */}
        <Reveal>
          <div className="text-center mb-12 space-y-4">
            <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white border border-[var(--color-border-card)] text-[10px] font-black tracking-widest uppercase shadow-sm">
              <span className="w-2 h-2 rounded-full" style={{ background: "var(--color-brand-green)" }} />
              Why We Stand Out
            </div>

            <h2 className="text-4xl md:text-5xl font-bold font-heading tracking-tight leading-[1.2]">
              How we compare
              <br />
              <span style={{ background: "linear-gradient(135deg, var(--color-brand-blue), var(--color-brand-green))", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                to the rest
              </span>
            </h2>

            <p className="text-gray-600 max-w-2xl mx-auto text-base font-medium">
              See why founders choose Tech Rabbit over freelancers, offshore teams, and expensive in-house hires.
            </p>
          </div>
        </Reveal>

        {/* COMPARISON TABLE */}
        <Reveal delay={0.2}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="overflow-x-auto"
          >
            <div className="min-w-[1000px] rounded-3xl overflow-hidden border border-[var(--color-border-card)] shadow-lg">
              {/* Header Row */}
              <div className="grid grid-cols-5 bg-white border-b border-[var(--color-border-card)]">
                <div className="p-6 md:p-8"></div>

                {/* Tech Rabbit - Featured */}
                <div
                  className="p-6 md:p-8 text-center border-x border-[var(--color-border-card)]"
                  style={{
                    background: "linear-gradient(135deg, rgba(42,171,215,0.08), rgba(36,181,116,0.08))",
                  }}
                >
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-[var(--color-border-card)] mb-3">
                    <span className="w-1.5 h-1.5 rounded-full" style={{ background: "var(--color-brand-green)" }} />
                    <span className="text-[9px] font-black uppercase tracking-widest text-gray-900">
                      Tech Rabbit
                    </span>
                  </div>
                  <p className="text-[10px] font-bold text-gray-600 uppercase tracking-widest">
                    Best Choice
                  </p>
                </div>

                {/* Other columns */}
                {["Freelancer", "Offshore", "In-house"].map((label) => (
                  <div key={label} className="p-6 md:p-8 text-center border-l border-[var(--color-border-card)] bg-white">
                    <p className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">
                      {label}
                    </p>
                  </div>
                ))}
              </div>

              {/* Data Rows */}
              {comparisonData.map((row, idx) => (
                <motion.div
                  key={row.label}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: idx * 0.05, duration: 0.4 }}
                  viewport={{ once: true }}
                  className={`grid grid-cols-5 items-center transition-all duration-300 hover:bg-gray-50/50 ${
                    idx !== comparisonData.length - 1 ? "border-b border-gray-100" : ""
                  }`}
                >
                  {/* Label */}
                  <div className="p-6 md:p-8 bg-white">
                    <p className="text-sm font-bold font-heading text-gray-900">
                      {row.label}
                    </p>
                  </div>

                  {/* Tech Rabbit - Featured */}
                  <div
                    className="p-6 md:p-8 text-center border-x border-gray-100"
                    style={{
                      background: "linear-gradient(135deg, rgba(42,171,215,0.04), rgba(36,181,116,0.04))",
                    }}
                  >
                    <div className="flex items-center justify-center gap-2">
                      <Check className="w-4 h-4 flex-shrink-0" style={{ color: "var(--color-brand-green)" }} />
                      <span className="text-sm font-bold text-gray-900">
                        {row.techRabbit}
                      </span>
                    </div>
                  </div>

                  {/* Freelancer */}
                  <div className="p-6 md:p-8 text-center bg-white">
                    <span className="text-sm text-gray-600 font-medium">
                      {row.freelancer}
                    </span>
                  </div>

                  {/* Offshore */}
                  <div className="p-6 md:p-8 text-center border-l border-gray-100 bg-white">
                    <span className="text-sm text-gray-600 font-medium">
                      {row.offshore}
                    </span>
                  </div>

                  {/* In-house */}
                  <div className="p-6 md:p-8 text-center border-l border-gray-100 bg-white">
                    <span className="text-sm text-gray-600 font-medium">
                      {row.inhouse}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </Reveal>

        
      </div>
    </section>
  );
}
