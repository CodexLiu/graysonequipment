import { Button } from "@/components/ui/button"
import { MessageCircle, FileText, Wrench } from "lucide-react"
import Link from "next/link"

export function CustomFabrication() {
  const processSteps = [
    {
      icon: MessageCircle,
      title: "Consultation",
      description: "We sit down to understand your specific flow and constraints.",
    },
    {
      icon: FileText,
      title: "Design & Quote",
      description: "Receive detailed CAD drawings and transparent pricing.",
    },
    {
      icon: Wrench,
      title: "Precision Build",
      description: "Machined in-house to exact sanitary tolerances.",
    },
  ]

  return (
    <section id="custom" className="py-24 px-4 sm:px-6 lg:px-8 bg-card">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Image */}
          <div className="relative aspect-[4/3] bg-secondary border-2 border-border overflow-hidden">
            <img
              src="/engineer-hands-holding-calipers-measuring-metal-pa.jpg"
              alt="Custom Engineering Consultation"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-background/40 to-transparent" />
          </div>

          {/* Right Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-foreground mb-6 text-balance">
                BEYOND THE CATALOG: CUSTOM FABRICATION.
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                If you can't find it, we will engineer it. Our team partners with your cellar master to design bespoke
                solutions for unique production challenges.
              </p>
            </div>

            {/* Process Steps */}
            <div className="space-y-6">
              {processSteps.map((step, index) => (
                <div key={index} className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/10 border border-primary/20 flex items-center justify-center">
                    <step.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-foreground mb-1">{step.title}</h3>
                    <p className="text-sm text-muted-foreground">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <Link href="/rfq">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-base font-semibold tracking-wide"
              >
                Start A Custom Project
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
