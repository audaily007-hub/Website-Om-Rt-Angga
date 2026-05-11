import { motion } from "motion/react";
import { Sparkles, Code2, Database, Brain, Smartphone, Database as DbIcon } from "lucide-react";

export default function TechStack() {
  const stack = {
    modern: [
      { name: "Vibe Coding", icon: <Sparkles className="w-6 h-6" />, desc: "Metodologi pengembangan kilat berbasis AI", highlight: true },
      { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
      { name: "Supabase", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/supabase/supabase-original.svg", highlight: true },
    ],
    ai: [
      { name: "Google AI / Gemini", icon: "https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/google-gemini-icon.png" },
    ],
    builders: [
      { name: "Lovable", icon: "https://lovable.dev/favicon.ico" },
    ],
    core: [
      { name: "PHP Laravel", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg" },
      { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
      { name: "React Native", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
      { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
    ]
  };

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-navy mb-4">Modern Expertise Stack</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Memanfaatkan ekosistem AI dan framework modern untuk efisiensi maksimal dalam pengerjaan sistem.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 gap-4 auto-rows-[140px] md:auto-rows-[160px]">
          {/* Vibe Coding - Big Bento Card */}
          <motion.div 
            whileHover={{ y: -5 }}
            className="md:col-span-2 md:row-span-2 bg-navy text-white rounded-3xl p-8 flex flex-col justify-between relative overflow-hidden group border-2 border-orange/20"
          >
            <div className="absolute top-0 right-0 p-8 opacity-20 group-hover:opacity-40 transition-opacity">
              <Sparkles className="w-24 h-24 text-orange" />
            </div>
            <div className="z-10">
              <div className="w-12 h-12 bg-orange rounded-xl flex items-center justify-center mb-6">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-2">Vibe Coding</h3>
              <p className="text-orange font-medium text-sm">Metodologi pengembangan kilat berbasis AI</p>
            </div>
            <p className="text-gray-400 text-sm z-10 leading-relaxed">
              Mengoptimalkan LLM untuk debugging dan boilerplate generation dalam hitungan detik. Standar Silicon Valley.
            </p>
          </motion.div>

          {/* AI Stack - Gemini */}
          <motion.div 
            whileHover={{ y: -5 }}
            className="md:col-span-2 bg-gray-50 rounded-3xl p-6 flex flex-col justify-center gap-4 group border border-gray-100"
          >
            <p className="text-xs font-bold uppercase tracking-wider text-orange">Advanced AI Model</p>
            <div className="flex items-center gap-2">
              <img src={stack.ai[0].icon} alt="Gemini" className="h-10 w-10 object-contain" referrerPolicy="no-referrer" />
              <span className="font-bold text-navy text-lg text-nowrap">Google Gemini</span>
            </div>
          </motion.div>

          {/* Supabase Highlight */}
          <motion.div 
            whileHover={{ y: -5 }}
            className="md:col-span-2 bg-orange text-white rounded-3xl p-6 flex flex-col justify-center gap-4 relative overflow-hidden"
          >
            <div className="flex items-center gap-4">
              <div className="p-3 bg-white/20 rounded-xl">
                 <img 
                  src={stack.modern[2].icon as string} 
                  alt="Supabase" 
                  className="h-8 w-8 brightness-0 invert" 
                  referrerPolicy="no-referrer"
                />
              </div>
              <h3 className="text-xl font-bold">Supabase</h3>
            </div>
            <p className="text-sm text-white/80">Backend-as-a-Service for Rapid Scaling</p>
          </motion.div>

          {/* AI Builders - Lovable */}
          <motion.div 
            whileHover={{ y: -5 }}
            className="md:col-span-2 bg-gray-50 border border-gray-100 rounded-3xl p-6 flex flex-col justify-center gap-4"
          >
            <p className="text-xs font-bold uppercase tracking-wider text-orange">Development Tools</p>
            <div className="flex items-center gap-10">
              <div className="flex flex-col items-center gap-2">
                <img src="https://lovable.dev/favicon.ico" alt="Lovable" className="h-10 w-10 rounded-lg" referrerPolicy="no-referrer" />
                <span className="text-xs font-bold text-navy">Lovable</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <img src={stack.modern[1].icon as string} alt="TypeScript" className="h-10 w-10" referrerPolicy="no-referrer" />
                <span className="text-xs font-bold text-navy">TypeScript</span>
              </div>
            </div>
          </motion.div>

          {/* Core Core Stack */}
          <div className="md:col-span-4 lg:col-span-4 grid grid-cols-2 md:grid-cols-4 gap-4">
            {stack.core.map((item: any, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -5 }}
                className="bg-gray-50 border border-gray-100 rounded-3xl p-6 flex flex-col items-center justify-center gap-3 text-center group"
              >
                <img 
                  src={item.icon as string} 
                  alt={item.name} 
                  className="h-10 w-10 object-contain transition-all group-hover:scale-110" 
                  referrerPolicy="no-referrer"
                />
                <span className="text-xs font-bold text-navy">{item.name}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
