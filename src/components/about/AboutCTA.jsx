import { Link } from "react-router-dom";
import Reveal from "../Reveal";

const metrics = [
  { label: "Clutch", rating: "4.8" },
  { label: "DesignRush", rating: "4.8" },
  { label: "GoodFirms", rating: "4.7" },
  { label: "TopDevelopers", rating: "4.7" },
];

export default function AboutCTA() {
  return (
    <section className="bg-[#0c0c0c] py-32 px-6 md:px-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-20">
          <Reveal>
            <div className="p-10 rounded-4xl bg-white/5 border border-white/5 flex items-center gap-6">
              <div className="w-16 h-16 rounded-2xl bg-emerald-500/10 flex items-center justify-center text-emerald-500">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                </svg>
              </div>
              <div>
                <h4 className="text-white font-bold text-lg mb-1 font-heading uppercase tracking-tight">ISO Certified — MMS/UQ/DAC</h4>
                <p className="text-gray-500 text-sm">Internationally accredited for software quality, security, and process management.</p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="p-10 rounded-4xl bg-white/5 border border-white/5">
              <div className="text-[10px] font-bold text-emerald-400 uppercase tracking-widest mb-6">Verified Ratings</div>
              <div className="grid grid-cols-2 gap-y-4 gap-x-8">
                {metrics.map((m) => (
                  <div key={m.label} className="flex items-center justify-between">
                    <span className="text-gray-500 text-sm font-medium">{m.label}</span>
                    <div className="flex items-center gap-1">
                      <svg width="12" height="12" viewBox="0 0 18 18" fill="#F59E0B">
                        <path d="M9 1.5l2.163 4.38 4.837.703-3.5 3.412.826 4.815L9 12.375l-4.326 2.435.826-4.815L2 6.583l4.837-.703L9 1.5z" />
                      </svg>
                      <span className="text-white font-bold text-sm">{m.rating}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>

        <Reveal className="text-center pt-20 border-t border-white/5">
          <h2 className="text-4xl md:text-7xl font-black text-white mb-8 font-heading tracking-tight">
            Ready to work with us?
          </h2>
          <p className="text-gray-500 text-lg md:text-xl mb-12 max-w-xl mx-auto">
            Book a free 20-min call — no commitment, no pitch decks.
          </p>

          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-10 py-5 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-base transition-all shadow-2xl shadow-emerald-500/20"
          >
            Book a free call →
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
