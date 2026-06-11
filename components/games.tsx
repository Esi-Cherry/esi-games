"use client"

import { motion } from "framer-motion"
import { GAMES } from "@/lib/site-data"

export function Games() {
  return (
    <section id="games" className="relative border-t border-border py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <div className="max-w-2xl">
            <span className="text-sm font-semibold uppercase tracking-widest text-primary">
              Featured Games
            </span>
            <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-balance sm:text-4xl lg:text-5xl">
              A portfolio that performs across markets
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-muted-foreground">
            A track record of casual and idle hits — published, marketed, and operated for the
            TikTok generation.
          </p>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {GAMES.map((game, i) => (
            <motion.article
              key={game.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55, delay: (i % 3) * 0.08 }}
              className="group overflow-hidden rounded-2xl border border-border bg-card transition-colors hover:border-primary/50"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={game.image || "/placeholder.svg"}
                  alt={`${game.title} key art`}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
                <span className="absolute left-3 top-3 rounded-full border border-border bg-background/80 px-3 py-1 text-xs font-medium text-foreground backdrop-blur">
                  {game.category}
                </span>
              </div>
              <div className="p-5">
                <h3 className="font-heading text-lg font-bold tracking-tight">{game.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{game.blurb}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
