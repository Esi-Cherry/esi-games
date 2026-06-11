"use client"

import { ExternalLink } from "lucide-react"

export function PlayButton({
  url,
  label,
  full = false,
}: {
  url: string
  label: string
  full?: boolean
}) {
  const handleClick = () => {
    if (typeof window !== "undefined" && window.self !== window.top) {
      window.open(url, "_blank", "noopener,noreferrer")
    } else {
      window.open(url, "_self")
    }
  }

  return (
    <button
      type="button"
      onClick={handleClick}
      className={`group inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:scale-[1.03] ${
        full ? "w-full" : ""
      }`}
    >
      {label}
      <ExternalLink className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
    </button>
  )
}
