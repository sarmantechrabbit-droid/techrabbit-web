import { motion } from "framer-motion";
import Reveal from "../Reveal";

export default function AboutStory() {
  return (
    <section className="bg-[#0c0c0c] py-32 px-6 md:px-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <Reveal>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-emerald-500/20 bg-emerald-500/5 text-emerald-400 text-[10px] font-bold tracking-widest uppercase mb-6">
              From the Founder
            </div>
            <h2 className="text-4xl md:text-6xl font-black text-white font-heading leading-tight tracking-tight mb-8">
              Why I built <br /> Tech Rabbit
            </h2>
            <div className="space-y-6 text-gray-400 text-lg leading-relaxed max-w-xl mb-12">
              <p>
                I've seen too many founders struggle with the same problems — offshore agencies that overpromise, freelancers who disappear, developers who don't understand the product.
              </p>
              <p>
                Tech Rabbit is the agency I wish existed. One inhouse team. Full transparency. A subscription that grows with you — not a project-by-project vendor relationship.
              </p>
              <p>
                Six years in, 30+ products across 5 countries. The model works because we stay — same team, same codebase, same accountability.
              </p>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-emerald-500 flex items-center justify-center text-white font-black text-sm">
                K
              </div>
              <div>
                <div className="text-white font-bold text-base">Kunal</div>
                <div className="text-gray-500 text-xs">Founder, Tech Rabbit · Ahmedabad, India</div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="relative aspect-video rounded-4xl bg-gray-900 border border-white/5 overflow-hidden group cursor-pointer shadow-2xl">
              <div className="absolute inset-0 bg-linear-to-br from-indigo-500/10 to-transparent opacity-50" />
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                <div className="w-16 h-16 rounded-full bg-white/5 backdrop-blur-md border border-white/10 text-white flex items-center justify-center mb-4 group-hover:bg-white/10 transition-all">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
                <h3 className="text-white font-bold text-lg mb-1">Founder story — 90 sec</h3>
                <p className="text-gray-500 text-xs tracking-wide uppercase">Why Tech Rabbit exists</p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
