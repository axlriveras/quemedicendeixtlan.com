import Link from "next/link";
import { ArrowUpRight, MapPin } from "lucide-react";
import { formatPhone, type Hotel } from "@/data/hotels";

type HotelCardProps = {
  hotel: Hotel;
};

export function HotelCard({ hotel }: HotelCardProps) {
  const phone = formatPhone(hotel.phone_primary);

  return (
    <article className="modernHotelCard">
      <Link href={`/hoteles/${hotel.slug}`} className="modernHotelImage">
        {hotel.image_url ? (
          <img
            src={hotel.image_url}
            alt={hotel.name}
            loading="lazy"
            referrerPolicy="no-referrer"
          />
        ) : (
          <div className="hotelImagePlaceholder">
            <span>¿Qué me dicen de Ixtlán?</span>
          </div>
        )}

        <span className="modernHotelType">{hotel.subtype || "Hospedaje"}</span>

        {hotel.verification_level.startsWith("A") && (
          <span className="hotelVerificationBadge">Verificado</span>
        )}
      </Link>

      <div className="modernHotelBody">
        <div className="modernHotelLocation">
          <MapPin size={14} />
          <span>
            {hotel.neighborhood || hotel.locality}
          </span>
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

        {hotel.description && (
          <p className="hotelCardDescription">{hotel.description}</p>
        )}

        <div className="modernHotelFeatures">
          {hotel.tags
            .split(",")
            .map((tag) => tag.trim())
            .filter(Boolean)
            .slice(0, 3)
            .map((tag) => (
              <span key={tag}>{tag}</span>
            ))}
        </div>

        <div className="modernHotelContact">
          <span>{hotel.address}</span>

          {hotel.phone_primary && (
            <a href={`tel:+52${hotel.phone_primary}`}>
              {phone}
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
