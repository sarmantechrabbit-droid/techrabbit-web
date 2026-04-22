import { useState } from 'react'
import { motion } from 'framer-motion'
import { CheckCircle, ArrowRight } from 'lucide-react'
import Reveal from '../components/Reveal'
import ContactHero from '../components/contact/ContactHero'
import { ContactForm, ContactInfo, SuccessMessage } from '../components/contact'

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (formData) => {
    console.log('Form submitted:', formData)
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 5000)
  }

  return (
    <div className="relative min-h-screen bg-[var(--color-bg-page)] overflow-hidden">
      {/* Hero Section */}
      <ContactHero />

      <div className="relative z-10 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 mb-16">
            {/* Left Column - Contact Info */}
            <div>
              <ContactInfo />
            </div>

            {/* Right Column - Form */}
            <Reveal delay={0.2}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="relative"
              >
                {/* Glassmorphism Background */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/40 to-white/20 backdrop-blur-xl border border-white/20 -z-10"></div>

                <div className="relative bg-white/80 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-[var(--color-border-light)] shadow-xl shadow-black/5 sticky top-20">
                  {/* Form Header */}
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="mb-8"
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <motion.div
                        className="w-8 h-8 rounded-lg bg-gradient-to-br from-[var(--color-brand-blue)] to-[var(--color-brand-green)] flex items-center justify-center text-white"
                        whileHover={{ scale: 1.1, rotate: 5 }}
                      >
                        <ArrowRight className="w-4 h-4" />
                      </motion.div>
                      <h3 className="text-3xl font-black text-[var(--color-text-primary)] font-heading">
                        Tell us about your project
                      </h3>
                    </div>
                    <p className="text-[var(--color-text-body)] text-sm ml-11">
                      Fill out the form below and we'll get back to you shortly.
                    </p>
                  </motion.div>

                  {/* Form or Success Message */}
                  {submitted ? (
                    <SuccessMessage onReset={() => setSubmitted(false)} />
                  ) : (
                    <ContactForm onSubmit={handleSubmit} />
                  )}

                  {/* Trust Badges */}
                  {!submitted && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ delay: 0.6 }}
                      className="mt-8 pt-8 border-t border-[var(--color-border-light)] flex items-center justify-center gap-6 text-xs text-[var(--color-text-muted)]"
                    >
                      <span className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-[var(--color-brand-green)]"></span>
                        Secure & Encrypted
                      </span>
                      <span className="w-1 h-1 rounded-full bg-[var(--color-border-light)]"></span>
                      <span className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-[var(--color-brand-green)]"></span>
                        No spam
                      </span>
                    </motion.div>
                  )}
                </div>
              </motion.div>
            </Reveal>
          </div>

          {/* Bottom CTA Section */}
          <Reveal delay={0.3}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mb-16"
            >
              <div className="rounded-3xl border border-[var(--color-border-card)] bg-gradient-to-br from-white to-gray-50 p-8 md:p-12 text-center"
                style={{ boxShadow: "0 8px 32px rgba(0,0,0,0.06)" }}>
                <h3 className="text-3xl md:text-4xl font-black text-[var(--color-text-primary)] mb-4 font-heading">
                  Not sure where to start?
                </h3>
                <p className="text-[var(--color-text-body)] text-lg max-w-2xl mx-auto mb-8 leading-relaxed">
                  Schedule a free 30-minute call with our team. We'll discuss your vision, answer your questions, and outline the best path forward.
                </p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-white font-black text-base uppercase tracking-widest transition-all duration-300 hover:shadow-xl"
                  style={{
                    background: 'var(--gradient-brand)',
                    boxShadow: '0 12px 40px var(--color-brand-glow)',
                  }}
                >
                  Schedule a call
                  <motion.span
                    animate={{ x: [0, 4, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    →
                  </motion.span>
                </motion.button>
              </div>
            </motion.div>
          </Reveal>

          {/* FAQ Section */}
          {/* <Reveal delay={0.4}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="text-center mb-12">
                <h3 className="text-3xl md:text-4xl font-black text-[var(--color-text-primary)] mb-4 font-heading">
                  Frequently Asked Questions
                </h3>
                <p className="text-[var(--color-text-body)] text-lg max-w-2xl mx-auto">
                  Have questions? We've got answers.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  {
                    q: "How long does it take to build an MVP?",
                    a: "Most MVPs launch in 30 days. We work in focused sprints to get your product live quickly without compromising quality."
                  },
                  {
                    q: "What's included in the subscription?",
                    a: "Full-stack development, design, QA, AI features, and a dedicated team. Everything you need to scale your product."
                  },
                  {
                    q: "Do I own the code and IP?",
                    a: "100% yes. You own all code, domain, IP, and everything else. We're building your product, not ours."
                  },
                  {
                    q: "Can I cancel anytime?",
                    a: "Yes. With 30 days notice on subscriptions. No long-term contracts, no lock-in. We want to work with you because you want us to."
                  },
                ].map((item, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    className="p-6 rounded-2xl border border-[var(--color-border-light)] bg-white hover:shadow-lg transition-all duration-300"
                  >
                    <div className="flex items-start gap-3 mb-3">
                      <CheckCircle className="w-5 h-5 text-[var(--color-brand-green)] flex-shrink-0 mt-0.5" />
                      <h4 className="text-lg font-bold text-[var(--color-text-primary)]">
                        {item.q}
                      </h4>
                    </div>
                    <p className="text-[var(--color-text-body)] text-sm leading-relaxed ml-8">
                      {item.a}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </Reveal> */}
        </div>
      </div>
    </div>
  )
}
