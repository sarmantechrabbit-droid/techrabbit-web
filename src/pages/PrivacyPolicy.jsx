import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Shield, FileText, Truck, Mail, Phone, Globe, ChevronRight } from "lucide-react";

const policies = [
  {
    id: "privacy",
    title: "Privacy Policy",
    icon: Shield,
    lastUpdated: "Nov 22, 2025",
    content: [
      {
        title: "1. Introduction",
        text: "Tech Rabbit is committed to protecting your privacy and ensuring the security of the information you share with us. This Privacy Policy explains how we collect, use, store, and safeguard your data when you visit our website or engage with our services.",
      },
      {
        title: "2. Information We Collect",
        subsections: [
          {
            title: "a) Personal Information",
            items: [
              "Name, email, phone number",
              "Company name and professional role",
              "Billing details (when required for invoicing)",
            ],
          },
          {
            title: "b) Project / Business Information",
            items: [
              "Project briefs, technical documentation",
              "Business strategies, branding assets",
              "Content required for service delivery",
            ],
          },
          {
            title: "c) Technical Information",
            items: [
              "IP address, browser details, device information",
              "Cookies and usage logs for analytics and performance",
            ],
          },
        ],
      },
      {
        title: "3. How We Use Your Information",
        text: "Your information may be used to:",
        items: [
          "Communicate regarding inquiries or ongoing projects",
          "Deliver and improve our services",
          "Process billing and payments",
          "Send updates, newsletters, or promotional material (only with your consent)",
          "Comply with regulatory or legal obligations",
        ],
        footer: "We never sell or rent your personal data to third parties.",
      },
      {
        title: "4. Data Security",
        text: "We use industry-standard practices to protect your information, including:",
        items: [
          "Secure servers and encrypted storage",
          "Access controls and authentication",
          "Regular backups and internal audits",
        ],
        footer: "However, no system is completely secure. Your use of the site and our services is at your own risk.",
      },
      {
        title: "5. Data Retention",
        text: "We retain information only as long as necessary to:",
        items: [
          "Fulfill service obligations",
          "Meet legal requirements",
          "Resolve disputes or enforce agreements",
        ],
        footer: "You may request deletion of your data by emailing hello@techrabbit.io.",
      },
      {
        title: "6. Cookies",
        text: "Our website may use cookies to:",
        items: [
          "Enhance browsing experience",
          "Analyze traffic and performance",
          "Remember preferences",
        ],
        footer: "You can disable cookies via your browser settings.",
      },
      {
        title: "7. Third-Party Tools & Links",
        text: "We may use third-party services (analytics, chat tools, payment gateways). These providers follow their own privacy policies. Our website may contain external links; we are not responsible for their content or practices.",
      },
      {
        title: "8. Your Rights",
        text: "You may:",
        items: [
          "Request access to your data",
          "Correct or delete your information",
          "Withdraw consent",
          "Opt out of promotional communications",
        ],
        footer: "Contact hello@techrabbit.io for any such requests.",
      },
      {
        title: "9. Updates to This Policy",
        text: "We may update this Privacy Policy from time to time. Continued use of our website or services constitutes acceptance of the updated terms.",
      },
      {
        title: "10. Contact Us",
        contact: {
          email: "hello@techrabbit.io",
          phone: "+91 76002 13313",
          website: "www.techrabbit.io",
        },
      },
    ],
  },
  {
    id: "refund",
    title: "Cancellation & Refund",
    icon: FileText,
    lastUpdated: "Nov 22, 2025",
    content: [
      {
        title: "Introduction",
        text: "Tech Rabbit provides IT development, consulting, and digital services. Since these services involve manpower, time, planning, and custom development, our cancellation and refund rules differ from product-based businesses.",
      },
      {
        title: "1. Cancellation Policy",
        items: [
          "Cancellations can be requested before project initiation or before any work has been delivered.",
          "Once the project has started, resources have been allocated, or deliverables have been shared, cancellations will not be accepted.",
          "If cancellation is requested before work begins, any refundable amount (if applicable) will be evaluated based on advance tasks, planning, or resources reserved.",
        ],
      },
      {
        title: "2. Refund Policy",
        items: [
          "Refunds are not applicable once work has started or services have been delivered (including planning, research, design, or development).",
          "If a payment was made by mistake (duplicate transaction), a refund may be processed after internal verification.",
          "If a refund is approved, it will take 7–10 business days to reflect in the customer’s account, depending on bank/payment gateway policies.",
        ],
      },
      {
        title: "3. Service-Related Concerns",
        items: [
          "You must report the issue to our support team at hello@techrabbit.io.",
          "Our team will review the concern and take corrective action where applicable.",
        ],
      },
      {
        title: "4. No Applicability of Product-Based Conditions",
        text: "Since Tech Rabbit does not sell physical products, conditions related to damaged, perishable, or defective items do not apply.",
      },
    ],
  },
  {
    id: "shipping",
    title: "Shipping & Delivery",
    icon: Truck,
    lastUpdated: "Nov 22, 2025",
    content: [
      {
        title: "Introduction",
        text: "Tech Rabbit provides digital and IT services. We do not ship or deliver physical goods unless otherwise specified for a special project.",
      },
      {
        title: "1. Delivery of Services",
        items: [
          "All services are delivered digitally through email, online meetings, project dashboards, or development servers.",
          "The expected delivery timelines depend on the project scope and are defined in the agreement or proposal.",
          "Project delivery is communicated to the client via email or the project communication channel.",
        ],
      },
      {
        title: "2. Digital Deliverables",
        text: "Deliverables may include:",
        items: [
          "Design files",
          "Source code",
          "Documentation",
          "Reports",
          "Deployment links",
          "Access credentials",
        ],
        footer: "All such deliverables will be shared electronically.",
      },
      {
        title: "3. Timeline Commitments",
        items: [
          "Delivery timelines begin only after project kickoff, requirement confirmation, and receipt of initial payment.",
          "Delays caused by the client (late responses, missing inputs, unclear requirements) will extend the timeline.",
        ],
      },
      {
        title: "4. Physical Delivery (If Applicable)",
        items: [
          "If in rare cases physical documents or hardware are shipped, they will be sent through registered courier services.",
          "Tracking details will be shared with the client.",
          "Delivery timelines depend on courier company policies.",
          "Tech Rabbit is not liable for courier delays.",
        ],
      },
      {
        title: "5. Support & Communication",
        contact: {
          phone: "+91 76002 13313",
          email: "techrabbitindia@gmail.com",
        },
      },
    ],
  },
];

