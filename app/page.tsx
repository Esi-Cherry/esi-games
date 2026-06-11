import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { WhyTikTok } from "@/components/why-tiktok"
import { Workflow } from "@/components/workflow"
import { WhyUs } from "@/components/why-us"
import { Games } from "@/components/games"
import { Partners } from "@/components/partners"
import { GlobalPresence } from "@/components/global-presence"
import { Services } from "@/components/services"
import { Insights } from "@/components/insights"
import { About } from "@/components/about"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"

export default function Page() {
  return (
    <main>
      <Navbar />
      <Hero />
      <WhyTikTok />
      <Workflow />
      <WhyUs />
      <Games />
      <Partners />
      <GlobalPresence />
      <Services />
      <Insights />
      <About />
      <Contact />
      <Footer />
    </main>
  )
}
