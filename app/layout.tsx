import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "¿Qué me dicen de Ixtlán? | Ixtlán del Río, Nayarit",
    template: "%s | ¿Qué me dicen de Ixtlán?",
  },
  description:
    "Descubre qué hacer, dónde comer, dónde hospedarte y qué conocer en Ixtlán del Río, Nayarit.",
  metadataBase: new URL("https://quemedicendeixtlan.com"),
  openGraph: {
    title: "¿Qué me dicen de Ixtlán?",
    description: "Descubre Ixtlán del Río, Pueblo Mágico de Nayarit.",
    images: ["/images/ixtlan-hero.jpg"],
    locale: "es_MX",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
