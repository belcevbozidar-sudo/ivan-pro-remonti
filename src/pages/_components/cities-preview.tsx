import { Link } from "react-router-dom";
import { MapPin, ArrowRight } from "lucide-react";
import { SERVICE_AREAS } from "@/lib/business.ts";

export default function CitiesPreview() {
  return (
    <section className="py-16 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="bg-primary/5 rounded-3xl p-8 sm:p-12 border border-primary/10">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            {/* Content */}
            <div className="space-y-5">
              <div>
                <span className="text-sm font-semibold text-[#e67e22] uppercase tracking-wider">
                  Покритие
                </span>
                <h2 className="text-3xl sm:text-4xl font-bold text-foreground mt-2">
                  Работим в цялата страна
                </h2>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                КИД Строй поема обекти за шпакловка, боядисване и изолации
                по договорка. Обадете се, за да уточним адрес, обем и срок.
              </p>
              <Link
                to="/kade-rabotim"
                className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all cursor-pointer"
              >
                Виж всички градове <ArrowRight className="size-5" />
              </Link>
            </div>

            {/* City tags */}
            <div className="flex flex-wrap gap-2">
              {SERVICE_AREAS.map((city) => (
                <Link
                  key={city}
                  to="/kade-rabotim"
                  className="inline-flex items-center gap-1.5 bg-white/80 border border-border/50 rounded-full px-4 py-2 text-sm font-medium text-foreground hover:bg-primary hover:text-white hover:border-primary transition-all cursor-pointer"
                >
                  <MapPin className="size-3.5" />
                  {city}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
