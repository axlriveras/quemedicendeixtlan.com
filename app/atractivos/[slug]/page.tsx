import { RecordDetailPage, recordMetadata } from "@/components/RecordDetailPage";
import { getRecordsForSection } from "@/data/catalog";
export function generateStaticParams() { return getRecordsForSection("atractivos").map(({ slug }) => ({ slug })); }
export function generateMetadata({ params }: { params: { slug: string } }) { return recordMetadata("atractivos", params.slug); }
export default function Page({ params }: { params: { slug: string } }) { return <RecordDetailPage sectionSlug="atractivos" slug={params.slug} />; }
