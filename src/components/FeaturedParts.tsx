"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const products = [
  {
    id: 1,
    name: "Mando ECS Suspension",
    category: "Chassis",
    price: "$1,450",
    specs: "Active Damping | Track Tuned",
    image: "https://www.tunershop.shop/media/catalog/product/f/a/fahrwerkstechnik-st-st-gewindefahrwerk-st-xta_0.jpg?width=240&height=300&store=en&image-type=small_image",
  },
  {
    id: 2,
    name: "N-Performance Forged Wheels",
    category: "Wheels",
    price: "$2,800",
    specs: "Lightweight | 19x8.0J | High-Strength",
    image: "https://www.hyundai.com/content/dam/hyundai/au/en/owning/accessories/i30n-sedan-/800x480/HYUNDAI_ACCESSORIES_i30_N_Sedan_19_inch_NAMYANG_Forged_Alloy_Wheels_800x480.jpg",
  },
  {
    id: 3,
    name: "Carbon Aero spoiler",
    category: "Exterior",
    price: "$890",
    specs: "Real Carbon Fiber | Downforce+",
    image: "https://www.hyundai.com/content/dam/hyundai/ww/en/images/find-a-car/pip/n/ioniq6-n-25my/n-performance-parts/wide/design-wide-04-wing-splitter-mo.jpg",
  },
];

export const FeaturedParts = () => {
  return (
    <section className="py-24 bg-bgm-black">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
          <div>
            <h2 className="text-sm font-mono text-n-red uppercase tracking-[0.3em] mb-4">Precision Engineering</h2>
            <h3 className="text-4xl md:text-5xl font-black tracking-tighter">FEATURED N-PARTS</h3>
          </div>
          <p className="text-gray-500 max-w-sm text-right font-light">
            Each component is sourced directly from certified South Korean manufacturers.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product, idx) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              viewport={{ once: true }}
              className="group relative glass p-6 rounded-lg overflow-hidden red-glow-border transition-all duration-500 hover:-translate-y-2"
            >
              <div className="relative h-64 mb-6 overflow-hidden rounded-sm grayscale group-hover:grayscale-0 transition-all duration-700">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-bgm-black/80 to-transparent"></div>
              </div>

              <div className="flex justify-between items-start mb-2">
                <span className="text-[10px] font-mono text-n-blue uppercase tracking-widest">{product.category}</span>
                <span className="text-n-red font-bold">{product.price}</span>
              </div>

              <h4 className="text-xl font-bold mb-2 group-hover:text-n-red transition-colors">{product.name}</h4>
              <p className="text-xs text-gray-500 mb-6 font-mono">{product.specs}</p>

              <button className="flex items-center gap-2 text-xs font-bold tracking-widest uppercase py-2 border-b border-white/10 group-hover:border-n-red transition-all group-hover:text-n-red">
                Details <ArrowUpRight size={14} />
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
