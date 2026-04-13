import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useScrollY } from "../hooks/useScrollY";
import logo from "../assets/images/tr.webp"

const links = [
  { to: "/about", label: "About" },
  { to: "/work", label: "Work" },
  { to: "/#pricing", label: "Pricing", isHash: true },
];

export default function Navbar() {
  const scrollY = useScrollY();
  const { pathname } = useLocation();
  const scrolled = scrollY > 20;

  const handleHashClick = (e, hash) => {
    if (pathname === "/") {
      e.preventDefault();
      const el = document.querySelector(hash);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 pt-6">
      <nav className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Logo - Fixed Left */}
           <Link to="/" className="flex items-center gap-2 group shrink-0">
      
      <div className="w-8 h-8 flex items-center justify-center overflow-hidden">
        <img 
          src={logo} 
          alt="Tech Rabbit Logo" 
          className="w-full h-full object-contain"
        />
      </div>

      <span className="font-bold text-(--color-text-primary) text-base tracking-tight font-[Outfit]">
        Tech Rabbit
      </span>
    </Link>


        {/* Centered Floating Pill Menu */}
        <div
          className={`
          flex items-center gap-1 px-1.5 py-1.5 rounded-full border border-(--color-border-default) bg-white/80 backdrop-blur-xl shadow-lg shadow-gray-200/40
          transition-all duration-500
          ${scrolled ? "scale-95" : "scale-100"}
        `}
        >
          <div className="hidden md:flex items-center">
            {links.map(({ to, label, isHash }) => (
              <Link
                key={to}
                to={to}
                onClick={
                  isHash ? (e) => handleHashClick(e, "#pricing") : undefined
                }
                className={`px-5 py-2 rounded-full text-[13.5px] font-semibold transition-all duration-200 ${
                  pathname === to
                    ? "text-(--color-text-primary)"
                    : "text-(--color-text-body) hover:text-(--color-text-primary)"
                }`}
              >
                {label}
              </Link>
            ))}
          </div>

          <Link
            to="/contact"
            className="px-5 py-2.5 rounded-full bg-black text-white text-[13.5px] font-bold hover:bg-(--color-text-dark) transition-colors shadow-sm"
          >
            Book a Call
          </Link>
        </div>

        {/* Placeholder to balance the flex items on desktop */}
        <div className="hidden md:block w-32 invisible"></div>

        {/* Mobile menu would go here or toggle, keeping it simple for now to match visual */}
      </nav>
    </header>
  );
}
