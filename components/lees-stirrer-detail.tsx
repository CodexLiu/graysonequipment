"use client"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Download, ShoppingCart } from "lucide-react"

const productImages = [
  {
    url: "/stainless-steel-lees-stirrer-wand-articulated-bla.jpg",
    label: "Main View",
  },
  {
    url: "/close-up-articulated-blade-mechanism-lees-stirrer.jpg",
    label: "Blade Mechanism",
  },
  {
    url: "/hex-shaft-drill-mount-lees-stirrer-industrial-lig.jpg",
    label: "Drill Mount",
  },
  {
    url: "/lees-stirrer-in-oak-barrel-bung-hole-winery-setti.jpg",
    label: "In Use",
  },
]

export function LeesStirrerDetail() {
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
        <span className="text-foreground">Rotary Lees Stirring Wand</span>
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
          <h1 className="text-4xl font-bold mb-4 tracking-tight">Rotary Lees Stirring Wand</h1>

          {/* SKU and Stock */}
          <div className="flex items-center gap-4 mb-6">
            <span className="text-sm font-mono text-muted-foreground">SKU: LSW-42-SS</span>
            <span className="flex items-center gap-2 text-sm">
              <span className="w-2 h-2 rounded-full bg-green-500"></span>
              <span className="text-green-500 font-medium">In Stock: 12 Units</span>
            </span>
          </div>

          {/* Price */}
          <div className="mb-6">
            <span className="text-5xl font-bold text-primary">$115.00</span>
          </div>

          {/* Short Description */}
          <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
            Gentle agitation blade designed to lift lees without scratching barrel staves or introducing oxygen. The
            articulated blade folds for insertion and expands inside the barrel.
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
              Bâtonnage Guide
            </TabsTrigger>
          </TabsList>

          <TabsContent value="description" className="mt-8 prose prose-invert max-w-none">
            <h3 className="text-2xl font-semibold mb-4">PRECISION AGITATION.</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Bâtonnage—the practice of stirring wine lees during barrel aging—enhances mouthfeel, stabilizes color, and
              adds complexity. However, traditional stirring methods risk barrel damage and oxidation.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Our Rotary Lees Stirring Wand features a patent-pending articulated blade design that folds to pass
              through standard bung holes, then expands inside the barrel to provide gentle, thorough agitation. The
              curved stainless steel leaves lift settled lees without scraping barrel staves or introducing air.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              The hex-shaft design allows drill mounting for consistent speed control, reducing operator fatigue during
              large cellar programs. At just 1.8 pounds, the wand is lightweight enough for extended use while remaining
              durable enough for daily production schedules.
            </p>
          </TabsContent>

          <TabsContent value="specs" className="mt-8">
            <table className="w-full">
              <tbody className="font-mono text-sm">
                <tr className="border-b border-border">
                  <td className="py-4 px-4 bg-card text-muted-foreground font-medium">Length</td>
                  <td className="py-4 px-4">42" (Standard Barrel Depth)</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="py-4 px-4 bg-card text-muted-foreground font-medium">Blade Type</td>
                  <td className="py-4 px-4">Articulated Stainless Leaf</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="py-4 px-4 bg-card text-muted-foreground font-medium">Connection</td>
                  <td className="py-4 px-4">Drill-Mountable Hex Shaft</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="py-4 px-4 bg-card text-muted-foreground font-medium">Weight</td>
                  <td className="py-4 px-4">1.8 lbs</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="py-4 px-4 bg-card text-muted-foreground font-medium">Material</td>
                  <td className="py-4 px-4">304 Stainless Steel</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="py-4 px-4 bg-card text-muted-foreground font-medium">Blade Deployment</td>
                  <td className="py-4 px-4">Spring-Loaded Articulation</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="py-4 px-4 bg-card text-muted-foreground font-medium">Recommended RPM</td>
                  <td className="py-4 px-4">40-60 RPM</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="py-4 px-4 bg-card text-muted-foreground font-medium">Compliance</td>
                  <td className="py-4 px-4">FDA CFR 21, NSF Listed</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="py-4 px-4 bg-card text-muted-foreground font-medium">Finish</td>
                  <td className="py-4 px-4">Polished, Food-Grade</td>
                </tr>
                <tr>
                  <td className="py-4 px-4 bg-card text-muted-foreground font-medium">Warranty</td>
                  <td className="py-4 px-4">2 Years Structural</td>
                </tr>
              </tbody>
            </table>
          </TabsContent>

          <TabsContent value="compatibility" className="mt-8">
            <div className="prose prose-invert max-w-none">
              <h3 className="text-2xl font-semibold mb-4">Best Practices for Barrel Lees Stirring</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Effective bâtonnage requires the right technique and timing:
              </p>

              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">•</span>
                  <span>
                    <strong className="text-foreground">Frequency:</strong> Stir weekly during the first month, then
                    bi-weekly or monthly depending on wine style
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">•</span>
                  <span>
                    <strong className="text-foreground">Duration:</strong> 1-2 minutes per barrel at 40-60 RPM for
                    complete lees suspension
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">•</span>
                  <span>
                    <strong className="text-foreground">Barrel Types:</strong> Compatible with French, American, and
                    Hungarian oak (225L, 300L, 500L)
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">•</span>
                  <span>
                    <strong className="text-foreground">Sanitation:</strong> Rinse with hot water after each use;
                    sanitize weekly with approved cellar chemicals
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
