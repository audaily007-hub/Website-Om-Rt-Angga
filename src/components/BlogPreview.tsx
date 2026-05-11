import { motion } from "motion/react";
import { ArrowRight, Calendar, Tag } from "lucide-react";

const articles = [
  {
    title: "10 Topik Skripsi IT Paling Relevan di 2026",
    excerpt: "Daftar ide skripsi yang mudah diterima dosen dan memiliki nilai jual di masa depan.",
    image: "https://picsum.photos/seed/article1/600/400",
    date: "May 10, 2026",
    category: "Thesis Tips"
  },
  {
    title: "Tips Jitu Demo Program di Depan Penguji",
    excerpt: "Cara mengatasi rasa gugup dan menjawab pertanyaan teknis saat simulasi sidang.",
    image: "https://picsum.photos/seed/article2/600/400",
    date: "Apr 28, 2026",
    category: "Career"
  },
  {
    title: "AI Integration: Masa Depan App Development",
    excerpt: "Mengapa Anda harus mulai mengintegrasikan LLM ke dalam aplikasi yang Anda bangun.",
    image: "https://picsum.photos/seed/article3/600/400",
    date: "Apr 15, 2026",
    category: "Technology"
  }
];

export default function BlogPreview() {
  return (
    <section id="blog" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-navy mb-4">Blog & Resources</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Berbagi wawasan seputar teknologi, tips skripsi, dan perkembangan industri IT.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {articles.map((art, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white group cursor-pointer"
            >
              <div className="relative h-64 rounded-3xl overflow-hidden mb-6">
                <img 
                  src={art.image} 
                  alt={art.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 left-4">
                   <div className="flex items-center gap-1.5 px-3 py-1 bg-white/90 backdrop-blur rounded-full shadow-sm">
                      <Tag className="w-3 h-3 text-orange" />
                      <span className="text-[10px] font-bold text-navy uppercase tracking-widest">{art.category}</span>
                   </div>
                </div>
              </div>
              <div className="flex items-center gap-4 text-xs text-gray-400 mb-3 ml-2 font-medium">
                <div className="flex items-center gap-1">
                   <Calendar className="w-3.5 h-3.5" />
                   {art.date}
                </div>
              </div>
              <h3 className="text-xl font-bold text-navy mb-3 group-hover:text-orange transition-colors px-2">
                {art.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-4 px-2">
                {art.excerpt}
              </p>
              <div className="flex items-center gap-2 text-orange font-bold text-sm px-2 group-hover:gap-4 transition-all">
                Read Article <ArrowRight className="w-4 h-4" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
