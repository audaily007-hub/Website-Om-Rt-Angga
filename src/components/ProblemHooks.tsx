import { useState } from "react";
import { motion } from "motion/react";
import { Bug, Ghost, Compass, FileText, Clock, AlertTriangle, RefreshCcw } from "lucide-react";

const hooks = [
  {
    icon: <Bug className="w-10 h-10" />,
    problem: "Koding Error & Stuck",
    solution: "Gak perlu begadang seminggu. Dengan Vibe Coding, Om RT bantu beresin bug dalam hitungan jam."
  },
  {
    icon: <Ghost className="w-10 h-10" />,
    problem: "Dosen Pembimbing Killer",
    solution: "Takut ditanya yang aneh-aneh? Om RT kasih simulasi sidang biar kamu bisa jawab dengan standar industri."
  },
  {
    icon: <Compass className="w-10 h-10" />,
    problem: "Bingung Mulai dari Mana",
    solution: "Skripsi itu soal alur. Om RT buatin Blueprint & Arsitektur yang jelas di pertemuan pertama."
  },
  {
    icon: <FileText className="w-10 h-10" />,
    problem: "Metode Penulisan Berantakan",
    solution: "Bukan cuma koding, Om RT bimbing logika UML & ERD agar sinkron dengan aplikasi yang dibuat."
  },
  {
    icon: <Clock className="w-10 h-10" />,
    problem: "Teknologi Ketinggalan Zaman",
    solution: "Masih pakai cara lama? Yuk upgrade skripsimu pakai AI, TypeScript, atau Supabase bareng Om RT."
  },
  {
    icon: <AlertTriangle className="w-10 h-10" />,
    problem: "Deadline Sudah di Depan Mata",
    solution: "Sisa waktu tinggal sebulan? Tenang, mekanisme 5 pertemuan Om RT dirancang buat kamu yang mau lulus kilat."
  }
];

function FlashCard({ hook, index }: { hook: typeof hooks[0], index: number }) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div 
      className="perspective-1000 w-full h-64 cursor-pointer"
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <motion.div
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6, type: "spring", stiffness: 260, damping: 20 }}
        className="relative w-full h-full preserve-3d"
      >
        {/* Front */}
        <div className="absolute inset-0 backface-hidden bg-gray-50 border border-gray-100 rounded-3xl p-8 flex flex-col items-center justify-center text-center shadow-sm">
          <div className="text-navy mb-4 opacity-80">
            {hook.icon}
          </div>
          <h3 className="text-xl font-bold text-navy leading-tight">
            {hook.problem}
          </h3>
          <div className="absolute bottom-6 flex items-center gap-2 text-[10px] font-bold text-gray-400 uppercase tracking-widest">
            <RefreshCcw className="w-3 h-3" />
            Flip for Solution
          </div>
        </div>

        {/* Back */}
        <div 
          className="absolute inset-0 backface-hidden bg-orange rounded-3xl p-8 flex flex-col items-center justify-center text-center shadow-lg"
          style={{ transform: "rotateY(180deg)" }}
        >
          <p className="text-white font-bold leading-relaxed">
            {hook.solution}
          </p>
          <div className="absolute bottom-6 text-[10px] font-bold text-white/60 uppercase tracking-widest">
            Solusi Om RT Angga
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default function ProblemHooks() {
  return (
    <section className="py-16 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-navy mb-4">Kenapa Skripsimu Belum Kelar?</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Mungkin salah satu dari masalah klasik ini yang bikin kamu stuck. Tenang, Om RT punya solusinya.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {hooks.map((hook, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <FlashCard hook={hook} index={index} />
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        .perspective-1000 {
          perspective: 1000px;
        }
        .preserve-3d {
          transform-style: preserve-3d;
        }
        .backface-hidden {
          backface-visibility: hidden;
        }
      `}</style>
    </section>
  );
}
