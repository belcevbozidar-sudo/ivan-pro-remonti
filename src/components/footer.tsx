import { Link } from "react-router-dom";
import { MapPin, Phone, ShieldCheck, Sparkles } from "lucide-react";
import {
  BUSINESS_DESCRIPTION,
  BUSINESS_NAME,
  HEADER_NOTE,
  PHONE_DISPLAY,
  PHONE_LINK,
  SERVICE_AREA,
  SERVICES,
} from "@/lib/business.ts";

const QUICK_LINKS = [
  { label: "Начало", path: "/" },
  { label: "Услуги", path: "/uslugi" },
  { label: "Цени", path: "/tseni" },
  { label: "Галерия", path: "/galeriya" },
  { label: "Контакти", path: "/kontakti" },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden bg-[#07111f] text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_0%,rgba(245,166,35,0.18),transparent_28%),radial-gradient(circle_at_88%_40%,rgba(37,99,235,0.15),transparent_30%)]" />
      <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:py-20">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-[1.2fr_0.8fr_0.8fr_1fr]">
          <div className="space-y-5">
            <div className="flex items-center gap-3">
              <img
                src="/images/yv-logo.png"
                alt={BUSINESS_NAME}
                className="h-14 w-auto max-w-[280px] object-contain"
              />
            </div>
            <p className="max-w-sm text-sm leading-relaxed text-white/58">
              {BUSINESS_DESCRIPTION} Работим чисто, коректно, с гаранция на
              всяка услуга и точност в сроковете.
            </p>
            <div className="space-y-3">
              <a
                href={PHONE_LINK}
                className="flex items-center gap-2.5 text-sm font-semibold text-white/72 transition hover:text-amber-300"
              >
                <Phone className="h-4 w-4" />
                {PHONE_DISPLAY}
              </a>
              <div className="flex items-center gap-2.5 text-sm text-white/50">
                <ShieldCheck className="h-4 w-4" />
                {HEADER_NOTE}
              </div>
              <div className="flex items-center gap-2.5 text-sm text-white/50">
                <MapPin className="h-4 w-4" />
                {SERVICE_AREA}
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-black uppercase tracking-[0.18em] text-white">
              Навигация
            </h4>
            <ul className="mt-5 space-y-3">
              {QUICK_LINKS.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm font-medium text-white/52 transition hover:text-amber-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-black uppercase tracking-[0.18em] text-white">
              Услуги
            </h4>
            <ul className="mt-5 space-y-3">
              {SERVICES.slice(0, 5).map((service) => (
                <li key={service.title}>
                  <Link
                    to="/uslugi"
                    className="text-sm font-medium text-white/52 transition hover:text-amber-300"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/[0.06] p-6 backdrop-blur-md">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#2ecc40] text-white">
              <Sparkles className="h-5 w-5" />
            </div>
            <h4 className="mt-5 text-xl font-black">Оглед и ясна оферта</h4>
            <p className="mt-3 text-sm leading-relaxed text-white/58">
              Обадете се за оглед, консултация и конкретна оферта според
              състоянието на обекта, материалите и желания краен резултат.
            </p>
            <a
              href={PHONE_LINK}
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#f5a623] to-[#e63c2f] px-5 py-3 text-sm font-black text-white shadow-lg shadow-[#e63c2f]/20"
            >
              <Phone className="h-4 w-4" />
              Обади се
            </a>
          </div>
        </div>
      </div>

      <div className="relative border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-4 py-5 text-xs font-medium text-white/38 sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <p>
            &copy; {currentYear} {BUSINESS_NAME}. Всички права запазени.
          </p>
          <p>Строителство и ремонти в цялата страна</p>
        </div>
      </div>
    </footer>
  );
}
