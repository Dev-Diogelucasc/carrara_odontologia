"use client"

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { Card, CardContent } from "@/components/ui/card"
import Autoplay from "embla-carousel-autoplay"

const beforeAfterCases = [
  {
    title: "Clareamento Dental",
    description: "Transformação de 8 tons em apenas 3 sessões",
    before: "/before-after-1-before.jpg",
    after: "/before-after-1-after.jpg"
  },
  {
    title: "Lentes de Contato Dental",
    description: "Sorriso harmonioso com facetas em porcelana",
    before: "/before-after-2-before.jpg",
    after: "/before-after-2-after.jpg"
  },
  {
    title: "Implante Dentário",
    description: "Reabilitação completa com implante e prótese",
    before: "/before-after-3-before.jpg",
    after: "/before-after-3-after.jpg"
  },
  {
    title: "Ortodontia",
    description: "Alinhamento perfeito após 24 meses de tratamento",
    before: "/before-after-4-before.jpg",
    after: "/before-after-4-after.jpg"
  }
]

export function BeforeAfter() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-sans text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">
              Resultados que Transformam
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty leading-relaxed">
              Confira alguns dos nossos casos de sucesso e veja a transformação de sorrisos
            </p>
          </div>

          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            plugins={[
              Autoplay({
                delay: 4000,
              }),
            ]}
            className="w-full"
          >
            <CarouselContent>
              {beforeAfterCases.map((item, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/2">
                  <Card className="border-border">
                    <CardContent className="p-6">
                      <h3 className="font-sans text-xl font-semibold text-foreground mb-2">
                        {item.title}
                      </h3>
                      <p className="text-sm text-muted-foreground mb-6">
                        {item.description}
                      </p>
                      
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-2">
                            Antes
                          </p>
                          <div className="aspect-[4/3] bg-muted rounded-lg overflow-hidden">
                            <img
                              src={item.before}
                              alt={`Antes - ${item.title}`}
                              className="w-full h-full object-cover"
                              onError={(e) => {
                                e.currentTarget.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300'%3E%3Crect fill='%23f0f0f0' width='400' height='300'/%3E%3Ctext fill='%23999' font-family='sans-serif' font-size='24' dy='150' dx='50'%3EImagem em breve%3C/text%3E%3C/svg%3E"
                              }}
                            />
                          </div>
                        </div>
                        
                        <div>
                          <p className="text-xs font-medium text-primary uppercase tracking-wider mb-2">
                            Depois
                          </p>
                          <div className="aspect-[4/3] bg-muted rounded-lg overflow-hidden">
                            <img
                              src={item.after}
                              alt={`Depois - ${item.title}`}
                              className="w-full h-full object-cover"
                              onError={(e) => {
                                e.currentTarget.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300'%3E%3Crect fill='%23f0f0f0' width='400' height='300'/%3E%3Ctext fill='%23999' font-family='sans-serif' font-size='24' dy='150' dx='50'%3EImagem em breve%3C/text%3E%3C/svg%3E"
                              }}
                            />
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex" />
            <CarouselNext className="hidden md:flex" />
          </Carousel>

          <div className="mt-12 bg-primary/5 rounded-lg p-8 text-center">
            <p className="text-sm text-muted-foreground mb-4">
              * Resultados podem variar de acordo com cada caso. Imagens ilustrativas de tratamentos reais.
            </p>
            <p className="text-base text-foreground font-medium">
              Quer transformar seu sorriso também?
            </p>
            <a
              href="#contato"
              className="inline-block mt-4 bg-primary text-primary-foreground px-8 py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors"
            >
              Agende Sua Avaliação
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
