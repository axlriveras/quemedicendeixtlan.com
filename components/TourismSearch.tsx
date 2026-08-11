"use client";

import { useState } from "react";
import {
  BedDouble,
  CalendarDays,
  Compass,
  Landmark,
  MapPin,
  Search,
  Trees,
  Utensils,
  Users,
} from "lucide-react";

const filters = [
  { label: "Todos", icon: Compass },
  { label: "Hoteles", icon: BedDouble },
  { label: "Restaurantes", icon: Utensils },
  { label: "Experiencias", icon: MapPin },
  { label: "Naturaleza", icon: Trees },
  { label: "Cultura", icon: Landmark },
];

export function TourismSearch() {
  const [active, setActive] = useState("Todos");

  return (
    <div className="heroSearch">
      <div className="heroSearchMain">
        <div className="heroSearchQuery">
          <Search size={23} />
          <div>
            <small>¿Qué estás buscando?</small>
            <input
              type="search"
              placeholder="Hoteles, restaurantes, lugares..."
            />
          </div>
        </div>

        <div className="heroSearchMeta">
          <CalendarDays size={18} />
          <div>
            <small>Llegada</small>
            <strong>Fecha</strong>
          </div>
        </div>

        <div className="heroSearchMeta">
          <CalendarDays size={18} />
          <div>
            <small>Salida</small>
            <strong>Fecha</strong>
          </div>
        </div>

        <div className="heroSearchMeta">
          <Users size={18} />
          <div>
            <small>Huéspedes</small>
            <strong>2 huéspedes</strong>
          </div>
        </div>

        <button className="heroSearchButton" type="button">
          Buscar
        </button>
      </div>

      <div className="heroFilters">
        {filters.map(({ label, icon: Icon }) => (
          <button
            type="button"
            key={label}
            className={active === label ? "active" : ""}
            onClick={() => setActive(label)}
          >
            <Icon size={16} />
            {label}
          </button>
        ))}
      </div>
    </div>
  );
}
