import { motion } from "framer-motion";

import { Link } from "react-router-dom";
import heroBackground from "../../assets/images/background.png";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.7, ease: "easeOut" },
  }),
};

const floatSoft = {
  animate: {
    y: [0, -4, 0],
    transition: { duration: 3, repeat: Infinity, ease: "easeInOut" },
  },
};

const HeroSec = ({ heroObj }) => {
  const { tagline, title, desc, video } = heroObj;

  return (
    <section className="relative z-0 pl-6 pr-[10px] py-14 sm:py-20 overflow-hidden">
      {/* Background Image & Gradient */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <img
          src={heroBackground}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-cover object-top"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, rgba(255,255,255,0.18), rgba(255,255,255,0.68) 56%, rgba(255,255,255,0.94) 100%)",
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-[1.75fr_1.25fr] gap-14 lg:gap-6 items-center pt-10">
        <div className="flex flex-col space-y-4 sm:space-y-8">
          {/* Hero Heading */}
          <motion.h1
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            custom={1}
            viewport={{ once: true }}
            className="
    text-[#120A0B] 
    font-semibold 
    tracking-[-2px] 
    leading-[1.15]
    
    text-[32px] 
    sm:text-[42px] 
    md:text-[52px] 
    lg:text-[60px] 
    xl:text-[60px]
  "
          >
            {title || "Retail & E-commerce Software Development"}
          </motion.h1>

          {/* Description */}
          <motion.p
            className="text-[#454140] sm:text-lg max-w-xl"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            custom={2}
            viewport={{ once: true }}
          >
            {desc ||
              "Build online stores that feel WOW, run smooth as butter, and sell like crazy — from first click to final checkout."}
          </motion.p>

          {/* Stats Section */}
          <motion.div
            className="flex flex-wrap items-center gap-8 sm:gap-12 pt-8 sm:pt-12"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            custom={3}
            viewport={{ once: true }}
          >
            {[
              { value: "2019", label: "Founded" },
              { value: "6+", label: "Years" },
              { value: "30+", label: "Products" },
              { value: "5", label: "Countries" },
            ].map((stat, index, array) => (
              <div key={index} className="flex items-center gap-8 sm:gap-12">
                <div className="flex flex-col gap-1">
                  <span className="text-3xl sm:text-4xl font-bold text-[#120A0B] tracking-tight">
                    {stat.value}
                  </span>
                  <span className="text-sm text-[#454140] font-medium">
                    {stat.label}
                  </span>
                </div>
                {index !== array.length - 1 && (
                  <div className="h-10 w-px bg-gray-200 hidden md:block" />
                )}
              </div>
            ))}
          </motion.div>

          {/* CTA Button */}
          {/* <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            custom={3}
            viewport={{ once: true }}
          >
            <Link
              to={"/consult-us"}
              className="px-4 py-1.5 sm:py-2 flex items-center gap-2 bg-gradient-to-r 
                 from-[#43BAAF] to-[#2BAAE2] rounded-lg cursor-pointer w-fit relative
                 transition-all duration-300 ease-in-out hover:scale-[1.03] hover:shadow-md"
            >
              <span className="text-white font-semibold md:text-base sm:text-sm text-xs">
                FREE CONSULTATION
              </span>

              <motion.div
                className="md:w-8 md:h-8 h-7 w-7 rounded bg-white text-[#24B574] p-1.5 flex items-center justify-center"
                animate={{ y: [0, -2, 0] }}
                transition={{
                  duration: 2.4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
              </motion.div>
            </Link>
          </motion.div> */}
        </div>

        {/* Video Container with Floating Cards */}
        {/* RIGHT VIDEO + FLOATING CARDS */}

        <motion.div
          className="
            relative w-full h-full rounded-2xl overflow-visible
            lg:ml-10 lg:mt-10 xl:ml-14 xl:mt-14
          "
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* VIDEO FRAME UI */}
          <div
            className="
   relative w-full h-full rounded-2xl overflow-hidden  bg-[#EDEFF1] flex flex-col items-center justify-center
  "
          >
            {/* Play Button */}
            <div className="w-14 h-14 rounded-full bg-white shadow flex items-center justify-center mb-4">
              <div className="w-0 h-0 border-l-[8px] border-l-black border-y-[6px] border-y-transparent ml-1"></div>
            </div>

            {/* Title */}
            <h3 className="text-[#120A0B] font-semibold text-lg">
              Founder story — 90 sec
            </h3>

            {/* Subtitle */}
            <p className="text-sm text-gray-500 tracking-wide">
              WHY TECH RABBIT EXISTS
            </p>
          </div>
          {/* VIDEO */}
          {/* <div className="relative w-full h-full rounded-2xl overflow-hidden">
            <video
              src={video}
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover aspect-square"
            />
          </div> */}
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSec;
