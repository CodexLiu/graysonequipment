import { Navigation } from "@/components/navigation"
import { CheckValveDetail } from "@/components/check-valve-detail"
import { Footer } from "@/components/footer"

export default function CheckValvePage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <CheckValveDetail />
      <Footer />
    </div>
  )
}
