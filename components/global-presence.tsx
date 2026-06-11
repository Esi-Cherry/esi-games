"use client"

import { motion } from "framer-motion"
import { ComposableMap, Geographies, Geography, Marker } from "react-simple-maps"

const GEO_URL = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json"

const OFFICES = [
  { city: "Beijing", role: "Global Headquarters", coordinates: [116.4, 39.9] as [number, number], note: "Publishing, LiveOps & platform relations" },
  { city: "Singapore", role: "APAC Hub", coordinates: [103.8, 1.35] as [number, number], note: "Partnerships & developer relations" },
  { city: "Los Angeles", role: "Americas Office", coordinates: [-118.2, 34.05] as [number, number], note: "Western developer cooperation & UA" },
]

export function GlobalPresence() {
  return (
    <section id="global" className="relative border-t border-border py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-primary">
            Global Presence
          </span>
          <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-balance sm:text-4xl lg:text-5xl">
            Global Reach, Local Expertise
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground text-pretty">
            Serving developers worldwide while delivering deep localization and operational
            excellence in China.
          </p>
        </div>

        <div className="mt-14 grid gap-8 lg:grid-cols-[1.6fr_1fr] lg:items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="overflow-hidden rounded-2xl border border-border bg-card"
          >
            <ComposableMap
              projectionConfig={{ scale: 150 }}
              width={800}
              height={400}
              style={{ width: "100%", height: "auto" }}
            >
              <Geographies geography={GEO_URL}>
                {({ geographies }) =>
                  geographies.map((geo) => (
                    <Geography
                      key={geo.rsmKey}
                      geography={geo}
                      fill="hsl(220 22% 14%)"
                      stroke="hsl(220 20% 20%)"
                      strokeWidth={0.5}
                      style={{
                        default: { outline: "none" },
                        hover: { outline: "none", fill: "hsl(220 22% 18%)" },
                        pressed: { outline: "none" },
                      }}
                    />
                  ))
                }
              </Geographies>
              {OFFICES.map((office) => (
                <Marker key={office.city} coordinates={office.coordinates}>
                  <circle r={10} fill="hsl(168 78% 48% / 0.25)">
                    <animate attributeName="r" from="6" to="16" dur="2s" repeatCount="indefinite" />
                    <animate attributeName="opacity" from="0.6" to="0" dur="2s" repeatCount="indefinite" />
                  </circle>
                  <circle r={4} fill="hsl(168 78% 48%)" stroke="hsl(222 33% 6%)" strokeWidth={1.5} />
                  <text
                    textAnchor="middle"
                    y={-14}
                    style={{ fill: "hsl(210 30% 96%)", fontSize: 13, fontWeight: 700 }}
                  >
                    {office.city}
                  </text>
                </Marker>
              ))}
            </ComposableMap>
          </motion.div>

          <div className="flex flex-col gap-4">
            {OFFICES.map((office, i) => (
              <motion.div
                key={office.city}
                initial={{ opacity: 0, x: 24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="rounded-2xl border border-border bg-card p-5"
              >
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-primary" />
                  <h3 className="font-heading text-lg font-bold tracking-tight">{office.city}</h3>
                  <span className="ml-auto text-xs font-medium uppercase tracking-wider text-primary">
                    {office.role}
                  </span>
                </div>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{office.note}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
