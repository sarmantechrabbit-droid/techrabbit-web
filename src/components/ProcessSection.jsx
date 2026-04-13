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
    <section className="py-24 bg-(--color-bg-page) px-6 md:px-12 relative overflow-hidden">
      {/* Decorative Background Element */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-linear-to-l from-(--color-bg-card-light)/50 to-transparent -z-10" />

      <div className="max-w-7xl mx-auto">
        <Reveal className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-(--color-brand-green)/20 bg-(--color-brand-green)/5 text-(--color-brand-green) text-[10px] font-bold tracking-widest uppercase mb-6">
            Process
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-(--color-text-primary) mb-6 font-heading tracking-tight">
            Simple process. <span className="text-(--color-text-muted) font-medium italic">Real output.</span>
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
              className="relative p-8 rounded-4xl bg-(--color-bg-card-light)/50 border border-(--color-border-light) hover:bg-(--color-bg-page) hover:shadow-xl hover:shadow-(--color-text-dark)/5 transition-all duration-500 group"
            >
              {/* Step Number Background */}
              <div className="absolute top-4 right-6 text-6xl font-black text-(--color-border-light)/50 group-hover:text-(--color-brand-green)/10 transition-colors font-heading select-none">
                {step.number}
              </div>

              <div className="relative z-10">
                <div className="w-10 h-10 rounded-xl bg-(--color-text-primary) text-white flex items-center justify-center text-xs font-bold mb-6 group-hover:bg-(--color-brand-green) transition-colors">
                  {step.number}
                </div>
                
                <h3 className="text-xl font-bold text-(--color-text-primary) mb-4 font-heading">
                  {step.title}
                </h3>
                
                <p className="text-(--color-text-body) text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>

              {/* Connector line for desktop */}
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-px bg-(--color-border-light) -translate-y-1/2 group-hover:bg-(--color-brand-green)/20 transition-colors z-0" />
              )}
            </motion.div>
          ))}
        </div>

        {/* Bottom Action */}
        <Reveal className="mt-20 text-center">
          <button className="px-10 py-4 rounded-full bg-(--color-text-primary) text-white font-bold text-sm hover:bg-black transition-all shadow-xl shadow-(--color-text-dark)/10 group">
            Start your project
            <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform">→</span>
          </button>
        </Reveal>
      </div>
    </section>
  );
}
