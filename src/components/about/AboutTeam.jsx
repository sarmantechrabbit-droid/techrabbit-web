import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Reveal from "../Reveal";
import { ChevronDown, Share2, Code2, Mail } from "lucide-react";

const team = [
  {
    name: "Kunal Gangvani",
    role: "Founder & PM",
    details: "Leading strategy since 2019. Product visionary with 6+ years experience.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=600&fit=crop",
    accent: "--color-brand-blue",
    socials: { linkedin: "#", github: "#", email: "#" },
  },
  {
    name: "UI/UX Designer",
    role: "Figma Lead",
    details: "Design systems & prototypes. Creating beautiful user experiences.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&h=600&fit=crop",
    accent: "--color-brand-green",
    socials: { linkedin: "#", github: "#", email: "#" },
  },
  {
    name: "Dhrumit",
    role: "Full-Stack Developer",
    details: "React, Node.js, PostgreSQL. Building scalable applications.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500&h=600&fit=crop",
    accent: "--color-brand-blue",
    socials: { linkedin: "#", github: "#", email: "#" },
  },
  {
    name: "Dharmik Odedara",
    role: "Backend Dev",
    details: "APIs, Integrations & Architecture. System design expert.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=600&fit=crop",
    accent: "--color-brand-green",
    socials: { linkedin: "#", github: "#", email: "#" },
  },
  {
    name: "Sarman Parmar",
    role: "Frontend Dev",
    details: "Performance & Animations. Crafting smooth user interactions.",
    image: "#",
    accent: "--color-brand-blue",
    socials: { linkedin: "#", github: "#", email: "#" },
  },
  {
    name: "Pramod Kale",
    role: "QA Engineer",
    details: "Systems & Ops Excellence. Ensuring quality at every step.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500&h=600&fit=crop",
    accent: "--color-brand-green",
    socials: { linkedin: "#", github: "#", email: "#" },
  },
  {
    name: "Chirag",
    role: "Business Analyst",
    details: "Requirements & Sprint planning. Bridging business and tech.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=600&fit=crop",
    accent: "--color-brand-blue",
    socials: { linkedin: "#", github: "#", email: "#" },
  },
  {
    name: "Client Success",
    role: "Sales & Onboarding",
    details: "Communication & Growth. Your dedicated point of contact.",
    image: "#",
    accent: "--color-brand-green",
    socials: { linkedin: "#", github: "#", email: "#" },
  },
];

