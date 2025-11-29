import Link from "next/link"

export function ProductCategoriesSection() {
  const categories = [
    {
      title: "Hoses & Pumps",
      image: "/coiled-industrial-hoses-and-tri-clamp-fittings-on-.jpg",
      description: "Fluid Management",
      href: "/catalog",
    },
    {
      title: "Hand Tools",
      image: "/aluminum-rake-luxury-product-photography-dark-back.jpg",
      description: "Sanitary Hand Tools",
      href: "/catalog",
    },
    {
      title: "Valves & Gauges",
      image: "/manway-door-pressure-gauge-stainless-steel-industr.jpg",
      description: "Tank Components",
      href: "/catalog",
    },
  ]

  return (
    <section className="py-24 px-6 sm:px-12 lg:px-24 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-12">
          {categories.map((category, index) => (
            <Link href={category.href} key={index} className="group block">
              <div className="aspect-[3/4] relative overflow-hidden mb-8">
                <img
                  src={category.image || "/placeholder.svg"}
                  alt={category.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="text-center space-y-3">
                <h3 className="text-3xl font-serif text-primary group-hover:text-accent transition-colors">
                  {category.title}
                </h3>
                <p className="text-sm text-muted-foreground uppercase tracking-widest font-sans">
                  {category.description}
                </p>
                <div className="pt-4">
                  <span className="text-xs uppercase tracking-widest border-b border-primary pb-1 group-hover:border-accent transition-colors">
                    Explore Collection
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
