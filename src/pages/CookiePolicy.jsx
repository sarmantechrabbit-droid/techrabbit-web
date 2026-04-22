import { motion } from 'framer-motion'
import { Cookie } from 'lucide-react'

export default function CookiePolicy() {
  const cookieTypes = [
    {
      title: "Essential Cookies",
      description: "These cookies are necessary for the website to function properly. They enable basic functions like page navigation and access to secure areas. The website cannot function properly without these cookies."
    },
    {
      title: "Performance Cookies",
      description: "These cookies collect information about how visitors use our website, such as which pages are visited most often and if users receive error messages. These cookies don't collect information that identifies a visitor."
    },
    {
      title: "Functional Cookies",
      description: "These cookies allow the website to remember choices you make (such as your username, language, or the region you're in) and provide enhanced, more personal features."
    },
    {
      title: "Marketing Cookies",
      description: "These cookies are used to track visitors across websites. The intention is to display ads that are relevant and engaging for the individual user and thereby more valuable for publishers and third-party advertisers."
    }
  ]

  const sections = [
    {
      title: "1. What Are Cookies?",
      content: "Cookies are small text files that are stored on your device (computer, tablet, or mobile phone) when you visit a website. They are widely used to make websites work more efficiently and to provide information to the owners of the site. Cookies allow websites to remember information about your visit, such as your preferred language and other settings."
    },
    {
      title: "2. How We Use Cookies",
      content: "TechRabbit uses cookies to enhance your experience on our website. We use them to remember your preferences, understand how you use our site, and to improve our services. Cookies help us analyze website traffic, personalize content, and remember your login information."
    },
    {
      title: "3. Types of Cookies We Use",
      content: "We use different types of cookies for different purposes. Essential cookies are necessary for the website to function. Performance cookies help us understand how visitors use our site. Functional cookies remember your choices. Marketing cookies track your activity to show you relevant ads."
    },
    {
      title: "4. Third-Party Cookies",
      content: "Some cookies on our website are set by third parties, such as analytics providers and advertising networks. These third parties may use cookies to track your online activity across different websites. We do not have control over these cookies, and we encourage you to review their privacy policies."
    },
    {
      title: "5. Cookie Consent",
      content: "When you first visit our website, we ask for your consent to use cookies. You can choose to accept all cookies, reject non-essential cookies, or customize your cookie preferences. Your consent is stored and will be remembered for future visits."
    },
    {
      title: "6. Managing Your Cookies",
      content: "You can control and manage cookies through your browser settings. Most browsers allow you to refuse cookies or alert you when cookies are being sent. However, blocking cookies may affect the functionality of our website. You can also delete cookies that have already been set."
    },
    {
      title: "7. Disabling Cookies",
      content: "If you choose to disable cookies, some features of our website may not work properly. For example, you may not be able to log in to your account or access certain personalized features. We recommend keeping cookies enabled for the best experience."
    },
    {
      title: "8. Changes to This Policy",
      content: "We may update this Cookie Policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons. We will notify you of any material changes by posting the updated policy on our website."
    },
    {
      title: "9. Contact Us",
      content: "If you have questions about our use of cookies or this Cookie Policy, please contact us at hello@techrabbit.io or write to us at 939/940, Sun Gravitas, Ahmedabad, Gujarat 380061, India."
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
                <Cookie className="w-6 h-6" />
              </motion.div>
              <h1 className="text-4xl md:text-5xl font-black text-[var(--color-text-primary)] font-heading">
                Cookie Policy
              </h1>
            </div>
            <p className="text-[var(--color-text-body)] text-lg mb-4">
              Last updated: January 2025
            </p>
            <p className="text-[var(--color-text-body)] text-base leading-relaxed">
              This Cookie Policy explains how TechRabbit uses cookies and similar tracking technologies on our website. We are committed to being transparent about our use of cookies and how they affect your privacy.
            </p>
          </motion.div>

          {/* Cookie Types */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-12 md:mb-16"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-[var(--color-text-primary)] mb-8">
              Types of Cookies We Use
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {cookieTypes.map((cookie, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: idx * 0.1 }}
                  className="group"
                >
                  <div className="relative overflow-hidden rounded-2xl bg-white border border-[var(--color-border-light)] p-6 hover:shadow-lg transition-all duration-300 h-full">
                    <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-[var(--color-brand-blue)] to-[var(--color-brand-green)]" />
                    
                    <h3 className="text-lg font-bold text-[var(--color-text-primary)] mb-3 pl-4">
                      {cookie.title}
                    </h3>
                    <p className="text-[var(--color-text-body)] text-sm leading-relaxed pl-4">
                      {cookie.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
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
              We respect your privacy and are committed to being transparent about our use of cookies. If you have any questions or concerns about our cookie practices, please don't hesitate to contact us. You can manage your cookie preferences at any time through your browser settings.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
