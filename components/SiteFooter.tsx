import Link from "next/link";
import { ArrowUpRight, MapPin } from "lucide-react";
import { BrandLogo } from "@/components/BrandLogo";
import { sections } from "@/data/catalog";

export function SiteFooter() {
  return (
    <footer className="siteFooter">
      <div className="container footerGrid">
        <div className="footerBrand">
          <BrandLogo />
          <p>Una guía para descubrir, saborear y vivir Ixtlán del Río, Nayarit.</p>
          <span><MapPin size={15} /> Ixtlán del Río · Nayarit · México</span>
        </div>
        <div className="footerLinks">
          <strong>Explora</strong>
          {sections.slice(0, 4).map((section) => <Link key={section.slug} href={`/${section.slug}`}>{section.navLabel}</Link>)}
        </div>
        <div className="footerLinks">
          <strong>Planea</strong>
          {sections.slice(4).map((section) => <Link key={section.slug} href={`/${section.slug}`}>{section.navLabel}</Link>)}
          <Link href="/buscar">Buscador global</Link>
        </div>
        <Link className="footerExplore" href="/atractivos">Descubre el destino <ArrowUpRight size={19} /></Link>
      </div>
      <div className="container footerBottom"><span>Portal turístico de Ixtlán del Río</span><span>Información sujeta a verificación con cada prestador.</span></div>
    </footer>
  );
}
