import { motion } from "framer-motion";
import { FileText, Shield, Mail, Phone, Globe, Scale, Users, Code, Lock, Ban, Gavel } from "lucide-react";

const terms = [
  {
    title: "1. Acceptance of Terms",
    icon: Scale,
    text: "By accessing or using the Tech Rabbit website or engaging in our services, you acknowledge that you have read, understood, and agreed to be bound by these Terms and Conditions, along with our Privacy Policy. If you do not agree with any part of these terms, please discontinue the use of our website or services.",
  },
  {
    title: "2. Definition of Parties",
    icon: Users,
    subsections: [
      {
        title: '"We", "Us", "Our"',
        text: "Refers to Tech Rabbit, located at 939/940, Sun Gravitas, Nr Shyamal Cross Road, Ahmedabad, Gujarat 380058.",
      },
      {
        title: '"You", "Your", "User", "Visitor"',
        text: "Refers to any natural or legal person using our website and/or purchasing our services.",
      },
    ],
  },
  {
    title: "3. Services",
    icon: Code,
    text: "Tech Rabbit provides a range of IT development and consulting services, including but not limited to:",
    items: [
      "Website development",
      "Mobile app development",
      "CRM/ERP systems",
      "Custom software development",
      "UI/UX design",
      "IT and tech consulting",
    ],
    footer: "We reserve the right to modify, update, or discontinue any service at any time without notice.",
  },
  {
    title: "4. Client Responsibilities",
    icon: Shield,
    text: "Clients agree to:",
    items: [
      "Provide accurate project details, requirements, and resources necessary for execution.",
      "Respond to communications promptly to avoid delays.",
      "Make timely payments as per agreed terms.",
    ],
    footer: "Failure to provide required inputs may result in project delays, additional costs, or discontinuation of services.",
  },
  {
    title: "5. Intellectual Property",
    icon: Lock,
    text: "All code, designs, content, and deliverables developed by Tech Rabbit remain our intellectual property until full payment is received.",
    items: [
      "Upon full payment, ownership of project deliverables may be transferred to the client (excluding third-party tools, licenses, or open-source components).",
      "Tech Rabbit may showcase non-confidential work in its portfolio.",
    ],
  },
  {
    title: "6. Payments & Refunds",
    icon: FileText,
    items: [
      "Payments must be made as per the mutually agreed schedule.",
      "Once work has begun or services have been delivered, refunds are not applicable.",
      "Delayed payments may result in service suspension or additional charges.",
      "We shall not be held liable for any loss arising due to the decline of authorization for any transaction if the cardholder exceeds the preset limits agreed with our acquiring bank.",
    ],
  },
  {
    title: "7. Confidentiality & NDA",
    icon: Shield,
    text: "Both parties agree to maintain the confidentiality of all technical, business, and project-related information. An NDA can be executed at the client’s request. Confidentiality obligations continue even after the project terminates.",
  },
  {
    title: "8. Service Level Agreement (SLA)",
    icon: FileText,
    text: "SLAs may vary depending on the nature of the project. General commitments include:",
    items: [
      "Response time for support queries: 24–48 business hours",
      "Periodic updates/progress reports",
      "Bug-fix support for 30–90 days post-deployment",
    ],
    footer: "Specific SLAs (uptime, resolution timelines, maintenance windows) will be defined in the project contract.",
  },
  {
    title: "9. Website Usage Terms",
    icon: Globe,
    items: [
      "Website content may change without prior notice.",
      "We do not guarantee accuracy, performance, completeness, or suitability of website information. You acknowledge that such information may contain inaccuracies.",
      "Your use of website information is at your own risk. It is your responsibility to ensure that any service or information meets your requirements.",
      "Website design, layout, appearance, and graphics are owned by or licensed to us; reproduction is prohibited without consent.",
      "Any unauthorized use may give rise to civil claims and/or criminal liability.",
      "Our website may contain external links for convenience. We do not endorse or control third-party content.",
      "You may not link to our website without prior written permission.",
    ],
  },
  {
    title: "10. Limitation of Liability",
    icon: Ban,
    text: "Tech Rabbit shall not be liable for:",
    items: [
      "Indirect, incidental, or consequential damages.",
      "Issues arising from misuse, external attacks, unauthorized access, or third-party services.",
      "Data loss caused by factors outside our control.",
    ],
  },
  {
    title: "11. Termination",
    icon: Gavel,
    text: "Either party may terminate the agreement via written notice. Upon termination:",
    items: [
      "The client must pay for all work completed up to the termination date.",
      "Tech Rabbit will hand over all finalized work completed until that point.",
    ],
    footer: "To initiate termination or for concerns: hello@techrabbit.io",
  },
  {
    title: "12. Governing Law",
    icon: Gavel,
    text: "These Terms and Conditions are governed by the laws of India. Any disputes shall fall under the exclusive jurisdiction of courts located in Ahmedabad, Gujarat, India.",
  },
  {
    title: "13. Updates to Terms",
    icon: FileText,
    text: "We may revise these Terms periodically. Continued use of our services or website implies acceptance of updated terms.",
  },
  {
    title: "14. Contact Details",
    icon: Mail,
    contact: {
      email: "hello@techrabbit.io",
      phone: "+91 76002 13313",
      website: "www.techrabbit.io",
    },
  },
];

