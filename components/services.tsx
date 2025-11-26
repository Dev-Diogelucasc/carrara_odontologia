import { Card, CardContent } from "@/components/ui/card"
import { Smile, Sparkles, Stethoscope, Zap, Crown, Users } from "lucide-react"

const services = [
  {
    icon: Smile,
    title: "Odontologia Estética",
    description: "Lentes de contato, facetas, clareamento dental e design de sorriso para transformar sua aparência.",
  },
  {
    icon: Crown,
    title: "Implantes Dentários",
    description: "Reabilitação oral completa com implantes de última geração e próteses personalizadas.",
  },
  {
    icon: Sparkles,
    title: "Harmonização Orofacial",
    description: "Procedimentos estéticos faciais para realçar sua beleza natural e rejuvenescer o sorriso.",
  },
  {
    icon: Stethoscope,
    title: "Tratamento de Canal",
    description: "Endodontia moderna com tecnologia digital para tratamentos precisos e confortáveis.",
  },
  {
    icon: Zap,
    title: "Ortodontia",
    description: "Aparelhos fixos, móveis e alinhadores invisíveis para corrigir o posicionamento dos dentes.",
  },
  {
    icon: Users,
    title: "Odontopediatria",
    description: "Atendimento especializado para crianças em ambiente acolhedor e lúdico.",
  },
]

export function Services() {
  return (
    <section id="servicos" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-sans text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">
              Nossos Serviços
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty leading-relaxed">
              Soluções completas em odontologia para cuidar da sua saúde bucal e transformar seu sorriso
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="border-border hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <service.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="font-sans text-xl font-semibold text-foreground mb-3">{service.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-16 bg-primary/5 rounded-lg p-8 md:p-12 text-center">
            <h3 className="font-sans text-2xl md:text-3xl font-bold text-foreground mb-4 text-balance">
              Não encontrou o que procura?
            </h3>
            <p className="text-base text-muted-foreground mb-6 max-w-2xl mx-auto leading-relaxed">
              Entre em contato conosco para saber mais sobre outros tratamentos e procedimentos disponíveis
            </p>
            <a
              href="#contato"
              className="inline-block bg-primary text-primary-foreground px-8 py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors"
            >
              Fale Conosco
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
