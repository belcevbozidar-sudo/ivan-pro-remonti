import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2, Phone } from "lucide-react";
import { PHONE_LINK, SERVICES } from "@/lib/business.ts";

const INCLUDED = [
  "Оглед на място и конкретна препоръка",
  "Подготовка и защита на работната зона",
  "Работа с подходящи материали за основата",
  "Чисто предаване и проверка на детайлите",
];

export default function Services() {
  return (
    <div>
      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="max-w-3xl">
            <span className="text-sm font-semibold text-[#e67e22] uppercase tracking-wider">
              Услуги
            </span>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-foreground mt-3 mb-5">
              Пълен обхват строителни услуги
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              КИД Строй поема строителство и ремонти за жилища, сгради,
              офиси и търговски обекти. Работата започва с безплатен оглед, ясна
              оферта и правилен избор на материали.
            </p>
          </div>
        </div>
      </section>

      <section className="pb-16 sm:pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {SERVICES.map((service) => (
              <article
                key={service.title}
                className="bg-white/70 backdrop-blur-sm rounded-2xl overflow-hidden border border-border/50 hover:shadow-xl hover:border-primary/20 transition-all"
              >
                <div className="aspect-[16/8] overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="size-11 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
                      <service.icon className="size-6" />
                    </div>
                    <h2 className="text-2xl font-bold text-foreground">
                      {service.title}
                    </h2>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    {service.details}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-16 sm:pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-[1fr_0.8fr] gap-8 items-center bg-primary text-primary-foreground rounded-3xl p-8 sm:p-12">
            <div>
              <h2 className="text-3xl font-bold mb-4">
                Какво включва работата?
              </h2>
              <div className="grid sm:grid-cols-2 gap-3">
                {INCLUDED.map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <CheckCircle2 className="size-5 text-[#e67e22] shrink-0" />
                    <span className="text-sm text-white/85">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex flex-wrap gap-3 lg:justify-end">
              <a
                href={PHONE_LINK}
                className="inline-flex items-center gap-2 bg-[#e67e22] hover:bg-[#d35400] text-white font-bold px-7 py-3.5 rounded-full shadow-lg transition-all"
              >
                <Phone className="size-5" />
                Заяви оглед
              </a>
              <Link
                to="/tseni"
                className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-semibold px-7 py-3.5 rounded-full transition-all"
              >
                Виж цени <ArrowRight className="size-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
