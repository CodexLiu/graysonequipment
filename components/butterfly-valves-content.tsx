"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

const butterflyValves = [
  {
    id: "bv-1.5-304",
    name: '1.5" Butterfly Valve',
    sku: "BV-1.5-304",
    size: '1.5"',
    material: "304 SS",
    connection: "Tri-Clamp",
    price: "$195.00",
    image: "/butterfly-valve-1.5-inch-304-stainless-steel.jpg",
  },
  {
    id: "bv-2-316l",
    name: '2" Butterfly Valve',
    sku: "BV-2-316L",
    size: '2"',
    material: "316L SS",
    connection: "Tri-Clamp",
    price: "$245.00",
    image: "/butterfly-valve-2-inch-316l-stainless-steel.jpg",
  },
  {
    id: "bv-2.5-304",
    name: '2.5" Butterfly Valve',
    sku: "BV-2.5-304",
    size: '2.5"',
    material: "304 SS",
    connection: "Tri-Clamp",
    price: "$275.00",
    image: "/butterfly-valve-2.5-inch-304-stainless-steel.jpg",
  },
  {
    id: "bv-3-316",
    name: '3" Butterfly Valve',
    sku: "BV-3-316",
    size: '3"',
    material: "316 SS",
    connection: "Tri-Clamp",
    price: "$320.00",
    image: "/butterfly-valve-3-inch-316-stainless-steel.jpg",
  },
  {
    id: "bv-4-316l",
    name: '4" Butterfly Valve',
    sku: "BV-4-316L",
    size: '4"',
    material: "316L SS",
    connection: "Tri-Clamp",
    price: "$425.00",
    image: "/butterfly-valve-4-inch-316l-stainless-steel.jpg",
  },
  {
    id: "bv-6-304",
    name: '6" Butterfly Valve',
    sku: "BV-6-304",
    size: '6"',
    material: "304 SS",
    connection: "Tri-Clamp",
    price: "$595.00",
    image: "/butterfly-valve-6-inch-304-stainless-steel.jpg",
  },
]

export function ButterflyValvesContent() {
  const [selectedSize, setSelectedSize] = useState<string>("all")
  const [selectedMaterial, setSelectedMaterial] = useState<string>("all")

  const filteredValves = butterflyValves.filter((valve) => {
    if (selectedSize !== "all" && valve.size !== selectedSize) return false
    if (selectedMaterial !== "all" && valve.material !== selectedMaterial) return false
    return true
  })

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Breadcrumbs */}
      <div className="mb-8">
        <nav className="flex items-center gap-2 text-sm text-muted-foreground font-mono">
          <a href="/" className="hover:text-foreground transition-colors">
            Home
          </a>
          <span>/</span>
          <a href="/catalog" className="hover:text-foreground transition-colors">
            Catalog
          </a>
          <span>/</span>
          <span className="text-foreground">Butterfly Valves</span>
        </nav>
      </div>

      {/* Hero Section */}
      <section className="mb-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl font-bold mb-6 tracking-tight">Sanitary Butterfly Valves</h1>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Premium food-grade butterfly valves engineered for winery and brewery applications. Available in 304, 316,
              and 316L stainless steel with tri-clamp connections for easy installation and maintenance.
            </p>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold">•</span>
                <span>Full flow design for minimal pressure drop</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold">•</span>
                <span>EPDM seals rated for wine, beer, and spirits</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold">•</span>
                <span>Lever handle with lockout capability</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold">•</span>
                <span>Sizes from 1.5" to 6" tri-clamp</span>
              </li>
            </ul>
          </div>
          <div className="bg-card border border-border aspect-square flex items-center justify-center">
            <img
              src="/butterfly-valve-hero-exploded-view.jpg"
              alt="Butterfly valve exploded view"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      <div className="flex gap-8">
        {/* Sidebar Filters */}
        <aside className="w-64 flex-shrink-0 bg-card border border-border p-6 h-fit sticky top-24">
          <h2 className="text-lg font-semibold mb-6 tracking-tight">Filter Valves</h2>

          {/* Size Filter */}
          <div className="mb-6">
            <h3 className="text-sm font-medium mb-3 text-muted-foreground uppercase tracking-wide">Size</h3>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Checkbox
                  id="all-size"
                  checked={selectedSize === "all"}
                  onCheckedChange={() => setSelectedSize("all")}
                />
                <Label htmlFor="all-size" className="text-sm cursor-pointer">
                  All Sizes
                </Label>
              </div>
              {['1.5"', '2"', '2.5"', '3"', '4"', '6"'].map((size) => (
                <div key={size} className="flex items-center gap-2">
                  <Checkbox
                    id={`size-${size}`}
                    checked={selectedSize === size}
                    onCheckedChange={() => setSelectedSize(size)}
                  />
                  <Label htmlFor={`size-${size}`} className="text-sm cursor-pointer font-mono">
                    {size}
                  </Label>
                </div>
              ))}
            </div>
          </div>

          {/* Material Filter */}
          <div>
            <h3 className="text-sm font-medium mb-3 text-muted-foreground uppercase tracking-wide">Material</h3>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Checkbox
                  id="all-material"
                  checked={selectedMaterial === "all"}
                  onCheckedChange={() => setSelectedMaterial("all")}
                />
                <Label htmlFor="all-material" className="text-sm cursor-pointer">
                  All Materials
                </Label>
              </div>
              {["304 SS", "316 SS", "316L SS"].map((material) => (
                <div key={material} className="flex items-center gap-2">
                  <Checkbox
                    id={`material-${material}`}
                    checked={selectedMaterial === material}
                    onCheckedChange={() => setSelectedMaterial(material)}
                  />
                  <Label htmlFor={`material-${material}`} className="text-sm cursor-pointer">
                    {material}
                  </Label>
                </div>
              ))}
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <div className="flex-1">
          {/* Header */}
          <div className="mb-8">
            <div className="flex items-center justify-between">
              <p className="text-muted-foreground font-mono text-sm">{filteredValves.length} valves available</p>
              <Select defaultValue="size">
                <SelectTrigger className="w-[180px] bg-card border-border">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="size">Sort by Size</SelectItem>
                  <SelectItem value="price-low">Price: Low to High</SelectItem>
                  <SelectItem value="price-high">Price: High to Low</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Product Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredValves.map((valve) => (
              <div
                key={valve.id}
                className="group bg-secondary border border-border p-6 transition-all hover:border-primary cursor-pointer"
              >
                <div className="aspect-square bg-card mb-4 flex items-center justify-center overflow-hidden">
                  <img
                    src={valve.image || "/placeholder.svg"}
                    alt={valve.name}
                    className="w-full h-full object-cover transition-transform group-hover:scale-105"
                  />
                </div>

                <div>
                  <h3 className="font-semibold mb-1 text-foreground group-hover:text-primary transition-colors">
                    {valve.name}
                  </h3>
                  <p className="text-xs font-mono text-muted-foreground mb-2">{valve.sku}</p>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs text-muted-foreground">{valve.material}</span>
                    <span className="text-xs text-muted-foreground">{valve.connection}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-bold text-primary">{valve.price}</span>
                    <Button size="sm" variant="outline" className="text-xs bg-transparent">
                      View Details
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
