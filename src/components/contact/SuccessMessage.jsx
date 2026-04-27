import { motion } from "framer-motion";
import { CheckCircle, Home, Send } from "lucide-react";

const Confetti = () => {
  const confetti = Array.from({ length: 30 }).map((_, i) => ({
    id: i,
    left: Math.random() * 100,
    delay: Math.random() * 0.5,
    duration: 2 + Math.random() * 1,
  }));

  return (
    <>
      {confetti.map((item) => (
        <motion.div
          key={item.id}
          className="absolute w-2 h-2 rounded-full pointer-events-none"
          style={{
            left: `${item.left}%`,
            top: "-10px",
            background: [
              "var(--color-brand-blue)",
              "var(--color-brand-green)",
              "#fbbf24",
            ][Math.floor(Math.random() * 3)],
          }}
          animate={{
            y: 400,
            opacity: [1, 1, 0],
            rotate: 360,
          }}
          transition={{
            duration: item.duration,
            delay: item.delay,
            ease: "easeIn",
          }}
        />
      ))}
    </>
  );
};

export default function SuccessMessage({ onReset }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      className="relative overflow-hidden rounded-2xl p-12 text-center text-white shadow-2xl"
      style={{
        background: "var(--gradient-brand)",
        boxShadow: "0 20px 60px var(--color-brand-glow)",
      }}
    >
      <Confetti />

      <motion.div
        initial={{ scale: 0, rotate: -180 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ delay: 0.2, type: "spring", stiffness: 100 }}
        className="mb-6 flex justify-center"
      >
        <CheckCircle className="w-20 h-20 text-white drop-shadow-lg" />
      </motion.div>

      <motion.h2
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="text-4xl font-black mb-4 font-heading"
      >
        Message Sent!
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="text-white/90 text-lg mb-8 leading-relaxed max-w-md mx-auto"
      >
        We've received your request and our team will be in touch within 4
        business hours.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="flex gap-3 justify-center flex-wrap"
      >
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={onReset}
          className="px-8 py-3 rounded-xl bg-white text-[var(--color-brand-blue)] font-bold hover:bg-gray-50 transition-colors shadow-lg flex items-center gap-2"
        >
          <Send className="w-4 h-4" />
          Send Another
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-8 py-3 rounded-xl bg-white/20 text-white font-bold hover:bg-white/30 transition-colors border border-white/30 backdrop-blur-sm flex items-center gap-2"
        >
          <Home className="w-4 h-4" />
          Back Home
        </motion.button>
      </motion.div>
    </motion.div>
  );
}
