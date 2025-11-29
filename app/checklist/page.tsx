import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ChecklistLanding } from "@/components/checklist-landing"

export const metadata = {
  title: "Pre-Harvest Checklist - Grayson Equipment",
  description:
    "Download the essential 50-point maintenance checklist for wineries. Don't get caught with equipment failures during crush.",
}

export default function ChecklistPage() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-background pt-20">
        <ChecklistLanding />
      </main>
      <Footer />
    </>
  )
}
