import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "¿Qué me dicen de Ixtlán? | Turismo en Ixtlán del Río",
  description:
    "Descubre qué hacer, dónde comer, dónde hospedarte, atractivos, experiencias y servicios turísticos en Ixtlán del Río, Nayarit.",
  metadataBase: new URL("https://quemedicendeixtlan.com")
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
