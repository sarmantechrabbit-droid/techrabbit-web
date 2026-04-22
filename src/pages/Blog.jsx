import { motion } from 'framer-motion'
import { BlogHero, BlogGrid, BlogCTA } from '../components/blog'

export default function Blog() {
  return (
    <div className="relative min-h-screen bg-[var(--color-bg-page)]">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
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

      {/* Hero Section */}
      <BlogHero />

      {/* Blog Grid */}
      <BlogGrid />

      {/* CTA Section */}
      <BlogCTA />
    </div>
  )
}
