import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "¿El tratamiento duele?",
    answer:
      "No. Gracias a nuestro cabezal Sub-Zero que enfría la piel a -4°C simultáneamente con el disparo del láser, la experiencia es prácticamente indolora. La mayoría de nuestras clientas lo describen como una sensación fresca y suave. Es la principal diferencia frente a métodos tradicionales como la cera o el láser convencional.",
  },
  {
    question: "¿Cuántas sesiones necesito para ver resultados?",
    answer:
      "Los resultados son visibles desde la primera sesión. Para una eliminación permanente del vello, se recomiendan entre 6 y 8 sesiones dependiendo de la zona y el tipo de vello. Cada sesión se separa entre 4 y 6 semanas para respetar los ciclos de crecimiento del folículo. Tu especialista diseñará un plan personalizado en la evaluación gratuita.",
  },
  {
    question: "¿La tecnología Diodo es segura para mi tipo de piel?",
    answer:
      "Sí. El láser Diodo 808nm es el estándar de oro en depilación láser por su seguridad y eficacia en todos los fototipos de piel (del I al VI según la escala de Fitzpatrick). Nuestros equipos están certificados y son operados por técnicos especializados, garantizando el máximo cuidado de tu piel.",
  },
  {
    question: "¿Cuánto dura cada sesión?",
    answer:
      "Depende de la zona. Por ejemplo: axilas y zona de bikini toman entre 10 y 15 minutos. Piernas completas entre 20 y 30 minutos. Espalda o pecho entre 20 y 25 minutos. Diseñamos nuestros protocolos para que puedas venir en tu hora de comida o entre compromisos sin problema.",
  },
  {
    question: "¿Cómo agendo mi evaluación gratuita?",
    answer:
      "Es muy sencillo. Haz clic en cualquier botón de 'Agendar' en esta página para contactarnos directamente por WhatsApp. Respondemos en menos de 1 hora en horario de atención (lunes a sábado 9am–7pm). La evaluación es sin costo y sin compromiso. Te haremos un plan de tratamiento personalizado.",
  },
  {
    question: "¿Qué debo hacer antes y después de cada sesión?",
    answer:
      "Antes: afeita la zona 24 horas previas, evita sol o bronceado artificial 2 semanas antes y no uses cremas con retinol los 3 días previos. Después: aplica bloqueador solar en zonas expuestas, evita el sol directo por 48 horas y no uses exfoliantes 5 días post-sesión. Tu especialista te dará un protocolo detallado en la primera sesión.",
  },
];

const FAQSection = () => {
  return (
    <section id="faq" className="py-20 md:py-28 bg-champagne/30">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <span className="inline-block text-xs font-semibold font-sans tracking-widest uppercase text-primary mb-3">
              Preguntas Frecuentes
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-primary mb-4">
              Todo lo que necesitas saber
            </h2>
            <p className="text-muted-foreground font-sans">
              Resolvemos tus dudas más comunes sobre el tratamiento, la tecnología y los resultados.
            </p>
          </div>

          {/* Accordion */}
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`faq-${index}`}
                className="bg-background border border-border rounded-xl px-2 shadow-sm data-[state=open]:border-primary/50 data-[state=open]:shadow-card-brand transition-all duration-200"
              >
                <AccordionTrigger className="px-4 py-5 text-left font-semibold font-sans text-foreground hover:no-underline hover:text-primary text-sm sm:text-base">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="px-4 pb-5 text-sm font-sans text-muted-foreground leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
