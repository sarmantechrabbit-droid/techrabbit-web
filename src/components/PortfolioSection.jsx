import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Reveal from "./Reveal";

const projects = [
  {
    title: "Ratio",
    description: "Fintech Simplifying Payments",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop",
    icon: "https://ui-avatars.com/api/?name=R&background=000&color=fff",
  },
  {
    title: "CreatorNow",
    description: "Building up the next generation of creators",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop",
    icon: "https://ui-avatars.com/api/?name=C&background=f97316&color=fff",
  },
  {
    title: "Major Streaming Service",
    description: "Internal tool for streaming service",
    image:
      "https://images.unsplash.com/photo-1542744094-3a31f272c490?q=80&w=2070&auto=format&fit=crop",
    icon: "https://ui-avatars.com/api/?name=S&background=3b82f6&color=fff",
  },
];

export default function PortfolioSection() {
  return (
    <section className="py-24 bg-white px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <Reveal className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-black text-gray-900 mb-6 font-heading tracking-tight">
            Explore work
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto mb-10">
            We build polished, production-ready apps that look great and scale
            fast.
          </p>
          <Link
            to="/work"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-black text-white font-bold text-sm hover:scale-[1.05] transition-transform duration-300"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-white mr-1 animate-pulse"></span>
            View all work
            <span className="ml-1">→</span>
          </Link>
        </Reveal>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group cursor-pointer"
            >
              {/* Image Container */}
              <div className="relative mb-6 rounded-[2.5rem] overflow-hidden bg-gray-100 shadow-2xl shadow-gray-200 aspect-[4/3] transition-transform duration-500 group-hover:scale-[1.02]">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* Overlay Detail (optional) */}
                <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Text Area */}
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl overflow-hidden shadow-sm flex-shrink-0">
                  <img
                    src={project.icon}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 font-heading">
                    {project.title}
                  </h3>
                  <p className="text-sm text-gray-400 font-medium">
                    {project.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
