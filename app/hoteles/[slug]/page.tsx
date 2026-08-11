import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  ExternalLink,
  MapPin,
  Phone,
} from "lucide-react";
import {
  formatPhone,
  getHotelBySlug,
  hotels,
} from "@/data/hotels";
import { BrandLogo } from "@/components/BrandLogo";

type PageProps = {
  params: {
    slug: string;
  };
};

export function generateStaticParams() {
  return hotels.map((hotel) => ({
    slug: hotel.slug,
  }));
}

export default function HotelDetailPage({ params }: PageProps) {
  const hotel = getHotelBySlug(params.slug);

  if (!hotel) {
    notFound();
  }

  const phone = formatPhone(hotel.phone_primary);

  const tags = hotel.tags
    .split(",")
    .map((tag) => tag.trim())
    .filter(Boolean);

  return (
    <main>
      <header className="tourismHeader">
        <div className="container tourismNav">
          <BrandLogo />

          <nav>
            <Link href="/">Inicio</Link>
            <Link href="/hoteles">Hospedaje</Link>
            <Link href="/#descubre">Descubre</Link>
            <Link href="/#planea">Planea tu viaje</Link>
          </nav>

          <Link href="/hoteles" className="guideButton">
            <ArrowLeft size={15} />
            Hoteles
          </Link>
        </div>
      </header>

      <section className="hotelProfile">
        <div className="container">
          <div className="hotelProfileGrid">
            <div className="hotelProfileImage">
              {hotel.image_url ? (
                <img
                  src={hotel.image_url}
                  alt={hotel.name}
                  referrerPolicy="no-referrer"
                />
              ) : (
                <div className="hotelImagePlaceholder">
                  ¿Qué me dicen de Ixtlán?
                </div>
              )}
            </div>

            <div className="hotelProfileContent">
              <span className="sectionKicker">
                {hotel.subtype || "Hospedaje"}
              </span>

              <h1>{hotel.name}</h1>

              <div className="hotelProfileLocation">
                <MapPin size={17} />
                <span>
                  {hotel.address}
                  {hotel.neighborhood
                    ? ` · ${hotel.neighborhood}`
                    : ""}
                  {" · "}
                  Ixtlán del Río
                </span>
              </div>

              <p className="hotelProfileDescription">
                {hotel.description}
              </p>

              <div className="hotelProfileActions">
                {hotel.phone_primary && (
                  <a
                    href={`tel:+52${hotel.phone_primary}`}
                    className="primaryHotelButton"
                  >
                    <Phone size={17} />
                    {phone}
                  </a>
                )}

                {hotel.maps_search_url && (
                  <a
                    href={hotel.maps_search_url}
                    target="_blank"
                    rel="noreferrer"
                    className="secondaryHotelButton"
                  >
                    <MapPin size={17} />
                    Cómo llegar
                  </a>
                )}

                {hotel.website && (
                  <a
                    href={hotel.website}
                    target="_blank"
                    rel="noreferrer"
                    className="secondaryHotelButton"
                  >
                    <ExternalLink size={17} />
                    Sitio web
                  </a>
                )}
              </div>

              <div className="hotelProfileTags">
                {tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>

              <div className="hotelVerification">
                <small>Estado de la información</small>
                <strong>{hotel.verification_level}</strong>

                {hotel.needs_local_verification === "Sí" && (
                  <p>
                    Algunos datos están pendientes de confirmación local.
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
