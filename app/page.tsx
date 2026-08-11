import Link from "next/link";
import { ArrowRight, BedDouble, Bus, Camera, MapPin, Route, Sparkles, Utensils } from "lucide-react";
import { TourismSearch } from "@/components/TourismSearch";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { PlaceCard } from "@/components/PlaceCard";
import { getRecordHref, getRecordsForSection } from "@/data/catalog";

const discovery = [
  { title: "Saborea Ixtlán", text: "Restaurantes y cocina local", href: "/restaurantes", image: "/images/plaza-ixtlan.jpg", icon: Utensils, color: "coral" },
  { title: "Descansa aquí", text: "Hospedajes para tu visita", href: "/hoteles", image: "/images/ixtlan-pueblo-magico.jpg", icon: BedDouble, color: "magenta" },
  { title: "Vive el destino", text: "Lugares y experiencias", href: "/experiencias", image: "/images/los-toriles.jpg", icon: Camera, color: "gold" },
];

export default function Home() {
  const toriles = getRecordsForSection("atractivos").find((item) => item.slug.includes("toriles"));
  const hotels = getRecordsForSection("hoteles").slice(0, 4);
  return (
    <>
      <SiteHeader />
      <main>
        <section className="homeHero">
          <div className="homeHeroPhoto" /><div className="homeHeroOverlay" />
          <div className="folkMarks folkMarksOne" aria-hidden="true"><i /><i /><i /></div>
          <div className="container homeHeroContent">
            <span className="eyebrow light">PUEBLO MÁGICO · NAYARIT</span>
            <h1>Hay lugares que<br /><em>se quedan contigo.</em></h1>
            <p>Ixtlán del Río te recibe entre historia, sabores, naturaleza y la calidez de su gente.</p>
            <TourismSearch />
          </div>
          <div className="heroCaption"><MapPin size={14} /> Ixtlán del Río, Nayarit</div>
        </section>

        <section className="discoverySection">
          <div className="container">
            <div className="sectionHeading"><div><span className="eyebrow">EMPIEZA A DESCUBRIR</span><h2>Tu viaje, a tu manera</h2></div><p>Elige cómo quieres vivir Ixtlán y encuentra el lugar perfecto para comenzar.</p></div>
            <div className="discoveryGrid">{discovery.map(({ title, text, href, image, icon: Icon, color }) => <Link href={href} className="discoveryCard" key={title}><img src={image} alt="" /><span className="discoveryShade" /><span className={`discoveryIcon ${color}`}><Icon size={22} /></span><div><small>{text}</small><h3>{title}</h3><span>Explorar <ArrowRight size={16} /></span></div></Link>)}</div>
          </div>
        </section>

        {toriles && <section className="torilesSection"><div className="container torilesFeature"><div className="torilesPhoto"><img src="/images/los-toriles.jpg" alt={toriles.name} /><span>Patrimonio de Ixtlán</span></div><div className="torilesContent"><span className="eyebrow">UN ENCUENTRO CON LA HISTORIA</span><h2>Los Toriles</h2><p>{toriles.description}</p><div className="torilesTags">{toriles.tags.split(",").slice(0, 3).map((tag) => <span key={tag}>{tag.trim()}</span>)}</div><Link href={getRecordHref(toriles)}>Conocer este lugar <ArrowRight size={17} /></Link><div className="folkFlower" aria-hidden="true">✦</div></div></div></section>}

        <section className="featuredSection"><div className="container"><div className="sectionHeading"><div><span className="eyebrow">QUÉDATE UN POCO MÁS</span><h2>Hospedajes destacados</h2></div><Link href="/hoteles">Ver todos <ArrowRight size={16} /></Link></div><div className="placeGrid homePlaces">{hotels.map((hotel) => <PlaceCard key={hotel.id} record={hotel} />)}</div></div></section>

        <section className="planningSection"><div className="container planningPanel"><div className="planningCopy"><span className="eyebrow light">PREPARA TU VISITA</span><h2>Planea el viaje.<br /><em>Disfruta el camino.</em></h2><p>Encuentra opciones útiles para llegar, moverte y aprovechar tu estancia en Ixtlán del Río.</p><Link href="/servicios">Comenzar a planear <ArrowRight size={17} /></Link></div><div className="planningLinks"><Link href="/atractivos"><MapPin size={23} /><span><strong>Qué conocer</strong><small>Lugares esenciales</small></span><ArrowRight size={18} /></Link><Link href="/transporte"><Bus size={23} /><span><strong>Cómo llegar</strong><small>Opciones de transporte</small></span><ArrowRight size={18} /></Link><Link href="/experiencias"><Sparkles size={23} /><span><strong>Qué hacer</strong><small>Experiencias locales</small></span><ArrowRight size={18} /></Link><Link href="/buscar"><Route size={23} /><span><strong>Explora todo</strong><small>Buscador del destino</small></span><ArrowRight size={18} /></Link></div></div></section>
      </main>
      <SiteFooter />
    </>
  );
}
