import { HeartHandshake, Home, MonitorSmartphone, ClipboardList } from "lucide-react";
import { Reveal } from "./Reveal";

const items = [
  {
    icon: HeartHandshake,
    title: "Atendimento Humanizado",
    text: "Você é ouvido e acompanhado em cada etapa do tratamento.",
  },
  {
    icon: MonitorSmartphone,
    title: "Tecnologia",
    text: "Equipamentos modernos para diagnósticos e tratamentos mais precisos.",
  },
  {
    icon: ClipboardList,
    title: "Plano Personalizado",
    text: "Cada sorriso recebe um planejamento de acordo com suas necessidades.",
  },
  {
    icon: Home,
    title: "Ambiente Acolhedor",
    text: "Um espaço pensado para tornar sua experiência mais tranquila e confortável.",
  },
];

export function Differentials() {
  return (
    <section className="bg-mist py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal className="max-w-2xl">
          <p className="text-[0.7rem] font-medium uppercase tracking-[0.3em] text-primary/60">
            Diferenciais
          </p>
          <h2 className="mt-5 text-3xl leading-tight text-primary sm:text-4xl lg:text-[2.75rem]">
            Uma experiência diferente no cuidado odontológico
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((it, i) => (
            <Reveal key={it.title} delay={i * 70}>
              <div className="h-full rounded-3xl bg-background p-8 shadow-soft transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lift">
                <it.icon className="size-6 text-accent" aria-hidden="true" />
                <h3 className="mt-6 text-lg text-primary">{it.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{it.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
