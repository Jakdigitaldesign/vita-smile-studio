import { Check } from "lucide-react";
import aboutImg from "@/assets/about-clinic.jpg";
import { Reveal } from "./Reveal";

const items = [
  "Atendimento personalizado",
  "Estrutura moderna",
  "Tecnologia odontológica",
  "Equipe especializada",
];

export function About() {
  return (
    <section id="sobre" className="bg-surface py-24 sm:py-32">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-2 lg:gap-20">
        <Reveal className="relative order-2 lg:order-1">
          <div className="relative">
            <div
              aria-hidden="true"
              className="absolute -left-4 -top-4 hidden size-32 rounded-3xl border border-accent/40 sm:block"
            />
            <img
              src={aboutImg}
              loading="lazy"
              width={1104}
              height={1312}
              alt="Recepção acolhedora da clínica Odonto Vita"
              className="relative aspect-[4/5] w-full rounded-[2rem] object-cover shadow-soft"
            />
            <div className="absolute -bottom-6 right-4 flex gap-8 rounded-2xl bg-background px-7 py-5 shadow-lift sm:right-[-1.5rem]">
              <div>
                <p className="font-display text-2xl text-primary">+10 anos</p>
                <p className="text-xs text-muted-foreground">de experiência</p>
              </div>
              <div className="border-l border-border pl-8">
                <p className="font-display text-2xl text-primary">+2.000</p>
                <p className="text-xs text-muted-foreground">pacientes atendidos</p>
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal delay={100} className="order-1 lg:order-2">
          <p className="text-[0.7rem] font-medium uppercase tracking-[0.3em] text-accent">Sobre nós</p>
          <h2 className="mt-5 text-3xl leading-tight text-primary sm:text-4xl lg:text-[2.75rem]">
            Cuidar do seu sorriso é cuidar de você.
          </h2>
          <p className="mt-6 max-w-xl leading-relaxed text-muted-foreground">
            A Odonto Vita nasceu com o propósito de transformar a experiência de ir ao dentista.
            Aqui, cada paciente é recebido de forma individualizada, com atenção aos detalhes,
            tecnologia e profissionais preparados para oferecer um atendimento seguro e acolhedor.
          </p>
          <ul className="mt-9 grid gap-4 sm:grid-cols-2">
            {items.map((i) => (
              <li key={i} className="flex items-center gap-3 text-sm text-primary">
                <span className="grid size-6 shrink-0 place-items-center rounded-full bg-secondary text-primary">
                  <Check className="size-3.5" aria-hidden="true" />
                </span>
                {i}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
