import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const GridSec = ({ content = {} }) => {
  return (
    <motion.section
      className="py-5 sm:py-10 px-4"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-stretch">
        {/* LEFT VIDEO */}
        <motion.div className="relative w-full h-full min-h-[300px] lg:min-h-[400px] overflow-hidden rounded-2xl">
          <video
            src={content.video}
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-b from-[#24B574]/10 to-[#2BAAE2]/10" />
        </motion.div>

        {/* RIGHT CONTENT */}
        <motion.div className="flex flex-col justify-center space-y-5 sm:space-y-6 py-4">
          {/* Badge */}
          {content.badgeText && (
            <motion.span
              className="bg-[#F8F9FA] border border-[#E6E9EE] text-[#333333]
                         rounded-full px-4 py-1.5 text-xs sm:text-sm w-fit font-medium"
            >
              {content.badgeText}
            </motion.span>
          )}

          {/* Heading */}
          {content.heading && (
            <motion.h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0C0C0C] leading-tight tracking-tight">
              {content.heading}
            </motion.h3>
          )}

          {/* Description */}
          {content.description && (
            <motion.p className="text-[#666666] text-sm sm:text-base max-w-2xl leading-relaxed whitespace-pre-line">
              {content.description}
            </motion.p>
          )}

          {/* Founder Section */}
          {content.founder && (
            <motion.div
              className="flex items-center gap-4 pt-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center text-white font-black text-lg shadow-lg"
                style={{
                  background:
                    "linear-gradient(135deg, #2aabd7 0%, #24b574 100%)",
                }}
              >
                {content.founder.initial}
              </div>
              {content.founder.details ? (
                content.founder.details
              ) : (
                <div className="flex flex-col">
                  <span className="text-(--color-text-primary) font-bold text-sm">
                    {content.founder.name}
                  </span>
                  <span className="text-(--color-text-muted) text-xs font-medium">
                    {content.founder.role}
                  </span>
                </div>
              )}
            </motion.div>
          )}

          {/* Features */}
          {/* <motion.div
            variants={container}
            className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4"
          >
            {features1.map((feature, index) => (
              <motion.div
                key={index}
                variants={item}
                className="flex items-center space-x-4 border border-[#E6E9EE] rounded-lg p-3"
              >
                <div className="bg-[#F2F4F6] w-9 h-9 shrink-0 rounded-lg flex items-center justify-center">
                  <feature.icon className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>

                <h4 className="text-sm sm:text-base font-medium text-[#4C4C4C]">
                  {feature.title}
                </h4>
              </motion.div>
            ))}
          </motion.div> */}

          {/* CTA BUTTON – RESTORED */}
          {/* <motion.div
                initial="hidden"
                whileInView="visible"
                custom={3}
                viewport={{ once: true }}
            >
                <Link
                to="/consult-us"
                className="px-4 py-2 sm:py-3 flex items-center gap-2
                            bg-gradient-to-r from-[#43BAAF] to-[#2BAAE2]
                            rounded-lg cursor-pointer w-fit
                            transition-all duration-300 ease-in-out
                            hover:scale-[1.03] hover:shadow-md"
                >
                <span className="text-white font-medium md:text-base sm:text-sm text-xs">
                    Hire Web Developers
                </span>
                </Link>
            </motion.div> */}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default GridSec;
