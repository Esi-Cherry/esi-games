import {
  Megaphone,
  PieChart,
  Wrench,
  Globe2,
  Smartphone,
  Banknote,
} from "lucide-react"

const services = [
  {
    icon: Megaphone,
    title: "User Acquisition",
    description:
      "Multi-channel UA strategies across social, programmatic, and emerging platforms to drive high-quality installs at efficient CPI.",
  },
  {
    icon: PieChart,
    title: "Data & Analytics",
    description:
      "Real-time dashboards, cohort analysis, and predictive modeling to inform every decision from monetization tuning to retention design.",
  },
  {
    icon: Banknote,
    title: "Monetization Design",
    description:
      "Expert IAA, IAP, and hybrid monetization strategies tailored to your game's genre and audience for maximum lifetime value.",
  },
  {
    icon: Wrench,
    title: "Live Operations",
    description:
      "Ongoing events, seasonal content, A/B testing, and engagement campaigns to keep players active long after launch.",
  },
  {
    icon: Globe2,
    title: "Global Localization",
    description:
      "Professional localization and culturalization across key markets to ensure your game resonates with players worldwide.",
  },
  {
    icon: Smartphone,
    title: "Platform Distribution",
    description:
      "Strategic distribution across app stores and emerging platforms including TikTok Mini Games, expanding your reach beyond traditional channels.",
  },
]

export function Services() {
  return (
    <section id="services" className="bg-primary py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-3 text-sm font-medium uppercase tracking-widest text-accent">
            Our Services
          </p>
          <h2 className="font-heading text-3xl font-bold tracking-tight text-primary-foreground md:text-4xl text-balance">
            Everything You Need to Go Global
          </h2>
          <p className="mt-4 leading-relaxed text-primary-foreground/60">
            End-to-end publishing services built around the needs of mobile
            game developers.
          </p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.title}
              className="rounded-lg border border-primary-foreground/10 bg-primary-foreground/5 p-8 transition-colors hover:bg-primary-foreground/10"
            >
              <service.icon className="mb-5 h-7 w-7 text-accent" />
              <h3 className="font-heading text-lg font-semibold text-primary-foreground">
                {service.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-primary-foreground/60">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
