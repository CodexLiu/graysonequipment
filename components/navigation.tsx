"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Search, ShoppingCart } from "lucide-react"

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-card border-b border-border" : "bg-background/80 backdrop-blur-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="/" className="flex items-center gap-3">
            <div className="w-10 h-10 bg-primary flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-xl">G</span>
            </div>
            <span className="text-lg font-semibold tracking-tight text-foreground">GRAYSON EQUIPMENT</span>
          </a>

          {/* Main Links */}
          <div className="hidden md:flex items-center gap-8">
            <a
              href="/catalog"
              className="text-sm font-medium text-foreground hover:text-primary transition-colors tracking-wide"
            >
              CATALOG
            </a>
            <a
              href="/custom-fabrication"
              className="text-sm font-medium text-foreground hover:text-primary transition-colors tracking-wide"
            >
              CUSTOM FAB
            </a>
          </div>

          {/* Utilities */}
          <div className="flex items-center gap-4">
            <button className="text-foreground hover:text-primary transition-colors">
              <Search className="w-5 h-5" />
            </button>
            <button className="text-foreground hover:text-primary transition-colors">
              <ShoppingCart className="w-5 h-5" />
            </button>
            <Button
              variant="outline"
              size="sm"
              className="hidden sm:flex border-foreground text-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary bg-transparent"
              asChild
            >
              <a href="/rfq">CONTACT</a>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  )
}
