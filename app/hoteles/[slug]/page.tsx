import Link from "next/link";
import { notFound } from "next/navigation";
import { hotels } from "@/data/hotels";

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
  const hotel = hotels.find((item) => item.slug === params.slug);

  if (!hotel) {
    notFound();
  }

  const phone = hotel.phone?.replace(/\s+/g, "");

  return (
    <main className="hotelDetailPage">
      <nav className="hotelsNav container">
        <Link className="brand brandDark" href="/">
          <span>¿QUÉ ME DICEN</span>
          <strong>DE IXTLÁN?</strong>
        </Link>

        <Link href="/hoteles" className="backHotels">
          ← Todos los hoteles
        </Link>
      </nav>

      <section className="hotelDetailHero container">
        <div
          className="hotelDetailImage"
          style={{ backgroundImage: `url(${hotel.image})` }}
        />

        <div className="hotelDetailIntro">
          <p className="eyebrow dark">{hotel.type}</p>

          <h1>{hotel.name}</h1>

          <p className="hotelDetailAddress">
            {hotel.address}
            {hotel.neighborhood ? ` · ${hotel.neighborhood}` : ""}
            {" · "}Ixtlán del Río
          </p>

          <p className="hotelDetailDescription">{hotel.description}</p>

          <div className="hotelDetailActions">
            {hotel.phone && (
              <a href={`tel:+52${phone}`} className="primaryHotelAction">
                Llamar
              </a>
            )}

            <a
              href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                `${hotel.name}, ${hotel.address}, Ixtlán del Río, Nayarit`
              )}`}
              target="_blank"
              rel="noreferrer"
              className="secondaryHotelAction"
            >
              Cómo llegar
            </a>
          </div>
        </div>
      </section>

      <section className="hotelDetailContent container">
        <div>
          <p className="eyebrow dark">SERVICIOS</p>

          <div className="amenitiesGrid">
            {hotel.amenities.map((amenity) => (
              <div key={amenity} className="amenityItem">
                {amenity}
              </div>
            ))}
          </div>
        </div>

        <aside className="hotelContactCard">
          <p className="hotelContactLabel">Contacto</p>

          {hotel.phone && (
            <>
              <small>Teléfono</small>
              <a href={`tel:+52${phone}`}>{hotel.phone}</a>
            </>
          )}

          <small>Dirección</small>
          <p>
            {hotel.address}
            <br />
            {hotel.neighborhood}, Ixtlán del Río
            <br />
            Nayarit, México
          </p>

          {hotel.website && (
            <a
              href={hotel.website}
              target="_blank"
              rel="noreferrer"
              className="hotelWebsite"
            >
              Sitio web ↗
            </a>
          )}
        </aside>
      </section>
    </main>
  );
}
