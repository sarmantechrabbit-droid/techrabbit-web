import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  BarChart2,
  CalendarX2,
  ShieldCheck,
  Globe2,
  MessageCircle,
  Users,
  ArrowUpRight,
  CheckCircle2,
} from "lucide-react";
import { Link } from "react-router-dom";
import Reveal from "./Reveal";

const promises = [
  {
    icon: BarChart2,
    title: "Transparent Pricing",
    tagline: "Zero surprises.",
    details:
      "Clockify reports every month. You see every hour billed — no black boxes, no inflated invoices. Full visibility, always.",
    proof: "Every hour tracked",
    stat: { value: "100%", label: "Billing visibility" },
    accent: "--color-brand-blue",
  },
  {
    icon: CalendarX2,
    title: "Cancel Anytime",
    tagline: "No lock-in. Ever.",
    details:
      "30-day notice. No penalties. No awkward conversations. Leave whenever you want — we earn your stay every single month.",
    proof: "30-day notice only",
    stat: { value: "0", label: "Exit penalties" },
    accent: "--color-brand-green",
  },
  {
    icon: ShieldCheck,
    title: "NDA on Day 1",
    tagline: "Your IP. Always.",
    details:
      "Signed before line 1 of code. Your ideas, your product, your code — fully protected from the very first conversation.",
    proof: "Signed before kickoff",
    stat: { value: "Day 1", label: "NDA signed" },
    accent: "--color-brand-blue",
  },
  {
    icon: Globe2,
    title: "Your Timezone",
    tagline: "We overlap with you.",
    details:
      "Daily overlap hours with US · UK · CA · AU. No waiting 24 hours for a reply. We work when you work.",
    proof: "US · UK · CA · AU",
    stat: { value: "4+", label: "Timezone overlaps" },
    accent: "--color-brand-green",
  },
  {
    icon: MessageCircle,
    title: "4-Hour Response",
    tagline: "Always reachable.",
    details:
      "Every message answered within 4 business hours. No ghosting. No delays. You're never left wondering what's happening.",
    proof: "Guaranteed response",
    stat: { value: "4h", label: "Max response time" },
    accent: "--color-brand-blue",
  },
  {
    icon: Users,
    title: "Same Team Always",
    tagline: "No rotation. Ever.",
    details:
      "The developer who starts your project finishes it. Full context, zero handoff loss, total accountability.",
    proof: "No team rotation",
    stat: { value: "0", label: "Team rotations" },
    accent: "--color-brand-green",
  },
];

