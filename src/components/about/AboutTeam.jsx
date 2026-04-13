import { motion } from "framer-motion";
import Reveal from "../Reveal";

const team = [
  { name: "Kunal", role: "Founder & PM", extra: "Leads strategy across all projects", initial: "K", color: "bg-emerald-500" },
  { name: "UI/UX Designer", role: "Product Lead", extra: "Design systems & prototypes", initial: "U", color: "bg-indigo-500" },
  { name: "Full-Stack Dev", role: "Lead Developer", extra: "React, Node.js, PostgreSQL", initial: "F", color: "bg-blue-500" },
  { name: "Backend Dev", role: "Senior Dev", extra: "APIs, Integrations & Architecture", initial: "B", color: "bg-emerald-500" },
  { name: "Frontend Dev", role: "React Specialist", extra: "Performance & Animations", initial: "F", color: "bg-indigo-500" },
  { name: "QA Engineer", role: "Quality Assurance", extra: "Systems & Ops Excellence", initial: "Q", color: "bg-blue-500" },
  { name: "Business Analyst", role: "Product & Ops", extra: "Requirements & Sprint planning", initial: "B", color: "bg-emerald-500" },
  { name: "Client Success", role: "Sales & Onboarding", extra: "Communication & Growth", initial: "C", color: "bg-indigo-500" },
];

export default function AboutTeam() {
  return (
    <section className="bg-[#0c0c0c] py-32 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <Reveal className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-emerald-500/20 bg-emerald-500/5 text-emerald-400 text-[10px] font-bold tracking-widest uppercase mb-6">
            The Team
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-white font-heading leading-tight tracking-tight mb-4">
            Everyone who works on your product
          </h2>
          <p className="text-gray-500 text-lg">100% inhouse. One office. Every person in the same room in Ahmedabad.</p>
        </Reveal>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-20">
          {team.map((member, i) => (
            <Reveal key={member.name} delay={i * 0.05}>
              <div className="p-8 rounded-3xl bg-white/5 border border-white/5 hover:border-emerald-500/30 transition-all group">
                <div className={`w-10 h-10 rounded-xl ${member.color} flex items-center justify-center text-white font-black text-xs mb-6 group-hover:scale-110 transition-transform`}>
                  {member.initial}
                </div>
                <h4 className="text-white font-bold text-base mb-1">{member.name}</h4>
                <div className="text-emerald-400 text-[10px] font-bold uppercase tracking-widest mb-3">{member.role}</div>
                <p className="text-gray-500 text-xs leading-relaxed">{member.extra}</p>
              </div>
            </Reveal>
          ))}
        </div>

        {/* 100% In-house card */}
        <Reveal>
          <div className="p-10 rounded-4xl bg-linear-to-br from-white/5 to-transparent border border-white/5 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="max-w-md">
              <h3 className="text-2xl font-bold text-white mb-2 font-heading">100% In-house. No freelancers. No exceptions.</h3>
              <p className="text-gray-500 text-sm">Every person sits in the same office. Same standup. Same accountability. When you message us, a real team member responds.</p>
            </div>
            <div className="flex gap-12">
              <div className="text-center">
                <div className="text-3xl font-black text-white font-heading">0</div>
                <div className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">Freelancers</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-black text-white font-heading">1</div>
                <div className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">Office</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-black text-white font-heading">150</div>
                <div className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">Certified</div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
