import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ProductDetail } from "@/components/product-detail"

export const metadata = {
  title: 'Aluminum Sanitary Rake - 60" - Grayson Equipment',
  description:
    "Reinforced tines and food-grade alloy for heavy pomace management. FDA-compliant 6061-T6 aluminum with TIG sanitary welds.",
}

export default function ProductPage() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-background pt-20">
        <ProductDetail />
      </main>
      <Footer />
    </>
  )
}
