import { ArrowRight } from "lucide-react"

export function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-primary">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-40"
        style={{ backgroundImage: "url('/hero-bg.jpg')" }}
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-primary/60" aria-hidden="true" />

      <div className="relative z-10 mx-auto max-w-4xl px-6 py-32 text-center">
        <p className="mb-4 text-sm font-medium uppercase tracking-widest text-accent">
          Singapore-Based Global Publisher
        </p>
        <h1 className="font-heading text-4xl font-bold leading-tight tracking-tight text-primary-foreground md:text-6xl lg:text-7xl text-balance">
          Bringing Great Games
          <br />
          to the World
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-primary-foreground/70">
          ESIGAME PTE. LTD. partners with talented studios worldwide to publish
          and scale mobile games across global markets and emerging platforms.
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-md bg-accent px-7 py-3 text-sm font-semibold text-accent-foreground transition-colors hover:bg-accent/90"
          >
            Partner With Us
            <ArrowRight className="h-4 w-4" />
          </a>
          <a
            href="#about"
            className="inline-flex items-center gap-2 rounded-md border border-primary-foreground/20 px-7 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:border-primary-foreground/40"
          >
            Learn More
          </a>
        </div>
      </div>
    </section>
  )
}
