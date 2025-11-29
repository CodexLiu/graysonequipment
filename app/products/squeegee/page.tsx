import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { SqueegeeDe } from "@/components/squeegee-detail"

export const metadata = {
  title: '30" Neoprene Floor Squeegee - Grayson Equipment',
  description: "Chemical-resistant neoprene blade fused to a seamless aluminum frame. Leaves concrete dry in one pass.",
}

export default function SqueegeePage() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-background pt-20">
        <SqueegeeDe />
      </main>
      <Footer />
    </>
  )
}
