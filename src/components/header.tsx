import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, Phone, ShieldCheck, X } from "lucide-react";
import { HEADER_NOTE, PHONE_DISPLAY, PHONE_LINK } from "@/lib/business.ts";

const NAV_ITEMS = [
  { label: "Начало", path: "/" },
  { label: "Услуги", path: "/uslugi" },
  { label: "Цени", path: "/tseni" },
  { label: "Къде работим", path: "/kade-rabotim" },
  { label: "Галерия", path: "/galeriya" },
  { label: "Контакти", path: "/kontakti" },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 12);
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileOpen(false);
  }, [location.pathname]);

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-all duration-300 ${
        isScrolled
          ? "border-[#dbe5f2] bg-white/92 text-[#0a1628] shadow-lg shadow-[#1a2744]/8 backdrop-blur-xl"
          : "border-white/10 bg-[#0a1628]/88 text-white backdrop-blur-xl"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="relative flex h-16 items-center justify-between gap-4 sm:h-20">
          <a
            href={PHONE_LINK}
            className={`inline-flex h-10 w-10 items-center justify-center rounded-full transition sm:hidden ${
              isScrolled
                ? "bg-[#f5a623]/12 text-[#e63c2f]"
                : "bg-white/10 text-white"
            }`}
            aria-label="Обади се"
          >
            <Phone className="h-5 w-5" />
          </a>

          <Link
            to="/"
            className="absolute left-1/2 flex -translate-x-1/2 items-center justify-center sm:static sm:translate-x-0"
            aria-label="YV Construction - начална страница"
          >
            <img
              src="/images/yv-logo.png"
              alt="YV Construction"
              className="h-10 w-auto max-w-[190px] object-contain sm:h-12 sm:max-w-[250px] lg:h-14 lg:max-w-[285px]"
            />
          </Link>

          <nav className="hidden items-center gap-1 lg:flex">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`rounded-full px-3.5 py-2 text-sm font-bold transition ${
                  location.pathname === item.path
                    ? isScrolled
                      ? "bg-[#0a1628] text-white"
                      : "bg-white/16 text-white"
                    : isScrolled
                      ? "text-[#526174] hover:bg-[#eef4ff] hover:text-[#0a1628]"
                      : "text-white/72 hover:bg-white/10 hover:text-white"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <div
              className={`hidden items-center gap-2 rounded-full px-3 py-2 text-xs font-bold xl:flex ${
                isScrolled
                  ? "bg-[#eef4ff] text-[#526174]"
                  : "bg-white/10 text-white/70"
              }`}
            >
              <ShieldCheck className="h-4 w-4" />
              {HEADER_NOTE}
            </div>
            <a
              href={PHONE_LINK}
              className="hidden items-center gap-2 rounded-full bg-gradient-to-r from-[#f5a623] to-[#e63c2f] px-5 py-2.5 text-sm font-black text-white shadow-lg shadow-[#e63c2f]/20 transition hover:scale-[1.02] sm:inline-flex"
            >
              <Phone className="h-4 w-4" />
              {PHONE_DISPLAY}
            </a>

            <button
              onClick={() => setIsMobileOpen((open) => !open)}
              className={`inline-flex h-10 w-10 items-center justify-center rounded-xl transition lg:hidden ${
                isScrolled
                  ? "text-[#0a1628] hover:bg-[#eef4ff]"
                  : "text-white hover:bg-white/10"
              }`}
              aria-label="Меню"
            >
              {isMobileOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {isMobileOpen && (
        <div
          className={`border-t lg:hidden ${
            isScrolled
              ? "border-[#dbe5f2] bg-white/96"
              : "border-white/10 bg-[#0a1628]/96"
          } backdrop-blur-xl`}
        >
          <nav className="mx-auto max-w-7xl space-y-1 px-4 py-4">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`block rounded-xl px-4 py-3 text-base font-bold transition ${
                  location.pathname === item.path
                    ? isScrolled
                      ? "bg-[#0a1628] text-white"
                      : "bg-white/16 text-white"
                    : isScrolled
                      ? "text-[#526174] hover:bg-[#eef4ff]"
                      : "text-white/72 hover:bg-white/10 hover:text-white"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
