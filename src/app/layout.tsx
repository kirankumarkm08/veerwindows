import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";

import "./globals.css";

const TITLE = "Veer Windows — Premium Windows & Doors Installation";
const DESCRIPTION =
  "Veer Windows designs, supplies, and installs energy-efficient windows and doors for homes, builders, and architects. Free surveys and guaranteed workmanship.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  icons: { icon: "/favicon.png" },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Archivo:wght@400;500;600;700;800;900&display=swap"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
