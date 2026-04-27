import { motion } from "framer-motion";

const variants = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0 },
};

export default function Reveal({ children, delay = 0, className = "" }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, ease: "easeOut", delay }}
      variants={variants}
      className={className}
    >
      {children}
    </motion.div>
  );
}
