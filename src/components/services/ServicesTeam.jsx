import { motion } from "framer-motion";
import Reveal from "../Reveal";
import { CheckCircle2, XCircle, Zap } from "lucide-react";
import { Link } from "react-router-dom";

const traditionalItems = [
  "Designer makes Figma → sends to dev → dev interprets it differently",
  "QA is a separate team that joins at the end — bugs found after launch",
  "Project manager relays messages between client and developers",
  "Freelancer disappears after delivery — no one knows the codebase",
  "You re-explain the product to every new person they assign",
  "AI features? 'We'll bring in a specialist' — separate cost, separate timeline",
];

const techRabbitItems = [
  "Designer and developer sit in the same room — Figma matches the final product",
  "QA is in every sprint, not the end — bugs caught before they reach you",
  "You talk directly to the team — no middleman, no message telephone",
  "Same developers from sprint 1 to sprint 50 — they know your codebase",
  "One onboarding. They remember everything after that",
  "AI features are part of every sprint — same team, same timeline, no extra cost",
];

const stats = [
  { label: "Team Member", value: "12" },
  { label: "Certified", value: "ISO" },
  { label: "Freelancers", value: "0" },
];

export default function ServicesTeam() {
  return (
    <section className="relative overflow-hidden bg-[var(--color-bg-page)] px-4 sm:px-6 md:px-8 lg:px-12 pb-10">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle, var(--color-grid-dot) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
          opacity: 0.5,
        }}
      />

      <div className="absolute right-[-20%] top-0 h-[16rem] w-[16rem] pointer-events-none sm:right-[-10%] sm:h-[22rem] sm:w-[22rem] lg:right-0 lg:h-[31.25rem] lg:w-[31.25rem]">
        <div
          className="absolute inset-0 rounded-full blur-[120px]"
          style={{
            background:
              "radial-gradient(circle, rgba(42,171,215,0.08) 0%, transparent 70%)",
          }}
        />
      </div>
      <div className="absolute bottom-0 left-[-20%] h-[14rem] w-[14rem] pointer-events-none sm:left-[-10%] sm:h-[18rem] sm:w-[18rem] lg:left-0 lg:h-[25rem] lg:w-[25rem]">
        <div
          className="absolute inset-0 rounded-full blur-[120px]"
          style={{
            background:
              "radial-gradient(circle, rgba(36,181,116,0.08) 0%, transparent 70%)",
          }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl">
        <Reveal className="mb-8 mt-8">
          <div className="mb-4 inline-flex max-w-full items-center gap-2 rounded-full border border-[var(--color-border-brand-soft)] bg-[var(--color-bg-brand-tint)] px-3 py-1.5 text-[9px] font-black uppercase tracking-[0.28em] text-[var(--color-brand-green)] sm:px-4 sm:text-[10px]">
            <Zap className="h-3.5 w-3.5" />
            How we work
          </div>
          <h2 className="mb-3 text-3xl font-bold font-heading leading-[1.1] tracking-tight text-[var(--color-text-primary)] sm:text-4xl">
            <span
              className="bg-clip-text text-transparent"
              style={{ backgroundImage: "var(--gradient-brand)" }}
            >
              One team. Every skill. Zero handoffs.
            </span>
          </h2>
          <p className="max-w-xl text-sm font-medium leading-relaxed text-[var(--color-text-body)]">
            Figma designer, developer, QA engineer, BA, and PM — same office,
            same sprint, same Slack channel.
          </p>
        </Reveal>

        <div className="mb-8 grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6">
          <Reveal delay={0.1}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="relative overflow-hidden rounded-2xl border p-5 sm:p-6"
              style={{
                background: "white",
                borderColor: "var(--color-border-card)",
                boxShadow: "0 1px 4px rgba(0,0,0,0.03)",
              }}
            >
              <div
                className="absolute inset-x-0 top-0 h-1"
                style={{ background: "#ef4444" }}
              />

              <div className="mb-4 flex items-center gap-2">
                <XCircle className="h-5 w-5 text-red-400" />
                <h3 className="text-base font-bold font-heading text-[var(--color-text-primary)]">
                  How other agencies work
                </h3>
              </div>

              <ul className="space-y-2.5">
                {traditionalItems.map((item) => (
                  <li
                    key={item}
                    className="flex gap-2 text-xs leading-relaxed text-[var(--color-text-body)] sm:text-sm"
                  >
                    <span className="mt-0.5 text-red-400">x</span>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          </Reveal>

          <Reveal delay={0.2}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="relative overflow-hidden rounded-2xl border p-5 sm:p-6"
              style={{
                background: "white",
                borderColor: "var(--color-border-card)",
                boxShadow: "0 1px 4px rgba(0,0,0,0.03)",
              }}
            >
              <div
                className="absolute inset-x-0 top-0 h-1"
                style={{ background: "var(--color-brand-green)" }}
              />

              <div className="mb-4 flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-green-500" />
                <h3 className="text-base font-bold font-heading text-[var(--color-text-primary)]">
                  How Tech Rabbit works
                </h3>
              </div>

              <ul className="space-y-2.5">
                {techRabbitItems.map((item) => (
                  <li
                    key={item}
                    className="flex gap-2 text-xs leading-relaxed text-[var(--color-text-body)] sm:text-sm"
                  >
                    <span className="mt-0.5 text-green-500">+</span>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          </Reveal>
        </div>

        <Reveal delay={0.4}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mt-4 grid grid-cols-3 gap-4 sm:grid-cols-3"
          >
            {stats.map((stat, idx) => (
              <div
                key={stat.label}
                className="relative overflow-hidden rounded-xl border p-4 text-center"
                style={{
                  background: "white",
                  borderColor: "var(--color-border-card)",
                  boxShadow: "0 1px 4px rgba(0,0,0,0.03)",
                }}
              >
                <div
                  className="absolute inset-x-0 top-0 h-0.5"
                  style={{
                    background:
                      idx % 2 === 0
                        ? "var(--color-brand-blue)"
                        : "var(--color-brand-green)",
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

        <Reveal delay={0.5}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mt-6 text-center"
          >
            <a
              href="https://calendly.com/techrabbit/meeting"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-black text-white transition-all duration-300 hover:scale-[1.03] sm:w-auto"
              style={{
                background: "var(--gradient-brand)",
                boxShadow: "0 20px 40px var(--color-brand-glow)",
              }}
            >
              Start your project
              <span>{">"}</span>
            </a>
          </motion.div>
        </Reveal>
      </div>
    </section>
  );
}
