import { RecordDetailPage, recordMetadata } from "@/components/RecordDetailPage";
import { getRecordsForSection } from "@/data/catalog";
export function generateStaticParams() { return getRecordsForSection("servicios").map(({ slug }) => ({ slug })); }
export function generateMetadata({ params }: { params: { slug: string } }) { return recordMetadata("servicios", params.slug); }
export default function Page({ params }: { params: { slug: string } }) { return <RecordDetailPage sectionSlug="servicios" slug={params.slug} />; }
