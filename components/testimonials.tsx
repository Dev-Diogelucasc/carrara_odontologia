import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Maria Silva",
    text: "Excelente atendimento! A Dra. Ana é muito atenciosa e cuidadosa. Fiz implantes e o resultado ficou perfeito. Super recomendo!",
    rating: 5,
  },
  {
    name: "João Santos",
    text: "Clínica moderna e muito limpa. A equipe é super profissional e me deixou muito tranquilo durante todo o tratamento ortodôntico.",
    rating: 5,
  },
  {
    name: "Carla Oliveira",
    text: "Melhor experiência odontológica que já tive! O clareamento dental ficou incrível e o atendimento foi impecável do início ao fim.",
    rating: 5,
  },
]

export function Testimonials() {
  return (
    <section className="py-24 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-sans text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">
              O Que Dizem Nossos Pacientes
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty leading-relaxed">
              A satisfação de quem confia em nosso trabalho é nossa maior conquista
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-border">
                <CardContent className="p-6">
                  <div className="flex gap-1 mb-4">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                    ))}
                  </div>
                  <p className="text-sm text-foreground leading-relaxed mb-4">{testimonial.text}</p>
                  <p className="font-medium text-foreground">{testimonial.name}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
