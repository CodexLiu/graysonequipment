import { Navigation } from "@/components/navigation"
import { SanitaryReducerDetail } from "@/components/sanitary-reducer-detail"
import { Footer } from "@/components/footer"

export default function SanitaryReducerPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <SanitaryReducerDetail />
      <Footer />
    </div>
  )
}
