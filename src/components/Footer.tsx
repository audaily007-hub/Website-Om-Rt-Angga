import { Linkedin, Github, Instagram, MessageCircle, MapPin, Mail, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-navy text-white py-20 border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <a href="#" className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 bg-orange rounded-xl flex items-center justify-center font-bold text-white text-xl">
                A
              </div>
              <span className="text-2xl font-bold">Om RT Angga</span>
            </a>
            <p className="text-gray-400 max-w-sm mb-8 leading-relaxed">
              Membantu mahasiswa IT menyelesaikan skripsi dengan standar industri melalui bimbingan teknis profesional yang ramah.
            </p>
            <div className="flex gap-4">
               {[Linkedin, Github, Instagram].map((Icon, i) => (
                 <a key={i} href="#" className="w-10 h-10 bg-white/5 hover:bg-orange rounded-lg flex items-center justify-center transition-all">
                   <Icon className="w-5 h-5" />
                 </a>
               ))}
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-6">Quick Links</h4>
            <ul className="space-y-4 text-gray-400">
              <li><a href="#about" className="hover:text-orange transition-colors">About Me</a></li>
              <li><a href="#mentoring" className="hover:text-orange transition-colors">Process</a></li>
              <li><a href="#portfolio" className="hover:text-orange transition-colors">Portfolio</a></li>
              <li><a href="#blog" className="hover:text-orange transition-colors">Blog & Resources</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Contact Details</h4>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-gray-400">
                <Phone className="w-4 h-4 text-orange" />
                08988047770
              </li>
              <li className="pt-2">
                 <a 
                  href="https://wa.me/628988047770?text=Om%20Rt%2C%20saya%20mau%20konsultasi%20gratis%20untuk%20bimbingan%20skripsi%2C%20sekalian%20tanya-tanya%20boleh%20ya%20Om" 
                  className="flex items-center gap-2 px-6 py-3 bg-white/5 hover:bg-white/10 rounded-xl transition-all border border-white/10"
                >
                  <MessageCircle className="w-4 h-4" />
                  Live Chat WhatsApp
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-500">
          <p>© 2026 Om RT Angga. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
