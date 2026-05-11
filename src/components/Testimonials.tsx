import { motion } from "motion/react";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { useRef, useState } from "react";

const testimonials = [
  {
    name: "Rizky Pratama",
    grad: "Lulus 2024",
    text: "Program PHP Laravel saya yang tadinya berantakan dibantu rapihin sampai standar industri. Sekarang saya sudah kerja dan ilmu dari Om RT kepake banget di kantor."
  },
  {
    name: "Nurul Hidayah",
    grad: "Lulus 2023",
    text: "Tadinya bingung cari pembimbing dasar. Om Angga sabar banget bimbing sistem inventaris. Gak cuma dapet aplikasi, saya diajarin cara jelasin kodingan sampai lancar sidang."
  },
  {
    name: "Ahmad Fauzi",
    grad: "Lulus 2024",
    text: "Sangat terbantu untuk backend Python saya. Om Angga kasih banyak masukan arsitektur database yang efisien. Beliau bener-bener expert IT Manager."
  },
  {
    name: "Dwi Handoko",
    grad: "Lulus 2022",
    text: "Bimbingan sama Om RT Angga serasa punya mentor pribadi di perusahaan besar. Metodenya praktis. Simulasi sidangnya ngebantu banget pas ditanya soal keamanan data."
  },
  {
    name: "Indah Lestari",
    grad: "Lulus 2023",
    text: "Aplikasi mobile React Native saya akhirnya selesai tepat waktu. Om Angga sangat amanah. Buat yang kerja sambil kuliah, jadwal mentoring Om sangat fleksibel."
  },
  {
    name: "Bagas Saputra",
    grad: "Lulus 2024",
    text: "Awalnya skeptis, tapi Om RT Angga beda. Beliau bener-bener transfer knowledge, bukan cuma kasih file jadi. Saya jadi paham cara integrasi API yang bener."
  },
  {
    name: "Mega Utami",
    grad: "Lulus 2023",
    text: "Dapet mentor sekelas IT Manager itu rejeki banget. Om Angga ngebantu bimbing skripsi Android dari awal sampai siap demo. Dosen penguji sampai kaget kodingannya rapi."
  },
  {
    name: "Taufik Ismail",
    grad: "Lulus 2024",
    text: "Metode 5 pertemuan dari Om Angga itu efektif banget. Progresnya jelas. Database MySQL saya jadi lebih optimal setelah diajarin teknik tuning langsung dari ahlinya."
  },
  {
    name: "Putri Rahayu",
    grad: "Lulus 2023",
    text: "Om RT Angga jago banget jelasin hal teknis pakai bahasa yang gampang dimengerti. Skripsi sistem pendukung keputusan saya jadi lebih mantap fiturnya."
  },
  {
    name: "Andre Kurniawan",
    grad: "Lulus 2024",
    text: "Gak cuma bikin program, Om Angga juga kasih insight dunia kerja IT. Program web saya dipuji dosen pembimbing karena struktur kodenya yang bersih dan profesional."
  }
];

export default function Testimonials() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);
  
  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollTo = direction === 'left' ? scrollLeft - clientWidth : scrollLeft + clientWidth;
      scrollRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  };

  return (
    <section id="testimonials" className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6 mb-12 flex flex-col md:flex-row items-end justify-between gap-6">
        <div>
          <h2 className="text-3xl md:text-5xl font-bold text-navy mb-4">Kata Mereka</h2>
          <p className="text-gray-600 max-w-2xl">
            Cerita sukses para mahasiswa yang telah berhasil melewati tantangan skripsi bersama bimbingan Om RT Angga.
          </p>
        </div>
        <div className="flex gap-3">
          <button 
            onClick={() => scroll('left')}
            className="p-3 rounded-full border border-gray-200 hover:border-orange hover:text-orange transition-all bg-white shadow-sm z-20"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button 
            onClick={() => scroll('right')}
            className="p-3 rounded-full border border-gray-200 hover:border-orange hover:text-orange transition-all bg-white shadow-sm z-20"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>

      <div className="relative">
        {/* Fade Edges */}
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white via-white/80 to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white via-white/80 to-transparent z-10 pointer-events-none" />

        <div 
          ref={scrollRef}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          className="flex gap-6 overflow-hidden px-24 py-8"
        >
          <motion.div 
            animate={isPaused ? {} : { x: [0, "-50%"] }}
            transition={{ 
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 40,
                ease: "linear"
              }
            }}
            className="flex gap-6 min-w-max"
          >
            {/* Double the list for infinite marquee effect */}
            {[...testimonials, ...testimonials].map((t, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -10, scale: 1.02 }}
                className="w-[320px] md:w-[400px] bg-white p-8 rounded-3xl border border-gray-100 shadow-xl shadow-gray-100/50 transition-all duration-300 relative group shrink-0"
              >
                <div className="absolute inset-0 bg-navy/[0.02] rounded-3xl pointer-events-none" />
                <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                  <Quote className="w-16 h-16 text-navy" />
                </div>

                <div className="flex gap-1 mb-6 relative z-10">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-orange text-orange" />
                  ))}
                </div>

                <p className="text-gray-600 leading-relaxed mb-8 italic relative z-10 line-clamp-4">
                  "{t.text}"
                </p>

                <div className="flex items-center gap-4 border-t border-gray-100 pt-6 relative z-10">
                  <div className="w-12 h-12 bg-navy text-white rounded-full flex items-center justify-center font-bold text-lg">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-bold text-navy">{t.name}</h4>
                    <p className="text-xs text-gray-400 font-semibold tracking-wider uppercase">{t.grad}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
