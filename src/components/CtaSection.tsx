import { WA_MESSAGES, whatsappLink } from "@/lib/site";
import { Reveal } from "./Reveal";
import { WhatsAppIcon } from "./WhatsAppIcon";

export function CtaSection() {
  return (
    <section className="px-5 py-20 sm:px-8 sm:py-24">
      <Reveal className="mx-auto max-w-7xl">
        <div className="relative overflow-hidden rounded-[2.5rem] bg-primary px-7 py-16 text-center text-primary-foreground sm:px-16 sm:py-24">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-24 -top-24 size-80 rounded-full bg-accent/25 blur-3xl"
          />
          <div className="relative mx-auto max-w-2xl">
            <h2 className="text-3xl leading-tight sm:text-4xl lg:text-[2.75rem]">
              Pronto para cuidar melhor do seu sorriso?
            </h2>
            <p className="mt-5 leading-relaxed opacity-80">
              Agende uma avaliação e descubra como podemos ajudar você a conquistar um sorriso mais
              saudável e confiante.
            </p>
            <a
              href={whatsappLink(WA_MESSAGES.cta)}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-9 inline-flex w-full items-center justify-center gap-2.5 rounded-full bg-background px-8 py-4 text-sm font-semibold text-primary transition-all duration-200 hover:-translate-y-0.5 hover:bg-secondary sm:w-auto"
            >
              <WhatsAppIcon className="size-5" />
              Agendar minha avaliação
            </a>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
