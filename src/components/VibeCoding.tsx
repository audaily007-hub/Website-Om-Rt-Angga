import { motion } from "motion/react";
import { Sparkles, Zap, Target, Cpu, ArrowRight } from "lucide-react";

export default function VibeCoding() {
  return (
    <section id="vibe-coding" className="py-24 bg-navy relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ 
              opacity: [0.1, 0.3, 0.1], 
              scale: [1, 1.2, 1],
              x: [0, Math.random() * 100 - 50, 0],
              y: [0, Math.random() * 100 - 50, 0]
            }}
            transition={{ 
              duration: 5 + i, 
              repeat: Infinity,
              ease: "easeInOut" 
            }}
            className="absolute bg-orange/20 blur-[80px] rounded-full"
            style={{
              width: `${150 + i * 50}px`,
              height: `${150 + i * 50}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
          />
        ))}
        {/* Floating Code Snippets simulation */}
        <div className="absolute inset-0 opacity-[0.03] font-mono text-[10px] text-white leading-loose select-none p-10">
          {`const ai = new GoogleGenAI(process.env.GEMINI_API_KEY);\nconst model = ai.getGenerativeModel({ model: "gemini-pro" });\n\n// Vibe Coding logic\nasync function solveThesis() {\n  const prompt = "Build a robust Laravel API...";\n  const result = await model.generateContent(prompt);\n  return result.response.text();\n}`}
        </div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 mb-8 bg-orange text-white rounded-full text-xs font-bold uppercase tracking-widest shadow-[0_0_20px_rgba(249,115,22,0.5)]"
          >
            <Sparkles className="w-3.5 h-3.5" />
            Exclusive Methodology
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-6xl font-bold text-white mb-8 leading-tight"
          >
            Vibe Coding: <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange to-orange/60">Standar Baru</span> <br /> 
            Pengerjaan Skripsi di Era AI
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-gray-300 mb-12 leading-relaxed"
          >
            Lupakan metode lama yang memakan waktu berbulan-bulan. Dengan **Vibe Coding**, Om RT Angga membantu kamu menerjemahkan ide menjadi aplikasi nyata dalam hitungan hari. Kami menggunakan kekuatan AI untuk menangani detail teknis, sehingga kamu bisa fokus menguasai konsep dan logika untuk menghadapi dosen penguji.
          </motion.p>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {[
              { icon: <Zap className="w-6 h-6" />, title: "Speed", desc: "Pengerjaan 5x lebih cepat dari metode konvensional." },
              { icon: <Target className="w-6 h-6" />, title: "Accuracy", desc: "Logika sistem lebih terjaga karena dibantu AI kelas dunia." },
              { icon: <Cpu className="w-6 h-6" />, title: "Future-Ready", desc: "Mahasiswa belajar cara kerja developer modern Silicon Valley." }
            ].map((benefit, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + i * 0.1 }}
                className="bg-white/5 border border-white/10 p-8 rounded-3xl hover:bg-white/10 transition-all group backdrop-blur-sm"
              >
                <div className="w-12 h-12 bg-orange/20 text-orange rounded-2xl flex items-center justify-center mb-6 shadow-[0_0_15px_rgba(249,115,22,0.2)] group-hover:shadow-[0_0_20px_rgba(249,115,22,0.4)] transition-all">
                  {benefit.icon}
                </div>
                <h4 className="text-xl font-bold text-white mb-3">{benefit.title}</h4>
                <p className="text-gray-400 text-sm leading-relaxed">{benefit.desc}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
             initial={{ opacity: 0 }}
             whileInView={{ opacity: 1 }}
             viewport={{ once: true }}
             transition={{ delay: 0.7 }}
          >
            <a 
              href="https://wa.me/628988047770?text=Om%20Rt%2C%20saya%20mau%20tanya%20tentang%20metode%20Vibe%20Coding%20untuk%20skripsi%20saya" 
              className="inline-flex items-center gap-2 text-orange font-bold text-lg hover:gap-4 transition-all"
            >
              Cari tahu bagaimana Vibe Coding mempercepat skripsimu <ArrowRight className="w-5 h-5" />
            </a>
          </motion.div>
        </div>
      </div>

      {/* Neon Glow Lines */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-orange/30 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-orange/30 to-transparent" />
    </section>
  );
}
