"use client"

import { motion } from "framer-motion"
import { Building2, Users, Award } from "lucide-react"

const HIGHLIGHTS = [
  { icon: Building2, title: "TikTok-Native Publisher", desc: "Built around the TikTok Mini Games ecosystem from day one." },
  { icon: Users, title: "Global Publishing Team", desc: "Experienced professionals across multiple markets." },
  { icon: Award, title: "75+ Games Published", desc: "Six+ years and millions of players reached worldwide." },
]

export function About() {
  return (
    <section id="about" className="relative border-t border-border py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-sm font-semibold uppercase tracking-widest text-primary"
            >
              About Esigame
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mt-3 font-heading text-3xl font-bold tracking-tight text-balance sm:text-4xl lg:text-5xl"
            >
              Built for developers. Trusted worldwide.
            </motion.h2>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground text-pretty">
              Esigame is a global publisher helping developers build successful businesses on TikTok
              Mini Games. We combine publishing expertise, performance marketing, creator
              partnerships, and long-term operations to maximize growth.
            </p>
            <p className="mt-4 leading-relaxed text-muted-foreground text-pretty">
              We act as an extension of your studio — handling strategy, localization, marketing, and
              live operations so you can focus on building games players love.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            {HIGHLIGHTS.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: 24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex items-start gap-5 rounded-2xl border border-border bg-card p-6"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <item.icon className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-heading text-lg font-bold tracking-tight">{item.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
