import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex flex-col justify-center overflow-hidden pt-36 pb-32">
      {/* Background Grid - Premium Look */}
      <div className="absolute inset-0 -z-10 bg-white">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-size-[4rem_4rem] mask-[radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-40"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full">
        <div className="max-w-3xl">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg border border-(--color-border-default) bg-(--color-bg-card-light) text-(--color-text-body) text-[11px] font-semibold mb-10"
          >
            <span>Trusted by founders in 5 countries</span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-[36px] sm:text-6xl md:text-[68px] font-black tracking-[-0.04em] leading-[1.02] text-(--color-text-primary) mb-8 font-heading"
          >
            We build your product. <br />
            <span className="text-(--color-text-muted) font-medium">Then we grow it with you.</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-(--color-text-body) text-lg md:text-xl max-w-xl mb-12 leading-relaxed"
          >
            From idea to live MVP in 30 days — or an ongoing product team on
            subscription. Figma · Full-Stack · QA · AI · BA — all included.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap items-center gap-4 border-b border-(--color-border-default) pb-16"
          >
            <Link
              to="/contact"
              className="flex items-center gap-2 px-8 py-4 rounded-full bg-black text-white font-bold text-sm hover:scale-[1.02] transition-all duration-300 shadow-xl shadow-gray-200/50"
            >
              Launch your MVP
              <span className="text-lg">→</span>
            </Link>
            <Link
              to="/#pricing"
              className="px-8 py-4 rounded-full border border-(--color-border-subtle) bg-white text-(--color-text-primary) font-bold text-sm hover:bg-(--color-bg-card-light) transition-all duration-300"
            >
              See subscription plans
            </Link>
          </motion.div>

          {/* Stats Section */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-8"
          >
            {[
              { value: "6+", label: "Years" },
              { value: "30+", label: "Products" },
              { value: "5", label: "Countries" },
              { value: "100%", label: "Inhouse" },
            ].map((s) => (
              <div key={s.label}>
                <div className="text-3xl font-black text-gray-900 font-heading">
                  {s.value}
                </div>
                <div className="text-gray-400 text-[10px] font-bold uppercase tracking-widest mt-1">
                  {s.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Products Shipped Marquee */}
      <div className="absolute bottom-0 left-0 right-0 border-y border-gray-100 bg-gray-50/50 py-4 overflow-hidden mask-fade-edges">
        <motion.div
          initial={{ x: 0 }}
          animate={{ x: "-50%" }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          className="flex items-center gap-12 whitespace-nowrap px-12"
        >
          {[...Array(2)].map((_, i) => (
            <div
              key={i}
              className="flex items-center gap-12 text-[11px] font-bold uppercase tracking-[0.2em] text-gray-400"
            >
              <span className="text-gray-900 border-r border-gray-200 pr-12">
                Products we've shipped
              </span>
              {[
                "Shipora",
                "Atlantis",
                "Oppvia",
                "Parentician",
                "Euro Shipper",
                "Aident",
              ].map((item) => (
                <span key={item} className="flex items-center gap-12">
                  <span className="text-gray-900 font-black font-heading text-xs lowercase tracking-tight">
                    {item}
                  </span>
                  <span className="text-gray-200">|</span>
                </span>
              ))}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
