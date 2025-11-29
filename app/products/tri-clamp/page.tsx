import { Navigation } from "@/components/navigation"
import { TriClampDetail } from "@/components/tri-clamp-detail"
import { Footer } from "@/components/footer"

export default function TriClampPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <TriClampDetail />
      <Footer />
    </div>
  )
}
