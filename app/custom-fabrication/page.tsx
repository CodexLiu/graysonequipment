import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { FabricationContent } from "@/components/fabrication-content"

export const metadata = {
  title: "Custom Fabrication - Grayson Equipment",
  description:
    "From napkin sketch to stainless steel. Bespoke engineering services for wineries and production facilities.",
}

export default function CustomFabricationPage() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-background">
        <FabricationContent />
      </main>
      <Footer />
    </>
  )
}
