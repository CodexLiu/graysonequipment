import { Navigation } from "@/components/navigation"
import { ButterflyValveDetail } from "@/components/butterfly-valve-detail"
import { Footer } from "@/components/footer"

export default function ButterflyValvePage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <ButterflyValveDetail />
      <Footer />
    </div>
  )
}
