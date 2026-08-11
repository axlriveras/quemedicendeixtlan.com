"use client";

import { useState } from "react";
import { ImageIcon } from "lucide-react";
import type { TourismRecord } from "@/data/tourism";
import { isPlaceholder } from "@/data/catalog";

export function RecordImage({ record, eager = false }: { record: TourismRecord; eager?: boolean }) {
  const [failed, setFailed] = useState(false);
  if (!record.image_url || failed) {
    return <div className="recordImageFallback"><ImageIcon size={26} /><span>Fotografía próximamente</span></div>;
  }
  return (
    <>
      <img src={record.image_url} alt={record.name} loading={eager ? "eager" : "lazy"} referrerPolicy="no-referrer" onError={() => setFailed(true)} />
      {isPlaceholder(record) && <span className="placeholderNote">Imagen de referencia</span>}
    </>
  );
}
