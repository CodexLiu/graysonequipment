"use client"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Download, ShoppingCart } from "lucide-react"

const productImages = [
  {
    url: "/stainless-steel-punch-down-tool-with-perforated-p.jpg",
    label: "Main View",
  },
  {
    url: "/close-up-perforated-plate-punch-down-tool-dramati.jpg",
    label: "Plate Detail",
  },
  {
    url: "/t-grip-handle-punch-down-tool-ergonomic-texture-d.jpg",
    label: "T-Handle",
  },
  {
    url: "/sanitary-weld-connection-punch-down-tool-industri.jpg",
    label: "Weld Detail",
  },
]

export function PunchDownDetail() {
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
        <span className="text-foreground">High-Flow Punch Down Tool</span>
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
          <h1 className="text-4xl font-bold mb-4 tracking-tight">High-Flow Punch Down Tool</h1>

          {/* SKU and Stock */}
          <div className="flex items-center gap-4 mb-6">
            <span className="text-sm font-mono text-muted-foreground">SKU: PDT-10-SS</span>
            <span className="flex items-center gap-2 text-sm">
              <span className="w-2 h-2 rounded-full bg-green-500"></span>
              <span className="text-green-500 font-medium">In Stock: 8 Units</span>
            </span>
          </div>

          {/* Price */}
          <div className="mb-6">
            <span className="text-5xl font-bold text-primary">$245.00</span>
          </div>

          {/* Short Description */}
          <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
            Engineered flow-through plate design to reduce resistance while breaking the toughest cap. Save your back
            during heavy fermentation schedules.
          </p>

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
              Use Cases
            </TabsTrigger>
          </TabsList>

          <TabsContent value="description" className="mt-8 prose prose-invert max-w-none">
            <h3 className="text-2xl font-semibold mb-4">CONTROL THE CAP.</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Red wine fermentation requires frequent cap management to extract color, tannin, and flavor. Traditional
              punch-down tools create excessive resistance, leading to operator fatigue and inconsistent extraction.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Our High-Flow Punch Down Tool features a precision-perforated plate that allows wine to flow through
              during the upstroke, dramatically reducing drag. The ergonomic T-grip handle distributes force evenly
              across both hands, minimizing strain during long fermentation cycles.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Built from 304 stainless steel with full-penetration sanitary welds, this tool is designed to withstand
              the rigors of commercial winemaking while maintaining easy cleanup and sanitation compliance.
            </p>
          </TabsContent>

          <TabsContent value="specs" className="mt-8">
            <table className="w-full">
              <tbody className="font-mono text-sm">
                <tr className="border-b border-border">
                  <td className="py-4 px-4 bg-card text-muted-foreground font-medium">Material</td>
                  <td className="py-4 px-4">304 Stainless Steel</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="py-4 px-4 bg-card text-muted-foreground font-medium">Plate Size</td>
                  <td className="py-4 px-4">10" Diameter</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="py-4 px-4 bg-card text-muted-foreground font-medium">Handle Type</td>
                  <td className="py-4 px-4">T-Grip with Non-Slip Texture</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="py-4 px-4 bg-card text-muted-foreground font-medium">Weld Type</td>
                  <td className="py-4 px-4">Full Penetration Sanitary Welds</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="py-4 px-4 bg-card text-muted-foreground font-medium">Overall Length</td>
                  <td className="py-4 px-4">48 inches</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="py-4 px-4 bg-card text-muted-foreground font-medium">Weight</td>
                  <td className="py-4 px-4">5.8 lbs</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="py-4 px-4 bg-card text-muted-foreground font-medium">Perforation Pattern</td>
                  <td className="py-4 px-4">High-Flow Engineered Design</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="py-4 px-4 bg-card text-muted-foreground font-medium">Compliance</td>
                  <td className="py-4 px-4">FDA CFR 21, NSF Listed</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="py-4 px-4 bg-card text-muted-foreground font-medium">Finish</td>
                  <td className="py-4 px-4">Brushed, Food-Grade</td>
                </tr>
                <tr>
                  <td className="py-4 px-4 bg-card text-muted-foreground font-medium">Warranty</td>
                  <td className="py-4 px-4">3 Years Structural</td>
                </tr>
              </tbody>
            </table>
          </TabsContent>

          <TabsContent value="compatibility" className="mt-8">
            <div className="prose prose-invert max-w-none">
              <h3 className="text-2xl font-semibold mb-4">Fermentation Applications</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Designed for professional winemaking operations requiring consistent cap management:
              </p>

              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">•</span>
                  <span>
                    <strong className="text-foreground">Red Wine Fermentation:</strong> Ideal for Pinot Noir, Cabernet,
                    Syrah, and other red varietals
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">•</span>
                  <span>
                    <strong className="text-foreground">Tank Compatibility:</strong> Works with open-top fermenters,
                    T-bins, and macro bins
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">•</span>
                  <span>
                    <strong className="text-foreground">Extended Maceration:</strong> Reduces operator fatigue during
                    lengthy cold soaks and post-fermentation extraction
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">•</span>
                  <span>
                    <strong className="text-foreground">Cleaning:</strong> Compatible with CIP systems and high-pressure
                    washdown
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
