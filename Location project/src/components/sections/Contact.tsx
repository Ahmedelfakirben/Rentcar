import logo from "@/assets/logo.png";

export function Contact() {
  return (
    <section id="contact" className="relative py-28 overflow-hidden">
      <div className="absolute inset-0 glow-radial pointer-events-none" />

      <div className="relative max-w-4xl mx-auto px-6 text-center">
        <p className="text-gold tracking-[0.3em] text-xs uppercase mb-4">Restons en contact</p>
        <h2 className="text-4xl sm:text-5xl font-bold mb-6">
          <span className="gradient-gold-text">Contactez-nous</span>
        </h2>
        <p className="text-muted-foreground mb-12 max-w-xl mx-auto">
          Une question ? Une réservation ? Notre équipe est à votre écoute.
        </p>

        <div className="grid sm:grid-cols-2 gap-6 mb-12">
          <a
            href="tel:0707532216"
            className="p-8 rounded-2xl bg-card border border-gold/20 hover:border-gold/50 hover:glow-gold transition-all group"
          >
            <div className="w-12 h-12 mx-auto rounded-full border border-gold/40 flex items-center justify-center text-gold mb-4 group-hover:bg-gold group-hover:text-background transition-all">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
              </svg>
            </div>
            <p className="text-sm text-muted-foreground uppercase tracking-wider mb-1">Téléphone</p>
            <p className="text-lg font-semibold text-foreground">07 53 22 16</p>
          </a>

          <a
            href="https://wa.me/2127532216"
            target="_blank"
            rel="noopener noreferrer"
            className="p-8 rounded-2xl bg-card border border-gold/20 hover:border-gold/50 hover:glow-gold transition-all group"
          >
            <div className="w-12 h-12 mx-auto rounded-full border border-gold/40 flex items-center justify-center text-gold mb-4 group-hover:bg-gold group-hover:text-background transition-all">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                <path d="M.057 24l1.687-6.163a11.867 11.867 0 01-1.587-5.946C.16 5.335 5.495 0 12.05 0a11.817 11.817 0 018.413 3.488 11.824 11.824 0 013.48 8.414c-.003 6.557-5.338 11.892-11.893 11.892a11.9 11.9 0 01-5.688-1.448L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884a9.86 9.86 0 001.51 5.26l-.999 3.648 3.978-1.607zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.149-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
              </svg>
            </div>
            <p className="text-sm text-muted-foreground uppercase tracking-wider mb-1">WhatsApp</p>
            <p className="text-lg font-semibold text-foreground">+212 7 53 22 16</p>
          </a>
        </div>

        <a
          href="https://wa.me/2127532216"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-gold-solid"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
            <path d="M.057 24l1.687-6.163a11.867 11.867 0 01-1.587-5.946C.16 5.335 5.495 0 12.05 0a11.817 11.817 0 018.413 3.488 11.824 11.824 0 013.48 8.414c-.003 6.557-5.338 11.892-11.893 11.892a11.9 11.9 0 01-5.688-1.448L.057 24z" />
          </svg>
          Réserver sur WhatsApp
        </a>

        <div className="flex justify-center gap-4 mt-12">
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="w-11 h-11 rounded-full border border-gold/40 flex items-center justify-center text-gold hover:bg-gold hover:text-background transition-all"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="2" y="2" width="20" height="20" rx="5" />
              <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zM17.5 6.5h.01" />
            </svg>
          </a>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="w-11 h-11 rounded-full border border-gold/40 flex items-center justify-center text-gold hover:bg-gold hover:text-background transition-all"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M22 12a10 10 0 10-11.56 9.88v-6.99H7.9V12h2.54V9.8c0-2.51 1.5-3.9 3.78-3.9 1.1 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.78l-.45 2.89h-2.33v6.99A10 10 0 0022 12z" />
            </svg>
          </a>
        </div>

        <footer className="mt-20 pt-8 border-t border-gold/15">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <img src={logo} alt="2S1M" className="h-10 w-auto opacity-80" />
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} 2S1M Rent Car — Tous droits réservés
            </p>
          </div>
        </footer>
      </div>
    </section>
  );
}
