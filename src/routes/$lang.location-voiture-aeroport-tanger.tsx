import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Contact } from "@/components/sections/Contact";
import { useTranslation } from "@/lib/useTranslation";
import { FadeIn } from "@/components/FadeIn";
import { Plane, Clock, ShieldCheck, MapPin, Car } from "lucide-react";
import { Cars } from "@/components/sections/Cars";
import { FooterLinks } from "@/components/FooterLinks";
import { translations, defaultLang, type Language } from "@/lib/translations";

export const Route = createFileRoute("/$lang/location-voiture-aeroport-tanger")({
  component: TangierAirport,
  head: ({ params }) => {
    const lang = (params.lang as Language) || defaultLang;
    const t = translations[lang] || translations[defaultLang];
    return {
      meta: [
        { title: t.airports.tangier.seoTitle },
        { name: "description", content: t.airports.tangier.seoDesc },
        { property: "og:title", content: t.airports.tangier.seoTitle },
        { property: "og:description", content: t.airports.tangier.seoDesc },
      ],
      links: [
        { rel: "canonical", href: `https://rentcartetouan.ma/${lang}/location-voiture-aeroport-tanger` },
        { rel: "alternate", hreflang: "es", href: "https://rentcartetouan.ma/es/location-voiture-aeroport-tanger" },
        { rel: "alternate", hreflang: "fr", href: "https://rentcartetouan.ma/fr/location-voiture-aeroport-tanger" },
        { rel: "alternate", hreflang: "en", href: "https://rentcartetouan.ma/en/location-voiture-aeroport-tanger" },
        { rel: "alternate", hreflang: "ar", href: "https://rentcartetouan.ma/ar/location-voiture-aeroport-tanger" },
        { rel: "alternate", hreflang: "x-default", href: "https://rentcartetouan.ma/fr/location-voiture-aeroport-tanger" },
      ],
    };
  }
});

function TangierAirport() {
  const { t, lang } = useTranslation();
  const c = t.airports.tangier;

  return (
    <div className="min-h-screen bg-black text-foreground overflow-x-hidden">
      <Navbar />
      <main>
        <section className="relative pt-32 pb-12 sm:pt-40 sm:pb-20 lg:pt-48 lg:pb-28 overflow-hidden">
          {/* Subtle Orange Glow from Top */}
          <div className="absolute top-0 left-0 right-0 h-96 bg-gradient-to-b from-orange/20 to-transparent pointer-events-none" />
          
          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center flex-row-reverse">
               <div className="relative order-2 lg:order-1">
                <FadeIn delay={400}>
                   <div className="aspect-video rounded-3xl overflow-hidden border border-orange/20 shadow-2xl glow-orange">
                      <img src="/Aeropuerto Tanger.png" className="w-full h-full object-cover" alt="Tangier Airport" />
                   </div>
                </FadeIn>
              </div>
              <div className="order-1 lg:order-2">
                <FadeIn delay={0}>
                  <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange/10 text-orange text-xs font-bold uppercase tracking-wider mb-6">
                    <Plane size={14} /> {c.h2}
                  </span>
                </FadeIn>
                <FadeIn delay={100}>
                  <h1 className="text-4xl sm:text-6xl font-bold mb-6 leading-tight">
                    {c.h1.split(' ').slice(0, -1).join(' ')} <span className="gradient-orange-text">{c.h1.split(' ').slice(-1)}</span>
                  </h1>
                </FadeIn>
                <FadeIn delay={200}>
                  <p className="text-lg text-muted-foreground mb-10 max-w-xl">
                    {c.p}
                  </p>
                </FadeIn>
                <FadeIn delay={300}>
                  <div className="grid grid-cols-2 gap-6">
                    {[
                      { icon: <Car />, label: c.feat1 },
                      { icon: <MapPin />, label: c.feat2 },
                      { icon: <ShieldCheck />, label: c.feat3 },
                      { icon: <Clock />, label: c.feat4 }
                    ].map((f, i) => (
                      <div key={i} className="flex items-center gap-3 text-sm font-medium">
                        <div className="text-orange">{f.icon}</div>
                        {f.label}
                      </div>
                    ))}
                  </div>
                </FadeIn>
              </div>
            </div>
          </div>
        </section>

        <Cars />
      </main>
      <FooterLinks />
    </div>
  );
}
