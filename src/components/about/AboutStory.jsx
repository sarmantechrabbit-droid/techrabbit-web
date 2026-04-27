import { motion, AnimatePresence } from "framer-motion";
import { createPortal } from "react-dom";
import Reveal from "../Reveal";
import { Play, Sparkles, ArrowRight, Volume2, X } from "lucide-react";
import { useState, useEffect } from "react";

export default function AboutStory() {
  const [isHoveredVideo, setIsHoveredVideo] = useState(false);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  // Lock scroll when popup is open
  useEffect(() => {
    if (isPopupOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isPopupOpen]);

  return (
    <section className="relative px-6 pt-4 md:px-12 bg-[var(--color-bg-page)] overflow-hidden">
      {/* Animated background grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle, var(--color-grid-dot) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
          opacity: 0.4,
        }}
      />

      {/* Fade overlays */}
      <div
        className="absolute top-0 inset-x-0 h-20 pointer-events-none"
        style={{
          background:
            "linear-gradient(to bottom, var(--color-bg-page), transparent)",
        }}
      />
      <div
        className="absolute bottom-0 inset-x-0 h-20 pointer-events-none"
        style={{
          background:
            "linear-gradient(to top, var(--color-bg-page), transparent)",
        }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col lg:grid lg:grid-cols-2 lg:gap-12 sm:gap-6 items-start">
          {/* Badge Only - Shows first on mobile */}
          <Reveal className="order-1 lg:hidden mb-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[var(--color-border-brand-soft)] bg-[var(--color-bg-brand-tint)] text-[var(--color-brand-blue)] text-[10px] font-black tracking-widest uppercase"
              >
                <Sparkles className="w-3.5 h-3.5" />
                From the Founder
              </motion.div>
            </motion.div>
          </Reveal>

          {/* Video Card - Shows second on mobile */}
          <Reveal
            delay={0.2}
            className="order-2 lg:order-2 mb-8 lg:mb-0 w-full"
          >
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              onMouseEnter={() => setIsHoveredVideo(true)}
              onMouseLeave={() => setIsHoveredVideo(false)}
              onClick={() => setIsPopupOpen(true)}
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

          {/* Description & Founder Card - Shows third on mobile, left on desktop */}
          <Reveal className="order-3 lg:order-1">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              {/* Badge & Heading - Desktop only */}
              <div className="hidden lg:block">
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
                  <span
                    className="bg-clip-text text-transparent"
                    style={{ backgroundImage: "var(--gradient-brand)" }}
                  >
                    Tech Rabbit
                  </span>
                </h2>
              </div>

              {/* Heading - Mobile only */}
              <div className="lg:hidden mb-6">
                <h2 className="text-4xl md:text-5xl font-bold font-heading tracking-tight text-[var(--color-text-primary)] leading-[1.2]">
                  Why I built{" "}
                  <span
                    className="bg-clip-text text-transparent"
                    style={{ backgroundImage: "var(--gradient-brand)" }}
                  >
                    Tech Rabbit
                  </span>
                </h2>
              </div>

              {/* Description */}
              <div className="space-y-5 text-[var(--color-text-body)] text-base leading-relaxed max-w-lg mb-10 font-medium">
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1, duration: 0.5 }}
                >
                  I've seen too many founders struggle with the same problems —
                  offshore agencies that overpromise, freelancers who disappear,
                  developers who don't understand the product.
                </motion.p>

                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                >
                  Tech Rabbit is the agency I wish existed. One inhouse team.
                  Full transparency. A subscription that grows with you — not a
                  project-by-project vendor relationship.
                </motion.p>

                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                >
                  Six years in, 50+ products across 6 countries. The model works
                  because we stay — same team, same codebase, same
                  accountability.
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
            </motion.div>
          </Reveal>
        </div>
      </div>

      {/* Coming Soon Modal - Portal to Body */}
      {typeof document !== "undefined" &&
        createPortal(
          <AnimatePresence>
            {isPopupOpen && (
              <ComingSoonModal
                isOpen={isPopupOpen}
                onClose={() => setIsPopupOpen(false)}
              />
            )}
          </AnimatePresence>,
          document.body,
        )}
    </section>
  );
}

// Coming Soon Modal internal component
const ComingSoonModal = ({ isOpen, onClose }) => {
  return (
    <div className="fixed inset-0 z-10000 flex items-center justify-center p-4">
      {/* Blurred Backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="absolute inset-0 bg-black/60 backdrop-blur-xl"
      />

      {/* Modal Content */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.9, y: 20 }}
        transition={{ type: "spring", damping: 25, stiffness: 300 }}
        className="relative w-full max-w-lg bg-white rounded-4xl overflow-hidden shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Background Decorative Pattern */}
        <div
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage:
              "radial-gradient(circle, var(--color-brand-blue) 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        />

        {/* Content */}
        <div className="relative p-8 md:p-12 text-center">
          {/* Top Icon */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring" }}
            className="w-20 h-20 rounded-full bg-linear-to-br from-(--color-brand-blue) to-(--color-brand-green) mx-auto flex items-center justify-center mb-8 shadow-lg shadow-blue-500/20"
          >
            <Play className="w-8 h-8 text-white fill-white ml-1" />
          </motion.div>

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-(--color-brand-blue) text-[10px] font-black tracking-widest uppercase mb-4">
              <Sparkles className="w-3 h-3" />
              Production in Progress
            </div>
            <h2 className="text-3xl md:text-4xl font-black text-(--color-text-primary) font-heading leading-tight mb-4">
              Building the{" "}
              <span className="text-(--color-brand-blue)">
                Full Experience.
              </span>
            </h2>
            <p className="text-(--color-text-body) text-base md:text-lg font-medium leading-relaxed mb-8">
              We're currently finalizing the high-fidelity founder story and
              agency walkthrough. Stay tuned for a deep dive into our vision.
            </p>
          </motion.div>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-3"
          >
            <button
              onClick={onClose}
              className="flex-1 px-8 py-4 rounded-2xl bg-(--color-text-primary) text-white font-bold text-sm hover:scale-[1.02] transition-all shadow-lg active:scale-95"
            >
              Got it
            </button>
            {/* <div className="flex-1 flex items-center justify-center gap-2 px-8 py-4 rounded-2xl border border-gray-100 text-(--color-text-muted) font-bold text-sm">
              <Volume2 className="w-4 h-4" />
              Audio Off
            </div> */}
          </motion.div>
        </div>

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-(--color-text-body) hover:bg-gray-100 transition-colors group"
        >
          <X className="w-5 h-5 group-hover:rotate-90 transition-transform duration-300" />
        </button>
      </motion.div>
    </div>
  );
};
