"use client"

import { motion } from "framer-motion"
import { PARTNERS } from "@/lib/site-data"

function LogoRow({ items }: { items: string[] }) {
  const doubled = [...items, ...items]
  return (
    <div className="flex w-max gap-4">
      {doubled.map((name, i) => (
        <div
          key={`${name}-${i}`}
          className="flex h-20 min-w-[200px] items-center justify-center rounded-xl border border-border bg-card px-8"
        >
          <span className="font-heading text-xl font-bold tracking-tight text-muted-foreground">
            {name}
          </span>
        </div>
      ))}
    </div>
  )
}

export function Partners() {
  return (
    <section className="relative border-t border-border py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="text-sm font-semibold uppercase tracking-widest text-primary">
            Featured Partners
          </span>
          <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-balance sm:text-4xl">
            Trusted by Global Developers
          </h2>
        </motion.div>
      </div>

      <div className="relative mt-14 flex flex-col gap-4 overflow-hidden">
        <div
          className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-background to-transparent"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-background to-transparent"
          aria-hidden
        />
        <div className="marquee-track">
          <LogoRow items={PARTNERS} />
        </div>
        <div className="marquee-track-rev">
          <LogoRow items={[...PARTNERS].reverse()} />
        </div>
      </div>
    </section>
  )
}
