import type { Metadata } from "next";
import { Playfair_Display, Outfit } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Programme de Relance Agricole — Kongo Central | CDI-Bwamanda",
  description:
    "Programme intégré de transformation agricole à Boko, territoire de Mbanza-Ngungu, province du Kongo Central, RD Congo. Porté par le CDI-Bwamanda.",
  keywords: [
    "agriculture Congo",
    "Kongo Central",
    "Boko",
    "Mbanza-Ngungu",
    "CDI-Bwamanda",
    "relance agricole",
    "maïs soja",
    "RD Congo",
  ],
  openGraph: {
    title: "Programme de Relance Agricole — Kongo Central",
    description:
      "Transformer l'agriculture à Boko, territoire de Mbanza-Ngungu, province du Kongo Central.",
    images: [
      "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?w=1200&q=80",
    ],
    locale: "fr_CD",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={cn(playfair.variable, outfit.variable)}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
