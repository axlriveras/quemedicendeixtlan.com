"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import { BedDouble, Compass, Landmark, Search, Sparkles, Utensils } from "lucide-react";

const filters = [
  { label: "Todo", value: "", icon: Compass },
  { label: "Hospedaje", value: "Hospedaje", icon: BedDouble },
  { label: "Restaurantes", value: "Gastronomía", icon: Utensils },
  { label: "Atractivos", value: "Atractivo", icon: Landmark },
  { label: "Experiencias", value: "Actividad", icon: Sparkles },
];

export function TourismSearch() {
  const router = useRouter();
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("");
  const submit = (event: FormEvent) => {
    event.preventDefault();
    const params = new URLSearchParams();
    if (query.trim()) params.set("q", query.trim());
    if (category) params.set("categoria", category);
    router.push(`/buscar${params.size ? `?${params.toString()}` : ""}`);
  };
  return (
    <form className="heroSearch" onSubmit={submit}>
      <div className="heroSearchBox">
        <Search size={22} />
        <label><span>¿Qué quieres descubrir?</span><input type="search" value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Busca lugares, sabores o experiencias…" /></label>
        <button type="submit">Buscar</button>
      </div>
      <div className="heroChips">
        {filters.map(({ label, value, icon: Icon }) => <button key={label} type="button" className={category === value ? "active" : ""} onClick={() => setCategory(value)}><Icon size={15} />{label}</button>)}
      </div>
    </form>
  );
}
