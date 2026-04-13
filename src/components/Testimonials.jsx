import Reveal from "./Reveal";

const testimonials = [
  {
    name: "Dianne Russell",
    role: "Founder, Web Portal",
    location: "US",
    initials: "DR",
    color: "#09B87F",
    quote:
      "I connected with TechRabbit via LinkedIn. Highly satisfied with their work and commitment. Thank you, Kunal, for the amazing support.",
  },
  {
    name: "Ronald Richards",
    role: "Client, App Dev",
    location: "Canada",
    initials: "RR",
    color: "#6366f1",
    quote:
      "Whether you need an app or a website, TechRabbit is the best choice. Very friendly, they perform well and deliver at committed time.",
  },
  {
    name: "Savannah Nguyen",
    role: "Founder, Mobile App",
    location: "US",
    initials: "SN",
    color: "#09B87F",
    quote:
      "The TechRabbit team is awesome. They built my app with 0 bugs. The best part is their time commitment. Highly recommended.",
  },
  {
    name: "Vreene Sherty",
    role: "Client, Custom Software",
    location: "UK",
    initials: "VS",
    color: "#6366f1",
    quote:
      "Recommended for the great work. They did superb logic and gave me the exact result according to my idea. Professional and reliable.",
  },
  {
    name: "Marvin McKinney",
    role: "Startup Founder",
    location: "Australia",
    initials: "MM",
    color: "#09B87F",
    quote:
      "Kunal has a nice nature. They understand our point deeply and give the exact output. He is also providing ideas for revenue — the best part.",
  },
  {
    name: "Courtney Henry",
    role: "Product Owner",
    location: "UK",
    initials: "CH",
    color: "#6366f1",
    quote:
      "Good job! They understand the requirements and give the exact output. Team has been working with us for past 2 years. Performed very well.",
  },
];

const platforms = [
  { name: "Clutch", rating: "4.6" },
  { name: "DesignRush", rating: "4.5" },
  { name: "GoodFirms", rating: "4.3" },
  { name: "TopDevelopers", rating: "4.7" },
];

function StarRow() {
  return (
    <div className="flex gap-1 mb-5">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} width="16" height="16" viewBox="0 0 18 18" fill="none">
          <path
            d="M9 1.5l2.163 4.38 4.837.703-3.5 3.412.826 4.815L9 12.375l-4.326 2.435.826-4.815L2 6.583l4.837-.703L9 1.5z"
            fill="#F59E0B"
          />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <Reveal>
          <div className="flex flex-col items-center text-center mb-16 gap-4">
            <span className="inline-flex items-center gap-2 border border-gray-200 rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-gray-500">
              Client Testimonials
            </span>
            <h2 className="font-heading text-5xl md:text-6xl font-bold text-gray-900">
              What our clients say
            </h2>
          </div>
        </Reveal>

        {/* 3×2 Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={0.08 * i}>
              <div className="group flex flex-col justify-between gap-6 rounded-[1.75rem] border border-gray-100 bg-gray-50 p-8 h-full hover:border-indigo-100 hover:bg-white hover:shadow-[0_4px_32px_0_rgba(99,102,241,0.07)] transition-all duration-300">
                <div>
                  <StarRow />
                  <p className="text-gray-600 text-[15px] leading-relaxed italic">
                    "{t.quote}"
                  </p>
                </div>

                {/* Author */}
                <div className="flex items-center gap-3 pt-2 border-t border-gray-100">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center text-white text-xs font-bold flex-shrink-0"
                    style={{ backgroundColor: t.color }}
                  >
                    {t.initials}
                  </div>
                  <div>
                    <p className="font-bold text-gray-900 text-sm leading-tight">
                      {t.name}
                    </p>
                    <p className="text-gray-400 text-xs mt-0.5">
                      {t.role} · {t.location}
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Platform ratings strip */}
        <Reveal delay={0.5}>
          <div className="mt-10 rounded-[1.75rem] border border-gray-100 bg-gray-50 px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-4">
            <span className="text-gray-400 text-sm font-medium tracking-wide">
              Verified ratings
            </span>
            <div className="flex flex-wrap items-center justify-center sm:justify-end gap-x-8 gap-y-3">
              {platforms.map((p) => (
                <div key={p.name} className="flex items-center gap-1.5">
                  <span className="font-heading font-bold text-gray-900 text-sm">
                    {p.name}
                  </span>
                  <svg width="13" height="13" viewBox="0 0 18 18" fill="none">
                    <path
                      d="M9 1.5l2.163 4.38 4.837.703-3.5 3.412.826 4.815L9 12.375l-4.326 2.435.826-4.815L2 6.583l4.837-.703L9 1.5z"
                      fill="#F59E0B"
                    />
                  </svg>
                  <span className="text-gray-600 text-sm font-semibold">
                    {p.rating}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
