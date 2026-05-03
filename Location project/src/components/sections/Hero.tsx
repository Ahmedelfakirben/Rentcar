import heroBg from "@/assets/hero-car.jpg";

export function Hero() {
  return (
    <section id="accueil" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <img
        src={heroBg}
        alt="Voiture sur une route côtière"
        className="absolute inset-0 w-full h-full object-cover"
        fetchPriority="high"
      />
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-b from-transparent to-background" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center fade-in-up">
        <p className="text-gold tracking-[0.4em] text-base sm:text-xl mb-6 uppercase">Premium Car Rental</p>
        <h1 className="text-5xl sm:text-7xl lg:text-8xl font-bold mb-6">
          <span className="gradient-gold-text">2S1M</span>
          <span className="text-white"> RENT CAR</span>
        </h1>
        <p className="text-base sm:text-xl text-white/90 max-w-2xl mx-auto mb-10 font-light">
          Votre partenaire de location premium à Tétouan
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="#contact" className="btn-gold-solid">
            Nous contacter
          </a>
          <a href="#voitures" className="btn-gold-solid">
            Voir nos voitures
          </a>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-gold/60">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 5v14M19 12l-7 7-7-7" />
        </svg>
      </div>
    </section>
  );
}
