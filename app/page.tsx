import TourismSearch from "@/components/TourismSearch";
import { places } from "@/data/places";

const featured = places.filter((place) => place.featured);

export default function HomePage() {
  return (
    <main>
      <section className="hero">
        <nav className="nav container">
          <a className="brand" href="#top" aria-label="¿Qué me dicen de Ixtlán? Inicio">
            <span className="brand-mark">¿QUÉ ME DICEN</span>
            <span>DE IXTLÁN?</span>
          </a>
          <div className="nav-links">
            <a href="#descubre">Descubre</a>
            <a href="#planifica">Planea tu viaje</a>
            <a href="#servicios">Servicios</a>
          </div>
        </nav>

        <div id="top" className="hero-content container">
          <p className="kicker">Ixtlán del Río · Nayarit</p>
          <h1>¿Qué quieres descubrir hoy?</h1>
          <p className="hero-copy">
            Lugares, sabores, historias y experiencias para vivir Ixtlán del Río a tu manera.
          </p>
          <TourismSearch />
        </div>
        <div className="color-ribbon" aria-hidden>
          <span /><span /><span /><span /><span />
        </div>
      </section>

      <section id="descubre" className="section container">
        <div className="section-heading">
          <div>
            <p className="kicker dark">Empieza por aquí</p>
            <h2>Imperdibles de Ixtlán</h2>
          </div>
          <p>Una selección inicial que crecerá con información local verificada, prestadores y recomendaciones editoriales.</p>
        </div>
        <div className="featured-grid">
          {featured.map((place, index) => (
            <article className={`feature-card feature-${index + 1}`} key={place.id}>
              <div>
                <span className="eyebrow light">{place.category}</span>
                <h3>{place.name}</h3>
                <p>{place.description}</p>
              </div>
              <span className="arrow" aria-hidden>↗</span>
            </article>
          ))}
        </div>
      </section>

      <section id="planifica" className="planner-section">
        <div className="container planner-grid">
          <div>
            <p className="kicker dark">Planea tu visita</p>
            <h2>Todo lo que necesitas, en un solo lugar.</h2>
            <p className="large-copy">La plataforma está pensada para convertirse en el directorio turístico vivo de Ixtlán del Río.</p>
          </div>
          <div className="planner-list">
            <a href="#buscar"><strong>01</strong><span>Dónde comer</span><em>Restaurantes, cocina local y cafés</em></a>
            <a href="#buscar"><strong>02</strong><span>Dónde dormir</span><em>Hoteles y opciones de hospedaje</em></a>
            <a href="#buscar"><strong>03</strong><span>Qué hacer</span><em>Atractivos, cultura y naturaleza</em></a>
            <a href="#buscar"><strong>04</strong><span>Experiencias</span><em>Guías y prestadores turísticos</em></a>
          </div>
        </div>
      </section>

      <section id="servicios" className="section container callout">
        <div>
          <p className="kicker dark">Para el sector turístico</p>
          <h2>¿Tienes un negocio o servicio turístico?</h2>
          <p>Próximamente podrás solicitar la incorporación de tu establecimiento al directorio y mantener tu información actualizada.</p>
        </div>
        <a className="primary-button" href="mailto:turismo@quemedicendeixtlan.com">Quiero aparecer aquí</a>
      </section>

      <footer>
        <div className="container footer-grid">
          <div className="brand footer-brand"><span className="brand-mark">¿QUÉ ME DICEN</span><span>DE IXTLÁN?</span></div>
          <p>Una plataforma para descubrir Ixtlán del Río, Nayarit.</p>
          <p className="footer-note">MVP · Directorio e información en construcción.</p>
        </div>
      </footer>
    </main>
  );
}
