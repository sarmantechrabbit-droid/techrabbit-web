import { useState } from 'react'
import { motion } from 'framer-motion'
import { User, Mail, Building2, Target, MessageSquare, Send, CheckCircle2 } from 'lucide-react'

const fields = [
  { name: 'name', label: 'Your name', type: 'text', placeholder: 'John Doe', icon: User },
  { name: 'email', label: 'Email address', type: 'email', placeholder: 'john@example.com', icon: Mail },
  { name: 'company', label: 'Company / website', type: 'text', placeholder: 'Your company', icon: Building2 },
]

const serviceOptions = [
  'Web Development',
  'Mobile App',
  'UI/UX Design',
  'Consulting',
  'Other'
]

export default function ContactForm({ onSubmit }) {
  const [form, setForm] = useState({ name: '', email: '', company: '', service: '', message: '' })
  const [focused, setFocused] = useState(null)

  const handleChange = (e) => {
    setForm(f => ({ ...f, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    onSubmit(form)
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {fields.map((f, idx) => {
        const IconComponent = f.icon
        return (
          <motion.div
            key={f.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
          >
            <label className="block text-sm font-semibold text-[var(--color-text-primary)] mb-2.5 flex items-center gap-2">
              <motion.div
                className="w-5 h-5 rounded-lg bg-gradient-to-br from-[var(--color-brand-blue)] to-[var(--color-brand-green)] flex items-center justify-center text-white"
                whileHover={{ scale: 1.1, rotate: 5 }}
              >
                <IconComponent className="w-3 h-3" />
              </motion.div>
              {f.label}
            </label>
            <motion.div
              animate={{
                boxShadow: focused === f.name 
                  ? '0 0 20px rgba(42, 171, 215, 0.2)' 
                  : '0 2px 8px rgba(0, 0, 0, 0.04)'
              }}
              className="relative"
            >
              <input
                required
                type={f.type}
                name={f.name}
                placeholder={f.placeholder}
                value={form[f.name]}
                onChange={handleChange}
                onFocus={() => setFocused(f.name)}
                onBlur={() => setFocused(null)}
                className="w-full px-4 py-3.5 rounded-xl bg-white border-2 border-[var(--color-border-light)] text-[var(--color-text-primary)] placeholder-[var(--color-text-muted)] focus:border-[var(--color-brand-blue)] focus:outline-none transition-all duration-300"
              />
              {form[f.name] && (
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="absolute right-4 top-1/2 -translate-y-1/2"
                >
                  <CheckCircle2 className="w-5 h-5 text-[var(--color-brand-green)]" />
                </motion.div>
              )}
            </motion.div>
          </motion.div>
        )
      })}

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        <label className="block text-sm font-semibold text-[var(--color-text-primary)] mb-2.5 flex items-center gap-2">
          <motion.div
            className="w-5 h-5 rounded-lg bg-gradient-to-br from-[var(--color-brand-blue)] to-[var(--color-brand-green)] flex items-center justify-center text-white"
            whileHover={{ scale: 1.1, rotate: 5 }}
          >
            <Target className="w-3 h-3" />
          </motion.div>
          What are you looking for?
        </label>
        <motion.div
          animate={{
            boxShadow: focused === 'service' 
              ? '0 0 20px rgba(42, 171, 215, 0.2)' 
              : '0 2px 8px rgba(0, 0, 0, 0.04)'
          }}
        >
          <select
            required
            name="service"
            value={form.service}
            onChange={handleChange}
            onFocus={() => setFocused('service')}
            onBlur={() => setFocused(null)}
            className="w-full px-4 py-3.5 rounded-xl bg-white border-2 border-[var(--color-border-light)] text-[var(--color-text-primary)] focus:border-[var(--color-brand-blue)] focus:outline-none transition-all duration-300 appearance-none cursor-pointer"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%232aabd7' d='M6 9L1 4h10z'/%3E%3C/svg%3E")`,
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'right 1rem center',
              paddingRight: '2.5rem'
            }}
          >
            <option value="">Select an option</option>
            {serviceOptions.map(opt => (
              <option key={opt} value={opt}>{opt}</option>
            ))}
          </select>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
      >
        <label className="block text-sm font-semibold text-[var(--color-text-primary)] mb-2.5 flex items-center gap-2">
          <motion.div
            className="w-5 h-5 rounded-lg bg-gradient-to-br from-[var(--color-brand-blue)] to-[var(--color-brand-green)] flex items-center justify-center text-white"
            whileHover={{ scale: 1.1, rotate: 5 }}
          >
            <MessageSquare className="w-3 h-3" />
          </motion.div>
          Tell us about your project
        </label>
        <motion.div
          animate={{
            boxShadow: focused === 'message' 
              ? '0 0 20px rgba(42, 171, 215, 0.2)' 
              : '0 2px 8px rgba(0, 0, 0, 0.04)'
          }}
        >
          <textarea
            required
            name="message"
            rows={5}
            placeholder="Describe your project, goals, and timeline..."
            value={form.message}
            onChange={handleChange}
            onFocus={() => setFocused('message')}
            onBlur={() => setFocused(null)}
            className="w-full px-4 py-3.5 rounded-xl bg-white border-2 border-[var(--color-border-light)] text-[var(--color-text-primary)] placeholder-[var(--color-text-muted)] focus:border-[var(--color-brand-blue)] focus:outline-none transition-all duration-300 resize-none"
          />
        </motion.div>
      </motion.div>

      <motion.button
        whileHover={{ scale: 1.02, y: -2 }}
        whileTap={{ scale: 0.98 }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        type="submit"
        className="w-full py-4 rounded-xl text-white font-bold text-base hover:shadow-xl transition-all duration-300 relative overflow-hidden group flex items-center justify-center gap-2"
        style={{
          background: 'var(--gradient-brand)',
          boxShadow: '0 10px 30px var(--color-brand-glow)'
        }}
      >
        <span className="relative z-10 flex items-center justify-center gap-2">
          <Send className="w-5 h-5" />
          Send Message
          <motion.span
            animate={{ x: [0, 4, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            →
          </motion.span>
        </span>
      </motion.button>
    </form>
  )
}
