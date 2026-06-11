import React from "react"
import type { Metadata, Viewport } from "next"
import { Inter, Space_Grotesk } from "next/font/google"

import "./globals.css"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" })
const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Esigame | Powering the Next Generation of TikTok Mini Games",
  description:
    "Esigame is a global game publisher focused on TikTok Mini Games. We help developers launch, grow, and scale through publishing, live operations, influencer marketing, and monetization optimization. 75+ games published, 6+ years of experience.",
  keywords: [
    "TikTok Mini Games",
    "TikTok Mini Games publisher",
    "game publishing",
    "mobile game publisher",
    "creator marketing",
    "user acquisition",
    "LiveOps",
    "game monetization",
    "Esigame",
  ],
  openGraph: {
    title: "Esigame | Powering the Next Generation of TikTok Mini Games",
    description:
      "Global publisher helping developers launch, grow, and scale successful TikTok Mini Games worldwide. 75+ games published.",
    type: "website",
  },
  generator: "v0.app",
}

export const viewport: Viewport = {
  themeColor: "#0a0e16",
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable} bg-background`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
