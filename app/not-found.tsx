import Link from "next/link";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
export default function NotFound() { return <><SiteHeader /><main className="errorPage"><div className="container errorPageInner"><span className="errorCode">ERROR 404</span><h1>Este camino no aparece en el mapa</h1><p>La página que buscas cambió de lugar o todavía no forma parte de nuestra guía.</p><Link href="/">Volver al inicio</Link></div></main><SiteFooter /></>; }
