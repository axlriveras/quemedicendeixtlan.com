"use client";

import { useMemo, useState } from "react";
import { Search, X } from "lucide-react";
import { publishableHotels } from "@/data/hotels";
import { HotelCard } from "@/components/HotelCard";

const hotelTypes = [
  "Todos",
  ...Array.from(
    new Set(
      publishableHotels
        .map((hotel) => hotel.subtype)
        .filter(Boolean)
    )
  ),
];

export function HotelDirectory() {
  const [query, setQuery] = useState("");
  const [type, setType] = useState("Todos");

  const filteredHotels = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    return publishableHotels.filter((hotel) => {
      const matchesType =
        type === "Todos" || hotel.subtype === type;

      if (!normalizedQuery) {
        return matchesType;
      }

      const searchableText = [
        hotel.name,
        hotel.subtype,
        hotel.address,
        hotel.neighborhood,
        hotel.description,
        hotel.tags,
      ]
        .join(" ")
        .toLowerCase();

      return (
        matchesType &&
        searchableText.includes(normalizedQuery)
      );
    });
  }, [query, type]);

  return (
    <>
      <div className="modernHotelToolbar">
        <div className="modernHotelSearch">
          <Search size={19} />

          <input
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Buscar hotel, colonia o servicio..."
          />

          {query && (
            <button
              type="button"
              onClick={() => setQuery("")}
              aria-label="Limpiar búsqueda"
            >
              <X size={17} />
            </button>
          )}
        </div>

        <div className="modernHotelFilters">
          {hotelTypes.map((item) => (
            <button
              type="button"
              key={item}
              className={type === item ? "active" : ""}
              onClick={() => setType(item)}
            >
              {item}
            </button>
          ))}
        </div>
      </div>

      <div className="modernHotelCount">
        <strong>{filteredHotels.length}</strong>
        <span>
          {" "}
          {filteredHotels.length === 1
            ? "lugar para hospedarte"
            : "lugares para hospedarte"}
        </span>
      </div>

      {filteredHotels.length > 0 ? (
        <div className="modernHotelGrid">
          {filteredHotels.map((hotel) => (
            <HotelCard key={hotel.id} hotel={hotel} />
          ))}
        </div>
      ) : (
        <div className="hotelEmptyState">
          <h3>No encontramos alojamientos</h3>
          <p>Prueba otro término o cambia el filtro.</p>
        </div>
      )}
    </>
  );
}
