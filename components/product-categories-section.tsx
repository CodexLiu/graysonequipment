import { Card } from "@/components/ui/card"

export function ProductCategoriesSection() {
  const categories = [
    {
      title: "Hoses & Pumps",
      image: "/coiled-industrial-hoses-and-tri-clamp-fittings-on-.jpg",
      description: "Fluid Management",
    },
    {
      title: "Hand Tools",
      image: "/aluminum-rake-luxury-product-photography-dark-back.jpg",
      description: "Sanitary Hand Tools",
    },
    {
      title: "Valves & Gauges",
      image: "/manway-door-pressure-gauge-stainless-steel-industr.jpg",
      description: "Tank Components",
    },
  ]

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-card">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-6">
          {categories.map((category, index) => (
            <Card
              key={index}
              className="group relative overflow-hidden border-2 border-border bg-secondary hover:border-primary transition-all duration-300 cursor-pointer"
            >
              <div className="aspect-square relative overflow-hidden">
                <img
                  src={category.image || "/placeholder.svg"}
                  alt={category.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <p className="text-xs text-primary font-mono tracking-widest mb-2">{category.description}</p>
                <h3 className="text-2xl font-bold text-foreground">{category.title}</h3>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
