import { MapPin, Phone, Instagram, Facebook, Zap } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <a href="#" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-full gradient-ice flex items-center justify-center">
                <Zap size={14} className="text-ice-deep" strokeWidth={2.5} />
              </div>
              <span className="font-montserrat font-extrabold text-xl text-background">
                Laser Skin
              </span>
            </a>
            <p className="text-sm text-background/60 leading-relaxed">
              Centro de depilación láser de alta gama en Culiacán. Tecnología Diodo Sub-Zero para resultados permanentes sin dolor.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-background mb-4 text-sm tracking-wide uppercase">Contacto</h4>
            <ul className="space-y-3 text-sm text-background/70">
              <li className="flex items-start gap-2.5">
                <MapPin size={15} className="mt-0.5 text-ice flex-shrink-0" />
                <span>Culiacán, Sinaloa, México</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone size={15} className="text-ice flex-shrink-0" />
                <a href="tel:+526671234567" className="hover:text-ice transition-colors">
                  +52 (667) 123-4567
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/526671234567"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 mt-1 px-4 py-2 rounded-full bg-ice/20 border border-ice/30 text-ice text-xs font-semibold hover:bg-ice/30 transition-colors"
                >
                  WhatsApp Directo
                </a>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-bold text-background mb-4 text-sm tracking-wide uppercase">Síguenos</h4>
            <div className="flex gap-3 mb-5">
              <a
                href="#"
                className="w-10 h-10 rounded-full border border-background/20 flex items-center justify-center text-background/70 hover:text-ice hover:border-ice transition-colors"
              >
                <Instagram size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full border border-background/20 flex items-center justify-center text-background/70 hover:text-ice hover:border-ice transition-colors"
              >
                <Facebook size={18} />
              </a>
            </div>
            <p className="text-xs text-background/40">
              Lunes – Sábado: 9:00 am – 7:00 pm
            </p>
          </div>
        </div>

        <div className="border-t border-background/10 mt-10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-background/40">
          <p>© 2024 Laser Skin. Todos los derechos reservados.</p>
          <p>Culiacán, Sinaloa · México</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
