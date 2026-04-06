"use client";

import { motion } from "framer-motion";
import { Newspaper, Film, Wrench, Star, Bike } from "lucide-react";

const categories = [
  { id: 1, name: "News", icon: Newspaper },
  { id: 2, name: "Reels", icon: Film },
  { id: 3, name: "Tuning", icon: Wrench },
  { id: 4, name: "Reviews", icon: Star },
  { id: 5, name: "Bike", icon: Bike },
];

export const CategoryGrid = () => {
  return (
    <section className="py-20 bg-bgm-black border-b border-white/5">
      <div className="container mx-auto px-6">
        <div className="flex flex-wrap justify-center gap-8 md:gap-16">
          {categories.map((cat, idx) => (
            <motion.div
              key={cat.id}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="flex flex-col items-center gap-4 group cursor-pointer"
            >
              <div className="w-16 h-16 md:w-20 md:h-20 rounded-full glass flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:bg-n-red/10 group-hover:border-n-red/30 relative">
                <div className="absolute inset-0 rounded-full bg-red-glow opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <cat.icon size={28} className="text-gray-400 group-hover:text-n-red transition-colors relative z-10" />
              </div>
              <span className="text-xs font-mono uppercase tracking-widest text-gray-500 group-hover:text-white transition-colors">
                {cat.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
