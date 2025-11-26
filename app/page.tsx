import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Biography } from "@/components/biography"
import { Services } from "@/components/services"
import { BeforeAfter } from "@/components/before-after"
import { Testimonials } from "@/components/testimonials"
import { FAQ } from "@/components/faq"
import { Location } from "@/components/location"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"
import { WhatsAppFloat } from "@/components/whatsapp-float"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <Biography />
      <Services />
      <BeforeAfter />
      <Testimonials />
      <FAQ />
      <Location />
      <Contact />
      <Footer />
      <WhatsAppFloat />
    </main>
  )
}
