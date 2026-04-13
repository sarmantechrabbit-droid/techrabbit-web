import { useState } from 'react'
import { motion } from 'framer-motion'
import Reveal from '../components/Reveal'

const fields = [
  { name: 'name', label: 'Full Name', type: 'text', placeholder: 'Alex Johnson' },
  { name: 'email', label: 'Work Email', type: 'email', placeholder: 'alex@startup.com' },
  { name: 'company', label: 'Company Name', type: 'text', placeholder: 'Acme Inc.' },
]

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', company: '', message: '', budget: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  const handleChange = (e) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }))
  }

  return (
    <div className="pt-40 pb-24 bg-white px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          {/* Left Column */}
          <Reveal>
            <p className="text-indigo-600 text-sm font-semibold uppercase tracking-widest mb-4">Get in Touch</p>
            <h1 className="text-[42px] md:text-7xl font-black text-gray-900 mb-8 font-[Outfit] leading-[1.1] tracking-tight">
              Let's build <br/> something <span className="text-indigo-600">new.</span>
            </h1>
            <p className="text-gray-500 text-lg md:text-xl max-w-md leading-relaxed mb-12">
              Book a call or send us a message. We'll get back to you within 24 hours to discuss your project.
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-indigo-50 flex items-center justify-center text-indigo-600 font-bold text-xl">✉️</div>
                <div>
                  <p className="text-xs text-gray-400 font-bold uppercase tracking-widest">Email us</p>
                  <p className="text-gray-900 font-bold">hello@techrabbit.digital</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-violet-50 flex items-center justify-center text-violet-600 font-bold text-xl">📞</div>
                <div>
                  <p className="text-xs text-gray-400 font-bold uppercase tracking-widest">Book a Call</p>
                  <p className="text-gray-900 font-bold">Schedule 15m Meeting</p>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Right Column - Form */}
          <Reveal delay={0.2}>
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-indigo-600 rounded-[2.5rem] p-12 text-center text-white shadow-2xl shadow-indigo-200"
              >
                <div className="text-6xl mb-6">🚀</div>
                <h2 className="text-3xl font-black mb-4 font-[Outfit]">Message Sent!</h2>
                <p className="text-indigo-100 text-lg mb-8">
                  We've received your request and our team will be in touch shortly.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-8 py-3 rounded-full bg-white text-indigo-600 font-bold hover:bg-gray-50 transition-colors"
                >
                  Send Another
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-gray-50 p-8 md:p-12 rounded-[2.5rem] border border-gray-100 shadow-sm">
                <div className="space-y-6">
                  {fields.map((f) => (
                    <div key={f.name}>
                      <label className="block text-gray-500 text-[11px] font-bold uppercase tracking-widest mb-2 ml-1">
                        {f.label}
                      </label>
                      <input
                        required
                        type={f.type}
                        name={f.name}
                        placeholder={f.placeholder}
                        value={form[f.name]}
                        onChange={handleChange}
                        className="w-full px-5 py-4 rounded-2xl bg-white border border-gray-100 text-gray-900 font-medium focus:ring-2 focus:ring-indigo-100 focus:border-indigo-400 outline-none transition-all shadow-sm"
                      />
                    </div>
                  ))}
                  <div>
                    <label className="block text-gray-500 text-[11px] font-bold uppercase tracking-widest mb-2 ml-1">
                      Project Details
                    </label>
                    <textarea
                      required
                      name="message"
                      rows={4}
                      placeholder="Tell us about your project, goals, and timeline..."
                      value={form.message}
                      onChange={handleChange}
                      className="w-full px-5 py-4 rounded-2xl bg-white border border-gray-100 text-gray-900 font-medium focus:ring-2 focus:ring-indigo-100 focus:border-indigo-400 outline-none transition-all shadow-sm resize-none"
                    />
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    className="w-full py-4 rounded-full bg-black text-white font-bold text-base shadow-lg shadow-gray-200 hover:bg-gray-800 transition-all"
                  >
                    Send Message
                  </motion.button>
                </div>
              </form>
            )}
          </Reveal>
        </div>
      </div>
    </div>
  )
}
