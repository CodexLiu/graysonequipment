import { Button } from "@/components/ui/button"
import { Wrench, Ruler, Sparkles, Truck } from "lucide-react"
import Link from "next/link"

export function FabricationContent() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background/50 to-background z-10" />
        <img
          src="/cinematic-industrial-metal-fabrication-workshop-sp.jpg"
          alt="Workshop"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="relative z-20 text-center max-w-3xl px-4">
          <h1 className="text-6xl font-bold mb-6 tracking-tight text-balance">
            FROM NAPKIN SKETCH TO STAINLESS STEEL.
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            Bespoke engineering services for complex cellar installations and custom equipment builds.
          </p>
          <Link href="/rfq">
            <Button size="lg" className="bg-primary text-primary-foreground text-lg h-14 px-8">
              Start Your Project
            </Button>
          </Link>
        </div>
      </section>

      {/* Process Timeline */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <h2 className="text-4xl font-bold mb-16 text-center tracking-tight">Our Process</h2>

        <div className="space-y-24">
          {/* Step 1 */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block px-4 py-2 bg-primary/20 text-primary font-mono text-sm mb-4">STEP 01</div>
              <h3 className="text-3xl font-bold mb-4 tracking-tight">The Consult</h3>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Our engineering team meets with you to understand your production goals, spatial constraints, and
                technical requirements. We review existing infrastructure and discuss material specifications, pressure
                ratings, and compliance needs.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Whether you're expanding capacity or solving a specific operational challenge, we translate your vision
                into actionable specifications.
              </p>
            </div>
            <div className="aspect-[4/3] bg-card border border-border overflow-hidden">
              <img
                src="/friendly-young-blonde-woman-smiling-at-industrial-.jpg"
                alt="The Consult"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Step 2 */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1 aspect-[4/3] bg-card border border-border overflow-hidden">
              <img
                src="/cad-software-screenshot-stainless-steel-valve-3d-m.jpg"
                alt="CAD Design"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="order-1 md:order-2">
              <div className="inline-block px-4 py-2 bg-primary/20 text-primary font-mono text-sm mb-4">STEP 02</div>
              <h3 className="text-3xl font-bold mb-4 tracking-tight">CAD Design</h3>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                We create detailed 3D models and technical drawings using industry-standard CAD software. Every
                dimension is verified, every stress point analyzed, and every weld location documented.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                You'll receive comprehensive design files showing how your custom equipment integrates with existing
                systems, plus material specifications and cost breakdowns.
              </p>
            </div>
          </div>

          {/* Step 3 */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block px-4 py-2 bg-primary/20 text-primary font-mono text-sm mb-4">STEP 03</div>
              <h3 className="text-3xl font-bold mb-4 tracking-tight">Fabrication</h3>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Our certified welders and machinists bring your design to life using precision CNC equipment and
                sanitary welding techniques. Every component is built to exact specifications using FDA-compliant 304 or
                316 stainless steel.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Throughout fabrication, we conduct quality checks and document progress with detailed photography and
                inspection reports.
              </p>
            </div>
            <div className="aspect-[4/3] bg-card border border-border overflow-hidden">
              <img
                src="/welder-doing-tig-welding-on-stainless-steel-pipe-i.jpg"
                alt="Fabrication"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Step 4 */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1 aspect-[4/3] bg-card border border-border overflow-hidden">
              <img
                src="/installation-team-connecting-stainless-steel-equip.jpg"
                alt="Installation"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="order-1 md:order-2">
              <div className="inline-block px-4 py-2 bg-primary/20 text-primary font-mono text-sm mb-4">STEP 04</div>
              <h3 className="text-3xl font-bold mb-4 tracking-tight">Installation & Support</h3>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Our installation team delivers, positions, and connects your custom equipment, ensuring proper alignment
                and leak-free operation. We pressure-test all connections and verify system integration.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                After installation, we provide operator training and comprehensive documentation, plus ongoing technical
                support throughout the life of your equipment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities Grid */}
      <section className="bg-card border-y border-border py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-16 text-center tracking-tight">Core Capabilities</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/20 rounded flex items-center justify-center mx-auto mb-4">
                <Sparkles className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">TIG Welding</h3>
              <p className="text-sm text-muted-foreground">
                Sanitary-grade stainless steel welding with full penetration and smooth interior finish
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary/20 rounded flex items-center justify-center mx-auto mb-4">
                <Wrench className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">CNC Machining</h3>
              <p className="text-sm text-muted-foreground">
                Precision fabrication with tolerances to 0.001" for perfect fitment
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary/20 rounded flex items-center justify-center mx-auto mb-4">
                <Ruler className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Electropolishing</h3>
              <p className="text-sm text-muted-foreground">
                Mirror-finish surface treatment for enhanced cleanability and corrosion resistance
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary/20 rounded flex items-center justify-center mx-auto mb-4">
                <Truck className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">On-Site Installation</h3>
              <p className="text-sm text-muted-foreground">
                Professional installation services with pressure testing and system integration
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
        <h2 className="text-5xl font-bold mb-6 tracking-tight text-balance">Ready to Build Something Exceptional?</h2>
        <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
          Let's discuss your project requirements and create a custom solution that exceeds your expectations.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/rfq">
            <Button size="lg" className="bg-primary text-primary-foreground text-lg h-14 px-8">
              Start Your Project
            </Button>
          </Link>
          <Button size="lg" variant="outline" className="border-2 border-border bg-transparent text-lg h-14 px-8">
            View Portfolio
          </Button>
        </div>
      </section>
    </div>
  )
}
