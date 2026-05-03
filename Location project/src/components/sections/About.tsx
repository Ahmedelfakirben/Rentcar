import logo from "@/assets/logo.png";

export function About() {
  return (
    <section id="about" className="relative py-28 overflow-hidden">
      <div className="absolute inset-0 glow-radial pointer-events-none" />
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full glow-radial pointer-events-none" />

      <div className="relative max-w-5xl mx-auto px-6 text-center">
        <p className="text-gold tracking-[0.3em] text-xs uppercase mb-4">À propos</p>
        <h2 className="text-4xl sm:text-5xl font-bold mb-8">
          Qui <span className="gradient-gold-text">sommes-nous</span>
        </h2>

        <div className="flex justify-center mb-8">
          <div className="p-6 rounded-full border border-gold/30 glow-gold">
            <img src={logo} alt="2S1M" className="h-16 w-auto" />
          </div>
        </div>

        <p className="text-lg sm:text-xl text-foreground/80 leading-relaxed font-light max-w-3xl mx-auto">
          Nous sommes une agence de location de voitures basée à <span className="text-gold">Tétouan</span>,
          offrant des véhicules modernes, fiables et accessibles pour tous vos besoins.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-16">
          {[
            { n: "100+", l: "Clients satisfaits" },
            { n: "20+", l: "Véhicules disponibles" },
            { n: "24/7", l: "Service client" },
          ].map((s) => (
            <div key={s.l} className="p-8 rounded-2xl bg-card border border-gold/15 hover:border-gold/40 transition-all">
              <div className="text-4xl font-bold gradient-gold-text mb-2">{s.n}</div>
              <div className="text-sm text-muted-foreground tracking-wide uppercase">{s.l}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
