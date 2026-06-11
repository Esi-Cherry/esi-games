"use client"

import { motion } from "framer-motion"
import { Building2, Users, Award } from "lucide-react"

const HIGHLIGHTS = [
  { icon: Building2, title: "HQ in China", desc: "With offices in Singapore and the United States." },
  { icon: Users, title: "Industry Veterans", desc: "Founded by leaders from Sina Games and Yodo1." },
  { icon: Award, title: "Since 2019", desc: "Six+ years building publishing infrastructure." },
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
              Built by veterans. Trusted by global studios.
            </motion.h2>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground text-pretty">
              Esigame is a global game publisher with headquarters in China and offices in Singapore
              and the United States. Founded by industry veterans from Sina Games and Yodo1.
            </p>
            <p className="mt-4 leading-relaxed text-muted-foreground text-pretty">
              We focus on bringing high-quality mobile games and mini games to players worldwide
              through data-driven publishing, creative marketing, and long-term operations.
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
