"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  /** Direction the element travels in from. */
  from?: "up" | "left" | "right" | "zoom";
  as?: "div" | "section" | "li" | "article" | "figure" | "span" | "h2" | "p";
};

const HIDDEN: Record<NonNullable<RevealProps["from"]>, string> = {
  up: "translate3d(0, 44px, 0)",
  left: "translate3d(-48px, 0, 0)",
  right: "translate3d(48px, 0, 0)",
  zoom: "scale(0.92)",
};

export function Reveal({
  children,
  className = "",
  delay = 0,
  from = "up",
  as = "div",
}: RevealProps) {
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    if (typeof IntersectionObserver === "undefined") {
      setVisible(true);
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.disconnect();
          }
        }
      },
      { threshold: 0.01, rootMargin: "0px 0px -8% 0px" },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  const Tag = as as "div";

  return (
    <Tag
      ref={ref as React.RefObject<HTMLDivElement>}
      style={{
        transitionDelay: `${delay}ms`,
        transitionDuration: "900ms",
        transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
        transitionProperty: "opacity, transform",
        opacity: visible ? 1 : 0,
        transform: visible ? "none" : HIDDEN[from],
        willChange: "opacity, transform",
      }}
      className={`motion-reduce:!opacity-100 motion-reduce:!transform-none motion-reduce:!transition-none ${className}`}
    >
      {children}
    </Tag>
  );
}
