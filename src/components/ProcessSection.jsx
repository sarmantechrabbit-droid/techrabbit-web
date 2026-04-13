import { motion } from "framer-motion";
import Reveal from "./Reveal";

const steps = [
  {
    number: "01",
    title: "Book a free call",
    description: "30 min. Scope your idea, get a fixed price quote in 48 hours. No commitment.",
  },
  {
    number: "02",
    title: "We design + build",
    description: "Figma first. Dev. QA. AI features. Weekly Loom updates. Full visibility.",
  },
  {
    number: "03",
    title: "You launch + ship",
    description: "We deploy, test live, hand over. NDA signed on day 1. You own everything.",
  },
  {
    number: "04",
    title: "Keep growing",
    description: "Subscribe monthly. Same team. They know your codebase. Cancel anytime.",
  },
];

export default function ProcessSection() {
  return (
    <section className="py-24 bg-white px-6 md:px-12 relative overflow-hidden">
      {/* Decorative Background Element */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-linear-to-l from-gray-50 to-transparent -z-10" />

      <div className="max-w-7xl mx-auto">
        <Reveal className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-emerald-100 bg-emerald-50 text-emerald-600 text-[10px] font-bold tracking-widest uppercase mb-6">
            Process
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-gray-900 mb-6 font-heading tracking-tight">
            Simple process. <span className="text-gray-400 font-medium italic">Real output.</span>
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative p-8 rounded-[2rem] bg-gray-50/50 border border-gray-100 hover:bg-white hover:shadow-xl hover:shadow-gray-200/50 transition-all duration-500 group"
            >
              {/* Step Number Background */}
              <div className="absolute top-4 right-6 text-6xl font-black text-gray-100/50 group-hover:text-emerald-500/10 transition-colors font-heading select-none">
                {step.number}
              </div>

              <div className="relative z-10">
                <div className="w-10 h-10 rounded-xl bg-gray-900 text-white flex items-center justify-center text-xs font-bold mb-6 group-hover:bg-emerald-500 transition-colors">
                  {step.number}
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-4 font-heading">
                  {step.title}
                </h3>
                
                <p className="text-gray-500 text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>

              {/* Connector line for desktop */}
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-px bg-gray-100 -translate-y-1/2 group-hover:bg-emerald-200 transition-colors z-0" />
              )}
            </motion.div>
          ))}
        </div>

        {/* Bottom Action */}
        <Reveal className="mt-20 text-center">
          <button className="px-10 py-4 rounded-full bg-gray-900 text-white font-bold text-sm hover:bg-black transition-all shadow-xl shadow-gray-200 group">
            Start your project
            <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform">→</span>
          </button>
        </Reveal>
      </div>
    </section>
  );
}
