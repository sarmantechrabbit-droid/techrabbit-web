import { motion } from "framer-motion";
import Reveal from "./Reveal";

const comparisonData = [
  {
    label: "Team structure",
    techRabbit: "100% Inhouse, same office",
    freelancer: "Remote freelancers",
    offshore: "Distributed, no oversight",
  },
  {
    label: "Codebase continuity",
    techRabbit: "Same team every sprint",
    freelancer: "New dev every project",
    offshore: "Rotation — context lost",
  },
  {
    label: "Design included",
    techRabbit: "Always — Figma Inhouse",
    freelancer: "Separate vendor",
    offshore: "Extra cost",
  },
  {
    label: "AI features",
    techRabbit: "Built-in, every sprint",
    freelancer: "Not offered",
    offshore: "Expensive add-on",
  },
  {
    label: "Transparency",
    techRabbit: "Clockify reports monthly",
    freelancer: "Black box billing",
    offshore: "Monthly invoice only",
  },
  {
    label: "Cancel policy",
    techRabbit: "30-day, anytime",
    freelancer: "Long contracts",
    offshore: "3-6 month minimum",
  },
];

export default function ComparisonSection() {
  return (
    <section className="py-24 bg-gray-50/50 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <Reveal className="mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-indigo-100 bg-indigo-50 text-indigo-600 text-[10px] font-bold tracking-widest uppercase mb-6">
            Why TechRabbit
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6 font-heading tracking-tight">
            Why we stand out
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl leading-relaxed">
            Traditional offshore agencies give you developers. We give you a
            product team that ships.
          </p>
        </Reveal>

        {/* Comparison Table / Grid */}
        <Reveal>
          <div className="overflow-x-auto">
            <div className="min-w-[800px] bg-white border border-gray-100 rounded-[2.5rem] shadow-sm overflow-hidden mb-12">
              <div className="grid grid-cols-4 border-b border-gray-50 bg-gray-50/50">
                <div className="p-8"></div>
                <div className="p-8 text-center border-x border-gray-50">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-[#09B87F]">
                    Tech Rabbit
                  </span>
                </div>
                <div className="p-8 text-center">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400">
                    Freelancer
                  </span>
                </div>
                <div className="p-8 text-center border-l border-gray-50">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400">
                    Traditional Offshore
                  </span>
                </div>
              </div>

              {comparisonData.map((row, i) => (
                <div
                  key={row.label}
                  className={`grid grid-cols-4 items-center transition-colors hover:bg-gray-50/30 ${
                    i !== comparisonData.length - 1 ? "border-b border-gray-50" : ""
                  }`}
                >
                  <div className="p-8 text-sm font-bold text-gray-900 font-heading">
                    {row.label}
                  </div>
                  <div className="p-8 text-center border-x border-gray-50 bg-[#09B87F]/2">
                    <div className="flex items-center justify-center gap-2 text-sm font-semibold text-gray-700">
                      <svg
                        width="14"
                        height="10"
                        viewBox="0 0 14 10"
                        fill="none"
                        className="text-[#09B87F] shrink-0"
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
                  <div className="p-8 text-center">
                    <span className="text-sm font-medium text-gray-400">
                      {row.freelancer}
                    </span>
                  </div>
                  <div className="p-8 text-center border-l border-gray-50">
                    <span className="text-sm font-medium text-gray-400">
                      {row.offshore}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        {/* Bottom Guarantee Card */}
        <Reveal>
          <div className="grid grid-cols-1 lg:grid-cols-12 items-center bg-gray-900 rounded-[2.5rem] p-8 md:p-12 text-white overflow-hidden relative group">
            <div className="absolute top-0 right-0 w-1/3 h-full bg-linear-to-l from-indigo-500/10 to-transparent pointer-events-none" />
            
            <div className="lg:col-span-8 relative z-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/20 bg-white/5 text-white/60 text-[10px] font-bold tracking-widest uppercase mb-6">
                Our Guarantee
              </div>
              <h3 className="text-3xl md:text-4xl font-bold font-heading mb-6 tracking-tight">
                100% In-house. <br className="hidden md:block" />
                <span className="text-white/60">No freelancers. No exceptions.</span>
              </h3>
              <p className="text-gray-400 text-lg max-w-xl leading-relaxed">
                Every person on your project sits in the same room in Ahmedabad.
                Same standup. Same sprint. Same accountability.
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
                  <div className="text-[10px] font-bold uppercase tracking-widest text-[#09B87F]">
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
