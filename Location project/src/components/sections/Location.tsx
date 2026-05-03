export function Location() {
  return (
    <section id="localisation" className="py-28 bg-card/30">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <p className="text-gold tracking-[0.3em] text-xs uppercase mb-4">Où nous trouver</p>
          <h2 className="text-4xl sm:text-5xl font-bold">
            <span className="gradient-gold-text">Localisation</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div className="p-10 rounded-2xl bg-card border border-gold/20">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 rounded-full bg-gold/10 border border-gold/40 flex items-center justify-center text-gold shrink-0">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" /><circle cx="12" cy="10" r="3" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Tétouan, Maroc</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Nous sommes situés à Tétouan. <br />
                  <span className="text-foreground/70 italic">(Adresse exacte fournie après réservation)</span>
                </p>
              </div>
            </div>

            <div className="border-t border-gold/15 pt-6 space-y-3 text-sm text-muted-foreground">
              <p><span className="text-gold">Lundi - Dimanche :</span> 8h00 - 22h00</p>
              <p><span className="text-gold">Service 24/7 :</span> sur réservation</p>
            </div>
          </div>

          <div className="rounded-2xl overflow-hidden border border-gold/20 glow-gold aspect-square lg:aspect-auto lg:h-full min-h-[350px]">
            <iframe
              title="Localisation Tétouan"
              src="https://www.openstreetmap.org/export/embed.html?bbox=-5.39%2C35.55%2C-5.32%2C35.60&amp;layer=mapnik&amp;marker=35.5731%2C-5.3626"
              className="w-full h-full"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
