"use client"

import { useRef } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ShoppingCart, ChevronLeft, ChevronRight } from "lucide-react"

export function HarvestEssentials() {
  const scrollRef = useRef<HTMLDivElement>(null)

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 400
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      })
    }
  }

  const products = [
    {
      name: "Aluminum Rake - 60 inch",
      image: "/aluminum-harvest-rake-60-inch-industrial-photograp.jpg",
      description: "Lightweight, food-safe aluminum alloy",
      price: "$189",
      link: "/products/1",
    },
    {
      name: "Inline Sight Glass",
      image: "/stainless-steel-inline-sight-glass-with-gasket-dar.jpg",
      description: '2.5" TC connections, borosilicate glass',
      price: "$175",
      link: "/products/sight-glass",
    },
    {
      name: "Heavy-Duty Tri-Clamp Set",
      image: "/polished-stainless-steel-tri-clamp-fitting-floatin.jpg",
      description: "304 stainless, heavy hinge construction",
      price: "$89",
      link: "/products/tri-clamp",
    },
    {
      name: "Sanitary Butterfly Valve",
      image: "/stainless-steel-butterfly-valve-isometric-floating.jpg",
      description: "316L stainless with EPDM seal",
      price: "$245",
      link: "/products/butterfly-valve",
    },
  ]

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-foreground">FIELD-TESTED FAVORITES.</h2>
          <div className="hidden sm:flex gap-2">
            <Button variant="outline" size="icon" onClick={() => scroll("left")} className="border-border">
              <ChevronLeft className="w-5 h-5" />
            </Button>
            <Button variant="outline" size="icon" onClick={() => scroll("right")} className="border-border">
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>
        </div>

        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto scrollbar-hide snap-x snap-mandatory pb-4"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {products.map((product, index) => (
            <a
              key={index}
              href={product.link}
              className="group relative flex-shrink-0 w-80 bg-card border-2 border-border hover:border-primary transition-all duration-300 snap-start block"
            >
              <Card className="h-full border-0">
                <div className="aspect-square relative overflow-hidden bg-secondary">
                  <img
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6 space-y-4">
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-2">{product.name}</h3>
                    <p className="text-sm text-muted-foreground">{product.description}</p>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-primary">{product.price}</span>
                    <Button
                      size="icon"
                      variant="outline"
                      className="border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
                    >
                      <ShoppingCart className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </Card>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
