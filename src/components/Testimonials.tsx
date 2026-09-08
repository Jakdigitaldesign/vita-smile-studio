import { Star } from "lucide-react";
import { Reveal } from "./Reveal";

const testimonials = [
  {
    text: "Desde a primeira consulta fui muito bem atendida. Toda a equipe é extremamente atenciosa e o resultado do tratamento superou minhas expectativas.",
    name: "Mariana S.",
  },
  {
    text: "Sempre tive receio de ir ao dentista. Na Odonto Vita me explicaram cada etapa com calma e hoje faço meu acompanhamento tranquila.",
    name: "Eduardo P.",
  },
  {
    text: "Clínica impecável, horários respeitados e um cuidado com os detalhes que faz toda a diferença. Recomendo de olhos fechados.",
    name: "Larissa M.",
  },
];

export function Testimonials() {
  return (
    <section className="bg-surface py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal className="max-w-2xl">
          <p className="text-[0.7rem] font-medium uppercase tracking-[0.3em] text-accent">
            Depoimentos
          </p>
          <h2 className="mt-5 text-3xl leading-tight text-primary sm:text-4xl lg:text-[2.75rem]">
            O sorriso de quem confia na Odonto Vita
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={i * 80}>
              <figure className="flex h-full flex-col rounded-3xl border border-border bg-background p-8 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lift">
                <div className="flex gap-0.5 text-accent" aria-label="5 de 5 estrelas">
                  {Array.from({ length: 5 }).map((_, k) => (
                    <Star key={k} className="size-4 fill-current" aria-hidden="true" />
                  ))}
                </div>
                <blockquote className="mt-5 flex-1 text-[0.95rem] leading-relaxed text-muted-foreground">
                  “{t.text}”
                </blockquote>
                <figcaption className="mt-6 text-sm font-semibold text-primary">— {t.name}</figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
        <p className="mt-8 text-xs text-muted-foreground">
          Depoimentos meramente demonstrativos, criados para este projeto fictício.
        </p>
      </div>
    </section>
  );
}
