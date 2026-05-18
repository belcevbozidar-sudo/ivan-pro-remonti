import {
  ArrowRight,
  Brush,
  CheckCircle2,
  Droplets,
  Hammer,
  Home,
  Layers3,
  PaintBucket,
  Phone,
  ShieldCheck,
  Sparkles,
  Star,
  Timer,
  Wrench,
} from "lucide-react";
import { motion } from "motion/react";
import { Link } from "react-router-dom";
import {
  BUSINESS_DESCRIPTION,
  BUSINESS_NAME,
  BUSINESS_PROMISES,
  HEADER_NOTE,
  PHONE_DISPLAY,
  PHONE_LINK,
  PRICE_CATEGORIES,
  SERVICE_AREA,
} from "@/lib/business.ts";

const heroImage = "/images/yv-construction-hero.png";

const services = [
  {
    icon: ShieldCheck,
    title: "Външна топлоизолация",
    text: "EPS системи, каменна вата, дюбелиране, мрежа, шпакловка и декоративна мазилка.",
    color: "from-[#e63c2f] to-[#f5a623]",
    image: "/images/services/external-insulation.png",
  },
  {
    icon: Brush,
    title: "Вътрешни ремонти",
    text: "Шпакловка, боядисване, гипсокартон, окачени тавани и вътрешна изолация.",
    color: "from-[#2563eb] to-[#22c55e]",
    image: "/images/services/interior-renovation.png",
  },
  {
    icon: Layers3,
    title: "Плочки и настилки",
    text: "Лепене на плочки, фугиране, ламинат, винил и паркет с подготвена основа.",
    color: "from-[#f5a623] to-[#facc15]",
    image: "/images/services/tiles-flooring.png",
  },
  {
    icon: Hammer,
    title: "Покриви и груб строеж",
    text: "Покриви, зидария, бетон, огради, къртене, електро, ВиК и монтажни дейности.",
    color: "from-[#0ea5e9] to-[#2ecc40]",
    image: "/images/services/roof-structure.png",
  },
];

const process = [
  [
    "01",
    "Безплатен оглед",
    "Виждаме обекта, основата и детайлите, които променят цената.",
  ],
  [
    "02",
    "Ясна оферта",
    "Получавате конкретен обхват, материали, срок и последователност.",
  ],
  [
    "03",
    "Чисто изпълнение",
    "Покриване, подготовка, работа по етапи и подредено приключване.",
  ],
  [
    "04",
    "Финален преглед",
    "Минаваме заедно през резултата, ръбовете, финиша и детайлите.",
  ],
];

const gallery = [
  {
    title: "Гладък интериорен финиш",
    image: "/images/gallery/interior-finish.png",
  },
  {
    title: "Свежо боядисване",
    image: "/images/gallery/painting-finish.png",
  },
  {
    title: "Фасадна защита",
    image: "/images/gallery/facade-finish.png",
  },
];

