import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

export default function BlogCTA() {
  return (
    <section className="relative py-20 md:py-28 px-6 md:px-12 bg-[var(--color-bg-page)]">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="rounded-3xl border border-[var(--color-border-card)] bg-gradient-to-br from-white to-gray-50 p-8 md:p-16 text-center"
          style={{
            boxShadow: '0 8px 32px rgba(0,0,0,0.06)',
          }}
        >
          <h3 className="text-3xl md:text-4xl font-black text-[var(--color-text-primary)] mb-4 font-heading">
            Ready to build your next product?
          </h3>
          <p className="text-[var(--color-text-body)] text-lg max-w-2xl mx-auto mb-8 leading-relaxed">
            Let's turn your vision into reality. Schedule a free consultation with our team today.
          </p>
          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-white font-black text-base uppercase tracking-widest transition-all duration-300 hover:shadow-xl"
              style={{
                background: 'var(--gradient-brand)',
                boxShadow: '0 12px 40px var(--color-brand-glow)',
              }}
            >
              Get Started
              <motion.span
                animate={{ x: [0, 4, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                →
              </motion.span>
            </Link>
            <Link
              to="/work"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full border border-[var(--color-border-subtle)] text-[var(--color-text-primary)] font-bold text-base uppercase tracking-widest transition-all duration-300 hover:bg-[var(--color-bg-card-light)]"
            >
              View Our Work
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
