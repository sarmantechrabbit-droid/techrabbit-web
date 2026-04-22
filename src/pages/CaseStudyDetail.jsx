import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  Zap,
  ChevronLeft,
  ChevronRight,
  Sparkles,
} from "lucide-react";
import { useState } from "react";
import Reveal from "../components/Reveal";
import img1 from "../assets/Dashboard/Shipora.png";
import img2 from "../assets/Dashboard/oppvia.png";
import img3 from "../assets/Dashboard/lexa.png";

const caseStudies = [
  {
    id: 1,
    slug: "shipora",
    title: "Shipora",
    category: "Logistics SaaS",
    description:
      "Multi-country shipping management system handling end-to-end logistics from China to UK/EU routes.",
    fullDescription:
      "Shipora is a comprehensive logistics management platform designed to streamline multi-country shipping operations. Built for enterprises managing complex supply chains across multiple regions, it provides real-time tracking, role-based access control, and advanced routing capabilities.",
    images: [
      {
        url: img1,
        alt: "Shipora Dashboard Overview",
        caption: "Main Dashboard",
      },
      {
        url: img1,
        alt: "Shipora Tracking System",
        caption: "Real-time Tracking",
      },
      { url: img1, alt: "Shipora Analytics", caption: "Analytics Dashboard" },
    ],
    accent: "var(--color-brand-blue)",
    accentVar: "--color-brand-blue",
    stats: [
      { label: "Countries", value: "4" },
      { label: "Roles", value: "3" },
      { label: "Launch", value: "30d" },
    ],
    features: [
      {
        title: "Multi-Vendor Support",
        description:
          "Support for multiple shipping vendors with unified interface",
      },
      {
        title: "Real-time Tracking",
        description: "Live shipment tracking across all routes and regions",
      },
      {
        title: "Advanced Analytics",
        description: "Comprehensive reporting and performance metrics",
      },
      {
        title: "Role-Based Access",
        description: "Super Admin, Country Admin, and Client role management",
      },
      {
        title: "API Integration",
        description: "Seamless integration with major shipping providers",
      },
      {
        title: "Cloud-Native",
        description: "Scalable, secure, and highly available infrastructure",
      },
    ],
    technologies: ["React", "Node.js", "PostgreSQL", "AWS", "Socket.IO"],
    challenges: [
      "Managing complex multi-country logistics workflows",
      "Real-time data synchronization across regions",
      "Handling high-volume transaction processing",
    ],
    results: [
      "30-day launch from concept to production",
      "Support for 4 countries with 3 distinct user roles",
      "99.9% uptime in first 6 months",
      "50% reduction in manual processing time",
    ],
  },
  {
    id: 2,
    slug: "oppvia",
    title: "Oppvia",
    category: "AI Hiring Platform",
    description:
      "Revolutionizing recruitment with AI interview simulators and automated calling agents.",
    fullDescription:
      "Oppvia is an innovative AI-powered hiring platform that transforms the recruitment process. It combines AI interview simulators, resume-JD scoring, and automated calling agents to streamline candidate evaluation and improve hiring efficiency.",
    images: [
      {
        url: img2,
        alt: "Oppvia Interview Simulator",
        caption: "AI Interview Simulator",
      },
      {
        url: img2,
        alt: "Oppvia Candidate Dashboard",
        caption: "Candidate Dashboard",
      },
      { url: img2, alt: "Oppvia Analytics", caption: "Hiring Analytics" },
    ],
    accent: "var(--color-brand-green)",
    accentVar: "--color-brand-green",
    stats: [
      { label: "AI Modules", value: "5+" },
      { label: "Tiers", value: "3" },
      { label: "Status", value: "Live" },
    ],
    features: [
      {
        title: "AI Interview Simulator",
        description: "Realistic AI-powered interview experience for candidates",
      },
      {
        title: "Resume-JD Scoring",
        description:
          "Intelligent matching between resumes and job descriptions",
      },
      {
        title: "Calling Agent",
        description: "Automated AI agent for initial candidate screening",
      },
      {
        title: "Biometric Evaluation",
        description: "Advanced candidate assessment using biometric data",
      },
      {
        title: "WhatsApp Integration",
        description: "Seamless communication through WhatsApp automation",
      },
      {
        title: "Multi-Tier Pricing",
        description: "Flexible pricing tiers for different organization sizes",
      },
    ],
    technologies: [
      "React",
      "Python",
      "FastAPI",
      "OpenAI",
      "PostgreSQL",
      "Twilio",
    ],
    challenges: [
      "Building realistic AI interview experiences",
      "Ensuring fair and unbiased candidate evaluation",
      "Integrating multiple AI models seamlessly",
    ],
    results: [
      "5+ AI modules deployed successfully",
      "3 pricing tiers serving different market segments",
      "Live platform with active users",
      "40% faster hiring process for clients",
    ],
  },
  {
    id: 3,
    slug: "lexa",
    title: "Lexa",
    category: "Algo Trading",
    description:
      "High-performance trading engine connecting TradingView alerts to IBKR via Python FastAPI.",
    fullDescription:
      "Lexa is a sophisticated algorithmic trading platform that bridges TradingView signals with Interactive Brokers execution. It provides real-time signal processing, automated order execution, and comprehensive trading analytics.",
    images: [
      {
        url: img3,
        alt: "Lexa Trading Dashboard",
        caption: "Trading Dashboard",
      },
      {
        url: img3,
        alt: "Lexa Signal Processing",
        caption: "Signal Processing",
      },
      {
        url: img3,
        alt: "Lexa Performance Metrics",
        caption: "Performance Metrics",
      },
    ],
    accent: "var(--color-brand-blue)",
    accentVar: "--color-brand-blue",
    stats: [
      { label: "Production", value: "Live" },
      { label: "Backends", value: "2" },
      { label: "Signals", value: "Real-time" },
    ],
    features: [
      {
        title: "TradingView Integration",
        description: "Direct connection to TradingView alerts and signals",
      },
      {
        title: "IBKR Execution",
        description: "Automated order execution through Interactive Brokers",
      },
      {
        title: "Real-time Processing",
        description: "Sub-millisecond signal processing and execution",
      },
      {
        title: "Risk Management",
        description: "Advanced position sizing and risk control",
      },
      {
        title: "Performance Analytics",
        description: "Detailed trading performance and P&L tracking",
      },
      {
        title: "API Bridge",
        description: "Custom API for third-party integrations",
      },
    ],
    technologies: [
      "Python",
      "FastAPI",
      "Socket.IO",
      "PostgreSQL",
      "Redis",
      "Docker",
    ],
    challenges: [
      "Achieving sub-millisecond execution latency",
      "Handling high-frequency signal processing",
      "Ensuring reliable broker connectivity",
    ],
    results: [
      "Live production trading platform",
      "2 backend systems for redundancy",
      "Real-time signal processing",
      "99.95% execution success rate",
    ],
  },
];

