import logo from "@/assets/logo.svg";
import { FadeIn } from "@/components/FadeIn";
import { useTranslation } from "@/lib/useTranslation";
import { ShieldCheck, Clock, Award, Map, Volume2, VolumeX } from "lucide-react";
import { useRef, useEffect, useState } from "react";

export function About() {
  const { lang, t } = useTranslation();
  const c = t.about;
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMuted, setIsMuted] = useState(true);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // iOS Safari requires muted=true from the HTML attribute to allow autoplay.
    // We start muted and let the user unmute via the button.
    video.volume = 0.7;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Always play muted first (works on iOS)
          video.muted = true;
          video.play().catch(e => console.log("Autoplay failed:", e));
        } else {
          video.pause();
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(video);

    return () => {
      observer.unobserve(video);
    };
  }, []);

  const toggleSound = () => {
    const video = videoRef.current;
    if (!video) return;
    const newMuted = !isMuted;
    video.muted = newMuted;
    if (!newMuted) video.volume = 0.7;
    setIsMuted(newMuted);
  };

  return (
    <section id="about" className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-black">
      {/* Background Decorations */}
      <div className="absolute top-0 left-0 right-0 h-96 bg-gradient-to-b from-orange/15 to-transparent pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-orange/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Side: Text Content */}
          <div>
            <FadeIn delay={0}>
              <span className="text-orange tracking-[0.4em] text-[10px] font-black uppercase mb-6 block">
                {c.tag}
              </span>
            </FadeIn>
            <FadeIn delay={100}>
              <h2 className="text-5xl sm:text-7xl font-black mb-8 leading-none">
                {lang === 'ar' ? (
                  <span className="gradient-orange-text">{c.title}</span>
                ) : (
                  <>
                    {c.title.split(' ').slice(0, -1).join(' ')}{' '}
                    <span className="gradient-orange-text">{c.title.split(' ').slice(-1)}</span>
                  </>
                )}
              </h2>
            </FadeIn>
            <FadeIn delay={200}>
              <p className="text-lg text-white/70 leading-relaxed font-medium mb-12 max-w-xl">
                {c.desc}
              </p>
            </FadeIn>

            {/* Pillars */}
            <div className="grid sm:grid-cols-2 gap-8 lg:block lg:space-y-8">
              {[
                { icon: <ShieldCheck className="text-orange" />, title: c.pillar1, desc: c.pillar1Desc },
                { icon: <Clock className="text-orange" />, title: c.pillar2, desc: c.pillar2Desc },
                { icon: <Award className="text-orange" />, title: c.pillar3, desc: c.pillar3Desc },
                { icon: <Map className="text-orange" />, title: c.pillar4, desc: c.pillar4Desc },
              ].map((p, i) => (
                <FadeIn key={p.title} delay={300 + i * 100}>
                  <div className="flex gap-5 group">
                    <div className="w-12 h-12 rounded-2xl bg-orange/10 border border-orange/20 flex items-center justify-center shrink-0 group-hover:bg-orange group-hover:text-black transition-all duration-500">
                      {p.icon}
                    </div>
                    <div>
                      <h4 className="text-white font-bold mb-1">{p.title}</h4>
                      <p className="text-sm text-white/50">{p.desc}</p>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>

          {/* Right Side: Visual Branding with Vertical Promo Video */}
          <div className="relative flex justify-center items-center w-full">
            <FadeIn delay={500} className="relative w-full max-w-[320px] sm:max-w-[400px] lg:max-w-[420px] mx-auto">
              {/* Glassmorphic Video Card Container (Vertical 9:16) */}
              <div className="relative z-10 p-3 bg-gradient-to-br from-white/[0.03] to-transparent border border-white/10 rounded-[2.5rem] sm:rounded-[3.5rem] backdrop-blur-3xl overflow-hidden shadow-2xl">
                <div className="relative rounded-[1.8rem] sm:rounded-[2.8rem] overflow-hidden aspect-[9/16] bg-black/60 group">
                  <video
                    ref={videoRef}
                    src="/promo.mp4"
                    muted
                    playsInline
                    loop
                    preload="metadata"
                    className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-500"
                  />
                  {/* Sound toggle button */}
                  <button
                    onClick={toggleSound}
                    className="absolute bottom-4 right-4 z-20 w-10 h-10 rounded-full bg-black/60 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-orange/80 hover:border-orange transition-all duration-300"
                    aria-label={isMuted ? 'Activar sonido' : 'Silenciar'}
                  >
                    {isMuted ? <VolumeX size={18} /> : <Volume2 size={18} />}
                  </button>
                  {/* Premium overlay border inside */}
                  <div className="absolute inset-0 pointer-events-none border border-white/5 rounded-[1.8rem] sm:rounded-[2.8rem]" />
                </div>
              </div>

              {/* Decorative Card behind */}
              <div className="absolute -top-4 -right-4 w-full h-full border border-orange/20 rounded-[2.5rem] sm:rounded-[3.5rem] z-0 pointer-events-none" />
              <div className="absolute -bottom-4 -left-4 w-full h-full border border-white/5 rounded-[2.5rem] sm:rounded-[3.5rem] z-0 pointer-events-none" />
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}
