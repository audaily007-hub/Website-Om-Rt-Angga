import { motion } from "motion/react";
import { ExternalLink, Users, Home, BarChart3 } from "lucide-react";

const projects = [
  {
    title: "Digital Neighborhood System (IPL)",
    desc: "Sistem manajemen iuran dan informasi warga berbasis cloud.",
    icon: <Users className="w-6 h-6 text-orange" />,
    tag: "Community Tech",
    image: "https://picsum.photos/seed/ipl/600/400",
    special: false
  },
  {
    title: "Property Portal",
    desc: "Platform listing properti dengan traffic 25k+ harian.",
    icon: <Home className="w-6 h-6 text-orange" />,
    tag: "High Traffic",
    image: "https://picsum.photos/seed/property/600/400",
    special: false
  },
  {
    title: "AI Integrated Dashboards",
    desc: "Visualisasi data real-time terintegrasi dengan Google AI Studio.",
    icon: <BarChart3 className="w-6 h-6 text-orange" />,
    tag: "AI Solution",
    image: "https://picsum.photos/seed/ai/600/400",
    special: true
  }
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold text-navy mb-4">Selected Projects</h2>
            <p className="text-gray-600 max-w-xl">
              Beberapa highlight sistem yang telah dibangun untuk industri dan komunitas.
            </p>
          </div>
          <a href="#" className="flex items-center gap-2 text-orange font-bold group">
            Lihat Semua Project 
            <ExternalLink className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((p, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -10 }}
              className={`rounded-3xl overflow-hidden shadow-lg border border-gray-100 group transition-all duration-300 ${
                p.special 
                  ? "bg-navy/5 backdrop-blur-md border-orange/20 relative" 
                  : "bg-white"
              }`}
            >
              {p.special && (
                <div className="absolute inset-0 bg-gradient-to-br from-orange/5 to-transparent pointer-none" />
              )}
              <div className="relative h-56 overflow-hidden">
                <img 
                  src={p.image} 
                  alt={p.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 left-4">
                  <span className={`px-3 py-1 backdrop-blur text-xs font-bold rounded-full uppercase tracking-wider ${
                    p.special ? "bg-orange text-white" : "bg-white/90 text-navy"
                  }`}>
                    {p.tag}
                  </span>
                </div>
              </div>
              <div className="p-8 relative z-10">
                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-6 ${
                  p.special ? "bg-orange/20 text-orange" : "bg-orange/10"
                }`}>
                  {p.icon}
                </div>
                <h3 className={`text-xl font-bold mb-3 ${p.special ? "text-navy" : "text-navy"}`}>{p.title}</h3>
                <p className={`leading-relaxed ${p.special ? "text-gray-600 font-medium" : "text-gray-500"}`}>{p.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
