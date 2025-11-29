import type React from "react"
import type { Metadata } from "next"
import { Playfair_Display, Lato } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const playfair = Playfair_Display({ 
  subsets: ["latin"],
  variable: '--font-serif',
  display: 'swap',
})

const lato = Lato({ 
  weight: ['300', '400', '700'],
  subsets: ["latin"],
  variable: '--font-sans',
  display: 'swap',
})

export const metadata: Metadata = {
  title: "Grayson Equipment - Built For The Crush",
  description:
    "Sanitary fittings, harvest tools, and processing equipment engineered for the modern cellar. Food-grade stainless steel for wineries and production facilities.",
  generator: "v0.app",
  icons: {
    icon: [
      {
        url: "/icon.svg?v=2",
        type: "image/svg+xml",
      },
    ],
    apple: "/icon.svg?v=2",
    shortcut: "/icon.svg?v=2",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${lato.variable} ${playfair.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
