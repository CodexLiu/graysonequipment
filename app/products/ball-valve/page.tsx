import { Navigation } from "@/components/navigation"
import { BallValveDetail } from "@/components/ball-valve-detail"
import { Footer } from "@/components/footer"

export default function BallValvePage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <BallValveDetail />
      <Footer />
    </div>
  )
}
