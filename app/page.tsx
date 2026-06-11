import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { WhyUs } from "@/components/why-us"
import { Workflow } from "@/components/workflow"
import { Services } from "@/components/services"
import { Partners } from "@/components/partners"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"

export default function Page() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <WhyUs />
      <Workflow />
      <Services />
      <Partners />
      <Contact />
      <Footer />
    </main>
  )
}
