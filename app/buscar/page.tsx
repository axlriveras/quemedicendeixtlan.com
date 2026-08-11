import { Suspense } from "react";
import { GlobalSearch } from "@/components/GlobalSearch";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";

export const metadata = { title: "Buscar | ¿Qué me dicen de Ixtlán?", description: "Busca hoteles, restaurantes, atractivos, experiencias y servicios turísticos en Ixtlán del Río." };
export default function SearchPage() {
  return <><SiteHeader /><main><section className="searchHero"><div className="container"><span className="eyebrow">EXPLORA IXTLÁN</span><h1>¿Qué estás buscando?</h1><p>Encuentra lugares, sabores, experiencias y servicios para tu visita.</p></div></section><section className="searchBody"><div className="container"><Suspense fallback={<div className="loadingState">Preparando el buscador…</div>}><GlobalSearch /></Suspense></div></section></main><SiteFooter /></>;
}
