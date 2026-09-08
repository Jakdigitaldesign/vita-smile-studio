import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Services } from "@/components/Services";
import { Differentials } from "@/components/Differentials";
import { Professionals } from "@/components/Professionals";
import { Testimonials } from "@/components/Testimonials";
import { CtaSection } from "@/components/CtaSection";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";

const description =
  "Na Odonto Vita você encontra atendimento humanizado, tecnologia e tratamentos odontológicos personalizados para cuidar do seu sorriso.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Odonto Vita | Clínica Odontológica" },
      { name: "description", content: description },
      { property: "og:title", content: "Odonto Vita | Clínica Odontológica" },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "pt_BR" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Differentials />
        <Professionals />
        <Testimonials />
        <CtaSection />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
