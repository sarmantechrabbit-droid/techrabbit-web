import { Link } from "react-router-dom";
import Reveal from "../Reveal";

export default function AboutCTA() {
  return (
    <section className="bg-[var(--color-bg-card)] py-16 sm:py-20 px-4 sm:px-6 md:px-12 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <Reveal className="text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[var(--color-border-brand-soft)] bg-[var(--color-bg-brand-tint)] text-[var(--color-brand-blue)] text-[10px] font-black tracking-widest uppercase mb-5">
           Get started today

          </div>
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-black font-heading tracking-tight text-[var(--color-text-primary)] leading-[1] mb-5">
            Ready to{" "}
            <span className="text-[var(--color-text-muted)]"> build or grow?</span>
          </h2>
          <p className="text-[var(--color-text-body)] text-base md:text-lg mb-10 max-w-lg mx-auto leading-relaxed">
           Book a free 30-min call. We'll scope your MVP or plan your first sprint — no commitment needed.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-9 py-4 rounded-full text-white font-black text-sm transition-all hover:scale-[1.03] duration-300"
            style={{
              background: "var(--gradient-brand)",
              boxShadow: "0 16px 40px var(--color-brand-glow)",
            }}
          >
            Book a free call →
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
