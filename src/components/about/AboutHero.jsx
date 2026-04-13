import { motion } from "framer-motion";
import Reveal from "../Reveal";

const stats = [
  { label: "Founded", value: "2019" },
  { label: "Years", value: "6+" },
  { label: "Products", value: "30+" },
  { label: "Countries", value: "5" },
];

export default function AboutHero() {
  return (
    <section className="bg-[#0c0c0c] pt-40 pb-32 px-6 md:px-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
            <Reveal>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-emerald-500/20 bg-emerald-500/5 text-emerald-400 text-[10px] font-bold tracking-widest uppercase mb-6">
                About Us
              </div>
              <h1 className="text-5xl md:text-7xl font-black text-white font-heading leading-tight tracking-tight mb-8">
                Built to solve the problems founders face
              </h1>
              <p className="text-gray-400 text-lg md:text-xl leading-relaxed max-w-xl mb-12">
                TechRabbit started in 2019 with one goal — build a product agency that actually works. Same team, full transparency, real accountability.
              </p>
            </Reveal>

            <div className="grid grid-cols-4 gap-8">
              {stats.map((stat, i) => (
                <Reveal key={stat.label} delay={0.2 + i * 0.1}>
                  <div>
                    <div className="text-3xl font-black text-white font-heading mb-1">
                      {stat.value}
                    </div>
                    <div className="text-[10px] font-bold uppercase tracking-widest text-gray-600">
                      {stat.label}
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          <Reveal delay={0.3}>
            <div className="relative aspect-video rounded-4xl bg-white/5 border border-white/10 overflow-hidden group cursor-pointer">
              <div className="absolute inset-0 bg-linear-to-br from-indigo-500/10 to-emerald-500/10 pointer-events-none" />
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-8">
                <div className="w-16 h-16 rounded-full bg-emerald-500 text-white flex items-center justify-center mb-4 shadow-xl shadow-emerald-500/20 group-hover:scale-110 transition-transform">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
                <h3 className="text-white font-bold text-lg mb-1">Office tour video</h3>
                <p className="text-gray-500 text-xs">Ahmedabad Gujarat - Full-time in-office</p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
