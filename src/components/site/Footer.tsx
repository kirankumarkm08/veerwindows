import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone } from "lucide-react";

const SOCIAL_LINKS = [
  {
    label: "Facebook",
    href: "https://www.facebook.com/profile.php?id=61590418517607&sk=directory_intro",
    icon: Facebook,
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/veerwindows/",
    icon: Instagram,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/veer-windows/about/?viewAsMember=true",
    icon: Linkedin,
  },
] as const;

export function Footer() {
  return (
    <footer id="contact" className="relative isolate overflow-hidden bg-ink text-ink-foreground">
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-cover bg-center opacity-35"
        style={{ backgroundImage: "url('/products/aluminium-sliding-door.jpg')" }}
      />
      <div aria-hidden="true" className="absolute inset-0 -z-10 bg-ink/85" />
      <div className="mx-auto max-w-[1400px] px-6 py-12 sm:py-16">
        <div className="flex flex-wrap items-center justify-between gap-6 border-b border-white/15 pb-8">
          <a href="/#home" aria-label="Veer Windows home">
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
          </a>
          <nav className="flex items-center gap-3" aria-label="Social media links">
            {SOCIAL_LINKS.map(({ label, href, icon: Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Visit Veer Windows on ${label}`}
                className="flex size-10 items-center justify-center border border-white/25 bg-black/20 text-white/80 transition-colors hover:border-primary-soft hover:text-primary-soft"
              >
                <Icon className="size-4" aria-hidden="true" />
              </a>
            ))}
          </nav>
        </div>

        <div className="grid gap-10 border-b border-white/15 py-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8 lg:py-14">
          <div>
            <h3 className="text-lg font-bold text-white">Contact</h3>
            <ul className="mt-5 grid gap-4 text-sm leading-6 text-white/70">
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
              href="/contact"
              className="mt-6 inline-block border border-white/30 px-5 py-3 text-xs font-extrabold uppercase tracking-[0.14em] text-white transition-colors hover:border-primary-soft hover:text-primary-soft"
            >
              Request a quote
            </a>
          </div>

          <div>
            <h3 className="text-lg font-bold text-white">uPVC Windows</h3>
            <ul className="mt-5 grid gap-3 text-sm text-white/70">
              {[
                ["Casement Windows", "/services/casement-windows-doors"],
                ["Sliding Windows", "/services/sliding-windows-doors"],
                ["Combination Windows", "/services/combination-windows"],
                ["Tilt & Turn Windows", "/services/versatile-window-systems"],
                ["Twin Sash Window", "/services/twin-sash-window"],
              ].map(([label, href]) => (
                <li key={label}>
                  <a href={href} className="transition-colors hover:text-primary-soft">
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold text-white">uPVC Doors</h3>
            <ul className="mt-5 grid gap-3 text-sm text-white/70">
              {[
                ["Sliding Windows & Doors", "/services/sliding-windows-doors"],
                ["Lift & Slide Door", "/services/lift-and-slide-door"],
                ["Slide & Fold Systems", "/services/slide-fold-systems"],
                ["Casement Doors", "/services/casement-windows-doors"],
              ].map(([label, href]) => (
                <li key={label}>
                  <a href={href} className="transition-colors hover:text-primary-soft">
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold text-white">System Aluminium</h3>
            <ul className="mt-5 grid gap-3 text-sm text-white/70">
              {[
                ["Aluminium Sliding Systems", "/services/system-aluminium-series"],
                ["Casement Window", "/services/system-aluminium-53-series-casement-window"],
                ["Sliding Door", "/services/system-aluminium-perfection-slide-door"],
                ["Lift & Slide Door", "/services/system-aluminium-lift-slide-door"],
                ["Facade System", "/services/system-aluminium-facade-system"],
              ].map(([label, href]) => (
                <li key={label}>
                  <a href={href} className="transition-colors hover:text-primary-soft">
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-4 pt-6 text-xs uppercase tracking-[0.14em] text-white/50">
          <p>&copy; {new Date().getFullYear()} Veer Windows. All rights reserved.</p>
          <a href="/services" className="transition-colors hover:text-white">
            Explore all systems
          </a>
        </div>
      </div>
    </footer>
  );
}
