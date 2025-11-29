import { Button } from "@/components/ui/button"
import Link from "next/link"

export function HeroSection() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Overlay Gradient for readability - darker at bottom for text contrast */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/10 to-black/60 z-10" />

      <div className="absolute inset-0">
        <img
          src="/sonoma-county-crush-pad-golden-hour-harvest.jpg"
          alt="Sonoma County crush pad during harvest"
          className="w-full h-full object-cover animate-ken-burns"
        />
      </div>

      {/* Content - Bottom Aligned like modern luxury sites */}
      <div className="relative z-20 h-full flex flex-col justify-end pb-24 px-6 sm:px-12 lg:px-24">
        <div className="max-w-4xl">
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-serif text-white mb-6 leading-tight">
            more than <br/>
            <span className="italic">equipment awaits</span>
          </h1>
          
          <div className="flex flex-col sm:flex-row gap-8 mt-8 text-white/90">
            <Link href="/catalog" className="group flex items-center gap-2 uppercase tracking-widest text-xs hover:text-white transition-colors">
              Browse Catalog
              <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
            </Link>
            <Link href="/custom-fabrication" className="group flex items-center gap-2 uppercase tracking-widest text-xs hover:text-white transition-colors">
              Custom Fabrication
              <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
            </Link>
            <Link href="/contact" className="group flex items-center gap-2 uppercase tracking-widest text-xs hover:text-white transition-colors">
              Contact Us
              <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
