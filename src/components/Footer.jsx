import { Link } from "react-router-dom";
import { Mail, ArrowUpRight, Star, MapPin } from "lucide-react";

import {
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
  FaXTwitter,
} from "react-icons/fa6";
import { useState } from "react";
import { motion } from "framer-motion";
import logo from "../assets/images/tr.webp";
import clutchLogo from "../assets/logo/clutch.png";
import goodfirmsLogo from "../assets/logo/goodfirms.png";

const navLinks = [
  { label: "About Us", to: "/about" },
  { label: "Pricing", to: "/pricing" },
  { label: "Our work", to: "/work" },
  { label: "Contact us", to: "/contact" },
];

const reviews = [
  {
    label: "Clutch",
    href: "https://clutch.co/profile/tech-rabbit",
    logo: clutchLogo,
    rating: "4.6",
  },
  {
    label: "GoodFirms",
    href: "https://www.goodfirms.co/company/tech-rabbit",
    logo: goodfirmsLogo,
    rating: "4.3",
  },
];

const socials = [
  {
    Icon: FaLinkedinIn,
    href: "https://in.linkedin.com/company/techrabbitindia",
    label: "LinkedIn",
  },
  {
    Icon: FaInstagram,
    href: "https://www.instagram.com/techrabbitindia/",
    label: "Instagram",
  },
];

export default function Footer() {
  return (
    <footer className="bg-[var(--color-bg-page)] px-3 sm:px-4 md:px-8 pb-6 pt-4 overflow-hidden">
      <div
        className="relative rounded-[1.5rem] sm:rounded-[2.5rem] overflow-hidden text-white max-w-7xl mx-auto"
        style={{ background: "#0a0a0a" }}
      >
        {/* Subtle brand glow */}
        <div
          className="absolute top-0 right-0 w-[500px] h-[400px] pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse at top right, rgba(42,171,215,0.07) 0%, transparent 65%)",
          }}
        />
        <div
          className="absolute bottom-0 left-0 w-[400px] h-[300px] pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse at bottom left, rgba(36,181,116,0.06) 0%, transparent 65%)",
          }}
        />

        {/* MAIN GRID */}
        <div className="px-6 md:px-12 py-12 sm:py-16">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Column 1: Brand */}
            <div className="col-span-2 lg:col-span-1 space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 shrink-0">
                  <img
                    src={logo}
                    alt="Tech Rabbit"
                    className="w-full h-full object-contain"
                  />
                </div>
                <div>
                  <span
                    className="font-black text-xl tracking-tight block leading-tight"
                    style={{ color: "var(--color-brand-green)" }}
                  >
                    Tech Rabbit
                  </span>
                  <p className="text-white/50 text-xs font-bold leading-tight mt-1">
                    Building world-class products.
                  </p>
                </div>
              </div>
              <p className="text-white/40 text-[13px] font-medium leading-relaxed">
                We help founders and teams turn ideas into high-performance
                digital solutions.
              </p>
              <div className="flex items-center gap-2">
                {socials.map(({ Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    aria-label={label}
                    className="w-9 h-9 rounded-full flex items-center justify-center border transition-all duration-300 hover:scale-110 hover:border-[var(--color-brand-green)] hover:text-[var(--color-brand-green)] hover:bg-[var(--color-brand-green)]/10"
                    style={{
                      borderColor: "rgba(255,255,255,0.1)",
                      color: "rgba(255,255,255,0.5)",
                    }}
                  >
                    <Icon size={13} />
                  </a>
                ))}
              </div>
            </div>

            {/* Column 2: Platform */}
            <div className="col-span-1">
              <h5 className="text-white/30 text-[10px] font-black uppercase tracking-[0.2em] mb-6">
                Platform
              </h5>
              <ul className="space-y-3.5">
                {navLinks.map((l) => (
                  <li key={l.label}>
                    <Link
                      to={l.to}
                      className="text-white/60 hover:text-white text-sm font-medium transition-colors duration-200"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3: Contact */}
            <div className="col-span-1">
              <h5 className="text-white/30 text-[10px] font-black uppercase tracking-[0.2em] mb-6">
                Get in touch
              </h5>
              <div className="space-y-4">
                <a
                  href="mailto:hello@techrabbit.io"
                  className="block text-white/50 hover:text-white text-sm font-medium transition-colors duration-200"
                >
                  hello@techrabbit.io
                </a>
                <p className="text-white/30 text-xs leading-relaxed">
                  Response within 4 business hours.
                </p>
                <Link
                  to="https://calendly.com/techrabbit/meeting"
                  target="_blank"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-white text-[10px] font-black uppercase tracking-widest transition-all duration-300 hover:scale-[1.05] shadow-lg"
                  style={{ backgroundImage: "var(--gradient-brand)" }}
                >
                  Book a call
                  <ArrowUpRight className="w-3 h-3" />
                </Link>
              </div>
            </div>

            {/* Column 4: Trust */}
            <div className="col-span-2 lg:col-span-1">
              <h5 className="text-white/30 text-[10px] font-black uppercase tracking-[0.2em] mb-8">
                Recognized By
              </h5>
              <div className="flex flex-row lg:flex-col gap-8 lg:gap-6">
                {reviews.map((site) => (
                  <a
                    key={site.label}
                    href={site.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-row items-center gap-3 transition-opacity hover:opacity-75"
                  >
                    <img
                      src={site.logo}
                      alt={site.label}
                      className="h-5 sm:h-6 w-auto object-contain"
                    />
                    {/* <div className="flex items-center gap-2">
                      <Star className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" />
                      <span className="text-xs font-black text-white tracking-widest pt-0.5">
                        {site.rating}
                      </span>
                    </div> */}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div
          className="mx-6 md:mx-12 h-px"
          style={{ background: "rgba(255,255,255,0.07)" }}
        />

        {/* BOTTOM BAR */}
        <div className="px-6 md:px-12 py-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <p className="text-white/20 text-[11px] font-medium">
            © 2026 Tech Rabbit - Building world-class products.
          </p>

          <div className="flex items-center gap-6 text-white/20 text-[11px] font-medium">
            {[
              { label: "Privacy policy", to: "/privacy-policy" },
              { label: "Terms & conditions", to: "/terms-conditions" },
              { label: "Cookie policy", to: "/cookie-policy" },
            ].map((item) => (
              <Link
                key={item.label}
                to={item.to}
                className="hover:text-white transition-colors duration-200"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
