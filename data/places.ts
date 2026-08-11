export type PlaceCategory =
  | "Comer"
  | "Dormir"
  | "Qué hacer"
  | "Cultura"
  | "Naturaleza"
  | "Servicios";

export type Place = {
  id: string;
  name: string;
  category: PlaceCategory;
  description: string;
  location: string;
  tags: string[];
  featured?: boolean;
};

export const places: Place[] = [
  {
    id: "los-toriles",
    name: "Zona Arqueológica Los Toriles",
    category: "Cultura",
    description: "Uno de los referentes patrimoniales de Ixtlán del Río y una visita esencial para conocer su pasado prehispánico.",
    location: "Ixtlán del Río, Nayarit",
    tags: ["arqueología", "historia", "patrimonio", "familia"],
    featured: true
  },
  {
    id: "centro-historico",
    name: "Centro de Ixtlán del Río",
    category: "Qué hacer",
    description: "Recorre el corazón de Ixtlán, su plaza, calles, arquitectura y vida cotidiana.",
    location: "Centro, Ixtlán del Río",
    tags: ["centro", "arquitectura", "caminar", "fotografía"],
    featured: true
  },
  {
    id: "gastronomia-local",
    name: "Sabores de Ixtlán",
    category: "Comer",
    description: "Una selección editorial para descubrir cocina local, antojitos, restaurantes y cafeterías.",
    location: "Ixtlán del Río, Nayarit",
    tags: ["comida", "restaurantes", "café", "gastronomía"],
    featured: true
  },
  {
    id: "hospedaje-local",
    name: "Hospedaje en Ixtlán",
    category: "Dormir",
    description: "Encuentra opciones para descansar y convertir tu visita en una escapada de fin de semana.",
    location: "Ixtlán del Río, Nayarit",
    tags: ["hotel", "hospedaje", "habitaciones", "viaje"]
  },
  {
    id: "experiencias-locales",
    name: "Experiencias locales",
    category: "Servicios",
    description: "Prestadores turísticos, recorridos, actividades y servicios para conocer el destino de otra manera.",
    location: "Ixtlán del Río, Nayarit",
    tags: ["guías", "tours", "experiencias", "servicios"]
  },
  {
    id: "naturaleza-ixtlan",
    name: "Naturaleza alrededor de Ixtlán",
    category: "Naturaleza",
    description: "Ideas para explorar paisajes y espacios naturales de la región con información verificada.",
    location: "Municipio de Ixtlán del Río",
    tags: ["naturaleza", "senderismo", "paisaje", "aire libre"]
  }
];

export const categories: PlaceCategory[] = [
  "Comer",
  "Dormir",
  "Qué hacer",
  "Cultura",
  "Naturaleza",
  "Servicios"
];
