"use client";

import { useMemo, useState } from "react";
import { Search, X } from "lucide-react";
import { hotels } from "@/data/hotels";
import { HotelCard } from "@/components/HotelCard";

const hotelTypes = ["Todos", "Hotel", "Hotel Boutique"];

export function HotelDirectory() {
  const [query, setQuery] = useState("");
  const [type, setType] = useState("Todos");

  const filteredHotels = useMemo(() => {
    const q = query.trim().toLowerCase();

    return hotels.filter((hotel) => {
      const matchesType = type === "Todos" || hotel.type === type;

      if (!q) return matchesType;

      return (
        matchesType &&
        [
          hotel.name,
          hotel.address,
          hotel.neighborhood,
          hotel.type,
          ...hotel.amenities,
        ]
          .join(" ")
          .toLowerCase()
          .includes(q)
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
            placeholder="Buscar alojamiento..."
          />

          {query && (
            <button type="button" onClick={() => setQuery("")}>
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
        <span> lugares para hospedarte</span>
      </div>

      <div className="modernHotelGrid">
        {filteredHotels.map((hotel) => (
          <HotelCard hotel={hotel} key={hotel.id} />
        ))}
      </div>
    </>
  );
}
