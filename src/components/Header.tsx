import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { NAV_LINKS, WA_MESSAGES, whatsappLink } from "@/lib/site";
import { ToothMark } from "./ToothMark";

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-background/90 shadow-soft backdrop-blur-md" : "bg-background/60 backdrop-blur-sm"
      }`}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center gap-4 px-5 sm:px-8">
        <a href="#inicio" className="flex min-w-0 items-center gap-2.5">
          <span className="grid size-9 shrink-0 place-items-center rounded-full bg-secondary text-primary">
            <ToothMark className="size-5" />
          </span>
          <span className="truncate text-[0.95rem] font-semibold tracking-[0.22em] text-primary">
            ODONTO VITA
          </span>
        </a>

        <nav aria-label="Navegação principal" className="ml-auto hidden items-center gap-8 lg:flex">
          {NAV_LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="relative text-sm text-muted-foreground transition-colors duration-200 hover:text-primary after:absolute after:-bottom-1.5 after:left-0 after:h-px after:w-0 after:bg-accent after:transition-all after:duration-300 hover:after:w-full"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <a
          href={whatsappLink(WA_MESSAGES.hero)}
          target="_blank"
          rel="noopener noreferrer"
          className="ml-auto hidden rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow-soft transition-all duration-200 hover:-translate-y-0.5 hover:bg-accent lg:ml-0 lg:inline-flex"
        >
          Agendar avaliação
        </a>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          className="ml-auto grid size-11 shrink-0 place-items-center rounded-full border border-border text-primary transition-colors duration-200 hover:bg-muted lg:hidden"
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-border bg-background px-5 pb-6 pt-4 lg:hidden">
          <nav aria-label="Navegação mobile" className="flex flex-col">
            {NAV_LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="border-b border-border py-3.5 text-base text-primary"
              >
                {l.label}
              </a>
            ))}
          </nav>
          <a
            href={whatsappLink(WA_MESSAGES.hero)}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 block rounded-full bg-primary px-6 py-3.5 text-center text-sm font-medium text-primary-foreground"
          >
            Agendar avaliação
          </a>
        </div>
      )}
    </header>
  );
}
