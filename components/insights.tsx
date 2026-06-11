"use client"

import { motion } from "framer-motion"
import { ArrowUpRight } from "lucide-react"
import { INSIGHTS } from "@/lib/site-data"

export function Insights() {
  const [feature, ...rest] = INSIGHTS

  return (
    <section id="insights" className="relative border-t border-border py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <div className="max-w-2xl">
            <span className="text-sm font-semibold uppercase tracking-widest text-primary">
              Industry Insights
            </span>
            <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-balance sm:text-4xl lg:text-5xl">
              Perspectives from the front lines
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-muted-foreground">
            We share what we learn shipping and scaling games — so the whole ecosystem moves
            forward.
          </p>
        </div>

        <div className="mt-14 grid gap-5 lg:grid-cols-2">
          <motion.article
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.55 }}
            className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-primary/40 bg-primary/5 p-8 transition-colors hover:border-primary"
          >
            <div
              className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full opacity-40 blur-3xl"
              style={{ background: "radial-gradient(circle, hsl(var(--primary)) 0%, transparent 70%)" }}
              aria-hidden
            />
            <div>
              <span className="inline-flex rounded-full border border-primary/40 bg-background/60 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
                {feature.tag}
              </span>
              <h3 className="mt-6 font-heading text-2xl font-bold tracking-tight text-balance lg:text-3xl">
                {feature.title}
              </h3>
              <p className="mt-4 max-w-md text-base leading-relaxed text-muted-foreground">
                {feature.body}
              </p>
            </div>
            <div className="mt-8 flex items-center gap-2 text-sm font-semibold text-primary">
              {feature.read}
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </div>
          </motion.article>

          <div className="grid gap-5 sm:grid-cols-2">
            {rest.map((item, i) => (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="group flex flex-col rounded-2xl border border-border bg-card p-6 transition-colors hover:border-primary/50"
              >
                <span className="text-xs font-semibold uppercase tracking-wider text-primary">
                  {item.tag}
                </span>
                <h3 className="mt-3 font-heading text-lg font-bold tracking-tight text-balance">
                  {item.title}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {item.body}
                </p>
                <div className="mt-5 flex items-center gap-2 text-xs font-semibold text-muted-foreground transition-colors group-hover:text-primary">
                  {item.read}
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
