import { RecordDetailPage, recordMetadata } from "@/components/RecordDetailPage";
import { getRecordsForSection } from "@/data/catalog";
export function generateStaticParams() { return getRecordsForSection("experiencias").map(({ slug }) => ({ slug })); }
export function generateMetadata({ params }: { params: { slug: string } }) { return recordMetadata("experiencias", params.slug); }
export default function Page({ params }: { params: { slug: string } }) { return <RecordDetailPage sectionSlug="experiencias" slug={params.slug} />; }
