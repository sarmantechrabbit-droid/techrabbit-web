import CircularTestimonials from "./circular-testimonials";

const testimonials = [
  {
    quote:
      "Tech Rabbit helped us move from rough concept to a polished product much faster than expected. Their team felt like an extension of ours from day one.",
    name: "Tamar Mendelson",
    designation: "Founder, Product Studio",
    src:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1200&auto=format&fit=crop",
  },
  {
    quote:
      "The communication was clear, the execution was fast, and the quality never slipped. We always knew what was being built and why.",
    name: "Joe Charlescraft",
    designation: "Startup Operator",
    src:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1200&auto=format&fit=crop",
  },
  {
    quote:
      "What stood out most was how involved they were in product thinking, not just development. That made the final result much stronger.",
    name: "Martina Edelweist",
    designation: "Founder, SaaS Platform",
    src:
      "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?q=80&w=1200&auto=format&fit=crop",
  },
];

export function CircularTestimonialsDemo() {
  return (
    <CircularTestimonials
      testimonials={testimonials}
      autoplay={true}
      colors={{
        name: "var(--color-text-primary)",
        designation: "var(--color-text-muted)",
        testimony: "var(--color-text-body)",
        arrowBackground: "var(--color-text-primary)",
        arrowForeground: "#ffffff",
        arrowHoverBackground: "var(--color-brand-blue)",
      }}
      fontSizes={{
        name: "32px",
        designation: "16px",
        quote: "18px",
      }}
    />
  );
}
