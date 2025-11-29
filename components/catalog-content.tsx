"use client"

import { useState, useMemo } from "react"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Grid, List } from "lucide-react"

const products = [
  {
    id: 1,
    name: "Sanitary Butterfly Valve",
    sku: "BV-2-316L",
    material: "316L SS",
    category: "Valve",
    price: "$245.00",
    priceValue: 245,
    image: "/stainless-steel-butterfly-valve-isometric-floating.jpg",
    link: "/products/butterfly-valve",
    connection: "Tri-Clamp (TC)",
    size: "2",
    pressureRating: "150 PSI",
  },
  {
    id: 2,
    name: "Heavy-Duty Tri-Clamp",
    sku: "TC-3-304",
    material: "304 SS",
    category: "Fitting",
    price: "$89.00",
    priceValue: 89,
    image: "/polished-stainless-steel-tri-clamp-fitting-floatin.jpg",
    link: "/products/tri-clamp",
    connection: "Tri-Clamp (TC)",
    size: "3",
    pressureRating: "300 PSI",
  },
  {
    id: 3,
    name: "Pressure Relief Valve",
    sku: "PRV-2-316",
    material: "316 SS",
    category: "Valve",
    price: "$320.00",
    priceValue: 320,
    image: "/stainless-steel-pressure-relief-valve-industrial-l.jpg",
    link: "/products/pressure-relief-valve",
    connection: "NPT Threaded",
    size: "2",
    pressureRating: "300 PSI",
  },
  {
    id: 4,
    name: "Inline Sight Glass",
    sku: "SG-2.5-316L",
    material: "316L SS",
    category: "Fitting",
    price: "$175.00",
    priceValue: 175,
    image: "/stainless-steel-inline-sight-glass-with-gasket-dar.jpg",
    link: "/products/sight-glass",
    connection: "Tri-Clamp (TC)",
    size: "2.5",
    pressureRating: "150 PSI",
  },
  {
    id: 5,
    name: "Ball Valve Assembly",
    sku: "BVA-3-304",
    material: "304 SS",
    category: "Valve",
    price: "$295.00",
    priceValue: 295,
    image: "/stainless-steel-ball-valve-assembly-floating-dark-.jpg",
    link: "/products/ball-valve",
    connection: "Tri-Clamp (TC)",
    size: "3",
    pressureRating: "150 PSI",
  },
  {
    id: 6,
    name: "Check Valve",
    sku: "CV-2-316",
    material: "316 SS",
    category: "Valve",
    price: "$210.00",
    priceValue: 210,
    image: "/stainless-steel-check-valve-industrial-photography.jpg",
    link: "/products/check-valve",
    connection: "Weld End",
    size: "2",
    pressureRating: "300 PSI",
  },
  {
    id: 7,
    name: "Sanitary Reducer",
    sku: "RED-3-2-316L",
    material: "316L SS",
    category: "Fitting",
    price: "$125.00",
    priceValue: 125,
    image: "/stainless-steel-sanitary-reducer-fitting-dark-back.jpg",
    link: "/products/sanitary-reducer",
    connection: "Tri-Clamp (TC)",
    size: "3",
    pressureRating: "150 PSI",
  },
  {
    id: 8,
    name: "Y-Strainer",
    sku: "YS-2.5-304",
    material: "304 SS",
    category: "Valve",
    price: "$265.00",
    priceValue: 265,
    image: "/stainless-steel-y-strainer-valve-dark-background-i.jpg",
    link: "/products/y-strainer",
    connection: "Tri-Clamp (TC)",
    size: "2.5",
    pressureRating: "150 PSI",
  },
  {
    id: 9,
    name: "Aluminum Harvest Rake",
    sku: "AHR-60-AL",
    material: "6061 Aluminum",
    category: "Tool",
    price: "$185.00",
    priceValue: 185,
    image: "/aluminum-harvest-rake-60-inch-industrial-photograp.jpg",
    link: "/products/1",
    connection: "N/A",
    size: "60",
    pressureRating: "N/A",
  },
  {
    id: 10,
    name: "Punch-Down Tool",
    sku: "PDT-48-SS",
    material: "304 SS",
    category: "Tool",
    price: "$245.00",
    priceValue: 245,
    image: "/stainless-steel-punch-down-tool-with-perforated-p.jpg",
    link: "/products/punch-down",
    connection: "N/A",
    size: "48",
    pressureRating: "N/A",
  },
  {
    id: 11,
    name: "Lees Stirrer",
    sku: "LS-36-SS",
    material: "304 SS",
    category: "Tool",
    price: "$115.00",
    priceValue: 115,
    image: "/stainless-steel-lees-stirrer-with-propeller-blade.jpg",
    link: "/products/lees-stirrer",
    connection: "N/A",
    size: "36",
    pressureRating: "N/A",
  },
  {
    id: 12,
    name: "Sanitary Squeegee",
    sku: "SQ-24-AL",
    material: "Aluminum",
    category: "Tool",
    price: "$85.00",
    priceValue: 85,
    image: "/aluminum-frame-sanitary-squeegee-with-silicone-bla.jpg",
    link: "/products/squeegee",
    connection: "N/A",
    size: "24",
    pressureRating: "N/A",
  },
]

