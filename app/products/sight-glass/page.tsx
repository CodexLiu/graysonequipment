import { Navigation } from "@/components/navigation"
import { SightGlassDetail } from "@/components/sight-glass-detail"
import { Footer } from "@/components/footer"

export default function SightGlassPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <SightGlassDetail />
      <Footer />
    </div>
  )
}
