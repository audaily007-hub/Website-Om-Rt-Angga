import { motion } from "motion/react";
import { MessageCircle } from "lucide-react";

export default function FloatingWhatsApp() {
  return (
    <motion.a
      href="https://wa.me/628988047770?text=Om%20Rt%2C%20saya%20mau%20konsultasi%20gratis%20untuk%20bimbingan%20skripsi%2C%20sekalian%20tanya-tanya%20boleh%20ya%20Om"
      target="_blank"
      rel="noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      whileHover={{ scale: 1.1 }}
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-2xl flex items-center gap-2 group overflow-hidden"
    >
      <span className="max-w-0 group-hover:max-w-xs transition-all duration-500 ease-in-out whitespace-nowrap overflow-hidden font-semibold">
        Konsultasi Gratis
      </span>
      <MessageCircle className="w-8 h-8 fill-current" />
    </motion.a>
  );
}
