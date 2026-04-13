import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Reveal from '../components/Reveal'

const services = [
  {
    icon: '✦',
    title: 'UI/UX Design',
    short: 'Pixel-perfect interfaces that convert.',
    details: 'We craft visually stunning, conversion-optimized web experiences. From wireframes to high-fidelity prototypes, every pixel is intentional. We use Figma, design systems, and user research to ensure your product resonates with your audience.',
    tags: ['UI/UX', 'Figma', 'Prototyping', 'Design Systems'],
    gradient: 'from-indigo-600 to-violet-700',
  },
  {
    icon: '⚡',
    title: 'MVP Development',
    short: 'Blazing-fast, scalable web applications.',
    details: 'Full-stack development using React, Next.js, and AI-powered engineering. We ship in weeks, not months, delivering a production-ready product that scales from day one.',
    tags: ['React', 'Next.js', 'AI Tools', 'Supabase'],
    gradient: 'from-blue-600 to-indigo-700',
  },
  {
    icon: '◈',
    title: 'Brand Strategy',
    short: 'Strategic identities that resonate.',
    details: 'We build brand identities from the ground up — logo design, typography, color systems, and messaging frameworks. Your brand will be consistent and memorable.',
    tags: ['Logo Design', 'Strategy', 'Guidelines', 'Identity'],
    gradient: 'from-violet-600 to-purple-700',
  },
  {
    icon: '◎',
    title: 'Product Strategy',
    short: 'Data-driven growth strategies.',
    details: 'We analyze your market and users to craft a strategy that drives real growth. From roadmaps to go-to-market plans, we align every decision with your business goals.',
    tags: ['Research', 'Roadmapping', 'GTM', 'Analytics'],
    gradient: 'from-indigo-500 to-blue-600',
  },
]

function ServiceRow({ service, index }) {
  const [open, setOpen] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.06 }}
      className={`border border-gray-100 rounded-4xl overflow-hidden transition-all duration-300 ${open ? 'bg-gray-50 shadow-inner' : 'bg-white shadow-sm'}`}
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center gap-6 p-8 text-left hover:bg-gray-50 transition-colors group"
      >
        <div className={`w-14 h-14 rounded-2xl bg-linear-to-br ${service.gradient} flex items-center justify-center text-white text-2xl shrink-0 shadow-lg shadow-gray-200`}>
          {service.icon}
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="text-gray-900 font-bold text-xl font-[Outfit]">{service.title}</h3>
          <p className="text-gray-400 font-medium text-sm mt-0.5">{service.short}</p>
        </div>
        <motion.div
          animate={{ rotate: open ? 45 : 0 }}
          className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-400 group-hover:text-gray-900 transition-colors"
        >
          <span className="text-2xl line-height-1">+</span>
        </motion.div>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <div className="px-8 pb-8 pt-2 border-t border-gray-100/50">
              <p className="text-gray-500 text-base leading-relaxed mb-6">{service.details}</p>
              <div className="flex flex-wrap gap-2">
                {service.tags.map((t) => (
                  <span key={t} className="px-4 py-1.5 rounded-full bg-white border border-gray-200 text-gray-500 text-[11px] font-bold uppercase tracking-wider">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export default function Services() {
  return (
    <div className="pt-40 pb-24 bg-white px-6 md:px-12">
      <div className="max-w-4xl mx-auto">
        <Reveal className="mb-20">
          <p className="text-indigo-600 text-sm font-semibold uppercase tracking-widest mb-4">Capabilities</p>
          <h1 className="text-[42px] md:text-8xl font-black text-gray-900 mb-8 font-[Outfit] leading-[1.1] tracking-tight">
            Our <span className="text-gray-300">Services.</span>
          </h1>
          <p className="text-gray-500 text-lg md:text-2xl max-w-2xl leading-relaxed">
            End-to-end digital services designed to take your product from concept to market leader at lightning speed.
          </p>
        </Reveal>

        <div className="space-y-4">
          {services.map((s, i) => (
            <ServiceRow key={s.title} service={s} index={i} />
          ))}
        </div>

        {/* Value Proposition */}
        <Reveal className="mt-32">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="p-10 rounded-[2.5rem] bg-indigo-600 text-white shadow-2xl shadow-indigo-200">
              <h3 className="text-2xl font-bold mb-4 font-[Outfit]">Fixed Price</h3>
              <p className="text-indigo-100 leading-relaxed text-sm">
                No hourly billing. No surprises. We work with predictable, transparent pricing models that prioritize results over hours.
              </p>
            </div>
            <div className="p-10 rounded-[2.5rem] bg-black text-white shadow-2xl">
              <h3 className="text-2xl font-bold mb-4 font-[Outfit]">Fast Delivery</h3>
              <p className="text-gray-400 leading-relaxed text-sm">
                We measure our delivery in days and weeks, not months. Our AI-native workflow ensures you ship faster than your competition.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </div>
  )
}
