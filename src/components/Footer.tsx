import { MapPin, Phone, Instagram, Facebook } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-foreground text-primary-foreground">
      <div className="container mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <a href="#" className="flex items-center gap-2 mb-4">
              <img
                src={logo}
                alt="Laser Skin Depilación"
                className="h-16 w-auto object-contain brightness-0 invert opacity-90"
              />
            </a>
            <p className="text-sm text-primary-foreground/60 font-sans leading-relaxed">
              Centro de depilación láser de alta gama en Culiacán. Tecnología Diodo Sub-Zero para resultados permanentes sin dolor.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold font-sans text-primary-foreground mb-4 text-sm tracking-wide uppercase">Contacto</h4>
            <ul className="space-y-3 text-sm text-primary-foreground/70 font-sans">
              <li className="flex items-start gap-2.5">
                <MapPin size={15} className="mt-0.5 text-secondary flex-shrink-0" />
                <span>Sucursal Plaza Cuatro Ríos</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone size={15} className="text-secondary flex-shrink-0" />
                <a href="tel:+526674734646" className="hover:text-secondary transition-colors">
                  +52 (667) 585 5054
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin size={15} className="mt-0.5 text-secondary flex-shrink-0" />
                <span>Sucursal Walmart Tres Ríos</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone size={15} className="text-secondary flex-shrink-0" />
                <a href="tel:+526674734646" className="hover:text-secondary transition-colors">
                  +52 (667) 473 4646
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/526674734646"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 mt-1 px-4 py-2 rounded-full bg-secondary/20 border border-secondary/30 text-secondary text-xs font-semibold hover:bg-secondary/30 transition-colors"
                >
                  WhatsApp Directo
                </a>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-bold font-sans text-primary-foreground mb-4 text-sm tracking-wide uppercase">Síguenos</h4>
            <div className="flex gap-3 mb-5">
              <a
                href="https://www.instagram.com/laserskin_depilacion"
                className="w-10 h-10 rounded-full border border-primary-foreground/20 flex items-center justify-center text-primary-foreground/70 hover:text-secondary hover:border-secondary transition-colors"
              >
                <Instagram size={18} />
              </a>
              <a
                href="https://www.facebook.com/share/1CH4aL5dQJ"
                className="w-10 h-10 rounded-full border border-primary-foreground/20 flex items-center justify-center text-primary-foreground/70 hover:text-secondary hover:border-secondary transition-colors"
              >
                <Facebook size={18} />
              </a>
            </div>
            <p className="text-xs font-sans text-primary-foreground/40">
              Todos los días: 10:00 am – 9:00 pm
            </p>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 mt-10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs font-sans text-primary-foreground/40">
          <p>© 2024 Laser Skin. Todos los derechos reservados.</p>
          <p>Culiacán, Sinaloa · México</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
