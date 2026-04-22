import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Send, CheckCircle2, ChevronDown } from 'lucide-react'

const fields = [
  { name: 'name', label: 'Your name', type: 'text', placeholder: 'John Doe' },
  { name: 'email', label: 'Email address', type: 'email', placeholder: 'john@example.com' },
  { name: 'company', label: 'Company / website', type: 'text', placeholder: 'Your company' },
]

const lookingForOptions = [
  { value: 'idea', label: 'I have an idea (Build)' },
  { value: 'live', label: 'My product is live (Grow)' }
]

const planOptions = {
  idea: [
    { value: 'starter', label: 'Starter' },
    { value: 'growth', label: 'Growth' },
    { value: 'scale', label: 'Scale' }
  ],
  live: [
    { value: 'starter-mvp', label: 'Starter MVP' },
    { value: 'growth-mvp', label: 'Growth MVP' }
  ]
}

export default function ContactForm({ onSubmit }) {
  const [form, setForm] = useState({ 
    name: '', 
    email: '', 
    company: '', 
    lookingFor: '',
    plan: '',
    message: '' 
  })
  const [focused, setFocused] = useState(null)
  const [openDropdown, setOpenDropdown] = useState(null)

  const handleChange = (e) => {
    const { name, value } = e.target
    if (name === 'lookingFor') {
      setForm(f => ({ ...f, [name]: value, plan: '' }))
    } else {
      setForm(f => ({ ...f, [name]: value }))
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    onSubmit(form)
  }

  const currentPlans = form.lookingFor ? planOptions[form.lookingFor] : []

  const handleClickOutside = (e) => {
    if (!e.currentTarget.contains(e.relatedTarget)) {
      setOpenDropdown(null)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {fields.map((f, idx) => {
        return (
          <motion.div
            key={f.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
          >
            <label className="block text-sm font-semibold text-[var(--color-text-primary)] mb-2.5">
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

      {/* What are you looking for? */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="relative"
      >
        <label className="block text-sm font-semibold text-[var(--color-text-primary)] mb-2.5">
          What are you looking for?
        </label>
        <motion.button
          type="button"
          onClick={(e) => {
            e.stopPropagation()
            setOpenDropdown(openDropdown === 'lookingFor' ? null : 'lookingFor')
          }}
          animate={{
            boxShadow: openDropdown === 'lookingFor' 
              ? '0 0 20px rgba(42, 171, 215, 0.2)' 
              : '0 2px 8px rgba(0, 0, 0, 0.04)'
          }}
          className="w-full px-4 py-3.5 rounded-xl bg-white border-2 border-[var(--color-border-light)] text-[var(--color-text-primary)] focus:border-[var(--color-brand-blue)] focus:outline-none transition-all duration-300 text-left flex items-center justify-between hover:border-[var(--color-brand-blue)]/50"
        >
          <span className={form.lookingFor ? 'text-[var(--color-text-primary)]' : 'text-[var(--color-text-muted)]'}>
            {form.lookingFor ? lookingForOptions.find(o => o.value === form.lookingFor)?.label : 'Select an option'}
          </span>
          <motion.div
            animate={{ rotate: openDropdown === 'lookingFor' ? 180 : 0 }}
            transition={{ duration: 0.2 }}
          >
            <ChevronDown className="w-5 h-5 text-[var(--color-brand-blue)]" />
          </motion.div>
        </motion.button>

        {/* Dropdown Menu */}
        <AnimatePresence>
          {openDropdown === 'lookingFor' && (
            <motion.div
              initial={{ opacity: 0, y: -10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="absolute top-full left-0 right-0 mt-2 bg-white border-2 border-[var(--color-border-light)] rounded-xl shadow-xl z-50 overflow-hidden"
            >
              {lookingForOptions.map((opt, idx) => (
                <motion.button
                  key={opt.value}
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation()
                    handleChange({ target: { name: 'lookingFor', value: opt.value } })
                    setOpenDropdown(null)
                  }}
                  whileHover={{ backgroundColor: 'rgba(42, 171, 215, 0.08)' }}
                  className={`w-full px-4 py-3.5 text-left transition-all duration-200 flex items-center justify-between group ${
                    form.lookingFor === opt.value ? 'bg-[var(--color-bg-brand-tint)] border-l-4 border-l-[var(--color-brand-blue)]' : 'border-l-4 border-l-transparent'
                  } ${idx !== lookingForOptions.length - 1 ? 'border-b border-b-[var(--color-border-light)]' : ''}`}
                >
                  <span className={`font-medium ${
                    form.lookingFor === opt.value ? 'text-[var(--color-brand-blue)] font-black' : 'text-[var(--color-text-primary)]'
                  }`}>
                    {opt.label}
                  </span>
                  {form.lookingFor === opt.value && (
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                    >
                      <CheckCircle2 className="w-5 h-5 text-[var(--color-brand-blue)]" />
                    </motion.div>
                  )}
                </motion.button>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      {/* Conditional Plan Selection */}
      <AnimatePresence>
        {form.lookingFor && (
          <motion.div
            initial={{ opacity: 0, y: 20, height: 0 }}
            animate={{ opacity: 1, y: 0, height: 'auto' }}
            exit={{ opacity: 0, y: -20, height: 0 }}
            transition={{ duration: 0.3 }}
            className="relative"
          >
            <label className="block text-sm font-semibold text-[var(--color-text-primary)] mb-2.5">
              Select plan
            </label>
            <motion.button
              type="button"
              onClick={(e) => {
                e.stopPropagation()
                setOpenDropdown(openDropdown === 'plan' ? null : 'plan')
              }}
              animate={{
                boxShadow: openDropdown === 'plan' 
                  ? '0 0 20px rgba(42, 171, 215, 0.2)' 
                  : '0 2px 8px rgba(0, 0, 0, 0.04)'
              }}
              className="w-full px-4 py-3.5 rounded-xl bg-white border-2 border-[var(--color-border-light)] text-[var(--color-text-primary)] focus:border-[var(--color-brand-blue)] focus:outline-none transition-all duration-300 text-left flex items-center justify-between hover:border-[var(--color-brand-blue)]/50"
            >
              <span className={form.plan ? 'text-[var(--color-text-primary)]' : 'text-[var(--color-text-muted)]'}>
                {form.plan ? currentPlans.find(p => p.value === form.plan)?.label : 'Select a plan'}
              </span>
              <motion.div
                animate={{ rotate: openDropdown === 'plan' ? 180 : 0 }}
                transition={{ duration: 0.2 }}
              >
                <ChevronDown className="w-5 h-5 text-[var(--color-brand-blue)]" />
              </motion.div>
            </motion.button>

            {/* Dropdown Menu */}
            <AnimatePresence>
              {openDropdown === 'plan' && (
                <motion.div
                  initial={{ opacity: 0, y: -10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -10, scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                  className="absolute top-full left-0 right-0 mt-2 bg-white border-2 border-[var(--color-border-light)] rounded-xl shadow-xl z-50 overflow-hidden"
                >
                  {currentPlans.map((plan, idx) => (
                    <motion.button
                      key={plan.value}
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation()
                        handleChange({ target: { name: 'plan', value: plan.value } })
                        setOpenDropdown(null)
                      }}
                      whileHover={{ backgroundColor: 'rgba(42, 171, 215, 0.08)' }}
                      className={`w-full px-4 py-3.5 text-left transition-all duration-200 flex items-center justify-between group ${
                        form.plan === plan.value ? 'bg-[var(--color-bg-brand-tint)] border-l-4 border-l-[var(--color-brand-blue)]' : 'border-l-4 border-l-transparent'
                      } ${idx !== currentPlans.length - 1 ? 'border-b border-b-[var(--color-border-light)]' : ''}`}
                    >
                      <span className={`font-medium ${
                        form.plan === plan.value ? 'text-[var(--color-brand-blue)] font-black' : 'text-[var(--color-text-primary)]'
                      }`}>
                        {plan.label}
                      </span>
                      {form.plan === plan.value && (
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                        >
                          <CheckCircle2 className="w-5 h-5 text-[var(--color-brand-blue)]" />
                        </motion.div>
                      )}
                    </motion.button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Message */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
      >
        <label className="block text-sm font-semibold text-[var(--color-text-primary)] mb-2.5">
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

      {/* Submit Button */}
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
