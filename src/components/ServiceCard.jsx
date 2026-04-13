import { motion } from 'framer-motion'

export default function ServiceCard({ icon, title, description, index = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.5, delay: index * 0.08, ease: 'easeOut' }}
      whileHover={{ y: -6, scale: 1.02 }}
      className="group relative p-7 rounded-4xl border border-gray-100 bg-white cursor-pointer overflow-hidden shadow-sm hover:shadow-xl hover:shadow-indigo-500/8 hover:border-indigo-200/60 transition-all duration-500"
    >
      {/* Subtle gradient glow on hover */}
      <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-4xl bg-linear-to-br from-indigo-50/80 via-violet-50/40 to-purple-50/60`} />

      <div className="relative z-10">
        <div className="w-12 h-12 rounded-xl bg-linear-to-br from-indigo-50 to-violet-50 border border-indigo-100/50 flex items-center justify-center text-2xl mb-5 group-hover:scale-110 group-hover:shadow-md group-hover:shadow-indigo-200/40 transition-all duration-300">
          {icon}
        </div>
        <h3 className="text-gray-900 font-bold text-lg mb-2 font-[Outfit]">{title}</h3>
        <p className="text-gray-500 text-sm leading-relaxed">{description}</p>

        <div className="mt-5 flex items-center gap-1 text-indigo-600 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          Learn more
          <motion.span
            animate={{ x: [0, 4, 0] }}
            transition={{ repeat: Infinity, duration: 1.2 }}
          >
            →
          </motion.span>
        </div>
      </div>
    </motion.div>
  )
}
