import { motion } from "motion/react";
import { BadgeCheck, User, ShieldCheck } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-24 bg-white relative overflow-hidden">
      {/* Neighborhood Branding Pattern */}
      <div className="absolute inset-0 opacity-[0.4] pointer-events-none" style={{ backgroundImage: 'var(--background-image-neighborhood)', backgroundSize: '40px 40px' }} />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-3xl md:text-6xl font-bold text-navy mb-8 leading-tight">
              Kombinasi Unik Antara <br />
              <span className="text-orange">Expert Industri</span> & <br /> Pengayom Masyarakat
            </h2>
            
            <p className="text-lg md:text-xl text-gray-600 mb-12 leading-relaxed">
              Om RT Angga bukan sekadar mentor biasa. Dengan latar belakang 15+ tahun sebagai **IT Manager** 
              dan lulusan **Universitas Gunadarma**, beliau membawa standar industri ke dunia akademik untuk membantu mahasiswa sukses di fase akhir studi mereka.
            </p>

            <div className="grid md:grid-cols-3 gap-8 mb-10">
              <div className="flex flex-col items-center text-center gap-4">
                <div className="w-16 h-16 bg-navy/5 rounded-2xl flex items-center justify-center text-navy ring-1 ring-navy/10">
                  <BadgeCheck className="w-8 h-8" />
                </div>
                <div>
                  <h4 className="font-bold text-navy text-xl mb-2">System Architect</h4>
                  <p className="text-gray-500 text-sm">Berpengalaman merancang sistem skala besar dengan arsitektur modern.</p>
                </div>
              </div>
              <div className="flex flex-col items-center text-center gap-4">
                <div className="w-16 h-16 bg-navy/5 rounded-2xl flex items-center justify-center text-navy ring-1 ring-navy/10">
                  <User className="w-8 h-8" />
                </div>
                <div>
                  <h4 className="font-bold text-navy text-xl mb-2">Helpful Mentor</h4>
                  <p className="text-gray-500 text-sm">Pendekatan "Pak RT" yang ramah, solutif, dan mudah dipahami mahasiswa.</p>
                </div>
              </div>
              <div className="flex flex-col items-center text-center gap-4">
                <div className="w-16 h-16 bg-navy/5 rounded-2xl flex items-center justify-center text-navy ring-1 ring-navy/10">
                  <ShieldCheck className="w-8 h-8" />
                </div>
                <div>
                  <h4 className="font-bold text-navy text-xl mb-2">Proven Track Record</h4>
                  <p className="text-gray-500 text-sm">Telah membantu ratusan mahasiswa menyelesaikan skripsi tepat waktu.</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
