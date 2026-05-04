import { FadeIn } from "@/components/FadeIn";
import { useTranslation } from "@/lib/useTranslation";
import { Plane, MapPin } from "lucide-react";

export function Offers() {
  const { lang, t } = useTranslation();
  const c = t.offers;

  const offers = [
    {
      title: c.airportTangier,
      desc: c.airportTangierDesc,
      icon: <Plane size={32} />
    },
    {
      title: c.airportTetouan,
      desc: c.airportTetouanDesc,
      icon: <MapPin size={32} />
    },
    {
      title: c.rates,
      desc: c.ratesDesc,
      icon: <span className="text-2xl font-bold">DH</span>
    }
  ];

  return (
    <section id="offres" className="relative py-24 sm:py-32 lg:py-40 overflow-hidden bg-black">
      {/* Enhanced Orange Glows with Heartbeat animation - Increased Density */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[600px] h-[600px] bg-orange/25 blur-[120px] rounded-full pointer-events-none animate-heartbeat z-0" />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-orange/15 blur-[100px] rounded-full pointer-events-none animate-heartbeat [animation-delay:1.5s] z-0" />
      <div className="absolute bottom-[-1px] left-0 right-0 h-48 bg-gradient-to-b from-transparent to-orange/10 pointer-events-none z-0" />

      <div className="relative max-w-7xl mx-auto px-6 z-10">
        <div className="text-center mb-16">
          <FadeIn delay={0}>
            <p className="text-orange tracking-[0.3em] text-xs uppercase mb-4">{c.title}</p>
          </FadeIn>
          <FadeIn delay={100}>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
              {c.subtitle.split(' ')[0]} <span className="gradient-orange-text">{c.subtitle.split(' ')[1] || ""}</span>
            </h2>
          </FadeIn>
        </div>

        <div className="flex flex-col md:flex-row justify-center items-stretch gap-8 max-w-5xl mx-auto">
          {offers.map((o, idx) => (
            <FadeIn delay={200 + idx * 100} key={o.title} className="flex-1 flex">
              <div
                className="group flex-1 w-full p-10 rounded-3xl bg-black border border-orange/15 hover:border-orange/50 hover:glow-orange transition-all duration-500 flex flex-col"
              >
                <div className="w-16 h-16 rounded-full border border-orange/40 flex items-center justify-center text-orange mb-8 group-hover:bg-orange group-hover:text-background transition-all">
                  {o.icon}
                </div>
                <h3 className="text-2xl font-semibold mb-4">{o.title}</h3>
                <p className="text-muted-foreground text-base leading-relaxed mb-8 flex-1">{o.desc}</p>
                
                <a 
                  href={`https://wa.me/212660292821?text=${encodeURIComponent(c.waMessage)}%20${encodeURIComponent(o.title)}`} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="btn-orange-solid w-full mt-auto text-center"
                >
                  {c.btn}
                </a>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