export function CatalogContent() {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid")
  const [selectedCategory, setSelectedCategory] = useState<string>("all")

  const [selectedMaterials, setSelectedMaterials] = useState<string[]>([])
  const [selectedConnections, setSelectedConnections] = useState<string[]>([])
  const [selectedSizes, setSelectedSizes] = useState<string[]>([])
  const [selectedPressures, setSelectedPressures] = useState<string[]>([])
  const [sortBy, setSortBy] = useState<string>("popular")

  const toggleMaterial = (material: string) => {
    setSelectedMaterials((prev) => (prev.includes(material) ? prev.filter((m) => m !== material) : [...prev, material]))
  }

  const toggleConnection = (connection: string) => {
    setSelectedConnections((prev) =>
      prev.includes(connection) ? prev.filter((c) => c !== connection) : [...prev, connection],
    )
  }

  const toggleSize = (size: string) => {
    setSelectedSizes((prev) => (prev.includes(size) ? prev.filter((s) => s !== size) : [...prev, size]))
  }

  const togglePressure = (pressure: string) => {
    setSelectedPressures((prev) => (prev.includes(pressure) ? prev.filter((p) => p !== pressure) : [...prev, pressure]))
  }

  const filteredAndSortedProducts = useMemo(() => {
    let filtered = products

    // Category filter
    if (selectedCategory !== "all") {
      filtered = filtered.filter((p) => p.category.toLowerCase() === selectedCategory.toLowerCase())
    }

    // Material filter
    if (selectedMaterials.length > 0) {
      filtered = filtered.filter((p) => selectedMaterials.includes(p.material))
    }

    // Connection filter
    if (selectedConnections.length > 0) {
      filtered = filtered.filter((p) => selectedConnections.includes(p.connection))
    }

    // Size filter
    if (selectedSizes.length > 0) {
      filtered = filtered.filter((p) => selectedSizes.includes(p.size))
    }

    // Pressure rating filter
    if (selectedPressures.length > 0) {
      filtered = filtered.filter((p) => selectedPressures.includes(p.pressureRating))
    }

    // Sorting
    const sorted = [...filtered]
    switch (sortBy) {
      case "price-low":
        sorted.sort((a, b) => a.priceValue - b.priceValue)
        break
      case "price-high":
        sorted.sort((a, b) => b.priceValue - a.priceValue)
        break
      case "name":
        sorted.sort((a, b) => a.name.localeCompare(b.name))
        break
      case "popular":
      default:
        // Keep original order for "popular"
        break
    }

    return sorted
  }, [selectedCategory, selectedMaterials, selectedConnections, selectedSizes, selectedPressures, sortBy])

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
          <span className="text-foreground">Catalog</span>
        </nav>
      </div>

      <div className="flex gap-8">
        {/* Sidebar Filters */}
        <aside className="w-64 flex-shrink-0 bg-card border border-border p-6 h-fit sticky top-24">
          <h2 className="text-lg font-semibold mb-6 tracking-tight">Filter Results</h2>

          {/* Category Filter */}
          <div className="mb-6">
            <h3 className="text-sm font-medium mb-3 text-muted-foreground uppercase tracking-wide">Category</h3>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Checkbox
                  id="all"
                  checked={selectedCategory === "all"}
                  onCheckedChange={() => setSelectedCategory("all")}
                />
                <Label htmlFor="all" className="text-sm cursor-pointer">
                  All Products
                </Label>
              </div>
              <div className="flex items-center gap-2">
                <Checkbox
                  id="valve"
                  checked={selectedCategory === "valve"}
                  onCheckedChange={() => setSelectedCategory("valve")}
                />
                <Label htmlFor="valve" className="text-sm cursor-pointer">
                  Valves
                </Label>
              </div>
              <div className="flex items-center gap-2">
                <Checkbox
                  id="fitting"
                  checked={selectedCategory === "fitting"}
                  onCheckedChange={() => setSelectedCategory("fitting")}
                />
                <Label htmlFor="fitting" className="text-sm cursor-pointer">
                  Fittings
                </Label>
              </div>
              <div className="flex items-center gap-2">
                <Checkbox
                  id="tool"
                  checked={selectedCategory === "tool"}
                  onCheckedChange={() => setSelectedCategory("tool")}
                />
                <Label htmlFor="tool" className="text-sm cursor-pointer">
                  Tools
                </Label>
              </div>
            </div>
          </div>

          {/* Material Filter */}
          <div className="mb-6">
            <h3 className="text-sm font-medium mb-3 text-muted-foreground uppercase tracking-wide">Material</h3>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Checkbox
                  id="304ss"
                  checked={selectedMaterials.includes("304 SS")}
                  onCheckedChange={() => toggleMaterial("304 SS")}
                />
                <Label htmlFor="304ss" className="text-sm cursor-pointer">
                  304 Stainless Steel
                </Label>
              </div>
              <div className="flex items-center gap-2">
                <Checkbox
                  id="316ss"
                  checked={selectedMaterials.includes("316 SS")}
                  onCheckedChange={() => toggleMaterial("316 SS")}
                />
                <Label htmlFor="316ss" className="text-sm cursor-pointer">
                  316 Stainless Steel
                </Label>
              </div>
              <div className="flex items-center gap-2">
                <Checkbox
                  id="316Lss"
                  checked={selectedMaterials.includes("316L SS")}
                  onCheckedChange={() => toggleMaterial("316L SS")}
                />
                <Label htmlFor="316Lss" className="text-sm cursor-pointer">
                  316L Stainless Steel
                </Label>
              </div>
              <div className="flex items-center gap-2">
                <Checkbox
                  id="aluminum"
                  checked={selectedMaterials.includes("Aluminum") || selectedMaterials.includes("6061 Aluminum")}
                  onCheckedChange={() => {
                    if (selectedMaterials.includes("Aluminum") || selectedMaterials.includes("6061 Aluminum")) {
                      setSelectedMaterials((prev) => prev.filter((m) => m !== "Aluminum" && m !== "6061 Aluminum"))
                    } else {
                      setSelectedMaterials((prev) => [...prev, "Aluminum", "6061 Aluminum"])
                    }
                  }}
                />
                <Label htmlFor="aluminum" className="text-sm cursor-pointer">
                  Aluminum
                </Label>
              </div>
            </div>
          </div>

          {/* Connection Type Filter */}
          <div className="mb-6">
            <h3 className="text-sm font-medium mb-3 text-muted-foreground uppercase tracking-wide">Connection Type</h3>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Checkbox
                  id="tc"
                  checked={selectedConnections.includes("Tri-Clamp (TC)")}
                  onCheckedChange={() => toggleConnection("Tri-Clamp (TC)")}
                />
                <Label htmlFor="tc" className="text-sm cursor-pointer">
                  Tri-Clamp (TC)
                </Label>
              </div>
              <div className="flex items-center gap-2">
                <Checkbox
                  id="npt"
                  checked={selectedConnections.includes("NPT Threaded")}
                  onCheckedChange={() => toggleConnection("NPT Threaded")}
                />
                <Label htmlFor="npt" className="text-sm cursor-pointer">
                  NPT Threaded
                </Label>
              </div>
              <div className="flex items-center gap-2">
                <Checkbox
                  id="weld"
                  checked={selectedConnections.includes("Weld End")}
                  onCheckedChange={() => toggleConnection("Weld End")}
                />
                <Label htmlFor="weld" className="text-sm cursor-pointer">
                  Weld End
                </Label>
              </div>
            </div>
          </div>

          {/* Size Filter */}
          <div className="mb-6">
            <h3 className="text-sm font-medium mb-3 text-muted-foreground uppercase tracking-wide">Size</h3>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Checkbox id="2" checked={selectedSizes.includes("2")} onCheckedChange={() => toggleSize("2")} />
                <Label htmlFor="2" className="text-sm cursor-pointer font-mono">
                  2"
                </Label>
              </div>
              <div className="flex items-center gap-2">
                <Checkbox id="2.5" checked={selectedSizes.includes("2.5")} onCheckedChange={() => toggleSize("2.5")} />
                <Label htmlFor="2.5" className="text-sm cursor-pointer font-mono">
                  2.5"
                </Label>
              </div>
              <div className="flex items-center gap-2">
                <Checkbox id="3" checked={selectedSizes.includes("3")} onCheckedChange={() => toggleSize("3")} />
                <Label htmlFor="3" className="text-sm cursor-pointer font-mono">
                  3"
                </Label>
              </div>
            </div>
          </div>

          {/* Pressure Rating Filter */}
          <div>
            <h3 className="text-sm font-medium mb-3 text-muted-foreground uppercase tracking-wide">Pressure Rating</h3>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Checkbox
                  id="150psi"
                  checked={selectedPressures.includes("150 PSI")}
                  onCheckedChange={() => togglePressure("150 PSI")}
                />
                <Label htmlFor="150psi" className="text-sm cursor-pointer font-mono">
                  150 PSI
                </Label>
              </div>
              <div className="flex items-center gap-2">
                <Checkbox
                  id="300psi"
                  checked={selectedPressures.includes("300 PSI")}
                  onCheckedChange={() => togglePressure("300 PSI")}
                />
                <Label htmlFor="300psi" className="text-sm cursor-pointer font-mono">
                  300 PSI
                </Label>
              </div>
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <div className="flex-1">
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-3xl font-bold mb-2 tracking-tight">
                {selectedCategory === "all" && "All Products"}
                {selectedCategory === "valve" && "Valves"}
                {selectedCategory === "fitting" && "Fittings"}
                {selectedCategory === "tool" && "Tools"}
              </h1>
              <p className="text-muted-foreground font-mono text-sm">
                {filteredAndSortedProducts.length} products found
              </p>
            </div>

            <div className="flex items-center gap-4">
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-[180px] bg-card border-border">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="popular">Most Popular</SelectItem>
                  <SelectItem value="price-low">Price: Low to High</SelectItem>
                  <SelectItem value="price-high">Price: High to Low</SelectItem>
                  <SelectItem value="name">Name: A to Z</SelectItem>
                </SelectContent>
              </Select>

              <div className="flex gap-2">
                <Button
                  variant={viewMode === "grid" ? "default" : "outline"}
                  size="icon"
                  onClick={() => setViewMode("grid")}
                  className="bg-card"
                >
                  <Grid className="w-4 h-4" />
                </Button>
                <Button
                  variant={viewMode === "list" ? "default" : "outline"}
                  size="icon"
                  onClick={() => setViewMode("list")}
                  className="bg-card"
                >
                  <List className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>

          {/* Product Grid */}
          <div
            className={
              viewMode === "grid"
                ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
                : "flex flex-col gap-4"
            }
          >
            {filteredAndSortedProducts.map((product) => (
              <a
                key={product.id}
                href={product.link}
                className="group bg-secondary border border-border p-6 transition-all hover:border-primary cursor-pointer relative"
              >
                <div className="aspect-square bg-card mb-4 flex items-center justify-center overflow-hidden">
                  <img
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform group-hover:scale-105"
                  />
                </div>

                <div>
                  <h3 className="font-semibold mb-1 text-foreground group-hover:text-primary transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-xs font-mono text-muted-foreground mb-2">{product.sku}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-muted-foreground">{product.material}</span>
                    <span className="text-lg font-bold text-primary">{product.price}</span>
                  </div>
                </div>

                {/* Quick View Button on Hover */}
                <div className="absolute inset-0 bg-background/80 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <Button className="bg-primary text-primary-foreground">Quick View</Button>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
