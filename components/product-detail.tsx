"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Download, ShoppingCart } from "lucide-react"

const productImages = [
  {
    url: "/aluminum-sanitary-rake-hero-shot-luxury-watch-ligh.jpg",
    label: "Main View",
  },
  {
    url: "/macro-photography-of-tig-welds-on-aluminum-pipe-co.jpg",
    label: "Weld Detail",
  },
  {
    url: "/close-up-of-aluminum-rake-handle-grip-ergonomic-te.jpg",
    label: "Handle Grip",
  },
  {
    url: "/technical-schematic-drawing-of-aluminum-rake-with-.jpg",
    label: "Schematic",
  },
]

export function ProductDetail() {
  const [selectedImage, setSelectedImage] = useState(0)

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Breadcrumbs */}
      <nav className="flex items-center gap-2 text-sm text-muted-foreground font-mono mb-8">
        <a href="/" className="hover:text-foreground transition-colors">
          Home
        </a>
        <span>/</span>
        <a href="/catalog" className="hover:text-foreground transition-colors">
          Catalog
        </a>
        <span>/</span>
        <a href="/catalog?category=tools" className="hover:text-foreground transition-colors">
          Cellar Tools
        </a>
        <span>/</span>
        <span className="text-foreground">Aluminum Sanitary Rake</span>
      </nav>

      <div className="grid md:grid-cols-2 gap-12">
        {/* Left Column - Media */}
        <div>
          {/* Main Image */}
          <div className="bg-card border border-border mb-4 aspect-square flex items-center justify-center overflow-hidden">
            <img
              src={productImages[selectedImage].url || "/placeholder.svg"}
              alt={productImages[selectedImage].label}
              className="w-full h-full object-cover cursor-zoom-in"
            />
          </div>

          {/* Thumbnails */}
          <div className="grid grid-cols-4 gap-2">
            {productImages.map((image, index) => (
              <button
                key={index}
                onClick={() => setSelectedImage(index)}
                className={`aspect-square bg-card border-2 transition-colors overflow-hidden ${
                  selectedImage === index ? "border-primary" : "border-border hover:border-muted"
                }`}
              >
                <img src={image.url || "/placeholder.svg"} alt={image.label} className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        </div>

        {/* Right Column - Purchase */}
        <div>
          <h1 className="text-4xl font-bold mb-4 tracking-tight">Aluminum Sanitary Rake - 60"</h1>

          {/* SKU and Stock */}
          <div className="flex items-center gap-4 mb-6">
            <span className="text-sm font-mono text-muted-foreground">SKU: RAKE-60-AL</span>
            <span className="flex items-center gap-2 text-sm">
              <span className="w-2 h-2 rounded-full bg-green-500"></span>
              <span className="text-green-500 font-medium">In Stock: 14 Units</span>
            </span>
          </div>

          {/* Price */}
          <div className="mb-6">
            <span className="text-5xl font-bold text-primary">$189.00</span>
          </div>

          {/* Short Description */}
          <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
            Reinforced tines and food-grade alloy for heavy pomace management. Engineered to move three tons without
            breaking your back.
          </p>

          {/* Length Selector */}
          <div className="mb-8">
            <Label className="text-sm font-medium mb-2 block">Select Length</Label>
            <Select defaultValue="60">
              <SelectTrigger className="w-full bg-card border-border">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="40">40" - $159.00</SelectItem>
                <SelectItem value="60">60" - $189.00</SelectItem>
                <SelectItem value="72">72" - $219.00</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Action Buttons */}
          <div className="space-y-3 mb-12">
            <Button size="lg" className="w-full bg-primary text-primary-foreground text-lg h-14">
              <ShoppingCart className="w-5 h-5 mr-2" />
              Add to Cart
            </Button>
            <Button size="lg" variant="outline" className="w-full border-2 border-border bg-transparent">
              <Download className="w-5 h-5 mr-2" />
              Download Spec Sheet PDF
            </Button>
          </div>

          {/* Trust Badges */}
          <div className="border-t border-border pt-6 space-y-3">
            <div className="flex items-center gap-3 text-sm">
              <span className="w-6 h-6 bg-primary/20 rounded flex items-center justify-center text-primary font-bold">
                ✓
              </span>
              <span className="text-muted-foreground">FDA CFR 21 Compliant</span>
            </div>
            <div className="flex items-center gap-3 text-sm">
              <span className="w-6 h-6 bg-primary/20 rounded flex items-center justify-center text-primary font-bold">
                ✓
              </span>
              <span className="text-muted-foreground">Ships Within 24 Hours</span>
            </div>
            <div className="flex items-center gap-3 text-sm">
              <span className="w-6 h-6 bg-primary/20 rounded flex items-center justify-center text-primary font-bold">
                ✓
              </span>
              <span className="text-muted-foreground">30-Day Return Policy</span>
            </div>
          </div>
        </div>
      </div>

      {/* Technical Section Below the Fold */}
      <div className="mt-16">
        <Tabs defaultValue="description" className="w-full">
          <TabsList className="w-full justify-start bg-card border-b border-border rounded-none h-auto p-0">
            <TabsTrigger
              value="description"
              className="rounded-none data-[state=active]:border-b-2 data-[state=active]:border-primary px-6 py-4"
            >
              Description
            </TabsTrigger>
            <TabsTrigger
              value="specs"
              className="rounded-none data-[state=active]:border-b-2 data-[state=active]:border-primary px-6 py-4"
            >
              Tech Specs
            </TabsTrigger>
            <TabsTrigger
              value="compatibility"
              className="rounded-none data-[state=active]:border-b-2 data-[state=active]:border-primary px-6 py-4"
            >
              Compatibility
            </TabsTrigger>
          </TabsList>

          <TabsContent value="description" className="mt-8 prose prose-invert max-w-none">
            <h3 className="text-2xl font-semibold mb-4">Lightweight Durability</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              The standard harvest rake, re-engineered. Our Aluminum Sanitary Rake combines food-safe 6061-T6 aluminum
              alloy with precision TIG welding to create a tool that's both lightweight and virtually indestructible.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Designed specifically for winery operations, this rake features snag-free welds that won't tear
              fermentation bags or scratch tank interiors. The ergonomic handle reduces operator fatigue during long
              harvest days, while the reinforced tines maintain their shape even when moving heavy pomace loads.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Every rake undergoes a multi-point quality inspection and is tested to move three tons of material without
              structural deformation. The non-reactive aluminum construction ensures it won't affect wine chemistry or
              introduce off-flavors.
            </p>
          </TabsContent>

          <TabsContent value="specs" className="mt-8">
            <table className="w-full">
              <tbody className="font-mono text-sm">
                <tr className="border-b border-border">
                  <td className="py-4 px-4 bg-card text-muted-foreground font-medium">Material</td>
                  <td className="py-4 px-4">6061-T6 Aluminum Alloy</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="py-4 px-4 bg-card text-muted-foreground font-medium">Weld Type</td>
                  <td className="py-4 px-4">TIG Sanitary (Snag-Free)</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="py-4 px-4 bg-card text-muted-foreground font-medium">Weight</td>
                  <td className="py-4 px-4">3.2 lbs</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="py-4 px-4 bg-card text-muted-foreground font-medium">Overall Length</td>
                  <td className="py-4 px-4">60 inches</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="py-4 px-4 bg-card text-muted-foreground font-medium">Handle Diameter</td>
                  <td className="py-4 px-4">1.5 inches</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="py-4 px-4 bg-card text-muted-foreground font-medium">Tine Width</td>
                  <td className="py-4 px-4">12 inches</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="py-4 px-4 bg-card text-muted-foreground font-medium">Compliance</td>
                  <td className="py-4 px-4">FDA CFR 21, NSF Listed</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="py-4 px-4 bg-card text-muted-foreground font-medium">Load Capacity</td>
                  <td className="py-4 px-4">3 tons (tested)</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="py-4 px-4 bg-card text-muted-foreground font-medium">Finish</td>
                  <td className="py-4 px-4">Brushed, Non-Reactive</td>
                </tr>
                <tr>
                  <td className="py-4 px-4 bg-card text-muted-foreground font-medium">Warranty</td>
                  <td className="py-4 px-4">5 Years Structural</td>
                </tr>
              </tbody>
            </table>
          </TabsContent>

          <TabsContent value="compatibility" className="mt-8">
            <div className="prose prose-invert max-w-none">
              <h3 className="text-2xl font-semibold mb-4">Universal Cellar Compatibility</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                This rake is designed to work seamlessly with standard winery equipment and workflows:
              </p>

              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">•</span>
                  <span>
                    <strong className="text-foreground">Fermentation Vessels:</strong> Safe for use with stainless
                    steel, oak, and concrete tanks
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">•</span>
                  <span>
                    <strong className="text-foreground">Press Operations:</strong> Ideal for basket presses, bladder
                    presses, and continuous screw presses
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">•</span>
                  <span>
                    <strong className="text-foreground">Pomace Management:</strong> Works with conveyor systems, bins,
                    and transport carts
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">•</span>
                  <span>
                    <strong className="text-foreground">Sanitation:</strong> Autoclavable and safe for high-pressure
                    washdown systems
                  </span>
                </li>
              </ul>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}

function Label({ className, ...props }: React.ComponentProps<"label">) {
  return <label className={className} {...props} />
}
