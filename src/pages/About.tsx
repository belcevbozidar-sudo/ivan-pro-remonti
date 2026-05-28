import { Award, BadgeCheck, ShieldCheck } from "lucide-react";

const VALUES = [
  {
    icon: ShieldCheck,
    title: "Коректност",
    text: "Офертата, сроковете и нужните материали се уточняват предварително.",
  },
  {
    icon: Award,
    title: "Качество",
    text: "Работи се с внимание към основата, технологията и крайния финиш.",
  },
  {
    icon: BadgeCheck,
    title: "Чисто изпълнение",
    text: "Обектът се подготвя и предава подредено, без излишно забавяне.",
  },
];

export default function About() {
  return (
    <div>
      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-sm font-semibold text-[#e67e22] uppercase tracking-wider">
                За нас
              </span>
              <h1 className="text-4xl sm:text-5xl font-extrabold text-foreground mt-3 mb-5">
                КИД Строй - строителство и ремонти
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                КИД Строй извършва всякакъв вид строителни дейности:
                топлоизолация, вътрешни ремонти, плочки и настилки, покриви,
                зидария, бетон, електро, ВиК и монтажни работи. Подходът е ясен:
                безплатен оглед, точна препоръка, коректна оферта и прецизно
                изпълнение.
              </p>
            </div>
            <div className="rounded-3xl overflow-hidden shadow-xl">
              <img
                src="/images/yv-construction-hero.png"
                alt="КИД Строй - строителство и ремонти"
                className="w-full aspect-[4/3] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="pb-16 sm:pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {VALUES.map((value) => (
              <article
                key={value.title}
                className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 border border-border/50"
              >
                <div className="size-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-4">
                  <value.icon className="size-6" />
                </div>
                <h2 className="text-xl font-bold text-foreground mb-2">
                  {value.title}
                </h2>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {value.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
