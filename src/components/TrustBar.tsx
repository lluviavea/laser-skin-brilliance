import { Star, Users, Shield } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const TrustBar = () => {
  const { ref, isVisible } = useScrollAnimation<HTMLElement>({ threshold: 0.2 });

  return (
    <section ref={ref} className="py-10 border-y border-border bg-champagne/40">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-8 sm:gap-12 md:gap-16">

          {/* Clients */}
          <div
            className={`flex items-center gap-3 reveal ${isVisible ? "visible" : ""}`}
            style={{ transitionDelay: "0ms" }}
          >
            <div className="w-12 h-12 rounded-full bg-primary/15 border border-primary/25 flex items-center justify-center shadow-sm flex-shrink-0">
              <Users size={22} className="text-primary" />
            </div>
            <div>
              <p className="text-2xl font-extrabold font-sans text-foreground leading-none">+500</p>
              <p className="text-xs text-muted-foreground font-sans font-medium mt-0.5">Clientes satisfechas</p>
            </div>
          </div>

          <div className="hidden sm:block w-px h-10 bg-border" />

          {/* Stars */}
          <div
            className={`flex items-center gap-3 reveal ${isVisible ? "visible" : ""}`}
            style={{ transitionDelay: "120ms" }}
          >
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={18} className="text-amber-500 fill-amber-500" />
              ))}
            </div>
            <div>
              <p className="text-2xl font-extrabold font-sans text-foreground leading-none">5.0</p>
              <p className="text-xs text-muted-foreground font-sans font-medium mt-0.5">En Google Reviews</p>
            </div>
          </div>

          <div className="hidden sm:block w-px h-10 bg-border" />

          {/* Certified */}
          <div
            className={`flex items-center gap-3 reveal ${isVisible ? "visible" : ""}`}
            style={{ transitionDelay: "240ms" }}
          >
            <div className="w-12 h-12 rounded-full bg-primary/15 border border-primary/25 flex items-center justify-center shadow-sm flex-shrink-0">
              <Shield size={22} className="text-primary" />
            </div>
            <div>
              <p className="text-sm font-extrabold font-sans text-foreground leading-tight">Tecnología</p>
              <p className="text-xs text-muted-foreground font-sans font-medium">Certificada ISO</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default TrustBar;
