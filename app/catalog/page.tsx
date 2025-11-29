import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { CatalogContent } from "@/components/catalog-content"

export const metadata = {
  title: "Product Catalog - Grayson Equipment",
  description:
    "Browse thousands of technical parts, sanitary fittings, and processing equipment for wineries and production facilities.",
}

export default function CatalogPage() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-background pt-20">
        <CatalogContent />
      </main>
      <Footer />
    </>
  )
}
