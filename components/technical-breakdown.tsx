export function TechnicalBreakdown() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Text */}
          <div className="space-y-6">
            <div className="inline-block px-3 py-1 bg-primary/10 border border-primary/20">
              <span className="text-xs font-semibold tracking-widest text-primary">MATERIAL INTEGRITY</span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-foreground text-balance">
              304 & 316 STAINLESS STANDARD.
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Don't risk your vintage on sub-par alloys. All Grayson fittings are chemically tested for food-safe
              compliance and corrosion resistance.
            </p>
          </div>

          {/* Right Column - Product Image with Blueprint Overlay */}
          <div className="relative">
            <div className="relative bg-card border border-border p-8 lg:p-12">
              <img
                src="/stainless-steel-butterfly-valve-floating-in-dark-s.jpg"
                alt="Butterfly Valve Technical Specifications"
                className="w-full h-auto"
              />

              {/* Blueprint overlay effect */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none" xmlns="http://www.w3.org/2000/svg">
                {/* Measurement lines */}
                <line
                  x1="10%"
                  y1="30%"
                  x2="90%"
                  y2="30%"
                  stroke="white"
                  strokeWidth="1"
                  opacity="0.3"
                  strokeDasharray="4 4"
                />
                <line
                  x1="20%"
                  y1="10%"
                  x2="20%"
                  y2="90%"
                  stroke="white"
                  strokeWidth="1"
                  opacity="0.3"
                  strokeDasharray="4 4"
                />
                <circle
                  cx="50%"
                  cy="50%"
                  r="30%"
                  stroke="white"
                  strokeWidth="1"
                  fill="none"
                  opacity="0.2"
                  strokeDasharray="4 4"
                />
              </svg>

              {/* Technical callouts */}
              <div className="absolute top-4 right-4 bg-background/90 border border-border px-3 py-2 backdrop-blur-sm">
                <p className="text-xs font-mono text-muted-foreground">Ø 3" TC</p>
              </div>
              <div className="absolute bottom-4 left-4 bg-background/90 border border-border px-3 py-2 backdrop-blur-sm">
                <p className="text-xs font-mono text-muted-foreground">316L SS</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
