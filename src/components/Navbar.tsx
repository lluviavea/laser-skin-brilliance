import { useState, useEffect } from "react";
import { Menu, X, Zap } from "lucide-react";

const WHATSAPP_URL = "https://wa.me/526671234567?text=Hola%2C%20me%20gustar%C3%ADa%20agendar%20una%20evaluaci%C3%B3n%20gratuita";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/95 backdrop-blur-md border-b border-border"
          : "bg-transparent"
      }`}
      style={{ boxShadow: scrolled ? "var(--shadow-navbar)" : "none" }}
    >
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 group">
            <div className="w-8 h-8 rounded-full gradient-ice flex items-center justify-center shadow-sm">
              <Zap size={16} className="text-ice-deep" strokeWidth={2.5} />
            </div>
            <span className="font-montserrat font-800 text-xl tracking-tight text-foreground">
              Laser<span className="text-gradient-ice font-extrabold"> Skin</span>
            </span>
          </a>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-6">
            <a href="#beneficios" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              Beneficios
            </a>
            <a href="#faq" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              FAQ
            </a>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 rounded-full text-sm font-semibold text-ice-deep border-2 border-ice transition-all duration-200 hover:bg-ice hover:text-ice-deep hover:shadow-md"
            >
              Agendar Ahora
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 rounded-lg text-foreground"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="md:hidden pb-4 border-t border-border bg-background/98 backdrop-blur-md -mx-4 px-4">
            <div className="flex flex-col gap-3 pt-4">
              <a href="#beneficios" className="text-sm font-medium text-muted-foreground py-2" onClick={() => setMobileOpen(false)}>
                Beneficios
              </a>
              <a href="#faq" className="text-sm font-medium text-muted-foreground py-2" onClick={() => setMobileOpen(false)}>
                FAQ
              </a>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="py-3 rounded-full text-sm font-semibold text-center text-ice-deep border-2 border-ice"
              >
                Agendar Ahora
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
