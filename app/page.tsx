import Link from "next/link";
import {
  ArrowRight,
  BedDouble,
  CalendarDays,
  Camera,
  Heart,
  Map,
  MapPin,
  Route,
  Utensils,
} from "lucide-react";
import { BrandLogo } from "@/components/BrandLogo";
import { TourismSearch } from "@/components/TourismSearch";
import { featuredHotels } from "@/data/hotels";

const experiences = [
  {
    title: "Dónde comer",
    subtitle: "Sabores que enamoran",
    href: "#",
    image: "/images/plaza-ixtlan.jpg",
    icon: Utensils,
  },
  {
    title: "Dónde dormir",
    subtitle: "Descansa y recarga energías",
    href: "/hoteles",
    image: "/images/ixtlan-pueblo-magico.jpg",
    icon: BedDouble,
  },
  {
    title: "Qué hacer",
    subtitle: "Vive experiencias únicas",
    href: "#imperdibles",
    image: "/images/los-toriles.jpg",
    icon: Camera,
  },
];

export default function Home() {
  const hotels = featuredHotels.slice(0, 4);

  return (
    <main>
      <header className="tourismHeader">
        <div className="container tourismNav">
          <BrandLogo />

          <nav>
            <a href="#descubre">Descubre</a>
            <Link href="/hoteles">Hospedaje</Link>
            <a href="#imperdibles">Qué hacer</a>
            <a href="#planea">Planea tu viaje</a>
          </nav>

          <div className="navTools">
            <button type="button" aria-label="Favoritos">
              <Heart size={19} />
              <span>Favoritos</span>
            </button>

            <a href="#planea" className="guideButton">
              Guía de viaje
            </a>
          </div>
        </div>
      </header>

      <section className="tourismHero">
        <div className="heroPhoto" />

        <div className="heroWash" />

        <div className="heroDecoration heroDecorationLeft">
          <span className="leaf leafOne" />
          <span className="leaf leafTwo" />
          <span className="flowerDot flowerPink" />
          <span className="flowerDot flowerGold" />
        </div>

        <div className="heroDecoration heroDecorationRight">
          <span className="leaf leafThree" />
          <span className="flowerDot flowerCoral" />
        </div>

        <div className="container tourismHeroContent">
          <div className="tourismHeroCopy">
            <span className="puebloLabel">PUEBLO MÁGICO · NAYARIT</span>

            <h1>
              Ixtlán del Río,
              <br />
              <em>Nayarit te espera</em>
            </h1>

            <p>
              Historia, tradición, naturaleza y la calidez de su gente.
              Descubre una manera diferente de vivir Ixtlán.
            </p>
          </div>

          <TourismSearch />
        </div>
      </section>

      <section className="experienceSection" id="descubre">
        <div className="container">
          <div className="experienceGrid">
            {experiences.map(({ title, subtitle, href, image, icon: Icon }) => (
              <Link href={href} className="experienceCard" key={title}>
                <img src={image} alt="" />

                <div className="experienceShade" />

                <div className="experienceCardContent">
                  <div className="experienceIcon">
                    <Icon size={21} />
                  </div>

                  <div>
                    <h2>{title}</h2>
                    <p>{subtitle}</p>
                  </div>

                  <span className="experienceArrow">
                    <ArrowRight size={17} />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="torilesSection" id="imperdibles">
        <div className="container torilesCard">
          <div className="torilesImage">
            <img src="/images/los-toriles.jpg" alt="Los Toriles, Ixtlán del Río" />
          </div>

          <div className="torilesCopy">
            <span className="accentLabel">
              <span>✦</span>
              Imperdible en Ixtlán
            </span>

            <h2>Los Toriles</h2>

            <p>
              Un encuentro con la historia de Ixtlán del Río. Descubre el
              legado arqueológico y cultural de uno de los sitios más
              importantes del occidente de México.
            </p>

            <a href="#">
              Conocer más
              <ArrowRight size={16} />
            </a>

            <div className="torilesPattern" aria-hidden="true">
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
            </div>
          </div>
        </div>
      </section>

      <section className="featuredHotelsSection">
        <div className="container">
          <div className="compactSectionHeader">
            <div>
              <BedDouble size={21} />
              <h2>Hospedajes destacados</h2>
            </div>

            <Link href="/hoteles">
              Ver todos los hoteles
              <ArrowRight size={15} />
            </Link>
          </div>

          <div className="homeHotelGrid">
            {hotels.map((hotel) => (
              <Link
                href={`/hoteles/${hotel.slug}`}
                className="homeHotelCard"
                key={hotel.id}
              >
                <div className="homeHotelImage">
                  <img src={hotel.image_url} alt={hotel.name} />
                  <button type="button" aria-label="Agregar a favoritos">
                    <Heart size={16} />
                  </button>
                </div>

                <div className="homeHotelInfo">
                  <h3>{hotel.name}</h3>

                  <p>
                    <MapPin size={12} />
                    {hotel.neighborhood || "Ixtlán del Río"}
                  </p>

                  <div className="hotelMiniFooter">
                    <span>{hotel.subtype}</span>
                    <strong>Ver hotel →</strong>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="planningSection" id="planea">
        <div className="container planningCard">
          <div className="planningIllustration" aria-hidden="true">
            <div className="planningSun" />
            <div className="planningLeaves">
              <span />
              <span />
              <span />
            </div>
          </div>

          <div className="planningCopy">
            <span className="accentLabel">Prepárate para tu aventura</span>

            <h2>Planea tu viaje a Ixtlán del Río</h2>

            <p>
              Encuentra recomendaciones y todo lo necesario para vivir una
              experiencia inolvidable.
            </p>
          </div>

          <div className="planningTools">
            <div>
              <Map size={23} />
              <strong>Mapa</strong>
              <span>Explora lugares</span>
            </div>

            <div>
              <Route size={23} />
              <strong>Itinerarios</strong>
              <span>Rutas sugeridas</span>
            </div>

            <div>
              <CalendarDays size={23} />
              <strong>Agenda</strong>
              <span>Qué está pasando</span>
            </div>
          </div>

          <a href="#" className="planningButton">
            Comenzar a planear
            <ArrowRight size={17} />
          </a>
        </div>
      </section>

      <footer className="tourismFooter">
        <div className="container">
          <BrandLogo />

          <p>Ixtlán del Río · Nayarit · México</p>
        </div>
      </footer>
    </main>
  );
}
