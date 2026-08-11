import Link from "next/link";
import { ArrowUpRight, MapPin } from "lucide-react";
import type { Hotel } from "@/data/hotels";

type HotelCardProps = {
  hotel: Hotel;
};

export function HotelCard({ hotel }: HotelCardProps) {
  return (
    <article className="modernHotelCard">
      <Link href={`/hoteles/${hotel.slug}`} className="modernHotelImage">
        <img src={hotel.image} alt={hotel.name} />

        <span className="modernHotelType">{hotel.type}</span>
      </Link>

      <div className="modernHotelBody">
        <div className="modernHotelLocation">
          <MapPin size={14} />
          {hotel.neighborhood || "Ixtlán del Río"}
        </div>

        <div className="modernHotelTitleRow">
          <Link href={`/hoteles/${hotel.slug}`}>
            <h3>{hotel.name}</h3>
          </Link>

          <Link
            href={`/hoteles/${hotel.slug}`}
            className="modernHotelArrow"
            aria-label={`Ver ${hotel.name}`}
          >
            <ArrowUpRight size={18} />
          </Link>
        </div>

        <div className="modernHotelFeatures">
          {hotel.amenities.slice(0, 3).map((amenity) => (
            <span key={amenity}>{amenity}</span>
          ))}
        </div>

        <div className="modernHotelContact">
          <span>{hotel.address}</span>
          {hotel.phone && <a href={`tel:${hotel.phone}`}>{hotel.phone}</a>}
        </div>
      </div>
    </article>
  );
}
