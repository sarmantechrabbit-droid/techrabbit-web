import { Link } from "react-router-dom";
import { Mail, ArrowUpRight, Star } from "lucide-react";
import { FaGithub, FaInstagram, FaLinkedinIn, FaXTwitter } from "react-icons/fa6";
import { useState } from "react";
import logo from "../assets/images/tr.webp";
import clutchLogo from "../assets/logo/clutch_141eb1c3d4.svg.png";
import goodfirmsLogo from "../assets/logo/goodfirms_d2c269105e.svg.png";

const navLinks = [
  { label: "Who we are", to: "/about" },
  { label: "Our services", to: "/services" },
  { label: "Our work", to: "/work" },
  { label: "Pricing", to: "/#pricing" },
  { label: "Contact us", to: "/contact" },
];

const services = [
  "MVP Development",
  "AI Engine Build",
  "Scale Subscription",
  "Design Sprints",
  "QA & Testing",
];

const socials = [
  { Icon: FaLinkedinIn, href: "#", label: "LinkedIn" },
  { Icon: FaXTwitter, href: "#", label: "Twitter" },
  { Icon: FaInstagram, href: "#", label: "Instagram" },
  { Icon: FaGithub, href: "#", label: "GitHub" },
];

export default function Footer() {
  const [email, setEmail] = useState("");

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

        {/* TOP SECTION — Logo + Ratings + Socials */}
        <div className="px-4 sm:px-6 md:px-10 pt-10 sm:pt-12 pb-6 sm:pb-8">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
            {/* Logo + tagline */}
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 shrink-0">
                <img src={logo} alt="Tech Rabbit" className="w-full h-full object-contain" />
              </div>
              <div>
                <span
                  className="font-black text-lg tracking-tight block"
                  style={{ color: "var(--color-brand-green)" }}
                >
                  Tech Rabbit
                </span>
                <span className="text-white/40 text-xs font-medium">
                  Building world-class products.
                </span>
              </div>
            </div>

            {/* Socials */}
            <div className="flex items-center gap-2">
              {socials.map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 rounded-full flex items-center justify-center border transition-all duration-300 hover:border-[var(--color-brand-green)] hover:text-[var(--color-brand-green)] hover:bg-[var(--color-brand-green)]/10"
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
        </div>

        {/* Divider */}
        <div className="mx-4 sm:mx-6 md:mx-10 h-px" style={{ background: "rgba(255,255,255,0.07)" }} />

       

        {/* Divider */}
        <div className="mx-4 sm:mx-6 md:mx-10 h-px" style={{ background: "rgba(255,255,255,0.07)" }} />

        {/* MIDDLE — Newsletter + Links */}
        <div className="px-4 sm:px-6 md:px-10 py-8 sm:py-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
 
          

            {/* Link columns */}
            <div className="lg:col-span-12 grid grid-cols-2 sm:grid-cols-3 gap-8">
              {/* Company */}
              <div>
                <h5 className="text-white/50 text-[9px] font-black uppercase tracking-widest mb-4">
                  Company
                </h5>
                <ul className="space-y-2.5">
                  {navLinks.map((l) => (
                    <li key={l.label}>
                      <Link
                        to={l.to}
                        className="text-white/50 hover:text-white text-xs font-medium transition-colors duration-200 flex items-center gap-2 group"
                      >
                        <span
                          className="w-1 h-1 rounded-full transition-all duration-300 group-hover:w-2"
                          style={{ background: "var(--color-brand-green)" }}
                        />
                        {l.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Services */}
              <div>
                <h5 className="text-white/50 text-[9px] font-black uppercase tracking-widest mb-4">
                  Services
                </h5>
                <ul className="space-y-2.5">
                  {services.map((s) => (
                    <li key={s}>
                      <Link
                        to="/services"
                        className="text-white/50 hover:text-white text-xs font-medium transition-colors duration-200 flex items-center gap-2 group"
                      >
                        <span
                          className="w-1 h-1 rounded-full transition-all duration-300 group-hover:w-2"
                          style={{ background: "var(--color-brand-blue)" }}
                        />
                        {s}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Contact block */}
              <div>
                <h5 className="text-white/50 text-[9px] font-black uppercase tracking-widest mb-4">
                  Get in touch
                </h5>
                <div className="space-y-3">
                  <a
                    href="mailto:hello@techrabbit.io"
                    className="block text-white/50 hover:text-white text-xs font-medium transition-colors duration-200"
                  >
                    hello@techrabbit.io
                  </a>
                  <p className="text-white/30 text-[11px] leading-relaxed">
                    Response within 4 business hours.
                  </p>

                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-white text-[9px] font-black uppercase tracking-widest transition-all duration-300 hover:scale-[1.03] mt-1"
                    style={{ backgroundImage: "var(--gradient-brand)" }}
                  >
                    Book a call
                    <ArrowUpRight className="w-2.5 h-2.5" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="mx-4 sm:mx-6 md:mx-10 h-px" style={{ background: "rgba(255,255,255,0.07)" }} />

        {/* BOTTOM BAR */}
        <div className="px-4 sm:px-6 md:px-10 py-5 sm:py-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/25 text-[11px]">
            © 2025 Tech Rabbit Studio. All rights reserved.
          </p>

          <div className="flex items-center gap-3 sm:gap-4 text-white/25 text-[11px] flex-wrap justify-center">
            {["Privacy policy", "Terms & conditions", "Cookie policy"].map((l, i, arr) => (
              <span key={l} className="flex items-center gap-4">
                <Link to="#" className="hover:text-white transition-colors duration-200">
                  {l}
                </Link>
                {i < arr.length - 1 && (
                  <span className="w-px h-2.5" style={{ background: "rgba(255,255,255,0.1)" }} />
                )}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
