import { MapPin, Phone } from "lucide-react";
import { PHONE_LINK, SERVICE_AREAS } from "@/lib/business.ts";

export default function Areas() {
  return (
    <div>
      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-[1fr_0.8fr] gap-10 items-center">
            <div>
              <span className="text-sm font-semibold text-[#e67e22] uppercase tracking-wider">
                Къде работим
              </span>
              <h1 className="text-4xl sm:text-5xl font-extrabold text-foreground mt-3 mb-5">
                Обекти в цялата страна по договорка
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                КИД Строй приема обекти според локацията, обема и нужните
                срокове. За най-бърза преценка се обадете и уточнете адреса и
                вида работа.
              </p>
            </div>
            <div className="rounded-3xl overflow-hidden shadow-xl">
              <img
                src="https://images.pexels.com/photos/6474475/pexels-photo-6474475.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="Подготовка за ремонт"
                className="w-full aspect-[4/3] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="pb-16 sm:pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="bg-primary/5 rounded-3xl p-8 sm:p-12 border border-primary/10">
            <h2 className="text-2xl font-bold text-foreground mb-6">
              Основни градове
            </h2>
            <div className="flex flex-wrap gap-2">
              {SERVICE_AREAS.map((city) => (
                <span
                  key={city}
                  className="inline-flex items-center gap-1.5 bg-white/80 border border-border/50 rounded-full px-4 py-2 text-sm font-medium text-foreground"
                >
                  <MapPin className="size-3.5 text-primary" />
                  {city}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="pb-16 sm:pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="bg-[#1a2744] text-white rounded-3xl p-8 sm:p-12 flex flex-col md:flex-row gap-6 md:items-center md:justify-between">
            <div>
              <h2 className="text-2xl font-bold mb-2">
                Не виждате вашия град?
              </h2>
              <p className="text-white/70">
                Обадете се и ще уточним дали можем да поемем обекта.
              </p>
            </div>
            <a
              href={PHONE_LINK}
              className="inline-flex items-center justify-center gap-2 bg-[#e67e22] hover:bg-[#d35400] text-white font-bold px-7 py-3.5 rounded-full shadow-lg transition-all"
            >
              <Phone className="size-5" />
              Обади се
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
