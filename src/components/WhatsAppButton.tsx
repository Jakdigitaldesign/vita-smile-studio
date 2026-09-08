import { WA_MESSAGES, whatsappLink } from "@/lib/site";
import { WhatsAppIcon } from "./WhatsAppIcon";

export function WhatsAppButton() {
  return (
    <a
      href={whatsappLink(WA_MESSAGES.contato)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar com a Odonto Vita pelo WhatsApp"
      className="fixed bottom-5 right-5 z-50 grid size-14 place-items-center rounded-full bg-accent text-accent-foreground shadow-lift transition-all duration-200 hover:-translate-y-1 hover:bg-primary"
    >
      <WhatsAppIcon className="size-7" />
    </a>
  );
}
