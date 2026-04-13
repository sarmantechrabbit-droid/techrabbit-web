import Reveal from '../components/Reveal'
import CaseStudyCard from '../components/CaseStudyCard'
import { motion } from 'framer-motion'

const projects = [
  { title: 'Ratio', category: 'Fintech', tags: ['Payments', 'Web'], gradient: 'bg-gradient-to-br from-indigo-600 to-indigo-800' },
  { title: 'CreatorNow', category: 'EdTech', tags: ['React', 'AI'], gradient: 'bg-gradient-to-br from-violet-600 to-purple-800' },
  { title: 'Mula', category: 'Finance', tags: ['Dashboard', 'UX'], gradient: 'bg-gradient-to-br from-blue-600 to-cyan-800' },
  { title: 'Porta', category: 'Logistics', tags: ['Logistics', 'Mobile'], gradient: 'bg-gradient-to-br from-indigo-500 to-blue-600' },
  { title: 'EventFlow', category: 'Events', tags: ['Branding', 'Web'], gradient: 'bg-gradient-to-br from-rose-600 to-pink-700' },
  { title: 'HighPath', category: 'Analytics', tags: ['Data', 'SaaS'], gradient: 'bg-gradient-to-br from-emerald-600 to-teal-700' },
]

export default function Work() {
  return (
    <div className="pt-40 pb-24 bg-white px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <Reveal className="mb-20">
          <p className="text-indigo-600 text-sm font-semibold uppercase tracking-widest mb-4">Portfolio</p>
          <h1 className="text-[42px] md:text-8xl font-black text-gray-900 mb-8 font-heading leading-[1.1] tracking-tight">
            Selected <span className="text-gray-300">Work.</span>
          </h1>
          <p className="text-gray-500 text-lg md:text-2xl max-w-3xl leading-relaxed">
            A showcase of the products we've designed and built. Each one is a testament to our commitment to speed, quality, and user experience.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((p, i) => (
            <CaseStudyCard key={p.title} {...p} delay={i * 0.1} />
          ))}
        </div>

        {/* Call to action */}
        <Reveal className="mt-32">
          <div className="rounded-[3rem] bg-gray-50 p-12 md:p-20 text-center border border-gray-100">
            <h2 className="text-3xl md:text-6xl font-black text-gray-900 mb-8 font-heading">Your project is next.</h2>
            <p className="text-gray-500 text-lg mb-10 max-w-xl mx-auto">
              Ready to see your idea come to life in just 2 weeks? Let's build it together.
            </p>
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="px-10 py-4 rounded-full bg-black text-white font-bold text-base shadow-xl hover:bg-gray-800 transition-all"
            >
              Start a Project
            </motion.button>
          </div>
        </Reveal>
      </div>
    </div>
  )
}
