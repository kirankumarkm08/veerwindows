"use client";

import { useEffect, useState } from "react";
import { ChevronDown, ChevronRight, Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils";

type MenuEntry = {
  label: string;
  href: string;
  children?: MenuEntry[];
};

type NavItem = MenuEntry & {
  groups?: Array<{
    label: string;
    href: string;
    children: MenuEntry[];
  }>;
};

const upvcProducts: MenuEntry[] = [
  { label: "Sliding Windows & Doors", href: "/services/sliding-windows-doors" },
  { label: "3D Sliding Door Designer", href: "/sliding-door-configurator" },
  { label: "Casement Windows & Doors", href: "/services/casement-windows-doors" },
  { label: "Combination Windows", href: "/services/combination-windows" },
  { label: "Ventilator Windows", href: "/services/combination-windows" },
  { label: "Lift & Slide Doors", href: "/services/lift-and-slide-door" },
  { label: "Slide & Fold", href: "/services/slide-fold-systems" },
  { label: "Tilt & Turn", href: "/services/versatile-window-systems" },
  { label: "Twin Sash Windows", href: "/services/twin-sash-window" },
];

const systemAluminiumWindows: MenuEntry[] = [
  { label: "53 Series Casement Window", slug: "system-aluminium-53-series-casement-window" },
  { label: "Vertical Sliding Window", slug: "system-aluminium-vertical-sliding-window" },
  { label: "Pivot Window", slug: "system-aluminium-pivot-window" },
  { label: "Tilt & Turn Window", slug: "system-aluminium-tilt-turn-window" },
  { label: "Parallel Window", slug: "system-aluminium-parallel-window" },
].map(({ label, slug }) => ({ label, href: `/services/${slug}` }));

const systemAluminiumDoors: MenuEntry[] = [
  { label: "Perfection Slide Door", slug: "system-aluminium-perfection-slide-door" },
  { label: "70 Series Sliding Door", slug: "system-aluminium-70-series-sliding-door" },
  { label: "Lift & Slide Door", slug: "system-aluminium-lift-slide-door" },
  { label: "Fold & Slide Door", slug: "system-aluminium-fold-slide-door" },
  { label: "Casement Door", slug: "system-aluminium-casement-door" },
  { label: "Facade System", slug: "system-aluminium-facade-system" },
  { label: "Railing System", slug: "system-aluminium-railing-system" },
].map(({ label, slug }) => ({ label, href: `/services/${slug}` }));

const systemAluminiumProducts: MenuEntry[] = [
  { label: "Sliding Windows & Doors", href: "/services/system-aluminium-series" },
  {
    label: "Casement Windows & Doors",
    href: "/services/system-aluminium-53-series-casement-window",
  },
  { label: "Lift & Slide", href: "/services/system-aluminium-lift-slide-door" },
  { label: "Slide & Fold", href: "/services/system-aluminium-fold-slide-door" },
  { label: "Tilt & Turn", href: "/services/system-aluminium-tilt-turn-window" },
];

const NAV: NavItem[] = [
  { label: "About", href: "/about" },
  {
    label: "uPVC",
    href: "/services/family/upvc",
    children: upvcProducts,
  },
  {
    label: "System Aluminium",
    href: "/services/family/system-aluminium",
    children: systemAluminiumProducts,
  },
  { label: "Blog", href: "/blog" },
  { label: "Projects", href: "/projects" },
  { label: "Choose Color", href: "/sliding-door-configurator" },
  { label: "Contact Us", href: "/contact" },
];

function isNavItemActive(label: string, pathname: string, href: string) {
  if (label === "uPVC") {
    return (
      pathname === "/services/family/upvc" ||
      upvcProducts.some((product) => product.href === pathname)
    );
  }
  if (label === "System Aluminium") {
    return (
      pathname === "/services/family/system-aluminium" ||
      pathname.startsWith("/services/system-aluminium-")
    );
  }

  const itemPath = href.split("#")[0] || "/";
  return pathname === itemPath;
}

type HeaderProps = { solid?: boolean };

export function Header({ solid = false }: HeaderProps) {
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
        scrolled || solid
          ? "border-b border-[#dce3e6] bg-white shadow-sm"
          : "border-b border-transparent bg-white"
      }`}
    >
      <div className="mx-auto flex max-w-[1400px] items-center justify-between px-6 py-6">
        <a href="/#home" className="flex items-center gap-3">
          <img
            src="/veer-windows.png"
            alt="Veer Windows"
            width={500}
            height={500}
            className="h-11 w-[118px] object-cover object-center"
          />
        </a>

        <nav className="hidden items-center gap-8 lg:flex">
          {NAV.map((item) => {
            const isActive = isNavItemActive(item.label, pathname, item.href);

            if ("groups" in item && item.groups) {
              return (
                <div key={item.label} className="group relative">
                  <a
                    href={item.href}
                    aria-haspopup="true"
                    aria-current={isActive ? "page" : undefined}
                    className={cn(
                      "relative flex items-center gap-1 py-2 text-xs font-bold uppercase tracking-[0.14em] text-heading transition-colors hover:text-[#a27e3d]",
                      "after:absolute after:inset-x-0 after:bottom-0 after:h-0.5 after:origin-left after:scale-x-0 after:bg-[#a27e3d] after:transition-transform",
                      "hover:after:scale-x-100",
                      isActive && "text-[#a27e3d] after:scale-x-100",
                    )}
                  >
                    <span>{item.label}</span>
                    <ChevronDown
                      aria-hidden="true"
                      className="size-4 shrink-0 text-current transition-transform duration-200 group-hover:rotate-180 group-focus-visible:rotate-180"
                    />
                  </a>
                  <div className="invisible absolute left-1/2 top-full z-50 w-64 -translate-x-1/2 translate-y-2 border border-border/70 bg-white py-2 opacity-0 shadow-[0_16px_40px_-18px_rgba(3,30,44,0.38)] transition-all duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-focus-visible:visible group-focus-visible:translate-y-0 group-focus-visible:opacity-100">
                    {item.groups.map((group) => (
                      <div key={group.label} className="group/submenu relative">
                        <Link
                          href={group.href}
                          className="flex items-center justify-between px-5 py-3 text-sm font-semibold text-heading transition-colors hover:bg-surface hover:text-primary focus-visible:bg-surface focus-visible:outline-none"
                        >
                          {group.label}
                          <ChevronRight className="size-4" />
                        </Link>
                        <div className="invisible absolute left-full top-0 z-50 w-64 border border-border/70 bg-white py-2 opacity-0 shadow-[0_16px_40px_-18px_rgba(3,30,44,0.38)] transition-all duration-200 group-hover/submenu:visible group-hover/submenu:opacity-100 group-focus-within/submenu:visible group-focus-within/submenu:opacity-100">
                          {group.children.map((child) => (
                            <Link
                              key={child.label}
                              href={child.href}
                              className="block px-5 py-2.5 text-[13px] font-semibold leading-5 text-heading transition-colors hover:bg-surface hover:text-primary focus-visible:bg-surface focus-visible:outline-none"
                            >
                              {child.label}
                            </Link>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              );
            }

            if (item.children) {
              const menuTriggerClassName = cn(
                "relative flex items-center gap-1 border-0 bg-transparent py-2 text-xs font-bold uppercase tracking-[0.14em] text-heading transition-colors hover:text-[#a27e3d]",
                "after:absolute after:inset-x-0 after:bottom-0 after:h-0.5 after:origin-left after:scale-x-0 after:bg-[#a27e3d] after:transition-transform",
                "hover:after:scale-x-100",
                isActive && "text-[#a27e3d] after:scale-x-100",
              );

              const menuTriggerContent = (
                <>
                  <span>{item.label}</span>
                  <ChevronDown
                    aria-hidden="true"
                    className="size-4 shrink-0 text-current transition-transform duration-200 group-hover:rotate-180 group-focus-within:rotate-180"
                  />
                </>
              );

              return (
                <div key={item.label} className="group relative">
                  {item.label === "System Aluminium" ? (
                    <button
                      type="button"
                      aria-haspopup="true"
                      aria-label="Open System Aluminium menu"
                      className={cn(menuTriggerClassName, "cursor-pointer")}
                    >
                      {menuTriggerContent}
                    </button>
                  ) : (
                    <a
                      href={item.href}
                      aria-haspopup="true"
                      aria-current={isActive ? "page" : undefined}
                      className={menuTriggerClassName}
                    >
                      {menuTriggerContent}
                    </a>
                  )}
                  <div className="invisible absolute left-1/2 top-full z-50 w-64 -translate-x-1/2 translate-y-2 rounded-sm border border-border/70 bg-white py-1.5 opacity-0 shadow-[0_16px_40px_-18px_rgba(3,30,44,0.38)] transition-all duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100">
                    {item.children.map((child) =>
                      child.children?.length ? (
                        <div key={child.label} className="group/submenu relative">
                          <Link
                            href={child.href}
                            aria-haspopup="true"
                            className="flex items-center justify-between gap-3 px-5 py-2.5 text-[13px] font-semibold leading-5 text-heading transition-colors hover:bg-surface hover:text-primary focus-visible:bg-surface focus-visible:outline-none"
                          >
                            <span>{child.label}</span>
                            <ChevronRight aria-hidden="true" className="size-4 shrink-0" />
                          </Link>
                          <div className="invisible absolute left-full top-0 z-50 w-64 rounded-sm border border-border/70 bg-white py-1.5 opacity-0 shadow-[0_16px_40px_-18px_rgba(3,30,44,0.38)] transition-all duration-200 group-hover/submenu:visible group-hover/submenu:opacity-100 group-focus-within/submenu:visible group-focus-within/submenu:opacity-100">
                            {child.children.map((nestedChild) => (
                              <Link
                                key={nestedChild.label}
                                href={nestedChild.href}
                                className="block px-5 py-2.5 text-[13px] font-semibold leading-5 text-heading transition-colors hover:bg-surface hover:text-primary focus-visible:bg-surface focus-visible:outline-none"
                              >
                                {nestedChild.label}
                              </Link>
                            ))}
                          </div>
                        </div>
                      ) : (
                        <Link
                          key={child.label}
                          href={child.href}
                          className="block px-5 py-2.5 text-[13px] font-semibold leading-5 text-heading transition-colors hover:bg-surface hover:text-primary focus-visible:bg-surface focus-visible:outline-none"
                        >
                          {child.label}
                        </Link>
                      ),
                    )}
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
                  "relative py-2 text-xs font-bold uppercase tracking-[0.14em] text-heading transition-colors hover:text-[#a27e3d]",
                  "after:absolute after:inset-x-0 after:bottom-0 after:h-0.5 after:origin-left after:scale-x-0 after:bg-[#a27e3d] after:transition-transform",
                  "hover:after:scale-x-100",
                  isActive && "text-[#a27e3d] after:scale-x-100",
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
            className="text-heading lg:hidden"
          >
            {open ? <X className="size-6" /> : <Menu className="size-6" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="mx-6 bg-ink p-6 lg:hidden">
          <nav className="grid gap-4">
            {NAV.map((item) => {
              const isActive = isNavItemActive(item.label, pathname, item.href);

              if ("groups" in item && item.groups) {
                return (
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
                      {item.groups.map((group) => (
                        <details key={group.label} className="group">
                          <summary className="flex cursor-pointer list-none items-center justify-between px-4 py-2 text-xs font-bold uppercase tracking-[0.1em] text-ink-foreground/85">
                            {group.label}
                            <ChevronDown className="size-3 transition-transform group-open:rotate-180" />
                          </summary>
                          <div className="pl-3">
                            {group.children.map((child) => (
                              <Link
                                key={child.label}
                                href={child.href}
                                onClick={() => setOpen(false)}
                                className="block px-4 py-2 text-xs font-medium text-ink-foreground/70 transition-colors hover:text-primary-soft"
                              >
                                {child.label}
                              </Link>
                            ))}
                          </div>
                        </details>
                      ))}
                    </div>
                  </div>
                );
              }

              return item.children ? (
                <details key={item.label} className="group">
                  <summary
                    aria-current={isActive ? "page" : undefined}
                    className={cn(
                      "flex cursor-pointer list-none items-center justify-between border-l-2 border-transparent px-4 py-2 text-sm font-bold uppercase tracking-[0.14em] text-ink-foreground transition-colors",
                      isActive && "border-primary-soft bg-primary-soft/10 text-primary-soft",
                    )}
                  >
                    <span>{item.label}</span>
                    <ChevronDown
                      aria-hidden="true"
                      className="size-4 shrink-0 transition-transform duration-200 group-open:rotate-180"
                    />
                  </summary>
                  <div className="ml-4 border-l border-ink-foreground/15 pl-4">
                    {item.label !== "System Aluminium" ? (
                      <Link
                        href={item.href}
                        onClick={() => setOpen(false)}
                        className="block px-4 py-2 text-xs font-bold uppercase tracking-[0.1em] text-primary-soft transition-colors hover:text-ink-foreground"
                      >
                        All {item.label}
                      </Link>
                    ) : null}
                    {item.children.map((child) =>
                      child.children?.length ? (
                        <details key={child.label} className="group/nested">
                          <summary className="flex cursor-pointer list-none items-center justify-between gap-3 px-4 py-2 text-xs font-bold uppercase tracking-[0.1em] text-ink-foreground/70 transition-colors hover:text-primary-soft">
                            <span>{child.label}</span>
                            <ChevronDown
                              aria-hidden="true"
                              className="size-3.5 shrink-0 transition-transform duration-200 group-open/nested:rotate-180"
                            />
                          </summary>
                          <div className="ml-3 border-l border-ink-foreground/15 pl-2">
                            <Link
                              href={child.href}
                              onClick={() => setOpen(false)}
                              className="block px-4 py-2 text-xs font-medium text-ink-foreground/65 transition-colors hover:text-primary-soft"
                            >
                              Overview
                            </Link>
                            {child.children.map((nestedChild) => (
                              <Link
                                key={nestedChild.label}
                                href={nestedChild.href}
                                onClick={() => setOpen(false)}
                                className="block px-4 py-2 text-xs font-medium text-ink-foreground/65 transition-colors hover:text-primary-soft"
                              >
                                {nestedChild.label}
                              </Link>
                            ))}
                          </div>
                        </details>
                      ) : (
                        <Link
                          key={child.label}
                          href={child.href}
                          onClick={() => setOpen(false)}
                          className="block px-4 py-2 text-xs font-bold uppercase tracking-[0.1em] text-ink-foreground/70 transition-colors hover:text-primary-soft"
                        >
                          {child.label}
                        </Link>
                      ),
                    )}
                  </div>
                </details>
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
