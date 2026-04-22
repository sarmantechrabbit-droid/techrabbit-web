import { motion } from "framer-motion";
import Reveal from "./Reveal";
import { Clock, Globe, MessageSquare } from "lucide-react";

const timezones = [
  {
    region: "Canada & US",
    flag: "🇨🇦 🇺🇸",
    teamTime: "6:30 PM – 9 PM IST",
    yourTime: "Your 9 AM – 11:30 AM",
    accent: "--color-brand-blue",
  },
  {
    region: "UK",
    flag: "🇬🇧",
    teamTime: "2:30 PM – 7 PM IST",
    yourTime: "Your 9 AM – 1:30 PM",
    accent: "--color-brand-green",
  },
  {
    region: "Australia",
    flag: "🇦🇺",
    teamTime: "10 AM – 1:30 PM IST",
    yourTime: "Your 3:30 PM – 7 PM",
    accent: "--color-brand-blue",
  },
];

const commitments = [
  {
    icon: MessageSquare,
    title: "Daily Standups",
    desc: "Every morning in your timezone",
  },
  {
    icon: Clock,
    title: "Slack Responses",
    desc: "Within 2 hours during overlap",
  },
  {
    icon: Globe,
    title: "Calls & Meetings",
    desc: "Scheduled within your working hours",
  },
];

export default function TimezoneOverlap() {
  return (
    <section className="pb-16 sm:pb-20 px-4 sm:px-6 md:px-12 bg-[var(--color-bg-page)] overflow-hidden relative">
      {/* Dot grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle, var(--color-grid-dot) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
          opacity: 0.5,
        }}
      />
      <div className="absolute top-0 inset-x-0 h-28 pointer-events-none"
        style={{ background: "linear-gradient(to bottom, var(--color-bg-page), transparent)" }} />
      <div className="absolute bottom-0 inset-x-0 h-28 pointer-events-none"
        style={{ background: "linear-gradient(to top, var(--color-bg-page), transparent)" }} />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <Reveal className="lg:mb-20 max-sm:mb-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[var(--color-border-brand-soft)] bg-[var(--color-bg-brand-tint)] text-[var(--color-brand-blue)] text-[10px] font-black tracking-widest uppercase mb-6">
              Real Overlap, Every Day
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black font-heading tracking-tight text-[var(--color-text-primary)] leading-[1.1] mb-4">
              We show up when
              <br />
              <span className="bg-clip-text text-transparent" style={{ backgroundImage: "var(--gradient-brand)" }}>
                you're working
              </span>
            </h2>
            <p className="text-[var(--color-text-body)] text-base leading-relaxed">
              No "we'll get back to you tomorrow." Real overlap, every day. Daily standups, Slack responses, and calls — all within your working hours.
            </p>
          </div>
        </Reveal>

        {/* Timezone Cards */}
        <div className="flex gap-6 overflow-x-auto snap-x snap-mandatory md:grid md:grid-cols-3 md:overflow-visible -mx-1 md:mx-0 px-1 md:px-0 w-full scrollbar-hide mb-20"
          style={{ WebkitOverflowScrolling: "touch" }}
        >
          {timezones.map((tz, idx) => (
            <motion.div
              key={tz.region}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className="group relative snap-start shrink-0 w-[84vw] sm:w-[70vw] md:w-auto"
            >
              <div
                className="relative rounded-3xl border overflow-hidden p-8 transition-all duration-300 h-full"
                style={{
                  background: "white",
                  borderColor: "var(--color-border-card)",
                  boxShadow: "0 2px 12px rgba(0,0,0,0.04)",
                }}
              >
                {/* Top accent line */}
                <div
                  className="absolute top-0 inset-x-0 h-1"
                  style={{ background: `var(${tz.accent})` }}
                />

                {/* Flag & Region */}
                <div className="mb-6">
                  <div className="text-4xl mb-3">{tz.flag}</div>
                  <h3 className="text-xl font-black font-heading text-[var(--color-text-primary)] tracking-tight">
                    {tz.region}
                  </h3>
                </div>

                {/* Divider */}
                <div className="h-px bg-[var(--color-border-light)] mb-6" />

                {/* Team Time */}
                <div className="mb-6">
                  <p className="text-[10px] font-black uppercase tracking-widest text-[var(--color-text-faint)] mb-2">
                    Our working hours
                  </p>
                  <p className="text-base font-bold text-[var(--color-text-primary)]">
                    {tz.teamTime}
                  </p>
                </div>

                {/* Your Time */}
                <div>
                  <p className="text-[10px] font-black uppercase tracking-widest mb-2" style={{ color: `var(${tz.accent})` }}>
                    Your working hours
                  </p>
                  <p className="text-base font-bold text-[var(--color-text-primary)]">
                    {tz.yourTime}
                  </p>
                </div>

                {/* Hover indicator */}
                <motion.div
                  className="absolute top-6 right-6 w-3 h-3 rounded-full"
                  style={{ background: `var(${tz.accent})` }}
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Commitment Section */}
        <Reveal>
          <div
            className="relative rounded-3xl border overflow-hidden p-6 sm:p-8 md:p-12"
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

            {/* Header */}
            <div className="mb-12">
              <h3 className="text-xl sm:text-2xl md:text-3xl font-black font-heading text-[var(--color-text-primary)] tracking-tight mb-3">
                What happens during overlap
              </h3>
              <p className="text-[var(--color-text-body)] text-base leading-relaxed max-w-2xl">
                Daily standups, Slack responses, and calls — all within your working hours. No waiting. No delays.
              </p>
            </div>

            {/* Commitment Grid */}
            <div className="flex gap-8 overflow-x-auto snap-x snap-mandatory md:grid md:grid-cols-3 md:overflow-visible -mx-1 md:mx-0 px-1 md:px-0 w-full scrollbar-hide"
              style={{ WebkitOverflowScrolling: "touch" }}
            >
              {commitments.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    viewport={{ once: true }}
                    className="flex gap-4 snap-start shrink-0 w-[84vw] sm:w-[70vw] md:w-auto"
                  >
                    {/* Icon */}
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0 transition-all duration-300"
                      style={{
                        background: "color-mix(in srgb, var(--color-brand-green) 12%, transparent)",
                      }}
                    >
                      <Icon
                        className="w-6 h-6"
                        style={{ color: "var(--color-brand-green)" }}
                      />
                    </div>

                    {/* Content */}
                    <div>
                      <h4 className="text-lg font-black font-heading text-[var(--color-text-primary)] tracking-tight mb-1">
                        {item.title}
                      </h4>
                      <p className="text-sm text-[var(--color-text-body)] leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Bottom highlight */}
            <div className="mt-12 pt-8 border-t border-[var(--color-border-light)]">
              <p className="text-sm text-[var(--color-text-body)] leading-relaxed italic">
                <span className="font-bold text-[var(--color-text-primary)]">Daily standups, Slack responses, and calls</span> — all within your working hours.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
