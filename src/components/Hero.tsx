import { motion } from "motion/react";
import { MessageCircle } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-[70vh] flex items-center pt-32 pb-16 overflow-hidden bg-navy text-white">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-orange rounded-full blur-[120px] -mr-64 -mt-64" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-orange rounded-full blur-[120px] -ml-64 -mb-64" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-block px-4 py-1.5 mb-6 bg-orange/20 border border-orange/30 rounded-full text-orange font-medium text-sm">
              IT Mentor & System Specialist
            </div>
            <h1 className="text-4xl md:text-7xl font-bold leading-tight mb-6">
              Selesaikan Software Skripsi <br />
              <span className="text-orange underline decoration-wavy decoration-2 underline-offset-8">Tanpa Drama</span> <br /> 
              bersama Om RT Angga
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
              Bimbingan teknis profesional dari praktisi industri berpengalaman 15+ tahun. 
              Dari blueprint hingga simulasi sidang, kami kawal sampai lulus.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center">
              <a 
                href="https://wa.me/628988047770?text=Om%20Rt%2C%20saya%20mau%20konsultasi%20gratis%20untuk%20bimbingan%20skripsi%2C%20sekalian%20tanya-tanya%20boleh%20ya%20Om" 
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 px-8 py-4 bg-orange hover:bg-orange/90 text-white font-bold rounded-xl transition-all shadow-lg hover:shadow-orange/20 hover:-translate-y-1"
              >
                <MessageCircle className="w-5 h-5" />
                Konsultasi Gratis via WhatsApp
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