export default function Index() {
  const featuredPrices = PRICE_CATEGORIES.slice(0, 4);

  return (
    <div className="overflow-hidden bg-[#f4f7fb]">
      <section className="relative min-h-[calc(100vh-4rem)] overflow-hidden bg-[#0a1628] pt-24 sm:pt-28">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt={`${BUSINESS_NAME} - строителство и ремонти`}
            className="h-full w-full object-cover object-[62%_center] sm:object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#07111f]/95 via-[#0f1b4d]/78 to-[#1a2a6c]/35" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_82%_20%,rgba(245,166,35,0.26),transparent_28%),radial-gradient(circle_at_15%_75%,rgba(46,204,64,0.15),transparent_30%)]" />
        </div>

        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 pb-16 pt-12 sm:px-6 sm:pb-20 lg:grid-cols-[1.05fr_0.95fr] lg:pb-24 lg:pt-18">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="max-w-3xl"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-semibold text-amber-200 backdrop-blur-md">
              <span className="h-2 w-2 rounded-full bg-[#2ecc40]" />
              {BUSINESS_NAME} - строителство и ремонти
            </div>

            <h1 className="mt-7 text-balance text-4xl font-black leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-7xl">
              Всякакъв вид{" "}
              <span className="bg-gradient-to-r from-amber-300 via-[#f5a623] to-[#e63c2f] bg-clip-text text-transparent">
                строителни дейности
              </span>
            </h1>

            <p className="mt-6 max-w-2xl border-l-4 border-[#f5a623] pl-5 text-lg leading-relaxed text-white/78 sm:text-xl">
              {BUSINESS_DESCRIPTION} Обадете се за безплатен оглед, консултация
              и точна цена според обекта.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a
                href={PHONE_LINK}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#f5a623] to-[#e63c2f] px-7 py-4 text-base font-black text-white shadow-xl shadow-[#e63c2f]/25 transition hover:scale-[1.02]"
              >
                <Phone className="h-5 w-5" />
                {PHONE_DISPLAY}
              </a>
              <Link
                to="/tseni"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/25 bg-white/10 px-7 py-4 text-base font-bold text-white backdrop-blur-md transition hover:bg-white/18"
              >
                Виж всички цени
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>

            <div className="mt-10 grid max-w-xl grid-cols-3 gap-4 text-white">
              {[
                ["100%", "коректност"],
                ["100%", "гаранция"],
                ["цялата", "страна"],
              ].map(([number, label]) => (
                <div
                  key={label}
                  className="border-l border-white/20 bg-white/[0.06] px-4 py-3 backdrop-blur-sm"
                >
                  <div className="text-2xl font-black text-amber-300">
                    {number}
                  </div>
                  <div className="mt-1 text-xs font-semibold uppercase text-white/55">
                    {label}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 32 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="hidden lg:block"
          >
            <div className="relative ml-auto max-w-md rounded-[2rem] border border-white/15 bg-white/[0.08] p-5 shadow-2xl shadow-black/25 backdrop-blur-xl">
              <div className="grid grid-cols-2 gap-3">
                {[
                  [PaintBucket, "Чист финиш", "#e63c2f"],
                  [Wrench, "Коректна работа", "#f5a623"],
                  [Timer, "Точен срок", "#2ecc40"],
                  [Home, "Дом и бизнес", "#2563eb"],
                ].map(([Icon, label, color]) => (
                  <div
                    key={label as string}
                    className="min-h-36 rounded-2xl border border-white/12 bg-white/[0.08] p-4"
                  >
                    <div
                      className="mb-8 flex h-11 w-11 items-center justify-center rounded-xl text-white"
                      style={{ backgroundColor: color as string }}
                    >
                      <Icon className="h-5 w-5" />
                    </div>
                    <div className="text-lg font-black text-white">
                      {label as string}
                    </div>
                    <div className="mt-1 text-sm text-white/55">
                      {BUSINESS_NAME}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="border-y border-[#d9e2ef] bg-white">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-4 px-4 py-6 sm:grid-cols-3 sm:px-6">
          {[
            [CheckCircle2, "Безплатен оглед"],
            [ShieldCheck, "100% гаранция"],
            [Sparkles, SERVICE_AREA],
          ].map(([Icon, text]) => (
            <div
              key={text as string}
              className="flex items-center gap-3 text-[#1a2744]"
            >
              <Icon className="h-5 w-5 text-[#2ecc40]" />
              <span className="font-bold">{text as string}</span>
            </div>
          ))}
        </div>
      </section>

      <section id="uslugi" className="relative py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="mx-auto mb-14 max-w-3xl text-center">
            <span className="text-xs font-black uppercase tracking-[0.22em] text-[#e63c2f]">
              Какво предлагаме
            </span>
            <h2 className="mt-3 text-3xl font-black tracking-tight text-[#0a1628] sm:text-5xl">
              Строителство и ремонти
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-[#526174]">
              Поемаме както довършителни ремонти, така и по-широк обхват от
              строителни дейности - от топлоизолация и настилки до покриви,
              зидария, електро и ВиК.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {services.map((service, index) => (
              <motion.article
                key={service.title}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                className="group overflow-hidden rounded-2xl border border-[#dbe5f2] bg-white shadow-lg shadow-[#1a2744]/5 transition hover:-translate-y-1 hover:shadow-2xl hover:shadow-[#1a2744]/12"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628]/78 to-transparent" />
                  <div
                    className={`absolute left-4 top-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${service.color} text-white shadow-lg`}
                  >
                    <service.icon className="h-6 w-6" />
                  </div>
                  <h3 className="absolute bottom-4 left-4 right-4 text-2xl font-black text-white">
                    {service.title}
                  </h3>
                </div>
                <p className="p-5 text-sm leading-relaxed text-[#526174]">
                  {service.text}
                </p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid gap-10 lg:grid-cols-[0.88fr_1.12fr] lg:items-start">
            <div>
              <span className="text-xs font-black uppercase tracking-[0.22em] text-[#e63c2f]">
                Ценоразпис
              </span>
              <h2 className="mt-3 text-3xl font-black tracking-tight text-[#0a1628] sm:text-5xl">
                Ясни начални цени за основните строителни дейности.
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-[#526174]">
                На страницата с цени ще намерите пълния ценоразпис за
                топлоизолация, вътрешни ремонти, плочки, покриви, зидария,
                електро, ВиК и допълнителни условия. Крайната оферта се
                потвърждава след оглед на обекта.
              </p>

              <div className="mt-7 flex flex-col gap-3 text-sm font-bold text-[#1a2744] sm:flex-row sm:flex-wrap">
                <span className="rounded-full bg-[#eef4ff] px-4 py-2">
                  {HEADER_NOTE}
                </span>
                <span className="rounded-full bg-[#fff4e0] px-4 py-2">
                  Безплатен оглед
                </span>
              </div>

              <Link
                to="/tseni"
                className="mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#0f1b4d] to-[#2563eb] px-7 py-4 text-base font-black text-white shadow-xl shadow-[#1a2744]/18 transition hover:scale-[1.02]"
              >
                Виж всички цени
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {featuredPrices.map((category) => (
                <article
                  key={category.title}
                  className="overflow-hidden rounded-2xl border border-[#dbe5f2] bg-[#f8fbff] shadow-lg shadow-[#1a2744]/5"
                >
                  <div
                    className="flex items-center gap-3 px-5 py-4 text-white"
                    style={{ backgroundColor: category.accent }}
                  >
                    <category.icon className="h-5 w-5" />
                    <h3 className="font-black">{category.title}</h3>
                  </div>
                  <div className="divide-y divide-[#dbe5f2] px-5">
                    {category.items.slice(0, 4).map(([name, price]) => (
                      <div
                        key={name}
                        className="flex items-start justify-between gap-4 py-3 text-sm"
                      >
                        <span className="text-[#526174]">{name}</span>
                        <span className="shrink-0 font-black text-[#dc2626]">
                          {price}
                        </span>
                      </div>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#0f1b4d] py-20 text-white sm:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <span className="text-xs font-black uppercase tracking-[0.22em] text-amber-300">
              Метод на работа
            </span>
            <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-5xl">
              Спокойна последователност от оглед до финален детайл.
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-white/65">
              Преди да започнем уточняваме обхвата, материалите, сроковете и
              начина на работа. Така клиентът знае какво следва, а обектът върви
              спокойно и подредено.
            </p>
            <div className="mt-7 grid gap-3 text-sm font-bold text-white/72">
              {BUSINESS_PROMISES.slice(0, 5).map((promise) => (
                <div key={promise} className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-[#2ecc40]" />
                  {promise}
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {process.map(([number, title, text]) => (
              <div
                key={number}
                className="rounded-2xl border border-white/12 bg-white/[0.07] p-6 backdrop-blur-md"
              >
                <div className="text-sm font-black text-amber-300">
                  {number}
                </div>
                <h3 className="mt-4 text-xl font-black">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/60">
                  {text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="mb-10 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
            <div className="max-w-2xl">
              <span className="text-xs font-black uppercase tracking-[0.22em] text-[#2563eb]">
                Галерия
              </span>
              <h2 className="mt-3 text-3xl font-black tracking-tight text-[#0a1628] sm:text-5xl">
                Резултатът личи в детайлите.
              </h2>
            </div>
            <div className="flex items-center gap-2 text-sm font-bold text-[#526174]">
              <Star className="h-5 w-5 fill-[#f5a623] text-[#f5a623]" />
              Чист финиш, добри ръбове, подреден обект
            </div>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {gallery.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                className="group relative min-h-80 overflow-hidden rounded-2xl"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628]/85 via-[#0a1628]/25 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-2xl font-black text-white">
                    {item.title}
                  </h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white pb-20 sm:pb-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="overflow-hidden rounded-[2rem] bg-[#0a1628] p-8 text-white shadow-2xl shadow-[#1a2744]/20 sm:p-12 lg:p-16">
            <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-center">
              <div>
                <span className="text-xs font-black uppercase tracking-[0.22em] text-amber-300">
                  Свържете се с нас
                </span>
                <h2 className="mt-3 max-w-3xl text-3xl font-black tracking-tight sm:text-5xl">
                  Нуждаете се от ремонт или строителна услуга?
                </h2>
                <p className="mt-5 max-w-2xl text-lg leading-relaxed text-white/65">
                  Обадете се за оглед и конкретна оферта. Ще обсъдим обекта,
                  материалите, сроковете и най-подходящото решение за вашия дом
                  или бизнес.
                </p>
              </div>
              <a
                href={PHONE_LINK}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-amber-400 to-[#e63c2f] px-8 py-4 text-lg font-black text-white shadow-xl shadow-[#e63c2f]/25 transition hover:scale-[1.02]"
              >
                <Phone className="h-5 w-5" />
                Обади се сега
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
