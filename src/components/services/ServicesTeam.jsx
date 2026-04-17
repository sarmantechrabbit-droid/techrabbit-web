import { motion } from "framer-motion";
import Reveal from "../Reveal";
import { CheckCircle2, XCircle, Zap } from "lucide-react";
import { Link } from "react-router-dom";

export default function ServicesTeam() {
  return (
    <section className="px-6 md:px-12 bg-[var(--color-bg-page)] overflow-hidden relative py-12">
      {/* Dot grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle, var(--color-grid-dot) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
          opacity: 0.5,
        }}
      />

      {/* Gradient glows */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] pointer-events-none">
        <div
          className="absolute inset-0 rounded-full blur-[120px]"
          style={{
            background: "radial-gradient(circle, rgba(42,171,215,0.08) 0%, transparent 70%)",
          }}
        />
      </div>
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] pointer-events-none">
        <div
          className="absolute inset-0 rounded-full blur-[120px]"
          style={{
            background: "radial-gradient(circle, rgba(36,181,116,0.08) 0%, transparent 70%)",
          }}
        />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <Reveal className="text-center mb-8">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[var(--color-border-brand-soft)] bg-[var(--color-bg-brand-tint)] text-[var(--color-brand-green)] text-[10px] font-black tracking-widest uppercase mb-4">
            <Zap className="w-3.5 h-3.5" />
            One team
          </div>
          <h2 className="text-3xl md:text-4xl font-bold font-heading tracking-tight text-[var(--color-text-primary)] leading-[1.2] mb-3">
            <span className="bg-clip-text text-transparent" style={{ backgroundImage: "var(--gradient-brand)" }}>
              Zero handoffs.
            </span>
          </h2>
          <p className="text-[var(--color-text-body)] text-sm max-w-xl mx-auto font-medium">
            One team. One sprint. All skills in one room.
          </p>
        </Reveal>

        {/* Comparison - 2 Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {/* Traditional */}
          <Reveal delay={0.1}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="relative rounded-2xl border overflow-hidden p-6"
              style={{
                background: "white",
                borderColor: "var(--color-border-card)",
                boxShadow: "0 1px 4px rgba(0,0,0,0.03)",
              }}
            >
              <div className="absolute top-0 inset-x-0 h-1" style={{ background: "#ef4444" }} />

              <div className="flex items-center gap-2 mb-4">
                <XCircle className="w-5 h-5 text-red-400" />
                <h3 className="text-base font-bold font-heading text-[var(--color-text-primary)]">
                  Traditional
                </h3>
              </div>

              <ul className="space-y-2.5">
                {[
                  "Multiple vendors & freelancers",
                  "Project manager as middleman",
                  "QA at the end, bugs after launch",
                  "Different people each project",
                  "AI features = extra cost",
                ].map((item, idx) => (
                  <li key={idx} className="flex gap-2 text-xs text-[var(--color-text-body)]">
                    <span className="text-red-400 mt-0.5">✕</span>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          </Reveal>

          {/* Tech Rabbit */}
          <Reveal delay={0.2}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="relative rounded-2xl border overflow-hidden p-6"
              style={{
                background: "white",
                borderColor: "var(--color-border-card)",
                boxShadow: "0 1px 4px rgba(0,0,0,0.03)",
              }}
            >
              <div className="absolute top-0 inset-x-0 h-1" style={{ background: "var(--color-brand-green)" }} />

              <div className="flex items-center gap-2 mb-4">
                <CheckCircle2 className="w-5 h-5 text-green-500" />
                <h3 className="text-base font-bold font-heading text-[var(--color-text-primary)]">
                  Tech Rabbit
                </h3>
              </div>

              <ul className="space-y-2.5">
                {[
                  "One unified in-house team",
                  "Direct access to developers",
                  "QA in every sprint",
                  "Same team from day 1",
                  "AI built into every sprint",
                ].map((item, idx) => (
                  <li key={idx} className="flex gap-2 text-xs text-[var(--color-text-body)]">
                    <span className="text-green-500 mt-0.5">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          </Reveal>
        </div>

        {/* Team Roles - Horizontal */}
        {/* <Reveal delay={0.3}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="relative rounded-2xl border overflow-hidden p-6"
            style={{
              background: "white",
              borderColor: "var(--color-border-card)",
              boxShadow: "0 1px 4px rgba(0,0,0,0.03)",
            }}
          >
            <div className="absolute top-0 inset-x-0 h-1" style={{ background: "var(--gradient-brand)" }} />

            <h3 className="text-base font-black font-heading text-[var(--color-text-primary)] mb-4">
              Your complete team
            </h3>

            <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
              {[
                { role: "Designer", icon: "🎨" },
                { role: "Frontend", icon: "⚛️" },
                { role: "Backend", icon: "🔧" },
                { role: "QA", icon: "✓" },
                { role: "BA/PM", icon: "📊" },
              ].map((member, idx) => (
                <motion.div
                  key={member.role}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.05 }}
                  viewport={{ once: true }}
                  className="text-center p-3 rounded-lg transition-all duration-300 hover:bg-[var(--color-bg-card)]"
                >
                  <div className="text-2xl mb-1">{member.icon}</div>
                  <p className="text-xs font-bold text-[var(--color-text-primary)]">
                    {member.role}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </Reveal> */}

        {/* Stats + CTA */}
        <Reveal delay={0.4}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4"
          >
            {[
              { label: "Team", value: "8" },
              { label: "Certified", value: "ISO" },
              { label: "Freelancers", value: "0" },
            ].map((stat, idx) => (
              <div
                key={stat.label}
                className="relative rounded-xl border overflow-hidden p-4 text-center"
                style={{
                  background: "white",
                  borderColor: "var(--color-border-card)",
                  boxShadow: "0 1px 4px rgba(0,0,0,0.03)",
                }}
              >
                <div
                  className="absolute top-0 inset-x-0 h-0.5"
                  style={{
                    background: idx % 2 === 0 ? "var(--color-brand-blue)" : "var(--color-brand-green)",
                  }}
                />
                <p className="text-2xl font-black font-heading text-[var(--color-text-primary)]">
                  {stat.value}
                </p>
                <p className="text-[9px] font-black uppercase tracking-widest text-[var(--color-text-faint)]">
                  {stat.label}
                </p>
              </div>
            ))}
          </motion.div>
        </Reveal>

        {/* CTA Button */}
        <Reveal delay={0.5}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mt-6"
          >
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-white font-black text-sm hover:scale-[1.03] transition-all duration-300"
              style={{
                background: "var(--gradient-brand)",
                boxShadow: "0 20px 40px var(--color-brand-glow)",
              }}
            >
              Start your project
              <span>→</span>
            </Link>
          </motion.div>
        </Reveal>
      </div>
    </section>
  );
}
