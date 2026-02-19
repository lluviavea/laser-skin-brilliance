import { Snowflake, Sparkles, Clock } from "lucide-react";

const pillars = [
  {
    icon: Snowflake,
    title: "Cabezal Sub-Zero",
    subtitle: "Cero dolor garantizado",
    description:
      "Nuestro cabezal de enfriamiento Sub-Zero enfría la piel a -4°C durante el tratamiento, eliminando por completo las molestias. La experiencia más cómoda del mercado.",
    badge: "Sin dolor",
    delay: "0.1s",
  },
  {
    icon: Sparkles,
    title: "Eficacia Total",
    subtitle: "Para todo tipo de piel",
    description:
      "La tecnología Diodo 808nm actúa con precisión sobre el folículo sin importar tu tono de piel. Resultados clínicamente probados desde la primera sesión.",
    badge: "Todos los fototipos",
    delay: "0.2s",
    featured: true,
  },
  {
    icon: Clock,
    title: "Sesiones Express",
    subtitle: "Agenda sin interrumpir tu día",
    description:
      "Zonas completas como piernas o axila en menos de 20 minutos. Ideal para tu ritmo de vida. Agenda en WhatsApp y llega en el horario que mejor te funcione.",
    badge: "20 min",
    delay: "0.3s",
  },
];

const ValuePillars = () => {
  return (
    <section id="beneficios" className="py-20 md:py-28">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="inline-block text-xs font-semibold tracking-widest uppercase text-ice-deep mb-3">
            ¿Por qué elegirnos?
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground mb-4">
            La diferencia está en los detalles
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Combinamos la tecnología más avanzada con un protocolo de atención personalizado para darte la mejor experiencia.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {pillars.map(({ icon: Icon, title, subtitle, description, badge, delay, featured }) => (
            <div
              key={title}
              className={`relative rounded-2xl p-7 transition-all duration-300 hover:-translate-y-1 ${
                featured
                  ? "gradient-ice border border-ice-dark/30"
                  : "bg-secondary/50 border border-border hover:border-ice/50"
              }`}
              style={{ boxShadow: featured ? "var(--shadow-card)" : undefined }}
            >
              {featured && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-xs font-bold bg-ice-deep text-background tracking-wide">
                  MÁS POPULAR
                </span>
              )}

              <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-5 ${
                featured ? "bg-white/60" : "gradient-ice"
              }`}>
                <Icon size={26} className="text-ice-deep" strokeWidth={1.75} />
              </div>

              <span className={`inline-block text-xs font-bold px-3 py-1 rounded-full mb-3 ${
                featured ? "bg-white/50 text-ice-deep" : "bg-ice-light text-ice-deep"
              }`}>
                {badge}
              </span>

              <h3 className="text-xl font-bold text-foreground mb-1">{title}</h3>
              <p className={`text-sm font-semibold mb-3 ${featured ? "text-ice-deep" : "text-ice-dark"}`}>
                {subtitle}
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValuePillars;
