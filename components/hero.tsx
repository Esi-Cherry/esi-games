"use client"

import { motion } from "framer-motion"
import { ArrowRight, CalendarDays } from "lucide-react"
import { HERO_STATS, GAMES } from "@/lib/site-data"
import { CountUp } from "@/components/count-up"

const columnA = [GAMES[0], GAMES[2], GAMES[4], GAMES[1]]
const columnB = [GAMES[1], GAMES[3], GAMES[5], GAMES[0]]
const columnC = [GAMES[5], GAMES[4], GAMES[2], GAMES[3]]

function ShowcaseColumn({
  items,
  reverse = false,
  duration = 28,
}: {
  items: typeof GAMES
  reverse?: boolean
  duration?: number
}) {
  const doubled = [...items, ...items]
  return (
    <div className="relative h-full overflow-hidden">
      <motion.div
        className="flex flex-col gap-4"
        animate={{ y: reverse ? ["-50%", "0%"] : ["0%", "-50%"] }}
        transition={{ duration, ease: "linear", repeat: Number.POSITIVE_INFINITY }}
      >
        {doubled.map((game, i) => (
          <div
            key={`${game.title}-${i}`}
            className="overflow-hidden rounded-2xl border border-border/60 bg-card"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={game.image || "/placeholder.svg"}
              alt={`${game.title} key art`}
              className="aspect-[3/4] w-full object-cover"
              loading="lazy"
            />
          </div>
        ))}
      </motion.div>
    </div>
  )
}

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-16">
      <div className="absolute inset-0 bg-grid opacity-[0.25]" aria-hidden />
      <div
        className="pointer-events-none absolute -top-40 left-1/2 h-[640px] w-[900px] -translate-x-1/2 rounded-full opacity-30 blur-[120px]"
        style={{ background: "radial-gradient(circle, hsl(var(--primary)) 0%, transparent 70%)" }}
        aria-hidden
      />

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 pb-20 pt-14 lg:grid-cols-[1.05fr_0.95fr] lg:px-8 lg:pb-28 lg:pt-20">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/60 px-4 py-1.5 text-xs font-medium text-muted-foreground"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            Global TikTok Mini Games Publisher
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.05 }}
            className="mt-6 font-heading text-4xl font-bold leading-[1.05] tracking-tight text-balance sm:text-5xl lg:text-6xl"
          >
            Powering the Next Generation of{" "}
            <span className="text-primary">TikTok Mini Games</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="mt-5 max-w-xl text-lg leading-relaxed text-muted-foreground text-pretty"
          >
            We help game developers launch, grow, and scale successful TikTok Mini Games worldwide
            through publishing, live operations, influencer marketing, and monetization
            optimization.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="mt-8 flex flex-wrap items-center gap-4"
          >
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:scale-[1.03]"
            >
              Publish Your Game
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/40 px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-secondary"
            >
              <CalendarDays className="h-4 w-4 text-primary" />
              Schedule a Meeting
            </a>
          </motion.div>

          <motion.dl
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35 }}
            className="mt-12 grid grid-cols-2 gap-x-6 gap-y-8 border-t border-border pt-8 sm:grid-cols-4"
          >
            {HERO_STATS.map((stat) => (
              <div key={stat.label}>
                <dt className="font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                  {stat.value !== null ? (
                    <CountUp value={stat.value} suffix={stat.suffix} />
                  ) : (
                    stat.display
                  )}
                </dt>
                <dd className="mt-1 text-xs leading-snug text-muted-foreground">{stat.label}</dd>
              </div>
            ))}
          </motion.dl>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative hidden h-[560px] lg:block"
        >
          <div className="grid h-full grid-cols-3 gap-4">
            <ShowcaseColumn items={columnA} duration={32} />
            <ShowcaseColumn items={columnB} reverse duration={26} />
            <ShowcaseColumn items={columnC} duration={36} />
          </div>
          <div
            className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-background to-transparent"
            aria-hidden
          />
          <div
            className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-background to-transparent"
            aria-hidden
          />
        </motion.div>
      </div>
    </section>
  )
}
