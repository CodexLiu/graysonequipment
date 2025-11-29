"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Minus, Plus, ShieldCheck, Truck, Ruler } from "lucide-react"
import Link from "next/link"

export function SightGlassDetail() {
  const [quantity, setQuantity] = useState(1)
  const [selectedImage, setSelectedImage] = useState(0)

  const images = [
    "/stainless-steel-inline-sight-glass-with-gasket-dar.jpg",
    "/sight-glass-borosilicate-glass-lens-industrial-lig.jpg",
    "/sight-glass-tri-clamp-ferrule-detail.jpg",
    "/sight-glass-with-liquid-flowing-through-industrial.jpg",
  ]

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-sm text-muted-foreground font-mono mb-8">
        <a href="/" className="hover:text-foreground transition-colors">
          Home
        </a>
        <span>/</span>
        <a href="/catalog" className="hover:text-foreground transition-colors">
          Catalog
        </a>
        <span>/</span>
        <span className="text-foreground">Inline Sight Glass</span>
      </nav>

      <div className="grid lg:grid-cols-2 gap-12">
        {/* Image Gallery */}
        <div className="space-y-4">
          <div className="aspect-square bg-secondary border-2 border-border overflow-hidden">
            <img
              src={images[selectedImage] || "/placeholder.svg"}
              alt="Sight Glass"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="grid grid-cols-4 gap-4">
            {images.map((img, idx) => (
              <button
                key={idx}
                onClick={() => setSelectedImage(idx)}
                className={`aspect-square bg-secondary border-2 transition-all ${
                  selectedImage === idx ? "border-primary" : "border-border hover:border-muted-foreground"
                }`}
              >
                <img src={img || "/placeholder.svg"} alt={`View ${idx + 1}`} className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        </div>

        {/* Product Info */}
        <div className="space-y-6">
          <div>
            <h1 className="text-4xl font-bold mb-2 tracking-tight">Inline Sight Glass</h1>
            <p className="text-muted-foreground font-mono text-sm">SKU: SG-2.5-316L</p>
          </div>

          <div className="text-3xl font-bold text-primary">$175.00</div>

          <p className="text-muted-foreground leading-relaxed">
            Inline sight glass for visual flow monitoring and process verification. Clear borosilicate glass with 316L
            stainless steel body and tri-clamp connections. Temperature and pressure rated for demanding winery
            applications.
          </p>

          {/* Trust Badges */}
          <div className="grid grid-cols-3 gap-4">
            <Card className="p-4 bg-card border-border">
              <ShieldCheck className="w-6 h-6 text-primary mb-2" />
              <p className="text-xs font-medium">FDA Compliant</p>
            </Card>
            <Card className="p-4 bg-card border-border">
              <Truck className="w-6 h-6 text-primary mb-2" />
              <p className="text-xs font-medium">Next-Day Ship</p>
            </Card>
            <Card className="p-4 bg-card border-border">
              <Ruler className="w-6 h-6 text-primary mb-2" />
              <p className="text-xs font-medium">Precision Fit</p>
            </Card>
          </div>

          {/* Quantity Selector */}
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <span className="text-sm font-medium">Quantity</span>
              <div className="flex items-center border border-border">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="h-10 w-10"
                >
                  <Minus className="w-4 h-4" />
                </Button>
                <span className="w-12 text-center font-mono">{quantity}</span>
                <Button variant="ghost" size="icon" onClick={() => setQuantity(quantity + 1)} className="h-10 w-10">
                  <Plus className="w-4 h-4" />
                </Button>
              </div>
            </div>

            <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground h-12 text-lg">
              Add to Cart
            </Button>
            <Link href="/rfq" className="block">
              <Button variant="outline" className="w-full border-border h-12 bg-transparent">
                Request Quote
              </Button>
            </Link>
          </div>

          {/* Tech Specs */}
          <div className="border-t border-border pt-6">
            <h3 className="text-lg font-semibold mb-4">Technical Specifications</h3>
            <table className="w-full font-mono text-sm">
              <tbody className="divide-y divide-border">
                <tr>
                  <td className="py-2 text-muted-foreground">Material</td>
                  <td className="py-2 text-right font-medium">316L Stainless Steel</td>
                </tr>
                <tr>
                  <td className="py-2 text-muted-foreground">Connection Type</td>
                  <td className="py-2 text-right font-medium">Tri-Clamp (TC)</td>
                </tr>
                <tr>
                  <td className="py-2 text-muted-foreground">Size</td>
                  <td className="py-2 text-right font-medium">2.5"</td>
                </tr>
                <tr>
                  <td className="py-2 text-muted-foreground">Pressure Rating</td>
                  <td className="py-2 text-right font-medium">150 PSI</td>
                </tr>
                <tr>
                  <td className="py-2 text-muted-foreground">Glass Type</td>
                  <td className="py-2 text-right font-medium">Borosilicate</td>
                </tr>
                <tr>
                  <td className="py-2 text-muted-foreground">Gasket Material</td>
                  <td className="py-2 text-right font-medium">Silicone Food-Grade</td>
                </tr>
                <tr>
                  <td className="py-2 text-muted-foreground">Temperature Range</td>
                  <td className="py-2 text-right font-medium">-20°F to 300°F</td>
                </tr>
                <tr>
                  <td className="py-2 text-muted-foreground">Visibility</td>
                  <td className="py-2 text-right font-medium">360° Full View</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  )
}
