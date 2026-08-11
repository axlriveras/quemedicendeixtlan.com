import { RecordDetailPage, recordMetadata } from "@/components/RecordDetailPage";
import { getRecordsForSection } from "@/data/catalog";
export function generateStaticParams() { return getRecordsForSection("hoteles").map(({ slug }) => ({ slug })); }
export function generateMetadata({ params }: { params: { slug: string } }) { return recordMetadata("hoteles", params.slug); }
export default function Page({ params }: { params: { slug: string } }) { return <RecordDetailPage sectionSlug="hoteles" slug={params.slug} />; }
