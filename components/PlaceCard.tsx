import Link from "next/link";
import { ArrowUpRight, MapPin } from "lucide-react";
import { getRecordHref, getTags } from "@/data/catalog";
import type { TourismRecord } from "@/data/tourism";
import { RecordImage } from "@/components/RecordImage";

export function PlaceCard({ record, featured = false }: { record: TourismRecord; featured?: boolean }) {
  const tags = getTags(record).slice(0, 3);
  return (
    <article className={featured ? "placeCard featured" : "placeCard"}>
      <Link href={getRecordHref(record)} className="placeCardImage">
        <RecordImage record={record} />
        <span className="placeSubtype">{record.subtype || record.category}</span>
      </Link>
      <div className="placeCardBody">
        <div className="placeLocation"><MapPin size={13} /><span>{record.neighborhood || record.locality}</span></div>
        <div className="placeTitleRow">
          <Link href={getRecordHref(record)}><h3>{record.name}</h3></Link>
          <Link href={getRecordHref(record)} className="roundArrow" aria-label={`Ver ${record.name}`}><ArrowUpRight size={18} /></Link>
        </div>
        <p>{record.description}</p>
        {tags.length > 0 && <div className="tagRow">{tags.map((tag) => <span key={tag}>{tag}</span>)}</div>}
      </div>
    </article>
  );
}
