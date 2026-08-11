import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { notFound } from "next/navigation";
import { DirectoryExplorer } from "@/components/DirectoryExplorer";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { getRecordsForSection, getSection } from "@/data/catalog";

export function DirectoryPage({ sectionSlug }: { sectionSlug: string }) {
  const section = getSection(sectionSlug);
  if (!section) notFound();
  const records = getRecordsForSection(sectionSlug);
  const noun = section.slug === "hoteles" ? "hospedaje" : section.slug === "restaurantes" ? "restaurantes" : section.navLabel.toLocaleLowerCase("es");
  return (
    <>
      <SiteHeader />
      <main>
        <section className={`directoryHero directoryHero--${section.slug}`}>
          <div className="directoryHeroImage" />
          <div className="directoryHeroOverlay" />
          <div className="container directoryHeroContent">
            <div className="breadcrumbs"><Link href="/">Inicio</Link><span>·</span><span>{section.navLabel}</span></div>
            <span className="eyebrow light">{section.eyebrow}</span>
            <h1>{section.title}</h1>
            <p>{section.description}</p>
          </div>
        </section>
        <section className="directorySection">
          <div className="container"><DirectoryExplorer records={records} noun={noun} /></div>
        </section>
        <section className="discoveryBand">
          <div className="container discoveryBandInner">
            <div><span className="eyebrow light">SIGUE EXPLORANDO</span><h2>Hay más Ixtlán por descubrir</h2></div>
            <Link href="/buscar">Explorar todo <ArrowRight size={18} /></Link>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
