"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Upload } from "lucide-react"

export function RFQForm() {
  const [dragActive, setDragActive] = useState(false)

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true)
    } else if (e.type === "dragleave") {
      setDragActive(false)
    }
  }

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setDragActive(false)
    // Handle file upload logic here
  }

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold mb-4 tracking-tight">Start a Custom Project</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Upload your drawings or describe your needs. Our engineers review requests within 24 hours.
        </p>
      </div>

      {/* Form Container */}
      <div className="bg-card border border-border p-8">
        <form className="space-y-6">
          {/* Contact Info */}
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <Label htmlFor="name" className="text-sm font-medium mb-2 block">
                Your Name *
              </Label>
              <Input id="name" type="text" required className="bg-background border-border" placeholder="John Smith" />
            </div>
            <div>
              <Label htmlFor="winery" className="text-sm font-medium mb-2 block">
                Winery/Company Name *
              </Label>
              <Input
                id="winery"
                type="text"
                required
                className="bg-background border-border"
                placeholder="Napa Valley Vineyards"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <Label htmlFor="email" className="text-sm font-medium mb-2 block">
                Email Address *
              </Label>
              <Input
                id="email"
                type="email"
                required
                className="bg-background border-border"
                placeholder="john@winery.com"
              />
            </div>
            <div>
              <Label htmlFor="phone" className="text-sm font-medium mb-2 block">
                Phone Number
              </Label>
              <Input id="phone" type="tel" className="bg-background border-border" placeholder="(707) 555-0100" />
            </div>
          </div>

          {/* Project Type */}
          <div>
            <Label htmlFor="projectType" className="text-sm font-medium mb-2 block">
              Project Type *
            </Label>
            <Select>
              <SelectTrigger id="projectType" className="w-full bg-background border-border">
                <SelectValue placeholder="Select project type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="catwalks">Catwalks & Access Platforms</SelectItem>
                <SelectItem value="manifolds">Custom Manifolds</SelectItem>
                <SelectItem value="tank">Tank Modifications</SelectItem>
                <SelectItem value="piping">Piping Systems</SelectItem>
                <SelectItem value="racking">Barrel Racking</SelectItem>
                <SelectItem value="other">Other Custom Fabrication</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Project Details */}
          <div>
            <Label htmlFor="details" className="text-sm font-medium mb-2 block">
              Project Details *
            </Label>
            <Textarea
              id="details"
              required
              rows={8}
              className="bg-background border-border resize-none"
              placeholder="Describe your project requirements, including dimensions, materials, pressure ratings, and any specific compliance needs..."
            />
          </div>

          {/* File Upload */}
          <div>
            <Label className="text-sm font-medium mb-2 block">Supporting Files</Label>
            <div
              className={`border-2 border-dashed rounded p-12 text-center transition-colors ${
                dragActive ? "border-primary bg-primary/5" : "border-border hover:border-muted-foreground"
              }`}
              onDragEnter={handleDrag}
              onDragLeave={handleDrag}
              onDragOver={handleDrag}
              onDrop={handleDrop}
            >
              <Upload className="w-12 h-12 mx-auto mb-4 text-muted-foreground" />
              <p className="text-lg font-medium mb-2">Drag & Drop Files Here</p>
              <p className="text-sm text-muted-foreground mb-4">or click to browse (CAD, PDF, JPEG accepted)</p>
              <Button type="button" variant="outline" className="bg-transparent">
                Browse Files
              </Button>
            </div>
          </div>

          {/* Budget Range */}
          <div>
            <Label htmlFor="budget" className="text-sm font-medium mb-2 block">
              Estimated Budget Range
            </Label>
            <Select>
              <SelectTrigger id="budget" className="w-full bg-background border-border">
                <SelectValue placeholder="Select budget range" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="under5k">Under $5,000</SelectItem>
                <SelectItem value="5k-10k">$5,000 - $10,000</SelectItem>
                <SelectItem value="10k-25k">$10,000 - $25,000</SelectItem>
                <SelectItem value="25k-50k">$25,000 - $50,000</SelectItem>
                <SelectItem value="over50k">Over $50,000</SelectItem>
                <SelectItem value="not-sure">Not Sure Yet</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Timeline */}
          <div>
            <Label htmlFor="timeline" className="text-sm font-medium mb-2 block">
              Project Timeline
            </Label>
            <Select>
              <SelectTrigger id="timeline" className="w-full bg-background border-border">
                <SelectValue placeholder="When do you need this completed?" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="urgent">Urgent (Within 2 weeks)</SelectItem>
                <SelectItem value="month">Within 1 month</SelectItem>
                <SelectItem value="quarter">Within 3 months</SelectItem>
                <SelectItem value="flexible">Flexible Timeline</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Submit Button */}
          <Button type="submit" size="lg" className="w-full bg-primary text-primary-foreground text-lg h-14">
            Submit Request for Quote
          </Button>

          <p className="text-xs text-muted-foreground text-center">
            By submitting this form, you agree to receive communications from Grayson Equipment regarding your project
            inquiry.
          </p>
        </form>
      </div>

      {/* Trust Indicators */}
      <div className="mt-12 grid md:grid-cols-3 gap-6 text-center">
        <div>
          <div className="text-3xl font-bold text-primary mb-2">24hr</div>
          <p className="text-sm text-muted-foreground">Response Time</p>
        </div>
        <div>
          <div className="text-3xl font-bold text-primary mb-2">250+</div>
          <p className="text-sm text-muted-foreground">Custom Projects Completed</p>
        </div>
        <div>
          <div className="text-3xl font-bold text-primary mb-2">15yr</div>
          <p className="text-sm text-muted-foreground">Industry Experience</p>
        </div>
      </div>
    </div>
  )
}
