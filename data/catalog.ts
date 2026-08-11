import { tourismRecords, type TourismRecord } from "@/data/tourism";

export type SectionSlug =
  | "hoteles"
  | "restaurantes"
  | "atractivos"
  | "experiencias"
  | "servicios"
  | "transporte";

export type SectionConfig = {
  slug: SectionSlug;
  category: TourismRecord["category"];
  navLabel: string;
  eyebrow: string;
  title: string;
  description: string;
};

export const sections: SectionConfig[] = [
  { slug: "hoteles", category: "Hospedaje", navLabel: "Hospedaje", eyebrow: "DÓNDE DORMIR", title: "Haz una pausa en Ixtlán", description: "Encuentra hospedaje para descansar y recorrer Ixtlán del Río a tu ritmo." },
  { slug: "restaurantes", category: "Gastronomía", navLabel: "Sabores", eyebrow: "DÓNDE COMER", title: "Sabores para recordar", description: "Explora restaurantes, cocinas locales y opciones para compartir la mesa." },
  { slug: "atractivos", category: "Atractivo", navLabel: "Lugares", eyebrow: "QUÉ CONOCER", title: "Historias que siguen vivas", description: "Conoce el patrimonio, los paisajes y los rincones esenciales de Ixtlán del Río." },
  { slug: "experiencias", category: "Actividad", navLabel: "Experiencias", eyebrow: "QUÉ HACER", title: "Vive Ixtlán de cerca", description: "Actividades, tradiciones y experiencias para conectar con el destino." },
  { slug: "servicios", category: "Servicio turístico", navLabel: "Servicios", eyebrow: "VIAJA CON CONFIANZA", title: "Servicios para tu visita", description: "Prestadores e información útil para acompañarte antes y durante el viaje." },
  { slug: "transporte", category: "Transporte", navLabel: "Cómo llegar", eyebrow: "MUÉVETE POR IXTLÁN", title: "Tu camino empieza aquí", description: "Consulta opciones de transporte para llegar y desplazarte en Ixtlán del Río." },
];

export const publishableRecords = tourismRecords.filter(
  (record) => record.publish_ready === "Sí" || record.publish_ready === "Condicional",
);

export function getSection(slug: string) {
  return sections.find((section) => section.slug === slug);
}

export function getSectionByCategory(category: string) {
  return sections.find((section) => section.category === category);
}

export function getRecordsForSection(slug: string) {
  const section = getSection(slug);
  return section
    ? publishableRecords.filter((record) => record.category === section.category)
    : [];
}

export function getRecord(sectionSlug: string, recordSlug: string) {
  return getRecordsForSection(sectionSlug).find((record) => record.slug === recordSlug);
}

export function getRecordHref(record: TourismRecord) {
  const section = getSectionByCategory(record.category);
  return section ? `/${section.slug}/${record.slug}` : "/";
}

export function getTags(record: TourismRecord) {
  return record.tags.split(",").map((tag) => tag.trim()).filter(Boolean);
}

export function formatPhone(phone: string) {
  const digits = phone.replace(/\D/g, "");
  return digits.length === 10
    ? `${digits.slice(0, 3)} ${digits.slice(3, 6)} ${digits.slice(6)}`
    : phone;
}

export function isPlaceholder(record: TourismRecord) {
  return record.image_kind === "generic_placeholder";
}
