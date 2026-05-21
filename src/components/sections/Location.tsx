import { FadeIn } from "@/components/FadeIn";
import { useTranslation } from "@/lib/useTranslation";
import { MapPin, Clock } from "lucide-react";

export function Location() {
  const { lang, t } = useTranslation();
  const c = t.location;

  return (
    <section id="localisation" className="relative py-24 sm:py-32 lg:py-40 overflow-hidden bg-black">
      {/* Premium background effects */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-gradient-to-b from-orange/10 via-transparent to-black z-0" />
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-orange/20 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-orange/5 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 w-full">
        <div className="text-center mb-20">
          <FadeIn delay={0}>
            <span className="inline-block px-4 py-1.5 mb-6 text-[11px] font-black tracking-[0.3em] uppercase bg-orange/10 text-orange border border-orange/20 rounded-full">
              {c.tag}
            </span>
          </FadeIn>
          <FadeIn delay={100}>
            <h2 className="text-2xl sm:text-6xl lg:text-7xl font-black text-white tracking-tighter leading-none">
              {c.title.split('').map((char, i) => (
                <span key={i} className={i >= Math.floor(c.title.length / 2) ? "gradient-orange-text" : ""}>{char}</span>
              ))}
            </h2>
          </FadeIn>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 sm:gap-12 items-stretch">
          <FadeIn delay={200} className="w-full h-auto lg:h-full">
            <div className="p-4 sm:p-10 rounded-[1.5rem] sm:rounded-[3rem] bg-black backdrop-blur-xl border border-white/10 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.5)] lg:h-full flex flex-col lg:justify-center w-full">
              <div className="flex items-start gap-6 mb-10 group">
                <a 
                  href="https://www.google.com/maps/dir/?api=1&destination=35.5926936,-5.3507613" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-16 h-16 rounded-2xl bg-orange text-black flex items-center justify-center shrink-0 shadow-[0_0_20px_rgba(255,153,0,0.3)] hover:scale-110 active:scale-95 transition-transform duration-500 cursor-pointer"
                >
                  <MapPin size={28} />
                </a>
                <div className="flex-1 min-w-0 pr-2">
                  <h3 className="text-xl sm:text-2xl font-black text-white mb-2 tracking-tight break-words">{c.city}</h3>
                  <p className="text-white/70 font-medium leading-relaxed uppercase text-xs sm:text-base break-words whitespace-normal">
                    {c.address}
                  </p>
                </div>
              </div>

              <div className="space-y-4 pt-8 border-t border-white/10 w-full">
                <div className="flex items-center gap-3 sm:gap-4 text-white font-bold uppercase tracking-wider text-[10px] sm:text-xs group break-words flex-wrap">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 shrink-0 rounded-xl bg-orange/10 border border-orange/20 flex items-center justify-center group-hover:bg-orange group-hover:text-black transition-all">
                    <Clock size={16} className="text-orange group-hover:text-black transition-colors" />
                  </div>
                  <span className="flex-1 min-w-0 break-words leading-tight">{c.hours}</span>
                </div>
                <div className="flex items-center gap-3 sm:gap-4 text-white font-bold uppercase tracking-wider text-[10px] sm:text-xs group break-words flex-wrap">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 shrink-0 rounded-xl bg-orange/10 border border-orange/20 flex items-center justify-center group-hover:bg-orange group-hover:text-black transition-all">
                    <Clock size={16} className="text-orange group-hover:text-black transition-colors" />
                  </div>
                  <span className="flex-1 min-w-0 break-words leading-tight">{c.service}</span>
                </div>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={300} className="w-full h-auto lg:h-full">
            <div className="rounded-[1.5rem] sm:rounded-[3rem] overflow-hidden border border-white/5 shadow-2xl aspect-video lg:aspect-auto lg:h-full min-h-[250px] sm:min-h-[400px] relative bg-black w-full">
              <iframe
                title="Localisation 2S1M Rent Car"
                src="https://maps.google.com/maps?q=2S1M%20RENT%20CAR%20T%C3%A9touan&t=m&z=17&output=embed"
                className="w-full h-full opacity-90 contrast-[1.1] saturate-[1.2]"
                loading="lazy"
              />
              <div className="absolute inset-0 pointer-events-none border-[4px] sm:border-[12px] border-black/40 rounded-[2rem] sm:rounded-[3rem]" />
              {/* Subtle Dark Glow Overlay */}
              <div className="absolute inset-0 bg-orange/5 pointer-events-none mix-blend-overlay" />
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