export default function TermsConditions() {
  return (
    <div className="relative min-h-screen bg-[var(--color-bg-page)] pt-28 pb-20">
      {/* Background elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div 
          className="absolute top-0 left-0 w-[600px] h-[600px] opacity-10"
          style={{ background: 'radial-gradient(circle, var(--color-brand-green), transparent 70%)' }}
        />
        <div 
          className="absolute bottom-0 right-0 w-[500px] h-[500px] opacity-10"
          style={{ background: 'radial-gradient(circle, var(--color-brand-blue), transparent 70%)' }}
        />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 md:px-12">
        <header className="mb-16 md:mb-24 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[var(--color-border-brand-soft)] bg-[var(--color-bg-brand-tint)] text-[var(--color-brand-blue)] text-[10px] font-black uppercase tracking-widest mb-6"
          >
            Agreement & Governance
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-7xl font-black text-[var(--color-text-primary)] font-heading leading-[1.1] mb-6"
          >
            Terms & <span className="text-[var(--color-text-muted)] font-medium">Conditions.</span>
          </motion.h1>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="flex items-center justify-center gap-4 text-[var(--color-text-muted)] text-sm font-medium"
          >
            <span>Last Updated: Nov 22, 2025</span>
            <span className="w-1 h-1 rounded-full bg-gray-300" />
            <span>Version 2.0</span>
          </motion.div>
        </header>

        <main className="space-y-6">
          {terms.map((section, idx) => (
            <motion.section
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              className="bg-white rounded-3xl border border-[var(--color-border-card)] shadow-sm hover:shadow-xl transition-all duration-500 overflow-hidden group"
            >
              <div className="p-6 md:p-10">
                <div className="flex items-start gap-4 md:gap-8">
                  <div className="hidden sm:flex w-14 h-14 rounded-2xl bg-gray-50 border border-gray-100 items-center justify-center text-[var(--color-brand-blue)] group-hover:scale-110 group-hover:bg-[var(--color-brand-blue)] group-hover:text-white transition-all duration-500">
                    <section.icon size={28} />
                  </div>
                  <div className="flex-1">
                    <h2 className="text-xl md:text-2xl font-black text-[var(--color-text-primary)] font-heading mb-4 flex items-center gap-3 sm:gap-0">
                      <span className="sm:hidden w-8 h-8 rounded-lg bg-[var(--color-brand-blue)]/10 flex items-center justify-center text-[var(--color-brand-blue)]">
                        <section.icon size={16} />
                      </span>
                      {section.title}
                    </h2>

                    {section.text && (
                      <p className="text-[var(--color-text-body)] leading-relaxed mb-6 text-sm md:text-base">
                        {section.text}
                      </p>
                    )}

                    {section.subsections && (
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                        {section.subsections.map((sub, sidx) => (
                          <div key={sidx} className="p-5 rounded-2xl bg-gray-50/50 border border-gray-100">
                            <h3 className="font-black text-[10px] uppercase tracking-widest text-[var(--color-brand-blue)] mb-2">
                              {sub.title}
                            </h3>
                            <p className="text-[var(--color-text-body)] text-xs md:text-sm leading-relaxed">
                              {sub.text}
                            </p>
                          </div>
                        ))}
                      </div>
                    )}

                    {section.items && (
                      <ul className="space-y-4 mb-6">
                        {section.items.map((item, iidx) => (
                          <li key={iidx} className="flex items-start gap-3 text-[var(--color-text-body)] text-sm md:text-base">
                            <div className="mt-2 w-1.5 h-1.5 rounded-full bg-[var(--color-brand-blue)] shrink-0" />
                            <span className="leading-relaxed">{item}</span>
                          </li>
                        ))}
                      </ul>
                    )}

                    {section.footer && (
                      <div className="mt-6 p-4 rounded-xl bg-blue-50/30 border-l-4 border-[var(--color-brand-blue)] text-[var(--color-text-primary)] text-sm font-bold italic">
                        {section.footer}
                      </div>
                    )}

                    {section.contact && (
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-4">
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
                </div>
              </div>
            </motion.section>
          ))}
        </main>

        <footer className="mt-20 text-center space-y-8">
          <p className="text-[var(--color-text-muted)] text-sm max-w-lg mx-auto">
            These terms define the professional relationship between Tech Rabbit and its clients, ensuring mutual respect and clarity.
          </p>
          <div className="flex flex-col items-center gap-4">
            <div className="flex items-center gap-4">
               <div className="h-px w-20 bg-gray-200" />
               <div className="w-3 h-3 rounded-full border-4 border-[var(--color-brand-blue)]" />
               <div className="h-px w-20 bg-gray-200" />
            </div>
            <p className="font-heading font-black text-xs text-[var(--color-text-primary)] uppercase tracking-[0.2em]">
              Tech Rabbit Legal
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
}
