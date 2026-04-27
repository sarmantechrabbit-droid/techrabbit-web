import { useRef, useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Play, Volume2, Code } from "lucide-react";

import Reveal from "./Reveal";

const videoTestimonials = [
  {
    name: "Muktesh Narula",
    role: "DOVESOFT",
    thumbnail:
      "https://images.unsplash.com/photo-1566492031773-4f4e44671857?q=80&w=1200&auto=format&fit=crop",
    video: "C:\Users\ADMIN\Videos\tr.mp4",
  },
  {
    name: "Shriya Sadneni",
    role: "MURZBAN",
    thumbnail:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1200&auto=format&fit=crop",
    video:
      "https://assets.mixkit.co/videos/preview/mixkit-woman-sitting-on-the-sofa-and-talking-to-someone-44026-large.mp4",
  },
  {
    name: "Yash Goswami",
    role: "BITEBEE FOUNDER",
    thumbnail:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1200&auto=format&fit=crop",
    video:
      "https://assets.mixkit.co/videos/preview/mixkit-man-sitting-on-his-bed-talking-on-a-video-call-43513-large.mp4",
  },
  {
    name: "Ajay Agarwal",
    role: "AVEENA CO-FOUNDER",
    thumbnail:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=1200&auto=format&fit=crop",
    video:
      "https://assets.mixkit.co/videos/preview/mixkit-young-man-sitting-on-a-couch-and-talking-44053-large.mp4",
  },
];

function VideoCard({ item, index, onClick }) {
  const videoRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (videoRef.current) {
      if (isHovered) {
        const playPromise = videoRef.current.play();
        if (playPromise !== undefined) {
          playPromise.catch((error) => {
            console.error("Autoplay/Hoverplay prevented:", error);
          });
        }
      } else {
        videoRef.current.pause();
        // videoRef.current.currentTime = 0;
      }
    }
  }, [isHovered]);

  return (
    <Reveal delay={index * 0.1}>
      <motion.div
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={onClick}
        whileHover={{ y: -5 }}
        className="group relative aspect-[3/4] rounded-[2rem] overflow-hidden bg-gray-900 shadow-xl cursor-pointer"
      >
        {/* Video Layer (Always present, but visible on hover) */}
        <video
          ref={videoRef}
          src={item.video}
          muted
          loop
          playsInline
          preload="auto"
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${isHovered ? "opacity-100" : "opacity-0"}`}
        />

        {/* Static Thumbnail (Visible by default) */}
        <img
          src={item.thumbnail}
          alt={item.name}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${isHovered ? "opacity-0" : "opacity-100"}`}
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />

        {/* Top Controls Overlay */}
        <div className="absolute top-6 left-6 right-6 flex items-center justify-between pointer-events-none z-10">
          <div className="w-10 h-10 rounded-full bg-black/40 backdrop-blur-md flex items-center justify-center text-white">
            <Play
              className={`w-4 h-4 fill-white transition-transform duration-300 ${isHovered ? "scale-125" : "scale-100"}`}
            />
          </div>
          <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white border border-white/20">
            <Volume2 className="w-4 h-4" />
          </div>
        </div>

        {/* Bottom Info Overlay */}
        <div className="absolute bottom-5 left-5 right-5 sm:bottom-8 sm:left-8 sm:right-8 text-white pointer-events-none z-10">
          <h3 className="text-xl font-black font-heading mb-1.5 leading-tight">
            {item.name}
          </h3>
          <p className="text-[10px] font-black text-white/70 uppercase tracking-widest">
            {item.role}
          </p>
        </div>
      </motion.div>
    </Reveal>
  );
}

export default function Testimonials() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  return (
    <section
      id="testimonials"
      className="bg-[var(--color-bg-page)] pb-20 px-4 sm:px-6 md:px-12 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        <Reveal className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[var(--color-border-brand-soft)] bg-[var(--color-bg-brand-tint)] text-[var(--color-brand-blue)] text-[10px] font-black tracking-widest uppercase mb-5">
            Client Testimonials
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black font-heading tracking-tight text-[var(--color-text-primary)] leading-[1]">
            What our
            <span className="text-[var(--color-text-muted)]">
              {" "}
              clients say.
            </span>
          </h2>
        </Reveal>

        {/* Desktop/Tablet grid */}
        <div className="hidden sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {videoTestimonials.map((item, i) => (
            <VideoCard
              key={i}
              item={item}
              index={i}
              onClick={() => setIsPopupOpen(true)}
            />
          ))}
        </div>

        {/* Mobile horizontal slider */}
        <div className="sm:hidden flex items-start gap-4 overflow-x-auto snap-x snap-mandatory pb-4 -mx-1 px-1 scrollbar-hide">
          {videoTestimonials.map((item, i) => (
            <div key={i} className="snap-start shrink-0 w-[75vw]">
              <VideoCard
                item={item}
                index={i}
                onClick={() => setIsPopupOpen(true)}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Coming Soon Modal - Portal to Body */}
      {typeof document !== "undefined" &&
        createPortal(
          <AnimatePresence>
            {isPopupOpen && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black/60 backdrop-blur-md"
                onClick={() => setIsPopupOpen(false)}
              >
                <motion.div
                  initial={{ scale: 0.9, opacity: 0, y: 20 }}
                  animate={{ scale: 1, opacity: 1, y: 0 }}
                  exit={{ scale: 0.9, opacity: 0, y: 20 }}
                  className="relative w-full max-w-md bg-white rounded-3xl p-8 text-center shadow-2xl border border-white/20"
                  onClick={(e) => e.stopPropagation()}
                >
                  <div
                    className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg text-white"
                    style={{ background: "var(--gradient-brand)" }}
                  >
                    <Code size={32} />
                  </div>
                  <h2 className="text-3xl font-black text-[var(--color-text-primary)] mb-2 font-heading">
                    Coming Soon
                  </h2>
                  <p className="text-[var(--color-text-body)] mb-8 leading-relaxed">
                    We're currently perfecting our video presentation. Check
                    back soon for a deep dive into our process!
                  </p>
                  <button
                    onClick={() => setIsPopupOpen(false)}
                    className="w-full py-4 rounded-full text-white font-black text-sm hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer"
                    style={{
                      background: "var(--gradient-brand)",
                      boxShadow: "0 10px 30px var(--color-brand-glow)",
                    }}
                  >
                    Got it
                  </button>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>,
          document.body,
        )}
    </section>
  );
}
