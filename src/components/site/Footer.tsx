import { Mail, MapPin, Phone } from "lucide-react";

export function Footer() {
  return (
    <footer id="contact" className="bg-ink text-ink-foreground">
      <div className="mx-auto max-w-[1400px] px-6 py-20">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr_1fr]">
          <div>
            <img
              src="/veer-logo-white.png"
              alt="Veer Windows"
              width={415}
              height={193}
              className="h-14 w-auto"
            />
            <p className="mt-6 max-w-sm text-sm text-ink-foreground/65">
              Precision-engineered windows and doors for homes, builders, and architects — surveyed,
              manufactured, and installed by one team.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-extrabold uppercase tracking-[0.18em] text-ink-foreground">
              Services
            </h3>
            <ul className="mt-6 grid gap-3 text-sm text-ink-foreground/65">
              {[
                "Window Installation",
                "Door Installation",
                "Replacement Services",
                "Custom Solutions",
              ].map((item) => (
                <li key={item}>
                  <a href="/#services" className="transition-colors hover:text-primary-soft">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-extrabold uppercase tracking-[0.18em] text-ink-foreground">
              Get in Touch
            </h3>
            <ul className="mt-6 grid gap-4 text-sm text-ink-foreground/65">
              <li className="flex items-center gap-3">
                <Phone className="size-4 text-primary-soft" /> 081509 95171
              </li>
              <li className="flex items-center gap-3">
                <Mail className="size-4 text-primary-soft" /> hello@veerwindows.com
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 size-4 shrink-0 text-primary-soft" />
                <span>
                  Veer Windows, Sy No.05, Shed No-8, 2nd Cross Gangondanahalli, Post, Lakshmipura,
                  Bengaluru, Karnataka 562162
                </span>
              </li>
            </ul>
            <a
              href="mailto:hello@veerwindows.com"
              className="mt-8 inline-block btn-sweep-light bg-primary-soft px-8 py-4 text-xs font-extrabold uppercase tracking-[0.16em] text-primary-soft-foreground"
            >
              Request a Quote
            </a>
          </div>
        </div>

        <div className="mt-16 flex flex-wrap items-center justify-between gap-4 border-t border-ink-foreground/15 pt-8 text-xs uppercase tracking-[0.16em] text-ink-foreground/50">
          <p>&copy; {new Date().getFullYear()} Veer Windows. All rights reserved.</p>
          <p>Privacy &middot; Terms</p>
        </div>
      </div>
    </footer>
  );
}
