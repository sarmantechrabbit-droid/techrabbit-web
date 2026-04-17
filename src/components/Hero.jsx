import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { Code, Star } from "lucide-react";
import heroBackground from "../assets/images/background.png";
import clutchLogo from "../assets/logo/clutch_141eb1c3d4.svg.png";
import goodfirmsLogo from "../assets/logo/goodfirms_d2c269105e.svg.png";

export default function Hero() {
  const countries = [
    { code: "UK", flag: "https://flagcdn.com/gb.svg" },
    { code: "CAN", flag: "https://flagcdn.com/ca.svg" },
    { code: "USA", flag: "https://flagcdn.com/us.svg" },
    { code: "IND", flag: "https://flagcdn.com/in.svg" },
    { code: "UAE", flag: "https://flagcdn.com/ae.svg" },
    { code: "AUS", flag: "https://flagcdn.com/au.svg" },
  ];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % countries.length);
    }, 2000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative z-0 overflow-hidden bg-[var(--color-bg-page)] pt-28 md:pt-36">
      <div className="absolute inset-0 z-0 pointer-events-none">
        <img
          src={heroBackground}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-cover object-top"
        />

        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, rgba(255,255,255,0.18), rgba(255,255,255,0.68) 56%, rgba(255,255,255,0.94) 100%)",
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 md:px-12 w-full">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full 
             border border-[#b7d7f0] 
             bg-gradient-to-r from-[#eaf6fb] to-[#f5f7f9] 
             text-[#1f2937] text-sm font-medium shadow-sm mb-6"
          >
            <span className="flex items-center gap-2">
              Trusted by founders in 6 countries
              <AnimatePresence mode="wait">
                <motion.span
                  key={currentIndex}
                  initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
                  animate={{ opacity: 1, scale: 1, rotate: 0 }}
                  exit={{ opacity: 0, scale: 0.8, rotate: 10 }}
                  transition={{ duration: 0.3 }}
                  className="inline-flex items-center text-base leading-none px-1.5 py-0.5 rounded-md"
                >
                  <img
                    src={countries[currentIndex].flag}
                    alt={countries[currentIndex].code}
                    className="w-5 h-3.5 object-cover rounded-[2px] shadow-sm"
                  />
                </motion.span>
              </AnimatePresence>
            </span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-3xl sm:text-5xl md:text-6xl leading-[1.1] tracking-tight font-black font-heading text-[var(--color-text-primary)] mb-6"
          >
            We build your product.
            <br />
            <span className="text-[var(--color-text-muted)] font-medium">
              Then we grow it with you.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-[var(--color-text-body)] text-sm sm:text-base md:text-lg max-w-lg mb-8 sm:mb-10 leading-relaxed"
          >
            From idea to live MVP in 30 days - or an ongoing product team on
            subscription. Figma, Full-Stack, QA, AI, and BA all included.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-3 sm:gap-4 border-b border-[var(--color-border-default)] pb-10 sm:pb-14"
          >
            <Link
              to="/contact"
              className="flex items-center justify-center gap-2 px-7 py-3.5 rounded-full text-white font-black text-sm hover:scale-[1.03] transition-all duration-300"
              style={{
                background: "var(--gradient-brand)",
                boxShadow: "0 20px 40px var(--color-brand-glow)",
              }}
            >
              Launch your MVP
              <span className="text-lg">→</span>
            </Link>

            <Link
              to="/#pricing"
              className="px-7 py-3.5 rounded-full border border-[var(--color-border-subtle)] bg-white/80 backdrop-blur-sm text-[var(--color-text-primary)] font-bold text-sm hover:bg-[var(--color-bg-card-light)] transition-all duration-300 text-center"
            >
              See subscription plans
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-8 sm:mt-10 grid grid-cols-4 gap-2 sm:gap-6 pb-10 sm:pb-12 border-b border-[var(--color-border-default)]"
          >
            {[
              { value: "6+", label: "Years" },
              { value: "30+", label: "Products" },
              { value: "6", label: "Countries" },
              { value: "100%", label: "Inhouse" },
            ].map((s) => (
              <div key={s.label}>
                <div className="text-xl sm:text-3xl text-center font-black text-[var(--color-text-primary)] font-heading">
                  {s.value}
                </div>
                <div className="text-[var(--color-text-muted)] text-center text-[8px] sm:text-[10px] font-bold uppercase tracking-widest mt-1 whitespace-nowrap">
                  {s.label}
                </div>
              </div>
            ))}
          </motion.div>

          {/* Clutch & GoodFirms Badges - At Bottom */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-10 flex  items-start sm:items-center gap-4"
          >
            <p className="text-[10px] font-black uppercase tracking-widest text-[var(--color-text-faint)]">
              Trusted by:
            </p>

            {/* Clutch Badge */}
            <div
              className="relative rounded-lg border overflow-hidden p-2.5 flex items-center gap-2 transition-all duration-300 hover:shadow-md"
              style={{
                background: "white",
                borderColor: "var(--color-border-card)",
                boxShadow: "0 1px 6px rgba(0,0,0,0.03)",
              }}
            >
              <div
                className="absolute top-0 inset-x-0 h-0.5"
                style={{ background: "var(--color-brand-blue)" }}
              />

              <img
                src={clutchLogo}
                alt="Clutch"
                className="h-5 object-contain"
              />

              <div className="flex flex-col gap-0.5">
                <div className="flex items-center gap-0.5">
                  {[...Array(1)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-2.5 h-2.5 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>
                <p className="text-[7px] font-black uppercase tracking-widest text-[var(--color-text-faint)]">
                  4.6
                </p>
              </div>
            </div>

            {/* GoodFirms Badge */}
            <div
              className="relative rounded-lg border overflow-hidden p-2.5 flex items-center gap-2 transition-all duration-300 hover:shadow-md"
              style={{
                background: "white",
                borderColor: "var(--color-border-card)",
                boxShadow: "0 1px 6px rgba(0,0,0,0.03)",
              }}
            >
              <div
                className="absolute top-0 inset-x-0 h-0.5"
                style={{ background: "var(--color-brand-green)" }}
              />

              <img
                src={goodfirmsLogo}
                alt="GoodFirms"
                className="h-5 object-contain"
              />

              <div className="flex flex-col gap-0.5">
                <div className="flex items-center gap-0.5">
                  {[...Array(1)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-2.5 h-2.5 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>
                <p className="text-[7px] font-black uppercase tracking-widest text-[var(--color-text-faint)]">
                  4.3
                </p>
              </div>
            </div>
          </motion.div>
        </div>
        
      </div>
    </section>
  );
}
