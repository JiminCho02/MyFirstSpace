import { Hero } from "@/components/Hero";
import { CategoryGrid } from "@/components/CategoryGrid";
import { FeaturedParts } from "@/components/FeaturedParts";
import { Authority } from "@/components/Authority";

export default function Home() {
  return (
    <main className="min-h-screen bg-bgm-black">
      {/* Header/Nav would go here, but focusing on core requested sections */}
      <header className="fixed top-0 w-full z-50 border-b border-white/5 glass py-4">
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className="text-2xl font-black tracking-tighter">
            BGM<span className="text-n-red">.</span>
          </div>
          <nav className="hidden md:flex gap-12 items-center">
            {['INVENTORY', 'TUNING', 'REELS', 'CONTACT'].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`}
                className="text-[10px] font-mono tracking-[0.3em] hover:text-n-red transition-colors"
              >
                {item}
              </a>
            ))}
            <button className="px-5 py-2 border border-n-red text-n-red text-[10px] font-mono tracking-widest hover:bg-n-red hover:text-white transition-all">
              KOREA OFFICE
            </button>
          </nav>
        </div>
      </header>

      <Hero />
      <CategoryGrid />
      <FeaturedParts />
      <Authority />

      <footer className="py-20 border-t border-white/5 bg-bgm-black">
        <div className="container mx-auto px-6 text-center">
          <div className="text-4xl font-black tracking-tighter mb-8 opacity-20">
            BLACK GEAR MOTOR
          </div>
          <p className="text-gray-600 text-xs font-mono tracking-widest uppercase mb-4">
            Official Exporter of Performance Parts | Seoul, South Korea
          </p>
          <div className="flex justify-center gap-6 text-gray-400 mb-12">
            {/* Instagram Link Placeholder */}
            <span className="hover:text-n-red cursor-pointer transition-colors text-xs font-mono uppercase tracking-widest">Instagram</span>
            <span className="hover:text-n-red cursor-pointer transition-colors text-xs font-mono uppercase tracking-widest">YouTube</span>
          </div>
          <p className="text-[10px] text-gray-700 uppercase tracking-[0.2em]">
            © 2026 BLACK GEAR MOTOR. ALL RIGHTS RESERVED.
          </p>
        </div>
      </footer>
    </main>
  );
}
