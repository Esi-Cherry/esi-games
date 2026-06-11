"use client"

import { motion } from "framer-motion"
import { Music2, Megaphone, LineChart, RefreshCw, Globe2 } from "lucide-react"
import { WHY_CARDS } from "@/lib/site-data"

const ICONS = [Music2, Megaphone, LineChart, RefreshCw, Globe2]

export function WhyUs() {
  return (
    <section id="why" className="relative border-t border-border py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="max-w-2xl">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-sm font-semibold uppercase tracking-widest text-primary"
          >
            Why Esigame
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-3 font-heading text-3xl font-bold tracking-tight text-balance sm:text-4xl lg:text-5xl"
          >
            A publisher built exclusively for TikTok Mini Games
          </motion.h2>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground text-pretty">
            We pair deep platform expertise with creator-led marketing and disciplined operations to
            turn great games into lasting franchises.
          </p>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {WHY_CARDS.map((card, i) => {
            const Icon = ICONS[i]
            return (
              <motion.article
                key={card.title}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.55, delay: i * 0.08 }}
                className="group relative flex flex-col rounded-2xl border border-border bg-card p-6 transition-colors hover:border-primary/50"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <Icon className="h-6 w-6" />
                </div>
                <span className="mt-6 text-xs font-medium uppercase tracking-wider text-primary">
                  {card.tag}
                </span>
                <h3 className="mt-2 font-heading text-xl font-bold tracking-tight">{card.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{card.body}</p>
              </motion.article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
