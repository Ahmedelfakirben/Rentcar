import logan from "@/assets/car-logan.jpg";
import clio from "@/assets/car-clio.jpg";
import tucson from "@/assets/car-tucson.jpg";
import p208 from "@/assets/car-208.jpg";
import golf from "@/assets/car-golf.jpg";
import mercedes from "@/assets/car-mercedes.jpg";

const cars = [
  { name: "Dacia Logan", img: logan, price: 200, type: "Berline" },
  { name: "Renault Clio 5", img: clio, price: 250, type: "Citadine" },
  { name: "Peugeot 208", img: p208, price: 280, type: "Citadine" },
  { name: "Volkswagen Golf 8", img: golf, price: 400, type: "Compacte" },
  { name: "Hyundai Tucson", img: tucson, price: 550, type: "SUV" },
  { name: "Mercedes Classe C", img: mercedes, price: 900, type: "Luxe" },
];

const wa = "https://wa.me/2127532216";

export function Cars() {
  return (
    <section id="voitures" className="py-28 bg-card/30 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-gold tracking-[0.3em] text-xs uppercase mb-4">Notre flotte</p>
          <h2 className="text-4xl sm:text-5xl font-bold">
            Nos <span className="gradient-gold-text">voitures</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Une sélection de véhicules modernes et fiables, à des tarifs accessibles.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {cars.map((car) => (
            <article
              key={car.name}
              className="group bg-card border border-gold/15 rounded-2xl overflow-hidden hover:border-gold/50 hover:-translate-y-2 hover:glow-gold transition-all duration-500"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-secondary">
                <img
                  src={car.img}
                  alt={car.name}
                  loading="lazy"
                  width={800}
                  height={512}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <span className="absolute top-4 left-4 px-3 py-1 text-xs tracking-wider uppercase bg-background/80 backdrop-blur border border-gold/30 text-gold rounded-full">
                  {car.type}
                </span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{car.name}</h3>
                <div className="flex items-baseline justify-between mb-5">
                  <div>
                    <span className="text-3xl font-bold gradient-gold-text">{car.price}</span>
                    <span className="text-muted-foreground ml-1">DH / jour</span>
                  </div>
                </div>
                <a href={wa} target="_blank" rel="noopener noreferrer" className="btn-gold w-full">
                  Réserver
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
