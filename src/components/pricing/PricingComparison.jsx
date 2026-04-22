import { motion } from "framer-motion";
import { Check } from "lucide-react";
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
            <div className="inline-flex items-center gap-2 rounded-full border border-[var(--color-border-card)] bg-white px-4 py-2 text-[10px] font-black uppercase tracking-widest shadow-sm sm:px-5 sm:py-2.5">
              <span
                className="h-2 w-2 rounded-full"
                style={{ background: "var(--color-brand-green)" }}
              />
              Why Tech Rabbit
            </div>

            <h2 className="text-4xl font-bold font-heading leading-[1.15] tracking-tight md:text-5xl">
              Why we stand out
              {/* <br />
  <span
    style={{
      background:
        "linear-gradient(135deg, var(--color-brand-blue), var(--color-brand-green))",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
    }}
  >
    to the rest
  </span> */}
            </h2>

            <p className="max-w-2xl text-sm font-medium text-gray-600 md:text-base">
              Traditional development options cost more, deliver less, and lock you in. See how Tech Rabbit compares.
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
            <div className="min-w-[1000px] overflow-hidden rounded-3xl border border-[var(--color-border-card)] shadow-lg">
              <div className="grid grid-cols-5 border-b border-[var(--color-border-card)] bg-white">
                <div className="p-5 sm:p-6 md:p-8"></div>

                <div
                  className="border-x border-[var(--color-border-card)] p-5 text-center sm:p-6 md:p-8"
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(42,171,215,0.08), rgba(36,181,116,0.08))",
                  }}
                >
                  <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-[var(--color-border-card)] bg-white px-3 py-1.5">
                    <span
                      className="h-1.5 w-1.5 rounded-full"
                      style={{ background: "var(--color-brand-green)" }}
                    />
                    <span className="text-[9px] font-black uppercase tracking-widest text-gray-900">
                      Tech Rabbit
                    </span>
                  </div>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-gray-600">
                    Best Choice
                  </p>
                </div>

                {["Freelancer", "Offshore", "In-house"].map((label) => (
                  <div
                    key={label}
                    className="border-l border-[var(--color-border-card)] bg-white p-5 text-center sm:p-6 md:p-8"
                  >
                    <p className="text-[10px] font-bold uppercase tracking-widest text-gray-500">
                      {label}
                    </p>
                  </div>
                ))}
              </div>

              {comparisonData.map((row, idx) => (
                <motion.div
                  key={row.label}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: idx * 0.05, duration: 0.4 }}
                  viewport={{ once: true }}
                  className={`grid grid-cols-5 items-center transition-all duration-300 hover:bg-gray-50/50 ${
                    idx !== comparisonData.length - 1
                      ? "border-b border-gray-100"
                      : ""
                  }`}
                >
                  <div className="bg-white p-5 sm:p-6 md:p-8">
                    <p className="text-sm font-bold font-heading text-gray-900">
                      {row.label}
                    </p>
                  </div>

                  <div
                    className="border-x border-gray-100 p-5 text-center sm:p-6 md:p-8"
                    style={{
                      background:
                        "linear-gradient(135deg, rgba(42,171,215,0.04), rgba(36,181,116,0.04))",
                    }}
                  >
                    <div className="flex items-center justify-center gap-2">
                      <Check
                        className="h-4 w-4 flex-shrink-0"
                        style={{ color: "var(--color-brand-green)" }}
                      />
                      <span className="text-sm font-bold text-gray-900">
                        {row.techRabbit}
                      </span>
                    </div>
                  </div>

                  <div className="bg-white p-5 text-center sm:p-6 md:p-8">
                    <span className="text-sm font-medium text-gray-600">
                      {row.freelancer}
                    </span>
                  </div>

                  <div className="border-l border-gray-100 bg-white p-5 text-center sm:p-6 md:p-8">
                    <span className="text-sm font-medium text-gray-600">
                      {row.offshore}
                    </span>
                  </div>

                  <div className="border-l border-gray-100 bg-white p-5 text-center sm:p-6 md:p-8">
                    <span className="text-sm font-medium text-gray-600">
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
