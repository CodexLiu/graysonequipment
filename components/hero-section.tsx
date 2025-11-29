import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/50 to-background/70 z-10" />

      <div className="absolute inset-0">
        <img
          src="/sonoma-county-crush-pad-golden-hour-harvest.jpg"
          alt="Sonoma County crush pad during harvest"
          className="w-full h-full object-cover animate-ken-burns"
        />
      </div>

      <div className="absolute top-24 right-8 z-30 backdrop-blur-md bg-card/80 border border-border rounded-lg px-4 py-3 flex items-center gap-3">
        <svg className="w-6 h-6 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 2L3 7v6c0 5.5 3.8 10.7 9 12 5.2-1.3 9-6.5 9-12V7l-9-5z" />
          <path d="M12 8v8M8 12h8" />
        </svg>
        <div className="text-sm">
          <div className="font-bold text-foreground">HQ: Petaluma, CA</div>
          <div className="text-muted-foreground">Est. 2016</div>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-20 h-full flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl text-center">
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-foreground mb-6 text-balance">
            SONOMA COUNTY'S HARVEST PARTNER.
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-foreground max-w-3xl mx-auto mb-12 leading-relaxed text-balance backdrop-blur-sm bg-background/40 py-4 px-6 rounded-lg shadow-[0_0_20px_rgba(0,0,0,0.5)]">
            Stocked in Petaluma, delivered to your crush pad. We provide the sanitary fittings, hoses, and harvest tools wine makers rely on.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-2xl mx-auto">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-base font-semibold tracking-wide w-full sm:w-auto"
              asChild
            >
              <a href="/catalog">BROWSE CATALOG</a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="backdrop-blur-sm bg-card/30 border-border hover:bg-card/50 px-8 py-6 text-base font-semibold tracking-wide w-full sm:w-auto"
              asChild
            >
              <a href="/catalog">WILL-CALL PICKUP</a>
            </Button>
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-10" />
    </section>
  )
}