export default function PromisesSection() {
  const [active, setActive] = useState(0);
  const current = promises[active];
  const ActiveIcon = current.icon;

  return (
    <section className="px-4 sm:px-6 md:px-12 bg-[var(--color-bg-page)] relative overflow-hidden">
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
        className="absolute top-0 inset-x-0 h-32 pointer-events-none"
        style={{
          background:
            "linear-gradient(to bottom, var(--color-bg-page), transparent)",
        }}
      />
      <div
        className="absolute bottom-0 inset-x-0 h-32 pointer-events-none"
        style={{
          background:
            "linear-gradient(to top, var(--color-bg-page), transparent)",
        }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* ── Header ── */}
        <Reveal className="lg:mb-16 max-sm:mb-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[var(--color-border-brand-soft)] bg-[var(--color-bg-brand-tint)] text-[var(--color-brand-blue)] text-[10px] font-black tracking-widest uppercase mb-5">
                Our Promises
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-4xl lg:text-6xl font-black font-heading tracking-tight text-[var(--color-text-primary)] leading-[0.95]">
                What you can
                <br />
                <span
                  className="bg-clip-text text-transparent"
                  style={{ backgroundImage: "var(--gradient-brand)" }}
                >
                  always count on.
                </span>
              </h2>
            </div>
            <p className="text-[var(--color-text-body)] text-base max-w-xs leading-relaxed md:text-right">
              Six commitments we make to every client — and keep without
              exception.
            </p>
          </div>
        </Reveal>

        {/* ── Main split layout ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
          {/* LEFT — Active detail panel */}
          <div className="lg:sticky lg:top-28">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
                className="relative rounded-3xl border bg-white overflow-hidden"
                style={{
                  borderColor: "var(--color-border-card)",
                  boxShadow: "0 16px 56px -12px rgba(0,0,0,0.08)",
                }}
              >
                {/* Gradient top strip */}
                <div
                  className="h-1 w-full"
                  style={{ backgroundImage: "var(--gradient-brand)" }}
                />

                {/* Soft radial tint */}
                <div
                  className="absolute top-0 right-0 w-72 h-72 pointer-events-none"
                  style={{
                    background: `radial-gradient(ellipse at top right, color-mix(in srgb, var(${current.accent}) 8%, transparent) 0%, transparent 65%)`,
                  }}
                />

                <div className="relative z-10 p-6 sm:p-10">
                  {/* Step badge + icon */}
                  <div className="flex items-center justify-between mb-8">
                    <span
                      className="inline-flex items-center px-3 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest border"
                      style={{
                        color: `var(${current.accent})`,
                        borderColor: `color-mix(in srgb, var(${current.accent}) 25%, transparent)`,
                        background: `color-mix(in srgb, var(${current.accent}) 8%, transparent)`,
                      }}
                    >
                      Promise {String(active + 1).padStart(2, "0")} of{" "}
                      {promises.length}
                    </span>

                    <div
                      className="w-14 h-14 rounded-2xl flex items-center justify-center"
                      style={{
                        background: `color-mix(in srgb, var(${current.accent}) 10%, transparent)`,
                        border: `1px solid color-mix(in srgb, var(${current.accent}) 20%, transparent)`,
                      }}
                    >
                      <ActiveIcon
                        className="w-6 h-6"
                        style={{ color: `var(${current.accent})` }}
                      />
                    </div>
                  </div>

                  {/* Tagline */}
                  <p
                    className="text-[10px] font-black uppercase tracking-widest mb-3"
                    style={{ color: `var(${current.accent})` }}
                  >
                    {current.tagline}
                  </p>

                  {/* Title */}
                  <h3 className="text-2xl sm:text-3xl md:text-4xl font-black font-heading text-[var(--color-text-primary)] tracking-tight leading-tight mb-4">
                    {current.title}
                  </h3>

                  {/* Details */}
                  <p className="text-[var(--color-text-body)] text-base leading-relaxed mb-8">
                    {current.details}
                  </p>

                  {/* Proof row */}
                  <div
                    className="flex items-center gap-3 rounded-2xl border px-5 py-4 mb-8"
                    style={{
                      background: "var(--color-bg-card-light)",
                      borderColor: "var(--color-border-light)",
                    }}
                  >
                    <CheckCircle2
                      className="w-4 h-4 shrink-0"
                      style={{ color: `var(${current.accent})` }}
                    />
                    <span className="text-sm font-semibold text-[var(--color-text-dark)]">
                      {current.proof}
                    </span>
                  </div>

                  {/* Stat + dots */}
                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                    {/* Big stat */}
                    <div
                      className="rounded-2xl border px-6 py-4"
                      style={{
                        background: `color-mix(in srgb, var(${current.accent}) 6%, transparent)`,
                        borderColor: `color-mix(in srgb, var(${current.accent}) 20%, transparent)`,
                      }}
                    >
                      <div
                        className="text-3xl sm:text-4xl font-black font-heading leading-none"
                        style={{ color: `var(${current.accent})` }}
                      >
                        {current.stat.value}
                      </div>
                      <div className="text-[9px] font-black uppercase tracking-widest text-[var(--color-text-muted)] mt-1">
                        {current.stat.label}
                      </div>
                    </div>

                    {/* Nav dots */}
                    <div className="flex flex-col items-end gap-3">
                      <div className="flex gap-2">
                        {promises.map((_, i) => (
                          <button
                            key={i}
                            onClick={() => setActive(i)}
                            className="rounded-full transition-all duration-300"
                            style={{
                              width: active === i ? 20 : 8,
                              height: 8,
                              background:
                                active === i
                                  ? `var(${current.accent})`
                                  : "var(--color-border-subtle)",
                            }}
                          />
                        ))}
                      </div>
                      <button
                        onClick={() =>
                          setActive((active + 1) % promises.length)
                        }
                        className="flex items-center gap-1.5 text-[10px] font-black uppercase tracking-widest transition-colors duration-300"
                        style={{ color: `var(${current.accent})` }}
                      >
                        Next
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* RIGHT — Clickable promise list */}
          <div className="flex flex-col gap-3">
            {promises.map((item, idx) => {
              const Icon = item.icon;
              const isActive = active === idx;
              return (
                <motion.button
                  key={item.title}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.07, duration: 0.45 }}
                  viewport={{ once: true }}
                  onClick={() => setActive(idx)}
                  className="w-full text-left relative rounded-2xl border overflow-hidden transition-all duration-350"
                  style={{
                    background: isActive
                      ? `color-mix(in srgb, var(${item.accent}) 5%, white)`
                      : "white",
                    borderColor: isActive
                      ? `var(${item.accent})`
                      : "var(--color-border-card)",
                    boxShadow: isActive
                      ? `0 8px 32px -8px color-mix(in srgb, var(${item.accent}) 20%, transparent)`
                      : "0 2px 8px rgba(0,0,0,0.04)",
                  }}
                >
                  {/* Left accent bar */}
                  <div
                    className="absolute left-0 top-3 bottom-3 w-[3px] rounded-full transition-all duration-350"
                    style={{
                      background: isActive
                        ? `var(${item.accent})`
                        : "transparent",
                    }}
                  />

                  <div className="pl-6 pr-5 py-5 flex items-center gap-4">
                    {/* Icon */}
                    <div
                      className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0 transition-all duration-350"
                      style={{
                        background: isActive
                          ? `color-mix(in srgb, var(${item.accent}) 12%, transparent)`
                          : "var(--color-bg-card)",
                      }}
                    >
                      <Icon
                        className="w-5 h-5 transition-colors duration-350"
                        style={{
                          color: isActive
                            ? `var(${item.accent})`
                            : "var(--color-text-disabled)",
                        }}
                      />
                    </div>

                    {/* Text */}
                    <div className="flex-1 min-w-0">
                      <p
                        className="text-[9px] font-black uppercase tracking-widest mb-0.5 transition-colors duration-300"
                        style={{
                          color: isActive
                            ? `var(${item.accent})`
                            : "var(--color-text-faint)",
                        }}
                      >
                        {item.tagline}
                      </p>
                      <h4
                        className="text-sm font-black font-heading tracking-tight transition-colors duration-300"
                        style={{
                          color: isActive
                            ? "var(--color-text-primary)"
                            : "var(--color-text-secondary)",
                        }}
                      >
                        {item.title}
                      </h4>
                    </div>

                    {/* Stat */}
                    <div className="text-right shrink-0">
                      <div
                        className="text-base font-black font-heading transition-colors duration-300"
                        style={{
                          color: isActive
                            ? `var(${item.accent})`
                            : "var(--color-text-faint)",
                        }}
                      >
                        {item.stat.value}
                      </div>
                      <div className="text-[8px] font-black uppercase tracking-widest text-[var(--color-text-faint)]">
                        {item.stat.label}
                      </div>
                    </div>

                    {/* Arrow */}
                    <ArrowUpRight
                      className="w-4 h-4 shrink-0 transition-all duration-300"
                      style={{
                        color: isActive
                          ? `var(${item.accent})`
                          : "var(--color-text-faint)",
                        transform: isActive ? "rotate(0deg)" : "rotate(45deg)",
                        opacity: isActive ? 1 : 0.4,
                      }}
                    />
                  </div>
                </motion.button>
              );
            })}

            {/* CTA card */}
            {/* <Reveal delay={0.4}>
              <div
                className="rounded-2xl p-px mt-1"
                style={{ backgroundImage: "var(--gradient-brand)" }}
              >
                <div
                  className="rounded-[calc(1rem-1px)] px-6 py-5 flex items-center justify-between gap-4"
                  style={{ background: "#0a0a0a" }}
                >
                  <div>
                    <p className="text-[9px] font-black uppercase tracking-widest text-[var(--color-brand-green)] mb-1">
                      Backed by all 6 promises
                    </p>
                    <h4 className="text-white font-black font-heading text-base tracking-tight">
                      Ready to build with us?
                    </h4>
                  </div>
                  <Link
                    to="/contact"
                    className="shrink-0 flex items-center gap-2 px-5 py-2.5 rounded-xl text-white font-black text-[10px] uppercase tracking-widest transition-all duration-300 hover:scale-105"
                    style={{
                      backgroundImage: "var(--gradient-brand)",
                      boxShadow: "0 8px 20px var(--color-brand-glow)",
                    }}
                  >
                    Start now
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </Reveal> */}
          </div>
        </div>
      </div>
    </section>
  );
}
