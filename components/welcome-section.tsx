import { Button } from "@/components/ui/button"
import Link from "next/link"

export function WelcomeSection() {
  return (
    <section className="py-24 md:py-32 bg-background text-center px-6">
      <div className="max-w-3xl mx-auto space-y-8">
        <span className="text-sm uppercase tracking-[0.2em] text-muted-foreground font-sans">Who We Are</span>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-primary font-medium leading-tight">
          Precision for the Modern Cellar
        </h2>
        <p className="text-lg md:text-xl text-muted-foreground font-sans leading-relaxed font-light">
          Since 2016, we’ve focused on just three things: quality, reliability, and service. 
          We believe that equipment should not just function, but elevate the winemaking process. 
          The longevity of our stainless steel, the precision of our fabrication, and the 
          expertise of our team ensure that Grayson Equipment is more than just a supplier.
        </p>
        <div className="pt-4">
          <Button asChild variant="outline" className="rounded-none border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-6 uppercase tracking-widest text-xs">
            <Link href="/catalog">Explore Our Catalog</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}

