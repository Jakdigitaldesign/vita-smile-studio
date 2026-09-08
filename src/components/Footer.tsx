import { Instagram } from "lucide-react";
import { NAV_LINKS, WA_MESSAGES, whatsappLink } from "@/lib/site";
import { ToothMark } from "./ToothMark";
import { WhatsAppIcon } from "./WhatsAppIcon";

export function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-2.5">
              <span className="grid size-9 shrink-0 place-items-center rounded-full bg-secondary text-primary">
                <ToothMark className="size-5" />
              </span>
              <span className="text-sm font-semibold tracking-[0.22em] text-primary">
                ODONTO VITA
              </span>
            </div>
            <p className="mt-4 max-w-xs text-sm text-muted-foreground">Seu sorriso em boas mãos.</p>
          </div>

          <nav aria-label="Links do rodapé">
            <h2 className="font-sans text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              Navegação
            </h2>
            <ul className="mt-4 space-y-2.5">
              {NAV_LINKS.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="text-sm text-muted-foreground transition-colors duration-200 hover:text-primary"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="font-sans text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              Redes
            </h2>
            <div className="mt-4 flex gap-3">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram da Odonto Vita"
                className="grid size-10 place-items-center rounded-full border border-border text-muted-foreground transition-colors duration-200 hover:border-accent hover:text-accent"
              >
                <Instagram className="size-4" />
              </a>
              <a
                href={whatsappLink(WA_MESSAGES.contato)}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp da Odonto Vita"
                className="grid size-10 place-items-center rounded-full border border-border text-muted-foreground transition-colors duration-200 hover:border-accent hover:text-accent"
              >
                <WhatsAppIcon className="size-4" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-border pt-7 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-muted-foreground">
            © 2026 Odonto Vita. Todos os direitos reservados.
          </p>
          <a
            href="#inicio"
            className="text-xs text-muted-foreground transition-colors duration-200 hover:text-primary"
          >
            Política de Privacidade
          </a>
        </div>
      </div>
    </footer>
  );
}
