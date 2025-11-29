import { Package, ShieldCheck, Ruler } from "lucide-react"

export function TrustLogistics() {
  const features = [
    {
      icon: Package,
      title: "Next-Day Freight",
      description: "Because harvest doesn't wait for shipping delays.",
    },
    {
      icon: ShieldCheck,
      title: "Certified Food-Grade",
      description: "FDA-compliant materials for total peace of mind.",
    },
    {
      icon: Ruler,
      title: "Precision Fit",
      description: "Guaranteed compatibility with standard TC and DIN fittings.",
    },
  ]

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-card border-t-2 border-border">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-12">
          {features.map((feature, index) => (
            <div key={index} className="text-center space-y-4">
              <div className="flex justify-center">
                <div className="w-16 h-16 border-2 border-primary flex items-center justify-center">
                  <feature.icon className="w-8 h-8 text-primary" strokeWidth={1.5} />
                </div>
              </div>
              <h3 className="text-xl font-bold text-foreground tracking-wide">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
