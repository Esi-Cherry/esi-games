"use client"

import { motion } from "framer-motion"
import { SERVICES } from "@/lib/site-data"

export function Services() {
  return (
    <section className="relative overflow-hidden border-t border-border bg-secondary/30 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-primary">
            Why Developers Choose Us
          </span>
          <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-balance sm:text-4xl lg:text-5xl">
            Full-stack publishing, measurable outcomes
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground text-pretty">
            Every discipline that turns a launch into a long-term business — delivered by a single,
            accountable partner.
          </p>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55, delay: (i % 3) * 0.08 }}
              className="group flex flex-col rounded-2xl border border-border bg-card p-7 transition-colors hover:border-primary/50"
            >
              <div className="flex items-baseline gap-2">
                <span className="font-heading text-4xl font-bold tracking-tight text-primary">
                  {service.metric}
                </span>
                <span className="text-xs text-muted-foreground">{service.metricLabel}</span>
              </div>
              <h3 className="mt-5 font-heading text-lg font-bold tracking-tight">{service.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{service.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
