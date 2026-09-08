export const WHATSAPP_NUMBER = "5541999999999";

export function whatsappLink(message: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export const WA_MESSAGES = {
  hero: "Olá! Gostaria de agendar uma avaliação na Odonto Vita.",
  servicos: "Olá! Gostaria de saber mais sobre os tratamentos da Odonto Vita.",
  cta: "Olá! Gostaria de agendar minha avaliação odontológica.",
  contato: "Olá! Gostaria de falar com a equipe da Odonto Vita.",
} as const;

export const NAV_LINKS = [
  { label: "Início", href: "#inicio" },
  { label: "Sobre", href: "#sobre" },
  { label: "Serviços", href: "#servicos" },
  { label: "Profissionais", href: "#profissionais" },
  { label: "Contato", href: "#contato" },
];

export const CLINIC = {
  name: "Odonto Vita",
  address: "Av. das Araucárias, 850 — Centro",
  phone: "(41) 99999-9999",
  email: "contato@odontovita.com.br",
};
