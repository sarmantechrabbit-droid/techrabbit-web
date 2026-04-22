import { motion, AnimatePresence } from "framer-motion";
import Reveal from "../Reveal";
import { Play, Sparkles, ArrowRight } from "lucide-react";
import { useState } from "react";

export default function AboutStory() {
  const [isHoveredVideo, setIsHoveredVideo] = useState(false);

  return (
    <section className="relative px-6 pt-4 md:px-12 bg-[var(--color-bg-page)] overflow-hidden">
      {/* Animated background grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle, var(--color-grid-dot) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
          opacity: 0.4,
        }}
      />

      {/* Animated gradient glows */}
      {/* <motion.div
        className="absolute top-0 right-0 w-[600px] h-[600px] pointer-events-none"
        animate={{
          x: [0, 50, 0],
          y: [0, 30, 0],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      >
        <div
          className="absolute inset-0 rounded-full blur-[150px]"
          style={{
            background: "radial-gradient(circle, rgba(42,171,215,0.1) 0%, transparent 70%)",
          }}
        />
      </motion.div>

      <motion.div
        className="absolute bottom-0 left-0 w-[500px] h-[500px] pointer-events-none"
        animate={{
          x: [0, -50, 0],
          y: [0, -30, 0],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      >
        <div
          className="absolute inset-0 rounded-full blur-[150px]"
          style={{
            background: "radial-gradient(circle, rgba(36,181,116,0.1) 0%, transparent 70%)",
          }}
        />
      </motion.div> */}

      {/* Fade overlays */}
      <div
        className="absolute top-0 inset-x-0 h-20 pointer-events-none"
        style={{ background: "linear-gradient(to bottom, var(--color-bg-page), transparent)" }}
      />
      <div
        className="absolute bottom-0 inset-x-0 h-20 pointer-events-none"
        style={{ background: "linear-gradient(to top, var(--color-bg-page), transparent)" }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-12 sm:gap-6 items-center">
          {/* Left Content */}
          <Reveal>
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[var(--color-border-brand-soft)] bg-[var(--color-bg-brand-tint)] text-[var(--color-brand-blue)] text-[10px] font-black tracking-widest uppercase mb-4"
              >
                <Sparkles className="w-3.5 h-3.5" />
                From the Founder
              </motion.div>

              {/* Heading */}
              <h2 className="text-4xl md:text-5xl font-bold font-heading tracking-tight text-[var(--color-text-primary)] leading-[1.2] mb-6">
                Why I built{" "}
              
                <span className="bg-clip-text text-transparent" style={{ backgroundImage: "var(--gradient-brand)" }}>
                  Tech Rabbit
                </span>
              </h2>

              {/* Description */}
              <div className="space-y-5 text-[var(--color-text-body)] text-base leading-relaxed max-w-lg mb-10 font-medium">
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1, duration: 0.5 }}
                >
                  I've seen too many founders struggle with the same problems — offshore agencies that overpromise, freelancers who disappear, developers who don't understand the product.
                </motion.p>

                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                >
                  Tech Rabbit is the agency I wish existed. One inhouse team. Full transparency. A subscription that grows with you — not a project-by-project vendor relationship.
                </motion.p>

                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                >
                  Six years in, 30+ products across 5 countries. The model works because we stay — same team, same codebase, same accountability.
                </motion.p>
              </div>

              {/* Founder Info Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="relative rounded-2xl border overflow-hidden p-5 mb-8 max-w-[300px]"
                style={{
                  background: "rgba(255, 255, 255, 0.5)",
                  backdropFilter: "blur(10px)",
                  borderColor: "var(--color-border-card)",
                  boxShadow: "0 8px 32px rgba(0, 0, 0, 0.08)",
                }}
              >
                {/* Top accent line */}
                <div
                  className="absolute top-0 inset-x-0 h-1"
                  style={{ background: "var(--gradient-brand)" }}
                />

                <div className="flex items-center gap-4">
                  <motion.div
                    className="w-14 h-14 rounded-full text-white flex items-center justify-center font-black text-lg shrink-0"
                    style={{ background: "var(--gradient-brand)" }}
                    whileHover={{ scale: 1.05 }}
                  >
                    K
                  </motion.div>
                  <div>
                    <div className="text-base font-bold font-heading text-[var(--color-text-primary)]">
                      Kunal Gangvani
                    </div>
                    <div className="text-sm text-[var(--color-text-body)] font-medium">
                      Founder, Tech Rabbit
                    </div>
                    <div className="text-xs text-[var(--color-text-muted)] font-medium">
                      Ahmedabad, India
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* CTA Button */}
              {/* <motion.a
                href="#contact"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-[var(--color-border-subtle)] bg-white text-[var(--color-text-primary)] font-bold text-sm hover:bg-[var(--color-bg-card-light)] transition-all duration-300"
                whileHover={{ y: -2 }}
                whileTap={{ y: 0 }}
              >
                Learn More
                <ArrowRight className="w-4 h-4" />
              </motion.a> */}
            </motion.div>
          </Reveal>

          {/* Right: Video Card */}
          <Reveal delay={0.2}>
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              onMouseEnter={() => setIsHoveredVideo(true)}
              onMouseLeave={() => setIsHoveredVideo(false)}
              className="relative rounded-3xl border overflow-hidden group cursor-pointer h-96"
              style={{
                background: "white",
                borderColor: isHoveredVideo
                  ? "var(--color-brand-blue)"
                  : "var(--color-border-card)",
                boxShadow: isHoveredVideo
                  ? "0 20px 60px -12px rgba(42, 171, 215, 0.3)"
                  : "0 2px 12px rgba(0,0,0,0.04)",
              }}
            >
              {/* Top accent line */}
              <motion.div
                className="absolute top-0 inset-x-0 h-1 z-10"
                style={{ background: "var(--color-brand-blue)" }}
                animate={{
                  scaleX: isHoveredVideo ? 1 : 0,
                }}
                transition={{ duration: 0.3 }}
              />

              {/* Background gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-bg-card)] via-white to-[var(--color-bg-page)]" />

              {/* Animated background elements */}
              {/* <motion.div
                className="absolute top-0 right-0 w-64 h-64 rounded-full blur-3xl pointer-events-none"
                animate={{
                  x: [0, 30, 0],
                  y: [0, 20, 0],
                }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                style={{
                  background: "radial-gradient(circle, rgba(42,171,215,0.15) 0%, transparent 70%)",
                }}
              /> */}

              {/* Content */}
              <div className="relative inset-0 flex flex-col items-center justify-center h-full p-8 text-center">
                {/* Play Button */}
                <motion.div
                  className="mb-6"
                  animate={{
                    scale: isHoveredVideo ? 1.1 : 1,
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.div
                    className="w-20 h-20 rounded-full flex items-center justify-center"
                    style={{
                      background: "var(--gradient-brand)",
                      boxShadow: "0 12px 40px var(--color-brand-glow)",
                    }}
                    animate={{
                      y: isHoveredVideo ? -4 : 0,
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <Play className="w-8 h-8 text-white fill-white" />
                  </motion.div>
                </motion.div>

                {/* Text */}
                <h3 className="text-xl font-bold font-heading text-[var(--color-text-primary)] mb-2">
                  Founder Story
                </h3>
                <p className="text-sm text-[var(--color-text-body)] font-medium mb-4">
                  90 seconds
                </p>
                <p className="text-xs text-[var(--color-text-muted)] font-bold tracking-widest uppercase">
                  Why Tech Rabbit Exists
                </p>

                {/* Hover indicator */}
                <AnimatePresence>
                  {isHoveredVideo && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="absolute bottom-6 left-1/2 -translate-x-1/2"
                    >
                      <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 backdrop-blur-md border border-white/60">
                        <motion.div
                          animate={{ x: [0, 4, 0] }}
                          transition={{ duration: 1.5, repeat: Infinity }}
                        >
                          <ArrowRight className="w-4 h-4 text-[var(--color-brand-blue)]" />
                        </motion.div>
                        <span className="text-xs font-bold text-[var(--color-text-primary)]">
                          Click to play
                        </span>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Pulse animation on hover */}
              <AnimatePresence>
                {isHoveredVideo && (
                  <motion.div
                    initial={{ opacity: 0.5, scale: 0.8 }}
                    animate={{ opacity: 0, scale: 1.2 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                    className="absolute inset-0 rounded-3xl border-2"
                    style={{ borderColor: "var(--color-brand-blue)" }}
                  />
                )}
              </AnimatePresence>
            </motion.div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
