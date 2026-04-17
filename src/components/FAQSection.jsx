import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Reveal from "./Reveal";

const faqCategories = [
  {
    category: "General",
    faqs: [
      {
        q: "What is TechRabbit?",
        a: "TechRabbit is an AI product studio that designs, builds, and launches apps using cutting-edge AI development tools. We help founders and teams turn ideas into fully functional products in weeks, not months.",
      },
      {
        q: "What makes TechRabbit different from other agencies?",
        a: "We combine AI-powered development with real engineering expertise. Our sprint-based model means you get a working product in 2 weeks, not 2 months.",
      },
      {
        q: "Who does TechRabbit work with?",
        a: "We work with startups, founders, and growing companies who need to build and launch products fast. Our clients range from pre-seed startups to Series B companies.",
      },
    ],
  },
  {
    category: "Services & Process",
    faqs: [
      {
        q: "What services does TechRabbit offer?",
        a: "We offer end-to-end product development including UI/UX design, web and mobile development, MVP builds, product strategy, and growth optimization.",
      },
      {
        q: "How does TechRabbit build apps so fast?",
        a: "We use AI-powered tools alongside traditional engineering to dramatically accelerate development, shipping in days what normally takes weeks.",
      },
      {
        q: "Can TechRabbit help me validate my app idea?",
        a: "Absolutely. Our 2-week MVP sprint is designed exactly for this — build the core product fast, launch, and validate with real users.",
      },
    ],
  },
  {
    category: "Pricing & Timelines",
    faqs: [
      {
        q: "How much does it cost to build an app?",
        a: "Our subscriptions start at $1,800. For a standalone MVP, our one-time package is $8,000 - $15,000. Both include design, development, and PM.",
      },
      {
        q: "How long does it take to build an app?",
        a: "A functional MVP can be built in as little as 30 days. More complex products typically take 4-8 weeks depending on scope.",
      },
      {
        q: "Do you offer ongoing support after launch?",
        a: "Yes! Our subscription model provides continuous monthly development sprints. You can scale up, pause, or cancel anytime with 30-day notice.",
      },
    ],
  },
  {
    category: "Ownership & Operations",
    faqs: [
      {
        q: "Who owns the code?",
        a: "You do. 100%. All code, designs, and intellectual property are handed over to you as soon as they are created. We build it, you own it.",
      },
      {
        q: "Do you work in my timezone?",
        a: "Yes. We maintain significant overlap with US, UK, CA, and AU timezones, ensuring daily communication and seamless management.",
      },
      {
        q: "What is your communication process?",
        a: "We use a dedicated Slack channel for daily updates and bi-weekly sync calls to review progress and plan the next sprint. Total transparency.",
      },
    ],
  },
];

function FAQItem({ faq, isOpen, onClick }) {
  return (
    <div className="border border-[var(--color-border-default)] rounded-2xl overflow-hidden bg-white hover:border-[var(--color-brand-blue)]/30 transition-all duration-300">
      <button
        onClick={onClick}
        className="w-full flex items-center justify-between p-6 text-left group"
        aria-expanded={isOpen}
      >
        <span className="text-[var(--color-text-primary)] font-bold text-base pr-4 leading-tight">
          {faq.q}
        </span>
        <div
          className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center border transition-all duration-300 ${isOpen ? "bg-[var(--color-brand-blue)] border-[var(--color-brand-blue)] text-white" : "border-gray-100 text-gray-400 group-hover:border-[var(--color-brand-blue)] group-hover:text-[var(--color-brand-blue)]"}`}
        >
          <motion.span
            animate={{ rotate: isOpen ? 45 : 0 }}
            transition={{ duration: 0.2 }}
            className="text-xl leading-none"
          >
            +
          </motion.span>
        </div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="px-6 pb-6 pt-0">
              <p className="text-[var(--color-text-body)] text-sm leading-relaxed border-t border-gray-50 pt-4">
                {faq.a}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  // Split categories for 2-column layout
  const leftCats = faqCategories.filter((_, i) => i % 2 === 0); // 0, 2
  const rightCats = faqCategories.filter((_, i) => i % 2 !== 0); // 1, 3

  return (
    <section id="faqs" className="py-16 sm:py-20 px-4 sm:px-6 md:px-12 bg-[var(--color-bg-page)] overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <Reveal className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[var(--color-border-brand-soft)] bg-[var(--color-bg-brand-tint)] text-[var(--color-brand-blue)] text-[10px] font-black tracking-widest uppercase mb-5">
            Common Questions
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black font-heading tracking-tight text-[var(--color-text-primary)] leading-[1] mb-3">
            Everything you{" "}
            <span className="text-[var(--color-text-muted)]">need to know.</span>
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-12 items-start">
          {/* Left Column */}
          <div className="space-y-12">
            {leftCats.map((cat, catIdx) => (
              <Reveal key={cat.category}>
                <h3 className="text-xs font-black uppercase tracking-widest  mb-6 pl-1 flex items-center gap-4">
                  {cat.category}
                  <div className="h-px bg-[var(--color-brand-blue)]/10 flex-1" />
                </h3>
                <div className="space-y-4">
                  {cat.faqs.map((faq, i) => {
                    const globalIndex = `${cat.category}-${i}`;
                    return (
                      <FAQItem
                        key={globalIndex}
                        faq={faq}
                        isOpen={openIndex === globalIndex}
                        onClick={() =>
                          setOpenIndex(
                            openIndex === globalIndex ? null : globalIndex,
                          )
                        }
                      />
                    );
                  })}
                </div>
              </Reveal>
            ))}
          </div>

          {/* Right Column */}
          <div className="space-y-12">
            {rightCats.map((cat, catIdx) => (
              <Reveal key={cat.category}>
                <h3 className="text-xs font-black uppercase tracking-widest  mb-6 pl-1 flex items-center gap-4">
                  {cat.category}
                  <div className="h-px bg-[var(--color-brand-blue)]/30 flex-1" />
                </h3>
                <div className="space-y-4">
                  {cat.faqs.map((faq, i) => {
                    const globalIndex = `${cat.category}-${i}`;
                    return (
                      <FAQItem
                        key={globalIndex}
                        faq={faq}
                        isOpen={openIndex === globalIndex}
                        onClick={() =>
                          setOpenIndex(
                            openIndex === globalIndex ? null : globalIndex,
                          )
                        }
                      />
                    );
                  })}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
