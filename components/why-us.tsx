import { TrendingUp, Shield, Users, Zap, LineChart, Layers } from "lucide-react"

const reasons = [
  {
    icon: TrendingUp,
    title: "Data-Driven Growth",
    description:
      "We leverage advanced analytics and real-time dashboards to guide user acquisition, retention, and revenue optimization across every title.",
  },
  {
    icon: Shield,
    title: "Partner-First Approach",
    description:
      "Transparent revenue sharing, clear reporting, and long-term collaboration. We treat every studio as a valued partner, not just a supplier.",
  },
  {
    icon: Users,
    title: "Global Reach",
    description:
      "We operate across major global markets and emerging platforms, including TikTok Mini Games, to bring your titles to the widest possible audience.",
  },
  {
    icon: Zap,
    title: "Hybrid Monetization Expertise",
    description:
      "Deep knowledge in IAA, IAP, and hybrid monetization models. We design the right strategy for each title to maximize lifetime value.",
  },
  {
    icon: LineChart,
    title: "Live Operations Excellence",
    description:
      "Dedicated LiveOps teams manage events, content updates, and player engagement strategies that keep your games thriving post-launch.",
  },
  {
    icon: Layers,
    title: "Full-Stack Publishing",
    description:
      "From market analysis and localization to UA, ASO, and post-launch optimization, we handle the full publishing pipeline end to end.",
  },
]

export function WhyUs() {
  return (
    <section id="why-us" className="bg-card py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-3 text-sm font-medium uppercase tracking-widest text-accent">
            Why Us
          </p>
          <h2 className="font-heading text-3xl font-bold tracking-tight text-foreground md:text-4xl text-balance">
            Built to Help Your Games Succeed
          </h2>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            We combine deep industry expertise with a partner-friendly
            mindset to deliver measurable results.
          </p>
        </div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {reasons.map((reason) => (
            <div
              key={reason.title}
              className="rounded-lg border border-border bg-background p-8 transition-shadow hover:shadow-md"
            >
              <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-md bg-accent/10">
                <reason.icon className="h-5 w-5 text-accent" />
              </div>
              <h3 className="font-heading text-lg font-semibold text-foreground">
                {reason.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
