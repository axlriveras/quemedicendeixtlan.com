# ¿Qué me dicen de Ixtlán?

Plataforma turística digital de Ixtlán del Río, Nayarit. El buscador es la experiencia principal para descubrir qué hacer, dónde comer, dónde hospedarse, atractivos, experiencias y prestadores de servicios turísticos.

## Stack

- Next.js 14 (App Router)
- React 18
- TypeScript
- CSS nativo responsive

## Desarrollo local

```bash
npm install
npm run dev
```

Abre `http://localhost:3000`.

## Build de producción

```bash
npm run build
npm start
```

## Arquitectura del MVP

- `app/`: páginas, layout, estilos y metadata SEO.
- `components/TourismSearch.tsx`: búsqueda y filtros del directorio.
- `data/places.ts`: modelo y contenido semilla del directorio.

## Próximas integraciones

La estructura está preparada para sustituir el contenido semilla por una fuente persistente. La propuesta es usar una base propia como fuente oficial y complementar datos externos cuando sea necesario.

- Supabase / PostgreSQL para lugares, prestadores, eventos y contenido editorial.
- Google Maps / Places para mapas y enriquecimiento de ubicaciones.
- Panel de administración para revisión y verificación de establecimientos.
- Fichas individuales indexables para SEO.
- Agenda turística y rutas/itinerarios.

## Principio de producto

No se plantea como una página institucional del Ayuntamiento, sino como un producto digital de destino: útil para visitantes, fácil de mantener y escalable como directorio turístico de Ixtlán del Río.
