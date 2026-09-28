import { NewDetails } from "@/app/features/news/details/new-details";

type NewsDetailPageProps = PageProps<"/news/[id]">;

export default async function NewsDetailPage({ params }: NewsDetailPageProps) {
  const { id } = await params;

  return <NewDetails articleId={id} />;
}
