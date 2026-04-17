import { motion, AnimatePresence } from "framer-motion";
import Reveal from "../Reveal";
import { ChevronDown, HelpCircle } from "lucide-react";
import { useState } from "react";

const faqs = [
  {
    question: "How long does it take to deliver a pre-built application?",
    answer: "Our pre-built solutions can be deployed in 2-4 weeks depending on customization needs. We provide rapid deployment with full support and training.",
    accent: "var(--color-brand-blue)",
  },
  {
    question: "Do you provide full source code?",
    answer: "Yes, you get complete ownership of the source code. All code is well-documented, follows best practices, and is ready for your team to maintain and extend.",
    accent: "var(--color-brand-green)",
  },
  {
    question: "What's the difference between pre-built and custom development?",
    answer: "Pre-built solutions are faster and more cost-effective for standard use cases. Custom development is ideal when you need unique features or specific workflows tailored to your business.",
    accent: "var(--color-brand-blue)",
  },
  {
    question: "Do you provide maintenance and support?",
    answer: "Absolutely. We offer ongoing support, bug fixes, and maintenance packages. Our team is available to help with updates and scaling as your business grows.",
    accent: "var(--color-brand-green)",
  },
  {
    question: "What technologies do you use?",
    answer: "We use modern tech stacks: React/Next.js for frontend, Node.js/Python for backend, PostgreSQL for databases, and cloud platforms like AWS/GCP for deployment.",
    accent: "var(--color-brand-blue)",
  },
  {
    question: "Can I customize the pre-built solutions?",
    answer: "Yes, all our solutions are highly customizable. We can modify features, branding, workflows, and integrations to match your specific requirements.",
    accent: "var(--color-brand-green)",
  },
];

export default function WorkFAQ() {
  const [expandedIdx, setExpandedIdx] = useState(0);

  return (
    <section className="py-12 px-6 md:px-12 bg-[var(--color-bg-page)] overflow-hidden relative">
      {/* Dot grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle, var(--color-grid-dot) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
          opacity: 0.5,
        }}
      />

      {/* Gradient glows */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] pointer-events-none">
        <div
          className="absolute inset-0 rounded-full blur-[150px]"
          style={{
            background: "radial-gradient(circle, rgba(42,171,215,0.08) 0%, transparent 70%)",
          }}
        />
      </div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] pointer-events-none">
        <div
          className="absolute inset-0 rounded-full blur-[150px]"
          style={{
            background: "radial-gradient(circle, rgba(36,181,116,0.08) 0%, transparent 70%)",
          }}
        />
      </div>

      {/* Fade overlays */}
      <div
        className="absolute top-0 inset-x-0 h-20 pointer-events-none"
        style={{ background: "linear-gradient(to bottom, var(--color-bg-page), transparent)" }}
      />
      <div
        className="absolute bottom-0 inset-x-0 h-20 pointer-events-none"
        style={{ background: "linear-gradient(to top, var(--color-bg-page), transparent)" }}
      />

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Header */}
        <Reveal className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[var(--color-border-brand-soft)] bg-[var(--color-bg-brand-tint)] text-[var(--color-brand-blue)] text-[10px] font-black tracking-widest uppercase mb-6">
            <HelpCircle className="w-3.5 h-3.5" />
            FAQ
          </div>
          <h2 className="text-4xl md:text-5xl font-bold font-heading tracking-tight text-[var(--color-text-primary)] leading-[1.2] mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-[var(--color-text-body)] text-sm max-w-2xl mx-auto leading-relaxed font-medium">
            Everything you need to know about our products and services.
          </p>
        </Reveal>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <Reveal key={idx} delay={idx * 0.05}>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.05, duration: 0.5 }}
                viewport={{ once: true }}
                className="relative rounded-2xl border overflow-hidden transition-all duration-300"
                style={{
                  background: expandedIdx === idx
                    ? `color-mix(in srgb, ${faq.accent} 4%, white)`
                    : "white",
                  borderColor: expandedIdx === idx
                    ? faq.accent
                    : "var(--color-border-card)",
                  boxShadow: expandedIdx === idx
                    ? `0 8px 24px -8px color-mix(in srgb, ${faq.accent} 25%, transparent)`
                    : "0 1px 4px rgba(0,0,0,0.03)",
                }}
              >
                {/* Top accent line */}
                <div
                  className="absolute top-0 inset-x-0 h-1 transition-all duration-300"
                  style={{
                    background: expandedIdx === idx ? faq.accent : "transparent",
                  }}
                />

                {/* Question Button */}
                <motion.button
                  onClick={() => setExpandedIdx(expandedIdx === idx ? -1 : idx)}
                  className="w-full px-6 py-5 flex items-center justify-between gap-4 transition-all duration-300"
                >
                  <div className="flex items-center gap-4 text-left flex-1">
                    <div
                      className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0 transition-all duration-300"
                      style={{
                        background: `color-mix(in srgb, ${faq.accent} 12%, transparent)`,
                      }}
                    >
                      <span
                        className="text-sm font-black"
                        style={{ color: faq.accent }}
                      >
                        {String(idx + 1).padStart(2, "0")}
                      </span>
                    </div>
                    <h3 className="text-base font-bold font-heading text-[var(--color-text-primary)] tracking-tight">
                      {faq.question}
                    </h3>
                  </div>

                  <motion.div
                    animate={{
                      rotate: expandedIdx === idx ? 180 : 0,
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <ChevronDown
                      className="w-5 h-5 shrink-0 transition-colors duration-300"
                      style={{
                        color: expandedIdx === idx ? faq.accent : "var(--color-text-muted)",
                      }}
                    />
                  </motion.div>
                </motion.button>

                {/* Answer */}
                <AnimatePresence>
                  {expandedIdx === idx && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-5 pt-0 border-t border-[var(--color-border-light)]">
                        <p className="text-sm text-[var(--color-text-body)] leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
