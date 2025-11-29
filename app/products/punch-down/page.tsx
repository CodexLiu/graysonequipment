import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { PunchDownDetail } from "@/components/punch-down-detail"

export const metadata = {
  title: "High-Flow Punch Down Tool - Grayson Equipment",
  description:
    "Engineered flow-through design reduces drag on the upstroke, saving your back during heavy fermentation schedules.",
}

export default function PunchDownPage() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-background pt-20">
        <PunchDownDetail />
      </main>
      <Footer />
    </>
  )
}
