import { motion } from "framer-motion";
import { Cookie } from "lucide-react";

export default function CookiePolicy() {
  const cookieTypes = [
    {
      title: "Essential Cookies",
      description:
        "These cookies are necessary for the website to function properly. They enable basic functions like page navigation, secure access, and form submissions. The website cannot function properly without these cookies.",
    },
    {
      title: "Performance Cookies",
      description:
        "These cookies collect anonymous information about how visitors use our website, such as which pages are visited most often and if users receive error messages. They help us improve site performance and user experience.",
    },
    {
      title: "Functional Cookies",
      description:
        "These cookies allow the website to remember choices you make (such as your preferred language, region, or theme) and provide enhanced, more personalized features during your visit.",
    },
    {
      title: "Marketing Cookies",
      description:
        "These cookies are used to track visitors across websites. The intention is to display ads that are relevant and engaging for the individual user and thereby more valuable for publishers and third-party advertisers.",
    },
  ];

  const sections = [
    {
      title: "1. What Are Cookies?",
      content:
        "Cookies are small text files stored on your device when you visit our website. They help us recognize your browser, remember your preferences, and improve your overall experience. Cookies may also collect information about how you interact with our services, including project inquiries, service pages, and case studies.",
    },
    {
      title: "2. How We Use Cookies",
      content:
        "Tech Rabbit uses cookies to provide a seamless and personalized experience. We use them to remember user preferences, measure website performance, analyze traffic patterns, and improve our platform functionality. Cookies also help us understand how visitors engage with our service offerings and portfolio.",
    },
    {
      title: "3. Types of Cookies We Use",
      content:
        "We use essential cookies to ensure core functionality such as page navigation and secure access. Performance cookies help us analyze usage and improve the website. Functional cookies remember your preferences, while marketing cookies help deliver relevant content and measure campaign effectiveness.",
    },
    {
      title: "4. Analytics & Tracking",
      content:
        "We use analytics tools to understand how visitors interact with our website. These tools may use cookies to collect anonymous data such as pages viewed, time spent on site, and referral sources. This data helps us optimize our website and improve the user experience.",
    },
    {
      title: "5. Third-Party Cookies",
      content:
        "We may use trusted third-party services such as Google Analytics and other analytics or advertising tools. These providers may place cookies on your device to collect usage data, measure performance, and deliver relevant content. We recommend reviewing their privacy policies for more information.",
    },
    {
      title: "6. Cookie Consent",
      content:
        "When you first visit Tech Rabbit's website, you will be asked to provide consent for the use of cookies. You can accept all cookies, reject non-essential cookies, or manage your preferences individually. Your choices will be stored and can be updated at any time.",
    },
    {
      title: "7. Managing Your Cookies",
      content:
        "You can manage or disable cookies through your browser settings. Most browsers allow you to block or delete cookies. However, disabling cookies may impact features such as theme preferences, form functionality, and personalized content recommendations.",
    },
    {
      title: "8. Data & Privacy",
      content:
        "Cookies used on our website do not typically store sensitive personal information. Any data collected is handled in accordance with our Privacy Policy and applicable data protection laws, including GDPR and Indian IT regulations.",
    },
    {
      title: "9. Changes to This Policy",
      content:
        "We may update this Cookie Policy to reflect changes in technology, legal requirements, or website features. Updates will be posted on this page with a revised date.",
    },
    {
      title: "10. Contact Us",
      content:
        "If you have any questions about this Cookie Policy or how we use cookies, please contact us at info@techrabbit.co.",
    },
  ];

  return (
    <div className="relative min-h-screen bg-[var(--color-bg-page)]">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute -top-40 -right-40 w-80 h-80 rounded-full opacity-10"
          style={{
            background:
              "radial-gradient(circle, var(--color-brand-blue), transparent)",
          }}
          animate={{ x: [0, 60, 0], y: [0, 40, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full opacity-10"
          style={{
            background:
              "radial-gradient(circle, var(--color-brand-green), transparent)",
          }}
          animate={{ x: [0, -60, 0], y: [0, -40, 0] }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="relative z-10 px-6 md:px-12 py-24 md:py-24">
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
              Last updated: April 2025
            </p>
            <p className="text-[var(--color-text-body)] text-base leading-relaxed">
              This Cookie Policy explains how Tech Rabbit uses cookies and
              similar technologies to enhance your experience, analyze website
              traffic, and improve our web development and design services.
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
              We respect your privacy and are committed to being transparent
              about our use of cookies. If you have any questions or concerns
              about our cookie practices, please don't hesitate to contact us at
              info@techrabbit.co. You can manage your cookie preferences at any
              time through your browser settings or our cookie consent banner.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
