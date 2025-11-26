"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center bg-secondary overflow-hidden"
    >
      <div className="absolute inset-0 bg-[url('/modern-dental-clinic.png')] bg-cover bg-center opacity-10" />

      <div className="container mx-auto px-4 py-32 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-sans text-5xl md:text-7xl lg:text-8xl font-bold text-foreground mb-6 text-balance">
            Seu sorriso merece o melhor cuidado
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto text-pretty leading-relaxed">
            Excelência em odontologia com atendimento humanizado e tecnologia de ponta para transformar seu sorriso
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 text-base px-8"
              onClick={() => scrollToSection("contato")}
            >
              Agendar Consulta
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-base px-8 bg-transparent"
              onClick={() => scrollToSection("servicos")}
            >
              Conheça Nossos Serviços
            </Button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  )
}
