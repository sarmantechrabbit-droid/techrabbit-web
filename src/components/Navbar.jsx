import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useScrollY } from "../hooks/useScrollY";
import logo from "../assets/images/tr.webp";

const links = [
   { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/pricing", label: "Pricing" },
  { to: "/work", label: "Work" },
];

export default function Navbar() {
  const scrollY = useScrollY();
  const { pathname } = useLocation();
  const scrolled = scrollY > 20;
  const [mobileOpen, setMobileOpen] = useState(false);

  // Lock body scroll logic
  useEffect(() => {
    if (mobileOpen) {
      const scrollY = window.scrollY;
      document.body.style.position = "fixed";
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = "100%";
      document.body.style.overflowY = "scroll"; // Keep scrollbar space to avoid jump
    } else {
      const scrollY = document.body.style.top;
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.width = "";
      document.body.style.overflowY = "";
      if (scrollY) {
        window.scrollTo(0, parseInt(scrollY || "0") * -1);
      }
    }
  }, [mobileOpen]);

  const handleHashClick = (e, hash) => {
    if (pathname === "/") {
      e.preventDefault();
      const el = document.querySelector(hash);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <header
        className={`
          fixed top-0 left-0 right-0 z-50 p-4
          transition-all duration-500
          ${scrolled ? "bg-white/80 backdrop-blur-xl shadow-sm" : "bg-transparent"}
        `}
      >
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group shrink-0">
            <div className="w-8 h-8 flex items-center justify-center overflow-hidden">
              <img
                src={logo}
                alt="Tech Rabbit Logo"
                className="w-full h-full object-contain"
              />
            </div>
            <span className="font-black text-[var(--color-text-primary)] text-base tracking-tight font-heading hidden sm:inline">
              Tech Rabbit
            </span>
          </Link>

          {/* Center Menu — Desktop */}
          <div
            className={`
              hidden md:flex items-center gap-1 px-1.5 py-1.5 rounded-full border
              transition-all duration-500
              ${
                scrolled
                  ? "bg-transparent border-transparent scale-100"
                  : "bg-white/90 border-transparent scale-100"
              }
            `}
          >
            <div className="flex items-center">
              {links.map(({ to, label, isHash }) => (
                <Link
                  key={to}
                  to={to}
                  onClick={
                    isHash ? (e) => handleHashClick(e, "#pricing") : undefined
                  }
                  className={`px-3 lg:px-5 py-2 rounded-full text-[13.5px] font-semibold transition-all duration-200 whitespace-nowrap ${
                    pathname === to
                      ? "text-[var(--color-text-primary)]"
                      : "text-[var(--color-text-body)] hover:text-[var(--color-text-primary)]"
                  }`}
                >
                  {label}
                </Link>
              ))}
            </div>

            <Link
              to="/contact"
              className="px-4 lg:px-5 py-2.5 rounded-full bg-black text-white text-[13.5px] font-bold hover:bg-[var(--color-text-dark)] transition-colors shadow-sm shrink-0 whitespace-nowrap"
            >
              Book a Call
            </Link>
          </div>  

          {/* Spacer — Desktop */}
          <div className="hidden md:block w-12 lg:w-32 invisible shrink-0"></div>

          {/* Hamburger Button — Mobile */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden relative w-10 h-10 rounded-xl flex items-center justify-center border border-[var(--color-border-subtle)] bg-white/80 backdrop-blur-sm"
            aria-label="Toggle menu"
          >
            <div className="flex flex-col items-center justify-center gap-[5px]">
              <motion.span
                animate={mobileOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
                className="block w-5 h-[2px] bg-[var(--color-text-primary)] rounded-full origin-center"
                transition={{ duration: 0.25 }}
              />
              <motion.span
                animate={mobileOpen ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
                className="block w-5 h-[2px] bg-[var(--color-text-primary)] rounded-full"
                transition={{ duration: 0.15 }}
              />
              <motion.span
                animate={mobileOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
                className="block w-5 h-[2px] bg-[var(--color-text-primary)] rounded-full origin-center"
                transition={{ duration: 0.25 }}
              />
            </div>
          </button>
        </nav>
      </header>

      {/* Mobile Sidebar Overlay + Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 z-[60] bg-black/40 backdrop-blur-sm md:hidden"
              onClick={() => setMobileOpen(false)}
            />

            {/* Sidebar */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="fixed top-0 right-0 bottom-0 z-[70] w-[280px] bg-white shadow-2xl md:hidden flex flex-col"
            >
              {/* Sidebar Header */}
              <div className="flex items-center justify-between px-6 pt-6 pb-4 border-b border-[var(--color-border-light)]">
                <Link to="/" onClick={() => setMobileOpen(false)} className="flex items-center gap-2">
                  <div className="w-7 h-7 flex items-center justify-center overflow-hidden rounded-lg bg-gradient-to-br from-[var(--color-brand-blue)] to-[var(--color-brand-green)] p-1">
                    <img src={logo} alt="Tech Rabbit Logo" className="w-full h-full object-contain" />
                  </div>
                  <span className="font-black text-[var(--color-text-primary)] text-sm tracking-tight font-heading">
                    Tech Rabbit
                  </span>
                </Link>
                <button
                  onClick={() => setMobileOpen(false)}
                  className="w-8 h-8 rounded-lg flex items-center justify-center hover:bg-[var(--color-bg-card)] transition-colors"
                  aria-label="Close menu"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                  </svg>
                </button>
              </div>

              {/* Nav Links */}
              <div className="flex-1 px-4 py-4 overflow-y-auto scrollbar-hide">
                <div className="flex flex-col gap-1">
                  {links.map(({ to, label, isHash }, index) => (
                    <motion.div
                      key={to}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.05 * index, duration: 0.3 }}
                    >
                      <Link
                        to={to}
                        onClick={() => {
                          setMobileOpen(false);
                          if (isHash) handleHashClick(window.event, "#pricing");
                        }}
                        className={`flex items-center gap-3 px-4 py-3.5 rounded-xl text-[15px] font-semibold transition-all duration-200 ${
                          pathname === to
                            ? "text-[var(--color-text-primary)] bg-[var(--color-bg-card)]"
                            : "text-[var(--color-text-body)] hover:text-[var(--color-text-primary)] hover:bg-[var(--color-bg-card-light)]"
                        }`}
                      >
                        {label}
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Sidebar Footer CTA */}
              <div className="px-4 pb-6 pt-2 border-t border-[var(--color-border-light)]">
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.25, duration: 0.3 }}
                >
                  <Link
                    to="/contact"
                    onClick={() => setMobileOpen(false)}
                    className="flex items-center justify-center w-full px-5 py-3.5 rounded-xl bg-black text-white text-[15px] font-bold hover:bg-[var(--color-text-dark)] transition-colors"
                  >
                    Book a Call →
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
