"use client";

import { useMemo, useState } from "react";
import { Search, SlidersHorizontal, X } from "lucide-react";
import type { TourismRecord } from "@/data/tourism";
import { PlaceCard } from "@/components/PlaceCard";

export function DirectoryExplorer({ records, noun }: { records: TourismRecord[]; noun: string }) {
  const [query, setQuery] = useState("");
  const [type, setType] = useState("Todos");
  const types = useMemo(() => ["Todos", ...Array.from(new Set(records.map((record) => record.subtype).filter(Boolean))).sort()], [records]);
  const filtered = useMemo(() => {
    const term = query.trim().toLocaleLowerCase("es");
    return records.filter((record) => {
      const matchesType = type === "Todos" || record.subtype === type;
      const haystack = [record.name, record.subtype, record.description, record.address, record.neighborhood, record.tags].join(" ").toLocaleLowerCase("es");
      return matchesType && (!term || haystack.includes(term));
    });
  }, [query, records, type]);

  return (
    <>
      <div className="directoryToolbar">
        <label className="directorySearch">
          <Search size={19} />
          <input value={query} onChange={(event) => setQuery(event.target.value)} type="search" placeholder={`Buscar ${noun} por nombre, zona o servicio…`} />
          {query && <button type="button" onClick={() => setQuery("")} aria-label="Limpiar búsqueda"><X size={17} /></button>}
        </label>
        <div className="filterLabel"><SlidersHorizontal size={16} /> Filtrar</div>
      </div>
      <div className="filterScroller" aria-label="Filtros por tipo">
        {types.map((item) => <button type="button" key={item} className={type === item ? "active" : ""} onClick={() => setType(item)}>{item}</button>)}
      </div>
      <div className="resultsMeta"><strong>{filtered.length}</strong> {filtered.length === 1 ? "resultado" : "resultados"}</div>
      {filtered.length ? (
        <div className="placeGrid">{filtered.map((record) => <PlaceCard key={record.id} record={record} />)}</div>
      ) : (
        <div className="emptyState">
          <span>Sin coincidencias</span>
          <h2>No encontramos lo que buscas</h2>
          <p>Prueba con otro término o elige un tipo diferente.</p>
          <button type="button" onClick={() => { setQuery(""); setType("Todos"); }}>Ver todos los lugares</button>
        </div>
      )}
    </>
  );
}
