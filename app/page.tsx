import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { WhyUs } from "@/components/why-us"
import { Workflow } from "@/components/workflow"
import { Partners } from "@/components/partners"
import { Games } from "@/components/games"
import { GlobalPresence } from "@/components/global-presence"
import { Services } from "@/components/services"
import { About } from "@/components/about"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"

export default function Page() {
  return (
    <main>
      <Navbar />
      <Hero />
      <WhyUs />
      <Workflow />
      <Partners />
      <Games />
      <GlobalPresence />
      <Services />
      <About />
      <Contact />
      <Footer />
    </main>
  )
}
