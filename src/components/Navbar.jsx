import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useScrollY } from "../hooks/useScrollY";
import { ChevronDown, X } from "lucide-react";
import logo from "../assets/images/tr.webp";

const links = [
  { to: "/about", label: "About" },
  // { to: "/services", label: "Services" },
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
            <div className="w-10 h-10 flex items-center justify-center overflow-hidden">
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
                  : "bg-white/90 border border-[#f4f5f6] scale-100"
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

            <a
              href="https://calendly.com/techrabbit/meeting"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 lg:px-5 py-2.5 rounded-full bg-black text-white text-[13.5px] font-bold hover:bg-[var(--color-text-dark)] transition-colors shadow-sm shrink-0 whitespace-nowrap"
            >
              Book a Call
            </a>
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
                animate={
                  mobileOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }
                }
                className="block w-5 h-[2px] bg-[var(--color-text-primary)] rounded-full origin-center"
                transition={{ duration: 0.25 }}
              />
              <motion.span
                animate={
                  mobileOpen
                    ? { opacity: 0, scaleX: 0 }
                    : { opacity: 1, scaleX: 1 }
                }
                className="block w-5 h-[2px] bg-[var(--color-text-primary)] rounded-full"
                transition={{ duration: 0.15 }}
              />
              <motion.span
                animate={
                  mobileOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }
                }
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
              className="fixed inset-0 z-[60] bg-black/60 md:hidden"
              onClick={() => setMobileOpen(false)}
            />

            {/* Full-screen centered menu */}
            <motion.div
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.05 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 z-[70] bg-[#fff] md:hidden flex flex-col items-center justify-center p-6"
            >
              <button
                onClick={() => setMobileOpen(false)}
                className="absolute top-10 right-10 text-black/70 hover:text-black transition-colors"
                aria-label="Close menu"
              >
                <X size={32} strokeWidth={1.5} />
              </button>

              <div className="flex flex-col items-center gap-8 w-full max-w-sm">
                {links.map(({ to, label, hasDropdown, isHash }, index) => (
                  <motion.div
                    key={to}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.05 * index, duration: 0.4 }}
                    className="w-full text-center"
                  >
                    <Link
                      to={to}
                      onClick={() => {
                        if (!hasDropdown) setMobileOpen(false);
                        if (isHash) handleHashClick(window.event, "#pricing");
                      }}
                      className={`
                        inline-flex items-center justify-center gap-1.5 text-xl font-bold tracking-tight transition-all duration-200
                        ${
                          pathname === to
                            ? "text-[var(--color-brand-green)]"
                            : "text-black hover:text-[var(--color-brand-green)]"
                        }
                      `}
                    >
                      {label}
                      {hasDropdown && (
                        <ChevronDown className="w-5 h-5 text-white/40" />
                      )}
                    </Link>
                  </motion.div>
                ))}

                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * links.length, duration: 0.4 }}
                  className=""
                >
                  <a
                    href="https://calendly.com/techrabbit/meeting"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setMobileOpen(false)}
                    className="flex items-center justify-center w-full px-5 py-3.5 rounded-xl bg-black text-white text-[15px] font-bold hover:bg-[var(--color-text-dark)] transition-colors"
                  >
                    Book a Call →
                  </a>
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
