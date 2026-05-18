import { CheckCircle2, Phone, ShieldCheck } from "lucide-react";
import {
  BUSINESS_NAME,
  BUSINESS_PROMISES,
  HEADER_NOTE,
  PHONE_DISPLAY,
  PHONE_LINK,
  PRICE_CATEGORIES,
  SERVICE_AREA,
} from "@/lib/business.ts";

export default function Prices() {
  return (
    <div className="bg-[#f4f7fb]">
      <section className="relative overflow-hidden bg-[#07111f] py-16 text-white sm:py-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_20%,rgba(220,38,38,0.25),transparent_28%),radial-gradient(circle_at_88%_15%,rgba(37,99,235,0.28),transparent_32%)]" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid gap-10 lg:grid-cols-[1fr_0.8fr] lg:items-end">
            <div className="max-w-3xl">
              <span className="text-sm font-black uppercase tracking-[0.22em] text-amber-300">
                Пълен ценоразпис
              </span>
              <h1 className="mt-3 text-4xl font-black tracking-tight sm:text-6xl">
                Цени за строителство и ремонти
              </h1>
              <p className="mt-5 text-lg leading-relaxed text-white/70">
                {BUSINESS_NAME} предлага ясни начални цени за основните
                строителни дейности. Крайната цена се потвърждава след оглед,
                според състоянието на обекта, достъпа и избраните материали.
              </p>
            </div>

            <div className="rounded-2xl border border-white/12 bg-white/[0.08] p-6 backdrop-blur-md">
              <div className="flex items-center gap-3 text-amber-300">
                <ShieldCheck className="h-5 w-5" />
                <span className="font-black">{HEADER_NOTE}</span>
              </div>
              <a
                href={PHONE_LINK}
                className="mt-5 flex items-center gap-3 text-3xl font-black text-white"
              >
                <Phone className="h-7 w-7 text-[#e63c2f]" />
                {PHONE_DISPLAY}
              </a>
              <p className="mt-4 text-sm font-semibold text-white/55">
                Обадете се за безплатен оглед и консултация. {SERVICE_AREA}.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {PRICE_CATEGORIES.map((category) => (
              <article
                key={category.title}
                className="overflow-hidden rounded-2xl border border-[#dbe5f2] bg-white shadow-xl shadow-[#1a2744]/6"
              >
                <div
                  className="flex items-center gap-3 px-5 py-4 text-white"
                  style={{ backgroundColor: category.accent }}
                >
                  <category.icon className="h-5 w-5" />
                  <h2 className="text-lg font-black">{category.title}</h2>
                </div>

                {category.featured && (
                  <div className="bg-[#e63c2f] px-5 py-4 text-center text-white">
                    <div className="text-sm font-black uppercase tracking-[0.12em]">
                      {category.featured[0]}
                    </div>
                    <div className="mt-1 text-4xl font-black">
                      {category.featured[1]}
                    </div>
                  </div>
                )}

                <div className="divide-y divide-[#dbe5f2] px-5">
                  {category.items.map(([name, price]) => (
                    <div
                      key={name}
                      className="flex items-start justify-between gap-4 py-3 text-sm"
                    >
                      <span className="leading-snug text-[#334155]">
                        {name}
                      </span>
                      <span className="shrink-0 text-right font-black text-[#dc2626]">
                        {price}
                      </span>
                    </div>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-16 sm:pb-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid gap-6 lg:grid-cols-[1fr_0.9fr]">
            <div className="rounded-3xl bg-[#0f1b4d] p-8 text-white shadow-2xl shadow-[#1a2744]/20 sm:p-10">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#2ecc40]">
                <ShieldCheck className="h-7 w-7" />
              </div>
              <h2 className="mt-6 text-3xl font-black">
                Качество, което се гарантира.
              </h2>
              <p className="mt-4 max-w-2xl text-white/65">
                Работим с ясна уговорка, точност в сроковете и гаранция на всяка
                услуга. Цените са ориентир за планиране, а финалната оферта се
                дава след оглед.
              </p>
              <a
                href={PHONE_LINK}
                className="mt-7 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-amber-400 to-[#e63c2f] px-7 py-4 font-black text-white shadow-xl shadow-[#e63c2f]/25"
              >
                <Phone className="h-5 w-5" />
                Обади се за оглед
              </a>
            </div>

            <div className="rounded-3xl border border-[#dbe5f2] bg-white p-8 shadow-xl shadow-[#1a2744]/6 sm:p-10">
              <h2 className="text-2xl font-black text-[#0a1628]">
                Допълнителни гаранции
              </h2>
              <div className="mt-6 grid gap-3">
                {BUSINESS_PROMISES.map((promise) => (
                  <div
                    key={promise}
                    className="flex items-start gap-3 rounded-xl bg-[#f4f7fb] px-4 py-3 text-sm font-bold text-[#334155]"
                  >
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#2ecc40]" />
                    {promise}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