export default function CaseStudyDetail() {
  const { slug } = useParams();
  const caseStudy = caseStudies.find((cs) => cs.slug === slug);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  if (!caseStudy) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[var(--color-bg-page)]">
        <div className="text-center">
          <h1 className="text-3xl font-black font-heading text-[var(--color-text-primary)] mb-4">
            Case Study Not Found
          </h1>
          <Link
            to="/work"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[var(--color-brand-blue)] text-white font-bold"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Work
          </Link>
        </div>
      </div>
    );
  }

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % caseStudy.images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex(
      (prev) => (prev - 1 + caseStudy.images.length) % caseStudy.images.length,
    );
  };

  return (
    <main className="min-h-screen bg-[var(--color-bg-page)]">
      {/* Hero Section */}
      <section className="relative overflow-hidden px-4 sm:px-6 md:px-12 pt-32 pb-10">
        {/* Animated Background */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              "radial-gradient(circle, var(--color-grid-dot) 1px, transparent 1px)",
            backgroundSize: "32px 32px",
            opacity: 0.4,
          }}
        />

        {/* Gradient Glows */}
        <div className="absolute right-[-15%] top-0 h-[30rem] w-[30rem] pointer-events-none">
          <div
            className="absolute inset-0 rounded-full blur-[120px]"
            style={{
              background:
                "radial-gradient(circle, rgba(42,171,215,0.12) 0%, transparent 70%)",
            }}
          />
        </div>
        <div className="absolute left-[-15%] bottom-0 h-[25rem] w-[25rem] pointer-events-none">
          <div
            className="absolute inset-0 rounded-full blur-[120px]"
            style={{
              background:
                "radial-gradient(circle, rgba(36,181,116,0.12) 0%, transparent 70%)",
            }}
          />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          {/* Back Button */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="mb-10"
          >
            <Link
              to="/work"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg border border-[var(--color-border-card)] text-[var(--color-text-body)] hover:text-[var(--color-text-primary)] hover:border-[var(--color-brand-blue)] transition-all duration-300"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Work
            </Link>
          </motion.div>

          {/* Header */}
          <Reveal className="mb-16">
            <div className="max-w-4xl">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[var(--color-border-brand-soft)] bg-[var(--color-bg-brand-tint)] text-[var(--color-brand-blue)] text-[10px] font-black tracking-widest uppercase mb-6"
              >
                <Sparkles className="w-3.5 h-3.5" />
                Case Study
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black font-heading tracking-tight text-[var(--color-text-primary)] leading-[1.05] mb-6"
              >
                {caseStudy.title}
              </motion.h1>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="flex flex-col gap-4"
              >
                <div className="inline-flex w-fit items-center gap-2 px-3 py-1.5 rounded-full border border-[var(--color-border-card)] bg-white text-[var(--color-text-body)] text-xs sm:text-sm font-black">
                  <Zap
                    className="w-4 h-4"
                    style={{ color: caseStudy.accent }}
                  />
                  {caseStudy.category}
                </div>
                <p className="text-sm sm:text-base md:text-lg text-[var(--color-text-body)] font-medium leading-relaxed max-w-3xl">
                  {caseStudy.fullDescription}
                </p>
              </motion.div>
            </div>
          </Reveal>

          {/* Image Gallery */}
          <Reveal>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="relative"
            >
              {/* Main Image */}
              <div
                className="rounded-3xl border border-[var(--color-border-card)] overflow-hidden bg-gradient-to-br from-[var(--color-bg-card)] to-[var(--color-bg-page)] relative group"
                style={{
                  boxShadow: `0 32px 80px -16px color-mix(in srgb, ${caseStudy.accent} 25%, transparent)`,
                }}
              >
                <motion.img
                  key={currentImageIndex}
                  src={caseStudy.images[currentImageIndex].url}
                  alt={caseStudy.images[currentImageIndex].alt}
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6 }}
                  className="w-full h-auto object-cover"
                />

                {/* Image Caption */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-8"
                >
                  <p className="text-white font-black text-sm sm:text-base md:text-lg">
                    {caseStudy.images[currentImageIndex].caption}
                  </p>
                </motion.div>

                {/* Navigation Buttons */}
                {caseStudy.images.length > 1 && (
                  <>
                    <motion.button
                      onClick={prevImage}
                      whileHover={{ scale: 1.15, x: -4 }}
                      whileTap={{ scale: 0.9 }}
                      className="absolute left-6 top-1/2 -translate-y-1/2 z-10 w-14 h-14 rounded-full bg-white/95 backdrop-blur-md flex items-center justify-center hover:bg-white transition-all shadow-lg"
                    >
                      <ChevronLeft className="w-7 h-7 text-[var(--color-text-primary)]" />
                    </motion.button>

                    <motion.button
                      onClick={nextImage}
                      whileHover={{ scale: 1.15, x: 4 }}
                      whileTap={{ scale: 0.9 }}
                      className="absolute right-6 top-1/2 -translate-y-1/2 z-10 w-14 h-14 rounded-full bg-white/95 backdrop-blur-md flex items-center justify-center hover:bg-white transition-all shadow-lg"
                    >
                      <ChevronRight className="w-7 h-7 text-[var(--color-text-primary)]" />
                    </motion.button>
                  </>
                )}

                {/* Image Counter */}
                {caseStudy.images.length > 1 && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="absolute top-6 right-6 bg-black/60 backdrop-blur-md px-4 py-2 rounded-full text-white text-xs sm:text-sm font-black border border-white/20"
                  >
                    {currentImageIndex + 1} / {caseStudy.images.length}
                  </motion.div>
                )}
              </div>

              {/* Image Thumbnails */}
              {caseStudy.images.length > 1 && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="flex gap-4 mt-8 overflow-x-auto pb-2 scrollbar-hide"
                >
                  {caseStudy.images.map((image, idx) => (
                    <motion.button
                      key={idx}
                      onClick={() => setCurrentImageIndex(idx)}
                      whileHover={{ scale: 1.08 }}
                      whileTap={{ scale: 0.95 }}
                      className={`shrink-0 w-24 h-24 rounded-xl overflow-hidden border-2 transition-all ${
                        currentImageIndex === idx
                          ? "border-[var(--color-brand-blue)] shadow-lg"
                          : "border-[var(--color-border-card)] hover:border-[var(--color-brand-blue)]/50"
                      }`}
                    >
                      <img
                        src={image.url}
                        alt={image.alt}
                        className="w-full h-full object-cover"
                      />
                    </motion.button>
                  ))}
                </motion.div>
              )}
            </motion.div>
          </Reveal>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative px-4 sm:px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {caseStudy.stats.map((stat, idx) => (
              <Reveal key={stat.label} delay={idx * 0.1}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  className="relative rounded-2xl border border-[var(--color-border-card)] bg-gradient-to-br from-white to-[var(--color-bg-card)] p-8 text-center overflow-hidden group"
                  style={{
                    boxShadow: "0 4px 20px rgba(0,0,0,0.05)",
                  }}
                >
                  {/* Hover gradient */}
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{
                      background: `radial-gradient(circle at top right, color-mix(in srgb, ${caseStudy.accent} 8%, transparent), transparent)`,
                    }}
                  />

                  <div className="relative z-10">
                    <motion.div
                      initial={{ scale: 0.8 }}
                      whileInView={{ scale: 1 }}
                      transition={{ delay: idx * 0.1 + 0.2 }}
                      className="text-3xl sm:text-4xl md:text-5xl font-black font-heading mb-3"
                      style={{ color: caseStudy.accent }}
                    >
                      {stat.value}
                    </motion.div>
                    <div className="text-[10px] sm:text-[11px] font-black uppercase tracking-widest text-[var(--color-text-faint)]">
                      {stat.label}
                    </div>
                  </div>
                </motion.div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="relative px-4 sm:px-6 md:px-12 py-20">
        <div className="max-w-7xl mx-auto">
          <Reveal className="mb-16">
            <div>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="text-2xl sm:text-2xl md:text-3xl lg:text-4xl font-black font-heading text-[var(--color-text-primary)] mb-4"
              >
                Key Features
              </motion.h2>
              <p className="text-[var(--color-text-body)] text-sm sm:text-base md:text-lg font-medium max-w-2xl">
                What makes {caseStudy.title} stand out in the market
              </p>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {caseStudy.features.map((feature, idx) => (
              <Reveal key={feature.title} delay={idx * 0.05}>
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  whileHover={{ y: -4 }}
                  className="flex gap-4 p-6 rounded-2xl border border-[var(--color-border-card)] bg-white hover:border-[var(--color-brand-blue)]/50 transition-all duration-300 group"
                  style={{
                    boxShadow: "0 2px 12px rgba(0,0,0,0.04)",
                  }}
                >
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 10 }}
                    className="w-8 h-8 rounded-full flex items-center justify-center shrink-0 mt-1"
                    style={{
                      background: `color-mix(in srgb, ${caseStudy.accent} 15%, transparent)`,
                    }}
                  >
                    <CheckCircle2
                      className="w-5 h-5"
                      style={{ color: caseStudy.accent }}
                    />
                  </motion.div>
                  <div>
                    <h3 className="text-base sm:text-lg font-black font-heading text-[var(--color-text-primary)] mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[var(--color-text-body)] font-medium leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="relative px-4 sm:px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <Reveal className="mb-12">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-2xl sm:text-2xl md:text-3xl lg:text-4xl font-black font-heading text-[var(--color-text-primary)] mb-4"
            >
              Technologies Used
            </motion.h2>
          </Reveal>

          <div className="flex flex-wrap gap-3">
            {caseStudy.technologies.map((tech, idx) => (
              <Reveal key={tech} delay={idx * 0.05}>
                <motion.span
                  initial={{ opacity: 0, scale: 0.8, y: 10 }}
                  whileInView={{ opacity: 1, scale: 1, y: 0 }}
                  whileHover={{ y: -4, scale: 1.05 }}
                  className="px-5 py-3 rounded-full border text-xs sm:text-sm font-black transition-all duration-300 cursor-default"
                  style={{
                    background: `color-mix(in srgb, ${caseStudy.accent} 10%, white)`,
                    borderColor: `color-mix(in srgb, ${caseStudy.accent} 35%, transparent)`,
                    color: caseStudy.accent,
                    boxShadow: `0 4px 12px color-mix(in srgb, ${caseStudy.accent} 10%, transparent)`,
                  }}
                >
                  {tech}
                </motion.span>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="relative px-4 sm:px-6 md:px-12 py-20">
        <div className="max-w-7xl mx-auto">
          <Reveal className="mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-2xl sm:text-2xl md:text-3xl lg:text-4xl font-black font-heading text-[var(--color-text-primary)] mb-4"
            >
              Results & Impact
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-[var(--color-text-body)] text-sm sm:text-base md:text-lg font-medium max-w-2xl"
            >
              Shipora is a comprehensive logistics management platform designed
              to streamline multi-country shipping operations. Built for
              enterprises managing complex supply chains across multiple
              regions, it provides real-time tracking, role-based access
              control, and advanced routing capabilities.{" "}
            </motion.p>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {caseStudy.results.map((result, idx) => (
              <Reveal key={result} delay={idx * 0.05}>
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  whileHover={{ y: -4 }}
                  className="flex gap-4 p-6 rounded-2xl border border-[var(--color-border-card)] bg-white transition-all duration-300"
                  style={{
                    boxShadow: "0 2px 12px rgba(0,0,0,0.04)",
                  }}
                >
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="w-6 h-6 rounded-full flex items-center justify-center shrink-0 mt-0.5"
                    style={{
                      background: `color-mix(in srgb, ${caseStudy.accent} 15%, transparent)`,
                    }}
                  >
                    <CheckCircle2
                      className="w-5 h-5"
                      style={{ color: caseStudy.accent }}
                    />
                  </motion.div>
                  <p className="text-xs sm:text-sm md:text-base text-[var(--color-text-body)] font-medium leading-relaxed">
                    {result}
                  </p>
                </motion.div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative px-4 sm:px-6 md:px-12 pb-20">
        <div className="max-w-7xl mx-auto">
          <Reveal>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="relative rounded-3xl border border-[var(--color-border-card)] bg-gradient-to-br from-white to-[var(--color-bg-card)] p-10 md:p-16 text-center overflow-hidden"
              style={{
                boxShadow: "0 12px 48px rgba(0,0,0,0.08)",
              }}
            >
              {/* Gradient accent */}
              <div
                className="absolute top-0 inset-x-0 h-1"
                style={{ background: "var(--gradient-brand)" }}
              />

              {/* Background glow */}
              <div
                className="absolute -top-20 -right-20 w-40 h-40 rounded-full blur-3xl opacity-20 pointer-events-none"
                style={{
                  background: `radial-gradient(circle, ${caseStudy.accent}, transparent)`,
                }}
              />

              <div className="relative z-10">
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black font-heading text-[var(--color-text-primary)] mb-6"
                >
                  Ready to build something amazing?
                </motion.h2>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  className="text-[var(--color-text-body)] text-sm sm:text-base md:text-lg font-medium max-w-2xl mx-auto mb-10"
                >
                  Let's discuss your project and create something extraordinary
                  together.
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 px-10 py-4 rounded-xl text-white font-black text-xs sm:text-sm uppercase tracking-widest transition-all duration-300 hover:scale-[1.05] group"
                    style={{
                      background: "var(--gradient-brand)",
                      boxShadow:
                        "0 16px 40px color-mix(in srgb, var(--color-brand-blue) 30%, transparent)",
                    }}
                  >
                    Start Your Project
                    <motion.div className="group-hover:translate-x-1 transition-transform">
                      <ArrowRight className="w-5 h-5" />
                    </motion.div>
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
