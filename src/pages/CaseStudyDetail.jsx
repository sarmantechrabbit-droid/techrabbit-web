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
import img2 from "../assets/Dashboard/oppvia.png";
import oppvia2 from "../assets/Dashboard/oppvia2.png";
import oppvia3 from "../assets/Dashboard/oppvia3.png";
import oppvia4 from "../assets/Dashboard/oppvia4.png";
import oppvia5 from "../assets/Dashboard/oppvia5.png";
import oppvia6 from "../assets/Dashboard/oppvia6.png";
import oppvia7 from "../assets/Dashboard/oppvia7.png";

import img3 from "../assets/Dashboard/lexa.png";
import lexa1 from "../assets/Dashboard/lexa1.png";
import lexa2 from "../assets/Dashboard/lexa2.png";
import lexa3 from "../assets/Dashboard/lexa3.png";
import lexa4 from "../assets/Dashboard/lexa4.png";
import lexa5 from "../assets/Dashboard/lexa5.png";
import lexa6 from "../assets/Dashboard/lexa6.png";
import lexa7 from "../assets/Dashboard/lexa7.png";
import lexa8 from "../assets/Dashboard/lexa8.png";

import parentician1 from "../assets/Dashboard/parentician1.png";
import parentician2 from "../assets/Dashboard/parentician2.png";
import parentician3 from "../assets/Dashboard/parentician3.png";
import parentician4 from "../assets/Dashboard/parentician4.png";
import parentician5 from "../assets/Dashboard/parentician5.png";
import parentician6 from "../assets/Dashboard/parentician6.png";

import img4 from "../assets/Dashboard/Parentician.png";

