import { RecordDetailPage, recordMetadata } from "@/components/RecordDetailPage";
import { getRecordsForSection } from "@/data/catalog";
export function generateStaticParams() { return getRecordsForSection("transporte").map(({ slug }) => ({ slug })); }
export function generateMetadata({ params }: { params: { slug: string } }) { return recordMetadata("transporte", params.slug); }
export default function Page({ params }: { params: { slug: string } }) { return <RecordDetailPage sectionSlug="transporte" slug={params.slug} />; }
