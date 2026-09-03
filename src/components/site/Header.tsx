"use client";

import { useEffect, useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils";

const NAV = [
  { label: "Home", href: "/#home" },
  { label: "About", href: "/about" },
  {
    label: "Services",
    href: "/services",
    children: [
      { label: "uPVC Windows & Doors", href: "/services/family/upvc", image: "/sliders/1.png" },
      {
        label: "System Aluminium",
        href: "/services/family/system-aluminium",
        image: "/sliders/9.png",
      },
    ],
  },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled ? "border-b border-ink-foreground/10 bg-ink/90 backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-[1400px] items-center justify-between px-6 py-6">
        <a href="/#home" className="flex items-center gap-3">
          <img
            src="/veer-logo-white.png"
            alt="Veer Windows"
            width={415}
            height={193}
            className="h-11 w-auto"
          />
        </a>

        <nav className="hidden items-center gap-8 lg:flex">
          {NAV.map((item) => {
            const itemPath = item.href.split("#")[0] || "/";
            const isActive =
              item.label === "Services" ? pathname.startsWith("/services") : pathname === itemPath;

            if (item.children) {
              return (
                <div key={item.label} className="group relative">
                  <a
                    href={item.href}
                    aria-current={isActive ? "page" : undefined}
                    className={cn(
                      "relative flex items-center gap-1 py-2 text-xs font-bold uppercase tracking-[0.14em] text-ink-foreground/85 transition-colors hover:text-primary-soft",
                      "after:absolute after:inset-x-0 after:bottom-0 after:h-0.5 after:origin-left after:scale-x-0 after:bg-primary-soft after:transition-transform",
                      "hover:after:scale-x-100",
                      isActive && "text-primary-soft after:scale-x-100",
                    )}
                  >
                    {item.label}{" "}
                    <ChevronDown className="size-3 transition-transform group-hover:rotate-180" />
                  </a>
                  <div className="invisible absolute left-1/2 top-full grid w-[430px] -translate-x-1/2 translate-y-2 grid-cols-2 gap-3 border border-border bg-background p-3 opacity-0 shadow-2xl transition-all group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="group/card relative h-36 overflow-hidden bg-primary"
                      >
                        <img
                          src={child.image}
                          alt=""
                          className="absolute inset-0 size-full object-cover opacity-100 transition-transform duration-500 group-hover/card:scale-105"
                        />
                        <span className="absolute inset-0 bg-gradient-to-t from-ink/95 via-ink/20 to-transparent" />
                        <span className="absolute bottom-4 left-4 right-3 text-xs font-extrabold uppercase tracking-[0.1em] text-white">
                          {child.label}
                        </span>
                      </Link>
                    ))}
                  </div>
                </div>
              );
            }

            return (
              <a
                key={item.label}
                href={item.href}
                aria-current={isActive ? "page" : undefined}
                className={cn(
                  "relative py-2 text-xs font-bold uppercase tracking-[0.14em] text-ink-foreground/85 transition-colors hover:text-primary-soft",
                  "after:absolute after:inset-x-0 after:bottom-0 after:h-0.5 after:origin-left after:scale-x-0 after:bg-primary-soft after:transition-transform",
                  "hover:after:scale-x-100",
                  isActive && "text-primary-soft after:scale-x-100",
                )}
              >
                {item.label}
              </a>
            );
          })}
        </nav>

        <div className="flex items-center gap-4">
          <Link
            href="/contact"
            className="btn-sweep-light hidden bg-primary-soft px-6 py-3.5 text-xs font-extrabold uppercase tracking-[0.14em] text-primary-soft-foreground sm:inline-block"
          >
            Free Quote
          </Link>
          <button
            type="button"
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
            className="text-ink-foreground lg:hidden"
          >
            {open ? <X className="size-6" /> : <Menu className="size-6" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="mx-6 bg-ink p-6 lg:hidden">
          <nav className="grid gap-4">
            {NAV.map((item) => {
              const itemPath = item.href.split("#")[0] || "/";
              const isActive =
                item.label === "Services"
                  ? pathname.startsWith("/services")
                  : pathname === itemPath;

              return item.children ? (
                <div key={item.label}>
                  <a
                    href={item.href}
                    onClick={() => setOpen(false)}
                    aria-current={isActive ? "page" : undefined}
                    className={cn(
                      "block border-l-2 border-transparent px-4 py-2 text-sm font-bold uppercase tracking-[0.14em] text-ink-foreground transition-colors",
                      isActive && "border-primary-soft bg-primary-soft/10 text-primary-soft",
                    )}
                  >
                    {item.label}
                  </a>
                  <div className="ml-4 border-l border-ink-foreground/15 pl-4">
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        onClick={() => setOpen(false)}
                        className="block px-4 py-2 text-xs font-bold uppercase tracking-[0.1em] text-ink-foreground/70 transition-colors hover:text-primary-soft"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  aria-current={isActive ? "page" : undefined}
                  className={cn(
                    "block border-l-2 border-transparent px-4 py-2 text-sm font-bold uppercase tracking-[0.14em] text-ink-foreground transition-colors",
                    isActive && "border-primary-soft bg-primary-soft/10 text-primary-soft",
                  )}
                >
                  {item.label}
                </a>
              );
            })}
          </nav>
        </div>
      )}
    </header>
  );
}
