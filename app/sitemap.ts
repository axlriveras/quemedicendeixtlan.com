import type { MetadataRoute } from "next";
import { getRecordHref, publishableRecords, sections } from "@/data/catalog";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://quemedicendeixtlan.com";
  return [
    { url: base, changeFrequency: "weekly", priority: 1 },
    { url: `${base}/buscar`, changeFrequency: "weekly", priority: .8 },
    ...sections.map((section) => ({ url: `${base}/${section.slug}`, changeFrequency: "weekly" as const, priority: .9 })),
    ...publishableRecords.map((record) => ({ url: `${base}${getRecordHref(record)}`, lastModified: record.last_researched ? new Date(record.last_researched) : undefined, changeFrequency: "monthly" as const, priority: .7 })),
  ];
}
