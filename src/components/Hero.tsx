import { Star } from "lucide-react";
import heroImg from "@/assets/hero-clinic.jpg";
import { WA_MESSAGES, whatsappLink } from "@/lib/site";
import { Reveal } from "./Reveal";

const trust = ["Atendimento humanizado", "Profissionais especializados", "Tecnologia moderna"];

export function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden pt-28 sm:pt-32 lg:pt-40">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 -top-40 size-[34rem] rounded-full bg-secondary/60 blur-3xl"
      />
      <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-5 pb-20 sm:px-8 lg:grid-cols-2 lg:gap-16 lg:pb-28">
        <Reveal>
          <p className="text-[0.7rem] font-medium uppercase tracking-[0.3em] text-accent">
            Odontologia • Cuidado • Confiança
          </p>
          <h1 className="mt-6 text-4xl leading-[1.08] text-primary sm:text-5xl lg:text-6xl">
            Seu sorriso merece um cuidado especial.
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            Na Odonto Vita, unimos tecnologia, experiência e atendimento humanizado para cuidar do
            seu sorriso em todas as fases da vida.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a
              href={whatsappLink(WA_MESSAGES.hero)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-primary px-8 py-4 text-sm font-medium text-primary-foreground shadow-soft transition-all duration-200 hover:-translate-y-0.5 hover:bg-accent hover:shadow-lift"
            >
              Agendar avaliação
            </a>
            <a
              href="#sobre"
              className="inline-flex items-center justify-center rounded-full border border-border bg-background px-8 py-4 text-sm font-medium text-primary transition-all duration-200 hover:-translate-y-0.5 hover:border-accent hover:bg-muted"
            >
              Conheça a clínica
            </a>
          </div>

          <ul className="mt-10 flex flex-wrap gap-x-7 gap-y-3">
            {trust.map((t) => (
              <li key={t} className="flex items-center gap-2 text-sm text-muted-foreground">
                <span aria-hidden="true" className="size-1.5 rounded-full bg-accent" />
                {t}
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={120} className="relative">
          <div className="relative">
            <img
              src={heroImg}
              width={1200}
              height={1408}
              alt="Dentista da Odonto Vita conversando com uma paciente em consultório moderno"
              className="aspect-[4/5] w-full rounded-[2rem] object-cover shadow-lift sm:aspect-[5/6]"
            />
            <div className="absolute -left-3 top-8 rounded-2xl bg-background/95 px-5 py-4 shadow-lift backdrop-blur sm:left-[-2rem]">
              <div className="flex gap-0.5 text-accent" aria-hidden="true">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="size-3.5 fill-current" />
                ))}
              </div>
              <p className="mt-1.5 text-sm font-semibold text-primary">4.9/5 avaliações</p>
              <p className="text-xs text-muted-foreground">de pacientes reais</p>
            </div>
            <div className="absolute -right-2 bottom-8 rounded-2xl bg-primary px-5 py-4 text-primary-foreground shadow-lift sm:right-[-1.5rem]">
              <p className="text-sm font-medium">Atendimento personalizado</p>
              <p className="text-xs opacity-70">em cada consulta</p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
