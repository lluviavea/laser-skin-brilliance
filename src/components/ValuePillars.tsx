import { Snowflake, Sparkles, Clock } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const pillars = [
  {
    icon: Snowflake,
    title: "Cabezal Sub-Zero",
    subtitle: "Cero dolor garantizado",
    description:
      "Nuestro cabezal de enfriamiento Sub-Zero enfría la piel a -4°C durante el tratamiento, eliminando por completo las molestias. La experiencia más cómoda del mercado.",
    badge: "Sin dolor",
    delay: "0ms",
  },
  {
    icon: Sparkles,
    title: "Eficacia Total",
    subtitle: "Para todo tipo de piel",
    description:
      "La tecnología Diodo 808nm actúa con precisión sobre el folículo sin importar tu tono de piel. Resultados clínicamente probados desde la primera sesión.",
    badge: "Todos los fototipos",
    delay: "120ms",
    featured: true,
  },
  {
    icon: Clock,
    title: "Sesiones Express",
    subtitle: "Agenda sin interrumpir tu día",
    description:
      "Zonas completas como piernas o axila en menos de 20 minutos. Ideal para tu ritmo de vida. Agenda en WhatsApp y llega en el horario que mejor te funcione.",
    badge: "20 min",
    delay: "240ms",
  },
];

const ValuePillars = () => {
  const header = useScrollAnimation<HTMLDivElement>({ threshold: 0.2 });
  const cards = useScrollAnimation<HTMLDivElement>({ threshold: 0.1 });

  return (
    <section id="beneficios" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Header */}
        <div
          ref={header.ref}
          className={`text-center mb-14 reveal ${header.isVisible ? "visible" : ""}`}
        >
          <span className="inline-block text-xs font-semibold font-sans tracking-widest uppercase text-primary mb-3">
            ¿Por qué elegirnos?
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-primary mb-4">
            La diferencia está en los detalles
          </h2>
          <p className="text-muted-foreground font-sans max-w-xl mx-auto">
            Combinamos la tecnología más avanzada con un protocolo de atención personalizado para darte la mejor experiencia.
          </p>
        </div>

        {/* Cards */}
        <div ref={cards.ref} className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {pillars.map(({ icon: Icon, title, subtitle, description, badge, delay, featured }) => (
            <div
              key={title}
              className={`relative rounded-2xl p-7 transition-all duration-300 hover:-translate-y-1 reveal ${cards.isVisible ? "visible" : ""} ${
                featured
                  ? "bg-primary border border-primary/80"
                  : "bg-champagne/60 border border-border hover:border-primary/40"
              }`}
              style={{
                boxShadow: featured ? "var(--shadow-card)" : undefined,
                transitionDelay: cards.isVisible ? delay : "0ms",
              }}
            >
              {featured && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-xs font-bold font-sans bg-brand-dark text-primary-foreground tracking-wide">
                  MÁS POPULAR
                </span>
              )}

              <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-5 ${
                featured ? "bg-white/20" : "bg-primary/12 border border-primary/20"
              }`}>
                <Icon size={26} className={featured ? "text-primary-foreground" : "text-primary"} strokeWidth={1.75} />
              </div>

              <span className={`inline-block text-xs font-bold font-sans px-3 py-1 rounded-full mb-3 ${
                featured ? "bg-white/20 text-primary-foreground" : "bg-primary/10 text-primary"
              }`}>
                {badge}
              </span>

              <h3 className={`text-xl font-serif font-bold mb-1 ${featured ? "text-primary-foreground" : "text-primary"}`}>
                {title}
              </h3>
              <p className={`text-sm font-semibold font-sans mb-3 ${featured ? "text-primary-foreground/80" : "text-brand-dark"}`}>
                {subtitle}
              </p>
              <p className={`text-sm font-sans leading-relaxed ${featured ? "text-primary-foreground/75" : "text-muted-foreground"}`}>
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValuePillars;
