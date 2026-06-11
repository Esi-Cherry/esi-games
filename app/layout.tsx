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
  title: "Esigame | China Publishing & TikTok Mini Game Experts",
  description:
    "Esigame is a global game publisher specializing in China publishing, TikTok, WeChat, and Douyin Mini Games, and native mobile games. 75+ published titles, 100M+ RMB annual revenue, 6+ years of industry experience.",
  keywords: [
    "game publishing",
    "China game publishing",
    "TikTok Mini Games",
    "WeChat Mini Games",
    "Douyin Mini Games",
    "mobile game publisher",
    "user acquisition",
    "LiveOps",
    "Esigame",
  ],
  openGraph: {
    title: "Esigame | China Publishing & TikTok Mini Game Experts",
    description:
      "Helping global developers enter China's mobile and mini game market. 75+ published games, 100M+ RMB annual revenue.",
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
