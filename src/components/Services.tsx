import { ArrowUpRight, Braces, Gem, Smile, Sparkles, Stethoscope, Wind } from "lucide-react";
import { WA_MESSAGES, whatsappLink } from "@/lib/site";
import { Reveal } from "./Reveal";

const services = [
  {
    icon: Stethoscope,
    title: "Clínica Geral",
    text: "Prevenção, diagnóstico e cuidados essenciais para manter sua saúde bucal.",
  },
  {
    icon: Wind,
    title: "Limpeza e Prevenção",
    text: "Cuidados preventivos para manter dentes e gengivas saudáveis.",
  },
  {
    icon: Sparkles,
    title: "Clareamento Dental",
    text: "Tratamento estético para recuperar a luminosidade e deixar seu sorriso mais confiante.",
  },
  {
    icon: Braces,
    title: "Ortodontia",
    text: "Soluções para alinhar os dentes e melhorar a função e a estética do sorriso.",
  },
  {
    icon: Gem,
    title: "Implantes Dentários",
    text: "Reabilitação oral com planejamento personalizado e segurança.",
  },
  {
    icon: Smile,
    title: "Estética Dental",
    text: "Procedimentos para harmonizar o sorriso de forma natural.",
  },
];

export function Services() {
  return (
    <section id="servicos" className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal className="max-w-2xl">
          <p className="text-[0.7rem] font-medium uppercase tracking-[0.3em] text-accent">Serviços</p>
          <h2 className="mt-5 text-3xl leading-tight text-primary sm:text-4xl lg:text-[2.75rem]">
            Soluções para cuidar do seu sorriso
          </h2>
          <p className="mt-5 leading-relaxed text-muted-foreground">
            Tratamentos pensados para oferecer saúde, estética e bem-estar em todas as etapas.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={i * 70}>
              <article className="group h-full rounded-3xl border border-border bg-card p-8 transition-all duration-300 hover:-translate-y-1.5 hover:border-accent/50 hover:shadow-lift">
                <span className="grid size-12 place-items-center rounded-2xl bg-secondary text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
                  <s.icon className="size-5" aria-hidden="true" />
                </span>
                <h3 className="mt-6 text-xl text-primary">{s.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.text}</p>
                <a
                  href={whatsappLink(WA_MESSAGES.servicos)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-accent transition-colors duration-200 hover:text-primary"
                >
                  Saiba mais
                  <ArrowUpRight className="size-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  <span className="sr-only">sobre {s.title}</span>
                </a>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
