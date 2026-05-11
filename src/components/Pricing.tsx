import { motion } from "motion/react";
import { Check, MessageCircle, Star, ShieldCheck, Zap } from "lucide-react";

const pricingData = [
  {
    name: "BASIC",
    price: "350.000",
    title: "Selesaikan Bug & Error",
    target: "Mahasiswa yang sudah punya program tapi stuck/error.",
    benefits: [
      "1x Sesi Konsultasi Intensif (2 Jam)",
      "Live Debugging & Perbaikan Error",
      "Optimasi Query Database sederhana",
      "Tanya Jawab Teknis via Zoom/Meet",
      "E-book 'Panduan Menghadapi Dosen Penguji' (Gratis)"
    ],
    cta: "Pesan Sesi Sekarang",
    highlight: false,
    icon: <Zap className="w-6 h-6 text-orange" />
  },
  {
    name: "POPULAR",
    price: "2.999.000",
    title: "Bimbingan Full s/d Lulus",
    badge: "Paling Banyak Dipilih",
    target: "Mahasiswa yang ingin dibimbing dari nol sampai siap sidang.",
    benefits: [
      "5 Pertemuan Terstruktur (Blueprint s/d Simulasi)",
      "Full Source Code (Laravel/React Native/PHP/Python)",
      "Dokumentasi Logika (UML & ERD) yang Sinkron",
      "Bimbingan via WhatsApp (Fast Response)",
      "1x Simulasi Sidang dengan pertanyaan maut dosen",
      "Garansi perbaikan jika ada revisi teknis"
    ],
    cta: "Mulai Bimbingan Sekarang",
    highlight: true,
    icon: <Star className="w-6 h-6 text-white" />
  },
  {
    name: "PREMIUM",
    price: "5.499.000",
    title: "Advanced AI & Vibe Coding",
    target: "Skripsi High-Level dengan teknologi masa depan.",
    benefits: [
      "Semua fitur Paket Popular",
      "Integrasi Google AI Studio / Gemini API",
      "Tech Stack Modern (Supabase, TypeScript, AI)",
      "Pengerjaan Kilat dengan Metode Vibe Coding",
      "Unlimited Simulasi Sidang sampai matang",
      "Prioritas pengerjaan & Konsultasi 24/7"
    ],
    cta: "Hubungi Om RT (Prioritas)",
    highlight: false,
    icon: <ShieldCheck className="w-6 h-6 text-orange" />
  }
];

export default function Pricing() {
  const whatsappUrl = "https://wa.me/628988047770?text=Om%20Rt%2C%20saya%20tertarik%20dengan%20paket%20";

  return (
    <section id="pricing" className="py-24 bg-gray-50/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-bold text-navy mb-4">Pilih Paket Bimbinganmu</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Investasi cerdas untuk kelulusan tepat waktu dengan bimbingan standar industri.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center max-w-7xl mx-auto">
          {pricingData.map((pkg, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className={`relative rounded-3xl p-8 flex flex-col h-full transition-all duration-300 ${
                pkg.highlight 
                ? "bg-navy text-white shadow-2xl scale-105 z-10 ring-4 ring-orange ring-opacity-50" 
                : "bg-white text-navy shadow-xl border border-gray-100"
              }`}
            >
              {pkg.badge && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-orange text-white text-[10px] font-black uppercase tracking-widest px-6 py-2 rounded-full shadow-lg">
                  {pkg.badge}
                </div>
              )}

              <div className="mb-8 flex justify-between items-start">
                <div>
                  <p className={`text-xs font-black tracking-widest uppercase mb-1 ${pkg.highlight ? "text-orange" : "text-gray-400"}`}>
                    {pkg.name}
                  </p>
                  <h3 className="text-xl font-bold leading-tight mb-2">{pkg.title}</h3>
                </div>
                <div className={`p-3 rounded-2xl ${pkg.highlight ? "bg-white/10" : "bg-gray-50"}`}>
                  {pkg.icon}
                </div>
              </div>

              <div className="mb-6">
                <p className={`text-sm leading-relaxed mb-6 ${pkg.highlight ? "text-white/70" : "text-gray-500"}`}>
                  {pkg.target}
                </p>
                <div className="flex items-baseline gap-1">
                  <span className="text-sm font-bold opacity-60">Rp</span>
                  <span className="text-4xl font-black">{pkg.price}</span>
                </div>
              </div>

              <div className="flex-grow space-y-4 mb-10 pb-10 border-b border-gray-100/10">
                {pkg.benefits.map((benefit, i) => (
                  <div key={i} className="flex gap-3">
                    <Check className={`w-5 h-5 flex-shrink-0 ${pkg.highlight ? "text-orange" : "text-orange"}`} />
                    <span className={`text-sm leading-tight ${pkg.highlight ? "text-white/90" : "text-gray-600"}`}>
                      {benefit}
                    </span>
                  </div>
                ))}
              </div>

              <a
                href={`${whatsappUrl}${encodeURIComponent(pkg.title)}`}
                target="_blank"
                rel="noreferrer"
                className={`w-full py-4 rounded-xl font-bold flex items-center justify-center gap-2 transition-all ${
                  pkg.highlight
                  ? "bg-orange hover:bg-orange/90 text-white shadow-[0_10px_20px_-10px_rgba(255,107,0,0.5)]"
                  : "bg-navy text-white hover:bg-navy/90 shadow-lg"
                }`}
              >
                <MessageCircle className="w-5 h-5" />
                {pkg.cta}
              </a>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="inline-flex flex-col md:flex-row items-center gap-4 bg-white border border-gray-100 px-8 py-4 rounded-3xl shadow-sm">
            <p className="text-gray-500 text-sm font-medium">
              <span className="text-navy font-bold">Catatan:</span> Tersedia sistem cicilan DP 50% untuk mulai pengerjaan. 
            </p>
            <div className="hidden md:block w-[1px] h-4 bg-gray-200" />
            <p className="text-gray-500 text-sm font-medium">
              Hubungi Om RT untuk custom project di luar paket ini.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
