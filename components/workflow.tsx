"use client"

import { motion } from "framer-motion"
import { ArrowDown, ArrowRight } from "lucide-react"
import { ECOSYSTEM_STEPS } from "@/lib/site-data"

export function Workflow() {
  return (
    <section id="ecosystem" className="relative overflow-hidden border-t border-border py-20 lg:py-28">
      <div
        className="pointer-events-none absolute right-0 top-1/4 h-[500px] w-[500px] rounded-full opacity-20 blur-[130px]"
        style={{ background: "radial-gradient(circle, hsl(var(--accent)) 0%, transparent 70%)" }}
        aria-hidden
      />
      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-primary">
            Publishing Ecosystem
          </span>
          <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-balance sm:text-4xl lg:text-5xl">
            One pipeline, every platform that matters
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground text-pretty">
            We take your game from handoff to compounding revenue across China&apos;s most important
            distribution surfaces.
          </p>
        </div>

        <div className="mt-16">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {ECOSYSTEM_STEPS.map((step, i) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: (i % 4) * 0.08 }}
                className="relative"
              >
                <div className="flex h-full flex-col rounded-2xl border border-border bg-card p-5">
                  <div className="flex items-center gap-3">
                    <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10 font-heading text-sm font-bold text-primary">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h3 className="font-heading text-base font-bold tracking-tight">{step.title}</h3>
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{step.desc}</p>
                </div>

                {i < ECOSYSTEM_STEPS.length - 1 && (
                  <>
                    <span className="absolute -right-3 top-1/2 hidden -translate-y-1/2 text-primary lg:block [&:nth-child(4n)]:hidden">
                      {(i + 1) % 4 !== 0 ? <ArrowRight className="h-5 w-5" /> : null}
                    </span>
                  </>
                )}
              </motion.div>
            ))}
          </div>

          <div className="mt-10 flex items-center justify-center gap-3 rounded-2xl border border-primary/30 bg-primary/5 px-6 py-5 text-center">
            <ArrowDown className="h-5 w-5 shrink-0 text-primary" />
            <p className="text-sm font-medium text-foreground sm:text-base">
              The result: sustained, optimized revenue growth across the entire game lifecycle.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
