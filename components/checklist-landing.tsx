"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { CheckCircle2 } from "lucide-react"

export function ChecklistLanding() {
  const [email, setEmail] = useState("")
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle email submission logic here
    setSubmitted(true)
  }

  return (
    <div className="min-h-[calc(100vh-5rem)] flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Side - The Asset */}
          <div className="order-2 lg:order-1">
            <div className="relative">
              <img
                src="/placeholder.svg?height=800&width=600"
                alt="Pre-Harvest Checklist Preview"
                className="w-full rounded shadow-2xl"
              />
            </div>
          </div>

          {/* Right Side - The Form */}
          <div className="order-1 lg:order-2">
            {!submitted ? (
              <>
                <div className="inline-block px-4 py-2 bg-primary/20 text-primary font-mono text-sm mb-6">
                  FREE DOWNLOAD
                </div>
                <h1 className="text-5xl font-bold mb-6 tracking-tight text-balance">
                  Don't Get Caught With a Blown Gasket at 2 AM
                </h1>
                <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                  Download the essential 50-point maintenance checklist used by professional winemakers to prepare their
                  cellars for harvest season.
                </p>

                {/* Benefits List */}
                <ul className="space-y-4 mb-10">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">Comprehensive equipment inspection protocol</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">Critical gasket and seal replacement schedule</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">Pump calibration and testing procedures</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">Emergency spare parts inventory guide</span>
                  </li>
                </ul>

                {/* Form */}
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <Label htmlFor="email" className="sr-only">
                      Email Address
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email address"
                      className="bg-card border-border h-14 text-lg"
                    />
                  </div>
                  <Button type="submit" size="lg" className="w-full bg-primary text-primary-foreground text-lg h-14">
                    Download Checklist Now
                  </Button>
                  <p className="text-xs text-muted-foreground text-center">
                    We respect your privacy. Unsubscribe anytime. No spam, ever.
                  </p>
                </form>
              </>
            ) : (
              <div className="text-center py-12">
                <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle2 className="w-10 h-10 text-primary" />
                </div>
                <h2 className="text-3xl font-bold mb-4">Check Your Email!</h2>
                <p className="text-lg text-muted-foreground mb-8">
                  We've sent the Pre-Harvest Checklist PDF to <strong>{email}</strong>
                </p>
                <p className="text-muted-foreground">
                  Don't see it? Check your spam folder or contact us at support@graysonequipment.com
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
