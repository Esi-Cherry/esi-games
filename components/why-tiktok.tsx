"use client"

import { motion } from "framer-motion"
import { Users, Flame, Sparkles, Share2, Gauge } from "lucide-react"
import { WHY_TIKTOK } from "@/lib/site-data"

const ICONS = [Users, Flame, Sparkles, Share2, Gauge]

export function WhyTikTok() {
  return (
    <section id="why-tiktok" className="relative overflow-hidden border-t border-border py-20 lg:py-28">
      <div
        className="pointer-events-none absolute left-0 top-1/3 h-[460px] w-[460px] rounded-full opacity-20 blur-[130px]"
        style={{ background: "radial-gradient(circle, hsl(var(--primary)) 0%, transparent 70%)" }}
        aria-hidden
      />
      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-sm font-semibold uppercase tracking-widest text-primary"
          >
            Why TikTok Mini Games
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-3 font-heading text-3xl font-bold tracking-tight text-balance sm:text-4xl lg:text-5xl"
          >
            The fastest-growing opportunity in gaming
          </motion.h2>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground text-pretty">
            TikTok turned discovery, virality, and social play into a single platform. We help
            studios capture that momentum.
          </p>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {WHY_TIKTOK.map((item, i) => {
            const Icon = ICONS[i]
            const featured = i === 0
            return (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.55, delay: (i % 3) * 0.08 }}
                className={`group relative flex flex-col overflow-hidden rounded-2xl border p-7 transition-colors ${
                  featured
                    ? "border-primary/40 bg-primary/5 lg:row-span-2"
                    : "border-border bg-card hover:border-primary/50"
                }`}
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-6 font-heading text-xl font-bold tracking-tight">{item.title}</h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {item.body}
                </p>
                <div className="mt-6 border-t border-border/70 pt-4">
                  <p className="font-heading text-2xl font-bold text-primary">{item.stat}</p>
                  <p className="mt-1 text-xs uppercase tracking-wider text-muted-foreground">
                    {item.statLabel}
                  </p>
                </div>
              </motion.article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
