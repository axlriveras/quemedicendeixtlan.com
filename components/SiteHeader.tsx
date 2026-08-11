"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, Search, X } from "lucide-react";
import { useState } from "react";
import { BrandLogo } from "@/components/BrandLogo";
import { sections } from "@/data/catalog";

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="siteHeader">
      <div className="container siteHeaderInner">
        <BrandLogo />
        <nav className={open ? "mainNav isOpen" : "mainNav"} aria-label="Navegación principal">
          {sections.slice(0, 4).map((section) => (
            <Link key={section.slug} href={`/${section.slug}`} className={pathname.startsWith(`/${section.slug}`) ? "active" : ""} onClick={() => setOpen(false)}>
              {section.navLabel}
            </Link>
          ))}
          <div className="mobileNavExtras">
            {sections.slice(4).map((section) => <Link key={section.slug} href={`/${section.slug}`} onClick={() => setOpen(false)}>{section.navLabel}</Link>)}
          </div>
        </nav>
        <div className="headerActions">
          <Link href="/buscar" className="headerSearch" aria-label="Buscar"><Search size={18} /><span>Buscar</span></Link>
          <Link href="/servicios" className="headerCta">Planea tu viaje</Link>
          <button className="menuButton" type="button" aria-label={open ? "Cerrar menú" : "Abrir menú"} aria-expanded={open} onClick={() => setOpen(!open)}>
            {open ? <X size={23} /> : <Menu size={23} />}
          </button>
        </div>
      </div>
    </header>
  );
}
