import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import heroBackground from "../../assets/images/background.png";
import Reveal from "../Reveal";
import { ArrowRight, Sparkles } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.7, ease: "easeOut" },
  }),
};

const HeroSec = ({ heroObj }) => {
  const { tagline, title, desc, video } = heroObj;

  return (
    <section className="relative z-0 px-4 sm:px-6 lg:px-8 py-12 overflow-hidden pt-40 md:pt-40  max-sm:pt-25">
      {/* Background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <img
          src={heroBackground}
          alt=""
          className="absolute inset-0 w-full h-full object-cover object-top"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, rgba(255,255,255,0.18), rgba(255,255,255,0.68) 56%, rgba(255,255,255,0.94) 100%)",
          }}
        />
      </div>

      {/* Container */}
      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[1.75fr_1.25fr] gap-10 md:gap-12 lg:gap-6 items-center">
        {/* LEFT CONTENT */}
        <div className="flex flex-col space-y-5 sm:space-y-6 md:space-y-8 text-left">
          <Reveal>
            <div>
              <Reveal>
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="mb-6 inline-flex max-w-full items-center gap-2 rounded-full border border-[var(--color-border-brand-soft)] bg-[var(--color-bg-brand-tint)] px-3 py-1.5 text-[9px] font-black uppercase tracking-[0.28em] text-[var(--color-brand-blue)] sm:mb-8 sm:px-4 sm:text-[10px]"
                >
                  <Sparkles className="h-3.5 w-3.5 shrink-0" />
                  <span className="truncate">About US</span>
                </motion.div>
              </Reveal>

              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7 }}
              >
                <h1 className="mb-4 max-w-[16ch] text-3xl font-bold font-heading leading-[1.05] tracking-tight text-[var(--color-text-primary)] sm:text-4xl md:max-w-[18ch] md:text-5xl xl:text-6xl">
                  Built to solve the problems{" "}
                  <span
                    className="bg-clip-text text-transparent"
                    style={{ backgroundImage: "var(--gradient-brand)" }}
                  >
                    founders face
                  </span>
                </h1>

                <p className="max-w-xl text-sm font-medium leading-relaxed text-[var(--color-text-body)] sm:text-base">
                  Tech Rabbit started in 2019 with one goal — build a product
                  agency that actually works. Same team, full transparency, real
                  accountability.
                </p>

                {/* <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-4">
                                <Link
                                  to="/contact"
                                  className="group flex min-h-14 w-full items-center justify-center gap-2 rounded-full px-6 py-4 text-center text-sm font-black text-white transition-all duration-300 hover:scale-[1.03] sm:w-auto sm:px-8"
                                  style={{
                                    background: "var(--gradient-brand)",
                                    boxShadow: "0 20px 40px var(--color-brand-glow)",
                                  }}
                                >
                                  I have an idea
                                  <motion.div className="transition-transform group-hover:translate-x-1">
                                    <ArrowRight className="h-4 w-4" />
                                  </motion.div>
                                </Link>
              
                                <Link
                                  to="/#pricing"
                                  className="flex min-h-14 w-full items-center justify-center gap-2 rounded-full border border-[var(--color-border-subtle)] bg-white px-6 py-4 text-center text-sm font-black text-[var(--color-text-primary)] transition-all duration-300 hover:bg-[var(--color-bg-card-light)] sm:w-auto sm:px-8"
                                >
                                  My product is live
                                  <ArrowRight className="h-4 w-4" />
                                </Link>
                              </div> */}
              </motion.div>
            </div>
          </Reveal>

          {/* Heading */}
          {/* <motion.h1
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            custom={1}
            viewport={{ once: true }}
            className="
              text-[#120A0B]
              font-semibold
              tracking-tight
              leading-[1.15]

              text-[28px]
              sm:text-[36px]
              md:text-[46px]
              lg:text-[56px]
              xl:text-[60px]
            "
          >
            {title || "Retail & E-commerce Software Development"}
          </motion.h1> */}

          {/* Description */}
          {/* <motion.p
            className="text-[#454140] text-sm sm:text-base md:text-lg max-w-xl"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            custom={2}
            viewport={{ once: true }}
          >
            {desc ||
              "Build online stores that feel WOW, run smooth as butter, and sell like crazy — from first click to final checkout."}
          </motion.p> */}

          {/* Stats */}
          <motion.div
            className="flex flex-wrap justify-start gap-10 sm:gap-10 pt-6 sm:pt-8"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            custom={3}
            viewport={{ once: true }}
          >
            {[
              { value: "2019", label: "Founded" },
              { value: "6+", label: "Years" },
              { value: "50+", label: "Products" },
              { value: "6", label: "Countries" },
            ].map((stat, index) => (
              <div key={index} className="flex items-center gap-4 sm:gap-6">
                <div className="flex flex-col">
                  <span className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#120A0B]">
                    {stat.value}
                  </span>
                  <span className="text-xs sm:text-sm text-[#454140] font-medium">
                    {stat.label}
                  </span>
                </div>

                {/* Divider */}
                {index !== 3 && (
                  <div className="hidden md:block h-10 w-px bg-gray-200" />
                )}
              </div>
            ))}
          </motion.div>
        </div>

        {/* RIGHT VIDEO */}
        {/* <motion.div
          className="
            relative w-full
            max-w-md sm:max-w-lg md:max-w-xl lg:max-w-full
            mx-auto
            lg:ml-auto
          "
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="relative w-full aspect-[4/3] sm:aspect-video rounded-2xl overflow-hidden bg-[#EDEFF1] flex flex-col items-center justify-center">
            <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white shadow flex items-center justify-center mb-3 sm:mb-4">
              <div className="w-0 h-0 border-l-[8px] border-l-black border-y-[6px] border-y-transparent ml-1"></div>
            </div>

            <h3 className="text-[#120A0B] font-semibold text-base sm:text-lg text-center">
              Founder story — 90 sec
            </h3>

            <p className="text-xs sm:text-sm text-gray-500 tracking-wide text-center">
              WHY TECH RABBIT EXISTS
            </p>
          </div>
        </motion.div> */}
      </div>
    </section>
  );
};

export default HeroSec;
