import { motion } from "framer-motion";
import Reveal from "../Reveal";
import { Users, Zap, TrendingUp, Award } from "lucide-react";

const stats = [
  {
    icon: TrendingUp,
    value: "50+",
    label: "Products Shipped",
    accent: "var(--color-brand-blue)",
  },
  {
    icon: Users,
    value: "200+",
    label: "Happy Clients",
    accent: "var(--color-brand-green)",
  },
  {
    icon: Zap,
    value: "1M+",
    label: "Active Users",
    accent: "var(--color-brand-blue)",
  },
  {
    icon: Award,
    value: "15+",
    label: "Years Experience",
    accent: "var(--color-brand-green)",
  },
];

export default function WorkStats() {
  return (
    <section className="relative overflow-hidden bg-[var(--color-bg-page)] px-4 py-12 sm:px-6 md:px-8 lg:px-12">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle, var(--color-grid-dot) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
          opacity: 0.5,
        }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <Reveal key={stat.label} delay={idx * 0.1}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1, duration: 0.5 }}
                  viewport={{ once: true }}
                  className="group relative rounded-2xl border overflow-hidden p-5 sm:p-6 transition-all duration-300 hover:scale-[1.02]"
                  style={{
                    background: "white",
                    borderColor: "var(--color-border-card)",
                    boxShadow: "0 2px 12px rgba(0,0,0,0.04)",
                  }}
                >
                  <div
                    className="absolute top-0 inset-x-0 h-1"
                    style={{ background: stat.accent }}
                  />

                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-all duration-300"
                    style={{
                      background: `color-mix(in srgb, ${stat.accent} 12%, transparent)`,
                    }}
                  >
                    <Icon className="w-6 h-6" style={{ color: stat.accent }} />
                  </div>

                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: idx * 0.1 + 0.2, duration: 0.5 }}
                    viewport={{ once: true }}
                    className="text-3xl font-black font-heading text-[var(--color-text-primary)] mb-1"
                  >
                    {stat.value}
                  </motion.div>

                  <p className="text-sm font-bold text-[var(--color-text-body)]">
                    {stat.label}
                  </p>
                </motion.div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
