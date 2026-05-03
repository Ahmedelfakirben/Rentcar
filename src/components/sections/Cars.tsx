import { useEffect, useState } from "react";
import { format, differenceInDays } from "date-fns";
import { fr, es, enUS, arSA } from "date-fns/locale";
import { DateRange } from "react-day-picker";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Calendar } from "@/components/ui/calendar";
import { FadeIn } from "@/components/FadeIn";
import { supabase } from "@/lib/supabase";
import { Loader2, Calendar as CalendarIcon, Fuel as FuelIcon, Settings2 as SettingsIcon } from "lucide-react";
import { useTranslation } from "@/lib/useTranslation";

type Car = {
  id: string;
  name: string;
  brand?: string;
  model?: string;
  year?: number | string;
  fuel?: string;
  transmission?: string;
  img: string;
  photos: string[];
  price: number;
  type: string;
};

const wa = "212660292821";

export function Cars() {
  const { t, lang } = useTranslation();
  const [cars, setCars] = useState<Car[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedCar, setSelectedCar] = useState<Car | null>(null);
  const [disabledDates, setDisabledDates] = useState<Date[]>([]);
  const [date, setDate] = useState<DateRange | undefined>(undefined);

  useEffect(() => {
    async function fetchCars() {
      try {
        const { data, error } = await supabase
          .from('vehicles')
          .select('*')
          .neq('status', 'archived');
        
        if (error) throw error;

        if (data) {
          const formattedCars: Car[] = data.map(v => {
            let imageUrl = v.image_url;
            if (imageUrl && !imageUrl.startsWith('http')) {
               const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
               imageUrl = `${supabaseUrl}/storage/v1/object/public/vehicle-images/${imageUrl}`;
            }

            return {
              id: v.id,
              name: `${v.brand} ${v.model}`,
              brand: v.brand,
              model: v.model,
              year: v.year,
              fuel: v.fuel,
              transmission: v.transmission,
              img: imageUrl || "/placeholder-car.jpg",
              photos: v.photos || [],
              price: v.daily_rate || 0,
              type: v.fuel || "Citadine",
            };
          });
          setCars(formattedCars);
        }
      } catch (err) {
        console.error("Error fetching cars:", err);
      } finally {
        setLoading(false);
      }
    }

    fetchCars();
  }, []);

  const handleBookClick = async (car: Car) => {
    setSelectedCar(car);
    try {
      const { data, error } = await supabase
        .from('contracts')
        .select('start_date, end_date')
        .eq('vehicle_id', car.id)
        .neq('status', 'cancelled');
      
      if (error) throw error;

      if (data) {
        const blocked: Date[] = [];
        data.forEach(c => {
          let current = new Date(c.start_date);
          const last = new Date(c.end_date);
          while (current <= last) {
            blocked.push(new Date(current));
            current.setDate(current.getDate() + 1);
          }
        });
        setDisabledDates(blocked);
      }
    } catch (err) {
      console.error("Error fetching reservations:", err);
    }
  };

  const daysCount = date?.from && date?.to ? Math.max(1, differenceInDays(date.to, date.from)) : 1;

  const generateWhatsAppLink = () => {
    if (!selectedCar) return `https://wa.me/${wa}`;
    
    let message = lang === 'fr' 
      ? `Bonjour, je souhaite réserver la voiture : ${selectedCar.name}.\n\n`
      : lang === 'es'
      ? `Hola, deseo reservar el coche: ${selectedCar.name}.\n\n`
      : lang === 'en'
      ? `Hello, I would like to book the car: ${selectedCar.name}.\n\n`
      : `مرحباً، أود حجز السيارة: ${selectedCar.name}.\n\n`;

    if (date?.from && date?.to) {
      const fromStr = format(date.from, "dd/MM/yyyy");
      const toStr = format(date.to, "dd/MM/yyyy");
      
      if (lang === 'fr') message += `Du : ${fromStr}\nAu : ${toStr}\nDurée : ${daysCount} jour(s)\n`;
      else if (lang === 'es') message += `Del : ${fromStr}\nAl : ${toStr}\nDuración : ${daysCount} día(s)\n`;
      else if (lang === 'en') message += `From : ${fromStr}\nTo : ${toStr}\nDuration : ${daysCount} day(s)\n`;
      else message += `من : ${fromStr}\nإلى : ${toStr}\nالمدة : ${daysCount} يوم\n`;
    }
    
    return `https://wa.me/${wa}?text=${encodeURIComponent(message)}`;
  };

  return (
    <section id="voitures" className="pt-32 pb-16 sm:pt-40 sm:pb-20 lg:pt-48 lg:pb-28 relative overflow-hidden">
      <div className="absolute inset-0 z-0 bg-[#0B1D2A]">
        <img 
          src="/flota.png" 
          alt="2S1M Rent Car Fleet" 
          className="w-full h-full object-cover opacity-90"
        />
        {/* Lighter, more subtle gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/40 z-0" />
        <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-black to-transparent z-0" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <FadeIn delay={0}>
            <p className="text-orange tracking-[0.4em] text-[10px] font-black uppercase mb-4 drop-shadow-lg">{t.fleet.title}</p>
          </FadeIn>
          <FadeIn delay={100}>
            <h2 className="text-4xl sm:text-6xl lg:text-7xl font-black mb-6 drop-shadow-2xl">
              {lang === 'ar' ? (
                <span className="gradient-orange-text">{t.fleet.subtitle}</span>
              ) : (
                <>
                  {t.fleet.subtitle.split(' ').slice(0, -1).join(' ')}{' '}
                  <span className="gradient-orange-text">{t.fleet.subtitle.split(' ').slice(-1)}</span>
                </>
              )}
            </h2>
          </FadeIn>
          <FadeIn delay={200}>
            <p className="text-lg text-white/80 mt-4 max-w-2xl mx-auto font-medium drop-shadow-md">
              {t.fleet.description}
            </p>
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {loading ? (
            <div className="col-span-full py-20 flex flex-col items-center justify-center gap-4">
              <Loader2 className="w-10 h-10 text-orange animate-spin" />
              <p className="text-muted-foreground animate-pulse">{t.fleet.loading}</p>
            </div>
          ) : cars.length === 0 ? (
            <div className="col-span-full py-20 text-center bg-card/20 rounded-[2rem] border border-orange/10">
              <p className="text-xl text-muted-foreground">{t.fleet.empty}</p>
            </div>
          ) : (
            cars.map((car, idx) => (
              <FadeIn key={car.id} delay={idx * 100}>
                <article className="group relative bg-card/40 backdrop-blur-md border border-orange/10 rounded-[2rem] overflow-hidden hover:border-orange/40 hover:-translate-y-3 transition-all duration-500 h-full flex flex-col shadow-2xl hover:shadow-orange/20">
                  <div className="relative aspect-[16/10] overflow-hidden bg-secondary/20 shrink-0">
                    <img
                      src={car.img}
                      alt={car.name}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute top-4 left-4 flex flex-col gap-2">
                      <span className="px-3 py-1.5 text-[10px] font-bold tracking-widest uppercase bg-black/60 backdrop-blur-md text-orange border border-orange/20 rounded-lg">
                        {car.type}
                      </span>
                    </div>
                    {car.transmission && (
                      <div className="absolute top-4 right-4">
                        <span className="px-3 py-1.5 text-[10px] font-bold tracking-widest uppercase bg-orange text-white rounded-lg shadow-lg shadow-orange/40">
                          {car.transmission === 'manual' ? t.fleet.manual : t.fleet.auto}
                        </span>
                      </div>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-card/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>

                  <div className="p-8 flex flex-col items-center flex-1 relative text-center">
                    <div className="mb-6 flex flex-col items-center">
                      <h3 className="text-2xl font-bold mb-2 group-hover:text-orange transition-colors">{car.name}</h3>
                      <div className="w-12 h-1 bg-orange/30 rounded-full group-hover:w-20 transition-all duration-500" />
                    </div>

                    <div className="grid grid-cols-3 gap-4 mb-8 p-4 rounded-2xl bg-secondary/20 border border-orange/5 w-full">
                      <div className="flex flex-col items-center justify-center gap-1">
                        <CalendarIcon size={14} className="text-orange/70" />
                        <span className="text-[10px] font-bold text-muted-foreground">{car.year || "—"}</span>
                      </div>
                      <div className="flex flex-col items-center justify-center gap-1 border-x border-orange/10">
                        <FuelIcon size={14} className="text-orange/70" />
                        <span className="text-[10px] font-bold text-muted-foreground uppercase">
                          {car.fuel === 'diesel' ? t.fleet.diesel : car.fuel === 'essence' ? t.fleet.essence : (car.fuel || "—")}
                        </span>
                      </div>
                      <div className="flex flex-col items-center justify-center gap-1">
                        <SettingsIcon size={14} className="text-orange/70" />
                        <span className="text-[10px] font-bold text-muted-foreground uppercase">{car.transmission === 'manual' ? t.fleet.manual : t.fleet.auto}</span>
                      </div>
                    </div>
                    
                    <div className="w-full mt-auto">
                      <button onClick={() => handleBookClick(car)} className="btn-orange-solid w-full !py-4 rounded-2xl shadow-xl shadow-orange/10 transform active:scale-95 transition-all">
                        {t.fleet.book}
                      </button>
                    </div>
                  </div>
                  <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-orange/5 rounded-full blur-3xl group-hover:bg-orange/10 transition-colors" />
                </article>
              </FadeIn>
            ))
          )}
        </div>
      </div>

      <Dialog open={!!selectedCar} onOpenChange={(open) => !open && setSelectedCar(null)}>
        <DialogContent className="sm:max-w-[1000px] w-[95vw] bg-black border border-orange/20 p-0 overflow-hidden rounded-[2rem] shadow-2xl">
          {selectedCar && (
            <div className="flex flex-col lg:flex-row h-full max-h-[90vh]">
              <div className="w-full lg:w-3/5 flex flex-col relative group/gallery border-b lg:border-b-0 lg:border-r border-orange/10 bg-slate-950 overflow-hidden">
                <div className="absolute inset-0 z-0">
                  <img src={selectedCar.img} alt="" className="w-full h-full object-cover opacity-40 blur-md scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-transparent to-black/80" />
                </div>

                <div className="flex-1 relative z-10 flex items-center justify-center p-4">
                  <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-2xl border border-white/20">
                    <img src={selectedCar.img} alt={selectedCar.name} className="w-full h-full object-cover" />
                  </div>
                  <div className="absolute top-8 left-8 flex flex-col gap-2">
                    <span className="px-4 py-2 text-xs font-black tracking-widest uppercase bg-orange text-white rounded-xl shadow-xl shadow-orange/40">
                      {selectedCar.brand}
                    </span>
                  </div>
                </div>

                {selectedCar.photos && selectedCar.photos.length > 0 && (
                  <div className="px-6 pb-6 flex gap-3 overflow-x-auto scrollbar-hide relative z-20">
                    {[selectedCar.img, ...selectedCar.photos.map(p => {
                      if (!p.startsWith('http')) {
                        const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
                        return `${supabaseUrl}/storage/v1/object/public/vehicle-images/${p}`;
                      }
                      return p;
                    })].map((photo, i) => (
                      <div key={i} className="w-24 h-16 shrink-0 rounded-lg overflow-hidden border-2 border-white/20 hover:border-orange transition-colors cursor-pointer shadow-lg bg-black/40 backdrop-blur-sm">
                        <img src={photo} className="w-full h-full object-cover" />
                      </div>
                    ))}
                  </div>
                )}
              </div>
              
              <div className="w-full lg:w-2/5 p-8 flex flex-col bg-black/80 backdrop-blur-2xl">
                <div className="mb-8">
                  <DialogHeader className="p-0 text-left mb-4">
                    <DialogTitle className="text-3xl font-black">{selectedCar.name}</DialogTitle>
                  </DialogHeader>
                  <div className="flex gap-4 items-center">
                    <div className="flex items-center gap-1.5 text-muted-foreground bg-secondary/30 px-3 py-1.5 rounded-lg border border-orange/5">
                      <CalendarIcon size={14} className="text-orange" />
                      <span className="text-xs font-bold uppercase">{selectedCar.year}</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-muted-foreground bg-secondary/30 px-3 py-1.5 rounded-lg border border-orange/5">
                      <FuelIcon size={14} className="text-orange" />
                      <span className="text-xs font-bold uppercase">
                        {selectedCar.fuel === 'diesel' ? t.fleet.diesel : selectedCar.fuel === 'essence' ? t.fleet.essence : (selectedCar.fuel || "—")}
                      </span>
                    </div>
                    <div className="flex items-center gap-1.5 text-muted-foreground bg-secondary/30 px-3 py-1.5 rounded-lg border border-orange/5">
                      <SettingsIcon size={14} className="text-orange" />
                      <span className="text-xs font-bold uppercase">{selectedCar.transmission === 'manual' ? t.fleet.manual : t.fleet.auto}</span>
                    </div>
                  </div>
                </div>
                
                <h3 className="font-bold text-sm uppercase tracking-widest mb-4 text-orange/80">{t.fleet.availability}</h3>
                
                <div className="flex justify-center bg-black/60 backdrop-blur-md rounded-2xl p-4 border border-orange/20 mb-8 relative overflow-hidden group/cal shadow-[0_0_30px_rgba(255,153,0,0.05)]">
                  <div className="absolute inset-0 bg-gradient-to-br from-orange/20 via-orange/5 to-transparent opacity-100 pointer-events-none" />
                  <div className="absolute -top-10 -left-10 w-24 h-24 bg-orange/20 blur-2xl rounded-full pointer-events-none" />
                  <Calendar
                    mode="range"
                    defaultMonth={new Date()}
                    selected={date}
                    onSelect={setDate}
                    numberOfMonths={1}
                    disabled={(d) => {
                      const day = new Date(d);
                      day.setHours(0,0,0,0);
                      const now = new Date();
                      now.setHours(0,0,0,0);
                      
                      // Permitir hoy y futuro
                      if (day < now) return true;
                      
                      // Bloquear solo si está en la lista de reservados
                      return disabledDates.some(bd => {
                        const bDay = new Date(bd);
                        bDay.setHours(0,0,0,0);
                        return bDay.getTime() === day.getTime();
                      });
                    }}
                    locale={lang === 'es' ? es : lang === 'en' ? enUS : lang === 'ar' ? arSA : fr}
                    className="mx-auto bg-transparent scale-95"
                  />
                </div>
                
                <div className="mt-auto space-y-4 pt-4 border-t border-orange/10">
                  <a href={generateWhatsAppLink()} target="_blank" rel="noopener noreferrer" className="btn-orange-solid w-full block text-center py-3">
                    {t.fleet.confirm}
                  </a>
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}
