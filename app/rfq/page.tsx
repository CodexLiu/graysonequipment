import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { RFQForm } from "@/components/rfq-form"

export const metadata = {
  title: "Request for Quote - Grayson Equipment",
  description: "Submit your custom project requirements and receive a detailed quote within 24 hours.",
}

export default function RFQPage() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-background pt-20">
        <RFQForm />
      </main>
      <Footer />
    </>
  )
}
