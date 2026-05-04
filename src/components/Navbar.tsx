import { useEffect, useState } from "react";
import logo from "@/assets/logo.svg";
import { useTranslation } from "@/lib/useTranslation";
import { Link, useRouterState } from "@tanstack/react-router";
import { Globe, ChevronDown } from "lucide-react";

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
        { to: "/$lang/airports/tetouan", label: t.nav.airportTetouan },
        { to: "/$lang/airports/tangier", label: t.nav.airportTangier },
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
          <Link to="/$lang" params={{ lang }} className="flex items-center gap-2">
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
                    params={{ lang }}
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
                              params={{ lang }}
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
              <div className="absolute top-full right-0 mt-2 w-40 bg-black border border-orange/20 rounded-xl shadow-xl overflow-hidden animate-scale-in">
                {languages.map((l) => (
                  <Link
                    key={l.code}
                    to="/$lang"
                    params={{ lang: l.code }}
                    onClick={() => setLangOpen(false)}
                    className={`flex items-center justify-between px-4 py-2.5 text-xs hover:bg-orange/10 transition-colors ${lang === l.code ? 'text-orange bg-orange/5 font-bold' : 'text-foreground'}`}
                  >
                    <span>{l.flag} {l.name}</span>
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
        className={`lg:hidden grid transition-all duration-300 ease-in-out ${
          open ? "grid-rows-[1fr] opacity-100 pointer-events-auto" : "grid-rows-[0fr] opacity-0 pointer-events-none"
        }`}
      >
        <div className="overflow-hidden bg-background/95 backdrop-blur-md border-t border-orange/20">
          <ul className="px-6 py-6 space-y-4">
            {links.map((l) => (
              <li key={l.label}>
                {l.type === 'link' ? (
                  <Link
                    to={l.to as any}
                    hash={l.hash}
                    params={{ lang }}
                    onClick={() => setOpen(false)}
                    className={`block text-lg font-medium ${scrolled ? 'text-foreground' : 'text-white'} hover:text-orange transition-colors`}
                  >
                    {l.label}
                  </Link>
                ) : (
                  <div className="space-y-3">
                    <p className="text-sm font-bold uppercase tracking-widest text-orange/60">{l.label}</p>
                    <div className="grid gap-2 pl-2">
                      {l.items?.map((item) => (
                        <Link
                          key={item.to}
                          to={item.to as any}
                          params={{ lang }}
                          onClick={() => setOpen(false)}
                          className="text-base font-medium text-foreground hover:text-orange py-1"
                        >
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </li>
            ))}
            
            <li className="pt-6 border-t border-orange/15">
              <div className="grid grid-cols-2 gap-2">
                {languages.map((l) => (
                  <Link
                    key={l.code}
                    to="/$lang"
                    params={{ lang: l.code }}
                    onClick={() => setOpen(false)}
                    className={`flex items-center gap-2 px-4 py-3 rounded-xl border border-orange/10 bg-orange/5 text-xs ${lang === l.code ? 'border-orange text-orange font-bold' : 'text-muted-foreground'}`}
                  >
                    {l.flag} {l.name}
                  </Link>
                ))}
              </div>
            </li>


          </ul>
        </div>
      </div>
    </header>
  );
}
