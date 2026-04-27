import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Reveal from "../Reveal";
import { Share2, Mail } from "lucide-react";

import kunalgangvani from "../../assets/team/Kunal Gangvani.png";
import nehagangvani from "../../assets/team/Nehagangvani.png";

import sarman from "../../assets/team/sarman.png";
import aashish from "../../assets/team/aashish.png";
import dharmik from "../../assets/team/dharmik.png";
import dhisant from "../../assets/team/dhisant.png";
import dhrumit from "../../assets/team/dhrumit.png";
import pramod from "../../assets/team/pramod.png";
import rushit from "../../assets/team/rushit.png";
import kalp from "../../assets/team/kalp.png";
import mamta from "../../assets/team/Mamta.png";

const team = [
  {
    name: "Kunal Gangvani",
    role: "Founder & Project Manager ",
    details:
      "Leading strategy since 2019. Product visionary with 6+ years experience.",
    image: kunalgangvani,
    accent: "--color-brand-blue",
    socials: { linkedin: "#", email: "#" },
  },
  {
    name: "Neha Gangvani",
    role: "Co-Founder & Business Analyst",
    details:
      "Analyzing business needs and turning data into actionable insights.",
    image: nehagangvani,
    accent: "--color-brand-green",
    socials: { linkedin: "#", email: "#" },
  },
  {
    name: "Mamta Kothari",
    role: "Human Resources",
    badge: "HR",
    details: "Building strong teams and positive workplace culture.",
    image: mamta,
    accent: "--color-brand-green",
    socials: { linkedin: "#", email: "#" },
  },
  {
    name: "Sarman Parmar",
    role: "Full-Stack Developer",
    details:
      "Building and maintaining both frontend and backend systems seamlessly.",
    image: sarman,
    accent: "--color-brand-blue",
    socials: { linkedin: "#", email: "#" },
  },
  {
    name: "Dharmik Odedara",
    role: "Full-Stack Developer",
    details:
      "Creating end-to-end solutions for smooth and powerful applications.",
    image: dharmik,
    accent: "--color-brand-green",
    socials: { linkedin: "#", email: "#" },
  },
  {
    name: "Dhrumit Panchal",
    role: "Full-Stack Developer",
    details:
      "Developing scalable applications across frontend and backend technologies.",
    image: dhrumit,
    accent: "--color-brand-blue",
    socials: { linkedin: "#", email: "#" },
  },
  {
    name: "Dishant Sangani",
    role: "Full-Stack Developer",
    details: "React, Node.js, PostgreSQL. Building scalable applications.",
    image: dhisant,
    accent: "--color-brand-green",
    socials: { linkedin: "#", email: "#" },
  },
  {
    name: "Ruchit Radadiya",
    role: "Frontend & Shopify Developer",
    details: "Communication & Growth. Your dedicated point of contact.",
    image: rushit,
    accent: "--color-brand-green",
    socials: { linkedin: "#", email: "#" },
  },
  {
    name: "Pramod Kale",
    role: "QA Automation Engineer",
    details: "Ensuring product quality through automated testing.",
    image: pramod,
    accent: "--color-brand-blue",
    socials: { linkedin: "#", email: "#" },
  },

  {
    name: "Ashish Jolapara",
    role: "Ui / Ux Designer & Motion Designer",
    badge: "UI/UX",
    details: "Designing intuitive interfaces with engaging motion experiences.",
    image: aashish,
    accent: "--color-brand-blue",
    socials: { linkedin: "#", email: "#" },
  },
  {
    name: "Kalp Prajapati",
    role: "Graphic Designer",
    details:
      "Creating visually compelling designs that communicate ideas effectively.",
    image: kalp,
    accent: "--color-brand-green",
    socials: { linkedin: "#", email: "#" },
  },
];

