import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { HotelDirectory } from "@/components/HotelDirectory";

export const metadata = {
  title: "Hoteles en Ixtlán del Río | ¿Qué me dicen de Ixtlán?",
  description:
    "Encuentra hoteles y opciones de hospedaje en Ixtlán del Río, Nayarit.",
};

export default function HotelsPage() {
  return (
    <main>
      <header className="siteHeader">
        <div className="siteNav container">
          <Link href="/" className="siteLogo">
            <span>¿QUÉ ME DICEN</span>
            <strong>DE IXTLÁN?</strong>
          </Link>

          <nav className="desktopNavigation">
            <Link href="/">Inicio</Link>
            <Link href="/hoteles" className="active">
              Hospedaje
            </Link>
            <Link href="/#descubre">Descubre</Link>
            <Link href="/#planea">Planea tu viaje</Link>
          </nav>

          <Link href="/" className="navAction">
            <ArrowLeft size={16} />
            Inicio
          </Link>
        </div>
      </header>

      <section className="modernHotelsHeader">
        <div className="container">
          <div className="hotelBreadcrumb">
            <Link href="/">Inicio</Link>
            <span>/</span>
            <span>Hospedaje</span>
          </div>

          <div className="modernHotelsTitle">
            <div>
              <span className="sectionKicker">DÓNDE DORMIR</span>
              <h1>Hospedaje en Ixtlán.</h1>
            </div>

            <p>
              Encuentra un lugar para descansar y disfruta Ixtlán del Río a tu
              ritmo.
            </p>
          </div>
        </div>
      </section>

      <section className="modernHotelsDirectory">
        <div className="container">
          <HotelDirectory />
        </div>
      </section>

      <section className="providerCTA">
        <div className="container providerCTAInner">
          <div>
            <span className="sectionKicker sectionKickerLight">
              PRESTADORES TURÍSTICOS
            </span>
            <h2>¿Tienes un hotel en Ixtlán?</h2>
          </div>

          <a href="#">
            Solicitar actualización
            <ArrowRight size={18} />
          </a>
        </div>
      </section>

      <footer className="modernFooter">
        <div className="container modernFooterInner">
          <Link href="/" className="siteLogo">
            <span>¿QUÉ ME DICEN</span>
            <strong>DE IXTLÁN?</strong>
          </Link>

          <p>Ixtlán del Río · Nayarit · México</p>
        </div>
      </footer>
    </main>
  );
}
