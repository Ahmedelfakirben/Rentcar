import { Link } from "@tanstack/react-router";
import { useTranslation } from "@/lib/useTranslation";
import { Phone, MessageCircle, MapPin, ChevronRight, Facebook, Instagram, Globe } from "lucide-react";
import logo from "@/assets/logo.svg";

export function FooterLinks() {
  const { t, lang } = useTranslation();

  const sections = [
    {
      title: t.footer.nav,
      links: [
        { to: "/$lang", hash: "accueil", label: t.nav.home },
        { to: "/$lang/fleet", label: t.nav.fleet },
        { to: "/$lang/about", label: t.nav.about },
        { to: "/$lang/contact", label: t.nav.contact },
      ]
    },
    {
      title: t.footer.airports,
      links: [
        { to: "/$lang/airports/tetouan", label: t.nav.airportTetouan },
        { to: "/$lang/airports/tangier", label: t.nav.airportTangier },
      ]
    }
  ];

  return (
    <footer className="relative bg-black pt-16 pb-8 overflow-hidden">
      {/* Orange Glow from Bottom to Top */}
      <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-orange/20 to-transparent pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Info */}
          <div className="space-y-6">
            <img src={logo} alt="2S1M Rent Car" className="h-10 w-auto object-contain" />
            <p className="text-muted-foreground text-sm leading-relaxed max-w-xs">
              {lang === 'fr' 
                ? "Votre partenaire de location premium à Tétouan. Confort, sécurité et service VIP garanti." 
                : lang === 'es'
                ? "Su socio de alquiler premium en Tetuán. Confort, seguridad y servicio VIP garantizado."
                : "Your premium rental partner in Tetouan. Comfort, safety and guaranteed VIP service."}
            </p>
            <div className="flex items-center gap-4 pt-2">
              <a href="https://www.facebook.com/share/1Gr4GZPhqC/" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-muted-foreground hover:bg-orange hover:text-white hover:border-orange transition-all">
                <Facebook size={18} />
              </a>
              <a href="https://www.instagram.com/tetouanrentcar?igsh=MWJ4c3hlMmx1Nm9ldA==" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-muted-foreground hover:bg-orange hover:text-white hover:border-orange transition-all">
                <Instagram size={18} />
              </a>
            </div>
          </div>

          {/* Dynamic Sections */}
          {sections.map((s) => (
            <div key={s.title} className="space-y-6">
              <h4 className="text-xs font-black uppercase tracking-[0.2em] text-orange">{s.title}</h4>
              <ul className="space-y-4">
                {s.links.map((l) => (
                  <li key={l.label}>
                    <Link 
                      to={l.to as any} 
                      hash={l.hash}
                      params={{ lang } as any}
                      className="text-sm text-muted-foreground hover:text-orange flex items-center gap-2 transition-colors group"
                    >
                      <ChevronRight size={12} className="text-orange/40 group-hover:text-orange transition-colors" />
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Direct Contact & Websites */}
          <div className="space-y-6">
            <h4 className="text-xs font-black uppercase tracking-[0.2em] text-orange">{t.contact.title}</h4>
            <ul className="space-y-4">
              <li>
                <div className="flex flex-col gap-2">
                  <a href="tel:0660292821" className="flex items-center gap-3 text-sm text-muted-foreground hover:text-orange transition-colors">
                    <Phone size={16} className="text-orange" />
                    06 60 29 28 21
                  </a>
                  <a href="tel:0531333293" className="flex items-center gap-3 text-sm text-muted-foreground hover:text-orange transition-colors">
                    <Phone size={16} className="text-orange" />
                    05 31 33 32 93
                  </a>
                </div>
              </li>
              <li>
                <a href="https://wa.me/212660292821" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-sm text-muted-foreground hover:text-orange transition-colors">
                  <MessageCircle size={16} className="text-orange" />
                  +212 6 60 29 28 21
                </a>
              </li>
              <li>
                <a href="https://rentcartetouan.ma" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-sm text-muted-foreground hover:text-orange transition-colors">
                  <Globe size={16} className="text-orange" />
                  rentcartetouan.ma
                </a>
              </li>
              <li>
                <a href="https://rentcartetouan.ma" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-sm text-muted-foreground hover:text-orange transition-colors">
                  <Globe size={16} className="text-orange" />
                  2s1mrentcar.com
                </a>
              </li>
              <li>
                <a href="mailto:2s1mrentcartetouan@gmail.com" className="flex items-start gap-3 text-sm text-muted-foreground hover:text-orange transition-colors break-all">
                  <MessageCircle size={16} className="text-orange shrink-0 mt-0.5" />
                  <span>2s1mrentcartetouan@gmail.com</span>
                </a>
              </li>
              <li className="flex items-start gap-3 text-sm text-muted-foreground pt-2">
                <MapPin size={16} className="text-orange mt-1 shrink-0" />
                <span className="leading-tight uppercase">{t.location.address}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/5 text-center">
          <p className="text-[10px] uppercase tracking-widest text-muted-foreground">
            © {new Date().getFullYear()} 2S1M Rent Car — {t.footer.rights}
          </p>
        </div>
      </div>
    </footer>
  );
}
