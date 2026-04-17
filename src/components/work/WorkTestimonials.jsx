import { motion } from "framer-motion";
import Reveal from "../Reveal";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "CEO, TechStart",
    content: "Tech Rabbit transformed our vision into reality. The team's expertise and dedication were exceptional.",
    rating: 5,
    accent: "var(--color-brand-blue)",
  },
  {
    name: "Michael Chen",
    role: "Founder, GrowthLabs",
    content: "From design to deployment, everything was handled professionally. Highly recommended for any startup.",
    rating: 5,
    accent: "var(--color-brand-green)",
  },
  {
    name: "Emma Rodriguez",
    role: "Product Manager, InnovateCo",
    content: "The quality of work exceeded our expectations. They truly understand product development.",
    rating: 5,
    accent: "var(--color-brand-blue)",
  },
  {
    name: "David Park",
    role: "CTO, ScaleUp Inc",
    content: "Best decision we made. The team delivered on time and the product is production-ready.",
    rating: 5,
    accent: "var(--color-brand-green)",
  },
];

export default function WorkTestimonials() {
  return (
    <section className="py-12 px-6 md:px-12 bg-[var(--color-bg-page)] overflow-hidden relative">
      {/* Dot grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle, var(--color-grid-dot) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
          opacity: 0.5,
        }}
      />

      {/* Gradient glows */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] pointer-events-none">
        <div
          className="absolute inset-0 rounded-full blur-[150px]"
          style={{
            background: "radial-gradient(circle, rgba(42,171,215,0.08) 0%, transparent 70%)",
          }}
        />
      </div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] pointer-events-none">
        <div
          className="absolute inset-0 rounded-full blur-[150px]"
          style={{
            background: "radial-gradient(circle, rgba(36,181,116,0.08) 0%, transparent 70%)",
          }}
        />
      </div>

      {/* Fade overlays */}
      <div
        className="absolute top-0 inset-x-0 h-20 pointer-events-none"
        style={{ background: "linear-gradient(to bottom, var(--color-bg-page), transparent)" }}
      />
      <div
        className="absolute bottom-0 inset-x-0 h-20 pointer-events-none"
        style={{ background: "linear-gradient(to top, var(--color-bg-page), transparent)" }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <Reveal className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold font-heading tracking-tight text-[var(--color-text-primary)] leading-[1.2] mb-4">
            What Our Clients Say
          </h2>
          <p className="text-[var(--color-text-body)] text-sm max-w-2xl mx-auto leading-relaxed font-medium">
            Real feedback from real clients who've transformed their businesses with us.
          </p>
        </Reveal>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial, idx) => (
            <Reveal key={testimonial.name} delay={idx * 0.1}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                className="relative rounded-2xl border overflow-hidden p-6 h-full flex flex-col transition-all duration-300 group hover:scale-105"
                style={{
                  background: "white",
                  borderColor: "var(--color-border-card)",
                  boxShadow: "0 2px 12px rgba(0,0,0,0.04)",
                }}
              >
                {/* Top accent line */}
                <div
                  className="absolute top-0 inset-x-0 h-1"
                  style={{ background: testimonial.accent }}
                />

                {/* Quote Icon */}
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center mb-4"
                  style={{
                    background: `color-mix(in srgb, ${testimonial.accent} 12%, transparent)`,
                  }}
                >
                  <Quote
                    className="w-5 h-5"
                    style={{ color: testimonial.accent }}
                  />
                </div>

                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-current"
                      style={{ color: testimonial.accent }}
                    />
                  ))}
                </div>

                {/* Content */}
                <p className="text-sm text-[var(--color-text-body)] leading-relaxed mb-6 flex-1">
                  "{testimonial.content}"
                </p>

                {/* Author */}
                <div className="pt-4 border-t border-[var(--color-border-light)]">
                  <p className="font-bold text-sm text-[var(--color-text-primary)]">
                    {testimonial.name}
                  </p>
                  <p className="text-xs text-[var(--color-text-body)]">
                    {testimonial.role}
                  </p>
                </div>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
