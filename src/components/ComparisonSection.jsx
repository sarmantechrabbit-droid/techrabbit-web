import Reveal from "./Reveal";

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
    offshore: "Rotation - context lost",
    inhouse: "Internal - but slow to hire",
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
    inhouse: "Payroll - fixed",
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

export default function ComparisonSection() {
  return (
    <section className="py-16 sm:py-20 bg-[var(--color-bg-card)] px-4 sm:px-6 md:px-12 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <Reveal className="lg:mb-16 max-sm:mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[var(--color-border-brand-soft)] bg-[var(--color-bg-brand-tint)] text-[var(--color-brand-blue)] text-[10px] font-black tracking-widest uppercase mb-5">
            Why Tech Rabbit
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black font-heading tracking-tight text-[var(--color-text-primary)] leading-[1] mb-4">
            Why we stand out
          </h2>
          <p className="text-[var(--color-text-body)] text-base max-w-xl leading-relaxed">
            Traditional offshore agencies give you developers. We give you a
            product team that ships.
          </p>
        </Reveal>

        <Reveal className="w-full">
          <div className="overflow-x-auto w-full bg-[var(--color-bg-page)]  border border-[var(--color-border-default)] rounded-[1.5rem] sm:rounded-[2.5rem] shadow-sm mb-12  scrollbar-hide">
            <div className="min-w-[700px] lg:min-w-[1000px]">
              {/* Header */}
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

              {/* Rows */}
              {comparisonData.map((row, i) => (
                <div
                  key={row.label}
                  className={`grid grid-cols-5 items-center transition-colors hover:bg-[color:var(--color-bg-card)]/30 ${i !== comparisonData.length - 1
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
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        {/* Bottom section unchanged */}
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
