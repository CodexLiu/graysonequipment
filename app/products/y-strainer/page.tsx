import { Navigation } from "@/components/navigation"
import { YStrainerDetail } from "@/components/y-strainer-detail"
import { Footer } from "@/components/footer"

export default function YStrainerPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <YStrainerDetail />
      <Footer />
    </div>
  )
}
