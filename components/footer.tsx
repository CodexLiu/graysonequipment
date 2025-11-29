import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export function Footer() {
  const links = [
    { label: "Fittings", href: "#" },
    { label: "Hoses", href: "#" },
    { label: "Tools", href: "#" },
    { label: "Replacement Parts", href: "#" },
  ]

  return (
    <footer className="bg-secondary border-t-2 border-border py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 mb-12">
          {/* Left: Logo and Links */}
          <div className="space-y-8">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 border-2 border-primary flex items-center justify-center">
                <span className="text-primary font-bold text-xl font-mono">GE</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground tracking-wide">GRAYSON EQUIPMENT</h3>
                <p className="text-xs text-muted-foreground font-mono">INDUSTRIAL PRECISION</p>
              </div>
            </div>

            <nav className="flex flex-wrap gap-6">
              {links.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="text-muted-foreground hover:text-primary transition-colors font-mono text-sm tracking-wide"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            
          </div>

          {/* Right: Email Signup */}
          <div className="space-y-4">
            <h4 className="text-lg font-bold text-foreground tracking-wide">GET THE PRE-HARVEST CHECKLIST</h4>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Essential equipment verification for crush season. Delivered to your inbox.
            </p>
            <div className="flex gap-2">
              <Input
                type="email"
                placeholder="Email address"
                className="bg-background border-2 border-border text-foreground"
              />
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground whitespace-nowrap">
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border">
          <p className="text-xs text-muted-foreground text-center font-mono">
            © {new Date().getFullYear()} Grayson Equipment. All specifications subject to change. Food-grade
            certifications available upon request.
          </p>
        </div>
      </div>
    </footer>
  )
}
