import { FadeIn } from "@/components/FadeIn";
import { useTranslation } from "@/lib/useTranslation";

export function Hero() {
  const { t, lang } = useTranslation();

  return (
    <section id="accueil" className="relative min-h-screen flex items-center justify-center bg-background">
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        className="absolute inset-0 h-full w-full object-cover opacity-90 will-change-transform"
      >
        <source src="/contact-bg.mp4" type="video/mp4" />
      </video>
      {/* Ultra-light gradient overlay for legibility only */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/60 z-0" />
      
      {/* Noise texture for premium feel */}
      <div className="absolute inset-0 opacity-[0.04] pointer-events-none z-0 mix-blend-overlay" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }} />

      {/* Subtle floating warmth/lights */}
      <div className="absolute -left-24 top-24 h-[520px] w-[520px] rounded-full bg-orange/20 blur-3xl opacity-70 animate-[pulse_4s_ease-in-out_infinite]" />
      <div className="absolute right-8 top-1/3 h-[420px] w-[420px] rounded-full bg-orange-soft/10 blur-3xl opacity-60 animate-[pulse_5s_ease-in-out_infinite_reverse]" />
      <div className="absolute left-1/2 top-1/2 h-[260px] w-[260px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-orange/20 bg-orange/5 blur-xl" />
      
      {/* Bottom center warmth to blend sections smoothly */}
      <div className="absolute -bottom-40 left-1/2 -translate-x-1/2 w-[800px] h-[500px] rounded-[100%] bg-orange/20 blur-[100px] pointer-events-none animate-[pulse_6s_ease-in-out_infinite] z-0" />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 h-screen flex flex-col justify-between py-12 sm:py-16 text-center">
        {/* Top Section - Subtle Intro Message - Lowered position */}
        <div className="pt-24 sm:pt-32 lg:pt-40">
          <FadeIn delay={100}>
            <p className="text-[13px] sm:text-sm font-black tracking-[0.5em] text-orange/90 uppercase max-w-4xl mx-auto leading-relaxed">
              {t.hero.intro}
            </p>
          </FadeIn>
        </div>

        {/* Bottom Section - Refined Brand Name and Buttons */}
        <div className="space-y-10 pb-10 sm:pb-0">
          <FadeIn delay={200}>
            <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black tracking-tighter text-white drop-shadow-2xl">
              2S1M <span className="gradient-orange-text">RENT CAR</span>
            </h1>
          </FadeIn>
          <FadeIn delay={300}>
            <div className="flex flex-col sm:flex-row gap-5 justify-center">
              <a href="#contact" className="btn-orange-solid !px-8 !py-3.5 text-base shadow-xl shadow-orange/20 w-full sm:w-auto transform active:scale-95 transition-all font-bold">
                {t.hero.btnContact}
              </a>
              <a href="#voitures" className="btn-orange-solid !px-8 !py-3.5 text-base shadow-xl shadow-orange/20 w-full sm:w-auto transform active:scale-95 transition-all font-bold">
                {t.hero.btnCars}
              </a>
            </div>
          </FadeIn>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-orange/60">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 5v14M19 12l-7 7-7-7" />
        </svg>
      </div>
    </section>
  );
}
