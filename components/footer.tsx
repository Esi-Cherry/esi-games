import { NAV_LINKS } from "@/lib/site-data"

export function Footer() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="mx-auto max-w-7xl px-5 py-14 lg:px-8">
        <div className="grid gap-10 md:grid-cols-[1.5fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-2.5">
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary font-heading text-lg font-bold text-primary-foreground">
                E
              </span>
              <span className="font-heading text-lg font-bold tracking-tight">Esigame</span>
            </div>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
              Global game publisher powering the next generation of TikTok Mini Games — from
              publishing and creator marketing to user acquisition and LiveOps.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-foreground">Navigate</h4>
            <ul className="mt-4 flex flex-col gap-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-foreground">Offices</h4>
            <ul className="mt-4 flex flex-col gap-3 text-sm text-muted-foreground">
              <li>Singapore — APAC Hub</li>
              <li>Los Angeles — Americas</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border pt-6 sm:flex-row">
          <p className="text-xs text-muted-foreground">
            © 2026 Esigame. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground">
            Global TikTok Mini Games Publisher · Singapore · Los Angeles
          </p>
        </div>
      </div>
    </footer>
  )
}
