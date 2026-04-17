import { motion } from "framer-motion";
import Reveal from "../Reveal";
import heroBackground from "../../assets/images/background.png";

const stats = [
  { label: "Founded", value: "2019" },
  { label: "Years", value: "6+" },
  { label: "Products", value: "30+" },
  { label: "Countries", value: "5" },
];

export default function AboutHero() {
  return (
    <section className="relative z-0 min-h-[70vh] overflow-hidden bg-[var(--color-bg-page)] pt-40 pb-32">
      {/* Background elements to match Home page */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <img
          src={heroBackground}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-cover object-top opacity-60"
        />

        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, rgba(255,255,255,0.18), rgba(255,255,255,0.68) 56%, rgba(255,255,255,0.94) 100%)",
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
            <Reveal>
              <div
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full 
                border border-[#b7d7f0] 
                bg-gradient-to-r from-[#eaf6fb] to-[#f5f7f9] 
                text-[#1f2937] text-sm font-medium shadow-sm mb-6 uppercase tracking-wider"
              >
                About Us
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-[var(--color-text-primary)] font-heading leading-[1.2] tracking-tight mb-8">
                Built to solve the problems
                <span className="text-[var(--color-text-muted)]">
                  {" "}founders face
                </span>
              </h1>
              <p className="text-[var(--color-text-body)] text-base md:text-lg leading-relaxed max-w-xl mb-12 font-medium">
                TechRabbit started in 2019 with one goal — build a product
                agency that actually works. Same team, full transparency, real
                accountability.
              </p>
            </Reveal>

            <div className="grid grid-cols-4 gap-8">
              {stats.map((stat, i) => (
                <Reveal key={stat.label} delay={0.2 + i * 0.1}>
                  <div>
                    <div className="text-2xl font-bold text-[var(--color-text-primary)] font-heading mb-1">
                      {stat.value}
                    </div>
                    <div className="text-[10px] font-bold uppercase tracking-widest text-[var(--color-text-muted)]">
                      {stat.label}
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          <Reveal delay={0.3}>
            <div className="relative aspect-video rounded-3xl bg-white border border-[var(--color-border-default)] overflow-hidden group cursor-pointer shadow-xl shadow-brand-glow/5">
              <div className="absolute inset-0 bg-gradient-to-br from-[#2aabd7]/5 to-[#24b574]/5 pointer-events-none" />
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-8">
                <div
                  className="w-16 h-16 rounded-full bg-[var(--gradient-brand)] text-white flex items-center justify-center mb-4 shadow-xl shadow-brand-glow group-hover:scale-110 transition-transform"
                  style={{ background: "var(--gradient-brand)" }}
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
                <h3 className="text-[var(--color-text-primary)] font-bold text-lg mb-1">
                  Office tour video
                </h3>
                <p className="text-[var(--color-text-muted)] text-xs">
                  Ahmedabad Gujarat - Full-time in-office
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
