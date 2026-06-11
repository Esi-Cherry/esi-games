import { CheckCircle2 } from "lucide-react"

const lookingFor = [
  "Casual, idle, simulation, and tycoon games with proven retention metrics",
  "Hybrid-casual titles with strong early funnel and monetization potential",
  "Games suitable for emerging platforms such as TikTok Mini Games",
  "Studios open to collaborative, data-driven optimization",
  "Titles with global appeal and culturally adaptable content",
  "Prototypes or soft-launched games ready for scaling",
]

export function Partners() {
  return (
    <section id="partners" className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <div>
            <p className="mb-3 text-sm font-medium uppercase tracking-widest text-accent">
              What We Look For
            </p>
            <h2 className="font-heading text-3xl font-bold tracking-tight text-foreground md:text-4xl text-balance">
              Is Your Game a Good Fit?
            </h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              We partner with studios and independent developers who share our
              commitment to quality, data-driven growth, and long-term
              collaboration.
            </p>
          </div>

          <div className="rounded-lg border border-border bg-card p-8 lg:p-10">
            <ul className="flex flex-col gap-5">
              {lookingFor.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                  <span className="text-sm leading-relaxed text-foreground">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
