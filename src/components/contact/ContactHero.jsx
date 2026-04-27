import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Zap } from "lucide-react";

export default function ContactHero() {
  return (
    <section className="relative bg-[var(--color-bg-page)] px-4 sm:px-6 md:px-8 lg:px-12 pt-20 sm:pt-24 md:pt-32 pb-12 sm:pb-16 md:pb-20 overflow-hidden">
      {/* Animated Background Orbs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          className="absolute top-0 right-[-10%] w-96 h-96 rounded-full blur-3xl"
          style={{
            background:
              "radial-gradient(circle, rgba(42,171,215,0.15) 0%, transparent 70%)",
          }}
          animate={{
            x: [0, 50, 0],
            y: [0, 30, 0],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-0 left-[-10%] w-96 h-96 rounded-full blur-3xl"
          style={{
            background:
              "radial-gradient(circle, rgba(36,181,116,0.15) 0%, transparent 70%)",
          }}
          animate={{
            x: [0, -50, 0],
            y: [0, -30, 0],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      {/* Grid Pattern */}
      <div
        className="absolute inset-0 pointer-events-none opacity-30"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,0,0,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.05) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[var(--color-border-brand-soft)] bg-[var(--color-bg-brand-tint)] mb-8 sm:mb-10"
        >
          <Zap className="w-3.5 h-3.5 text-[var(--color-brand-blue)]" />
          <span className="text-[10px] font-black uppercase tracking-widest text-[var(--color-brand-blue)]">
            Let's build together
          </span>
        </motion.div>

        {/* Main Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-6 sm:mb-8"
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black font-heading leading-[1.1] tracking-tight text-[var(--color-text-primary)]">
            Let's turn your
            <br />
            <span
              style={{
                backgroundImage:
                  "linear-gradient(135deg, var(--color-brand-blue), var(--color-brand-green))",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              vision into reality
            </span>
          </h1>
        </motion.div>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-base sm:text-lg md:text-xl text-[var(--color-text-body)] max-w-3xl leading-relaxed mb-10 sm:mb-12"
        >
          We're a team of builders, designers, and strategists ready to bring
          your product to life. Let's have a conversation about what's possible.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 sm:gap-6"
        >
          {/* Primary Button */}
          <motion.a
            href="https://calendly.com/techrabbit/meeting"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="group flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-white font-black text-sm uppercase tracking-widest transition-all duration-300 hover:shadow-lg"
            style={{
              background:
                "linear-gradient(135deg, var(--color-brand-blue), var(--color-brand-green))",
              boxShadow: "0 12px 40px rgba(42,171,215,0.2)",
            }}
          >
            Schedule a call
            <motion.div className="group-hover:translate-x-1 transition-transform">
              <ArrowRight className="w-4 h-4" />
            </motion.div>
          </motion.a>

          {/* Secondary Button */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="flex"
          >
            <Link
              to="/about"
              className="flex w-full items-center justify-center gap-2 px-8 py-4 rounded-xl border-2 font-black text-sm uppercase tracking-widest transition-all duration-300 hover:shadow-lg"
              style={{
                borderColor: "var(--color-brand-blue)",
                color: "var(--color-brand-blue)",
              }}
            >
              Learn more
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </motion.div>

        {/* Stats Row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="sm:mt-20 pt-12 sm:pt-16 border-t border-[var(--color-border-light)] grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8"
        >
          {[
            { label: "Projects Shipped", value: "50+" },
            { label: "Team Members", value: "12+" },
            { label: "Client Satisfaction", value: "100%" },
            { label: "Years Experience", value: "6+" },
          ].map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 + idx * 0.1 }}
              className="text-center"
            >
              <div className="text-2xl sm:text-3xl md:text-4xl font-black font-heading text-[var(--color-text-primary)] mb-2">
                {stat.value}
              </div>
              <p className="text-xs sm:text-sm font-bold text-[var(--color-text-muted)] uppercase tracking-widest">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
