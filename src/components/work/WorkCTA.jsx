import { motion } from "framer-motion";
import Reveal from "../Reveal";
import { ArrowRight, Zap } from "lucide-react";
import { Link } from "react-router-dom";

export default function WorkCTA() {
  return (
    <section className="py-12 px-6 md:px-12 bg-[var(--color-bg-page)] overflow-hidden relative">
      {/* Dot grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle, var(--color-grid-dot) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
          opacity: 0.5,
        }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        <Reveal>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative rounded-3xl border overflow-hidden p-8 md:p-12"
            style={{
              background: "rgba(255, 255, 255, 0.7)",
              backdropFilter: "blur(10px)",
              borderColor: "var(--color-border-card)",
              boxShadow: "0 8px 32px rgba(0, 0, 0, 0.1)",
            }}
          >
            {/* Top gradient accent */}
            <div
              className="absolute top-0 inset-x-0 h-1"
              style={{ background: "var(--gradient-brand)" }}
            />

            {/* Animated background elements */}
            <motion.div
              className="absolute top-0 right-0 w-96 h-96 rounded-full blur-3xl pointer-events-none"
              animate={{
                x: [0, 30, 0],
                y: [0, 20, 0],
              }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
              style={{
                background: "radial-gradient(circle, rgba(42,171,215,0.1) 0%, transparent 70%)",
              }}
            />

            <div className="relative z-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                {/* Left Content */}
                <div>
                  <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[var(--color-border-brand-soft)] bg-[var(--color-bg-brand-tint)] text-[var(--color-brand-blue)] text-[10px] font-black tracking-widest uppercase mb-6">
                    <Zap className="w-3.5 h-3.5" />
                    Ready to build?
                  </div>

                  <h2 className="text-3xl md:text-4xl font-bold font-heading tracking-tight text-[var(--color-text-primary)] leading-[1.2] mb-4">
                    Let's bring your
                    <br />
                    <span className="bg-clip-text text-transparent" style={{ backgroundImage: "var(--gradient-brand)" }}>
                      product to life.
                    </span>
                  </h2>

                  <p className="text-[var(--color-text-body)] text-base leading-relaxed mb-6 font-medium">
                    Whether you need a pre-built solution or a custom platform, we're here to help you succeed.
                  </p>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <Link
                      to="/contact"
                      className="group flex items-center justify-center gap-2 px-8 py-4 rounded-full text-white font-black text-sm hover:scale-[1.03] transition-all duration-300"
                      style={{
                        background: "var(--gradient-brand)",
                        boxShadow: "0 20px 40px var(--color-brand-glow)",
                      }}
                    >
                      Start Your Project
                      <motion.div className="group-hover:translate-x-1 transition-transform">
                        <ArrowRight className="w-4 h-4" />
                      </motion.div>
                    </Link>

                    <Link
                      to="/#pricing"
                      className="flex items-center justify-center gap-2 px-8 py-4 rounded-full border border-[var(--color-border-subtle)] bg-white text-[var(--color-text-primary)] font-black text-sm hover:bg-[var(--color-bg-card-light)] transition-all duration-300"
                    >
                      View Pricing
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>

                {/* Right Stats */}
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { number: "50+", label: "Products" },
                    { number: "200+", label: "Clients" },
                    { number: "1M+", label: "Users" },
                    { number: "15+", label: "Years" },
                  ].map((stat, idx) => (
                    <motion.div
                      key={stat.label}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: idx * 0.1, duration: 0.5 }}
                      viewport={{ once: true }}
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
                        {stat.number}
                      </p>
                      <p className="text-[9px] font-black uppercase tracking-widest text-[var(--color-text-faint)]">
                        {stat.label}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </Reveal>
      </div>
    </section>
  );
}
