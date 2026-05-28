import { AlertTriangle, XCircle, Phone } from "lucide-react";
import { PHONE_LINK } from "@/lib/business.ts";

const MISTAKES = [
  {
    title: "Подозрително ниски цени",
    description:
      "Ако цената звучи твърде добре, за да е истина – вероятно е. Ниските цени обикновено означават лоши материали или скрити разходи.",
  },
  {
    title: "Липса на договор и гаранция",
    description:
      "Коректната фирма винаги предлага писмен договор и гаранция за извършената работа. Без документ – без защита.",
  },
  {
    title: "Искане на цялата сума предварително",
    description:
      "Никога не плащайте цялата сума авансово. Качествените фирми работят на етапи или с плащане при завършване.",
  },
  {
    title: "Неясни допълнителни разходи",
    description:
      "Ако офертата не е достатъчно подробна, рискувате да платите значително повече от първоначалната цена.",
  },
  {
    title: "Липса на опит и препоръки",
    description:
      "Шпакловката, боядисването и изолациите изискват подготовка и технология. Доверете се на майстор с практика.",
  },
];

export default function MistakesSection() {
  return (
    <section className="py-16 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Content */}
          <div className="space-y-6">
            <div>
              <span className="text-sm font-semibold text-[#e67e22] uppercase tracking-wider">
                Полезно
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mt-2">
                Често срещани грешки при избора на фирма
              </h2>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              Изборът на правилния майстор е важен за крайния вид и
              дълготрайността на ремонта. Ето какво да избягвате:
            </p>
            <div className="space-y-4">
              {MISTAKES.map((mistake) => (
                <div
                  key={mistake.title}
                  className="flex gap-4 bg-white/70 backdrop-blur-sm rounded-xl p-4 border border-border/50"
                >
                  <div className="shrink-0">
                    <XCircle className="size-6 text-destructive mt-0.5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">
                      {mistake.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {mistake.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Card */}
          <div className="sticky top-24">
            <div className="bg-primary text-primary-foreground rounded-3xl p-8 space-y-6 shadow-2xl">
              <div className="size-14 rounded-2xl bg-white/10 flex items-center justify-center">
                <AlertTriangle className="size-7" />
              </div>
              <h3 className="text-2xl font-bold">Изберете правилно!</h3>
              <p className="text-white/80 leading-relaxed">
                КИД Строй работи коректно, с ясна оферта и качествени
                материали. Получавате оглед и конкретни стъпки преди началото.
              </p>
              <ul className="space-y-2.5 text-sm text-white/80">
                <li className="flex items-center gap-2.5">
                  <span className="size-1.5 rounded-full bg-[#e67e22]" />
                  Безплатен оглед
                </li>
                <li className="flex items-center gap-2.5">
                  <span className="size-1.5 rounded-full bg-[#e67e22]" />
                  Ясна цена и срокове
                </li>
                <li className="flex items-center gap-2.5">
                  <span className="size-1.5 rounded-full bg-[#e67e22]" />
                  Качествени материали
                </li>
                <li className="flex items-center gap-2.5">
                  <span className="size-1.5 rounded-full bg-[#e67e22]" />
                  Прецизно довършване
                </li>
              </ul>
              <a
                href={PHONE_LINK}
                className="inline-flex items-center gap-2 bg-[#e67e22] hover:bg-[#d35400] text-white font-bold px-8 py-4 rounded-full shadow-lg transition-all w-full justify-center text-lg cursor-pointer"
              >
                <Phone className="size-5" />
                Обади се сега
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
