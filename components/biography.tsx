export function Biography() {
  return (
    <section className="py-24 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <h2 className="font-sans text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
                Dra. Gabriely Carrara
              </h2>
              <p className="text-sm uppercase tracking-wider text-primary font-medium mb-6">
                Cirurgiã-Dentista | CRO-MG66156
              </p>

              <div className="space-y-4 text-base leading-relaxed text-foreground">
                <p>
                  Formada Unitri - Centro Universitário do Triângulo, a Dra. Gabriely Carrara é especialista em Endodontia, com 3 anos de expetiência.
                </p>
                <p>
                  Sua paixão pela odontologia começou ainda na adolescência, quando percebeu o poder transformador de um
                  sorriso saudável na vida das pessoas. Desde então, dedica-se a oferecer tratamentos de excelência com
                  um toque humano e acolhedor.
                </p>
                <p>
                  Além de sua formação acadêmica sólida, a Dra. Gabriely participa regularmente de congressos nacionais e
                  internacionais, mantendo-se sempre atualizada com as mais recentes técnicas e tecnologias da
                  odontologia moderna.
                </p>
                <p>
                  Sua filosofia de trabalho é baseada em três pilares: ética profissional, atendimento personalizado e
                  busca constante pela excelência. Para ela, cada paciente é único e merece um plano de tratamento
                  individualizado.
                </p>
              </div>

              <div className="mt-8 space-y-3">
                <h3 className="font-sans text-xl font-semibold text-foreground mb-4">Especializações</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span className="text-sm text-foreground">Especialização em Endodontia- IQO</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span className="text-sm text-foreground">Extensão Reabilitação Oral - Unitri</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span className="text-sm text-foreground">Curso Avançado em Harmonização Orofacial</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span className="text-sm text-foreground">Certificação em Odontologia Digital</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="order-1 md:order-2">
              <img
                src="/gabrielyCarrara-01.jpeg"
                alt="Dra. Gabriely Carrara"
                className="rounded-lg shadow-xl w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
