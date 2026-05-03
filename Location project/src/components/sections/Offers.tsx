const offers = [
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "15% de réduction",
    desc: "Pour les nouveaux clients. Profitez d'une remise immédiate sur votre première location.",
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
      </svg>
    ),
    title: "Pack Weekend",
    desc: "25% de remise sur les locations du vendredi au dimanche. Idéal pour vos escapades.",
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
      </svg>
    ),
    title: "Économie longue durée",
    desc: "30% de réduction sur les locations de plus de 7 jours. Parfait pour vos voyages prolongés.",
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
      </svg>
    ),
    title: "Livraison gratuite",
    desc: "Livraison et récupération gratuites pour toutes les réservations de plus de 3 jours.",
  },
];

export function Offers() {
  return (
    <section id="offres" className="relative py-28 overflow-hidden">
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[500px] h-[500px] glow-radial pointer-events-none" />
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[500px] h-[500px] glow-radial pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-gold tracking-[0.3em] text-xs uppercase mb-4">Promotions spéciales</p>
          <h2 className="text-4xl sm:text-5xl font-bold">
            Nos <span className="gradient-gold-text">offres</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {offers.map((o) => (
            <div
              key={o.title}
              className="group p-8 rounded-2xl bg-card border border-gold/15 hover:border-gold/50 hover:glow-gold transition-all duration-500"
            >
              <div className="w-14 h-14 rounded-full border border-gold/40 flex items-center justify-center text-gold mb-6 group-hover:bg-gold group-hover:text-background transition-all">
                {o.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{o.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{o.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
