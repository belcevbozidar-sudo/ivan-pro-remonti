import { Phone, ChevronDown } from "lucide-react";
import { PHONE_LINK } from "@/lib/business.ts";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="/images/yv-construction-hero.png"
          alt="Майстор боядисва стена - КИД Строй"
          className="w-full h-full object-cover object-[61%_center] sm:object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#1a2744]/95 via-[#1a2744]/70 to-[#1a2744]/25" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#1a2744]/25 via-transparent to-[#1a2744]/35 sm:hidden" />
      </div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-24 sm:py-32 lg:py-40">
        <div className="max-w-2xl space-y-6">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-1.5 text-sm text-white/90">
            <span className="size-2 bg-[#e67e22] rounded-full animate-pulse" />
            Прецизна работа с качествени материали
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight text-balance">
            Строителство и ремонти
          </h1>

          <p className="text-lg sm:text-xl text-white/80 leading-relaxed max-w-xl">
            КИД Строй извършва топлоизолация, вътрешни ремонти, покриви,
            зидария, бетон, плочки, електро, ВиК и монтажни дейности.{" "}
            <span className="text-[#e67e22] font-semibold">
              Оглед и ясна оферта
            </span>{" "}
            преди започване.
          </p>

          {/* CTA buttons */}
          <div className="flex flex-wrap gap-4 pt-2">
            <a
              href={PHONE_LINK}
              className="inline-flex items-center gap-2 bg-[#e67e22] hover:bg-[#d35400] text-white font-bold px-8 py-4 rounded-full shadow-xl shadow-[#e67e22]/30 hover:shadow-2xl hover:shadow-[#e67e22]/40 transition-all text-lg cursor-pointer"
            >
              <Phone className="size-5" />
              Обади се сега
            </a>
            <a
              href="#uslugi"
              className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/30 text-white font-semibold px-8 py-4 rounded-full transition-all text-lg cursor-pointer"
            >
              Виж услуги
            </a>
          </div>

          {/* Trust badges */}
          <div className="flex flex-wrap gap-x-6 gap-y-2 pt-4 text-sm text-white/60">
            <span>&#10003; Безплатен оглед</span>
            <span>&#10003; Коректна оферта</span>
            <span>&#10003; Качествени материали</span>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/40 animate-bounce hidden sm:block">
        <ChevronDown className="size-6" />
      </div>
    </section>
  );
}
