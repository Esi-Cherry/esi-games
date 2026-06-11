"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Mail, Send, CheckCircle2 } from "lucide-react"
import { CONTACTS } from "@/lib/site-data"

export function Contact() {
  const [submitted, setSubmitted] = useState(false)

  return (
    <section id="contact" className="relative border-t border-border py-20 lg:py-28">
      <div
        className="pointer-events-none absolute left-1/4 top-0 h-[400px] w-[400px] rounded-full opacity-20 blur-[130px]"
        style={{ background: "radial-gradient(circle, hsl(var(--primary)) 0%, transparent 70%)" }}
        aria-hidden
      />
      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <span className="text-sm font-semibold uppercase tracking-widest text-primary">
              Contact
            </span>
            <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-balance sm:text-4xl lg:text-5xl">
              Let&apos;s build your next hit, together
            </h2>
            <p className="mt-4 max-w-md text-lg leading-relaxed text-muted-foreground text-pretty">
              Whether your game is ready to publish or you&apos;re exploring the China opportunity,
              our team is ready to talk.
            </p>

            <div className="mt-10 flex flex-col gap-3">
              {CONTACTS.map((c) => (
                <a
                  key={c.email}
                  href={`mailto:${c.email}`}
                  className="group flex items-center gap-4 rounded-2xl border border-border bg-card p-4 transition-colors hover:border-primary/50"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                      {c.label}
                    </p>
                    <p className="text-sm font-semibold text-foreground group-hover:text-primary">
                      {c.email}
                    </p>
                  </div>
                </a>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-border bg-card p-7 lg:p-9">
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex min-h-[360px] flex-col items-center justify-center text-center"
              >
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
                  <CheckCircle2 className="h-7 w-7 text-primary" />
                </div>
                <h3 className="font-heading text-xl font-bold">Inquiry received</h3>
                <p className="mt-2 max-w-sm text-sm text-muted-foreground">
                  Thank you. Our business development team will review your inquiry and respond
                  shortly.
                </p>
              </motion.div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault()
                  setSubmitted(true)
                }}
                className="flex flex-col gap-5"
              >
                <div className="grid gap-5 sm:grid-cols-2">
                  <Field id="name" label="Name" placeholder="Your name" required />
                  <Field id="email" label="Work email" type="email" placeholder="you@studio.com" required />
                </div>
                <Field id="company" label="Company / Studio" placeholder="Your studio name" />
                <div>
                  <label htmlFor="interest" className="mb-1.5 block text-sm font-medium">
                    Area of interest
                  </label>
                  <select
                    id="interest"
                    className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm text-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                  >
                    <option>China Publishing</option>
                    <option>TikTok Mini Games</option>
                    <option>WeChat Mini Games</option>
                    <option>Douyin Mini Games</option>
                    <option>Native Mobile Publishing</option>
                    <option>User Acquisition</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="mb-1.5 block text-sm font-medium">
                    Tell us about your game
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    required
                    placeholder="Genre, platform, current performance, and what you're looking for..."
                    className="w-full resize-none rounded-lg border border-input bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                  />
                </div>
                <button
                  type="submit"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-7 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:scale-[1.02]"
                >
                  Submit Inquiry
                  <Send className="h-4 w-4" />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

function Field({
  id,
  label,
  type = "text",
  placeholder,
  required,
}: {
  id: string
  label: string
  type?: string
  placeholder?: string
  required?: boolean
}) {
  return (
    <div>
      <label htmlFor={id} className="mb-1.5 block text-sm font-medium">
        {label}
      </label>
      <input
        id={id}
        type={type}
        required={required}
        placeholder={placeholder}
        className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
      />
    </div>
  )
}
