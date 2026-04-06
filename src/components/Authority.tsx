"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Globe, Zap } from "lucide-react";

export const Authority = () => {
  return (
    <section className="py-32 bg-bgm-black border-t border-white/5 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-bl from-n-red/5 to-transparent"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
            <h4 className="text-n-blue font-mono text-xs uppercase tracking-[0.4em] mb-6">THE BGM ADVANTAGE</h4>
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-8 leading-tight">
              GENUINE KOREAN <br />
              <span className="text-n-red">PERFORMANCE SOURCE</span>
            </h2>
            <p className="text-gray-400 text-lg font-light mb-12 max-w-xl">
              Black Gear Motor stands as the definitive bridge between South Korea&apos;s elite tuning culture and the global Hyundai N community. We don&apos;t just sell parts; we export the authentic N experience.
            </p>
            
            <div className="space-y-8">
              <div className="flex gap-6 items-start">
                <div className="mt-1 p-2 rounded-sm bg-n-red/10 border border-n-red/20 text-n-red">
                  <ShieldCheck size={24} />
                </div>
                <div>
                  <h5 className="font-bold mb-1">OEM+ Certification</h5>
                  <p className="text-sm text-gray-500">Every component is verified for fitment and performance durability on Korean circuit grounds.</p>
                </div>
              </div>
              
              <div className="flex gap-6 items-start">
                <div className="mt-1 p-2 rounded-sm bg-n-blue/10 border border-n-blue/20 text-n-blue">
                  <Globe size={24} />
                </div>
                <div>
                  <h5 className="font-bold mb-1">Global Logistics</h5>
                  <p className="text-sm text-gray-500">Direct air-freight from Incheon to your doorstep, ensuring minimum lead times for maximum speed.</p>
                </div>
              </div>
            </div>
          </div>
          
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="relative"
          >
            <div className="aspect-square glass rounded-sm flex items-center justify-center p-12 relative overflow-hidden group">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(230,32,32,0.1)_0%,transparent_70%)] animate-pulse-slow"></div>
              <div className="relative z-10 text-center">
                <Zap size={80} className="text-n-red mx-auto mb-8 animate-bounce" />
                <h3 className="text-3xl font-black tracking-widest mb-4">TUNED IN <br/> SEOUL</h3>
                <div className="w-12 h-1 bg-n-red mx-auto"></div>
              </div>
              
              {/* Technical Decorative Lines */}
              <div className="absolute top-4 left-4 w-8 h-8 border-t border-l border-white/20"></div>
              <div className="absolute bottom-4 right-4 w-8 h-8 border-b border-r border-white/20"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
