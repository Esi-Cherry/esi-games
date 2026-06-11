import { Globe, BarChart3, Gamepad2 } from "lucide-react"

const stats = [
  { icon: Globe, label: "Global Markets", value: "50+" },
  { icon: BarChart3, label: "Monthly Active Users", value: "10M+" },
  { icon: Gamepad2, label: "Games Published", value: "30+" },
]

export function About() {
  return (
    <section id="about" className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <div>
            <p className="mb-3 text-sm font-medium uppercase tracking-widest text-accent">
              About Us
            </p>
            <h2 className="font-heading text-3xl font-bold tracking-tight text-foreground md:text-4xl text-balance">
              A Publisher Built for the Global Stage
            </h2>
            <p className="mt-6 leading-relaxed text-muted-foreground">
              ESIGAME PTE. LTD. is a Singapore-headquartered mobile game
              publishing company focused on helping developers reach players
              worldwide. We specialize in casual, idle, simulation, and hybrid
              monetization titles.
            </p>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              Our team brings deep expertise in user acquisition, live
              operations, data analytics, and monetization design. We operate
              across global and emerging platforms, including TikTok Mini Games,
              to maximize reach and revenue for every title we publish.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-3 lg:grid-cols-1 lg:gap-8">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="flex items-center gap-5 rounded-lg border border-border bg-card p-6"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-md bg-accent/10">
                  <stat.icon className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <p className="font-heading text-2xl font-bold text-foreground">
                    {stat.value}
                  </p>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
