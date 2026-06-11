import type { Metadata } from "next"
import { notFound } from "next/navigation"
import Link from "next/link"
import { ArrowLeft, ArrowRight } from "lucide-react"
import { GAMES, getGame, getRelatedGames } from "@/lib/site-data"
import { Footer } from "@/components/footer"
import { TikTokQR } from "@/components/game/tiktok-qr"
import { ScreenshotGallery } from "@/components/game/screenshot-gallery"
import { PlayButton } from "@/components/game/play-button"

export function generateStaticParams() {
  return GAMES.map((g) => ({ slug: g.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const game = getGame(slug)
  if (!game) return { title: "Game Not Found | Esigame" }

  const title = `${game.title} | TikTok Mini Game Publisher | Esigame`
  const description = `Play ${game.title} on TikTok Mini Games and discover one of Esigame's featured publishing titles. ${game.blurb}`

  return {
    title,
    description,
    keywords: [
      game.title,
      "TikTok Mini Game",
      game.category,
      "Esigame",
      "TikTok Mini Games publisher",
    ],
    openGraph: {
      title,
      description,
      type: "article",
      images: [{ url: game.image }],
    },
  }
}

export default async function GamePage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const game = getGame(slug)
  if (!game) notFound()

  const related = getRelatedGames(slug, 3)

  return (
    <main className="bg-background">
      {/* Header */}
      <header className="border-b border-border">
        <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 lg:px-8">
          <Link href="/" className="flex items-center gap-2.5">
            <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary font-heading text-lg font-bold text-primary-foreground">
              E
            </span>
            <span className="font-heading text-lg font-bold tracking-tight">Esigame</span>
          </Link>
          <Link
            href="/#games"
            className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft className="h-4 w-4" />
            All Games
          </Link>
        </nav>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden border-b border-border">
        <div className="bg-grid pointer-events-none absolute inset-0 opacity-[0.25]" aria-hidden />
        <div
          className="pointer-events-none absolute -top-32 left-1/2 h-[420px] w-[680px] -translate-x-1/2 rounded-full opacity-25 blur-[120px]"
          style={{ background: "radial-gradient(circle, hsl(var(--primary)) 0%, transparent 70%)" }}
          aria-hidden
        />
        <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-5 py-16 lg:grid-cols-[auto_1fr] lg:px-8 lg:py-24">
          <div className="mx-auto h-40 w-40 overflow-hidden rounded-3xl border border-border bg-card shadow-xl sm:h-48 sm:w-48 lg:mx-0">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={game.image || "/placeholder.svg"}
              alt={`${game.title} official game icon`}
              className="h-full w-full object-cover"
            />
          </div>
          <div className="text-center lg:text-left">
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/60 px-4 py-1.5 text-xs font-medium text-muted-foreground">
              <span className="h-1.5 w-1.5 rounded-full bg-primary" />
              {game.category}
            </span>
            <h1 className="mt-5 font-heading text-4xl font-bold leading-[1.05] tracking-tight text-balance sm:text-5xl">
              {game.title}
            </h1>
            <p className="mx-auto mt-4 max-w-xl text-lg leading-relaxed text-muted-foreground text-pretty lg:mx-0">
              {game.tagline}
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4 lg:justify-start">
              <PlayButton url={game.tiktokUrl} label="Play Now on TikTok" />
              <a
                href="#gallery"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/40 px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-secondary"
              >
                View Screenshots
              </a>
            </div>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-24">
        <div className="grid gap-12 lg:grid-cols-[1.6fr_1fr] lg:gap-16">
          {/* Overview */}
          <div>
            <span className="text-sm font-semibold uppercase tracking-widest text-primary">
              Game Overview
            </span>
            <h2 className="mt-3 font-heading text-2xl font-bold tracking-tight sm:text-3xl">
              About {game.title}
            </h2>
            <div className="mt-6 flex flex-col gap-4">
              {game.overview.map((p, i) => (
                <p key={i} className="text-base leading-relaxed text-muted-foreground text-pretty">
                  {p}
                </p>
              ))}
            </div>

            <h3 className="mt-10 font-heading text-lg font-bold tracking-tight">Key Features</h3>
            <ul className="mt-4 grid gap-3 sm:grid-cols-2">
              {game.features.map((f) => (
                <li
                  key={f}
                  className="flex items-start gap-3 rounded-xl border border-border bg-card p-4 text-sm leading-relaxed text-foreground"
                >
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                  {f}
                </li>
              ))}
            </ul>
          </div>

          {/* Sidebar: Info + QR */}
          <aside className="flex flex-col gap-8">
            <div className="rounded-2xl border border-border bg-card p-6">
              <h3 className="font-heading text-lg font-bold tracking-tight">Game Information</h3>
              <dl className="mt-5 flex flex-col gap-4">
                <InfoRow label="Platform" value="TikTok Mini Game" />
                <InfoRow label="Publisher" value="Esigame" />
                <InfoRow label="Category" value={game.category} />
              </dl>
            </div>

            <div className="rounded-2xl border border-border bg-card p-6 text-center">
              <span className="text-sm font-semibold uppercase tracking-widest text-primary">
                Play on TikTok Mini Games
              </span>
              <p className="mx-auto mt-2 max-w-xs text-sm leading-relaxed text-muted-foreground">
                Scan the QR code with your phone to play {game.title} instantly inside TikTok.
              </p>
              <div className="mt-6">
                <TikTokQR url={game.tiktokUrl} icon={game.image} title={game.title} />
              </div>
              <div className="mt-6">
                <PlayButton url={game.tiktokUrl} label="Play Now on TikTok" full />
              </div>
            </div>
          </aside>
        </div>

        {/* Gallery */}
        <section id="gallery" className="mt-20 scroll-mt-24">
          <span className="text-sm font-semibold uppercase tracking-widest text-primary">
            Screenshots
          </span>
          <h2 className="mt-3 font-heading text-2xl font-bold tracking-tight sm:text-3xl">
            Inside the game
          </h2>
          <div className="mt-8">
            <ScreenshotGallery screenshots={game.screenshots} title={game.title} />
          </div>
        </section>

        {/* Related */}
        <section className="mt-20">
          <div className="flex items-end justify-between gap-4">
            <div>
              <span className="text-sm font-semibold uppercase tracking-widest text-primary">
                More Games
              </span>
              <h2 className="mt-3 font-heading text-2xl font-bold tracking-tight sm:text-3xl">
                Explore the portfolio
              </h2>
            </div>
            <Link
              href="/#games"
              className="hidden items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground sm:inline-flex"
            >
              View all
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((g) => (
              <Link
                key={g.slug}
                href={`/games/${g.slug}`}
                className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card transition-colors hover:border-primary/50"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={g.image || "/placeholder.svg"}
                    alt={`${g.title} official icon`}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <span className="absolute left-3 top-3 rounded-full border border-border bg-background/80 px-3 py-1 text-xs font-medium text-foreground backdrop-blur">
                    {g.category}
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <h3 className="font-heading text-lg font-bold tracking-tight">{g.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{g.blurb}</p>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-primary">
                    View Game
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </div>

      <Footer />
    </main>
  )
}

function InfoRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between gap-4 border-b border-border pb-4 last:border-0 last:pb-0">
      <dt className="text-sm text-muted-foreground">{label}</dt>
      <dd className="text-sm font-semibold text-foreground">{value}</dd>
    </div>
  )
}
