import { MapPin, Phone, Mail, Clock } from "lucide-react"

export function Location() {
  return (
    <section id="localizacao" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-sans text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">Onde Estamos</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty leading-relaxed">
              Venha nos visitar e conheça nossa estrutura moderna e acolhedora
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-sans text-lg font-semibold text-foreground mb-2">Endereço</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    R. Quartoze, 189
                    <br />
                    Centro, Canápolis - MG
                    <br />
                    CEP: 38380-000
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-sans text-lg font-semibold text-foreground mb-2">Telefone</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    (34) 9 9966-1099
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-sans text-lg font-semibold text-foreground mb-2">E-mail</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">contato@carraraodontologia.com.br</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-sans text-lg font-semibold text-foreground mb-2">Horário de Atendimento</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Segunda a Sexta: 8h às 19h
                    <br />
                    Sábado: 8h às 13h
                  </p>
                </div>
              </div>
            </div>

            <div className="h-[400px] md:h-full min-h-[400px] rounded-lg overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d944.6491415020896!2d-49.20274424428461!3d-18.72687166545922!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94a162b52a10acaf%3A0xd0f2fdad421db7b!2sR.%20Quatorze%2C%20189%20-%20Centro%2C%20Can%C3%A1polis%20-%20MG%2C%2038380-000!5e0!3m2!1sen!2sbr!4v1764189859740!5m2!1sen!2sbr"
                width="100%"
                height="100%"
                style={{ border: 3 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localização Carrara Odontologia"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
