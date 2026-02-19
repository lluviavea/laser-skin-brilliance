import heroBg from "@/assets/hero-bg.jpg";

const WHATSAPP_URL = "https://wa.me/526671234567?text=Hola%2C%20me%20gustar%C3%ADa%20agendar%20una%20evaluaci%C3%B3n%20gratuita";

const WhatsAppIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20" xmlns="http://www.w3.org/2000/svg">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
);

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      {/* Overlay gradient */}
      <div className="absolute inset-0 gradient-hero-overlay" />

      {/* Subtle top border accent */}
      <div className="absolute top-0 left-0 right-0 h-0.5 bg-primary opacity-40" />

      <div className="relative container mx-auto px-4 sm:px-6 pt-24 pb-16 md:pt-32 md:pb-24">
        <div className="max-w-xl lg:max-w-2xl">
          {/* Badge */}
          <div
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/10 mb-6 animate-fade-up"
            style={{ animationDelay: "0.1s", opacity: 0 }}
          >
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse-soft" />
            <span className="text-xs font-semibold font-sans text-primary tracking-wide uppercase">
              Tecnología Diodo en Frío · Culiacán
            </span>
          </div>

          {/* Headline */}
          <h1
            className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold leading-[1.1] mb-5 animate-fade-up text-primary"
            style={{ animationDelay: "0.2s", opacity: 0 }}
          >
            Piel suave para siempre,{" "}
            <span className="italic text-brand-dark">sin dolor</span> y en tiempo récord.
          </h1>

          {/* Subtitle */}
          <p
            className="text-base sm:text-lg text-muted-foreground font-sans mb-8 leading-relaxed max-w-lg animate-fade-up"
            style={{ animationDelay: "0.35s", opacity: 0 }}
          >
            Olvídate de la cera con nuestra tecnología de Diodo en Frío. Resultados visibles desde la primera sesión en Culiacán.
          </p>

          {/* CTA Button */}
          <div
            className="animate-fade-up"
            style={{ animationDelay: "0.5s", opacity: 0 }}
          >
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-7 py-4 rounded-lg text-base font-bold font-sans text-primary-foreground bg-primary transition-all duration-300 hover:bg-brand-dark hover:scale-105 active:scale-95"
              style={{ boxShadow: "var(--shadow-cta)" }}
            >
              <WhatsAppIcon />
              Agendar Evaluación Gratuita por WhatsApp
            </a>
            <p className="mt-3 text-xs text-muted-foreground font-sans">
              Sin compromiso · Respuesta en menos de 1 hora
            </p>
          </div>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0 h-12 overflow-hidden">
        <svg viewBox="0 0 1440 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path d="M0 48L60 42.7C120 37.3 240 26.7 360 21.3C480 16 600 16 720 21.3C840 26.7 960 37.3 1080 42.7C1200 48 1320 48 1380 48L1440 48V48H1380C1320 48 1200 48 1080 48C960 48 840 48 720 48C600 48 480 48 360 48C240 48 120 48 60 48H0V48Z" fill="hsl(var(--background))"/>
        </svg>
      </div>
    </section>
  );
};

export default Hero;
