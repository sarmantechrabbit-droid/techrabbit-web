import { motion } from 'framer-motion'
import Reveal from '../Reveal'
import { Mail, Phone, MapPin, Clock, Zap, Shield, Rocket, Lock, Calendar, Award } from 'lucide-react'

const contactDetails = [
  { icon: Mail, label: 'Email', value: 'hello@techrabbit.io', color: 'from-blue-500 to-cyan-500' },
  { icon: Phone, label: 'Phone', value: '+91 760 021 3313', color: 'from-green-500 to-emerald-500' },
  { icon: MapPin, label: 'Office', value: '939/940, Sun Gravitas, Ahmedabad, Gujarat 380061', color: 'from-purple-500 to-pink-500' },
]

const processSteps = [
  { num: '01', title: 'We confirm your call within 4 hours', icon: Clock },
  { num: '02', title: '30-min call to understand your project', icon: Zap },
  { num: '03', title: 'Scope + price quote in 48 hours', icon: Shield },
  { num: '04', title: 'Team onboarded — start in 5 days', icon: Rocket },
]

const benefits = [
  { text: 'Cancel anytime', icon: Lock },
  { text: 'NDA day 1', icon: Shield },
  { text: '30-day notice', icon: Calendar },
  { text: 'ISO certified', icon: Award }
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 }
  },
}

export default function ContactInfo() {
  return (
    <Reveal>
      <motion.div
        className="space-y-12"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {/* Header */}
        <motion.div variants={itemVariants}>
          <motion.p 
            className="text-[var(--color-brand-blue)] text-sm font-bold uppercase tracking-widest mb-3 flex items-center gap-2"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
          >
            <span className="w-2 h-2 rounded-full bg-[var(--color-brand-blue)]"></span>
            Get in touch
          </motion.p>
          <h2 className="text-5xl md:text-6xl font-black text-[var(--color-text-primary)] mb-6 leading-tight font-heading">
            Let's talk about your <span style={{ background: 'var(--gradient-brand)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>product</span>
          </h2>
          <p className="text-[var(--color-text-body)] text-lg leading-relaxed max-w-lg">
            Book a free 30-minute call. We'll scope your MVP or plan your first sprint — no commitment, no pitch decks.
          </p>
        </motion.div>

        {/* Contact Details Cards */}
        <motion.div className="space-y-4" variants={containerVariants}>
          {contactDetails.map((detail, idx) => {
            const Icon = detail.icon
            return (
              <motion.div
                key={idx}
                variants={itemVariants}
                whileHover={{ x: 8 }}
                className="group relative overflow-hidden rounded-2xl p-6 border border-[var(--color-border-light)] bg-white hover:shadow-lg transition-all duration-300"
              >
                <div className={`absolute inset-0 bg-gradient-to-r ${detail.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
                <div className="relative flex items-start gap-4">
                  <motion.div
                    className={`flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br ${detail.color} flex items-center justify-center text-white`}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    <Icon className="w-6 h-6" />
                  </motion.div>
                  <div className="flex-1">
                    <p className="text-xs text-[var(--color-text-muted)] font-bold uppercase tracking-widest mb-1">
                      {detail.label}
                    </p>
                    <p className="text-[var(--color-text-primary)] font-semibold text-sm md:text-base">{detail.value}</p>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Response SLA - Premium Card */}
        <motion.div
          variants={itemVariants}
          className="relative overflow-hidden rounded-2xl p-6 border-2 border-[var(--color-brand-blue)] bg-gradient-to-br from-[var(--color-bg-brand-tint)] to-white"
          whileHover={{ scale: 1.02 }}
        >
          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[var(--color-brand-blue)] to-[var(--color-brand-green)] opacity-5 rounded-full -mr-16 -mt-16"></div>
          <div className="relative">
            <div className="flex items-start gap-3 mb-2">
              <motion.div
                className="w-6 h-6 rounded-lg bg-gradient-to-br from-[var(--color-brand-blue)] to-[var(--color-brand-green)] flex items-center justify-center text-white flex-shrink-0 mt-0.5"
                whileHover={{ scale: 1.1 }}
              >
                <Clock className="w-4 h-4" />
              </motion.div>
              <p className="text-xs text-[var(--color-brand-blue)] font-bold uppercase tracking-widest">Response SLA</p>
            </div>
            <p className="text-[var(--color-text-primary)] font-bold text-lg">We respond within 4 business hours — guaranteed</p>
          </div>
        </motion.div>

        {/* Process Steps */}
        <motion.div variants={itemVariants}>
          <h3 className="text-xl font-bold text-[var(--color-text-primary)] mb-6 flex items-center gap-2">
            <span className="w-1 h-6 rounded-full" style={{ background: 'var(--gradient-brand)' }}></span>
            What happens next?
          </h3>
          <div className="space-y-3">
            {processSteps.map((step, idx) => {
              const Icon = step.icon
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  className="flex gap-4 group"
                >
                  <motion.div
                    className="flex-shrink-0 w-12 h-12 rounded-full text-white flex items-center justify-center font-bold text-sm relative"
                    style={{ background: 'var(--gradient-brand)' }}
                    whileHover={{ scale: 1.1 }}
                  >
                    <Icon className="w-5 h-5" />
                    <motion.div
                      className="absolute inset-0 rounded-full"
                      style={{ border: '2px solid var(--color-brand-blue)' }}
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                  </motion.div>
                  <div className="flex-1 pt-2">
                    <p className="text-[var(--color-text-body)] font-medium group-hover:text-[var(--color-brand-blue)] transition-colors">{step.title}</p>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </motion.div>

        {/* Benefits Grid */}
        <motion.div variants={itemVariants}>
          <div className="grid grid-cols-2 gap-3">
            {benefits.map((benefit, idx) => {
              const Icon = benefit.icon
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: idx * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center gap-3 p-4 rounded-xl border border-[var(--color-border-light)] bg-white hover:shadow-md transition-all"
                >
                  <motion.div
                    className="w-5 h-5 rounded-lg bg-gradient-to-br from-[var(--color-brand-blue)] to-[var(--color-brand-green)] flex items-center justify-center text-white flex-shrink-0"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    <Icon className="w-3 h-3" />
                  </motion.div>
                  <span className="text-sm font-semibold text-[var(--color-text-primary)]">{benefit.text}</span>
                </motion.div>
              )
            })}
          </div>
        </motion.div>
      </motion.div>
    </Reveal>
  )
}