export default function AboutTeam() {
  const [expandedIdx, setExpandedIdx] = useState(null);

  return (
    <section className="pt-20 px-6 md:px-12 bg-[var(--color-bg-page)] overflow-hidden relative">
      {/* Dot grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle, var(--color-grid-dot) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
          opacity: 0.5,
        }}
      />
      <div className="absolute top-0 inset-x-0 h-28 pointer-events-none"
        style={{ background: "linear-gradient(to bottom, var(--color-bg-page), transparent)" }} />
      <div className="absolute bottom-0 inset-x-0 h-28 pointer-events-none"
        style={{ background: "linear-gradient(to top, var(--color-bg-page), transparent)" }} />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <Reveal className="text-center mb-24">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[var(--color-border-brand-soft)] bg-[var(--color-bg-brand-tint)] text-[var(--color-brand-blue)] text-[10px] font-black tracking-widest uppercase mb-6">
            Meet Our Team
          </div>
          <h2 className="text-4xl md:text-5xl font-bold font-heading tracking-tight text-[var(--color-text-primary)] leading-[1.2] mb-5">
           Everyone who works 
            <br />
            <span className="bg-clip-text text-transparent"
              style={{ backgroundImage: "var(--gradient-brand)" }}>
              on your product
            </span>
          </h2>
          <p className="text-[var(--color-text-body)] text-base max-w-2xl mx-auto leading-relaxed font-medium">
100% inhouse. One office. Every person in the same room in Ahmedabad.

          </p>
        </Reveal>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-14">
          {team.map((member, idx) => (
            <motion.div
              key={member.name + idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.08, duration: 0.5 }}
              viewport={{ once: true }}
              className="group relative h-full"
            >
              {/* Card Container */}
              <motion.div
                className="relative rounded-3xl overflow-hidden h-full flex flex-col border transition-all duration-300"
                style={{
                  borderColor: expandedIdx === idx
                    ? `var(${member.accent})`
                    : "var(--color-border-card)",
                  boxShadow: expandedIdx === idx
                    ? `0 20px 60px -12px color-mix(in srgb, var(${member.accent}) 30%, transparent)`
                    : "0 2px 12px rgba(0,0,0,0.04)",
                }}
              >
                {/* Image Container */}
                <div className="relative h-80 overflow-hidden bg-[var(--color-bg-card)]">
                  {/* Image */}
                  <motion.img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-500"
                    animate={{
                      scale: expandedIdx === idx ? 1.05 : 1,
                    }}
                  />

                  {/* Overlay Gradient */}
                  <div
                    className="absolute inset-0 transition-all duration-300"
                    style={{
                      background: expandedIdx === idx
                        ? `linear-gradient(135deg, color-mix(in srgb, var(${member.accent}) 40%, transparent) 0%, color-mix(in srgb, var(${member.accent}) 20%, transparent) 100%)`
                        : `linear-gradient(135deg, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.4) 100%)`,
                    }}
                  />

                  {/* Top Accent Bar */}
                  <div
                    className="absolute top-0 inset-x-0 h-1"
                    style={{ background: `var(${member.accent})` }}
                  />

                  {/* Role Badge - Positioned on Image */}
                  <motion.div
                    className="absolute top-4 right-4 px-3 py-1.5 rounded-full backdrop-blur-md border transition-all duration-300"
                    style={{
                      background: "rgba(255, 255, 255, 0.9)",
                      borderColor: `var(${member.accent})`,
                    }}
                    animate={{
                      y: expandedIdx === idx ? -8 : 0,
                    }}
                  >
                    <span
                      className="text-[9px] font-black uppercase tracking-widest"
                      style={{ color: `var(${member.accent})` }}
                    >
                      {member.role.split(" ")[0]}
                    </span>
                  </motion.div>
                </div>

                {/* Content Section */}
                <div className="flex-1 p-6 flex flex-col">
                  {/* Name & Role */}
                  <div className="mb-4">
                    <h3 className="text-lg font-bold font-heading text-[var(--color-text-primary)] tracking-tight mb-1">
                      {member.name}
                    </h3>
                    <p
                      className="text-[10px] font-bold uppercase tracking-widest transition-colors duration-300"
                      style={{ color: `var(${member.accent})` }}
                    >
                      {member.role}
                    </p>
                  </div>

                  {/* Details - Expandable */}
                  <AnimatePresence>
                    {expandedIdx === idx ? (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="mb-4 flex-1"
                      >
                        <p className="text-base text-[var(--color-text-body)] leading-relaxed mb-4 font-medium">
                          {member.details}
                        </p>

                        {/* Social Links */}
                        <div className="flex gap-2">
                          <a
                            href={member.socials.linkedin}
                            className="w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-300 border"
                            style={{
                              background: `color-mix(in srgb, var(${member.accent}) 8%, transparent)`,
                              borderColor: `var(${member.accent})`,
                              color: `var(${member.accent})`,
                            }}
                            title="LinkedIn"
                          >
                            <Share2 className="w-4 h-4" />
                          </a>
                          <a
                            href={member.socials.github}
                            className="w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-300 border"
                            style={{
                              background: `color-mix(in srgb, var(${member.accent}) 8%, transparent)`,
                              borderColor: `var(${member.accent})`,
                              color: `var(${member.accent})`,
                            }}
                            title="GitHub"
                          >
                            <Code2 className="w-4 h-4" />
                          </a>
                          <a
                            href={member.socials.email}
                            className="w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-300 border"
                            style={{
                              background: `color-mix(in srgb, var(${member.accent}) 8%, transparent)`,
                              borderColor: `var(${member.accent})`,
                              color: `var(${member.accent})`,
                            }}
                            title="Email"
                          >
                            <Mail className="w-4 h-4" />
                          </a>
                        </div>
                      </motion.div>
                    ) : (
                      <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="text-base text-[var(--color-text-body)] leading-relaxed line-clamp-2 flex-1 font-medium"
                      >
                        {member.details}
                      </motion.p>
                    )}
                  </AnimatePresence>

                  {/* Expand Button */}
                  <motion.button
                    onClick={() => setExpandedIdx(expandedIdx === idx ? null : idx)}
                    className="mt-4 w-full py-2.5 rounded-xl border transition-all duration-300 flex items-center justify-center gap-2 font-semibold text-sm"
                    style={{
                      background: expandedIdx === idx
                        ? `color-mix(in srgb, var(${member.accent}) 10%, transparent)`
                        : "transparent",
                      borderColor: `var(${member.accent})`,
                      color: `var(${member.accent})`,
                    }}
                  >
                    {expandedIdx === idx ? "Show less" : "View profile"}
                    <motion.div
                      animate={{ rotate: expandedIdx === idx ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <ChevronDown className="w-4 h-4" />
                    </motion.div>
                  </motion.button>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <Reveal>
          <div
            className="relative rounded-3xl border overflow-hidden p-8 md:p-12"
            style={{
              background: "white",
              borderColor: "var(--color-border-card)",
              boxShadow: "0 2px 12px rgba(0,0,0,0.04)",
            }}
          >
            {/* Top gradient accent */}
            <div
              className="absolute top-0 inset-x-0 h-1"
              style={{ background: "var(--gradient-brand)" }}
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {/* Left */}
              <div>
                <h3 className="text-2xl md:text-3xl font-bold font-heading text-[var(--color-text-primary)] mb-3 tracking-tight">
                  100% In-house.
                  <br />
                  <span className="bg-clip-text text-transparent" style={{ backgroundImage: "var(--gradient-brand)" }}>
                    Zero compromises.
                  </span>
                </h3>
                <p className="text-[var(--color-text-body)] text-base leading-relaxed font-medium">
                 Every person sits in the same office. Same standup. Same accountability. When you message us, a real team member responds.


                </p>
              </div>

              {/* Right - Stats Grid */}
              <div className="grid grid-cols-3 gap-6">
                {[
                  { value: "0", label: "Freelancers" },
                  { value: "1", label: "Office" },
                  { value: "ISO", label: "Certified" },
                ].map((stat, idx) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    viewport={{ once: true }}
                    className="text-center"
                  >
                    {/* <div className="text-3xl mb-2">{stat.icon}</div> */}
                    <div className="text-4xl font-bold font-heading bg-clip-text text-transparent" style={{ backgroundImage: "var(--gradient-brand)" }}>
                      {stat.value}
                    </div>
                    <div className="text-[11px] font-bold uppercase tracking-widest text-[var(--color-text-faint)] mt-2">
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
