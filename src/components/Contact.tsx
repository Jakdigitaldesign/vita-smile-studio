import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { CLINIC, WA_MESSAGES, whatsappLink } from "@/lib/site";
import { Reveal } from "./Reveal";
import { WhatsAppIcon } from "./WhatsAppIcon";

export function Contact() {
  return (
    <section id="contato" className="bg-surface py-24 sm:py-32">
      <div className="mx-auto grid max-w-7xl gap-14 px-5 sm:px-8 lg:grid-cols-2 lg:gap-20">
        <Reveal>
          <p className="text-[0.7rem] font-medium uppercase tracking-[0.3em] text-accent">Contato</p>
          <h2 className="mt-5 text-3xl leading-tight text-primary sm:text-4xl lg:text-[2.75rem]">
            Vamos conversar?
          </h2>
          <p className="mt-5 max-w-lg leading-relaxed text-muted-foreground">
            Fale com nossa equipe e agende sua avaliação no melhor horário para você.
          </p>

          <dl className="mt-10 space-y-7">
            <div className="flex gap-4">
              <MapPin className="mt-0.5 size-5 shrink-0 text-accent" aria-hidden="true" />
              <div className="min-w-0">
                <dt className="text-sm font-semibold text-primary">Endereço</dt>
                <dd className="text-sm text-muted-foreground">{CLINIC.address}</dd>
              </div>
            </div>
            <div className="flex gap-4">
              <Phone className="mt-0.5 size-5 shrink-0 text-accent" aria-hidden="true" />
              <div className="min-w-0">
                <dt className="text-sm font-semibold text-primary">Telefone</dt>
                <dd className="text-sm text-muted-foreground">
                  <a className="hover:text-primary" href="tel:+5541999999999">
                    {CLINIC.phone}
                  </a>
                </dd>
              </div>
            </div>
            <div className="flex gap-4">
              <Mail className="mt-0.5 size-5 shrink-0 text-accent" aria-hidden="true" />
              <div className="min-w-0">
                <dt className="text-sm font-semibold text-primary">E-mail</dt>
                <dd className="truncate text-sm text-muted-foreground">
                  <a className="hover:text-primary" href={`mailto:${CLINIC.email}`}>
                    {CLINIC.email}
                  </a>
                </dd>
              </div>
            </div>
            <div className="flex gap-4">
              <Clock className="mt-0.5 size-5 shrink-0 text-accent" aria-hidden="true" />
              <div className="min-w-0">
                <dt className="text-sm font-semibold text-primary">Horário de atendimento</dt>
                <dd className="text-sm text-muted-foreground">
                  Segunda a sexta: 08h às 18h
                  <br />
                  Sábado: 08h às 12h
                </dd>
              </div>
            </div>
          </dl>

          <a
            href={whatsappLink(WA_MESSAGES.contato)}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-10 inline-flex w-full items-center justify-center gap-2.5 rounded-full bg-primary px-8 py-4 text-sm font-medium text-primary-foreground transition-all duration-200 hover:-translate-y-0.5 hover:bg-accent sm:w-auto"
          >
            <WhatsAppIcon className="size-5" />
            Falar pelo WhatsApp
          </a>
        </Reveal>

        <Reveal delay={100}>
          <div className="relative h-full min-h-[22rem] overflow-hidden rounded-[2rem] border border-border bg-mist shadow-soft">
            <svg
              aria-hidden="true"
              viewBox="0 0 400 400"
              className="absolute inset-0 size-full text-primary/15"
            >
              <g stroke="currentColor" strokeWidth="1.5" fill="none">
                <path d="M0 90H400M0 210H400M0 320H400M70 0V400M190 0V400M300 0V400" />
                <path d="M0 40 L400 260" strokeWidth="6" className="text-accent/30" />
              </g>
              <rect x="100" y="110" width="70" height="80" fill="currentColor" opacity="0.35" />
              <rect x="215" y="230" width="60" height="70" fill="currentColor" opacity="0.25" />
            </svg>
            <div className="absolute inset-x-0 bottom-0 flex flex-col gap-3 bg-background/95 px-7 py-6 backdrop-blur sm:flex-row sm:items-center sm:justify-between">
              <div className="min-w-0">
                <p className="text-sm font-semibold text-primary">Odonto Vita — Centro</p>
                <p className="truncate text-sm text-muted-foreground">{CLINIC.address}</p>
              </div>
              <span className="text-xs uppercase tracking-[0.2em] text-accent">Mapa ilustrativo</span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
