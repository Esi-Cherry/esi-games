"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X, ChevronLeft, ChevronRight } from "lucide-react"

export function ScreenshotGallery({
  screenshots,
  title,
}: {
  screenshots: string[]
  title: string
}) {
  const [active, setActive] = useState<number | null>(null)

  const close = () => setActive(null)
  const prev = () =>
    setActive((i) => (i === null ? null : (i - 1 + screenshots.length) % screenshots.length))
  const next = () =>
    setActive((i) => (i === null ? null : (i + 1) % screenshots.length))

  return (
    <>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
        {screenshots.map((src, i) => (
          <motion.button
            key={src}
            type="button"
            onClick={() => setActive(i)}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.45, delay: i * 0.06 }}
            className="group relative aspect-[9/16] overflow-hidden rounded-xl border border-border bg-card focus:outline-none focus:ring-2 focus:ring-primary"
            aria-label={`View ${title} screenshot ${i + 1}`}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={src || "/placeholder.svg"}
              alt={`${title} gameplay screenshot ${i + 1}`}
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              loading="lazy"
            />
          </motion.button>
        ))}
      </div>

      <AnimatePresence>
        {active !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] flex items-center justify-center bg-background/90 p-4 backdrop-blur-sm"
            onClick={close}
          >
            <button
              type="button"
              onClick={close}
              aria-label="Close"
              className="absolute right-5 top-5 flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card text-foreground hover:border-primary/50"
            >
              <X className="h-5 w-5" />
            </button>
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation()
                prev()
              }}
              aria-label="Previous screenshot"
              className="absolute left-3 flex h-11 w-11 items-center justify-center rounded-full border border-border bg-card text-foreground hover:border-primary/50 sm:left-8"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <motion.img
              key={active}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              src={screenshots[active] || "/placeholder.svg"}
              alt={`${title} gameplay screenshot ${active + 1}`}
              className="max-h-[85vh] w-auto rounded-2xl border border-border object-contain"
              onClick={(e) => e.stopPropagation()}
            />
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation()
                next()
              }}
              aria-label="Next screenshot"
              className="absolute right-3 flex h-11 w-11 items-center justify-center rounded-full border border-border bg-card text-foreground hover:border-primary/50 sm:right-8"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
