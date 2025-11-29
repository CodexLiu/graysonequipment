"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Minus, Plus, ShieldCheck, Truck, Ruler } from "lucide-react"
import Link from "next/link"

export function CheckValveDetail() {
  const [quantity, setQuantity] = useState(1)
  const [selectedImage, setSelectedImage] = useState(0)

  const images = [
    "/stainless-steel-check-valve-industrial-photography.jpg",
    "/check-valve-internal-spring-mechanism-industrial-l.jpg",
    "/check-valve-weld-end-connection-detail.jpg",
    "/check-valve-disc-and-seat-close-up.jpg",
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
        <span className="text-foreground">Check Valve</span>
      </nav>

      <div className="grid lg:grid-cols-2 gap-12">
        {/* Image Gallery */}
        <div className="space-y-4">
          <div className="aspect-square bg-secondary border-2 border-border overflow-hidden">
            <img
              src={images[selectedImage] || "/placeholder.svg"}
              alt="Check Valve"
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
            <h1 className="text-4xl font-bold mb-2 tracking-tight">Check Valve</h1>
            <p className="text-muted-foreground font-mono text-sm">SKU: CV-2-316</p>
          </div>

          <div className="text-3xl font-bold text-primary">$210.00</div>

          <p className="text-muted-foreground leading-relaxed">
            Spring-loaded check valve prevents backflow in processing lines. Low cracking pressure for efficient
            operation. 316 stainless steel construction with weld-end connections. Essential for pump protection and
            system integrity.
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
                  <td className="py-2 text-right font-medium">316 Stainless Steel</td>
                </tr>
                <tr>
                  <td className="py-2 text-muted-foreground">Connection Type</td>
                  <td className="py-2 text-right font-medium">Weld End</td>
                </tr>
                <tr>
                  <td className="py-2 text-muted-foreground">Size</td>
                  <td className="py-2 text-right font-medium">2"</td>
                </tr>
                <tr>
                  <td className="py-2 text-muted-foreground">Pressure Rating</td>
                  <td className="py-2 text-right font-medium">300 PSI</td>
                </tr>
                <tr>
                  <td className="py-2 text-muted-foreground">Cracking Pressure</td>
                  <td className="py-2 text-right font-medium">3 PSI</td>
                </tr>
                <tr>
                  <td className="py-2 text-muted-foreground">Mechanism</td>
                  <td className="py-2 text-right font-medium">Spring-Loaded Disc</td>
                </tr>
                <tr>
                  <td className="py-2 text-muted-foreground">Temperature Range</td>
                  <td className="py-2 text-right font-medium">-20°F to 300°F</td>
                </tr>
                <tr>
                  <td className="py-2 text-muted-foreground">Flow Direction</td>
                  <td className="py-2 text-right font-medium">Marked on Body</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  )
}