const caseStudies = [
  {
    id: 1,
    slug: "parentician",
    title: "Parentician",
    category: "Affiliate Dashboard / Parenting Platform",
    description:
      "Parentician is a modern parenting-focused digital platform designed to provide guidance, resources, and support for parents. The platform aims to simplify the parenting journey by offering structured information, health-related insights, and user-friendly tools that enhance child development awareness and decision-making.",
    fullDescription:
      "Parentician is a health and parenting-centric web platform built to support parents with reliable, easy-to-access information and tools. The platform focuses on improving user experience by combining educational content, intuitive navigation, and a clean interface.\n\nThe goal of the project was to redesign and modernize the digital experience, making it more engaging, responsive, and accessible across all devices. The platform aligns with the growing need for digital parenting solutions, where users seek trusted, well-structured, and easy-to-understand guidance for child growth and development. Parenting platforms today emphasize structured, research-backed information to help families make better decisions.",
    images: [
      {
        url: img4,
        alt: "Parentician Dashboard Overview",
        caption: "Centralized Affiliate Dashboard",
      },
      {
        url: parentician1,
        alt: "Parentician Payout Request",
        caption: "Payout Request",
      },
      // {
      //   url: parentician2,
      //   alt: "Parentician Account Settings",
      //   caption: "Account Settings",
      // },
      {
        url: parentician3,
        alt: "Patients Directory",
        caption: "Patients Directory",
      },
      {
        url: parentician4,
        alt: "Earnings & Reports",
        caption: "Earnings & Reports",
      },
      {
        url: parentician5,
        alt: "Parentician My Availability",
        caption: "My Availability",
      },
      {
        url: parentician6,
        alt: "Parentician Appointments",
        caption: "Appointments",
      },
    ],
    accent: "var(--color-brand-blue)",
    accentVar: "--color-brand-blue",
    // stats: [
    //   { label: "Total Referrals", value: "51+" },
    //   { label: "Total Earnings", value: "₹19K+" },
    //   { label: "Tools Usage", value: "47+" },
    // ],
    features: [
      {
        title: "Modern and clean UI/UX design",
        description: "Contemporary interface with intuitive user experience",
      },
      {
        title: "Fully responsive layout",
        description: "Optimized for mobile, tablet, and desktop devices",
      },
      {
        title: "Structured content sections",
        description: "Easy navigation with well-organized information",
      },
      {
        title: "Search and filtering functionality",
        description: "Quick access to relevant content and resources",
      },
      {
        title: "Optimized performance",
        description: "Fast loading and smooth user interactions",
      },
      {
        title: "User-friendly dashboard interface",
        description: "Intuitive dashboard for different user flows",
      },
      {
        title: "Scalable component-based architecture",
        description: "Modular frontend system for future growth",
      },
    ],
    technologies: ["React", "Tailwind CSS", "Node.js", "Firebase"],
    challenges: [
      "Creating a clean yet informative UI without overwhelming users",
      "Ensuring consistent responsiveness across all screen sizes",
      "Structuring complex parenting and health-related content clearly",
      "Balancing visual design with usability",
      "Maintaining performance while handling dynamic content",
      "Designing an intuitive dashboard for different user flows",
    ],
    results: [
      "Improved overall user experience and accessibility",
      "Enhanced visual consistency across all pages",
      "Faster navigation and better content discoverability",
      "Increased responsiveness across all devices",
      "More structured and scalable frontend system",
    ],
    resultsDescription:
      "The redesigned Parentician platform delivers a seamless and modern user experience, making it easier for parents to access important information quickly. The improved layout and responsive design ensure usability across all devices, while the structured interface enhances readability and engagement.\n\nThe project successfully transformed the platform into a more intuitive and scalable system, supporting future growth and feature expansion while maintaining performance and usability.",
  },

  {
    id: 2,
    slug: "oppvia",
    title: "Oppvia",
    category: "AI Hiring Platform",
    description:
      "Oppvia is an AI-powered recruitment platform designed to streamline hiring through intelligent automation. It features an advanced AI Interview system that simulates real interview environments using voice interaction, natural language processing, and emotion detection—helping candidates prepare effectively while enabling recruiters to screen and evaluate talent efficiently.",
    fullDescription:
      "Oppvia is an AI-powered recruitment platform designed to streamline hiring through intelligent automation. It features an advanced AI Interview system that simulates real interview environments using voice interaction, natural language processing, and emotion detection—helping candidates prepare effectively while enabling recruiters to screen and evaluate talent efficiently.\n\nThe platform includes adaptive question generation based on job descriptions and resumes, voice-based interaction using Text-to-Speech (ElevenLabs) and Speech-to-Text (Web Speech API), real-time emotion detection using Face-api.js, and an automated scoring engine that evaluates responses on a 0–10 scale. It provides personalized feedback with actionable insights and PDF report generation including scores, feedback, and transcripts.\n\nThe platform architecture includes a Talent Portal for job discovery and AI interview practice, a Recruiter Dashboard for job posting and candidate screening, an Admin Panel for user management and platform monitoring, and a Marketing Website for branding and lead generation. Core recruitment features include smart job matching, application tracking system, resume management, interview scheduling, and real-time notifications.\n\nWith flexible pricing plans, Razorpay integration, credit-based model, and subscription management workflows, Oppvia delivers a next-generation recruitment experience where AI enhances both candidate preparation and recruiter efficiency.",
    images: [
      {
        url: img2,
        alt: "Oppvia Interview Simulator",
        caption: "AI Interview Simulator",
      },
      {
        url: oppvia2,
        alt: "Oppvia Candidate Dashboard",
        caption: "Candidate Dashboard",
      },
      {
        url: oppvia3,
        alt: "Oppvia Job Postings",
        caption: "Job Postings",
      },
      {
        url: oppvia4,
        alt: "Oppvia AI-POWERED INTERVIEW",
        caption: "AI-POWERED INTERVIEW",
      },
      {
        url: oppvia5,
        alt: "Oppvia Prepare for Your",
        caption: "Prepare for Your",
      },
      {
        url: oppvia6,
        alt: "Oppvia interview-setups",
        caption: "interview-setups",
      },
      {
        url: oppvia7,
        alt: "Oppvia Video interview",
        caption: "Video Interview",
      },
    ],
    accent: "var(--color-brand-green)",
    accentVar: "--color-brand-green",
    // stats: [
    //   { label: "AI Modules", value: "5+" },
    //   { label: "Tiers", value: "3" },
    //   { label: "Status", value: "Live" },
    // ],
    features: [
      {
        title: "AI Interview System",
        description:
          "Adaptive Question Generation: AI dynamically generates interview questions based on job descriptions, resumes, and candidate responses. Voice-Based Interaction: Natural conversations using Text-to-Speech (ElevenLabs) and Speech-to-Text (Web Speech API). Real-Time Emotion Detection: Facial expression analysis using Face-api.js to assess confidence and engagement. ",
      },
      {
        title: "Platform Architecture",
        description:
          "Talent Portal: Job discovery, AI interview practice, and application tracking. Recruiter Dashboard: Job posting, candidate screening, and hiring workflow management. Admin Panel: User management, subscriptions, and platform monitoring. Marketing Website: Public-facing site for branding and lead generation.",
      },
      {
        title: "Core Recruitment Features",
        description:
          "Smart Job Matching: AI-based job recommendations tailored to candidate profiles. Application Tracking System: End-to-end lifecycle management. Resume Management: Upload, parsing, and analysis capabilities. Interview Scheduling: Integrated calendar coordination. Real-Time Notifications: Push notifications and email alerts.",
      },
      {
        title: "Subscription & Payments",
        description:
          "Flexible Pricing Plans: Tier-based subscriptions with AI interview credits. Razorpay Integration: Secure payment processing with webhook support. Credit-Based Model: Pay-per-interview system. Subscription Management: Upgrade, downgrade, and cancellation workflows.",
      },
    ],
    technologies: [
      "React 19",
      "Node.js + Express",
      "PostgreSQL",
      "Socket.io",
      "OpenAI GPT-4o-mini",
    ],
    challenges: [
      "Building realistic AI interview experiences with voice interaction",
      "Ensuring fair and unbiased candidate evaluation through AI",
      "Integrating multiple AI models (OpenAI, Gemini, ElevenLabs) seamlessly",
      "Implementing real-time emotion detection with Face-api.js",
      "Creating a scalable multi-tenant platform architecture",
      "Handling real-time communication via Socket.io",
      "Integrating payment gateway (Razorpay) with webhook support",
    ],
    results: [
      "60–70% Reduction in manual screening time for recruiters",
      "Unlimited Practice Interviews for candidates, improving confidence and readiness",
      "Standardized Evaluation eliminating bias in early-stage screening",
      "High Scalability enabling thousands of simultaneous AI interviews",
      "Faster Hiring Pipeline: Reduced time-to-hire through automated screening",
      "Improved Candidate Quality: AI pre-filtering ensures better candidate selection",
      "Enhanced Candidate Experience: 24/7 interview practice availability",
      "Data-Driven Hiring: Structured scoring enables objective comparisons",
      "Realistic Interview Simulation with voice interaction",
      "Instant Feedback Loop for faster learning and improvement",
      "Progress Tracking through historical performance reports",
      "Cross-Device Accessibility via web-based platform",
    ],
    resultsDescription:
      "Oppvia represents a next-generation recruitment platform where AI enhances both candidate preparation and recruiter efficiency. By combining intelligent automation, real-time interaction, and data-driven insights, the platform transforms traditional hiring into a faster, fairer, and more scalable process.\n\nThe platform delivers 60–70% reduction in manual screening time for recruiters while providing unlimited practice interviews for candidates to improve confidence and readiness. Standardized evaluation eliminates bias in early-stage screening, and high scalability enables thousands of simultaneous AI interviews.\n\nBusiness impact includes faster hiring pipeline through automated screening, improved candidate quality through AI pre-filtering, enhanced candidate experience with 24/7 interview practice availability, and data-driven hiring with structured scoring enabling objective comparisons. User experience improvements include realistic interview simulation with voice interaction, instant feedback loop for faster learning, progress tracking through historical performance reports, and cross-device accessibility via web-based platform.",
  },
  {
    id: 3,
    slug: "lexa",
    title: "Lexa",
    category: "Algo Trading",
    description:
      "Lexa Technologies is a production-grade algorithmic trading platform that seamlessly connects TradingView signals with Interactive Brokers (IBKR) for automated trade execution. The system enables real-time monitoring, advanced risk management, and scalable multi-client operations through a modular full-stack architecture.",
    fullDescription:
      "Lexa Technologies is a production-grade algorithmic trading platform that seamlessly connects TradingView signals with Interactive Brokers (IBKR) for automated trade execution. The system enables real-time monitoring, advanced risk management, and scalable multi-client operations through a modular full-stack architecture.\n\nThe platform features TradingView webhook integration for automatic signal reception, real-time signal processing powered by Socket.io, and comprehensive signal lifecycle management. It includes advanced risk management features like a global kill switch, dynamic position sizing, and symbol control systems. Financial operations include advanced P&L tracking, Stripe integration for subscriptions, and wallet integration with IBKR accounts. The system provides live connectivity dashboards, comprehensive audit logs, trading reports, and Telegram alerts for instant notifications.\n\nWith role-based access control, multi-tenant architecture, two-factor authentication, and flexible subscription tiers, Lexa Technologies delivers a robust, end-to-end algorithmic trading solution combining real-time systems, financial integrations, and scalable architecture.",
    images: [
      {
        url: img3,
        alt: "Lexa Trading Dashboard",
        caption: "Trading Dashboard",
      },
      {
        url: lexa1,
        alt: "Lexa Trade Monitor",
        caption: "Trade Monitor",
      },
      {
        url: lexa2,
        alt: "Lexa Signal Logs",
        caption: "Signal Logs",
      },
      {
        url: lexa3,
        alt: "Lexa Thread Connectivity",
        caption: "Thread Connectivity",
      },
      // {
      //   url: lexa4,
      //   alt: "Lexa Trading Dashboard",
      //   caption: "Trading Dashboard",
      // },
      // {
      //   url: lexa5,
      //   alt: "Lexa Trade Monitor",
      //   caption: "Trade Monitor",
      // },
      {
        url: lexa6,
        alt: "Lexa Admin Controls",
        caption: "Admin Controls",
      },
      {
        url: lexa7,
        alt: "Lexa Configuration",
        caption: "Configuration",
      },
      // {
      //   url: lexa8,
      //   alt: "Lexa Thread Connectivity",
      //   caption: "Thread Connectivity",
      // },
    ],
    accent: "var(--color-brand-blue)",
    accentVar: "--color-brand-blue",
    // stats: [
    //   { label: "Production", value: "Live" },
    //   { label: "Backends", value: "2" },
    //   { label: "Signals", value: "Real-time" },
    // ],
    features: [
      {
        title: "Trade Execution & Signal Management",
        description:
          "TradingView Webhook Integration: Automatically receives and processes trading signals via webhooks. Real-time Signal Processing: Powered by Socket.io for instant communication. Signal Lifecycle Management: End-to-end tracking (PENDING → SENT → FILLED / CANCELLED / DELETED). Retrigger & Flatten Controls: Admin tools to retrigger failed signals and instantly close positions globally or per client.",
      },
      {
        title: "Risk Management & Safety",
        description:
          "Global Kill Switch: Instantly halt all trading activity across the platform. Dynamic Position Sizing: Configurable rules per client and trading symbol. Symbol Control System: Whitelist/blacklist supported instruments. VPS Node Management: Distributed VPS nodes for redundancy and load balancing.",
      },
      {
        title: "Financial Operations",
        description:
          "Advanced P&L Tracking: Real-time realized, unrealized, and daily profit/loss analytics. Stripe Integration: Subscription lifecycle management (checkout, billing, cancellations). Wallet Integration: IBKR account linking and balance tracking per client. Cross-Service Billing Sync: Seamless synchronization between admin and client systems.",
      },
      {
        title: "Monitoring & Reporting",
        description:
          "Live Connectivity Dashboard: Real-time tracking of client connections and trade execution status. Comprehensive Audit Logs: Full traceability of system and user actions. Trading Reports: Execution summaries, P&L insights, and custom date-range analytics. Telegram Alerts: Instant trade and system notifications via bot integration.",
      },
      {
        title: "User Management",
        description:
          "Role-Based Access Control: Separate admin and client environments with scoped permissions. Multi-Tenant Architecture: Manage multiple clients from a single admin panel. Two-Factor Authentication (2FA): Enhanced login security. Flexible Subscription Tiers: Feature-based plan management.",
      },
    ],
    technologies: [
      "React 19 + Vite 7",
      "Node.js + Express 5",
      "PostgreSQL",
      "Socket.io 4.8",
      "Python + IBKR API",
      "Stripe 19.3",
      "Tailwind CSS 4.1",
      "Recharts 3.6",
      "JWT Authentication",
    ],
    challenges: [
      "Achieving sub-millisecond execution latency",
      "Handling high-frequency signal processing",
      "Ensuring reliable broker connectivity",
      "Building event-driven real-time architecture",
      "Implementing multi-tenant data isolation",
      "Integrating multiple financial services (IBKR, Stripe)",
    ],
    results: [
      "Full Automation: Eliminated manual trading by linking TradingView signals directly to IBKR",
      "Scalable Infrastructure: Supports multiple clients with isolated data and shared services",
      "Risk Reduction: Built-in safeguards like kill switch and position limits",
      "Client Transparency: Real-time dashboards and audit logs increase trust",
      "Operational Efficiency: Centralized admin panel for monitoring and management",
      "Event-Driven System: Sub-second execution using Socket.io architecture",
      "Service Separation: Independent admin and client backends with synchronized data",
      "Fault Tolerance: Retry mechanisms, VPS health monitoring, and connection tracking",
      "Security Best Practices: JWT authentication, bcrypt hashing, and strict API validation",
      "Flexible Deployment: Supports local, VPS, and cloud-based environments",
    ],
    resultsDescription:
      "Lexa Technologies is a robust, end-to-end algorithmic trading solution that combines real-time systems, financial integrations, and scalable architecture. It demonstrates strong expertise in full-stack development, event-driven systems, and fintech infrastructure.\n\nThe platform successfully eliminates manual trading by connecting TradingView signals directly to IBKR execution. With a multi-tenant architecture, it supports numerous clients with isolated data and shared infrastructure. Built-in safeguards like the kill switch and position controls provide circuit-breaker functionality during market volatility. Real-time P&L dashboards and audit logs build client trust, while a centralized admin panel manages client onboarding, VPS allocation, and trade monitoring.\n\nTechnical achievements include sub-second execution using Socket.io architecture, independent admin and client backends with synchronized data, fault tolerance through retry mechanisms and VPS health monitoring, security best practices with JWT authentication and bcrypt hashing, and flexible deployment supporting local, VPS, and cloud-based environments.",
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
                <p className="text-sm sm:text-base md:text-lg text-[var(--color-text-body)] font-medium leading-relaxed max-w-4xl">
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
                <div className="absolute top-4 right-6 w-40 h-6 backdrop-blur-md bg-white/30 rounded-md" />
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
                      className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 z-10 w-10 h-10 sm:w-14 sm:h-14 rounded-full bg-white/95 backdrop-blur-md flex items-center justify-center hover:bg-white transition-all shadow-lg"
                    >
                      <ChevronLeft className="w-5 h-5 sm:w-7 sm:h-7 text-[var(--color-text-primary)]" />
                    </motion.button>

                    <motion.button
                      onClick={nextImage}
                      whileHover={{ scale: 1.15, x: 4 }}
                      whileTap={{ scale: 0.9 }}
                      className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 z-10 w-10 h-10 sm:w-14 sm:h-14 rounded-full bg-white/95 backdrop-blur-md flex items-center justify-center hover:bg-white transition-all shadow-lg"
                    >
                      <ChevronRight className="w-5 h-5 sm:w-7 sm:h-7 text-[var(--color-text-primary)]" />
                    </motion.button>
                  </>
                )}

                {/* Image Counter */}
                {caseStudy.images.length > 1 && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="absolute top-4 sm:top-6 right-4 sm:right-6 bg-black/60 backdrop-blur-md px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-white text-[10px] sm:text-xs sm:text-sm font-black border border-white/20"
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
            {caseStudy.stats?.map((stat, idx) => (
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
      <section className="relative px-4 sm:px-6 md:px-12 py-12 sm:py-16 md:py-20">
        <div className="max-w-7xl mx-auto">
          <Reveal className="mb-6 sm:mb-10 md:mb-12">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="
          text-lg sm:text-2xl md:text-3xl lg:text-4xl 
          font-black font-heading 
          text-[var(--color-text-primary)]
          mb-3 sm:mb-4
        "
            >
              Technologies Used
            </motion.h2>
          </Reveal>

          {/* Responsive grid */}
          <div
            className="
        grid 
        grid-cols-2 
        xs:grid-cols-3 
        sm:grid-cols-4 
        md:grid-cols-5 
        lg:grid-cols-6
        gap-2 sm:gap-3 md:gap-4
      "
          >
            {caseStudy.technologies.map((tech, idx) => (
              <Reveal key={tech} delay={idx * 0.05}>
                <motion.span
                  initial={{ opacity: 0, scale: 0.85, y: 10 }}
                  whileInView={{ opacity: 1, scale: 1, y: 0 }}
                  whileHover={{ y: -3, scale: 1.05 }}
                  className="
              flex items-center justify-center
              w-full
              px-2 sm:px-3 md:px-4
              py-2 sm:py-2.5 md:py-3
              rounded-full border
              text-[10px] sm:text-xs md:text-sm
              font-semibold sm:font-bold
              transition-all duration-300
              text-center
              break-words
            "
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
      <section className="relative px-4 sm:px-6 md:px-12 ">
        <div className="max-w-7xl mx-auto ">
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
              className="text-[var(--color-text-body)] text-sm sm:text-base md:text-lg font-medium max-w-4xl"
            >
              {caseStudy.resultsDescription}
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
      <section className="relative px-4 sm:px-6 md:px-12 py-20">
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
