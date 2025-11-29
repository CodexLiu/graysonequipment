import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { WelcomeSection } from "@/components/welcome-section"
import { ProductCategoriesSection } from "@/components/product-categories-section"
import { HarvestEssentials } from "@/components/harvest-essentials"
import { CustomFabrication } from "@/components/custom-fabrication"
import { TrustLogistics } from "@/components/trust-logistics"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-background">
        <HeroSection />
        <WelcomeSection />
        <ProductCategoriesSection />
        <HarvestEssentials />
        <CustomFabrication />
        <TrustLogistics />
        <Footer />
      </main>
    </>
  )
}
