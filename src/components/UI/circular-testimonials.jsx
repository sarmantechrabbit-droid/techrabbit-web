import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

function calculateGap(containerWidth) {
  if (!containerWidth) return 120;
  return Math.max(72, Math.min(containerWidth * 0.22, 160));
}

export function CircularTestimonials({
  testimonials,
  autoplay = false,
  colors = {},
  fontSizes = {},
}) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [hoverPrev, setHoverPrev] = useState(false);
  const [hoverNext, setHoverNext] = useState(false);
  const [containerWidth, setContainerWidth] = useState(0);
  const imageContainerRef = useRef(null);

  const testimonialsLength = testimonials?.length ?? 0;

  const {
    name: colorName = "var(--color-text-primary)",
    designation: colorDesignation = "var(--color-text-muted)",
    testimony: colorTestimony = "var(--color-text-body)",
    arrowBackground = "var(--color-text-primary)",
    arrowForeground = "#ffffff",
    arrowHoverBackground = "var(--color-brand-blue)",
  } = colors;

  const {
    name: fontSizeName = "32px",
    designation: fontSizeDesignation = "16px",
    quote: fontSizeQuote = "18px",
  } = fontSizes;

  useEffect(() => {
    const element = imageContainerRef.current;
    if (!element) return undefined;

    const updateWidth = () => {
      setContainerWidth(element.offsetWidth);
    };

    updateWidth();

    const resizeObserver = new ResizeObserver(updateWidth);
    resizeObserver.observe(element);

    return () => resizeObserver.disconnect();
  }, []);

  const handlePrev = useCallback(() => {
    if (!testimonialsLength) return;
    setActiveIndex((prev) => (prev - 1 + testimonialsLength) % testimonialsLength);
  }, [testimonialsLength]);

  const handleNext = useCallback(() => {
    if (!testimonialsLength) return;
    setActiveIndex((prev) => (prev + 1) % testimonialsLength);
  }, [testimonialsLength]);

  useEffect(() => {
    if (!autoplay || testimonialsLength < 2) return undefined;

    const interval = window.setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonialsLength);
    }, 4500);

    return () => window.clearInterval(interval);
  }, [autoplay, testimonialsLength]);

  const activeTestimonial = useMemo(
    () => testimonials[activeIndex] ?? testimonials[0],
    [activeIndex, testimonials]
  );

  const getImageStyle = useCallback(
    (index) => {
      const gap = calculateGap(containerWidth);
      const maxStickUp = gap * 0.8;
      const offset =
        (index - activeIndex + testimonialsLength) % testimonialsLength;
      void offset;
      const isActive = index === activeIndex;
      const isLeft =
        (activeIndex - 1 + testimonialsLength) % testimonialsLength === index;
      const isRight = (activeIndex + 1) % testimonialsLength === index;

      if (isActive) {
        return {
          zIndex: 3,
          opacity: 1,
          pointerEvents: "auto",
          transform: "translateX(0px) translateY(0px) scale(1) rotateY(0deg)",
          transition: "all 0.8s cubic-bezier(.4,2,.3,1)",
        };
      }
      if (isLeft) {
        return {
          zIndex: 2,
          opacity: 1,
          pointerEvents: "auto",
          transform: `translateX(-${gap}px) translateY(-${maxStickUp}px) scale(0.85) rotateY(15deg)`,
          transition: "all 0.8s cubic-bezier(.4,2,.3,1)",
        };
      }
      if (isRight) {
        return {
          zIndex: 2,
          opacity: 1,
          pointerEvents: "auto",
          transform: `translateX(${gap}px) translateY(-${maxStickUp}px) scale(0.85) rotateY(-15deg)`,
          transition: "all 0.8s cubic-bezier(.4,2,.3,1)",
        };
      }
      return {
        zIndex: 1,
        opacity: 0,
        pointerEvents: "none",
        transition: "all 0.8s cubic-bezier(.4,2,.3,1)",
      };
    },
    [activeIndex, containerWidth, testimonialsLength]
  );

  const quoteVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
  };

  if (!testimonialsLength || !activeTestimonial) return null;

  return (
    <div className="w-full max-w-5xl mx-auto p-4 md:p-8">
      <div className="grid md:grid-cols-2 gap-10 md:gap-20 items-center">
        <div
          className="relative w-full h-[24rem] perspective-[1000px]"
          ref={imageContainerRef}
        >
          {testimonials.map((testimonial, index) => (
            <img
              key={testimonial.src}
              src={testimonial.src}
              alt={testimonial.name}
              className="absolute w-full h-full object-cover rounded-3xl shadow-xl border border-white/20 bg-[var(--color-bg-card-light)]"
              data-index={index}
              style={{
                ...getImageStyle(index),
                objectPosition: testimonial.objectPosition ?? "center top",
              }}
            />
          ))}
        </div>

        <div className="flex flex-col justify-between min-h-[24rem]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              variants={quoteVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <h3
                className="font-heading font-bold mb-1 tracking-tight"
                style={{ color: colorName, fontSize: fontSizeName }}
              >
                {activeTestimonial.name}
              </h3>
              <p
                className="mb-8 md:mb-10"
                style={{
                  color: colorDesignation,
                  fontSize: fontSizeDesignation,
                }}
              >
                {activeTestimonial.designation}
              </p>
              <motion.p
                className="leading-8 md:leading-9"
                style={{ color: colorTestimony, fontSize: fontSizeQuote }}
              >
                {activeTestimonial.quote.split(" ").map((word, i) => (
                  <motion.span
                    key={`${activeIndex}-${i}`}
                    initial={{
                      filter: "blur(10px)",
                      opacity: 0,
                      y: 5,
                    }}
                    animate={{
                      filter: "blur(0px)",
                      opacity: 1,
                      y: 0,
                    }}
                    transition={{
                      duration: 0.22,
                      ease: "easeInOut",
                      delay: 0.025 * i,
                    }}
                    className="inline-block"
                  >
                    {word}&nbsp;
                  </motion.span>
                ))}
              </motion.p>
            </motion.div>
          </AnimatePresence>

          <div className="flex gap-6 pt-12 md:pt-0">
            <button
              className="w-11 h-11 rounded-full flex items-center justify-center transition-colors border border-white/10"
              onClick={handlePrev}
              style={{
                backgroundColor: hoverPrev
                  ? arrowHoverBackground
                  : arrowBackground,
              }}
              onMouseEnter={() => setHoverPrev(true)}
              onMouseLeave={() => setHoverPrev(false)}
              aria-label="Previous testimonial"
            >
              <FaArrowLeft size={18} color={arrowForeground} />
            </button>
            <button
              className="w-11 h-11 rounded-full flex items-center justify-center transition-colors border border-white/10"
              onClick={handleNext}
              style={{
                backgroundColor: hoverNext
                  ? arrowHoverBackground
                  : arrowBackground,
              }}
              onMouseEnter={() => setHoverNext(true)}
              onMouseLeave={() => setHoverNext(false)}
              aria-label="Next testimonial"
            >
              <FaArrowRight size={18} color={arrowForeground} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CircularTestimonials;