function TeamCard({ member, idx }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: idx * 0.08, duration: 0.5 }}
      viewport={{ once: true }}
      className="group relative h-full min-w-[280px] w-[80vw] sm:w-[50vw] md:w-auto md:min-w-0 snap-center"
    >
      <motion.div
        className="relative rounded-3xl overflow-hidden h-full flex flex-col border transition-all duration-300"
        style={{
          borderColor: "var(--color-border-card)",
          boxShadow: "0 2px 12px rgba(0,0,0,0.04)",
        }}
      >
        {/* Image Container */}
        <div className="relative h-80 overflow-hidden bg-[var(--color-bg-card)] rounded-xl">
          <div className="relative h-full w-full">
            <motion.img
              src={member.image}
              alt={member.name}
              className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-500"
              initial={{ scale: 1 }}
              whileHover={{ scale: 1.05 }}
            />
          </div>

          {/* Top Accent Bar */}
          <div
            className="absolute top-0 inset-x-0 h-1"
            style={{ background: `var(${member.accent})` }}
          />

          {/* Role Badge */}
          <motion.div
            className="absolute top-4 right-4 px-4 py-2 rounded-full backdrop-blur-md border shadow-sm flex items-center justify-center"
            style={{
              background: "rgba(255, 255, 255, 0.9)",
              borderColor: `var(${member.accent})`,
            }}
            initial={{ y: -10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
          >
            <span
              className="text-[10px] font-bold uppercase tracking-widest leading-none"
              style={{ color: `var(${member.accent})` }}
            >
              {member.badge || member.role.split(" ")[0]}
            </span>
          </motion.div>
        </div>

        {/* Content Section */}
        <div className="flex-1 p-6 flex flex-col">
          <div className="mb-4">
            <h3 className="text-lg font-bold font-heading text-(--color-text-primary) tracking-tight mb-1">
              {member.name}
            </h3>
            <p
              className="text-[10px] font-bold uppercase tracking-widest transition-colors duration-300"
              style={{ color: `var(${member.accent})` }}
            >
              {member.role}
            </p>
          </div>

          <div className="mb-4 flex-1">
            <p className="text-sm text-(--color-text-body) leading-relaxed mb-4 font-medium">
              {member.details}
            </p>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function AboutTeam() {
  return (
    <section className="pt-16 px-6 md:px-12 bg-(--color-bg-page) overflow-hidden relative">
      {/* Dot grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle, var(--color-grid-dot) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
          opacity: 0.5,
        }}
      />
      <div
        className="absolute top-0 inset-x-0 h-28 pointer-events-none"
        style={{
          background:
            "linear-gradient(to bottom, var(--color-bg-page), transparent)",
        }}
      />
      <div
        className="absolute bottom-0 inset-x-0 h-28 pointer-events-none"
        style={{
          background:
            "linear-gradient(to top, var(--color-bg-page), transparent)",
        }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <Reveal className="text-center lg:mb-24 max-sm:mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[var(--color-border-brand-soft)] bg-[var(--color-bg-brand-tint)] text-[var(--color-brand-blue)] text-[10px] font-black tracking-widest uppercase mb-6">
            Meet Our Team
          </div>
          <h2 className="text-4xl md:text-5xl font-bold font-heading tracking-tight text-[var(--color-text-primary)] leading-[1.2] mb-5">
            Everyone who works
            <br />
            <span
              className="bg-clip-text text-transparent"
              style={{ backgroundImage: "var(--gradient-brand)" }}
            >
              on your product
            </span>
          </h2>
          <p className="text-[var(--color-text-body)] text-base max-w-2xl mx-auto leading-relaxed font-medium">
            100% inhouse. One office. Every person in the same room in
            Ahmedabad.
          </p>
        </Reveal>

        {/* Mobile: Single horizontal slider with all cards */}
        <div className="flex overflow-x-auto pb-8 gap-6 mb-6 scrollbar-hide snap-x snap-mandatory -mx-6 px-6 md:hidden">
          {team.map((member, idx) => (
            <TeamCard key={member.name + idx} member={member} idx={idx} />
          ))}
        </div>

        {/* Desktop: Row 1 — 3 cards */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 lg:max-w-[75%] lg:mx-auto gap-6 mb-6">
          {team.slice(0, 3).map((member, idx) => (
            <TeamCard key={member.name + idx} member={member} idx={idx} />
          ))}
        </div>

        {/* Desktop: Row 2 — 4 cards */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
          {team.slice(3, 7).map((member, idx) => (
            <TeamCard key={member.name + idx} member={member} idx={idx} />
          ))}
        </div>

        {/* Desktop: Row 3 — 4 cards */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
          {team.slice(7, 11).map((member, idx) => (
            <TeamCard key={member.name + idx} member={member} idx={idx} />
          ))}
        </div>

        {/* Stats Section */}
        <Reveal>
          <div
            className="relative rounded-3xl border overflow-hidden p-8 md:p-12"
            style={{
              background: "white",
              borderColor: "var(--color-border-card)",
              boxShadow: "0 2px 12px rgba(0,0,0,0.04)",
            }}
          >
            {/* Top gradient accent */}
            <div
              className="absolute top-0 inset-x-0 h-1"
              style={{ background: "var(--gradient-brand)" }}
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {/* Left */}
              <div>
                <h3 className="text-2xl md:text-3xl font-bold font-heading text-[var(--color-text-primary)] mb-3 tracking-tight">
                  100% In-house.
                  <br />
                  <span
                    className="bg-clip-text text-transparent"
                    style={{ backgroundImage: "var(--gradient-brand)" }}
                  >
                    Zero compromises. No exceptions.
                  </span>
                </h3>
                <p className="text-[var(--color-text-body)] text-base leading-relaxed font-medium">
                  Every person sits in the same office. Same standup. Same
                  accountability. When you message us, a real team member
                  responds.
                </p>
              </div>

              {/* Right - Stats Grid */}
              <div className="grid grid-cols-3 gap-6">
                {[
                  { value: "0", label: "Freelancers" },
                  { value: "1", label: "Office" },
                  { value: "ISO", label: "Certified" },
                ].map((stat, idx) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    viewport={{ once: true }}
                    className="text-center"
                  >
                    {/* <div className="text-3xl mb-2">{stat.icon}</div> */}
                    <div
                      className="text-4xl font-bold font-heading bg-clip-text text-transparent"
                      style={{ backgroundImage: "var(--gradient-brand)" }}
                    >
                      {stat.value}
                    </div>
                    <div className="text-[11px] font-bold uppercase tracking-widest text-[var(--color-text-faint)] mt-2">
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
