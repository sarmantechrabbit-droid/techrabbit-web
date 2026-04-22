import { motion } from 'framer-motion'
import { FileText } from 'lucide-react'

export default function TermsConditions() {
  const sections = [
    {
      title: "1. Acceptance of Terms",
      content: "By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service."
    },
    {
      title: "2. Use License",
      content: "Permission is granted to temporarily download one copy of the materials (information or software) on TechRabbit's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not: modify or copy the materials; use the materials for any commercial purpose or for any public display; attempt to decompile or reverse engineer any software contained on the website; remove any copyright or other proprietary notations from the materials; or transfer the materials to another person or 'mirror' the materials on any other server."
    },
    {
      title: "3. Disclaimer",
      content: "The materials on TechRabbit's website are provided on an 'as is' basis. TechRabbit makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights."
    },
    {
      title: "4. Limitations",
      content: "In no event shall TechRabbit or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on TechRabbit's website, even if TechRabbit or an authorized representative has been notified orally or in writing of the possibility of such damage."
    },
    {
      title: "5. Accuracy of Materials",
      content: "The materials appearing on TechRabbit's website could include technical, typographical, or photographic errors. TechRabbit does not warrant that any of the materials on its website are accurate, complete, or current. TechRabbit may make changes to the materials contained on its website at any time without notice."
    },
    {
      title: "6. Materials and Content",
      content: "The materials on TechRabbit's website are protected by copyright law and international treaties. You may not reproduce, distribute, transmit, display, or perform any content from this website without prior written permission from TechRabbit."
    },
    {
      title: "7. Links",
      content: "TechRabbit has not reviewed all of the sites linked to its website and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by TechRabbit of the site. Use of any such linked website is at the user's own risk."
    },
    {
      title: "8. Modifications",
      content: "TechRabbit may revise these terms of service for its website at any time without notice. By using this website, you are agreeing to be bound by the then current version of these terms of service."
    },
    {
      title: "9. Governing Law",
      content: "These terms and conditions are governed by and construed in accordance with the laws of India, and you irrevocably submit to the exclusive jurisdiction of the courts in that location."
    },
    {
      title: "10. Contact Information",
      content: "If you have any questions about these Terms & Conditions, please contact us at hello@techrabbit.io or write to us at 939/940, Sun Gravitas, Ahmedabad, Gujarat 380061, India."
    }
  ]

  return (
    <div className="relative min-h-screen bg-[var(--color-bg-page)]">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute -top-40 -right-40 w-80 h-80 rounded-full opacity-10"
          style={{ background: 'radial-gradient(circle, var(--color-brand-blue), transparent)' }}
          animate={{ x: [0, 60, 0], y: [0, 40, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full opacity-10"
          style={{ background: 'radial-gradient(circle, var(--color-brand-green), transparent)' }}
          animate={{ x: [0, -60, 0], y: [0, -40, 0] }}
          transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>

      <div className="relative z-10 px-6 md:px-12 py-16 md:py-24">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-12 md:mb-16"
          >
            <div className="flex items-center gap-3 mb-6">
              <motion.div
                className="w-10 h-10 rounded-xl bg-gradient-to-br from-[var(--color-brand-blue)] to-[var(--color-brand-green)] flex items-center justify-center text-white"
                whileHover={{ scale: 1.1, rotate: 10 }}
              >
                <FileText className="w-6 h-6" />
              </motion.div>
              <h1 className="text-4xl md:text-5xl font-black text-[var(--color-text-primary)] font-heading">
                Terms & Conditions
              </h1>
            </div>
            <p className="text-[var(--color-text-body)] text-lg mb-4">
              Last updated: January 2025
            </p>
            <p className="text-[var(--color-text-body)] text-base leading-relaxed">
              Please read these terms and conditions carefully before using TechRabbit's website. Your access to and use of the website is conditioned on your acceptance of and compliance with these terms and conditions.
            </p>
          </motion.div>

          {/* Content Sections */}
          <div className="space-y-8">
            {sections.map((section, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="group"
              >
                <div className="relative overflow-hidden rounded-2xl bg-white border border-[var(--color-border-light)] p-6 md:p-8 hover:shadow-lg transition-all duration-300">
                  <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-[var(--color-brand-green)] to-[var(--color-brand-blue)]" />
                  
                  <h2 className="text-xl md:text-2xl font-bold text-[var(--color-text-primary)] mb-4 pl-4">
                    {section.title}
                  </h2>
                  <p className="text-[var(--color-text-body)] leading-relaxed pl-4">
                    {section.content}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Footer Note */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mt-12 md:mt-16 p-6 md:p-8 rounded-2xl bg-gradient-to-r from-[var(--color-bg-brand-tint)] to-white border border-[var(--color-border-light)]"
          >
            <p className="text-[var(--color-text-body)] text-sm leading-relaxed">
              By using TechRabbit's website, you acknowledge that you have read these Terms & Conditions and agree to be bound by them. If you do not agree with any part of these terms, please do not use our website.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
