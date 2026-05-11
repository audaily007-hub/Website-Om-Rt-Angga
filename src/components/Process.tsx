import { motion } from "motion/react";
import { Laptop, Code, Smartphone, Brain, Shield, Rocket } from "lucide-react";

const steps = [
  {
    icon: <Laptop className="w-10 h-10 text-orange" />,
    title: "1. Blueprint & Architecture",
    description: "Perancangan fondasi dan struktur sistem yang solid sebelum mulai menulis kode."
  },
  {
    icon: <Code className="w-10 h-10 text-orange" />,
    title: "2. Core Logic Development",
    description: "Membangun alur logika utama program dengan efisiensi dan best practices."
  },
  {
    icon: <Smartphone className="w-10 h-10 text-orange" />,
    title: "3. UI/UX Integration",
    description: "Integrasi tampilan yang modern dan responsif untuk pengalaman pengguna yang maksimal."
  },
  {
    icon: <Shield className="w-10 h-10 text-orange" />,
    title: "4. Security & QA",
    description: "Pengujian menyeluruh dan pengamanan sistem dari potensi celah keamanan."
  },
  {
    icon: <Rocket className="w-10 h-10 text-orange" />,
    title: "5. Thesis Defense Simulation",
    description: "Simulasi sidang untuk memastikan Anda siap menjawab setiap pertanyaan penguji."
  }
];

export default function Process() {
  return (
    <section id="mentoring" className="py-24 bg-white relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-[0.03]">
        <div className="absolute top-1/4 left-0 w-64 h-64 bg-orange rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-navy rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl font-bold text-navy mb-6 tracking-tight">
              5-Step Mentoring <span className="text-orange">Process</span>
            </h2>
            <p className="text-xl text-gray-500 max-w-3xl mx-auto italic leading-relaxed">
              "Metodologi terstruktur dari perancangan hingga simulasi sidang untuk kelulusan tepat waktu."
            </p>
          </motion.div>
        </div>

        <div className="relative">
          {/* Desktop Connecting Line */}
          <div className="hidden lg:block absolute top-[60px] left-[10%] right-[10%] h-[2px] bg-gradient-to-r from-transparent via-gray-200 to-transparent z-0" />

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-12 lg:gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.15, duration: 0.8 }}
                viewport={{ once: true }}
                className="relative group pt-4"
              >
                {/* Step Number Badge */}
                <div className="flex flex-col items-center">
                  <div className="w-24 h-24 mb-8 bg-white border-2 border-gray-100 rounded-3xl flex items-center justify-center text-navy shadow-xl group-hover:border-orange group-hover:scale-110 transition-all duration-500 relative z-10 bg-white">
                    <div className="absolute -top-3 -right-3 w-8 h-8 bg-orange text-white text-xs font-bold rounded-lg flex items-center justify-center shadow-lg">
                      {index + 1}
                    </div>
                    {step.icon}
                  </div>

                  <div className="text-center">
                    <h3 className="text-xl font-bold text-navy mb-4 group-hover:text-orange transition-colors">
                      {step.title.split('. ')[1]}
                    </h3>
                    <p className="text-gray-500 text-sm leading-relaxed px-2">
                      {step.description}
                    </p>
                  </div>
                </div>

                {/* Vertical line for mobile between items */}
                {index < steps.length - 1 && (
                  <div className="lg:hidden absolute -bottom-8 left-1/2 -translate-x-1/2 w-[2px] h-8 bg-gray-100" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
