import logo from "@/assets/logo.svg";
import { FadeIn } from "@/components/FadeIn";
import { useTranslation } from "@/lib/useTranslation";
import { Phone, MessageCircle, Instagram, Facebook, MapPin } from "lucide-react";

export function Contact() {
  const { lang, t } = useTranslation();
  const c = t.contact;

  return (
    <section
      id="contact"
      className="relative py-16 sm:py-20 lg:py-28 overflow-hidden bg-black"
      style={{
        backgroundImage: "url('/contact-bg.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0 bg-black/60" />
      <div className="absolute inset-0 glow-radial pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <FadeIn delay={0}>
          <p className="text-orange tracking-[0.3em] text-xs uppercase mb-4">{c.tag}</p>
        </FadeIn>
        <FadeIn delay={100}>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            <span className="gradient-orange-text">{c.title}</span>
          </h2>
        </FadeIn>
        <FadeIn delay={200}>
          <p className="text-muted-foreground mb-12 max-w-xl mx-auto">
            {c.desc}
          </p>
        </FadeIn>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <FadeIn delay={300} className="h-full">
            <div className="block h-full p-8 rounded-2xl bg-black/80 border border-white/10 hover:border-orange/50 hover:glow-orange transition-all group">
              <div className="w-12 h-12 mx-auto rounded-full border border-orange/40 flex items-center justify-center text-orange mb-4 group-hover:bg-orange group-hover:text-background transition-all">
                <Phone size={22} />
              </div>
              <p className="text-sm text-muted-foreground uppercase tracking-wider mb-2">{c.phone}</p>
              <div className="space-y-1">
                <a href="tel:0660292821" className="block text-lg font-semibold text-foreground hover:text-orange transition-colors">06 60 29 28 21</a>
                <a href="tel:0531333293" className="block text-lg font-semibold text-foreground hover:text-orange transition-colors">05 31 33 32 93</a>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={400} className="h-full">
            <a
              href="https://wa.me/212660292821"
              target="_blank"
              rel="noopener noreferrer"
              className="block h-full p-8 rounded-2xl bg-black/80 border border-white/10 hover:border-orange/50 hover:glow-orange transition-all group"
            >
              <div className="w-12 h-12 mx-auto rounded-full border border-orange/40 flex items-center justify-center text-orange mb-4 group-hover:bg-orange group-hover:text-background transition-all">
                <MessageCircle size={22} />
              </div>
              <p className="text-sm text-muted-foreground uppercase tracking-wider mb-2">{c.wa}</p>
              <p className="text-lg font-semibold text-foreground" dir="ltr">+212 6 60 29 28 21</p>
            </a>
          </FadeIn>

          <FadeIn delay={500} className="h-full sm:col-span-2 lg:col-span-1">
            <div className="block h-full p-8 rounded-2xl bg-black/80 border border-white/10 hover:border-orange/50 hover:glow-orange transition-all group">
              <div className="w-12 h-12 mx-auto rounded-full border border-orange/40 flex items-center justify-center text-orange mb-4 group-hover:bg-orange group-hover:text-background transition-all">
                <MapPin size={22} />
              </div>
              <p className="text-sm text-muted-foreground uppercase tracking-wider mb-2">{c.address}</p>
              <p className="text-sm font-medium text-foreground leading-relaxed uppercase">
                RUE 14 AV MOHAMED BENOUNA<br/>QUARTIER BOUJARAH, TÉTOUAN
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={600} className="h-full sm:col-span-2 lg:col-span-1">
            <a
              href="mailto:2s1mrentcar@gmail.com"
              className="block h-full p-8 rounded-2xl bg-black/80 border border-white/10 hover:border-orange/50 hover:glow-orange transition-all group"
            >
              <div className="w-12 h-12 mx-auto rounded-full border border-orange/40 flex items-center justify-center text-orange mb-4 group-hover:bg-orange group-hover:text-background transition-all">
                <MessageCircle size={22} />
              </div>
              <p className="text-sm text-muted-foreground uppercase tracking-wider mb-2">Email</p>
              <p className="text-sm font-medium text-foreground leading-relaxed">
                2s1mrentcar@gmail.com
              </p>
            </a>
          </FadeIn>
        </div>

        <FadeIn delay={500}>
          <a
            href="https://wa.me/212660292821"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-orange-solid flex items-center justify-center gap-2"
          >
            <MessageCircle size={18} />
            {c.waBtn}
          </a>
        </FadeIn>

        <FadeIn delay={600}>
          <div className="flex justify-center gap-4 mt-12">
            <a
              href="https://www.instagram.com/tetouanrentcar?igsh=MWJ4c3hlMmx1Nm9ldA=="
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="w-11 h-11 rounded-full border border-orange/40 flex items-center justify-center text-orange hover:bg-orange hover:text-background transition-all"
            >
              <Instagram size={18} />
            </a>
            <a
              href="https://www.facebook.com/share/1Gr4GZPhqC/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="w-11 h-11 rounded-full border border-orange/40 flex items-center justify-center text-orange hover:bg-orange hover:text-background transition-all"
            >
              <Facebook size={18} />
            </a>
          </div>
        </FadeIn>

      </div>
    </section>
  );
}
