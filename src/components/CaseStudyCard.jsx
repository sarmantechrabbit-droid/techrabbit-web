import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

export default function CaseStudyCard({ title, category, tags = [], gradient, image, delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.5, delay, ease: 'easeOut' }}
      className="group relative rounded-2xl overflow-hidden border border-gray-100 bg-white cursor-pointer shadow-sm hover:shadow-xl hover:shadow-gray-200/60 transition-all duration-500"
    >
      {/* Image area */}
      <div className={`relative h-56 md:h-64 ${gradient} overflow-hidden`}>
        <motion.div
          whileHover={{ scale: 1.06 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="absolute inset-0 flex items-center justify-center"
        >
          <span className="text-white/20 text-8xl font-black tracking-tighter select-none font-[Outfit]">
            {title.charAt(0)}
          </span>
        </motion.div>
        {/* Overlay on hover */}
        <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-400 flex items-center justify-center backdrop-blur-[2px]">
          <Link
            to="/work"
            className="px-6 py-2.5 rounded-xl bg-white text-gray-900 text-sm font-semibold translate-y-4 group-hover:translate-y-0 transition-transform duration-300 shadow-lg hover:shadow-xl"
          >
            View Case Study
          </Link>
        </div>
      </div>

      <div className="p-5">
        <p className="text-indigo-600 text-xs font-semibold uppercase tracking-widest mb-1">{category}</p>
        <h3 className="text-gray-900 font-bold text-lg font-[Outfit]">{title}</h3>
        <div className="flex flex-wrap gap-2 mt-3">
          {tags.map((t) => (
            <span key={t} className="px-2.5 py-1 rounded-lg bg-gray-50 border border-gray-100 text-gray-500 text-xs font-medium">
              {t}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  )
}
