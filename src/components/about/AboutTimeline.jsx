import { motion } from "framer-motion";
import Reveal from "../Reveal";

const timeline = [
  { year: "2019", title: "Tech Rabbit founded", desc: "Started in Ahmedabad with one goal — build a product agency that actually works." },
  { year: "2020", title: "First international clients", desc: "Met US and UK clients + launched Ratio. First delivery model proven." },
  { year: "2021", title: "ISO Certification", desc: "Achieved ISO certification (MMS/UQ/DAC) accredited. Quality process standardized." },
  { year: "2022", title: "Canada & Australia", desc: "Expanded to Canadian and Australian markets. Full in-house team of 15." },
  { year: "2023", title: "AI capabilities added", desc: "Integrated Claude, GPT-4 to custom agents into every sprint. 30+ products shipped." },
  { year: "2025", title: "Subscription model", desc: "Launched Dev-as-a-Service subscription. Full team of 30, firm website." },
];

export default function AboutTimeline() {
  return (
    <section className="bg-[#0c0c0c] py-32 px-6 md:px-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <Reveal className="mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-emerald-500/20 bg-emerald-500/5 text-emerald-400 text-[10px] font-bold tracking-widest uppercase mb-6">
            Our Journey
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-white font-heading leading-tight tracking-tight">
            6 years of building
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {timeline.map((item, i) => (
            <Reveal key={item.year} delay={i * 0.1}>
              <div className="p-10 rounded-3xl bg-white/5 border border-white/5 hover:border-emerald-500/20 transition-all h-full">
                <div className="text-emerald-400 font-bold mb-4 font-heading">{item.year}</div>
                <h4 className="text-white font-bold text-lg mb-4">{item.title}</h4>
                <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
