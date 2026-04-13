import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Link } from "react-router-dom";

const clients = [
  { initials: "AR", color: "#09B87F" },
  { initials: "SN", color: "#6366f1" },
  { initials: "LF", color: "#E93E8C" },
  { initials: "MM", color: "#09B87F" },
  { initials: "CH", color: "#6366f1" },
];

const floatingTags = [
  { text: "AI-Native", x: "8%", y: "18%", delay: 0 },
  { text: "Figma → Production", x: "72%", y: "12%", delay: 0.3 },
  { text: "2-Week Delivery", x: "78%", y: "72%", delay: 0.6 },
  { text: "100% In-House", x: "4%", y: "74%", delay: 0.2 },
];

export default function CTASection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      className="relative bg-[#0c0c0c] overflow-hidden py-32 md:py-40"
    >
      {/* Grain texture overlay */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          backgroundRepeat: "repeat",
          backgroundSize: "128px 128px",
        }}
      />

      {/* Radial glow — indigo center */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 70% 60% at 50% 50%, rgba(99,102,241,0.13) 0%, transparent 70%)",
        }}
      />

      {/* Corner accent glow — pink bottom-right */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-24 -right-24 w-96 h-96 rounded-full opacity-20"
        style={{
          background: "radial-gradient(circle, #E93E8C, transparent 65%)",
        }}
      />

      {/* Corner accent glow — green top-left */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-16 -left-16 w-72 h-72 rounded-full opacity-15"
        style={{
          background: "radial-gradient(circle, #09B87F, transparent 65%)",
        }}
      />

      {/* Floating tags — desktop only */}
      {floatingTags.map((tag) => (
        <motion.div
          key={tag.text}
          aria-hidden="true"
          className="hidden lg:flex absolute items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm text-white/50 text-xs font-medium select-none"
          style={{ left: tag.x, top: tag.y }}
          initial={{ opacity: 0, y: 10 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{
            delay: 0.8 + tag.delay,
            duration: 0.6,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <span
            className="w-1.5 h-1.5 rounded-full flex-shrink-0"
            style={{ backgroundColor: "#09B87F" }}
          />
          {tag.text}
        </motion.div>
      ))}

      {/* Main content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 flex flex-col items-center text-center gap-10">
        {/* Pill label */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="inline-flex items-center gap-2 border border-white/10 bg-white/5 rounded-full px-5 py-2 text-xs font-bold uppercase tracking-widest text-white/50">
            <span className="w-1.5 h-1.5 rounded-full bg-[#09B87F] animate-pulse" />
            Currently accepting new projects
          </span>
        </motion.div>

        {/* Headline */}
        <div className="max-w-4xl">
          <motion.h2
            className="font-heading text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-[0.95] text-white"
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            Let's build your{" "}
            <span
              className="relative inline-block"
              style={{
                WebkitTextStroke: "2px #6366f1",
                WebkitTextFillColor: "transparent",
              }}
            >
              next big
            </span>
            <br />
            thing. Together.
          </motion.h2>
        </div>

        {/* Subtext */}
        <motion.p
          className="text-white/40 text-lg md:text-xl max-w-xl leading-relaxed"
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          From idea to shipped product in 2 weeks. No freelancers, no offshore
          delays — just a tight AI-native team that moves at founder speed.
        </motion.p>

        {/* CTAs */}
        <motion.div
          className="flex flex-col sm:flex-row items-center gap-4"
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <Link
            to="/contact"
            className="group relative inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-sm font-bold text-gray-900 overflow-hidden transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_0_40px_rgba(255,255,255,0.15)]"
          >
            {/* Shimmer sweep on hover */}
            <span
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out"
              style={{
                background:
                  "linear-gradient(90deg, transparent, rgba(99,102,241,0.15), transparent)",
              }}
            />
            Start a project
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path
                d="M3 8h10M9 4l4 4-4 4"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>

          <Link
            to="/services"
            className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-8 py-4 text-sm font-bold text-white/70 transition-all duration-300 hover:border-white/30 hover:text-white hover:bg-white/10"
          >
            View our services
          </Link>
        </motion.div>

        {/* Divider */}
        <motion.div
          className="w-full max-w-2xl h-px bg-white/8"
          initial={{ scaleX: 0 }}
          animate={inView ? { scaleX: 1 } : {}}
          transition={{ delay: 0.5, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        />

        {/* Social proof strip */}
        <motion.div
          className="flex flex-col sm:flex-row items-center gap-5"
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.55, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Avatar stack */}
          <div className="flex items-center -space-x-2.5">
            {clients.map((c, i) => (
              <div
                key={c.initials}
                className="w-9 h-9 rounded-full border-2 border-[#0c0c0c] flex items-center justify-center text-white text-[10px] font-bold"
                style={{ backgroundColor: c.color, zIndex: clients.length - i }}
              >
                {c.initials}
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-1 sm:gap-3">
            {/* Stars */}
            <div className="flex gap-0.5">
              {Array.from({ length: 5 }).map((_, i) => (
                <svg
                  key={i}
                  width="14"
                  height="14"
                  viewBox="0 0 18 18"
                  fill="none"
                >
                  <path
                    d="M9 1.5l2.163 4.38 4.837.703-3.5 3.412.826 4.815L9 12.375l-4.326 2.435.826-4.815L2 6.583l4.837-.703L9 1.5z"
                    fill="#F59E0B"
                  />
                </svg>
              ))}
            </div>
            <span className="text-white/40 text-sm">
              Trusted by{" "}
              <span className="text-white/70 font-semibold">30+ founders</span>{" "}
              across 5 countries
            </span>
          </div>
        </motion.div>
      </div>

      {/* Bottom edge fade */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 left-0 right-0 h-24"
        style={{
          background:
            "linear-gradient(to bottom, transparent, rgba(12,12,12,0.6))",
        }}
      />
    </section>
  );
}
