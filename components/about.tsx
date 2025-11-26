import { Award, Heart, Shield, Sparkles } from "lucide-react"

export function About() {
  return (
    <section id="sobre" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-sans text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">
              Nossa História
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty leading-relaxed">
              Há mais de 15 anos transformando sorrisos e vidas com dedicação, ética e excelência
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <img
                src="/modern-dental-reception.png"
                alt="Clínica Carrara Odontologia"
                className="rounded-lg shadow-lg w-full h-auto"
              />
            </div>
            <div className="space-y-6">
              <p className="text-base leading-relaxed text-foreground">
                A <strong>Carrara Odontologia</strong> nasceu do sonho de criar um espaço onde a odontologia de
                excelência se encontra com o atendimento humanizado. Fundada pela Dra. Ana Carrara, nossa clínica se
                tornou referência em tratamentos odontológicos personalizados.
              </p>
              <p className="text-base leading-relaxed text-foreground">
                Acreditamos que cada sorriso é único e merece atenção especial. Por isso, investimos constantemente em
                tecnologia de ponta e capacitação profissional para oferecer os melhores resultados aos nossos
                pacientes.
              </p>
              <p className="text-base leading-relaxed text-foreground">
                Nossa missão é proporcionar saúde bucal e autoestima através de tratamentos seguros, eficazes e
                realizados com todo o cuidado que você merece.
              </p>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-sans text-xl font-semibold text-foreground mb-2">Excelência</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Profissionais altamente qualificados e em constante atualização
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-sans text-xl font-semibold text-foreground mb-2">Humanização</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Atendimento acolhedor e personalizado para cada paciente
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Sparkles className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-sans text-xl font-semibold text-foreground mb-2">Tecnologia</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Equipamentos modernos para tratamentos precisos e confortáveis
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-sans text-xl font-semibold text-foreground mb-2">Segurança</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Protocolos rigorosos de biossegurança e esterilização
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
