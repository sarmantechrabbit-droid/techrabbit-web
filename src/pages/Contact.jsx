import { useState } from 'react'
import { motion } from 'framer-motion'
import { Sparkles, ArrowRight } from 'lucide-react'
import Reveal from '../components/Reveal'
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
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-5"
          style={{ background: 'var(--gradient-brand)' }}
          animate={{
            x: [0, 50, 0],
            y: [0, 30, 0],
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-0 left-0 w-96 h-96 rounded-full opacity-5"
          style={{ background: 'var(--gradient-brand)' }}
          animate={{
            x: [0, -50, 0],
            y: [0, -30, 0],
          }}
          transition={{ duration: 10, repeat: Infinity }}
        />
      </div>

      <div className="relative z-10 px-6 md:px-12 py-20 md:py-32">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16 md:mb-20"
          >
            <motion.div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[var(--color-border-light)] bg-white/50 backdrop-blur-sm mb-6"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
            >
              <Sparkles className="w-4 h-4 text-[var(--color-brand-blue)]" />
              <span className="text-sm font-semibold text-[var(--color-text-primary)]">Let's Connect</span>
            </motion.div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-[var(--color-text-primary)] mb-6 leading-tight font-heading">
              Ready to start your <span style={{ background: 'var(--gradient-brand)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>next project?</span>
            </h1>
            <p className="text-[var(--color-text-body)] text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
              Get in touch with our team. We're here to help you build something amazing.
            </p>
          </motion.div>

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
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
                {/* Glassmorphism Card */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/40 to-white/20 backdrop-blur-xl border border-white/20 -z-10"></div>

                <div className="relative bg-white/80 backdrop-blur-sm rounded-2xl p-8 md:p-10 border border-[var(--color-border-light)] shadow-xl shadow-black/5 sticky top-20">
                  {/* Form Header */}
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="mb-8"
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <motion.div
                        className="w-6 h-6 rounded-lg bg-gradient-to-br from-[var(--color-brand-blue)] to-[var(--color-brand-green)] flex items-center justify-center text-white"
                        whileHover={{ scale: 1.1, rotate: 5 }}
                      >
                        <ArrowRight className="w-4 h-4" />
                      </motion.div>
                      <h3 className="text-3xl font-black text-[var(--color-text-primary)] font-heading">
                        Tell us about your project
                      </h3>
                    </div>
                    <p className="text-[var(--color-text-body)] text-sm ml-8">
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
        </div>
      </div>
    </div>
  )
}