export default function PrivacyPolicy() {
  const [activeTab, setActiveTab] = useState("privacy");

  const activePolicy = policies.find((p) => p.id === activeTab);

  return (
    <div className="relative min-h-screen bg-[var(--color-bg-page)] pt-28 pb-20">
      {/* Background elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div 
          className="absolute top-0 right-0 w-[600px] h-[600px] opacity-10"
          style={{ background: 'radial-gradient(circle, var(--color-brand-blue), transparent 70%)' }}
        />
        <div 
          className="absolute bottom-0 left-0 w-[500px] h-[500px] opacity-10"
          style={{ background: 'radial-gradient(circle, var(--color-brand-green), transparent 70%)' }}
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 md:px-12">
        <header className="mb-12 md:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[var(--color-border-brand-soft)] bg-[var(--color-bg-brand-tint)] text-[var(--color-brand-blue)] text-[10px] font-black uppercase tracking-widest mb-6"
          >
            Compliance & Legal
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-black text-[var(--color-text-primary)] font-heading leading-tight mb-4"
          >
            Trust & <span className="text-[var(--color-text-muted)] font-medium">Transparency.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-[var(--color-text-body)] text-lg max-w-2xl mb-12"
          >
            Our policies are designed to protect your data, ensure clear communication, and maintain a high standard of service delivery.
          </motion.p>

          {/* Tabs Navigation */}
          <div className="flex flex-wrap gap-2 md:gap-4 p-1.5 bg-white/50 backdrop-blur-md rounded-2xl border border-[var(--color-border-light)] w-max">
            {policies.map((p) => {
              const Icon = p.icon;
              const isActive = activeTab === p.id;
              return (
                <button
                  key={p.id}
                  onClick={() => setActiveTab(p.id)}
                  className={`flex items-center gap-2.5 px-6 py-3 rounded-xl text-sm font-bold transition-all duration-300 ${
                    isActive
                      ? "bg-[var(--color-text-primary)] text-white shadow-lg scale-[1.02]"
                      : "text-[var(--color-text-muted)] hover:text-[var(--color-text-primary)] hover:bg-white"
                  }`}
                >
                  <Icon size={16} />
                  {p.title}
                </button>
              );
            })}
          </div>
        </header>

        <main>
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="bg-white rounded-[2rem] border border-[var(--color-border-card)] shadow-2xl overflow-hidden"
            >
              {/* Policy Header */}
              <div className="p-8 md:p-12 border-b border-[var(--color-border-light)] bg-gradient-to-br from-gray-50/50 to-white">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                  <div>
                    <h2 className="text-3xl md:text-4xl font-black text-[var(--color-text-primary)] font-heading mb-2">
                      {activePolicy.title}
                    </h2>
                    <p className="text-[var(--color-text-muted)] text-sm">
                      Last updated {activePolicy.lastUpdated}
                    </p>
                  </div>
                  <div className="flex items-center gap-3 px-5 py-3 rounded-2xl bg-white border border-[var(--color-border-light)] shadow-sm">
                    <activePolicy.icon className="text-[var(--color-brand-blue)] w-5 h-5" />
                    <span className="text-[10px] font-black uppercase tracking-widest text-[var(--color-text-primary)]">
                       Official Directive
                    </span>
                  </div>
                </div>
              </div>

              {/* Policy Content */}
              <div className="p-8 md:p-12 space-y-12">
                {activePolicy.content.map((section, idx) => (
                  <div key={idx} className="group">
                    <h3 className="text-xl md:text-2xl font-black text-[var(--color-text-primary)] font-heading mb-4 flex items-center gap-3 group-hover:text-[var(--color-brand-blue)] transition-colors">
                      <span className="w-1.5 h-6 rounded-full bg-[var(--color-brand-blue)]" />
                      {section.title}
                    </h3>
                    
                    {section.text && (
                      <p className="text-[var(--color-text-body)] leading-relaxed mb-4 text-sm sm:text-base">
                        {section.text}
                      </p>
                    )}

                    {section.subsections && (
                      <div className="space-y-8 mt-6">
                        {section.subsections.map((sub, sidx) => (
                          <div key={sidx} className="pl-6 border-l-2 border-gray-100">
                            <h4 className="font-black text-sm uppercase tracking-wider text-[var(--color-text-primary)] mb-3">
                              {sub.title}
                            </h4>
                            <ul className="space-y-2">
                              {sub.items.map((item, iidx) => (
                                <li key={iidx} className="flex items-start gap-2.5 text-[var(--color-text-body)] text-sm sm:text-base">
                                  <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[var(--color-brand-green)] shrink-0" />
                                  {item}
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    )}

                    {section.items && (
                      <ul className="space-y-3 pl-6 border-l-2 border-gray-100">
                        {section.items.map((item, iidx) => (
                          <li key={iidx} className="flex items-start gap-3 text-[var(--color-text-body)] text-sm sm:text-base">
                            <div className="mt-2 w-1 h-1 rounded-full bg-[var(--color-brand-blue)] shrink-0" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    )}

                    {section.footer && (
                      <p className="mt-4 text-[var(--color-text-primary)] font-bold text-sm italic">
                        {section.footer}
                      </p>
                    )}

                    {section.contact && (
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8">
                        {Object.entries(section.contact).map(([key, val]) => {
                          const Icons = { email: Mail, phone: Phone, website: Globe };
                          const Icon = Icons[key] || Globe;
                          return (
                            <div key={key} className="p-4 rounded-2xl bg-gray-50 border border-gray-100 hover:border-[var(--color-brand-blue)] transition-all">
                              <div className="flex items-center gap-3 mb-1">
                                <Icon size={14} className="text-[var(--color-brand-blue)]" />
                                <span className="text-[8px] font-black uppercase tracking-widest text-[var(--color-text-muted)]">{key}</span>
                              </div>
                              <p className="text-[var(--color-text-primary)] font-bold text-xs">{val}</p>
                            </div>
                          );
                        })}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </main>

        {/* Closing Note */}
        <footer className="mt-16 text-center">
          <p className="text-[var(--color-text-muted)] text-sm mb-6">
            Everything Tech Rabbit does is built on a foundation of integrity.
          </p>
          <div className="flex items-center justify-center gap-4">
             <div className="h-px w-12 bg-gray-200" />
             <div className="w-2 h-2 rounded-full border-2 border-[var(--color-brand-blue)]" />
             <div className="h-px w-12 bg-gray-200" />
          </div>
        </footer>
      </div>
    </div>
  );
}
