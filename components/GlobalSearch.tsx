"use client";

import { useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import { Search, X } from "lucide-react";
import { publishableRecords, sections } from "@/data/catalog";
import { PlaceCard } from "@/components/PlaceCard";

export function GlobalSearch() {
  const params = useSearchParams();
  const [query, setQuery] = useState(params.get("q") || "");
  const [category, setCategory] = useState(params.get("categoria") || "");
  const results = useMemo(() => {
    const term = query.trim().toLocaleLowerCase("es");
    return publishableRecords.filter((record) => {
      const categoryMatch = !category || record.category === category;
      const text = [record.name, record.category, record.subtype, record.description, record.address, record.neighborhood, record.tags].join(" ").toLocaleLowerCase("es");
      return categoryMatch && (!term || text.includes(term));
    });
  }, [category, query]);
  return (
    <>
      <div className="globalSearchBox">
        <Search size={23} />
        <input autoFocus type="search" value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Escribe el nombre de un lugar, comida o experiencia…" />
        {query && <button type="button" onClick={() => setQuery("")} aria-label="Limpiar"><X size={19} /></button>}
      </div>
      <div className="searchCategories">
        <button className={!category ? "active" : ""} onClick={() => setCategory("")} type="button">Todo</button>
        {sections.map((section) => <button className={category === section.category ? "active" : ""} onClick={() => setCategory(section.category)} type="button" key={section.slug}>{section.navLabel}</button>)}
      </div>
      <div className="searchResultsHeader"><span>{query || category ? "Resultados para tu búsqueda" : "Todo Ixtlán en un solo lugar"}</span><strong>{results.length} {results.length === 1 ? "lugar" : "lugares"}</strong></div>
      {results.length ? <div className="placeGrid">{results.map((record) => <PlaceCard key={record.id} record={record} />)}</div> : <div className="emptyState"><span>SIN RESULTADOS</span><h2>No encontramos coincidencias</h2><p>Revisa la escritura o explora otra categoría.</p><button type="button" onClick={() => { setQuery(""); setCategory(""); }}>Mostrar todos</button></div>}
    </>
  );
}
