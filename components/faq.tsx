"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    question: "Quanto tempo dura uma consulta?",
    answer: "A primeira consulta geralmente dura entre 40 a 60 minutos, pois incluímos uma avaliação completa, anamnese detalhada e planejamento do tratamento. Consultas de retorno variam de 30 a 90 minutos, dependendo do procedimento."
  },
  {
    question: "Vocês aceitam convênios odontológicos?",
    answer: "Sim, trabalhamos com os principais convênios odontológicos do mercado. Entre em contato conosco para verificar se seu plano está na nossa rede credenciada e quais procedimentos estão cobertos."
  },
  {
    question: "O clareamento dental é seguro?",
    answer: "Sim, quando feito com acompanhamento profissional, o clareamento dental é totalmente seguro. Utilizamos produtos de alta qualidade e técnicas modernas que minimizam a sensibilidade e garantem resultados naturais e duradouros."
  },
  {
    question: "Implantes dentários doem?",
    answer: "O procedimento é realizado com anestesia local, então você não sentirá dor durante a cirurgia. No pós-operatório, pode haver um leve desconforto que é facilmente controlado com medicação prescrita. A maioria dos pacientes relata menos dor do que esperavam."
  },
  {
    question: "Quanto tempo dura o tratamento com aparelho ortodôntico?",
    answer: "O tempo varia de acordo com cada caso, mas geralmente fica entre 18 a 36 meses. Casos mais simples podem ser resolvidos em menos tempo. Na primeira consulta, fazemos uma avaliação e estimativa personalizada do seu tratamento."
  },
  {
    question: "É possível parcelar o tratamento?",
    answer: "Sim! Oferecemos diversas opções de parcelamento para facilitar o seu tratamento. Aceitamos cartão de crédito, PIX e também temos parcerias com financeiras. Entre em contato para conhecer nossas condições especiais."
  },
  {
    question: "Preciso agendar consulta ou aceita emergência?",
    answer: "Recomendamos agendar sua consulta para garantir o melhor horário para você. No entanto, reservamos horários para emergências odontológicas. Em caso de urgência, entre em contato pelo WhatsApp ou telefone."
  },
  {
    question: "Com que frequência devo fazer limpeza dental?",
    answer: "Recomendamos a profilaxia (limpeza dental) a cada 6 meses para manutenção da saúde bucal. Em alguns casos específicos, como pacientes com doença periodontal, pode ser necessário um intervalo menor, que será orientado pelo dentista."
  }
]

export function FAQ() {
  return (
    <section className="py-24 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-sans text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">
              Perguntas Frequentes
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty leading-relaxed">
              Tire suas dúvidas sobre nossos tratamentos e procedimentos
            </p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-background border border-border rounded-lg px-6"
              >
                <AccordionTrigger className="text-left hover:no-underline py-5">
                  <span className="font-semibold text-foreground pr-4">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-5">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <div className="mt-12 text-center">
            <p className="text-muted-foreground mb-4">Não encontrou a resposta que procurava?</p>
            <a
              href="#contato"
              className="inline-block bg-primary text-primary-foreground px-8 py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors"
            >
              Entre em Contato
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
