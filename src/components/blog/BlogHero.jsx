import { motion } from 'framer-motion'
import { BookOpen, ArrowRight } from 'lucide-react'

export default function BlogHero() {
  return (
    <section className="relative min-h-[70vh] bg-[var(--color-bg-page)] overflow-hidden pt-24 pb-20 md:pt-32 px-6 md:px-12">
      {/* Premium Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Gradient Orbs */}
        <motion.div
          className="absolute -top-40 -right-40 w-80 h-80 rounded-full opacity-8"
          style={{ background: 'var(--color-brand-blue)' }}
          animate={{
            x: [0, 60, 0],
            y: [0, 40, 0],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full opacity-8"
          style={{ background: 'var(--color-brand-green)' }}
          animate={{
            x: [0, -60, 0],
            y: [0, -40, 0],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 w-96 h-96 rounded-full opacity-5"
          style={{ background: 'var(--gradient-brand)' }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.05, 0.08, 0.05],
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />
      </div>

      {/* Grid Pattern Background */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none"
        style={{
          backgroundImage: 'linear-gradient(0deg, transparent 24%, rgba(42, 171, 215, 0.05) 25%, rgba(42, 171, 215, 0.05) 26%, transparent 27%, transparent 74%, rgba(42, 171, 215, 0.05) 75%, rgba(42, 171, 215, 0.05) 76%, transparent 77%, transparent), linear-gradient(90deg, transparent 24%, rgba(42, 171, 215, 0.05) 25%, rgba(42, 171, 215, 0.05) 26%, transparent 27%, transparent 74%, rgba(42, 171, 215, 0.05) 75%, rgba(42, 171, 215, 0.05) 76%, transparent 77%, transparent)',
          backgroundSize: '50px 50px',
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2.5 px-4 py-2.5 rounded-full border backdrop-blur-sm mb-8 md:mb-4"
          style={{
            background: 'rgba(42, 171, 215, 0.08)',
            borderColor: 'rgba(42, 171, 215, 0.2)',
          }}
        >
          <motion.span
            className="w-2 h-2 rounded-full"
            style={{ background: 'var(--color-brand-green)' }}
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          <span className="text-xs font-black text-[var(--color-brand-blue)] uppercase tracking-widest">
            Knowledge Hub
          </span>
        </motion.div>

        {/* Main Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mb-8 md:mb-12"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-[var(--color-text-primary)] leading-tight font-heading mb-6">
            Insights for
            <br />
            <span style={{
              background: 'var(--gradient-brand)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}>
              Modern Builders
            </span>
          </h1>
        </motion.div>

        {/* Description */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-3xl mb-12 md:mb-16"
        >
          <p className="text-lg md:text-xl text-[var(--color-text-body)] leading-relaxed mb-6">
            Deep dives into product development, design thinking, technology trends, and entrepreneurial insights. Learn from our experience building digital products that matter.
          </p>
          <div className="flex flex-wrap gap-4 md:gap-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-[var(--color-bg-card)] flex items-center justify-center border border-[var(--color-border-light)]">
                <BookOpen className="w-5 h-5 text-[var(--color-brand-blue)]" />
              </div>
              <div>
                <p className="text-xs font-black text-[var(--color-text-muted)] uppercase tracking-widest">Articles</p>
                <p className="text-lg font-black text-[var(--color-text-primary)]">50+</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-[var(--color-bg-card)] flex items-center justify-center border border-[var(--color-border-light)]">
                <span className="text-lg font-black text-[var(--color-brand-green)]">👥</span>
              </div>
              <div>
                <p className="text-xs font-black text-[var(--color-text-muted)] uppercase tracking-widest">Readers</p>
                <p className="text-lg font-black text-[var(--color-text-primary)]">10K+</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-[var(--color-bg-card)] flex items-center justify-center border border-[var(--color-border-light)]">
                <span className="text-lg font-black text-[var(--color-brand-blue)]">⚡</span>
              </div>
              <div>
                <p className="text-xs font-black text-[var(--color-text-muted)] uppercase tracking-widest">Topics</p>
                <p className="text-lg font-black text-[var(--color-text-primary)]">8+</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full text-white font-black text-base uppercase tracking-widest transition-all duration-300"
            style={{
              background: 'var(--gradient-brand)',
              boxShadow: '0 20px 50px rgba(42, 171, 215, 0.3)',
            }}
          >
            Explore Articles
            <ArrowRight className="w-5 h-5" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}
