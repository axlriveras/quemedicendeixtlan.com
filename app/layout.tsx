import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "¿Qué me dicen de Ixtlán? | Ixtlán del Río, Nayarit",
  description:
    "Descubre qué hacer, dónde comer, dónde hospedarte y qué conocer en Ixtlán del Río, Nayarit.",
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
