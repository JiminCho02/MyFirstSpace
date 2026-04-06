"use client";

import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";

export const Hero = () => {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-bgm-black">
      {/* Background Glow Effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full">
        <div className="absolute inset-0 bg-red-glow opacity-30 animate-pulse-slow"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,170,219,0.05)_0%,transparent_70%)]"></div>
      </div>

      <div className="relative z-10 container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-n-red/30 bg-n-red/5 mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-n-red animate-pulse"></span>
          <span className="text-xs font-mono uppercase tracking-[0.2em] text-n-red">Direct from Korea</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-8xl font-black tracking-tighter mb-6 bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-500"
        >
          BLACK GEAR MOTOR
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-10 font-light"
        >
          Elevating Hyundai N to international standards. Premium performance parts for those who demand the origin of speed.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <button className="px-8 py-4 bg-n-red hover:bg-[#ff2a2a] transition-all duration-300 rounded-sm font-bold flex items-center gap-2 group">
            EXPLORE PARTS
            <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </button>
          <button className="px-8 py-4 border border-white/10 hover:border-n-blue/50 transition-all duration-300 rounded-sm font-bold glass">
            VIEW REEL
          </button>
        </motion.div>
      </div>

      {/* Aesthetic Tail Light Stroke */}
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-n-red to-transparent opacity-50"></div>
    </section>
  );
};
