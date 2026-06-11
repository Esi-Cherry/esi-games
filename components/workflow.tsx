const steps = [
  {
    number: "01",
    title: "Discovery & Evaluation",
    description:
      "We review your game's core mechanics, market fit, and monetization potential to assess publishing viability.",
  },
  {
    number: "02",
    title: "Strategy & Planning",
    description:
      "Our team develops a tailored go-to-market strategy covering monetization design, UA channels, and platform selection.",
  },
  {
    number: "03",
    title: "Optimization & Launch",
    description:
      "We work closely with your studio to refine the product, integrate analytics, and prepare for a successful launch.",
  },
  {
    number: "04",
    title: "Scaling & LiveOps",
    description:
      "Post-launch, we drive growth through continuous UA optimization, live events, content updates, and data-driven iteration.",
  },
]

export function Workflow() {
  return (
    <section id="workflow" className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-3 text-sm font-medium uppercase tracking-widest text-accent">
            Our Workflow
          </p>
          <h2 className="font-heading text-3xl font-bold tracking-tight text-foreground md:text-4xl text-balance">
            From Concept to Global Scale
          </h2>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            A streamlined, transparent publishing process designed to bring
            your game to market efficiently.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <div key={step.number} className="relative">
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="absolute right-0 top-10 hidden h-px w-8 translate-x-full bg-border lg:block" aria-hidden="true" />
              )}
              <div className="rounded-lg border border-border bg-card p-8">
                <span className="font-heading text-4xl font-bold text-accent/30">
                  {step.number}
                </span>
                <h3 className="mt-4 font-heading text-lg font-semibold text-foreground">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
