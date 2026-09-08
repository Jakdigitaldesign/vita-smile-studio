import { Instagram, MessageCircle } from "lucide-react";
import marina from "@/assets/dra-marina.jpg";
import rafael from "@/assets/dr-rafael.jpg";
import camila from "@/assets/dra-camila.jpg";
import { WA_MESSAGES, whatsappLink } from "@/lib/site";
import { Reveal } from "./Reveal";

const team = [
  {
    img: marina,
    name: "Dra. Marina Almeida",
    role: "Cirurgiã-Dentista",
    spec: "Especialista em Estética Dental",
    text: "Planejamentos naturais e harmônicos, com foco em resultados que respeitam as características de cada sorriso.",
  },
  {
    img: rafael,
    name: "Dr. Rafael Martins",
    role: "Cirurgião-Dentista",
    spec: "Especialista em Implantodontia",
    text: "Reabilitações orais conduzidas com tecnologia de diagnóstico e acompanhamento próximo em todas as etapas.",
  },
  {
    img: camila,
    name: "Dra. Camila Torres",
    role: "Cirurgiã-Dentista",
    spec: "Especialista em Ortodontia",
    text: "Tratamentos ortodônticos confortáveis para adultos e adolescentes, do alinhamento à função da mordida.",
  },
];

export function Professionals() {
  return (
    <section id="profissionais" className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal className="max-w-2xl">
          <p className="text-[0.7rem] font-medium uppercase tracking-[0.3em] text-accent">Equipe</p>
          <h2 className="mt-5 text-3xl leading-tight text-primary sm:text-4xl lg:text-[2.75rem]">
            Conheça quem cuida do seu sorriso
          </h2>
          <p className="mt-5 leading-relaxed text-muted-foreground">
            Uma equipe preparada para oferecer cuidado, experiência e atenção em cada consulta.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {team.map((p, i) => (
            <Reveal key={p.name} delay={i * 90}>
              <article className="group h-full overflow-hidden rounded-3xl border border-border bg-card transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lift">
                <img
                  src={p.img}
                  loading="lazy"
                  width={800}
                  height={1008}
                  alt={`Retrato profissional de ${p.name}, ${p.spec.toLowerCase()}`}
                  className="aspect-[4/5] w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                />
                <div className="p-7">
                  <h3 className="text-xl text-primary">{p.name}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{p.role}</p>
                  <p className="text-sm font-medium text-accent">{p.spec}</p>
                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{p.text}</p>
                  <div className="mt-6 flex gap-3">
                    <a
                      href="https://instagram.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Instagram de ${p.name}`}
                      className="grid size-9 place-items-center rounded-full border border-border text-muted-foreground transition-colors duration-200 hover:border-accent hover:text-accent"
                    >
                      <Instagram className="size-4" />
                    </a>
                    <a
                      href={whatsappLink(WA_MESSAGES.contato)}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Falar no WhatsApp sobre ${p.name}`}
                      className="grid size-9 place-items-center rounded-full border border-border text-muted-foreground transition-colors duration-200 hover:border-accent hover:text-accent"
                    >
                      <MessageCircle className="size-4" />
                    </a>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
