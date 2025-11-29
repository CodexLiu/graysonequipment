import { Navigation } from "@/components/navigation"
import { PressureReliefValveDetail } from "@/components/pressure-relief-valve-detail"
import { Footer } from "@/components/footer"

export default function PressureReliefValvePage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <PressureReliefValveDetail />
      <Footer />
    </div>
  )
}
