import { footer, site } from "../content";
import { Button, Glyph } from "./ui";

/* Black footer inset from the page edges with rounded top corners: menu and
   legal columns, contact and booking buttons, an oversized wordmark, and
   the copyright line. */
export function Footer() {
  return (
    <footer className="bg-greige">
      <div className="mx-auto max-w-[1266px] px-0 md:px-[60px]">
        <div className="rounded-t-3xl bg-black px-8 pb-10 pt-12 text-white md:px-10">
          <div className="grid gap-10 md:grid-cols-[1fr_1fr_2fr]">
            <div>
              <p className="text-[15px] text-white/60">Menu</p>
              <ul className="mt-6 space-y-3 text-[15px]">
                {footer.menu.map((l) => (
                  <li key={l.href}>
                    <a href={l.href} className="text-white/85 hover:text-white">
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-[15px] text-white/60">Legal</p>
              <ul className="mt-6 space-y-3 text-[15px]">
                {footer.legal.map((l) => (
                  <li key={l.href}>
                    <a href={l.href} className="text-white/85 hover:text-white">
                      {l.label}
                    </a>
                  </li>
                ))}
                <li>
                  <a href={`mailto:${site.email}`} className="text-white/85 hover:text-white">
                    {site.email}
                  </a>
                </li>
              </ul>
            </div>
            <div className="flex flex-wrap items-start gap-3 md:justify-end">
              <Button href={footer.contact.href} variant="outline-light">
                {footer.contact.label}
              </Button>
              <Button href={footer.cta.href}>{footer.cta.label}</Button>
            </div>
          </div>

          <div className="mt-24 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <span className="flex items-center gap-4 text-white">
              <Glyph size={72} />
              <span className="font-sans text-[64px] font-bold uppercase leading-none tracking-tight md:text-[112px]">
                Husn
              </span>
            </span>
            <p className="text-[15px] text-white/70">{footer.copyright}</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
