import { Phone, MapPin, ShieldCheck, CheckCircle2 } from "lucide-react";
import { PHONE_DISPLAY, PHONE_LINK } from "@/lib/business.ts";

const DETAILS = [
  {
    icon: Phone,
    title: "Телефон",
    text: PHONE_DISPLAY,
  },
  {
    icon: MapPin,
    title: "Локация",
    text: "Обекти по договорка в България",
  },
  {
    icon: ShieldCheck,
    title: "Оглед",
    text: "Удобен час след обаждане",
  },
];

const CHECKLIST = [
  "каква услуга ви трябва",
  "адрес или район на обекта",
  "приблизителна квадратура",
  "дали има влага, пукнатини или стара боя",
];

export default function Contact() {
  return (
    <div>
      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-[1fr_0.8fr] gap-10 items-start">
            <div>
              <span className="text-sm font-semibold text-[#e67e22] uppercase tracking-wider">
                Контакти
              </span>
              <h1 className="text-4xl sm:text-5xl font-extrabold text-foreground mt-3 mb-5">
                Обадете се за оглед и оферта
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                Най-бързият начин за връзка е по телефон. След кратък разговор
                уточняваме услугата, адреса и удобен час за оглед.
              </p>
              <a
                href={PHONE_LINK}
                className="inline-flex items-center gap-2 bg-[#e67e22] hover:bg-[#d35400] text-white font-bold px-8 py-4 rounded-full shadow-xl shadow-[#e67e22]/30 transition-all text-lg"
              >
                <Phone className="size-5" />
                {PHONE_DISPLAY}
              </a>
            </div>

            <div className="bg-white/70 backdrop-blur-sm border border-border/50 rounded-3xl p-6 space-y-4">
              {DETAILS.map((item) => (
                <div key={item.title} className="flex gap-4">
                  <div className="size-11 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
                    <item.icon className="size-5" />
                  </div>
                  <div>
                    <h2 className="font-bold text-foreground">{item.title}</h2>
                    <p className="text-sm text-muted-foreground">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="pb-16 sm:pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="bg-primary text-primary-foreground rounded-3xl p-8 sm:p-12">
            <h2 className="text-2xl font-bold mb-5">
              Полезно е да кажете по телефона:
            </h2>
            <div className="grid sm:grid-cols-2 gap-3">
              {CHECKLIST.map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <CheckCircle2 className="size-5 text-[#e67e22] shrink-0" />
                  <span className="text-sm text-white/85">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
