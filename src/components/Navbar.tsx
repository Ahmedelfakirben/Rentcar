import { useEffect, useState } from "react";
import logo from "@/assets/logo.svg";
import { useTranslation } from "@/lib/useTranslation";
import { Link, useRouterState } from "@tanstack/react-router";
import { Globe, ChevronDown, ChevronRight, Facebook, Instagram, MessageCircle } from "lucide-react";

export function Navbar() {
  const { t, lang } = useTranslation();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const [airportsOpen, setAirportsOpen] = useState(false);

  const links = [
    { to: "/$lang", hash: "accueil", label: t.nav.home, type: 'link' },
    { to: "/$lang/fleet", label: t.nav.fleet, type: 'link' },
    { to: "/$lang/about", label: t.nav.about, type: 'link' },
    { 
      label: t.nav.airports, 
      type: 'dropdown',
      items: [
        { to: "/$lang/location-voiture-aeroport-tetouan", label: t.nav.airportTetouan },
        { to: "/$lang/location-voiture-aeroport-tanger", label: t.nav.airportTangier },
      ]
    },
    { to: "/$lang/contact", label: t.nav.contact, type: 'link' },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      const offset = 80; // Offset for navbar height
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const languages = [
    { code: 'fr', name: 'Français', flag: '🇫🇷' },
    { code: 'es', name: 'Español', flag: '🇪🇸' },
    { code: 'en', name: 'English', flag: '🇬🇧' },
    { code: 'ar', name: 'العربية', flag: '🇲🇦' },
  ];

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-black/10 backdrop-blur-md border-b border-white/5 py-2" : "bg-transparent py-4"
      }`}
    >
      <nav className="max-w-[1400px] mx-auto px-6 flex items-center justify-between h-full">
        {/* Left Column: Logo */}
        <div className="w-[200px] flex justify-start">
          <Link to="/$lang" params={{ lang } as any} className="flex items-center gap-2">
            <img src={logo} alt="2S1M Rent Car" className="h-[42px] w-auto object-contain transition-all duration-300" />
          </Link>
        </div>

        {/* Center Column: Menu Links (DEAD CENTER) */}
        <div className="hidden lg:flex items-center justify-center flex-1">
          <ul className="flex items-center gap-10 whitespace-nowrap">
            {links.map((l) => (
              <li key={l.label} className="relative group">
                {l.type === 'link' ? (
                  <Link
                    to={l.to as any}
                    hash={l.hash}
                    params={{ lang } as any}
                    onClick={() => setOpen(false)}
                    className="text-[13px] tracking-[0.1em] uppercase font-bold text-white hover:text-orange transition-colors relative after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-orange hover:after:w-full after:transition-all"
                  >
                    {l.label}
                  </Link>
                ) : (
                  <div className="relative">
                    <button 
                      onClick={() => setAirportsOpen(!airportsOpen)}
                      className="flex items-center gap-1.5 text-[13px] tracking-[0.1em] uppercase font-bold text-white hover:text-orange transition-colors"
                    >
                      {l.label} <ChevronDown size={14} className={`transition-transform duration-300 ${airportsOpen ? 'rotate-180' : ''}`} />
                    </button>
                    
                    {airportsOpen && (
                      <>
                        <div className="fixed inset-0 z-[-1]" onClick={() => setAirportsOpen(false)} />
                        <div className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-56 bg-black border border-orange/20 rounded-xl shadow-xl overflow-hidden animate-scale-in z-50">
                          {l.items?.map((item) => (
                            <Link
                              key={item.to}
                              to={item.to as any}
                              params={{ lang } as any}
                              onClick={() => { setAirportsOpen(false); setOpen(false); }}
                              className="flex items-center px-4 py-3 text-xs text-foreground hover:bg-orange/10 hover:text-orange transition-colors"
                            >
                              {item.label}
                            </Link>
                          ))}
                        </div>
                      </>
                    )}
                  </div>
                )}
              </li>
            ))}
          </ul>
        </div>

        {/* Right Column: Language & CTA */}
        <div className="w-[200px] flex items-center justify-end gap-4">
          {/* Language Switcher */}
          <div className="relative">
            <button 
              onClick={() => setLangOpen(!langOpen)}
              className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 transition-colors text-[11px] font-black uppercase text-white"
            >
              <Globe size={14} className="text-orange" />
              {lang}
              <ChevronDown size={12} className={`transition-transform duration-300 ${langOpen ? 'rotate-180' : ''}`} />
            </button>
            
            {langOpen && (
              <div className="absolute top-full right-0 mt-2 w-40 bg-black border border-orange/20 rounded-xl shadow-xl overflow-hidden animate-scale-in z-[100]">
                {languages.map((l) => (
                  <Link
                    key={l.code}
                    to="/$lang"
                    params={{ lang: l.code }}
                    onClick={() => setLangOpen(false)}
                    className={`flex items-center justify-between px-4 py-2.5 text-xs hover:bg-orange/10 transition-colors ${lang === l.code ? 'text-orange bg-orange/5 font-bold' : 'text-foreground'}`}
                  >
                    <span>{l.name}</span>
                    {lang === l.code && <div className="w-1.5 h-1.5 rounded-full bg-orange" />}
                  </Link>
                ))}
              </div>
            )}
          </div>



          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden text-orange p-2"
            aria-label="Menu"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              {open ? <path d="M6 6l12 12M6 18L18 6" /> : <path d="M3 6h18M3 12h18M3 18h18" />}
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div 
        className={`lg:hidden absolute top-full left-0 right-0 overflow-y-auto transition-all duration-500 ease-premium bg-black border-t border-white/5 ${
          open ? "h-[100dvh] opacity-100" : "h-0 opacity-0 pointer-events-none"
        }`}
      >
        <div className="px-6 py-8 flex flex-col min-h-[calc(100dvh-80px)] pb-32">
          <ul className="space-y-1 flex-1">
            {links.map((l, idx) => (
              <li key={l.label} className="border-b border-white/5 last:border-0" style={{ transitionDelay: `${idx * 50}ms` }}>
                {l.type === 'link' ? (
                  <Link
                    to={l.to as any}
                    hash={l.hash}
                    params={{ lang } as any}
                    onClick={() => setOpen(false)}
                    className="flex items-center justify-between py-5 text-xl font-medium text-white hover:text-orange transition-colors"
                  >
                    {l.label}
                    <ChevronRight size={18} className="text-orange/50" />
                  </Link>
                ) : (
                  <div className="flex flex-col">
                    {l.items?.map((item, i) => (
                      <Link
                        key={item.to}
                        to={item.to as any}
                        params={{ lang } as any}
                        onClick={() => setOpen(false)}
                        className={`flex items-center justify-between py-5 text-xl font-medium text-white hover:text-orange transition-colors ${i > 0 ? 'border-t border-white/5' : ''}`}
                      >
                        {item.label}
                        <ChevronRight size={18} className="text-orange/50" />
                      </Link>
                    ))}
                  </div>
                )}
              </li>
            ))}
          </ul>
          
          <div className="pt-12 mt-auto flex flex-col items-center">
            <img src={logo} alt="2S1M Rent Car" className="h-12 w-auto object-contain mb-8 opacity-90" />
            <div className="flex items-center gap-6 mb-10">
              <a href="https://www.facebook.com/share/1Gr4GZPhqC/" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white/60 hover:bg-orange hover:text-black hover:border-orange transition-all">
                <Facebook size={20} />
              </a>
              <a href="https://www.instagram.com/tetouanrentcar?igsh=MWJ4c3hlMmx1Nm9ldA==" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white/60 hover:bg-orange hover:text-black hover:border-orange transition-all">
                <Instagram size={20} />
              </a>
              <a href="https://wa.me/212660292821" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white/60 hover:bg-orange hover:text-black hover:border-orange transition-all">
                <MessageCircle size={20} />
              </a>
            </div>

            <div className="w-full pt-8 border-t border-white/5 flex flex-col items-center text-center space-y-4">
              <div className="space-y-1.5">
                <a href="tel:0660292821" className="block text-sm font-medium text-white/80 hover:text-orange transition-colors">06 60 29 28 21</a>
                <a href="tel:0531333293" className="block text-sm font-medium text-white/80 hover:text-orange transition-colors">05 31 33 32 93</a>
                <a href="https://wa.me/212660292821" target="_blank" rel="noopener noreferrer" className="block text-sm font-medium text-white/80 hover:text-orange transition-colors">+212 6 60 29 28 21</a>
              </div>
              <a href="mailto:2s1mrentcartetouan@gmail.com" className="block text-sm font-medium text-white/80 hover:text-orange transition-colors">2s1mrentcartetouan@gmail.com</a>
              <p className="text-[11px] text-white/50 leading-relaxed max-w-[250px] uppercase">RUE 14 AV MOHAMED BENOUNA,<br/>QUARTIER BOUJARAH, TÉTOUAN</p>
              
              <p className="text-[9px] uppercase tracking-widest text-white/30 pt-6">
                © {new Date().getFullYear()} 2S1M Rent Car — Tous droits réservés
              </p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
