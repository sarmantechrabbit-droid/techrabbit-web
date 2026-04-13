import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Reveal from './Reveal'

const faqCategories = [
  {
    category: 'General',
    faqs: [
      {
        q: 'What is TechRabbit?',
        a: 'TechRabbit is an AI product studio that designs, builds, and launches apps using cutting-edge AI development tools. We help founders and teams turn ideas into fully functional products in weeks, not months.',
      },
      {
        q: 'What makes TechRabbit different from other agencies?',
        a: 'We combine AI-powered development with real engineering expertise. Our sprint-based model means you get a working product in 2 weeks, not 2 months. Plus, flexible pricing with no long-term contracts.',
      },
      {
        q: 'Who does TechRabbit work with?',
        a: 'We work with startups, founders, and growing companies who need to build and launch products fast. Our clients range from pre-seed startups to Series B companies.',
      },
    ],
  },
  {
    category: 'Services & Process',
    faqs: [
      {
        q: 'What services does TechRabbit offer?',
        a: 'We offer end-to-end product development including UI/UX design, web and mobile development, MVP builds, product strategy, branding, and growth optimization.',
      },
      {
        q: 'How does TechRabbit build apps so fast?',
        a: 'We use AI-powered tools alongside traditional engineering to dramatically accelerate development. This AI-augmented approach lets us ship in days what normally takes weeks.',
      },
      {
        q: 'Can TechRabbit help me validate my app idea?',
        a: 'Absolutely. Our 2-week MVP sprint is designed exactly for this — build the core product fast, launch, and validate with real users before investing further.',
      },
    ],
  },
  {
    category: 'Pricing & Timelines',
    faqs: [
      {
        q: 'How much does it cost to build an app?',
        a: 'Our Sprint plan starts at $4,500 bi-weekly for ongoing development. For a standalone MVP, our one-time package is $9,500. Both include design, development, and project management.',
      },
      {
        q: 'How long does it take to build an app?',
        a: 'A functional MVP can be built in as little as 2 weeks. More complex products typically take 4-8 weeks depending on scope and features required.',
      },
      {
        q: 'Do you offer ongoing support after launch?',
        a: 'Yes! Our Sprint subscription model provides continuous bi-weekly development sprints. You can scale up, pause, or cancel anytime.',
      },
    ],
  },
]

function FAQItem({ faq, isOpen, onClick }) {
  return (
    <div className="border border-(--color-border-default) rounded-2xl overflow-hidden bg-(--color-bg-page) hover:shadow-md hover:shadow-(--color-text-dark)/5 transition-all duration-300">
      <button
        onClick={onClick}
        className="w-full flex items-center justify-between p-5 text-left group"
        aria-expanded={isOpen}
      >
        <span className="text-(--color-text-primary) font-semibold text-sm pr-4">{faq.q}</span>
        <motion.span
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.2 }}
          className="text-(--color-text-faint) text-xl shrink-0 group-hover:text-(--color-brand-blue) transition-colors"
        >
          +
        </motion.span>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <div className="px-5 pb-5 border-t border-(--color-border-light)">
              <p className="text-(--color-text-body) text-sm leading-relaxed pt-4">{faq.a}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null)

  return (
    <section id="faqs" className="py-24 px-5 md:px-8">
      <div className="max-w-3xl mx-auto">
        <Reveal className="text-center mb-16">
          <p className="text-(--color-brand-blue) text-sm font-semibold uppercase tracking-widest mb-3">FAQ</p>
          <h2 className="text-3xl md:text-5xl font-black text-(--color-text-primary) font-heading">
            Questions? Answers.
          </h2>
        </Reveal>

        <div className="space-y-8">
          {faqCategories.map((cat) => (
            <Reveal key={cat.category}>
              <h3 className="text-xs font-bold uppercase tracking-widest text-(--color-text-muted) mb-4 pl-1">{cat.category}</h3>
              <div className="space-y-2">
                {cat.faqs.map((faq, i) => {
                  const globalIndex = `${cat.category}-${i}`
                  return (
                    <FAQItem
                      key={globalIndex}
                      faq={faq}
                      isOpen={openIndex === globalIndex}
                      onClick={() => setOpenIndex(openIndex === globalIndex ? null : globalIndex)}
                    />
                  )
                })}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
