import { Navigation } from "@/components/navigation"
import { ButterflyValvesContent } from "@/components/butterfly-valves-content"
import { Footer } from "@/components/footer"

export default function ButterflyValvesPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <div className="pt-20">
        <ButterflyValvesContent />
      </div>
      <Footer />
    </main>
  )
}
