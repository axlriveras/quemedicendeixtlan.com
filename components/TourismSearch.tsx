"use client";

import { useMemo, useState } from "react";
import { categories, places, type PlaceCategory } from "@/data/places";

export default function TourismSearch() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<PlaceCategory | "Todos">("Todos");

  const filtered = useMemo(() => {
    const q = query.trim().toLocaleLowerCase("es-MX");
    return places.filter((place) => {
      const matchesCategory = category === "Todos" || place.category === category;
      const haystack = [place.name, place.category, place.description, place.location, ...place.tags]
        .join(" ")
        .toLocaleLowerCase("es-MX");
      return matchesCategory && (!q || haystack.includes(q));
    });
  }, [query, category]);

  return (
    <section id="buscar" className="search-shell" aria-label="Buscador turístico">
      <div className="search-box">
        <span className="search-icon" aria-hidden>⌕</span>
        <input
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Busca hoteles, comida, lugares, experiencias..."
          aria-label="Buscar en Ixtlán del Río"
        />
      </div>

      <div className="chips" aria-label="Filtrar por categoría">
        {["Todos", ...categories].map((item) => (
          <button
            key={item}
            type="button"
            className={category === item ? "chip active" : "chip"}
            onClick={() => setCategory(item as PlaceCategory | "Todos")}
          >
            {item}
          </button>
        ))}
      </div>

      {(query || category !== "Todos") && (
        <div className="results-panel">
          <div className="results-heading">
            <strong>{filtered.length} resultados</strong>
            <button type="button" onClick={() => { setQuery(""); setCategory("Todos"); }}>
              Limpiar
            </button>
          </div>
          <div className="results-grid">
            {filtered.map((place) => (
              <article className="result-card" key={place.id}>
                <span className="eyebrow">{place.category}</span>
                <h3>{place.name}</h3>
                <p>{place.description}</p>
                <small>{place.location}</small>
              </article>
            ))}
            {filtered.length === 0 && (
              <p className="empty-state">Todavía no encontramos algo con esa búsqueda. Prueba con “comida”, “hotel”, “historia” o “naturaleza”.</p>
            )}
          </div>
        </div>
      )}
    </section>
  );
}
