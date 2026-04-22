import { motion } from 'framer-motion'
import { Shield } from 'lucide-react'

export default function PrivacyPolicy() {
  const sections = [
    {
      title: "1. Information We Collect",
      content: "We collect information you provide directly to us, such as when you fill out a form, request a quote, or contact us. This includes your name, email address, company name, phone number, and any other information you choose to provide. We also automatically collect certain information about your device and how you interact with our website, including IP address, browser type, and pages visited."
    },
    {
      title: "2. How We Use Your Information",
      content: "We use the information we collect to provide, maintain, and improve our services, respond to your inquiries, send you technical notices and support messages, and comply with legal obligations. We may also use your information to send you marketing communications, but only if you've opted in to receive them."
    },
    {
      title: "3. Information Sharing",
      content: "We do not sell, trade, or rent your personal information to third parties. We may share your information with service providers who assist us in operating our website and conducting our business, subject to confidentiality agreements. We may also disclose information when required by law or to protect our rights and safety."
    },
    {
      title: "4. Data Security",
      content: "We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security."
    },
    {
      title: "5. Cookies and Tracking",
      content: "We use cookies and similar tracking technologies to enhance your experience on our website. These help us understand how you use our site and remember your preferences. You can control cookie settings through your browser, though some features may not work properly if cookies are disabled."
    },
    {
      title: "6. Your Rights",
      content: "Depending on your location, you may have certain rights regarding your personal information, including the right to access, correct, or delete your data. To exercise these rights, please contact us at hello@techrabbit.io. We will respond to your request within 30 days."
    },
    {
      title: "7. Third-Party Links",
      content: "Our website may contain links to third-party websites. We are not responsible for the privacy practices of these external sites. We encourage you to review their privacy policies before providing any personal information."
    },
    {
      title: "8. Changes to This Policy",
      content: "We may update this Privacy Policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons. We will notify you of any material changes by posting the updated policy on our website and updating the 'Last Updated' date."
    },
    {
      title: "9. Contact Us",
      content: "If you have questions about this Privacy Policy or our privacy practices, please contact us at hello@techrabbit.io or write to us at 939/940, Sun Gravitas, Ahmedabad, Gujarat 380061, India."
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
                <Shield className="w-6 h-6" />
              </motion.div>
              <h1 className="text-4xl md:text-5xl font-black text-[var(--color-text-primary)] font-heading">
                Privacy Policy
              </h1>
            </div>
            <p className="text-[var(--color-text-body)] text-lg mb-4">
              Last updated: January 2025
            </p>
            <p className="text-[var(--color-text-body)] text-base leading-relaxed">
              At TechRabbit, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website.
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
                  <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-[var(--color-brand-blue)] to-[var(--color-brand-green)]" />
                  
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
              If you have any questions about this Privacy Policy or our privacy practices, please don't hesitate to contact us. We're committed to protecting your personal information and ensuring you have a positive experience on our website.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
