import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import Reveal from "../Reveal";

const faqs = [
  {
    q: "Can I cancel anytime?",
    a: "Yes. We work on a 30-day notice period. You can pause or cancel your subscription whenever your roadmap requires it, with no hidden exit fees.",
  },
  {
    q: "What if I need more than 160 hours?",
    a: "We can scale up by adding more dedicated lead developers or senior devs to your account. For large scale enterprise builds, we create custom quotes based on your specific sprint requirements.",
  },
  {
    q: "Do you only build with AI?",
    a: "No. While we are AI-first, we build robust full-stack applications (React, Node.js, FastAPI, PostgreSQL). AI is a tool we use to make your product smarter, not a replacement for good code.",
  },
  {
    q: "How fast can you start?",
    a: "Typically we can begin within 5-7 business days of your first call. We use this time to internalize your brief and set up the dedicated sprint infrastructure.",
  },
  {
    q: "Who manages the team?",
    a: "You'll have a dedicated Lead Developer / Project Manager who acts as your single point of contact. They are technical, meaning nothing is lost in translation.",
  },
  {
    q: "Do you sign NDAs?",
    a: "Absolutely. We are a professional agency. We sign NDAs and IP assignment agreements to ensure your code and idea remain 100% yours.",
  },
];

export default function PricingFAQ() {
  const [active, setActive] = useState(null);

  return (
    <section className="py-20 bg-[#fafaf9] px-6 md:px-12">
      <div className="max-w-4xl mx-auto">
        <Reveal>
          <div className="text-center mb-20">
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-(--color-brand-green) mb-4 block underline underline-offset-8">
              THE LOGISTICS
            </span>
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter text-gray-900 leading-[0.9]">
              YOUR QUESTIONS, <br /> ANSWERED
            </h2>
          </div>
        </Reveal>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="bg-white border border-gray-100 rounded-3xl overflow-hidden hover:border-(--color-brand-green)/30 transition-all"
            >
              <button
                onClick={() => setActive(active === i ? null : i)}
                className="w-full p-8 flex items-center justify-between text-left group"
              >
                <span className="text-lg font-black uppercase tracking-tight text-gray-900 group-hover:text-(--color-brand-green) transition-colors">
                  {faq.q}
                </span>
                <div
                  className={`w-10 h-10 rounded-full border border-gray-100 flex items-center justify-center transition-all ${active === i ? "bg-black border-black text-white" : "group-hover:bg-gray-50"}`}
                >
                  <ChevronDown
                    className={`w-5 h-5 transition-transform duration-500 ${active === i ? "rotate-180" : ""}`}
                  />
                </div>
              </button>

              <AnimatePresence>
                {active === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <div className="px-8 pb-8 text-gray-500 text-sm leading-relaxed max-w-2xl border-l-[3px] border-(--color-brand-green) ml-8">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
