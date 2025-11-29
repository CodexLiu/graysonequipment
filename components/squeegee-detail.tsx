"use client"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Download, ShoppingCart } from "lucide-react"

const productImages = [
  {
    url: "/industrial-neoprene-floor-squeegee-30-inch-dark-b.jpg",
    label: "Main View",
  },
  {
    url: "/close-up-thick-neoprene-blade-squeegee-industrial.jpg",
    label: "Blade Detail",
  },
  {
    url: "/aluminum-frame-bracing-squeegee-heavy-duty-constru.jpg",
    label: "Frame Construction",
  },
  {
    url: "/threaded-handle-connection-squeegee-universal-comp.jpg",
    label: "Handle Mount",
  },
]

export function SqueegeeDe() {
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
        <span className="text-foreground">30" Neoprene Floor Squeegee</span>
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
          <h1 className="text-4xl font-bold mb-4 tracking-tight">30" Neoprene Floor Squeegee</h1>

          {/* SKU and Stock */}
          <div className="flex items-center gap-4 mb-6">
            <span className="text-sm font-mono text-muted-foreground">SKU: SQG-30-NEO</span>
            <span className="flex items-center gap-2 text-sm">
              <span className="w-2 h-2 rounded-full bg-green-500"></span>
              <span className="text-green-500 font-medium">In Stock: 22 Units</span>
            </span>
          </div>

          {/* Price */}
          <div className="mb-6">
            <span className="text-5xl font-bold text-primary">$85.00</span>
          </div>

          {/* Short Description */}
          <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
            Chemical-resistant neoprene blade fused to a seamless aluminum frame. Leaves concrete dry in one pass. Built
            for industrial sanitation protocols.
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
              Related Products
            </TabsTrigger>
          </TabsList>

          <TabsContent value="description" className="mt-8 prose prose-invert max-w-none">
            <h3 className="text-2xl font-semibold mb-4">INDUSTRIAL HYGIENE.</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Floor sanitation is non-negotiable in food production environments. Standard hardware store squeegees use
              rubber blades that degrade rapidly when exposed to tartaric acid, caustic cleaners, and high-pressure
              washdown cycles.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Our 30" Neoprene Floor Squeegee uses closed-cell neoprene foam that resists chemical degradation while
              maintaining flexibility across temperature extremes. The seamless anodized aluminum frame eliminates
              crevices where bacteria can harbor, and the double-density blade design provides superior water removal in
              a single pass.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              The heavy-duty construction handles daily commercial use without warping or blade separation. Universal
              threaded handle compatibility ensures you can use existing cellar equipment, reducing total cost of
              ownership.
            </p>
          </TabsContent>

          <TabsContent value="specs" className="mt-8">
            <table className="w-full">
              <tbody className="font-mono text-sm">
                <tr className="border-b border-border">
                  <td className="py-4 px-4 bg-card text-muted-foreground font-medium">Blade Material</td>
                  <td className="py-4 px-4">Closed-Cell Neoprene Foam</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="py-4 px-4 bg-card text-muted-foreground font-medium">Frame Material</td>
                  <td className="py-4 px-4">Anodized Aluminum</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="py-4 px-4 bg-card text-muted-foreground font-medium">Width</td>
                  <td className="py-4 px-4">30 inches</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="py-4 px-4 bg-card text-muted-foreground font-medium">Blade Thickness</td>
                  <td className="py-4 px-4">1.5 inches (Double-Density)</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="py-4 px-4 bg-card text-muted-foreground font-medium">Handle Compatibility</td>
                  <td className="py-4 px-4">Standard Threaded (ACME)</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="py-4 px-4 bg-card text-muted-foreground font-medium">Weight</td>
                  <td className="py-4 px-4">2.4 lbs (head only)</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="py-4 px-4 bg-card text-muted-foreground font-medium">Chemical Resistance</td>
                  <td className="py-4 px-4">pH 2-14 Safe</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="py-4 px-4 bg-card text-muted-foreground font-medium">Temperature Range</td>
                  <td className="py-4 px-4">-20°F to 160°F</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="py-4 px-4 bg-card text-muted-foreground font-medium">Compliance</td>
                  <td className="py-4 px-4">FDA CFR 21, NSF Listed</td>
                </tr>
                <tr>
                  <td className="py-4 px-4 bg-card text-muted-foreground font-medium">Warranty</td>
                  <td className="py-4 px-4">1 Year Blade, 3 Years Frame</td>
                </tr>
              </tbody>
            </table>
          </TabsContent>

          <TabsContent value="compatibility" className="mt-8">
            <div className="prose prose-invert max-w-none">
              <h3 className="text-2xl font-semibold mb-4">Complete Your Floor Sanitation System</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Maximize efficiency with compatible accessories and replacement components:
              </p>

              <div className="grid md:grid-cols-2 gap-6 mt-8">
                <div className="border border-border p-6 bg-card">
                  <h4 className="font-semibold text-lg mb-2">Heavy-Duty Fiberglass Handle</h4>
                  <p className="text-sm text-muted-foreground mb-3">60" length, ergonomic grip, ACME threaded</p>
                  <span className="text-primary font-mono">$32.00</span>
                </div>

                <div className="border border-border p-6 bg-card">
                  <h4 className="font-semibold text-lg mb-2">Replacement Neoprene Blade</h4>
                  <p className="text-sm text-muted-foreground mb-3">30" replacement blade, easy swap</p>
                  <span className="text-primary font-mono">$45.00</span>
                </div>

                <div className="border border-border p-6 bg-card">
                  <h4 className="font-semibold text-lg mb-2">Wall-Mount Squeegee Rack</h4>
                  <p className="text-sm text-muted-foreground mb-3">Stainless steel, holds 3 squeegees</p>
                  <span className="text-primary font-mono">$68.00</span>
                </div>

                <div className="border border-border p-6 bg-card">
                  <h4 className="font-semibold text-lg mb-2">Floor Drain Scraper Attachment</h4>
                  <p className="text-sm text-muted-foreground mb-3">Removable grate cleaning tool</p>
                  <span className="text-primary font-mono">$24.00</span>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
