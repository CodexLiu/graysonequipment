import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { LeesStirrerDetail } from "@/components/lees-stirrer-detail"

export const metadata = {
  title: "Rotary Lees Stirring Wand - Grayson Equipment",
  description: "Gentle agitation blade designed to lift lees without scratching barrel staves or introducing oxygen.",
}

export default function LeesStirrerPage() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-background pt-20">
        <LeesStirrerDetail />
      </main>
      <Footer />
    </>
  )
}
