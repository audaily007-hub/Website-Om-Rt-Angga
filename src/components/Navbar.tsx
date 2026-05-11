import { useState, useEffect } from "react";
import { Menu, X, MessageCircle } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Mentoring", href: "#mentoring" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Blog", href: "#blog" },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? "bg-white/90 backdrop-blur shadow-md py-4" : "bg-transparent py-6"
    }`}>
      <div className="container mx-auto px-6 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <div className="w-10 h-10 bg-orange rounded-xl flex items-center justify-center font-bold text-white text-xl">
            A
          </div>
          <span className={`text-xl font-bold ${isScrolled ? "text-navy" : "text-white"}`}>
            Om RT Angga
          </span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8 text-sm font-semibold">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className={`transition-colors ${isScrolled ? "text-gray-600 hover:text-orange" : "text-white/80 hover:text-white"}`}
            >
              {link.name}
            </a>
          ))}
          <a 
            href="https://wa.me/628988047770?text=Om%20Rt%2C%20saya%20mau%20konsultasi%20gratis%20untuk%20bimbingan%20skripsi%2C%20sekalian%20tanya-tanya%20boleh%20ya%20Om" 
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 px-5 py-2.5 bg-orange hover:bg-orange/90 text-white rounded-lg transition-all"
          >
            <MessageCircle className="w-4 h-4" />
            WhatsApp
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden p-2 text-current" 
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className={isScrolled ? "text-navy" : "text-white"} /> : <Menu className={isScrolled ? "text-navy" : "text-white"} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-xl py-6 px-6 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-gray-600 font-semibold"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <a 
            href="https://wa.me/628988047770?text=Om%20Rt%2C%20saya%20mau%20konsultasi%20gratis%20untuk%20bimbingan%20skripsi%2C%20sekalian%20tanya-tanya%20boleh%20ya%20Om" 
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-center gap-2 px-5 py-4 bg-orange text-white rounded-xl font-bold"
          >
            <MessageCircle className="w-5 h-5" />
            Hubungi Mentor
          </a>
        </div>
      )}
    </nav>
  );
}
