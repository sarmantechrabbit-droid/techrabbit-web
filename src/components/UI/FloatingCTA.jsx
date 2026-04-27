import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { Calendar } from "lucide-react";

export default function FloatingCTA() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 500);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const buttonClass =
    "flex items-center gap-3 bg-[#1a1a1a] text-white px-6 py-4 rounded-2xl shadow-[0_20px_40px_rgba(0,0,0,0.3)] transition-all duration-300 hover:scale-105 active:scale-95 group pointer-events-auto";

  return (
    <>
      <AnimatePresence>
        {isVisible && (
          <div className="fixed bottom-6 right-6 z-40 pointer-events-none">
            {/* Book a Call - Floating Button */}
            <motion.a
              href="https://calendly.com/techrabbit/meeting"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 50, scale: 0.8 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 50, scale: 0.8 }}
              whileHover={{ y: -5 }}
              className={buttonClass}
            >
              <div className="relative">
                <Calendar
                  size={20}
                  className="text-white group-hover:rotate-12 transition-transform"
                />
                <motion.div
                  className="absolute -top-1 -right-1 w-2 h-2 bg-(--color-brand-blue) rounded-full"
                  animate={{ scale: [1, 1.5, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              </div>
              <span className="font-bold text-sm tracking-tight hidden sm:inline">
                Book a call
              </span>
            </motion.a>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
