import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Contact } from "@/components/sections/Contact";
import { useTranslation } from "@/lib/useTranslation";
import { FadeIn } from "@/components/FadeIn";
import { Plane, Clock, ShieldCheck, MapPin } from "lucide-react";
import { Cars } from "@/components/sections/Cars";
import { FooterLinks } from "@/components/FooterLinks";
import { translations, defaultLang, type Language } from "@/lib/translations";

export const Route = createFileRoute("/$lang/airports/tetouan")({
  component: TetouanAirport,
  head: ({ params }) => {
    const lang = (params.lang as Language) || defaultLang;
    const t = translations[lang] || translations[defaultLang];
    return {
      meta: [
        { title: t.airports.tetouan.seoTitle },
        { name: "description", content: t.airports.tetouan.seoDesc },
        { property: "og:title", content: t.airports.tetouan.seoTitle },
        { property: "og:description", content: t.airports.tetouan.seoDesc },
      ],
    };
  }
});

function TetouanAirport() {
  const { t, lang } = useTranslation();
  const c = t.airports.tetouan;

  return (
    <div className="min-h-screen bg-black text-foreground overflow-x-hidden">
      <Navbar />
      <main>
        <section className="relative pt-32 pb-12 sm:pt-40 sm:pb-20 lg:pt-48 lg:pb-28 overflow-hidden">
          {/* Subtle Orange Glow from Top */}
          <div className="absolute top-0 left-0 right-0 h-96 bg-gradient-to-b from-orange/20 to-transparent pointer-events-none" />

          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
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
                      { icon: <Clock />, label: c.feat1 },
                      { icon: <MapPin />, label: c.feat2 },
                      { icon: <ShieldCheck />, label: c.feat3 },
                      { icon: <Plane />, label: c.feat4 }
                    ].map((f, i) => (
                      <div key={i} className="flex items-center gap-3 text-sm font-medium">
                        <div className="text-orange">{f.icon}</div>
                        {f.label}
                      </div>
                    ))}
                  </div>
                </FadeIn>
              </div>
              <div className="relative">
                <FadeIn delay={400}>
                   <div className="grid grid-cols-2 gap-4">
                      <div className="aspect-[3/4] rounded-2xl sm:rounded-3xl overflow-hidden border border-orange/20 shadow-2xl glow-orange">
                         <img src="/fotoaeropuertotetouan.jpg" className="w-full h-full object-cover" alt="Aeropuerto Tetouan Sania Ramel - Rent Car Tetouan" />
                      </div>
                      <div className="aspect-[3/4] rounded-2xl sm:rounded-3xl overflow-hidden border border-white/10 shadow-xl mt-8 lg:mt-16">
                         <img src="/ATetouan.png" className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity" alt="Tetouan Airport Delivery" />
                      </div>
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
