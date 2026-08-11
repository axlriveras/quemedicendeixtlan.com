import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, Clock3, ExternalLink, Globe2, MapPin, Phone, ShieldCheck } from "lucide-react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { RecordImage } from "@/components/RecordImage";
import { PlaceCard } from "@/components/PlaceCard";
import { formatPhone, getRecord, getRecordsForSection, getSection, getTags } from "@/data/catalog";

export function recordMetadata(sectionSlug: string, slug: string): Metadata {
  const record = getRecord(sectionSlug, slug);
  return record ? { title: `${record.name} | ¿Qué me dicen de Ixtlán?`, description: record.description } : {};
}

export function RecordDetailPage({ sectionSlug, slug }: { sectionSlug: string; slug: string }) {
  const section = getSection(sectionSlug);
  const record = getRecord(sectionSlug, slug);
  if (!section || !record) notFound();
  const tags = getTags(record);
  const related = getRecordsForSection(sectionSlug).filter((item) => item.id !== record.id).slice(0, 3);
  return (
    <>
      <SiteHeader />
      <main>
        <section className="detailHero">
          <div className="container detailBreadcrumbs"><Link href={`/${section.slug}`}><ArrowLeft size={15} /> Volver a {section.navLabel.toLocaleLowerCase("es")}</Link></div>
          <div className="container detailGrid">
            <div className="detailImage"><RecordImage record={record} eager /></div>
            <div className="detailIntro">
              <span className="eyebrow">{record.category} · {record.subtype}</span>
              <h1>{record.name}</h1>
              {(record.address || record.locality) && <p className="detailLocation"><MapPin size={17} /> {[record.address, record.neighborhood, record.locality].filter(Boolean).join(" · ")}</p>}
              <p className="detailDescription">{record.description}</p>
              <div className="detailActions">
                {record.maps_search_url && <a className="button primary" href={record.maps_search_url} target="_blank" rel="noreferrer"><MapPin size={17} /> Cómo llegar</a>}
                {record.phone_primary && <a className="button secondary" href={`tel:+52${record.phone_primary}`}><Phone size={17} /> {formatPhone(record.phone_primary)}</a>}
                {record.website && <a className="button secondary" href={record.website} target="_blank" rel="noreferrer"><Globe2 size={17} /> Sitio web</a>}
              </div>
            </div>
          </div>
        </section>
        <section className="detailInfoSection">
          <div className="container detailInfoGrid">
            <div className="detailMain">
              <span className="eyebrow">INFORMACIÓN PARA TU VISITA</span>
              <h2>Todo lo que necesitas saber</h2>
              {tags.length > 0 && <div className="detailTags">{tags.map((tag) => <span key={tag}>{tag}</span>)}</div>}
              <div className="detailFacts">
                {record.hours && <div><Clock3 size={20} /><span>Horario</span><strong>{record.hours}</strong></div>}
                {record.phone_primary && <div><Phone size={20} /><span>Contacto</span><strong>{formatPhone(record.phone_primary)}</strong></div>}
                {record.website && <div><ExternalLink size={20} /><span>En línea</span><a href={record.website} target="_blank" rel="noreferrer">Visitar sitio web</a></div>}
              </div>
            </div>
            <aside className="verificationCard">
              <ShieldCheck size={25} />
              <span>Estado de la información</span>
              <strong>{record.verification_level}</strong>
              <p>{record.needs_local_verification === "Sí" ? "Algunos datos están pendientes de confirmación local. Te sugerimos contactar al prestador antes de tu visita." : "La información fue contrastada con la fuente indicada en el catálogo turístico."}</p>
              {record.source_primary && <a href={record.source_primary} target="_blank" rel="noreferrer">Consultar fuente <ArrowRight size={14} /></a>}
            </aside>
          </div>
        </section>
        {related.length > 0 && <section className="relatedSection"><div className="container"><div className="sectionHeading"><div><span className="eyebrow">CERCA DE TU PRÓXIMA HISTORIA</span><h2>También puede interesarte</h2></div><Link href={`/${section.slug}`}>Ver todo <ArrowRight size={16} /></Link></div><div className="placeGrid relatedGrid">{related.map((item) => <PlaceCard key={item.id} record={item} />)}</div></div></section>}
      </main>
      <SiteFooter />
    </>
  );
}
